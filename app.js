(function(){

  'use strict'; //browser does complain about bad coding mistakes

angular.module('LunchCheck', [])

.controller('lunchController', LunchCheckController);

LunchCheckController.$inject = ['$scope']; //if minified then the inject will still work

function LunchCheckController($scope){
  $scope.list = "";
  $scope.message = "";
  $scope.alert = "text-muted";

  $scope.checkList = function () {
    var number = GetNumberOfNonEmptyItems($scope.list.split(','));

    if (number === 0) {
      $scope.message = "Please enter data first";
      $scope.alert = "text-danger";
      $scope.messageColor = 'red';
    }else {
      if (number <=3) {
        //$scope.message = number;
        $scope.message = "Enjoy!";
        $scope.alert = "text-success";
        $scope.messageColor = 'green';
      } else {
        //$scope.message = 2*number;
        $scope.message = "Too much!";
        $scope.alert = "text-success";
        $scope.messageColor = 'green';
      }
    }
  };

  function GetNumberOfNonEmptyItems(list) {
    var totalNumber = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i].length > 0) {
        totalNumber = totalNumber+1;
      }
    }
    //console.log(totalNumber);
    return totalNumber;
  }

}

})();
