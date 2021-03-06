const express = require("express");
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');


dotenv.config();
const { sequelize } = require('./models');
const faq = require('./routes/faq');
const member = require('./routes/member');
const gosu = require('./routes/gosu');
const gosuService = require('./routes/gosuService');
const notice = require('./routes/notice');
const category1 = require('./routes/category1');
const category2 = require('./routes/category2');
const category3 = require('./routes/category3');
const cateQuestionTitle = require('./routes/cateQuestionTitle');
const cateQuestionAnswer = require('./routes/cateQuestionAnswer');
const cateQuestion = require('./routes/cateQuestion');
const request = require('./routes/request');
const estimate = require('./routes/estimate');
const payment = require('./routes/payment');


const app = express();
app.use(cors());
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
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/img', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/faq',faq);
app.use('/member',member);
app.use('/gosu',gosu);
app.use('/gosuService', gosuService);
app.use('/notice',notice);
app.use('/category1',category1);
app.use('/category2',category2);
app.use('/category3',category3);
app.use('/cateQuestionTitle',cateQuestionTitle);
app.use('/cateQuestionAnswer',cateQuestionAnswer);
app.use('/cateQuestion',cateQuestion);
app.use('/request', request);
app.use('/estimate', estimate);
app.use('/payment', payment);




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






// 채팅
const io = require("socket.io")(server);
module.exports={ io };

app.get('/', (req,res)=>{
    res.send('test');
});

const {webSocket} = require("./chat/websocket") // 경로

// webSocket();

module.exports = app;
//https://www.youtube.com/watch?v=Ity1llEFsyA 참고
// https://www.inflearn.com/course/node-js-%EA%B5%90%EA%B3%BC%EC%84%9C/lecture/14495?tab=curriculum&volume=1.00  -> 제로초 강의
// https://www.npmjs.com/package/socket.io-sequelize  -> npm 홈페이지
