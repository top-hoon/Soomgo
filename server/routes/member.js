const express = require('express');

const Member = require('../models/member');
const crypto = require("crypto");
const cookieParser = require('cookie-parser');
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const {verifyToken} = require("./jwtcheck");
const {ne} = require("nunjucks/src/tests");
const router = express.Router();
router.use(cookieParser());




router.post('/regist', async (req,res,next)=>{
    try {
        const Salt = crypto.randomBytes(64).toString('base64');
        const {mem_name, email, mem_password, hp, gender, sms_flag, gosu_idx, mem_site}  =req.body;
        const exist = await Member.findOne({
            where:{email:req.body.email},
        });
        if(exist){
            return res.status(403).send("사용중인 아이디 입니다.");
        }
        const hashedPassword = crypto.createHash("sha512").update(mem_password + Salt).digest('base64');
        await Member.create({mem_name, email, mem_password: hashedPassword, hp, gender, salt : Salt});
        res.status(200).json("1");
    }catch (err){
        console.log(err);
        next(err);
    }
});


router.post('/login', async (req,res,next)=>{
  try {
      const {email, mem_password} = req.body;
      const exist = await Member.findOne({
          where: {email: email},
          paranoid: false,
      });
      if (!exist) {
          console.log(exist)
          return res.status(403).send("아이디가 존재하지않습니다.");
      } else {
          const pass = crypto.createHash("sha512").update(mem_password + exist.salt).digest('base64');
          if (pass == exist.mem_password) {
              const token = jwt.sign({
                  type: 'JWT',
                  email: exist.email,
                  name: exist.mem_name,
                  id: exist.id,
                  gosu_id: exist.gosu_id,
                  isMember: true
                  // exp = datetime.utcnow() + timedelta(hours = 9)
              }, process.env.SECRET_KEY, {
                  expiresIn: '25m',
                  issuer: '관리자',
              });
              const refreshToken = jwt.sign({
                  type: 'refreshJWT',
                  email: exist.email,
                  name: exist.mem_name,
                  id: exist.id,
                  gosu_id: exist.gosu_id,
                  isMember: true
              }, process.env.SECRET_KEY, {
                  expiresIn: '1d',
                  issuer: '관리자',
              });
              // 쿠키로 보내기
              res.cookie('JWT', token, {maxAge: 1800000, httpOnly: true})
              res.cookie('refreshJWT', refreshToken, {maxAge: 80000000, httpOnly: true})
                  .status(200).json({
                  code: 200,
                  message: '토큰이 발급되었습니다.',
                  id: exist.id,
                  gosu_id: exist.gosu_id,
                  Token: token,
                  RefreshToken: refreshToken,
              });
          } else {
              console.log("비밀번호를 확인해주세요");
              res.end();
          }
      }
  }catch (err){
      console.error(err);
      next(err);
  }
});
router.get('/logout', verifyToken, (req, res) => {
    res.clearCookie('JWT');
    console.log("로그아웃완료");
    res.end();
});

// 개인정보. 나중에 exclude 해주기
router.get('/account-info', verifyToken, async(req,res,next)=>{
    try {
        const result = await Member.findAll({
            where:{id:req.id}
        });
        res.json(result)
    }catch (err){
        console.log(err)
        next(err);
    }
})

// 마이페이지 /mypage/account-info/settings/name
router.get('/account-info/settings/name', verifyToken, async (req,res,next)=>{
    try {
        const result = await Member.findOne({
            attributes:['mem_name'],
            where:{id:req.id},
            paranoid: false,
        })
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})

module.exports = router;