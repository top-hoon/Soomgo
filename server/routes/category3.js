const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());


// 카테고리3 생성
// 카테고리2 검증 필요
router.route("/category3/regist").post((req, res) => {
    const cate_name = req.body.cate_name;
    const cate1_idx = req.body.cate1_idx;
    const cate2_idx = req.body.cate2_idx;
    const des_title = req.body.des_title;
    const des_text = req.body.des_text;
    console.log(req.body);

    if(pool) createCategory3(cate_name, cate1_idx, cate2_idx, des_title, des_text, (err, result) => {
        if(err) console.log(err);
        else console.log(result);
        res.end();    
    })
    else console.log("디비 연결 실패");
});

function createCategory3(cate_name, cate1_idx, cate2_idx, des_title, des_text, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("insert into tb_category3(cate_name, cate1_idx, cate2_idx, des_title, des_text) values (?,?,?,?,?)", [cate_name, cate1_idx, cate2_idx, des_title, des_text], (err, result) => {
                conn.release();
                callback(err, result)
            });
        }
    })
}

// 카테고리3 읽기
router.route("/category3/read").get((req, res) => {
    const idx = req.query.idx;

    if(pool) readCategory3(idx, (err, result) => {
        if(err) console.log(err);
        res.json(result);
    });
    else console.log("디비 연결 실패");

    res.end();
});

function readCategory3(idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("select * from tb_category3 where idx = ?", [idx], (err, result) => {
                conn.release();
                callback(err, result);
            });
        }
    })
}

// 카테고리3 수정
router.route("/category3/update").put((req, res) => {
    const idx = req.body.idx;
    const cate_name = req.body.cate_name;
    const cate1_idx = req.body.cate1_idx;
    const cate2_idx = req.body.cate2_idx;
    const des_title = req.body.des_title;
    const des_text = req.body.des_text;

    if(pool) updateCategory3(idx, cate_name, cate1_idx, cate2_idx, des_title, des_text, (err, result) => {
        if(err) console.log(err);
    });
    else console.log("디비 연결 실패");

    res.end();
});


function updateCategory3(idx, cate_name, cate1_idx, cate2_idx, des_title, des_text, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("update tb_category3 set cate_name = ?, cate1_idx = ?, cate2_idx = ?, des_title = ?, des_text = ? where idx = ?", [cate_name, cate1_idx, cate2_idx, des_title, des_text, idx], (err, result) => {
                conn.release();
                callback(err, result);
            })
        }
    })
}

// 카테고리3 삭제
router.route("/category3/delete").delete((req, res) => {
    const idx = req.body.idx;
    if(pool) {
        deleteCategory3(idx, (err, result) => {
            if(err) console.log(err);
        });
    }
    else console.log("디비 연결 실패");

    res.end();
});

function deleteCategory3(idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("delete from tb_category3 where idx = ?", [idx], (err, result) => {
                conn.release();
                callback(err, result);
            })
        }
    })
}

// 카테고리3 목록
router.route("/category3/list").get((req, res) => {
    if(pool){
        const cate1_idx = req.query.cate1_idx;
        const cate2_idx = req.query.cate2_idx;
        listCategory3(cate1_idx, cate2_idx, (err, result) => {
            if(err) console.log(err);
            res.json(result);
        })
    }
})

function listCategory3(cate1_idx, cate2_idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            if(cate1_idx != undefined){
                const sql = conn.query("select * from tb_category3 where cate1_idx = ?", [cate1_idx], (err, result) => {
                    conn.release();
                    callback(err, result);
                })
            }
            else if(cate2_idx != undefined){
                const sql = conn.query("select * from tb_category3 where cate2_idx = ?", [cate2_idx], (err, result) => {
                    conn.release();
                    callback(err, result);
                })
            }
            else{
                const sql = conn.query("select * from tb_category3", (err, result) => {
                    conn.release();
                    callback(err, result);
                })    
            }
        }
    })
}

module.exports = router;