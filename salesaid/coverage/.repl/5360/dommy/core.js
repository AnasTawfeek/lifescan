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
var append_BANG___2 = (function (parent,child){var G__19933 = dommy.template.__GT_node_like.call(null,parent);G__19933.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__19933;
});
var append_BANG___3 = (function() { 
var G__19938__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__19934_19939 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__19935_19940 = null;var count__19936_19941 = 0;var i__19937_19942 = 0;while(true){
if((i__19937_19942 < count__19936_19941))
{var c_19943 = cljs.core._nth.call(null,chunk__19935_19940,i__19937_19942);append_BANG_.call(null,parent__$1,c_19943);
{
var G__19944 = seq__19934_19939;
var G__19945 = chunk__19935_19940;
var G__19946 = count__19936_19941;
var G__19947 = (i__19937_19942 + 1);
seq__19934_19939 = G__19944;
chunk__19935_19940 = G__19945;
count__19936_19941 = G__19946;
i__19937_19942 = G__19947;
continue;
}
} else
{var temp__4092__auto___19948 = cljs.core.seq.call(null,seq__19934_19939);if(temp__4092__auto___19948)
{var seq__19934_19949__$1 = temp__4092__auto___19948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19934_19949__$1))
{var c__5489__auto___19950 = cljs.core.chunk_first.call(null,seq__19934_19949__$1);{
var G__19951 = cljs.core.chunk_rest.call(null,seq__19934_19949__$1);
var G__19952 = c__5489__auto___19950;
var G__19953 = cljs.core.count.call(null,c__5489__auto___19950);
var G__19954 = 0;
seq__19934_19939 = G__19951;
chunk__19935_19940 = G__19952;
count__19936_19941 = G__19953;
i__19937_19942 = G__19954;
continue;
}
} else
{var c_19955 = cljs.core.first.call(null,seq__19934_19949__$1);append_BANG_.call(null,parent__$1,c_19955);
{
var G__19956 = cljs.core.next.call(null,seq__19934_19949__$1);
var G__19957 = null;
var G__19958 = 0;
var G__19959 = 0;
seq__19934_19939 = G__19956;
chunk__19935_19940 = G__19957;
count__19936_19941 = G__19958;
i__19937_19942 = G__19959;
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
var G__19938 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19938__delegate.call(this,parent,child,more_children);};
G__19938.cljs$lang$maxFixedArity = 2;
G__19938.cljs$lang$applyTo = (function (arglist__19960){
var parent = cljs.core.first(arglist__19960);
arglist__19960 = cljs.core.next(arglist__19960);
var child = cljs.core.first(arglist__19960);
var more_children = cljs.core.rest(arglist__19960);
return G__19938__delegate(parent,child,more_children);
});
G__19938.cljs$core$IFn$_invoke$arity$variadic = G__19938__delegate;
return G__19938;
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
var prepend_BANG___2 = (function (parent,child){var G__19966 = dommy.template.__GT_node_like.call(null,parent);G__19966.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__19966;
});
var prepend_BANG___3 = (function() { 
var G__19971__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__19967_19972 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__19968_19973 = null;var count__19969_19974 = 0;var i__19970_19975 = 0;while(true){
if((i__19970_19975 < count__19969_19974))
{var c_19976 = cljs.core._nth.call(null,chunk__19968_19973,i__19970_19975);prepend_BANG_.call(null,parent__$1,c_19976);
{
var G__19977 = seq__19967_19972;
var G__19978 = chunk__19968_19973;
var G__19979 = count__19969_19974;
var G__19980 = (i__19970_19975 + 1);
seq__19967_19972 = G__19977;
chunk__19968_19973 = G__19978;
count__19969_19974 = G__19979;
i__19970_19975 = G__19980;
continue;
}
} else
{var temp__4092__auto___19981 = cljs.core.seq.call(null,seq__19967_19972);if(temp__4092__auto___19981)
{var seq__19967_19982__$1 = temp__4092__auto___19981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19967_19982__$1))
{var c__5489__auto___19983 = cljs.core.chunk_first.call(null,seq__19967_19982__$1);{
var G__19984 = cljs.core.chunk_rest.call(null,seq__19967_19982__$1);
var G__19985 = c__5489__auto___19983;
var G__19986 = cljs.core.count.call(null,c__5489__auto___19983);
var G__19987 = 0;
seq__19967_19972 = G__19984;
chunk__19968_19973 = G__19985;
count__19969_19974 = G__19986;
i__19970_19975 = G__19987;
continue;
}
} else
{var c_19988 = cljs.core.first.call(null,seq__19967_19982__$1);prepend_BANG_.call(null,parent__$1,c_19988);
{
var G__19989 = cljs.core.next.call(null,seq__19967_19982__$1);
var G__19990 = null;
var G__19991 = 0;
var G__19992 = 0;
seq__19967_19972 = G__19989;
chunk__19968_19973 = G__19990;
count__19969_19974 = G__19991;
i__19970_19975 = G__19992;
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
var G__19971 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19971__delegate.call(this,parent,child,more_children);};
G__19971.cljs$lang$maxFixedArity = 2;
G__19971.cljs$lang$applyTo = (function (arglist__19993){
var parent = cljs.core.first(arglist__19993);
arglist__19993 = cljs.core.next(arglist__19993);
var child = cljs.core.first(arglist__19993);
var more_children = cljs.core.rest(arglist__19993);
return G__19971__delegate(parent,child,more_children);
});
G__19971.cljs$core$IFn$_invoke$arity$variadic = G__19971__delegate;
return G__19971;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___19994 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___19994))
{var next_19995 = temp__4090__auto___19994;parent.insertBefore(actual_node,next_19995);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__19997 = dommy.template.__GT_node_like.call(null,parent);G__19997.innerHTML = "";
dommy.core.append_BANG_.call(null,G__19997,node_like);
return G__19997;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__19999 = elem__$1.parentNode;G__19999.removeChild(elem__$1);
return G__19999;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__20000_SHARP_){return p1__20000_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__20001_SHARP_){return !((p1__20001_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20002){var vec__20003 = p__20002;var special_mouse_event = cljs.core.nth.call(null,vec__20003,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__20003,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4765__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4765__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__20004){
var elem = cljs.core.first(arglist__20004);
arglist__20004 = cljs.core.next(arglist__20004);
var f = cljs.core.first(arglist__20004);
var args = cljs.core.rest(arglist__20004);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__20005_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__20005_SHARP_));
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
var vec__20029_20052 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_20053 = cljs.core.nth.call(null,vec__20029_20052,0,null);var selector_20054 = cljs.core.nth.call(null,vec__20029_20052,1,null);var seq__20030_20055 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__20037_20056 = null;var count__20038_20057 = 0;var i__20039_20058 = 0;while(true){
if((i__20039_20058 < count__20038_20057))
{var vec__20046_20059 = cljs.core._nth.call(null,chunk__20037_20056,i__20039_20058);var orig_type_20060 = cljs.core.nth.call(null,vec__20046_20059,0,null);var f_20061 = cljs.core.nth.call(null,vec__20046_20059,1,null);var seq__20040_20062 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20060,new cljs.core.PersistentArrayMap.fromArray([orig_type_20060,cljs.core.identity], true, false)));var chunk__20042_20063 = null;var count__20043_20064 = 0;var i__20044_20065 = 0;while(true){
if((i__20044_20065 < count__20043_20064))
{var vec__20047_20066 = cljs.core._nth.call(null,chunk__20042_20063,i__20044_20065);var actual_type_20067 = cljs.core.nth.call(null,vec__20047_20066,0,null);var factory_20068 = cljs.core.nth.call(null,vec__20047_20066,1,null);var canonical_f_20069 = (cljs.core.truth_(selector_20054)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20053,selector_20054):cljs.core.identity).call(null,factory_20068.call(null,f_20061));dommy.core.update_event_listeners_BANG_.call(null,elem_20053,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20054,actual_type_20067,f_20061], null),canonical_f_20069);
if(cljs.core.truth_(elem_20053.addEventListener))
{elem_20053.addEventListener(cljs.core.name.call(null,actual_type_20067),canonical_f_20069);
} else
{elem_20053.attachEvent(cljs.core.name.call(null,actual_type_20067),canonical_f_20069);
}
{
var G__20070 = seq__20040_20062;
var G__20071 = chunk__20042_20063;
var G__20072 = count__20043_20064;
var G__20073 = (i__20044_20065 + 1);
seq__20040_20062 = G__20070;
chunk__20042_20063 = G__20071;
count__20043_20064 = G__20072;
i__20044_20065 = G__20073;
continue;
}
} else
{var temp__4092__auto___20074 = cljs.core.seq.call(null,seq__20040_20062);if(temp__4092__auto___20074)
{var seq__20040_20075__$1 = temp__4092__auto___20074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20040_20075__$1))
{var c__5489__auto___20076 = cljs.core.chunk_first.call(null,seq__20040_20075__$1);{
var G__20077 = cljs.core.chunk_rest.call(null,seq__20040_20075__$1);
var G__20078 = c__5489__auto___20076;
var G__20079 = cljs.core.count.call(null,c__5489__auto___20076);
var G__20080 = 0;
seq__20040_20062 = G__20077;
chunk__20042_20063 = G__20078;
count__20043_20064 = G__20079;
i__20044_20065 = G__20080;
continue;
}
} else
{var vec__20048_20081 = cljs.core.first.call(null,seq__20040_20075__$1);var actual_type_20082 = cljs.core.nth.call(null,vec__20048_20081,0,null);var factory_20083 = cljs.core.nth.call(null,vec__20048_20081,1,null);var canonical_f_20084 = (cljs.core.truth_(selector_20054)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20053,selector_20054):cljs.core.identity).call(null,factory_20083.call(null,f_20061));dommy.core.update_event_listeners_BANG_.call(null,elem_20053,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20054,actual_type_20082,f_20061], null),canonical_f_20084);
if(cljs.core.truth_(elem_20053.addEventListener))
{elem_20053.addEventListener(cljs.core.name.call(null,actual_type_20082),canonical_f_20084);
} else
{elem_20053.attachEvent(cljs.core.name.call(null,actual_type_20082),canonical_f_20084);
}
{
var G__20085 = cljs.core.next.call(null,seq__20040_20075__$1);
var G__20086 = null;
var G__20087 = 0;
var G__20088 = 0;
seq__20040_20062 = G__20085;
chunk__20042_20063 = G__20086;
count__20043_20064 = G__20087;
i__20044_20065 = G__20088;
continue;
}
}
} else
{}
}
break;
}
{
var G__20089 = seq__20030_20055;
var G__20090 = chunk__20037_20056;
var G__20091 = count__20038_20057;
var G__20092 = (i__20039_20058 + 1);
seq__20030_20055 = G__20089;
chunk__20037_20056 = G__20090;
count__20038_20057 = G__20091;
i__20039_20058 = G__20092;
continue;
}
} else
{var temp__4092__auto___20093 = cljs.core.seq.call(null,seq__20030_20055);if(temp__4092__auto___20093)
{var seq__20030_20094__$1 = temp__4092__auto___20093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20030_20094__$1))
{var c__5489__auto___20095 = cljs.core.chunk_first.call(null,seq__20030_20094__$1);{
var G__20096 = cljs.core.chunk_rest.call(null,seq__20030_20094__$1);
var G__20097 = c__5489__auto___20095;
var G__20098 = cljs.core.count.call(null,c__5489__auto___20095);
var G__20099 = 0;
seq__20030_20055 = G__20096;
chunk__20037_20056 = G__20097;
count__20038_20057 = G__20098;
i__20039_20058 = G__20099;
continue;
}
} else
{var vec__20049_20100 = cljs.core.first.call(null,seq__20030_20094__$1);var orig_type_20101 = cljs.core.nth.call(null,vec__20049_20100,0,null);var f_20102 = cljs.core.nth.call(null,vec__20049_20100,1,null);var seq__20031_20103 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20101,new cljs.core.PersistentArrayMap.fromArray([orig_type_20101,cljs.core.identity], true, false)));var chunk__20033_20104 = null;var count__20034_20105 = 0;var i__20035_20106 = 0;while(true){
if((i__20035_20106 < count__20034_20105))
{var vec__20050_20107 = cljs.core._nth.call(null,chunk__20033_20104,i__20035_20106);var actual_type_20108 = cljs.core.nth.call(null,vec__20050_20107,0,null);var factory_20109 = cljs.core.nth.call(null,vec__20050_20107,1,null);var canonical_f_20110 = (cljs.core.truth_(selector_20054)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20053,selector_20054):cljs.core.identity).call(null,factory_20109.call(null,f_20102));dommy.core.update_event_listeners_BANG_.call(null,elem_20053,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20054,actual_type_20108,f_20102], null),canonical_f_20110);
if(cljs.core.truth_(elem_20053.addEventListener))
{elem_20053.addEventListener(cljs.core.name.call(null,actual_type_20108),canonical_f_20110);
} else
{elem_20053.attachEvent(cljs.core.name.call(null,actual_type_20108),canonical_f_20110);
}
{
var G__20111 = seq__20031_20103;
var G__20112 = chunk__20033_20104;
var G__20113 = count__20034_20105;
var G__20114 = (i__20035_20106 + 1);
seq__20031_20103 = G__20111;
chunk__20033_20104 = G__20112;
count__20034_20105 = G__20113;
i__20035_20106 = G__20114;
continue;
}
} else
{var temp__4092__auto___20115__$1 = cljs.core.seq.call(null,seq__20031_20103);if(temp__4092__auto___20115__$1)
{var seq__20031_20116__$1 = temp__4092__auto___20115__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20031_20116__$1))
{var c__5489__auto___20117 = cljs.core.chunk_first.call(null,seq__20031_20116__$1);{
var G__20118 = cljs.core.chunk_rest.call(null,seq__20031_20116__$1);
var G__20119 = c__5489__auto___20117;
var G__20120 = cljs.core.count.call(null,c__5489__auto___20117);
var G__20121 = 0;
seq__20031_20103 = G__20118;
chunk__20033_20104 = G__20119;
count__20034_20105 = G__20120;
i__20035_20106 = G__20121;
continue;
}
} else
{var vec__20051_20122 = cljs.core.first.call(null,seq__20031_20116__$1);var actual_type_20123 = cljs.core.nth.call(null,vec__20051_20122,0,null);var factory_20124 = cljs.core.nth.call(null,vec__20051_20122,1,null);var canonical_f_20125 = (cljs.core.truth_(selector_20054)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20053,selector_20054):cljs.core.identity).call(null,factory_20124.call(null,f_20102));dommy.core.update_event_listeners_BANG_.call(null,elem_20053,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20054,actual_type_20123,f_20102], null),canonical_f_20125);
if(cljs.core.truth_(elem_20053.addEventListener))
{elem_20053.addEventListener(cljs.core.name.call(null,actual_type_20123),canonical_f_20125);
} else
{elem_20053.attachEvent(cljs.core.name.call(null,actual_type_20123),canonical_f_20125);
}
{
var G__20126 = cljs.core.next.call(null,seq__20031_20116__$1);
var G__20127 = null;
var G__20128 = 0;
var G__20129 = 0;
seq__20031_20103 = G__20126;
chunk__20033_20104 = G__20127;
count__20034_20105 = G__20128;
i__20035_20106 = G__20129;
continue;
}
}
} else
{}
}
break;
}
{
var G__20130 = cljs.core.next.call(null,seq__20030_20094__$1);
var G__20131 = null;
var G__20132 = 0;
var G__20133 = 0;
seq__20030_20055 = G__20130;
chunk__20037_20056 = G__20131;
count__20038_20057 = G__20132;
i__20039_20058 = G__20133;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__20134){
var elem_sel = cljs.core.first(arglist__20134);
var type_fs = cljs.core.rest(arglist__20134);
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
var vec__20158_20181 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_20182 = cljs.core.nth.call(null,vec__20158_20181,0,null);var selector_20183 = cljs.core.nth.call(null,vec__20158_20181,1,null);var seq__20159_20184 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__20166_20185 = null;var count__20167_20186 = 0;var i__20168_20187 = 0;while(true){
if((i__20168_20187 < count__20167_20186))
{var vec__20175_20188 = cljs.core._nth.call(null,chunk__20166_20185,i__20168_20187);var orig_type_20189 = cljs.core.nth.call(null,vec__20175_20188,0,null);var f_20190 = cljs.core.nth.call(null,vec__20175_20188,1,null);var seq__20169_20191 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20189,new cljs.core.PersistentArrayMap.fromArray([orig_type_20189,cljs.core.identity], true, false)));var chunk__20171_20192 = null;var count__20172_20193 = 0;var i__20173_20194 = 0;while(true){
if((i__20173_20194 < count__20172_20193))
{var vec__20176_20195 = cljs.core._nth.call(null,chunk__20171_20192,i__20173_20194);var actual_type_20196 = cljs.core.nth.call(null,vec__20176_20195,0,null);var __20197 = cljs.core.nth.call(null,vec__20176_20195,1,null);var keys_20198 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20183,actual_type_20196,f_20190], null);var canonical_f_20199 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20182),keys_20198);dommy.core.update_event_listeners_BANG_.call(null,elem_20182,dommy.utils.dissoc_in,keys_20198);
if(cljs.core.truth_(elem_20182.removeEventListener))
{elem_20182.removeEventListener(cljs.core.name.call(null,actual_type_20196),canonical_f_20199);
} else
{elem_20182.detachEvent(cljs.core.name.call(null,actual_type_20196),canonical_f_20199);
}
{
var G__20200 = seq__20169_20191;
var G__20201 = chunk__20171_20192;
var G__20202 = count__20172_20193;
var G__20203 = (i__20173_20194 + 1);
seq__20169_20191 = G__20200;
chunk__20171_20192 = G__20201;
count__20172_20193 = G__20202;
i__20173_20194 = G__20203;
continue;
}
} else
{var temp__4092__auto___20204 = cljs.core.seq.call(null,seq__20169_20191);if(temp__4092__auto___20204)
{var seq__20169_20205__$1 = temp__4092__auto___20204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20169_20205__$1))
{var c__5489__auto___20206 = cljs.core.chunk_first.call(null,seq__20169_20205__$1);{
var G__20207 = cljs.core.chunk_rest.call(null,seq__20169_20205__$1);
var G__20208 = c__5489__auto___20206;
var G__20209 = cljs.core.count.call(null,c__5489__auto___20206);
var G__20210 = 0;
seq__20169_20191 = G__20207;
chunk__20171_20192 = G__20208;
count__20172_20193 = G__20209;
i__20173_20194 = G__20210;
continue;
}
} else
{var vec__20177_20211 = cljs.core.first.call(null,seq__20169_20205__$1);var actual_type_20212 = cljs.core.nth.call(null,vec__20177_20211,0,null);var __20213 = cljs.core.nth.call(null,vec__20177_20211,1,null);var keys_20214 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20183,actual_type_20212,f_20190], null);var canonical_f_20215 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20182),keys_20214);dommy.core.update_event_listeners_BANG_.call(null,elem_20182,dommy.utils.dissoc_in,keys_20214);
if(cljs.core.truth_(elem_20182.removeEventListener))
{elem_20182.removeEventListener(cljs.core.name.call(null,actual_type_20212),canonical_f_20215);
} else
{elem_20182.detachEvent(cljs.core.name.call(null,actual_type_20212),canonical_f_20215);
}
{
var G__20216 = cljs.core.next.call(null,seq__20169_20205__$1);
var G__20217 = null;
var G__20218 = 0;
var G__20219 = 0;
seq__20169_20191 = G__20216;
chunk__20171_20192 = G__20217;
count__20172_20193 = G__20218;
i__20173_20194 = G__20219;
continue;
}
}
} else
{}
}
break;
}
{
var G__20220 = seq__20159_20184;
var G__20221 = chunk__20166_20185;
var G__20222 = count__20167_20186;
var G__20223 = (i__20168_20187 + 1);
seq__20159_20184 = G__20220;
chunk__20166_20185 = G__20221;
count__20167_20186 = G__20222;
i__20168_20187 = G__20223;
continue;
}
} else
{var temp__4092__auto___20224 = cljs.core.seq.call(null,seq__20159_20184);if(temp__4092__auto___20224)
{var seq__20159_20225__$1 = temp__4092__auto___20224;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20159_20225__$1))
{var c__5489__auto___20226 = cljs.core.chunk_first.call(null,seq__20159_20225__$1);{
var G__20227 = cljs.core.chunk_rest.call(null,seq__20159_20225__$1);
var G__20228 = c__5489__auto___20226;
var G__20229 = cljs.core.count.call(null,c__5489__auto___20226);
var G__20230 = 0;
seq__20159_20184 = G__20227;
chunk__20166_20185 = G__20228;
count__20167_20186 = G__20229;
i__20168_20187 = G__20230;
continue;
}
} else
{var vec__20178_20231 = cljs.core.first.call(null,seq__20159_20225__$1);var orig_type_20232 = cljs.core.nth.call(null,vec__20178_20231,0,null);var f_20233 = cljs.core.nth.call(null,vec__20178_20231,1,null);var seq__20160_20234 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20232,new cljs.core.PersistentArrayMap.fromArray([orig_type_20232,cljs.core.identity], true, false)));var chunk__20162_20235 = null;var count__20163_20236 = 0;var i__20164_20237 = 0;while(true){
if((i__20164_20237 < count__20163_20236))
{var vec__20179_20238 = cljs.core._nth.call(null,chunk__20162_20235,i__20164_20237);var actual_type_20239 = cljs.core.nth.call(null,vec__20179_20238,0,null);var __20240 = cljs.core.nth.call(null,vec__20179_20238,1,null);var keys_20241 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20183,actual_type_20239,f_20233], null);var canonical_f_20242 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20182),keys_20241);dommy.core.update_event_listeners_BANG_.call(null,elem_20182,dommy.utils.dissoc_in,keys_20241);
if(cljs.core.truth_(elem_20182.removeEventListener))
{elem_20182.removeEventListener(cljs.core.name.call(null,actual_type_20239),canonical_f_20242);
} else
{elem_20182.detachEvent(cljs.core.name.call(null,actual_type_20239),canonical_f_20242);
}
{
var G__20243 = seq__20160_20234;
var G__20244 = chunk__20162_20235;
var G__20245 = count__20163_20236;
var G__20246 = (i__20164_20237 + 1);
seq__20160_20234 = G__20243;
chunk__20162_20235 = G__20244;
count__20163_20236 = G__20245;
i__20164_20237 = G__20246;
continue;
}
} else
{var temp__4092__auto___20247__$1 = cljs.core.seq.call(null,seq__20160_20234);if(temp__4092__auto___20247__$1)
{var seq__20160_20248__$1 = temp__4092__auto___20247__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20160_20248__$1))
{var c__5489__auto___20249 = cljs.core.chunk_first.call(null,seq__20160_20248__$1);{
var G__20250 = cljs.core.chunk_rest.call(null,seq__20160_20248__$1);
var G__20251 = c__5489__auto___20249;
var G__20252 = cljs.core.count.call(null,c__5489__auto___20249);
var G__20253 = 0;
seq__20160_20234 = G__20250;
chunk__20162_20235 = G__20251;
count__20163_20236 = G__20252;
i__20164_20237 = G__20253;
continue;
}
} else
{var vec__20180_20254 = cljs.core.first.call(null,seq__20160_20248__$1);var actual_type_20255 = cljs.core.nth.call(null,vec__20180_20254,0,null);var __20256 = cljs.core.nth.call(null,vec__20180_20254,1,null);var keys_20257 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20183,actual_type_20255,f_20233], null);var canonical_f_20258 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20182),keys_20257);dommy.core.update_event_listeners_BANG_.call(null,elem_20182,dommy.utils.dissoc_in,keys_20257);
if(cljs.core.truth_(elem_20182.removeEventListener))
{elem_20182.removeEventListener(cljs.core.name.call(null,actual_type_20255),canonical_f_20258);
} else
{elem_20182.detachEvent(cljs.core.name.call(null,actual_type_20255),canonical_f_20258);
}
{
var G__20259 = cljs.core.next.call(null,seq__20160_20248__$1);
var G__20260 = null;
var G__20261 = 0;
var G__20262 = 0;
seq__20160_20234 = G__20259;
chunk__20162_20235 = G__20260;
count__20163_20236 = G__20261;
i__20164_20237 = G__20262;
continue;
}
}
} else
{}
}
break;
}
{
var G__20263 = cljs.core.next.call(null,seq__20159_20225__$1);
var G__20264 = null;
var G__20265 = 0;
var G__20266 = 0;
seq__20159_20184 = G__20263;
chunk__20166_20185 = G__20264;
count__20167_20186 = G__20265;
i__20168_20187 = G__20266;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__20267){
var elem_sel = cljs.core.first(arglist__20267);
var type_fs = cljs.core.rest(arglist__20267);
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
var vec__20275_20282 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_20283 = cljs.core.nth.call(null,vec__20275_20282,0,null);var selector_20284 = cljs.core.nth.call(null,vec__20275_20282,1,null);var seq__20276_20285 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__20277_20286 = null;var count__20278_20287 = 0;var i__20279_20288 = 0;while(true){
if((i__20279_20288 < count__20278_20287))
{var vec__20280_20289 = cljs.core._nth.call(null,chunk__20277_20286,i__20279_20288);var type_20290 = cljs.core.nth.call(null,vec__20280_20289,0,null);var f_20291 = cljs.core.nth.call(null,vec__20280_20289,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_20290,((function (seq__20276_20285,chunk__20277_20286,count__20278_20287,i__20279_20288,vec__20280_20289,type_20290,f_20291){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_20290,this_fn);
return f_20291.call(null,e);
});})(seq__20276_20285,chunk__20277_20286,count__20278_20287,i__20279_20288,vec__20280_20289,type_20290,f_20291))
);
{
var G__20292 = seq__20276_20285;
var G__20293 = chunk__20277_20286;
var G__20294 = count__20278_20287;
var G__20295 = (i__20279_20288 + 1);
seq__20276_20285 = G__20292;
chunk__20277_20286 = G__20293;
count__20278_20287 = G__20294;
i__20279_20288 = G__20295;
continue;
}
} else
{var temp__4092__auto___20296 = cljs.core.seq.call(null,seq__20276_20285);if(temp__4092__auto___20296)
{var seq__20276_20297__$1 = temp__4092__auto___20296;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20276_20297__$1))
{var c__5489__auto___20298 = cljs.core.chunk_first.call(null,seq__20276_20297__$1);{
var G__20299 = cljs.core.chunk_rest.call(null,seq__20276_20297__$1);
var G__20300 = c__5489__auto___20298;
var G__20301 = cljs.core.count.call(null,c__5489__auto___20298);
var G__20302 = 0;
seq__20276_20285 = G__20299;
chunk__20277_20286 = G__20300;
count__20278_20287 = G__20301;
i__20279_20288 = G__20302;
continue;
}
} else
{var vec__20281_20303 = cljs.core.first.call(null,seq__20276_20297__$1);var type_20304 = cljs.core.nth.call(null,vec__20281_20303,0,null);var f_20305 = cljs.core.nth.call(null,vec__20281_20303,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_20304,((function (seq__20276_20285,chunk__20277_20286,count__20278_20287,i__20279_20288,vec__20281_20303,type_20304,f_20305,seq__20276_20297__$1,temp__4092__auto___20296){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_20304,this_fn);
return f_20305.call(null,e);
});})(seq__20276_20285,chunk__20277_20286,count__20278_20287,i__20279_20288,vec__20281_20303,type_20304,f_20305,seq__20276_20297__$1,temp__4092__auto___20296))
);
{
var G__20306 = cljs.core.next.call(null,seq__20276_20297__$1);
var G__20307 = null;
var G__20308 = 0;
var G__20309 = 0;
seq__20276_20285 = G__20306;
chunk__20277_20286 = G__20307;
count__20278_20287 = G__20308;
i__20279_20288 = G__20309;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__20310){
var elem_sel = cljs.core.first(arglist__20310);
var type_fs = cljs.core.rest(arglist__20310);
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
var fire_BANG___delegate = function (node,event_type,p__20311){var vec__20313 = p__20311;var update_event_BANG_ = cljs.core.nth.call(null,vec__20313,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__20311 = null;if (arguments.length > 2) {
  p__20311 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__20311);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__20314){
var node = cljs.core.first(arglist__20314);
arglist__20314 = cljs.core.next(arglist__20314);
var event_type = cljs.core.first(arglist__20314);
var p__20311 = cljs.core.rest(arglist__20314);
return fire_BANG___delegate(node,event_type,p__20311);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
