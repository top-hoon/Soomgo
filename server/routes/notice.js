const express = require('express');

const notice = require('../models/notice');
const Member = require('../models/member');
const {verifyToken} = require("./jwtcheck");


const router = express.Router();

router.post('/insert',verifyToken, async (req,res,next)=>{
    try {
        const {show_flag, subject, title, content,star} =req.body;
            const insert = await notice.create({
                show_flag, subject, title, content, star, MemberId:req.id
            });

            res.status(200).json(1);
    }catch (err){
        console.log(err);
        next(err);
    }
});

router.get('/select', verifyToken,async (req,res,next)=>{

})

module.exports = router;
