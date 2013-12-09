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
coverage.cljs.core.grids_view = (function grids_view(grids){var dom12330 = document.createElement("div");dom12330.className = "content full-width";
dom12330.appendChild((function (){var dom12331 = document.createElement("a");dom12331.className = "grid-button create-grid-button";
return dom12331;
})());
dom12330.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__3984__auto__ = (function iter__12332(s__12333){return (new cljs.core.LazySeq(null,(function (){var s__12333__$1 = s__12333;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12333__$1);if(temp__4092__auto__)
{var s__12333__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12333__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__12333__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__12335 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__12334 = 0;while(true){
if((i__12334 < size__3983__auto__))
{var current_grid = cljs.core._nth.call(null,c__3982__auto__,i__12334);cljs.core.chunk_append.call(null,b__12335,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#test.grid-button.coverage-grid-button","a#test.grid-button.coverage-grid-button",4344143125)], null));
{
var G__12336 = (i__12334 + 1);
i__12334 = G__12336;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12335),iter__12332.call(null,cljs.core.chunk_rest.call(null,s__12333__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12335),null);
}
} else
{var current_grid = cljs.core.first.call(null,s__12333__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#test.grid-button.coverage-grid-button","a#test.grid-button.coverage-grid-button",4344143125)], null),iter__12332.call(null,cljs.core.rest.call(null,s__12333__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__.call(null,grids);
})()));
return dom12330;
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
coverage.cljs.core.toggle_truth = (function toggle_truth(input){return cljs.core.not.call(null,input);
});
coverage.cljs.core.handle_menu_click = (function handle_menu_click(){console.log("fn handle-menu-click");
return cljs.core.swap_BANG_.call(null,coverage.cljs.core.menu_state,coverage.cljs.core.toggle_truth,coverage.cljs.core.menu_state);
});
coverage.cljs.core.update_menu_view = (function update_menu_view(){if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,coverage.cljs.core.menu_state),coverage.cljs.core.on))
{return dommy.core.show_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("dropdown"))[0]));
} else
{return dommy.core.hide_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("dropdown"))[0]));
}
});
cljs.core.add_watch.call(null,coverage.cljs.core.menu_state,new cljs.core.Keyword(null,"watch-change","watch-change",1899132384),(function (_,___$1,___$2,___$3){return coverage.cljs.core.update_menu_view.call(null);
}));
coverage.cljs.core.listen_menu_click = (function listen_menu_click(){return dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("menu"))[0]),new cljs.core.Keyword(null,"click","click",1108654330),coverage.cljs.core.handle_menu_click);
});
coverage.cljs.core.attach_listeners = (function attach_listeners(){console.log("fn attach-listeners: attaching listeners");
coverage.cljs.core.listen_create_grid.call(null);
return coverage.cljs.core.listen_menu_click.call(null);
});
window.onload = coverage.cljs.core.attach_listeners;
coverage.cljs.core.hello.call(null);
