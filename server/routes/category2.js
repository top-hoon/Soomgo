const express = require('express');
const Category2 = require('../models/category2');
const router = express.Router();


router.post('/regist',async (req,res,next)=>{
    try{
        const result = await Category2.create({
            cate_name : req.body.cate_name,
            cate1_id : req.body.cate1_id,
        })
        res.status(200).json(1);
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