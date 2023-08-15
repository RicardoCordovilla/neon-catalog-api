const { DataTypes } = require('sequelize')
const db = require('../../utils/database')

const Articles = db.define('articles', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 100
    },
    rent: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    urlsImages: {
        type: DataTypes.ARRAY(DataTypes.TEXT('tiny')),
        allowNull: false
    },
    options: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        defaultValue: ['Decoracion']
    },
    raiting: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    }

})

module.exports = Articles