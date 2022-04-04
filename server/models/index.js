wconst Sequelize = require('sequelize');
const Faq = require('./faq');
const Notice = require('./notice');
const Member = require('./member');

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

Faq.init(sequelize);
Notice.init(sequelize);
Member.init(sequelize);

Member.associate(db);
Notice.associate(db);

module.exports = db;

