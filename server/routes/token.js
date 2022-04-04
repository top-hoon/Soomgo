const jwt = require('jsonwebtoken');
const config = require("../config/config.json");
const SECRET_Key = config['Secret-key'];

function createNewToken(token){
    const member = jwt.verify(token, SECRET_Key);
    if(member.isMember) return createNewMemberToken(member);
    else return createNewGosuToken(member);
}

function createNewGosuToken(gosu){
    const newToken = jwt.sign({
        type : 'JWT',
        email: gosu.email,
        name: gosu.name,
        id: gosu.id,
        mem_id: gosu.mem_id,
        isMember: false
    }, SECRET_Key, {
        expiresIn: '25m',
        issuer: '관리자'
    });
    
    const newRefreshToken = jwt.sign({
        type: 'refreshJWT',
        email: gosu.email,
        name: gosu.name,
        id: gosu.id,
        mem_idx: gosu.mem_idx,
        isMember: false
    }, SECRET_Key, {
        expiresIn: '1d',
        issuer: '관리자',
    })

    return {newToken, newRefreshToken};
}

function createNewMemberToken(member){
    const newToken = jwt.sign({
        type : 'JWT',
        email: member.email,
        name: member.name,
        id: member.id,
        gosu_idx: member.gosu_idx,
        isMember: true
    }, SECRET_Key, {
        expiresIn: '25m',
        issuer: '관리자'
    });
    
    const newRefreshToken = jwt.sign({
        type: 'refreshJWT',
        email: member.email,
        name: member.name,
        id: member.id,
        gosu_idx: member.gosu_idx,
        isMember: true
    }, SECRET_Key, {
        expiresIn: '1d',
        issuer: '관리자',
    })

    return {newToken, newRefreshToken};
}

exports.createNewToken = createNewToken;