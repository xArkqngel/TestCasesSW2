//clase que implemente la interfaz declarada en el dominio, podría ser el person_service

const Person = require('./person_dto');
const bcrypt = require('bcrypt');

class PersonRepositoryImpl {
    constructor() {
    }
    getPerson (id) {}

    async getAllPersons ()  {
        console.log('getAllPersons: [GET] /persons/');
        try {
            const allPersons = await Person.findAll();
            console.log('OK getAllPersons: ', allPersons.map(persons => persons.dataValues));
            return allPersons;
        } catch (error) {
            console.log('Error in getAllPersons ' + 'Persons:', error);
            return error;
        }
    }

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
    
    async login(email, password)  {
        console.log('login: [POST] /persons/login');
        console.log('email : ', email);
        console.log('password : ', password);
        try {
            const user = await Person.findOne({
                where: {
                    email
                },
            });			
            if (user) {
                console.log('Ok login: ', {user});
                const isValidPassword = await bcrypt.compare(password, user.password);
                // If the password is valid, return the user object
                if (isValidPassword) {
                    return user;
                }
            }
        } catch (error) {
            console.log('Error in getPerson: ' + 'Person: ', error);
            return {error: error};
        }
    }
}

module.exports = PersonRepositoryImpl;

