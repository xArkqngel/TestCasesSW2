const createPersonUseCase = require('../person/application/createPerson/createPerson_usecase');
const PersonRepository = require('../person/infrastructure/repositories/person_repository_impl');
const Person = require('../person/domain/entities/Person');
const loginUserUseCase = require("../person/application/login/login_usecase");

const person = new Person('Andres', 'Andres@gmail.com', 'password');
const response = await fetch('http://127.0.0.1:3001/persons/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(person)
});
/**describe('PersonRepository', () => {

    test('Create Person Use case', async () => {
        const person = new Person('Julio', 'Julio@gmail.com', 'password');
        const response = await fetch('http://127.0.0.1:3001/persons/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        });
        expect(response).toBe(true);
    });
});**/

//Crear se