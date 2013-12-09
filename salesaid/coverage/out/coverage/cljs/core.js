// Compiled by ClojureScript 0.0-2080
goog.provide('coverage.cljs.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('clojure.browser.repl');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
coverage.cljs.core.my_grids = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
coverage.cljs.core.delegate = (function delegate(parent_element,child_element,event,handler){return dommy.core.listen_BANG_.call(null,parent_element,event,(function (e){return console.log(e).call(null);
}));
});
coverage.cljs.core.add_grid = (function add_grid(){console.log("add-grid called");
if((cljs.core.count.call(null,cljs.core.deref.call(null,coverage.cljs.core.my_grids)) < 5))
{return cljs.core.swap_BANG_.call(null,coverage.cljs.core.my_grids,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"testfield","testfield",4134886170),"sdfadfa"], null));
} else
{return null;
}
});
coverage.cljs.core.grids_view = (function grids_view(grids){var dom9104 = document.createElement("div");dom9104.className = "content full-width";
dom9104.appendChild((function (){var dom9105 = document.createElement("a");dom9105.className = "grid-button create-grid-button";
return dom9105;
})());
dom9104.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__3984__auto__ = (function iter__9106(s__9107){return (new cljs.core.LazySeq(null,(function (){var s__9107__$1 = s__9107;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9107__$1);if(temp__4092__auto__)
{var s__9107__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9107__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__9107__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__9109 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__9108 = 0;while(true){
if((i__9108 < size__3983__auto__))
{var current_grid = cljs.core._nth.call(null,c__3982__auto__,i__9108);cljs.core.chunk_append.call(null,b__9109,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#test.grid-button.coverage-grid-button","a#test.grid-button.coverage-grid-button",4344143125)], null));
{
var G__9110 = (i__9108 + 1);
i__9108 = G__9110;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9109),iter__9106.call(null,cljs.core.chunk_rest.call(null,s__9107__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9109),null);
}
} else
{var current_grid = cljs.core.first.call(null,s__9107__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#test.grid-button.coverage-grid-button","a#test.grid-button.coverage-grid-button",4344143125)], null),iter__9106.call(null,cljs.core.rest.call(null,s__9107__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__.call(null,grids);
})()));
return dom9104;
});
coverage.cljs.core.hello = (function hello(){return console.log("hello");
});
coverage.cljs.core.update_grids_view = (function update_grids_view(){dommy.core.replace_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("content"))[0]),coverage.cljs.core.grids_view.call(null,cljs.core.deref.call(null,coverage.cljs.core.my_grids)));
return console.log("grid view updated");
});
coverage.cljs.core.listen_create_grid = (function listen_create_grid(){return dommy.core.listen_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [document.body,".create-grid-button"], null),new cljs.core.Keyword(null,"click","click",1108654330),coverage.cljs.core.add_grid);
});
dommy.core.listen_BANG_.call(null,document.body,new cljs.core.Keyword(null,"load","load",1017231448),coverage.cljs.core.listen_create_grid);
cljs.core.add_watch.call(null,coverage.cljs.core.my_grids,new cljs.core.Keyword(null,"watch-change","watch-change",1899132384),(function (_,___$1,___$2,___$3){return coverage.cljs.core.update_grids_view.call(null);
}));
coverage.cljs.core.hello.call(null);
