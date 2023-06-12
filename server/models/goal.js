const {DataTypes, Sequelize} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Goal: sequelize.define('goal', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type:DataTypes.STRING,
        },
        unit_of_measure: {
            type:DataTypes.STRING,
            allowNull: false},

        perfect_score: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        photo_album_link: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        user_id: DataTypes.INTEGER,
    })};
