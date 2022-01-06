const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const { verifyToken } = require('jsonwebtoken');
const pool = mysql.createPool(config);
const router = express.Router();
const conn = mysql.createConnection(config);

router.use(bodyParser.urlencoded({ extended: false }));

router.route('/request/regist').post(verifyToken,(req, res) => {
    const mem_idx = req.idx;
    const cate3_idx = req.body.cate3_idx;
    if (pool) {
        registRequest(mem_idx, cate3_idx,(err, result)=> {
            if (err) {
                console.log(err);
            } else {
                console.log('요청 등록완료');
                res.end();
            }
        });
    }
})





const registRequest = function (mem_idx, cate3_idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err)
        } else {
            conn.query('insert into tb_request(mem_idx, cate3_idx)values(?,?);', [mem_idx, cate3_idx], (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            });
        }
    });
}
    module.exports = router;
