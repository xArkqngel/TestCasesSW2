const Sequelize = require('sequelize');
const db = require('../../../util/db');
const bcrypt = require('bcrypt');
const Order = require('../../../order/infrastructure/repositories/order_dto')
const Person = db.define(
	'persons',
	{
		id:{
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true
		},
		name:{
			type: Sequelize.STRING,
			allowNull: false			
		},
		email:{
			type: Sequelize.STRING,
			unique: true,
			allowNull: false,
			validate:{
				isEmail: true
			}
		},
		password:{
			type: Sequelize.STRING,
			allowNull: true
		}		
	},{		
		freezeTableName: true,
		hooks: {
			beforeCreate: async (user) => {
				if (user.password) {
					const salt =  bcrypt.genSaltSync(10, 'a');
					user.password = bcrypt.hashSync(user.password, salt);
				}
			}	
		}
	}
);

Person.hasMany(Order,{foreignKey:'person_id'});
Order.belongsTo(Person,{foreignKey:'person_id'});

module.exports = Person;