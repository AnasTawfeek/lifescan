(ns coverage.clj.pages
  (:use hiccup.core)
  (:require [garden.core :refer [css]]
            [garden.stylesheet :refer [at-font-face]]))

(def topbar
  [:div {:class "topbar fullwidth"}
   ])

(def mainbar
  [:div {:class "mainbar fullwidth"  }
   [:a {:class "button back"}]
   [:h1 {:class "title mygrids"} "MY GRIDS"]
   [:div 
    [:img 
     {
      :class "dropdown" :ng-show "is_menu_shown"  
      :alt "",
      :height "177",
      :width "251",
      :border "0",
      :usemap "#Image-Maps_9201312130208556",
      :src
      "resources/images/grids/dropdown.png"}]
    [:map
     {:name "Image-Maps_9201312130208556" :id "_Image-Maps_9201312130208556"}
     [:area
      {:title "",
       :alt "",
       :href "#edit",
       :coords "7,75,235,119",
       :shape "rect"
       :ng-click "changeView('edit')"
       }]
     [:area
      {:title "",
       :alt "",
       :href "#delete",
       :coords "3,126,231,170",
       :shape "rect"
       :ng-click "delete_grid()"}]]]

   [:a {:class "button menu" :ng-click "show_menu()" }]
   [:a {:class "button next"}]
   ])

(def grids-content 
  [:div {  :class "grids-content fullwidth" }
   [:a {:class "grid-button create-grid-button" :ng-click "add_grid()"}]
   [:div {:class "grid-button coverage-grid-button" :ng-model "grid" :ng-repeat "grid in grids" :ng-click "select_grid(grid, $index)" :ng-class "{selectedgrid: grid.selected && grid.selected == true}" } 
    [:div
     [:img { :class "gridlabel" :src  "{{grid.type_image}}"} ]]]])

(def grids-view
  [:div {:class "content-wrapper" :ng-Controller "GridsController"  }
   topbar
   mainbar
   grids-content
   footer
   [:div {:ng-view ""}]]
  )

(def footer
  [:div {:class "footer fullwidth"}])

(defn mygrids []
  (spit "coverage.html"
        (html
         [:html { :ng-app ""  }
          [:head
           [:script {:src "/resources/js/angular.js" :type "text/javascript"}]
           [:script {:src "/resources/js/coverage-ng.js" :type "text/javascript"}]
           [:link {:href "resources/css/grids.css" :rel "stylesheet" :type "text/css" } ]]
          [:body {}
           grids-view
           ]]
         ))
  )


(mygrids)
