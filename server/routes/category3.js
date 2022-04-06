const express = require('express');
const Category3 = require('../models/category3');
const Category2 = require('../models/category2');
const Category1 = require('../models/category1');

const router = express.Router();


router.post('/regist',async (req,res,next)=>{
    try{
        const {cate_name, cate1_id, cate2_id, des_title, des_text} = req.body;
        const result = await Category3.create({
            cate_name, cate1_id, cate2_id, des_title, des_text
        })
        res.status(200).json(1);
    }catch (err){
        console.log(err)
        next(err);
    }
});

router.get('/select', async (req,res,next)=>{
    try {
        const result = await Category3.findOne({
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
        const { id, cate1_id, cate2_id, cate_name, des_title, des_text} =req.body;
        const result = await Category3.update(
            {
                cate_name, cate1_id, cate2_id, des_title, des_text
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
        const result = await Category3.destroy({
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
        const result = await Category3.findAll({
            attributes:['id','cate_name', 'des_title', 'des_text'],
            where:{cate1_id:req.query.cate1_id, cate2_id:req.query.cate2_id},
            order:[['cate2_id', 'ASC']]  // order가 하나일때도 꼭 배열로 넣어주어야함!

        });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})

module.exports = router;