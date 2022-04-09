const Sequelize = require('sequelize');

module.exports = class requestAnswer extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            answer_text:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: false,
            modelName: 'RequestAnswer',
            tableName: 'request_answer',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }c
    static associate(db) {
        db.RequestAnswer.belongsTo(db.Request,{
            foreignKey:{name:'request_id', allowNull: false },
            onDelete: 'CASCADE',
        });
        db.RequestAnswer.belongsTo(db.CateTitle,{
            foreignKey:{name:'title_id', allowNull: false },
            onDelete: 'CASCADE',
        });
        db.RequestAnswer.belongsTo(db.Request,{
            foreignKey:{name:'answer_id', allowNull: false },
            onDelete: 'CASCADE',
        });
    }
}