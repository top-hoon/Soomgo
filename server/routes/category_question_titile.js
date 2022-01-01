const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
const conn = mysql.createConnection(config);

router.use(bodyParser.urlencoded({ extended: false }));

router.route('/cateTilte/regist').post((req, res) => {
    const cate_level = req.body.cate_level;
    const cate_idx = req.body.cate_idx;
    const title = req.body.title;
    const max_choose = req.body.max_choose;
    if (pool) {
        inputCateTitle(cate_level, cate_idx, title, max_choose, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('카테고리 타이틀 등록완료');
                res.end();
            }
        });
    }
})

const inputCateTitle = function (cate_level, cate_idx, title, max_choose, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            conn.query('insert into tb_cate_question_title(cate_level, cate_idx, title, max_choose)values(?,?,?,?);', [cate_level, cate_idx, title, max_choose], (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            })
        }
    })
}

    module.exports = router;
