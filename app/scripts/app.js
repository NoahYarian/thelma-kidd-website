'use strict';

/**
 * @ngdoc overview
 * @name thelmaKiddWebsiteApp
 * @description
 * # thelmaKiddWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('thelmaKiddWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/about-coaching', {
        templateUrl: 'views/about-coaching.html',
        controller: 'AboutCoachingCtrl',
        controllerAs: 'aboutCoaching'
      })
      .when('/workshops', {
        templateUrl: 'views/workshops.html',
        controller: 'WorkshopsCtrl',
        controllerAs: 'workshops'
      })
      .when('/testimonials', {
        templateUrl: 'views/testimonials.html',
        controller: 'TestimonialsCtrl',
        controllerAs: 'testimonials'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl',
        controllerAs: 'news'
      })
      .when('/reading', {
        templateUrl: 'views/reading.html',
        controller: 'ReadingCtrl',
        controllerAs: 'reading'
      })
      .when('/about-thelma', {
        templateUrl: 'views/about-thelma.html',
        controller: 'AboutThelmaCtrl',
        controllerAs: 'aboutThelma'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
