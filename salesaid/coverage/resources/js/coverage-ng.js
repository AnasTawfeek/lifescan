Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};


var app = angular.module("coverageApp", ["ngRoute"]);
  


app.controller("GridsController", ["$scope", "$location", "$http", "$route", 
 function ($scope, $location, $http, $route) {
  $scope.grids = [
    {
      type: "Competitive",
      type_image: "resources/images/grids/competitive.png",
      stuff: "somestuff"
    },
    {
      type: "One Touch",
      type_image: "resources/images/grids/onetouchonly.png",
      stuff: "somestuff"
    }
  ];

  $scope.changeView = function(view) {
    $scope.changeView = function(view) {
      $location.path(view);
    }
  }
  
  $scope.is_menu_shown = false;
  
  $scope.show_menu = function() {
    $scope.is_menu_shown = true;
  };

  $scope.hide_menu = function() {
    $scope.is_menu_shown = false;
  };

  $scope.delete_grid = function() {
    angular.forEach($scope.grids, function(currGrid) {
      // delete the grid that's selected
      var tempIndex = 0;
      if (currGrid.selected && currGrid.selected == true) {
        $scope.grids.remove(tempIndex);
        tempIndex += 1;
      }
    });
  }
  
  $scope.select_grid = function(grid, index) {
    // now deselect all other grids
    var tempIndex = 0;
    angular.forEach($scope.grids, function(gd){
      if (tempIndex != index) {
        gd.selected = false;
      }
      tempIndex += 1;
    });

    grid.selected = true;
    $scope.grids[index] = grid;
  };

  $scope.add_grid = function() {
    if ($scope.grids.length < 5)
    {
      $scope.grids.push({ type: "Competitive", stuff: "test" });
      console.log("add_grid called");
    }
  };
}]);



app.config(["$routeProvider",
           function($routeProvider) {
             $routeProvider.
               when("/", {
                 templateUrl: "grids.html",
                controller: "GridsController"
               }).
               when("/edit", {
                 templateUrl: "edit.html",
                 controller: "EditController"
               }).
               when("/add", {
                 templateUrl: "add.html",
                 controller: "AddController"
               });
           }
           ]);





