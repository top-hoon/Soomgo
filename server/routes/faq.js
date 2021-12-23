const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }))


// FAQ 등록 
    router.route("/faq/regist").post((req, res) => {
    const faq_type = req.body.faq_type;
    const tb_subject = req.body.tb_subject;
    const title = req.body.title;
    const content = req.body.content;
    
    //확인
    console.log(
        `faq_type:${faq_type}, tb_subject:${tb_subject}, title:${title}, content:${content}`
    );

        if (pool) {
            createFaq(faq_type, tb_subject, title, content, (err, result) => {
                if (err) {
                    console.log("FAQ 등록 실패")
                } else {
                    console.log("FAQ 등록 성공!");
                    res.end();
                }
            }
            );
        } else {
            console.log("DB연결 실패")
        }
    });

    //FAQ 목록
router.route('/faq/list').get((req, res) => {
    if (pool) {
        faqList((err, result) => {
            if (err) {
                console.log("FAQ목록 출력 실패")
            } else {
                console.log("FAQ 목록 출력 성공")
                res.end();
            }
        });
    }
});

    //FAQ 목록 디테일
router.route('/faq/detail').get((req, res) => {
    const idx = req.query.idx;
    if (pool) {
        faqDetail(idx, (err, result) => {
            if (err) {
                console.log("FAQ 목록 출력 실패");
            } else {
                console.log("FAQ 목록 출력 성공");
                res.end();
            }
        });
    }
});

    // FAQ 수정
router.route('/faq/update').put((req, res) => {
    const idx = req.body.idx;
    const faq_type = req.body.faq_type;
    const tb_subject = req.body.tb_subject;
    const title = req.body.title;
    const content = req.body.content;

    //확인
    console.log(`idx:${idx},  faq_type:${faq_type}, tb_subject:${tb_subject}, title:${title}, content:${content}`);

    if (pool) {
        updateFaq(idx, faq_type, tb_subject, title, content, (err, result) => {  
            if (err) {
                console.log("FAQ 수정 실패!");
            } else {
                console.log("FAQ 수정 성공!");
                res.end();
            }
        });
    }
});

    // FAQ 삭제
router.route('/faq/delete').delete((req, res) => {
    const idx = req.query.idx;
    if (pool) {
        faqDelete(idx, (err, result) => {
            if (err) {
                console.log('FAQ 목록 출력 실패')
            } else {
                console.log('FAQ 목록 출력 성공')
                res.end();
            }
        });
    }
});

    // 함수

    // FAQ 등록
    const createFaq = function (
        faq_type, tb_subject, title, content, callback) {
        pool.getConnection((err, conn) => {
            if (err) {
            console.log(err);
            } else {
            const sql = conn.query(
                "insert into tb_faqs( faq_type, tb_subject, title, content)values(?,?,?,?)",
                [faq_type, tb_subject, title, content],
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
        

    // FAQ 목록
const faqList = function (callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console(err);
        } else {
            const sql = conn.query('select * from tb_faqs', (err, result) => {      // 나중에 limit 해주기 desc
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

    //FAQ 목록 디테일
const faqDetail = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('select * from tb_faqs where idx=?;', [idx], (err, result) => {
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
    //FAQ 수정
const updateFaq = function (idx, faq_type, tb_subject, title, content, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('update tb_faqs set faq_type=?, tb_subject=?, title=?, content=?  where idx=?;', [ faq_type, tb_subject, title, content, idx], (err, result) => {
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
    
    
    // FAQ 삭제
const faqDelete = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('delete from tb_faqs where idx=?;', [idx], (err, result) => {
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

