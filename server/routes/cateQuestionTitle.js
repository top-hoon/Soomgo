const express = require('express');
const cateQuestionTitle = require('../models/cateQuestionTitle');


const router = express.Router();


router.post('/regist',async (req,res,next)=>{
    try{
        const {cate_level, cate_id , title , max_choose} = req.body;
        const result = await cateQuestionTitle.create({
            cate_level, cate_id , title , max_choose
        })
        res.status(200).json(1);
    }catch (err){
        console.log(err)
        next(err);
    }
});

// router.get('/select', async (req,res,next)=>{
//     try {
//         const result = await cateQuestionTitle.findOne({
//             attributes:['cate_name'],
//             where:{id:req.query.id},
//         });
//         res.json(result)
//     }catch (err){
//         console.log(err)
//         next(err);
//     }
// });

router.patch('/update',async (req,res,next)=>{
    try {
        const {cate_level, cate_id , title , max_choose, id} = req.body;
        const result = await cateQuestionTitle.update(
            {
                cate_level, cate_id , title , max_choose
            },{
                where :{id:id},
            }
        );
        res.status(200).json(1);
    }catch (err){
        console.log(err)
        next(err);
    }
})

router.delete('/delete',async (req,res,next)=>{
    try{
        const result = await cateQuestionTitle.destroy({
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
        const result = await cateQuestionTitle.findAll({});
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})

module.exports = router;