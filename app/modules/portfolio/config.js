function config($stateProvider) {
  $stateProvider
  .state('portfolio', {
    url: '/',
    controller: 'PortfolioController as portfolioCtrl',
    template: require('./view.html')
  })
}
 export default config;
