const express = require("express");
const app = express();

const faq = require('./routes/faq');
const notice = require('./routes/notice');
// const member = require('./routes/member');
// const memberjwt = require('./routes/memberjwt');
const category1 = require('./routes/category1');
const category2 = require('./routes/category2');
// const category = require('./routes/category');
// const cateTilte = require('./routes/category_question_titile');

app.use(faq);
app.use(notice);
// app.use(member);
// app.use(memberjwt);
app.use(category1);
app.use(category2);
// const request = require('./routes/request');
// const membersession = require('./routes/membersession(test)');

app.use(faq);
app.use(notice);
// app.use(member);
// app.use(category);
// app.use(cateTilte);
// app.use(request);
// app.use(membersession);

app.listen(3000, () => {
    console.log("3000번 포트로 서버 동작중 ...");
});