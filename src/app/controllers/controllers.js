import HomeController from './homeController';

const controllersModule = angular.module('app.controllers', []);

//inject all controllers modules here

controllersModule.controller('homeController',HomeController);

export default controllersModule;
