const jwt = require('jsonwebtoken');
const express = require('express');
const config = require("../config/config.json");
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const SECRET_Key = config['Secret-key'];


const verifyToken = (req, res, next) => {
    const token = req.cookies.JWT;
    const refreshToken = req.cookies.refreshJWT;

    if (!token) {
        if (!refreshToken) {
            return res.json({ "err": "토큰이없어요" })

        } else {
            const member = jwt.verify(refreshToken, SECRET_Key);
            const newToken = jwt.sign({
                type: 'JWT',
                email: member.email,
                name: member.mem_name,
                idx: member.idx,
                gosu_idx: member.gosu_idx
            }, SECRET_Key, {
                expiresIn: '25m',
                issuer: '관리자',
            });

            res.cookie('JWT', newToken, { maxAge: 1800000, httpOnly: true })
            console.log('새로운 토큰이 발급되었습니다.')
            const data = jwt.verify(newToken, SECRET_Key);
            req.idx = data.idx;
            req.gosu_idx = data.gosu_idx;
            return next();
        }

    } else {
            if (refreshToken === undefined) {
            const member = jwt.verify(token, SECRET_Key);
                const newRefreshToken = jwt.sign({
                type: 'refreshJWT',
                email: member.email,
                name: member.mem_name,
                idx: member.idx,
                gosu_idx: member.gosu_idx
            }, SECRET_Key, {
                expiresIn: '1d',
                issuer: '관리자',
                });
                
            res.cookie('refreshJWT', newRefreshToken, { maxAge: 80000000, httpOnly: true })
            console.log('새로운 리프레쉬 토큰이 발급되었습니다.')
            const data = jwt.verify(newRefreshToken, SECRET_Key);
            req.idx = data.idx;
            req.gosu_idx = data.gosu_idx;    
            return next();
            

        } else {
            const data = jwt.verify(token, SECRET_Key);
            req.idx = data.idx;
            req.gosu_idx = data.gosu_idx;
            return next();
        }
    }
};

exports.verifyToken = verifyToken

