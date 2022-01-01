const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
const conn = mysql.createConnection(config);

router.use(bodyParser.urlencoded({ extended: false }));

//1차카테고리 입력
router.route('/category1/regist').post((req, res) => {
    const cate_name = req.body.cate_name; 
    if (pool) {
        inputCategory1(cate_name, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('1차 카테고리 등록완료');
                res.end();
            }
        });
    }
});
const inputCategory1 = function (cate_name, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err)
        } else {
            conn.query('insert into tb_category1(cate_name)values(?);', [cate_name], (err, result) => {
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


//2차카테고리 입력
router.route('/category2/regist').post((req, res) => {
    const cate1_idx = req.body.cate1_idx;
    const cate_name = req.body.cate_name; 
    if (pool) {
        inputCategory2(cate1_idx, cate_name, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('2차 카테고리 등록완료');
                res.end();
            }
        });
    }
});
const inputCategory2 = function (cate1_idx, cate_name, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err)
        } else {
            conn.query('insert into tb_category2(cate1_idx, cate_name)values(?,?);', [cate1_idx, cate_name], (err, result) => {
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

//3차카테고리 입력
router.route('/category3/regist').post((req, res) => {
    const cate_name = req.body.cate_name; 
    const cate1_idx = req.body.cate1_idx;
    const cate2_idx = req.body.cate2_idx;
    const des_title = req.body.des_title;
    const des_text = req.body.des_text;

    if (pool) {
        inputCategory3(cate1_idx, cate2_idx, des_title, des_text, cate_name, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('3차 카테고리 등록완료');
                res.end();
            }
        });
    }
});
const inputCategory3 = function (cate1_idx, cate2_idx, des_title, des_text, cate_name, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err)
        } else {
            conn.query('insert into tb_category3(cate1_idx, cate2_idx, des_title, des_text, cate_name)values(?,?,?,?,?);', [cate1_idx, cate2_idx, des_title, des_text, cate_name], (err, result) => {
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

//  1차카테고리 수정
router.route('/category1/update').put((req, res) => {
    const idx = req.body.idx;
    const cate_name = req.body.cate_name; 
    if (pool) {
        updateCategory1(idx, cate_name, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('1차 카테고리 수정완료');
                res.end();
            }
        })
    }
});

const updateCategory1 = function (idx, cate_name, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            conn.query('update tb_category1 set cate_name=? where idx=?', [cate_name, idx], (err, result) => {
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

//  2차카테고리 수정
router.route('/category2/update').put((req, res) => {
    const idx = req.body.idx;
    const cate1_idx = req.body.cate1_idx;
    const cate_name = req.body.cate_name; 
    if (pool) {
        updateCategory2(idx,cate1_idx, cate_name, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('2차 카테고리 수정완료');
                res.end();
            }
        })
    }
});

const updateCategory2 = function (idx, cate1_idx, cate_name, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            conn.query('update tb_category2 set cate_name=? where idx=? and cate1_idx', [cate_name, idx, cate1_idx], (err, result) => {
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

//  3차카테고리 수정
router.route('/category3/update').put((req, res) => {
    const idx = req.body.idx;
    const cate1_idx = req.body.cate1_idx;
    const cate2_idx = req.body.cate2_idx;
    const cate_name = req.body.cate_name; 
    const des_title = req.body.des_title;
    const des_text = req.body.des_text;
    if (pool) {
        updateCategory3(idx, cate1_idx, cate2_idx, cate_name, des_title, des_text,(err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('3차 카테고리 수정완료');
                res.end();
            }
        })
    }
});

const updateCategory3 = function (idx, cate1_idx, cate2_idx, cate_name, des_title, des_text, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            conn.query('update tb_category3 set cate_name=?, des_title=?, des_text=? where idx=? and cate1_idx=? and cate2_idx=? ', [cate_name, des_title, des_text, idx, cate1_idx, cate2_idx], (err, result) => {
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

// 1차카테고리가 할머니급이라 엄마 자식까지 삭제하려면 쿼리를 3번쓰던가 아니면  mysql에서  자체적으로 on delete cascade 해주던가 해야할듯
// 1차 카테고리 삭제
router.route('/category1/delete').delete((req, res) => {    // mysql에 cashcade 거는게 나을듯
    const cate1_idx = req.body.cate1_idx;
    if (pool) {
        deleteCategory1(cate1_idx, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('1차 카테고리 삭제완료')
                res.end
            }
        })
    }
})
const deleteCategory1 = function (cate1_idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        }else{
            conn.query('delete from tb_category3')
        }
    })
}



    module.exports = router;
