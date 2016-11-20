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

    pic.likes++;
    $http.put(url);

    $document.find('div').eq(1).addClass('likeModal');
      setTimeout(() => {
        $document.find('div').eq(1).removeClass('likeModal');
      }, 500);
  };
}

DetailsController.$inject = ['$scope', '$http', '$stateParams', '$document'];
export { DetailsController };
