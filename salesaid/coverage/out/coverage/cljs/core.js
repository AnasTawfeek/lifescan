// Compiled by ClojureScript 0.0-2080
goog.provide('coverage.cljs.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('clojure.browser.repl');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
console.log("Hello world!");
coverage.cljs.core.my_grids = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
coverage.cljs.core.grids_count = cljs.core.atom.call(null,0);
coverage.cljs.core.new_id_factory_BANG_ = (function new_id_factory_BANG_(){cljs.core.swap_BANG_.call(null,coverage.cljs.core.grids_count,cljs.core.inc);
return cljs.core.deref.call(null,coverage.cljs.core.grids_count);
});
coverage.cljs.core.add_grid = (function add_grid(){cljs.core.swap_BANG_.call(null,coverage.cljs.core.my_grids,cljs.core.assoc,coverage.cljs.core.new_id_factory.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"testfield","testfield",4134886170),"testvalue"], null));
return console.log("add-grid called");
});
coverage.cljs.core.grid_view = (function grid_view(grid){var dom45130 = document.createElement("a");if("grid-button coverage-grid-button")
{dom45130.className = [cljs.core.str(dom45130.className),cljs.core.str(" "),cljs.core.str("grid-button coverage-grid-button")].join('').trim();
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(grid)))
{dom45130.setAttribute("id",new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(grid));
} else
{}
return dom45130;
});
coverage.cljs.core.add_grid_view = (function add_grid_view(grid){dommy.core.append_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("content"))[0]),coverage.cljs.core.grid_view.call(null,grid));
return console.log("grid added");
});
cljs.core.add_watch.call(null,coverage.cljs.core.my_grids,new cljs.core.Keyword(null,"watch-change","watch-change",1899132384),(function (_,___$1,___$2,new_grid){return coverage.cljs.core.add_grid_view.call(null,new_grid);
}));
coverage.cljs.core.listen_create_grid = (function listen_create_grid(){return dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("create-grid-button"))[0]),new cljs.core.Keyword(null,"click","click",1108654330),coverage.cljs.core.add_grid);
});
dommy.core.listen_BANG_.call(null,document.body,new cljs.core.Keyword(null,"load","load",1017231448),coverage.cljs.core.listen_create_grid);
