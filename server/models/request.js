const Sequelize = require('sequelize');

module.exports = class request extends Sequelize.Model{
    static init(sequelize){
        return super.init({
        },{
            sequelize,
            timestamps: true,
            paranoid: false,
            modelName: 'Request',
            tableName: 'request',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }c
    static associate(db) {
        db.Request.belongsTo(db.Gosu,{
            foreignKey:{name:'gosu_id', allowNull: false },
            onDelete: 'CASCADE',
        });
        db.Request.belongsTo(db.Member,{
            foreignKey:{name:'mem_id', allowNull: false },
            onDelete: 'CASCADE',
        });
        db.Request.belongsTo(db.Category3,{
            foreignKey:{name:'cate3_id',allowNull: false},
            onDelete: 'CASCADE',
        });
    }
}