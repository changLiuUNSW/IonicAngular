angular.module('starter.controllers', [])
    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};
        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                $scope.closeLogin();
            }, 1000);
        };

    })
    .controller('PlaylistsCtrl', function ($scope, $ionicPopover) {

        $scope.isSeachShow = false;
        $scope.showSearch = function ($event) {
            $scope.isSeachShow = !$scope.isSeachShow;
        };
//        $ionicPopover.fromTemplateUrl('my-popover.html', {
//            scope: $scope,
//        }).then(function (popover) {
//            $scope.popover = popover;
//        });
//        $scope.openPopover = function ($event) {
//            $scope.popover.show($event);
//        };
//        $scope.closePopover = function () {
//            $scope.popover.hide();
//        };
//        //Cleanup the popover when we're done with it!
//        $scope.$on('$destroy', function () {
//            $scope.popover.remove();
//        });
//        // Execute action on hide popover
//        $scope.$on('popover.hidden', function () {
//            // Execute action
//        });
//        // Execute action on remove popover
//        $scope.$on('popover.removed', function () {
//            // Execute action
//        });
//        $scope.doScroll = function() {
//            console.log('gaga');
//        }
        $scope.doRefresh = function() {
//            $scope.playlists.push({ title: 'agag', id: 7 });
            $scope.$broadcast('scroll.refreshComplete');
        }


        $scope.jobList = [
            { JobNo: '230004', location: 'JLLS, Kaleen Plaza, Georgina Cr., Kaleen',company:'JLL Kaleen Plaza'},
           { JobNo: '250002', location: 'Daramalan College, Cowper Street, Dickson., Kaleen', company: 'Daramalan College' },
            { JobNo: '26001', location: 'QCC, Crawford & Rutledge St, Kaleen', company: 'Queanbeyan City Council, Crawford & Rutledge St' }
        ];
    })
    .controller('PlaylistCtrl', function ($scope, $ionicPopover) {
        $scope.job = {
            JobNo: '230004',
            location: 'JLLS, Kaleen Plaza, Georgina Cr., Kaleen',
            company: 'JLL Kaleen Plaza',
            contact: {
                Company: 'Jones Lang La Salle',
                FirstName: 'Claudia',
                LastName: 'Serrano'
            }
        };
//        $ionicPopover.fromTemplateUrl('my-popover.html', {
//            scope: $scope,
//        }).then(function(popover) {
//            $scope.popover = popover;
//        });
//        $scope.openPopover = function($event) {
//            $scope.popover.show($event);
//        };
//        $scope.closePopover = function() {
//            $scope.popover.hide();
//        };
//        //Cleanup the popover when we're done with it!
//        $scope.$on('$destroy', function() {
//            $scope.popover.remove();
//        });
//        // Execute action on hide popover
//        $scope.$on('popover.hidden', function() {
//            // Execute action
//        });
//        // Execute action on remove popover
//        $scope.$on('popover.removed', function() {
//            // Execute action
//        });
    });
