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
var append_BANG___2 = (function (parent,child){var G__15020 = dommy.template.__GT_node_like.call(null,parent);G__15020.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__15020;
});
var append_BANG___3 = (function() { 
var G__15025__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__15021_15026 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__15022_15027 = null;var count__15023_15028 = 0;var i__15024_15029 = 0;while(true){
if((i__15024_15029 < count__15023_15028))
{var c_15030 = cljs.core._nth.call(null,chunk__15022_15027,i__15024_15029);append_BANG_.call(null,parent__$1,c_15030);
{
var G__15031 = seq__15021_15026;
var G__15032 = chunk__15022_15027;
var G__15033 = count__15023_15028;
var G__15034 = (i__15024_15029 + 1);
seq__15021_15026 = G__15031;
chunk__15022_15027 = G__15032;
count__15023_15028 = G__15033;
i__15024_15029 = G__15034;
continue;
}
} else
{var temp__4092__auto___15035 = cljs.core.seq.call(null,seq__15021_15026);if(temp__4092__auto___15035)
{var seq__15021_15036__$1 = temp__4092__auto___15035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15021_15036__$1))
{var c__5497__auto___15037 = cljs.core.chunk_first.call(null,seq__15021_15036__$1);{
var G__15038 = cljs.core.chunk_rest.call(null,seq__15021_15036__$1);
var G__15039 = c__5497__auto___15037;
var G__15040 = cljs.core.count.call(null,c__5497__auto___15037);
var G__15041 = 0;
seq__15021_15026 = G__15038;
chunk__15022_15027 = G__15039;
count__15023_15028 = G__15040;
i__15024_15029 = G__15041;
continue;
}
} else
{var c_15042 = cljs.core.first.call(null,seq__15021_15036__$1);append_BANG_.call(null,parent__$1,c_15042);
{
var G__15043 = cljs.core.next.call(null,seq__15021_15036__$1);
var G__15044 = null;
var G__15045 = 0;
var G__15046 = 0;
seq__15021_15026 = G__15043;
chunk__15022_15027 = G__15044;
count__15023_15028 = G__15045;
i__15024_15029 = G__15046;
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
var G__15025 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15025__delegate.call(this,parent,child,more_children);};
G__15025.cljs$lang$maxFixedArity = 2;
G__15025.cljs$lang$applyTo = (function (arglist__15047){
var parent = cljs.core.first(arglist__15047);
arglist__15047 = cljs.core.next(arglist__15047);
var child = cljs.core.first(arglist__15047);
var more_children = cljs.core.rest(arglist__15047);
return G__15025__delegate(parent,child,more_children);
});
G__15025.cljs$core$IFn$_invoke$arity$variadic = G__15025__delegate;
return G__15025;
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
var prepend_BANG___2 = (function (parent,child){var G__15053 = dommy.template.__GT_node_like.call(null,parent);G__15053.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__15053;
});
var prepend_BANG___3 = (function() { 
var G__15058__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__15054_15059 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__15055_15060 = null;var count__15056_15061 = 0;var i__15057_15062 = 0;while(true){
if((i__15057_15062 < count__15056_15061))
{var c_15063 = cljs.core._nth.call(null,chunk__15055_15060,i__15057_15062);prepend_BANG_.call(null,parent__$1,c_15063);
{
var G__15064 = seq__15054_15059;
var G__15065 = chunk__15055_15060;
var G__15066 = count__15056_15061;
var G__15067 = (i__15057_15062 + 1);
seq__15054_15059 = G__15064;
chunk__15055_15060 = G__15065;
count__15056_15061 = G__15066;
i__15057_15062 = G__15067;
continue;
}
} else
{var temp__4092__auto___15068 = cljs.core.seq.call(null,seq__15054_15059);if(temp__4092__auto___15068)
{var seq__15054_15069__$1 = temp__4092__auto___15068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15054_15069__$1))
{var c__5497__auto___15070 = cljs.core.chunk_first.call(null,seq__15054_15069__$1);{
var G__15071 = cljs.core.chunk_rest.call(null,seq__15054_15069__$1);
var G__15072 = c__5497__auto___15070;
var G__15073 = cljs.core.count.call(null,c__5497__auto___15070);
var G__15074 = 0;
seq__15054_15059 = G__15071;
chunk__15055_15060 = G__15072;
count__15056_15061 = G__15073;
i__15057_15062 = G__15074;
continue;
}
} else
{var c_15075 = cljs.core.first.call(null,seq__15054_15069__$1);prepend_BANG_.call(null,parent__$1,c_15075);
{
var G__15076 = cljs.core.next.call(null,seq__15054_15069__$1);
var G__15077 = null;
var G__15078 = 0;
var G__15079 = 0;
seq__15054_15059 = G__15076;
chunk__15055_15060 = G__15077;
count__15056_15061 = G__15078;
i__15057_15062 = G__15079;
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
var G__15058 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15058__delegate.call(this,parent,child,more_children);};
G__15058.cljs$lang$maxFixedArity = 2;
G__15058.cljs$lang$applyTo = (function (arglist__15080){
var parent = cljs.core.first(arglist__15080);
arglist__15080 = cljs.core.next(arglist__15080);
var child = cljs.core.first(arglist__15080);
var more_children = cljs.core.rest(arglist__15080);
return G__15058__delegate(parent,child,more_children);
});
G__15058.cljs$core$IFn$_invoke$arity$variadic = G__15058__delegate;
return G__15058;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___15081 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___15081))
{var next_15082 = temp__4090__auto___15081;parent.insertBefore(actual_node,next_15082);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__15084 = dommy.template.__GT_node_like.call(null,parent);G__15084.innerHTML = "";
dommy.core.append_BANG_.call(null,G__15084,node_like);
return G__15084;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__15086 = elem__$1.parentNode;G__15086.removeChild(elem__$1);
return G__15086;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__15087_SHARP_){return p1__15087_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__15088_SHARP_){return !((p1__15088_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__15089){var vec__15090 = p__15089;var special_mouse_event = cljs.core.nth.call(null,vec__15090,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__15090,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4773__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4773__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15091){
var elem = cljs.core.first(arglist__15091);
arglist__15091 = cljs.core.next(arglist__15091);
var f = cljs.core.first(arglist__15091);
var args = cljs.core.rest(arglist__15091);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__15092_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__15092_SHARP_));
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
var vec__15116_15139 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_15140 = cljs.core.nth.call(null,vec__15116_15139,0,null);var selector_15141 = cljs.core.nth.call(null,vec__15116_15139,1,null);var seq__15117_15142 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__15124_15143 = null;var count__15125_15144 = 0;var i__15126_15145 = 0;while(true){
if((i__15126_15145 < count__15125_15144))
{var vec__15133_15146 = cljs.core._nth.call(null,chunk__15124_15143,i__15126_15145);var orig_type_15147 = cljs.core.nth.call(null,vec__15133_15146,0,null);var f_15148 = cljs.core.nth.call(null,vec__15133_15146,1,null);var seq__15127_15149 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15147,new cljs.core.PersistentArrayMap.fromArray([orig_type_15147,cljs.core.identity], true, false)));var chunk__15129_15150 = null;var count__15130_15151 = 0;var i__15131_15152 = 0;while(true){
if((i__15131_15152 < count__15130_15151))
{var vec__15134_15153 = cljs.core._nth.call(null,chunk__15129_15150,i__15131_15152);var actual_type_15154 = cljs.core.nth.call(null,vec__15134_15153,0,null);var factory_15155 = cljs.core.nth.call(null,vec__15134_15153,1,null);var canonical_f_15156 = (cljs.core.truth_(selector_15141)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15140,selector_15141):cljs.core.identity).call(null,factory_15155.call(null,f_15148));dommy.core.update_event_listeners_BANG_.call(null,elem_15140,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15141,actual_type_15154,f_15148], null),canonical_f_15156);
if(cljs.core.truth_(elem_15140.addEventListener))
{elem_15140.addEventListener(cljs.core.name.call(null,actual_type_15154),canonical_f_15156);
} else
{elem_15140.attachEvent(cljs.core.name.call(null,actual_type_15154),canonical_f_15156);
}
{
var G__15157 = seq__15127_15149;
var G__15158 = chunk__15129_15150;
var G__15159 = count__15130_15151;
var G__15160 = (i__15131_15152 + 1);
seq__15127_15149 = G__15157;
chunk__15129_15150 = G__15158;
count__15130_15151 = G__15159;
i__15131_15152 = G__15160;
continue;
}
} else
{var temp__4092__auto___15161 = cljs.core.seq.call(null,seq__15127_15149);if(temp__4092__auto___15161)
{var seq__15127_15162__$1 = temp__4092__auto___15161;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15127_15162__$1))
{var c__5497__auto___15163 = cljs.core.chunk_first.call(null,seq__15127_15162__$1);{
var G__15164 = cljs.core.chunk_rest.call(null,seq__15127_15162__$1);
var G__15165 = c__5497__auto___15163;
var G__15166 = cljs.core.count.call(null,c__5497__auto___15163);
var G__15167 = 0;
seq__15127_15149 = G__15164;
chunk__15129_15150 = G__15165;
count__15130_15151 = G__15166;
i__15131_15152 = G__15167;
continue;
}
} else
{var vec__15135_15168 = cljs.core.first.call(null,seq__15127_15162__$1);var actual_type_15169 = cljs.core.nth.call(null,vec__15135_15168,0,null);var factory_15170 = cljs.core.nth.call(null,vec__15135_15168,1,null);var canonical_f_15171 = (cljs.core.truth_(selector_15141)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15140,selector_15141):cljs.core.identity).call(null,factory_15170.call(null,f_15148));dommy.core.update_event_listeners_BANG_.call(null,elem_15140,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15141,actual_type_15169,f_15148], null),canonical_f_15171);
if(cljs.core.truth_(elem_15140.addEventListener))
{elem_15140.addEventListener(cljs.core.name.call(null,actual_type_15169),canonical_f_15171);
} else
{elem_15140.attachEvent(cljs.core.name.call(null,actual_type_15169),canonical_f_15171);
}
{
var G__15172 = cljs.core.next.call(null,seq__15127_15162__$1);
var G__15173 = null;
var G__15174 = 0;
var G__15175 = 0;
seq__15127_15149 = G__15172;
chunk__15129_15150 = G__15173;
count__15130_15151 = G__15174;
i__15131_15152 = G__15175;
continue;
}
}
} else
{}
}
break;
}
{
var G__15176 = seq__15117_15142;
var G__15177 = chunk__15124_15143;
var G__15178 = count__15125_15144;
var G__15179 = (i__15126_15145 + 1);
seq__15117_15142 = G__15176;
chunk__15124_15143 = G__15177;
count__15125_15144 = G__15178;
i__15126_15145 = G__15179;
continue;
}
} else
{var temp__4092__auto___15180 = cljs.core.seq.call(null,seq__15117_15142);if(temp__4092__auto___15180)
{var seq__15117_15181__$1 = temp__4092__auto___15180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15117_15181__$1))
{var c__5497__auto___15182 = cljs.core.chunk_first.call(null,seq__15117_15181__$1);{
var G__15183 = cljs.core.chunk_rest.call(null,seq__15117_15181__$1);
var G__15184 = c__5497__auto___15182;
var G__15185 = cljs.core.count.call(null,c__5497__auto___15182);
var G__15186 = 0;
seq__15117_15142 = G__15183;
chunk__15124_15143 = G__15184;
count__15125_15144 = G__15185;
i__15126_15145 = G__15186;
continue;
}
} else
{var vec__15136_15187 = cljs.core.first.call(null,seq__15117_15181__$1);var orig_type_15188 = cljs.core.nth.call(null,vec__15136_15187,0,null);var f_15189 = cljs.core.nth.call(null,vec__15136_15187,1,null);var seq__15118_15190 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15188,new cljs.core.PersistentArrayMap.fromArray([orig_type_15188,cljs.core.identity], true, false)));var chunk__15120_15191 = null;var count__15121_15192 = 0;var i__15122_15193 = 0;while(true){
if((i__15122_15193 < count__15121_15192))
{var vec__15137_15194 = cljs.core._nth.call(null,chunk__15120_15191,i__15122_15193);var actual_type_15195 = cljs.core.nth.call(null,vec__15137_15194,0,null);var factory_15196 = cljs.core.nth.call(null,vec__15137_15194,1,null);var canonical_f_15197 = (cljs.core.truth_(selector_15141)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15140,selector_15141):cljs.core.identity).call(null,factory_15196.call(null,f_15189));dommy.core.update_event_listeners_BANG_.call(null,elem_15140,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15141,actual_type_15195,f_15189], null),canonical_f_15197);
if(cljs.core.truth_(elem_15140.addEventListener))
{elem_15140.addEventListener(cljs.core.name.call(null,actual_type_15195),canonical_f_15197);
} else
{elem_15140.attachEvent(cljs.core.name.call(null,actual_type_15195),canonical_f_15197);
}
{
var G__15198 = seq__15118_15190;
var G__15199 = chunk__15120_15191;
var G__15200 = count__15121_15192;
var G__15201 = (i__15122_15193 + 1);
seq__15118_15190 = G__15198;
chunk__15120_15191 = G__15199;
count__15121_15192 = G__15200;
i__15122_15193 = G__15201;
continue;
}
} else
{var temp__4092__auto___15202__$1 = cljs.core.seq.call(null,seq__15118_15190);if(temp__4092__auto___15202__$1)
{var seq__15118_15203__$1 = temp__4092__auto___15202__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15118_15203__$1))
{var c__5497__auto___15204 = cljs.core.chunk_first.call(null,seq__15118_15203__$1);{
var G__15205 = cljs.core.chunk_rest.call(null,seq__15118_15203__$1);
var G__15206 = c__5497__auto___15204;
var G__15207 = cljs.core.count.call(null,c__5497__auto___15204);
var G__15208 = 0;
seq__15118_15190 = G__15205;
chunk__15120_15191 = G__15206;
count__15121_15192 = G__15207;
i__15122_15193 = G__15208;
continue;
}
} else
{var vec__15138_15209 = cljs.core.first.call(null,seq__15118_15203__$1);var actual_type_15210 = cljs.core.nth.call(null,vec__15138_15209,0,null);var factory_15211 = cljs.core.nth.call(null,vec__15138_15209,1,null);var canonical_f_15212 = (cljs.core.truth_(selector_15141)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15140,selector_15141):cljs.core.identity).call(null,factory_15211.call(null,f_15189));dommy.core.update_event_listeners_BANG_.call(null,elem_15140,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15141,actual_type_15210,f_15189], null),canonical_f_15212);
if(cljs.core.truth_(elem_15140.addEventListener))
{elem_15140.addEventListener(cljs.core.name.call(null,actual_type_15210),canonical_f_15212);
} else
{elem_15140.attachEvent(cljs.core.name.call(null,actual_type_15210),canonical_f_15212);
}
{
var G__15213 = cljs.core.next.call(null,seq__15118_15203__$1);
var G__15214 = null;
var G__15215 = 0;
var G__15216 = 0;
seq__15118_15190 = G__15213;
chunk__15120_15191 = G__15214;
count__15121_15192 = G__15215;
i__15122_15193 = G__15216;
continue;
}
}
} else
{}
}
break;
}
{
var G__15217 = cljs.core.next.call(null,seq__15117_15181__$1);
var G__15218 = null;
var G__15219 = 0;
var G__15220 = 0;
seq__15117_15142 = G__15217;
chunk__15124_15143 = G__15218;
count__15125_15144 = G__15219;
i__15126_15145 = G__15220;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__15221){
var elem_sel = cljs.core.first(arglist__15221);
var type_fs = cljs.core.rest(arglist__15221);
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
var vec__15245_15268 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_15269 = cljs.core.nth.call(null,vec__15245_15268,0,null);var selector_15270 = cljs.core.nth.call(null,vec__15245_15268,1,null);var seq__15246_15271 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__15253_15272 = null;var count__15254_15273 = 0;var i__15255_15274 = 0;while(true){
if((i__15255_15274 < count__15254_15273))
{var vec__15262_15275 = cljs.core._nth.call(null,chunk__15253_15272,i__15255_15274);var orig_type_15276 = cljs.core.nth.call(null,vec__15262_15275,0,null);var f_15277 = cljs.core.nth.call(null,vec__15262_15275,1,null);var seq__15256_15278 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15276,new cljs.core.PersistentArrayMap.fromArray([orig_type_15276,cljs.core.identity], true, false)));var chunk__15258_15279 = null;var count__15259_15280 = 0;var i__15260_15281 = 0;while(true){
if((i__15260_15281 < count__15259_15280))
{var vec__15263_15282 = cljs.core._nth.call(null,chunk__15258_15279,i__15260_15281);var actual_type_15283 = cljs.core.nth.call(null,vec__15263_15282,0,null);var __15284 = cljs.core.nth.call(null,vec__15263_15282,1,null);var keys_15285 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15270,actual_type_15283,f_15277], null);var canonical_f_15286 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15269),keys_15285);dommy.core.update_event_listeners_BANG_.call(null,elem_15269,dommy.utils.dissoc_in,keys_15285);
if(cljs.core.truth_(elem_15269.removeEventListener))
{elem_15269.removeEventListener(cljs.core.name.call(null,actual_type_15283),canonical_f_15286);
} else
{elem_15269.detachEvent(cljs.core.name.call(null,actual_type_15283),canonical_f_15286);
}
{
var G__15287 = seq__15256_15278;
var G__15288 = chunk__15258_15279;
var G__15289 = count__15259_15280;
var G__15290 = (i__15260_15281 + 1);
seq__15256_15278 = G__15287;
chunk__15258_15279 = G__15288;
count__15259_15280 = G__15289;
i__15260_15281 = G__15290;
continue;
}
} else
{var temp__4092__auto___15291 = cljs.core.seq.call(null,seq__15256_15278);if(temp__4092__auto___15291)
{var seq__15256_15292__$1 = temp__4092__auto___15291;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15256_15292__$1))
{var c__5497__auto___15293 = cljs.core.chunk_first.call(null,seq__15256_15292__$1);{
var G__15294 = cljs.core.chunk_rest.call(null,seq__15256_15292__$1);
var G__15295 = c__5497__auto___15293;
var G__15296 = cljs.core.count.call(null,c__5497__auto___15293);
var G__15297 = 0;
seq__15256_15278 = G__15294;
chunk__15258_15279 = G__15295;
count__15259_15280 = G__15296;
i__15260_15281 = G__15297;
continue;
}
} else
{var vec__15264_15298 = cljs.core.first.call(null,seq__15256_15292__$1);var actual_type_15299 = cljs.core.nth.call(null,vec__15264_15298,0,null);var __15300 = cljs.core.nth.call(null,vec__15264_15298,1,null);var keys_15301 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15270,actual_type_15299,f_15277], null);var canonical_f_15302 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15269),keys_15301);dommy.core.update_event_listeners_BANG_.call(null,elem_15269,dommy.utils.dissoc_in,keys_15301);
if(cljs.core.truth_(elem_15269.removeEventListener))
{elem_15269.removeEventListener(cljs.core.name.call(null,actual_type_15299),canonical_f_15302);
} else
{elem_15269.detachEvent(cljs.core.name.call(null,actual_type_15299),canonical_f_15302);
}
{
var G__15303 = cljs.core.next.call(null,seq__15256_15292__$1);
var G__15304 = null;
var G__15305 = 0;
var G__15306 = 0;
seq__15256_15278 = G__15303;
chunk__15258_15279 = G__15304;
count__15259_15280 = G__15305;
i__15260_15281 = G__15306;
continue;
}
}
} else
{}
}
break;
}
{
var G__15307 = seq__15246_15271;
var G__15308 = chunk__15253_15272;
var G__15309 = count__15254_15273;
var G__15310 = (i__15255_15274 + 1);
seq__15246_15271 = G__15307;
chunk__15253_15272 = G__15308;
count__15254_15273 = G__15309;
i__15255_15274 = G__15310;
continue;
}
} else
{var temp__4092__auto___15311 = cljs.core.seq.call(null,seq__15246_15271);if(temp__4092__auto___15311)
{var seq__15246_15312__$1 = temp__4092__auto___15311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15246_15312__$1))
{var c__5497__auto___15313 = cljs.core.chunk_first.call(null,seq__15246_15312__$1);{
var G__15314 = cljs.core.chunk_rest.call(null,seq__15246_15312__$1);
var G__15315 = c__5497__auto___15313;
var G__15316 = cljs.core.count.call(null,c__5497__auto___15313);
var G__15317 = 0;
seq__15246_15271 = G__15314;
chunk__15253_15272 = G__15315;
count__15254_15273 = G__15316;
i__15255_15274 = G__15317;
continue;
}
} else
{var vec__15265_15318 = cljs.core.first.call(null,seq__15246_15312__$1);var orig_type_15319 = cljs.core.nth.call(null,vec__15265_15318,0,null);var f_15320 = cljs.core.nth.call(null,vec__15265_15318,1,null);var seq__15247_15321 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15319,new cljs.core.PersistentArrayMap.fromArray([orig_type_15319,cljs.core.identity], true, false)));var chunk__15249_15322 = null;var count__15250_15323 = 0;var i__15251_15324 = 0;while(true){
if((i__15251_15324 < count__15250_15323))
{var vec__15266_15325 = cljs.core._nth.call(null,chunk__15249_15322,i__15251_15324);var actual_type_15326 = cljs.core.nth.call(null,vec__15266_15325,0,null);var __15327 = cljs.core.nth.call(null,vec__15266_15325,1,null);var keys_15328 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15270,actual_type_15326,f_15320], null);var canonical_f_15329 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15269),keys_15328);dommy.core.update_event_listeners_BANG_.call(null,elem_15269,dommy.utils.dissoc_in,keys_15328);
if(cljs.core.truth_(elem_15269.removeEventListener))
{elem_15269.removeEventListener(cljs.core.name.call(null,actual_type_15326),canonical_f_15329);
} else
{elem_15269.detachEvent(cljs.core.name.call(null,actual_type_15326),canonical_f_15329);
}
{
var G__15330 = seq__15247_15321;
var G__15331 = chunk__15249_15322;
var G__15332 = count__15250_15323;
var G__15333 = (i__15251_15324 + 1);
seq__15247_15321 = G__15330;
chunk__15249_15322 = G__15331;
count__15250_15323 = G__15332;
i__15251_15324 = G__15333;
continue;
}
} else
{var temp__4092__auto___15334__$1 = cljs.core.seq.call(null,seq__15247_15321);if(temp__4092__auto___15334__$1)
{var seq__15247_15335__$1 = temp__4092__auto___15334__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15247_15335__$1))
{var c__5497__auto___15336 = cljs.core.chunk_first.call(null,seq__15247_15335__$1);{
var G__15337 = cljs.core.chunk_rest.call(null,seq__15247_15335__$1);
var G__15338 = c__5497__auto___15336;
var G__15339 = cljs.core.count.call(null,c__5497__auto___15336);
var G__15340 = 0;
seq__15247_15321 = G__15337;
chunk__15249_15322 = G__15338;
count__15250_15323 = G__15339;
i__15251_15324 = G__15340;
continue;
}
} else
{var vec__15267_15341 = cljs.core.first.call(null,seq__15247_15335__$1);var actual_type_15342 = cljs.core.nth.call(null,vec__15267_15341,0,null);var __15343 = cljs.core.nth.call(null,vec__15267_15341,1,null);var keys_15344 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15270,actual_type_15342,f_15320], null);var canonical_f_15345 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15269),keys_15344);dommy.core.update_event_listeners_BANG_.call(null,elem_15269,dommy.utils.dissoc_in,keys_15344);
if(cljs.core.truth_(elem_15269.removeEventListener))
{elem_15269.removeEventListener(cljs.core.name.call(null,actual_type_15342),canonical_f_15345);
} else
{elem_15269.detachEvent(cljs.core.name.call(null,actual_type_15342),canonical_f_15345);
}
{
var G__15346 = cljs.core.next.call(null,seq__15247_15335__$1);
var G__15347 = null;
var G__15348 = 0;
var G__15349 = 0;
seq__15247_15321 = G__15346;
chunk__15249_15322 = G__15347;
count__15250_15323 = G__15348;
i__15251_15324 = G__15349;
continue;
}
}
} else
{}
}
break;
}
{
var G__15350 = cljs.core.next.call(null,seq__15246_15312__$1);
var G__15351 = null;
var G__15352 = 0;
var G__15353 = 0;
seq__15246_15271 = G__15350;
chunk__15253_15272 = G__15351;
count__15254_15273 = G__15352;
i__15255_15274 = G__15353;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__15354){
var elem_sel = cljs.core.first(arglist__15354);
var type_fs = cljs.core.rest(arglist__15354);
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
var vec__15362_15369 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_15370 = cljs.core.nth.call(null,vec__15362_15369,0,null);var selector_15371 = cljs.core.nth.call(null,vec__15362_15369,1,null);var seq__15363_15372 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__15364_15373 = null;var count__15365_15374 = 0;var i__15366_15375 = 0;while(true){
if((i__15366_15375 < count__15365_15374))
{var vec__15367_15376 = cljs.core._nth.call(null,chunk__15364_15373,i__15366_15375);var type_15377 = cljs.core.nth.call(null,vec__15367_15376,0,null);var f_15378 = cljs.core.nth.call(null,vec__15367_15376,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_15377,((function (seq__15363_15372,chunk__15364_15373,count__15365_15374,i__15366_15375,vec__15367_15376,type_15377,f_15378){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_15377,this_fn);
return f_15378.call(null,e);
});})(seq__15363_15372,chunk__15364_15373,count__15365_15374,i__15366_15375,vec__15367_15376,type_15377,f_15378))
);
{
var G__15379 = seq__15363_15372;
var G__15380 = chunk__15364_15373;
var G__15381 = count__15365_15374;
var G__15382 = (i__15366_15375 + 1);
seq__15363_15372 = G__15379;
chunk__15364_15373 = G__15380;
count__15365_15374 = G__15381;
i__15366_15375 = G__15382;
continue;
}
} else
{var temp__4092__auto___15383 = cljs.core.seq.call(null,seq__15363_15372);if(temp__4092__auto___15383)
{var seq__15363_15384__$1 = temp__4092__auto___15383;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15363_15384__$1))
{var c__5497__auto___15385 = cljs.core.chunk_first.call(null,seq__15363_15384__$1);{
var G__15386 = cljs.core.chunk_rest.call(null,seq__15363_15384__$1);
var G__15387 = c__5497__auto___15385;
var G__15388 = cljs.core.count.call(null,c__5497__auto___15385);
var G__15389 = 0;
seq__15363_15372 = G__15386;
chunk__15364_15373 = G__15387;
count__15365_15374 = G__15388;
i__15366_15375 = G__15389;
continue;
}
} else
{var vec__15368_15390 = cljs.core.first.call(null,seq__15363_15384__$1);var type_15391 = cljs.core.nth.call(null,vec__15368_15390,0,null);var f_15392 = cljs.core.nth.call(null,vec__15368_15390,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_15391,((function (seq__15363_15372,chunk__15364_15373,count__15365_15374,i__15366_15375,vec__15368_15390,type_15391,f_15392,seq__15363_15384__$1,temp__4092__auto___15383){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_15391,this_fn);
return f_15392.call(null,e);
});})(seq__15363_15372,chunk__15364_15373,count__15365_15374,i__15366_15375,vec__15368_15390,type_15391,f_15392,seq__15363_15384__$1,temp__4092__auto___15383))
);
{
var G__15393 = cljs.core.next.call(null,seq__15363_15384__$1);
var G__15394 = null;
var G__15395 = 0;
var G__15396 = 0;
seq__15363_15372 = G__15393;
chunk__15364_15373 = G__15394;
count__15365_15374 = G__15395;
i__15366_15375 = G__15396;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__15397){
var elem_sel = cljs.core.first(arglist__15397);
var type_fs = cljs.core.rest(arglist__15397);
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
var fire_BANG___delegate = function (node,event_type,p__15398){var vec__15400 = p__15398;var update_event_BANG_ = cljs.core.nth.call(null,vec__15400,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__15398 = null;if (arguments.length > 2) {
  p__15398 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__15398);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__15401){
var node = cljs.core.first(arglist__15401);
arglist__15401 = cljs.core.next(arglist__15401);
var event_type = cljs.core.first(arglist__15401);
var p__15398 = cljs.core.rest(arglist__15401);
return fire_BANG___delegate(node,event_type,p__15398);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
