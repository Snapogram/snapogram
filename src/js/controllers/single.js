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
    $http.put(url,pic)

    console.log($document.find('div').eq(3));
    $document.find('div').eq(3).addClass('like');
    setTimeout(() => {
        $document.find('div').eq(3).removeClass('like');
    }, 1000);
  };
}

DetailsController.$inject = ['$scope', '$http', '$stateParams', '$document'];
export { DetailsController };
