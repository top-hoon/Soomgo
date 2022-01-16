const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const { verifyToken } = require('./jwtcheck');
const pool = mysql.createPool(config);
const router = express.Router();
const conn = mysql.createConnection(config);
const multer = require('multer');
const path = require('path');
router.use(bodyParser.urlencoded({ extended: false }));


// 견적서 보내기
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
    callback(null, './estimates');  
    }, 
    filename: (req, file, callback) => {
        const ext = path.extname(file.originalname);
        callback(null, file.fieldname+'_'+Date.now()+ext);
    }
});
const fileFilter = (req, file, callback) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {    // 파일허용범위 
        callback(null, true);
    } else {
        console.log('no');
        callback(null, false);
    }
}
upload = multer({ storage: storage, fileFilter: fileFilter })
router.route("/estimate/regist").post(verifyToken, upload.single('files'), (req, res) => {
    const salary = req.body.salary;
    const price = req.body.price;
    const content = req.body.content;
    const files = req.file.path;
    const mem_idx = req.body.mem_idx;   //   요청서 보낸 회원 idx;
    const idx = req.idx;        // 고수 idx 뽑으려고
    // const gosu_idx = req.body.gosu_idx;   //  일단 뽑어서 보내는데 논의 해야할듯 ㅜ
    const often = req.body.often;   // 자주쓰는 견적 추가하기 버튼 (0, 1);
    const titlename = req.body.titlename;   // 자주쓰는 견적서 title;
    const title = titlename + '과외 견적';
    const pay = req.body.pay;   // 캐쉬 사용금액인데 항상 1200원인가..?

    if (pool) {
        sendEstimate(salary, price, content, files, mem_idx, idx,often,title,pay,(err, result) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                console.log('성공');
                res.json(result);
            }
        })
    }
});
// 슬슬 채팅..
const sendEstimate = function (salary, price, content, files, mem_idx, idx,often, title,pay,callback) {
    pool.getConnection((err, conn) => {
        if (err) { console.log(err); }
        else {
            conn.query("select gosu_idx from tb_members  where idx = ?", [idx], (err1, result1) => {
                if (err1) { console.log(err1); }
                else {
                    if (result1 == undefined) console.log("gosu_idx가 없습니다.");
                    const gosu_idx = result1[0].gosu_idx;
                    conn.query('insert into tb_estimates(salary, price, content, files, mem_idx, gosu_idx)values(?,?,?,?,?,?)',[salary, price, content, files, mem_idx, gosu_idx], (err2, result2) => {
                        if (err2) {
                            console.log(err2)
                        } else {
                            console.log('견적서를 보냈습니다.');
                            if (often == 0 || often == '0') {
                                console.log("자주쓰는 견적서에 저장안함")
                            } else {
                                conn.query('insert into tb_estimate_often(title, salary, price, content, files, gosu_idx)values(?,?,?,?,?,?)', [title, salary, price, content, files, gosu_idx], (err3, result3) => {
                                    if (err3) {
                                        console.log(err3);
                                    } else {
                                        console.log('자주쓰는 견적서에 추가했습니다.')
                                        conn.query('select cash_bonus from tb_gosus where idx=?', [gosu_idx], (err4, result4) => {
                                            if (err4) {
                                                console.log(err4);
                                            } else {
                                                const cash_bonus = result4[0].cash_bonus;
                                                const sm_type = '2';    //  타입 1:충전, 2:사용
                                                const details = pay + '원을 견적서 보내기에 사용하였습니다.'

                                                if (cash_bonus>=pay) {
                                                    conn.query('insert into tb_cash_bonus(cash,gosu_idx, details)values(?,?,?)', [pay, gosu_idx, details])
                                                    conn.query('update tb_gosus set cash_bonus=cash_bonus-? where idx=?', [pay, gosu_idx], (err5, result5) => {
                                                        if (err5) { console.log(err5) }
                                                        else {
                                                            console.log('보너스 캐쉬를 사용했습니다.');
                                                        }
                                                    });
                                                } else {
                                                    conn.query('insert into tb_soomgocash(cash, sm_type, gosu_idx, details)values(?,?,?,?)', [pay, sm_type, gosu_idx, details]);
                                                    conn.query('update tb_gosus set cash=cash-? where idx=?', [pay, gosu_idx], (err, result6) => {
                                                        conn.release();
                                                        if (err) { callback(err,null) }
                                                        else {
                                                            console.log('숨고 캐쉬를 사용했습니다.');
                                                            callback(null, result6);
                                                        }
                                                    })
                                                }
                                            }
                                        })
                                    }
                                })
                            }
                        }
                    })
                }
            })
        }
    })
}




    module.exports = router;
