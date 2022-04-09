const express = require('express');
const router = express.Router();
const GosuService = require('../models/gosuService');
const Category3 = require('../models/category3');
const {gosuVerifyToken} = require("./jwtcheck");


router.post('/insert', gosuVerifyToken,async (req,res,next)=>{
    try {
        const {cate3_id} =req.body;
        const insert = await GosuService.create({
            cate3_id, gosu_id:req.id
        });
        res.status(200).json(insert);
    }catch (err){
        console.log(err)
        next(err);
    }
})

router.get('/select', gosuVerifyToken, async (req,res,next)=>{
    try {
        const result = await GosuService.findAll({
            attributes:['cate3_id'],
            include:[
                {model:Category3, attributes:['id','cate_name']},   // id는 굳이 안뽑아도 되긴함
            ],
            where:{gosu_id:req.id}
        });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})


router.delete('/delete/:id',gosuVerifyToken, async (req,res,next)=>{
    try{
        const result =await GosuService.destroy({
            where:{id:req.params.id}
        })
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})

module.exports = router;

