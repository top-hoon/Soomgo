const express = require('express');
const cateQuestionAnswer = require('../models/cateQuestionAnswer');


const router = express.Router();


router.post('/regist',async (req,res,next)=>{
    try{
        const {title_idx , des  , des_sub  , text_flag, text_sample } = req.body;
        const result = await cateQuestionAnswer.create({
            title_idx , des  , des_sub  , text_flag, text_sample
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
        const {title_idx , des  , des_sub  , text_flag, text_sample, id } = req.body;
        const result = await cateQuestionAnswer.update(
            {
                title_idx , des  , des_sub  , text_flag, text_sample
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
        const result = await cateQuestionAnswer.destroy({
            where:{id:req.body.id}
        })
        res.status(200).json(1);
    }catch (err){
        console.log(err)
        next(err);
    }
})

router.get('/questionList',async (req,res,next)=>{
    try {

    }catch (err){
        console.log(err)
        next(err);
    }
})

module.exports = router;