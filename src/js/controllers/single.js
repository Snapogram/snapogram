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

}

DetailsController.$inject = ['$scope', '$http', '$stateParams', '$document'];
export { DetailsController };
