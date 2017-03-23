angular.module('starter.controllers', [])


  .controller('mainController',function($scope,$http){
    //$scope.data = {};
    $scope.init=function () {


        $scope.contents = null;
      var r =$scope.search;
      $http.get('https://kgsearch.googleapis.com/v1/entities:search?query='+encodeURIComponent(r)+'&key=AIzaSyDsXkEfKo5KxCruUXsfV0XACCRAOMKJ8kI&limit=1&indent=True')
        .success(function (data) {


            //$scope.contents = data;



          $scope.contents="India is a country in South Asia. It is the seventh-largest country by area, the second-most populous country (with over 1.2 billion people), and the most populous democracy in the world. It is bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast. It shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the northeast; and Myanmar (Burma) and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives. India's Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia. ";
          var msg = new SpeechSynthesisUtterance("India is a country in South Asia. It is the seventh-largest country by area, the second-most populous country (with over 1.2 billion people), and the most populous democracy in the world. It is bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast. It shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the northeast; and Myanmar (Burma) and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives. India's Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.");
          window.speechSynthesis.speak(msg);

         /* for(var i = 1; i < 5; i++) {
            var txt = $('#itemListElement').val($scope.data[i].itemListElement);
            var msg = new SpeechSynthesisUtterance("hello");
            window.speechSynthesis.speak(msg);
          }*/

        })
        .error(function (data, status, error, config) {
          $scope.contents = [{heading: "Error", description: "Could not load json   data"}];
          var msg = new SpeechSynthesisUtterance("wrong description");
          window.speechSynthesis.speak(msg);
        });
    }
    //$scope.contents = [{heading:"Content heading", description:"The actual content"}];
    //Just a placeholder. All web content will be in this format
    $scope.init2=function ()
    {
      window.speechSynthesis.cancel();
      window.location.reload();
    }
  })
  .controller('myCtrl', function($scope, $cordovaGeolocation){

    $scope.toggle = function(){

      var posOption = {timeout: 10000,enableHighAccuracy: true};
      $cordovaGeolocation
        .getCurrentPosition(posOption)
        .then(function (position)  {

            $scope.lat = position.coords.latitude;
            $scope.long = position.coords.longitude;


          }, function(err){
            //error
          }

        );

    }



  })

  .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
      LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
        $state.go('test5');
      }).error(function(data) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
    }
  });
