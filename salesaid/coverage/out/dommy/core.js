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
var append_BANG___2 = (function (parent,child){var G__56611 = dommy.template.__GT_node_like.call(null,parent);G__56611.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__56611;
});
var append_BANG___3 = (function() { 
var G__56616__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__56612_56617 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__56613_56618 = null;var count__56614_56619 = 0;var i__56615_56620 = 0;while(true){
if((i__56615_56620 < count__56614_56619))
{var c_56621 = cljs.core._nth.call(null,chunk__56613_56618,i__56615_56620);append_BANG_.call(null,parent__$1,c_56621);
{
var G__56622 = seq__56612_56617;
var G__56623 = chunk__56613_56618;
var G__56624 = count__56614_56619;
var G__56625 = (i__56615_56620 + 1);
seq__56612_56617 = G__56622;
chunk__56613_56618 = G__56623;
count__56614_56619 = G__56624;
i__56615_56620 = G__56625;
continue;
}
} else
{var temp__4092__auto___56626 = cljs.core.seq.call(null,seq__56612_56617);if(temp__4092__auto___56626)
{var seq__56612_56627__$1 = temp__4092__auto___56626;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56612_56627__$1))
{var c__4017__auto___56628 = cljs.core.chunk_first.call(null,seq__56612_56627__$1);{
var G__56629 = cljs.core.chunk_rest.call(null,seq__56612_56627__$1);
var G__56630 = c__4017__auto___56628;
var G__56631 = cljs.core.count.call(null,c__4017__auto___56628);
var G__56632 = 0;
seq__56612_56617 = G__56629;
chunk__56613_56618 = G__56630;
count__56614_56619 = G__56631;
i__56615_56620 = G__56632;
continue;
}
} else
{var c_56633 = cljs.core.first.call(null,seq__56612_56627__$1);append_BANG_.call(null,parent__$1,c_56633);
{
var G__56634 = cljs.core.next.call(null,seq__56612_56627__$1);
var G__56635 = null;
var G__56636 = 0;
var G__56637 = 0;
seq__56612_56617 = G__56634;
chunk__56613_56618 = G__56635;
count__56614_56619 = G__56636;
i__56615_56620 = G__56637;
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
var G__56616 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__56616__delegate.call(this,parent,child,more_children);};
G__56616.cljs$lang$maxFixedArity = 2;
G__56616.cljs$lang$applyTo = (function (arglist__56638){
var parent = cljs.core.first(arglist__56638);
arglist__56638 = cljs.core.next(arglist__56638);
var child = cljs.core.first(arglist__56638);
var more_children = cljs.core.rest(arglist__56638);
return G__56616__delegate(parent,child,more_children);
});
G__56616.cljs$core$IFn$_invoke$arity$variadic = G__56616__delegate;
return G__56616;
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
var prepend_BANG___2 = (function (parent,child){var G__56644 = dommy.template.__GT_node_like.call(null,parent);G__56644.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__56644;
});
var prepend_BANG___3 = (function() { 
var G__56649__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__56645_56650 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__56646_56651 = null;var count__56647_56652 = 0;var i__56648_56653 = 0;while(true){
if((i__56648_56653 < count__56647_56652))
{var c_56654 = cljs.core._nth.call(null,chunk__56646_56651,i__56648_56653);prepend_BANG_.call(null,parent__$1,c_56654);
{
var G__56655 = seq__56645_56650;
var G__56656 = chunk__56646_56651;
var G__56657 = count__56647_56652;
var G__56658 = (i__56648_56653 + 1);
seq__56645_56650 = G__56655;
chunk__56646_56651 = G__56656;
count__56647_56652 = G__56657;
i__56648_56653 = G__56658;
continue;
}
} else
{var temp__4092__auto___56659 = cljs.core.seq.call(null,seq__56645_56650);if(temp__4092__auto___56659)
{var seq__56645_56660__$1 = temp__4092__auto___56659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56645_56660__$1))
{var c__4017__auto___56661 = cljs.core.chunk_first.call(null,seq__56645_56660__$1);{
var G__56662 = cljs.core.chunk_rest.call(null,seq__56645_56660__$1);
var G__56663 = c__4017__auto___56661;
var G__56664 = cljs.core.count.call(null,c__4017__auto___56661);
var G__56665 = 0;
seq__56645_56650 = G__56662;
chunk__56646_56651 = G__56663;
count__56647_56652 = G__56664;
i__56648_56653 = G__56665;
continue;
}
} else
{var c_56666 = cljs.core.first.call(null,seq__56645_56660__$1);prepend_BANG_.call(null,parent__$1,c_56666);
{
var G__56667 = cljs.core.next.call(null,seq__56645_56660__$1);
var G__56668 = null;
var G__56669 = 0;
var G__56670 = 0;
seq__56645_56650 = G__56667;
chunk__56646_56651 = G__56668;
count__56647_56652 = G__56669;
i__56648_56653 = G__56670;
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
var G__56649 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__56649__delegate.call(this,parent,child,more_children);};
G__56649.cljs$lang$maxFixedArity = 2;
G__56649.cljs$lang$applyTo = (function (arglist__56671){
var parent = cljs.core.first(arglist__56671);
arglist__56671 = cljs.core.next(arglist__56671);
var child = cljs.core.first(arglist__56671);
var more_children = cljs.core.rest(arglist__56671);
return G__56649__delegate(parent,child,more_children);
});
G__56649.cljs$core$IFn$_invoke$arity$variadic = G__56649__delegate;
return G__56649;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___56672 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___56672))
{var next_56673 = temp__4090__auto___56672;parent.insertBefore(actual_node,next_56673);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__56675 = dommy.template.__GT_node_like.call(null,parent);G__56675.innerHTML = "";
dommy.core.append_BANG_.call(null,G__56675,node_like);
return G__56675;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__56677 = elem__$1.parentNode;G__56677.removeChild(elem__$1);
return G__56677;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__56678_SHARP_){return p1__56678_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__56679_SHARP_){return !((p1__56679_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__56680){var vec__56681 = p__56680;var special_mouse_event = cljs.core.nth.call(null,vec__56681,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__56681,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__56682){
var elem = cljs.core.first(arglist__56682);
arglist__56682 = cljs.core.next(arglist__56682);
var f = cljs.core.first(arglist__56682);
var args = cljs.core.rest(arglist__56682);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__56683_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__56683_SHARP_));
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
var vec__56707_56730 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_56731 = cljs.core.nth.call(null,vec__56707_56730,0,null);var selector_56732 = cljs.core.nth.call(null,vec__56707_56730,1,null);var seq__56708_56733 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__56715_56734 = null;var count__56716_56735 = 0;var i__56717_56736 = 0;while(true){
if((i__56717_56736 < count__56716_56735))
{var vec__56724_56737 = cljs.core._nth.call(null,chunk__56715_56734,i__56717_56736);var orig_type_56738 = cljs.core.nth.call(null,vec__56724_56737,0,null);var f_56739 = cljs.core.nth.call(null,vec__56724_56737,1,null);var seq__56718_56740 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_56738,new cljs.core.PersistentArrayMap.fromArray([orig_type_56738,cljs.core.identity], true, false)));var chunk__56720_56741 = null;var count__56721_56742 = 0;var i__56722_56743 = 0;while(true){
if((i__56722_56743 < count__56721_56742))
{var vec__56725_56744 = cljs.core._nth.call(null,chunk__56720_56741,i__56722_56743);var actual_type_56745 = cljs.core.nth.call(null,vec__56725_56744,0,null);var factory_56746 = cljs.core.nth.call(null,vec__56725_56744,1,null);var canonical_f_56747 = (cljs.core.truth_(selector_56732)?cljs.core.partial.call(null,dommy.core.live_listener,elem_56731,selector_56732):cljs.core.identity).call(null,factory_56746.call(null,f_56739));dommy.core.update_event_listeners_BANG_.call(null,elem_56731,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56732,actual_type_56745,f_56739], null),canonical_f_56747);
if(cljs.core.truth_(elem_56731.addEventListener))
{elem_56731.addEventListener(cljs.core.name.call(null,actual_type_56745),canonical_f_56747);
} else
{elem_56731.attachEvent(cljs.core.name.call(null,actual_type_56745),canonical_f_56747);
}
{
var G__56748 = seq__56718_56740;
var G__56749 = chunk__56720_56741;
var G__56750 = count__56721_56742;
var G__56751 = (i__56722_56743 + 1);
seq__56718_56740 = G__56748;
chunk__56720_56741 = G__56749;
count__56721_56742 = G__56750;
i__56722_56743 = G__56751;
continue;
}
} else
{var temp__4092__auto___56752 = cljs.core.seq.call(null,seq__56718_56740);if(temp__4092__auto___56752)
{var seq__56718_56753__$1 = temp__4092__auto___56752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56718_56753__$1))
{var c__4017__auto___56754 = cljs.core.chunk_first.call(null,seq__56718_56753__$1);{
var G__56755 = cljs.core.chunk_rest.call(null,seq__56718_56753__$1);
var G__56756 = c__4017__auto___56754;
var G__56757 = cljs.core.count.call(null,c__4017__auto___56754);
var G__56758 = 0;
seq__56718_56740 = G__56755;
chunk__56720_56741 = G__56756;
count__56721_56742 = G__56757;
i__56722_56743 = G__56758;
continue;
}
} else
{var vec__56726_56759 = cljs.core.first.call(null,seq__56718_56753__$1);var actual_type_56760 = cljs.core.nth.call(null,vec__56726_56759,0,null);var factory_56761 = cljs.core.nth.call(null,vec__56726_56759,1,null);var canonical_f_56762 = (cljs.core.truth_(selector_56732)?cljs.core.partial.call(null,dommy.core.live_listener,elem_56731,selector_56732):cljs.core.identity).call(null,factory_56761.call(null,f_56739));dommy.core.update_event_listeners_BANG_.call(null,elem_56731,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56732,actual_type_56760,f_56739], null),canonical_f_56762);
if(cljs.core.truth_(elem_56731.addEventListener))
{elem_56731.addEventListener(cljs.core.name.call(null,actual_type_56760),canonical_f_56762);
} else
{elem_56731.attachEvent(cljs.core.name.call(null,actual_type_56760),canonical_f_56762);
}
{
var G__56763 = cljs.core.next.call(null,seq__56718_56753__$1);
var G__56764 = null;
var G__56765 = 0;
var G__56766 = 0;
seq__56718_56740 = G__56763;
chunk__56720_56741 = G__56764;
count__56721_56742 = G__56765;
i__56722_56743 = G__56766;
continue;
}
}
} else
{}
}
break;
}
{
var G__56767 = seq__56708_56733;
var G__56768 = chunk__56715_56734;
var G__56769 = count__56716_56735;
var G__56770 = (i__56717_56736 + 1);
seq__56708_56733 = G__56767;
chunk__56715_56734 = G__56768;
count__56716_56735 = G__56769;
i__56717_56736 = G__56770;
continue;
}
} else
{var temp__4092__auto___56771 = cljs.core.seq.call(null,seq__56708_56733);if(temp__4092__auto___56771)
{var seq__56708_56772__$1 = temp__4092__auto___56771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56708_56772__$1))
{var c__4017__auto___56773 = cljs.core.chunk_first.call(null,seq__56708_56772__$1);{
var G__56774 = cljs.core.chunk_rest.call(null,seq__56708_56772__$1);
var G__56775 = c__4017__auto___56773;
var G__56776 = cljs.core.count.call(null,c__4017__auto___56773);
var G__56777 = 0;
seq__56708_56733 = G__56774;
chunk__56715_56734 = G__56775;
count__56716_56735 = G__56776;
i__56717_56736 = G__56777;
continue;
}
} else
{var vec__56727_56778 = cljs.core.first.call(null,seq__56708_56772__$1);var orig_type_56779 = cljs.core.nth.call(null,vec__56727_56778,0,null);var f_56780 = cljs.core.nth.call(null,vec__56727_56778,1,null);var seq__56709_56781 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_56779,new cljs.core.PersistentArrayMap.fromArray([orig_type_56779,cljs.core.identity], true, false)));var chunk__56711_56782 = null;var count__56712_56783 = 0;var i__56713_56784 = 0;while(true){
if((i__56713_56784 < count__56712_56783))
{var vec__56728_56785 = cljs.core._nth.call(null,chunk__56711_56782,i__56713_56784);var actual_type_56786 = cljs.core.nth.call(null,vec__56728_56785,0,null);var factory_56787 = cljs.core.nth.call(null,vec__56728_56785,1,null);var canonical_f_56788 = (cljs.core.truth_(selector_56732)?cljs.core.partial.call(null,dommy.core.live_listener,elem_56731,selector_56732):cljs.core.identity).call(null,factory_56787.call(null,f_56780));dommy.core.update_event_listeners_BANG_.call(null,elem_56731,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56732,actual_type_56786,f_56780], null),canonical_f_56788);
if(cljs.core.truth_(elem_56731.addEventListener))
{elem_56731.addEventListener(cljs.core.name.call(null,actual_type_56786),canonical_f_56788);
} else
{elem_56731.attachEvent(cljs.core.name.call(null,actual_type_56786),canonical_f_56788);
}
{
var G__56789 = seq__56709_56781;
var G__56790 = chunk__56711_56782;
var G__56791 = count__56712_56783;
var G__56792 = (i__56713_56784 + 1);
seq__56709_56781 = G__56789;
chunk__56711_56782 = G__56790;
count__56712_56783 = G__56791;
i__56713_56784 = G__56792;
continue;
}
} else
{var temp__4092__auto___56793__$1 = cljs.core.seq.call(null,seq__56709_56781);if(temp__4092__auto___56793__$1)
{var seq__56709_56794__$1 = temp__4092__auto___56793__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56709_56794__$1))
{var c__4017__auto___56795 = cljs.core.chunk_first.call(null,seq__56709_56794__$1);{
var G__56796 = cljs.core.chunk_rest.call(null,seq__56709_56794__$1);
var G__56797 = c__4017__auto___56795;
var G__56798 = cljs.core.count.call(null,c__4017__auto___56795);
var G__56799 = 0;
seq__56709_56781 = G__56796;
chunk__56711_56782 = G__56797;
count__56712_56783 = G__56798;
i__56713_56784 = G__56799;
continue;
}
} else
{var vec__56729_56800 = cljs.core.first.call(null,seq__56709_56794__$1);var actual_type_56801 = cljs.core.nth.call(null,vec__56729_56800,0,null);var factory_56802 = cljs.core.nth.call(null,vec__56729_56800,1,null);var canonical_f_56803 = (cljs.core.truth_(selector_56732)?cljs.core.partial.call(null,dommy.core.live_listener,elem_56731,selector_56732):cljs.core.identity).call(null,factory_56802.call(null,f_56780));dommy.core.update_event_listeners_BANG_.call(null,elem_56731,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56732,actual_type_56801,f_56780], null),canonical_f_56803);
if(cljs.core.truth_(elem_56731.addEventListener))
{elem_56731.addEventListener(cljs.core.name.call(null,actual_type_56801),canonical_f_56803);
} else
{elem_56731.attachEvent(cljs.core.name.call(null,actual_type_56801),canonical_f_56803);
}
{
var G__56804 = cljs.core.next.call(null,seq__56709_56794__$1);
var G__56805 = null;
var G__56806 = 0;
var G__56807 = 0;
seq__56709_56781 = G__56804;
chunk__56711_56782 = G__56805;
count__56712_56783 = G__56806;
i__56713_56784 = G__56807;
continue;
}
}
} else
{}
}
break;
}
{
var G__56808 = cljs.core.next.call(null,seq__56708_56772__$1);
var G__56809 = null;
var G__56810 = 0;
var G__56811 = 0;
seq__56708_56733 = G__56808;
chunk__56715_56734 = G__56809;
count__56716_56735 = G__56810;
i__56717_56736 = G__56811;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__56812){
var elem_sel = cljs.core.first(arglist__56812);
var type_fs = cljs.core.rest(arglist__56812);
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
var vec__56836_56859 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_56860 = cljs.core.nth.call(null,vec__56836_56859,0,null);var selector_56861 = cljs.core.nth.call(null,vec__56836_56859,1,null);var seq__56837_56862 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__56844_56863 = null;var count__56845_56864 = 0;var i__56846_56865 = 0;while(true){
if((i__56846_56865 < count__56845_56864))
{var vec__56853_56866 = cljs.core._nth.call(null,chunk__56844_56863,i__56846_56865);var orig_type_56867 = cljs.core.nth.call(null,vec__56853_56866,0,null);var f_56868 = cljs.core.nth.call(null,vec__56853_56866,1,null);var seq__56847_56869 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_56867,new cljs.core.PersistentArrayMap.fromArray([orig_type_56867,cljs.core.identity], true, false)));var chunk__56849_56870 = null;var count__56850_56871 = 0;var i__56851_56872 = 0;while(true){
if((i__56851_56872 < count__56850_56871))
{var vec__56854_56873 = cljs.core._nth.call(null,chunk__56849_56870,i__56851_56872);var actual_type_56874 = cljs.core.nth.call(null,vec__56854_56873,0,null);var __56875 = cljs.core.nth.call(null,vec__56854_56873,1,null);var keys_56876 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56861,actual_type_56874,f_56868], null);var canonical_f_56877 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_56860),keys_56876);dommy.core.update_event_listeners_BANG_.call(null,elem_56860,dommy.utils.dissoc_in,keys_56876);
if(cljs.core.truth_(elem_56860.removeEventListener))
{elem_56860.removeEventListener(cljs.core.name.call(null,actual_type_56874),canonical_f_56877);
} else
{elem_56860.detachEvent(cljs.core.name.call(null,actual_type_56874),canonical_f_56877);
}
{
var G__56878 = seq__56847_56869;
var G__56879 = chunk__56849_56870;
var G__56880 = count__56850_56871;
var G__56881 = (i__56851_56872 + 1);
seq__56847_56869 = G__56878;
chunk__56849_56870 = G__56879;
count__56850_56871 = G__56880;
i__56851_56872 = G__56881;
continue;
}
} else
{var temp__4092__auto___56882 = cljs.core.seq.call(null,seq__56847_56869);if(temp__4092__auto___56882)
{var seq__56847_56883__$1 = temp__4092__auto___56882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56847_56883__$1))
{var c__4017__auto___56884 = cljs.core.chunk_first.call(null,seq__56847_56883__$1);{
var G__56885 = cljs.core.chunk_rest.call(null,seq__56847_56883__$1);
var G__56886 = c__4017__auto___56884;
var G__56887 = cljs.core.count.call(null,c__4017__auto___56884);
var G__56888 = 0;
seq__56847_56869 = G__56885;
chunk__56849_56870 = G__56886;
count__56850_56871 = G__56887;
i__56851_56872 = G__56888;
continue;
}
} else
{var vec__56855_56889 = cljs.core.first.call(null,seq__56847_56883__$1);var actual_type_56890 = cljs.core.nth.call(null,vec__56855_56889,0,null);var __56891 = cljs.core.nth.call(null,vec__56855_56889,1,null);var keys_56892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56861,actual_type_56890,f_56868], null);var canonical_f_56893 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_56860),keys_56892);dommy.core.update_event_listeners_BANG_.call(null,elem_56860,dommy.utils.dissoc_in,keys_56892);
if(cljs.core.truth_(elem_56860.removeEventListener))
{elem_56860.removeEventListener(cljs.core.name.call(null,actual_type_56890),canonical_f_56893);
} else
{elem_56860.detachEvent(cljs.core.name.call(null,actual_type_56890),canonical_f_56893);
}
{
var G__56894 = cljs.core.next.call(null,seq__56847_56883__$1);
var G__56895 = null;
var G__56896 = 0;
var G__56897 = 0;
seq__56847_56869 = G__56894;
chunk__56849_56870 = G__56895;
count__56850_56871 = G__56896;
i__56851_56872 = G__56897;
continue;
}
}
} else
{}
}
break;
}
{
var G__56898 = seq__56837_56862;
var G__56899 = chunk__56844_56863;
var G__56900 = count__56845_56864;
var G__56901 = (i__56846_56865 + 1);
seq__56837_56862 = G__56898;
chunk__56844_56863 = G__56899;
count__56845_56864 = G__56900;
i__56846_56865 = G__56901;
continue;
}
} else
{var temp__4092__auto___56902 = cljs.core.seq.call(null,seq__56837_56862);if(temp__4092__auto___56902)
{var seq__56837_56903__$1 = temp__4092__auto___56902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56837_56903__$1))
{var c__4017__auto___56904 = cljs.core.chunk_first.call(null,seq__56837_56903__$1);{
var G__56905 = cljs.core.chunk_rest.call(null,seq__56837_56903__$1);
var G__56906 = c__4017__auto___56904;
var G__56907 = cljs.core.count.call(null,c__4017__auto___56904);
var G__56908 = 0;
seq__56837_56862 = G__56905;
chunk__56844_56863 = G__56906;
count__56845_56864 = G__56907;
i__56846_56865 = G__56908;
continue;
}
} else
{var vec__56856_56909 = cljs.core.first.call(null,seq__56837_56903__$1);var orig_type_56910 = cljs.core.nth.call(null,vec__56856_56909,0,null);var f_56911 = cljs.core.nth.call(null,vec__56856_56909,1,null);var seq__56838_56912 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_56910,new cljs.core.PersistentArrayMap.fromArray([orig_type_56910,cljs.core.identity], true, false)));var chunk__56840_56913 = null;var count__56841_56914 = 0;var i__56842_56915 = 0;while(true){
if((i__56842_56915 < count__56841_56914))
{var vec__56857_56916 = cljs.core._nth.call(null,chunk__56840_56913,i__56842_56915);var actual_type_56917 = cljs.core.nth.call(null,vec__56857_56916,0,null);var __56918 = cljs.core.nth.call(null,vec__56857_56916,1,null);var keys_56919 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56861,actual_type_56917,f_56911], null);var canonical_f_56920 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_56860),keys_56919);dommy.core.update_event_listeners_BANG_.call(null,elem_56860,dommy.utils.dissoc_in,keys_56919);
if(cljs.core.truth_(elem_56860.removeEventListener))
{elem_56860.removeEventListener(cljs.core.name.call(null,actual_type_56917),canonical_f_56920);
} else
{elem_56860.detachEvent(cljs.core.name.call(null,actual_type_56917),canonical_f_56920);
}
{
var G__56921 = seq__56838_56912;
var G__56922 = chunk__56840_56913;
var G__56923 = count__56841_56914;
var G__56924 = (i__56842_56915 + 1);
seq__56838_56912 = G__56921;
chunk__56840_56913 = G__56922;
count__56841_56914 = G__56923;
i__56842_56915 = G__56924;
continue;
}
} else
{var temp__4092__auto___56925__$1 = cljs.core.seq.call(null,seq__56838_56912);if(temp__4092__auto___56925__$1)
{var seq__56838_56926__$1 = temp__4092__auto___56925__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56838_56926__$1))
{var c__4017__auto___56927 = cljs.core.chunk_first.call(null,seq__56838_56926__$1);{
var G__56928 = cljs.core.chunk_rest.call(null,seq__56838_56926__$1);
var G__56929 = c__4017__auto___56927;
var G__56930 = cljs.core.count.call(null,c__4017__auto___56927);
var G__56931 = 0;
seq__56838_56912 = G__56928;
chunk__56840_56913 = G__56929;
count__56841_56914 = G__56930;
i__56842_56915 = G__56931;
continue;
}
} else
{var vec__56858_56932 = cljs.core.first.call(null,seq__56838_56926__$1);var actual_type_56933 = cljs.core.nth.call(null,vec__56858_56932,0,null);var __56934 = cljs.core.nth.call(null,vec__56858_56932,1,null);var keys_56935 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56861,actual_type_56933,f_56911], null);var canonical_f_56936 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_56860),keys_56935);dommy.core.update_event_listeners_BANG_.call(null,elem_56860,dommy.utils.dissoc_in,keys_56935);
if(cljs.core.truth_(elem_56860.removeEventListener))
{elem_56860.removeEventListener(cljs.core.name.call(null,actual_type_56933),canonical_f_56936);
} else
{elem_56860.detachEvent(cljs.core.name.call(null,actual_type_56933),canonical_f_56936);
}
{
var G__56937 = cljs.core.next.call(null,seq__56838_56926__$1);
var G__56938 = null;
var G__56939 = 0;
var G__56940 = 0;
seq__56838_56912 = G__56937;
chunk__56840_56913 = G__56938;
count__56841_56914 = G__56939;
i__56842_56915 = G__56940;
continue;
}
}
} else
{}
}
break;
}
{
var G__56941 = cljs.core.next.call(null,seq__56837_56903__$1);
var G__56942 = null;
var G__56943 = 0;
var G__56944 = 0;
seq__56837_56862 = G__56941;
chunk__56844_56863 = G__56942;
count__56845_56864 = G__56943;
i__56846_56865 = G__56944;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__56945){
var elem_sel = cljs.core.first(arglist__56945);
var type_fs = cljs.core.rest(arglist__56945);
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
var vec__56953_56960 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_56961 = cljs.core.nth.call(null,vec__56953_56960,0,null);var selector_56962 = cljs.core.nth.call(null,vec__56953_56960,1,null);var seq__56954_56963 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__56955_56964 = null;var count__56956_56965 = 0;var i__56957_56966 = 0;while(true){
if((i__56957_56966 < count__56956_56965))
{var vec__56958_56967 = cljs.core._nth.call(null,chunk__56955_56964,i__56957_56966);var type_56968 = cljs.core.nth.call(null,vec__56958_56967,0,null);var f_56969 = cljs.core.nth.call(null,vec__56958_56967,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_56968,((function (seq__56954_56963,chunk__56955_56964,count__56956_56965,i__56957_56966,vec__56958_56967,type_56968,f_56969){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_56968,this_fn);
return f_56969.call(null,e);
});})(seq__56954_56963,chunk__56955_56964,count__56956_56965,i__56957_56966,vec__56958_56967,type_56968,f_56969))
);
{
var G__56970 = seq__56954_56963;
var G__56971 = chunk__56955_56964;
var G__56972 = count__56956_56965;
var G__56973 = (i__56957_56966 + 1);
seq__56954_56963 = G__56970;
chunk__56955_56964 = G__56971;
count__56956_56965 = G__56972;
i__56957_56966 = G__56973;
continue;
}
} else
{var temp__4092__auto___56974 = cljs.core.seq.call(null,seq__56954_56963);if(temp__4092__auto___56974)
{var seq__56954_56975__$1 = temp__4092__auto___56974;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56954_56975__$1))
{var c__4017__auto___56976 = cljs.core.chunk_first.call(null,seq__56954_56975__$1);{
var G__56977 = cljs.core.chunk_rest.call(null,seq__56954_56975__$1);
var G__56978 = c__4017__auto___56976;
var G__56979 = cljs.core.count.call(null,c__4017__auto___56976);
var G__56980 = 0;
seq__56954_56963 = G__56977;
chunk__56955_56964 = G__56978;
count__56956_56965 = G__56979;
i__56957_56966 = G__56980;
continue;
}
} else
{var vec__56959_56981 = cljs.core.first.call(null,seq__56954_56975__$1);var type_56982 = cljs.core.nth.call(null,vec__56959_56981,0,null);var f_56983 = cljs.core.nth.call(null,vec__56959_56981,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_56982,((function (seq__56954_56963,chunk__56955_56964,count__56956_56965,i__56957_56966,vec__56959_56981,type_56982,f_56983,seq__56954_56975__$1,temp__4092__auto___56974){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_56982,this_fn);
return f_56983.call(null,e);
});})(seq__56954_56963,chunk__56955_56964,count__56956_56965,i__56957_56966,vec__56959_56981,type_56982,f_56983,seq__56954_56975__$1,temp__4092__auto___56974))
);
{
var G__56984 = cljs.core.next.call(null,seq__56954_56975__$1);
var G__56985 = null;
var G__56986 = 0;
var G__56987 = 0;
seq__56954_56963 = G__56984;
chunk__56955_56964 = G__56985;
count__56956_56965 = G__56986;
i__56957_56966 = G__56987;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__56988){
var elem_sel = cljs.core.first(arglist__56988);
var type_fs = cljs.core.rest(arglist__56988);
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
var fire_BANG___delegate = function (node,event_type,p__56989){var vec__56991 = p__56989;var update_event_BANG_ = cljs.core.nth.call(null,vec__56991,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__56989 = null;if (arguments.length > 2) {
  p__56989 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__56989);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__56992){
var node = cljs.core.first(arglist__56992);
arglist__56992 = cljs.core.next(arglist__56992);
var event_type = cljs.core.first(arglist__56992);
var p__56989 = cljs.core.rest(arglist__56992);
return fire_BANG___delegate(node,event_type,p__56989);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
