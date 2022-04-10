const Sequelize = require('sequelize');

module.exports = class CashBonus extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            cash:{
                type:Sequelize.INTEGER,
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
            modelName: 'CashBonus',
            tableName: 'cashBonus',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.CashBonus.belongsTo(db.Gosu, {
            foreignKey: {name: 'gosu_id', allowNull: false},
            onDelete: 'CASCADE',
        });
        db.CashBonus.hasMany(db.SoomgoCash, {
            foreignKey: {name: 'bonus_id', allowNull: true},
            onDelete: 'CASCADE',
        });

    }
};