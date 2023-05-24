//Recibo parametros y creo una persona y la inserto en la db

const Person = require('../../domain/entities/person');

const createPersonUseCase = async (personRepository, name, email, password) => {
    try {
        const person = new Person(name, email, password);
        await personRepository.createPerson(person);
        return true
    } catch (error) {
        throw new Error(error.message);
    }

};

module.exports = createPersonUseCase;
