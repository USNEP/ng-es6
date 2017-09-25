import {UpperFilter, LowerFilter} from './textFilters';

const filtersModule = angular.module('app.filters', []);

//inject all filters modules here

filtersModule.filter('upper', UpperFilter)
    .filter('lower', LowerFilter);

export default filtersModule;
