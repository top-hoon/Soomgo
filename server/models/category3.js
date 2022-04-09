const Sequelize = require('sequelize');

module.exports = class category2 extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            cate_name:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            des_title:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            des_text:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: false,
            modelName: 'Category3',
            tableName: 'category3',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Category3.belongsTo(db.Category1,{
            foreignKey:{name:'cate1_id', allowNull: false },
            onDelete: 'CASCADE',
        });
        db.Category3.belongsTo(db.Category2,{
            foreignKey:{name:'cate2_id', allowNull: false },
            onDelete: 'CASCADE',
        });
        db.Category3.hasMany(db.GosuService,{
            foreignKey:{name:'cate3_id',allowNull: false,unique: 'actions_unique' },
            onDelete: 'CASCADE',
        });
    }
}