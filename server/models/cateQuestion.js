const Sequelize = require('sequelize');

module.exports = class cateQuestion extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            cate_level:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            cate_id:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            cate_question_title_id:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            cate_question_answer_id:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: false,
            modelName: 'CateQuestion',
            tableName: 'cate_question',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.CateQuestion.belongsTo(db.CateTitle,{
            foreignKey:{name:'cate_question_title_id', allowNull: false },
            onDelete: 'CASCADE',
        });
        db.CateQuestion.belongsTo(db.CateAnswer,{
            foreignKey:{name:'cate_question_answer_id', allowNull: false },
            onDelete: 'CASCADE',
        });
    }
}