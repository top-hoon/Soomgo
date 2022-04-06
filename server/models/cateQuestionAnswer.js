const Sequelize = require('sequelize');

module.exports = class cateQuestionAnswer extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            des:{
                type:Sequelize.STRING(500),
                allowNull:false,
            },
            des_sub:{
                type:Sequelize.STRING(500),
                allowNull:false,
            },
            text_flag:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
            },
            text_sample:{
                type:Sequelize.STRING(500),
                allowNull:false,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: false,
            modelName: 'CateAnswer',
            tableName: 'cate_question_answer',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db){
        db.CateAnswer.belongsTo(db.CateTitle,{
            foreignKey:{name:'title_idx', allowNull: false },
            onDelete: 'CASCADE',
        });
        db.CateAnswer.hasMany(db.CateQuestion,{
            foreignKey:{name:'cate_question_answer_id', allowNull: false },
            onDelete: 'CASCADE',
        });
    }
}