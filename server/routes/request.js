const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const { verifyToken } = require('./jwtcheck');
const pool = mysql.createPool(config);
const router = express.Router();
const conn = mysql.createConnection(config,{multipleStatements: true});
router.use(bodyParser.urlencoded({ extended: false }));



// 요청서 등록  (지정요청)
router.route('/request/hire').post(verifyToken, (req, res) => {
    const mem_idx = req.idx;
    const cate3_idx = req.body.cate3_idx;
    const gosu_idx = req.body.gosu_idx; 
    const data = req.body.data; 

    if (pool) {
        registRequest(mem_idx, cate3_idx, gosu_idx, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.insertId != undefined);
                console.log('요청서 등록완료');
                Array.from(data).forEach((e) => {
                    const request_idx = result.insertId;
                    question_title_idx = e.question_title_idx;
                    question_answer_idx = e.question_answer_idx;
                    answer_text = e.answer_text;
                    registRequestAns(request_idx, question_title_idx, question_answer_idx, answer_text, (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("요청서 답변등록 완료")
                            res.end();
                        }
                    });
                });
            }
        });
    }
});
const registRequest = function (mem_idx, cate3_idx, gosu_idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err)
        } else {
            const sql = conn.query('insert into tb_requests(mem_idx, cate3_idx,gosu_idx)values(?,?,?);', [mem_idx, cate3_idx,gosu_idx], (err, result) => {
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
const registRequestAns = function (request_idx, question_title_idx, question_answer_idx, answer_text, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('insert tb_request_answer(request_idx, question_title_idx, question_answer_idx, answer_text)values(?,?,?,?);', [request_idx, question_title_idx, question_answer_idx, answer_text], (err, result) => {
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

// 요청서 등록  (위치)
router.route('/request/location/hire').post(verifyToken, (req, res) => {
    const mem_idx = req.idx;
    const cate3_idx = req.body.cate3_idx;
    const data = req.body.data; 
    const lat = req.body.lat;
    const lon = req.body.lon;

    if (pool) {
                registMyplaceRequest(mem_idx, cate3_idx,lat,lon, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);

                    if (result.insertId != undefined);
                    console.log('요청서 등록완료');
                    Array.from(data).forEach((e) => {
                        const request_idx = result.insertId;
                        question_title_idx = e.question_title_idx;
                        question_answer_idx = e.question_answer_idx;
                        answer_text = e.answer_text;
                        registMyplaceRequestAns(request_idx, question_title_idx, question_answer_idx, answer_text, (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("요청서 답변등록 완료")
                                res.end();
                            }
                        });
                    });
                }
            });
        // });
    }
});
const registMyplaceRequest = function (mem_idx, cate3_idx,lat,lon, callback){
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err)
        } else {
            const sql = conn.query('SELECT idx, (6371 * acos (cos ( radians(?) )* cos( radians( latitude ) )* cos( radians( longitude ) - radians(?) )+ sin ( radians(?) )* sin( radians( latitude ) )* sin( radians( latitude ) ))) AS distance1 FROM tb_gosus;', [lat, lon,lat], (err, result) => {
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




const registMyplaceRequestAns = function (request_idx, question_title_idx, question_answer_idx, answer_text, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('insert tb_request_answer(request_idx, question_title_idx, question_answer_idx, answer_text)values(?,?,?,?);', [request_idx, question_title_idx, question_answer_idx, answer_text], (err, result) => {
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





//  고수 개인 요청서 리스트    
router.route("/request/list").get(verifyToken, (req, res) => {
    const gosu_idx = req.gosu_idx;
    if (pool) {
        gerList(gosu_idx, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log("리스트")
                res.send(result);
            }
        });
    }
});

const gerList = function (gosu_idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = 'select r.idx, r.regdate,m.idx as mem_idx, m.mem_name, c.cate_name, g.my_place,ca.des, a.answer_text from tb_requests as r join tb_members as m on r.mem_idx=m.idx join tb_category3 as c on r.cate3_idx = c.idx join tb_gosus as g on r.gosu_idx = g.idx join tb_request_answer as a on r.idx = a.request_idx join tb_cate_question_answer as ca on a.question_answer_idx= ca.idx  where r.gosu_idx = ? ;';
            const sqlp = mysql.format(sql, gosu_idx);

            conn.query( sqlp, (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                }
                else {
                    var request_list = [];
                    var request = {};
                    var temp_idx = null;
                    var answer = {}
                    Array.from(result).forEach((e) => {
                        if (temp_idx != e.idx) {
                            if (temp_idx != null) {
                                request_list.push(request)
                            }
                            request = {
                                req_idx: e.idx,
                                mem_idx:e.mem_idx,
                                name: e.mem_name,
                                cate_name: e.cate_name,
                                myplace: e.my_place,
                                regdate: e.regdate,
                                answerList:[]
                            };
                            temp_idx = e.idx;
                        }
                        answer = {
                            des: e.des,
                            ans_t:e.answer_text
                        }
                        request.answerList.push(answer)
                    })
                    request_list.push(request)
                    callback(null, request_list);
                };
            });
        }
    });
}

//  고수 요청서 읽기(견적서 보내는 페이지)
router.route("/request/received").get((req, res) => {
    const idx = req.query.idx;   // 요청서 idx
    if (pool) {
        readRequest(idx, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log("요청서 읽기")
                res.json(result);
            }
        })
    }
})

const readRequest = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query(' select r.idx, r.regdate, m.mem_name, m.image, c.cate_name, g.my_place,(select count(*)from tb_estimates where idx=m.idx)as estimate_count, (select count(*)from tb_requests where idx=m.idx)as request_count,  ct.idx as cate_title_idx ,ct.title, ca.des, a.answer_text from tb_requests as r join tb_members as m on r.mem_idx=m.idx join tb_category3 as c on r.cate3_idx = c.idx join tb_gosus as g on r.gosu_idx = g.idx join tb_request_answer as a on r.idx = a.request_idx join tb_cate_question_answer as ca on a.question_answer_idx= ca.idx join tb_cate_question_title as ct on ca.title_idx=ct.idx where r.idx = ?; ', [idx], (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    var request_list = [];
                    var request = {};
                    var temp_idx = null;
                    var answer = {}
                    Array.from(result).forEach((e) => {
                        if (temp_idx != e.idx) {
                            if (temp_idx != null) {
                                request_list.push(request)
                            }
                            request = {
                                idx: e.idx,
                                image:e.image,
                                name: e.mem_name,
                                cate_name: e.cate_name,
                                myplace: e.my_place,
                                estimate_count:e.estimate_count,
                                regdate: e.regdate,
                                request_count:e.request_count,
                                answerList:[]
                            };
                            temp_idx = e.idx;
                        }
                        answer = {
                            title_idx : e.cate_title_idx,
                            title:e.title,
                            answer: e.des,
                            ans_text:e.answer_text
                        }
                        request.answerList.push(answer)
                    })
                    request_list.push(request)
                    callback(null, request_list);
                }
            })
        }
    })
}





    module.exports = router;
