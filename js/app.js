var app = angular.module("app", ['ui.router']);

app.controller("appCtrl", function($scope) {
    $scope.message = "WELCOME!";
});

/*
app.routes();
*/

app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider',
  function($httpProvider, $stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',        
        templateUrl: 'templates/home.html',        
        //template: "<h3>Honey I'm home</h3>",
        //abstract: true,
      })
      .state('routing', {
        url: '/routing',
        templateUrl: 'templates/routing.html',
        //controller: 'DashboardCtrl'
      })
      .state('structure', { 
        url: '/structure',
        //parent: 'home',
        templateUrl: 'templates/structure.html',
        //template: '<div><h4>structure</h4></div>',
        //controller: 'CrmCtrl'
      })
      .state('version', {
        url: '/version',
        templateUrl: 'templates/version.html',
        //template: '<h3>version!</h3>',
      });

    $urlRouterProvider.otherwise('home');
  }
]);