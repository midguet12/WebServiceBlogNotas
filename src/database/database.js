import Sequelize from 'sequelize'

export const sequelize = new Sequelize('blognotas', 'uv', 'Okmijn0798',{
    host: 'mysqluv2023.ddns.net',
    dialect: 'mysql'

})