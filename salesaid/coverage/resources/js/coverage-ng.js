Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};


var app = angular.module("coverageApp", ["ngRoute"]);
var unselected_providers = [];
var selected_providers = [];

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
      $location.path(view);
  }
  
  $scope.is_menu_shown = false;
  
  $scope.toggle_menu = function() {
     if ($scope.is_menu_shown)
       $scope.hide_menu();
     else
       $scope.show_menu();
  };

  $scope.show_menu = function() {
    $scope.is_menu_shown = true;
  };

  $scope.hide_menu = function() {
    $scope.is_menu_shown = false;
  };

  $scope.delete_grid = function(e) {
    angular.forEach($scope.grids, function(currGrid) {
      // delete the grid that's selected
      var tempIndex = 0;
      if (currGrid.selected && currGrid.selected == true) {
        $scope.grids.remove(tempIndex);
        tempIndex += 1;
      }
    });
    $scope.is_menu_shown = false;
    e.preventDefault();
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
    
    /*
    if ($scope.grids.length < 5)
    {
      $scope.grids.push({ type: "Competitive", stuff: "test" });
      console.log("add_grid called");
    }
    */
  };
}]);

app.controller("ProvidersController", ["$scope", "$location", "$http", "$route", 
 function ($scope, $location, $http, $route) {
   $scope.grid = {};
   $scope.toggle_state = function(index) {
     var state = $scope.grid.states[index];
     if (state.selected == undefined || state.selected == false)
     {
       console.log("toggling state from false to true");
       $scope.grid.states[index].selected = true;
     }
     else
     {
       console.log("toggling state from true to false");
       $scope.grid.states[index].selected = false;
     }
   };

   
   $scope.coverage_icon = function(type) {
     if (type === "Open Access")
       return "resources/images/selection/preferred_blue.png";
     else if (type === "Non Formulary")
       return "resources/images/selection/xnf.png";
     else
       return "resources/images/selection/blank.png";
   };
   
   $scope.grid.template = undefined;
   $scope.grid.states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"}
    ,
    {
        "name": "Alaska",
        "abbreviation": "AK"}
    ,
    {
        "name": "Arizona",
        "abbreviation": "AZ"}
    ,
    {
        "name": "Arkansas",
        "abbreviation": "AR"}
    ,
    {
        "name": "California",
        "abbreviation": "CA"}
    ,
    {
        "name": "Colorado",
        "abbreviation": "CO"}
    ,
    {
        "name": "Connecticut",
        "abbreviation": "CT"}
    ,
    {
        "name": "Delaware",
        "abbreviation": "DE"}
    ,
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"}
    ,
    {
        "name": "Florida",
        "abbreviation": "FL"}
    ,
    {
        "name": "Georgia",
        "abbreviation": "GA"}
    ,
    {
        "name": "Hawaii",
        "abbreviation": "HI"}
    ,
    {
        "name": "Idaho",
        "abbreviation": "ID"}
    ,
    {
        "name": "Illinois",
        "abbreviation": "IL"}
    ,
    {
        "name": "Indiana",
        "abbreviation": "IN"}
    ,
    {
        "name": "Iowa",
        "abbreviation": "IA"}
    ,
    {
        "name": "Kansas",
        "abbreviation": "KS"}
    ,
    {
        "name": "Kentucky",
        "abbreviation": "KY"}
    ,
    {
        "name": "Louisiana",
        "abbreviation": "LA"}
    ,
    {
        "name": "Maine",
        "abbreviation": "ME"}
    ,
    {
        "name": "Maryland",
        "abbreviation": "MD"}
    ,
    {
        "name": "Massachusetts",
        "abbreviation": "MA"}
    ,
    {
        "name": "Michigan",
        "abbreviation": "MI"}
    ,
    {
        "name": "Minnesota",
        "abbreviation": "MN"}
    ,
    {
        "name": "Mississippi",
        "abbreviation": "MS"}
    ,
    {
        "name": "Missouri",
        "abbreviation": "MO"}
    ,
    {
        "name": "Montana",
        "abbreviation": "MT"}
    ,
    {
        "name": "Nebraska",
        "abbreviation": "NE"}
    ,
    {
        "name": "Nevada",
        "abbreviation": "NV"}
    ,
    {
        "name": "New Hampshire",
        "abbreviation": "NH"}
    ,
    {
        "name": "New Jersey",
        "abbreviation": "NJ"}
    ,
    {
        "name": "New Mexico",
        "abbreviation": "NM"}
    ,
    {
        "name": "New York",
        "abbreviation": "NY"}
    ,
    {
        "name": "North Carolina",
        "abbreviation": "NC"}
    ,
    {
        "name": "North Dakota",
        "abbreviation": "ND"}
    ,
    {
        "name": "Ohio",
        "abbreviation": "OH"}
    ,
    {
        "name": "Oklahoma",
        "abbreviation": "OK"}
    ,
    {
        "name": "Oregon",
        "abbreviation": "OR"}
    ,
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"}
    ,
    {
        "name": "Rhode Island",
        "abbreviation": "RI"}
    ,
    {
        "name": "South Carolina",
        "abbreviation": "SC"}
    ,
    {
        "name": "South Dakota",
        "abbreviation": "SD"}
    ,
    {
        "name": "Tennessee",
        "abbreviation": "TN"}
    ,
    {
        "name": "Texas",
        "abbreviation": "TX"}
    ,
    {
        "name": "Utah",
        "abbreviation": "UT"}
    ,
    {
        "name": "Vermont",
        "abbreviation": "VT"}
    ,
    {
        "name": "Virginia",
        "abbreviation": "VA"}
    ,
    {
        "name": "Washington",
        "abbreviation": "WA"}
    ,
    {
        "name": "West Virginia",
        "abbreviation": "WV"}
    ,
    {
        "name": "Wisconsin",
        "abbreviation": "WI"}
    ,
    {
        "name": "Wyoming",
        "abbreviation": "WY"}];


   
   $scope.select_state_class = function(state) {
     return $scope.select_class(state.selected);
   };

   $scope.select_template_class = function(template) {
     if ($scope.grid.template == template)
       return $scope.select_class(true);
     else
       return $scope.select_class(false);
   };

   $scope.select_class = function(val) {
     if (val == true)
     {
       return "selected-state";
     }
     else
     {
       return "unselected-state";
     }
     
   };


   $scope.select_template = function(template) {
     $scope.grid.template = template;
   };
   
   $scope.filter_by_states = function(providers, states) {
     return providers.filter(function(provider) {
       var flag = false;
       states.forEach(function(state) {
         if (provider.State.toLowerCase().indexOf(state.abbreviation.toLowerCase()) != -1 || provider.State.toLowerCase().indexOf("any") != -1 || provider.State.toLowerCase().indexOf("national") != -1) {
           flag = true;
         }
       });
       return flag;
     });
   };
   
   
   $scope.grid.selected_states = function() {
     return $scope.grid.states.filter(function(state) {
       return state.selected == true;
     });
   };
   
   
   $scope.grid.unselected_providers = unselected_providers;
   $scope.grid.selected_providers = selected_providers;

   $scope.select_provider = function(planIndex) {
     if ($scope.grid.selected_providers.length < 5) {
       $scope.grid.selected_providers.push($scope.grid.unselected_providers[planIndex]);
       $scope.grid.unselected_providers.splice(planIndex, 1);
     }
   };
   
   $scope.deselect_provider = function(planIndex) {
       $scope.grid.unselected_providers.push($scope.grid.selected_providers[planIndex]);
       $scope.grid.selected_providers.splice(planIndex, 1);
   };

   
   $scope.changeView = function(view) {
     if (view == "/providers") {
       console.log("view = providers");
       if ($scope.grid.selected_states().length > 0 && $scope.grid.template != undefined && $scope.grid.template != null) {
         $location.path(view);     
         unselected_providers = $scope.filter_by_states(providers, $scope.grid.selected_states());
         selected_providers = [];
         gridtemplate = $scope.grid.template;
       }
     }
     else {
       $location.path(view);     
       unselected_providers = $scope.filter_by_states(providers, $scope.grid.selected_states());
       selected_providers = [];
       gridtemplate = $scope.grid.template;
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
              when("/providers", {
                 templateUrl: "providers.html",
                 controller: "ProvidersController"
               }).
              when("/edit", {
                 templateUrl: "providers.html",
                 controller: "ProvidersController"
               }).
                when("/add", {
                 templateUrl: "add.html",
                 controller: "ProvidersController"
               });
           }
           ]);





