(function(){

  'use strict'; //browser does complain about bad coding mistakes

angular.module('LunchCheck', [])

.controller('lunchController', LunchCheckController);

LunchCheckController.$inject = ['$scope']; //if minified then the inject will still work

function LunchCheckController($scope){
  $scope.list = "";
  $scope.message = "";

  $scope.checkList = function () {
    var number = $scope.list.split(',').length;
    //console.log($scope.list.length);

    if ($scope.list.length === 0) {
      $scope.message = "Please enter data first";
    }else {
      if (number <=3) {
        //$scope.message = number;
        $scope.message = "Enjoy!";
      } else {
        //$scope.message = 2*number;
        $scope.message = "Too much!";
      }
    }
  };

}

})();
