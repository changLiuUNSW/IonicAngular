angular.module('mobile.jobList.controller')
.controller('jobListCtrl', ['$scope', '$ionicNavBarDelegate', function ($scope, $ionicNavBarDelegate) {
    $scope.hasFocus = false;
    $scope.setFocus = function() {
    $scope.hasFocus = true;
    $ionicNavBarDelegate.setTitle('');
    };
     $scope.noFocus = function () {
    $scope.hasFocus = false;
    $ionicNavBarDelegate.setTitle('Job List');
    }
//    $scope.isSeachShow = false;
//    $scope.showSearch = function ($event) {
//        $scope.isSeachShow = !$scope.isSeachShow;
//    };
    $scope.doRefresh = function () {
        //            $scope.playlists.push({ title: 'agag', id: 7 });
        $scope.$broadcast('scroll.refreshComplete');
    }
    $scope.jobList = [
           { JobNo: '230004', location: 'JLLS, Kaleen Plaza, Georgina Cr., Kaleen', company: 'JLL Kaleen Plaza' },
          { JobNo: '250002', location: 'Daramalan College, Cowper Street, Dickson., Kaleen', company: 'Daramalan College' },
           { JobNo: '26001', location: 'QCC, Crawford & Rutledge St, Kaleen', company: 'Queanbeyan City Council, Crawford & Rutledge St' }
    ];
}]);