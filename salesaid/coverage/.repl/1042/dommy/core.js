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
dommy.core.text = (function text(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var or__4773__auto__ = elem__$1.textContent;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
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
var append_BANG___2 = (function (parent,child){var G__11274 = dommy.template.__GT_node_like.call(null,parent);G__11274.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__11274;
});
var append_BANG___3 = (function() { 
var G__11279__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11275_11280 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11276_11281 = null;var count__11277_11282 = 0;var i__11278_11283 = 0;while(true){
if((i__11278_11283 < count__11277_11282))
{var c_11284 = cljs.core._nth.call(null,chunk__11276_11281,i__11278_11283);append_BANG_.call(null,parent__$1,c_11284);
{
var G__11285 = seq__11275_11280;
var G__11286 = chunk__11276_11281;
var G__11287 = count__11277_11282;
var G__11288 = (i__11278_11283 + 1);
seq__11275_11280 = G__11285;
chunk__11276_11281 = G__11286;
count__11277_11282 = G__11287;
i__11278_11283 = G__11288;
continue;
}
} else
{var temp__4092__auto___11289 = cljs.core.seq.call(null,seq__11275_11280);if(temp__4092__auto___11289)
{var seq__11275_11290__$1 = temp__4092__auto___11289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11275_11290__$1))
{var c__5497__auto___11291 = cljs.core.chunk_first.call(null,seq__11275_11290__$1);{
var G__11292 = cljs.core.chunk_rest.call(null,seq__11275_11290__$1);
var G__11293 = c__5497__auto___11291;
var G__11294 = cljs.core.count.call(null,c__5497__auto___11291);
var G__11295 = 0;
seq__11275_11280 = G__11292;
chunk__11276_11281 = G__11293;
count__11277_11282 = G__11294;
i__11278_11283 = G__11295;
continue;
}
} else
{var c_11296 = cljs.core.first.call(null,seq__11275_11290__$1);append_BANG_.call(null,parent__$1,c_11296);
{
var G__11297 = cljs.core.next.call(null,seq__11275_11290__$1);
var G__11298 = null;
var G__11299 = 0;
var G__11300 = 0;
seq__11275_11280 = G__11297;
chunk__11276_11281 = G__11298;
count__11277_11282 = G__11299;
i__11278_11283 = G__11300;
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
var G__11279 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11279__delegate.call(this,parent,child,more_children);};
G__11279.cljs$lang$maxFixedArity = 2;
G__11279.cljs$lang$applyTo = (function (arglist__11301){
var parent = cljs.core.first(arglist__11301);
arglist__11301 = cljs.core.next(arglist__11301);
var child = cljs.core.first(arglist__11301);
var more_children = cljs.core.rest(arglist__11301);
return G__11279__delegate(parent,child,more_children);
});
G__11279.cljs$core$IFn$_invoke$arity$variadic = G__11279__delegate;
return G__11279;
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
var prepend_BANG___2 = (function (parent,child){var G__11307 = dommy.template.__GT_node_like.call(null,parent);G__11307.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__11307;
});
var prepend_BANG___3 = (function() { 
var G__11312__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11308_11313 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11309_11314 = null;var count__11310_11315 = 0;var i__11311_11316 = 0;while(true){
if((i__11311_11316 < count__11310_11315))
{var c_11317 = cljs.core._nth.call(null,chunk__11309_11314,i__11311_11316);prepend_BANG_.call(null,parent__$1,c_11317);
{
var G__11318 = seq__11308_11313;
var G__11319 = chunk__11309_11314;
var G__11320 = count__11310_11315;
var G__11321 = (i__11311_11316 + 1);
seq__11308_11313 = G__11318;
chunk__11309_11314 = G__11319;
count__11310_11315 = G__11320;
i__11311_11316 = G__11321;
continue;
}
} else
{var temp__4092__auto___11322 = cljs.core.seq.call(null,seq__11308_11313);if(temp__4092__auto___11322)
{var seq__11308_11323__$1 = temp__4092__auto___11322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11308_11323__$1))
{var c__5497__auto___11324 = cljs.core.chunk_first.call(null,seq__11308_11323__$1);{
var G__11325 = cljs.core.chunk_rest.call(null,seq__11308_11323__$1);
var G__11326 = c__5497__auto___11324;
var G__11327 = cljs.core.count.call(null,c__5497__auto___11324);
var G__11328 = 0;
seq__11308_11313 = G__11325;
chunk__11309_11314 = G__11326;
count__11310_11315 = G__11327;
i__11311_11316 = G__11328;
continue;
}
} else
{var c_11329 = cljs.core.first.call(null,seq__11308_11323__$1);prepend_BANG_.call(null,parent__$1,c_11329);
{
var G__11330 = cljs.core.next.call(null,seq__11308_11323__$1);
var G__11331 = null;
var G__11332 = 0;
var G__11333 = 0;
seq__11308_11313 = G__11330;
chunk__11309_11314 = G__11331;
count__11310_11315 = G__11332;
i__11311_11316 = G__11333;
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
var G__11312 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11312__delegate.call(this,parent,child,more_children);};
G__11312.cljs$lang$maxFixedArity = 2;
G__11312.cljs$lang$applyTo = (function (arglist__11334){
var parent = cljs.core.first(arglist__11334);
arglist__11334 = cljs.core.next(arglist__11334);
var child = cljs.core.first(arglist__11334);
var more_children = cljs.core.rest(arglist__11334);
return G__11312__delegate(parent,child,more_children);
});
G__11312.cljs$core$IFn$_invoke$arity$variadic = G__11312__delegate;
return G__11312;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___11335 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___11335))
{var next_11336 = temp__4090__auto___11335;parent.insertBefore(actual_node,next_11336);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__11338 = dommy.template.__GT_node_like.call(null,parent);G__11338.innerHTML = "";
dommy.core.append_BANG_.call(null,G__11338,node_like);
return G__11338;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__11340 = elem__$1.parentNode;G__11340.removeChild(elem__$1);
return G__11340;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__11341_SHARP_){return p1__11341_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__11342_SHARP_){return !((p1__11342_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11343){var vec__11344 = p__11343;var special_mouse_event = cljs.core.nth.call(null,vec__11344,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__11344,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4773__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__4761__auto__ = related_target;if(cljs.core.truth_(and__4761__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__4761__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__4773__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__11345){
var elem = cljs.core.first(arglist__11345);
arglist__11345 = cljs.core.next(arglist__11345);
var f = cljs.core.first(arglist__11345);
var args = cljs.core.rest(arglist__11345);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__11346_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__11346_SHARP_));
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
var vec__11370_11393 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11394 = cljs.core.nth.call(null,vec__11370_11393,0,null);var selector_11395 = cljs.core.nth.call(null,vec__11370_11393,1,null);var seq__11371_11396 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11378_11397 = null;var count__11379_11398 = 0;var i__11380_11399 = 0;while(true){
if((i__11380_11399 < count__11379_11398))
{var vec__11387_11400 = cljs.core._nth.call(null,chunk__11378_11397,i__11380_11399);var orig_type_11401 = cljs.core.nth.call(null,vec__11387_11400,0,null);var f_11402 = cljs.core.nth.call(null,vec__11387_11400,1,null);var seq__11381_11403 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11401,new cljs.core.PersistentArrayMap.fromArray([orig_type_11401,cljs.core.identity], true, false)));var chunk__11383_11404 = null;var count__11384_11405 = 0;var i__11385_11406 = 0;while(true){
if((i__11385_11406 < count__11384_11405))
{var vec__11388_11407 = cljs.core._nth.call(null,chunk__11383_11404,i__11385_11406);var actual_type_11408 = cljs.core.nth.call(null,vec__11388_11407,0,null);var factory_11409 = cljs.core.nth.call(null,vec__11388_11407,1,null);var canonical_f_11410 = (cljs.core.truth_(selector_11395)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11394,selector_11395):cljs.core.identity).call(null,factory_11409.call(null,f_11402));dommy.core.update_event_listeners_BANG_.call(null,elem_11394,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11395,actual_type_11408,f_11402], null),canonical_f_11410);
if(cljs.core.truth_(elem_11394.addEventListener))
{elem_11394.addEventListener(cljs.core.name.call(null,actual_type_11408),canonical_f_11410);
} else
{elem_11394.attachEvent(cljs.core.name.call(null,actual_type_11408),canonical_f_11410);
}
{
var G__11411 = seq__11381_11403;
var G__11412 = chunk__11383_11404;
var G__11413 = count__11384_11405;
var G__11414 = (i__11385_11406 + 1);
seq__11381_11403 = G__11411;
chunk__11383_11404 = G__11412;
count__11384_11405 = G__11413;
i__11385_11406 = G__11414;
continue;
}
} else
{var temp__4092__auto___11415 = cljs.core.seq.call(null,seq__11381_11403);if(temp__4092__auto___11415)
{var seq__11381_11416__$1 = temp__4092__auto___11415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11381_11416__$1))
{var c__5497__auto___11417 = cljs.core.chunk_first.call(null,seq__11381_11416__$1);{
var G__11418 = cljs.core.chunk_rest.call(null,seq__11381_11416__$1);
var G__11419 = c__5497__auto___11417;
var G__11420 = cljs.core.count.call(null,c__5497__auto___11417);
var G__11421 = 0;
seq__11381_11403 = G__11418;
chunk__11383_11404 = G__11419;
count__11384_11405 = G__11420;
i__11385_11406 = G__11421;
continue;
}
} else
{var vec__11389_11422 = cljs.core.first.call(null,seq__11381_11416__$1);var actual_type_11423 = cljs.core.nth.call(null,vec__11389_11422,0,null);var factory_11424 = cljs.core.nth.call(null,vec__11389_11422,1,null);var canonical_f_11425 = (cljs.core.truth_(selector_11395)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11394,selector_11395):cljs.core.identity).call(null,factory_11424.call(null,f_11402));dommy.core.update_event_listeners_BANG_.call(null,elem_11394,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11395,actual_type_11423,f_11402], null),canonical_f_11425);
if(cljs.core.truth_(elem_11394.addEventListener))
{elem_11394.addEventListener(cljs.core.name.call(null,actual_type_11423),canonical_f_11425);
} else
{elem_11394.attachEvent(cljs.core.name.call(null,actual_type_11423),canonical_f_11425);
}
{
var G__11426 = cljs.core.next.call(null,seq__11381_11416__$1);
var G__11427 = null;
var G__11428 = 0;
var G__11429 = 0;
seq__11381_11403 = G__11426;
chunk__11383_11404 = G__11427;
count__11384_11405 = G__11428;
i__11385_11406 = G__11429;
continue;
}
}
} else
{}
}
break;
}
{
var G__11430 = seq__11371_11396;
var G__11431 = chunk__11378_11397;
var G__11432 = count__11379_11398;
var G__11433 = (i__11380_11399 + 1);
seq__11371_11396 = G__11430;
chunk__11378_11397 = G__11431;
count__11379_11398 = G__11432;
i__11380_11399 = G__11433;
continue;
}
} else
{var temp__4092__auto___11434 = cljs.core.seq.call(null,seq__11371_11396);if(temp__4092__auto___11434)
{var seq__11371_11435__$1 = temp__4092__auto___11434;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11371_11435__$1))
{var c__5497__auto___11436 = cljs.core.chunk_first.call(null,seq__11371_11435__$1);{
var G__11437 = cljs.core.chunk_rest.call(null,seq__11371_11435__$1);
var G__11438 = c__5497__auto___11436;
var G__11439 = cljs.core.count.call(null,c__5497__auto___11436);
var G__11440 = 0;
seq__11371_11396 = G__11437;
chunk__11378_11397 = G__11438;
count__11379_11398 = G__11439;
i__11380_11399 = G__11440;
continue;
}
} else
{var vec__11390_11441 = cljs.core.first.call(null,seq__11371_11435__$1);var orig_type_11442 = cljs.core.nth.call(null,vec__11390_11441,0,null);var f_11443 = cljs.core.nth.call(null,vec__11390_11441,1,null);var seq__11372_11444 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11442,new cljs.core.PersistentArrayMap.fromArray([orig_type_11442,cljs.core.identity], true, false)));var chunk__11374_11445 = null;var count__11375_11446 = 0;var i__11376_11447 = 0;while(true){
if((i__11376_11447 < count__11375_11446))
{var vec__11391_11448 = cljs.core._nth.call(null,chunk__11374_11445,i__11376_11447);var actual_type_11449 = cljs.core.nth.call(null,vec__11391_11448,0,null);var factory_11450 = cljs.core.nth.call(null,vec__11391_11448,1,null);var canonical_f_11451 = (cljs.core.truth_(selector_11395)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11394,selector_11395):cljs.core.identity).call(null,factory_11450.call(null,f_11443));dommy.core.update_event_listeners_BANG_.call(null,elem_11394,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11395,actual_type_11449,f_11443], null),canonical_f_11451);
if(cljs.core.truth_(elem_11394.addEventListener))
{elem_11394.addEventListener(cljs.core.name.call(null,actual_type_11449),canonical_f_11451);
} else
{elem_11394.attachEvent(cljs.core.name.call(null,actual_type_11449),canonical_f_11451);
}
{
var G__11452 = seq__11372_11444;
var G__11453 = chunk__11374_11445;
var G__11454 = count__11375_11446;
var G__11455 = (i__11376_11447 + 1);
seq__11372_11444 = G__11452;
chunk__11374_11445 = G__11453;
count__11375_11446 = G__11454;
i__11376_11447 = G__11455;
continue;
}
} else
{var temp__4092__auto___11456__$1 = cljs.core.seq.call(null,seq__11372_11444);if(temp__4092__auto___11456__$1)
{var seq__11372_11457__$1 = temp__4092__auto___11456__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11372_11457__$1))
{var c__5497__auto___11458 = cljs.core.chunk_first.call(null,seq__11372_11457__$1);{
var G__11459 = cljs.core.chunk_rest.call(null,seq__11372_11457__$1);
var G__11460 = c__5497__auto___11458;
var G__11461 = cljs.core.count.call(null,c__5497__auto___11458);
var G__11462 = 0;
seq__11372_11444 = G__11459;
chunk__11374_11445 = G__11460;
count__11375_11446 = G__11461;
i__11376_11447 = G__11462;
continue;
}
} else
{var vec__11392_11463 = cljs.core.first.call(null,seq__11372_11457__$1);var actual_type_11464 = cljs.core.nth.call(null,vec__11392_11463,0,null);var factory_11465 = cljs.core.nth.call(null,vec__11392_11463,1,null);var canonical_f_11466 = (cljs.core.truth_(selector_11395)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11394,selector_11395):cljs.core.identity).call(null,factory_11465.call(null,f_11443));dommy.core.update_event_listeners_BANG_.call(null,elem_11394,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11395,actual_type_11464,f_11443], null),canonical_f_11466);
if(cljs.core.truth_(elem_11394.addEventListener))
{elem_11394.addEventListener(cljs.core.name.call(null,actual_type_11464),canonical_f_11466);
} else
{elem_11394.attachEvent(cljs.core.name.call(null,actual_type_11464),canonical_f_11466);
}
{
var G__11467 = cljs.core.next.call(null,seq__11372_11457__$1);
var G__11468 = null;
var G__11469 = 0;
var G__11470 = 0;
seq__11372_11444 = G__11467;
chunk__11374_11445 = G__11468;
count__11375_11446 = G__11469;
i__11376_11447 = G__11470;
continue;
}
}
} else
{}
}
break;
}
{
var G__11471 = cljs.core.next.call(null,seq__11371_11435__$1);
var G__11472 = null;
var G__11473 = 0;
var G__11474 = 0;
seq__11371_11396 = G__11471;
chunk__11378_11397 = G__11472;
count__11379_11398 = G__11473;
i__11380_11399 = G__11474;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__11475){
var elem_sel = cljs.core.first(arglist__11475);
var type_fs = cljs.core.rest(arglist__11475);
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
var vec__11499_11522 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11523 = cljs.core.nth.call(null,vec__11499_11522,0,null);var selector_11524 = cljs.core.nth.call(null,vec__11499_11522,1,null);var seq__11500_11525 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11507_11526 = null;var count__11508_11527 = 0;var i__11509_11528 = 0;while(true){
if((i__11509_11528 < count__11508_11527))
{var vec__11516_11529 = cljs.core._nth.call(null,chunk__11507_11526,i__11509_11528);var orig_type_11530 = cljs.core.nth.call(null,vec__11516_11529,0,null);var f_11531 = cljs.core.nth.call(null,vec__11516_11529,1,null);var seq__11510_11532 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11530,new cljs.core.PersistentArrayMap.fromArray([orig_type_11530,cljs.core.identity], true, false)));var chunk__11512_11533 = null;var count__11513_11534 = 0;var i__11514_11535 = 0;while(true){
if((i__11514_11535 < count__11513_11534))
{var vec__11517_11536 = cljs.core._nth.call(null,chunk__11512_11533,i__11514_11535);var actual_type_11537 = cljs.core.nth.call(null,vec__11517_11536,0,null);var __11538 = cljs.core.nth.call(null,vec__11517_11536,1,null);var keys_11539 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11524,actual_type_11537,f_11531], null);var canonical_f_11540 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11523),keys_11539);dommy.core.update_event_listeners_BANG_.call(null,elem_11523,dommy.utils.dissoc_in,keys_11539);
if(cljs.core.truth_(elem_11523.removeEventListener))
{elem_11523.removeEventListener(cljs.core.name.call(null,actual_type_11537),canonical_f_11540);
} else
{elem_11523.detachEvent(cljs.core.name.call(null,actual_type_11537),canonical_f_11540);
}
{
var G__11541 = seq__11510_11532;
var G__11542 = chunk__11512_11533;
var G__11543 = count__11513_11534;
var G__11544 = (i__11514_11535 + 1);
seq__11510_11532 = G__11541;
chunk__11512_11533 = G__11542;
count__11513_11534 = G__11543;
i__11514_11535 = G__11544;
continue;
}
} else
{var temp__4092__auto___11545 = cljs.core.seq.call(null,seq__11510_11532);if(temp__4092__auto___11545)
{var seq__11510_11546__$1 = temp__4092__auto___11545;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11510_11546__$1))
{var c__5497__auto___11547 = cljs.core.chunk_first.call(null,seq__11510_11546__$1);{
var G__11548 = cljs.core.chunk_rest.call(null,seq__11510_11546__$1);
var G__11549 = c__5497__auto___11547;
var G__11550 = cljs.core.count.call(null,c__5497__auto___11547);
var G__11551 = 0;
seq__11510_11532 = G__11548;
chunk__11512_11533 = G__11549;
count__11513_11534 = G__11550;
i__11514_11535 = G__11551;
continue;
}
} else
{var vec__11518_11552 = cljs.core.first.call(null,seq__11510_11546__$1);var actual_type_11553 = cljs.core.nth.call(null,vec__11518_11552,0,null);var __11554 = cljs.core.nth.call(null,vec__11518_11552,1,null);var keys_11555 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11524,actual_type_11553,f_11531], null);var canonical_f_11556 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11523),keys_11555);dommy.core.update_event_listeners_BANG_.call(null,elem_11523,dommy.utils.dissoc_in,keys_11555);
if(cljs.core.truth_(elem_11523.removeEventListener))
{elem_11523.removeEventListener(cljs.core.name.call(null,actual_type_11553),canonical_f_11556);
} else
{elem_11523.detachEvent(cljs.core.name.call(null,actual_type_11553),canonical_f_11556);
}
{
var G__11557 = cljs.core.next.call(null,seq__11510_11546__$1);
var G__11558 = null;
var G__11559 = 0;
var G__11560 = 0;
seq__11510_11532 = G__11557;
chunk__11512_11533 = G__11558;
count__11513_11534 = G__11559;
i__11514_11535 = G__11560;
continue;
}
}
} else
{}
}
break;
}
{
var G__11561 = seq__11500_11525;
var G__11562 = chunk__11507_11526;
var G__11563 = count__11508_11527;
var G__11564 = (i__11509_11528 + 1);
seq__11500_11525 = G__11561;
chunk__11507_11526 = G__11562;
count__11508_11527 = G__11563;
i__11509_11528 = G__11564;
continue;
}
} else
{var temp__4092__auto___11565 = cljs.core.seq.call(null,seq__11500_11525);if(temp__4092__auto___11565)
{var seq__11500_11566__$1 = temp__4092__auto___11565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11500_11566__$1))
{var c__5497__auto___11567 = cljs.core.chunk_first.call(null,seq__11500_11566__$1);{
var G__11568 = cljs.core.chunk_rest.call(null,seq__11500_11566__$1);
var G__11569 = c__5497__auto___11567;
var G__11570 = cljs.core.count.call(null,c__5497__auto___11567);
var G__11571 = 0;
seq__11500_11525 = G__11568;
chunk__11507_11526 = G__11569;
count__11508_11527 = G__11570;
i__11509_11528 = G__11571;
continue;
}
} else
{var vec__11519_11572 = cljs.core.first.call(null,seq__11500_11566__$1);var orig_type_11573 = cljs.core.nth.call(null,vec__11519_11572,0,null);var f_11574 = cljs.core.nth.call(null,vec__11519_11572,1,null);var seq__11501_11575 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11573,new cljs.core.PersistentArrayMap.fromArray([orig_type_11573,cljs.core.identity], true, false)));var chunk__11503_11576 = null;var count__11504_11577 = 0;var i__11505_11578 = 0;while(true){
if((i__11505_11578 < count__11504_11577))
{var vec__11520_11579 = cljs.core._nth.call(null,chunk__11503_11576,i__11505_11578);var actual_type_11580 = cljs.core.nth.call(null,vec__11520_11579,0,null);var __11581 = cljs.core.nth.call(null,vec__11520_11579,1,null);var keys_11582 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11524,actual_type_11580,f_11574], null);var canonical_f_11583 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11523),keys_11582);dommy.core.update_event_listeners_BANG_.call(null,elem_11523,dommy.utils.dissoc_in,keys_11582);
if(cljs.core.truth_(elem_11523.removeEventListener))
{elem_11523.removeEventListener(cljs.core.name.call(null,actual_type_11580),canonical_f_11583);
} else
{elem_11523.detachEvent(cljs.core.name.call(null,actual_type_11580),canonical_f_11583);
}
{
var G__11584 = seq__11501_11575;
var G__11585 = chunk__11503_11576;
var G__11586 = count__11504_11577;
var G__11587 = (i__11505_11578 + 1);
seq__11501_11575 = G__11584;
chunk__11503_11576 = G__11585;
count__11504_11577 = G__11586;
i__11505_11578 = G__11587;
continue;
}
} else
{var temp__4092__auto___11588__$1 = cljs.core.seq.call(null,seq__11501_11575);if(temp__4092__auto___11588__$1)
{var seq__11501_11589__$1 = temp__4092__auto___11588__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11501_11589__$1))
{var c__5497__auto___11590 = cljs.core.chunk_first.call(null,seq__11501_11589__$1);{
var G__11591 = cljs.core.chunk_rest.call(null,seq__11501_11589__$1);
var G__11592 = c__5497__auto___11590;
var G__11593 = cljs.core.count.call(null,c__5497__auto___11590);
var G__11594 = 0;
seq__11501_11575 = G__11591;
chunk__11503_11576 = G__11592;
count__11504_11577 = G__11593;
i__11505_11578 = G__11594;
continue;
}
} else
{var vec__11521_11595 = cljs.core.first.call(null,seq__11501_11589__$1);var actual_type_11596 = cljs.core.nth.call(null,vec__11521_11595,0,null);var __11597 = cljs.core.nth.call(null,vec__11521_11595,1,null);var keys_11598 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11524,actual_type_11596,f_11574], null);var canonical_f_11599 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11523),keys_11598);dommy.core.update_event_listeners_BANG_.call(null,elem_11523,dommy.utils.dissoc_in,keys_11598);
if(cljs.core.truth_(elem_11523.removeEventListener))
{elem_11523.removeEventListener(cljs.core.name.call(null,actual_type_11596),canonical_f_11599);
} else
{elem_11523.detachEvent(cljs.core.name.call(null,actual_type_11596),canonical_f_11599);
}
{
var G__11600 = cljs.core.next.call(null,seq__11501_11589__$1);
var G__11601 = null;
var G__11602 = 0;
var G__11603 = 0;
seq__11501_11575 = G__11600;
chunk__11503_11576 = G__11601;
count__11504_11577 = G__11602;
i__11505_11578 = G__11603;
continue;
}
}
} else
{}
}
break;
}
{
var G__11604 = cljs.core.next.call(null,seq__11500_11566__$1);
var G__11605 = null;
var G__11606 = 0;
var G__11607 = 0;
seq__11500_11525 = G__11604;
chunk__11507_11526 = G__11605;
count__11508_11527 = G__11606;
i__11509_11528 = G__11607;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11608){
var elem_sel = cljs.core.first(arglist__11608);
var type_fs = cljs.core.rest(arglist__11608);
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
var vec__11616_11623 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11624 = cljs.core.nth.call(null,vec__11616_11623,0,null);var selector_11625 = cljs.core.nth.call(null,vec__11616_11623,1,null);var seq__11617_11626 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11618_11627 = null;var count__11619_11628 = 0;var i__11620_11629 = 0;while(true){
if((i__11620_11629 < count__11619_11628))
{var vec__11621_11630 = cljs.core._nth.call(null,chunk__11618_11627,i__11620_11629);var type_11631 = cljs.core.nth.call(null,vec__11621_11630,0,null);var f_11632 = cljs.core.nth.call(null,vec__11621_11630,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_11631,((function (seq__11617_11626,chunk__11618_11627,count__11619_11628,i__11620_11629,vec__11621_11630,type_11631,f_11632){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11631,this_fn);
return f_11632.call(null,e);
});})(seq__11617_11626,chunk__11618_11627,count__11619_11628,i__11620_11629,vec__11621_11630,type_11631,f_11632))
);
{
var G__11633 = seq__11617_11626;
var G__11634 = chunk__11618_11627;
var G__11635 = count__11619_11628;
var G__11636 = (i__11620_11629 + 1);
seq__11617_11626 = G__11633;
chunk__11618_11627 = G__11634;
count__11619_11628 = G__11635;
i__11620_11629 = G__11636;
continue;
}
} else
{var temp__4092__auto___11637 = cljs.core.seq.call(null,seq__11617_11626);if(temp__4092__auto___11637)
{var seq__11617_11638__$1 = temp__4092__auto___11637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11617_11638__$1))
{var c__5497__auto___11639 = cljs.core.chunk_first.call(null,seq__11617_11638__$1);{
var G__11640 = cljs.core.chunk_rest.call(null,seq__11617_11638__$1);
var G__11641 = c__5497__auto___11639;
var G__11642 = cljs.core.count.call(null,c__5497__auto___11639);
var G__11643 = 0;
seq__11617_11626 = G__11640;
chunk__11618_11627 = G__11641;
count__11619_11628 = G__11642;
i__11620_11629 = G__11643;
continue;
}
} else
{var vec__11622_11644 = cljs.core.first.call(null,seq__11617_11638__$1);var type_11645 = cljs.core.nth.call(null,vec__11622_11644,0,null);var f_11646 = cljs.core.nth.call(null,vec__11622_11644,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_11645,((function (seq__11617_11626,chunk__11618_11627,count__11619_11628,i__11620_11629,vec__11622_11644,type_11645,f_11646,seq__11617_11638__$1,temp__4092__auto___11637){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11645,this_fn);
return f_11646.call(null,e);
});})(seq__11617_11626,chunk__11618_11627,count__11619_11628,i__11620_11629,vec__11622_11644,type_11645,f_11646,seq__11617_11638__$1,temp__4092__auto___11637))
);
{
var G__11647 = cljs.core.next.call(null,seq__11617_11638__$1);
var G__11648 = null;
var G__11649 = 0;
var G__11650 = 0;
seq__11617_11626 = G__11647;
chunk__11618_11627 = G__11648;
count__11619_11628 = G__11649;
i__11620_11629 = G__11650;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11651){
var elem_sel = cljs.core.first(arglist__11651);
var type_fs = cljs.core.rest(arglist__11651);
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
var fire_BANG___delegate = function (node,event_type,p__11652){var vec__11654 = p__11652;var update_event_BANG_ = cljs.core.nth.call(null,vec__11654,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__4773__auto__ = update_event_BANG_;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
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
var p__11652 = null;if (arguments.length > 2) {
  p__11652 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__11652);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__11655){
var node = cljs.core.first(arglist__11655);
arglist__11655 = cljs.core.next(arglist__11655);
var event_type = cljs.core.first(arglist__11655);
var p__11652 = cljs.core.rest(arglist__11655);
return fire_BANG___delegate(node,event_type,p__11652);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
