const Sequelize = require('sequelize');

module.exports = class SoomgoCash extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            cash:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            sm_type:{
                type:Sequelize.ENUM('C','U'),   // 1 충전, 2 사용
                allowNull:false,
            },
            details:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: true,
            modelName: 'SoomgoCash',
            tableName: 'soomgoCash',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.SoomgoCash.belongsTo(db.Gosu, {
            foreignKey: {name: 'gosu_id', allowNull: false},
            onDelete: 'CASCADE',
        });
        db.SoomgoCash.belongsTo(db.CashBonus, {
            foreignKey: {name: 'bonus_id', allowNull: true},
            onDelete: 'CASCADE',
        });
        db.SoomgoCash.belongsTo(db.Payment, {
            foreignKey: {name: 'pay_id', allowNull: true},
            onDelete: 'CASCADE',
        });
    }
};