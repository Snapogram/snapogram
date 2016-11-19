import { SERVER } from "../server";

function DetailsController ($scope, $http, $stateParams, $document) {
  $scope.pic = {};

  function init () {
    let url = SERVER + 'images/' + $stateParams.id;
    $http.get(url).then((resp) => {
      $scope.pic = resp.data;
    });
  };

  init();

  $scope.addLike = (pic) => {
    let url = SERVER + 'images/' + $stateParams.id;

    img.likes++;
    $http.put(url);
  };
}

DetailsController.$inject = ['$scope', '$http', '$stateParams', '$document'];
export { DetailsController };
