const express = require('express');
const faq = require('../models/faq');
const router = express.Router();


router.post('/insert', async (req,res,next)=>{
    try {
        const {faq_type, subject, title, content} =req.body;
        const insert = await faq.create({
            faq_type, subject, title, content
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
            attributes:['title','content'],
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
        const result = await faq.update(
            {
                title, content
            },{
            where :{id:req.params.id},
            }
        );
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
});

router.delete('/delete/:id',async (req,res,next)=>{
    try{
        const result =await faq.destroy({
            where:{id:req.params.id}
        })
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        next(err);
    }
})

module.exports = router;

