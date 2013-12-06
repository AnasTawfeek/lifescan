(ns coverage.cljs.core
  (:require [dommy.utils :as utils]
            [dommy.core :as dommy]
            [clojure.browser.repl :as repl])
  (:use-macros [dommy.macros :only [node sel sel1]]))

::(. js/console  (log "Hello world!"))

;; initialize grids
(def my-grids (atom {})) 
(def grids-count (atom 0))

(defn new-id-factory! []
  "returns a new, unique id whenever run"
  (swap! grids-count inc)
  @grids-count)

(defn add-grid []
  (swap! my-grids assoc (new-id-factory) { :testfield "testvalue" })
  (.log js/console "add-grid called"))

(defn grid-view [grid]
  (node
   [:a {:class "grid-button coverage-grid-button" :id (:id grid)}]))

(defn add-grid-view [grid]
  (dommy/append! (sel1 :.content) (grid-view grid))
  (.log js/console "grid added"))

(add-watch my-grids :watch-change (fn [_ _ _ new-grid]
                                    (add-grid-view new-grid)))




(defn listen-create-grid []
  (dommy/listen! (sel1 :.create-grid-button) :click add-grid))

(dommy/listen! (sel1 :body) :load listen-create-grid)















