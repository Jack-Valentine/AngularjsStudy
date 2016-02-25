/**
 * Created by duera on 2016-02-19.
 */
//Service
weatherApp.service('cityService', function(){
    this.city = "New York, NY"
});

weatherApp.service('weatherService', ['$resource', function ($resource) {
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
            { callback: "JSON_CALLBACK" },
            { get: { method: "JSONP"}});
        return weatherAPI.get({ q: city, cnt: days, APPID: 'ad25bc74b507cae0198d3b0e0f6f0e4d'});
    };
}]);