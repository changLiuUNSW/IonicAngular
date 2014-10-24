angular.module('mobile.jobDetail.controller')
.controller('jobDetailCtrl', ['$scope', function ($scope) {
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
    }
])