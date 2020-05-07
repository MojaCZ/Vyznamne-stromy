var app = angular.module("stromyApp", ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl : '/Parametry',
    controller : 'Parametry'
  })

  .when('/Kategorie1', {
    templateUrl : '/Kategorie1',
    controller : 'Kategorie1'
  })
  .when('/Kategorie2', {
    templateUrl : '/Kategorie2',
    controller : 'Kategorie2'
  })
  .when('/Kategorie3', {
    templateUrl : '/Kategorie3',
    controller : 'Kategorie3'
  })
  .when('/Kategorie4', {
    templateUrl : '/Kategorie4',
    controller : 'Kategorie4'
  })
  .when('/Kategorie5', {
    templateUrl : '/Kategorie5',
    controller : 'Kategorie5'
  })
})

app.run(function($rootScope) {
  $rootScope.strom = {
    K:0,
    K1:0, K2:0, K3:0, K4:0, K5:0,
    W1:0, W2:0, W3:0, W4:0, W5:0,
    K11: 0, K12: 0, K13: 0, K14: 0, K15: 0, K16: 0, K17: 0,
    W11: 0, W12: 0, W13: 0, W14: 0, W15: 0, W16: 0, W17: 0,
    K21: 0, K22: 0, K23: 0,
    W21: 0, W22: 0, W23: 0,
    K31: 0, K32: 0,
    W31: 0, W32: 0,
    K41: 0, K42: 0, K43: 0, K44: 0,
    W41: 0, W42: 0, W43: 0, W44: 0,
    K51: 0, K52: 0, K53: 0, K54: 0, K55: 0, K56: 0,
    W51: 0, W52: 0, W53: 0, W54: 0, W55: 0, W56: 0
  }
  $rootScope.result = function(){
    $rootScope.strom.K =
      $rootScope.strom.W1 * $rootScope.strom.K1
      + $rootScope.strom.W2 * $rootScope.strom.K2
      + $rootScope.strom.W3 * $rootScope.strom.K3
      + $rootScope.strom.W4 * $rootScope.strom.K4
      + $rootScope.strom.W5 * $rootScope.strom.K5
  }
})

app.controller('Parametry', function($scope) {

})

app.controller('Kategorie1', function($scope) {
  $scope.showWeightsK1 = function(){
    $scope.strom.K1 =
      $scope.strom.W11 * $scope.strom.K11
      + $scope.strom.W12 * $scope.strom.K12
      + $scope.strom.W13 * $scope.strom.K13
      + $scope.strom.W14 * $scope.strom.K14
      + $scope.strom.W15 * $scope.strom.K15
      + $scope.strom.W16 * $scope.strom.K16
      + $scope.strom.W17 * $scope.strom.K17;
    $scope.result()
  }
})
app.controller('Kategorie2', function($scope) {
  $scope.showWeightsK2 = function(){
    $scope.strom.K2 =
      $scope.strom.W21 * $scope.strom.K21
      + $scope.strom.W22 * $scope.strom.K22
      + $scope.strom.W23 * $scope.strom.K23;
    $scope.result()
  }
})
app.controller('Kategorie3', function($scope) {
  $scope.showWeightsK3 = function(){
    $scope.strom.K3 =
      $scope.strom.W31 * $scope.strom.K31
      + $scope.strom.W32 * $scope.strom.K32;
    $scope.result()
  }
})
app.controller('Kategorie4', function($scope) {
  $scope.showWeightsK4 = function(){
    $scope.strom.K4 =
      $scope.strom.W41 * $scope.strom.K41
      + $scope.strom.W42 * $scope.strom.K42
      + $scope.strom.W43 * $scope.strom.K43
      + $scope.strom.W44 * $scope.strom.K44;
    $scope.result()
  }
})
app.controller('Kategorie5', function($scope) {
  $scope.showWeightsK5 = function(){
    $scope.strom.K5 =
      $scope.strom.W51 * $scope.strom.K51
      + $scope.strom.W52 * $scope.strom.K52
      + $scope.strom.W53 * $scope.strom.K53
      + $scope.strom.W54 * $scope.strom.K54
      + $scope.strom.W55 * $scope.strom.K55
      + $scope.strom.W56 * $scope.strom.K56;
    $scope.result()
  }
})

app.controller('Page'), function($scope) {

}

// app.controller("stromCtrl", function($scope){
//   $scope.strom.W1 = $scope.strom.W11 + $scope.strom.W12 + $scope.strom.W13 +  $scope.strom.W14 + $scope.strom.W15 + $scope.strom.W16 + $scope.strom.W17
// })
