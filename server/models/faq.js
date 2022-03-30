const Sequelize = require('sequelize');

module.exports = class faq extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            faq_type:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            subject:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            title:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            content:{
                type:Sequelize.STRING(1000),
                allowNull:false,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: true,
            modelName: 'Faq',
            tableName: 'FAQ',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}