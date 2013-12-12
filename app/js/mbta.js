var app = angular.module('mbta', []);

function mbtaData($scope, $http) {

    $scope.trains = [];

    $scope.loadTrains = function() {
    var mainInfo = null;
    
    $http.get('http://conorodell.com/angular/app/Red.json').success(function(data) {
        mainInfo = data;
    });

    };

$scope.loadTrains();

}
