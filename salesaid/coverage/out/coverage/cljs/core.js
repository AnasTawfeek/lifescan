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
coverage.cljs.core.hello = (function hello(){return console.log("hello from the REPL");
});
coverage.cljs.core.my_grids = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
coverage.cljs.core.add_grid = (function add_grid(){console.log("fn add-grid");
if((cljs.core.count.call(null,cljs.core.deref.call(null,coverage.cljs.core.my_grids)) < 5))
{return cljs.core.swap_BANG_.call(null,coverage.cljs.core.my_grids,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"testfield","testfield",4134886170),"sdfadfa"], null));
} else
{return null;
}
});
coverage.cljs.core.grids_view = (function grids_view(grids){var dom64568 = document.createElement("div");dom64568.className = "content full-width";
dom64568.appendChild((function (){var dom64569 = document.createElement("a");dom64569.className = "grid-button create-grid-button";
return dom64569;
})());
dom64568.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__3986__auto__ = (function iter__64570(s__64571){return (new cljs.core.LazySeq(null,(function (){var s__64571__$1 = s__64571;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__64571__$1);if(temp__4092__auto__)
{var s__64571__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__64571__$2))
{var c__3984__auto__ = cljs.core.chunk_first.call(null,s__64571__$2);var size__3985__auto__ = cljs.core.count.call(null,c__3984__auto__);var b__64573 = cljs.core.chunk_buffer.call(null,size__3985__auto__);if((function (){var i__64572 = 0;while(true){
if((i__64572 < size__3985__auto__))
{var current_grid = cljs.core._nth.call(null,c__3984__auto__,i__64572);cljs.core.chunk_append.call(null,b__64573,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#test.grid-button.coverage-grid-button","a#test.grid-button.coverage-grid-button",4344143125)], null));
{
var G__64574 = (i__64572 + 1);
i__64572 = G__64574;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64573),iter__64570.call(null,cljs.core.chunk_rest.call(null,s__64571__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64573),null);
}
} else
{var current_grid = cljs.core.first.call(null,s__64571__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#test.grid-button.coverage-grid-button","a#test.grid-button.coverage-grid-button",4344143125)], null),iter__64570.call(null,cljs.core.rest.call(null,s__64571__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3986__auto__.call(null,grids);
})()));
return dom64568;
});
coverage.cljs.core.update_grids_view = (function update_grids_view(){dommy.core.replace_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("content"))[0]),coverage.cljs.core.grids_view.call(null,cljs.core.deref.call(null,coverage.cljs.core.my_grids)));
return console.log("fn update-grids-viewgrid");
});
coverage.cljs.core.listen_create_grid = (function listen_create_grid(){return dommy.core.listen_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [document.body,".create-grid-button"], null),new cljs.core.Keyword(null,"click","click",1108654330),coverage.cljs.core.add_grid);
});
cljs.core.add_watch.call(null,coverage.cljs.core.my_grids,new cljs.core.Keyword(null,"watch-change","watch-change",1899132384),(function (_,___$1,___$2,___$3){return coverage.cljs.core.update_grids_view.call(null);
}));
coverage.cljs.core.on = true;
coverage.cljs.core.off = false;
coverage.cljs.core.menu_state = cljs.core.atom.call(null,coverage.cljs.core.off);
coverage.cljs.core.toggle_truth_BANG_ = (function toggle_truth_BANG_(input){return cljs.core.not.call(null,input);
});
coverage.cljs.core.handle_menu_click = (function handle_menu_click(){cljs.core.swap_BANG_.call(null,coverage.cljs.core.menu_state,coverage.cljs.core.toggle_truth_BANG_,cljs.core.deref.call(null,coverage.cljs.core.menu_state));
return console.log("fn handle-menu-click");
});
coverage.cljs.core.update_menu_view = (function update_menu_view(){if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,coverage.cljs.core.menu_state),coverage.cljs.core.on))
{return dommy.attrs.set_style_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("dropdown"))[0]),new cljs.core.Keyword(null,"display","display",2685668404),"block");
} else
{return dommy.core.hide_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("dropdown"))[0]));
}
});
coverage.cljs.core.listen_menu_click = (function listen_menu_click(){return dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("menu"))[0]),new cljs.core.Keyword(null,"click","click",1108654330),coverage.cljs.core.handle_menu_click);
});
cljs.core.add_watch.call(null,coverage.cljs.core.menu_state,new cljs.core.Keyword(null,"watch-change","watch-change",1899132384),(function (_,___$1,___$2,___$3){return coverage.cljs.core.update_menu_view.call(null);
}));
coverage.cljs.core.attach_listeners = (function attach_listeners(){console.log("fn attach-listeners: attaching listeners");
coverage.cljs.core.listen_create_grid.call(null);
return coverage.cljs.core.listen_menu_click.call(null);
});
window.onload = coverage.cljs.core.attach_listeners;
coverage.cljs.core.hello.call(null);