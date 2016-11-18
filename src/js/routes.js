function routerConfig ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home',{
			url:'/',
			templateUrl: 'templates/home.tpi.html',
			controller: 'HomeController'
		})
		.state('about', {
	         url: '/about',
	      	 template: '<h1>About Us</h1>'
   		 })
		.state('addImg',{
			url: '/addImg',
			templateUrl: 'templates/add.tpi.html',
			controller: 'AddImgController'		
		})

		 $urlRouterProvider.otherwise('/');
}



routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']
export { routerConfig };