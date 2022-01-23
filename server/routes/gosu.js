const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const conn = mysql.createConnection(config);
const jwt = require('jsonwebtoken');
const SECRET_Key = config['Secret-key'];
const { verifyToken } = require('./jwtcheck');
const multer = require('multer');
const path = require('path');
const gosuService = require('./gosuService')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());

// 고수 회원가입
router.route("/gosu/regist").post((req, res) => {
    const cate1_idx = req.body.cate1_idx;
    const cate2_idx = req.body.cate2_idx;
    const cate3_idx = req.body.cate3_idx;
    const my_place = req.body.my_place;
    const distance = req.body.distance;
    const gender = req.body.gender;
    const hp = req.body.hp;
    const mem_idx = req.body.mem_idx;

    if(pool){
        createGosu(cate1_idx, cate2_idx, cate3_idx, my_place, distance, gender, hp, mem_idx, (err, result) => {
            if(err) console.log(err)
            console.log(result)
            res.end();
        })
    }
});

function createGosu(cate1_idx, cate2_idx, cate3_idx, my_place, distance, gender, hp, mem_idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query('insert into tb_gosus(my_place, distance, gender, hp, mem_idx) values (?, ?, ?, ?, ?)', [my_place, distance, gender, hp, mem_idx], (err, result) => {
                conn.release();
                if(err){
                    console.log(err)
                    callback(err, result);
                }
                else{
                    createGosuService(result.insertId, cate3_idx, callback)
                }
            })
        }
    })
}

function createGosuService(gosu_idx, cate3_idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("insert into tb_gosus_services(gosu_idx, cate3_idx) values (?, ?)", [gosu_idx, cate3_idx], (err, result) => {
                conn.release();
                callback(err, result)
            })
        }
    })
}

// 고수 읽기
router.route("/gosu/read").get((req, res) => {
    const gosu_idx = req.query.gosu_idx;

    if(pool) readGosu(idx, (err, result) => {
        if(err) console.log(err);
        res.json(result);
    })
    else console.log("디비 연결 실패");

    res.end();
});

function readGosu(idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("select * from tb_gosus where idx = ?", [idx], (err, result) => {
                conn.release();
                callback(err, result);
            })
        }
    })
}

// 고수 로그인
router.route('/gosu/login').post((req, res) => {
    const email = req.body.email;
    const mem_password = req.body.mem_password;
    if(pool) {
        find_gosu(email, (err, result) => {
            if(err) console.log(err);
            else{
                if(result[0] == null) {
                    console.log("아이디가 존재하지 않음");
                    console.log(req.body.email);
                    res.end();
                }
                else{
                    console.log(result)
                    const gosu = result[0];
                    const password = hashedPassword(mem_password, gosu.salt);

                    if(password == gosu.mem_password){
                        const token = jwt.sign({
                            type: 'JWT',
                            email: gosu.email,
                            name: gosu.mem_name,
                            idx: gosu.idx,
                            mem_idx: gosu.mem_idx,
                            isMember: false
                        }, SECRET_Key, {
                            expiresIn: '25m',
                            issuer: '관리자',
                        });
                        const refreshToken = jwt.sign({
                            type: 'refreshJWT',
                            email: gosu.email,
                            name: gosu.mem_name,
                            idx: gosu.idx,
                            mem_idx: gosu.mem_idx,
                            isMember: false
                        }, SECRET_Key, {
                            expiresIn: '1d',
                            issuer: '관리자',
                        })
                        res.cookie('JWT', token, {maxAge: 1800000,httpOnly: true})
                        res.cookie('refreshJWT', refreshToken, {maxAge: 80000000, httpOnly: true})
                        .status(200).json({
                        code: 200,
                        message: '토큰이 발급되었습니다.',
                        idx: gosu.idx,
                        mem_idx:gosu.mem_idx,
                        Token: token,
                        RefreshToken: refreshToken,
                        });
                    }
                    else{
                        res.end();
                    }
                }
            }
        })
    }
})

function find_gosu(email, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query('select gosu.idx, member.idx, member.email, member.salt, member.mem_password, member.mem_name, gosu.mem_idx from tb_gosus as gosu join tb_members as member where member.email = ? and member.idx = gosu.mem_idx', [email], (err, result) => {
                if(err) console.log(err);
                callback(err, result)
            })
        }
    })
}

// 비밀번호 암호화
function hashedPassword(plainPassword, salt){
    return crypto.createHash("sha512").update(plainPassword + salt).digest('base64');
}

module.exports = router;