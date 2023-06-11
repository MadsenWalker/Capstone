const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Resource: sequelize.define('resource', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: DataTypes.STRING,
        body: DataTypes.STRING,
        additional_info: DataTypes.STRING,
    })
}