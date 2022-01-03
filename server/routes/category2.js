const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());


// 카테고리2 생성
// 카테고리1 검증 필요
router.route("/category2/regist").post((req, res) => {
    const cate_name = req.body.cate_name;
    const cate1_idx = req.body.cate1_idx;
    console.log(req.body);

    if(pool) createCategory2(cate_name, cate1_idx, (err, result) => {
        if(err) console.log(err);
        else console.log(result);
        res.end();    
    })
    else console.log("디비 연결 실패");
});

function createCategory2(cate_name, cate1_idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("insert into tb_category2(cate_name, cate1_idx) values (?, ?)", [cate_name, cate1_idx], (err, result) => {
                conn.release();
                callback(err, result)
            });
        }
    })
}

// 카테고리2 읽기
router.route("/category2/read").get((req, res) => {
    const idx = req.query.idx;

    if(pool) readCategory2(idx, (err, result) => {
        if(err) console.log(err);
        res.json(result);
    });
    else console.log("디비 연결 실패");

    res.end();
});

function readCategory2(idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("select * from tb_category2 where idx = ?", [idx], (err, result) => {
                conn.release();
                callback(err, result);
            });
        }
    })
}

// 카테고리2 수정
router.route("/category2/update").put((req, res) => {
    const idx = req.body.idx;
    const cate_name = req.body.cate_name;
    const cate1_idx = req.body.cate1_idx;

    if(pool) updateCategory2(idx, cate_name, cate1_idx, (err, result) => {
        if(err) console.log(err);
    });
    else console.log("디비 연결 실패");

    res.end();
});


function updateCategory2(idx, cate_name, cate1_idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("update tb_category2 set cate_name = ?, cate1_idx = ? where idx = ?", [cate_name, cate1_idx, idx], (err, result) => {
                conn.release();
                callback(err, result);
            })
        }
    })
}

// 카테고리2 삭제
router.route("/category2/delete").delete((req, res) => {
    const idx = req.body.idx;
    if(pool) {
        deleteCategory2(idx, (err, result) => {
            if(err) console.log(err);
        });
    }
    else console.log("디비 연결 실패");

    res.end();
});

function deleteCategory2(idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("delete from tb_category2 where idx = ?", [idx], (err, result) => {
                conn.release();
                callback(err, result);
            })
        }
    })
}

// 카테고리2 목록
router.route("/category2/list").get((req, res) => {
    if(pool){
        const cate1_idx = req.query.cate1_idx;
        listCategory2(cate1_idx, (err, result) => {
            if(err) console.log(err);
            res.json(result);
        })
    }
})

function listCategory2(cate1_idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            if(cate1_idx != undefined){
                const sql = conn.query("select * from tb_category2 where cate1_idx = ?", [cate1_idx], (err, result) => {
                    conn.release();
                    callback(err, result);
                })    
            }
            else{
                const sql = conn.query("select * from tb_category2", (err, result) => {
                    conn.release();
                    callback(err, result);
                })
            }
        }
    })
}

module.exports = router;