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
var append_BANG___2 = (function (parent,child){var G__44247 = dommy.template.__GT_node_like.call(null,parent);G__44247.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__44247;
});
var append_BANG___3 = (function() { 
var G__44252__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__44248_44253 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__44249_44254 = null;var count__44250_44255 = 0;var i__44251_44256 = 0;while(true){
if((i__44251_44256 < count__44250_44255))
{var c_44257 = cljs.core._nth.call(null,chunk__44249_44254,i__44251_44256);append_BANG_.call(null,parent__$1,c_44257);
{
var G__44258 = seq__44248_44253;
var G__44259 = chunk__44249_44254;
var G__44260 = count__44250_44255;
var G__44261 = (i__44251_44256 + 1);
seq__44248_44253 = G__44258;
chunk__44249_44254 = G__44259;
count__44250_44255 = G__44260;
i__44251_44256 = G__44261;
continue;
}
} else
{var temp__4092__auto___44262 = cljs.core.seq.call(null,seq__44248_44253);if(temp__4092__auto___44262)
{var seq__44248_44263__$1 = temp__4092__auto___44262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44248_44263__$1))
{var c__4017__auto___44264 = cljs.core.chunk_first.call(null,seq__44248_44263__$1);{
var G__44265 = cljs.core.chunk_rest.call(null,seq__44248_44263__$1);
var G__44266 = c__4017__auto___44264;
var G__44267 = cljs.core.count.call(null,c__4017__auto___44264);
var G__44268 = 0;
seq__44248_44253 = G__44265;
chunk__44249_44254 = G__44266;
count__44250_44255 = G__44267;
i__44251_44256 = G__44268;
continue;
}
} else
{var c_44269 = cljs.core.first.call(null,seq__44248_44263__$1);append_BANG_.call(null,parent__$1,c_44269);
{
var G__44270 = cljs.core.next.call(null,seq__44248_44263__$1);
var G__44271 = null;
var G__44272 = 0;
var G__44273 = 0;
seq__44248_44253 = G__44270;
chunk__44249_44254 = G__44271;
count__44250_44255 = G__44272;
i__44251_44256 = G__44273;
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
var G__44252 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44252__delegate.call(this,parent,child,more_children);};
G__44252.cljs$lang$maxFixedArity = 2;
G__44252.cljs$lang$applyTo = (function (arglist__44274){
var parent = cljs.core.first(arglist__44274);
arglist__44274 = cljs.core.next(arglist__44274);
var child = cljs.core.first(arglist__44274);
var more_children = cljs.core.rest(arglist__44274);
return G__44252__delegate(parent,child,more_children);
});
G__44252.cljs$core$IFn$_invoke$arity$variadic = G__44252__delegate;
return G__44252;
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
var prepend_BANG___2 = (function (parent,child){var G__44280 = dommy.template.__GT_node_like.call(null,parent);G__44280.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__44280;
});
var prepend_BANG___3 = (function() { 
var G__44285__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__44281_44286 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__44282_44287 = null;var count__44283_44288 = 0;var i__44284_44289 = 0;while(true){
if((i__44284_44289 < count__44283_44288))
{var c_44290 = cljs.core._nth.call(null,chunk__44282_44287,i__44284_44289);prepend_BANG_.call(null,parent__$1,c_44290);
{
var G__44291 = seq__44281_44286;
var G__44292 = chunk__44282_44287;
var G__44293 = count__44283_44288;
var G__44294 = (i__44284_44289 + 1);
seq__44281_44286 = G__44291;
chunk__44282_44287 = G__44292;
count__44283_44288 = G__44293;
i__44284_44289 = G__44294;
continue;
}
} else
{var temp__4092__auto___44295 = cljs.core.seq.call(null,seq__44281_44286);if(temp__4092__auto___44295)
{var seq__44281_44296__$1 = temp__4092__auto___44295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44281_44296__$1))
{var c__4017__auto___44297 = cljs.core.chunk_first.call(null,seq__44281_44296__$1);{
var G__44298 = cljs.core.chunk_rest.call(null,seq__44281_44296__$1);
var G__44299 = c__4017__auto___44297;
var G__44300 = cljs.core.count.call(null,c__4017__auto___44297);
var G__44301 = 0;
seq__44281_44286 = G__44298;
chunk__44282_44287 = G__44299;
count__44283_44288 = G__44300;
i__44284_44289 = G__44301;
continue;
}
} else
{var c_44302 = cljs.core.first.call(null,seq__44281_44296__$1);prepend_BANG_.call(null,parent__$1,c_44302);
{
var G__44303 = cljs.core.next.call(null,seq__44281_44296__$1);
var G__44304 = null;
var G__44305 = 0;
var G__44306 = 0;
seq__44281_44286 = G__44303;
chunk__44282_44287 = G__44304;
count__44283_44288 = G__44305;
i__44284_44289 = G__44306;
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
var G__44285 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44285__delegate.call(this,parent,child,more_children);};
G__44285.cljs$lang$maxFixedArity = 2;
G__44285.cljs$lang$applyTo = (function (arglist__44307){
var parent = cljs.core.first(arglist__44307);
arglist__44307 = cljs.core.next(arglist__44307);
var child = cljs.core.first(arglist__44307);
var more_children = cljs.core.rest(arglist__44307);
return G__44285__delegate(parent,child,more_children);
});
G__44285.cljs$core$IFn$_invoke$arity$variadic = G__44285__delegate;
return G__44285;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___44308 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___44308))
{var next_44309 = temp__4090__auto___44308;parent.insertBefore(actual_node,next_44309);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__44311 = dommy.template.__GT_node_like.call(null,parent);G__44311.innerHTML = "";
dommy.core.append_BANG_.call(null,G__44311,node_like);
return G__44311;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__44313 = elem__$1.parentNode;G__44313.removeChild(elem__$1);
return G__44313;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__44314_SHARP_){return p1__44314_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__44315_SHARP_){return !((p1__44315_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__44316){var vec__44317 = p__44316;var special_mouse_event = cljs.core.nth.call(null,vec__44317,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__44317,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__44318){
var elem = cljs.core.first(arglist__44318);
arglist__44318 = cljs.core.next(arglist__44318);
var f = cljs.core.first(arglist__44318);
var args = cljs.core.rest(arglist__44318);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__44319_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__44319_SHARP_));
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
var vec__44343_44366 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_44367 = cljs.core.nth.call(null,vec__44343_44366,0,null);var selector_44368 = cljs.core.nth.call(null,vec__44343_44366,1,null);var seq__44344_44369 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__44351_44370 = null;var count__44352_44371 = 0;var i__44353_44372 = 0;while(true){
if((i__44353_44372 < count__44352_44371))
{var vec__44360_44373 = cljs.core._nth.call(null,chunk__44351_44370,i__44353_44372);var orig_type_44374 = cljs.core.nth.call(null,vec__44360_44373,0,null);var f_44375 = cljs.core.nth.call(null,vec__44360_44373,1,null);var seq__44354_44376 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_44374,new cljs.core.PersistentArrayMap.fromArray([orig_type_44374,cljs.core.identity], true, false)));var chunk__44356_44377 = null;var count__44357_44378 = 0;var i__44358_44379 = 0;while(true){
if((i__44358_44379 < count__44357_44378))
{var vec__44361_44380 = cljs.core._nth.call(null,chunk__44356_44377,i__44358_44379);var actual_type_44381 = cljs.core.nth.call(null,vec__44361_44380,0,null);var factory_44382 = cljs.core.nth.call(null,vec__44361_44380,1,null);var canonical_f_44383 = (cljs.core.truth_(selector_44368)?cljs.core.partial.call(null,dommy.core.live_listener,elem_44367,selector_44368):cljs.core.identity).call(null,factory_44382.call(null,f_44375));dommy.core.update_event_listeners_BANG_.call(null,elem_44367,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44368,actual_type_44381,f_44375], null),canonical_f_44383);
if(cljs.core.truth_(elem_44367.addEventListener))
{elem_44367.addEventListener(cljs.core.name.call(null,actual_type_44381),canonical_f_44383);
} else
{elem_44367.attachEvent(cljs.core.name.call(null,actual_type_44381),canonical_f_44383);
}
{
var G__44384 = seq__44354_44376;
var G__44385 = chunk__44356_44377;
var G__44386 = count__44357_44378;
var G__44387 = (i__44358_44379 + 1);
seq__44354_44376 = G__44384;
chunk__44356_44377 = G__44385;
count__44357_44378 = G__44386;
i__44358_44379 = G__44387;
continue;
}
} else
{var temp__4092__auto___44388 = cljs.core.seq.call(null,seq__44354_44376);if(temp__4092__auto___44388)
{var seq__44354_44389__$1 = temp__4092__auto___44388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44354_44389__$1))
{var c__4017__auto___44390 = cljs.core.chunk_first.call(null,seq__44354_44389__$1);{
var G__44391 = cljs.core.chunk_rest.call(null,seq__44354_44389__$1);
var G__44392 = c__4017__auto___44390;
var G__44393 = cljs.core.count.call(null,c__4017__auto___44390);
var G__44394 = 0;
seq__44354_44376 = G__44391;
chunk__44356_44377 = G__44392;
count__44357_44378 = G__44393;
i__44358_44379 = G__44394;
continue;
}
} else
{var vec__44362_44395 = cljs.core.first.call(null,seq__44354_44389__$1);var actual_type_44396 = cljs.core.nth.call(null,vec__44362_44395,0,null);var factory_44397 = cljs.core.nth.call(null,vec__44362_44395,1,null);var canonical_f_44398 = (cljs.core.truth_(selector_44368)?cljs.core.partial.call(null,dommy.core.live_listener,elem_44367,selector_44368):cljs.core.identity).call(null,factory_44397.call(null,f_44375));dommy.core.update_event_listeners_BANG_.call(null,elem_44367,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44368,actual_type_44396,f_44375], null),canonical_f_44398);
if(cljs.core.truth_(elem_44367.addEventListener))
{elem_44367.addEventListener(cljs.core.name.call(null,actual_type_44396),canonical_f_44398);
} else
{elem_44367.attachEvent(cljs.core.name.call(null,actual_type_44396),canonical_f_44398);
}
{
var G__44399 = cljs.core.next.call(null,seq__44354_44389__$1);
var G__44400 = null;
var G__44401 = 0;
var G__44402 = 0;
seq__44354_44376 = G__44399;
chunk__44356_44377 = G__44400;
count__44357_44378 = G__44401;
i__44358_44379 = G__44402;
continue;
}
}
} else
{}
}
break;
}
{
var G__44403 = seq__44344_44369;
var G__44404 = chunk__44351_44370;
var G__44405 = count__44352_44371;
var G__44406 = (i__44353_44372 + 1);
seq__44344_44369 = G__44403;
chunk__44351_44370 = G__44404;
count__44352_44371 = G__44405;
i__44353_44372 = G__44406;
continue;
}
} else
{var temp__4092__auto___44407 = cljs.core.seq.call(null,seq__44344_44369);if(temp__4092__auto___44407)
{var seq__44344_44408__$1 = temp__4092__auto___44407;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44344_44408__$1))
{var c__4017__auto___44409 = cljs.core.chunk_first.call(null,seq__44344_44408__$1);{
var G__44410 = cljs.core.chunk_rest.call(null,seq__44344_44408__$1);
var G__44411 = c__4017__auto___44409;
var G__44412 = cljs.core.count.call(null,c__4017__auto___44409);
var G__44413 = 0;
seq__44344_44369 = G__44410;
chunk__44351_44370 = G__44411;
count__44352_44371 = G__44412;
i__44353_44372 = G__44413;
continue;
}
} else
{var vec__44363_44414 = cljs.core.first.call(null,seq__44344_44408__$1);var orig_type_44415 = cljs.core.nth.call(null,vec__44363_44414,0,null);var f_44416 = cljs.core.nth.call(null,vec__44363_44414,1,null);var seq__44345_44417 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_44415,new cljs.core.PersistentArrayMap.fromArray([orig_type_44415,cljs.core.identity], true, false)));var chunk__44347_44418 = null;var count__44348_44419 = 0;var i__44349_44420 = 0;while(true){
if((i__44349_44420 < count__44348_44419))
{var vec__44364_44421 = cljs.core._nth.call(null,chunk__44347_44418,i__44349_44420);var actual_type_44422 = cljs.core.nth.call(null,vec__44364_44421,0,null);var factory_44423 = cljs.core.nth.call(null,vec__44364_44421,1,null);var canonical_f_44424 = (cljs.core.truth_(selector_44368)?cljs.core.partial.call(null,dommy.core.live_listener,elem_44367,selector_44368):cljs.core.identity).call(null,factory_44423.call(null,f_44416));dommy.core.update_event_listeners_BANG_.call(null,elem_44367,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44368,actual_type_44422,f_44416], null),canonical_f_44424);
if(cljs.core.truth_(elem_44367.addEventListener))
{elem_44367.addEventListener(cljs.core.name.call(null,actual_type_44422),canonical_f_44424);
} else
{elem_44367.attachEvent(cljs.core.name.call(null,actual_type_44422),canonical_f_44424);
}
{
var G__44425 = seq__44345_44417;
var G__44426 = chunk__44347_44418;
var G__44427 = count__44348_44419;
var G__44428 = (i__44349_44420 + 1);
seq__44345_44417 = G__44425;
chunk__44347_44418 = G__44426;
count__44348_44419 = G__44427;
i__44349_44420 = G__44428;
continue;
}
} else
{var temp__4092__auto___44429__$1 = cljs.core.seq.call(null,seq__44345_44417);if(temp__4092__auto___44429__$1)
{var seq__44345_44430__$1 = temp__4092__auto___44429__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44345_44430__$1))
{var c__4017__auto___44431 = cljs.core.chunk_first.call(null,seq__44345_44430__$1);{
var G__44432 = cljs.core.chunk_rest.call(null,seq__44345_44430__$1);
var G__44433 = c__4017__auto___44431;
var G__44434 = cljs.core.count.call(null,c__4017__auto___44431);
var G__44435 = 0;
seq__44345_44417 = G__44432;
chunk__44347_44418 = G__44433;
count__44348_44419 = G__44434;
i__44349_44420 = G__44435;
continue;
}
} else
{var vec__44365_44436 = cljs.core.first.call(null,seq__44345_44430__$1);var actual_type_44437 = cljs.core.nth.call(null,vec__44365_44436,0,null);var factory_44438 = cljs.core.nth.call(null,vec__44365_44436,1,null);var canonical_f_44439 = (cljs.core.truth_(selector_44368)?cljs.core.partial.call(null,dommy.core.live_listener,elem_44367,selector_44368):cljs.core.identity).call(null,factory_44438.call(null,f_44416));dommy.core.update_event_listeners_BANG_.call(null,elem_44367,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44368,actual_type_44437,f_44416], null),canonical_f_44439);
if(cljs.core.truth_(elem_44367.addEventListener))
{elem_44367.addEventListener(cljs.core.name.call(null,actual_type_44437),canonical_f_44439);
} else
{elem_44367.attachEvent(cljs.core.name.call(null,actual_type_44437),canonical_f_44439);
}
{
var G__44440 = cljs.core.next.call(null,seq__44345_44430__$1);
var G__44441 = null;
var G__44442 = 0;
var G__44443 = 0;
seq__44345_44417 = G__44440;
chunk__44347_44418 = G__44441;
count__44348_44419 = G__44442;
i__44349_44420 = G__44443;
continue;
}
}
} else
{}
}
break;
}
{
var G__44444 = cljs.core.next.call(null,seq__44344_44408__$1);
var G__44445 = null;
var G__44446 = 0;
var G__44447 = 0;
seq__44344_44369 = G__44444;
chunk__44351_44370 = G__44445;
count__44352_44371 = G__44446;
i__44353_44372 = G__44447;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__44448){
var elem_sel = cljs.core.first(arglist__44448);
var type_fs = cljs.core.rest(arglist__44448);
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
var vec__44472_44495 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_44496 = cljs.core.nth.call(null,vec__44472_44495,0,null);var selector_44497 = cljs.core.nth.call(null,vec__44472_44495,1,null);var seq__44473_44498 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__44480_44499 = null;var count__44481_44500 = 0;var i__44482_44501 = 0;while(true){
if((i__44482_44501 < count__44481_44500))
{var vec__44489_44502 = cljs.core._nth.call(null,chunk__44480_44499,i__44482_44501);var orig_type_44503 = cljs.core.nth.call(null,vec__44489_44502,0,null);var f_44504 = cljs.core.nth.call(null,vec__44489_44502,1,null);var seq__44483_44505 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_44503,new cljs.core.PersistentArrayMap.fromArray([orig_type_44503,cljs.core.identity], true, false)));var chunk__44485_44506 = null;var count__44486_44507 = 0;var i__44487_44508 = 0;while(true){
if((i__44487_44508 < count__44486_44507))
{var vec__44490_44509 = cljs.core._nth.call(null,chunk__44485_44506,i__44487_44508);var actual_type_44510 = cljs.core.nth.call(null,vec__44490_44509,0,null);var __44511 = cljs.core.nth.call(null,vec__44490_44509,1,null);var keys_44512 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44497,actual_type_44510,f_44504], null);var canonical_f_44513 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_44496),keys_44512);dommy.core.update_event_listeners_BANG_.call(null,elem_44496,dommy.utils.dissoc_in,keys_44512);
if(cljs.core.truth_(elem_44496.removeEventListener))
{elem_44496.removeEventListener(cljs.core.name.call(null,actual_type_44510),canonical_f_44513);
} else
{elem_44496.detachEvent(cljs.core.name.call(null,actual_type_44510),canonical_f_44513);
}
{
var G__44514 = seq__44483_44505;
var G__44515 = chunk__44485_44506;
var G__44516 = count__44486_44507;
var G__44517 = (i__44487_44508 + 1);
seq__44483_44505 = G__44514;
chunk__44485_44506 = G__44515;
count__44486_44507 = G__44516;
i__44487_44508 = G__44517;
continue;
}
} else
{var temp__4092__auto___44518 = cljs.core.seq.call(null,seq__44483_44505);if(temp__4092__auto___44518)
{var seq__44483_44519__$1 = temp__4092__auto___44518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44483_44519__$1))
{var c__4017__auto___44520 = cljs.core.chunk_first.call(null,seq__44483_44519__$1);{
var G__44521 = cljs.core.chunk_rest.call(null,seq__44483_44519__$1);
var G__44522 = c__4017__auto___44520;
var G__44523 = cljs.core.count.call(null,c__4017__auto___44520);
var G__44524 = 0;
seq__44483_44505 = G__44521;
chunk__44485_44506 = G__44522;
count__44486_44507 = G__44523;
i__44487_44508 = G__44524;
continue;
}
} else
{var vec__44491_44525 = cljs.core.first.call(null,seq__44483_44519__$1);var actual_type_44526 = cljs.core.nth.call(null,vec__44491_44525,0,null);var __44527 = cljs.core.nth.call(null,vec__44491_44525,1,null);var keys_44528 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44497,actual_type_44526,f_44504], null);var canonical_f_44529 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_44496),keys_44528);dommy.core.update_event_listeners_BANG_.call(null,elem_44496,dommy.utils.dissoc_in,keys_44528);
if(cljs.core.truth_(elem_44496.removeEventListener))
{elem_44496.removeEventListener(cljs.core.name.call(null,actual_type_44526),canonical_f_44529);
} else
{elem_44496.detachEvent(cljs.core.name.call(null,actual_type_44526),canonical_f_44529);
}
{
var G__44530 = cljs.core.next.call(null,seq__44483_44519__$1);
var G__44531 = null;
var G__44532 = 0;
var G__44533 = 0;
seq__44483_44505 = G__44530;
chunk__44485_44506 = G__44531;
count__44486_44507 = G__44532;
i__44487_44508 = G__44533;
continue;
}
}
} else
{}
}
break;
}
{
var G__44534 = seq__44473_44498;
var G__44535 = chunk__44480_44499;
var G__44536 = count__44481_44500;
var G__44537 = (i__44482_44501 + 1);
seq__44473_44498 = G__44534;
chunk__44480_44499 = G__44535;
count__44481_44500 = G__44536;
i__44482_44501 = G__44537;
continue;
}
} else
{var temp__4092__auto___44538 = cljs.core.seq.call(null,seq__44473_44498);if(temp__4092__auto___44538)
{var seq__44473_44539__$1 = temp__4092__auto___44538;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44473_44539__$1))
{var c__4017__auto___44540 = cljs.core.chunk_first.call(null,seq__44473_44539__$1);{
var G__44541 = cljs.core.chunk_rest.call(null,seq__44473_44539__$1);
var G__44542 = c__4017__auto___44540;
var G__44543 = cljs.core.count.call(null,c__4017__auto___44540);
var G__44544 = 0;
seq__44473_44498 = G__44541;
chunk__44480_44499 = G__44542;
count__44481_44500 = G__44543;
i__44482_44501 = G__44544;
continue;
}
} else
{var vec__44492_44545 = cljs.core.first.call(null,seq__44473_44539__$1);var orig_type_44546 = cljs.core.nth.call(null,vec__44492_44545,0,null);var f_44547 = cljs.core.nth.call(null,vec__44492_44545,1,null);var seq__44474_44548 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_44546,new cljs.core.PersistentArrayMap.fromArray([orig_type_44546,cljs.core.identity], true, false)));var chunk__44476_44549 = null;var count__44477_44550 = 0;var i__44478_44551 = 0;while(true){
if((i__44478_44551 < count__44477_44550))
{var vec__44493_44552 = cljs.core._nth.call(null,chunk__44476_44549,i__44478_44551);var actual_type_44553 = cljs.core.nth.call(null,vec__44493_44552,0,null);var __44554 = cljs.core.nth.call(null,vec__44493_44552,1,null);var keys_44555 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44497,actual_type_44553,f_44547], null);var canonical_f_44556 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_44496),keys_44555);dommy.core.update_event_listeners_BANG_.call(null,elem_44496,dommy.utils.dissoc_in,keys_44555);
if(cljs.core.truth_(elem_44496.removeEventListener))
{elem_44496.removeEventListener(cljs.core.name.call(null,actual_type_44553),canonical_f_44556);
} else
{elem_44496.detachEvent(cljs.core.name.call(null,actual_type_44553),canonical_f_44556);
}
{
var G__44557 = seq__44474_44548;
var G__44558 = chunk__44476_44549;
var G__44559 = count__44477_44550;
var G__44560 = (i__44478_44551 + 1);
seq__44474_44548 = G__44557;
chunk__44476_44549 = G__44558;
count__44477_44550 = G__44559;
i__44478_44551 = G__44560;
continue;
}
} else
{var temp__4092__auto___44561__$1 = cljs.core.seq.call(null,seq__44474_44548);if(temp__4092__auto___44561__$1)
{var seq__44474_44562__$1 = temp__4092__auto___44561__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44474_44562__$1))
{var c__4017__auto___44563 = cljs.core.chunk_first.call(null,seq__44474_44562__$1);{
var G__44564 = cljs.core.chunk_rest.call(null,seq__44474_44562__$1);
var G__44565 = c__4017__auto___44563;
var G__44566 = cljs.core.count.call(null,c__4017__auto___44563);
var G__44567 = 0;
seq__44474_44548 = G__44564;
chunk__44476_44549 = G__44565;
count__44477_44550 = G__44566;
i__44478_44551 = G__44567;
continue;
}
} else
{var vec__44494_44568 = cljs.core.first.call(null,seq__44474_44562__$1);var actual_type_44569 = cljs.core.nth.call(null,vec__44494_44568,0,null);var __44570 = cljs.core.nth.call(null,vec__44494_44568,1,null);var keys_44571 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44497,actual_type_44569,f_44547], null);var canonical_f_44572 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_44496),keys_44571);dommy.core.update_event_listeners_BANG_.call(null,elem_44496,dommy.utils.dissoc_in,keys_44571);
if(cljs.core.truth_(elem_44496.removeEventListener))
{elem_44496.removeEventListener(cljs.core.name.call(null,actual_type_44569),canonical_f_44572);
} else
{elem_44496.detachEvent(cljs.core.name.call(null,actual_type_44569),canonical_f_44572);
}
{
var G__44573 = cljs.core.next.call(null,seq__44474_44562__$1);
var G__44574 = null;
var G__44575 = 0;
var G__44576 = 0;
seq__44474_44548 = G__44573;
chunk__44476_44549 = G__44574;
count__44477_44550 = G__44575;
i__44478_44551 = G__44576;
continue;
}
}
} else
{}
}
break;
}
{
var G__44577 = cljs.core.next.call(null,seq__44473_44539__$1);
var G__44578 = null;
var G__44579 = 0;
var G__44580 = 0;
seq__44473_44498 = G__44577;
chunk__44480_44499 = G__44578;
count__44481_44500 = G__44579;
i__44482_44501 = G__44580;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__44581){
var elem_sel = cljs.core.first(arglist__44581);
var type_fs = cljs.core.rest(arglist__44581);
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
var vec__44589_44596 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_44597 = cljs.core.nth.call(null,vec__44589_44596,0,null);var selector_44598 = cljs.core.nth.call(null,vec__44589_44596,1,null);var seq__44590_44599 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__44591_44600 = null;var count__44592_44601 = 0;var i__44593_44602 = 0;while(true){
if((i__44593_44602 < count__44592_44601))
{var vec__44594_44603 = cljs.core._nth.call(null,chunk__44591_44600,i__44593_44602);var type_44604 = cljs.core.nth.call(null,vec__44594_44603,0,null);var f_44605 = cljs.core.nth.call(null,vec__44594_44603,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_44604,((function (seq__44590_44599,chunk__44591_44600,count__44592_44601,i__44593_44602,vec__44594_44603,type_44604,f_44605){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_44604,this_fn);
return f_44605.call(null,e);
});})(seq__44590_44599,chunk__44591_44600,count__44592_44601,i__44593_44602,vec__44594_44603,type_44604,f_44605))
);
{
var G__44606 = seq__44590_44599;
var G__44607 = chunk__44591_44600;
var G__44608 = count__44592_44601;
var G__44609 = (i__44593_44602 + 1);
seq__44590_44599 = G__44606;
chunk__44591_44600 = G__44607;
count__44592_44601 = G__44608;
i__44593_44602 = G__44609;
continue;
}
} else
{var temp__4092__auto___44610 = cljs.core.seq.call(null,seq__44590_44599);if(temp__4092__auto___44610)
{var seq__44590_44611__$1 = temp__4092__auto___44610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44590_44611__$1))
{var c__4017__auto___44612 = cljs.core.chunk_first.call(null,seq__44590_44611__$1);{
var G__44613 = cljs.core.chunk_rest.call(null,seq__44590_44611__$1);
var G__44614 = c__4017__auto___44612;
var G__44615 = cljs.core.count.call(null,c__4017__auto___44612);
var G__44616 = 0;
seq__44590_44599 = G__44613;
chunk__44591_44600 = G__44614;
count__44592_44601 = G__44615;
i__44593_44602 = G__44616;
continue;
}
} else
{var vec__44595_44617 = cljs.core.first.call(null,seq__44590_44611__$1);var type_44618 = cljs.core.nth.call(null,vec__44595_44617,0,null);var f_44619 = cljs.core.nth.call(null,vec__44595_44617,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_44618,((function (seq__44590_44599,chunk__44591_44600,count__44592_44601,i__44593_44602,vec__44595_44617,type_44618,f_44619,seq__44590_44611__$1,temp__4092__auto___44610){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_44618,this_fn);
return f_44619.call(null,e);
});})(seq__44590_44599,chunk__44591_44600,count__44592_44601,i__44593_44602,vec__44595_44617,type_44618,f_44619,seq__44590_44611__$1,temp__4092__auto___44610))
);
{
var G__44620 = cljs.core.next.call(null,seq__44590_44611__$1);
var G__44621 = null;
var G__44622 = 0;
var G__44623 = 0;
seq__44590_44599 = G__44620;
chunk__44591_44600 = G__44621;
count__44592_44601 = G__44622;
i__44593_44602 = G__44623;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__44624){
var elem_sel = cljs.core.first(arglist__44624);
var type_fs = cljs.core.rest(arglist__44624);
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
var fire_BANG___delegate = function (node,event_type,p__44625){var vec__44627 = p__44625;var update_event_BANG_ = cljs.core.nth.call(null,vec__44627,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__44625 = null;if (arguments.length > 2) {
  p__44625 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__44625);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__44628){
var node = cljs.core.first(arglist__44628);
arglist__44628 = cljs.core.next(arglist__44628);
var event_type = cljs.core.first(arglist__44628);
var p__44625 = cljs.core.rest(arglist__44628);
return fire_BANG___delegate(node,event_type,p__44625);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
