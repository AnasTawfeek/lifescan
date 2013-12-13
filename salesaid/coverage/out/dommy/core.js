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
var append_BANG___2 = (function (parent,child){var G__185559 = dommy.template.__GT_node_like.call(null,parent);G__185559.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__185559;
});
var append_BANG___3 = (function() { 
var G__185564__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__185560_185565 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__185561_185566 = null;var count__185562_185567 = 0;var i__185563_185568 = 0;while(true){
if((i__185563_185568 < count__185562_185567))
{var c_185569 = cljs.core._nth.call(null,chunk__185561_185566,i__185563_185568);append_BANG_.call(null,parent__$1,c_185569);
{
var G__185570 = seq__185560_185565;
var G__185571 = chunk__185561_185566;
var G__185572 = count__185562_185567;
var G__185573 = (i__185563_185568 + 1);
seq__185560_185565 = G__185570;
chunk__185561_185566 = G__185571;
count__185562_185567 = G__185572;
i__185563_185568 = G__185573;
continue;
}
} else
{var temp__4092__auto___185574 = cljs.core.seq.call(null,seq__185560_185565);if(temp__4092__auto___185574)
{var seq__185560_185575__$1 = temp__4092__auto___185574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__185560_185575__$1))
{var c__4017__auto___185576 = cljs.core.chunk_first.call(null,seq__185560_185575__$1);{
var G__185577 = cljs.core.chunk_rest.call(null,seq__185560_185575__$1);
var G__185578 = c__4017__auto___185576;
var G__185579 = cljs.core.count.call(null,c__4017__auto___185576);
var G__185580 = 0;
seq__185560_185565 = G__185577;
chunk__185561_185566 = G__185578;
count__185562_185567 = G__185579;
i__185563_185568 = G__185580;
continue;
}
} else
{var c_185581 = cljs.core.first.call(null,seq__185560_185575__$1);append_BANG_.call(null,parent__$1,c_185581);
{
var G__185582 = cljs.core.next.call(null,seq__185560_185575__$1);
var G__185583 = null;
var G__185584 = 0;
var G__185585 = 0;
seq__185560_185565 = G__185582;
chunk__185561_185566 = G__185583;
count__185562_185567 = G__185584;
i__185563_185568 = G__185585;
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
var G__185564 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__185564__delegate.call(this,parent,child,more_children);};
G__185564.cljs$lang$maxFixedArity = 2;
G__185564.cljs$lang$applyTo = (function (arglist__185586){
var parent = cljs.core.first(arglist__185586);
arglist__185586 = cljs.core.next(arglist__185586);
var child = cljs.core.first(arglist__185586);
var more_children = cljs.core.rest(arglist__185586);
return G__185564__delegate(parent,child,more_children);
});
G__185564.cljs$core$IFn$_invoke$arity$variadic = G__185564__delegate;
return G__185564;
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
var prepend_BANG___2 = (function (parent,child){var G__185592 = dommy.template.__GT_node_like.call(null,parent);G__185592.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__185592;
});
var prepend_BANG___3 = (function() { 
var G__185597__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__185593_185598 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__185594_185599 = null;var count__185595_185600 = 0;var i__185596_185601 = 0;while(true){
if((i__185596_185601 < count__185595_185600))
{var c_185602 = cljs.core._nth.call(null,chunk__185594_185599,i__185596_185601);prepend_BANG_.call(null,parent__$1,c_185602);
{
var G__185603 = seq__185593_185598;
var G__185604 = chunk__185594_185599;
var G__185605 = count__185595_185600;
var G__185606 = (i__185596_185601 + 1);
seq__185593_185598 = G__185603;
chunk__185594_185599 = G__185604;
count__185595_185600 = G__185605;
i__185596_185601 = G__185606;
continue;
}
} else
{var temp__4092__auto___185607 = cljs.core.seq.call(null,seq__185593_185598);if(temp__4092__auto___185607)
{var seq__185593_185608__$1 = temp__4092__auto___185607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__185593_185608__$1))
{var c__4017__auto___185609 = cljs.core.chunk_first.call(null,seq__185593_185608__$1);{
var G__185610 = cljs.core.chunk_rest.call(null,seq__185593_185608__$1);
var G__185611 = c__4017__auto___185609;
var G__185612 = cljs.core.count.call(null,c__4017__auto___185609);
var G__185613 = 0;
seq__185593_185598 = G__185610;
chunk__185594_185599 = G__185611;
count__185595_185600 = G__185612;
i__185596_185601 = G__185613;
continue;
}
} else
{var c_185614 = cljs.core.first.call(null,seq__185593_185608__$1);prepend_BANG_.call(null,parent__$1,c_185614);
{
var G__185615 = cljs.core.next.call(null,seq__185593_185608__$1);
var G__185616 = null;
var G__185617 = 0;
var G__185618 = 0;
seq__185593_185598 = G__185615;
chunk__185594_185599 = G__185616;
count__185595_185600 = G__185617;
i__185596_185601 = G__185618;
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
var G__185597 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__185597__delegate.call(this,parent,child,more_children);};
G__185597.cljs$lang$maxFixedArity = 2;
G__185597.cljs$lang$applyTo = (function (arglist__185619){
var parent = cljs.core.first(arglist__185619);
arglist__185619 = cljs.core.next(arglist__185619);
var child = cljs.core.first(arglist__185619);
var more_children = cljs.core.rest(arglist__185619);
return G__185597__delegate(parent,child,more_children);
});
G__185597.cljs$core$IFn$_invoke$arity$variadic = G__185597__delegate;
return G__185597;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___185620 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___185620))
{var next_185621 = temp__4090__auto___185620;parent.insertBefore(actual_node,next_185621);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__185623 = dommy.template.__GT_node_like.call(null,parent);G__185623.innerHTML = "";
dommy.core.append_BANG_.call(null,G__185623,node_like);
return G__185623;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__185625 = elem__$1.parentNode;G__185625.removeChild(elem__$1);
return G__185625;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__185626_SHARP_){return p1__185626_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__185627_SHARP_){return !((p1__185627_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__185628){var vec__185629 = p__185628;var special_mouse_event = cljs.core.nth.call(null,vec__185629,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__185629,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__185630){
var elem = cljs.core.first(arglist__185630);
arglist__185630 = cljs.core.next(arglist__185630);
var f = cljs.core.first(arglist__185630);
var args = cljs.core.rest(arglist__185630);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__185631_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__185631_SHARP_));
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
var vec__185655_185678 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_185679 = cljs.core.nth.call(null,vec__185655_185678,0,null);var selector_185680 = cljs.core.nth.call(null,vec__185655_185678,1,null);var seq__185656_185681 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__185663_185682 = null;var count__185664_185683 = 0;var i__185665_185684 = 0;while(true){
if((i__185665_185684 < count__185664_185683))
{var vec__185672_185685 = cljs.core._nth.call(null,chunk__185663_185682,i__185665_185684);var orig_type_185686 = cljs.core.nth.call(null,vec__185672_185685,0,null);var f_185687 = cljs.core.nth.call(null,vec__185672_185685,1,null);var seq__185666_185688 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_185686,new cljs.core.PersistentArrayMap.fromArray([orig_type_185686,cljs.core.identity], true, false)));var chunk__185668_185689 = null;var count__185669_185690 = 0;var i__185670_185691 = 0;while(true){
if((i__185670_185691 < count__185669_185690))
{var vec__185673_185692 = cljs.core._nth.call(null,chunk__185668_185689,i__185670_185691);var actual_type_185693 = cljs.core.nth.call(null,vec__185673_185692,0,null);var factory_185694 = cljs.core.nth.call(null,vec__185673_185692,1,null);var canonical_f_185695 = (cljs.core.truth_(selector_185680)?cljs.core.partial.call(null,dommy.core.live_listener,elem_185679,selector_185680):cljs.core.identity).call(null,factory_185694.call(null,f_185687));dommy.core.update_event_listeners_BANG_.call(null,elem_185679,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_185680,actual_type_185693,f_185687], null),canonical_f_185695);
if(cljs.core.truth_(elem_185679.addEventListener))
{elem_185679.addEventListener(cljs.core.name.call(null,actual_type_185693),canonical_f_185695);
} else
{elem_185679.attachEvent(cljs.core.name.call(null,actual_type_185693),canonical_f_185695);
}
{
var G__185696 = seq__185666_185688;
var G__185697 = chunk__185668_185689;
var G__185698 = count__185669_185690;
var G__185699 = (i__185670_185691 + 1);
seq__185666_185688 = G__185696;
chunk__185668_185689 = G__185697;
count__185669_185690 = G__185698;
i__185670_185691 = G__185699;
continue;
}
} else
{var temp__4092__auto___185700 = cljs.core.seq.call(null,seq__185666_185688);if(temp__4092__auto___185700)
{var seq__185666_185701__$1 = temp__4092__auto___185700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__185666_185701__$1))
{var c__4017__auto___185702 = cljs.core.chunk_first.call(null,seq__185666_185701__$1);{
var G__185703 = cljs.core.chunk_rest.call(null,seq__185666_185701__$1);
var G__185704 = c__4017__auto___185702;
var G__185705 = cljs.core.count.call(null,c__4017__auto___185702);
var G__185706 = 0;
seq__185666_185688 = G__185703;
chunk__185668_185689 = G__185704;
count__185669_185690 = G__185705;
i__185670_185691 = G__185706;
continue;
}
} else
{var vec__185674_185707 = cljs.core.first.call(null,seq__185666_185701__$1);var actual_type_185708 = cljs.core.nth.call(null,vec__185674_185707,0,null);var factory_185709 = cljs.core.nth.call(null,vec__185674_185707,1,null);var canonical_f_185710 = (cljs.core.truth_(selector_185680)?cljs.core.partial.call(null,dommy.core.live_listener,elem_185679,selector_185680):cljs.core.identity).call(null,factory_185709.call(null,f_185687));dommy.core.update_event_listeners_BANG_.call(null,elem_185679,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_185680,actual_type_185708,f_185687], null),canonical_f_185710);
if(cljs.core.truth_(elem_185679.addEventListener))
{elem_185679.addEventListener(cljs.core.name.call(null,actual_type_185708),canonical_f_185710);
} else
{elem_185679.attachEvent(cljs.core.name.call(null,actual_type_185708),canonical_f_185710);
}
{
var G__185711 = cljs.core.next.call(null,seq__185666_185701__$1);
var G__185712 = null;
var G__185713 = 0;
var G__185714 = 0;
seq__185666_185688 = G__185711;
chunk__185668_185689 = G__185712;
count__185669_185690 = G__185713;
i__185670_185691 = G__185714;
continue;
}
}
} else
{}
}
break;
}
{
var G__185715 = seq__185656_185681;
var G__185716 = chunk__185663_185682;
var G__185717 = count__185664_185683;
var G__185718 = (i__185665_185684 + 1);
seq__185656_185681 = G__185715;
chunk__185663_185682 = G__185716;
count__185664_185683 = G__185717;
i__185665_185684 = G__185718;
continue;
}
} else
{var temp__4092__auto___185719 = cljs.core.seq.call(null,seq__185656_185681);if(temp__4092__auto___185719)
{var seq__185656_185720__$1 = temp__4092__auto___185719;if(cljs.core.chunked_seq_QMARK_.call(null,seq__185656_185720__$1))
{var c__4017__auto___185721 = cljs.core.chunk_first.call(null,seq__185656_185720__$1);{
var G__185722 = cljs.core.chunk_rest.call(null,seq__185656_185720__$1);
var G__185723 = c__4017__auto___185721;
var G__185724 = cljs.core.count.call(null,c__4017__auto___185721);
var G__185725 = 0;
seq__185656_185681 = G__185722;
chunk__185663_185682 = G__185723;
count__185664_185683 = G__185724;
i__185665_185684 = G__185725;
continue;
}
} else
{var vec__185675_185726 = cljs.core.first.call(null,seq__185656_185720__$1);var orig_type_185727 = cljs.core.nth.call(null,vec__185675_185726,0,null);var f_185728 = cljs.core.nth.call(null,vec__185675_185726,1,null);var seq__185657_185729 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_185727,new cljs.core.PersistentArrayMap.fromArray([orig_type_185727,cljs.core.identity], true, false)));var chunk__185659_185730 = null;var count__185660_185731 = 0;var i__185661_185732 = 0;while(true){
if((i__185661_185732 < count__185660_185731))
{var vec__185676_185733 = cljs.core._nth.call(null,chunk__185659_185730,i__185661_185732);var actual_type_185734 = cljs.core.nth.call(null,vec__185676_185733,0,null);var factory_185735 = cljs.core.nth.call(null,vec__185676_185733,1,null);var canonical_f_185736 = (cljs.core.truth_(selector_185680)?cljs.core.partial.call(null,dommy.core.live_listener,elem_185679,selector_185680):cljs.core.identity).call(null,factory_185735.call(null,f_185728));dommy.core.update_event_listeners_BANG_.call(null,elem_185679,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_185680,actual_type_185734,f_185728], null),canonical_f_185736);
if(cljs.core.truth_(elem_185679.addEventListener))
{elem_185679.addEventListener(cljs.core.name.call(null,actual_type_185734),canonical_f_185736);
} else
{elem_185679.attachEvent(cljs.core.name.call(null,actual_type_185734),canonical_f_185736);
}
{
var G__185737 = seq__185657_185729;
var G__185738 = chunk__185659_185730;
var G__185739 = count__185660_185731;
var G__185740 = (i__185661_185732 + 1);
seq__185657_185729 = G__185737;
chunk__185659_185730 = G__185738;
count__185660_185731 = G__185739;
i__185661_185732 = G__185740;
continue;
}
} else
{var temp__4092__auto___185741__$1 = cljs.core.seq.call(null,seq__185657_185729);if(temp__4092__auto___185741__$1)
{var seq__185657_185742__$1 = temp__4092__auto___185741__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__185657_185742__$1))
{var c__4017__auto___185743 = cljs.core.chunk_first.call(null,seq__185657_185742__$1);{
var G__185744 = cljs.core.chunk_rest.call(null,seq__185657_185742__$1);
var G__185745 = c__4017__auto___185743;
var G__185746 = cljs.core.count.call(null,c__4017__auto___185743);
var G__185747 = 0;
seq__185657_185729 = G__185744;
chunk__185659_185730 = G__185745;
count__185660_185731 = G__185746;
i__185661_185732 = G__185747;
continue;
}
} else
{var vec__185677_185748 = cljs.core.first.call(null,seq__185657_185742__$1);var actual_type_185749 = cljs.core.nth.call(null,vec__185677_185748,0,null);var factory_185750 = cljs.core.nth.call(null,vec__185677_185748,1,null);var canonical_f_185751 = (cljs.core.truth_(selector_185680)?cljs.core.partial.call(null,dommy.core.live_listener,elem_185679,selector_185680):cljs.core.identity).call(null,factory_185750.call(null,f_185728));dommy.core.update_event_listeners_BANG_.call(null,elem_185679,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_185680,actual_type_185749,f_185728], null),canonical_f_185751);
if(cljs.core.truth_(elem_185679.addEventListener))
{elem_185679.addEventListener(cljs.core.name.call(null,actual_type_185749),canonical_f_185751);
} else
{elem_185679.attachEvent(cljs.core.name.call(null,actual_type_185749),canonical_f_185751);
}
{
var G__185752 = cljs.core.next.call(null,seq__185657_185742__$1);
var G__185753 = null;
var G__185754 = 0;
var G__185755 = 0;
seq__185657_185729 = G__185752;
chunk__185659_185730 = G__185753;
count__185660_185731 = G__185754;
i__185661_185732 = G__185755;
continue;
}
}
} else
{}
}
break;
}
{
var G__185756 = cljs.core.next.call(null,seq__185656_185720__$1);
var G__185757 = null;
var G__185758 = 0;
var G__185759 = 0;
seq__185656_185681 = G__185756;
chunk__185663_185682 = G__185757;
count__185664_185683 = G__185758;
i__185665_185684 = G__185759;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__185760){
var elem_sel = cljs.core.first(arglist__185760);
var type_fs = cljs.core.rest(arglist__185760);
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
var vec__185784_185807 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_185808 = cljs.core.nth.call(null,vec__185784_185807,0,null);var selector_185809 = cljs.core.nth.call(null,vec__185784_185807,1,null);var seq__185785_185810 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__185792_185811 = null;var count__185793_185812 = 0;var i__185794_185813 = 0;while(true){
if((i__185794_185813 < count__185793_185812))
{var vec__185801_185814 = cljs.core._nth.call(null,chunk__185792_185811,i__185794_185813);var orig_type_185815 = cljs.core.nth.call(null,vec__185801_185814,0,null);var f_185816 = cljs.core.nth.call(null,vec__185801_185814,1,null);var seq__185795_185817 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_185815,new cljs.core.PersistentArrayMap.fromArray([orig_type_185815,cljs.core.identity], true, false)));var chunk__185797_185818 = null;var count__185798_185819 = 0;var i__185799_185820 = 0;while(true){
if((i__185799_185820 < count__185798_185819))
{var vec__185802_185821 = cljs.core._nth.call(null,chunk__185797_185818,i__185799_185820);var actual_type_185822 = cljs.core.nth.call(null,vec__185802_185821,0,null);var __185823 = cljs.core.nth.call(null,vec__185802_185821,1,null);var keys_185824 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_185809,actual_type_185822,f_185816], null);var canonical_f_185825 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_185808),keys_185824);dommy.core.update_event_listeners_BANG_.call(null,elem_185808,dommy.utils.dissoc_in,keys_185824);
if(cljs.core.truth_(elem_185808.removeEventListener))
{elem_185808.removeEventListener(cljs.core.name.call(null,actual_type_185822),canonical_f_185825);
} else
{elem_185808.detachEvent(cljs.core.name.call(null,actual_type_185822),canonical_f_185825);
}
{
var G__185826 = seq__185795_185817;
var G__185827 = chunk__185797_185818;
var G__185828 = count__185798_185819;
var G__185829 = (i__185799_185820 + 1);
seq__185795_185817 = G__185826;
chunk__185797_185818 = G__185827;
count__185798_185819 = G__185828;
i__185799_185820 = G__185829;
continue;
}
} else
{var temp__4092__auto___185830 = cljs.core.seq.call(null,seq__185795_185817);if(temp__4092__auto___185830)
{var seq__185795_185831__$1 = temp__4092__auto___185830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__185795_185831__$1))
{var c__4017__auto___185832 = cljs.core.chunk_first.call(null,seq__185795_185831__$1);{
var G__185833 = cljs.core.chunk_rest.call(null,seq__185795_185831__$1);
var G__185834 = c__4017__auto___185832;
var G__185835 = cljs.core.count.call(null,c__4017__auto___185832);
var G__185836 = 0;
seq__185795_185817 = G__185833;
chunk__185797_185818 = G__185834;
count__185798_185819 = G__185835;
i__185799_185820 = G__185836;
continue;
}
} else
{var vec__185803_185837 = cljs.core.first.call(null,seq__185795_185831__$1);var actual_type_185838 = cljs.core.nth.call(null,vec__185803_185837,0,null);var __185839 = cljs.core.nth.call(null,vec__185803_185837,1,null);var keys_185840 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_185809,actual_type_185838,f_185816], null);var canonical_f_185841 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_185808),keys_185840);dommy.core.update_event_listeners_BANG_.call(null,elem_185808,dommy.utils.dissoc_in,keys_185840);
if(cljs.core.truth_(elem_185808.removeEventListener))
{elem_185808.removeEventListener(cljs.core.name.call(null,actual_type_185838),canonical_f_185841);
} else
{elem_185808.detachEvent(cljs.core.name.call(null,actual_type_185838),canonical_f_185841);
}
{
var G__185842 = cljs.core.next.call(null,seq__185795_185831__$1);
var G__185843 = null;
var G__185844 = 0;
var G__185845 = 0;
seq__185795_185817 = G__185842;
chunk__185797_185818 = G__185843;
count__185798_185819 = G__185844;
i__185799_185820 = G__185845;
continue;
}
}
} else
{}
}
break;
}
{
var G__185846 = seq__185785_185810;
var G__185847 = chunk__185792_185811;
var G__185848 = count__185793_185812;
var G__185849 = (i__185794_185813 + 1);
seq__185785_185810 = G__185846;
chunk__185792_185811 = G__185847;
count__185793_185812 = G__185848;
i__185794_185813 = G__185849;
continue;
}
} else
{var temp__4092__auto___185850 = cljs.core.seq.call(null,seq__185785_185810);if(temp__4092__auto___185850)
{var seq__185785_185851__$1 = temp__4092__auto___185850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__185785_185851__$1))
{var c__4017__auto___185852 = cljs.core.chunk_first.call(null,seq__185785_185851__$1);{
var G__185853 = cljs.core.chunk_rest.call(null,seq__185785_185851__$1);
var G__185854 = c__4017__auto___185852;
var G__185855 = cljs.core.count.call(null,c__4017__auto___185852);
var G__185856 = 0;
seq__185785_185810 = G__185853;
chunk__185792_185811 = G__185854;
count__185793_185812 = G__185855;
i__185794_185813 = G__185856;
continue;
}
} else
{var vec__185804_185857 = cljs.core.first.call(null,seq__185785_185851__$1);var orig_type_185858 = cljs.core.nth.call(null,vec__185804_185857,0,null);var f_185859 = cljs.core.nth.call(null,vec__185804_185857,1,null);var seq__185786_185860 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_185858,new cljs.core.PersistentArrayMap.fromArray([orig_type_185858,cljs.core.identity], true, false)));var chunk__185788_185861 = null;var count__185789_185862 = 0;var i__185790_185863 = 0;while(true){
if((i__185790_185863 < count__185789_185862))
{var vec__185805_185864 = cljs.core._nth.call(null,chunk__185788_185861,i__185790_185863);var actual_type_185865 = cljs.core.nth.call(null,vec__185805_185864,0,null);var __185866 = cljs.core.nth.call(null,vec__185805_185864,1,null);var keys_185867 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_185809,actual_type_185865,f_185859], null);var canonical_f_185868 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_185808),keys_185867);dommy.core.update_event_listeners_BANG_.call(null,elem_185808,dommy.utils.dissoc_in,keys_185867);
if(cljs.core.truth_(elem_185808.removeEventListener))
{elem_185808.removeEventListener(cljs.core.name.call(null,actual_type_185865),canonical_f_185868);
} else
{elem_185808.detachEvent(cljs.core.name.call(null,actual_type_185865),canonical_f_185868);
}
{
var G__185869 = seq__185786_185860;
var G__185870 = chunk__185788_185861;
var G__185871 = count__185789_185862;
var G__185872 = (i__185790_185863 + 1);
seq__185786_185860 = G__185869;
chunk__185788_185861 = G__185870;
count__185789_185862 = G__185871;
i__185790_185863 = G__185872;
continue;
}
} else
{var temp__4092__auto___185873__$1 = cljs.core.seq.call(null,seq__185786_185860);if(temp__4092__auto___185873__$1)
{var seq__185786_185874__$1 = temp__4092__auto___185873__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__185786_185874__$1))
{var c__4017__auto___185875 = cljs.core.chunk_first.call(null,seq__185786_185874__$1);{
var G__185876 = cljs.core.chunk_rest.call(null,seq__185786_185874__$1);
var G__185877 = c__4017__auto___185875;
var G__185878 = cljs.core.count.call(null,c__4017__auto___185875);
var G__185879 = 0;
seq__185786_185860 = G__185876;
chunk__185788_185861 = G__185877;
count__185789_185862 = G__185878;
i__185790_185863 = G__185879;
continue;
}
} else
{var vec__185806_185880 = cljs.core.first.call(null,seq__185786_185874__$1);var actual_type_185881 = cljs.core.nth.call(null,vec__185806_185880,0,null);var __185882 = cljs.core.nth.call(null,vec__185806_185880,1,null);var keys_185883 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_185809,actual_type_185881,f_185859], null);var canonical_f_185884 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_185808),keys_185883);dommy.core.update_event_listeners_BANG_.call(null,elem_185808,dommy.utils.dissoc_in,keys_185883);
if(cljs.core.truth_(elem_185808.removeEventListener))
{elem_185808.removeEventListener(cljs.core.name.call(null,actual_type_185881),canonical_f_185884);
} else
{elem_185808.detachEvent(cljs.core.name.call(null,actual_type_185881),canonical_f_185884);
}
{
var G__185885 = cljs.core.next.call(null,seq__185786_185874__$1);
var G__185886 = null;
var G__185887 = 0;
var G__185888 = 0;
seq__185786_185860 = G__185885;
chunk__185788_185861 = G__185886;
count__185789_185862 = G__185887;
i__185790_185863 = G__185888;
continue;
}
}
} else
{}
}
break;
}
{
var G__185889 = cljs.core.next.call(null,seq__185785_185851__$1);
var G__185890 = null;
var G__185891 = 0;
var G__185892 = 0;
seq__185785_185810 = G__185889;
chunk__185792_185811 = G__185890;
count__185793_185812 = G__185891;
i__185794_185813 = G__185892;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__185893){
var elem_sel = cljs.core.first(arglist__185893);
var type_fs = cljs.core.rest(arglist__185893);
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
var vec__185901_185908 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_185909 = cljs.core.nth.call(null,vec__185901_185908,0,null);var selector_185910 = cljs.core.nth.call(null,vec__185901_185908,1,null);var seq__185902_185911 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__185903_185912 = null;var count__185904_185913 = 0;var i__185905_185914 = 0;while(true){
if((i__185905_185914 < count__185904_185913))
{var vec__185906_185915 = cljs.core._nth.call(null,chunk__185903_185912,i__185905_185914);var type_185916 = cljs.core.nth.call(null,vec__185906_185915,0,null);var f_185917 = cljs.core.nth.call(null,vec__185906_185915,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_185916,((function (seq__185902_185911,chunk__185903_185912,count__185904_185913,i__185905_185914,vec__185906_185915,type_185916,f_185917){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_185916,this_fn);
return f_185917.call(null,e);
});})(seq__185902_185911,chunk__185903_185912,count__185904_185913,i__185905_185914,vec__185906_185915,type_185916,f_185917))
);
{
var G__185918 = seq__185902_185911;
var G__185919 = chunk__185903_185912;
var G__185920 = count__185904_185913;
var G__185921 = (i__185905_185914 + 1);
seq__185902_185911 = G__185918;
chunk__185903_185912 = G__185919;
count__185904_185913 = G__185920;
i__185905_185914 = G__185921;
continue;
}
} else
{var temp__4092__auto___185922 = cljs.core.seq.call(null,seq__185902_185911);if(temp__4092__auto___185922)
{var seq__185902_185923__$1 = temp__4092__auto___185922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__185902_185923__$1))
{var c__4017__auto___185924 = cljs.core.chunk_first.call(null,seq__185902_185923__$1);{
var G__185925 = cljs.core.chunk_rest.call(null,seq__185902_185923__$1);
var G__185926 = c__4017__auto___185924;
var G__185927 = cljs.core.count.call(null,c__4017__auto___185924);
var G__185928 = 0;
seq__185902_185911 = G__185925;
chunk__185903_185912 = G__185926;
count__185904_185913 = G__185927;
i__185905_185914 = G__185928;
continue;
}
} else
{var vec__185907_185929 = cljs.core.first.call(null,seq__185902_185923__$1);var type_185930 = cljs.core.nth.call(null,vec__185907_185929,0,null);var f_185931 = cljs.core.nth.call(null,vec__185907_185929,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_185930,((function (seq__185902_185911,chunk__185903_185912,count__185904_185913,i__185905_185914,vec__185907_185929,type_185930,f_185931,seq__185902_185923__$1,temp__4092__auto___185922){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_185930,this_fn);
return f_185931.call(null,e);
});})(seq__185902_185911,chunk__185903_185912,count__185904_185913,i__185905_185914,vec__185907_185929,type_185930,f_185931,seq__185902_185923__$1,temp__4092__auto___185922))
);
{
var G__185932 = cljs.core.next.call(null,seq__185902_185923__$1);
var G__185933 = null;
var G__185934 = 0;
var G__185935 = 0;
seq__185902_185911 = G__185932;
chunk__185903_185912 = G__185933;
count__185904_185913 = G__185934;
i__185905_185914 = G__185935;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__185936){
var elem_sel = cljs.core.first(arglist__185936);
var type_fs = cljs.core.rest(arglist__185936);
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
var fire_BANG___delegate = function (node,event_type,p__185937){var vec__185939 = p__185937;var update_event_BANG_ = cljs.core.nth.call(null,vec__185939,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__185937 = null;if (arguments.length > 2) {
  p__185937 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__185937);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__185940){
var node = cljs.core.first(arglist__185940);
arglist__185940 = cljs.core.next(arglist__185940);
var event_type = cljs.core.first(arglist__185940);
var p__185937 = cljs.core.rest(arglist__185940);
return fire_BANG___delegate(node,event_type,p__185937);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
