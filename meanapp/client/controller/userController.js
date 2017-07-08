angular.module('myApp').controller('UserController', function($scope, $http){
  $scope.RegisterUser = function(){
    $http.post('/SaveUser',$scope.User).then(function(response){
      console.log('User Registered');
    });
    init();
  }

  $scope.DeleteUser = function(User){
    $http.delete('/DeleteUser/'+User._id).then(function(response){
      console.log('User Deleted');
      init();
    });
  }

  var init = function(){
    $http.get('/GetUser').then(function(response){
      $scope.UserDetails = response.data;
    });
  }
  init();
});
