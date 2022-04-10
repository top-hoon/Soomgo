const express = require('express');

const Estimate = require('../models/estimate');
const EstimateOften = require('../models/estimateOften');
const CashBonus = require('../models/cashBonus');
const SoomgoCash = require('../models/soomgoCash');
const Gosu = require('../models/gosu');
const {verifyToken, gosuVerifyToken} = require("./jwtcheck");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const db = require("../models");
const router = express.Router();



try {
    fs.readdirSync('Estimate');
} catch (error) {
    console.error('Estimate 폴더가 없어 Estimate 폴더를 생성합니다.');
    fs.mkdirSync('Estimate');
}
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'Estimate/');
    },
    filename: (req, file, callback) => {
        const ext = path.extname(file.originalname);
        console.log(ext)
        callback(null, req.id+"_" + Date.now()+file.originalname);
    }
});
const fileFilter = (req, file, callback, next) => {
    try {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {    // 파일허용범위
            callback(null, true);
        } else {
            callback({msg:'이미지 파일만 업로드 가능합니다.'}, false);
        }
    }catch (err){
        console.log(err);
    }
}
upload = multer({ storage: storage, fileFilter: fileFilter , limits: { fileSize: 20 * 1024 * 1024 }});



router.post('/insert',gosuVerifyToken, upload.single('files'),async (req,res,next)=>{

    try {
        const tran = await db.sequelize.transaction(async (t) => {
        const files = req.file.path
        const {salary, price, content, mem_id, gosu_id, often, titlename, title = titlename + '과외 견적', pay} =req.body;  // often -> 0,1 (자주쓰는 견적서에 저장 하시겠습니까?)
        const sm_type = 'U'; const details = pay + '원을 견적서 보내기에 사용하였습니다.';
        const insert = await Estimate.create({salary, price, content,files, mem_id, gosu_id:req.id}, {transaction:t}); // 견적서
        if(often ===0 || often === '0'){console.log("저장안함");}
        else {
            const insert2 = await EstimateOften.create({salary, price, content,files, gosu_id:req.id}, {transaction:t}) // 자주쓰는 견적서에 저장
        }
        const bonus = await Gosu.findOne({attributes:['cash_bonus','cash'],where:{id:req.id}}) // 보너스 캐쉬

        if(bonus.cash_bonus>=pay){    // 보너스캐쉬가 가격보다 높은지
            console.log(bonus.cash_bonus)
            const bonus2 = await CashBonus.create({cash:pay,details,gosu_id:req.id},{transaction:t})
            const gosuB = await Gosu.decrement({cash_bonus:pay},{where:{id:req.id},transaction:t})
        }else {
            if (bonus.cash<=0) res.status(500).json("잔액이 부족합니다.");  // 여기서 return
            const bonus3 = await SoomgoCash.create({cash:pay,sm_type,details,gosu_id:req.id}, {transaction:t})
            const gosuC = await Gosu.decrement({cash:pay},{where:{id:req.id},transaction:t})
        }
        res.status(200).json(1);
        });
    }catch (err){
        next(err);
    }
})


module.exports = router;

