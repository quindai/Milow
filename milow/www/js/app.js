// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var milow = angular.module('milow', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

  milow.controller('FillCtrl', function ($scope, $http) {
    $http.get('data.json').success(function(data) {
       $scope.ditados = data;
  });

    $scope.twitt = function(index){
      return window.plugins.socialsharing.shareViaTwitter($scope.ditados[index].pt+"\npartilhado pelo #milow: ", null /* angular msg */, 'https://goo.gl/xlVtC5');
      //return alert($scope.ditados[index].pt+" "+"Pau");
    };
    $scope.fcbook = function(index){
      window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint($scope.ditados[index].pt, null /* img */, 'https://goo.gl/xlVtC5' /* url */, 'Copiado para a área de transferência! Cole para ver.', function() {console.log('share ok')}, function(errormsg){alert('Instale o facebook antes de continuar.')});
      //return alert($scope.ditados[index].pt+" "+"Pau");
    };
    $scope.whats = function(index){
      window.plugins.socialsharing.canShareVia('whatsapp', 'msg', null, null, null, function(e){alert(window.plugins.socialsharing.shareViaWhatsApp($scope.ditados[index].pt+"\npartilhado pelo milow: ", null /* img */, 'https://goo.gl/xlVtC5' /* url */, function() {console.log('share ok')}, function(errormsg){alert(errormsg)}))}, function(e){alert('Instale o WhatsApp antes de continuar.')});
      //return alert($scope.ditados[index].pt+" "+"Pau");
    }
});
