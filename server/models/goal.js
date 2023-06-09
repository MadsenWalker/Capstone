const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Hero: sequelize.define('goal', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        
    })
}