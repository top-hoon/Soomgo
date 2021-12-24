const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }))
// 비밀 번호 암호화
const crypto = require('crypto');


// 회원가입 
    router.route("/member/regist").post((req, res) => {
    const mem_name = req.body.mem_name;
    const email = req.body.email;
    const mem_password = req.body.mem_password;
    const hp = req.body.hp;
    const gender = req.body.gender;
    const sms_flag = req.body.sms_flag;
    const gosu_idx = req.body.gosu_idx;
    const mem_site = req.body.mem_site;
    const Salt = crypto.randomBytes(64).toString('base64');    // 매번 같길래 여기다가
    
    //확인
    console.log(
        `mem_name:${mem_name}, email:${email}, hp:${hp}
        gender:${gender}, sms_flag:${sms_flag}, gosu_idx:${gosu_idx}, mem_site:${mem_site}, ${Salt}`
        );
        
    if (pool) {
        createMember(mem_name, email, mem_password, hp, gender, sms_flag, gosu_idx, mem_site, Salt,(err, result) => {
            if (err) {
                console.log("회원가입 실패!");
            } else {
                console.log("회원가입 성공!");  
                res.end();
            }
        });
    } else {
        console.log("데이터베이스 연결 실패!");
    }
    });


    
//     // 로그인 
// router.route('/member/login').post((req, res) => {
//     const email = req.body.email;
//     const mem_password = req.body.mem_password;
//     var sql1 = 'SELECT salt, mem_password FROM tb_members WHERE email = ?';
//     if (pool) {
//         login  (email, mem_password, callback) {
//             pool.getConnection((err, conn) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     conn.query(sql1, [email], function (err, result) {
//                         if (err)
//                             console.log(err);
//                         if (!result[0]) {
//                             console.log(result);
//                             member = result[0];
//                         } else {
//                             crypto.pbkdf2Sync(mem_password, member.salt, 100000, 32, 'sha512'), function (err, der) {
//                                 if (err) 
//                                     console.log(err);
//                                 if (der.toString('base64') === member.mem_password) {
//                                     console.log("성공;;")
//                                 }
//                             }
//                         }
//                     });
//                 }
//             });
//         }
//     }
// });

    // 로그인 
router.route('/member/login').post((req, res) => {
    const email = req.body.email;
    const mem_password = req.body.email;
    if (pool) {
        emailCheck(email, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("ID는 있음");
                res.end();
            }
            if (result.length != 0) {
                login(email, mem_password, (err, result1) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(result1[0]);  
                        const member = result1[0];  
                        crypto.pbkdf2Sync(mem_password, member.salt, 100000, 32, 'sha512', function (err, pass) {   
                            console.log('?');
                            if (err)
                                console.log(err);
                            if (pass.toString('base64') === member.mem_password) {
                                console.log(pass.toString('base64'));
                                console.log('됬다');
                            } else {
                                console.log("틀렸다.");
                            }
                        })
                    }
                });
            }
        });
    }
});


    //회원 목록
router.route('/member/list').get((req, res) => {
    if (pool) {
        memberList((err, result) => {
            if (err) {
                console.log("회원목록 출력 실패")
            } else {
                console.log("회원목록 출력 성공")
                res.send(result);
                res.end();
            }
        });
    }
});

    //회원 목록 디테일
router.route('/member/detail').get((req, res) => {
    const idx = req.query.idx;
    if (pool) {
        memberDetail(idx, (err, result) => {
            if (err) {
                console.log("회원 정보 디테일 불러오지못함");
            } else {
                console.log("회원정보 불러오기 성공")
                res.send(result);
                res.end();
            }
        });
    }
});

    // 회원 수정
router.route('/member/update').put((req, res) => {
    const idx = req.body.idx;
    const mem_name = req.body.mem_name;
    const email = req.body.email;
    const mem_password = req.body.mem_password;
    const hp = req.body.hp;
    const gender = req.body.gender;
    const sms_flag = req.body.sms_flag;
    const gosu_idx = req.body.gosu_idx;
    const mem_site = req.body.mem_site;

    //확인
    console.log(`idx:${idx}, mem_name:${mem_name}, email:${email}, hp:${hp}
        gender:${gender}, sms_flag:${sms_flag}, gosu_idx:${gosu_idx}, mem_site:${mem_site}`);

    if (pool) {
        updateMembers(idx, mem_name, email, mem_password, hp, gender, sms_flag, gosu_idx, mem_site, (err, result) => {  
            if (err) {
                console.log("회원정보 수정 실패!");
                // console.log(err);
            } else {
                console.log("회원정보 수정 성공!")
                res.end();
            }
        });
    }
});

    // 회원 삭제
router.route('/member/delete').delete((req, res) => {
    const idx = req.query.idx;
    if (pool) {
        memberDelete(idx, (err, result) => {
            if (err) {
                console.log('회원 삭제 실패!')
            } else {
                console.log('회원 삭제 성공!')
                res.end();
            }
        });
    }
});

    // 함수
// 
    //  회원가입
    const createMember = function (
    mem_name, email, mem_password, hp, gender, sms_flag, gosu_idx, mem_site, Salt, callback) {
        pool.getConnection((err, conn) => {
            if (err) {
            console.log(err);
            } else {
                const hashedPassword = crypto.pbkdf2Sync(mem_password, Salt, 100000, 32, 'sha512').toString('base64');
                const sql = conn.query(
                'insert into tb_members( mem_name, email, mem_password, hp, gender, sms_flag, gosu_idx, mem_site, salt)values(?,?,?,?,?,?,?,?,?);',
                [mem_name, email, hashedPassword, hp, gender, sms_flag, gosu_idx, mem_site, Salt],
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

// 이메일 체크
const emailCheck = function (email, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('select*from tb_members where email=?;', [email], (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                    return;
                } else {
                    console.log("비밀번호랑 salt");
                    callback(null, result);
                }
            });
        }
    });
}

    // 로그인
const login = function (
    email, mem_password, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.login(err);
        } else {
            const sql = conn.query('select salt, mem_password from tb_members where email = ?;', [email], (err, result) => {
                conn.release();
                if (err) {
                    console.log(err);
                } else {
                    if ( result == ' ') {
                        callback(null,  false);
                    } else {
                        callback(null, result);
                    }
                }
            });
        }
    });
}
        

    // 회원 목록
const memberList = function (callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console(err);
        } else {
            const sql = conn.query('select * from tb_members', (err, result) => {      // 나중에 limit 해주기 desc
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

//회원 목록 디테일
const memberDetail = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('select * from tb_members where idx=?;', [idx], (err, result) => {
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

    //회원 정보 수정
const updateMembers = function (idx, mem_name, email, mem_password, hp, gender, sms_flag, gosu_idx, mem_site, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('update tb_members set mem_name=?, email=?, mem_password=?, hp=?, gender=?, sms_flag=?, gosu_idx=?, mem_site=? where idx=?;', [ mem_name, email, mem_password, hp, gender, sms_flag, gosu_idx, mem_site, idx], (err, result) => {
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
    
    
    // 회원 삭제
const memberDelete = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('delete from tb_members where idx=?;', [idx], (err, result) => {
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

