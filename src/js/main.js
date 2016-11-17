import angular from 'angular';

import{ routerConfig } from './routes';
import{ HomeController } from './controllers/home';
import{ AddImgController } from './controllers/add';
import{ DetailsController } from './controllers/single';

import 'angular-ui-router';

angular
	.module('app', ['ui.router'])
	.config(routerConfig)
    .controller('HomeController', HomeController)
    .controller('AddImgController', AddImgController)
    .controller('DetailsController', DetailsController);