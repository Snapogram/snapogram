import { SERVER } from "../server";

function HomeController ($scope, $http) {
  $scope.myPics= [];

  function init () {
    $http.get(SERVER + 'images').then((resp) => {
      $scope.myPics = resp.data;
    });
  }

  init();

  $scope.addLike = (pic) => {
    let url = SERVER + 'images/' + pic.id;

    pic.likes++;
    $http.put(url, pic);
  };
};

HomeController.$inject = ['$scope', '$http'];

export {HomeController}
