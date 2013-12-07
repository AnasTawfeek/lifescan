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
dommy.core.text = (function text(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var or__4774__auto__ = elem__$1.textContent;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
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
var append_BANG___2 = (function (parent,child){var G__16067 = dommy.template.__GT_node_like.call(null,parent);G__16067.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__16067;
});
var append_BANG___3 = (function() { 
var G__16072__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16068_16073 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16069_16074 = null;var count__16070_16075 = 0;var i__16071_16076 = 0;while(true){
if((i__16071_16076 < count__16070_16075))
{var c_16077 = cljs.core._nth.call(null,chunk__16069_16074,i__16071_16076);append_BANG_.call(null,parent__$1,c_16077);
{
var G__16078 = seq__16068_16073;
var G__16079 = chunk__16069_16074;
var G__16080 = count__16070_16075;
var G__16081 = (i__16071_16076 + 1);
seq__16068_16073 = G__16078;
chunk__16069_16074 = G__16079;
count__16070_16075 = G__16080;
i__16071_16076 = G__16081;
continue;
}
} else
{var temp__4092__auto___16082 = cljs.core.seq.call(null,seq__16068_16073);if(temp__4092__auto___16082)
{var seq__16068_16083__$1 = temp__4092__auto___16082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16068_16083__$1))
{var c__5498__auto___16084 = cljs.core.chunk_first.call(null,seq__16068_16083__$1);{
var G__16085 = cljs.core.chunk_rest.call(null,seq__16068_16083__$1);
var G__16086 = c__5498__auto___16084;
var G__16087 = cljs.core.count.call(null,c__5498__auto___16084);
var G__16088 = 0;
seq__16068_16073 = G__16085;
chunk__16069_16074 = G__16086;
count__16070_16075 = G__16087;
i__16071_16076 = G__16088;
continue;
}
} else
{var c_16089 = cljs.core.first.call(null,seq__16068_16083__$1);append_BANG_.call(null,parent__$1,c_16089);
{
var G__16090 = cljs.core.next.call(null,seq__16068_16083__$1);
var G__16091 = null;
var G__16092 = 0;
var G__16093 = 0;
seq__16068_16073 = G__16090;
chunk__16069_16074 = G__16091;
count__16070_16075 = G__16092;
i__16071_16076 = G__16093;
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
var G__16072 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16072__delegate.call(this,parent,child,more_children);};
G__16072.cljs$lang$maxFixedArity = 2;
G__16072.cljs$lang$applyTo = (function (arglist__16094){
var parent = cljs.core.first(arglist__16094);
arglist__16094 = cljs.core.next(arglist__16094);
var child = cljs.core.first(arglist__16094);
var more_children = cljs.core.rest(arglist__16094);
return G__16072__delegate(parent,child,more_children);
});
G__16072.cljs$core$IFn$_invoke$arity$variadic = G__16072__delegate;
return G__16072;
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
var prepend_BANG___2 = (function (parent,child){var G__16100 = dommy.template.__GT_node_like.call(null,parent);G__16100.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__16100;
});
var prepend_BANG___3 = (function() { 
var G__16105__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16101_16106 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16102_16107 = null;var count__16103_16108 = 0;var i__16104_16109 = 0;while(true){
if((i__16104_16109 < count__16103_16108))
{var c_16110 = cljs.core._nth.call(null,chunk__16102_16107,i__16104_16109);prepend_BANG_.call(null,parent__$1,c_16110);
{
var G__16111 = seq__16101_16106;
var G__16112 = chunk__16102_16107;
var G__16113 = count__16103_16108;
var G__16114 = (i__16104_16109 + 1);
seq__16101_16106 = G__16111;
chunk__16102_16107 = G__16112;
count__16103_16108 = G__16113;
i__16104_16109 = G__16114;
continue;
}
} else
{var temp__4092__auto___16115 = cljs.core.seq.call(null,seq__16101_16106);if(temp__4092__auto___16115)
{var seq__16101_16116__$1 = temp__4092__auto___16115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16101_16116__$1))
{var c__5498__auto___16117 = cljs.core.chunk_first.call(null,seq__16101_16116__$1);{
var G__16118 = cljs.core.chunk_rest.call(null,seq__16101_16116__$1);
var G__16119 = c__5498__auto___16117;
var G__16120 = cljs.core.count.call(null,c__5498__auto___16117);
var G__16121 = 0;
seq__16101_16106 = G__16118;
chunk__16102_16107 = G__16119;
count__16103_16108 = G__16120;
i__16104_16109 = G__16121;
continue;
}
} else
{var c_16122 = cljs.core.first.call(null,seq__16101_16116__$1);prepend_BANG_.call(null,parent__$1,c_16122);
{
var G__16123 = cljs.core.next.call(null,seq__16101_16116__$1);
var G__16124 = null;
var G__16125 = 0;
var G__16126 = 0;
seq__16101_16106 = G__16123;
chunk__16102_16107 = G__16124;
count__16103_16108 = G__16125;
i__16104_16109 = G__16126;
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
var G__16105 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16105__delegate.call(this,parent,child,more_children);};
G__16105.cljs$lang$maxFixedArity = 2;
G__16105.cljs$lang$applyTo = (function (arglist__16127){
var parent = cljs.core.first(arglist__16127);
arglist__16127 = cljs.core.next(arglist__16127);
var child = cljs.core.first(arglist__16127);
var more_children = cljs.core.rest(arglist__16127);
return G__16105__delegate(parent,child,more_children);
});
G__16105.cljs$core$IFn$_invoke$arity$variadic = G__16105__delegate;
return G__16105;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___16128 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___16128))
{var next_16129 = temp__4090__auto___16128;parent.insertBefore(actual_node,next_16129);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__16131 = dommy.template.__GT_node_like.call(null,parent);G__16131.innerHTML = "";
dommy.core.append_BANG_.call(null,G__16131,node_like);
return G__16131;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__16133 = elem__$1.parentNode;G__16133.removeChild(elem__$1);
return G__16133;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16134_SHARP_){return p1__16134_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__16135_SHARP_){return !((p1__16135_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16136){var vec__16137 = p__16136;var special_mouse_event = cljs.core.nth.call(null,vec__16137,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__16137,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4774__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__4762__auto__ = related_target;if(cljs.core.truth_(and__4762__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__4762__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__4774__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16138){
var elem = cljs.core.first(arglist__16138);
arglist__16138 = cljs.core.next(arglist__16138);
var f = cljs.core.first(arglist__16138);
var args = cljs.core.rest(arglist__16138);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__16139_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16139_SHARP_));
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
var vec__16163_16186 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16187 = cljs.core.nth.call(null,vec__16163_16186,0,null);var selector_16188 = cljs.core.nth.call(null,vec__16163_16186,1,null);var seq__16164_16189 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16171_16190 = null;var count__16172_16191 = 0;var i__16173_16192 = 0;while(true){
if((i__16173_16192 < count__16172_16191))
{var vec__16180_16193 = cljs.core._nth.call(null,chunk__16171_16190,i__16173_16192);var orig_type_16194 = cljs.core.nth.call(null,vec__16180_16193,0,null);var f_16195 = cljs.core.nth.call(null,vec__16180_16193,1,null);var seq__16174_16196 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16194,new cljs.core.PersistentArrayMap.fromArray([orig_type_16194,cljs.core.identity], true, false)));var chunk__16176_16197 = null;var count__16177_16198 = 0;var i__16178_16199 = 0;while(true){
if((i__16178_16199 < count__16177_16198))
{var vec__16181_16200 = cljs.core._nth.call(null,chunk__16176_16197,i__16178_16199);var actual_type_16201 = cljs.core.nth.call(null,vec__16181_16200,0,null);var factory_16202 = cljs.core.nth.call(null,vec__16181_16200,1,null);var canonical_f_16203 = (cljs.core.truth_(selector_16188)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16187,selector_16188):cljs.core.identity).call(null,factory_16202.call(null,f_16195));dommy.core.update_event_listeners_BANG_.call(null,elem_16187,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16188,actual_type_16201,f_16195], null),canonical_f_16203);
if(cljs.core.truth_(elem_16187.addEventListener))
{elem_16187.addEventListener(cljs.core.name.call(null,actual_type_16201),canonical_f_16203);
} else
{elem_16187.attachEvent(cljs.core.name.call(null,actual_type_16201),canonical_f_16203);
}
{
var G__16204 = seq__16174_16196;
var G__16205 = chunk__16176_16197;
var G__16206 = count__16177_16198;
var G__16207 = (i__16178_16199 + 1);
seq__16174_16196 = G__16204;
chunk__16176_16197 = G__16205;
count__16177_16198 = G__16206;
i__16178_16199 = G__16207;
continue;
}
} else
{var temp__4092__auto___16208 = cljs.core.seq.call(null,seq__16174_16196);if(temp__4092__auto___16208)
{var seq__16174_16209__$1 = temp__4092__auto___16208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16174_16209__$1))
{var c__5498__auto___16210 = cljs.core.chunk_first.call(null,seq__16174_16209__$1);{
var G__16211 = cljs.core.chunk_rest.call(null,seq__16174_16209__$1);
var G__16212 = c__5498__auto___16210;
var G__16213 = cljs.core.count.call(null,c__5498__auto___16210);
var G__16214 = 0;
seq__16174_16196 = G__16211;
chunk__16176_16197 = G__16212;
count__16177_16198 = G__16213;
i__16178_16199 = G__16214;
continue;
}
} else
{var vec__16182_16215 = cljs.core.first.call(null,seq__16174_16209__$1);var actual_type_16216 = cljs.core.nth.call(null,vec__16182_16215,0,null);var factory_16217 = cljs.core.nth.call(null,vec__16182_16215,1,null);var canonical_f_16218 = (cljs.core.truth_(selector_16188)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16187,selector_16188):cljs.core.identity).call(null,factory_16217.call(null,f_16195));dommy.core.update_event_listeners_BANG_.call(null,elem_16187,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16188,actual_type_16216,f_16195], null),canonical_f_16218);
if(cljs.core.truth_(elem_16187.addEventListener))
{elem_16187.addEventListener(cljs.core.name.call(null,actual_type_16216),canonical_f_16218);
} else
{elem_16187.attachEvent(cljs.core.name.call(null,actual_type_16216),canonical_f_16218);
}
{
var G__16219 = cljs.core.next.call(null,seq__16174_16209__$1);
var G__16220 = null;
var G__16221 = 0;
var G__16222 = 0;
seq__16174_16196 = G__16219;
chunk__16176_16197 = G__16220;
count__16177_16198 = G__16221;
i__16178_16199 = G__16222;
continue;
}
}
} else
{}
}
break;
}
{
var G__16223 = seq__16164_16189;
var G__16224 = chunk__16171_16190;
var G__16225 = count__16172_16191;
var G__16226 = (i__16173_16192 + 1);
seq__16164_16189 = G__16223;
chunk__16171_16190 = G__16224;
count__16172_16191 = G__16225;
i__16173_16192 = G__16226;
continue;
}
} else
{var temp__4092__auto___16227 = cljs.core.seq.call(null,seq__16164_16189);if(temp__4092__auto___16227)
{var seq__16164_16228__$1 = temp__4092__auto___16227;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16164_16228__$1))
{var c__5498__auto___16229 = cljs.core.chunk_first.call(null,seq__16164_16228__$1);{
var G__16230 = cljs.core.chunk_rest.call(null,seq__16164_16228__$1);
var G__16231 = c__5498__auto___16229;
var G__16232 = cljs.core.count.call(null,c__5498__auto___16229);
var G__16233 = 0;
seq__16164_16189 = G__16230;
chunk__16171_16190 = G__16231;
count__16172_16191 = G__16232;
i__16173_16192 = G__16233;
continue;
}
} else
{var vec__16183_16234 = cljs.core.first.call(null,seq__16164_16228__$1);var orig_type_16235 = cljs.core.nth.call(null,vec__16183_16234,0,null);var f_16236 = cljs.core.nth.call(null,vec__16183_16234,1,null);var seq__16165_16237 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16235,new cljs.core.PersistentArrayMap.fromArray([orig_type_16235,cljs.core.identity], true, false)));var chunk__16167_16238 = null;var count__16168_16239 = 0;var i__16169_16240 = 0;while(true){
if((i__16169_16240 < count__16168_16239))
{var vec__16184_16241 = cljs.core._nth.call(null,chunk__16167_16238,i__16169_16240);var actual_type_16242 = cljs.core.nth.call(null,vec__16184_16241,0,null);var factory_16243 = cljs.core.nth.call(null,vec__16184_16241,1,null);var canonical_f_16244 = (cljs.core.truth_(selector_16188)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16187,selector_16188):cljs.core.identity).call(null,factory_16243.call(null,f_16236));dommy.core.update_event_listeners_BANG_.call(null,elem_16187,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16188,actual_type_16242,f_16236], null),canonical_f_16244);
if(cljs.core.truth_(elem_16187.addEventListener))
{elem_16187.addEventListener(cljs.core.name.call(null,actual_type_16242),canonical_f_16244);
} else
{elem_16187.attachEvent(cljs.core.name.call(null,actual_type_16242),canonical_f_16244);
}
{
var G__16245 = seq__16165_16237;
var G__16246 = chunk__16167_16238;
var G__16247 = count__16168_16239;
var G__16248 = (i__16169_16240 + 1);
seq__16165_16237 = G__16245;
chunk__16167_16238 = G__16246;
count__16168_16239 = G__16247;
i__16169_16240 = G__16248;
continue;
}
} else
{var temp__4092__auto___16249__$1 = cljs.core.seq.call(null,seq__16165_16237);if(temp__4092__auto___16249__$1)
{var seq__16165_16250__$1 = temp__4092__auto___16249__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16165_16250__$1))
{var c__5498__auto___16251 = cljs.core.chunk_first.call(null,seq__16165_16250__$1);{
var G__16252 = cljs.core.chunk_rest.call(null,seq__16165_16250__$1);
var G__16253 = c__5498__auto___16251;
var G__16254 = cljs.core.count.call(null,c__5498__auto___16251);
var G__16255 = 0;
seq__16165_16237 = G__16252;
chunk__16167_16238 = G__16253;
count__16168_16239 = G__16254;
i__16169_16240 = G__16255;
continue;
}
} else
{var vec__16185_16256 = cljs.core.first.call(null,seq__16165_16250__$1);var actual_type_16257 = cljs.core.nth.call(null,vec__16185_16256,0,null);var factory_16258 = cljs.core.nth.call(null,vec__16185_16256,1,null);var canonical_f_16259 = (cljs.core.truth_(selector_16188)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16187,selector_16188):cljs.core.identity).call(null,factory_16258.call(null,f_16236));dommy.core.update_event_listeners_BANG_.call(null,elem_16187,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16188,actual_type_16257,f_16236], null),canonical_f_16259);
if(cljs.core.truth_(elem_16187.addEventListener))
{elem_16187.addEventListener(cljs.core.name.call(null,actual_type_16257),canonical_f_16259);
} else
{elem_16187.attachEvent(cljs.core.name.call(null,actual_type_16257),canonical_f_16259);
}
{
var G__16260 = cljs.core.next.call(null,seq__16165_16250__$1);
var G__16261 = null;
var G__16262 = 0;
var G__16263 = 0;
seq__16165_16237 = G__16260;
chunk__16167_16238 = G__16261;
count__16168_16239 = G__16262;
i__16169_16240 = G__16263;
continue;
}
}
} else
{}
}
break;
}
{
var G__16264 = cljs.core.next.call(null,seq__16164_16228__$1);
var G__16265 = null;
var G__16266 = 0;
var G__16267 = 0;
seq__16164_16189 = G__16264;
chunk__16171_16190 = G__16265;
count__16172_16191 = G__16266;
i__16173_16192 = G__16267;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__16268){
var elem_sel = cljs.core.first(arglist__16268);
var type_fs = cljs.core.rest(arglist__16268);
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
var vec__16292_16315 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16316 = cljs.core.nth.call(null,vec__16292_16315,0,null);var selector_16317 = cljs.core.nth.call(null,vec__16292_16315,1,null);var seq__16293_16318 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16300_16319 = null;var count__16301_16320 = 0;var i__16302_16321 = 0;while(true){
if((i__16302_16321 < count__16301_16320))
{var vec__16309_16322 = cljs.core._nth.call(null,chunk__16300_16319,i__16302_16321);var orig_type_16323 = cljs.core.nth.call(null,vec__16309_16322,0,null);var f_16324 = cljs.core.nth.call(null,vec__16309_16322,1,null);var seq__16303_16325 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16323,new cljs.core.PersistentArrayMap.fromArray([orig_type_16323,cljs.core.identity], true, false)));var chunk__16305_16326 = null;var count__16306_16327 = 0;var i__16307_16328 = 0;while(true){
if((i__16307_16328 < count__16306_16327))
{var vec__16310_16329 = cljs.core._nth.call(null,chunk__16305_16326,i__16307_16328);var actual_type_16330 = cljs.core.nth.call(null,vec__16310_16329,0,null);var __16331 = cljs.core.nth.call(null,vec__16310_16329,1,null);var keys_16332 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16317,actual_type_16330,f_16324], null);var canonical_f_16333 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16316),keys_16332);dommy.core.update_event_listeners_BANG_.call(null,elem_16316,dommy.utils.dissoc_in,keys_16332);
if(cljs.core.truth_(elem_16316.removeEventListener))
{elem_16316.removeEventListener(cljs.core.name.call(null,actual_type_16330),canonical_f_16333);
} else
{elem_16316.detachEvent(cljs.core.name.call(null,actual_type_16330),canonical_f_16333);
}
{
var G__16334 = seq__16303_16325;
var G__16335 = chunk__16305_16326;
var G__16336 = count__16306_16327;
var G__16337 = (i__16307_16328 + 1);
seq__16303_16325 = G__16334;
chunk__16305_16326 = G__16335;
count__16306_16327 = G__16336;
i__16307_16328 = G__16337;
continue;
}
} else
{var temp__4092__auto___16338 = cljs.core.seq.call(null,seq__16303_16325);if(temp__4092__auto___16338)
{var seq__16303_16339__$1 = temp__4092__auto___16338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16303_16339__$1))
{var c__5498__auto___16340 = cljs.core.chunk_first.call(null,seq__16303_16339__$1);{
var G__16341 = cljs.core.chunk_rest.call(null,seq__16303_16339__$1);
var G__16342 = c__5498__auto___16340;
var G__16343 = cljs.core.count.call(null,c__5498__auto___16340);
var G__16344 = 0;
seq__16303_16325 = G__16341;
chunk__16305_16326 = G__16342;
count__16306_16327 = G__16343;
i__16307_16328 = G__16344;
continue;
}
} else
{var vec__16311_16345 = cljs.core.first.call(null,seq__16303_16339__$1);var actual_type_16346 = cljs.core.nth.call(null,vec__16311_16345,0,null);var __16347 = cljs.core.nth.call(null,vec__16311_16345,1,null);var keys_16348 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16317,actual_type_16346,f_16324], null);var canonical_f_16349 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16316),keys_16348);dommy.core.update_event_listeners_BANG_.call(null,elem_16316,dommy.utils.dissoc_in,keys_16348);
if(cljs.core.truth_(elem_16316.removeEventListener))
{elem_16316.removeEventListener(cljs.core.name.call(null,actual_type_16346),canonical_f_16349);
} else
{elem_16316.detachEvent(cljs.core.name.call(null,actual_type_16346),canonical_f_16349);
}
{
var G__16350 = cljs.core.next.call(null,seq__16303_16339__$1);
var G__16351 = null;
var G__16352 = 0;
var G__16353 = 0;
seq__16303_16325 = G__16350;
chunk__16305_16326 = G__16351;
count__16306_16327 = G__16352;
i__16307_16328 = G__16353;
continue;
}
}
} else
{}
}
break;
}
{
var G__16354 = seq__16293_16318;
var G__16355 = chunk__16300_16319;
var G__16356 = count__16301_16320;
var G__16357 = (i__16302_16321 + 1);
seq__16293_16318 = G__16354;
chunk__16300_16319 = G__16355;
count__16301_16320 = G__16356;
i__16302_16321 = G__16357;
continue;
}
} else
{var temp__4092__auto___16358 = cljs.core.seq.call(null,seq__16293_16318);if(temp__4092__auto___16358)
{var seq__16293_16359__$1 = temp__4092__auto___16358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16293_16359__$1))
{var c__5498__auto___16360 = cljs.core.chunk_first.call(null,seq__16293_16359__$1);{
var G__16361 = cljs.core.chunk_rest.call(null,seq__16293_16359__$1);
var G__16362 = c__5498__auto___16360;
var G__16363 = cljs.core.count.call(null,c__5498__auto___16360);
var G__16364 = 0;
seq__16293_16318 = G__16361;
chunk__16300_16319 = G__16362;
count__16301_16320 = G__16363;
i__16302_16321 = G__16364;
continue;
}
} else
{var vec__16312_16365 = cljs.core.first.call(null,seq__16293_16359__$1);var orig_type_16366 = cljs.core.nth.call(null,vec__16312_16365,0,null);var f_16367 = cljs.core.nth.call(null,vec__16312_16365,1,null);var seq__16294_16368 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16366,new cljs.core.PersistentArrayMap.fromArray([orig_type_16366,cljs.core.identity], true, false)));var chunk__16296_16369 = null;var count__16297_16370 = 0;var i__16298_16371 = 0;while(true){
if((i__16298_16371 < count__16297_16370))
{var vec__16313_16372 = cljs.core._nth.call(null,chunk__16296_16369,i__16298_16371);var actual_type_16373 = cljs.core.nth.call(null,vec__16313_16372,0,null);var __16374 = cljs.core.nth.call(null,vec__16313_16372,1,null);var keys_16375 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16317,actual_type_16373,f_16367], null);var canonical_f_16376 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16316),keys_16375);dommy.core.update_event_listeners_BANG_.call(null,elem_16316,dommy.utils.dissoc_in,keys_16375);
if(cljs.core.truth_(elem_16316.removeEventListener))
{elem_16316.removeEventListener(cljs.core.name.call(null,actual_type_16373),canonical_f_16376);
} else
{elem_16316.detachEvent(cljs.core.name.call(null,actual_type_16373),canonical_f_16376);
}
{
var G__16377 = seq__16294_16368;
var G__16378 = chunk__16296_16369;
var G__16379 = count__16297_16370;
var G__16380 = (i__16298_16371 + 1);
seq__16294_16368 = G__16377;
chunk__16296_16369 = G__16378;
count__16297_16370 = G__16379;
i__16298_16371 = G__16380;
continue;
}
} else
{var temp__4092__auto___16381__$1 = cljs.core.seq.call(null,seq__16294_16368);if(temp__4092__auto___16381__$1)
{var seq__16294_16382__$1 = temp__4092__auto___16381__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16294_16382__$1))
{var c__5498__auto___16383 = cljs.core.chunk_first.call(null,seq__16294_16382__$1);{
var G__16384 = cljs.core.chunk_rest.call(null,seq__16294_16382__$1);
var G__16385 = c__5498__auto___16383;
var G__16386 = cljs.core.count.call(null,c__5498__auto___16383);
var G__16387 = 0;
seq__16294_16368 = G__16384;
chunk__16296_16369 = G__16385;
count__16297_16370 = G__16386;
i__16298_16371 = G__16387;
continue;
}
} else
{var vec__16314_16388 = cljs.core.first.call(null,seq__16294_16382__$1);var actual_type_16389 = cljs.core.nth.call(null,vec__16314_16388,0,null);var __16390 = cljs.core.nth.call(null,vec__16314_16388,1,null);var keys_16391 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16317,actual_type_16389,f_16367], null);var canonical_f_16392 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16316),keys_16391);dommy.core.update_event_listeners_BANG_.call(null,elem_16316,dommy.utils.dissoc_in,keys_16391);
if(cljs.core.truth_(elem_16316.removeEventListener))
{elem_16316.removeEventListener(cljs.core.name.call(null,actual_type_16389),canonical_f_16392);
} else
{elem_16316.detachEvent(cljs.core.name.call(null,actual_type_16389),canonical_f_16392);
}
{
var G__16393 = cljs.core.next.call(null,seq__16294_16382__$1);
var G__16394 = null;
var G__16395 = 0;
var G__16396 = 0;
seq__16294_16368 = G__16393;
chunk__16296_16369 = G__16394;
count__16297_16370 = G__16395;
i__16298_16371 = G__16396;
continue;
}
}
} else
{}
}
break;
}
{
var G__16397 = cljs.core.next.call(null,seq__16293_16359__$1);
var G__16398 = null;
var G__16399 = 0;
var G__16400 = 0;
seq__16293_16318 = G__16397;
chunk__16300_16319 = G__16398;
count__16301_16320 = G__16399;
i__16302_16321 = G__16400;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__16401){
var elem_sel = cljs.core.first(arglist__16401);
var type_fs = cljs.core.rest(arglist__16401);
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
var vec__16409_16416 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16417 = cljs.core.nth.call(null,vec__16409_16416,0,null);var selector_16418 = cljs.core.nth.call(null,vec__16409_16416,1,null);var seq__16410_16419 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16411_16420 = null;var count__16412_16421 = 0;var i__16413_16422 = 0;while(true){
if((i__16413_16422 < count__16412_16421))
{var vec__16414_16423 = cljs.core._nth.call(null,chunk__16411_16420,i__16413_16422);var type_16424 = cljs.core.nth.call(null,vec__16414_16423,0,null);var f_16425 = cljs.core.nth.call(null,vec__16414_16423,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16424,((function (seq__16410_16419,chunk__16411_16420,count__16412_16421,i__16413_16422,vec__16414_16423,type_16424,f_16425){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16424,this_fn);
return f_16425.call(null,e);
});})(seq__16410_16419,chunk__16411_16420,count__16412_16421,i__16413_16422,vec__16414_16423,type_16424,f_16425))
);
{
var G__16426 = seq__16410_16419;
var G__16427 = chunk__16411_16420;
var G__16428 = count__16412_16421;
var G__16429 = (i__16413_16422 + 1);
seq__16410_16419 = G__16426;
chunk__16411_16420 = G__16427;
count__16412_16421 = G__16428;
i__16413_16422 = G__16429;
continue;
}
} else
{var temp__4092__auto___16430 = cljs.core.seq.call(null,seq__16410_16419);if(temp__4092__auto___16430)
{var seq__16410_16431__$1 = temp__4092__auto___16430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16410_16431__$1))
{var c__5498__auto___16432 = cljs.core.chunk_first.call(null,seq__16410_16431__$1);{
var G__16433 = cljs.core.chunk_rest.call(null,seq__16410_16431__$1);
var G__16434 = c__5498__auto___16432;
var G__16435 = cljs.core.count.call(null,c__5498__auto___16432);
var G__16436 = 0;
seq__16410_16419 = G__16433;
chunk__16411_16420 = G__16434;
count__16412_16421 = G__16435;
i__16413_16422 = G__16436;
continue;
}
} else
{var vec__16415_16437 = cljs.core.first.call(null,seq__16410_16431__$1);var type_16438 = cljs.core.nth.call(null,vec__16415_16437,0,null);var f_16439 = cljs.core.nth.call(null,vec__16415_16437,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16438,((function (seq__16410_16419,chunk__16411_16420,count__16412_16421,i__16413_16422,vec__16415_16437,type_16438,f_16439,seq__16410_16431__$1,temp__4092__auto___16430){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16438,this_fn);
return f_16439.call(null,e);
});})(seq__16410_16419,chunk__16411_16420,count__16412_16421,i__16413_16422,vec__16415_16437,type_16438,f_16439,seq__16410_16431__$1,temp__4092__auto___16430))
);
{
var G__16440 = cljs.core.next.call(null,seq__16410_16431__$1);
var G__16441 = null;
var G__16442 = 0;
var G__16443 = 0;
seq__16410_16419 = G__16440;
chunk__16411_16420 = G__16441;
count__16412_16421 = G__16442;
i__16413_16422 = G__16443;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__16444){
var elem_sel = cljs.core.first(arglist__16444);
var type_fs = cljs.core.rest(arglist__16444);
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
var fire_BANG___delegate = function (node,event_type,p__16445){var vec__16447 = p__16445;var update_event_BANG_ = cljs.core.nth.call(null,vec__16447,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__4774__auto__ = update_event_BANG_;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
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
var p__16445 = null;if (arguments.length > 2) {
  p__16445 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__16445);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__16448){
var node = cljs.core.first(arglist__16448);
arglist__16448 = cljs.core.next(arglist__16448);
var event_type = cljs.core.first(arglist__16448);
var p__16445 = cljs.core.rest(arglist__16448);
return fire_BANG___delegate(node,event_type,p__16445);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
