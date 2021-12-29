const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("../config/config.json");
const pool = mysql.createPool(config);
const router = express.Router();
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const conn = mysql.createConnection(config);
const jwt = require('jsonwebtoken');
const SECRET_Key = config['Secret-key'];
const { verifyToken } = require('./jwtcheck');
const multer = require('multer');
const path = require('path');


router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());


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
                        console.log("이미 가입된 이메일입니다..");
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
                    } if(result[0]== undefined) {
                        console.log("아이디가 존재하지 않음");
                        console.log(req.body.email);
                        res.end();
                    } else {
                        const member = result[0];  
                        const pass = crypto.createHash("sha512").update(mem_password + member.salt).digest('base64');

                        if (pass == member.mem_password) {
                            console.log("로그인 성공");
                            // 토큰 생성
                            const token = jwt.sign({
                                type: 'JWT',
                                email: member.email,
                                name: member.name,
                                idx: member.idx
                            }, SECRET_Key, {
                                expiresIn: '30m',
                                issuer: '관리자',
                            });
                            // 쿠키로 보내기
                                res.cookie('JWT', token, {
                                maxAge: 1000 * 60 * 60 * 24 * 7,
                                httpOnly: true,
                            })
                                .status(200).json({
                                code: 200,
                                message: '토큰이 발급되었습니다.',
                                idx : member.idx,
                                token: token,
                            });
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
            res.clearCookie('JWT');
            console.log("로그아웃완료");
            res.end();
            // res.redirect('/');  // 나중에..
});
        

// 마이페이지 /mypage/account-info
router.route('/mypage/account-info').get(verifyToken,(req, res) => {
    const idx = req.idx;
    console.log(idx);
    if (pool) {
        infomation(idx, (err, result) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                console.log("개인 정보 출력 성공");
                res.send(result);
            }
        });
    }
});
//---------------------------------
// 마이페이지 /mypage/account-info/settings/name
router.route('/mypage/account-info/settings/name').get(verifyToken,(req, res) => {
        const idx = req.idx;
        if (pool) {
        settingsName(idx, (err, result) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                console.log("이름 출력 성공");
                res.send(result);
            }
        });
    }
})

// 마이페이지 이름수정
router.route('/mypage/account-info/settings/editName').put(verifyToken,(req, res) => {
    const idx = req.idx;
    const mem_name = req.body.mem_name;
    if (pool) {
        editName(idx, mem_name, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("이름 수정성공");
                res.end();
            }
        });
    }
});
//---------------------------------

//---------------------------------
// 마이페이지 /mypage/account-info/settings/email
router.route('/mypage/account-info/settings/email').get(verifyToken,(req, res) => {
    const idx = req.idx;
        if (pool) {
        settingsEmail(idx, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("이메일 출력 성공");
                res.end();
            }
        });
    }
})

// 마이페이지 이메일수정
router.route('/mypage/account-info/settings/editEmail').put(verifyToken,(req, res) => {
    const idx = req.idx;
    const email = req.body.email;
    if (pool) {
        editEmail(idx, email, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("이메일 수정성공");
                res.end();
            }
        });
    }
});
//-------------------------------------------------------------------------------------------  

// 마이페이지 비밀번호 수정
router.route('/mypage/account-info/settings/editPassword').put(verifyToken,(req, res) => {
    const idx = req.idx;
    const nowPassword = req.body.nowPassword;
    const cPassword = req.body.cPassword;
    const Salt = crypto.randomBytes(64).toString('base64'); 

    if (pool) {
        checkPassword(idx, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const member = result[0];
                const now = crypto.createHash("sha512").update(nowPassword + member.salt).digest('base64');
                if (now == member.mem_password) {
                    console.log("비밀번호맞음.")
                    changePassword(idx, cPassword, Salt,(err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("비밀번호 수정성공!");
                            res.end();
                        }
                    });
                } else {
                    console.log('비밀번호틀림...')
                    res.end();
                }
            }
        });
    }
});
// 현재 비밀번호 확인
const checkPassword = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        }else{
            const sql = conn.query('select salt, mem_password from tb_members where idx = ?;', [idx], (err, result) => {
                conn.release();
                console.log(result[0]);
                if (err) {
                    console.log(err);
                } else {
                    if (result == ' ') {
                        callback(null, false);
                    } else {
                        callback(null, result);
                    }
                }
            });
        }
    });
}

// 비밀번호 수정
const changePassword = function (idx, cPassword, Salt, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const newPassword = crypto.createHash("sha512").update(cPassword + Salt).digest('base64');
            const sql = conn.query('update tb_members set mem_password=?, salt=? where idx=?', [newPassword, Salt, idx], (err, result) => {
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
//-----------------------------------------------------------------------------------------
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
    callback(null, './upload');  
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

upload = multer({ storage: storage, fileFilter: fileFilter });
// 마이페이지  프로필사진 등록
router.route('/mypage/img').post(verifyToken,upload.single('image'), (req, res) => {  // 다중파일은 조금만 수정해주면됨
    const image = req.file.path;
    const idx = req.idx;
    console.log(req.file)
    console.log(req.file.path)
    console.log(upload) // multer 안에 내가 지정한 내용
    console.log(upload.storage.getFilename) // 파일이름!
    if (pool) {
        mypageImg(idx, image, (err, result) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                console.log('성공');
                res.send(result);
                res.end();
            }
        });
    }
});
const mypageImg = function (idx, image, callback){
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            conn.query('update tb_members set image=? where idx=?', [image, idx], (err, result) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, result);
                }
            })
        }
    });
}
//-------------------------------------------------------------------------

    //회원 목록
router.route('/member/list').get(multer,(req, res) => {
    if (pool) {
        memberList((err, result) => {
            if (err) {
                console.log("회원목록 출력 실패")
            } else {
                console.log("회원목록 출력 성공")
                res.send(result);
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
// 회원 개인정보 member/account-info
const infomation = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('select mem_name, email , mem_password, hp, image from tb_members where idx=?', [idx], (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                    return;
                } else {
                    console.log("목록");
                    callback(null, result);
                }
            })
        }
    });
}
// 회원 개인정보 이름 /mypage/account-info/settings/name
const settingsName = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('select mem_name from tb_members where idx=?', [idx], (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                    return;
                } else {
                    console.log("이름");
                    callback(null, result);
                }
            })
        }
    });
}

//회원 개인정보 이름수정
const editName = function (idx, mem_name, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('update tb_members set mem_name=? where idx=?', [mem_name, idx], (err, result) => {
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



// 회원 개인정보 이메일 /mypage/account-info/settings/email
const settingsEmail = function (idx, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('select email from tb_members where idx=?', [idx], (err, result) => {
                conn.release();
                if (err) {
                    callback(err, null);
                    return;
                } else {
                    console.log("이메일");
                    callback(null, result);
                }
            })
        }
    });
}


//회원 개인정보 이메일수정
const editEmail = function (idx, email, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            const sql = conn.query('update tb_members set email=? where idx=?', [email, idx], (err, result) => {
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

