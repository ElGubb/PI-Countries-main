const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5,
                isInt: true
            },
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                min: 1
            }
        },
        season: {
            type: DataTypes.ENUM('Verano', 'Invierno', 'Primavera', 'Otoño'),
            allowNull: false
        }

    }, {
        timestamps: false
    })
}