const jwt = require('jsonwebtoken');
const express = require('express');
const config = require("../config/config.json");
const cookieParser = require('cookie-parser');
const token = require('./token');
const { json } = require('body-parser');
const app = express();
app.use(cookieParser());
const key = process.env.SECRET_KEY;




const gosuVerifyToken = (req, res, next) => {
    const token = req.cookies.JWT;
    try {
        const gosu = jwt.verify(token, key);
        
        if(gosu.isMember) return res.json({"err" : "토큰이 유효하지 않습니다"})
        
        req.id = gosu.id;
        return next();
    } catch (error) {
        return gosuVerifyRefreshToken(req, res, next);
    }
};

const gosuVerifyRefreshToken = (req, res, next) => {
    const refreshToken = req.cookies.refreshJWT;
    try {
        const gosu = jwt.verify(refreshToken, key);

        if(gosu.isMember) return res.json({"err" : "토큰이 유효하지 않습니다"})

        const {newToken, newRefreshToken} = token.createNewToken(refreshToken);

        res.cookie('JWT', newToken, {maxAge: 1800000,httpOnly: true})
        res.cookie('refreshJWT', newRefreshToken, {maxAge: 80000000, httpOnly: true})

        req.id = gosu.id;
        return next();
    } catch (error) {
        return res.json({"err" : "토큰이 유효하지 않습니다"})
    }
}

exports.gosuVerifyToken = gosuVerifyToken




const verifyToken = (req, res, next) => {
    const token = req.cookies.JWT;

    try {
        const member = jwt.verify(token, key);
        if(!member.isMember) return res.status(403).json({"err" : "토큰이 유효하지 않습니다"})
        req.id = member.id;
        return next();
    } catch (error) {
        return RefreshToken(req, res, next);
    }
};

const RefreshToken = (req, res, next) => {
    const refreshToken = req.cookies.refreshJWT;

    try {
        const member = jwt.verify(refreshToken, key);

        if(!member.isMember) return res.json({"err" : "토큰이 유효하지 않습니다"})

        const {newToken, newRefreshToken} = token.createNewToken(refreshToken);

        res.cookie('JWT', newToken, {maxAge: 1800000,httpOnly: true})
        res.cookie('refreshJWT', newRefreshToken, {maxAge: 80000000, httpOnly: true})

        req.id = member.id;
        return next();
    } catch (error) {
        return res.json({"err" : "토큰이 유효하지 않습니다"})
    }
}

    exports.verifyToken = verifyToken
