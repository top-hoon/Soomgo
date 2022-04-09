const Sequelize = require('sequelize');

module.exports = class cateQuestionTitle extends Sequelize.Model{
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
            title:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            max_choose:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: false,
            modelName: 'CateTitle',
            tableName: 'cate_question_title',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.CateTitle.hasMany(db.CateAnswer,{
            foreignKey:{name:'title_id', allowNull: false },
            onDelete: 'CASCADE',
        });
        db.CateTitle.hasMany(db.CateQuestion,{
            foreignKey:{name:'title_id', allowNull: false },
            onDelete: 'CASCADE',
        });
        db.CateTitle.hasMany(db.RequestAnswer,{
            foreignKey:{name:'title_id', allowNull: false },
            onDelete: 'CASCADE',
        });
    }
}