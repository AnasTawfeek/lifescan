// Compiled by ClojureScript 0.0-2080
goog.provide('coverage.cljs.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('clojure.browser.repl');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
coverage.cljs.core.my_grids = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
coverage.cljs.core.add_grid = (function add_grid(){console.log("add-grid called");
if((cljs.core.count.call(null,cljs.core.deref.call(null,coverage.cljs.core.my_grids)) <= 5))
{return cljs.core.swap_BANG_.call(null,coverage.cljs.core.my_grids,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"testfield","testfield",4134886170),"testvaluenow2"], null));
} else
{return null;
}
});
coverage.cljs.core.grids_view = (function grids_view(grids){var dom57555 = document.createElement("div");dom57555.className = "content full-width";
dom57555.appendChild((function (){var dom57556 = document.createElement("a");dom57556.className = "grid-button create-grid-button";
return dom57556;
})());
dom57555.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__3986__auto__ = (function iter__57557(s__57558){return (new cljs.core.LazySeq(null,(function (){var s__57558__$1 = s__57558;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__57558__$1);if(temp__4092__auto__)
{var s__57558__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__57558__$2))
{var c__3984__auto__ = cljs.core.chunk_first.call(null,s__57558__$2);var size__3985__auto__ = cljs.core.count.call(null,c__3984__auto__);var b__57560 = cljs.core.chunk_buffer.call(null,size__3985__auto__);if((function (){var i__57559 = 0;while(true){
if((i__57559 < size__3985__auto__))
{var current_grid = cljs.core._nth.call(null,c__3984__auto__,i__57559);cljs.core.chunk_append.call(null,b__57560,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#test.grid-button.coverage-grid-button","a#test.grid-button.coverage-grid-button",4344143125)], null));
{
var G__57561 = (i__57559 + 1);
i__57559 = G__57561;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57560),iter__57557.call(null,cljs.core.chunk_rest.call(null,s__57558__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57560),null);
}
} else
{var current_grid = cljs.core.first.call(null,s__57558__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#test.grid-button.coverage-grid-button","a#test.grid-button.coverage-grid-button",4344143125)], null),iter__57557.call(null,cljs.core.rest.call(null,s__57558__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3986__auto__.call(null,grids);
})()));
return dom57555;
});
coverage.cljs.core.update_grids_view = (function update_grids_view(){dommy.core.replace_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("content"))[0]),coverage.cljs.core.grids_view.call(null,cljs.core.deref.call(null,coverage.cljs.core.my_grids)));
return console.log("grid view updated");
});
coverage.cljs.core.listen_create_grid = (function listen_create_grid(){console.log([cljs.core.str("listen-create-grid() called -event:")].join(''));
return dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("create-grid-button"))[0]),new cljs.core.Keyword(null,"click","click",1108654330),coverage.cljs.core.add_grid);
});
dommy.core.listen_BANG_.call(null,document.body,new cljs.core.Keyword(null,"load","load",1017231448),coverage.cljs.core.listen_create_grid);
cljs.core.add_watch.call(null,coverage.cljs.core.my_grids,new cljs.core.Keyword(null,"watch-change","watch-change",1899132384),(function (_,___$1,___$2,___$3){return coverage.cljs.core.update_grids_view.call(null);
}));
coverage.cljs.core._test = (function _test(){return console.log("this is a test");
});
