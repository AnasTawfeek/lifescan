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
dommy.core.text = (function text(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var or__4765__auto__ = elem__$1.textContent;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
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
var append_BANG___2 = (function (parent,child){var G__23952 = dommy.template.__GT_node_like.call(null,parent);G__23952.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__23952;
});
var append_BANG___3 = (function() { 
var G__23957__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__23953_23958 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__23954_23959 = null;var count__23955_23960 = 0;var i__23956_23961 = 0;while(true){
if((i__23956_23961 < count__23955_23960))
{var c_23962 = cljs.core._nth.call(null,chunk__23954_23959,i__23956_23961);append_BANG_.call(null,parent__$1,c_23962);
{
var G__23963 = seq__23953_23958;
var G__23964 = chunk__23954_23959;
var G__23965 = count__23955_23960;
var G__23966 = (i__23956_23961 + 1);
seq__23953_23958 = G__23963;
chunk__23954_23959 = G__23964;
count__23955_23960 = G__23965;
i__23956_23961 = G__23966;
continue;
}
} else
{var temp__4092__auto___23967 = cljs.core.seq.call(null,seq__23953_23958);if(temp__4092__auto___23967)
{var seq__23953_23968__$1 = temp__4092__auto___23967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23953_23968__$1))
{var c__5489__auto___23969 = cljs.core.chunk_first.call(null,seq__23953_23968__$1);{
var G__23970 = cljs.core.chunk_rest.call(null,seq__23953_23968__$1);
var G__23971 = c__5489__auto___23969;
var G__23972 = cljs.core.count.call(null,c__5489__auto___23969);
var G__23973 = 0;
seq__23953_23958 = G__23970;
chunk__23954_23959 = G__23971;
count__23955_23960 = G__23972;
i__23956_23961 = G__23973;
continue;
}
} else
{var c_23974 = cljs.core.first.call(null,seq__23953_23968__$1);append_BANG_.call(null,parent__$1,c_23974);
{
var G__23975 = cljs.core.next.call(null,seq__23953_23968__$1);
var G__23976 = null;
var G__23977 = 0;
var G__23978 = 0;
seq__23953_23958 = G__23975;
chunk__23954_23959 = G__23976;
count__23955_23960 = G__23977;
i__23956_23961 = G__23978;
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
var G__23957 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23957__delegate.call(this,parent,child,more_children);};
G__23957.cljs$lang$maxFixedArity = 2;
G__23957.cljs$lang$applyTo = (function (arglist__23979){
var parent = cljs.core.first(arglist__23979);
arglist__23979 = cljs.core.next(arglist__23979);
var child = cljs.core.first(arglist__23979);
var more_children = cljs.core.rest(arglist__23979);
return G__23957__delegate(parent,child,more_children);
});
G__23957.cljs$core$IFn$_invoke$arity$variadic = G__23957__delegate;
return G__23957;
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
var prepend_BANG___2 = (function (parent,child){var G__23985 = dommy.template.__GT_node_like.call(null,parent);G__23985.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__23985;
});
var prepend_BANG___3 = (function() { 
var G__23990__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__23986_23991 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__23987_23992 = null;var count__23988_23993 = 0;var i__23989_23994 = 0;while(true){
if((i__23989_23994 < count__23988_23993))
{var c_23995 = cljs.core._nth.call(null,chunk__23987_23992,i__23989_23994);prepend_BANG_.call(null,parent__$1,c_23995);
{
var G__23996 = seq__23986_23991;
var G__23997 = chunk__23987_23992;
var G__23998 = count__23988_23993;
var G__23999 = (i__23989_23994 + 1);
seq__23986_23991 = G__23996;
chunk__23987_23992 = G__23997;
count__23988_23993 = G__23998;
i__23989_23994 = G__23999;
continue;
}
} else
{var temp__4092__auto___24000 = cljs.core.seq.call(null,seq__23986_23991);if(temp__4092__auto___24000)
{var seq__23986_24001__$1 = temp__4092__auto___24000;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23986_24001__$1))
{var c__5489__auto___24002 = cljs.core.chunk_first.call(null,seq__23986_24001__$1);{
var G__24003 = cljs.core.chunk_rest.call(null,seq__23986_24001__$1);
var G__24004 = c__5489__auto___24002;
var G__24005 = cljs.core.count.call(null,c__5489__auto___24002);
var G__24006 = 0;
seq__23986_23991 = G__24003;
chunk__23987_23992 = G__24004;
count__23988_23993 = G__24005;
i__23989_23994 = G__24006;
continue;
}
} else
{var c_24007 = cljs.core.first.call(null,seq__23986_24001__$1);prepend_BANG_.call(null,parent__$1,c_24007);
{
var G__24008 = cljs.core.next.call(null,seq__23986_24001__$1);
var G__24009 = null;
var G__24010 = 0;
var G__24011 = 0;
seq__23986_23991 = G__24008;
chunk__23987_23992 = G__24009;
count__23988_23993 = G__24010;
i__23989_23994 = G__24011;
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
var G__23990 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23990__delegate.call(this,parent,child,more_children);};
G__23990.cljs$lang$maxFixedArity = 2;
G__23990.cljs$lang$applyTo = (function (arglist__24012){
var parent = cljs.core.first(arglist__24012);
arglist__24012 = cljs.core.next(arglist__24012);
var child = cljs.core.first(arglist__24012);
var more_children = cljs.core.rest(arglist__24012);
return G__23990__delegate(parent,child,more_children);
});
G__23990.cljs$core$IFn$_invoke$arity$variadic = G__23990__delegate;
return G__23990;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___24013 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___24013))
{var next_24014 = temp__4090__auto___24013;parent.insertBefore(actual_node,next_24014);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__24016 = dommy.template.__GT_node_like.call(null,parent);G__24016.innerHTML = "";
dommy.core.append_BANG_.call(null,G__24016,node_like);
return G__24016;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__24018 = elem__$1.parentNode;G__24018.removeChild(elem__$1);
return G__24018;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__24019_SHARP_){return p1__24019_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__24020_SHARP_){return !((p1__24020_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__24021){var vec__24022 = p__24021;var special_mouse_event = cljs.core.nth.call(null,vec__24022,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__24022,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4765__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__4753__auto__ = related_target;if(cljs.core.truth_(and__4753__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__4753__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__4765__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__24023){
var elem = cljs.core.first(arglist__24023);
arglist__24023 = cljs.core.next(arglist__24023);
var f = cljs.core.first(arglist__24023);
var args = cljs.core.rest(arglist__24023);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__24024_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__24024_SHARP_));
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
var vec__24048_24071 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24072 = cljs.core.nth.call(null,vec__24048_24071,0,null);var selector_24073 = cljs.core.nth.call(null,vec__24048_24071,1,null);var seq__24049_24074 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24056_24075 = null;var count__24057_24076 = 0;var i__24058_24077 = 0;while(true){
if((i__24058_24077 < count__24057_24076))
{var vec__24065_24078 = cljs.core._nth.call(null,chunk__24056_24075,i__24058_24077);var orig_type_24079 = cljs.core.nth.call(null,vec__24065_24078,0,null);var f_24080 = cljs.core.nth.call(null,vec__24065_24078,1,null);var seq__24059_24081 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24079,new cljs.core.PersistentArrayMap.fromArray([orig_type_24079,cljs.core.identity], true, false)));var chunk__24061_24082 = null;var count__24062_24083 = 0;var i__24063_24084 = 0;while(true){
if((i__24063_24084 < count__24062_24083))
{var vec__24066_24085 = cljs.core._nth.call(null,chunk__24061_24082,i__24063_24084);var actual_type_24086 = cljs.core.nth.call(null,vec__24066_24085,0,null);var factory_24087 = cljs.core.nth.call(null,vec__24066_24085,1,null);var canonical_f_24088 = (cljs.core.truth_(selector_24073)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24072,selector_24073):cljs.core.identity).call(null,factory_24087.call(null,f_24080));dommy.core.update_event_listeners_BANG_.call(null,elem_24072,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24073,actual_type_24086,f_24080], null),canonical_f_24088);
if(cljs.core.truth_(elem_24072.addEventListener))
{elem_24072.addEventListener(cljs.core.name.call(null,actual_type_24086),canonical_f_24088);
} else
{elem_24072.attachEvent(cljs.core.name.call(null,actual_type_24086),canonical_f_24088);
}
{
var G__24089 = seq__24059_24081;
var G__24090 = chunk__24061_24082;
var G__24091 = count__24062_24083;
var G__24092 = (i__24063_24084 + 1);
seq__24059_24081 = G__24089;
chunk__24061_24082 = G__24090;
count__24062_24083 = G__24091;
i__24063_24084 = G__24092;
continue;
}
} else
{var temp__4092__auto___24093 = cljs.core.seq.call(null,seq__24059_24081);if(temp__4092__auto___24093)
{var seq__24059_24094__$1 = temp__4092__auto___24093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24059_24094__$1))
{var c__5489__auto___24095 = cljs.core.chunk_first.call(null,seq__24059_24094__$1);{
var G__24096 = cljs.core.chunk_rest.call(null,seq__24059_24094__$1);
var G__24097 = c__5489__auto___24095;
var G__24098 = cljs.core.count.call(null,c__5489__auto___24095);
var G__24099 = 0;
seq__24059_24081 = G__24096;
chunk__24061_24082 = G__24097;
count__24062_24083 = G__24098;
i__24063_24084 = G__24099;
continue;
}
} else
{var vec__24067_24100 = cljs.core.first.call(null,seq__24059_24094__$1);var actual_type_24101 = cljs.core.nth.call(null,vec__24067_24100,0,null);var factory_24102 = cljs.core.nth.call(null,vec__24067_24100,1,null);var canonical_f_24103 = (cljs.core.truth_(selector_24073)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24072,selector_24073):cljs.core.identity).call(null,factory_24102.call(null,f_24080));dommy.core.update_event_listeners_BANG_.call(null,elem_24072,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24073,actual_type_24101,f_24080], null),canonical_f_24103);
if(cljs.core.truth_(elem_24072.addEventListener))
{elem_24072.addEventListener(cljs.core.name.call(null,actual_type_24101),canonical_f_24103);
} else
{elem_24072.attachEvent(cljs.core.name.call(null,actual_type_24101),canonical_f_24103);
}
{
var G__24104 = cljs.core.next.call(null,seq__24059_24094__$1);
var G__24105 = null;
var G__24106 = 0;
var G__24107 = 0;
seq__24059_24081 = G__24104;
chunk__24061_24082 = G__24105;
count__24062_24083 = G__24106;
i__24063_24084 = G__24107;
continue;
}
}
} else
{}
}
break;
}
{
var G__24108 = seq__24049_24074;
var G__24109 = chunk__24056_24075;
var G__24110 = count__24057_24076;
var G__24111 = (i__24058_24077 + 1);
seq__24049_24074 = G__24108;
chunk__24056_24075 = G__24109;
count__24057_24076 = G__24110;
i__24058_24077 = G__24111;
continue;
}
} else
{var temp__4092__auto___24112 = cljs.core.seq.call(null,seq__24049_24074);if(temp__4092__auto___24112)
{var seq__24049_24113__$1 = temp__4092__auto___24112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24049_24113__$1))
{var c__5489__auto___24114 = cljs.core.chunk_first.call(null,seq__24049_24113__$1);{
var G__24115 = cljs.core.chunk_rest.call(null,seq__24049_24113__$1);
var G__24116 = c__5489__auto___24114;
var G__24117 = cljs.core.count.call(null,c__5489__auto___24114);
var G__24118 = 0;
seq__24049_24074 = G__24115;
chunk__24056_24075 = G__24116;
count__24057_24076 = G__24117;
i__24058_24077 = G__24118;
continue;
}
} else
{var vec__24068_24119 = cljs.core.first.call(null,seq__24049_24113__$1);var orig_type_24120 = cljs.core.nth.call(null,vec__24068_24119,0,null);var f_24121 = cljs.core.nth.call(null,vec__24068_24119,1,null);var seq__24050_24122 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24120,new cljs.core.PersistentArrayMap.fromArray([orig_type_24120,cljs.core.identity], true, false)));var chunk__24052_24123 = null;var count__24053_24124 = 0;var i__24054_24125 = 0;while(true){
if((i__24054_24125 < count__24053_24124))
{var vec__24069_24126 = cljs.core._nth.call(null,chunk__24052_24123,i__24054_24125);var actual_type_24127 = cljs.core.nth.call(null,vec__24069_24126,0,null);var factory_24128 = cljs.core.nth.call(null,vec__24069_24126,1,null);var canonical_f_24129 = (cljs.core.truth_(selector_24073)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24072,selector_24073):cljs.core.identity).call(null,factory_24128.call(null,f_24121));dommy.core.update_event_listeners_BANG_.call(null,elem_24072,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24073,actual_type_24127,f_24121], null),canonical_f_24129);
if(cljs.core.truth_(elem_24072.addEventListener))
{elem_24072.addEventListener(cljs.core.name.call(null,actual_type_24127),canonical_f_24129);
} else
{elem_24072.attachEvent(cljs.core.name.call(null,actual_type_24127),canonical_f_24129);
}
{
var G__24130 = seq__24050_24122;
var G__24131 = chunk__24052_24123;
var G__24132 = count__24053_24124;
var G__24133 = (i__24054_24125 + 1);
seq__24050_24122 = G__24130;
chunk__24052_24123 = G__24131;
count__24053_24124 = G__24132;
i__24054_24125 = G__24133;
continue;
}
} else
{var temp__4092__auto___24134__$1 = cljs.core.seq.call(null,seq__24050_24122);if(temp__4092__auto___24134__$1)
{var seq__24050_24135__$1 = temp__4092__auto___24134__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24050_24135__$1))
{var c__5489__auto___24136 = cljs.core.chunk_first.call(null,seq__24050_24135__$1);{
var G__24137 = cljs.core.chunk_rest.call(null,seq__24050_24135__$1);
var G__24138 = c__5489__auto___24136;
var G__24139 = cljs.core.count.call(null,c__5489__auto___24136);
var G__24140 = 0;
seq__24050_24122 = G__24137;
chunk__24052_24123 = G__24138;
count__24053_24124 = G__24139;
i__24054_24125 = G__24140;
continue;
}
} else
{var vec__24070_24141 = cljs.core.first.call(null,seq__24050_24135__$1);var actual_type_24142 = cljs.core.nth.call(null,vec__24070_24141,0,null);var factory_24143 = cljs.core.nth.call(null,vec__24070_24141,1,null);var canonical_f_24144 = (cljs.core.truth_(selector_24073)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24072,selector_24073):cljs.core.identity).call(null,factory_24143.call(null,f_24121));dommy.core.update_event_listeners_BANG_.call(null,elem_24072,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24073,actual_type_24142,f_24121], null),canonical_f_24144);
if(cljs.core.truth_(elem_24072.addEventListener))
{elem_24072.addEventListener(cljs.core.name.call(null,actual_type_24142),canonical_f_24144);
} else
{elem_24072.attachEvent(cljs.core.name.call(null,actual_type_24142),canonical_f_24144);
}
{
var G__24145 = cljs.core.next.call(null,seq__24050_24135__$1);
var G__24146 = null;
var G__24147 = 0;
var G__24148 = 0;
seq__24050_24122 = G__24145;
chunk__24052_24123 = G__24146;
count__24053_24124 = G__24147;
i__24054_24125 = G__24148;
continue;
}
}
} else
{}
}
break;
}
{
var G__24149 = cljs.core.next.call(null,seq__24049_24113__$1);
var G__24150 = null;
var G__24151 = 0;
var G__24152 = 0;
seq__24049_24074 = G__24149;
chunk__24056_24075 = G__24150;
count__24057_24076 = G__24151;
i__24058_24077 = G__24152;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__24153){
var elem_sel = cljs.core.first(arglist__24153);
var type_fs = cljs.core.rest(arglist__24153);
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
var vec__24177_24200 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24201 = cljs.core.nth.call(null,vec__24177_24200,0,null);var selector_24202 = cljs.core.nth.call(null,vec__24177_24200,1,null);var seq__24178_24203 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24185_24204 = null;var count__24186_24205 = 0;var i__24187_24206 = 0;while(true){
if((i__24187_24206 < count__24186_24205))
{var vec__24194_24207 = cljs.core._nth.call(null,chunk__24185_24204,i__24187_24206);var orig_type_24208 = cljs.core.nth.call(null,vec__24194_24207,0,null);var f_24209 = cljs.core.nth.call(null,vec__24194_24207,1,null);var seq__24188_24210 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24208,new cljs.core.PersistentArrayMap.fromArray([orig_type_24208,cljs.core.identity], true, false)));var chunk__24190_24211 = null;var count__24191_24212 = 0;var i__24192_24213 = 0;while(true){
if((i__24192_24213 < count__24191_24212))
{var vec__24195_24214 = cljs.core._nth.call(null,chunk__24190_24211,i__24192_24213);var actual_type_24215 = cljs.core.nth.call(null,vec__24195_24214,0,null);var __24216 = cljs.core.nth.call(null,vec__24195_24214,1,null);var keys_24217 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24202,actual_type_24215,f_24209], null);var canonical_f_24218 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24201),keys_24217);dommy.core.update_event_listeners_BANG_.call(null,elem_24201,dommy.utils.dissoc_in,keys_24217);
if(cljs.core.truth_(elem_24201.removeEventListener))
{elem_24201.removeEventListener(cljs.core.name.call(null,actual_type_24215),canonical_f_24218);
} else
{elem_24201.detachEvent(cljs.core.name.call(null,actual_type_24215),canonical_f_24218);
}
{
var G__24219 = seq__24188_24210;
var G__24220 = chunk__24190_24211;
var G__24221 = count__24191_24212;
var G__24222 = (i__24192_24213 + 1);
seq__24188_24210 = G__24219;
chunk__24190_24211 = G__24220;
count__24191_24212 = G__24221;
i__24192_24213 = G__24222;
continue;
}
} else
{var temp__4092__auto___24223 = cljs.core.seq.call(null,seq__24188_24210);if(temp__4092__auto___24223)
{var seq__24188_24224__$1 = temp__4092__auto___24223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24188_24224__$1))
{var c__5489__auto___24225 = cljs.core.chunk_first.call(null,seq__24188_24224__$1);{
var G__24226 = cljs.core.chunk_rest.call(null,seq__24188_24224__$1);
var G__24227 = c__5489__auto___24225;
var G__24228 = cljs.core.count.call(null,c__5489__auto___24225);
var G__24229 = 0;
seq__24188_24210 = G__24226;
chunk__24190_24211 = G__24227;
count__24191_24212 = G__24228;
i__24192_24213 = G__24229;
continue;
}
} else
{var vec__24196_24230 = cljs.core.first.call(null,seq__24188_24224__$1);var actual_type_24231 = cljs.core.nth.call(null,vec__24196_24230,0,null);var __24232 = cljs.core.nth.call(null,vec__24196_24230,1,null);var keys_24233 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24202,actual_type_24231,f_24209], null);var canonical_f_24234 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24201),keys_24233);dommy.core.update_event_listeners_BANG_.call(null,elem_24201,dommy.utils.dissoc_in,keys_24233);
if(cljs.core.truth_(elem_24201.removeEventListener))
{elem_24201.removeEventListener(cljs.core.name.call(null,actual_type_24231),canonical_f_24234);
} else
{elem_24201.detachEvent(cljs.core.name.call(null,actual_type_24231),canonical_f_24234);
}
{
var G__24235 = cljs.core.next.call(null,seq__24188_24224__$1);
var G__24236 = null;
var G__24237 = 0;
var G__24238 = 0;
seq__24188_24210 = G__24235;
chunk__24190_24211 = G__24236;
count__24191_24212 = G__24237;
i__24192_24213 = G__24238;
continue;
}
}
} else
{}
}
break;
}
{
var G__24239 = seq__24178_24203;
var G__24240 = chunk__24185_24204;
var G__24241 = count__24186_24205;
var G__24242 = (i__24187_24206 + 1);
seq__24178_24203 = G__24239;
chunk__24185_24204 = G__24240;
count__24186_24205 = G__24241;
i__24187_24206 = G__24242;
continue;
}
} else
{var temp__4092__auto___24243 = cljs.core.seq.call(null,seq__24178_24203);if(temp__4092__auto___24243)
{var seq__24178_24244__$1 = temp__4092__auto___24243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24178_24244__$1))
{var c__5489__auto___24245 = cljs.core.chunk_first.call(null,seq__24178_24244__$1);{
var G__24246 = cljs.core.chunk_rest.call(null,seq__24178_24244__$1);
var G__24247 = c__5489__auto___24245;
var G__24248 = cljs.core.count.call(null,c__5489__auto___24245);
var G__24249 = 0;
seq__24178_24203 = G__24246;
chunk__24185_24204 = G__24247;
count__24186_24205 = G__24248;
i__24187_24206 = G__24249;
continue;
}
} else
{var vec__24197_24250 = cljs.core.first.call(null,seq__24178_24244__$1);var orig_type_24251 = cljs.core.nth.call(null,vec__24197_24250,0,null);var f_24252 = cljs.core.nth.call(null,vec__24197_24250,1,null);var seq__24179_24253 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24251,new cljs.core.PersistentArrayMap.fromArray([orig_type_24251,cljs.core.identity], true, false)));var chunk__24181_24254 = null;var count__24182_24255 = 0;var i__24183_24256 = 0;while(true){
if((i__24183_24256 < count__24182_24255))
{var vec__24198_24257 = cljs.core._nth.call(null,chunk__24181_24254,i__24183_24256);var actual_type_24258 = cljs.core.nth.call(null,vec__24198_24257,0,null);var __24259 = cljs.core.nth.call(null,vec__24198_24257,1,null);var keys_24260 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24202,actual_type_24258,f_24252], null);var canonical_f_24261 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24201),keys_24260);dommy.core.update_event_listeners_BANG_.call(null,elem_24201,dommy.utils.dissoc_in,keys_24260);
if(cljs.core.truth_(elem_24201.removeEventListener))
{elem_24201.removeEventListener(cljs.core.name.call(null,actual_type_24258),canonical_f_24261);
} else
{elem_24201.detachEvent(cljs.core.name.call(null,actual_type_24258),canonical_f_24261);
}
{
var G__24262 = seq__24179_24253;
var G__24263 = chunk__24181_24254;
var G__24264 = count__24182_24255;
var G__24265 = (i__24183_24256 + 1);
seq__24179_24253 = G__24262;
chunk__24181_24254 = G__24263;
count__24182_24255 = G__24264;
i__24183_24256 = G__24265;
continue;
}
} else
{var temp__4092__auto___24266__$1 = cljs.core.seq.call(null,seq__24179_24253);if(temp__4092__auto___24266__$1)
{var seq__24179_24267__$1 = temp__4092__auto___24266__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24179_24267__$1))
{var c__5489__auto___24268 = cljs.core.chunk_first.call(null,seq__24179_24267__$1);{
var G__24269 = cljs.core.chunk_rest.call(null,seq__24179_24267__$1);
var G__24270 = c__5489__auto___24268;
var G__24271 = cljs.core.count.call(null,c__5489__auto___24268);
var G__24272 = 0;
seq__24179_24253 = G__24269;
chunk__24181_24254 = G__24270;
count__24182_24255 = G__24271;
i__24183_24256 = G__24272;
continue;
}
} else
{var vec__24199_24273 = cljs.core.first.call(null,seq__24179_24267__$1);var actual_type_24274 = cljs.core.nth.call(null,vec__24199_24273,0,null);var __24275 = cljs.core.nth.call(null,vec__24199_24273,1,null);var keys_24276 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24202,actual_type_24274,f_24252], null);var canonical_f_24277 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24201),keys_24276);dommy.core.update_event_listeners_BANG_.call(null,elem_24201,dommy.utils.dissoc_in,keys_24276);
if(cljs.core.truth_(elem_24201.removeEventListener))
{elem_24201.removeEventListener(cljs.core.name.call(null,actual_type_24274),canonical_f_24277);
} else
{elem_24201.detachEvent(cljs.core.name.call(null,actual_type_24274),canonical_f_24277);
}
{
var G__24278 = cljs.core.next.call(null,seq__24179_24267__$1);
var G__24279 = null;
var G__24280 = 0;
var G__24281 = 0;
seq__24179_24253 = G__24278;
chunk__24181_24254 = G__24279;
count__24182_24255 = G__24280;
i__24183_24256 = G__24281;
continue;
}
}
} else
{}
}
break;
}
{
var G__24282 = cljs.core.next.call(null,seq__24178_24244__$1);
var G__24283 = null;
var G__24284 = 0;
var G__24285 = 0;
seq__24178_24203 = G__24282;
chunk__24185_24204 = G__24283;
count__24186_24205 = G__24284;
i__24187_24206 = G__24285;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__24286){
var elem_sel = cljs.core.first(arglist__24286);
var type_fs = cljs.core.rest(arglist__24286);
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
var vec__24294_24301 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24302 = cljs.core.nth.call(null,vec__24294_24301,0,null);var selector_24303 = cljs.core.nth.call(null,vec__24294_24301,1,null);var seq__24295_24304 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24296_24305 = null;var count__24297_24306 = 0;var i__24298_24307 = 0;while(true){
if((i__24298_24307 < count__24297_24306))
{var vec__24299_24308 = cljs.core._nth.call(null,chunk__24296_24305,i__24298_24307);var type_24309 = cljs.core.nth.call(null,vec__24299_24308,0,null);var f_24310 = cljs.core.nth.call(null,vec__24299_24308,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_24309,((function (seq__24295_24304,chunk__24296_24305,count__24297_24306,i__24298_24307,vec__24299_24308,type_24309,f_24310){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_24309,this_fn);
return f_24310.call(null,e);
});})(seq__24295_24304,chunk__24296_24305,count__24297_24306,i__24298_24307,vec__24299_24308,type_24309,f_24310))
);
{
var G__24311 = seq__24295_24304;
var G__24312 = chunk__24296_24305;
var G__24313 = count__24297_24306;
var G__24314 = (i__24298_24307 + 1);
seq__24295_24304 = G__24311;
chunk__24296_24305 = G__24312;
count__24297_24306 = G__24313;
i__24298_24307 = G__24314;
continue;
}
} else
{var temp__4092__auto___24315 = cljs.core.seq.call(null,seq__24295_24304);if(temp__4092__auto___24315)
{var seq__24295_24316__$1 = temp__4092__auto___24315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24295_24316__$1))
{var c__5489__auto___24317 = cljs.core.chunk_first.call(null,seq__24295_24316__$1);{
var G__24318 = cljs.core.chunk_rest.call(null,seq__24295_24316__$1);
var G__24319 = c__5489__auto___24317;
var G__24320 = cljs.core.count.call(null,c__5489__auto___24317);
var G__24321 = 0;
seq__24295_24304 = G__24318;
chunk__24296_24305 = G__24319;
count__24297_24306 = G__24320;
i__24298_24307 = G__24321;
continue;
}
} else
{var vec__24300_24322 = cljs.core.first.call(null,seq__24295_24316__$1);var type_24323 = cljs.core.nth.call(null,vec__24300_24322,0,null);var f_24324 = cljs.core.nth.call(null,vec__24300_24322,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_24323,((function (seq__24295_24304,chunk__24296_24305,count__24297_24306,i__24298_24307,vec__24300_24322,type_24323,f_24324,seq__24295_24316__$1,temp__4092__auto___24315){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_24323,this_fn);
return f_24324.call(null,e);
});})(seq__24295_24304,chunk__24296_24305,count__24297_24306,i__24298_24307,vec__24300_24322,type_24323,f_24324,seq__24295_24316__$1,temp__4092__auto___24315))
);
{
var G__24325 = cljs.core.next.call(null,seq__24295_24316__$1);
var G__24326 = null;
var G__24327 = 0;
var G__24328 = 0;
seq__24295_24304 = G__24325;
chunk__24296_24305 = G__24326;
count__24297_24306 = G__24327;
i__24298_24307 = G__24328;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__24329){
var elem_sel = cljs.core.first(arglist__24329);
var type_fs = cljs.core.rest(arglist__24329);
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
var fire_BANG___delegate = function (node,event_type,p__24330){var vec__24332 = p__24330;var update_event_BANG_ = cljs.core.nth.call(null,vec__24332,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__4765__auto__ = update_event_BANG_;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
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
var p__24330 = null;if (arguments.length > 2) {
  p__24330 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__24330);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__24333){
var node = cljs.core.first(arglist__24333);
arglist__24333 = cljs.core.next(arglist__24333);
var event_type = cljs.core.first(arglist__24333);
var p__24330 = cljs.core.rest(arglist__24333);
return fire_BANG___delegate(node,event_type,p__24330);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
