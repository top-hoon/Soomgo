const express = require('express');

const Member = require('../models/member');
const crypto = require("crypto");
const { Op } = require("sequelize");
const router = express.Router();




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
      const {email, mem_password}=req.body;
      const exist = await Member.findOne({
          where:{email:req.body.email},
          paranoid: false,
      });
      if(!exist){
          console.log(exist)
          return res.status(403).send("아이디가 존재하지않습니다.");
      }


  }catch (err){
      console.error(err);
      next(err);
  }
})

module.exports = router;