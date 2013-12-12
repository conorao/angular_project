var app = angular.module('mbta', []);

function mbtaData($scope, $http) {

    $scope.trains = [];

    $scope.loadTrains = function() {
    var mainInfo = null;
    
    //$http.get('http://conorodell.com/angular_project/app/Red.json').success(function(data) {
    $http.get('http://developer.mbta.com/Data/Red.json').success(function(data) {
    // this is only here until the MBTA complains again but I think it is a good resource
        mainInfo = data;
        console.log(mainInfo);
    
        $scope.trains = mainInfo;
        //everything in the view must be attached to the scope.    
    });

    };

$scope.loadTrains();

//console.log(mainInfo);

}
