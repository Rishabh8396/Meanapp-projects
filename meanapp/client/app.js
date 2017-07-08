var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider.when('/',{
TemplateUrl:'./views/home.html'

}).when('/about',{
TemplateUrl:'./views/about.html'
}).when('/movies',{
TemplateUrl:'./views/movies.html'

});

});