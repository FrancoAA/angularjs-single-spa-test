angular
  .module('main', [
    'ngRoute'
  ])
  .config(function($routeProvider, $locationProvider) {
    console.log('executed');
    
    $routeProvider
      .when('/home', {
        templateUrl: '/templates/home.html'
      })
      .when('/home/about', {
        templateUrl: '/templates/about.html'
      })
      .when('/home/contact', {
        templateUrl: '/templates/contact.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  
  })
  .directive('mainApp', function() {
    return {
      restrict: 'E',
      templateUrl: '/templates/main-app.html'
    };
  })
  .directive('sendMessage', function() {
    return {
      restrict: 'E',
      template: '<input type="text" ng-model="message"><button ng-click="broadcast(message)">Send Message</button>',
      link: function(scope) {
        
        scope.broadcast = function(message) {
          console.log('broadcasting event...');
          var event = new CustomEvent('mainApp:sendMessage', { detail: { message: scope.message }});
          document.dispatchEvent(event);
        };
      }
    };
  });