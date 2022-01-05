const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());


// 카테고리  타이틀 생성
router.route("/categoryTitle/regist").post((req, res) => {
    const cate_level = req.body.cate_level;
    const cate_idx = req.body.cate_idx;
    const title = req.body.title;
    const max_choose = req.body.max_choose
    console.log(req.body);

    if(pool) createCategoryTitle(cate_level,  cate_idx, title, max_choose,(err, result) => {
        if(err) console.log(err);
        else console.log(result);
        res.end();    
    })
    else console.log("디비 연결 실패");
});

function createCategoryTitle(cate_level,  cate_idx, title, max_choose, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("insert into tb_cate_question_title(cate_level, cate_idx, title, max_choose) values (?,?,?,?)", [cate_level, cate_idx, title, max_choose], (err, result) => {
                conn.release();
                callback(err, result)
            });
        }
    })
}

// 카테고리  타이틀 수정
router.route("/categoryTitle/update").put((req, res) => {
    const idx = req.body.idx;
    const cate_level = req.body.cate_level;
    const cate_idx = req.body.cate_idx;
    const title = req.body.title;
    const max_choose = req.body.max_choose

    if (pool) {
        updateCategoryTitle(idx, cate_level, cate_idx, title, max_choose, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("타이틀 수정 완료");
                res.end();
            }
        });
    }   
});
const updateCategoryTitle=function(idx, cate_level,  cate_idx, title, max_choose, callback){
    pool.getConnection((err, conn) => {
        if (err) console.log(err);
        else {
            const sql = conn.query("update tb_cate_question_title set cate_level = ?, cate_idx = ?,title = ?,max_choose = ? where idx = ?", [cate_level, cate_idx, title, max_choose, idx], (err, result) => {
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


// 카테고리 타이틀 삭제
router.route("/categoryTitle/delete").delete((req, res) => {
    const idx = req.body.idx;
    if (pool) {
        deleteCategoryTitle(idx, (err, result) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                console.log("삭제 완료");
                res.end();
            }
        });
    }
});

const deleteCategoryTitle = function(idx, callback){
    pool.getConnection((err, conn) => {
        if(err) console.log(err);
        else{
            const sql = conn.query("delete from tb_cate_question_title where idx = ?", [idx], (err, result) => {
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


// //카테고리 타이틀 읽기
// router.route("/categoryTitle/read").get((req, res) => {
//     const cate_level = req.body.cate_level;
//     const cate_idx = req.body.cate_idx;
//     if (pool) {
//         readCategoryTitile(cate_level, cate_idx,(err, result)=> {
//             if (err) {
//                 console.log(err);
//                 console.log("타이틀 읽기 실패");
//             } else {
//                 console.log("타이틀 읽기 성공");
//                 res.json(result);
//             }
//         });
//     }
// });

// function readCategoryTitile  (cate_level, cate_idx, callback) {
//     pool.getConnection((err, conn) => {
//         if (err) {
//             console.log(err);
//         } else {
//             if (cate_level = 1) {
//                 const sql= conn.query('select * from tb_category1 where idx =?', [cate_idx], (err, result) => {
//                     conn.release();
//                     callback(err, result);
//                 });
//             }else if (cate_level = 2) {
//                const sql= conn.query('select * from tb_category2 where idx =?', [cate_idx], (err, result) => {
//                     conn.release();
//                     callback(err, result);
//                 });
//             }else {
//                const sql= conn.query('select * from tb_category3 where idx =?', [cate_idx], (err, result) => {
//                     conn.release();
//                     callback(err, result);
//                 });
//             }
//         }
//     });
// }





module.exports = router;
