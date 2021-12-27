const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

const { verifyToken } = require('./jwtcheck');




// NOTICE 등록 
    router.route("/notice/regist").post((req, res) => {
    const tb_subject = req.body.tb_subject;
    const title = req.body.title;
    const content = req.body.content;
    const show_flag = req.body.show_flag;
    const star = req.body.star;
    
    //확인
    console.log(
        `tb_subject:${tb_subject}, content:${content}, title:${title},show_flag:${show_flag}, star:${star}`
    );

    if (pool) {
        createNOTICE(tb_subject, title, content, show_flag, star, (err, result) => {
            if (err) {
            res.writeHead("200", {
                "content-type": "text/html;charset=utf8"
            });
            res.write("<h2>NOTICE 등록 실패!</h2>");
            res.end();
            } else {
            res.writeHead("200", {"content-type": "text/html;charset=utf8"});
            res.write("<h2>NOTICE 등록 성공!</h2>");
            res.end();
            }
        }
        );
    } else {
        res.writeHead("200", {
        "content-type": "text/html;charset=utf8"
        });
        res.write("<h2>데이터베이스 연결 실패!</h2>");
        res.write("<p>데이터베이스에 연결하지 못했습니다</p>");
        res.end();
    }
    });


    //NOTICE 목록
router.route('/notice/list').get((req, res) => {
    if (pool) {
        noticeList((err, result) => {
            if (err) {
                res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                res.write('<h2>NOTICE 목록 출력 실패 </h2>');
                res.end();
            } else {
                res.send(result);
            }
        });
    }
});

    //NOTICE 목록 디테일
router.route('/notice/detail').get((req, res) => {
    const idx = req.query.idx;
    if (pool) {
        noticeDetail(idx, (err, result) => {
            if (err) {
                res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                res.write('<h2>NOTICE  출력 실패 </h2>');
                res.end();
            } else {
                res.send(result);
            }
        });
    }
});

    // NOTICE 수정
router.route('/notice/update').put((req, res) => {
    const idx = req.body.idx;
    const tb_subject = req.body.tb_subject;
    const title = req.body.title;
    const content = req.body.content;
    const show_flag = req.body.show_flag;
    const star = req.body.star;

    //확인
    console.log(`idx:${idx}, tb_subject:${tb_subject},  title:${title}, content:${content}, show_flag:${show_flag}, star:${star}`);

    if (pool) {
        updateNotice(idx, tb_subject, title, content,show_flag, star,(err, result) => {  
            if (err) {
                res.writeHead("200", { "content-type": "text/html;charset=utf-8" });
                res.write("<h2>NOTICE 수정 실패!</h2>");
            } else {
                res.send(result);       // 쫌 보려고
            }
        });
    }
});

    // NOTICE 삭제
router.route('/notice/delete').delete((req, res) => {
    const idx = req.query.idx;
    if (pool) {
        noticeDelete(idx, (err, result) => {
            if (err) {
                    res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                    res.write('<h2>NOTICE  삭제 실패 </h2>');
                    res.end();
            } else {
                res.send(result);
            }
        });
    }
});


    // 함수

    // NOTICE 등록
    const createNOTICE = function (
        tb_subject, title, content, show_flag, star, callback) {
        pool.getConnection((err, conn) => {
            if (err) {
            console.log(err);
            } else {
            const sql = conn.query(
                "insert into tb_notices( tb_subject, title, content, show_flag, star)values(?,?,?,?,?)",
                [ tb_subject, title, content, show_flag, star],
                (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                    return;
                } else {
                    console.log("등록 완료");
                    callback(null, result);
                }
                }
            );
            }
        });
};
        

    // NOTICE 목록
const noticeList = function (callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console(err);
        } else {
            const sql = conn.query('select * from tb_notices', (err, result) => {      // 나중에 limit 해주기 desc
                conn.release();
                if (err) {
                    callback(err, null);
                    return;
                } else {
                    console.log("목록");
                    callback(null, result);
                }
            }
        );
        }
    });
};

    //NOTICE 목록 디테일
const noticeDetail = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('select * from tb_notices where idx=?;', [idx], (err, result) => {
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
    //NOTICE 수정
const updateNotice = function (idx, tb_subject, title, content,show_flag, star, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('update tb_notices set tb_subject=?, title=?, content=?, show_flag=?, star=?  where idx=?;', [ tb_subject, title, content,show_flag, star, idx], (err, result) => {
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
    
    
    // NOTICE 삭제
const noticeDelete = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('delete from tb_notices where idx=?;', [idx], (err, result) => {
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

