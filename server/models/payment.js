const Sequelize = require('sequelize');

module.exports = class payment extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            service_price:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            service_date:{      // 정해져 있으면 date  || 정해지지않았으면 안넣어주면됨
                type:Sequelize.DATE,
                allowNull:true,
            },
            payment_type:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            total_price:{
                type:Sequelize.STRING(1000),
                allowNull:false,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: true,
            modelName: 'Payment',
            tableName: 'payment',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Payment.belongsTo(db.Gosu, {
            foreignKey: {name: 'gosu_id', allowNull: false},
            onDelete: 'CASCADE',
        });
        db.Payment.hasMany(db.SoomgoCash, {
            foreignKey: {name: 'pay_id', allowNull: true},
            onDelete: 'CASCADE',
        });

    }
};