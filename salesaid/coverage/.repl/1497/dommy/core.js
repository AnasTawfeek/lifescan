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
var append_BANG___2 = (function (parent,child){var G__10170 = dommy.template.__GT_node_like.call(null,parent);G__10170.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__10170;
});
var append_BANG___3 = (function() { 
var G__10175__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__10171_10176 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__10172_10177 = null;var count__10173_10178 = 0;var i__10174_10179 = 0;while(true){
if((i__10174_10179 < count__10173_10178))
{var c_10180 = cljs.core._nth.call(null,chunk__10172_10177,i__10174_10179);append_BANG_.call(null,parent__$1,c_10180);
{
var G__10181 = seq__10171_10176;
var G__10182 = chunk__10172_10177;
var G__10183 = count__10173_10178;
var G__10184 = (i__10174_10179 + 1);
seq__10171_10176 = G__10181;
chunk__10172_10177 = G__10182;
count__10173_10178 = G__10183;
i__10174_10179 = G__10184;
continue;
}
} else
{var temp__4092__auto___10185 = cljs.core.seq.call(null,seq__10171_10176);if(temp__4092__auto___10185)
{var seq__10171_10186__$1 = temp__4092__auto___10185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10171_10186__$1))
{var c__5489__auto___10187 = cljs.core.chunk_first.call(null,seq__10171_10186__$1);{
var G__10188 = cljs.core.chunk_rest.call(null,seq__10171_10186__$1);
var G__10189 = c__5489__auto___10187;
var G__10190 = cljs.core.count.call(null,c__5489__auto___10187);
var G__10191 = 0;
seq__10171_10176 = G__10188;
chunk__10172_10177 = G__10189;
count__10173_10178 = G__10190;
i__10174_10179 = G__10191;
continue;
}
} else
{var c_10192 = cljs.core.first.call(null,seq__10171_10186__$1);append_BANG_.call(null,parent__$1,c_10192);
{
var G__10193 = cljs.core.next.call(null,seq__10171_10186__$1);
var G__10194 = null;
var G__10195 = 0;
var G__10196 = 0;
seq__10171_10176 = G__10193;
chunk__10172_10177 = G__10194;
count__10173_10178 = G__10195;
i__10174_10179 = G__10196;
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
var G__10175 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10175__delegate.call(this,parent,child,more_children);};
G__10175.cljs$lang$maxFixedArity = 2;
G__10175.cljs$lang$applyTo = (function (arglist__10197){
var parent = cljs.core.first(arglist__10197);
arglist__10197 = cljs.core.next(arglist__10197);
var child = cljs.core.first(arglist__10197);
var more_children = cljs.core.rest(arglist__10197);
return G__10175__delegate(parent,child,more_children);
});
G__10175.cljs$core$IFn$_invoke$arity$variadic = G__10175__delegate;
return G__10175;
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
var prepend_BANG___2 = (function (parent,child){var G__10203 = dommy.template.__GT_node_like.call(null,parent);G__10203.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__10203;
});
var prepend_BANG___3 = (function() { 
var G__10208__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__10204_10209 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__10205_10210 = null;var count__10206_10211 = 0;var i__10207_10212 = 0;while(true){
if((i__10207_10212 < count__10206_10211))
{var c_10213 = cljs.core._nth.call(null,chunk__10205_10210,i__10207_10212);prepend_BANG_.call(null,parent__$1,c_10213);
{
var G__10214 = seq__10204_10209;
var G__10215 = chunk__10205_10210;
var G__10216 = count__10206_10211;
var G__10217 = (i__10207_10212 + 1);
seq__10204_10209 = G__10214;
chunk__10205_10210 = G__10215;
count__10206_10211 = G__10216;
i__10207_10212 = G__10217;
continue;
}
} else
{var temp__4092__auto___10218 = cljs.core.seq.call(null,seq__10204_10209);if(temp__4092__auto___10218)
{var seq__10204_10219__$1 = temp__4092__auto___10218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10204_10219__$1))
{var c__5489__auto___10220 = cljs.core.chunk_first.call(null,seq__10204_10219__$1);{
var G__10221 = cljs.core.chunk_rest.call(null,seq__10204_10219__$1);
var G__10222 = c__5489__auto___10220;
var G__10223 = cljs.core.count.call(null,c__5489__auto___10220);
var G__10224 = 0;
seq__10204_10209 = G__10221;
chunk__10205_10210 = G__10222;
count__10206_10211 = G__10223;
i__10207_10212 = G__10224;
continue;
}
} else
{var c_10225 = cljs.core.first.call(null,seq__10204_10219__$1);prepend_BANG_.call(null,parent__$1,c_10225);
{
var G__10226 = cljs.core.next.call(null,seq__10204_10219__$1);
var G__10227 = null;
var G__10228 = 0;
var G__10229 = 0;
seq__10204_10209 = G__10226;
chunk__10205_10210 = G__10227;
count__10206_10211 = G__10228;
i__10207_10212 = G__10229;
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
var G__10208 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10208__delegate.call(this,parent,child,more_children);};
G__10208.cljs$lang$maxFixedArity = 2;
G__10208.cljs$lang$applyTo = (function (arglist__10230){
var parent = cljs.core.first(arglist__10230);
arglist__10230 = cljs.core.next(arglist__10230);
var child = cljs.core.first(arglist__10230);
var more_children = cljs.core.rest(arglist__10230);
return G__10208__delegate(parent,child,more_children);
});
G__10208.cljs$core$IFn$_invoke$arity$variadic = G__10208__delegate;
return G__10208;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___10231 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___10231))
{var next_10232 = temp__4090__auto___10231;parent.insertBefore(actual_node,next_10232);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__10234 = dommy.template.__GT_node_like.call(null,parent);G__10234.innerHTML = "";
dommy.core.append_BANG_.call(null,G__10234,node_like);
return G__10234;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__10236 = elem__$1.parentNode;G__10236.removeChild(elem__$1);
return G__10236;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__10237_SHARP_){return p1__10237_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__10238_SHARP_){return !((p1__10238_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10239){var vec__10240 = p__10239;var special_mouse_event = cljs.core.nth.call(null,vec__10240,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__10240,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4765__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4765__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__10241){
var elem = cljs.core.first(arglist__10241);
arglist__10241 = cljs.core.next(arglist__10241);
var f = cljs.core.first(arglist__10241);
var args = cljs.core.rest(arglist__10241);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__10242_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__10242_SHARP_));
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
var vec__10266_10289 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_10290 = cljs.core.nth.call(null,vec__10266_10289,0,null);var selector_10291 = cljs.core.nth.call(null,vec__10266_10289,1,null);var seq__10267_10292 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__10274_10293 = null;var count__10275_10294 = 0;var i__10276_10295 = 0;while(true){
if((i__10276_10295 < count__10275_10294))
{var vec__10283_10296 = cljs.core._nth.call(null,chunk__10274_10293,i__10276_10295);var orig_type_10297 = cljs.core.nth.call(null,vec__10283_10296,0,null);var f_10298 = cljs.core.nth.call(null,vec__10283_10296,1,null);var seq__10277_10299 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10297,new cljs.core.PersistentArrayMap.fromArray([orig_type_10297,cljs.core.identity], true, false)));var chunk__10279_10300 = null;var count__10280_10301 = 0;var i__10281_10302 = 0;while(true){
if((i__10281_10302 < count__10280_10301))
{var vec__10284_10303 = cljs.core._nth.call(null,chunk__10279_10300,i__10281_10302);var actual_type_10304 = cljs.core.nth.call(null,vec__10284_10303,0,null);var factory_10305 = cljs.core.nth.call(null,vec__10284_10303,1,null);var canonical_f_10306 = (cljs.core.truth_(selector_10291)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10290,selector_10291):cljs.core.identity).call(null,factory_10305.call(null,f_10298));dommy.core.update_event_listeners_BANG_.call(null,elem_10290,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10291,actual_type_10304,f_10298], null),canonical_f_10306);
if(cljs.core.truth_(elem_10290.addEventListener))
{elem_10290.addEventListener(cljs.core.name.call(null,actual_type_10304),canonical_f_10306);
} else
{elem_10290.attachEvent(cljs.core.name.call(null,actual_type_10304),canonical_f_10306);
}
{
var G__10307 = seq__10277_10299;
var G__10308 = chunk__10279_10300;
var G__10309 = count__10280_10301;
var G__10310 = (i__10281_10302 + 1);
seq__10277_10299 = G__10307;
chunk__10279_10300 = G__10308;
count__10280_10301 = G__10309;
i__10281_10302 = G__10310;
continue;
}
} else
{var temp__4092__auto___10311 = cljs.core.seq.call(null,seq__10277_10299);if(temp__4092__auto___10311)
{var seq__10277_10312__$1 = temp__4092__auto___10311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10277_10312__$1))
{var c__5489__auto___10313 = cljs.core.chunk_first.call(null,seq__10277_10312__$1);{
var G__10314 = cljs.core.chunk_rest.call(null,seq__10277_10312__$1);
var G__10315 = c__5489__auto___10313;
var G__10316 = cljs.core.count.call(null,c__5489__auto___10313);
var G__10317 = 0;
seq__10277_10299 = G__10314;
chunk__10279_10300 = G__10315;
count__10280_10301 = G__10316;
i__10281_10302 = G__10317;
continue;
}
} else
{var vec__10285_10318 = cljs.core.first.call(null,seq__10277_10312__$1);var actual_type_10319 = cljs.core.nth.call(null,vec__10285_10318,0,null);var factory_10320 = cljs.core.nth.call(null,vec__10285_10318,1,null);var canonical_f_10321 = (cljs.core.truth_(selector_10291)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10290,selector_10291):cljs.core.identity).call(null,factory_10320.call(null,f_10298));dommy.core.update_event_listeners_BANG_.call(null,elem_10290,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10291,actual_type_10319,f_10298], null),canonical_f_10321);
if(cljs.core.truth_(elem_10290.addEventListener))
{elem_10290.addEventListener(cljs.core.name.call(null,actual_type_10319),canonical_f_10321);
} else
{elem_10290.attachEvent(cljs.core.name.call(null,actual_type_10319),canonical_f_10321);
}
{
var G__10322 = cljs.core.next.call(null,seq__10277_10312__$1);
var G__10323 = null;
var G__10324 = 0;
var G__10325 = 0;
seq__10277_10299 = G__10322;
chunk__10279_10300 = G__10323;
count__10280_10301 = G__10324;
i__10281_10302 = G__10325;
continue;
}
}
} else
{}
}
break;
}
{
var G__10326 = seq__10267_10292;
var G__10327 = chunk__10274_10293;
var G__10328 = count__10275_10294;
var G__10329 = (i__10276_10295 + 1);
seq__10267_10292 = G__10326;
chunk__10274_10293 = G__10327;
count__10275_10294 = G__10328;
i__10276_10295 = G__10329;
continue;
}
} else
{var temp__4092__auto___10330 = cljs.core.seq.call(null,seq__10267_10292);if(temp__4092__auto___10330)
{var seq__10267_10331__$1 = temp__4092__auto___10330;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10267_10331__$1))
{var c__5489__auto___10332 = cljs.core.chunk_first.call(null,seq__10267_10331__$1);{
var G__10333 = cljs.core.chunk_rest.call(null,seq__10267_10331__$1);
var G__10334 = c__5489__auto___10332;
var G__10335 = cljs.core.count.call(null,c__5489__auto___10332);
var G__10336 = 0;
seq__10267_10292 = G__10333;
chunk__10274_10293 = G__10334;
count__10275_10294 = G__10335;
i__10276_10295 = G__10336;
continue;
}
} else
{var vec__10286_10337 = cljs.core.first.call(null,seq__10267_10331__$1);var orig_type_10338 = cljs.core.nth.call(null,vec__10286_10337,0,null);var f_10339 = cljs.core.nth.call(null,vec__10286_10337,1,null);var seq__10268_10340 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10338,new cljs.core.PersistentArrayMap.fromArray([orig_type_10338,cljs.core.identity], true, false)));var chunk__10270_10341 = null;var count__10271_10342 = 0;var i__10272_10343 = 0;while(true){
if((i__10272_10343 < count__10271_10342))
{var vec__10287_10344 = cljs.core._nth.call(null,chunk__10270_10341,i__10272_10343);var actual_type_10345 = cljs.core.nth.call(null,vec__10287_10344,0,null);var factory_10346 = cljs.core.nth.call(null,vec__10287_10344,1,null);var canonical_f_10347 = (cljs.core.truth_(selector_10291)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10290,selector_10291):cljs.core.identity).call(null,factory_10346.call(null,f_10339));dommy.core.update_event_listeners_BANG_.call(null,elem_10290,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10291,actual_type_10345,f_10339], null),canonical_f_10347);
if(cljs.core.truth_(elem_10290.addEventListener))
{elem_10290.addEventListener(cljs.core.name.call(null,actual_type_10345),canonical_f_10347);
} else
{elem_10290.attachEvent(cljs.core.name.call(null,actual_type_10345),canonical_f_10347);
}
{
var G__10348 = seq__10268_10340;
var G__10349 = chunk__10270_10341;
var G__10350 = count__10271_10342;
var G__10351 = (i__10272_10343 + 1);
seq__10268_10340 = G__10348;
chunk__10270_10341 = G__10349;
count__10271_10342 = G__10350;
i__10272_10343 = G__10351;
continue;
}
} else
{var temp__4092__auto___10352__$1 = cljs.core.seq.call(null,seq__10268_10340);if(temp__4092__auto___10352__$1)
{var seq__10268_10353__$1 = temp__4092__auto___10352__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10268_10353__$1))
{var c__5489__auto___10354 = cljs.core.chunk_first.call(null,seq__10268_10353__$1);{
var G__10355 = cljs.core.chunk_rest.call(null,seq__10268_10353__$1);
var G__10356 = c__5489__auto___10354;
var G__10357 = cljs.core.count.call(null,c__5489__auto___10354);
var G__10358 = 0;
seq__10268_10340 = G__10355;
chunk__10270_10341 = G__10356;
count__10271_10342 = G__10357;
i__10272_10343 = G__10358;
continue;
}
} else
{var vec__10288_10359 = cljs.core.first.call(null,seq__10268_10353__$1);var actual_type_10360 = cljs.core.nth.call(null,vec__10288_10359,0,null);var factory_10361 = cljs.core.nth.call(null,vec__10288_10359,1,null);var canonical_f_10362 = (cljs.core.truth_(selector_10291)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10290,selector_10291):cljs.core.identity).call(null,factory_10361.call(null,f_10339));dommy.core.update_event_listeners_BANG_.call(null,elem_10290,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10291,actual_type_10360,f_10339], null),canonical_f_10362);
if(cljs.core.truth_(elem_10290.addEventListener))
{elem_10290.addEventListener(cljs.core.name.call(null,actual_type_10360),canonical_f_10362);
} else
{elem_10290.attachEvent(cljs.core.name.call(null,actual_type_10360),canonical_f_10362);
}
{
var G__10363 = cljs.core.next.call(null,seq__10268_10353__$1);
var G__10364 = null;
var G__10365 = 0;
var G__10366 = 0;
seq__10268_10340 = G__10363;
chunk__10270_10341 = G__10364;
count__10271_10342 = G__10365;
i__10272_10343 = G__10366;
continue;
}
}
} else
{}
}
break;
}
{
var G__10367 = cljs.core.next.call(null,seq__10267_10331__$1);
var G__10368 = null;
var G__10369 = 0;
var G__10370 = 0;
seq__10267_10292 = G__10367;
chunk__10274_10293 = G__10368;
count__10275_10294 = G__10369;
i__10276_10295 = G__10370;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__10371){
var elem_sel = cljs.core.first(arglist__10371);
var type_fs = cljs.core.rest(arglist__10371);
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
var vec__10395_10418 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_10419 = cljs.core.nth.call(null,vec__10395_10418,0,null);var selector_10420 = cljs.core.nth.call(null,vec__10395_10418,1,null);var seq__10396_10421 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__10403_10422 = null;var count__10404_10423 = 0;var i__10405_10424 = 0;while(true){
if((i__10405_10424 < count__10404_10423))
{var vec__10412_10425 = cljs.core._nth.call(null,chunk__10403_10422,i__10405_10424);var orig_type_10426 = cljs.core.nth.call(null,vec__10412_10425,0,null);var f_10427 = cljs.core.nth.call(null,vec__10412_10425,1,null);var seq__10406_10428 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10426,new cljs.core.PersistentArrayMap.fromArray([orig_type_10426,cljs.core.identity], true, false)));var chunk__10408_10429 = null;var count__10409_10430 = 0;var i__10410_10431 = 0;while(true){
if((i__10410_10431 < count__10409_10430))
{var vec__10413_10432 = cljs.core._nth.call(null,chunk__10408_10429,i__10410_10431);var actual_type_10433 = cljs.core.nth.call(null,vec__10413_10432,0,null);var __10434 = cljs.core.nth.call(null,vec__10413_10432,1,null);var keys_10435 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10420,actual_type_10433,f_10427], null);var canonical_f_10436 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10419),keys_10435);dommy.core.update_event_listeners_BANG_.call(null,elem_10419,dommy.utils.dissoc_in,keys_10435);
if(cljs.core.truth_(elem_10419.removeEventListener))
{elem_10419.removeEventListener(cljs.core.name.call(null,actual_type_10433),canonical_f_10436);
} else
{elem_10419.detachEvent(cljs.core.name.call(null,actual_type_10433),canonical_f_10436);
}
{
var G__10437 = seq__10406_10428;
var G__10438 = chunk__10408_10429;
var G__10439 = count__10409_10430;
var G__10440 = (i__10410_10431 + 1);
seq__10406_10428 = G__10437;
chunk__10408_10429 = G__10438;
count__10409_10430 = G__10439;
i__10410_10431 = G__10440;
continue;
}
} else
{var temp__4092__auto___10441 = cljs.core.seq.call(null,seq__10406_10428);if(temp__4092__auto___10441)
{var seq__10406_10442__$1 = temp__4092__auto___10441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10406_10442__$1))
{var c__5489__auto___10443 = cljs.core.chunk_first.call(null,seq__10406_10442__$1);{
var G__10444 = cljs.core.chunk_rest.call(null,seq__10406_10442__$1);
var G__10445 = c__5489__auto___10443;
var G__10446 = cljs.core.count.call(null,c__5489__auto___10443);
var G__10447 = 0;
seq__10406_10428 = G__10444;
chunk__10408_10429 = G__10445;
count__10409_10430 = G__10446;
i__10410_10431 = G__10447;
continue;
}
} else
{var vec__10414_10448 = cljs.core.first.call(null,seq__10406_10442__$1);var actual_type_10449 = cljs.core.nth.call(null,vec__10414_10448,0,null);var __10450 = cljs.core.nth.call(null,vec__10414_10448,1,null);var keys_10451 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10420,actual_type_10449,f_10427], null);var canonical_f_10452 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10419),keys_10451);dommy.core.update_event_listeners_BANG_.call(null,elem_10419,dommy.utils.dissoc_in,keys_10451);
if(cljs.core.truth_(elem_10419.removeEventListener))
{elem_10419.removeEventListener(cljs.core.name.call(null,actual_type_10449),canonical_f_10452);
} else
{elem_10419.detachEvent(cljs.core.name.call(null,actual_type_10449),canonical_f_10452);
}
{
var G__10453 = cljs.core.next.call(null,seq__10406_10442__$1);
var G__10454 = null;
var G__10455 = 0;
var G__10456 = 0;
seq__10406_10428 = G__10453;
chunk__10408_10429 = G__10454;
count__10409_10430 = G__10455;
i__10410_10431 = G__10456;
continue;
}
}
} else
{}
}
break;
}
{
var G__10457 = seq__10396_10421;
var G__10458 = chunk__10403_10422;
var G__10459 = count__10404_10423;
var G__10460 = (i__10405_10424 + 1);
seq__10396_10421 = G__10457;
chunk__10403_10422 = G__10458;
count__10404_10423 = G__10459;
i__10405_10424 = G__10460;
continue;
}
} else
{var temp__4092__auto___10461 = cljs.core.seq.call(null,seq__10396_10421);if(temp__4092__auto___10461)
{var seq__10396_10462__$1 = temp__4092__auto___10461;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10396_10462__$1))
{var c__5489__auto___10463 = cljs.core.chunk_first.call(null,seq__10396_10462__$1);{
var G__10464 = cljs.core.chunk_rest.call(null,seq__10396_10462__$1);
var G__10465 = c__5489__auto___10463;
var G__10466 = cljs.core.count.call(null,c__5489__auto___10463);
var G__10467 = 0;
seq__10396_10421 = G__10464;
chunk__10403_10422 = G__10465;
count__10404_10423 = G__10466;
i__10405_10424 = G__10467;
continue;
}
} else
{var vec__10415_10468 = cljs.core.first.call(null,seq__10396_10462__$1);var orig_type_10469 = cljs.core.nth.call(null,vec__10415_10468,0,null);var f_10470 = cljs.core.nth.call(null,vec__10415_10468,1,null);var seq__10397_10471 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10469,new cljs.core.PersistentArrayMap.fromArray([orig_type_10469,cljs.core.identity], true, false)));var chunk__10399_10472 = null;var count__10400_10473 = 0;var i__10401_10474 = 0;while(true){
if((i__10401_10474 < count__10400_10473))
{var vec__10416_10475 = cljs.core._nth.call(null,chunk__10399_10472,i__10401_10474);var actual_type_10476 = cljs.core.nth.call(null,vec__10416_10475,0,null);var __10477 = cljs.core.nth.call(null,vec__10416_10475,1,null);var keys_10478 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10420,actual_type_10476,f_10470], null);var canonical_f_10479 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10419),keys_10478);dommy.core.update_event_listeners_BANG_.call(null,elem_10419,dommy.utils.dissoc_in,keys_10478);
if(cljs.core.truth_(elem_10419.removeEventListener))
{elem_10419.removeEventListener(cljs.core.name.call(null,actual_type_10476),canonical_f_10479);
} else
{elem_10419.detachEvent(cljs.core.name.call(null,actual_type_10476),canonical_f_10479);
}
{
var G__10480 = seq__10397_10471;
var G__10481 = chunk__10399_10472;
var G__10482 = count__10400_10473;
var G__10483 = (i__10401_10474 + 1);
seq__10397_10471 = G__10480;
chunk__10399_10472 = G__10481;
count__10400_10473 = G__10482;
i__10401_10474 = G__10483;
continue;
}
} else
{var temp__4092__auto___10484__$1 = cljs.core.seq.call(null,seq__10397_10471);if(temp__4092__auto___10484__$1)
{var seq__10397_10485__$1 = temp__4092__auto___10484__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10397_10485__$1))
{var c__5489__auto___10486 = cljs.core.chunk_first.call(null,seq__10397_10485__$1);{
var G__10487 = cljs.core.chunk_rest.call(null,seq__10397_10485__$1);
var G__10488 = c__5489__auto___10486;
var G__10489 = cljs.core.count.call(null,c__5489__auto___10486);
var G__10490 = 0;
seq__10397_10471 = G__10487;
chunk__10399_10472 = G__10488;
count__10400_10473 = G__10489;
i__10401_10474 = G__10490;
continue;
}
} else
{var vec__10417_10491 = cljs.core.first.call(null,seq__10397_10485__$1);var actual_type_10492 = cljs.core.nth.call(null,vec__10417_10491,0,null);var __10493 = cljs.core.nth.call(null,vec__10417_10491,1,null);var keys_10494 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10420,actual_type_10492,f_10470], null);var canonical_f_10495 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10419),keys_10494);dommy.core.update_event_listeners_BANG_.call(null,elem_10419,dommy.utils.dissoc_in,keys_10494);
if(cljs.core.truth_(elem_10419.removeEventListener))
{elem_10419.removeEventListener(cljs.core.name.call(null,actual_type_10492),canonical_f_10495);
} else
{elem_10419.detachEvent(cljs.core.name.call(null,actual_type_10492),canonical_f_10495);
}
{
var G__10496 = cljs.core.next.call(null,seq__10397_10485__$1);
var G__10497 = null;
var G__10498 = 0;
var G__10499 = 0;
seq__10397_10471 = G__10496;
chunk__10399_10472 = G__10497;
count__10400_10473 = G__10498;
i__10401_10474 = G__10499;
continue;
}
}
} else
{}
}
break;
}
{
var G__10500 = cljs.core.next.call(null,seq__10396_10462__$1);
var G__10501 = null;
var G__10502 = 0;
var G__10503 = 0;
seq__10396_10421 = G__10500;
chunk__10403_10422 = G__10501;
count__10404_10423 = G__10502;
i__10405_10424 = G__10503;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__10504){
var elem_sel = cljs.core.first(arglist__10504);
var type_fs = cljs.core.rest(arglist__10504);
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
var vec__10512_10519 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_10520 = cljs.core.nth.call(null,vec__10512_10519,0,null);var selector_10521 = cljs.core.nth.call(null,vec__10512_10519,1,null);var seq__10513_10522 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__10514_10523 = null;var count__10515_10524 = 0;var i__10516_10525 = 0;while(true){
if((i__10516_10525 < count__10515_10524))
{var vec__10517_10526 = cljs.core._nth.call(null,chunk__10514_10523,i__10516_10525);var type_10527 = cljs.core.nth.call(null,vec__10517_10526,0,null);var f_10528 = cljs.core.nth.call(null,vec__10517_10526,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_10527,((function (seq__10513_10522,chunk__10514_10523,count__10515_10524,i__10516_10525,vec__10517_10526,type_10527,f_10528){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_10527,this_fn);
return f_10528.call(null,e);
});})(seq__10513_10522,chunk__10514_10523,count__10515_10524,i__10516_10525,vec__10517_10526,type_10527,f_10528))
);
{
var G__10529 = seq__10513_10522;
var G__10530 = chunk__10514_10523;
var G__10531 = count__10515_10524;
var G__10532 = (i__10516_10525 + 1);
seq__10513_10522 = G__10529;
chunk__10514_10523 = G__10530;
count__10515_10524 = G__10531;
i__10516_10525 = G__10532;
continue;
}
} else
{var temp__4092__auto___10533 = cljs.core.seq.call(null,seq__10513_10522);if(temp__4092__auto___10533)
{var seq__10513_10534__$1 = temp__4092__auto___10533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10513_10534__$1))
{var c__5489__auto___10535 = cljs.core.chunk_first.call(null,seq__10513_10534__$1);{
var G__10536 = cljs.core.chunk_rest.call(null,seq__10513_10534__$1);
var G__10537 = c__5489__auto___10535;
var G__10538 = cljs.core.count.call(null,c__5489__auto___10535);
var G__10539 = 0;
seq__10513_10522 = G__10536;
chunk__10514_10523 = G__10537;
count__10515_10524 = G__10538;
i__10516_10525 = G__10539;
continue;
}
} else
{var vec__10518_10540 = cljs.core.first.call(null,seq__10513_10534__$1);var type_10541 = cljs.core.nth.call(null,vec__10518_10540,0,null);var f_10542 = cljs.core.nth.call(null,vec__10518_10540,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_10541,((function (seq__10513_10522,chunk__10514_10523,count__10515_10524,i__10516_10525,vec__10518_10540,type_10541,f_10542,seq__10513_10534__$1,temp__4092__auto___10533){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_10541,this_fn);
return f_10542.call(null,e);
});})(seq__10513_10522,chunk__10514_10523,count__10515_10524,i__10516_10525,vec__10518_10540,type_10541,f_10542,seq__10513_10534__$1,temp__4092__auto___10533))
);
{
var G__10543 = cljs.core.next.call(null,seq__10513_10534__$1);
var G__10544 = null;
var G__10545 = 0;
var G__10546 = 0;
seq__10513_10522 = G__10543;
chunk__10514_10523 = G__10544;
count__10515_10524 = G__10545;
i__10516_10525 = G__10546;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__10547){
var elem_sel = cljs.core.first(arglist__10547);
var type_fs = cljs.core.rest(arglist__10547);
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
var fire_BANG___delegate = function (node,event_type,p__10548){var vec__10550 = p__10548;var update_event_BANG_ = cljs.core.nth.call(null,vec__10550,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__10548 = null;if (arguments.length > 2) {
  p__10548 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__10548);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__10551){
var node = cljs.core.first(arglist__10551);
arglist__10551 = cljs.core.next(arglist__10551);
var event_type = cljs.core.first(arglist__10551);
var p__10548 = cljs.core.rest(arglist__10551);
return fire_BANG___delegate(node,event_type,p__10548);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
