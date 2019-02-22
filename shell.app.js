angular
  .module('shell', [])
  .directive('shellApp', function() {
    return {
      restrict: 'E',
      templateUrl: '/templates/shell-app.html',
      link: function(scope) {
        document.addEventListener('mainApp:sendMessage', function eventHandler(evt) {
          alert(`Message Received: ${evt.detail.message}`);
        });
      }
    };
  });