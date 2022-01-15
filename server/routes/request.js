const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const { verifyToken } = require('./jwtcheck');
const pool = mysql.createPool(config);
const router = express.Router();
const conn = mysql.createConnection(config);

router.use(bodyParser.urlencoded({ extended: false }));



// 요청서 등록
router.route('/request/hire').post(verifyToken, (req, res) => {
    const mem_idx = req.idx;
    const cate3_idx = req.body.cate3_idx;
    const data = req.body.data; // 배열로 받음

    if (pool) {
        registRequest(mem_idx, cate3_idx, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.insertId != undefined);
                console.log('요청서 등록완료');
                Array.from(data).forEach((e) => {
                    const request_idx = result.insertId;
                    question_title_idx = e.question_title_idx;
                    question_answer_idx = e.question_answer_idx;
                    answer_text = e.answer_text;
                    registRequestAns(request_idx, question_title_idx, question_answer_idx, answer_text, (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("요청서 답변등록 완료")
                            res.end();
                        }
                    });
                });
            }
        });
    }
});
const registRequest = function (mem_idx, cate3_idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err)
        } else {
            const sql = conn.query('insert into tb_requests(mem_idx, cate3_idx)values(?,?);', [mem_idx, cate3_idx], (err, result) => {
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
const registRequestAns = function (request_idx, question_title_idx, question_answer_idx, answer_text, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('insert tb_request_answer(request_idx, question_title_idx, question_answer_idx, answer_text)values(?,?,?,?);', [request_idx, question_title_idx, question_answer_idx, answer_text], (err, result) => {
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

//  고수 개인 요청서 리스트
router.route("/request/list").get(verifyToken,(req, res)=> {
    const idx = req.idx;
    if (pool) {
        gerList(idx, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.json(result);
            }
        });
    }
})
const gerList = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            conn.query("select gosu_idx from tb_members  where idx = ?", [idx], (err, result1) => {
                if (err) {
                    console.log(err);
                } else {
                    const gosu_idx = result1[0].gosu_idx;  
                    conn.query('select * from tb_requests where gosu_idx=?', [gosu_idx], (err, result2) => {
                        conn.release();
                        if (err) {
                            callback(err, null)
                        } else {
                            callback(result2, null);
                        }
                    });
                }
            })
        }
    })
}

//  고수 요청서 읽기(견적서 보내는 페이지)
router.route("/request/received").get()







    module.exports = router;
