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
coverage.cljs.core.delete_element = (function delete_element(vc,pos){return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,vc,0,pos),cljs.core.subvec.call(null,vc,(pos + 1))));
});
coverage.cljs.core.my_grids = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
coverage.cljs.core.add_grid = (function add_grid(){console.log("fn add-grid");
if((cljs.core.count.call(null,cljs.core.deref.call(null,coverage.cljs.core.my_grids)) < 5))
{return cljs.core.swap_BANG_.call(null,coverage.cljs.core.my_grids,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"testfield","testfield",4134886170),"sdfadfa",new cljs.core.Keyword(null,"id","id",1013907597),"10112121212"], null));
} else
{return null;
}
});
coverage.cljs.core.select_grid_BANG_ = (function select_grid_BANG_(index){console.log("fn select-grid! called");
return cljs.core.swap_BANG_.call(null,coverage.cljs.core.my_grids,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),true], null));
});
coverage.cljs.core.delete_grid_BANG_ = (function delete_grid_BANG_(id){console.log("grid deleted");
return cljs.core.swap_BANG_.call(null,coverage.cljs.core.my_grids,coverage.cljs.core.delete_element,0);
});
coverage.cljs.core.clear_grids = (function clear_grids(grid_set){return cljs.core.map.call(null,(function (item){return cljs.core.dissoc.call(null,item,new cljs.core.Keyword(null,"selected","selected",2205476365));
}),grid_set);
});
coverage.cljs.core.grids_view = (function grids_view(grids){var dom425396 = document.createElement("div");dom425396.className = "content full-width";
dom425396.appendChild((function (){var dom425397 = document.createElement("a");dom425397.className = "grid-button create-grid-button";
return dom425397;
})());
dom425396.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__3986__auto__ = (function iter__425398(s__425399){return (new cljs.core.LazySeq(null,(function (){var s__425399__$1 = s__425399;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__425399__$1);if(temp__4092__auto__)
{var s__425399__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__425399__$2))
{var c__3984__auto__ = cljs.core.chunk_first.call(null,s__425399__$2);var size__3985__auto__ = cljs.core.count.call(null,c__3984__auto__);var b__425401 = cljs.core.chunk_buffer.call(null,size__3985__auto__);if((function (){var i__425400 = 0;while(true){
if((i__425400 < size__3985__auto__))
{var current_grid = cljs.core._nth.call(null,c__3984__auto__,i__425400);cljs.core.chunk_append.call(null,b__425401,coverage.cljs.core.grid_view.call(null,current_grid));
{
var G__425402 = (i__425400 + 1);
i__425400 = G__425402;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__425401),iter__425398.call(null,cljs.core.chunk_rest.call(null,s__425399__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__425401),null);
}
} else
{var current_grid = cljs.core.first.call(null,s__425399__$2);return cljs.core.cons.call(null,coverage.cljs.core.grid_view.call(null,current_grid),iter__425398.call(null,cljs.core.rest.call(null,s__425399__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3986__auto__.call(null,grids);
})()));
return dom425396;
});
coverage.cljs.core.grid_view = (function grid_view(grid){var dom425404 = document.createElement("a");if("grid-button coverage-grid-button")
{dom425404.className = [cljs.core.str(dom425404.className),cljs.core.str(" "),cljs.core.str("grid-button coverage-grid-button")].join('').trim();
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(grid)))
{dom425404.setAttribute("_id",new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(grid));
} else
{}
return dom425404;
});
coverage.cljs.core.update_grids_view = (function update_grids_view(){dommy.core.replace_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("content"))[0]),coverage.cljs.core.grids_view.call(null,cljs.core.deref.call(null,coverage.cljs.core.my_grids)));
return console.log("fn update-grids-viewgrid");
});
coverage.cljs.core.listen_create_grid = (function listen_create_grid(){return dommy.core.listen_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [document.body,".create-grid-button"], null),new cljs.core.Keyword(null,"click","click",1108654330),coverage.cljs.core.add_grid);
});
coverage.cljs.core.listen_grid_click = (function listen_grid_click(){return dommy.core.listen_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [document.body,".coverage-grid-button"], null),new cljs.core.Keyword(null,"click","click",1108654330),coverage.cljs.core.select_grid_BANG_);
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
coverage.cljs.core.listen_grid_click.call(null);
return coverage.cljs.core.listen_menu_click.call(null);
});
window.onload = coverage.cljs.core.attach_listeners;
coverage.cljs.core.hello.call(null);
