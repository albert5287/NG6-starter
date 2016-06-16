import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

const home = angular.module('home', [
  uiRouter
])
.component('home', homeComponent)
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})
.name;

export default home;
