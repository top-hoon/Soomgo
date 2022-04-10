const express = require('express');
const Gosu = require('../models/gosu');
const Member = require('../models/member');
const GosuService = require('../models/gosuService');
const crypto = require("crypto");
const { Op } = require("sequelize");
const { sequelize } = require("sequelize");
const jwt = require("jsonwebtoken");
const {verifyToken, gosuVerifyToken} = require("./jwtcheck");
const db = require("../models");
const router = express.Router();


router.post('/regist', verifyToken, async (req,res,next)=>{
    try {
         const tran = await db.sequelize.transaction(async (t) => {
             const {cate1_id, cate2_id, cate3_id, gosu_name, my_place, distance, gender, hp} = req.body;
             const [results, created] = await Gosu.findOrCreate({
                 where: {mem_id: req.id},
                 defaults: {my_place, distance, gender, hp, gosu_name},
                 transaction:t
             });
             const gosu = await Member.update({gosu_id:req.id},{where:{id: req.id},transaction:t});
             const Service = await GosuService.create({cate3_id:cate3_id, gosu_id:req.id},{transaction:t});
             const result = results && results[0] ? results[0] : created;
             console.log(gosu)
             console.log(Service)
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
      const exist = await Gosu.findOne({
          attributes:['id','mem_id','gosu_name'],
          include:[
              {model:Member,required: true, attributes:['id', 'email','salt', 'mem_password', 'mem_name'],
                  where:{email:email}
              },
          ],
      });
      if (!exist) {
          return res.status(403).send("아이디가 존재하지않습니다.");
      } else {
          const pass = crypto.createHash("sha512").update(mem_password + exist.Member.salt).digest('base64');
          if (pass === exist.Member.mem_password) {
              const token = jwt.sign({
                  type: 'JWT',
                  email: exist.Member.email,
                  name: exist.gosu_name,
                  id: exist.id,
                  mem_id: exist.mem_id,
                  isMember: false
              }, process.env.SECRET_KEY, {
                  expiresIn: '25m',
                  issuer: '관리자',
              });
              const refreshToken = jwt.sign({
                  type: 'JWT',
                  email: exist.Member.email,
                  name: exist.gosu_name,
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
router.get('/logout', gosuVerifyToken, (req, res) => {
    res.clearCookie('JWT');
    console.log("로그아웃완료");
    res.end();
});
//
// // 개인정보. 나중에 exclude 해주기
// router.get('/account-info', verifyToken, async(req,res,next)=>{
//     try {
//         const result = await Member.findAll({
//             where:{id:req.id}
//         });
//         res.status(200).json(result);
//     }catch (err){
//         console.log(err)
//         next(err);
//     }
// })
//
// // 마이페이지 /mypage/account-info/settings/name
// router.get('/account-info/settings/name', verifyToken, async (req,res,next)=>{
//     try {
//         const result = await Member.findOne({
//             attributes:['mem_name'],
//             where:{id:req.id},
//         })
//         res.status(200).json(result);
//     }catch (err){
//         console.log(err)
//         next(err);
//     }
// })
//
//마이페이지 수정
router.patch('/profile/edit',gosuVerifyToken, async (req,res,next)=>{// multer buisness, certificate
    try {
        const {gosu_name, r_service, line_des, my_place, distance, hp_time_start, hp_time_end, payment_type, sumgopay_flag, card_flag,
            bank_flag, cash_flag, career, staff_num, buisness, certificate, des, files, qna1,qna2,qna3,qna4,home_url,face_url,twit_url,insta_url,blog_url,kakao_url} = req.body;
        console.log(req.body.gosu_name);
        console.log(req.id);
        const result = await Gosu.update(
            {
                gosu_name, r_service, line_des, my_place, distance, hp_time_start, hp_time_end, payment_type, sumgopay_flag, card_flag,
                bank_flag, cash_flag, career, staff_num, buisness, certificate, des, files, qna1,qna2,qna3,qna4,home_url,face_url,twit_url,insta_url,blog_url,kakao_url
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


// 고수목록(admin)
router.get('/list',async (req,res,next)=>{
    try{
        const result = await Gosu.findAll({
            attributes:{exclude:['latitude', 'longitude', 'updatedAt', 'deletedAt']},
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
        const result = await Gosu.findOne({
            attributes:{exclude:['latitude', 'longitude', 'updatedAt', 'deletedAt']},
            where:{id:req.params.id}
        });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})

module.exports = router;