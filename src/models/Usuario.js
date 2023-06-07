import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js';

export const Usuario = sequelize.define('Usuario',{
    idUsuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
    nombre:{
        type: DataTypes.STRING
    },
    apellidos:{
        type: DataTypes.STRING
    },
    tiempoRegistro:{
        type: DataTypes.DATE
    },
    activo:{
        type: DataTypes.TINYINT
    },
    celular:{
        type: DataTypes.STRING
    },
    contrasena:{
        type: DataTypes.STRING
    },
    ultimoTokenAcceso:{
        type: DataTypes.TEXT
    },
    tiempoUltimoAcceso:{
        type: DataTypes.DATE
    },
    otp:{
        type: DataTypes.STRING
    },
    tiempoActivacion:{
        type: DataTypes.DATE
    }

},{
    freezeTableName: true,
    timestamps: false
});