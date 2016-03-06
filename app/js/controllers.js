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
  $scope.offers = [
    {'name': 'Economy', 'price': '13,90',
    'description':'Economy Offer: Your home will be cleaned!'},
    {'name': 'Economy Plus','price': '14,90',
    'description':'Economy Plus Offer: Your home will be cleaned by an experienced Tiger!'},
    {'name': 'Premium','price': '15,90',
    'description':'Premium Offer: Your home will be cleaned by a Premium Tiger!'},
    {'name': 'Premium Plus','price': '18,90',
    'description':'Premium Plus Offer: Your home will be cleaned by a Premium Plus Tiger!'}
  ];
  $scope.selected = 0;
  $scope.openFrequencySelector = false;
  $scope.offerDetails = false;
  $scope.pricingSelected = 1;

  $scope.updateBooking = function(booking, nextStep) {
    $scope.selected = nextStep;
  };

  $scope.toggleFrequencySelect = function() {
    $scope.openFrequencySelector = !$scope.openFrequencySelector;
    $scope.offerDetails = false;
  }

  $scope.selectFrequency = function(booking, frequency) {
    $scope.booking.frequency = frequency;
    $scope.toggleFrequencySelect();
    $scope.offerDetails = true;
  }

  $scope.changePricing = function(pricingOption) {
    $scope.pricingSelected = pricingOption;
  }

  $scope.done = function(booking) {
    alert("Congratulations! You made a reservation for " + booking.time + ", price: " + $scope.offers[$scope.pricingSelected].price)
  }
});
