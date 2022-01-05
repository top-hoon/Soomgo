const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());


// 카테고리  답변등록
router.route("/categoryAnswer/regist").post((req, res) => {
    const title_idx = req.body.title_idx;
    const des = req.body.des;
    const des_sub = req.body.des_sub;
    const text_flag = req.body.text_flag
    const text_sample = req.body.text_sample
    console.log(req.body);

    if (pool) {
        createCategoryAnswer(title_idx, des, des_sub, text_flag, text_sample, (err, result) => {
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

const createCategoryAnswer = function (title_idx, des, des_sub, text_flag, text_sample, callback){
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        }else{
            const sql = conn.query("insert into tb_cate_question_answer(title_idx, des, des_sub, text_flag, text_sample) values (?,?,?,?,?)", [title_idx, des, des_sub, text_flag, text_sample], (err, result) => {
                conn.release();
                callback(err, result)
            });
        }
    })
}

//카테고리  답변 수정
router.route('/categoryAnswer/update').put((req, res) => {
    const idx = req.body.idx;
    const title_idx = req.body.title_idx;
    const des = req.body.des;
    const des_sub = req.body.des_sub;
    const text_flag = req.body.text_flag
    const text_sample = req.body.text_sample
    if (pool) {
        updateCategoryAnswer(idx, title_idx, des, des_sub, text_flag, text_sample, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("카테고리 답변 수정성공");
                res.end();
            }
        });
    }
});

const updateCategoryAnswer = function (idx, title_idx, des, des_sub, text_flag, text_sample, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('update tb_cate_question_answer set title_idx=? ,  des=?, des_sub=?, text_flag=?, text_sample=? where idx=?', [ title_idx, des, des_sub, text_flag, text_sample,idx], (err, result) => {
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

    // 카테고리  답변 삭제
router.route('/categoryAnswer/delete').delete((req, res) => {
    const idx = req.query.idx;
    if (pool) {
        DeleteCategoryAnswer(idx, (err, result) => {
            if (err) {
                console.log('카테고리  답변 삭제 실패!')
            } else {
                console.log('카테고리  답변 삭제 성공!')
                res.end();
            }
        });
    }
});

const DeleteCategoryAnswer = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('delete from tb_cate_question_answer where idx=?;', [idx], (err, result) => {
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



module.exports = router;
