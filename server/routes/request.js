const express = require('express');
const Request = require('../models/request');
const RequestAnswer = require('../models/requestAnswer');
const {verifyToken} = require("./jwtcheck");
const db = require("../models");
const router = express.Router();


// 지정요청서
router.post('/insert',verifyToken, async (req,res,next)=>{
    try{
        const tran = await db.sequelize.transaction(async (t) => {
        const { cate3_id, gosu_id, data } = req.body;
        const result = await Request.create({
            mem_id:req.id, gosu_id, cate3_id,
        },{transaction:t});
        const result2 = await RequestAnswer.bulkCreate({
            data
        },{transaction:t},{ validate: true });
        res.status(200).json(result2);
        });
    }catch (err){
        console.log(err)
        next(err);
    }
});

router.get('/select', async (req,res,next)=>{
    try {
        const result = await Category2.findOne({
            attributes:['cate_name'],
            where:{id:req.query.id},
        });
        res.json(result)
    }catch (err){
        console.log(err)
        next(err);
    }
});

router.patch('/update',async (req,res,next)=>{
    try {
        const { id, cate1_id, cate_name} =req.body;
        const result = await Category2.update(
            {
                cate_name, cate1_id
            },{
                where :{id:id},
            }
        );
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})

router.delete('/delete',async (req,res,next)=>{
    try{
        const result = await Category2.destroy({
            where:{id:req.body.id}
        })
        res.status(200).json(1);
    }catch (err){
        console.log(err)
        next(err);
    }
})


router.get('/list', async (req,res,next)=>{
    try{
        const result = await Category2.findAll({
            attributes:['id','cate_name'],
            where:{cate1_id:req.query.cate1_id},
        });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})


module.exports = router;