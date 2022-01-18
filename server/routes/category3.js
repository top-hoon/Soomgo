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
    if (pool) {
        readCategory3(idx, (err, result) => {
            if (err) {
                console.log("카테고리3 불러오지못함");
            } else {
                console.log("카테고리3 불러오기 성공")
                res.json(result);
            }
        });
    }
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
            console.log(result)
            res.json(result);
        })
    }
})

function listCategory3(cate1_idx, cate2_idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            if(cate2_idx == undefined){
                const sql = conn.query("select * from tb_category3 as cate3 join tb_category2 as cate2 where cate1_idx = ? order by cate2_idx asc", [cate1_idx], (err, result) => {
                    conn.release();
                    callback(err, result);
                })
            }
            else if(cate1_idx == undefined){
                const sql = conn.query("select * from tb_category3 where cate2_idx = ?", [cate2_idx], (err, result) => {
                    conn.release();
                    callback(err, result);
                })
            }
            else{
                const sql = conn.query("select * from tb_category3 order by cate2_idx asc", (err, result) => {
                    conn.release();
                    callback(err, result);
                })    
            }
        }
    })
}

// 카테고리 리스트 전체 불러오기
router.route('/categoryFullList').get((req, res) => {
    if(pool){
        const cate1_idx = req.query.cate1_idx;
        const cate2_idx = req.query.cate2_idx;
        categoryFullList(cate1_idx, cate2_idx, (err, result) => {
            if(err) console.log(err)
            res.json(result)
        })
    }
    else console.log('디비 연결 실패');
})

function categoryFullList(cate1_idx, cate2_idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const text = 'select *, (select cate_name from tb_category1 as cate1 where cate1.idx = cate3.cate1_idx) as cate1_name, (select cate_name from tb_category2 as cate2 where cate2.idx = cate3.cate2_idx) as cate2_name from tb_category3 as cate3';
            const list = [];
            if(cate1_idx != undefined && cate2_idx != undefined){
                text += ' where cate3.cate1_idx = ? and cate3.cate2_idx = ?'
                list.push(cate1_idx).push(cate2_idx)
            }
            else if(cate1_idx != undefined){
                text += ' where cate3.cate1_idx = ?'
                list.push(cate1_idx)
            }
            else if(cate2_idx != undefined){
                text += ' where cate3.cate2_idx = ?'
                list.push(cate2_idx)
            }
            const sql = conn.query(text + ' order by cate1_idx asc, cate2_idx asc', list, (err, result) => {
                conn.release();
                if(err) console.log(err);
                else createCategoryLsit(result, callback);
            })
        }
    })
}

function createCategoryLsit(result, callback){
    console.log(result)
    var temp_result = {
        cate1_list : []
    }
    var cate1 = {}
    var cate2 = {}
    var cate3 = {}
    var temp_cate1_idx = null;
    var temp_cate2_idx = null;

    Array.from(result).forEach((e) => {
        if(temp_cate1_idx != e.cate1_idx){
            if(temp_cate1_idx != null){
                cate1.cate2_list.push(cate2)
                temp_result.cate1_list.push(cate1);
                temp_cate2_idx = null
            }
            cate1 = {
                idx : e.cate1_idx,
                cate_name : e.cate1_name,
                cate2_list : []
            };
            temp_cate1_idx = e.cate1_idx;
        }
        if(temp_cate2_idx != e.cate2_idx){
            if(temp_cate2_idx != null) cate1.cate2_list.push(cate2)
            cate2 = {
                idx : e.cate2_idx,
                cate_name : e.cate2_name,
                cate3_list : []
            }
            temp_cate2_idx = e.cate2_idx;
        }
        cate3 = {
            idx : e.idx,
            cate_name : e.cate_name,
            des_title : e.des_title,
            des_text : e.des_text
        }
        cate2.cate3_list.push(cate3)
    })
    cate1.cate2_list.push(cate2);
    temp_result.cate1_list.push(cate1);
    callback(null, temp_result)
}

module.exports = router;