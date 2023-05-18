//clase que implemente la interfaz declarada en el dominio, podría ser el person_service

const Person = require('./person_dto');

class PersonRepositoryImpl {
    constructor() {
    }
    getPerson (id) {}
    getAllPersons ()  {}

    async createPerson (person)  {
        console.log('createPerson: [POST] /persons/');
        console.log('person : ', person);
        try {
            const PERSON_MODEL = {
                name: person.name,
                email: person.email,
                password: person.password
            };
            try {
                const person = await Person.create(PERSON_MODEL);
                console.log('Ok createPerson: ', {person});
                return (person);
            } catch (error) {
                console.log('Error in createPerson: ' + 'Person: ', error);
                return {error: error};
            }
        } catch (error) {
            return {error: 'Bad Request'};
        }
    }
    
    updatePerson (person) {}
    deletePerson (id) {}
    login(email, password)  {}
}

module.exports = PersonRepositoryImpl;

