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
var append_BANG___2 = (function (parent,child){var G__12378 = dommy.template.__GT_node_like.call(null,parent);G__12378.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__12378;
});
var append_BANG___3 = (function() { 
var G__12383__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__12379_12384 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__12380_12385 = null;var count__12381_12386 = 0;var i__12382_12387 = 0;while(true){
if((i__12382_12387 < count__12381_12386))
{var c_12388 = cljs.core._nth.call(null,chunk__12380_12385,i__12382_12387);append_BANG_.call(null,parent__$1,c_12388);
{
var G__12389 = seq__12379_12384;
var G__12390 = chunk__12380_12385;
var G__12391 = count__12381_12386;
var G__12392 = (i__12382_12387 + 1);
seq__12379_12384 = G__12389;
chunk__12380_12385 = G__12390;
count__12381_12386 = G__12391;
i__12382_12387 = G__12392;
continue;
}
} else
{var temp__4092__auto___12393 = cljs.core.seq.call(null,seq__12379_12384);if(temp__4092__auto___12393)
{var seq__12379_12394__$1 = temp__4092__auto___12393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12379_12394__$1))
{var c__5497__auto___12395 = cljs.core.chunk_first.call(null,seq__12379_12394__$1);{
var G__12396 = cljs.core.chunk_rest.call(null,seq__12379_12394__$1);
var G__12397 = c__5497__auto___12395;
var G__12398 = cljs.core.count.call(null,c__5497__auto___12395);
var G__12399 = 0;
seq__12379_12384 = G__12396;
chunk__12380_12385 = G__12397;
count__12381_12386 = G__12398;
i__12382_12387 = G__12399;
continue;
}
} else
{var c_12400 = cljs.core.first.call(null,seq__12379_12394__$1);append_BANG_.call(null,parent__$1,c_12400);
{
var G__12401 = cljs.core.next.call(null,seq__12379_12394__$1);
var G__12402 = null;
var G__12403 = 0;
var G__12404 = 0;
seq__12379_12384 = G__12401;
chunk__12380_12385 = G__12402;
count__12381_12386 = G__12403;
i__12382_12387 = G__12404;
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
var G__12383 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12383__delegate.call(this,parent,child,more_children);};
G__12383.cljs$lang$maxFixedArity = 2;
G__12383.cljs$lang$applyTo = (function (arglist__12405){
var parent = cljs.core.first(arglist__12405);
arglist__12405 = cljs.core.next(arglist__12405);
var child = cljs.core.first(arglist__12405);
var more_children = cljs.core.rest(arglist__12405);
return G__12383__delegate(parent,child,more_children);
});
G__12383.cljs$core$IFn$_invoke$arity$variadic = G__12383__delegate;
return G__12383;
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
var prepend_BANG___2 = (function (parent,child){var G__12411 = dommy.template.__GT_node_like.call(null,parent);G__12411.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__12411;
});
var prepend_BANG___3 = (function() { 
var G__12416__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__12412_12417 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__12413_12418 = null;var count__12414_12419 = 0;var i__12415_12420 = 0;while(true){
if((i__12415_12420 < count__12414_12419))
{var c_12421 = cljs.core._nth.call(null,chunk__12413_12418,i__12415_12420);prepend_BANG_.call(null,parent__$1,c_12421);
{
var G__12422 = seq__12412_12417;
var G__12423 = chunk__12413_12418;
var G__12424 = count__12414_12419;
var G__12425 = (i__12415_12420 + 1);
seq__12412_12417 = G__12422;
chunk__12413_12418 = G__12423;
count__12414_12419 = G__12424;
i__12415_12420 = G__12425;
continue;
}
} else
{var temp__4092__auto___12426 = cljs.core.seq.call(null,seq__12412_12417);if(temp__4092__auto___12426)
{var seq__12412_12427__$1 = temp__4092__auto___12426;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12412_12427__$1))
{var c__5497__auto___12428 = cljs.core.chunk_first.call(null,seq__12412_12427__$1);{
var G__12429 = cljs.core.chunk_rest.call(null,seq__12412_12427__$1);
var G__12430 = c__5497__auto___12428;
var G__12431 = cljs.core.count.call(null,c__5497__auto___12428);
var G__12432 = 0;
seq__12412_12417 = G__12429;
chunk__12413_12418 = G__12430;
count__12414_12419 = G__12431;
i__12415_12420 = G__12432;
continue;
}
} else
{var c_12433 = cljs.core.first.call(null,seq__12412_12427__$1);prepend_BANG_.call(null,parent__$1,c_12433);
{
var G__12434 = cljs.core.next.call(null,seq__12412_12427__$1);
var G__12435 = null;
var G__12436 = 0;
var G__12437 = 0;
seq__12412_12417 = G__12434;
chunk__12413_12418 = G__12435;
count__12414_12419 = G__12436;
i__12415_12420 = G__12437;
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
var G__12416 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12416__delegate.call(this,parent,child,more_children);};
G__12416.cljs$lang$maxFixedArity = 2;
G__12416.cljs$lang$applyTo = (function (arglist__12438){
var parent = cljs.core.first(arglist__12438);
arglist__12438 = cljs.core.next(arglist__12438);
var child = cljs.core.first(arglist__12438);
var more_children = cljs.core.rest(arglist__12438);
return G__12416__delegate(parent,child,more_children);
});
G__12416.cljs$core$IFn$_invoke$arity$variadic = G__12416__delegate;
return G__12416;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___12439 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___12439))
{var next_12440 = temp__4090__auto___12439;parent.insertBefore(actual_node,next_12440);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__12442 = dommy.template.__GT_node_like.call(null,parent);G__12442.innerHTML = "";
dommy.core.append_BANG_.call(null,G__12442,node_like);
return G__12442;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__12444 = elem__$1.parentNode;G__12444.removeChild(elem__$1);
return G__12444;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__12445_SHARP_){return p1__12445_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__12446_SHARP_){return !((p1__12446_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12447){var vec__12448 = p__12447;var special_mouse_event = cljs.core.nth.call(null,vec__12448,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__12448,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4773__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4773__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__12449){
var elem = cljs.core.first(arglist__12449);
arglist__12449 = cljs.core.next(arglist__12449);
var f = cljs.core.first(arglist__12449);
var args = cljs.core.rest(arglist__12449);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__12450_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__12450_SHARP_));
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
var vec__12474_12497 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_12498 = cljs.core.nth.call(null,vec__12474_12497,0,null);var selector_12499 = cljs.core.nth.call(null,vec__12474_12497,1,null);var seq__12475_12500 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__12482_12501 = null;var count__12483_12502 = 0;var i__12484_12503 = 0;while(true){
if((i__12484_12503 < count__12483_12502))
{var vec__12491_12504 = cljs.core._nth.call(null,chunk__12482_12501,i__12484_12503);var orig_type_12505 = cljs.core.nth.call(null,vec__12491_12504,0,null);var f_12506 = cljs.core.nth.call(null,vec__12491_12504,1,null);var seq__12485_12507 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12505,new cljs.core.PersistentArrayMap.fromArray([orig_type_12505,cljs.core.identity], true, false)));var chunk__12487_12508 = null;var count__12488_12509 = 0;var i__12489_12510 = 0;while(true){
if((i__12489_12510 < count__12488_12509))
{var vec__12492_12511 = cljs.core._nth.call(null,chunk__12487_12508,i__12489_12510);var actual_type_12512 = cljs.core.nth.call(null,vec__12492_12511,0,null);var factory_12513 = cljs.core.nth.call(null,vec__12492_12511,1,null);var canonical_f_12514 = (cljs.core.truth_(selector_12499)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12498,selector_12499):cljs.core.identity).call(null,factory_12513.call(null,f_12506));dommy.core.update_event_listeners_BANG_.call(null,elem_12498,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12499,actual_type_12512,f_12506], null),canonical_f_12514);
if(cljs.core.truth_(elem_12498.addEventListener))
{elem_12498.addEventListener(cljs.core.name.call(null,actual_type_12512),canonical_f_12514);
} else
{elem_12498.attachEvent(cljs.core.name.call(null,actual_type_12512),canonical_f_12514);
}
{
var G__12515 = seq__12485_12507;
var G__12516 = chunk__12487_12508;
var G__12517 = count__12488_12509;
var G__12518 = (i__12489_12510 + 1);
seq__12485_12507 = G__12515;
chunk__12487_12508 = G__12516;
count__12488_12509 = G__12517;
i__12489_12510 = G__12518;
continue;
}
} else
{var temp__4092__auto___12519 = cljs.core.seq.call(null,seq__12485_12507);if(temp__4092__auto___12519)
{var seq__12485_12520__$1 = temp__4092__auto___12519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12485_12520__$1))
{var c__5497__auto___12521 = cljs.core.chunk_first.call(null,seq__12485_12520__$1);{
var G__12522 = cljs.core.chunk_rest.call(null,seq__12485_12520__$1);
var G__12523 = c__5497__auto___12521;
var G__12524 = cljs.core.count.call(null,c__5497__auto___12521);
var G__12525 = 0;
seq__12485_12507 = G__12522;
chunk__12487_12508 = G__12523;
count__12488_12509 = G__12524;
i__12489_12510 = G__12525;
continue;
}
} else
{var vec__12493_12526 = cljs.core.first.call(null,seq__12485_12520__$1);var actual_type_12527 = cljs.core.nth.call(null,vec__12493_12526,0,null);var factory_12528 = cljs.core.nth.call(null,vec__12493_12526,1,null);var canonical_f_12529 = (cljs.core.truth_(selector_12499)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12498,selector_12499):cljs.core.identity).call(null,factory_12528.call(null,f_12506));dommy.core.update_event_listeners_BANG_.call(null,elem_12498,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12499,actual_type_12527,f_12506], null),canonical_f_12529);
if(cljs.core.truth_(elem_12498.addEventListener))
{elem_12498.addEventListener(cljs.core.name.call(null,actual_type_12527),canonical_f_12529);
} else
{elem_12498.attachEvent(cljs.core.name.call(null,actual_type_12527),canonical_f_12529);
}
{
var G__12530 = cljs.core.next.call(null,seq__12485_12520__$1);
var G__12531 = null;
var G__12532 = 0;
var G__12533 = 0;
seq__12485_12507 = G__12530;
chunk__12487_12508 = G__12531;
count__12488_12509 = G__12532;
i__12489_12510 = G__12533;
continue;
}
}
} else
{}
}
break;
}
{
var G__12534 = seq__12475_12500;
var G__12535 = chunk__12482_12501;
var G__12536 = count__12483_12502;
var G__12537 = (i__12484_12503 + 1);
seq__12475_12500 = G__12534;
chunk__12482_12501 = G__12535;
count__12483_12502 = G__12536;
i__12484_12503 = G__12537;
continue;
}
} else
{var temp__4092__auto___12538 = cljs.core.seq.call(null,seq__12475_12500);if(temp__4092__auto___12538)
{var seq__12475_12539__$1 = temp__4092__auto___12538;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12475_12539__$1))
{var c__5497__auto___12540 = cljs.core.chunk_first.call(null,seq__12475_12539__$1);{
var G__12541 = cljs.core.chunk_rest.call(null,seq__12475_12539__$1);
var G__12542 = c__5497__auto___12540;
var G__12543 = cljs.core.count.call(null,c__5497__auto___12540);
var G__12544 = 0;
seq__12475_12500 = G__12541;
chunk__12482_12501 = G__12542;
count__12483_12502 = G__12543;
i__12484_12503 = G__12544;
continue;
}
} else
{var vec__12494_12545 = cljs.core.first.call(null,seq__12475_12539__$1);var orig_type_12546 = cljs.core.nth.call(null,vec__12494_12545,0,null);var f_12547 = cljs.core.nth.call(null,vec__12494_12545,1,null);var seq__12476_12548 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12546,new cljs.core.PersistentArrayMap.fromArray([orig_type_12546,cljs.core.identity], true, false)));var chunk__12478_12549 = null;var count__12479_12550 = 0;var i__12480_12551 = 0;while(true){
if((i__12480_12551 < count__12479_12550))
{var vec__12495_12552 = cljs.core._nth.call(null,chunk__12478_12549,i__12480_12551);var actual_type_12553 = cljs.core.nth.call(null,vec__12495_12552,0,null);var factory_12554 = cljs.core.nth.call(null,vec__12495_12552,1,null);var canonical_f_12555 = (cljs.core.truth_(selector_12499)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12498,selector_12499):cljs.core.identity).call(null,factory_12554.call(null,f_12547));dommy.core.update_event_listeners_BANG_.call(null,elem_12498,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12499,actual_type_12553,f_12547], null),canonical_f_12555);
if(cljs.core.truth_(elem_12498.addEventListener))
{elem_12498.addEventListener(cljs.core.name.call(null,actual_type_12553),canonical_f_12555);
} else
{elem_12498.attachEvent(cljs.core.name.call(null,actual_type_12553),canonical_f_12555);
}
{
var G__12556 = seq__12476_12548;
var G__12557 = chunk__12478_12549;
var G__12558 = count__12479_12550;
var G__12559 = (i__12480_12551 + 1);
seq__12476_12548 = G__12556;
chunk__12478_12549 = G__12557;
count__12479_12550 = G__12558;
i__12480_12551 = G__12559;
continue;
}
} else
{var temp__4092__auto___12560__$1 = cljs.core.seq.call(null,seq__12476_12548);if(temp__4092__auto___12560__$1)
{var seq__12476_12561__$1 = temp__4092__auto___12560__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12476_12561__$1))
{var c__5497__auto___12562 = cljs.core.chunk_first.call(null,seq__12476_12561__$1);{
var G__12563 = cljs.core.chunk_rest.call(null,seq__12476_12561__$1);
var G__12564 = c__5497__auto___12562;
var G__12565 = cljs.core.count.call(null,c__5497__auto___12562);
var G__12566 = 0;
seq__12476_12548 = G__12563;
chunk__12478_12549 = G__12564;
count__12479_12550 = G__12565;
i__12480_12551 = G__12566;
continue;
}
} else
{var vec__12496_12567 = cljs.core.first.call(null,seq__12476_12561__$1);var actual_type_12568 = cljs.core.nth.call(null,vec__12496_12567,0,null);var factory_12569 = cljs.core.nth.call(null,vec__12496_12567,1,null);var canonical_f_12570 = (cljs.core.truth_(selector_12499)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12498,selector_12499):cljs.core.identity).call(null,factory_12569.call(null,f_12547));dommy.core.update_event_listeners_BANG_.call(null,elem_12498,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12499,actual_type_12568,f_12547], null),canonical_f_12570);
if(cljs.core.truth_(elem_12498.addEventListener))
{elem_12498.addEventListener(cljs.core.name.call(null,actual_type_12568),canonical_f_12570);
} else
{elem_12498.attachEvent(cljs.core.name.call(null,actual_type_12568),canonical_f_12570);
}
{
var G__12571 = cljs.core.next.call(null,seq__12476_12561__$1);
var G__12572 = null;
var G__12573 = 0;
var G__12574 = 0;
seq__12476_12548 = G__12571;
chunk__12478_12549 = G__12572;
count__12479_12550 = G__12573;
i__12480_12551 = G__12574;
continue;
}
}
} else
{}
}
break;
}
{
var G__12575 = cljs.core.next.call(null,seq__12475_12539__$1);
var G__12576 = null;
var G__12577 = 0;
var G__12578 = 0;
seq__12475_12500 = G__12575;
chunk__12482_12501 = G__12576;
count__12483_12502 = G__12577;
i__12484_12503 = G__12578;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__12579){
var elem_sel = cljs.core.first(arglist__12579);
var type_fs = cljs.core.rest(arglist__12579);
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
var vec__12603_12626 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_12627 = cljs.core.nth.call(null,vec__12603_12626,0,null);var selector_12628 = cljs.core.nth.call(null,vec__12603_12626,1,null);var seq__12604_12629 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__12611_12630 = null;var count__12612_12631 = 0;var i__12613_12632 = 0;while(true){
if((i__12613_12632 < count__12612_12631))
{var vec__12620_12633 = cljs.core._nth.call(null,chunk__12611_12630,i__12613_12632);var orig_type_12634 = cljs.core.nth.call(null,vec__12620_12633,0,null);var f_12635 = cljs.core.nth.call(null,vec__12620_12633,1,null);var seq__12614_12636 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12634,new cljs.core.PersistentArrayMap.fromArray([orig_type_12634,cljs.core.identity], true, false)));var chunk__12616_12637 = null;var count__12617_12638 = 0;var i__12618_12639 = 0;while(true){
if((i__12618_12639 < count__12617_12638))
{var vec__12621_12640 = cljs.core._nth.call(null,chunk__12616_12637,i__12618_12639);var actual_type_12641 = cljs.core.nth.call(null,vec__12621_12640,0,null);var __12642 = cljs.core.nth.call(null,vec__12621_12640,1,null);var keys_12643 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12628,actual_type_12641,f_12635], null);var canonical_f_12644 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12627),keys_12643);dommy.core.update_event_listeners_BANG_.call(null,elem_12627,dommy.utils.dissoc_in,keys_12643);
if(cljs.core.truth_(elem_12627.removeEventListener))
{elem_12627.removeEventListener(cljs.core.name.call(null,actual_type_12641),canonical_f_12644);
} else
{elem_12627.detachEvent(cljs.core.name.call(null,actual_type_12641),canonical_f_12644);
}
{
var G__12645 = seq__12614_12636;
var G__12646 = chunk__12616_12637;
var G__12647 = count__12617_12638;
var G__12648 = (i__12618_12639 + 1);
seq__12614_12636 = G__12645;
chunk__12616_12637 = G__12646;
count__12617_12638 = G__12647;
i__12618_12639 = G__12648;
continue;
}
} else
{var temp__4092__auto___12649 = cljs.core.seq.call(null,seq__12614_12636);if(temp__4092__auto___12649)
{var seq__12614_12650__$1 = temp__4092__auto___12649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12614_12650__$1))
{var c__5497__auto___12651 = cljs.core.chunk_first.call(null,seq__12614_12650__$1);{
var G__12652 = cljs.core.chunk_rest.call(null,seq__12614_12650__$1);
var G__12653 = c__5497__auto___12651;
var G__12654 = cljs.core.count.call(null,c__5497__auto___12651);
var G__12655 = 0;
seq__12614_12636 = G__12652;
chunk__12616_12637 = G__12653;
count__12617_12638 = G__12654;
i__12618_12639 = G__12655;
continue;
}
} else
{var vec__12622_12656 = cljs.core.first.call(null,seq__12614_12650__$1);var actual_type_12657 = cljs.core.nth.call(null,vec__12622_12656,0,null);var __12658 = cljs.core.nth.call(null,vec__12622_12656,1,null);var keys_12659 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12628,actual_type_12657,f_12635], null);var canonical_f_12660 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12627),keys_12659);dommy.core.update_event_listeners_BANG_.call(null,elem_12627,dommy.utils.dissoc_in,keys_12659);
if(cljs.core.truth_(elem_12627.removeEventListener))
{elem_12627.removeEventListener(cljs.core.name.call(null,actual_type_12657),canonical_f_12660);
} else
{elem_12627.detachEvent(cljs.core.name.call(null,actual_type_12657),canonical_f_12660);
}
{
var G__12661 = cljs.core.next.call(null,seq__12614_12650__$1);
var G__12662 = null;
var G__12663 = 0;
var G__12664 = 0;
seq__12614_12636 = G__12661;
chunk__12616_12637 = G__12662;
count__12617_12638 = G__12663;
i__12618_12639 = G__12664;
continue;
}
}
} else
{}
}
break;
}
{
var G__12665 = seq__12604_12629;
var G__12666 = chunk__12611_12630;
var G__12667 = count__12612_12631;
var G__12668 = (i__12613_12632 + 1);
seq__12604_12629 = G__12665;
chunk__12611_12630 = G__12666;
count__12612_12631 = G__12667;
i__12613_12632 = G__12668;
continue;
}
} else
{var temp__4092__auto___12669 = cljs.core.seq.call(null,seq__12604_12629);if(temp__4092__auto___12669)
{var seq__12604_12670__$1 = temp__4092__auto___12669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12604_12670__$1))
{var c__5497__auto___12671 = cljs.core.chunk_first.call(null,seq__12604_12670__$1);{
var G__12672 = cljs.core.chunk_rest.call(null,seq__12604_12670__$1);
var G__12673 = c__5497__auto___12671;
var G__12674 = cljs.core.count.call(null,c__5497__auto___12671);
var G__12675 = 0;
seq__12604_12629 = G__12672;
chunk__12611_12630 = G__12673;
count__12612_12631 = G__12674;
i__12613_12632 = G__12675;
continue;
}
} else
{var vec__12623_12676 = cljs.core.first.call(null,seq__12604_12670__$1);var orig_type_12677 = cljs.core.nth.call(null,vec__12623_12676,0,null);var f_12678 = cljs.core.nth.call(null,vec__12623_12676,1,null);var seq__12605_12679 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12677,new cljs.core.PersistentArrayMap.fromArray([orig_type_12677,cljs.core.identity], true, false)));var chunk__12607_12680 = null;var count__12608_12681 = 0;var i__12609_12682 = 0;while(true){
if((i__12609_12682 < count__12608_12681))
{var vec__12624_12683 = cljs.core._nth.call(null,chunk__12607_12680,i__12609_12682);var actual_type_12684 = cljs.core.nth.call(null,vec__12624_12683,0,null);var __12685 = cljs.core.nth.call(null,vec__12624_12683,1,null);var keys_12686 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12628,actual_type_12684,f_12678], null);var canonical_f_12687 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12627),keys_12686);dommy.core.update_event_listeners_BANG_.call(null,elem_12627,dommy.utils.dissoc_in,keys_12686);
if(cljs.core.truth_(elem_12627.removeEventListener))
{elem_12627.removeEventListener(cljs.core.name.call(null,actual_type_12684),canonical_f_12687);
} else
{elem_12627.detachEvent(cljs.core.name.call(null,actual_type_12684),canonical_f_12687);
}
{
var G__12688 = seq__12605_12679;
var G__12689 = chunk__12607_12680;
var G__12690 = count__12608_12681;
var G__12691 = (i__12609_12682 + 1);
seq__12605_12679 = G__12688;
chunk__12607_12680 = G__12689;
count__12608_12681 = G__12690;
i__12609_12682 = G__12691;
continue;
}
} else
{var temp__4092__auto___12692__$1 = cljs.core.seq.call(null,seq__12605_12679);if(temp__4092__auto___12692__$1)
{var seq__12605_12693__$1 = temp__4092__auto___12692__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12605_12693__$1))
{var c__5497__auto___12694 = cljs.core.chunk_first.call(null,seq__12605_12693__$1);{
var G__12695 = cljs.core.chunk_rest.call(null,seq__12605_12693__$1);
var G__12696 = c__5497__auto___12694;
var G__12697 = cljs.core.count.call(null,c__5497__auto___12694);
var G__12698 = 0;
seq__12605_12679 = G__12695;
chunk__12607_12680 = G__12696;
count__12608_12681 = G__12697;
i__12609_12682 = G__12698;
continue;
}
} else
{var vec__12625_12699 = cljs.core.first.call(null,seq__12605_12693__$1);var actual_type_12700 = cljs.core.nth.call(null,vec__12625_12699,0,null);var __12701 = cljs.core.nth.call(null,vec__12625_12699,1,null);var keys_12702 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12628,actual_type_12700,f_12678], null);var canonical_f_12703 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12627),keys_12702);dommy.core.update_event_listeners_BANG_.call(null,elem_12627,dommy.utils.dissoc_in,keys_12702);
if(cljs.core.truth_(elem_12627.removeEventListener))
{elem_12627.removeEventListener(cljs.core.name.call(null,actual_type_12700),canonical_f_12703);
} else
{elem_12627.detachEvent(cljs.core.name.call(null,actual_type_12700),canonical_f_12703);
}
{
var G__12704 = cljs.core.next.call(null,seq__12605_12693__$1);
var G__12705 = null;
var G__12706 = 0;
var G__12707 = 0;
seq__12605_12679 = G__12704;
chunk__12607_12680 = G__12705;
count__12608_12681 = G__12706;
i__12609_12682 = G__12707;
continue;
}
}
} else
{}
}
break;
}
{
var G__12708 = cljs.core.next.call(null,seq__12604_12670__$1);
var G__12709 = null;
var G__12710 = 0;
var G__12711 = 0;
seq__12604_12629 = G__12708;
chunk__12611_12630 = G__12709;
count__12612_12631 = G__12710;
i__12613_12632 = G__12711;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__12712){
var elem_sel = cljs.core.first(arglist__12712);
var type_fs = cljs.core.rest(arglist__12712);
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
var vec__12720_12727 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_12728 = cljs.core.nth.call(null,vec__12720_12727,0,null);var selector_12729 = cljs.core.nth.call(null,vec__12720_12727,1,null);var seq__12721_12730 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__12722_12731 = null;var count__12723_12732 = 0;var i__12724_12733 = 0;while(true){
if((i__12724_12733 < count__12723_12732))
{var vec__12725_12734 = cljs.core._nth.call(null,chunk__12722_12731,i__12724_12733);var type_12735 = cljs.core.nth.call(null,vec__12725_12734,0,null);var f_12736 = cljs.core.nth.call(null,vec__12725_12734,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_12735,((function (seq__12721_12730,chunk__12722_12731,count__12723_12732,i__12724_12733,vec__12725_12734,type_12735,f_12736){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_12735,this_fn);
return f_12736.call(null,e);
});})(seq__12721_12730,chunk__12722_12731,count__12723_12732,i__12724_12733,vec__12725_12734,type_12735,f_12736))
);
{
var G__12737 = seq__12721_12730;
var G__12738 = chunk__12722_12731;
var G__12739 = count__12723_12732;
var G__12740 = (i__12724_12733 + 1);
seq__12721_12730 = G__12737;
chunk__12722_12731 = G__12738;
count__12723_12732 = G__12739;
i__12724_12733 = G__12740;
continue;
}
} else
{var temp__4092__auto___12741 = cljs.core.seq.call(null,seq__12721_12730);if(temp__4092__auto___12741)
{var seq__12721_12742__$1 = temp__4092__auto___12741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12721_12742__$1))
{var c__5497__auto___12743 = cljs.core.chunk_first.call(null,seq__12721_12742__$1);{
var G__12744 = cljs.core.chunk_rest.call(null,seq__12721_12742__$1);
var G__12745 = c__5497__auto___12743;
var G__12746 = cljs.core.count.call(null,c__5497__auto___12743);
var G__12747 = 0;
seq__12721_12730 = G__12744;
chunk__12722_12731 = G__12745;
count__12723_12732 = G__12746;
i__12724_12733 = G__12747;
continue;
}
} else
{var vec__12726_12748 = cljs.core.first.call(null,seq__12721_12742__$1);var type_12749 = cljs.core.nth.call(null,vec__12726_12748,0,null);var f_12750 = cljs.core.nth.call(null,vec__12726_12748,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_12749,((function (seq__12721_12730,chunk__12722_12731,count__12723_12732,i__12724_12733,vec__12726_12748,type_12749,f_12750,seq__12721_12742__$1,temp__4092__auto___12741){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_12749,this_fn);
return f_12750.call(null,e);
});})(seq__12721_12730,chunk__12722_12731,count__12723_12732,i__12724_12733,vec__12726_12748,type_12749,f_12750,seq__12721_12742__$1,temp__4092__auto___12741))
);
{
var G__12751 = cljs.core.next.call(null,seq__12721_12742__$1);
var G__12752 = null;
var G__12753 = 0;
var G__12754 = 0;
seq__12721_12730 = G__12751;
chunk__12722_12731 = G__12752;
count__12723_12732 = G__12753;
i__12724_12733 = G__12754;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__12755){
var elem_sel = cljs.core.first(arglist__12755);
var type_fs = cljs.core.rest(arglist__12755);
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
var fire_BANG___delegate = function (node,event_type,p__12756){var vec__12758 = p__12756;var update_event_BANG_ = cljs.core.nth.call(null,vec__12758,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__12756 = null;if (arguments.length > 2) {
  p__12756 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__12756);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__12759){
var node = cljs.core.first(arglist__12759);
arglist__12759 = cljs.core.next(arglist__12759);
var event_type = cljs.core.first(arglist__12759);
var p__12756 = cljs.core.rest(arglist__12759);
return fire_BANG___delegate(node,event_type,p__12756);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
