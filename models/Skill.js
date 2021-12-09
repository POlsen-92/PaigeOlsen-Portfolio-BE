const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Skill extends Model {}

Skill.init({
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }, 
    type: {
        type: DataTypes.STRING,
        allowNull: false
        // Language, Tool, Application
    }
},{
    sequelize
});

module.exports = Skill;