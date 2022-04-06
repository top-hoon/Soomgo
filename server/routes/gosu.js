const express = require('express');
const Gosu = require('../models/gosu');
const Member = require('../models/member');
const crypto = require("crypto");
const { Op } = require("sequelize");
const { sequelize } = require("sequelize");
const jwt = require("jsonwebtoken");
const {verifyToken} = require("./jwtcheck");
const router = express.Router();


router.post('/regist', verifyToken, async (req,res,next)=>{
    try {
         const result = await sequelize.transaction(async (t) => {
             const {cate1_idx, cate2_idx, cate3_idx, gosu_name, my_place, distance, gender, hp} = req.body;
             const [results, created] = await Gosu.findOrCreate({
                 where: {mem_id: req.id},
                 defaults: {my_place, distance, gender, hp, gosu_name}
             }, {transaction: t});
             const result = results && results[0] ? results[0] : created;
             res.status(200).json(result);
         });
    }catch (err){
        console.log(err);
        next(err);
    }
});


router.post('/login', async (req,res,next)=>{
  try {
      const {email, mem_password} = req.body;
      const exist = await Gosu.findAll({
          attributes:['id','mem_id'],
          include:[
              {model:Member, attributes:['id', 'email','salt', 'mem_password', 'mem_name'],
              // where:{email:email},
              },
          ],
          where:{'"Member"."email"':email,id:'"Gosu"."mem_id"'}
      });
      console.log(exist)
      if (!exist) {
          console.log(exist)
          return res.status(403).send("아이디가 존재하지않습니다.");
      } else {
          const pass = crypto.createHash("sha512").update(mem_password + exist.salt).digest('base64');
          if (pass === exist.mem_password) {
              const token = jwt.sign({
                  type: 'JWT',
                  email: exist.email,
                  name: exist.mem_name,
                  id: exist.id,
                  gosu_id: exist.gosu_id,
                  isMember: false
              }, process.env.SECRET_KEY, {
                  expiresIn: '25m',
                  issuer: '관리자',
              });
              const refreshToken = jwt.sign({
                  type: 'refreshJWT',
                  email: exist.email,
                  name: exist.mem_name,
                  id: exist.id,
                  mem_id: exist.mem_id,
                  isMember: false
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
                  mem_id: exist.mem_id,
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
        res.status(200).json(result);
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
        })
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})

//마이페이지 수정
router.patch('/account-info/settings/edit',verifyToken, async (req,res,next)=>{
    try {
        const {mem_name, gender, email} = req.body;
        const result = await Member.update(
            {
                mem_name, gender, email,
            },
            {
                where:{id:req.id},
            });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
});

// 마이페이지 /mypage/account-info/settings/name
router.get('/account-info/settings/email', verifyToken, async (req,res,next)=>{
    try {
        const result = await Member.findOne({
            attributes:['email'],
            where:{id:req.id},
        })
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})

// 비밀번호 수정
router.patch('/mypage/account-info/settings/editPassword', verifyToken, async (req,res,next)=>{
    try{
        const {nowPassword, cPassword} = req.body;
        const pass = await Member.findOne({
            where: {id: req.id},
            attributes:['mem_password','salt'],
        });
        const password = crypto.createHash("sha512").update(nowPassword + pass.salt).digest('base64');
        if (password === pass.mem_password){
            console.log('비밀번호 맞음')
            const CPassword = crypto.createHash("sha512").update(cPassword + pass.salt).digest('base64');
            const result = await Member.update(
                {
                    mem_password:CPassword
                },
                {
                    where:{id:req.id}
                }
            );
            res.status(200).json(result);
        }else {
            res.status(999).json('비밀번호 오류');
        }
    }catch (err){
        console.log(err)
        next(err);
    }
})

// 이미지 나중에

// 회원목록(admin)
router.get('/list',async (req,res,next)=>{
    try{
        const result = await Member.findAll({
            attributes:{exclude:['mem_password', 'salt', 'deletedAt', 'image']},
        });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})
// 리스트 상세페이지
router.get('/list/:id', async (req,res,next)=>{
    try{
        const result = await Member.findOne({
            attributes:{exclude:['mem_password', 'salt', 'deletedAt']},
            where:{id:req.params.id}
        });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})

// 회원탈퇴
router.delete('/delete',  verifyToken, async (req,res, next)=>{
    try {
        const test = await Member.destroy({
            where:{
                id:req.id
            },
            individualHooks: true
        });
        res.status(200).json(test);
    }catch (err){
        console.log(err)
        next(err);
    }
})

module.exports = router;