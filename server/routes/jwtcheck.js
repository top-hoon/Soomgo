const jwt = require('jsonwebtoken');
const express = require('express');
const config = require("../config/config.json");
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());


const SECRET_Key = config['Secret-key'];

const verifyToken = (req, res, next) => {
    console.log(`token:${req.cookies.JWT}`);
    const token = req.cookies.JWT;
    if (!token) {
        console.log('토큰이 없습니다.');
        return res.sendStatus(403);
    }
    try {
        const data = jwt.verify(token, SECRET_Key);
        req.idx = data.idx;
        return next();
    } catch {
        return res.sendStatus(403);
    }

    // try {
    //     console.log(`token:${req.cookies.JWT}`);
    //     const clientToken = req.cookies.JWT;
    //     const decoded = jwt.verify(clientToken, SECRET_Key);

    //     if (decoded) {
    //         res.locals.userId = decoded.idx;
    //         next();
    //     } else {
    //         res.status(401).json({ error: '쒯' });
    //     }
    //     } catch (err) {
    //     res.status(401).json({ error: 'token 없어' });
    //     console.log(err);
    //     }
};


exports.verifyToken = verifyToken

