const express = require('express');

const faq = require('../models/faq');
const router = express.Router();


router.post('/insert', async (req,res,next)=>{
    try {
        const {faq_type, subject, title, content} =req.body;
        const insert = await faq.create({
            faq_type, subject, title, content
            // faq_type:req.body.faq_type,
            // subject:req.body.subject,
            // title:req.body.title,
            // content:req.body.content,
        });
        res.status(200).json(1);

    }catch (err){
        console.log(err)
        next(err);
    }
})

router.get('/select', async (req,res,next)=>{
    try {
        const result = await faq.findAll({
            attributes:['title','content']
        });
        res.json(result)
    }catch (err){
        console.log(err)
        next(err);
    }
})

router.patch('/update/:id',async (req,res,next)=>{
    try {
        const { title, content} =req.body;
        await faq.update(
            {
                title, content
            },{
            where :{id:req.params.id},
            }
        );
        res.status(200).json(1);
    }catch (err){
        console.log(err)
        next(err);
    }
});

router.delete('/delete/:id',async (req,res,next)=>{
    try{
        faq.destroy({
            where:{id:req.params.id}
        })
        res.status(200).json(1);
    }catch (err){
        console.log(err)
        next(err);
    }
})

module.exports = router;

