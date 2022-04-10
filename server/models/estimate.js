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
            modelName: 'Estimate',
            tableName: 'estimate',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Estimate.belongsTo(db.Gosu, {
            foreignKey: {name: 'gosu_id', allowNull: false},
            onDelete: 'CASCADE',
        });
        db.Estimate.belongsTo(db.Member, {
            foreignKey: {name: 'mem_id', allowNull: false},
            onDelete: 'CASCADE',
        });
    }
}