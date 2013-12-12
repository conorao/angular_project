angular.module('myApp.service',[]).
    factory('DataSource', ['$http',function($http){
       return {
           get: function(callback){
                $http.get(
                    'http://developer.mbta.com/Data/Red.xml',
                    {transformResponse:function(data) {
                      // JSON conversion
                      // MBTA's JSON file they provide is formatted really poorly
                      // and since I don't yet know the text editing tools in js
                      // i'm converting it to JSON and passing it to the success
                      // function
                        var x2js = new X2JS();
                        var json = x2js.xml_str2json( data );
                        return json;
                        }   
                    }   
                ).  
                success(function(data, status) {
                    // send the converted data back to the callback
                    callback(data);
                })  
           }   
       }   
    }]);
         
angular.module('myApp',['myApp.service']);
 
var AppController = function($scope,DataSource) {
         
    //callback function
    setData = function(data) {
        // assigning the dataset a name
        $scope.dataSet = data;
    }   
             
    DataSource.get(setData);
         
}


