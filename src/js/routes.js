function routerConfig ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home',{
			url:'/',
			templateUrl: 'templates/home.tpi.html'
		})
		.state('about', {
	         url: '/about',
	      	 template: '<h1>About Us</h1>'
   		 })
		.state('addImg',{
			url: '/addImg',
			templateUrl: 'templates/add.tpi.html'		
		})
}



routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']
export { routerConfig };