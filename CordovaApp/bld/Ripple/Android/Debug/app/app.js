// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('mobile', [
    'ionic',
    'mobile.menu',
    'mobile.jobList',
    'mobile.jobDetail'
]).run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
          url: "/app",
          abstract: true,
          templateUrl: "app/menu/menu.html",
          controller: 'MenuCtrl'
      })

      .state('app.search', {
          url: "/search",
          views: {
              'menuContent': {
                  templateUrl: "app/search/search.html"
              }
          }
      })

      .state('app.browse', {
          url: "/browse",
          views: {
              'menuContent': {
                  templateUrl: "app/browse/browse.html"
              }
          }
      })
      .state('app.jobList', {
          url: "/jobList",
          views: {
              'menuContent': {
                  templateUrl: "app/jobList/jobList.html",
                  controller: 'jobListCtrl'
              }
          }
      })

      .state('app.jobDetail', {
          url: "/jobList/:jobId",
          views: {
              'menuContent': {
                  templateUrl: "app/jobDetail/jobDetail.html",
                  controller: 'jobDetailCtrl'
              }
          }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/jobList');
});

