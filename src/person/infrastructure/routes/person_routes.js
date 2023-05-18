//const controller = require('../controllers/person_controller');
const createPerson_usecase = require('../../application/createPerson/createPerson_usecase');
const express = require('express');
const personRepositoryInjector = require('../routes/DI');
const router = express.Router();

//CRUD Model-Agnostic. 
//Keep them at the end of the route file for url parsing requests
//router.get('/', controller.getAllPersons);
//router.put('/:id', controller.updatePerson);
//router.delete('/:id', controller.deletePerson);
//router.post('/login', controller.login);

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


module.exports = router;