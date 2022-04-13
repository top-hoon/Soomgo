const Sequelize = require('sequelize');

module.exports = class estimate extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            salary: {
                type: Sequelize.ENUM('Y','N'),  // Y:시간당, N: 총비용
                allowNull: false,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            title: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            content: {
                type: Sequelize.STRING(1000),
                allowNull: false,
            },
            files: {
                type: Sequelize.STRING(1000),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            paranoid: false,
            modelName: 'EstimateOften',
            tableName: 'estimate_often',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.EstimateOften.belongsTo(db.Gosu, {
            foreignKey: {name: 'gosu_id', allowNull: false},
            onDelete: 'CASCADE',
        });
    }
}