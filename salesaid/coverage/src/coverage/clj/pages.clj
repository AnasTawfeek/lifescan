(ns coverage.clj.pages
  (:use hiccup.core)
  (:require [garden.core :refer [css]]
            [garden.stylesheet :refer [at-font-face]]))

(def topbar
  [:div {:class "topbar fullwidth"}
   ])

(def mainbar
  [:div {:class "mainbar fullwidth" :ng-controller "GridsController" }
   [:a {:class "button back"}]
   [:h1 {:class "title mygrids"} "MY GRIDS"]
   [:img {:src "resources/images/grids/dropdown.png" :class "dropdown" :ng-show "is_menu_shown"  :ng-hide "!is_menu_shown" } ]
   [:a {:class "button menu" :ng-click "show_menu()" }]
   [:a {:class "button next"}]
   ])

(def content 
  [:div {:class "content fullwidth" :ng-controller "GridsController"}
   [:a {:class "grid-button create-grid-button" :ng-click "add_grid()"}]
   [:div {:class "grid-button coverage-grid-button" :ng-model "grid" :ng-repeat "grid in grids" :ng-click "select_grid(grid, $index)" :ng-class "{selectedgrid: grid.selected && grid.selected == true}" } 
    [:div
     [:img { :class "gridlabel" :src  "{{grid.type_image}}"} ]]]])

(def footer
  [:div {:class "footer fullwidth"}])

(defn mygrids []
  (spit "coverage.html"
        (html
         [:html { :ng-app "" :ng-controller "GridsController" }
          [:head
          [:script {:src "/resources/js/angular.js" :type "text/javascript"}]
          [:script {:src "/resources/js/coverage-ng.js" :type "text/javascript"}]
           [:link {:href "resources/css/grids.css" :rel "stylesheet" :type "text/css" } ]]
          [:body { :ng-click "hide_menu()"}
          topbar
          mainbar
          content
          footer
           [:div {:ng-view ""}]
           ]]
         ))
  )


(mygrids)
