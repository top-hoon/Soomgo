const Sequelize = require('sequelize');

module.exports = class category2 extends Sequelize.Model{
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
            modelName: 'Category2',
            tableName: 'category2',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Category2.belongsTo(db.Category1,{
            foreignKey:{name:'cate1_id', allowNull: false },
            onDelete: 'CASCADE',
        });
        db.Category2.hasMany(db.Category3,{
            foreignKey:{name:'cate2_id', allowNull: false },
            onDelete: 'CASCADE',
        });
    }
}