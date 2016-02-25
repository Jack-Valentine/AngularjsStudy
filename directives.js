/**
 * Created by duera on 2016-02-19.
 */

//DIRECTIVE
weatherApp.directive("weatherReport", function(){
    return{
        resetrict: 'e',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
})