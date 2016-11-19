import { SERVER } from "../server";

function AddImgController ($scope, $http, $state) {

	 $scope.addPic = (pic) => {
		 $http.post(SERVER + 'images', pic).then((resp) => {
			 $state.go('home');
		 });
  };

};







AddImgController.$inject = ['$scope', '$http', '$state'];
export { AddImgController };
