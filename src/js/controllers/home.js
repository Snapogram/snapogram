import { SERVER } from "../server";

function HomeController ($scope, $http, $state) {
  $scope.myPics= [];

  function init () {
    $http.get(SERVER + 'images').then((resp) => {
      $scope.myPics = resp.data;
    });
  }

  init();
};

HomeController.$inject = ['$scope', '$http', '$state'];

export {HomeController}