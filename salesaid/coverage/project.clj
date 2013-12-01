(defproject coverage "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2080"]
                 [hiccup "1.0.4"]
                 [prismatic/dommy "0.1.1"]]

  :plugins [[lein-cljsbuild "1.0.0"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "coverage"
              :source-paths ["src"]
              :compiler {
                :output-to "coverage.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
