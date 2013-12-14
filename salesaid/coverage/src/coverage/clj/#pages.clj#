(ns coverage.clj.pages
  (:use hiccup.core)
  (:require [garden.core :refer [css]]
            [garden.stylesheet :refer [at-font-face]]))

(def topbar
  [:div {:class "topbar fullwidth"}
   ])

(defn grids-mainbar [title]
  [:div {:class "mainbar fullwidth"  }
   [:a {:class "button back"}]
   [:h1 {:class "title mygrids"} title]
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
       :ng-click "changeView('/edit')"
       }]
     [:area
      {:title "",
       :alt "",
       :href "",
       :coords "3,126,231,170",
       :shape "rect"
       :ng-click "delete_grid($event)" }]]]

   [:a {:class "button menu" :ng-click "show_menu()" }]
   [:a {:class "button next"}]
   ])

(defn providers-mainbar [title]
  [:div {:class "mainbar fullwidth"  }
   [:a {:class "button back" :ng-click "changeView('/')"}]
   [:h1 {:class "title mygrids"} title]
   [:a {:class "button next" :ng-click "submit()"}]
   ])

(def grids-content 
  [:div {  :class "grids-content fullwidth" }
   [:a {:class "grid-button create-grid-button" :ng-click "add_grid()"}]
   [:div {:class "grid-button coverage-grid-button" :ng-model "grid" :ng-repeat "grid in grids" :ng-click "select_grid(grid, $index)" :ng-class "{selectedgrid: grid.selected && grid.selected == true}" } 
    [:div
     [:img { :class "gridlabel" :src  "{{ grid.type_image }}"} ]]]])

(def providers-content
   [:div {  :class "providers-content fullwidth" }
    [:div {:class "selected-plans"}
     [:img { :class "productheaders" :src "/resources/images/selection/productheaders.png"}]
     ]
   ])

(def grids-view
  [:div {:class " grids-wrapper"  :ng-controller "GridsController"   }
   topbar
   (grids-mainbar "MY GRIDS") 
   grids-content
   footer
   ]
  )

(def providers-view
  [:div {:class "providers-wrapper" :ng-controller "ProvidersController"}
   topbar
   (providers-mainbar "SELECT PLANS")
   providers-content
   footer
   ])

(def footer
  [:div {:class "footer fullwidth"}])

(spit "providers.html"
      (html
       providers-view))

(spit "grids.html"
        (html
         grids-view
         ))

(spit "coverage.html"
        (html
         [:html { :ng-app "coverageApp"  }
          [:head
           [:script {:src "/resources/js/angular.js" :type "text/javascript"}]
           [:script {:src "/resources/js/angular-route.js" :type "text/javascript"}]
           [:script {:src "/resources/js/coverage-ng.js" :type "text/javascript"}]
           [:link {:href "resources/css/grids.css" :rel "stylesheet" :type "text/css" } ]]
          [:body {}
           [:div {:ng-view ""}]
           ]]
         ))


