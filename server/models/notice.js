const Sequelize = require('sequelize');

module.exports = class notice extends Sequelize.Model{
    static init(sequelize){
        return super.init({
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
            show_flag:{
                type:Sequelize.BOOLEAN,
                allowNull:true,
            },
            star:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: true,
            modelName: 'Notice',
            tableName: 'notice',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Notice.belongsTo(db.Member,{
            foreignKey:{name:'MemberId', allowNull: false },
            onDelete: 'CASCADE',
        });
    }
};