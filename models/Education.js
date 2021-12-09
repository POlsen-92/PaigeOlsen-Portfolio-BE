const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Education extends Model {}

Education.init({
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }, 
    description: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false
    }, 
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    graduation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
        // Degree, Certification
    }
},{
    sequelize
});

module.exports = Education;