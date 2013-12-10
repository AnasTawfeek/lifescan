(ns coverage.cljs.core
  (:require [dommy.utils :as utils]
            [dommy.core :as dommy]
            [dommy.attrs :as attrs]
            [clojure.browser.repl :as repl])
  (:use-macros [dommy.macros :only [node sel sel1]]))

;;--------------------------------------------------
;; brepl test
(defn hello []
  (.log js/console "hello from the REPL"))
;;------------------------------------------------


;; ------------------------------------------------
;; grids logic
;;-------------------------------
(def my-grids (atom [])) 

(defn add-grid []
  (.log js/console "fn add-grid")
  ;; ensure that visitor only can create up to 5 grids
  (if (< (count @my-grids) 5)
    (swap! my-grids conj { :testfield "sdfadfa" :id "dsfadfasdfafa" } )))

(defn select-grid! [index]
  "selects grid by adding a :selected attribute to its map and setting it to the value of true"
  (.log js/console "fn select-grid! called")
  (swap! my-grids update-in [index] conj {:selected true}))

(defn clear-grids [grid-set]
  "takes a grid as an input and returns a list of grids with all its maps with removed :selected key-value pairs"
  (map (fn [item] (dissoc item :selected)) grid-set))

(defn grids-view [grids]
  (node
   [:div.content.full-width
    [:a.grid-button.create-grid-button]
    (for [current-grid grids]
      (grid-view current-grid)
      )]))

(defn grid-view [grid index]
  (node
   [:a#test.grid-button.coverage-grid-button { :_id (:id current-grid) }]))

(defn update-grids-view []
  (dommy/replace! (sel1 :.content) (grids-view @my-grids))
  (.log js/console "fn update-grids-viewgrid"))

(defn listen-create-grid []
  (dommy/listen! [(sel1 :body) ".create-grid-button"] :click add-grid))

(defn listen-grid-click []
  (dommy/listen! [(sel1 :body) ".coverage-grid-button"] :click select-grid!))

(add-watch my-grids :watch-change (fn [_ _ _ _]
                                    (update-grids-view)))

;; -----------------------------------------------------
;; menu logic
;; ----------------------------------------------------
(def on true)
(def off false)

(def menu-state (atom off))

(defn toggle-truth! [input]
  (not input))

(defn handle-menu-click []
  (swap! menu-state toggle-truth! @menu-state)
  (.log js/console "fn handle-menu-click"))

(defn update-menu-view []
  (if (= @menu-state on)
    (attrs/set-style! (sel1 :.dropdown) :display "block")
    (dommy/hide! (sel1 :.dropdown))))

(defn listen-menu-click []
  (dommy/listen! (sel1 :.menu) :click handle-menu-click))

(add-watch menu-state :watch-change (fn [_ _ _ _]
                                      (update-menu-view)))


;;----------------------------------------------------
(defn attach-listeners []
  (.log js/console "fn attach-listeners: attaching listeners")
  (listen-create-grid)
  (listen-grid-click)
  (listen-menu-click))

;; attach event listeners to dom elements on page load
(set! (.-onload js/window) attach-listeners)

;; test that repl is connected
(hello)












