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
var append_BANG___2 = (function (parent,child){var G__258487 = dommy.template.__GT_node_like.call(null,parent);G__258487.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__258487;
});
var append_BANG___3 = (function() { 
var G__258492__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__258488_258493 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__258489_258494 = null;var count__258490_258495 = 0;var i__258491_258496 = 0;while(true){
if((i__258491_258496 < count__258490_258495))
{var c_258497 = cljs.core._nth.call(null,chunk__258489_258494,i__258491_258496);append_BANG_.call(null,parent__$1,c_258497);
{
var G__258498 = seq__258488_258493;
var G__258499 = chunk__258489_258494;
var G__258500 = count__258490_258495;
var G__258501 = (i__258491_258496 + 1);
seq__258488_258493 = G__258498;
chunk__258489_258494 = G__258499;
count__258490_258495 = G__258500;
i__258491_258496 = G__258501;
continue;
}
} else
{var temp__4092__auto___258502 = cljs.core.seq.call(null,seq__258488_258493);if(temp__4092__auto___258502)
{var seq__258488_258503__$1 = temp__4092__auto___258502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258488_258503__$1))
{var c__4017__auto___258504 = cljs.core.chunk_first.call(null,seq__258488_258503__$1);{
var G__258505 = cljs.core.chunk_rest.call(null,seq__258488_258503__$1);
var G__258506 = c__4017__auto___258504;
var G__258507 = cljs.core.count.call(null,c__4017__auto___258504);
var G__258508 = 0;
seq__258488_258493 = G__258505;
chunk__258489_258494 = G__258506;
count__258490_258495 = G__258507;
i__258491_258496 = G__258508;
continue;
}
} else
{var c_258509 = cljs.core.first.call(null,seq__258488_258503__$1);append_BANG_.call(null,parent__$1,c_258509);
{
var G__258510 = cljs.core.next.call(null,seq__258488_258503__$1);
var G__258511 = null;
var G__258512 = 0;
var G__258513 = 0;
seq__258488_258493 = G__258510;
chunk__258489_258494 = G__258511;
count__258490_258495 = G__258512;
i__258491_258496 = G__258513;
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
var G__258492 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__258492__delegate.call(this,parent,child,more_children);};
G__258492.cljs$lang$maxFixedArity = 2;
G__258492.cljs$lang$applyTo = (function (arglist__258514){
var parent = cljs.core.first(arglist__258514);
arglist__258514 = cljs.core.next(arglist__258514);
var child = cljs.core.first(arglist__258514);
var more_children = cljs.core.rest(arglist__258514);
return G__258492__delegate(parent,child,more_children);
});
G__258492.cljs$core$IFn$_invoke$arity$variadic = G__258492__delegate;
return G__258492;
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
var prepend_BANG___2 = (function (parent,child){var G__258520 = dommy.template.__GT_node_like.call(null,parent);G__258520.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__258520;
});
var prepend_BANG___3 = (function() { 
var G__258525__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__258521_258526 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__258522_258527 = null;var count__258523_258528 = 0;var i__258524_258529 = 0;while(true){
if((i__258524_258529 < count__258523_258528))
{var c_258530 = cljs.core._nth.call(null,chunk__258522_258527,i__258524_258529);prepend_BANG_.call(null,parent__$1,c_258530);
{
var G__258531 = seq__258521_258526;
var G__258532 = chunk__258522_258527;
var G__258533 = count__258523_258528;
var G__258534 = (i__258524_258529 + 1);
seq__258521_258526 = G__258531;
chunk__258522_258527 = G__258532;
count__258523_258528 = G__258533;
i__258524_258529 = G__258534;
continue;
}
} else
{var temp__4092__auto___258535 = cljs.core.seq.call(null,seq__258521_258526);if(temp__4092__auto___258535)
{var seq__258521_258536__$1 = temp__4092__auto___258535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258521_258536__$1))
{var c__4017__auto___258537 = cljs.core.chunk_first.call(null,seq__258521_258536__$1);{
var G__258538 = cljs.core.chunk_rest.call(null,seq__258521_258536__$1);
var G__258539 = c__4017__auto___258537;
var G__258540 = cljs.core.count.call(null,c__4017__auto___258537);
var G__258541 = 0;
seq__258521_258526 = G__258538;
chunk__258522_258527 = G__258539;
count__258523_258528 = G__258540;
i__258524_258529 = G__258541;
continue;
}
} else
{var c_258542 = cljs.core.first.call(null,seq__258521_258536__$1);prepend_BANG_.call(null,parent__$1,c_258542);
{
var G__258543 = cljs.core.next.call(null,seq__258521_258536__$1);
var G__258544 = null;
var G__258545 = 0;
var G__258546 = 0;
seq__258521_258526 = G__258543;
chunk__258522_258527 = G__258544;
count__258523_258528 = G__258545;
i__258524_258529 = G__258546;
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
var G__258525 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__258525__delegate.call(this,parent,child,more_children);};
G__258525.cljs$lang$maxFixedArity = 2;
G__258525.cljs$lang$applyTo = (function (arglist__258547){
var parent = cljs.core.first(arglist__258547);
arglist__258547 = cljs.core.next(arglist__258547);
var child = cljs.core.first(arglist__258547);
var more_children = cljs.core.rest(arglist__258547);
return G__258525__delegate(parent,child,more_children);
});
G__258525.cljs$core$IFn$_invoke$arity$variadic = G__258525__delegate;
return G__258525;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___258548 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___258548))
{var next_258549 = temp__4090__auto___258548;parent.insertBefore(actual_node,next_258549);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__258551 = dommy.template.__GT_node_like.call(null,parent);G__258551.innerHTML = "";
dommy.core.append_BANG_.call(null,G__258551,node_like);
return G__258551;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__258553 = elem__$1.parentNode;G__258553.removeChild(elem__$1);
return G__258553;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__258554_SHARP_){return p1__258554_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__258555_SHARP_){return !((p1__258555_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__258556){var vec__258557 = p__258556;var special_mouse_event = cljs.core.nth.call(null,vec__258557,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__258557,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__258558){
var elem = cljs.core.first(arglist__258558);
arglist__258558 = cljs.core.next(arglist__258558);
var f = cljs.core.first(arglist__258558);
var args = cljs.core.rest(arglist__258558);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__258559_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__258559_SHARP_));
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
var vec__258583_258606 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_258607 = cljs.core.nth.call(null,vec__258583_258606,0,null);var selector_258608 = cljs.core.nth.call(null,vec__258583_258606,1,null);var seq__258584_258609 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__258591_258610 = null;var count__258592_258611 = 0;var i__258593_258612 = 0;while(true){
if((i__258593_258612 < count__258592_258611))
{var vec__258600_258613 = cljs.core._nth.call(null,chunk__258591_258610,i__258593_258612);var orig_type_258614 = cljs.core.nth.call(null,vec__258600_258613,0,null);var f_258615 = cljs.core.nth.call(null,vec__258600_258613,1,null);var seq__258594_258616 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_258614,new cljs.core.PersistentArrayMap.fromArray([orig_type_258614,cljs.core.identity], true, false)));var chunk__258596_258617 = null;var count__258597_258618 = 0;var i__258598_258619 = 0;while(true){
if((i__258598_258619 < count__258597_258618))
{var vec__258601_258620 = cljs.core._nth.call(null,chunk__258596_258617,i__258598_258619);var actual_type_258621 = cljs.core.nth.call(null,vec__258601_258620,0,null);var factory_258622 = cljs.core.nth.call(null,vec__258601_258620,1,null);var canonical_f_258623 = (cljs.core.truth_(selector_258608)?cljs.core.partial.call(null,dommy.core.live_listener,elem_258607,selector_258608):cljs.core.identity).call(null,factory_258622.call(null,f_258615));dommy.core.update_event_listeners_BANG_.call(null,elem_258607,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_258608,actual_type_258621,f_258615], null),canonical_f_258623);
if(cljs.core.truth_(elem_258607.addEventListener))
{elem_258607.addEventListener(cljs.core.name.call(null,actual_type_258621),canonical_f_258623);
} else
{elem_258607.attachEvent(cljs.core.name.call(null,actual_type_258621),canonical_f_258623);
}
{
var G__258624 = seq__258594_258616;
var G__258625 = chunk__258596_258617;
var G__258626 = count__258597_258618;
var G__258627 = (i__258598_258619 + 1);
seq__258594_258616 = G__258624;
chunk__258596_258617 = G__258625;
count__258597_258618 = G__258626;
i__258598_258619 = G__258627;
continue;
}
} else
{var temp__4092__auto___258628 = cljs.core.seq.call(null,seq__258594_258616);if(temp__4092__auto___258628)
{var seq__258594_258629__$1 = temp__4092__auto___258628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258594_258629__$1))
{var c__4017__auto___258630 = cljs.core.chunk_first.call(null,seq__258594_258629__$1);{
var G__258631 = cljs.core.chunk_rest.call(null,seq__258594_258629__$1);
var G__258632 = c__4017__auto___258630;
var G__258633 = cljs.core.count.call(null,c__4017__auto___258630);
var G__258634 = 0;
seq__258594_258616 = G__258631;
chunk__258596_258617 = G__258632;
count__258597_258618 = G__258633;
i__258598_258619 = G__258634;
continue;
}
} else
{var vec__258602_258635 = cljs.core.first.call(null,seq__258594_258629__$1);var actual_type_258636 = cljs.core.nth.call(null,vec__258602_258635,0,null);var factory_258637 = cljs.core.nth.call(null,vec__258602_258635,1,null);var canonical_f_258638 = (cljs.core.truth_(selector_258608)?cljs.core.partial.call(null,dommy.core.live_listener,elem_258607,selector_258608):cljs.core.identity).call(null,factory_258637.call(null,f_258615));dommy.core.update_event_listeners_BANG_.call(null,elem_258607,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_258608,actual_type_258636,f_258615], null),canonical_f_258638);
if(cljs.core.truth_(elem_258607.addEventListener))
{elem_258607.addEventListener(cljs.core.name.call(null,actual_type_258636),canonical_f_258638);
} else
{elem_258607.attachEvent(cljs.core.name.call(null,actual_type_258636),canonical_f_258638);
}
{
var G__258639 = cljs.core.next.call(null,seq__258594_258629__$1);
var G__258640 = null;
var G__258641 = 0;
var G__258642 = 0;
seq__258594_258616 = G__258639;
chunk__258596_258617 = G__258640;
count__258597_258618 = G__258641;
i__258598_258619 = G__258642;
continue;
}
}
} else
{}
}
break;
}
{
var G__258643 = seq__258584_258609;
var G__258644 = chunk__258591_258610;
var G__258645 = count__258592_258611;
var G__258646 = (i__258593_258612 + 1);
seq__258584_258609 = G__258643;
chunk__258591_258610 = G__258644;
count__258592_258611 = G__258645;
i__258593_258612 = G__258646;
continue;
}
} else
{var temp__4092__auto___258647 = cljs.core.seq.call(null,seq__258584_258609);if(temp__4092__auto___258647)
{var seq__258584_258648__$1 = temp__4092__auto___258647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258584_258648__$1))
{var c__4017__auto___258649 = cljs.core.chunk_first.call(null,seq__258584_258648__$1);{
var G__258650 = cljs.core.chunk_rest.call(null,seq__258584_258648__$1);
var G__258651 = c__4017__auto___258649;
var G__258652 = cljs.core.count.call(null,c__4017__auto___258649);
var G__258653 = 0;
seq__258584_258609 = G__258650;
chunk__258591_258610 = G__258651;
count__258592_258611 = G__258652;
i__258593_258612 = G__258653;
continue;
}
} else
{var vec__258603_258654 = cljs.core.first.call(null,seq__258584_258648__$1);var orig_type_258655 = cljs.core.nth.call(null,vec__258603_258654,0,null);var f_258656 = cljs.core.nth.call(null,vec__258603_258654,1,null);var seq__258585_258657 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_258655,new cljs.core.PersistentArrayMap.fromArray([orig_type_258655,cljs.core.identity], true, false)));var chunk__258587_258658 = null;var count__258588_258659 = 0;var i__258589_258660 = 0;while(true){
if((i__258589_258660 < count__258588_258659))
{var vec__258604_258661 = cljs.core._nth.call(null,chunk__258587_258658,i__258589_258660);var actual_type_258662 = cljs.core.nth.call(null,vec__258604_258661,0,null);var factory_258663 = cljs.core.nth.call(null,vec__258604_258661,1,null);var canonical_f_258664 = (cljs.core.truth_(selector_258608)?cljs.core.partial.call(null,dommy.core.live_listener,elem_258607,selector_258608):cljs.core.identity).call(null,factory_258663.call(null,f_258656));dommy.core.update_event_listeners_BANG_.call(null,elem_258607,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_258608,actual_type_258662,f_258656], null),canonical_f_258664);
if(cljs.core.truth_(elem_258607.addEventListener))
{elem_258607.addEventListener(cljs.core.name.call(null,actual_type_258662),canonical_f_258664);
} else
{elem_258607.attachEvent(cljs.core.name.call(null,actual_type_258662),canonical_f_258664);
}
{
var G__258665 = seq__258585_258657;
var G__258666 = chunk__258587_258658;
var G__258667 = count__258588_258659;
var G__258668 = (i__258589_258660 + 1);
seq__258585_258657 = G__258665;
chunk__258587_258658 = G__258666;
count__258588_258659 = G__258667;
i__258589_258660 = G__258668;
continue;
}
} else
{var temp__4092__auto___258669__$1 = cljs.core.seq.call(null,seq__258585_258657);if(temp__4092__auto___258669__$1)
{var seq__258585_258670__$1 = temp__4092__auto___258669__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258585_258670__$1))
{var c__4017__auto___258671 = cljs.core.chunk_first.call(null,seq__258585_258670__$1);{
var G__258672 = cljs.core.chunk_rest.call(null,seq__258585_258670__$1);
var G__258673 = c__4017__auto___258671;
var G__258674 = cljs.core.count.call(null,c__4017__auto___258671);
var G__258675 = 0;
seq__258585_258657 = G__258672;
chunk__258587_258658 = G__258673;
count__258588_258659 = G__258674;
i__258589_258660 = G__258675;
continue;
}
} else
{var vec__258605_258676 = cljs.core.first.call(null,seq__258585_258670__$1);var actual_type_258677 = cljs.core.nth.call(null,vec__258605_258676,0,null);var factory_258678 = cljs.core.nth.call(null,vec__258605_258676,1,null);var canonical_f_258679 = (cljs.core.truth_(selector_258608)?cljs.core.partial.call(null,dommy.core.live_listener,elem_258607,selector_258608):cljs.core.identity).call(null,factory_258678.call(null,f_258656));dommy.core.update_event_listeners_BANG_.call(null,elem_258607,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_258608,actual_type_258677,f_258656], null),canonical_f_258679);
if(cljs.core.truth_(elem_258607.addEventListener))
{elem_258607.addEventListener(cljs.core.name.call(null,actual_type_258677),canonical_f_258679);
} else
{elem_258607.attachEvent(cljs.core.name.call(null,actual_type_258677),canonical_f_258679);
}
{
var G__258680 = cljs.core.next.call(null,seq__258585_258670__$1);
var G__258681 = null;
var G__258682 = 0;
var G__258683 = 0;
seq__258585_258657 = G__258680;
chunk__258587_258658 = G__258681;
count__258588_258659 = G__258682;
i__258589_258660 = G__258683;
continue;
}
}
} else
{}
}
break;
}
{
var G__258684 = cljs.core.next.call(null,seq__258584_258648__$1);
var G__258685 = null;
var G__258686 = 0;
var G__258687 = 0;
seq__258584_258609 = G__258684;
chunk__258591_258610 = G__258685;
count__258592_258611 = G__258686;
i__258593_258612 = G__258687;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__258688){
var elem_sel = cljs.core.first(arglist__258688);
var type_fs = cljs.core.rest(arglist__258688);
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
var vec__258712_258735 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_258736 = cljs.core.nth.call(null,vec__258712_258735,0,null);var selector_258737 = cljs.core.nth.call(null,vec__258712_258735,1,null);var seq__258713_258738 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__258720_258739 = null;var count__258721_258740 = 0;var i__258722_258741 = 0;while(true){
if((i__258722_258741 < count__258721_258740))
{var vec__258729_258742 = cljs.core._nth.call(null,chunk__258720_258739,i__258722_258741);var orig_type_258743 = cljs.core.nth.call(null,vec__258729_258742,0,null);var f_258744 = cljs.core.nth.call(null,vec__258729_258742,1,null);var seq__258723_258745 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_258743,new cljs.core.PersistentArrayMap.fromArray([orig_type_258743,cljs.core.identity], true, false)));var chunk__258725_258746 = null;var count__258726_258747 = 0;var i__258727_258748 = 0;while(true){
if((i__258727_258748 < count__258726_258747))
{var vec__258730_258749 = cljs.core._nth.call(null,chunk__258725_258746,i__258727_258748);var actual_type_258750 = cljs.core.nth.call(null,vec__258730_258749,0,null);var __258751 = cljs.core.nth.call(null,vec__258730_258749,1,null);var keys_258752 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_258737,actual_type_258750,f_258744], null);var canonical_f_258753 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_258736),keys_258752);dommy.core.update_event_listeners_BANG_.call(null,elem_258736,dommy.utils.dissoc_in,keys_258752);
if(cljs.core.truth_(elem_258736.removeEventListener))
{elem_258736.removeEventListener(cljs.core.name.call(null,actual_type_258750),canonical_f_258753);
} else
{elem_258736.detachEvent(cljs.core.name.call(null,actual_type_258750),canonical_f_258753);
}
{
var G__258754 = seq__258723_258745;
var G__258755 = chunk__258725_258746;
var G__258756 = count__258726_258747;
var G__258757 = (i__258727_258748 + 1);
seq__258723_258745 = G__258754;
chunk__258725_258746 = G__258755;
count__258726_258747 = G__258756;
i__258727_258748 = G__258757;
continue;
}
} else
{var temp__4092__auto___258758 = cljs.core.seq.call(null,seq__258723_258745);if(temp__4092__auto___258758)
{var seq__258723_258759__$1 = temp__4092__auto___258758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258723_258759__$1))
{var c__4017__auto___258760 = cljs.core.chunk_first.call(null,seq__258723_258759__$1);{
var G__258761 = cljs.core.chunk_rest.call(null,seq__258723_258759__$1);
var G__258762 = c__4017__auto___258760;
var G__258763 = cljs.core.count.call(null,c__4017__auto___258760);
var G__258764 = 0;
seq__258723_258745 = G__258761;
chunk__258725_258746 = G__258762;
count__258726_258747 = G__258763;
i__258727_258748 = G__258764;
continue;
}
} else
{var vec__258731_258765 = cljs.core.first.call(null,seq__258723_258759__$1);var actual_type_258766 = cljs.core.nth.call(null,vec__258731_258765,0,null);var __258767 = cljs.core.nth.call(null,vec__258731_258765,1,null);var keys_258768 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_258737,actual_type_258766,f_258744], null);var canonical_f_258769 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_258736),keys_258768);dommy.core.update_event_listeners_BANG_.call(null,elem_258736,dommy.utils.dissoc_in,keys_258768);
if(cljs.core.truth_(elem_258736.removeEventListener))
{elem_258736.removeEventListener(cljs.core.name.call(null,actual_type_258766),canonical_f_258769);
} else
{elem_258736.detachEvent(cljs.core.name.call(null,actual_type_258766),canonical_f_258769);
}
{
var G__258770 = cljs.core.next.call(null,seq__258723_258759__$1);
var G__258771 = null;
var G__258772 = 0;
var G__258773 = 0;
seq__258723_258745 = G__258770;
chunk__258725_258746 = G__258771;
count__258726_258747 = G__258772;
i__258727_258748 = G__258773;
continue;
}
}
} else
{}
}
break;
}
{
var G__258774 = seq__258713_258738;
var G__258775 = chunk__258720_258739;
var G__258776 = count__258721_258740;
var G__258777 = (i__258722_258741 + 1);
seq__258713_258738 = G__258774;
chunk__258720_258739 = G__258775;
count__258721_258740 = G__258776;
i__258722_258741 = G__258777;
continue;
}
} else
{var temp__4092__auto___258778 = cljs.core.seq.call(null,seq__258713_258738);if(temp__4092__auto___258778)
{var seq__258713_258779__$1 = temp__4092__auto___258778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258713_258779__$1))
{var c__4017__auto___258780 = cljs.core.chunk_first.call(null,seq__258713_258779__$1);{
var G__258781 = cljs.core.chunk_rest.call(null,seq__258713_258779__$1);
var G__258782 = c__4017__auto___258780;
var G__258783 = cljs.core.count.call(null,c__4017__auto___258780);
var G__258784 = 0;
seq__258713_258738 = G__258781;
chunk__258720_258739 = G__258782;
count__258721_258740 = G__258783;
i__258722_258741 = G__258784;
continue;
}
} else
{var vec__258732_258785 = cljs.core.first.call(null,seq__258713_258779__$1);var orig_type_258786 = cljs.core.nth.call(null,vec__258732_258785,0,null);var f_258787 = cljs.core.nth.call(null,vec__258732_258785,1,null);var seq__258714_258788 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_258786,new cljs.core.PersistentArrayMap.fromArray([orig_type_258786,cljs.core.identity], true, false)));var chunk__258716_258789 = null;var count__258717_258790 = 0;var i__258718_258791 = 0;while(true){
if((i__258718_258791 < count__258717_258790))
{var vec__258733_258792 = cljs.core._nth.call(null,chunk__258716_258789,i__258718_258791);var actual_type_258793 = cljs.core.nth.call(null,vec__258733_258792,0,null);var __258794 = cljs.core.nth.call(null,vec__258733_258792,1,null);var keys_258795 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_258737,actual_type_258793,f_258787], null);var canonical_f_258796 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_258736),keys_258795);dommy.core.update_event_listeners_BANG_.call(null,elem_258736,dommy.utils.dissoc_in,keys_258795);
if(cljs.core.truth_(elem_258736.removeEventListener))
{elem_258736.removeEventListener(cljs.core.name.call(null,actual_type_258793),canonical_f_258796);
} else
{elem_258736.detachEvent(cljs.core.name.call(null,actual_type_258793),canonical_f_258796);
}
{
var G__258797 = seq__258714_258788;
var G__258798 = chunk__258716_258789;
var G__258799 = count__258717_258790;
var G__258800 = (i__258718_258791 + 1);
seq__258714_258788 = G__258797;
chunk__258716_258789 = G__258798;
count__258717_258790 = G__258799;
i__258718_258791 = G__258800;
continue;
}
} else
{var temp__4092__auto___258801__$1 = cljs.core.seq.call(null,seq__258714_258788);if(temp__4092__auto___258801__$1)
{var seq__258714_258802__$1 = temp__4092__auto___258801__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258714_258802__$1))
{var c__4017__auto___258803 = cljs.core.chunk_first.call(null,seq__258714_258802__$1);{
var G__258804 = cljs.core.chunk_rest.call(null,seq__258714_258802__$1);
var G__258805 = c__4017__auto___258803;
var G__258806 = cljs.core.count.call(null,c__4017__auto___258803);
var G__258807 = 0;
seq__258714_258788 = G__258804;
chunk__258716_258789 = G__258805;
count__258717_258790 = G__258806;
i__258718_258791 = G__258807;
continue;
}
} else
{var vec__258734_258808 = cljs.core.first.call(null,seq__258714_258802__$1);var actual_type_258809 = cljs.core.nth.call(null,vec__258734_258808,0,null);var __258810 = cljs.core.nth.call(null,vec__258734_258808,1,null);var keys_258811 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_258737,actual_type_258809,f_258787], null);var canonical_f_258812 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_258736),keys_258811);dommy.core.update_event_listeners_BANG_.call(null,elem_258736,dommy.utils.dissoc_in,keys_258811);
if(cljs.core.truth_(elem_258736.removeEventListener))
{elem_258736.removeEventListener(cljs.core.name.call(null,actual_type_258809),canonical_f_258812);
} else
{elem_258736.detachEvent(cljs.core.name.call(null,actual_type_258809),canonical_f_258812);
}
{
var G__258813 = cljs.core.next.call(null,seq__258714_258802__$1);
var G__258814 = null;
var G__258815 = 0;
var G__258816 = 0;
seq__258714_258788 = G__258813;
chunk__258716_258789 = G__258814;
count__258717_258790 = G__258815;
i__258718_258791 = G__258816;
continue;
}
}
} else
{}
}
break;
}
{
var G__258817 = cljs.core.next.call(null,seq__258713_258779__$1);
var G__258818 = null;
var G__258819 = 0;
var G__258820 = 0;
seq__258713_258738 = G__258817;
chunk__258720_258739 = G__258818;
count__258721_258740 = G__258819;
i__258722_258741 = G__258820;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__258821){
var elem_sel = cljs.core.first(arglist__258821);
var type_fs = cljs.core.rest(arglist__258821);
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
var vec__258829_258836 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_258837 = cljs.core.nth.call(null,vec__258829_258836,0,null);var selector_258838 = cljs.core.nth.call(null,vec__258829_258836,1,null);var seq__258830_258839 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__258831_258840 = null;var count__258832_258841 = 0;var i__258833_258842 = 0;while(true){
if((i__258833_258842 < count__258832_258841))
{var vec__258834_258843 = cljs.core._nth.call(null,chunk__258831_258840,i__258833_258842);var type_258844 = cljs.core.nth.call(null,vec__258834_258843,0,null);var f_258845 = cljs.core.nth.call(null,vec__258834_258843,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_258844,((function (seq__258830_258839,chunk__258831_258840,count__258832_258841,i__258833_258842,vec__258834_258843,type_258844,f_258845){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_258844,this_fn);
return f_258845.call(null,e);
});})(seq__258830_258839,chunk__258831_258840,count__258832_258841,i__258833_258842,vec__258834_258843,type_258844,f_258845))
);
{
var G__258846 = seq__258830_258839;
var G__258847 = chunk__258831_258840;
var G__258848 = count__258832_258841;
var G__258849 = (i__258833_258842 + 1);
seq__258830_258839 = G__258846;
chunk__258831_258840 = G__258847;
count__258832_258841 = G__258848;
i__258833_258842 = G__258849;
continue;
}
} else
{var temp__4092__auto___258850 = cljs.core.seq.call(null,seq__258830_258839);if(temp__4092__auto___258850)
{var seq__258830_258851__$1 = temp__4092__auto___258850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258830_258851__$1))
{var c__4017__auto___258852 = cljs.core.chunk_first.call(null,seq__258830_258851__$1);{
var G__258853 = cljs.core.chunk_rest.call(null,seq__258830_258851__$1);
var G__258854 = c__4017__auto___258852;
var G__258855 = cljs.core.count.call(null,c__4017__auto___258852);
var G__258856 = 0;
seq__258830_258839 = G__258853;
chunk__258831_258840 = G__258854;
count__258832_258841 = G__258855;
i__258833_258842 = G__258856;
continue;
}
} else
{var vec__258835_258857 = cljs.core.first.call(null,seq__258830_258851__$1);var type_258858 = cljs.core.nth.call(null,vec__258835_258857,0,null);var f_258859 = cljs.core.nth.call(null,vec__258835_258857,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_258858,((function (seq__258830_258839,chunk__258831_258840,count__258832_258841,i__258833_258842,vec__258835_258857,type_258858,f_258859,seq__258830_258851__$1,temp__4092__auto___258850){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_258858,this_fn);
return f_258859.call(null,e);
});})(seq__258830_258839,chunk__258831_258840,count__258832_258841,i__258833_258842,vec__258835_258857,type_258858,f_258859,seq__258830_258851__$1,temp__4092__auto___258850))
);
{
var G__258860 = cljs.core.next.call(null,seq__258830_258851__$1);
var G__258861 = null;
var G__258862 = 0;
var G__258863 = 0;
seq__258830_258839 = G__258860;
chunk__258831_258840 = G__258861;
count__258832_258841 = G__258862;
i__258833_258842 = G__258863;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__258864){
var elem_sel = cljs.core.first(arglist__258864);
var type_fs = cljs.core.rest(arglist__258864);
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
var fire_BANG___delegate = function (node,event_type,p__258865){var vec__258867 = p__258865;var update_event_BANG_ = cljs.core.nth.call(null,vec__258867,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__258865 = null;if (arguments.length > 2) {
  p__258865 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__258865);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__258868){
var node = cljs.core.first(arglist__258868);
arglist__258868 = cljs.core.next(arglist__258868);
var event_type = cljs.core.first(arglist__258868);
var p__258865 = cljs.core.rest(arglist__258868);
return fire_BANG___delegate(node,event_type,p__258865);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
