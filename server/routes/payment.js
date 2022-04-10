const express = require('express');

const Payment = require('../models/payment');
const CashBonus = require('../models/cashBonus');
const SoomgoCash = require('../models/soomgoCash');
const Gosu = require('../models/gosu');
const {verifyToken, gosuVerifyToken} = require("./jwtcheck");
const db = require("../models");
const router = express.Router();


router.post('/insert', gosuVerifyToken, async (req,res,next)=>{
    try {
        const tran = await db.sequelize.transaction(async (t) => {
        const {service_price, service_date, payment_type,total_price} =req.body;
        const sm_type = 'C';    //  타입 1:충전, 2:사용 -> 여기는 충전만하는곳이라 고정
        const details = service_price + '원을 충전하였습니다.';

        const Pay = await Payment.create({service_price, service_date, payment_type, total_price, gosu_id:req.id},{transaction:t}); // 결제내역
        const Bonus = await CashBonus.create({cash:service_price, details, gosu_id:req.id},{transaction:t}); // 보너스캐쉬 충전   -> 보너스 캐쉬의 비율을 정해주지않아서 그냥 일단은 1+1원
        const pay_id = Pay.id; const bonus_id = Bonus.id;
        const Cash = await SoomgoCash.create({cash:total_price, sm_type, details,  gosu_id:req.id, bonus_id, pay_id},{transaction:t}); // cash
        const gosuCash = await Gosu.increment({cash:total_price, cash_bonus:service_price},{where:{id:req.id},transaction:t});   // 고수테이블 cash 업데이트
        res.status(200).json(1);
        });
    }catch (err){
        console.log(err)
        next(err);
    }
});

module.exports = router;

