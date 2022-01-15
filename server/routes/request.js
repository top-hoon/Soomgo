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
    const gosu_idx = req.body.gosu_idx; // 직접요청시에 피료할듯
    const data = req.body.data; // 배열로 받음

    if (pool) {
        registRequest(mem_idx, cate3_idx, gosu_idx, (err, result) => {
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
const registRequest = function (mem_idx, cate3_idx, gosu_idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err)
        } else {
            const sql = conn.query('insert into tb_requests(mem_idx, cate3_idx,gosu_idx)values(?,?,?);', [mem_idx, cate3_idx,gosu_idx], (err, result) => {
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

//  고수 개인 요청서 리스트     / / 수정해야함
router.route("/request/list").get(verifyToken,(req, res)=> {
    const idx = req.idx;
    if (pool) {
        gerList(idx, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log("리스트")
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
            conn.query("select gosu_idx from tb_members  where idx = ?", [idx], (err1, result1) => {
                if (err1) {
                    console.log(err1);
                } else {
                    if (result1 == undefined) console.log("gosu_idx가 없습니다.");
                    const gosu_idx = result1[0].gosu_idx;  
                    conn.query('select * from tb_requests where gosu_idx=?', [gosu_idx], (err2, result2) => {
                        if (err2) {
                            callback(err2, null)
                        } else {
                            callback(null,result2);
                        }
                    });
                }
            })
        }
    })
}

//  고수 요청서 읽기(견적서 보내는 페이지)
router.route("/request/received").get((req, res) => {
    const idx = req.body.idx;   // 요청서 idx
    if (pool) {
        readRequest(idx, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log("요청서 읽기")
                res.json(result);
            }
        })
    }
})

const readRequest = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql1 = 'select '
        }
    })
}





    module.exports = router;
