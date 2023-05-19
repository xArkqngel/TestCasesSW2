const Person = require('../../domain/entities/person');

const getAllPersonsUseCase = async (personRepository) => {
    try{
        const persons = await personRepository.getAllPersons();
        return persons;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getAllPersonsUseCase;
