function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
    'ngInject';

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('Home', {
            url: '/',
            controller: 'homeController as home',
            templateUrl: 'app/views/home.html',
            title: 'Home'
        });

    $urlRouterProvider.otherwise('/');

}

export default OnConfig;
