angular.module('mobile.jobList.controller')
.controller('jobListCtrl', ['$scope', function ($scope) {
    $scope.isSeachShow = false;
    $scope.showSearch = function ($event) {
        $scope.isSeachShow = !$scope.isSeachShow;
    };
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