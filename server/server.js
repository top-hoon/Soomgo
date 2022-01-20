const express = require("express");
const app = express();

const faq = require('./routes/faq');
const notice = require('./routes/notice');
const member = require('./routes/member');
const category1 = require('./routes/category1');
const category2 = require('./routes/category2');
const category3 = require('./routes/category3');
const cateTilte = require('./routes/cate_question_title');
const cateAnswer = require('./routes/cate_question_answer');
const cateQuestion = require('./routes/cate_question');
const requests = require('./routes/request');
const payments = require('./routes/payments');
const estimates = require('./routes/estimates');
const gosu = require('./routes/gosu')

app.use(faq);
app.use(notice);
app.use(member);
app.use(category1);
app.use(category2);
app.use(category3);
app.use(cateTilte);
app.use(cateAnswer);
app.use(cateQuestion);
app.use(requests);
app.use(payments)
app.use(estimates);
app.use(gosu);

app.listen(3001, () => {
    console.log("3001번 포트로 서버 동작중 ...");
});