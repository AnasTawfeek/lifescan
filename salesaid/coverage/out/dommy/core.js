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
var append_BANG___2 = (function (parent,child){var G__429412 = dommy.template.__GT_node_like.call(null,parent);G__429412.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__429412;
});
var append_BANG___3 = (function() { 
var G__429417__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__429413_429418 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__429414_429419 = null;var count__429415_429420 = 0;var i__429416_429421 = 0;while(true){
if((i__429416_429421 < count__429415_429420))
{var c_429422 = cljs.core._nth.call(null,chunk__429414_429419,i__429416_429421);append_BANG_.call(null,parent__$1,c_429422);
{
var G__429423 = seq__429413_429418;
var G__429424 = chunk__429414_429419;
var G__429425 = count__429415_429420;
var G__429426 = (i__429416_429421 + 1);
seq__429413_429418 = G__429423;
chunk__429414_429419 = G__429424;
count__429415_429420 = G__429425;
i__429416_429421 = G__429426;
continue;
}
} else
{var temp__4092__auto___429427 = cljs.core.seq.call(null,seq__429413_429418);if(temp__4092__auto___429427)
{var seq__429413_429428__$1 = temp__4092__auto___429427;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429413_429428__$1))
{var c__4017__auto___429429 = cljs.core.chunk_first.call(null,seq__429413_429428__$1);{
var G__429430 = cljs.core.chunk_rest.call(null,seq__429413_429428__$1);
var G__429431 = c__4017__auto___429429;
var G__429432 = cljs.core.count.call(null,c__4017__auto___429429);
var G__429433 = 0;
seq__429413_429418 = G__429430;
chunk__429414_429419 = G__429431;
count__429415_429420 = G__429432;
i__429416_429421 = G__429433;
continue;
}
} else
{var c_429434 = cljs.core.first.call(null,seq__429413_429428__$1);append_BANG_.call(null,parent__$1,c_429434);
{
var G__429435 = cljs.core.next.call(null,seq__429413_429428__$1);
var G__429436 = null;
var G__429437 = 0;
var G__429438 = 0;
seq__429413_429418 = G__429435;
chunk__429414_429419 = G__429436;
count__429415_429420 = G__429437;
i__429416_429421 = G__429438;
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
var G__429417 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__429417__delegate.call(this,parent,child,more_children);};
G__429417.cljs$lang$maxFixedArity = 2;
G__429417.cljs$lang$applyTo = (function (arglist__429439){
var parent = cljs.core.first(arglist__429439);
arglist__429439 = cljs.core.next(arglist__429439);
var child = cljs.core.first(arglist__429439);
var more_children = cljs.core.rest(arglist__429439);
return G__429417__delegate(parent,child,more_children);
});
G__429417.cljs$core$IFn$_invoke$arity$variadic = G__429417__delegate;
return G__429417;
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
var prepend_BANG___2 = (function (parent,child){var G__429445 = dommy.template.__GT_node_like.call(null,parent);G__429445.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__429445;
});
var prepend_BANG___3 = (function() { 
var G__429450__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__429446_429451 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__429447_429452 = null;var count__429448_429453 = 0;var i__429449_429454 = 0;while(true){
if((i__429449_429454 < count__429448_429453))
{var c_429455 = cljs.core._nth.call(null,chunk__429447_429452,i__429449_429454);prepend_BANG_.call(null,parent__$1,c_429455);
{
var G__429456 = seq__429446_429451;
var G__429457 = chunk__429447_429452;
var G__429458 = count__429448_429453;
var G__429459 = (i__429449_429454 + 1);
seq__429446_429451 = G__429456;
chunk__429447_429452 = G__429457;
count__429448_429453 = G__429458;
i__429449_429454 = G__429459;
continue;
}
} else
{var temp__4092__auto___429460 = cljs.core.seq.call(null,seq__429446_429451);if(temp__4092__auto___429460)
{var seq__429446_429461__$1 = temp__4092__auto___429460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429446_429461__$1))
{var c__4017__auto___429462 = cljs.core.chunk_first.call(null,seq__429446_429461__$1);{
var G__429463 = cljs.core.chunk_rest.call(null,seq__429446_429461__$1);
var G__429464 = c__4017__auto___429462;
var G__429465 = cljs.core.count.call(null,c__4017__auto___429462);
var G__429466 = 0;
seq__429446_429451 = G__429463;
chunk__429447_429452 = G__429464;
count__429448_429453 = G__429465;
i__429449_429454 = G__429466;
continue;
}
} else
{var c_429467 = cljs.core.first.call(null,seq__429446_429461__$1);prepend_BANG_.call(null,parent__$1,c_429467);
{
var G__429468 = cljs.core.next.call(null,seq__429446_429461__$1);
var G__429469 = null;
var G__429470 = 0;
var G__429471 = 0;
seq__429446_429451 = G__429468;
chunk__429447_429452 = G__429469;
count__429448_429453 = G__429470;
i__429449_429454 = G__429471;
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
var G__429450 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__429450__delegate.call(this,parent,child,more_children);};
G__429450.cljs$lang$maxFixedArity = 2;
G__429450.cljs$lang$applyTo = (function (arglist__429472){
var parent = cljs.core.first(arglist__429472);
arglist__429472 = cljs.core.next(arglist__429472);
var child = cljs.core.first(arglist__429472);
var more_children = cljs.core.rest(arglist__429472);
return G__429450__delegate(parent,child,more_children);
});
G__429450.cljs$core$IFn$_invoke$arity$variadic = G__429450__delegate;
return G__429450;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___429473 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___429473))
{var next_429474 = temp__4090__auto___429473;parent.insertBefore(actual_node,next_429474);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__429476 = dommy.template.__GT_node_like.call(null,parent);G__429476.innerHTML = "";
dommy.core.append_BANG_.call(null,G__429476,node_like);
return G__429476;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__429478 = elem__$1.parentNode;G__429478.removeChild(elem__$1);
return G__429478;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__429479_SHARP_){return p1__429479_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__429480_SHARP_){return !((p1__429480_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__429481){var vec__429482 = p__429481;var special_mouse_event = cljs.core.nth.call(null,vec__429482,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__429482,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__429483){
var elem = cljs.core.first(arglist__429483);
arglist__429483 = cljs.core.next(arglist__429483);
var f = cljs.core.first(arglist__429483);
var args = cljs.core.rest(arglist__429483);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__429484_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__429484_SHARP_));
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
var vec__429508_429531 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_429532 = cljs.core.nth.call(null,vec__429508_429531,0,null);var selector_429533 = cljs.core.nth.call(null,vec__429508_429531,1,null);var seq__429509_429534 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__429516_429535 = null;var count__429517_429536 = 0;var i__429518_429537 = 0;while(true){
if((i__429518_429537 < count__429517_429536))
{var vec__429525_429538 = cljs.core._nth.call(null,chunk__429516_429535,i__429518_429537);var orig_type_429539 = cljs.core.nth.call(null,vec__429525_429538,0,null);var f_429540 = cljs.core.nth.call(null,vec__429525_429538,1,null);var seq__429519_429541 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_429539,new cljs.core.PersistentArrayMap.fromArray([orig_type_429539,cljs.core.identity], true, false)));var chunk__429521_429542 = null;var count__429522_429543 = 0;var i__429523_429544 = 0;while(true){
if((i__429523_429544 < count__429522_429543))
{var vec__429526_429545 = cljs.core._nth.call(null,chunk__429521_429542,i__429523_429544);var actual_type_429546 = cljs.core.nth.call(null,vec__429526_429545,0,null);var factory_429547 = cljs.core.nth.call(null,vec__429526_429545,1,null);var canonical_f_429548 = (cljs.core.truth_(selector_429533)?cljs.core.partial.call(null,dommy.core.live_listener,elem_429532,selector_429533):cljs.core.identity).call(null,factory_429547.call(null,f_429540));dommy.core.update_event_listeners_BANG_.call(null,elem_429532,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_429533,actual_type_429546,f_429540], null),canonical_f_429548);
if(cljs.core.truth_(elem_429532.addEventListener))
{elem_429532.addEventListener(cljs.core.name.call(null,actual_type_429546),canonical_f_429548);
} else
{elem_429532.attachEvent(cljs.core.name.call(null,actual_type_429546),canonical_f_429548);
}
{
var G__429549 = seq__429519_429541;
var G__429550 = chunk__429521_429542;
var G__429551 = count__429522_429543;
var G__429552 = (i__429523_429544 + 1);
seq__429519_429541 = G__429549;
chunk__429521_429542 = G__429550;
count__429522_429543 = G__429551;
i__429523_429544 = G__429552;
continue;
}
} else
{var temp__4092__auto___429553 = cljs.core.seq.call(null,seq__429519_429541);if(temp__4092__auto___429553)
{var seq__429519_429554__$1 = temp__4092__auto___429553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429519_429554__$1))
{var c__4017__auto___429555 = cljs.core.chunk_first.call(null,seq__429519_429554__$1);{
var G__429556 = cljs.core.chunk_rest.call(null,seq__429519_429554__$1);
var G__429557 = c__4017__auto___429555;
var G__429558 = cljs.core.count.call(null,c__4017__auto___429555);
var G__429559 = 0;
seq__429519_429541 = G__429556;
chunk__429521_429542 = G__429557;
count__429522_429543 = G__429558;
i__429523_429544 = G__429559;
continue;
}
} else
{var vec__429527_429560 = cljs.core.first.call(null,seq__429519_429554__$1);var actual_type_429561 = cljs.core.nth.call(null,vec__429527_429560,0,null);var factory_429562 = cljs.core.nth.call(null,vec__429527_429560,1,null);var canonical_f_429563 = (cljs.core.truth_(selector_429533)?cljs.core.partial.call(null,dommy.core.live_listener,elem_429532,selector_429533):cljs.core.identity).call(null,factory_429562.call(null,f_429540));dommy.core.update_event_listeners_BANG_.call(null,elem_429532,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_429533,actual_type_429561,f_429540], null),canonical_f_429563);
if(cljs.core.truth_(elem_429532.addEventListener))
{elem_429532.addEventListener(cljs.core.name.call(null,actual_type_429561),canonical_f_429563);
} else
{elem_429532.attachEvent(cljs.core.name.call(null,actual_type_429561),canonical_f_429563);
}
{
var G__429564 = cljs.core.next.call(null,seq__429519_429554__$1);
var G__429565 = null;
var G__429566 = 0;
var G__429567 = 0;
seq__429519_429541 = G__429564;
chunk__429521_429542 = G__429565;
count__429522_429543 = G__429566;
i__429523_429544 = G__429567;
continue;
}
}
} else
{}
}
break;
}
{
var G__429568 = seq__429509_429534;
var G__429569 = chunk__429516_429535;
var G__429570 = count__429517_429536;
var G__429571 = (i__429518_429537 + 1);
seq__429509_429534 = G__429568;
chunk__429516_429535 = G__429569;
count__429517_429536 = G__429570;
i__429518_429537 = G__429571;
continue;
}
} else
{var temp__4092__auto___429572 = cljs.core.seq.call(null,seq__429509_429534);if(temp__4092__auto___429572)
{var seq__429509_429573__$1 = temp__4092__auto___429572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429509_429573__$1))
{var c__4017__auto___429574 = cljs.core.chunk_first.call(null,seq__429509_429573__$1);{
var G__429575 = cljs.core.chunk_rest.call(null,seq__429509_429573__$1);
var G__429576 = c__4017__auto___429574;
var G__429577 = cljs.core.count.call(null,c__4017__auto___429574);
var G__429578 = 0;
seq__429509_429534 = G__429575;
chunk__429516_429535 = G__429576;
count__429517_429536 = G__429577;
i__429518_429537 = G__429578;
continue;
}
} else
{var vec__429528_429579 = cljs.core.first.call(null,seq__429509_429573__$1);var orig_type_429580 = cljs.core.nth.call(null,vec__429528_429579,0,null);var f_429581 = cljs.core.nth.call(null,vec__429528_429579,1,null);var seq__429510_429582 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_429580,new cljs.core.PersistentArrayMap.fromArray([orig_type_429580,cljs.core.identity], true, false)));var chunk__429512_429583 = null;var count__429513_429584 = 0;var i__429514_429585 = 0;while(true){
if((i__429514_429585 < count__429513_429584))
{var vec__429529_429586 = cljs.core._nth.call(null,chunk__429512_429583,i__429514_429585);var actual_type_429587 = cljs.core.nth.call(null,vec__429529_429586,0,null);var factory_429588 = cljs.core.nth.call(null,vec__429529_429586,1,null);var canonical_f_429589 = (cljs.core.truth_(selector_429533)?cljs.core.partial.call(null,dommy.core.live_listener,elem_429532,selector_429533):cljs.core.identity).call(null,factory_429588.call(null,f_429581));dommy.core.update_event_listeners_BANG_.call(null,elem_429532,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_429533,actual_type_429587,f_429581], null),canonical_f_429589);
if(cljs.core.truth_(elem_429532.addEventListener))
{elem_429532.addEventListener(cljs.core.name.call(null,actual_type_429587),canonical_f_429589);
} else
{elem_429532.attachEvent(cljs.core.name.call(null,actual_type_429587),canonical_f_429589);
}
{
var G__429590 = seq__429510_429582;
var G__429591 = chunk__429512_429583;
var G__429592 = count__429513_429584;
var G__429593 = (i__429514_429585 + 1);
seq__429510_429582 = G__429590;
chunk__429512_429583 = G__429591;
count__429513_429584 = G__429592;
i__429514_429585 = G__429593;
continue;
}
} else
{var temp__4092__auto___429594__$1 = cljs.core.seq.call(null,seq__429510_429582);if(temp__4092__auto___429594__$1)
{var seq__429510_429595__$1 = temp__4092__auto___429594__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429510_429595__$1))
{var c__4017__auto___429596 = cljs.core.chunk_first.call(null,seq__429510_429595__$1);{
var G__429597 = cljs.core.chunk_rest.call(null,seq__429510_429595__$1);
var G__429598 = c__4017__auto___429596;
var G__429599 = cljs.core.count.call(null,c__4017__auto___429596);
var G__429600 = 0;
seq__429510_429582 = G__429597;
chunk__429512_429583 = G__429598;
count__429513_429584 = G__429599;
i__429514_429585 = G__429600;
continue;
}
} else
{var vec__429530_429601 = cljs.core.first.call(null,seq__429510_429595__$1);var actual_type_429602 = cljs.core.nth.call(null,vec__429530_429601,0,null);var factory_429603 = cljs.core.nth.call(null,vec__429530_429601,1,null);var canonical_f_429604 = (cljs.core.truth_(selector_429533)?cljs.core.partial.call(null,dommy.core.live_listener,elem_429532,selector_429533):cljs.core.identity).call(null,factory_429603.call(null,f_429581));dommy.core.update_event_listeners_BANG_.call(null,elem_429532,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_429533,actual_type_429602,f_429581], null),canonical_f_429604);
if(cljs.core.truth_(elem_429532.addEventListener))
{elem_429532.addEventListener(cljs.core.name.call(null,actual_type_429602),canonical_f_429604);
} else
{elem_429532.attachEvent(cljs.core.name.call(null,actual_type_429602),canonical_f_429604);
}
{
var G__429605 = cljs.core.next.call(null,seq__429510_429595__$1);
var G__429606 = null;
var G__429607 = 0;
var G__429608 = 0;
seq__429510_429582 = G__429605;
chunk__429512_429583 = G__429606;
count__429513_429584 = G__429607;
i__429514_429585 = G__429608;
continue;
}
}
} else
{}
}
break;
}
{
var G__429609 = cljs.core.next.call(null,seq__429509_429573__$1);
var G__429610 = null;
var G__429611 = 0;
var G__429612 = 0;
seq__429509_429534 = G__429609;
chunk__429516_429535 = G__429610;
count__429517_429536 = G__429611;
i__429518_429537 = G__429612;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__429613){
var elem_sel = cljs.core.first(arglist__429613);
var type_fs = cljs.core.rest(arglist__429613);
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
var vec__429637_429660 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_429661 = cljs.core.nth.call(null,vec__429637_429660,0,null);var selector_429662 = cljs.core.nth.call(null,vec__429637_429660,1,null);var seq__429638_429663 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__429645_429664 = null;var count__429646_429665 = 0;var i__429647_429666 = 0;while(true){
if((i__429647_429666 < count__429646_429665))
{var vec__429654_429667 = cljs.core._nth.call(null,chunk__429645_429664,i__429647_429666);var orig_type_429668 = cljs.core.nth.call(null,vec__429654_429667,0,null);var f_429669 = cljs.core.nth.call(null,vec__429654_429667,1,null);var seq__429648_429670 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_429668,new cljs.core.PersistentArrayMap.fromArray([orig_type_429668,cljs.core.identity], true, false)));var chunk__429650_429671 = null;var count__429651_429672 = 0;var i__429652_429673 = 0;while(true){
if((i__429652_429673 < count__429651_429672))
{var vec__429655_429674 = cljs.core._nth.call(null,chunk__429650_429671,i__429652_429673);var actual_type_429675 = cljs.core.nth.call(null,vec__429655_429674,0,null);var __429676 = cljs.core.nth.call(null,vec__429655_429674,1,null);var keys_429677 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_429662,actual_type_429675,f_429669], null);var canonical_f_429678 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_429661),keys_429677);dommy.core.update_event_listeners_BANG_.call(null,elem_429661,dommy.utils.dissoc_in,keys_429677);
if(cljs.core.truth_(elem_429661.removeEventListener))
{elem_429661.removeEventListener(cljs.core.name.call(null,actual_type_429675),canonical_f_429678);
} else
{elem_429661.detachEvent(cljs.core.name.call(null,actual_type_429675),canonical_f_429678);
}
{
var G__429679 = seq__429648_429670;
var G__429680 = chunk__429650_429671;
var G__429681 = count__429651_429672;
var G__429682 = (i__429652_429673 + 1);
seq__429648_429670 = G__429679;
chunk__429650_429671 = G__429680;
count__429651_429672 = G__429681;
i__429652_429673 = G__429682;
continue;
}
} else
{var temp__4092__auto___429683 = cljs.core.seq.call(null,seq__429648_429670);if(temp__4092__auto___429683)
{var seq__429648_429684__$1 = temp__4092__auto___429683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429648_429684__$1))
{var c__4017__auto___429685 = cljs.core.chunk_first.call(null,seq__429648_429684__$1);{
var G__429686 = cljs.core.chunk_rest.call(null,seq__429648_429684__$1);
var G__429687 = c__4017__auto___429685;
var G__429688 = cljs.core.count.call(null,c__4017__auto___429685);
var G__429689 = 0;
seq__429648_429670 = G__429686;
chunk__429650_429671 = G__429687;
count__429651_429672 = G__429688;
i__429652_429673 = G__429689;
continue;
}
} else
{var vec__429656_429690 = cljs.core.first.call(null,seq__429648_429684__$1);var actual_type_429691 = cljs.core.nth.call(null,vec__429656_429690,0,null);var __429692 = cljs.core.nth.call(null,vec__429656_429690,1,null);var keys_429693 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_429662,actual_type_429691,f_429669], null);var canonical_f_429694 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_429661),keys_429693);dommy.core.update_event_listeners_BANG_.call(null,elem_429661,dommy.utils.dissoc_in,keys_429693);
if(cljs.core.truth_(elem_429661.removeEventListener))
{elem_429661.removeEventListener(cljs.core.name.call(null,actual_type_429691),canonical_f_429694);
} else
{elem_429661.detachEvent(cljs.core.name.call(null,actual_type_429691),canonical_f_429694);
}
{
var G__429695 = cljs.core.next.call(null,seq__429648_429684__$1);
var G__429696 = null;
var G__429697 = 0;
var G__429698 = 0;
seq__429648_429670 = G__429695;
chunk__429650_429671 = G__429696;
count__429651_429672 = G__429697;
i__429652_429673 = G__429698;
continue;
}
}
} else
{}
}
break;
}
{
var G__429699 = seq__429638_429663;
var G__429700 = chunk__429645_429664;
var G__429701 = count__429646_429665;
var G__429702 = (i__429647_429666 + 1);
seq__429638_429663 = G__429699;
chunk__429645_429664 = G__429700;
count__429646_429665 = G__429701;
i__429647_429666 = G__429702;
continue;
}
} else
{var temp__4092__auto___429703 = cljs.core.seq.call(null,seq__429638_429663);if(temp__4092__auto___429703)
{var seq__429638_429704__$1 = temp__4092__auto___429703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429638_429704__$1))
{var c__4017__auto___429705 = cljs.core.chunk_first.call(null,seq__429638_429704__$1);{
var G__429706 = cljs.core.chunk_rest.call(null,seq__429638_429704__$1);
var G__429707 = c__4017__auto___429705;
var G__429708 = cljs.core.count.call(null,c__4017__auto___429705);
var G__429709 = 0;
seq__429638_429663 = G__429706;
chunk__429645_429664 = G__429707;
count__429646_429665 = G__429708;
i__429647_429666 = G__429709;
continue;
}
} else
{var vec__429657_429710 = cljs.core.first.call(null,seq__429638_429704__$1);var orig_type_429711 = cljs.core.nth.call(null,vec__429657_429710,0,null);var f_429712 = cljs.core.nth.call(null,vec__429657_429710,1,null);var seq__429639_429713 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_429711,new cljs.core.PersistentArrayMap.fromArray([orig_type_429711,cljs.core.identity], true, false)));var chunk__429641_429714 = null;var count__429642_429715 = 0;var i__429643_429716 = 0;while(true){
if((i__429643_429716 < count__429642_429715))
{var vec__429658_429717 = cljs.core._nth.call(null,chunk__429641_429714,i__429643_429716);var actual_type_429718 = cljs.core.nth.call(null,vec__429658_429717,0,null);var __429719 = cljs.core.nth.call(null,vec__429658_429717,1,null);var keys_429720 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_429662,actual_type_429718,f_429712], null);var canonical_f_429721 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_429661),keys_429720);dommy.core.update_event_listeners_BANG_.call(null,elem_429661,dommy.utils.dissoc_in,keys_429720);
if(cljs.core.truth_(elem_429661.removeEventListener))
{elem_429661.removeEventListener(cljs.core.name.call(null,actual_type_429718),canonical_f_429721);
} else
{elem_429661.detachEvent(cljs.core.name.call(null,actual_type_429718),canonical_f_429721);
}
{
var G__429722 = seq__429639_429713;
var G__429723 = chunk__429641_429714;
var G__429724 = count__429642_429715;
var G__429725 = (i__429643_429716 + 1);
seq__429639_429713 = G__429722;
chunk__429641_429714 = G__429723;
count__429642_429715 = G__429724;
i__429643_429716 = G__429725;
continue;
}
} else
{var temp__4092__auto___429726__$1 = cljs.core.seq.call(null,seq__429639_429713);if(temp__4092__auto___429726__$1)
{var seq__429639_429727__$1 = temp__4092__auto___429726__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429639_429727__$1))
{var c__4017__auto___429728 = cljs.core.chunk_first.call(null,seq__429639_429727__$1);{
var G__429729 = cljs.core.chunk_rest.call(null,seq__429639_429727__$1);
var G__429730 = c__4017__auto___429728;
var G__429731 = cljs.core.count.call(null,c__4017__auto___429728);
var G__429732 = 0;
seq__429639_429713 = G__429729;
chunk__429641_429714 = G__429730;
count__429642_429715 = G__429731;
i__429643_429716 = G__429732;
continue;
}
} else
{var vec__429659_429733 = cljs.core.first.call(null,seq__429639_429727__$1);var actual_type_429734 = cljs.core.nth.call(null,vec__429659_429733,0,null);var __429735 = cljs.core.nth.call(null,vec__429659_429733,1,null);var keys_429736 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_429662,actual_type_429734,f_429712], null);var canonical_f_429737 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_429661),keys_429736);dommy.core.update_event_listeners_BANG_.call(null,elem_429661,dommy.utils.dissoc_in,keys_429736);
if(cljs.core.truth_(elem_429661.removeEventListener))
{elem_429661.removeEventListener(cljs.core.name.call(null,actual_type_429734),canonical_f_429737);
} else
{elem_429661.detachEvent(cljs.core.name.call(null,actual_type_429734),canonical_f_429737);
}
{
var G__429738 = cljs.core.next.call(null,seq__429639_429727__$1);
var G__429739 = null;
var G__429740 = 0;
var G__429741 = 0;
seq__429639_429713 = G__429738;
chunk__429641_429714 = G__429739;
count__429642_429715 = G__429740;
i__429643_429716 = G__429741;
continue;
}
}
} else
{}
}
break;
}
{
var G__429742 = cljs.core.next.call(null,seq__429638_429704__$1);
var G__429743 = null;
var G__429744 = 0;
var G__429745 = 0;
seq__429638_429663 = G__429742;
chunk__429645_429664 = G__429743;
count__429646_429665 = G__429744;
i__429647_429666 = G__429745;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__429746){
var elem_sel = cljs.core.first(arglist__429746);
var type_fs = cljs.core.rest(arglist__429746);
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
var vec__429754_429761 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_429762 = cljs.core.nth.call(null,vec__429754_429761,0,null);var selector_429763 = cljs.core.nth.call(null,vec__429754_429761,1,null);var seq__429755_429764 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__429756_429765 = null;var count__429757_429766 = 0;var i__429758_429767 = 0;while(true){
if((i__429758_429767 < count__429757_429766))
{var vec__429759_429768 = cljs.core._nth.call(null,chunk__429756_429765,i__429758_429767);var type_429769 = cljs.core.nth.call(null,vec__429759_429768,0,null);var f_429770 = cljs.core.nth.call(null,vec__429759_429768,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_429769,((function (seq__429755_429764,chunk__429756_429765,count__429757_429766,i__429758_429767,vec__429759_429768,type_429769,f_429770){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_429769,this_fn);
return f_429770.call(null,e);
});})(seq__429755_429764,chunk__429756_429765,count__429757_429766,i__429758_429767,vec__429759_429768,type_429769,f_429770))
);
{
var G__429771 = seq__429755_429764;
var G__429772 = chunk__429756_429765;
var G__429773 = count__429757_429766;
var G__429774 = (i__429758_429767 + 1);
seq__429755_429764 = G__429771;
chunk__429756_429765 = G__429772;
count__429757_429766 = G__429773;
i__429758_429767 = G__429774;
continue;
}
} else
{var temp__4092__auto___429775 = cljs.core.seq.call(null,seq__429755_429764);if(temp__4092__auto___429775)
{var seq__429755_429776__$1 = temp__4092__auto___429775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429755_429776__$1))
{var c__4017__auto___429777 = cljs.core.chunk_first.call(null,seq__429755_429776__$1);{
var G__429778 = cljs.core.chunk_rest.call(null,seq__429755_429776__$1);
var G__429779 = c__4017__auto___429777;
var G__429780 = cljs.core.count.call(null,c__4017__auto___429777);
var G__429781 = 0;
seq__429755_429764 = G__429778;
chunk__429756_429765 = G__429779;
count__429757_429766 = G__429780;
i__429758_429767 = G__429781;
continue;
}
} else
{var vec__429760_429782 = cljs.core.first.call(null,seq__429755_429776__$1);var type_429783 = cljs.core.nth.call(null,vec__429760_429782,0,null);var f_429784 = cljs.core.nth.call(null,vec__429760_429782,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_429783,((function (seq__429755_429764,chunk__429756_429765,count__429757_429766,i__429758_429767,vec__429760_429782,type_429783,f_429784,seq__429755_429776__$1,temp__4092__auto___429775){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_429783,this_fn);
return f_429784.call(null,e);
});})(seq__429755_429764,chunk__429756_429765,count__429757_429766,i__429758_429767,vec__429760_429782,type_429783,f_429784,seq__429755_429776__$1,temp__4092__auto___429775))
);
{
var G__429785 = cljs.core.next.call(null,seq__429755_429776__$1);
var G__429786 = null;
var G__429787 = 0;
var G__429788 = 0;
seq__429755_429764 = G__429785;
chunk__429756_429765 = G__429786;
count__429757_429766 = G__429787;
i__429758_429767 = G__429788;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__429789){
var elem_sel = cljs.core.first(arglist__429789);
var type_fs = cljs.core.rest(arglist__429789);
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
var fire_BANG___delegate = function (node,event_type,p__429790){var vec__429792 = p__429790;var update_event_BANG_ = cljs.core.nth.call(null,vec__429792,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__429790 = null;if (arguments.length > 2) {
  p__429790 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__429790);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__429793){
var node = cljs.core.first(arglist__429793);
arglist__429793 = cljs.core.next(arglist__429793);
var event_type = cljs.core.first(arglist__429793);
var p__429790 = cljs.core.rest(arglist__429793);
return fire_BANG___delegate(node,event_type,p__429790);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
