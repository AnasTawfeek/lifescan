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

 

  $scope.select_grid = function() {
    // how?
  };

  $scope.add_grid = function() {
    if ($scope.grids.length < 5)
    {
      $scope.grids.push({ type: "Competitive", stuff: "test" });
      console.log("add_grid called");
    }
  };
}
