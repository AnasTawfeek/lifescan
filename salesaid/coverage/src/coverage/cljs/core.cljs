(ns coverage.cljs.core
  (:require [dommy.utils :as utils]
            [dommy.core :as dommy]
            [clojure.browser.repl :as repl])
  (:use-macros [dommy.macros :only [node sel sel1]]))


(. js/console  (log "Hello world!"))
(.log js/console "whoa this is trippy")
;;


;;(sel1 :.dropdown)









