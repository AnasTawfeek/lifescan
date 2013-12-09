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
var append_BANG___2 = (function (parent,child){var G__11229 = dommy.template.__GT_node_like.call(null,parent);G__11229.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__11229;
});
var append_BANG___3 = (function() { 
var G__11234__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11230_11235 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11231_11236 = null;var count__11232_11237 = 0;var i__11233_11238 = 0;while(true){
if((i__11233_11238 < count__11232_11237))
{var c_11239 = cljs.core._nth.call(null,chunk__11231_11236,i__11233_11238);append_BANG_.call(null,parent__$1,c_11239);
{
var G__11240 = seq__11230_11235;
var G__11241 = chunk__11231_11236;
var G__11242 = count__11232_11237;
var G__11243 = (i__11233_11238 + 1);
seq__11230_11235 = G__11240;
chunk__11231_11236 = G__11241;
count__11232_11237 = G__11242;
i__11233_11238 = G__11243;
continue;
}
} else
{var temp__4092__auto___11244 = cljs.core.seq.call(null,seq__11230_11235);if(temp__4092__auto___11244)
{var seq__11230_11245__$1 = temp__4092__auto___11244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11230_11245__$1))
{var c__4015__auto___11246 = cljs.core.chunk_first.call(null,seq__11230_11245__$1);{
var G__11247 = cljs.core.chunk_rest.call(null,seq__11230_11245__$1);
var G__11248 = c__4015__auto___11246;
var G__11249 = cljs.core.count.call(null,c__4015__auto___11246);
var G__11250 = 0;
seq__11230_11235 = G__11247;
chunk__11231_11236 = G__11248;
count__11232_11237 = G__11249;
i__11233_11238 = G__11250;
continue;
}
} else
{var c_11251 = cljs.core.first.call(null,seq__11230_11245__$1);append_BANG_.call(null,parent__$1,c_11251);
{
var G__11252 = cljs.core.next.call(null,seq__11230_11245__$1);
var G__11253 = null;
var G__11254 = 0;
var G__11255 = 0;
seq__11230_11235 = G__11252;
chunk__11231_11236 = G__11253;
count__11232_11237 = G__11254;
i__11233_11238 = G__11255;
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
var G__11234 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11234__delegate.call(this,parent,child,more_children);};
G__11234.cljs$lang$maxFixedArity = 2;
G__11234.cljs$lang$applyTo = (function (arglist__11256){
var parent = cljs.core.first(arglist__11256);
arglist__11256 = cljs.core.next(arglist__11256);
var child = cljs.core.first(arglist__11256);
var more_children = cljs.core.rest(arglist__11256);
return G__11234__delegate(parent,child,more_children);
});
G__11234.cljs$core$IFn$_invoke$arity$variadic = G__11234__delegate;
return G__11234;
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
var prepend_BANG___2 = (function (parent,child){var G__11262 = dommy.template.__GT_node_like.call(null,parent);G__11262.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__11262;
});
var prepend_BANG___3 = (function() { 
var G__11267__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11263_11268 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11264_11269 = null;var count__11265_11270 = 0;var i__11266_11271 = 0;while(true){
if((i__11266_11271 < count__11265_11270))
{var c_11272 = cljs.core._nth.call(null,chunk__11264_11269,i__11266_11271);prepend_BANG_.call(null,parent__$1,c_11272);
{
var G__11273 = seq__11263_11268;
var G__11274 = chunk__11264_11269;
var G__11275 = count__11265_11270;
var G__11276 = (i__11266_11271 + 1);
seq__11263_11268 = G__11273;
chunk__11264_11269 = G__11274;
count__11265_11270 = G__11275;
i__11266_11271 = G__11276;
continue;
}
} else
{var temp__4092__auto___11277 = cljs.core.seq.call(null,seq__11263_11268);if(temp__4092__auto___11277)
{var seq__11263_11278__$1 = temp__4092__auto___11277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11263_11278__$1))
{var c__4015__auto___11279 = cljs.core.chunk_first.call(null,seq__11263_11278__$1);{
var G__11280 = cljs.core.chunk_rest.call(null,seq__11263_11278__$1);
var G__11281 = c__4015__auto___11279;
var G__11282 = cljs.core.count.call(null,c__4015__auto___11279);
var G__11283 = 0;
seq__11263_11268 = G__11280;
chunk__11264_11269 = G__11281;
count__11265_11270 = G__11282;
i__11266_11271 = G__11283;
continue;
}
} else
{var c_11284 = cljs.core.first.call(null,seq__11263_11278__$1);prepend_BANG_.call(null,parent__$1,c_11284);
{
var G__11285 = cljs.core.next.call(null,seq__11263_11278__$1);
var G__11286 = null;
var G__11287 = 0;
var G__11288 = 0;
seq__11263_11268 = G__11285;
chunk__11264_11269 = G__11286;
count__11265_11270 = G__11287;
i__11266_11271 = G__11288;
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
var G__11267 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11267__delegate.call(this,parent,child,more_children);};
G__11267.cljs$lang$maxFixedArity = 2;
G__11267.cljs$lang$applyTo = (function (arglist__11289){
var parent = cljs.core.first(arglist__11289);
arglist__11289 = cljs.core.next(arglist__11289);
var child = cljs.core.first(arglist__11289);
var more_children = cljs.core.rest(arglist__11289);
return G__11267__delegate(parent,child,more_children);
});
G__11267.cljs$core$IFn$_invoke$arity$variadic = G__11267__delegate;
return G__11267;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___11290 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___11290))
{var next_11291 = temp__4090__auto___11290;parent.insertBefore(actual_node,next_11291);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__11293 = dommy.template.__GT_node_like.call(null,parent);G__11293.innerHTML = "";
dommy.core.append_BANG_.call(null,G__11293,node_like);
return G__11293;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__11295 = elem__$1.parentNode;G__11295.removeChild(elem__$1);
return G__11295;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__11296_SHARP_){return p1__11296_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__11297_SHARP_){return !((p1__11297_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11298){var vec__11299 = p__11298;var special_mouse_event = cljs.core.nth.call(null,vec__11299,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__11299,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3291__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3291__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__11300){
var elem = cljs.core.first(arglist__11300);
arglist__11300 = cljs.core.next(arglist__11300);
var f = cljs.core.first(arglist__11300);
var args = cljs.core.rest(arglist__11300);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__11301_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__11301_SHARP_));
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
var vec__11325_11348 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11349 = cljs.core.nth.call(null,vec__11325_11348,0,null);var selector_11350 = cljs.core.nth.call(null,vec__11325_11348,1,null);var seq__11326_11351 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11333_11352 = null;var count__11334_11353 = 0;var i__11335_11354 = 0;while(true){
if((i__11335_11354 < count__11334_11353))
{var vec__11342_11355 = cljs.core._nth.call(null,chunk__11333_11352,i__11335_11354);var orig_type_11356 = cljs.core.nth.call(null,vec__11342_11355,0,null);var f_11357 = cljs.core.nth.call(null,vec__11342_11355,1,null);var seq__11336_11358 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11356,new cljs.core.PersistentArrayMap.fromArray([orig_type_11356,cljs.core.identity], true, false)));var chunk__11338_11359 = null;var count__11339_11360 = 0;var i__11340_11361 = 0;while(true){
if((i__11340_11361 < count__11339_11360))
{var vec__11343_11362 = cljs.core._nth.call(null,chunk__11338_11359,i__11340_11361);var actual_type_11363 = cljs.core.nth.call(null,vec__11343_11362,0,null);var factory_11364 = cljs.core.nth.call(null,vec__11343_11362,1,null);var canonical_f_11365 = (cljs.core.truth_(selector_11350)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11349,selector_11350):cljs.core.identity).call(null,factory_11364.call(null,f_11357));dommy.core.update_event_listeners_BANG_.call(null,elem_11349,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11350,actual_type_11363,f_11357], null),canonical_f_11365);
if(cljs.core.truth_(elem_11349.addEventListener))
{elem_11349.addEventListener(cljs.core.name.call(null,actual_type_11363),canonical_f_11365);
} else
{elem_11349.attachEvent(cljs.core.name.call(null,actual_type_11363),canonical_f_11365);
}
{
var G__11366 = seq__11336_11358;
var G__11367 = chunk__11338_11359;
var G__11368 = count__11339_11360;
var G__11369 = (i__11340_11361 + 1);
seq__11336_11358 = G__11366;
chunk__11338_11359 = G__11367;
count__11339_11360 = G__11368;
i__11340_11361 = G__11369;
continue;
}
} else
{var temp__4092__auto___11370 = cljs.core.seq.call(null,seq__11336_11358);if(temp__4092__auto___11370)
{var seq__11336_11371__$1 = temp__4092__auto___11370;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11336_11371__$1))
{var c__4015__auto___11372 = cljs.core.chunk_first.call(null,seq__11336_11371__$1);{
var G__11373 = cljs.core.chunk_rest.call(null,seq__11336_11371__$1);
var G__11374 = c__4015__auto___11372;
var G__11375 = cljs.core.count.call(null,c__4015__auto___11372);
var G__11376 = 0;
seq__11336_11358 = G__11373;
chunk__11338_11359 = G__11374;
count__11339_11360 = G__11375;
i__11340_11361 = G__11376;
continue;
}
} else
{var vec__11344_11377 = cljs.core.first.call(null,seq__11336_11371__$1);var actual_type_11378 = cljs.core.nth.call(null,vec__11344_11377,0,null);var factory_11379 = cljs.core.nth.call(null,vec__11344_11377,1,null);var canonical_f_11380 = (cljs.core.truth_(selector_11350)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11349,selector_11350):cljs.core.identity).call(null,factory_11379.call(null,f_11357));dommy.core.update_event_listeners_BANG_.call(null,elem_11349,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11350,actual_type_11378,f_11357], null),canonical_f_11380);
if(cljs.core.truth_(elem_11349.addEventListener))
{elem_11349.addEventListener(cljs.core.name.call(null,actual_type_11378),canonical_f_11380);
} else
{elem_11349.attachEvent(cljs.core.name.call(null,actual_type_11378),canonical_f_11380);
}
{
var G__11381 = cljs.core.next.call(null,seq__11336_11371__$1);
var G__11382 = null;
var G__11383 = 0;
var G__11384 = 0;
seq__11336_11358 = G__11381;
chunk__11338_11359 = G__11382;
count__11339_11360 = G__11383;
i__11340_11361 = G__11384;
continue;
}
}
} else
{}
}
break;
}
{
var G__11385 = seq__11326_11351;
var G__11386 = chunk__11333_11352;
var G__11387 = count__11334_11353;
var G__11388 = (i__11335_11354 + 1);
seq__11326_11351 = G__11385;
chunk__11333_11352 = G__11386;
count__11334_11353 = G__11387;
i__11335_11354 = G__11388;
continue;
}
} else
{var temp__4092__auto___11389 = cljs.core.seq.call(null,seq__11326_11351);if(temp__4092__auto___11389)
{var seq__11326_11390__$1 = temp__4092__auto___11389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11326_11390__$1))
{var c__4015__auto___11391 = cljs.core.chunk_first.call(null,seq__11326_11390__$1);{
var G__11392 = cljs.core.chunk_rest.call(null,seq__11326_11390__$1);
var G__11393 = c__4015__auto___11391;
var G__11394 = cljs.core.count.call(null,c__4015__auto___11391);
var G__11395 = 0;
seq__11326_11351 = G__11392;
chunk__11333_11352 = G__11393;
count__11334_11353 = G__11394;
i__11335_11354 = G__11395;
continue;
}
} else
{var vec__11345_11396 = cljs.core.first.call(null,seq__11326_11390__$1);var orig_type_11397 = cljs.core.nth.call(null,vec__11345_11396,0,null);var f_11398 = cljs.core.nth.call(null,vec__11345_11396,1,null);var seq__11327_11399 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11397,new cljs.core.PersistentArrayMap.fromArray([orig_type_11397,cljs.core.identity], true, false)));var chunk__11329_11400 = null;var count__11330_11401 = 0;var i__11331_11402 = 0;while(true){
if((i__11331_11402 < count__11330_11401))
{var vec__11346_11403 = cljs.core._nth.call(null,chunk__11329_11400,i__11331_11402);var actual_type_11404 = cljs.core.nth.call(null,vec__11346_11403,0,null);var factory_11405 = cljs.core.nth.call(null,vec__11346_11403,1,null);var canonical_f_11406 = (cljs.core.truth_(selector_11350)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11349,selector_11350):cljs.core.identity).call(null,factory_11405.call(null,f_11398));dommy.core.update_event_listeners_BANG_.call(null,elem_11349,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11350,actual_type_11404,f_11398], null),canonical_f_11406);
if(cljs.core.truth_(elem_11349.addEventListener))
{elem_11349.addEventListener(cljs.core.name.call(null,actual_type_11404),canonical_f_11406);
} else
{elem_11349.attachEvent(cljs.core.name.call(null,actual_type_11404),canonical_f_11406);
}
{
var G__11407 = seq__11327_11399;
var G__11408 = chunk__11329_11400;
var G__11409 = count__11330_11401;
var G__11410 = (i__11331_11402 + 1);
seq__11327_11399 = G__11407;
chunk__11329_11400 = G__11408;
count__11330_11401 = G__11409;
i__11331_11402 = G__11410;
continue;
}
} else
{var temp__4092__auto___11411__$1 = cljs.core.seq.call(null,seq__11327_11399);if(temp__4092__auto___11411__$1)
{var seq__11327_11412__$1 = temp__4092__auto___11411__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11327_11412__$1))
{var c__4015__auto___11413 = cljs.core.chunk_first.call(null,seq__11327_11412__$1);{
var G__11414 = cljs.core.chunk_rest.call(null,seq__11327_11412__$1);
var G__11415 = c__4015__auto___11413;
var G__11416 = cljs.core.count.call(null,c__4015__auto___11413);
var G__11417 = 0;
seq__11327_11399 = G__11414;
chunk__11329_11400 = G__11415;
count__11330_11401 = G__11416;
i__11331_11402 = G__11417;
continue;
}
} else
{var vec__11347_11418 = cljs.core.first.call(null,seq__11327_11412__$1);var actual_type_11419 = cljs.core.nth.call(null,vec__11347_11418,0,null);var factory_11420 = cljs.core.nth.call(null,vec__11347_11418,1,null);var canonical_f_11421 = (cljs.core.truth_(selector_11350)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11349,selector_11350):cljs.core.identity).call(null,factory_11420.call(null,f_11398));dommy.core.update_event_listeners_BANG_.call(null,elem_11349,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11350,actual_type_11419,f_11398], null),canonical_f_11421);
if(cljs.core.truth_(elem_11349.addEventListener))
{elem_11349.addEventListener(cljs.core.name.call(null,actual_type_11419),canonical_f_11421);
} else
{elem_11349.attachEvent(cljs.core.name.call(null,actual_type_11419),canonical_f_11421);
}
{
var G__11422 = cljs.core.next.call(null,seq__11327_11412__$1);
var G__11423 = null;
var G__11424 = 0;
var G__11425 = 0;
seq__11327_11399 = G__11422;
chunk__11329_11400 = G__11423;
count__11330_11401 = G__11424;
i__11331_11402 = G__11425;
continue;
}
}
} else
{}
}
break;
}
{
var G__11426 = cljs.core.next.call(null,seq__11326_11390__$1);
var G__11427 = null;
var G__11428 = 0;
var G__11429 = 0;
seq__11326_11351 = G__11426;
chunk__11333_11352 = G__11427;
count__11334_11353 = G__11428;
i__11335_11354 = G__11429;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__11430){
var elem_sel = cljs.core.first(arglist__11430);
var type_fs = cljs.core.rest(arglist__11430);
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
var vec__11454_11477 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11478 = cljs.core.nth.call(null,vec__11454_11477,0,null);var selector_11479 = cljs.core.nth.call(null,vec__11454_11477,1,null);var seq__11455_11480 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11462_11481 = null;var count__11463_11482 = 0;var i__11464_11483 = 0;while(true){
if((i__11464_11483 < count__11463_11482))
{var vec__11471_11484 = cljs.core._nth.call(null,chunk__11462_11481,i__11464_11483);var orig_type_11485 = cljs.core.nth.call(null,vec__11471_11484,0,null);var f_11486 = cljs.core.nth.call(null,vec__11471_11484,1,null);var seq__11465_11487 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11485,new cljs.core.PersistentArrayMap.fromArray([orig_type_11485,cljs.core.identity], true, false)));var chunk__11467_11488 = null;var count__11468_11489 = 0;var i__11469_11490 = 0;while(true){
if((i__11469_11490 < count__11468_11489))
{var vec__11472_11491 = cljs.core._nth.call(null,chunk__11467_11488,i__11469_11490);var actual_type_11492 = cljs.core.nth.call(null,vec__11472_11491,0,null);var __11493 = cljs.core.nth.call(null,vec__11472_11491,1,null);var keys_11494 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11479,actual_type_11492,f_11486], null);var canonical_f_11495 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11478),keys_11494);dommy.core.update_event_listeners_BANG_.call(null,elem_11478,dommy.utils.dissoc_in,keys_11494);
if(cljs.core.truth_(elem_11478.removeEventListener))
{elem_11478.removeEventListener(cljs.core.name.call(null,actual_type_11492),canonical_f_11495);
} else
{elem_11478.detachEvent(cljs.core.name.call(null,actual_type_11492),canonical_f_11495);
}
{
var G__11496 = seq__11465_11487;
var G__11497 = chunk__11467_11488;
var G__11498 = count__11468_11489;
var G__11499 = (i__11469_11490 + 1);
seq__11465_11487 = G__11496;
chunk__11467_11488 = G__11497;
count__11468_11489 = G__11498;
i__11469_11490 = G__11499;
continue;
}
} else
{var temp__4092__auto___11500 = cljs.core.seq.call(null,seq__11465_11487);if(temp__4092__auto___11500)
{var seq__11465_11501__$1 = temp__4092__auto___11500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11465_11501__$1))
{var c__4015__auto___11502 = cljs.core.chunk_first.call(null,seq__11465_11501__$1);{
var G__11503 = cljs.core.chunk_rest.call(null,seq__11465_11501__$1);
var G__11504 = c__4015__auto___11502;
var G__11505 = cljs.core.count.call(null,c__4015__auto___11502);
var G__11506 = 0;
seq__11465_11487 = G__11503;
chunk__11467_11488 = G__11504;
count__11468_11489 = G__11505;
i__11469_11490 = G__11506;
continue;
}
} else
{var vec__11473_11507 = cljs.core.first.call(null,seq__11465_11501__$1);var actual_type_11508 = cljs.core.nth.call(null,vec__11473_11507,0,null);var __11509 = cljs.core.nth.call(null,vec__11473_11507,1,null);var keys_11510 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11479,actual_type_11508,f_11486], null);var canonical_f_11511 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11478),keys_11510);dommy.core.update_event_listeners_BANG_.call(null,elem_11478,dommy.utils.dissoc_in,keys_11510);
if(cljs.core.truth_(elem_11478.removeEventListener))
{elem_11478.removeEventListener(cljs.core.name.call(null,actual_type_11508),canonical_f_11511);
} else
{elem_11478.detachEvent(cljs.core.name.call(null,actual_type_11508),canonical_f_11511);
}
{
var G__11512 = cljs.core.next.call(null,seq__11465_11501__$1);
var G__11513 = null;
var G__11514 = 0;
var G__11515 = 0;
seq__11465_11487 = G__11512;
chunk__11467_11488 = G__11513;
count__11468_11489 = G__11514;
i__11469_11490 = G__11515;
continue;
}
}
} else
{}
}
break;
}
{
var G__11516 = seq__11455_11480;
var G__11517 = chunk__11462_11481;
var G__11518 = count__11463_11482;
var G__11519 = (i__11464_11483 + 1);
seq__11455_11480 = G__11516;
chunk__11462_11481 = G__11517;
count__11463_11482 = G__11518;
i__11464_11483 = G__11519;
continue;
}
} else
{var temp__4092__auto___11520 = cljs.core.seq.call(null,seq__11455_11480);if(temp__4092__auto___11520)
{var seq__11455_11521__$1 = temp__4092__auto___11520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11455_11521__$1))
{var c__4015__auto___11522 = cljs.core.chunk_first.call(null,seq__11455_11521__$1);{
var G__11523 = cljs.core.chunk_rest.call(null,seq__11455_11521__$1);
var G__11524 = c__4015__auto___11522;
var G__11525 = cljs.core.count.call(null,c__4015__auto___11522);
var G__11526 = 0;
seq__11455_11480 = G__11523;
chunk__11462_11481 = G__11524;
count__11463_11482 = G__11525;
i__11464_11483 = G__11526;
continue;
}
} else
{var vec__11474_11527 = cljs.core.first.call(null,seq__11455_11521__$1);var orig_type_11528 = cljs.core.nth.call(null,vec__11474_11527,0,null);var f_11529 = cljs.core.nth.call(null,vec__11474_11527,1,null);var seq__11456_11530 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11528,new cljs.core.PersistentArrayMap.fromArray([orig_type_11528,cljs.core.identity], true, false)));var chunk__11458_11531 = null;var count__11459_11532 = 0;var i__11460_11533 = 0;while(true){
if((i__11460_11533 < count__11459_11532))
{var vec__11475_11534 = cljs.core._nth.call(null,chunk__11458_11531,i__11460_11533);var actual_type_11535 = cljs.core.nth.call(null,vec__11475_11534,0,null);var __11536 = cljs.core.nth.call(null,vec__11475_11534,1,null);var keys_11537 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11479,actual_type_11535,f_11529], null);var canonical_f_11538 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11478),keys_11537);dommy.core.update_event_listeners_BANG_.call(null,elem_11478,dommy.utils.dissoc_in,keys_11537);
if(cljs.core.truth_(elem_11478.removeEventListener))
{elem_11478.removeEventListener(cljs.core.name.call(null,actual_type_11535),canonical_f_11538);
} else
{elem_11478.detachEvent(cljs.core.name.call(null,actual_type_11535),canonical_f_11538);
}
{
var G__11539 = seq__11456_11530;
var G__11540 = chunk__11458_11531;
var G__11541 = count__11459_11532;
var G__11542 = (i__11460_11533 + 1);
seq__11456_11530 = G__11539;
chunk__11458_11531 = G__11540;
count__11459_11532 = G__11541;
i__11460_11533 = G__11542;
continue;
}
} else
{var temp__4092__auto___11543__$1 = cljs.core.seq.call(null,seq__11456_11530);if(temp__4092__auto___11543__$1)
{var seq__11456_11544__$1 = temp__4092__auto___11543__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11456_11544__$1))
{var c__4015__auto___11545 = cljs.core.chunk_first.call(null,seq__11456_11544__$1);{
var G__11546 = cljs.core.chunk_rest.call(null,seq__11456_11544__$1);
var G__11547 = c__4015__auto___11545;
var G__11548 = cljs.core.count.call(null,c__4015__auto___11545);
var G__11549 = 0;
seq__11456_11530 = G__11546;
chunk__11458_11531 = G__11547;
count__11459_11532 = G__11548;
i__11460_11533 = G__11549;
continue;
}
} else
{var vec__11476_11550 = cljs.core.first.call(null,seq__11456_11544__$1);var actual_type_11551 = cljs.core.nth.call(null,vec__11476_11550,0,null);var __11552 = cljs.core.nth.call(null,vec__11476_11550,1,null);var keys_11553 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11479,actual_type_11551,f_11529], null);var canonical_f_11554 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11478),keys_11553);dommy.core.update_event_listeners_BANG_.call(null,elem_11478,dommy.utils.dissoc_in,keys_11553);
if(cljs.core.truth_(elem_11478.removeEventListener))
{elem_11478.removeEventListener(cljs.core.name.call(null,actual_type_11551),canonical_f_11554);
} else
{elem_11478.detachEvent(cljs.core.name.call(null,actual_type_11551),canonical_f_11554);
}
{
var G__11555 = cljs.core.next.call(null,seq__11456_11544__$1);
var G__11556 = null;
var G__11557 = 0;
var G__11558 = 0;
seq__11456_11530 = G__11555;
chunk__11458_11531 = G__11556;
count__11459_11532 = G__11557;
i__11460_11533 = G__11558;
continue;
}
}
} else
{}
}
break;
}
{
var G__11559 = cljs.core.next.call(null,seq__11455_11521__$1);
var G__11560 = null;
var G__11561 = 0;
var G__11562 = 0;
seq__11455_11480 = G__11559;
chunk__11462_11481 = G__11560;
count__11463_11482 = G__11561;
i__11464_11483 = G__11562;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11563){
var elem_sel = cljs.core.first(arglist__11563);
var type_fs = cljs.core.rest(arglist__11563);
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
var vec__11571_11578 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11579 = cljs.core.nth.call(null,vec__11571_11578,0,null);var selector_11580 = cljs.core.nth.call(null,vec__11571_11578,1,null);var seq__11572_11581 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11573_11582 = null;var count__11574_11583 = 0;var i__11575_11584 = 0;while(true){
if((i__11575_11584 < count__11574_11583))
{var vec__11576_11585 = cljs.core._nth.call(null,chunk__11573_11582,i__11575_11584);var type_11586 = cljs.core.nth.call(null,vec__11576_11585,0,null);var f_11587 = cljs.core.nth.call(null,vec__11576_11585,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_11586,((function (seq__11572_11581,chunk__11573_11582,count__11574_11583,i__11575_11584,vec__11576_11585,type_11586,f_11587){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11586,this_fn);
return f_11587.call(null,e);
});})(seq__11572_11581,chunk__11573_11582,count__11574_11583,i__11575_11584,vec__11576_11585,type_11586,f_11587))
);
{
var G__11588 = seq__11572_11581;
var G__11589 = chunk__11573_11582;
var G__11590 = count__11574_11583;
var G__11591 = (i__11575_11584 + 1);
seq__11572_11581 = G__11588;
chunk__11573_11582 = G__11589;
count__11574_11583 = G__11590;
i__11575_11584 = G__11591;
continue;
}
} else
{var temp__4092__auto___11592 = cljs.core.seq.call(null,seq__11572_11581);if(temp__4092__auto___11592)
{var seq__11572_11593__$1 = temp__4092__auto___11592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11572_11593__$1))
{var c__4015__auto___11594 = cljs.core.chunk_first.call(null,seq__11572_11593__$1);{
var G__11595 = cljs.core.chunk_rest.call(null,seq__11572_11593__$1);
var G__11596 = c__4015__auto___11594;
var G__11597 = cljs.core.count.call(null,c__4015__auto___11594);
var G__11598 = 0;
seq__11572_11581 = G__11595;
chunk__11573_11582 = G__11596;
count__11574_11583 = G__11597;
i__11575_11584 = G__11598;
continue;
}
} else
{var vec__11577_11599 = cljs.core.first.call(null,seq__11572_11593__$1);var type_11600 = cljs.core.nth.call(null,vec__11577_11599,0,null);var f_11601 = cljs.core.nth.call(null,vec__11577_11599,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_11600,((function (seq__11572_11581,chunk__11573_11582,count__11574_11583,i__11575_11584,vec__11577_11599,type_11600,f_11601,seq__11572_11593__$1,temp__4092__auto___11592){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11600,this_fn);
return f_11601.call(null,e);
});})(seq__11572_11581,chunk__11573_11582,count__11574_11583,i__11575_11584,vec__11577_11599,type_11600,f_11601,seq__11572_11593__$1,temp__4092__auto___11592))
);
{
var G__11602 = cljs.core.next.call(null,seq__11572_11593__$1);
var G__11603 = null;
var G__11604 = 0;
var G__11605 = 0;
seq__11572_11581 = G__11602;
chunk__11573_11582 = G__11603;
count__11574_11583 = G__11604;
i__11575_11584 = G__11605;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11606){
var elem_sel = cljs.core.first(arglist__11606);
var type_fs = cljs.core.rest(arglist__11606);
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
var fire_BANG___delegate = function (node,event_type,p__11607){var vec__11609 = p__11607;var update_event_BANG_ = cljs.core.nth.call(null,vec__11609,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__11607 = null;if (arguments.length > 2) {
  p__11607 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__11607);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__11610){
var node = cljs.core.first(arglist__11610);
arglist__11610 = cljs.core.next(arglist__11610);
var event_type = cljs.core.first(arglist__11610);
var p__11607 = cljs.core.rest(arglist__11610);
return fire_BANG___delegate(node,event_type,p__11607);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
