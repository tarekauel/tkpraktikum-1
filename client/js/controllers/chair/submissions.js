angular
  .module('app')
  .controller('SubmissionsChairController', ['$scope', '$state', 'Submission', 'Review', 'AuthService', 'User', '$stateParams',
    function($scope, $state, Submission, Review, AuthService, User, $stateParams) {

      Submission.find({conferenceId: AuthService.getCurrentConferenceId(), filter: { include: ['tags', 'authors']}})
        .$promise.then(function(s) {
          $scope.submissions = s.map(function(s) {
            s.authors = s.authors.map(function(a) {
              a.fullName = a.firstname + ' ' +  a.lastname;
              return a;
            });
            return s;
          });

      });
    }]);