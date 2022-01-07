const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const { verifyToken } = require('jsonwebtoken');
const pool = mysql.createPool(config);
const router = express.Router();
const conn = mysql.createConnection(config);

router.use(bodyParser.urlencoded({ extended: false }));

router.route('/requestAns/regist').post((req, res) => {
    const request_idx = req.body.request_idx;
    const question_title_idx = req.body.question_title_idx;
    const question_answer_idx = req.body.question_answer_idx;
    const answer_text = req.body.answer_text;
    if (pool) {
        registRequestAns(request_idx, question_title_idx, question_answer_idx, answer_text, (err, result)=> {
            if (err) {
                console.log(err);
            } else {
                console.log('요청서 답변 등록완료');
                res.end();
            }
        });
    }
});

const registRequestAns = function (request_idx, question_title_idx, question_answer_idx, answer_text, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            conn.query('insert tb_request_answer(request_idx, question_title_idx, question_answer_idx, answer_text)values(?,?,?,?);', [request_idx, question_title_idx, question_answer_idx, answer_text], (err, result) => {
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