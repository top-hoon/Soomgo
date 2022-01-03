const express = require("express");
const app = express();

const faq = require('./routes/faq');
const notice = require('./routes/notice');
const member = require('./routes/member');
const memberjwt = require('./routes/memberjwt');
const category1 = require('./routes/category1');
const category2 = require('./routes/category2');

app.use(faq);
app.use(notice);
// app.use(member);
app.use(memberjwt);
app.use(category1);
app.use(category2);

app.listen(3000, () => {
    console.log("3000번 포트로 서버 동작중 ...");
});