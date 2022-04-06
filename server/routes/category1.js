const express = require('express');
const Category1 = require('../models/category1');
const Category3 = require("../models/category3");
const Category2 = require("../models/category2");
const router = express.Router();


router.post('/regist',async (req,res,next)=>{
    try{
        console.log('dd'+req.body.cate_name);
        const result = await Category1.create({
            cate_name:req.body.cate_name
        })
        res.status(200).json(1);
    }catch (err){
        console.log(err)
        next(err);
    }
});

router.get('/select', async (req,res,next)=>{
    try {
        const result = await Category1.findOne({
            attributes:['cate_name'],
            where:{id:req.query.id},
        });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
});

router.patch('/update',async (req,res,next)=>{
    try {
        const { id, cate_name} =req.body;
        const result = await Category1.update(
            {
                cate_name
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
        const result = await Category1.destroy({
            where:{id:req.body.id}
        })
        res.status(200).json(1);
    }catch (err){
        console.log(err)
        next(err);
    }
})

router.get('/list',async (req,res,next)=>{
    try{
        const result = await Category1.findAll({
            attributes:['id','cate_name'],
        });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
});

router.get('/categoryList',async (req,res,next)=>{
    try{
        const result = await Category3.findAll({
            attributes:['id', 'cate_name'],
            // where:{cate1_id:req.query.cate1_id, cate2_id:req.query.cate2_id},
            include:[
                {model: Category2, attributes:['id','cate_name'],
                    include:[
                        {model: Category3, attributes:['id','cate_name','des_title', 'des_text',]}  // 보내는 json형태 바꾸기....
                    ]},
            ],
            order:[['cate1_id', 'ASC'],['cate2_id', 'ASC']]
        });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})



module.exports = router;