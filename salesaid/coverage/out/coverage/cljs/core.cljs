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
    (swap! my-grids conj { :testfield "sdfadfa" } )))

(defn grids-view [grids]
  (node
   [:div.content.full-width
    [:a.grid-button.create-grid-button]
    (for [current-grid grids]
      [:a#test.grid-button.coverage-grid-button])]))

(defn update-grids-view []
  (dommy/replace! (sel1 :.content) (grids-view @my-grids))
  (.log js/console "fn update-grids-viewgrid"))

(defn listen-create-grid []
;;  (dommy/listen! (sel1 :.create-grid-button) :click add-grid)
  (dommy/listen! [(sel1 :body) ".create-grid-button"] :click add-grid))

(add-watch my-grids :watch-change (fn [_ _ _ _]
                                    (update-grids-view)))



;; -----------------------------------------------------
;; menu logic
;; ----------------------------------------------------
(def on true)
(def off false)

(def menu-state (atom off))

(defn toggle-truth [input]
  (not input))

(defn handle-menu-click []
  (.log js/console "fn handle-menu-click")
  (swap! menu-state toggle-truth menu-state))

(defn update-menu-view []
  (if (= @menu-state on)
    (dommy/show! (sel1 :.dropdown))
    (dommy/hide! (sel1 :.dropdown))))

(add-watch menu-state :watch-change (fn [_ _ _ _]
                                      (update-menu-view)))
(defn listen-menu-click []
  (dommy/listen! (sel1 :.menu) :click handle-menu-click))


;;----------------------------------------------------
(defn attach-listeners []
  (.log js/console "fn attach-listeners: attaching listeners")
  (listen-create-grid)
  (listen-menu-click))

;; attach event listeners to dom elements on page load
(set! (.-onload js/window) attach-listeners)

;; test that repl is connected
(hello)












