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
var append_BANG___2 = (function (parent,child){var G__8572 = dommy.template.__GT_node_like.call(null,parent);G__8572.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8572;
});
var append_BANG___3 = (function() { 
var G__8577__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8573_8578 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8574_8579 = null;var count__8575_8580 = 0;var i__8576_8581 = 0;while(true){
if((i__8576_8581 < count__8575_8580))
{var c_8582 = cljs.core._nth.call(null,chunk__8574_8579,i__8576_8581);append_BANG_.call(null,parent__$1,c_8582);
{
var G__8583 = seq__8573_8578;
var G__8584 = chunk__8574_8579;
var G__8585 = count__8575_8580;
var G__8586 = (i__8576_8581 + 1);
seq__8573_8578 = G__8583;
chunk__8574_8579 = G__8584;
count__8575_8580 = G__8585;
i__8576_8581 = G__8586;
continue;
}
} else
{var temp__4092__auto___8587 = cljs.core.seq.call(null,seq__8573_8578);if(temp__4092__auto___8587)
{var seq__8573_8588__$1 = temp__4092__auto___8587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8573_8588__$1))
{var c__5497__auto___8589 = cljs.core.chunk_first.call(null,seq__8573_8588__$1);{
var G__8590 = cljs.core.chunk_rest.call(null,seq__8573_8588__$1);
var G__8591 = c__5497__auto___8589;
var G__8592 = cljs.core.count.call(null,c__5497__auto___8589);
var G__8593 = 0;
seq__8573_8578 = G__8590;
chunk__8574_8579 = G__8591;
count__8575_8580 = G__8592;
i__8576_8581 = G__8593;
continue;
}
} else
{var c_8594 = cljs.core.first.call(null,seq__8573_8588__$1);append_BANG_.call(null,parent__$1,c_8594);
{
var G__8595 = cljs.core.next.call(null,seq__8573_8588__$1);
var G__8596 = null;
var G__8597 = 0;
var G__8598 = 0;
seq__8573_8578 = G__8595;
chunk__8574_8579 = G__8596;
count__8575_8580 = G__8597;
i__8576_8581 = G__8598;
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
var G__8577 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8577__delegate.call(this,parent,child,more_children);};
G__8577.cljs$lang$maxFixedArity = 2;
G__8577.cljs$lang$applyTo = (function (arglist__8599){
var parent = cljs.core.first(arglist__8599);
arglist__8599 = cljs.core.next(arglist__8599);
var child = cljs.core.first(arglist__8599);
var more_children = cljs.core.rest(arglist__8599);
return G__8577__delegate(parent,child,more_children);
});
G__8577.cljs$core$IFn$_invoke$arity$variadic = G__8577__delegate;
return G__8577;
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
var prepend_BANG___2 = (function (parent,child){var G__8605 = dommy.template.__GT_node_like.call(null,parent);G__8605.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__8605;
});
var prepend_BANG___3 = (function() { 
var G__8610__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8606_8611 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8607_8612 = null;var count__8608_8613 = 0;var i__8609_8614 = 0;while(true){
if((i__8609_8614 < count__8608_8613))
{var c_8615 = cljs.core._nth.call(null,chunk__8607_8612,i__8609_8614);prepend_BANG_.call(null,parent__$1,c_8615);
{
var G__8616 = seq__8606_8611;
var G__8617 = chunk__8607_8612;
var G__8618 = count__8608_8613;
var G__8619 = (i__8609_8614 + 1);
seq__8606_8611 = G__8616;
chunk__8607_8612 = G__8617;
count__8608_8613 = G__8618;
i__8609_8614 = G__8619;
continue;
}
} else
{var temp__4092__auto___8620 = cljs.core.seq.call(null,seq__8606_8611);if(temp__4092__auto___8620)
{var seq__8606_8621__$1 = temp__4092__auto___8620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8606_8621__$1))
{var c__5497__auto___8622 = cljs.core.chunk_first.call(null,seq__8606_8621__$1);{
var G__8623 = cljs.core.chunk_rest.call(null,seq__8606_8621__$1);
var G__8624 = c__5497__auto___8622;
var G__8625 = cljs.core.count.call(null,c__5497__auto___8622);
var G__8626 = 0;
seq__8606_8611 = G__8623;
chunk__8607_8612 = G__8624;
count__8608_8613 = G__8625;
i__8609_8614 = G__8626;
continue;
}
} else
{var c_8627 = cljs.core.first.call(null,seq__8606_8621__$1);prepend_BANG_.call(null,parent__$1,c_8627);
{
var G__8628 = cljs.core.next.call(null,seq__8606_8621__$1);
var G__8629 = null;
var G__8630 = 0;
var G__8631 = 0;
seq__8606_8611 = G__8628;
chunk__8607_8612 = G__8629;
count__8608_8613 = G__8630;
i__8609_8614 = G__8631;
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
var G__8610 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8610__delegate.call(this,parent,child,more_children);};
G__8610.cljs$lang$maxFixedArity = 2;
G__8610.cljs$lang$applyTo = (function (arglist__8632){
var parent = cljs.core.first(arglist__8632);
arglist__8632 = cljs.core.next(arglist__8632);
var child = cljs.core.first(arglist__8632);
var more_children = cljs.core.rest(arglist__8632);
return G__8610__delegate(parent,child,more_children);
});
G__8610.cljs$core$IFn$_invoke$arity$variadic = G__8610__delegate;
return G__8610;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___8633 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___8633))
{var next_8634 = temp__4090__auto___8633;parent.insertBefore(actual_node,next_8634);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8636 = dommy.template.__GT_node_like.call(null,parent);G__8636.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8636,node_like);
return G__8636;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8638 = elem__$1.parentNode;G__8638.removeChild(elem__$1);
return G__8638;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8639_SHARP_){return p1__8639_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__8640_SHARP_){return !((p1__8640_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8641){var vec__8642 = p__8641;var special_mouse_event = cljs.core.nth.call(null,vec__8642,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__8642,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4773__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4773__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8643){
var elem = cljs.core.first(arglist__8643);
arglist__8643 = cljs.core.next(arglist__8643);
var f = cljs.core.first(arglist__8643);
var args = cljs.core.rest(arglist__8643);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8644_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8644_SHARP_));
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
var vec__8668_8691 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8692 = cljs.core.nth.call(null,vec__8668_8691,0,null);var selector_8693 = cljs.core.nth.call(null,vec__8668_8691,1,null);var seq__8669_8694 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8676_8695 = null;var count__8677_8696 = 0;var i__8678_8697 = 0;while(true){
if((i__8678_8697 < count__8677_8696))
{var vec__8685_8698 = cljs.core._nth.call(null,chunk__8676_8695,i__8678_8697);var orig_type_8699 = cljs.core.nth.call(null,vec__8685_8698,0,null);var f_8700 = cljs.core.nth.call(null,vec__8685_8698,1,null);var seq__8679_8701 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8699,new cljs.core.PersistentArrayMap.fromArray([orig_type_8699,cljs.core.identity], true, false)));var chunk__8681_8702 = null;var count__8682_8703 = 0;var i__8683_8704 = 0;while(true){
if((i__8683_8704 < count__8682_8703))
{var vec__8686_8705 = cljs.core._nth.call(null,chunk__8681_8702,i__8683_8704);var actual_type_8706 = cljs.core.nth.call(null,vec__8686_8705,0,null);var factory_8707 = cljs.core.nth.call(null,vec__8686_8705,1,null);var canonical_f_8708 = (cljs.core.truth_(selector_8693)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8692,selector_8693):cljs.core.identity).call(null,factory_8707.call(null,f_8700));dommy.core.update_event_listeners_BANG_.call(null,elem_8692,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8693,actual_type_8706,f_8700], null),canonical_f_8708);
if(cljs.core.truth_(elem_8692.addEventListener))
{elem_8692.addEventListener(cljs.core.name.call(null,actual_type_8706),canonical_f_8708);
} else
{elem_8692.attachEvent(cljs.core.name.call(null,actual_type_8706),canonical_f_8708);
}
{
var G__8709 = seq__8679_8701;
var G__8710 = chunk__8681_8702;
var G__8711 = count__8682_8703;
var G__8712 = (i__8683_8704 + 1);
seq__8679_8701 = G__8709;
chunk__8681_8702 = G__8710;
count__8682_8703 = G__8711;
i__8683_8704 = G__8712;
continue;
}
} else
{var temp__4092__auto___8713 = cljs.core.seq.call(null,seq__8679_8701);if(temp__4092__auto___8713)
{var seq__8679_8714__$1 = temp__4092__auto___8713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8679_8714__$1))
{var c__5497__auto___8715 = cljs.core.chunk_first.call(null,seq__8679_8714__$1);{
var G__8716 = cljs.core.chunk_rest.call(null,seq__8679_8714__$1);
var G__8717 = c__5497__auto___8715;
var G__8718 = cljs.core.count.call(null,c__5497__auto___8715);
var G__8719 = 0;
seq__8679_8701 = G__8716;
chunk__8681_8702 = G__8717;
count__8682_8703 = G__8718;
i__8683_8704 = G__8719;
continue;
}
} else
{var vec__8687_8720 = cljs.core.first.call(null,seq__8679_8714__$1);var actual_type_8721 = cljs.core.nth.call(null,vec__8687_8720,0,null);var factory_8722 = cljs.core.nth.call(null,vec__8687_8720,1,null);var canonical_f_8723 = (cljs.core.truth_(selector_8693)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8692,selector_8693):cljs.core.identity).call(null,factory_8722.call(null,f_8700));dommy.core.update_event_listeners_BANG_.call(null,elem_8692,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8693,actual_type_8721,f_8700], null),canonical_f_8723);
if(cljs.core.truth_(elem_8692.addEventListener))
{elem_8692.addEventListener(cljs.core.name.call(null,actual_type_8721),canonical_f_8723);
} else
{elem_8692.attachEvent(cljs.core.name.call(null,actual_type_8721),canonical_f_8723);
}
{
var G__8724 = cljs.core.next.call(null,seq__8679_8714__$1);
var G__8725 = null;
var G__8726 = 0;
var G__8727 = 0;
seq__8679_8701 = G__8724;
chunk__8681_8702 = G__8725;
count__8682_8703 = G__8726;
i__8683_8704 = G__8727;
continue;
}
}
} else
{}
}
break;
}
{
var G__8728 = seq__8669_8694;
var G__8729 = chunk__8676_8695;
var G__8730 = count__8677_8696;
var G__8731 = (i__8678_8697 + 1);
seq__8669_8694 = G__8728;
chunk__8676_8695 = G__8729;
count__8677_8696 = G__8730;
i__8678_8697 = G__8731;
continue;
}
} else
{var temp__4092__auto___8732 = cljs.core.seq.call(null,seq__8669_8694);if(temp__4092__auto___8732)
{var seq__8669_8733__$1 = temp__4092__auto___8732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8669_8733__$1))
{var c__5497__auto___8734 = cljs.core.chunk_first.call(null,seq__8669_8733__$1);{
var G__8735 = cljs.core.chunk_rest.call(null,seq__8669_8733__$1);
var G__8736 = c__5497__auto___8734;
var G__8737 = cljs.core.count.call(null,c__5497__auto___8734);
var G__8738 = 0;
seq__8669_8694 = G__8735;
chunk__8676_8695 = G__8736;
count__8677_8696 = G__8737;
i__8678_8697 = G__8738;
continue;
}
} else
{var vec__8688_8739 = cljs.core.first.call(null,seq__8669_8733__$1);var orig_type_8740 = cljs.core.nth.call(null,vec__8688_8739,0,null);var f_8741 = cljs.core.nth.call(null,vec__8688_8739,1,null);var seq__8670_8742 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8740,new cljs.core.PersistentArrayMap.fromArray([orig_type_8740,cljs.core.identity], true, false)));var chunk__8672_8743 = null;var count__8673_8744 = 0;var i__8674_8745 = 0;while(true){
if((i__8674_8745 < count__8673_8744))
{var vec__8689_8746 = cljs.core._nth.call(null,chunk__8672_8743,i__8674_8745);var actual_type_8747 = cljs.core.nth.call(null,vec__8689_8746,0,null);var factory_8748 = cljs.core.nth.call(null,vec__8689_8746,1,null);var canonical_f_8749 = (cljs.core.truth_(selector_8693)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8692,selector_8693):cljs.core.identity).call(null,factory_8748.call(null,f_8741));dommy.core.update_event_listeners_BANG_.call(null,elem_8692,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8693,actual_type_8747,f_8741], null),canonical_f_8749);
if(cljs.core.truth_(elem_8692.addEventListener))
{elem_8692.addEventListener(cljs.core.name.call(null,actual_type_8747),canonical_f_8749);
} else
{elem_8692.attachEvent(cljs.core.name.call(null,actual_type_8747),canonical_f_8749);
}
{
var G__8750 = seq__8670_8742;
var G__8751 = chunk__8672_8743;
var G__8752 = count__8673_8744;
var G__8753 = (i__8674_8745 + 1);
seq__8670_8742 = G__8750;
chunk__8672_8743 = G__8751;
count__8673_8744 = G__8752;
i__8674_8745 = G__8753;
continue;
}
} else
{var temp__4092__auto___8754__$1 = cljs.core.seq.call(null,seq__8670_8742);if(temp__4092__auto___8754__$1)
{var seq__8670_8755__$1 = temp__4092__auto___8754__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8670_8755__$1))
{var c__5497__auto___8756 = cljs.core.chunk_first.call(null,seq__8670_8755__$1);{
var G__8757 = cljs.core.chunk_rest.call(null,seq__8670_8755__$1);
var G__8758 = c__5497__auto___8756;
var G__8759 = cljs.core.count.call(null,c__5497__auto___8756);
var G__8760 = 0;
seq__8670_8742 = G__8757;
chunk__8672_8743 = G__8758;
count__8673_8744 = G__8759;
i__8674_8745 = G__8760;
continue;
}
} else
{var vec__8690_8761 = cljs.core.first.call(null,seq__8670_8755__$1);var actual_type_8762 = cljs.core.nth.call(null,vec__8690_8761,0,null);var factory_8763 = cljs.core.nth.call(null,vec__8690_8761,1,null);var canonical_f_8764 = (cljs.core.truth_(selector_8693)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8692,selector_8693):cljs.core.identity).call(null,factory_8763.call(null,f_8741));dommy.core.update_event_listeners_BANG_.call(null,elem_8692,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8693,actual_type_8762,f_8741], null),canonical_f_8764);
if(cljs.core.truth_(elem_8692.addEventListener))
{elem_8692.addEventListener(cljs.core.name.call(null,actual_type_8762),canonical_f_8764);
} else
{elem_8692.attachEvent(cljs.core.name.call(null,actual_type_8762),canonical_f_8764);
}
{
var G__8765 = cljs.core.next.call(null,seq__8670_8755__$1);
var G__8766 = null;
var G__8767 = 0;
var G__8768 = 0;
seq__8670_8742 = G__8765;
chunk__8672_8743 = G__8766;
count__8673_8744 = G__8767;
i__8674_8745 = G__8768;
continue;
}
}
} else
{}
}
break;
}
{
var G__8769 = cljs.core.next.call(null,seq__8669_8733__$1);
var G__8770 = null;
var G__8771 = 0;
var G__8772 = 0;
seq__8669_8694 = G__8769;
chunk__8676_8695 = G__8770;
count__8677_8696 = G__8771;
i__8678_8697 = G__8772;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__8773){
var elem_sel = cljs.core.first(arglist__8773);
var type_fs = cljs.core.rest(arglist__8773);
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
var vec__8797_8820 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8821 = cljs.core.nth.call(null,vec__8797_8820,0,null);var selector_8822 = cljs.core.nth.call(null,vec__8797_8820,1,null);var seq__8798_8823 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8805_8824 = null;var count__8806_8825 = 0;var i__8807_8826 = 0;while(true){
if((i__8807_8826 < count__8806_8825))
{var vec__8814_8827 = cljs.core._nth.call(null,chunk__8805_8824,i__8807_8826);var orig_type_8828 = cljs.core.nth.call(null,vec__8814_8827,0,null);var f_8829 = cljs.core.nth.call(null,vec__8814_8827,1,null);var seq__8808_8830 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8828,new cljs.core.PersistentArrayMap.fromArray([orig_type_8828,cljs.core.identity], true, false)));var chunk__8810_8831 = null;var count__8811_8832 = 0;var i__8812_8833 = 0;while(true){
if((i__8812_8833 < count__8811_8832))
{var vec__8815_8834 = cljs.core._nth.call(null,chunk__8810_8831,i__8812_8833);var actual_type_8835 = cljs.core.nth.call(null,vec__8815_8834,0,null);var __8836 = cljs.core.nth.call(null,vec__8815_8834,1,null);var keys_8837 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8822,actual_type_8835,f_8829], null);var canonical_f_8838 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8821),keys_8837);dommy.core.update_event_listeners_BANG_.call(null,elem_8821,dommy.utils.dissoc_in,keys_8837);
if(cljs.core.truth_(elem_8821.removeEventListener))
{elem_8821.removeEventListener(cljs.core.name.call(null,actual_type_8835),canonical_f_8838);
} else
{elem_8821.detachEvent(cljs.core.name.call(null,actual_type_8835),canonical_f_8838);
}
{
var G__8839 = seq__8808_8830;
var G__8840 = chunk__8810_8831;
var G__8841 = count__8811_8832;
var G__8842 = (i__8812_8833 + 1);
seq__8808_8830 = G__8839;
chunk__8810_8831 = G__8840;
count__8811_8832 = G__8841;
i__8812_8833 = G__8842;
continue;
}
} else
{var temp__4092__auto___8843 = cljs.core.seq.call(null,seq__8808_8830);if(temp__4092__auto___8843)
{var seq__8808_8844__$1 = temp__4092__auto___8843;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8808_8844__$1))
{var c__5497__auto___8845 = cljs.core.chunk_first.call(null,seq__8808_8844__$1);{
var G__8846 = cljs.core.chunk_rest.call(null,seq__8808_8844__$1);
var G__8847 = c__5497__auto___8845;
var G__8848 = cljs.core.count.call(null,c__5497__auto___8845);
var G__8849 = 0;
seq__8808_8830 = G__8846;
chunk__8810_8831 = G__8847;
count__8811_8832 = G__8848;
i__8812_8833 = G__8849;
continue;
}
} else
{var vec__8816_8850 = cljs.core.first.call(null,seq__8808_8844__$1);var actual_type_8851 = cljs.core.nth.call(null,vec__8816_8850,0,null);var __8852 = cljs.core.nth.call(null,vec__8816_8850,1,null);var keys_8853 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8822,actual_type_8851,f_8829], null);var canonical_f_8854 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8821),keys_8853);dommy.core.update_event_listeners_BANG_.call(null,elem_8821,dommy.utils.dissoc_in,keys_8853);
if(cljs.core.truth_(elem_8821.removeEventListener))
{elem_8821.removeEventListener(cljs.core.name.call(null,actual_type_8851),canonical_f_8854);
} else
{elem_8821.detachEvent(cljs.core.name.call(null,actual_type_8851),canonical_f_8854);
}
{
var G__8855 = cljs.core.next.call(null,seq__8808_8844__$1);
var G__8856 = null;
var G__8857 = 0;
var G__8858 = 0;
seq__8808_8830 = G__8855;
chunk__8810_8831 = G__8856;
count__8811_8832 = G__8857;
i__8812_8833 = G__8858;
continue;
}
}
} else
{}
}
break;
}
{
var G__8859 = seq__8798_8823;
var G__8860 = chunk__8805_8824;
var G__8861 = count__8806_8825;
var G__8862 = (i__8807_8826 + 1);
seq__8798_8823 = G__8859;
chunk__8805_8824 = G__8860;
count__8806_8825 = G__8861;
i__8807_8826 = G__8862;
continue;
}
} else
{var temp__4092__auto___8863 = cljs.core.seq.call(null,seq__8798_8823);if(temp__4092__auto___8863)
{var seq__8798_8864__$1 = temp__4092__auto___8863;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8798_8864__$1))
{var c__5497__auto___8865 = cljs.core.chunk_first.call(null,seq__8798_8864__$1);{
var G__8866 = cljs.core.chunk_rest.call(null,seq__8798_8864__$1);
var G__8867 = c__5497__auto___8865;
var G__8868 = cljs.core.count.call(null,c__5497__auto___8865);
var G__8869 = 0;
seq__8798_8823 = G__8866;
chunk__8805_8824 = G__8867;
count__8806_8825 = G__8868;
i__8807_8826 = G__8869;
continue;
}
} else
{var vec__8817_8870 = cljs.core.first.call(null,seq__8798_8864__$1);var orig_type_8871 = cljs.core.nth.call(null,vec__8817_8870,0,null);var f_8872 = cljs.core.nth.call(null,vec__8817_8870,1,null);var seq__8799_8873 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8871,new cljs.core.PersistentArrayMap.fromArray([orig_type_8871,cljs.core.identity], true, false)));var chunk__8801_8874 = null;var count__8802_8875 = 0;var i__8803_8876 = 0;while(true){
if((i__8803_8876 < count__8802_8875))
{var vec__8818_8877 = cljs.core._nth.call(null,chunk__8801_8874,i__8803_8876);var actual_type_8878 = cljs.core.nth.call(null,vec__8818_8877,0,null);var __8879 = cljs.core.nth.call(null,vec__8818_8877,1,null);var keys_8880 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8822,actual_type_8878,f_8872], null);var canonical_f_8881 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8821),keys_8880);dommy.core.update_event_listeners_BANG_.call(null,elem_8821,dommy.utils.dissoc_in,keys_8880);
if(cljs.core.truth_(elem_8821.removeEventListener))
{elem_8821.removeEventListener(cljs.core.name.call(null,actual_type_8878),canonical_f_8881);
} else
{elem_8821.detachEvent(cljs.core.name.call(null,actual_type_8878),canonical_f_8881);
}
{
var G__8882 = seq__8799_8873;
var G__8883 = chunk__8801_8874;
var G__8884 = count__8802_8875;
var G__8885 = (i__8803_8876 + 1);
seq__8799_8873 = G__8882;
chunk__8801_8874 = G__8883;
count__8802_8875 = G__8884;
i__8803_8876 = G__8885;
continue;
}
} else
{var temp__4092__auto___8886__$1 = cljs.core.seq.call(null,seq__8799_8873);if(temp__4092__auto___8886__$1)
{var seq__8799_8887__$1 = temp__4092__auto___8886__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8799_8887__$1))
{var c__5497__auto___8888 = cljs.core.chunk_first.call(null,seq__8799_8887__$1);{
var G__8889 = cljs.core.chunk_rest.call(null,seq__8799_8887__$1);
var G__8890 = c__5497__auto___8888;
var G__8891 = cljs.core.count.call(null,c__5497__auto___8888);
var G__8892 = 0;
seq__8799_8873 = G__8889;
chunk__8801_8874 = G__8890;
count__8802_8875 = G__8891;
i__8803_8876 = G__8892;
continue;
}
} else
{var vec__8819_8893 = cljs.core.first.call(null,seq__8799_8887__$1);var actual_type_8894 = cljs.core.nth.call(null,vec__8819_8893,0,null);var __8895 = cljs.core.nth.call(null,vec__8819_8893,1,null);var keys_8896 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8822,actual_type_8894,f_8872], null);var canonical_f_8897 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8821),keys_8896);dommy.core.update_event_listeners_BANG_.call(null,elem_8821,dommy.utils.dissoc_in,keys_8896);
if(cljs.core.truth_(elem_8821.removeEventListener))
{elem_8821.removeEventListener(cljs.core.name.call(null,actual_type_8894),canonical_f_8897);
} else
{elem_8821.detachEvent(cljs.core.name.call(null,actual_type_8894),canonical_f_8897);
}
{
var G__8898 = cljs.core.next.call(null,seq__8799_8887__$1);
var G__8899 = null;
var G__8900 = 0;
var G__8901 = 0;
seq__8799_8873 = G__8898;
chunk__8801_8874 = G__8899;
count__8802_8875 = G__8900;
i__8803_8876 = G__8901;
continue;
}
}
} else
{}
}
break;
}
{
var G__8902 = cljs.core.next.call(null,seq__8798_8864__$1);
var G__8903 = null;
var G__8904 = 0;
var G__8905 = 0;
seq__8798_8823 = G__8902;
chunk__8805_8824 = G__8903;
count__8806_8825 = G__8904;
i__8807_8826 = G__8905;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__8906){
var elem_sel = cljs.core.first(arglist__8906);
var type_fs = cljs.core.rest(arglist__8906);
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
var vec__8914_8921 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8922 = cljs.core.nth.call(null,vec__8914_8921,0,null);var selector_8923 = cljs.core.nth.call(null,vec__8914_8921,1,null);var seq__8915_8924 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8916_8925 = null;var count__8917_8926 = 0;var i__8918_8927 = 0;while(true){
if((i__8918_8927 < count__8917_8926))
{var vec__8919_8928 = cljs.core._nth.call(null,chunk__8916_8925,i__8918_8927);var type_8929 = cljs.core.nth.call(null,vec__8919_8928,0,null);var f_8930 = cljs.core.nth.call(null,vec__8919_8928,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_8929,((function (seq__8915_8924,chunk__8916_8925,count__8917_8926,i__8918_8927,vec__8919_8928,type_8929,f_8930){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_8929,this_fn);
return f_8930.call(null,e);
});})(seq__8915_8924,chunk__8916_8925,count__8917_8926,i__8918_8927,vec__8919_8928,type_8929,f_8930))
);
{
var G__8931 = seq__8915_8924;
var G__8932 = chunk__8916_8925;
var G__8933 = count__8917_8926;
var G__8934 = (i__8918_8927 + 1);
seq__8915_8924 = G__8931;
chunk__8916_8925 = G__8932;
count__8917_8926 = G__8933;
i__8918_8927 = G__8934;
continue;
}
} else
{var temp__4092__auto___8935 = cljs.core.seq.call(null,seq__8915_8924);if(temp__4092__auto___8935)
{var seq__8915_8936__$1 = temp__4092__auto___8935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8915_8936__$1))
{var c__5497__auto___8937 = cljs.core.chunk_first.call(null,seq__8915_8936__$1);{
var G__8938 = cljs.core.chunk_rest.call(null,seq__8915_8936__$1);
var G__8939 = c__5497__auto___8937;
var G__8940 = cljs.core.count.call(null,c__5497__auto___8937);
var G__8941 = 0;
seq__8915_8924 = G__8938;
chunk__8916_8925 = G__8939;
count__8917_8926 = G__8940;
i__8918_8927 = G__8941;
continue;
}
} else
{var vec__8920_8942 = cljs.core.first.call(null,seq__8915_8936__$1);var type_8943 = cljs.core.nth.call(null,vec__8920_8942,0,null);var f_8944 = cljs.core.nth.call(null,vec__8920_8942,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_8943,((function (seq__8915_8924,chunk__8916_8925,count__8917_8926,i__8918_8927,vec__8920_8942,type_8943,f_8944,seq__8915_8936__$1,temp__4092__auto___8935){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_8943,this_fn);
return f_8944.call(null,e);
});})(seq__8915_8924,chunk__8916_8925,count__8917_8926,i__8918_8927,vec__8920_8942,type_8943,f_8944,seq__8915_8936__$1,temp__4092__auto___8935))
);
{
var G__8945 = cljs.core.next.call(null,seq__8915_8936__$1);
var G__8946 = null;
var G__8947 = 0;
var G__8948 = 0;
seq__8915_8924 = G__8945;
chunk__8916_8925 = G__8946;
count__8917_8926 = G__8947;
i__8918_8927 = G__8948;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__8949){
var elem_sel = cljs.core.first(arglist__8949);
var type_fs = cljs.core.rest(arglist__8949);
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
var fire_BANG___delegate = function (node,event_type,p__8950){var vec__8952 = p__8950;var update_event_BANG_ = cljs.core.nth.call(null,vec__8952,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__8950 = null;if (arguments.length > 2) {
  p__8950 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__8950);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__8953){
var node = cljs.core.first(arglist__8953);
arglist__8953 = cljs.core.next(arglist__8953);
var event_type = cljs.core.first(arglist__8953);
var p__8950 = cljs.core.rest(arglist__8953);
return fire_BANG___delegate(node,event_type,p__8950);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
