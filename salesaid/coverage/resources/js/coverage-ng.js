Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

angular.module("coverageApp", [])
  .config(["$routeProvider",
           function($routeProvider) {
             $routeProvider.
               when("/grids", {
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

function editController($scope) {
  $scope.test = "blah";
}

function GridsController($scope) {
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

  $scope.is_menu_shown = false;
  
  $scope.show_menu = function() {
    $scope.is_menu_shown = true;
  };

  $scope.hide_menu = function() {
    $scope.is_menu_shown = false;
  };

  $scope.delete_grid = function(grid, index) {
    $scope.grids.remove(index);
  }
  
  $scope.select_grid = function(grid, index) {
    grid.selected = true;
    $scope.grids[index] = grid;
    // now deselect all other grids
    var tempIndex = 0;
    angular.forEach($scope.grids, function(gd){
      if (tempIndex != index) {
        gd.selected = false;
      }
      tempIndex += 1;
    });
  };

  $scope.add_grid = function() {
    if ($scope.grids.length < 5)
    {
      $scope.grids.push({ type: "Competitive", stuff: "test" });
      console.log("add_grid called");
    }
  };
}
