import PersonService from './personService';

const servicesModule = angular.module('app.services', []);

//inject all services modules here

servicesModule.service('personService',PersonService);

export default servicesModule;
