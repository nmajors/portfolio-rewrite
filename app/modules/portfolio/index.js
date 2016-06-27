import angular from 'angular';

import config from './config';

import portfolioController from './controller';

let portfolio = angular.module('nms.portfolio', []);

portfolio.config(config);
portfolio.controller('PortfolioController', portfolioController);

export default portfolio;
