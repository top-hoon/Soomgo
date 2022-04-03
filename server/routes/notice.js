const express = require('express');

const notice = require('../models/notice');
const router = express.Router();

router.post('/insert',async (req,res,next)=>{
    try {
        const {faq_type, subject, title, content} =req.body;
    }catch (err){
        console.log(err);
        next(err);
    }
})