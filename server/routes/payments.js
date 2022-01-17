const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const e = require('express');
const pool = mysql.createPool(config);
const router = express.Router();
const conn = mysql.createConnection(config);

router.use(bodyParser.urlencoded({ extended: false }));

router.route('/payment/store').post((req, res) => {
    const service_price = req.body.service_price; //=> 보너스 금액?이지?
    const service_date = req.body.service_date;//=> 이게 뭐였쥐...
    const payment_type = req.body.payment_type; 
    const total_price = req.body.total_price;
    const gosu_idx = req.body.gosu_idx;
    // details(내역) 에는 어떤식으로 기록할지 얘기를.. 
    if (pool) {
        payment(service_price, service_date,  payment_type,total_price, gosu_idx, (err, result1) => {
            if (err) {
                console.log(err);
            } else {
                console.log("결제가 완료되었습니다.")
                const b_details = service_price + '원을 충전하였습니다.';
                bonusCash(service_price, gosu_idx, b_details, (err, result2) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("보너스 캐쉬 충전완료")
                        pay_idx = result1.insertId;
                        cash_bonus_idx = result2.insertId;
                        const sm_type = '1';    //  타입 1:충전, 2:사용
                        const details = total_price + '원을 충전하였습니다.'
                        cash(total_price, sm_type, gosu_idx, details, cash_bonus_idx, pay_idx, (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("캐쉬 충전을 완료 하였습니다.");
                                gosuCash(total_price, service_price, gosu_idx, (err, result) => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log("고수쪽도 완료")
                                        res.end();
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
})
// 일부러 쿼리문 그냥 좀 나눠서 썼는데 다음에 줄여 놓을게...
const payment = function (service_price, service_date,  payment_type,total_price, gosu_idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('INSERT into tb_payments (service_price, service_date,  payment_type,total_price, gosu_idx) values(?,?,?,?,?)',[service_price, service_date,  payment_type,total_price, gosu_idx], (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            })
        }
    })
}
const bonusCash = function (service_price, gosu_idx, b_details, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('insert into tb_cash_bonus(cash, gosu_idx, details )values(?,?,?)', [service_price, gosu_idx, b_details], (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            })
        }
    })
}
const cash = function (total_price, sm_type, gosu_idx, details, cash_bonus_idx, pay_idx, callback){
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('insert tb_soomgocash(cash, sm_type, gosu_idx, details, cash_bonus_idx, pay_idx)values(?,?,?,?,?,?)', [total_price, sm_type, gosu_idx, details, cash_bonus_idx, pay_idx], (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            })
        }
    })
}

const gosuCash = function (total_price, service_price, gosu_idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            conn.query('update tb_gosus set cash=cash+? where idx=?', [total_price, gosu_idx]);
            conn.query('update tb_gosus set cash_bonus=cash_bonus +? where idx=?', [service_price, gosu_idx], (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            })
        }
    })
    
}





    module.exports = router;