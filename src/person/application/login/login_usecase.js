const Person = require('../../domain/entities/person');

const loginUserUseCase = async (personRepository, email, password) => {
    try {
        const person = await personRepository.login(email, password);
        return person;
    } catch (error) {
        throw new Error(error.message);
    }

}

module.exports = loginUserUseCase;