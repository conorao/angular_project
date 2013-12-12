var app = angular.module('mbta', []);

function mbtaData($scope, $http) {

    $scope.trains = [];

    $scope.loadTrains = function() {
    var mainInfo = null;
    
    $http.get('http://conorodell.com/angular_project/app/Red.json').success(function(data) {
        mainInfo = data;
        console.log(mainInfo);
    
        $scope.trains = mainInfo;
        //everything in the view must be attached to the scope.    
    });

    };

$scope.loadTrains();

//console.log(mainInfo);

}
