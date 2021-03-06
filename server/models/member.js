const Sequelize = require('sequelize');
const Notice = require('./notice');

module.exports = class member extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            mem_name:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            email:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            mem_password:{
                type:Sequelize.STRING(1000),
                allowNull:false,
            },
            hp:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            gender:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
            },
            sms_flag:{
                type:Sequelize.BOOLEAN,
                allowNull:true,
            },
            gosu_id:{
                type:Sequelize.INTEGER,
                allowNull:true,
            },
            mem_site:{
                type:Sequelize.INTEGER,
                allowNull:true,
            },
            salt:{
                type:Sequelize.STRING(1000),
                allowNull:false,
            },
            image:{
                type:Sequelize.STRING(1000),
                allowNull:true,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: true,
            modelName: 'Member',
            tableName: 'member',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            hooks:{
                afterBulkDestroy: function ( options) {
                    console.log('Member: afterBulkDestroy');
                },
                afterDestroy: function (instance, options) {
                    console.log('Member: afterDestroy')
                },
            },
        });
        // member.addHook('afterDestroy','')

    }
    static associate(db) {
        db.Member.hasMany(db.Notice,{
            foreignKey:{allowNull:false},
            hooks:true,
            onDelete: 'CASCADE',
        });
        db.Member.hasOne(db.Gosu,{
            foreignKey:{name:'mem_id',allowNull:false},
            hooks:true,
            onDelete: 'CASCADE',
        });
    }
};
