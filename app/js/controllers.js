var bookATigerApp = angular.module('bookATigerApp', []);

bookATigerApp.controller('BookingStepsCtrl', function ($scope) {
  $scope.steps = [
    {'name': 'Date and zip code'},
    {'name': 'Cleaning details'},
    {'name': 'Address'},
    {'name': 'Payment'}
  ];
  $scope.frequencyOptions = [
    {'name': 'once', 'price': '14,90', 'bestseller': false},
    {'name': 'weekly','price': '13,90', 'bestseller': true},
    {'name': 'every 2 weeks','price': '13,90', 'bestseller': false},
    {'name': 'every 4 weeks','price': '13,90', 'bestseller': false}
  ];
  $scope.selected = 0;
  $scope.openFrequencySelector = false;

  $scope.updateBooking = function(booking, nextStep) {
    $scope.selected = nextStep;
    console.log(booking)
  };

  $scope.toggleFrequencySelect = function() {
    $scope.openFrequencySelector = !$scope.openFrequencySelector;
  }

  $scope.selectFrequency = function(booking, frequency) {
    $scope.booking.frequency = frequency;
    $scope.toggleFrequencySelect();
    console.log(booking)
  }
});
