const express = require('express');

const bodyParser = require('body-parser');

const sequelize = require('./util/db');

const app = express();

const process = require('process');

const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors(
	{
		origin : '*',
	}
));

//Set headers to allow cross origin resource sharing
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});


//*PERSONS
app.use('/persons', require('./person/infrastructure/routes/person_routes'));

//*ORDERS
app.use('/orders', require('./order/infrastructure/routes/order_routes'));

//*PRODUCTS
app.use('/products', require('./product/infrastructure/routes/product_routes'));

//*ORDER_PRODUCTS
app.use('/order_products', require('./order_product/infrastructure/routes/order_product_routes'));

(async () => {
	try {
		await sequelize.sync(
			{ force: false} //Reset db every time
		);
		const PORT = process.env.EXTERNAL_PORT || 3010;
		console.log('Listening on PORT: ' + PORT);
		app.listen(PORT); //DEF in docker.compose.yml
	} catch (error) {
		console.log(error);
	}
})();

//export default app; // add this line
