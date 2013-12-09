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
var append_BANG___2 = (function (parent,child){var G__11205 = dommy.template.__GT_node_like.call(null,parent);G__11205.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__11205;
});
var append_BANG___3 = (function() { 
var G__11210__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11206_11211 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11207_11212 = null;var count__11208_11213 = 0;var i__11209_11214 = 0;while(true){
if((i__11209_11214 < count__11208_11213))
{var c_11215 = cljs.core._nth.call(null,chunk__11207_11212,i__11209_11214);append_BANG_.call(null,parent__$1,c_11215);
{
var G__11216 = seq__11206_11211;
var G__11217 = chunk__11207_11212;
var G__11218 = count__11208_11213;
var G__11219 = (i__11209_11214 + 1);
seq__11206_11211 = G__11216;
chunk__11207_11212 = G__11217;
count__11208_11213 = G__11218;
i__11209_11214 = G__11219;
continue;
}
} else
{var temp__4092__auto___11220 = cljs.core.seq.call(null,seq__11206_11211);if(temp__4092__auto___11220)
{var seq__11206_11221__$1 = temp__4092__auto___11220;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11206_11221__$1))
{var c__5489__auto___11222 = cljs.core.chunk_first.call(null,seq__11206_11221__$1);{
var G__11223 = cljs.core.chunk_rest.call(null,seq__11206_11221__$1);
var G__11224 = c__5489__auto___11222;
var G__11225 = cljs.core.count.call(null,c__5489__auto___11222);
var G__11226 = 0;
seq__11206_11211 = G__11223;
chunk__11207_11212 = G__11224;
count__11208_11213 = G__11225;
i__11209_11214 = G__11226;
continue;
}
} else
{var c_11227 = cljs.core.first.call(null,seq__11206_11221__$1);append_BANG_.call(null,parent__$1,c_11227);
{
var G__11228 = cljs.core.next.call(null,seq__11206_11221__$1);
var G__11229 = null;
var G__11230 = 0;
var G__11231 = 0;
seq__11206_11211 = G__11228;
chunk__11207_11212 = G__11229;
count__11208_11213 = G__11230;
i__11209_11214 = G__11231;
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
var G__11210 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11210__delegate.call(this,parent,child,more_children);};
G__11210.cljs$lang$maxFixedArity = 2;
G__11210.cljs$lang$applyTo = (function (arglist__11232){
var parent = cljs.core.first(arglist__11232);
arglist__11232 = cljs.core.next(arglist__11232);
var child = cljs.core.first(arglist__11232);
var more_children = cljs.core.rest(arglist__11232);
return G__11210__delegate(parent,child,more_children);
});
G__11210.cljs$core$IFn$_invoke$arity$variadic = G__11210__delegate;
return G__11210;
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
var prepend_BANG___2 = (function (parent,child){var G__11238 = dommy.template.__GT_node_like.call(null,parent);G__11238.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__11238;
});
var prepend_BANG___3 = (function() { 
var G__11243__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11239_11244 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11240_11245 = null;var count__11241_11246 = 0;var i__11242_11247 = 0;while(true){
if((i__11242_11247 < count__11241_11246))
{var c_11248 = cljs.core._nth.call(null,chunk__11240_11245,i__11242_11247);prepend_BANG_.call(null,parent__$1,c_11248);
{
var G__11249 = seq__11239_11244;
var G__11250 = chunk__11240_11245;
var G__11251 = count__11241_11246;
var G__11252 = (i__11242_11247 + 1);
seq__11239_11244 = G__11249;
chunk__11240_11245 = G__11250;
count__11241_11246 = G__11251;
i__11242_11247 = G__11252;
continue;
}
} else
{var temp__4092__auto___11253 = cljs.core.seq.call(null,seq__11239_11244);if(temp__4092__auto___11253)
{var seq__11239_11254__$1 = temp__4092__auto___11253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11239_11254__$1))
{var c__5489__auto___11255 = cljs.core.chunk_first.call(null,seq__11239_11254__$1);{
var G__11256 = cljs.core.chunk_rest.call(null,seq__11239_11254__$1);
var G__11257 = c__5489__auto___11255;
var G__11258 = cljs.core.count.call(null,c__5489__auto___11255);
var G__11259 = 0;
seq__11239_11244 = G__11256;
chunk__11240_11245 = G__11257;
count__11241_11246 = G__11258;
i__11242_11247 = G__11259;
continue;
}
} else
{var c_11260 = cljs.core.first.call(null,seq__11239_11254__$1);prepend_BANG_.call(null,parent__$1,c_11260);
{
var G__11261 = cljs.core.next.call(null,seq__11239_11254__$1);
var G__11262 = null;
var G__11263 = 0;
var G__11264 = 0;
seq__11239_11244 = G__11261;
chunk__11240_11245 = G__11262;
count__11241_11246 = G__11263;
i__11242_11247 = G__11264;
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
var G__11243 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11243__delegate.call(this,parent,child,more_children);};
G__11243.cljs$lang$maxFixedArity = 2;
G__11243.cljs$lang$applyTo = (function (arglist__11265){
var parent = cljs.core.first(arglist__11265);
arglist__11265 = cljs.core.next(arglist__11265);
var child = cljs.core.first(arglist__11265);
var more_children = cljs.core.rest(arglist__11265);
return G__11243__delegate(parent,child,more_children);
});
G__11243.cljs$core$IFn$_invoke$arity$variadic = G__11243__delegate;
return G__11243;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___11266 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___11266))
{var next_11267 = temp__4090__auto___11266;parent.insertBefore(actual_node,next_11267);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__11269 = dommy.template.__GT_node_like.call(null,parent);G__11269.innerHTML = "";
dommy.core.append_BANG_.call(null,G__11269,node_like);
return G__11269;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__11271 = elem__$1.parentNode;G__11271.removeChild(elem__$1);
return G__11271;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__11272_SHARP_){return p1__11272_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__11273_SHARP_){return !((p1__11273_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11274){var vec__11275 = p__11274;var special_mouse_event = cljs.core.nth.call(null,vec__11275,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__11275,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4765__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4765__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__11276){
var elem = cljs.core.first(arglist__11276);
arglist__11276 = cljs.core.next(arglist__11276);
var f = cljs.core.first(arglist__11276);
var args = cljs.core.rest(arglist__11276);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__11277_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__11277_SHARP_));
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
var vec__11301_11324 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11325 = cljs.core.nth.call(null,vec__11301_11324,0,null);var selector_11326 = cljs.core.nth.call(null,vec__11301_11324,1,null);var seq__11302_11327 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11309_11328 = null;var count__11310_11329 = 0;var i__11311_11330 = 0;while(true){
if((i__11311_11330 < count__11310_11329))
{var vec__11318_11331 = cljs.core._nth.call(null,chunk__11309_11328,i__11311_11330);var orig_type_11332 = cljs.core.nth.call(null,vec__11318_11331,0,null);var f_11333 = cljs.core.nth.call(null,vec__11318_11331,1,null);var seq__11312_11334 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11332,new cljs.core.PersistentArrayMap.fromArray([orig_type_11332,cljs.core.identity], true, false)));var chunk__11314_11335 = null;var count__11315_11336 = 0;var i__11316_11337 = 0;while(true){
if((i__11316_11337 < count__11315_11336))
{var vec__11319_11338 = cljs.core._nth.call(null,chunk__11314_11335,i__11316_11337);var actual_type_11339 = cljs.core.nth.call(null,vec__11319_11338,0,null);var factory_11340 = cljs.core.nth.call(null,vec__11319_11338,1,null);var canonical_f_11341 = (cljs.core.truth_(selector_11326)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11325,selector_11326):cljs.core.identity).call(null,factory_11340.call(null,f_11333));dommy.core.update_event_listeners_BANG_.call(null,elem_11325,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11326,actual_type_11339,f_11333], null),canonical_f_11341);
if(cljs.core.truth_(elem_11325.addEventListener))
{elem_11325.addEventListener(cljs.core.name.call(null,actual_type_11339),canonical_f_11341);
} else
{elem_11325.attachEvent(cljs.core.name.call(null,actual_type_11339),canonical_f_11341);
}
{
var G__11342 = seq__11312_11334;
var G__11343 = chunk__11314_11335;
var G__11344 = count__11315_11336;
var G__11345 = (i__11316_11337 + 1);
seq__11312_11334 = G__11342;
chunk__11314_11335 = G__11343;
count__11315_11336 = G__11344;
i__11316_11337 = G__11345;
continue;
}
} else
{var temp__4092__auto___11346 = cljs.core.seq.call(null,seq__11312_11334);if(temp__4092__auto___11346)
{var seq__11312_11347__$1 = temp__4092__auto___11346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11312_11347__$1))
{var c__5489__auto___11348 = cljs.core.chunk_first.call(null,seq__11312_11347__$1);{
var G__11349 = cljs.core.chunk_rest.call(null,seq__11312_11347__$1);
var G__11350 = c__5489__auto___11348;
var G__11351 = cljs.core.count.call(null,c__5489__auto___11348);
var G__11352 = 0;
seq__11312_11334 = G__11349;
chunk__11314_11335 = G__11350;
count__11315_11336 = G__11351;
i__11316_11337 = G__11352;
continue;
}
} else
{var vec__11320_11353 = cljs.core.first.call(null,seq__11312_11347__$1);var actual_type_11354 = cljs.core.nth.call(null,vec__11320_11353,0,null);var factory_11355 = cljs.core.nth.call(null,vec__11320_11353,1,null);var canonical_f_11356 = (cljs.core.truth_(selector_11326)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11325,selector_11326):cljs.core.identity).call(null,factory_11355.call(null,f_11333));dommy.core.update_event_listeners_BANG_.call(null,elem_11325,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11326,actual_type_11354,f_11333], null),canonical_f_11356);
if(cljs.core.truth_(elem_11325.addEventListener))
{elem_11325.addEventListener(cljs.core.name.call(null,actual_type_11354),canonical_f_11356);
} else
{elem_11325.attachEvent(cljs.core.name.call(null,actual_type_11354),canonical_f_11356);
}
{
var G__11357 = cljs.core.next.call(null,seq__11312_11347__$1);
var G__11358 = null;
var G__11359 = 0;
var G__11360 = 0;
seq__11312_11334 = G__11357;
chunk__11314_11335 = G__11358;
count__11315_11336 = G__11359;
i__11316_11337 = G__11360;
continue;
}
}
} else
{}
}
break;
}
{
var G__11361 = seq__11302_11327;
var G__11362 = chunk__11309_11328;
var G__11363 = count__11310_11329;
var G__11364 = (i__11311_11330 + 1);
seq__11302_11327 = G__11361;
chunk__11309_11328 = G__11362;
count__11310_11329 = G__11363;
i__11311_11330 = G__11364;
continue;
}
} else
{var temp__4092__auto___11365 = cljs.core.seq.call(null,seq__11302_11327);if(temp__4092__auto___11365)
{var seq__11302_11366__$1 = temp__4092__auto___11365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11302_11366__$1))
{var c__5489__auto___11367 = cljs.core.chunk_first.call(null,seq__11302_11366__$1);{
var G__11368 = cljs.core.chunk_rest.call(null,seq__11302_11366__$1);
var G__11369 = c__5489__auto___11367;
var G__11370 = cljs.core.count.call(null,c__5489__auto___11367);
var G__11371 = 0;
seq__11302_11327 = G__11368;
chunk__11309_11328 = G__11369;
count__11310_11329 = G__11370;
i__11311_11330 = G__11371;
continue;
}
} else
{var vec__11321_11372 = cljs.core.first.call(null,seq__11302_11366__$1);var orig_type_11373 = cljs.core.nth.call(null,vec__11321_11372,0,null);var f_11374 = cljs.core.nth.call(null,vec__11321_11372,1,null);var seq__11303_11375 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11373,new cljs.core.PersistentArrayMap.fromArray([orig_type_11373,cljs.core.identity], true, false)));var chunk__11305_11376 = null;var count__11306_11377 = 0;var i__11307_11378 = 0;while(true){
if((i__11307_11378 < count__11306_11377))
{var vec__11322_11379 = cljs.core._nth.call(null,chunk__11305_11376,i__11307_11378);var actual_type_11380 = cljs.core.nth.call(null,vec__11322_11379,0,null);var factory_11381 = cljs.core.nth.call(null,vec__11322_11379,1,null);var canonical_f_11382 = (cljs.core.truth_(selector_11326)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11325,selector_11326):cljs.core.identity).call(null,factory_11381.call(null,f_11374));dommy.core.update_event_listeners_BANG_.call(null,elem_11325,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11326,actual_type_11380,f_11374], null),canonical_f_11382);
if(cljs.core.truth_(elem_11325.addEventListener))
{elem_11325.addEventListener(cljs.core.name.call(null,actual_type_11380),canonical_f_11382);
} else
{elem_11325.attachEvent(cljs.core.name.call(null,actual_type_11380),canonical_f_11382);
}
{
var G__11383 = seq__11303_11375;
var G__11384 = chunk__11305_11376;
var G__11385 = count__11306_11377;
var G__11386 = (i__11307_11378 + 1);
seq__11303_11375 = G__11383;
chunk__11305_11376 = G__11384;
count__11306_11377 = G__11385;
i__11307_11378 = G__11386;
continue;
}
} else
{var temp__4092__auto___11387__$1 = cljs.core.seq.call(null,seq__11303_11375);if(temp__4092__auto___11387__$1)
{var seq__11303_11388__$1 = temp__4092__auto___11387__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11303_11388__$1))
{var c__5489__auto___11389 = cljs.core.chunk_first.call(null,seq__11303_11388__$1);{
var G__11390 = cljs.core.chunk_rest.call(null,seq__11303_11388__$1);
var G__11391 = c__5489__auto___11389;
var G__11392 = cljs.core.count.call(null,c__5489__auto___11389);
var G__11393 = 0;
seq__11303_11375 = G__11390;
chunk__11305_11376 = G__11391;
count__11306_11377 = G__11392;
i__11307_11378 = G__11393;
continue;
}
} else
{var vec__11323_11394 = cljs.core.first.call(null,seq__11303_11388__$1);var actual_type_11395 = cljs.core.nth.call(null,vec__11323_11394,0,null);var factory_11396 = cljs.core.nth.call(null,vec__11323_11394,1,null);var canonical_f_11397 = (cljs.core.truth_(selector_11326)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11325,selector_11326):cljs.core.identity).call(null,factory_11396.call(null,f_11374));dommy.core.update_event_listeners_BANG_.call(null,elem_11325,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11326,actual_type_11395,f_11374], null),canonical_f_11397);
if(cljs.core.truth_(elem_11325.addEventListener))
{elem_11325.addEventListener(cljs.core.name.call(null,actual_type_11395),canonical_f_11397);
} else
{elem_11325.attachEvent(cljs.core.name.call(null,actual_type_11395),canonical_f_11397);
}
{
var G__11398 = cljs.core.next.call(null,seq__11303_11388__$1);
var G__11399 = null;
var G__11400 = 0;
var G__11401 = 0;
seq__11303_11375 = G__11398;
chunk__11305_11376 = G__11399;
count__11306_11377 = G__11400;
i__11307_11378 = G__11401;
continue;
}
}
} else
{}
}
break;
}
{
var G__11402 = cljs.core.next.call(null,seq__11302_11366__$1);
var G__11403 = null;
var G__11404 = 0;
var G__11405 = 0;
seq__11302_11327 = G__11402;
chunk__11309_11328 = G__11403;
count__11310_11329 = G__11404;
i__11311_11330 = G__11405;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__11406){
var elem_sel = cljs.core.first(arglist__11406);
var type_fs = cljs.core.rest(arglist__11406);
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
var vec__11430_11453 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11454 = cljs.core.nth.call(null,vec__11430_11453,0,null);var selector_11455 = cljs.core.nth.call(null,vec__11430_11453,1,null);var seq__11431_11456 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11438_11457 = null;var count__11439_11458 = 0;var i__11440_11459 = 0;while(true){
if((i__11440_11459 < count__11439_11458))
{var vec__11447_11460 = cljs.core._nth.call(null,chunk__11438_11457,i__11440_11459);var orig_type_11461 = cljs.core.nth.call(null,vec__11447_11460,0,null);var f_11462 = cljs.core.nth.call(null,vec__11447_11460,1,null);var seq__11441_11463 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11461,new cljs.core.PersistentArrayMap.fromArray([orig_type_11461,cljs.core.identity], true, false)));var chunk__11443_11464 = null;var count__11444_11465 = 0;var i__11445_11466 = 0;while(true){
if((i__11445_11466 < count__11444_11465))
{var vec__11448_11467 = cljs.core._nth.call(null,chunk__11443_11464,i__11445_11466);var actual_type_11468 = cljs.core.nth.call(null,vec__11448_11467,0,null);var __11469 = cljs.core.nth.call(null,vec__11448_11467,1,null);var keys_11470 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11455,actual_type_11468,f_11462], null);var canonical_f_11471 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11454),keys_11470);dommy.core.update_event_listeners_BANG_.call(null,elem_11454,dommy.utils.dissoc_in,keys_11470);
if(cljs.core.truth_(elem_11454.removeEventListener))
{elem_11454.removeEventListener(cljs.core.name.call(null,actual_type_11468),canonical_f_11471);
} else
{elem_11454.detachEvent(cljs.core.name.call(null,actual_type_11468),canonical_f_11471);
}
{
var G__11472 = seq__11441_11463;
var G__11473 = chunk__11443_11464;
var G__11474 = count__11444_11465;
var G__11475 = (i__11445_11466 + 1);
seq__11441_11463 = G__11472;
chunk__11443_11464 = G__11473;
count__11444_11465 = G__11474;
i__11445_11466 = G__11475;
continue;
}
} else
{var temp__4092__auto___11476 = cljs.core.seq.call(null,seq__11441_11463);if(temp__4092__auto___11476)
{var seq__11441_11477__$1 = temp__4092__auto___11476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11441_11477__$1))
{var c__5489__auto___11478 = cljs.core.chunk_first.call(null,seq__11441_11477__$1);{
var G__11479 = cljs.core.chunk_rest.call(null,seq__11441_11477__$1);
var G__11480 = c__5489__auto___11478;
var G__11481 = cljs.core.count.call(null,c__5489__auto___11478);
var G__11482 = 0;
seq__11441_11463 = G__11479;
chunk__11443_11464 = G__11480;
count__11444_11465 = G__11481;
i__11445_11466 = G__11482;
continue;
}
} else
{var vec__11449_11483 = cljs.core.first.call(null,seq__11441_11477__$1);var actual_type_11484 = cljs.core.nth.call(null,vec__11449_11483,0,null);var __11485 = cljs.core.nth.call(null,vec__11449_11483,1,null);var keys_11486 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11455,actual_type_11484,f_11462], null);var canonical_f_11487 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11454),keys_11486);dommy.core.update_event_listeners_BANG_.call(null,elem_11454,dommy.utils.dissoc_in,keys_11486);
if(cljs.core.truth_(elem_11454.removeEventListener))
{elem_11454.removeEventListener(cljs.core.name.call(null,actual_type_11484),canonical_f_11487);
} else
{elem_11454.detachEvent(cljs.core.name.call(null,actual_type_11484),canonical_f_11487);
}
{
var G__11488 = cljs.core.next.call(null,seq__11441_11477__$1);
var G__11489 = null;
var G__11490 = 0;
var G__11491 = 0;
seq__11441_11463 = G__11488;
chunk__11443_11464 = G__11489;
count__11444_11465 = G__11490;
i__11445_11466 = G__11491;
continue;
}
}
} else
{}
}
break;
}
{
var G__11492 = seq__11431_11456;
var G__11493 = chunk__11438_11457;
var G__11494 = count__11439_11458;
var G__11495 = (i__11440_11459 + 1);
seq__11431_11456 = G__11492;
chunk__11438_11457 = G__11493;
count__11439_11458 = G__11494;
i__11440_11459 = G__11495;
continue;
}
} else
{var temp__4092__auto___11496 = cljs.core.seq.call(null,seq__11431_11456);if(temp__4092__auto___11496)
{var seq__11431_11497__$1 = temp__4092__auto___11496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11431_11497__$1))
{var c__5489__auto___11498 = cljs.core.chunk_first.call(null,seq__11431_11497__$1);{
var G__11499 = cljs.core.chunk_rest.call(null,seq__11431_11497__$1);
var G__11500 = c__5489__auto___11498;
var G__11501 = cljs.core.count.call(null,c__5489__auto___11498);
var G__11502 = 0;
seq__11431_11456 = G__11499;
chunk__11438_11457 = G__11500;
count__11439_11458 = G__11501;
i__11440_11459 = G__11502;
continue;
}
} else
{var vec__11450_11503 = cljs.core.first.call(null,seq__11431_11497__$1);var orig_type_11504 = cljs.core.nth.call(null,vec__11450_11503,0,null);var f_11505 = cljs.core.nth.call(null,vec__11450_11503,1,null);var seq__11432_11506 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11504,new cljs.core.PersistentArrayMap.fromArray([orig_type_11504,cljs.core.identity], true, false)));var chunk__11434_11507 = null;var count__11435_11508 = 0;var i__11436_11509 = 0;while(true){
if((i__11436_11509 < count__11435_11508))
{var vec__11451_11510 = cljs.core._nth.call(null,chunk__11434_11507,i__11436_11509);var actual_type_11511 = cljs.core.nth.call(null,vec__11451_11510,0,null);var __11512 = cljs.core.nth.call(null,vec__11451_11510,1,null);var keys_11513 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11455,actual_type_11511,f_11505], null);var canonical_f_11514 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11454),keys_11513);dommy.core.update_event_listeners_BANG_.call(null,elem_11454,dommy.utils.dissoc_in,keys_11513);
if(cljs.core.truth_(elem_11454.removeEventListener))
{elem_11454.removeEventListener(cljs.core.name.call(null,actual_type_11511),canonical_f_11514);
} else
{elem_11454.detachEvent(cljs.core.name.call(null,actual_type_11511),canonical_f_11514);
}
{
var G__11515 = seq__11432_11506;
var G__11516 = chunk__11434_11507;
var G__11517 = count__11435_11508;
var G__11518 = (i__11436_11509 + 1);
seq__11432_11506 = G__11515;
chunk__11434_11507 = G__11516;
count__11435_11508 = G__11517;
i__11436_11509 = G__11518;
continue;
}
} else
{var temp__4092__auto___11519__$1 = cljs.core.seq.call(null,seq__11432_11506);if(temp__4092__auto___11519__$1)
{var seq__11432_11520__$1 = temp__4092__auto___11519__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11432_11520__$1))
{var c__5489__auto___11521 = cljs.core.chunk_first.call(null,seq__11432_11520__$1);{
var G__11522 = cljs.core.chunk_rest.call(null,seq__11432_11520__$1);
var G__11523 = c__5489__auto___11521;
var G__11524 = cljs.core.count.call(null,c__5489__auto___11521);
var G__11525 = 0;
seq__11432_11506 = G__11522;
chunk__11434_11507 = G__11523;
count__11435_11508 = G__11524;
i__11436_11509 = G__11525;
continue;
}
} else
{var vec__11452_11526 = cljs.core.first.call(null,seq__11432_11520__$1);var actual_type_11527 = cljs.core.nth.call(null,vec__11452_11526,0,null);var __11528 = cljs.core.nth.call(null,vec__11452_11526,1,null);var keys_11529 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11455,actual_type_11527,f_11505], null);var canonical_f_11530 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11454),keys_11529);dommy.core.update_event_listeners_BANG_.call(null,elem_11454,dommy.utils.dissoc_in,keys_11529);
if(cljs.core.truth_(elem_11454.removeEventListener))
{elem_11454.removeEventListener(cljs.core.name.call(null,actual_type_11527),canonical_f_11530);
} else
{elem_11454.detachEvent(cljs.core.name.call(null,actual_type_11527),canonical_f_11530);
}
{
var G__11531 = cljs.core.next.call(null,seq__11432_11520__$1);
var G__11532 = null;
var G__11533 = 0;
var G__11534 = 0;
seq__11432_11506 = G__11531;
chunk__11434_11507 = G__11532;
count__11435_11508 = G__11533;
i__11436_11509 = G__11534;
continue;
}
}
} else
{}
}
break;
}
{
var G__11535 = cljs.core.next.call(null,seq__11431_11497__$1);
var G__11536 = null;
var G__11537 = 0;
var G__11538 = 0;
seq__11431_11456 = G__11535;
chunk__11438_11457 = G__11536;
count__11439_11458 = G__11537;
i__11440_11459 = G__11538;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11539){
var elem_sel = cljs.core.first(arglist__11539);
var type_fs = cljs.core.rest(arglist__11539);
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
var vec__11547_11554 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11555 = cljs.core.nth.call(null,vec__11547_11554,0,null);var selector_11556 = cljs.core.nth.call(null,vec__11547_11554,1,null);var seq__11548_11557 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11549_11558 = null;var count__11550_11559 = 0;var i__11551_11560 = 0;while(true){
if((i__11551_11560 < count__11550_11559))
{var vec__11552_11561 = cljs.core._nth.call(null,chunk__11549_11558,i__11551_11560);var type_11562 = cljs.core.nth.call(null,vec__11552_11561,0,null);var f_11563 = cljs.core.nth.call(null,vec__11552_11561,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_11562,((function (seq__11548_11557,chunk__11549_11558,count__11550_11559,i__11551_11560,vec__11552_11561,type_11562,f_11563){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11562,this_fn);
return f_11563.call(null,e);
});})(seq__11548_11557,chunk__11549_11558,count__11550_11559,i__11551_11560,vec__11552_11561,type_11562,f_11563))
);
{
var G__11564 = seq__11548_11557;
var G__11565 = chunk__11549_11558;
var G__11566 = count__11550_11559;
var G__11567 = (i__11551_11560 + 1);
seq__11548_11557 = G__11564;
chunk__11549_11558 = G__11565;
count__11550_11559 = G__11566;
i__11551_11560 = G__11567;
continue;
}
} else
{var temp__4092__auto___11568 = cljs.core.seq.call(null,seq__11548_11557);if(temp__4092__auto___11568)
{var seq__11548_11569__$1 = temp__4092__auto___11568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11548_11569__$1))
{var c__5489__auto___11570 = cljs.core.chunk_first.call(null,seq__11548_11569__$1);{
var G__11571 = cljs.core.chunk_rest.call(null,seq__11548_11569__$1);
var G__11572 = c__5489__auto___11570;
var G__11573 = cljs.core.count.call(null,c__5489__auto___11570);
var G__11574 = 0;
seq__11548_11557 = G__11571;
chunk__11549_11558 = G__11572;
count__11550_11559 = G__11573;
i__11551_11560 = G__11574;
continue;
}
} else
{var vec__11553_11575 = cljs.core.first.call(null,seq__11548_11569__$1);var type_11576 = cljs.core.nth.call(null,vec__11553_11575,0,null);var f_11577 = cljs.core.nth.call(null,vec__11553_11575,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_11576,((function (seq__11548_11557,chunk__11549_11558,count__11550_11559,i__11551_11560,vec__11553_11575,type_11576,f_11577,seq__11548_11569__$1,temp__4092__auto___11568){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11576,this_fn);
return f_11577.call(null,e);
});})(seq__11548_11557,chunk__11549_11558,count__11550_11559,i__11551_11560,vec__11553_11575,type_11576,f_11577,seq__11548_11569__$1,temp__4092__auto___11568))
);
{
var G__11578 = cljs.core.next.call(null,seq__11548_11569__$1);
var G__11579 = null;
var G__11580 = 0;
var G__11581 = 0;
seq__11548_11557 = G__11578;
chunk__11549_11558 = G__11579;
count__11550_11559 = G__11580;
i__11551_11560 = G__11581;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11582){
var elem_sel = cljs.core.first(arglist__11582);
var type_fs = cljs.core.rest(arglist__11582);
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
var fire_BANG___delegate = function (node,event_type,p__11583){var vec__11585 = p__11583;var update_event_BANG_ = cljs.core.nth.call(null,vec__11585,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__11583 = null;if (arguments.length > 2) {
  p__11583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__11583);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__11586){
var node = cljs.core.first(arglist__11586);
arglist__11586 = cljs.core.next(arglist__11586);
var event_type = cljs.core.first(arglist__11586);
var p__11583 = cljs.core.rest(arglist__11586);
return fire_BANG___delegate(node,event_type,p__11583);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
