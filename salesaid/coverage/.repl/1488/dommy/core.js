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
var append_BANG___2 = (function (parent,child){var G__8670 = dommy.template.__GT_node_like.call(null,parent);G__8670.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8670;
});
var append_BANG___3 = (function() { 
var G__8675__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8671_8676 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8672_8677 = null;var count__8673_8678 = 0;var i__8674_8679 = 0;while(true){
if((i__8674_8679 < count__8673_8678))
{var c_8680 = cljs.core._nth.call(null,chunk__8672_8677,i__8674_8679);append_BANG_.call(null,parent__$1,c_8680);
{
var G__8681 = seq__8671_8676;
var G__8682 = chunk__8672_8677;
var G__8683 = count__8673_8678;
var G__8684 = (i__8674_8679 + 1);
seq__8671_8676 = G__8681;
chunk__8672_8677 = G__8682;
count__8673_8678 = G__8683;
i__8674_8679 = G__8684;
continue;
}
} else
{var temp__4092__auto___8685 = cljs.core.seq.call(null,seq__8671_8676);if(temp__4092__auto___8685)
{var seq__8671_8686__$1 = temp__4092__auto___8685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8671_8686__$1))
{var c__5497__auto___8687 = cljs.core.chunk_first.call(null,seq__8671_8686__$1);{
var G__8688 = cljs.core.chunk_rest.call(null,seq__8671_8686__$1);
var G__8689 = c__5497__auto___8687;
var G__8690 = cljs.core.count.call(null,c__5497__auto___8687);
var G__8691 = 0;
seq__8671_8676 = G__8688;
chunk__8672_8677 = G__8689;
count__8673_8678 = G__8690;
i__8674_8679 = G__8691;
continue;
}
} else
{var c_8692 = cljs.core.first.call(null,seq__8671_8686__$1);append_BANG_.call(null,parent__$1,c_8692);
{
var G__8693 = cljs.core.next.call(null,seq__8671_8686__$1);
var G__8694 = null;
var G__8695 = 0;
var G__8696 = 0;
seq__8671_8676 = G__8693;
chunk__8672_8677 = G__8694;
count__8673_8678 = G__8695;
i__8674_8679 = G__8696;
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
var G__8675 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8675__delegate.call(this,parent,child,more_children);};
G__8675.cljs$lang$maxFixedArity = 2;
G__8675.cljs$lang$applyTo = (function (arglist__8697){
var parent = cljs.core.first(arglist__8697);
arglist__8697 = cljs.core.next(arglist__8697);
var child = cljs.core.first(arglist__8697);
var more_children = cljs.core.rest(arglist__8697);
return G__8675__delegate(parent,child,more_children);
});
G__8675.cljs$core$IFn$_invoke$arity$variadic = G__8675__delegate;
return G__8675;
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
var prepend_BANG___2 = (function (parent,child){var G__8703 = dommy.template.__GT_node_like.call(null,parent);G__8703.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__8703;
});
var prepend_BANG___3 = (function() { 
var G__8708__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8704_8709 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8705_8710 = null;var count__8706_8711 = 0;var i__8707_8712 = 0;while(true){
if((i__8707_8712 < count__8706_8711))
{var c_8713 = cljs.core._nth.call(null,chunk__8705_8710,i__8707_8712);prepend_BANG_.call(null,parent__$1,c_8713);
{
var G__8714 = seq__8704_8709;
var G__8715 = chunk__8705_8710;
var G__8716 = count__8706_8711;
var G__8717 = (i__8707_8712 + 1);
seq__8704_8709 = G__8714;
chunk__8705_8710 = G__8715;
count__8706_8711 = G__8716;
i__8707_8712 = G__8717;
continue;
}
} else
{var temp__4092__auto___8718 = cljs.core.seq.call(null,seq__8704_8709);if(temp__4092__auto___8718)
{var seq__8704_8719__$1 = temp__4092__auto___8718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8704_8719__$1))
{var c__5497__auto___8720 = cljs.core.chunk_first.call(null,seq__8704_8719__$1);{
var G__8721 = cljs.core.chunk_rest.call(null,seq__8704_8719__$1);
var G__8722 = c__5497__auto___8720;
var G__8723 = cljs.core.count.call(null,c__5497__auto___8720);
var G__8724 = 0;
seq__8704_8709 = G__8721;
chunk__8705_8710 = G__8722;
count__8706_8711 = G__8723;
i__8707_8712 = G__8724;
continue;
}
} else
{var c_8725 = cljs.core.first.call(null,seq__8704_8719__$1);prepend_BANG_.call(null,parent__$1,c_8725);
{
var G__8726 = cljs.core.next.call(null,seq__8704_8719__$1);
var G__8727 = null;
var G__8728 = 0;
var G__8729 = 0;
seq__8704_8709 = G__8726;
chunk__8705_8710 = G__8727;
count__8706_8711 = G__8728;
i__8707_8712 = G__8729;
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
var G__8708 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8708__delegate.call(this,parent,child,more_children);};
G__8708.cljs$lang$maxFixedArity = 2;
G__8708.cljs$lang$applyTo = (function (arglist__8730){
var parent = cljs.core.first(arglist__8730);
arglist__8730 = cljs.core.next(arglist__8730);
var child = cljs.core.first(arglist__8730);
var more_children = cljs.core.rest(arglist__8730);
return G__8708__delegate(parent,child,more_children);
});
G__8708.cljs$core$IFn$_invoke$arity$variadic = G__8708__delegate;
return G__8708;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___8731 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___8731))
{var next_8732 = temp__4090__auto___8731;parent.insertBefore(actual_node,next_8732);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8734 = dommy.template.__GT_node_like.call(null,parent);G__8734.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8734,node_like);
return G__8734;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8736 = elem__$1.parentNode;G__8736.removeChild(elem__$1);
return G__8736;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8737_SHARP_){return p1__8737_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__8738_SHARP_){return !((p1__8738_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8739){var vec__8740 = p__8739;var special_mouse_event = cljs.core.nth.call(null,vec__8740,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__8740,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4773__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4773__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8741){
var elem = cljs.core.first(arglist__8741);
arglist__8741 = cljs.core.next(arglist__8741);
var f = cljs.core.first(arglist__8741);
var args = cljs.core.rest(arglist__8741);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8742_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8742_SHARP_));
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
var vec__8766_8789 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8790 = cljs.core.nth.call(null,vec__8766_8789,0,null);var selector_8791 = cljs.core.nth.call(null,vec__8766_8789,1,null);var seq__8767_8792 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8774_8793 = null;var count__8775_8794 = 0;var i__8776_8795 = 0;while(true){
if((i__8776_8795 < count__8775_8794))
{var vec__8783_8796 = cljs.core._nth.call(null,chunk__8774_8793,i__8776_8795);var orig_type_8797 = cljs.core.nth.call(null,vec__8783_8796,0,null);var f_8798 = cljs.core.nth.call(null,vec__8783_8796,1,null);var seq__8777_8799 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8797,new cljs.core.PersistentArrayMap.fromArray([orig_type_8797,cljs.core.identity], true, false)));var chunk__8779_8800 = null;var count__8780_8801 = 0;var i__8781_8802 = 0;while(true){
if((i__8781_8802 < count__8780_8801))
{var vec__8784_8803 = cljs.core._nth.call(null,chunk__8779_8800,i__8781_8802);var actual_type_8804 = cljs.core.nth.call(null,vec__8784_8803,0,null);var factory_8805 = cljs.core.nth.call(null,vec__8784_8803,1,null);var canonical_f_8806 = (cljs.core.truth_(selector_8791)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8790,selector_8791):cljs.core.identity).call(null,factory_8805.call(null,f_8798));dommy.core.update_event_listeners_BANG_.call(null,elem_8790,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8791,actual_type_8804,f_8798], null),canonical_f_8806);
if(cljs.core.truth_(elem_8790.addEventListener))
{elem_8790.addEventListener(cljs.core.name.call(null,actual_type_8804),canonical_f_8806);
} else
{elem_8790.attachEvent(cljs.core.name.call(null,actual_type_8804),canonical_f_8806);
}
{
var G__8807 = seq__8777_8799;
var G__8808 = chunk__8779_8800;
var G__8809 = count__8780_8801;
var G__8810 = (i__8781_8802 + 1);
seq__8777_8799 = G__8807;
chunk__8779_8800 = G__8808;
count__8780_8801 = G__8809;
i__8781_8802 = G__8810;
continue;
}
} else
{var temp__4092__auto___8811 = cljs.core.seq.call(null,seq__8777_8799);if(temp__4092__auto___8811)
{var seq__8777_8812__$1 = temp__4092__auto___8811;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8777_8812__$1))
{var c__5497__auto___8813 = cljs.core.chunk_first.call(null,seq__8777_8812__$1);{
var G__8814 = cljs.core.chunk_rest.call(null,seq__8777_8812__$1);
var G__8815 = c__5497__auto___8813;
var G__8816 = cljs.core.count.call(null,c__5497__auto___8813);
var G__8817 = 0;
seq__8777_8799 = G__8814;
chunk__8779_8800 = G__8815;
count__8780_8801 = G__8816;
i__8781_8802 = G__8817;
continue;
}
} else
{var vec__8785_8818 = cljs.core.first.call(null,seq__8777_8812__$1);var actual_type_8819 = cljs.core.nth.call(null,vec__8785_8818,0,null);var factory_8820 = cljs.core.nth.call(null,vec__8785_8818,1,null);var canonical_f_8821 = (cljs.core.truth_(selector_8791)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8790,selector_8791):cljs.core.identity).call(null,factory_8820.call(null,f_8798));dommy.core.update_event_listeners_BANG_.call(null,elem_8790,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8791,actual_type_8819,f_8798], null),canonical_f_8821);
if(cljs.core.truth_(elem_8790.addEventListener))
{elem_8790.addEventListener(cljs.core.name.call(null,actual_type_8819),canonical_f_8821);
} else
{elem_8790.attachEvent(cljs.core.name.call(null,actual_type_8819),canonical_f_8821);
}
{
var G__8822 = cljs.core.next.call(null,seq__8777_8812__$1);
var G__8823 = null;
var G__8824 = 0;
var G__8825 = 0;
seq__8777_8799 = G__8822;
chunk__8779_8800 = G__8823;
count__8780_8801 = G__8824;
i__8781_8802 = G__8825;
continue;
}
}
} else
{}
}
break;
}
{
var G__8826 = seq__8767_8792;
var G__8827 = chunk__8774_8793;
var G__8828 = count__8775_8794;
var G__8829 = (i__8776_8795 + 1);
seq__8767_8792 = G__8826;
chunk__8774_8793 = G__8827;
count__8775_8794 = G__8828;
i__8776_8795 = G__8829;
continue;
}
} else
{var temp__4092__auto___8830 = cljs.core.seq.call(null,seq__8767_8792);if(temp__4092__auto___8830)
{var seq__8767_8831__$1 = temp__4092__auto___8830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8767_8831__$1))
{var c__5497__auto___8832 = cljs.core.chunk_first.call(null,seq__8767_8831__$1);{
var G__8833 = cljs.core.chunk_rest.call(null,seq__8767_8831__$1);
var G__8834 = c__5497__auto___8832;
var G__8835 = cljs.core.count.call(null,c__5497__auto___8832);
var G__8836 = 0;
seq__8767_8792 = G__8833;
chunk__8774_8793 = G__8834;
count__8775_8794 = G__8835;
i__8776_8795 = G__8836;
continue;
}
} else
{var vec__8786_8837 = cljs.core.first.call(null,seq__8767_8831__$1);var orig_type_8838 = cljs.core.nth.call(null,vec__8786_8837,0,null);var f_8839 = cljs.core.nth.call(null,vec__8786_8837,1,null);var seq__8768_8840 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8838,new cljs.core.PersistentArrayMap.fromArray([orig_type_8838,cljs.core.identity], true, false)));var chunk__8770_8841 = null;var count__8771_8842 = 0;var i__8772_8843 = 0;while(true){
if((i__8772_8843 < count__8771_8842))
{var vec__8787_8844 = cljs.core._nth.call(null,chunk__8770_8841,i__8772_8843);var actual_type_8845 = cljs.core.nth.call(null,vec__8787_8844,0,null);var factory_8846 = cljs.core.nth.call(null,vec__8787_8844,1,null);var canonical_f_8847 = (cljs.core.truth_(selector_8791)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8790,selector_8791):cljs.core.identity).call(null,factory_8846.call(null,f_8839));dommy.core.update_event_listeners_BANG_.call(null,elem_8790,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8791,actual_type_8845,f_8839], null),canonical_f_8847);
if(cljs.core.truth_(elem_8790.addEventListener))
{elem_8790.addEventListener(cljs.core.name.call(null,actual_type_8845),canonical_f_8847);
} else
{elem_8790.attachEvent(cljs.core.name.call(null,actual_type_8845),canonical_f_8847);
}
{
var G__8848 = seq__8768_8840;
var G__8849 = chunk__8770_8841;
var G__8850 = count__8771_8842;
var G__8851 = (i__8772_8843 + 1);
seq__8768_8840 = G__8848;
chunk__8770_8841 = G__8849;
count__8771_8842 = G__8850;
i__8772_8843 = G__8851;
continue;
}
} else
{var temp__4092__auto___8852__$1 = cljs.core.seq.call(null,seq__8768_8840);if(temp__4092__auto___8852__$1)
{var seq__8768_8853__$1 = temp__4092__auto___8852__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8768_8853__$1))
{var c__5497__auto___8854 = cljs.core.chunk_first.call(null,seq__8768_8853__$1);{
var G__8855 = cljs.core.chunk_rest.call(null,seq__8768_8853__$1);
var G__8856 = c__5497__auto___8854;
var G__8857 = cljs.core.count.call(null,c__5497__auto___8854);
var G__8858 = 0;
seq__8768_8840 = G__8855;
chunk__8770_8841 = G__8856;
count__8771_8842 = G__8857;
i__8772_8843 = G__8858;
continue;
}
} else
{var vec__8788_8859 = cljs.core.first.call(null,seq__8768_8853__$1);var actual_type_8860 = cljs.core.nth.call(null,vec__8788_8859,0,null);var factory_8861 = cljs.core.nth.call(null,vec__8788_8859,1,null);var canonical_f_8862 = (cljs.core.truth_(selector_8791)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8790,selector_8791):cljs.core.identity).call(null,factory_8861.call(null,f_8839));dommy.core.update_event_listeners_BANG_.call(null,elem_8790,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8791,actual_type_8860,f_8839], null),canonical_f_8862);
if(cljs.core.truth_(elem_8790.addEventListener))
{elem_8790.addEventListener(cljs.core.name.call(null,actual_type_8860),canonical_f_8862);
} else
{elem_8790.attachEvent(cljs.core.name.call(null,actual_type_8860),canonical_f_8862);
}
{
var G__8863 = cljs.core.next.call(null,seq__8768_8853__$1);
var G__8864 = null;
var G__8865 = 0;
var G__8866 = 0;
seq__8768_8840 = G__8863;
chunk__8770_8841 = G__8864;
count__8771_8842 = G__8865;
i__8772_8843 = G__8866;
continue;
}
}
} else
{}
}
break;
}
{
var G__8867 = cljs.core.next.call(null,seq__8767_8831__$1);
var G__8868 = null;
var G__8869 = 0;
var G__8870 = 0;
seq__8767_8792 = G__8867;
chunk__8774_8793 = G__8868;
count__8775_8794 = G__8869;
i__8776_8795 = G__8870;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__8871){
var elem_sel = cljs.core.first(arglist__8871);
var type_fs = cljs.core.rest(arglist__8871);
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
var vec__8895_8918 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8919 = cljs.core.nth.call(null,vec__8895_8918,0,null);var selector_8920 = cljs.core.nth.call(null,vec__8895_8918,1,null);var seq__8896_8921 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8903_8922 = null;var count__8904_8923 = 0;var i__8905_8924 = 0;while(true){
if((i__8905_8924 < count__8904_8923))
{var vec__8912_8925 = cljs.core._nth.call(null,chunk__8903_8922,i__8905_8924);var orig_type_8926 = cljs.core.nth.call(null,vec__8912_8925,0,null);var f_8927 = cljs.core.nth.call(null,vec__8912_8925,1,null);var seq__8906_8928 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8926,new cljs.core.PersistentArrayMap.fromArray([orig_type_8926,cljs.core.identity], true, false)));var chunk__8908_8929 = null;var count__8909_8930 = 0;var i__8910_8931 = 0;while(true){
if((i__8910_8931 < count__8909_8930))
{var vec__8913_8932 = cljs.core._nth.call(null,chunk__8908_8929,i__8910_8931);var actual_type_8933 = cljs.core.nth.call(null,vec__8913_8932,0,null);var __8934 = cljs.core.nth.call(null,vec__8913_8932,1,null);var keys_8935 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8920,actual_type_8933,f_8927], null);var canonical_f_8936 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8919),keys_8935);dommy.core.update_event_listeners_BANG_.call(null,elem_8919,dommy.utils.dissoc_in,keys_8935);
if(cljs.core.truth_(elem_8919.removeEventListener))
{elem_8919.removeEventListener(cljs.core.name.call(null,actual_type_8933),canonical_f_8936);
} else
{elem_8919.detachEvent(cljs.core.name.call(null,actual_type_8933),canonical_f_8936);
}
{
var G__8937 = seq__8906_8928;
var G__8938 = chunk__8908_8929;
var G__8939 = count__8909_8930;
var G__8940 = (i__8910_8931 + 1);
seq__8906_8928 = G__8937;
chunk__8908_8929 = G__8938;
count__8909_8930 = G__8939;
i__8910_8931 = G__8940;
continue;
}
} else
{var temp__4092__auto___8941 = cljs.core.seq.call(null,seq__8906_8928);if(temp__4092__auto___8941)
{var seq__8906_8942__$1 = temp__4092__auto___8941;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8906_8942__$1))
{var c__5497__auto___8943 = cljs.core.chunk_first.call(null,seq__8906_8942__$1);{
var G__8944 = cljs.core.chunk_rest.call(null,seq__8906_8942__$1);
var G__8945 = c__5497__auto___8943;
var G__8946 = cljs.core.count.call(null,c__5497__auto___8943);
var G__8947 = 0;
seq__8906_8928 = G__8944;
chunk__8908_8929 = G__8945;
count__8909_8930 = G__8946;
i__8910_8931 = G__8947;
continue;
}
} else
{var vec__8914_8948 = cljs.core.first.call(null,seq__8906_8942__$1);var actual_type_8949 = cljs.core.nth.call(null,vec__8914_8948,0,null);var __8950 = cljs.core.nth.call(null,vec__8914_8948,1,null);var keys_8951 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8920,actual_type_8949,f_8927], null);var canonical_f_8952 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8919),keys_8951);dommy.core.update_event_listeners_BANG_.call(null,elem_8919,dommy.utils.dissoc_in,keys_8951);
if(cljs.core.truth_(elem_8919.removeEventListener))
{elem_8919.removeEventListener(cljs.core.name.call(null,actual_type_8949),canonical_f_8952);
} else
{elem_8919.detachEvent(cljs.core.name.call(null,actual_type_8949),canonical_f_8952);
}
{
var G__8953 = cljs.core.next.call(null,seq__8906_8942__$1);
var G__8954 = null;
var G__8955 = 0;
var G__8956 = 0;
seq__8906_8928 = G__8953;
chunk__8908_8929 = G__8954;
count__8909_8930 = G__8955;
i__8910_8931 = G__8956;
continue;
}
}
} else
{}
}
break;
}
{
var G__8957 = seq__8896_8921;
var G__8958 = chunk__8903_8922;
var G__8959 = count__8904_8923;
var G__8960 = (i__8905_8924 + 1);
seq__8896_8921 = G__8957;
chunk__8903_8922 = G__8958;
count__8904_8923 = G__8959;
i__8905_8924 = G__8960;
continue;
}
} else
{var temp__4092__auto___8961 = cljs.core.seq.call(null,seq__8896_8921);if(temp__4092__auto___8961)
{var seq__8896_8962__$1 = temp__4092__auto___8961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8896_8962__$1))
{var c__5497__auto___8963 = cljs.core.chunk_first.call(null,seq__8896_8962__$1);{
var G__8964 = cljs.core.chunk_rest.call(null,seq__8896_8962__$1);
var G__8965 = c__5497__auto___8963;
var G__8966 = cljs.core.count.call(null,c__5497__auto___8963);
var G__8967 = 0;
seq__8896_8921 = G__8964;
chunk__8903_8922 = G__8965;
count__8904_8923 = G__8966;
i__8905_8924 = G__8967;
continue;
}
} else
{var vec__8915_8968 = cljs.core.first.call(null,seq__8896_8962__$1);var orig_type_8969 = cljs.core.nth.call(null,vec__8915_8968,0,null);var f_8970 = cljs.core.nth.call(null,vec__8915_8968,1,null);var seq__8897_8971 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8969,new cljs.core.PersistentArrayMap.fromArray([orig_type_8969,cljs.core.identity], true, false)));var chunk__8899_8972 = null;var count__8900_8973 = 0;var i__8901_8974 = 0;while(true){
if((i__8901_8974 < count__8900_8973))
{var vec__8916_8975 = cljs.core._nth.call(null,chunk__8899_8972,i__8901_8974);var actual_type_8976 = cljs.core.nth.call(null,vec__8916_8975,0,null);var __8977 = cljs.core.nth.call(null,vec__8916_8975,1,null);var keys_8978 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8920,actual_type_8976,f_8970], null);var canonical_f_8979 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8919),keys_8978);dommy.core.update_event_listeners_BANG_.call(null,elem_8919,dommy.utils.dissoc_in,keys_8978);
if(cljs.core.truth_(elem_8919.removeEventListener))
{elem_8919.removeEventListener(cljs.core.name.call(null,actual_type_8976),canonical_f_8979);
} else
{elem_8919.detachEvent(cljs.core.name.call(null,actual_type_8976),canonical_f_8979);
}
{
var G__8980 = seq__8897_8971;
var G__8981 = chunk__8899_8972;
var G__8982 = count__8900_8973;
var G__8983 = (i__8901_8974 + 1);
seq__8897_8971 = G__8980;
chunk__8899_8972 = G__8981;
count__8900_8973 = G__8982;
i__8901_8974 = G__8983;
continue;
}
} else
{var temp__4092__auto___8984__$1 = cljs.core.seq.call(null,seq__8897_8971);if(temp__4092__auto___8984__$1)
{var seq__8897_8985__$1 = temp__4092__auto___8984__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8897_8985__$1))
{var c__5497__auto___8986 = cljs.core.chunk_first.call(null,seq__8897_8985__$1);{
var G__8987 = cljs.core.chunk_rest.call(null,seq__8897_8985__$1);
var G__8988 = c__5497__auto___8986;
var G__8989 = cljs.core.count.call(null,c__5497__auto___8986);
var G__8990 = 0;
seq__8897_8971 = G__8987;
chunk__8899_8972 = G__8988;
count__8900_8973 = G__8989;
i__8901_8974 = G__8990;
continue;
}
} else
{var vec__8917_8991 = cljs.core.first.call(null,seq__8897_8985__$1);var actual_type_8992 = cljs.core.nth.call(null,vec__8917_8991,0,null);var __8993 = cljs.core.nth.call(null,vec__8917_8991,1,null);var keys_8994 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8920,actual_type_8992,f_8970], null);var canonical_f_8995 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8919),keys_8994);dommy.core.update_event_listeners_BANG_.call(null,elem_8919,dommy.utils.dissoc_in,keys_8994);
if(cljs.core.truth_(elem_8919.removeEventListener))
{elem_8919.removeEventListener(cljs.core.name.call(null,actual_type_8992),canonical_f_8995);
} else
{elem_8919.detachEvent(cljs.core.name.call(null,actual_type_8992),canonical_f_8995);
}
{
var G__8996 = cljs.core.next.call(null,seq__8897_8985__$1);
var G__8997 = null;
var G__8998 = 0;
var G__8999 = 0;
seq__8897_8971 = G__8996;
chunk__8899_8972 = G__8997;
count__8900_8973 = G__8998;
i__8901_8974 = G__8999;
continue;
}
}
} else
{}
}
break;
}
{
var G__9000 = cljs.core.next.call(null,seq__8896_8962__$1);
var G__9001 = null;
var G__9002 = 0;
var G__9003 = 0;
seq__8896_8921 = G__9000;
chunk__8903_8922 = G__9001;
count__8904_8923 = G__9002;
i__8905_8924 = G__9003;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9004){
var elem_sel = cljs.core.first(arglist__9004);
var type_fs = cljs.core.rest(arglist__9004);
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
var vec__9012_9019 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9020 = cljs.core.nth.call(null,vec__9012_9019,0,null);var selector_9021 = cljs.core.nth.call(null,vec__9012_9019,1,null);var seq__9013_9022 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9014_9023 = null;var count__9015_9024 = 0;var i__9016_9025 = 0;while(true){
if((i__9016_9025 < count__9015_9024))
{var vec__9017_9026 = cljs.core._nth.call(null,chunk__9014_9023,i__9016_9025);var type_9027 = cljs.core.nth.call(null,vec__9017_9026,0,null);var f_9028 = cljs.core.nth.call(null,vec__9017_9026,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9027,((function (seq__9013_9022,chunk__9014_9023,count__9015_9024,i__9016_9025,vec__9017_9026,type_9027,f_9028){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9027,this_fn);
return f_9028.call(null,e);
});})(seq__9013_9022,chunk__9014_9023,count__9015_9024,i__9016_9025,vec__9017_9026,type_9027,f_9028))
);
{
var G__9029 = seq__9013_9022;
var G__9030 = chunk__9014_9023;
var G__9031 = count__9015_9024;
var G__9032 = (i__9016_9025 + 1);
seq__9013_9022 = G__9029;
chunk__9014_9023 = G__9030;
count__9015_9024 = G__9031;
i__9016_9025 = G__9032;
continue;
}
} else
{var temp__4092__auto___9033 = cljs.core.seq.call(null,seq__9013_9022);if(temp__4092__auto___9033)
{var seq__9013_9034__$1 = temp__4092__auto___9033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9013_9034__$1))
{var c__5497__auto___9035 = cljs.core.chunk_first.call(null,seq__9013_9034__$1);{
var G__9036 = cljs.core.chunk_rest.call(null,seq__9013_9034__$1);
var G__9037 = c__5497__auto___9035;
var G__9038 = cljs.core.count.call(null,c__5497__auto___9035);
var G__9039 = 0;
seq__9013_9022 = G__9036;
chunk__9014_9023 = G__9037;
count__9015_9024 = G__9038;
i__9016_9025 = G__9039;
continue;
}
} else
{var vec__9018_9040 = cljs.core.first.call(null,seq__9013_9034__$1);var type_9041 = cljs.core.nth.call(null,vec__9018_9040,0,null);var f_9042 = cljs.core.nth.call(null,vec__9018_9040,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9041,((function (seq__9013_9022,chunk__9014_9023,count__9015_9024,i__9016_9025,vec__9018_9040,type_9041,f_9042,seq__9013_9034__$1,temp__4092__auto___9033){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9041,this_fn);
return f_9042.call(null,e);
});})(seq__9013_9022,chunk__9014_9023,count__9015_9024,i__9016_9025,vec__9018_9040,type_9041,f_9042,seq__9013_9034__$1,temp__4092__auto___9033))
);
{
var G__9043 = cljs.core.next.call(null,seq__9013_9034__$1);
var G__9044 = null;
var G__9045 = 0;
var G__9046 = 0;
seq__9013_9022 = G__9043;
chunk__9014_9023 = G__9044;
count__9015_9024 = G__9045;
i__9016_9025 = G__9046;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9047){
var elem_sel = cljs.core.first(arglist__9047);
var type_fs = cljs.core.rest(arglist__9047);
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
var fire_BANG___delegate = function (node,event_type,p__9048){var vec__9050 = p__9048;var update_event_BANG_ = cljs.core.nth.call(null,vec__9050,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__9048 = null;if (arguments.length > 2) {
  p__9048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__9048);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__9051){
var node = cljs.core.first(arglist__9051);
arglist__9051 = cljs.core.next(arglist__9051);
var event_type = cljs.core.first(arglist__9051);
var p__9048 = cljs.core.rest(arglist__9051);
return fire_BANG___delegate(node,event_type,p__9048);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
