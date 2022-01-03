const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const conn = mysql.createConnection(config);
const SECRET_Key = config['Secret-key'];

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

router.use(session({
    key:"loginData",
    secret: SECRET_Key,     //나중에 설정..
    store: new MySQLStore(config),
    resave: false,
    saveUninitialized: true, //false?
    cookie: {
        httpOnly: true,
        maxAge: 60 * 60 * 1000
    }
}));


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
    const Salt = crypto.randomBytes(64).toString('base64');
    
    //확인
    console.log(
        `mem_name:${mem_name}, email:${email}, hp:${hp}
        gender:${gender}, sms_flag:${sms_flag}, gosu_idx:${gosu_idx}, mem_site:${mem_site}`
        );

        if (pool) {
            emailCheck(email, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    if (result[0] == undefined) {  // 입력한 아이디가 없을경우
                    createMember(mem_name, email, mem_password, hp, gender, sms_flag, gosu_idx, mem_site, Salt, (err, result) => {
                        if (err) {
                            console.log("회원가입 실패!");
                        } else {
                            console.log("회원가입 성공!");
                            res.end();
                        }
                    });
                    } else {
                        console.log("이미 사용자가 사용하고 있는 ID입니다.");
                        res.end();
                }
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
    const mem_password = req.body.mem_password;
    if (pool) {
                login(email, mem_password, (err, result) => {
                    if (err) {
                        console.log(err);
                    } if(result[0]==null) {
                        console.log("아이디가 존재하지 않음");
                        res.end();
                    } else {
                        const member = result[0];
                        const pass = crypto.createHash("sha512").update(mem_password + member.salt).digest('base64');
                        // console.log('방금password:'+pass);
                        // console.log('DBpassword:' + member.mem_password);
                        if (pass == member.mem_password) {
                            console.log("로그인 성공");
                            req.session.user={
                                    idx: member.idx,
                                    email: member.email,
                                    name: member.mem_name
                            };
                            console.log(req.session.user);
                            res.cookie('hey', member.idx);
                            // res.end();
                            res.json(req.session.user);
                        } else {
                            console.log("비밀번호를 확인해주세요");
                            res.end();
                }
            }
        });
    }
});

// 로그아웃
router.route('/member/logout').get((req, res) => {
        res.clearCookie('hey');
        req.session.destroy(function (err) {
            if (err) console.log(err);
            console.log("로그아웃완료");
            // res.redirect('/');  // 나중에..
            res.end();
        });
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
                // const hashedPassword = crypto.pbkdf2Sync(mem_password, Salt, 100000, 32, 'sha512').toString('base64');
                const hashedPassword = crypto.createHash("sha512").update(mem_password + Salt).digest('base64');
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
                    console.log("비밀번호랑 salt 넘깁니다.");
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
            const sql = conn.query('select * from tb_members where email = ?;', [email], (err, result) => {
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

