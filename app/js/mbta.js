var app = angular.module('mbta', []);

function mbtaData($scope, $http) {

    $scope.trains = [];

    $scope.loadTrains = function() {
    var mainInfo = null;
    
    $http.get('http://conorodell.com/angular_project/app/json/orange.json').success(function(data) {
        $scope.trains = $scope.trains.concat(data);
    });

    $http.get('http://conorodell.com/angular_project/app/json/blue.json').success(function(data) {
        $scope.trains = $scope.trains.concat(data);
    });
        
    $http.get('http://conorodell.com/angular_project/app/json/red.json').success(function(data) {
        $scope.trains = $scope.trains.concat(data);
    });
    
    // Basic querying

        $scope.query = {}
        $scope.queryBy = '$' //init

    // Options for the search filter

        $scope.options = [  { name: "Line", id: 0 }, 
                            { name: "Trip", id: 1 },
                            { name: "PlatformKey", id: 2 },
                            { name: "InformationType", id: 3 },
                            { name: "Time", id: 4 },
                            { name: "TimeRemaining", id: 5 },
                            { name: "Route", id: 6 }];

        $scope.selectedOption = $scope.options[0];

    };

$scope.loadTrains();
}
