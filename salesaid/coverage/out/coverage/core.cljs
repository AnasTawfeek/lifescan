(ns coverage.core
  (:require [dommy.utils :as utils]
            [dommy.core :as dommy])
  (:use-macros [dommy.macros :only [node sel sel1]]))

(. js/console (log "Hello world!"))
