var bookATigerApp = angular.module('bookATigerApp', []);

bookATigerApp.controller('BookingStepsCtrl', function ($scope) {
  $scope.steps = [
    {'name': 'Date and zip code',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Clening details',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'Address',
     'snippet': 'The Next, Next Generation tablet.'},
     {'name': 'Payment',
      'snippet': 'The Next, Next Generation tablet.'}
  ];

  $scope.selected = 0;

  $scope.setActive = function(index) {
    $scope.selected = index;
  };

  $scope.bookingOrder = {};

  $scope.updateBooking = function(booking, nextStep) {
    $scope.bookingOrder = angular.copy(booking);
    $scope.setActive(nextStep);
  };
});
