const Sequelize = require('sequelize');

module.exports = class category1 extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            cate_name:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: false,
            modelName: 'Category1',
            tableName: 'category1',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Category1.hasMany(db.Category2,{
            foreignKey:{name:'cate1_id', allowNull: false },
            onDelete: 'CASCADE',
        });
        db.Category1.hasMany(db.Category3,{
            foreignKey:{name:'cate1_id', allowNull: false },
            onDelete: 'CASCADE',
        });
    }
}