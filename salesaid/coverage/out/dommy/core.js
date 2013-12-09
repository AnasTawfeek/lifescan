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
dommy.core.text = (function text(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var or__3291__auto__ = elem__$1.textContent;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
var append_BANG___2 = (function (parent,child){var G__7991 = dommy.template.__GT_node_like.call(null,parent);G__7991.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__7991;
});
var append_BANG___3 = (function() { 
var G__7996__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__7992_7997 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__7993_7998 = null;var count__7994_7999 = 0;var i__7995_8000 = 0;while(true){
if((i__7995_8000 < count__7994_7999))
{var c_8001 = cljs.core._nth.call(null,chunk__7993_7998,i__7995_8000);append_BANG_.call(null,parent__$1,c_8001);
{
var G__8002 = seq__7992_7997;
var G__8003 = chunk__7993_7998;
var G__8004 = count__7994_7999;
var G__8005 = (i__7995_8000 + 1);
seq__7992_7997 = G__8002;
chunk__7993_7998 = G__8003;
count__7994_7999 = G__8004;
i__7995_8000 = G__8005;
continue;
}
} else
{var temp__4092__auto___8006 = cljs.core.seq.call(null,seq__7992_7997);if(temp__4092__auto___8006)
{var seq__7992_8007__$1 = temp__4092__auto___8006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7992_8007__$1))
{var c__4015__auto___8008 = cljs.core.chunk_first.call(null,seq__7992_8007__$1);{
var G__8009 = cljs.core.chunk_rest.call(null,seq__7992_8007__$1);
var G__8010 = c__4015__auto___8008;
var G__8011 = cljs.core.count.call(null,c__4015__auto___8008);
var G__8012 = 0;
seq__7992_7997 = G__8009;
chunk__7993_7998 = G__8010;
count__7994_7999 = G__8011;
i__7995_8000 = G__8012;
continue;
}
} else
{var c_8013 = cljs.core.first.call(null,seq__7992_8007__$1);append_BANG_.call(null,parent__$1,c_8013);
{
var G__8014 = cljs.core.next.call(null,seq__7992_8007__$1);
var G__8015 = null;
var G__8016 = 0;
var G__8017 = 0;
seq__7992_7997 = G__8014;
chunk__7993_7998 = G__8015;
count__7994_7999 = G__8016;
i__7995_8000 = G__8017;
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
var G__7996 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7996__delegate.call(this,parent,child,more_children);};
G__7996.cljs$lang$maxFixedArity = 2;
G__7996.cljs$lang$applyTo = (function (arglist__8018){
var parent = cljs.core.first(arglist__8018);
arglist__8018 = cljs.core.next(arglist__8018);
var child = cljs.core.first(arglist__8018);
var more_children = cljs.core.rest(arglist__8018);
return G__7996__delegate(parent,child,more_children);
});
G__7996.cljs$core$IFn$_invoke$arity$variadic = G__7996__delegate;
return G__7996;
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
var prepend_BANG___2 = (function (parent,child){var G__8024 = dommy.template.__GT_node_like.call(null,parent);G__8024.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__8024;
});
var prepend_BANG___3 = (function() { 
var G__8029__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8025_8030 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8026_8031 = null;var count__8027_8032 = 0;var i__8028_8033 = 0;while(true){
if((i__8028_8033 < count__8027_8032))
{var c_8034 = cljs.core._nth.call(null,chunk__8026_8031,i__8028_8033);prepend_BANG_.call(null,parent__$1,c_8034);
{
var G__8035 = seq__8025_8030;
var G__8036 = chunk__8026_8031;
var G__8037 = count__8027_8032;
var G__8038 = (i__8028_8033 + 1);
seq__8025_8030 = G__8035;
chunk__8026_8031 = G__8036;
count__8027_8032 = G__8037;
i__8028_8033 = G__8038;
continue;
}
} else
{var temp__4092__auto___8039 = cljs.core.seq.call(null,seq__8025_8030);if(temp__4092__auto___8039)
{var seq__8025_8040__$1 = temp__4092__auto___8039;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8025_8040__$1))
{var c__4015__auto___8041 = cljs.core.chunk_first.call(null,seq__8025_8040__$1);{
var G__8042 = cljs.core.chunk_rest.call(null,seq__8025_8040__$1);
var G__8043 = c__4015__auto___8041;
var G__8044 = cljs.core.count.call(null,c__4015__auto___8041);
var G__8045 = 0;
seq__8025_8030 = G__8042;
chunk__8026_8031 = G__8043;
count__8027_8032 = G__8044;
i__8028_8033 = G__8045;
continue;
}
} else
{var c_8046 = cljs.core.first.call(null,seq__8025_8040__$1);prepend_BANG_.call(null,parent__$1,c_8046);
{
var G__8047 = cljs.core.next.call(null,seq__8025_8040__$1);
var G__8048 = null;
var G__8049 = 0;
var G__8050 = 0;
seq__8025_8030 = G__8047;
chunk__8026_8031 = G__8048;
count__8027_8032 = G__8049;
i__8028_8033 = G__8050;
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
var G__8029 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8029__delegate.call(this,parent,child,more_children);};
G__8029.cljs$lang$maxFixedArity = 2;
G__8029.cljs$lang$applyTo = (function (arglist__8051){
var parent = cljs.core.first(arglist__8051);
arglist__8051 = cljs.core.next(arglist__8051);
var child = cljs.core.first(arglist__8051);
var more_children = cljs.core.rest(arglist__8051);
return G__8029__delegate(parent,child,more_children);
});
G__8029.cljs$core$IFn$_invoke$arity$variadic = G__8029__delegate;
return G__8029;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___8052 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___8052))
{var next_8053 = temp__4090__auto___8052;parent.insertBefore(actual_node,next_8053);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8055 = dommy.template.__GT_node_like.call(null,parent);G__8055.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8055,node_like);
return G__8055;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8057 = elem__$1.parentNode;G__8057.removeChild(elem__$1);
return G__8057;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8058_SHARP_){return p1__8058_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__8059_SHARP_){return !((p1__8059_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8060){var vec__8061 = p__8060;var special_mouse_event = cljs.core.nth.call(null,vec__8061,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__8061,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3291__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3279__auto__ = related_target;if(cljs.core.truth_(and__3279__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3279__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__3291__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8062){
var elem = cljs.core.first(arglist__8062);
arglist__8062 = cljs.core.next(arglist__8062);
var f = cljs.core.first(arglist__8062);
var args = cljs.core.rest(arglist__8062);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8063_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8063_SHARP_));
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
var vec__8087_8110 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8111 = cljs.core.nth.call(null,vec__8087_8110,0,null);var selector_8112 = cljs.core.nth.call(null,vec__8087_8110,1,null);var seq__8088_8113 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8095_8114 = null;var count__8096_8115 = 0;var i__8097_8116 = 0;while(true){
if((i__8097_8116 < count__8096_8115))
{var vec__8104_8117 = cljs.core._nth.call(null,chunk__8095_8114,i__8097_8116);var orig_type_8118 = cljs.core.nth.call(null,vec__8104_8117,0,null);var f_8119 = cljs.core.nth.call(null,vec__8104_8117,1,null);var seq__8098_8120 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8118,new cljs.core.PersistentArrayMap.fromArray([orig_type_8118,cljs.core.identity], true, false)));var chunk__8100_8121 = null;var count__8101_8122 = 0;var i__8102_8123 = 0;while(true){
if((i__8102_8123 < count__8101_8122))
{var vec__8105_8124 = cljs.core._nth.call(null,chunk__8100_8121,i__8102_8123);var actual_type_8125 = cljs.core.nth.call(null,vec__8105_8124,0,null);var factory_8126 = cljs.core.nth.call(null,vec__8105_8124,1,null);var canonical_f_8127 = (cljs.core.truth_(selector_8112)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8111,selector_8112):cljs.core.identity).call(null,factory_8126.call(null,f_8119));dommy.core.update_event_listeners_BANG_.call(null,elem_8111,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8112,actual_type_8125,f_8119], null),canonical_f_8127);
if(cljs.core.truth_(elem_8111.addEventListener))
{elem_8111.addEventListener(cljs.core.name.call(null,actual_type_8125),canonical_f_8127);
} else
{elem_8111.attachEvent(cljs.core.name.call(null,actual_type_8125),canonical_f_8127);
}
{
var G__8128 = seq__8098_8120;
var G__8129 = chunk__8100_8121;
var G__8130 = count__8101_8122;
var G__8131 = (i__8102_8123 + 1);
seq__8098_8120 = G__8128;
chunk__8100_8121 = G__8129;
count__8101_8122 = G__8130;
i__8102_8123 = G__8131;
continue;
}
} else
{var temp__4092__auto___8132 = cljs.core.seq.call(null,seq__8098_8120);if(temp__4092__auto___8132)
{var seq__8098_8133__$1 = temp__4092__auto___8132;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8098_8133__$1))
{var c__4015__auto___8134 = cljs.core.chunk_first.call(null,seq__8098_8133__$1);{
var G__8135 = cljs.core.chunk_rest.call(null,seq__8098_8133__$1);
var G__8136 = c__4015__auto___8134;
var G__8137 = cljs.core.count.call(null,c__4015__auto___8134);
var G__8138 = 0;
seq__8098_8120 = G__8135;
chunk__8100_8121 = G__8136;
count__8101_8122 = G__8137;
i__8102_8123 = G__8138;
continue;
}
} else
{var vec__8106_8139 = cljs.core.first.call(null,seq__8098_8133__$1);var actual_type_8140 = cljs.core.nth.call(null,vec__8106_8139,0,null);var factory_8141 = cljs.core.nth.call(null,vec__8106_8139,1,null);var canonical_f_8142 = (cljs.core.truth_(selector_8112)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8111,selector_8112):cljs.core.identity).call(null,factory_8141.call(null,f_8119));dommy.core.update_event_listeners_BANG_.call(null,elem_8111,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8112,actual_type_8140,f_8119], null),canonical_f_8142);
if(cljs.core.truth_(elem_8111.addEventListener))
{elem_8111.addEventListener(cljs.core.name.call(null,actual_type_8140),canonical_f_8142);
} else
{elem_8111.attachEvent(cljs.core.name.call(null,actual_type_8140),canonical_f_8142);
}
{
var G__8143 = cljs.core.next.call(null,seq__8098_8133__$1);
var G__8144 = null;
var G__8145 = 0;
var G__8146 = 0;
seq__8098_8120 = G__8143;
chunk__8100_8121 = G__8144;
count__8101_8122 = G__8145;
i__8102_8123 = G__8146;
continue;
}
}
} else
{}
}
break;
}
{
var G__8147 = seq__8088_8113;
var G__8148 = chunk__8095_8114;
var G__8149 = count__8096_8115;
var G__8150 = (i__8097_8116 + 1);
seq__8088_8113 = G__8147;
chunk__8095_8114 = G__8148;
count__8096_8115 = G__8149;
i__8097_8116 = G__8150;
continue;
}
} else
{var temp__4092__auto___8151 = cljs.core.seq.call(null,seq__8088_8113);if(temp__4092__auto___8151)
{var seq__8088_8152__$1 = temp__4092__auto___8151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8088_8152__$1))
{var c__4015__auto___8153 = cljs.core.chunk_first.call(null,seq__8088_8152__$1);{
var G__8154 = cljs.core.chunk_rest.call(null,seq__8088_8152__$1);
var G__8155 = c__4015__auto___8153;
var G__8156 = cljs.core.count.call(null,c__4015__auto___8153);
var G__8157 = 0;
seq__8088_8113 = G__8154;
chunk__8095_8114 = G__8155;
count__8096_8115 = G__8156;
i__8097_8116 = G__8157;
continue;
}
} else
{var vec__8107_8158 = cljs.core.first.call(null,seq__8088_8152__$1);var orig_type_8159 = cljs.core.nth.call(null,vec__8107_8158,0,null);var f_8160 = cljs.core.nth.call(null,vec__8107_8158,1,null);var seq__8089_8161 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8159,new cljs.core.PersistentArrayMap.fromArray([orig_type_8159,cljs.core.identity], true, false)));var chunk__8091_8162 = null;var count__8092_8163 = 0;var i__8093_8164 = 0;while(true){
if((i__8093_8164 < count__8092_8163))
{var vec__8108_8165 = cljs.core._nth.call(null,chunk__8091_8162,i__8093_8164);var actual_type_8166 = cljs.core.nth.call(null,vec__8108_8165,0,null);var factory_8167 = cljs.core.nth.call(null,vec__8108_8165,1,null);var canonical_f_8168 = (cljs.core.truth_(selector_8112)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8111,selector_8112):cljs.core.identity).call(null,factory_8167.call(null,f_8160));dommy.core.update_event_listeners_BANG_.call(null,elem_8111,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8112,actual_type_8166,f_8160], null),canonical_f_8168);
if(cljs.core.truth_(elem_8111.addEventListener))
{elem_8111.addEventListener(cljs.core.name.call(null,actual_type_8166),canonical_f_8168);
} else
{elem_8111.attachEvent(cljs.core.name.call(null,actual_type_8166),canonical_f_8168);
}
{
var G__8169 = seq__8089_8161;
var G__8170 = chunk__8091_8162;
var G__8171 = count__8092_8163;
var G__8172 = (i__8093_8164 + 1);
seq__8089_8161 = G__8169;
chunk__8091_8162 = G__8170;
count__8092_8163 = G__8171;
i__8093_8164 = G__8172;
continue;
}
} else
{var temp__4092__auto___8173__$1 = cljs.core.seq.call(null,seq__8089_8161);if(temp__4092__auto___8173__$1)
{var seq__8089_8174__$1 = temp__4092__auto___8173__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8089_8174__$1))
{var c__4015__auto___8175 = cljs.core.chunk_first.call(null,seq__8089_8174__$1);{
var G__8176 = cljs.core.chunk_rest.call(null,seq__8089_8174__$1);
var G__8177 = c__4015__auto___8175;
var G__8178 = cljs.core.count.call(null,c__4015__auto___8175);
var G__8179 = 0;
seq__8089_8161 = G__8176;
chunk__8091_8162 = G__8177;
count__8092_8163 = G__8178;
i__8093_8164 = G__8179;
continue;
}
} else
{var vec__8109_8180 = cljs.core.first.call(null,seq__8089_8174__$1);var actual_type_8181 = cljs.core.nth.call(null,vec__8109_8180,0,null);var factory_8182 = cljs.core.nth.call(null,vec__8109_8180,1,null);var canonical_f_8183 = (cljs.core.truth_(selector_8112)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8111,selector_8112):cljs.core.identity).call(null,factory_8182.call(null,f_8160));dommy.core.update_event_listeners_BANG_.call(null,elem_8111,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8112,actual_type_8181,f_8160], null),canonical_f_8183);
if(cljs.core.truth_(elem_8111.addEventListener))
{elem_8111.addEventListener(cljs.core.name.call(null,actual_type_8181),canonical_f_8183);
} else
{elem_8111.attachEvent(cljs.core.name.call(null,actual_type_8181),canonical_f_8183);
}
{
var G__8184 = cljs.core.next.call(null,seq__8089_8174__$1);
var G__8185 = null;
var G__8186 = 0;
var G__8187 = 0;
seq__8089_8161 = G__8184;
chunk__8091_8162 = G__8185;
count__8092_8163 = G__8186;
i__8093_8164 = G__8187;
continue;
}
}
} else
{}
}
break;
}
{
var G__8188 = cljs.core.next.call(null,seq__8088_8152__$1);
var G__8189 = null;
var G__8190 = 0;
var G__8191 = 0;
seq__8088_8113 = G__8188;
chunk__8095_8114 = G__8189;
count__8096_8115 = G__8190;
i__8097_8116 = G__8191;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__8192){
var elem_sel = cljs.core.first(arglist__8192);
var type_fs = cljs.core.rest(arglist__8192);
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
var vec__8216_8239 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8240 = cljs.core.nth.call(null,vec__8216_8239,0,null);var selector_8241 = cljs.core.nth.call(null,vec__8216_8239,1,null);var seq__8217_8242 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8224_8243 = null;var count__8225_8244 = 0;var i__8226_8245 = 0;while(true){
if((i__8226_8245 < count__8225_8244))
{var vec__8233_8246 = cljs.core._nth.call(null,chunk__8224_8243,i__8226_8245);var orig_type_8247 = cljs.core.nth.call(null,vec__8233_8246,0,null);var f_8248 = cljs.core.nth.call(null,vec__8233_8246,1,null);var seq__8227_8249 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8247,new cljs.core.PersistentArrayMap.fromArray([orig_type_8247,cljs.core.identity], true, false)));var chunk__8229_8250 = null;var count__8230_8251 = 0;var i__8231_8252 = 0;while(true){
if((i__8231_8252 < count__8230_8251))
{var vec__8234_8253 = cljs.core._nth.call(null,chunk__8229_8250,i__8231_8252);var actual_type_8254 = cljs.core.nth.call(null,vec__8234_8253,0,null);var __8255 = cljs.core.nth.call(null,vec__8234_8253,1,null);var keys_8256 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8241,actual_type_8254,f_8248], null);var canonical_f_8257 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8240),keys_8256);dommy.core.update_event_listeners_BANG_.call(null,elem_8240,dommy.utils.dissoc_in,keys_8256);
if(cljs.core.truth_(elem_8240.removeEventListener))
{elem_8240.removeEventListener(cljs.core.name.call(null,actual_type_8254),canonical_f_8257);
} else
{elem_8240.detachEvent(cljs.core.name.call(null,actual_type_8254),canonical_f_8257);
}
{
var G__8258 = seq__8227_8249;
var G__8259 = chunk__8229_8250;
var G__8260 = count__8230_8251;
var G__8261 = (i__8231_8252 + 1);
seq__8227_8249 = G__8258;
chunk__8229_8250 = G__8259;
count__8230_8251 = G__8260;
i__8231_8252 = G__8261;
continue;
}
} else
{var temp__4092__auto___8262 = cljs.core.seq.call(null,seq__8227_8249);if(temp__4092__auto___8262)
{var seq__8227_8263__$1 = temp__4092__auto___8262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8227_8263__$1))
{var c__4015__auto___8264 = cljs.core.chunk_first.call(null,seq__8227_8263__$1);{
var G__8265 = cljs.core.chunk_rest.call(null,seq__8227_8263__$1);
var G__8266 = c__4015__auto___8264;
var G__8267 = cljs.core.count.call(null,c__4015__auto___8264);
var G__8268 = 0;
seq__8227_8249 = G__8265;
chunk__8229_8250 = G__8266;
count__8230_8251 = G__8267;
i__8231_8252 = G__8268;
continue;
}
} else
{var vec__8235_8269 = cljs.core.first.call(null,seq__8227_8263__$1);var actual_type_8270 = cljs.core.nth.call(null,vec__8235_8269,0,null);var __8271 = cljs.core.nth.call(null,vec__8235_8269,1,null);var keys_8272 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8241,actual_type_8270,f_8248], null);var canonical_f_8273 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8240),keys_8272);dommy.core.update_event_listeners_BANG_.call(null,elem_8240,dommy.utils.dissoc_in,keys_8272);
if(cljs.core.truth_(elem_8240.removeEventListener))
{elem_8240.removeEventListener(cljs.core.name.call(null,actual_type_8270),canonical_f_8273);
} else
{elem_8240.detachEvent(cljs.core.name.call(null,actual_type_8270),canonical_f_8273);
}
{
var G__8274 = cljs.core.next.call(null,seq__8227_8263__$1);
var G__8275 = null;
var G__8276 = 0;
var G__8277 = 0;
seq__8227_8249 = G__8274;
chunk__8229_8250 = G__8275;
count__8230_8251 = G__8276;
i__8231_8252 = G__8277;
continue;
}
}
} else
{}
}
break;
}
{
var G__8278 = seq__8217_8242;
var G__8279 = chunk__8224_8243;
var G__8280 = count__8225_8244;
var G__8281 = (i__8226_8245 + 1);
seq__8217_8242 = G__8278;
chunk__8224_8243 = G__8279;
count__8225_8244 = G__8280;
i__8226_8245 = G__8281;
continue;
}
} else
{var temp__4092__auto___8282 = cljs.core.seq.call(null,seq__8217_8242);if(temp__4092__auto___8282)
{var seq__8217_8283__$1 = temp__4092__auto___8282;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8217_8283__$1))
{var c__4015__auto___8284 = cljs.core.chunk_first.call(null,seq__8217_8283__$1);{
var G__8285 = cljs.core.chunk_rest.call(null,seq__8217_8283__$1);
var G__8286 = c__4015__auto___8284;
var G__8287 = cljs.core.count.call(null,c__4015__auto___8284);
var G__8288 = 0;
seq__8217_8242 = G__8285;
chunk__8224_8243 = G__8286;
count__8225_8244 = G__8287;
i__8226_8245 = G__8288;
continue;
}
} else
{var vec__8236_8289 = cljs.core.first.call(null,seq__8217_8283__$1);var orig_type_8290 = cljs.core.nth.call(null,vec__8236_8289,0,null);var f_8291 = cljs.core.nth.call(null,vec__8236_8289,1,null);var seq__8218_8292 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8290,new cljs.core.PersistentArrayMap.fromArray([orig_type_8290,cljs.core.identity], true, false)));var chunk__8220_8293 = null;var count__8221_8294 = 0;var i__8222_8295 = 0;while(true){
if((i__8222_8295 < count__8221_8294))
{var vec__8237_8296 = cljs.core._nth.call(null,chunk__8220_8293,i__8222_8295);var actual_type_8297 = cljs.core.nth.call(null,vec__8237_8296,0,null);var __8298 = cljs.core.nth.call(null,vec__8237_8296,1,null);var keys_8299 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8241,actual_type_8297,f_8291], null);var canonical_f_8300 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8240),keys_8299);dommy.core.update_event_listeners_BANG_.call(null,elem_8240,dommy.utils.dissoc_in,keys_8299);
if(cljs.core.truth_(elem_8240.removeEventListener))
{elem_8240.removeEventListener(cljs.core.name.call(null,actual_type_8297),canonical_f_8300);
} else
{elem_8240.detachEvent(cljs.core.name.call(null,actual_type_8297),canonical_f_8300);
}
{
var G__8301 = seq__8218_8292;
var G__8302 = chunk__8220_8293;
var G__8303 = count__8221_8294;
var G__8304 = (i__8222_8295 + 1);
seq__8218_8292 = G__8301;
chunk__8220_8293 = G__8302;
count__8221_8294 = G__8303;
i__8222_8295 = G__8304;
continue;
}
} else
{var temp__4092__auto___8305__$1 = cljs.core.seq.call(null,seq__8218_8292);if(temp__4092__auto___8305__$1)
{var seq__8218_8306__$1 = temp__4092__auto___8305__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8218_8306__$1))
{var c__4015__auto___8307 = cljs.core.chunk_first.call(null,seq__8218_8306__$1);{
var G__8308 = cljs.core.chunk_rest.call(null,seq__8218_8306__$1);
var G__8309 = c__4015__auto___8307;
var G__8310 = cljs.core.count.call(null,c__4015__auto___8307);
var G__8311 = 0;
seq__8218_8292 = G__8308;
chunk__8220_8293 = G__8309;
count__8221_8294 = G__8310;
i__8222_8295 = G__8311;
continue;
}
} else
{var vec__8238_8312 = cljs.core.first.call(null,seq__8218_8306__$1);var actual_type_8313 = cljs.core.nth.call(null,vec__8238_8312,0,null);var __8314 = cljs.core.nth.call(null,vec__8238_8312,1,null);var keys_8315 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8241,actual_type_8313,f_8291], null);var canonical_f_8316 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8240),keys_8315);dommy.core.update_event_listeners_BANG_.call(null,elem_8240,dommy.utils.dissoc_in,keys_8315);
if(cljs.core.truth_(elem_8240.removeEventListener))
{elem_8240.removeEventListener(cljs.core.name.call(null,actual_type_8313),canonical_f_8316);
} else
{elem_8240.detachEvent(cljs.core.name.call(null,actual_type_8313),canonical_f_8316);
}
{
var G__8317 = cljs.core.next.call(null,seq__8218_8306__$1);
var G__8318 = null;
var G__8319 = 0;
var G__8320 = 0;
seq__8218_8292 = G__8317;
chunk__8220_8293 = G__8318;
count__8221_8294 = G__8319;
i__8222_8295 = G__8320;
continue;
}
}
} else
{}
}
break;
}
{
var G__8321 = cljs.core.next.call(null,seq__8217_8283__$1);
var G__8322 = null;
var G__8323 = 0;
var G__8324 = 0;
seq__8217_8242 = G__8321;
chunk__8224_8243 = G__8322;
count__8225_8244 = G__8323;
i__8226_8245 = G__8324;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__8325){
var elem_sel = cljs.core.first(arglist__8325);
var type_fs = cljs.core.rest(arglist__8325);
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
var vec__8333_8340 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8341 = cljs.core.nth.call(null,vec__8333_8340,0,null);var selector_8342 = cljs.core.nth.call(null,vec__8333_8340,1,null);var seq__8334_8343 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8335_8344 = null;var count__8336_8345 = 0;var i__8337_8346 = 0;while(true){
if((i__8337_8346 < count__8336_8345))
{var vec__8338_8347 = cljs.core._nth.call(null,chunk__8335_8344,i__8337_8346);var type_8348 = cljs.core.nth.call(null,vec__8338_8347,0,null);var f_8349 = cljs.core.nth.call(null,vec__8338_8347,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_8348,((function (seq__8334_8343,chunk__8335_8344,count__8336_8345,i__8337_8346,vec__8338_8347,type_8348,f_8349){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_8348,this_fn);
return f_8349.call(null,e);
});})(seq__8334_8343,chunk__8335_8344,count__8336_8345,i__8337_8346,vec__8338_8347,type_8348,f_8349))
);
{
var G__8350 = seq__8334_8343;
var G__8351 = chunk__8335_8344;
var G__8352 = count__8336_8345;
var G__8353 = (i__8337_8346 + 1);
seq__8334_8343 = G__8350;
chunk__8335_8344 = G__8351;
count__8336_8345 = G__8352;
i__8337_8346 = G__8353;
continue;
}
} else
{var temp__4092__auto___8354 = cljs.core.seq.call(null,seq__8334_8343);if(temp__4092__auto___8354)
{var seq__8334_8355__$1 = temp__4092__auto___8354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8334_8355__$1))
{var c__4015__auto___8356 = cljs.core.chunk_first.call(null,seq__8334_8355__$1);{
var G__8357 = cljs.core.chunk_rest.call(null,seq__8334_8355__$1);
var G__8358 = c__4015__auto___8356;
var G__8359 = cljs.core.count.call(null,c__4015__auto___8356);
var G__8360 = 0;
seq__8334_8343 = G__8357;
chunk__8335_8344 = G__8358;
count__8336_8345 = G__8359;
i__8337_8346 = G__8360;
continue;
}
} else
{var vec__8339_8361 = cljs.core.first.call(null,seq__8334_8355__$1);var type_8362 = cljs.core.nth.call(null,vec__8339_8361,0,null);var f_8363 = cljs.core.nth.call(null,vec__8339_8361,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_8362,((function (seq__8334_8343,chunk__8335_8344,count__8336_8345,i__8337_8346,vec__8339_8361,type_8362,f_8363,seq__8334_8355__$1,temp__4092__auto___8354){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_8362,this_fn);
return f_8363.call(null,e);
});})(seq__8334_8343,chunk__8335_8344,count__8336_8345,i__8337_8346,vec__8339_8361,type_8362,f_8363,seq__8334_8355__$1,temp__4092__auto___8354))
);
{
var G__8364 = cljs.core.next.call(null,seq__8334_8355__$1);
var G__8365 = null;
var G__8366 = 0;
var G__8367 = 0;
seq__8334_8343 = G__8364;
chunk__8335_8344 = G__8365;
count__8336_8345 = G__8366;
i__8337_8346 = G__8367;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__8368){
var elem_sel = cljs.core.first(arglist__8368);
var type_fs = cljs.core.rest(arglist__8368);
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
var fire_BANG___delegate = function (node,event_type,p__8369){var vec__8371 = p__8369;var update_event_BANG_ = cljs.core.nth.call(null,vec__8371,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3291__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
var p__8369 = null;if (arguments.length > 2) {
  p__8369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__8369);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__8372){
var node = cljs.core.first(arglist__8372);
arglist__8372 = cljs.core.next(arglist__8372);
var event_type = cljs.core.first(arglist__8372);
var p__8369 = cljs.core.rest(arglist__8372);
return fire_BANG___delegate(node,event_type,p__8369);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
