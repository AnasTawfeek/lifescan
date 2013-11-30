(ns coverage.pages
  (:use hiccup.core))

(def coverage [])


;; gray footer with trademark stuff
(def footer
  [:div {:class "footer"}])

(def topbar
  [:div {:class "topbar"}])

(def mainbar
  [:div {:class "mainbar"}])

(def footer
  [:div {:class "footer"}])

(def content
  [:div {:class "content"}])

(def grids
  (html
   [:head
    [:link {:href "coverage.js" :type "text/javascript"}]]
   [:body
    topbar
    mainbar
    content
    footer
    ]))

(spit "coverage.html" grids)
