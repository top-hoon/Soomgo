const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const res = require('express/lib/response');
const pool = mysql.createPool(config);
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());


// 카테고리  질문등록
router.route("/categoryQuestion/regist").post((req, res) => {
    const cate_level = req.body.cate_level;
    const cate_idx = req.body.cate_idx;
    const cate_question_title_idx = req.body.cate_question_title_idx;
    const cate_question_answer_idx = req.body.cate_question_answer_idx;
    console.log(req.body);

    if (pool) {
        createCategoryQuestion(cate_level, cate_idx, cate_question_title_idx, cate_question_answer_idx, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.end();
            }
        })
    } else {
        console.log("디비 연결 실패");
        res.end();
    } 
});

const createCategoryQuestion = function (cate_level, cate_idx, cate_question_title_idx, cate_question_answer_idx, callback){
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        }else{
            const sql = conn.query("insert into tb_cate_question(cate_level, cate_idx, cate_question_title_idx, cate_question_answer_idx) values (?,?,?,?)", [cate_level, cate_idx, cate_question_title_idx, cate_question_answer_idx], (err, result) => {
                conn.release();
                callback(err, result)
            });
        }
    })
}

//카테고리  질문 수정
router.route('/categoryQuestion/update').put((req, res) => {
    const idx = req.body.idx;
    const cate_level = req.body.cate_level;
    const cate_idx = req.body.cate_idx;
    const cate_question_title_idx = req.body.cate_question_title_idx;
    const cate_question_answer_idx = req.body.cate_question_answer_idx;
    console.log(req.body);

    if (pool) {
        updateCategoryQuestion(idx, cate_level, cate_idx, cate_question_title_idx, cate_question_answer_idx, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("카테고리 질문 수정성공");
                res.end();
            }
        });
    }
});

const updateCategoryQuestion = function (idx, cate_level, cate_idx, cate_question_title_idx, cate_question_answer_idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('update tb_cate_question set cate_level=? ,  cate_idx=?, cate_question_title_idx=?, cate_question_answer_idx=? where idx=?', [cate_level, cate_idx, cate_question_title_idx, cate_question_answer_idx, idx], (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                    return;
                } else {
                    callback(null, result);
                }
            })
        }
    })
}

    // 카테고리  질문 삭제
router.route('/categoryQuestion/delete').delete((req, res) => {
    const idx = req.body.idx;
    if (pool) {
        DeleteCategoryQuestion(idx, (err, result) => {
            if (err) {
                console.log('카테고리  질문 삭제 실패!')
            } else {
                console.log('카테고리  질문 삭제 성공!')
                res.end();
            }
        });
    }
});

const DeleteCategoryQuestion = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('delete from tb_cate_question where idx=?;', [idx], (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                    return;
                } else {
                    callback(null, result);
                }
            });
        }
    });
}

// 카테고리 질문 불러오기! question (회원)
router.route('/category').get((req, res) => {
    const cate_level = req.query.cate_level;
    const cate_idx = req.query.cate_idx;

    if (pool) {
        memberQuestion(cate_level, cate_idx, (err, result) => {
            if (err) {
                console.log("카테고리 질문 불러오기 실패");
            } else {
                console.log("카테고리 질문 불러오기 성공");
                res.json(result);
            }
        })
    }
});

const memberQuestion = function (cate_level, cate_idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            if (cate_level = 3) {
                conn.query('select * from tb_cate_question as c join tb_cate_question_title as ct on c.cate_question_title_idx = ct.idx join tb_cate_question_answer as a on c.cate_question_answer_idx = a.idx where c.cate_idx=?', [cate_idx], (err, result1) => {
                    if (err) {
                        console.log(err);
                        conn.release();
                    } else {
                        var cate_level3 = {};
                        var question_list = [];
                        var question = {};
                        var temp_question_idx = null;
                        var answer = {}

                        Array.from(result1).forEach((e) => {
                            if(temp_question_idx != e.cate_question_title_idx){
                                if(temp_question_idx != null){
                                    question_list.push(question)
                                    console.log(question_list)
                                }
                                question = {
                                    title_idx : e.title_idx,
                                    title : e.title,
                                    answerList : []
                                };
                                temp_question_idx = e.cate_question_title_idx;
                            }
                            answer = {
                                idx : e.idx,
                                des : e.des
                            }
                            question.answerList.push(answer)
                            console.log(question)
                        })
                        question_list.push(question)
                        callback(null, question_list);
                        }
                    });
            } else if (cate_level = 2) {
                const sql = conn.query()
                conn.release();
                callback(err, result);
            } else {
                const sql = conn.query()
                conn.release();
                callback(err, result);
            }
        }
    });
}

// const memberQuestion = function (cate_level, cate_idx, callback) {
//     pool.getConnection((err, conn) => {
//         if (err) {
//             console.log(err);
//         } else {
//             if (cate_level = 1) {
//                 conn.query('select * from  tb_cate_question as a  join tb_cate_question_title as b on a.cate_idx=b.cate_idx  where b.cate_idx=?;', [cate_idx], (err, result1) => {
//                     if (err) {
//                         console.log(err);
//                         conn.release();
//                     } else {
//                         console.log(result1);
//                     }
//                 });
//             } else if (cate_level = 2) {
//                 const sql = conn.query()
//                 conn.release();
//                 callback(err, result);
//             } else {
//                 const sql = conn.query()
//                 conn.release();
//                 callback(err, result);
//             }
//         }
//     });
// }

module.exports = router;
