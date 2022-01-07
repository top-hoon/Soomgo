const jwt = require('jsonwebtoken');
const express = require('express');
const config = require("../config/config.json");
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());


const SECRET_Key = config['Secret-key'];

const verifyToken = (req, res, next) => {
    const token = req.cookies.JWT;
    if (!token) {
        return res.json({"err":"토큰이없어요"})
    }
    try {
        const data = jwt.verify(token, SECRET_Key);
        req.idx = data.idx;
        return next();
    } catch {   
        return res.sendStatus(403);
    }
};
exports.verifyToken = verifyToken

