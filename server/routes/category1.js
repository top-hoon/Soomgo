const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());

// 카테고리1 생성
router.route("/category1/regist").post((req, res) => {
    const cate_name = req.body.cate_name;
    console.log(req.body);

    if(pool) createCategory1(cate_name, (err, result) => {
        if(err) console.log(err);
        else console.log(result);
        res.end();    
    })
    else console.log("디비 연결 실패");
});

function createCategory1(cate_name, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("insert into tb_category1(cate_name) values (?)", [cate_name], (err, result) => {
                conn.release();
                callback(err, result)
            });
        }
    })
}

// 카테고리1 읽기
router.route("/category1/read").get((req, res) => {
    const idx = req.query.idx;
    console.log("test");

    if(pool) readCategory1(idx, (err, result) => {
        if(err) console.log(err);
        res.json(result);
    });
    else console.log("디비 연결 실패");
});

function readCategory1(idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("select * from tb_category1 where idx = ?", [idx], (err, result) => {
                conn.release();
                callback(err, result);
            });
        }
    })
}



// 카테고리1 수정
router.route("/category1/update").put((req, res) => {
    const idx = req.body.idx;
    const cate_name = req.body.cate_name;

    if(pool) updateCategory1(idx, cate_name, (err, result) => {
        if(err) console.log(err);
    });
    else console.log("디비 연결 실패");

    res.end();
});


function updateCategory1(idx, cate_name, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("update tb_category1 set cate_name = ? where idx = ?", [cate_name, idx], (err, result) => {
                conn.release();
                callback(err, result);
            })
        }
    })
}

// 카테고리1 삭제
router.route("/category1/delete").delete((req, res) => {
    const idx = req.body.idx;
    if(pool) {
        deleteCategory1(idx, (err, result) => {
            if(err) console.log(err);
        });
    }
    else console.log("디비 연결 실패");

    res.end();
});

function deleteCategory1(idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("delete from tb_category1 where idx = ?", [idx], (err, result) => {
                conn.release();
                callback(err, result);
            })
        }
    })
}

// 카테고리1 목록
router.route("/category1/list").get((req, res) => {
    if(pool){
        listCategory1((err, result) => {
            if(err) console.log(err);
            res.json(result);
        })
    }
})

function listCategory1(callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("select * from tb_category1", (err, result) => {
                conn.release();
                callback(err, result);
            })
        }
    })
}
module.exports = router;