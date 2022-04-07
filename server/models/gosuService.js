const Sequelize = require('sequelize');

module.exports = class gosuService extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            cate3_id:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: false,
            modelName: 'GosuService',
            tableName: 'gosu_service',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });

    }
    static associate(db){
        db.GosuService.belongsTo(db.Gosu,{
            foreignKey:{name:'gosu_id', allowNull:false},
            hooks:true,
            onDelete: 'CASCADE',
        });
    }
};