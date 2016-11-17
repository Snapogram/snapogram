import angular from 'angular';

import{ routerConfig } from './routes';
import{ HomeController } from './controllers/home';
import{ AddImgController } from './controllers/addImg';
import{ DetailsController } from './controllers/details';

import 'angular-ui-router';

angular
	.module('app', ['ui.router'])
	.config(routerConfig)
    .controller('HomeController', HomeController)
    .controller('AddImgController', AddImgController)
    .controller('DetailsController', DetailsController);