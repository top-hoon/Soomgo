const Sequelize = require('sequelize');
const Notice = require('./notice');

module.exports = class member extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            mem_id:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            gosu_name:{
                type:Sequelize.STRING(1000),
                allowNull:false,
            },
            hp:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            gender:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
            },
            mem_site:{
                type:Sequelize.INTEGER, default:1,
                allowNull:true,
            },
            r_service:{
                type:Sequelize.STRING(800),
                allowNull:true,
            },
            line_des:{
                type:Sequelize.STRING(800),
                allowNull:true,
            },
            my_place:{
                type:Sequelize.STRING(1000),
                allowNull:true,
            },
            distance:{
                type:Sequelize.INTEGER,
                allowNull:true,
            },
            hp_time_start:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            hp_time_end:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            payment_type:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            card_flag:{
                type:Sequelize.BOOLEAN,
                allowNull:true,
            },
            bank_flag:{
                type:Sequelize.BOOLEAN,
                allowNull:true,
            },

            cash_flag:{
                type:Sequelize.BOOLEAN,
                allowNull:true,
            },

            career:{
                type:Sequelize.STRING(50),
                allowNull:true,
            },
            buisness:{
                type:Sequelize.STRING(500),
                allowNull:true,
            },
            certificate:{
                type:Sequelize.STRING(500),
                allowNull:true,
            },
            staff_num:{
                type:Sequelize.INTEGER,
                allowNull:true,
            },
            tax:{
                type:Sequelize.BOOLEAN,
                allowNull:true,
            },
            des:{
                type:Sequelize.INTEGER,
                allowNull:true,
            },
            files:{
                type:Sequelize.STRING(900),
                allowNull:true,
            },
            qna1:{
                type:Sequelize.STRING(900),
                allowNull:true,
            },
            qna2:{
                type:Sequelize.STRING(900),
                allowNull:true,
            },
            qna3:{
                type:Sequelize.STRING(900),
                allowNull:true,
            },
            qna4:{
                type:Sequelize.STRING(900),
                allowNull:true,
            },
            home_url:{
                type:Sequelize.STRING(900),
                allowNull:true,
            },
            face_url:{
                type:Sequelize.STRING(900),
                allowNull:true,
            },
            twit_url:{
                type:Sequelize.STRING(900),
                allowNull:true,
            },
            insta_url:{
                type:Sequelize.STRING(900),
                allowNull:true,
            },
            blog_url:{
                type:Sequelize.STRING(900),
                allowNull:true,
            },
            kakao_url:{
                type:Sequelize.STRING(900),
                allowNull:true,
            },
            cash:{
                type:Sequelize.INTEGER, default:0,
                allowNull:true,
            },
            cash_bonus:{
                type:Sequelize.INTEGER, default:0,
                allowNull:true,
            },
            latitude:{
                type:Sequelize.DECIMAL(13,10),
                allowNull:true,
            },

            longitude:{
                type:Sequelize.DECIMAL(13,10) ,
                allowNull:true,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: true,
            modelName: 'Gosu',
            tableName: 'gosu',
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
        db.Gosu.belongsTo(db.Member,{
            foreignKey:{name:'mem_id', allowNull:false},
            hooks:true,
            onDelete: 'CASCADE',
        });
        db.Gosu.hasMany(db.GosuService,{
            foreignKey:{name:'gosu_id', allowNull:false},
            hooks:true,
            onDelete: 'CASCADE',
        });
        // db.Gosu.hasMany(db.GosuPersonal,{
        //     foreignKey:{name:'gosu_id', allowNull:false},
        //     hooks:true,
        //     onDelete: 'CASCADE',
        // });
        // db.Gosu.hasMany(db.GosuPictures,{
        //     foreignKey:{name:'gosu_id', allowNull:false},
        //     hooks:true,
        //     onDelete: 'CASCADE',
        // });
    }
};