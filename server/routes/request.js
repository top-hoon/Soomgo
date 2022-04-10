const express = require('express');
const Request = require('../models/request');
const RequestAnswer = require('../models/requestAnswer');
const CateTitle = require('../models/cateQuestionTitle');
const CateAnswer = require('../models/cateQuestionAnswer');
const {verifyToken, gosuVerifyToken} = require("./jwtcheck");
const db = require("../models");
const router = express.Router();


// 지정요청서
router.post('/insert',verifyToken, async (req,res,next)=>{
    try{
        const tran = await db.sequelize.transaction(async (t) => {
        const { cate3_id, gosu_id, data } = req.body;
        const result = await Request.create({
            mem_id:req.id, gosu_id, cate3_id,
        });
        for(let i=0;i<data.length; i++){
            data[i].request_id = result.id
        }
        const result2 = await RequestAnswer.bulkCreate(data, {transaction:t},{ validate: true });
        res.status(200).json(result2);
        });
    }catch (err){
        console.log(err)
        next(err);
    }
});
// 고수 요청서
router.get('/select', gosuVerifyToken, async (req,res,next)=>{
    try {
        const result = await Request.findAll({
            attributes:['id', 'createdAt'],
            include:[
                {model:RequestAnswer, attributes:['id'],
                include:[
                    {model:CateTitle, attributes:['title']},
                    {model:CateAnswer, attributes:['des','des_sub','text_flag']},
                ]},
            ],
            where:{gosu_id:req.id}
        });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
});
// 고수 요청서 상세 -> 데이터 살짝 더뽑아와줘야함
router.get('/select/:id', gosuVerifyToken, async (req,res,next)=>{
    try {
        const result = await Request.findAll({
            attributes:['id', 'createdAt','mem_id'],
            include:[
                {model:RequestAnswer, attributes:['id'],
                    include:[
                        {model:CateTitle, attributes:['title']},
                        {model:CateAnswer, attributes:['des','des_sub','text_flag']},
                    ]},
            ],
            where:{id:req.params.id}
        });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
});


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