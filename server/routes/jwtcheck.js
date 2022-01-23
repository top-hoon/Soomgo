const jwt = require('jsonwebtoken');
const express = require('express');
const config = require("../config/config.json");
const cookieParser = require('cookie-parser');
const token = require('./token');
const { json } = require('body-parser');
const app = express();
app.use(cookieParser());
const SECRET_Key = config['Secret-key'];




const gosuVerifyToken = (req, res, next) => {
    const token = req.cookies.JWT;
    try {
        const gosu = jwt.verify(token, SECRET_Key);
        
        if(gosu.isMember) return res.json({"err" : "토큰이 유효하지 않습니다"})
        
        req.idx = gosu.idx;
        return next();
    } catch (error) {
        return gosuVerifyRefreshToken(req, res, next);
    }
};

const gosuVerifyRefreshToken = (req, res, next) => {
    const refreshToken = req.cookies.refreshJWT;
    try {
        const gosu = jwt.verify(refreshToken, SECRET_Key);

        if(gosu.isMember) return res.json({"err" : "토큰이 유효하지 않습니다"})

        const {newToken, newRefreshToken} = token.createNewToken(refreshToken);

        res.cookie('JWT', newToken, {maxAge: 1800000,httpOnly: true})
        res.cookie('refreshJWT', newRefreshToken, {maxAge: 80000000, httpOnly: true})

        req.idx = gosu.idx;
        return next();
    } catch (error) {
        return res.json({"err" : "토큰이 유효하지 않습니다"})
    }
}

exports.gosuVerifyToken = gosuVerifyToken




const verifyToken = (req, res, next) => {
    const token = req.cookies.JWT;

    try {
        const member = jwt.verify(token, SECRET_Key);
        
        if(!member.isMember) return res.json({"err" : "토큰이 유효하지 않습니다"})
        
        req.idx = member.idx;
        return next();
    } catch (error) {
        return RefreshToken(req, res, next);
    }
};

const RefreshToken = (req, res, next) => {
    const refreshToken = req.cookies.refreshJWT;

    try {
        const member = jwt.verify(refreshToken, SECRET_Key);

        if(!member.isMember) return res.json({"err" : "토큰이 유효하지 않습니다"})

        const {newToken, newRefreshToken} = token.createNewToken(refreshToken);

        res.cookie('JWT', newToken, {maxAge: 1800000,httpOnly: true})
        res.cookie('refreshJWT', newRefreshToken, {maxAge: 80000000, httpOnly: true})

        req.idx = member.idx;
        return next();
    } catch (error) {
        return res.json({"err" : "토큰이 유효하지 않습니다"})
    }
}

    exports.verifyToken = verifyToken
