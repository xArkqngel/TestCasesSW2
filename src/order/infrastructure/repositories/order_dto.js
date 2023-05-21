const Sequelize = require('sequelize');
const db = require('../../../util/db');

const Order = db.define(
    'orders',
    {
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        price:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);



module.exports = Order;