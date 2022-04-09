const Sequelize = require('sequelize');

module.exports = class gosuService extends Sequelize.Model{
    static init(sequelize){
        return super.init({
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
        db.GosuService.belongsTo(db.Category3,{
            foreignKey:{name:'cate3_id', allowNull:false, unique: 'actions_unique'},
            onDelete: 'CASCADE',
        });
    }
};