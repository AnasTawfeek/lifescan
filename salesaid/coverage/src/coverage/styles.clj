(ns coverage.styles
  (:require [garden.core :refer [css]]
            [garden.stylesheet :refer [at-font-face]]))

;; styles components
(def darkgray "#666666")
(def lightgray "#cccccc")

(def initial-style
  (list [:.back { :display "none" }]
        [:.button { :width "90px" :height "29px" }]
        [:.menu { :display "block" :float "right" :margin-right "40px" }]
        [:.next { :display "none" :float "right" :margin-right "40px "}]))

(def font-style
  (list [ (at-font-face {:font-family "gothambold" :src "url(../fonts/Gotham-Bold.ttf)" } )]
        [ (at-font-face {:font-family "gothamnarrow" :src "url(../fonts/Gotham-XLight.ttf)" })]))

(def components-style
  (list
   [:.title {:color "#ffffff" :position "absolute"  :font-family "gothambold" :font-size "26px" }]
   [:.title.mygrids { :left "450px" :top "35px" }]
   [:.fullwidth {:width "1024px"}]
   [:.grid-button {:width "234px" :height "198px" :display "inline-block" }]
   [:.create-grid-button { :background-image "url(../images/grid/creategrid.png)" }]
   [:.button {:width "88px" :height "27px" :display "inline-block"}]
   [:.back {:background-image "url(../images/global/back.png)" :float "left"}]
   [:.next {:background-image "url(../images/global/next.png)" :float "right"}]
   [:.menu {:background-image "url(../images/grid/menu.png" :float "right"}]))


(def layout-style
  (list
   [:body {:width "1024px" :height "768px" :font-family "gothamnarrow"}]
   [:.topbar {:background-color lightgray :height "32px" }]
   [:.mainbar {:background-color darkgray :height "60px"  :padding-left "40px" :padding-right "40px" :display "table-cell" :vertical-align "middle" }]
   [:.content
    { :background-image "url(../images/global/contentbackground.png)" :class "fullwidth"  :height "750px"}]))

(def grids-style
  (css {:output-to "resources/css/grids.css" }
       font-style
       layout-style
       components-style
       initial-style))
