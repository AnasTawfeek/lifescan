(ns coverage.cljs.core
  (:require [dommy.utils :as utils]
            [dommy.core :as dommy]
            [dommy.attrs :as attrs]
            [clojure.browser.repl :as repl])
  (:use-macros [dommy.macros :only [node sel sel1]]))

;; initialize grids
(def my-grids (atom [])) 

(defn delegate [parent-element child-element event handler]
  "delegates event handlers to children of a parent"
  (dommy/listen! parent-element event (fn [e] (
                                              (.log js/console e)))))

(defn add-grid []
  (.log js/console "add-grid called")
  ;; only do it if count <= 5
  (if (< (count @my-grids) 5)
    (swap! my-grids conj { :testfield "sdfadfa" } )))

;; works
(defn grids-view [grids]
  (node
   [:div.content.full-width
    [:a.grid-button.create-grid-button]
    (for [current-grid grids]
      [:a#test.grid-button.coverage-grid-button])]))

(defn hello []
  (.log js/console "hello"))

(defn update-grids-view []
  (dommy/replace! (sel1 :.content) (grids-view @my-grids))
  (.log js/console "grid view updated"))

(defn listen-create-grid []
;;  (dommy/listen! (sel1 :.create-grid-button) :click add-grid)
  (dommy/listen! [(sel1 :body) ".create-grid-button"] :click add-grid))

(dommy/listen! (sel1 :body) :load listen-create-grid)



(add-watch my-grids :watch-change (fn [_ _ _ _]
                                    (update-grids-view)))


(hello)












