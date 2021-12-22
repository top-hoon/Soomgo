const express = require("express");
const app = express();

const faq = require('./routes/faq');
const notice = require('./routes/notice');

app.use(faq);
app.use(notice);

app.listen(3000, () => {
    console.log("3000번 포트로 서버 동작중 ...");
});