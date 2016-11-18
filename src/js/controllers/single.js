import { SERVER } from "../server";

function DetailsController ($scope, $http, $stateParams) {
  // $scope.pic = {};
  //
  // function init () {
  //   let url = SERVER + $stateParams.id;
  //   $http.get(url).then((resp) => {
  //     $scope.pic = resp.data;
  //   });
  // };
  //
  // init();
}

DetailsController.$inject = ['$scope', '$http', '$stateParams'];
export { DetailsController };
