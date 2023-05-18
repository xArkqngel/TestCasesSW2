//crear funcion que devuelva una instancia de la clase PersonRepositoryImpl}

const PersonRepositoryImpl = require('../repositories/person_repository_impl');
const personRepository = require('../../domain/repositories/person_repository');
const interfaceCheck = require('../../../util/interface_check');

const personRepositoryInjector = () => {
    const personRepositoryImpl = new PersonRepositoryImpl();
    if (!interfaceCheck(personRepositoryImpl, personRepository)) {
        throw new Error('The personRepositoryImpl must implement all the methods of the personRepository interface.');
    }
    return personRepositoryImpl;
};

module.exports = personRepositoryInjector;
