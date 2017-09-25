/*
 Import all Angular components via ES6 imports and register them
 at your module via their corresponding functions (controller, service, etc.).
 */


/* Dont change the file name , it is used in gulp script file to bwroserify */

/* Modue name is also used in gulp build file to inject html templates*/

import onRun from './ng-configs/index.run';
import constants from './ng-configs/index.constants';
import onConfig  from './ng-configs/index.route';



import  './controllers/controllers';
import './services/services';
import './filters/filters';
import './directives/directives';



angular.module('myApp', ['ui.router','app.controllers','app.filters','app.services','app.directives']);

angular.module('myApp').config(onConfig);
angular.module('myApp').constant('AppSettings', constants);
angular.module('myApp').run(onRun);
