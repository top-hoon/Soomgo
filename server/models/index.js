const Sequelize = require('sequelize');
const Faq = require('./faq');
const Notice = require('./notice');
const Member = require('./member');
const Gosu = require('./gosu');
const Category1 = require('./category1');
const Category2 = require('./category2');
const Category3 = require('./category3');
const CateTitle = require('./cateQuestionTitle');
const CateAnswer = require('./cateQuestionAnswer');
const CateQuestion = require('./cateQuestion');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Faq = Faq;
db.Notice = Notice;

db.Member = Member;
db.Gosu = Gosu;

db.Category1 = Category1;
db.Category2 = Category2;
db.Category3 = Category3;

db.CateTitle = CateTitle;
db.CateAnswer = CateAnswer;
db.CateQuestion = CateQuestion;

Faq.init(sequelize);
Notice.init(sequelize);
Member.init(sequelize);
Gosu.init(sequelize)
Category1.init(sequelize);
Category2.init(sequelize);
Category3.init(sequelize);
CateTitle.init(sequelize);
CateAnswer.init(sequelize);
CateQuestion.init(sequelize);

Notice.associate(db);
Member.associate(db);
Gosu.associate(db);

Category1.associate(db);
Category2.associate(db);
Category3.associate(db);

CateTitle.associate(db);
CateAnswer.associate(db);
CateQuestion.associate(db);


module.exports = db;

