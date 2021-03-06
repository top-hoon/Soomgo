const express = require('express');
const cateQuestion = require('../models/cateQuestion');
const CateTitle = require('../models/cateQuestionTitle');
const CateAnswer = require('../models/cateQuestionAnswer');
const { Op } = require("sequelize");
const RequestAnswer = require("../models/requestAnswer");


const router = express.Router();


router.post('/regist',async (req,res,next)=>{
    try{
        const {cate_level, cate_id , title_id , answer_id} = req.body;
        const result = await cateQuestion.create({
            cate_level, cate_id , title_id , answer_id
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
        const {cate_level, cate_id , cate_question_title_id , cate_question_answer_id, id} = req.body;
        const result = await cateQuestion.update(
            {
                cate_level, cate_id , cate_question_title_id , cate_question_answer_id
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
        const result = await cateQuestion.destroy({
            where:{id:req.body.id}
        })
        res.status(200).json(1);
    }catch (err){
        console.log(err)
        next(err);
    }
})


router.get('/questionList', async (req,res,next)=>{
    try{
        const{cate1_id, cate2_id, cate3_id} = req.body;
        const result = await cateQuestion.findOne({
            // distinct: 'cate_question_answer_id',
            attributes:['id'],
            include:[
                {model: CateTitle,attributes:['id', 'title'],
                    include:[
                        {model: CateAnswer, attributes:['id', 'des']},
                    ]},
            ],
            where:{ // ???????????????
                [Op.or]:{
                    [Op.and]:[
                        {cate_level:'1'},
                        {cate_id:cate1_id}
                    ],
                    [Op.and]:[
                        {cate_level:'2'},
                        {cate_id:cate2_id}
                    ],
                    [Op.and]:[
                        {cate_level:'3'},
                        {cate_id:cate3_id}
                    ],
                }
            },
            // include:[ ???????????????
            //     {model:RequestAnswer,attributes:['id'],
            //         include:[
            //             {model:CateTitle, attributes:['id'],
            //                 include:[{model:CateAnswer}
            //                 ],
            //                 where:{}},
            //         ]},
            // ],
            // where:{id:req.id}
            group:['CateAnswer.title_id'],
            order:[['cate_level'],['title_id'],['answer_id']]
        });
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})

module.exports = router;