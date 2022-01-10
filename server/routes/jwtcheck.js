const jwt = require('jsonwebtoken');
const express = require('express');
const config = require("../config/config.json");
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const SECRET_Key = config['Secret-key'];

// const verifyToken = (req, res, next) => {
//     const token = req.cookies.JWT;
//     if (!token) {
//         return res.json({"err":"토큰이없어요"})
//     }
//     try {
//         const data = jwt.verify(token, SECRET_Key);
//         req.idx = data.idx;
//         return next();
//     } catch {
//         return res.sendStatus(403);
//     }
// };

const verifyToken = (req, res, next) => {
    const token = req.cookies.JWT;
    const refreshToken = req.cookies.refreshJWT;

    if (!token) {
        if (!refreshToken) {
            return res.json({ "err": "토큰이없어요" }) // 토큰 두개 다 없는 상황   (로그인 해야함)
            
        } else {    // 그냥 토큰이 없는 상황
            const member = jwt.verify(refreshToken, SECRET_Key);    // 회원정보 가져오려고 한번 더 선언..

            const newToken = jwt.sign({
                type: 'JWT',
                email: member.email,
                name: member.mem_name,
                idx: member.idx
            }, SECRET_Key, {
                expiresIn: '30m',
                issuer: '관리자',
            });

            res.cookie('JWT', newToken, { maxAge: 1800000, httpOnly: true })
            console.log('새로운 토큰이 발급되었습니다.')
            const data = jwt.verify(newToken, SECRET_Key);
            req.idx = data.idx;
            return next();
        }
    } else {    //  원래의 토큰은 유효하지만, 리플레쉬 토큰이 만료 되었을 때

        if (refreshToken == undefined) {
            const member = jwt.verify(token, SECRET_Key);    // 회원정보 가져오려고 한번 더 선언..
            
                const newRefreshToken = jwt.sign({
                type: 'refreshJWT',
                email: member.email,
                name: member.mem_name,
                idx: member.idx
            }, SECRET_Key, {
                expiresIn: '30m',
                issuer: '관리자',
                });
            
            res.cookie('refreshJWT', newRefreshToken, { maxAge: 3600000, httpOnly: true })
            console.log('새로운 리프레쉬 토큰이 발급되었습니다.')
            const data = jwt.verify(newRefreshToken, SECRET_Key);
            req.idx = data.idx;
            return next();

        } else {
        const data = jwt.verify(token, SECRET_Key);
        req.idx = data.idx;
        return next();
        }
    } 
};
exports.verifyToken = verifyToken

