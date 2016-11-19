import { SERVER } from "../server";

function HomeController ($scope, $http, $state) {
  $scope.myPics= [];

  function init () {
    $http.get(SERVER + 'images').then((resp) => {
      $scope.myPics = resp.data;
    });
  }

  init();

  $scope.addLike = (pic) => {
    let url = SERVER + 'images/' + $stateParams.id;

    img.likes++;
    $http.put(url);
  };
};

HomeController.$inject = ['$scope', '$http', '$state'];

export {HomeController}
