const express = require("express");
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

dotenv.config();
const { sequelize } = require('./models');
const faq = require('./routes/faq');
const member = require('./routes/member');
const gosu = require('./routes/gosu');
const notice = require('./routes/notice');
const category1 = require('./routes/category1');
const category2 = require('./routes/category2');
const category3 = require('./routes/category3');
const cateQuestionTitle = require('./routes/cateQuestionTitle');
const cateQuestionAnswer = require('./routes/cateQuestionAnswer');
const cateQuestion = require('./routes/cateQuestion');


const app = express();
app.use(cookieParser());
app.set('port', process.env.PORT || 8081);


sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/faq',faq);
app.use('/member',member);
app.use('/gosu',gosu);
app.use('/notice',notice);
app.use('/category1',category1);
app.use('/category2',category2);
app.use('/category3',category3);
app.use('/cateQuestionTitle',cateQuestionTitle);
app.use('/cateQuestionAnswer',cateQuestionAnswer);
app.use('/cateQuestion',cateQuestion);




app.use((req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    console.log(err)
    res.send('error');
});

const server = app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});