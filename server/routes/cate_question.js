const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
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
    const cate_level = req.body.cate_level;
    const cate_idx = req.body.cate_idx;

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

// const memberQuestion = function (cate_level, cate_idx, callback) {
//     pool.getConnection((err, conn) => {
//         if (err) {
//             console.log(err);
//         } else {
//             if (cate_level = 1) {
//                 conn.query('select * from tb_cate_question where cate_idx=?;', [cate_idx], (err, result1) => {
//                     if (err) {
//                         console.log(err);
//                         conn.release();
//                     } else {
//                         conn.query('select idx, title, max_choose from tb_cate_question_title where cate_idx=?;', [cate_idx], (err, result2) => {
//                             if (err) {
//                                 console.log(err);
//                                 conn.release();
//                             } else {// titile전부들
//                                 for (let i of result2) {
//                                     conn.query('select idx, title_idx, des, des_sub, text_flag, text_sample from tb_cate_question_answer where title_idx;', [i.idx], (err, result3) => {
//                                         console.log(result2);
//                                         console.log(result3);
//                                         callback(err, result3);
//                                     })
//                                 }
//                             }
//                         });
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
const memberQuestion = function (cate_level, cate_idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            if (cate_level = 1) {
                conn.query('select * from tb_cate_question where cate_idx=?;', [cate_idx], (err, result1) => {
                    if (err) {
                        console.log(err);
                        conn.release();
                    } else {
                        console.log(result1);
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

module.exports = router;
