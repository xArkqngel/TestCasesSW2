//const controller = require('../controllers/person_controller');
const createPerson_usecase = require('../../application/createPerson/createPerson_usecase');
const express = require('express');
const personRepositoryInjector = require('../routes/DI');
const router = express.Router();
const getAllPersons_usecase = require('../../application/getAllPersons/getAllPersons_usecase');
const login_usecase = require('../../application/login/login_usecase');

//CRUD Model-Agnostic. 
//Keep them at the end of the route file for url parsing requests
//router.get('/', controller.getAllPersons);
//router.put('/:id', controller.updatePerson);
//router.delete('/:id', controller.deletePerson);
//router.post('/login', controller.login);

const getAllPersons = async(req, res)=>{
	console.log('getAllPersons: [GET] /persons/');
	const personRepository = personRepositoryInjector();
	try {
		const persons = await getAllPersons_usecase(personRepository);
		if(persons.error){
			return res.status(400).json({error: persons.error});
		}
		return res.status(200).json({persons});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

router.get('/', getAllPersons);

const createPerson = async(req, res)=>{
	console.log('createPerson: [POST] /persons/create');
	const personRepository = personRepositoryInjector();
	try {
		const person = await createPerson_usecase(personRepository, req.body.name, req.body.email, req.body.password);
		return res.status(200).json({'Message': 'Person created', 'Person': person});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

router.post('/create', createPerson);

const login = async (req, res) => {
	console.log('login: [POST] /persons/login');
	const personRepository = personRepositoryInjector();
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({
				error: 'Username and password are required'
			});
		}
		const user = await login_usecase(personRepository, email, password);
		if (user) {
			return res.status(200).json({'Login': 'Success', 'User': user });
		} else {
			return res.status(401).json({
				error: 'Invalid email or password'
			});
		}
	} catch (err) {
		return res.status(500).json({
			error: 'Failed to login user'
		});
	}
};

router.post('/login', login);


module.exports = router;