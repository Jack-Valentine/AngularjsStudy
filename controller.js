/**
 * Created by duera on 2016-02-19.
 */
// Controllers
weatherApp.controller('homeController',['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })

    $scope.submit = function() {
        $location.path("/forecast");
    }
}]);

weatherApp.controller('forecastController',['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    }
    $scope.convertToFahrenheit = function(degk){
        // return Math.round((1.8 * (degk - 273)) + 32);
        return Math.round(degk - 273);
    };
    // console.log($scope.weatherResult);
}]);
