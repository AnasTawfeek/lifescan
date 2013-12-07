(ns coverage.clj.pages
  (:use hiccup.core)
  (:require [garden.core :refer [css]]
            [garden.stylesheet :refer [at-font-face]]))

(def topbar
  [:div {:class "topbar fullwidth"}
   ])

(def mainbar
  [:div {:class "mainbar fullwidth"}
   [:a {:class "button back"}]
   [:h1 {:class "title mygrids"} "MY GRIDS"]
   [:img {:src "resources/images/grids/dropdown.png" :class "dropdown"} ]
   [:a {:class "button menu"}]
   [:a {:class "button next"}]
   ])

(def content
  [:div {:class "content fullwidth"}
   [:a {:class "grid-button create-grid-button"}]])

(def footer
  [:div {:class "footer fullwidth"}])

(defn mygrids []
  (spit "coverage.html"
        (html
         [:head
          [:script {:type "text/javascript"}  "var CLOSURE_NO_DEPS = true;"]
          [:script {:src "base.js" :type "text/javascript"}]
          [:script {:src "coverage.js" :type "text/javascript"}]
          [:link {:href "resources/css/grids.css" :rel "stylesheet" :type "text/css" } ]]
         [:body
          topbar
          mainbar
          content
          footer
          ])))


(mygrids)
