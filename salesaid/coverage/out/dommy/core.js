// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var or__3293__auto__ = elem__$1.textContent;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return elem__$1.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__418017 = dommy.template.__GT_node_like.call(null,parent);G__418017.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__418017;
});
var append_BANG___3 = (function() { 
var G__418022__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__418018_418023 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__418019_418024 = null;var count__418020_418025 = 0;var i__418021_418026 = 0;while(true){
if((i__418021_418026 < count__418020_418025))
{var c_418027 = cljs.core._nth.call(null,chunk__418019_418024,i__418021_418026);append_BANG_.call(null,parent__$1,c_418027);
{
var G__418028 = seq__418018_418023;
var G__418029 = chunk__418019_418024;
var G__418030 = count__418020_418025;
var G__418031 = (i__418021_418026 + 1);
seq__418018_418023 = G__418028;
chunk__418019_418024 = G__418029;
count__418020_418025 = G__418030;
i__418021_418026 = G__418031;
continue;
}
} else
{var temp__4092__auto___418032 = cljs.core.seq.call(null,seq__418018_418023);if(temp__4092__auto___418032)
{var seq__418018_418033__$1 = temp__4092__auto___418032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418018_418033__$1))
{var c__4017__auto___418034 = cljs.core.chunk_first.call(null,seq__418018_418033__$1);{
var G__418035 = cljs.core.chunk_rest.call(null,seq__418018_418033__$1);
var G__418036 = c__4017__auto___418034;
var G__418037 = cljs.core.count.call(null,c__4017__auto___418034);
var G__418038 = 0;
seq__418018_418023 = G__418035;
chunk__418019_418024 = G__418036;
count__418020_418025 = G__418037;
i__418021_418026 = G__418038;
continue;
}
} else
{var c_418039 = cljs.core.first.call(null,seq__418018_418033__$1);append_BANG_.call(null,parent__$1,c_418039);
{
var G__418040 = cljs.core.next.call(null,seq__418018_418033__$1);
var G__418041 = null;
var G__418042 = 0;
var G__418043 = 0;
seq__418018_418023 = G__418040;
chunk__418019_418024 = G__418041;
count__418020_418025 = G__418042;
i__418021_418026 = G__418043;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__418022 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__418022__delegate.call(this,parent,child,more_children);};
G__418022.cljs$lang$maxFixedArity = 2;
G__418022.cljs$lang$applyTo = (function (arglist__418044){
var parent = cljs.core.first(arglist__418044);
arglist__418044 = cljs.core.next(arglist__418044);
var child = cljs.core.first(arglist__418044);
var more_children = cljs.core.rest(arglist__418044);
return G__418022__delegate(parent,child,more_children);
});
G__418022.cljs$core$IFn$_invoke$arity$variadic = G__418022__delegate;
return G__418022;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var G__418050 = dommy.template.__GT_node_like.call(null,parent);G__418050.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__418050;
});
var prepend_BANG___3 = (function() { 
var G__418055__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__418051_418056 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__418052_418057 = null;var count__418053_418058 = 0;var i__418054_418059 = 0;while(true){
if((i__418054_418059 < count__418053_418058))
{var c_418060 = cljs.core._nth.call(null,chunk__418052_418057,i__418054_418059);prepend_BANG_.call(null,parent__$1,c_418060);
{
var G__418061 = seq__418051_418056;
var G__418062 = chunk__418052_418057;
var G__418063 = count__418053_418058;
var G__418064 = (i__418054_418059 + 1);
seq__418051_418056 = G__418061;
chunk__418052_418057 = G__418062;
count__418053_418058 = G__418063;
i__418054_418059 = G__418064;
continue;
}
} else
{var temp__4092__auto___418065 = cljs.core.seq.call(null,seq__418051_418056);if(temp__4092__auto___418065)
{var seq__418051_418066__$1 = temp__4092__auto___418065;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418051_418066__$1))
{var c__4017__auto___418067 = cljs.core.chunk_first.call(null,seq__418051_418066__$1);{
var G__418068 = cljs.core.chunk_rest.call(null,seq__418051_418066__$1);
var G__418069 = c__4017__auto___418067;
var G__418070 = cljs.core.count.call(null,c__4017__auto___418067);
var G__418071 = 0;
seq__418051_418056 = G__418068;
chunk__418052_418057 = G__418069;
count__418053_418058 = G__418070;
i__418054_418059 = G__418071;
continue;
}
} else
{var c_418072 = cljs.core.first.call(null,seq__418051_418066__$1);prepend_BANG_.call(null,parent__$1,c_418072);
{
var G__418073 = cljs.core.next.call(null,seq__418051_418066__$1);
var G__418074 = null;
var G__418075 = 0;
var G__418076 = 0;
seq__418051_418056 = G__418073;
chunk__418052_418057 = G__418074;
count__418053_418058 = G__418075;
i__418054_418059 = G__418076;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__418055 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__418055__delegate.call(this,parent,child,more_children);};
G__418055.cljs$lang$maxFixedArity = 2;
G__418055.cljs$lang$applyTo = (function (arglist__418077){
var parent = cljs.core.first(arglist__418077);
arglist__418077 = cljs.core.next(arglist__418077);
var child = cljs.core.first(arglist__418077);
var more_children = cljs.core.rest(arglist__418077);
return G__418055__delegate(parent,child,more_children);
});
G__418055.cljs$core$IFn$_invoke$arity$variadic = G__418055__delegate;
return G__418055;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___418078 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___418078))
{var next_418079 = temp__4090__auto___418078;parent.insertBefore(actual_node,next_418079);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__418081 = dommy.template.__GT_node_like.call(null,parent);G__418081.innerHTML = "";
dommy.core.append_BANG_.call(null,G__418081,node_like);
return G__418081;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__418083 = elem__$1.parentNode;G__418083.removeChild(elem__$1);
return G__418083;
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__418084_SHARP_){return p1__418084_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__418085_SHARP_){return !((p1__418085_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__418086){var vec__418087 = p__418086;var special_mouse_event = cljs.core.nth.call(null,vec__418087,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__418087,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3281__auto__ = related_target;if(cljs.core.truth_(and__3281__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3281__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var temp__4092__auto__ = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_(temp__4092__auto__))
{var selected_target = temp__4092__auto__;event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3293__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__418088){
var elem = cljs.core.first(arglist__418088);
arglist__418088 = cljs.core.next(arglist__418088);
var f = cljs.core.first(arglist__418088);
var args = cljs.core.rest(arglist__418088);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__418089_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__418089_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__418113_418136 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_418137 = cljs.core.nth.call(null,vec__418113_418136,0,null);var selector_418138 = cljs.core.nth.call(null,vec__418113_418136,1,null);var seq__418114_418139 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__418121_418140 = null;var count__418122_418141 = 0;var i__418123_418142 = 0;while(true){
if((i__418123_418142 < count__418122_418141))
{var vec__418130_418143 = cljs.core._nth.call(null,chunk__418121_418140,i__418123_418142);var orig_type_418144 = cljs.core.nth.call(null,vec__418130_418143,0,null);var f_418145 = cljs.core.nth.call(null,vec__418130_418143,1,null);var seq__418124_418146 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_418144,new cljs.core.PersistentArrayMap.fromArray([orig_type_418144,cljs.core.identity], true, false)));var chunk__418126_418147 = null;var count__418127_418148 = 0;var i__418128_418149 = 0;while(true){
if((i__418128_418149 < count__418127_418148))
{var vec__418131_418150 = cljs.core._nth.call(null,chunk__418126_418147,i__418128_418149);var actual_type_418151 = cljs.core.nth.call(null,vec__418131_418150,0,null);var factory_418152 = cljs.core.nth.call(null,vec__418131_418150,1,null);var canonical_f_418153 = (cljs.core.truth_(selector_418138)?cljs.core.partial.call(null,dommy.core.live_listener,elem_418137,selector_418138):cljs.core.identity).call(null,factory_418152.call(null,f_418145));dommy.core.update_event_listeners_BANG_.call(null,elem_418137,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_418138,actual_type_418151,f_418145], null),canonical_f_418153);
if(cljs.core.truth_(elem_418137.addEventListener))
{elem_418137.addEventListener(cljs.core.name.call(null,actual_type_418151),canonical_f_418153);
} else
{elem_418137.attachEvent(cljs.core.name.call(null,actual_type_418151),canonical_f_418153);
}
{
var G__418154 = seq__418124_418146;
var G__418155 = chunk__418126_418147;
var G__418156 = count__418127_418148;
var G__418157 = (i__418128_418149 + 1);
seq__418124_418146 = G__418154;
chunk__418126_418147 = G__418155;
count__418127_418148 = G__418156;
i__418128_418149 = G__418157;
continue;
}
} else
{var temp__4092__auto___418158 = cljs.core.seq.call(null,seq__418124_418146);if(temp__4092__auto___418158)
{var seq__418124_418159__$1 = temp__4092__auto___418158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418124_418159__$1))
{var c__4017__auto___418160 = cljs.core.chunk_first.call(null,seq__418124_418159__$1);{
var G__418161 = cljs.core.chunk_rest.call(null,seq__418124_418159__$1);
var G__418162 = c__4017__auto___418160;
var G__418163 = cljs.core.count.call(null,c__4017__auto___418160);
var G__418164 = 0;
seq__418124_418146 = G__418161;
chunk__418126_418147 = G__418162;
count__418127_418148 = G__418163;
i__418128_418149 = G__418164;
continue;
}
} else
{var vec__418132_418165 = cljs.core.first.call(null,seq__418124_418159__$1);var actual_type_418166 = cljs.core.nth.call(null,vec__418132_418165,0,null);var factory_418167 = cljs.core.nth.call(null,vec__418132_418165,1,null);var canonical_f_418168 = (cljs.core.truth_(selector_418138)?cljs.core.partial.call(null,dommy.core.live_listener,elem_418137,selector_418138):cljs.core.identity).call(null,factory_418167.call(null,f_418145));dommy.core.update_event_listeners_BANG_.call(null,elem_418137,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_418138,actual_type_418166,f_418145], null),canonical_f_418168);
if(cljs.core.truth_(elem_418137.addEventListener))
{elem_418137.addEventListener(cljs.core.name.call(null,actual_type_418166),canonical_f_418168);
} else
{elem_418137.attachEvent(cljs.core.name.call(null,actual_type_418166),canonical_f_418168);
}
{
var G__418169 = cljs.core.next.call(null,seq__418124_418159__$1);
var G__418170 = null;
var G__418171 = 0;
var G__418172 = 0;
seq__418124_418146 = G__418169;
chunk__418126_418147 = G__418170;
count__418127_418148 = G__418171;
i__418128_418149 = G__418172;
continue;
}
}
} else
{}
}
break;
}
{
var G__418173 = seq__418114_418139;
var G__418174 = chunk__418121_418140;
var G__418175 = count__418122_418141;
var G__418176 = (i__418123_418142 + 1);
seq__418114_418139 = G__418173;
chunk__418121_418140 = G__418174;
count__418122_418141 = G__418175;
i__418123_418142 = G__418176;
continue;
}
} else
{var temp__4092__auto___418177 = cljs.core.seq.call(null,seq__418114_418139);if(temp__4092__auto___418177)
{var seq__418114_418178__$1 = temp__4092__auto___418177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418114_418178__$1))
{var c__4017__auto___418179 = cljs.core.chunk_first.call(null,seq__418114_418178__$1);{
var G__418180 = cljs.core.chunk_rest.call(null,seq__418114_418178__$1);
var G__418181 = c__4017__auto___418179;
var G__418182 = cljs.core.count.call(null,c__4017__auto___418179);
var G__418183 = 0;
seq__418114_418139 = G__418180;
chunk__418121_418140 = G__418181;
count__418122_418141 = G__418182;
i__418123_418142 = G__418183;
continue;
}
} else
{var vec__418133_418184 = cljs.core.first.call(null,seq__418114_418178__$1);var orig_type_418185 = cljs.core.nth.call(null,vec__418133_418184,0,null);var f_418186 = cljs.core.nth.call(null,vec__418133_418184,1,null);var seq__418115_418187 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_418185,new cljs.core.PersistentArrayMap.fromArray([orig_type_418185,cljs.core.identity], true, false)));var chunk__418117_418188 = null;var count__418118_418189 = 0;var i__418119_418190 = 0;while(true){
if((i__418119_418190 < count__418118_418189))
{var vec__418134_418191 = cljs.core._nth.call(null,chunk__418117_418188,i__418119_418190);var actual_type_418192 = cljs.core.nth.call(null,vec__418134_418191,0,null);var factory_418193 = cljs.core.nth.call(null,vec__418134_418191,1,null);var canonical_f_418194 = (cljs.core.truth_(selector_418138)?cljs.core.partial.call(null,dommy.core.live_listener,elem_418137,selector_418138):cljs.core.identity).call(null,factory_418193.call(null,f_418186));dommy.core.update_event_listeners_BANG_.call(null,elem_418137,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_418138,actual_type_418192,f_418186], null),canonical_f_418194);
if(cljs.core.truth_(elem_418137.addEventListener))
{elem_418137.addEventListener(cljs.core.name.call(null,actual_type_418192),canonical_f_418194);
} else
{elem_418137.attachEvent(cljs.core.name.call(null,actual_type_418192),canonical_f_418194);
}
{
var G__418195 = seq__418115_418187;
var G__418196 = chunk__418117_418188;
var G__418197 = count__418118_418189;
var G__418198 = (i__418119_418190 + 1);
seq__418115_418187 = G__418195;
chunk__418117_418188 = G__418196;
count__418118_418189 = G__418197;
i__418119_418190 = G__418198;
continue;
}
} else
{var temp__4092__auto___418199__$1 = cljs.core.seq.call(null,seq__418115_418187);if(temp__4092__auto___418199__$1)
{var seq__418115_418200__$1 = temp__4092__auto___418199__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418115_418200__$1))
{var c__4017__auto___418201 = cljs.core.chunk_first.call(null,seq__418115_418200__$1);{
var G__418202 = cljs.core.chunk_rest.call(null,seq__418115_418200__$1);
var G__418203 = c__4017__auto___418201;
var G__418204 = cljs.core.count.call(null,c__4017__auto___418201);
var G__418205 = 0;
seq__418115_418187 = G__418202;
chunk__418117_418188 = G__418203;
count__418118_418189 = G__418204;
i__418119_418190 = G__418205;
continue;
}
} else
{var vec__418135_418206 = cljs.core.first.call(null,seq__418115_418200__$1);var actual_type_418207 = cljs.core.nth.call(null,vec__418135_418206,0,null);var factory_418208 = cljs.core.nth.call(null,vec__418135_418206,1,null);var canonical_f_418209 = (cljs.core.truth_(selector_418138)?cljs.core.partial.call(null,dommy.core.live_listener,elem_418137,selector_418138):cljs.core.identity).call(null,factory_418208.call(null,f_418186));dommy.core.update_event_listeners_BANG_.call(null,elem_418137,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_418138,actual_type_418207,f_418186], null),canonical_f_418209);
if(cljs.core.truth_(elem_418137.addEventListener))
{elem_418137.addEventListener(cljs.core.name.call(null,actual_type_418207),canonical_f_418209);
} else
{elem_418137.attachEvent(cljs.core.name.call(null,actual_type_418207),canonical_f_418209);
}
{
var G__418210 = cljs.core.next.call(null,seq__418115_418200__$1);
var G__418211 = null;
var G__418212 = 0;
var G__418213 = 0;
seq__418115_418187 = G__418210;
chunk__418117_418188 = G__418211;
count__418118_418189 = G__418212;
i__418119_418190 = G__418213;
continue;
}
}
} else
{}
}
break;
}
{
var G__418214 = cljs.core.next.call(null,seq__418114_418178__$1);
var G__418215 = null;
var G__418216 = 0;
var G__418217 = 0;
seq__418114_418139 = G__418214;
chunk__418121_418140 = G__418215;
count__418122_418141 = G__418216;
i__418123_418142 = G__418217;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__418218){
var elem_sel = cljs.core.first(arglist__418218);
var type_fs = cljs.core.rest(arglist__418218);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__418242_418265 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_418266 = cljs.core.nth.call(null,vec__418242_418265,0,null);var selector_418267 = cljs.core.nth.call(null,vec__418242_418265,1,null);var seq__418243_418268 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__418250_418269 = null;var count__418251_418270 = 0;var i__418252_418271 = 0;while(true){
if((i__418252_418271 < count__418251_418270))
{var vec__418259_418272 = cljs.core._nth.call(null,chunk__418250_418269,i__418252_418271);var orig_type_418273 = cljs.core.nth.call(null,vec__418259_418272,0,null);var f_418274 = cljs.core.nth.call(null,vec__418259_418272,1,null);var seq__418253_418275 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_418273,new cljs.core.PersistentArrayMap.fromArray([orig_type_418273,cljs.core.identity], true, false)));var chunk__418255_418276 = null;var count__418256_418277 = 0;var i__418257_418278 = 0;while(true){
if((i__418257_418278 < count__418256_418277))
{var vec__418260_418279 = cljs.core._nth.call(null,chunk__418255_418276,i__418257_418278);var actual_type_418280 = cljs.core.nth.call(null,vec__418260_418279,0,null);var __418281 = cljs.core.nth.call(null,vec__418260_418279,1,null);var keys_418282 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_418267,actual_type_418280,f_418274], null);var canonical_f_418283 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_418266),keys_418282);dommy.core.update_event_listeners_BANG_.call(null,elem_418266,dommy.utils.dissoc_in,keys_418282);
if(cljs.core.truth_(elem_418266.removeEventListener))
{elem_418266.removeEventListener(cljs.core.name.call(null,actual_type_418280),canonical_f_418283);
} else
{elem_418266.detachEvent(cljs.core.name.call(null,actual_type_418280),canonical_f_418283);
}
{
var G__418284 = seq__418253_418275;
var G__418285 = chunk__418255_418276;
var G__418286 = count__418256_418277;
var G__418287 = (i__418257_418278 + 1);
seq__418253_418275 = G__418284;
chunk__418255_418276 = G__418285;
count__418256_418277 = G__418286;
i__418257_418278 = G__418287;
continue;
}
} else
{var temp__4092__auto___418288 = cljs.core.seq.call(null,seq__418253_418275);if(temp__4092__auto___418288)
{var seq__418253_418289__$1 = temp__4092__auto___418288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418253_418289__$1))
{var c__4017__auto___418290 = cljs.core.chunk_first.call(null,seq__418253_418289__$1);{
var G__418291 = cljs.core.chunk_rest.call(null,seq__418253_418289__$1);
var G__418292 = c__4017__auto___418290;
var G__418293 = cljs.core.count.call(null,c__4017__auto___418290);
var G__418294 = 0;
seq__418253_418275 = G__418291;
chunk__418255_418276 = G__418292;
count__418256_418277 = G__418293;
i__418257_418278 = G__418294;
continue;
}
} else
{var vec__418261_418295 = cljs.core.first.call(null,seq__418253_418289__$1);var actual_type_418296 = cljs.core.nth.call(null,vec__418261_418295,0,null);var __418297 = cljs.core.nth.call(null,vec__418261_418295,1,null);var keys_418298 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_418267,actual_type_418296,f_418274], null);var canonical_f_418299 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_418266),keys_418298);dommy.core.update_event_listeners_BANG_.call(null,elem_418266,dommy.utils.dissoc_in,keys_418298);
if(cljs.core.truth_(elem_418266.removeEventListener))
{elem_418266.removeEventListener(cljs.core.name.call(null,actual_type_418296),canonical_f_418299);
} else
{elem_418266.detachEvent(cljs.core.name.call(null,actual_type_418296),canonical_f_418299);
}
{
var G__418300 = cljs.core.next.call(null,seq__418253_418289__$1);
var G__418301 = null;
var G__418302 = 0;
var G__418303 = 0;
seq__418253_418275 = G__418300;
chunk__418255_418276 = G__418301;
count__418256_418277 = G__418302;
i__418257_418278 = G__418303;
continue;
}
}
} else
{}
}
break;
}
{
var G__418304 = seq__418243_418268;
var G__418305 = chunk__418250_418269;
var G__418306 = count__418251_418270;
var G__418307 = (i__418252_418271 + 1);
seq__418243_418268 = G__418304;
chunk__418250_418269 = G__418305;
count__418251_418270 = G__418306;
i__418252_418271 = G__418307;
continue;
}
} else
{var temp__4092__auto___418308 = cljs.core.seq.call(null,seq__418243_418268);if(temp__4092__auto___418308)
{var seq__418243_418309__$1 = temp__4092__auto___418308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418243_418309__$1))
{var c__4017__auto___418310 = cljs.core.chunk_first.call(null,seq__418243_418309__$1);{
var G__418311 = cljs.core.chunk_rest.call(null,seq__418243_418309__$1);
var G__418312 = c__4017__auto___418310;
var G__418313 = cljs.core.count.call(null,c__4017__auto___418310);
var G__418314 = 0;
seq__418243_418268 = G__418311;
chunk__418250_418269 = G__418312;
count__418251_418270 = G__418313;
i__418252_418271 = G__418314;
continue;
}
} else
{var vec__418262_418315 = cljs.core.first.call(null,seq__418243_418309__$1);var orig_type_418316 = cljs.core.nth.call(null,vec__418262_418315,0,null);var f_418317 = cljs.core.nth.call(null,vec__418262_418315,1,null);var seq__418244_418318 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_418316,new cljs.core.PersistentArrayMap.fromArray([orig_type_418316,cljs.core.identity], true, false)));var chunk__418246_418319 = null;var count__418247_418320 = 0;var i__418248_418321 = 0;while(true){
if((i__418248_418321 < count__418247_418320))
{var vec__418263_418322 = cljs.core._nth.call(null,chunk__418246_418319,i__418248_418321);var actual_type_418323 = cljs.core.nth.call(null,vec__418263_418322,0,null);var __418324 = cljs.core.nth.call(null,vec__418263_418322,1,null);var keys_418325 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_418267,actual_type_418323,f_418317], null);var canonical_f_418326 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_418266),keys_418325);dommy.core.update_event_listeners_BANG_.call(null,elem_418266,dommy.utils.dissoc_in,keys_418325);
if(cljs.core.truth_(elem_418266.removeEventListener))
{elem_418266.removeEventListener(cljs.core.name.call(null,actual_type_418323),canonical_f_418326);
} else
{elem_418266.detachEvent(cljs.core.name.call(null,actual_type_418323),canonical_f_418326);
}
{
var G__418327 = seq__418244_418318;
var G__418328 = chunk__418246_418319;
var G__418329 = count__418247_418320;
var G__418330 = (i__418248_418321 + 1);
seq__418244_418318 = G__418327;
chunk__418246_418319 = G__418328;
count__418247_418320 = G__418329;
i__418248_418321 = G__418330;
continue;
}
} else
{var temp__4092__auto___418331__$1 = cljs.core.seq.call(null,seq__418244_418318);if(temp__4092__auto___418331__$1)
{var seq__418244_418332__$1 = temp__4092__auto___418331__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418244_418332__$1))
{var c__4017__auto___418333 = cljs.core.chunk_first.call(null,seq__418244_418332__$1);{
var G__418334 = cljs.core.chunk_rest.call(null,seq__418244_418332__$1);
var G__418335 = c__4017__auto___418333;
var G__418336 = cljs.core.count.call(null,c__4017__auto___418333);
var G__418337 = 0;
seq__418244_418318 = G__418334;
chunk__418246_418319 = G__418335;
count__418247_418320 = G__418336;
i__418248_418321 = G__418337;
continue;
}
} else
{var vec__418264_418338 = cljs.core.first.call(null,seq__418244_418332__$1);var actual_type_418339 = cljs.core.nth.call(null,vec__418264_418338,0,null);var __418340 = cljs.core.nth.call(null,vec__418264_418338,1,null);var keys_418341 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_418267,actual_type_418339,f_418317], null);var canonical_f_418342 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_418266),keys_418341);dommy.core.update_event_listeners_BANG_.call(null,elem_418266,dommy.utils.dissoc_in,keys_418341);
if(cljs.core.truth_(elem_418266.removeEventListener))
{elem_418266.removeEventListener(cljs.core.name.call(null,actual_type_418339),canonical_f_418342);
} else
{elem_418266.detachEvent(cljs.core.name.call(null,actual_type_418339),canonical_f_418342);
}
{
var G__418343 = cljs.core.next.call(null,seq__418244_418332__$1);
var G__418344 = null;
var G__418345 = 0;
var G__418346 = 0;
seq__418244_418318 = G__418343;
chunk__418246_418319 = G__418344;
count__418247_418320 = G__418345;
i__418248_418321 = G__418346;
continue;
}
}
} else
{}
}
break;
}
{
var G__418347 = cljs.core.next.call(null,seq__418243_418309__$1);
var G__418348 = null;
var G__418349 = 0;
var G__418350 = 0;
seq__418243_418268 = G__418347;
chunk__418250_418269 = G__418348;
count__418251_418270 = G__418349;
i__418252_418271 = G__418350;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__418351){
var elem_sel = cljs.core.first(arglist__418351);
var type_fs = cljs.core.rest(arglist__418351);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__418359_418366 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_418367 = cljs.core.nth.call(null,vec__418359_418366,0,null);var selector_418368 = cljs.core.nth.call(null,vec__418359_418366,1,null);var seq__418360_418369 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__418361_418370 = null;var count__418362_418371 = 0;var i__418363_418372 = 0;while(true){
if((i__418363_418372 < count__418362_418371))
{var vec__418364_418373 = cljs.core._nth.call(null,chunk__418361_418370,i__418363_418372);var type_418374 = cljs.core.nth.call(null,vec__418364_418373,0,null);var f_418375 = cljs.core.nth.call(null,vec__418364_418373,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_418374,((function (seq__418360_418369,chunk__418361_418370,count__418362_418371,i__418363_418372,vec__418364_418373,type_418374,f_418375){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_418374,this_fn);
return f_418375.call(null,e);
});})(seq__418360_418369,chunk__418361_418370,count__418362_418371,i__418363_418372,vec__418364_418373,type_418374,f_418375))
);
{
var G__418376 = seq__418360_418369;
var G__418377 = chunk__418361_418370;
var G__418378 = count__418362_418371;
var G__418379 = (i__418363_418372 + 1);
seq__418360_418369 = G__418376;
chunk__418361_418370 = G__418377;
count__418362_418371 = G__418378;
i__418363_418372 = G__418379;
continue;
}
} else
{var temp__4092__auto___418380 = cljs.core.seq.call(null,seq__418360_418369);if(temp__4092__auto___418380)
{var seq__418360_418381__$1 = temp__4092__auto___418380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418360_418381__$1))
{var c__4017__auto___418382 = cljs.core.chunk_first.call(null,seq__418360_418381__$1);{
var G__418383 = cljs.core.chunk_rest.call(null,seq__418360_418381__$1);
var G__418384 = c__4017__auto___418382;
var G__418385 = cljs.core.count.call(null,c__4017__auto___418382);
var G__418386 = 0;
seq__418360_418369 = G__418383;
chunk__418361_418370 = G__418384;
count__418362_418371 = G__418385;
i__418363_418372 = G__418386;
continue;
}
} else
{var vec__418365_418387 = cljs.core.first.call(null,seq__418360_418381__$1);var type_418388 = cljs.core.nth.call(null,vec__418365_418387,0,null);var f_418389 = cljs.core.nth.call(null,vec__418365_418387,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_418388,((function (seq__418360_418369,chunk__418361_418370,count__418362_418371,i__418363_418372,vec__418365_418387,type_418388,f_418389,seq__418360_418381__$1,temp__4092__auto___418380){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_418388,this_fn);
return f_418389.call(null,e);
});})(seq__418360_418369,chunk__418361_418370,count__418362_418371,i__418363_418372,vec__418365_418387,type_418388,f_418389,seq__418360_418381__$1,temp__4092__auto___418380))
);
{
var G__418390 = cljs.core.next.call(null,seq__418360_418381__$1);
var G__418391 = null;
var G__418392 = 0;
var G__418393 = 0;
seq__418360_418369 = G__418390;
chunk__418361_418370 = G__418391;
count__418362_418371 = G__418392;
i__418363_418372 = G__418393;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__418394){
var elem_sel = cljs.core.first(arglist__418394);
var type_fs = cljs.core.rest(arglist__418394);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__418395){var vec__418397 = p__418395;var update_event_BANG_ = cljs.core.nth.call(null,vec__418397,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3293__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__418395 = null;if (arguments.length > 2) {
  p__418395 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__418395);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__418398){
var node = cljs.core.first(arglist__418398);
arglist__418398 = cljs.core.next(arglist__418398);
var event_type = cljs.core.first(arglist__418398);
var p__418395 = cljs.core.rest(arglist__418398);
return fire_BANG___delegate(node,event_type,p__418395);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
