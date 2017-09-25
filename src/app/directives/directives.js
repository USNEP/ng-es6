import LoadingDirective from './loadingDirective';

const directivesModule = angular.module('app.directives', []);

//inject all controllers modules here

directivesModule.directive('loadingDirective',() => new LoadingDirective);

export default directivesModule;
