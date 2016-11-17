function routerConfig ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home',{
			url:'/',
			templateUrl: 'templates/home.tpi.html'
		})

}



routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']
export { routerConfig };