const express = require("express");
const app = express();

const faq = require('./routes/faq');
const notice = require('./routes/notice');
const member = require('./routes/member');
// const membersession = require('./routes/membersession(test)');

app.use(faq);
app.use(notice);
app.use(member);
// app.use(membersession);

app.listen(3000, () => {
    console.log("3000번 포트로 서버 동작중 ...");
});