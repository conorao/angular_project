var app = angular.module('mbta', []);

function mbtaData($scope, $http) {

    $scope.trains = [];

    $scope.loadTrains = function() {
    var mainInfo = null;
    
    $http.get('http://conorodell.com/angular_project/app/Red.json').success(function(data) {
    //$http.get('http://developer.mbta.com/Data/Red.json').success(function(data) {
    // this is only here until the MBTA complains again but I think it is a good resource
        mainInfo = data;
        console.log(mainInfo);
    
        $scope.trains = mainInfo;
        //everything in the view must be attached to the scope.    
    });

    // Basic querying

        $scope.query = {}
        $scope.queryBy = '$' //init

    // Options for the search filter (TODO)

        $scope.searchOptions = [  { name: "Line", id: 0 }, 
                            { name: "Trip Number", id: 1 },
                            { name: "Last Station", id: 2 },
                            { name: "Status", id: 3 },
                            { name: "Time Arrived", id: 4 },
                            { name: "Time Until Next Station", id: 5 },
                            { name: "Route", id: 6 }];

        $scope.selectedOption = $scope.searchOptions[0];

    };

$scope.loadTrains();

//console.log(mainInfo);

}
