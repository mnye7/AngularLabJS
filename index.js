(function() {

  angular.module('app', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'welcome-page/welcome-page.html'
        })
        .when('/app',{
          template: '<task-form></task-form>'
        })
        .otherwise({
          redirectTo: '/'
        });
    })



})();
