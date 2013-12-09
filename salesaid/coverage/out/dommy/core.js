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
var append_BANG___2 = (function (parent,child){var G__66303 = dommy.template.__GT_node_like.call(null,parent);G__66303.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__66303;
});
var append_BANG___3 = (function() { 
var G__66308__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__66304_66309 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__66305_66310 = null;var count__66306_66311 = 0;var i__66307_66312 = 0;while(true){
if((i__66307_66312 < count__66306_66311))
{var c_66313 = cljs.core._nth.call(null,chunk__66305_66310,i__66307_66312);append_BANG_.call(null,parent__$1,c_66313);
{
var G__66314 = seq__66304_66309;
var G__66315 = chunk__66305_66310;
var G__66316 = count__66306_66311;
var G__66317 = (i__66307_66312 + 1);
seq__66304_66309 = G__66314;
chunk__66305_66310 = G__66315;
count__66306_66311 = G__66316;
i__66307_66312 = G__66317;
continue;
}
} else
{var temp__4092__auto___66318 = cljs.core.seq.call(null,seq__66304_66309);if(temp__4092__auto___66318)
{var seq__66304_66319__$1 = temp__4092__auto___66318;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66304_66319__$1))
{var c__4017__auto___66320 = cljs.core.chunk_first.call(null,seq__66304_66319__$1);{
var G__66321 = cljs.core.chunk_rest.call(null,seq__66304_66319__$1);
var G__66322 = c__4017__auto___66320;
var G__66323 = cljs.core.count.call(null,c__4017__auto___66320);
var G__66324 = 0;
seq__66304_66309 = G__66321;
chunk__66305_66310 = G__66322;
count__66306_66311 = G__66323;
i__66307_66312 = G__66324;
continue;
}
} else
{var c_66325 = cljs.core.first.call(null,seq__66304_66319__$1);append_BANG_.call(null,parent__$1,c_66325);
{
var G__66326 = cljs.core.next.call(null,seq__66304_66319__$1);
var G__66327 = null;
var G__66328 = 0;
var G__66329 = 0;
seq__66304_66309 = G__66326;
chunk__66305_66310 = G__66327;
count__66306_66311 = G__66328;
i__66307_66312 = G__66329;
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
var G__66308 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__66308__delegate.call(this,parent,child,more_children);};
G__66308.cljs$lang$maxFixedArity = 2;
G__66308.cljs$lang$applyTo = (function (arglist__66330){
var parent = cljs.core.first(arglist__66330);
arglist__66330 = cljs.core.next(arglist__66330);
var child = cljs.core.first(arglist__66330);
var more_children = cljs.core.rest(arglist__66330);
return G__66308__delegate(parent,child,more_children);
});
G__66308.cljs$core$IFn$_invoke$arity$variadic = G__66308__delegate;
return G__66308;
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
var prepend_BANG___2 = (function (parent,child){var G__66336 = dommy.template.__GT_node_like.call(null,parent);G__66336.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__66336;
});
var prepend_BANG___3 = (function() { 
var G__66341__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__66337_66342 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__66338_66343 = null;var count__66339_66344 = 0;var i__66340_66345 = 0;while(true){
if((i__66340_66345 < count__66339_66344))
{var c_66346 = cljs.core._nth.call(null,chunk__66338_66343,i__66340_66345);prepend_BANG_.call(null,parent__$1,c_66346);
{
var G__66347 = seq__66337_66342;
var G__66348 = chunk__66338_66343;
var G__66349 = count__66339_66344;
var G__66350 = (i__66340_66345 + 1);
seq__66337_66342 = G__66347;
chunk__66338_66343 = G__66348;
count__66339_66344 = G__66349;
i__66340_66345 = G__66350;
continue;
}
} else
{var temp__4092__auto___66351 = cljs.core.seq.call(null,seq__66337_66342);if(temp__4092__auto___66351)
{var seq__66337_66352__$1 = temp__4092__auto___66351;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66337_66352__$1))
{var c__4017__auto___66353 = cljs.core.chunk_first.call(null,seq__66337_66352__$1);{
var G__66354 = cljs.core.chunk_rest.call(null,seq__66337_66352__$1);
var G__66355 = c__4017__auto___66353;
var G__66356 = cljs.core.count.call(null,c__4017__auto___66353);
var G__66357 = 0;
seq__66337_66342 = G__66354;
chunk__66338_66343 = G__66355;
count__66339_66344 = G__66356;
i__66340_66345 = G__66357;
continue;
}
} else
{var c_66358 = cljs.core.first.call(null,seq__66337_66352__$1);prepend_BANG_.call(null,parent__$1,c_66358);
{
var G__66359 = cljs.core.next.call(null,seq__66337_66352__$1);
var G__66360 = null;
var G__66361 = 0;
var G__66362 = 0;
seq__66337_66342 = G__66359;
chunk__66338_66343 = G__66360;
count__66339_66344 = G__66361;
i__66340_66345 = G__66362;
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
var G__66341 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__66341__delegate.call(this,parent,child,more_children);};
G__66341.cljs$lang$maxFixedArity = 2;
G__66341.cljs$lang$applyTo = (function (arglist__66363){
var parent = cljs.core.first(arglist__66363);
arglist__66363 = cljs.core.next(arglist__66363);
var child = cljs.core.first(arglist__66363);
var more_children = cljs.core.rest(arglist__66363);
return G__66341__delegate(parent,child,more_children);
});
G__66341.cljs$core$IFn$_invoke$arity$variadic = G__66341__delegate;
return G__66341;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___66364 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___66364))
{var next_66365 = temp__4090__auto___66364;parent.insertBefore(actual_node,next_66365);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__66367 = dommy.template.__GT_node_like.call(null,parent);G__66367.innerHTML = "";
dommy.core.append_BANG_.call(null,G__66367,node_like);
return G__66367;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__66369 = elem__$1.parentNode;G__66369.removeChild(elem__$1);
return G__66369;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__66370_SHARP_){return p1__66370_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__66371_SHARP_){return !((p1__66371_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__66372){var vec__66373 = p__66372;var special_mouse_event = cljs.core.nth.call(null,vec__66373,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__66373,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__66374){
var elem = cljs.core.first(arglist__66374);
arglist__66374 = cljs.core.next(arglist__66374);
var f = cljs.core.first(arglist__66374);
var args = cljs.core.rest(arglist__66374);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__66375_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__66375_SHARP_));
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
var vec__66399_66422 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_66423 = cljs.core.nth.call(null,vec__66399_66422,0,null);var selector_66424 = cljs.core.nth.call(null,vec__66399_66422,1,null);var seq__66400_66425 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__66407_66426 = null;var count__66408_66427 = 0;var i__66409_66428 = 0;while(true){
if((i__66409_66428 < count__66408_66427))
{var vec__66416_66429 = cljs.core._nth.call(null,chunk__66407_66426,i__66409_66428);var orig_type_66430 = cljs.core.nth.call(null,vec__66416_66429,0,null);var f_66431 = cljs.core.nth.call(null,vec__66416_66429,1,null);var seq__66410_66432 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_66430,new cljs.core.PersistentArrayMap.fromArray([orig_type_66430,cljs.core.identity], true, false)));var chunk__66412_66433 = null;var count__66413_66434 = 0;var i__66414_66435 = 0;while(true){
if((i__66414_66435 < count__66413_66434))
{var vec__66417_66436 = cljs.core._nth.call(null,chunk__66412_66433,i__66414_66435);var actual_type_66437 = cljs.core.nth.call(null,vec__66417_66436,0,null);var factory_66438 = cljs.core.nth.call(null,vec__66417_66436,1,null);var canonical_f_66439 = (cljs.core.truth_(selector_66424)?cljs.core.partial.call(null,dommy.core.live_listener,elem_66423,selector_66424):cljs.core.identity).call(null,factory_66438.call(null,f_66431));dommy.core.update_event_listeners_BANG_.call(null,elem_66423,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_66424,actual_type_66437,f_66431], null),canonical_f_66439);
if(cljs.core.truth_(elem_66423.addEventListener))
{elem_66423.addEventListener(cljs.core.name.call(null,actual_type_66437),canonical_f_66439);
} else
{elem_66423.attachEvent(cljs.core.name.call(null,actual_type_66437),canonical_f_66439);
}
{
var G__66440 = seq__66410_66432;
var G__66441 = chunk__66412_66433;
var G__66442 = count__66413_66434;
var G__66443 = (i__66414_66435 + 1);
seq__66410_66432 = G__66440;
chunk__66412_66433 = G__66441;
count__66413_66434 = G__66442;
i__66414_66435 = G__66443;
continue;
}
} else
{var temp__4092__auto___66444 = cljs.core.seq.call(null,seq__66410_66432);if(temp__4092__auto___66444)
{var seq__66410_66445__$1 = temp__4092__auto___66444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66410_66445__$1))
{var c__4017__auto___66446 = cljs.core.chunk_first.call(null,seq__66410_66445__$1);{
var G__66447 = cljs.core.chunk_rest.call(null,seq__66410_66445__$1);
var G__66448 = c__4017__auto___66446;
var G__66449 = cljs.core.count.call(null,c__4017__auto___66446);
var G__66450 = 0;
seq__66410_66432 = G__66447;
chunk__66412_66433 = G__66448;
count__66413_66434 = G__66449;
i__66414_66435 = G__66450;
continue;
}
} else
{var vec__66418_66451 = cljs.core.first.call(null,seq__66410_66445__$1);var actual_type_66452 = cljs.core.nth.call(null,vec__66418_66451,0,null);var factory_66453 = cljs.core.nth.call(null,vec__66418_66451,1,null);var canonical_f_66454 = (cljs.core.truth_(selector_66424)?cljs.core.partial.call(null,dommy.core.live_listener,elem_66423,selector_66424):cljs.core.identity).call(null,factory_66453.call(null,f_66431));dommy.core.update_event_listeners_BANG_.call(null,elem_66423,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_66424,actual_type_66452,f_66431], null),canonical_f_66454);
if(cljs.core.truth_(elem_66423.addEventListener))
{elem_66423.addEventListener(cljs.core.name.call(null,actual_type_66452),canonical_f_66454);
} else
{elem_66423.attachEvent(cljs.core.name.call(null,actual_type_66452),canonical_f_66454);
}
{
var G__66455 = cljs.core.next.call(null,seq__66410_66445__$1);
var G__66456 = null;
var G__66457 = 0;
var G__66458 = 0;
seq__66410_66432 = G__66455;
chunk__66412_66433 = G__66456;
count__66413_66434 = G__66457;
i__66414_66435 = G__66458;
continue;
}
}
} else
{}
}
break;
}
{
var G__66459 = seq__66400_66425;
var G__66460 = chunk__66407_66426;
var G__66461 = count__66408_66427;
var G__66462 = (i__66409_66428 + 1);
seq__66400_66425 = G__66459;
chunk__66407_66426 = G__66460;
count__66408_66427 = G__66461;
i__66409_66428 = G__66462;
continue;
}
} else
{var temp__4092__auto___66463 = cljs.core.seq.call(null,seq__66400_66425);if(temp__4092__auto___66463)
{var seq__66400_66464__$1 = temp__4092__auto___66463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66400_66464__$1))
{var c__4017__auto___66465 = cljs.core.chunk_first.call(null,seq__66400_66464__$1);{
var G__66466 = cljs.core.chunk_rest.call(null,seq__66400_66464__$1);
var G__66467 = c__4017__auto___66465;
var G__66468 = cljs.core.count.call(null,c__4017__auto___66465);
var G__66469 = 0;
seq__66400_66425 = G__66466;
chunk__66407_66426 = G__66467;
count__66408_66427 = G__66468;
i__66409_66428 = G__66469;
continue;
}
} else
{var vec__66419_66470 = cljs.core.first.call(null,seq__66400_66464__$1);var orig_type_66471 = cljs.core.nth.call(null,vec__66419_66470,0,null);var f_66472 = cljs.core.nth.call(null,vec__66419_66470,1,null);var seq__66401_66473 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_66471,new cljs.core.PersistentArrayMap.fromArray([orig_type_66471,cljs.core.identity], true, false)));var chunk__66403_66474 = null;var count__66404_66475 = 0;var i__66405_66476 = 0;while(true){
if((i__66405_66476 < count__66404_66475))
{var vec__66420_66477 = cljs.core._nth.call(null,chunk__66403_66474,i__66405_66476);var actual_type_66478 = cljs.core.nth.call(null,vec__66420_66477,0,null);var factory_66479 = cljs.core.nth.call(null,vec__66420_66477,1,null);var canonical_f_66480 = (cljs.core.truth_(selector_66424)?cljs.core.partial.call(null,dommy.core.live_listener,elem_66423,selector_66424):cljs.core.identity).call(null,factory_66479.call(null,f_66472));dommy.core.update_event_listeners_BANG_.call(null,elem_66423,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_66424,actual_type_66478,f_66472], null),canonical_f_66480);
if(cljs.core.truth_(elem_66423.addEventListener))
{elem_66423.addEventListener(cljs.core.name.call(null,actual_type_66478),canonical_f_66480);
} else
{elem_66423.attachEvent(cljs.core.name.call(null,actual_type_66478),canonical_f_66480);
}
{
var G__66481 = seq__66401_66473;
var G__66482 = chunk__66403_66474;
var G__66483 = count__66404_66475;
var G__66484 = (i__66405_66476 + 1);
seq__66401_66473 = G__66481;
chunk__66403_66474 = G__66482;
count__66404_66475 = G__66483;
i__66405_66476 = G__66484;
continue;
}
} else
{var temp__4092__auto___66485__$1 = cljs.core.seq.call(null,seq__66401_66473);if(temp__4092__auto___66485__$1)
{var seq__66401_66486__$1 = temp__4092__auto___66485__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66401_66486__$1))
{var c__4017__auto___66487 = cljs.core.chunk_first.call(null,seq__66401_66486__$1);{
var G__66488 = cljs.core.chunk_rest.call(null,seq__66401_66486__$1);
var G__66489 = c__4017__auto___66487;
var G__66490 = cljs.core.count.call(null,c__4017__auto___66487);
var G__66491 = 0;
seq__66401_66473 = G__66488;
chunk__66403_66474 = G__66489;
count__66404_66475 = G__66490;
i__66405_66476 = G__66491;
continue;
}
} else
{var vec__66421_66492 = cljs.core.first.call(null,seq__66401_66486__$1);var actual_type_66493 = cljs.core.nth.call(null,vec__66421_66492,0,null);var factory_66494 = cljs.core.nth.call(null,vec__66421_66492,1,null);var canonical_f_66495 = (cljs.core.truth_(selector_66424)?cljs.core.partial.call(null,dommy.core.live_listener,elem_66423,selector_66424):cljs.core.identity).call(null,factory_66494.call(null,f_66472));dommy.core.update_event_listeners_BANG_.call(null,elem_66423,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_66424,actual_type_66493,f_66472], null),canonical_f_66495);
if(cljs.core.truth_(elem_66423.addEventListener))
{elem_66423.addEventListener(cljs.core.name.call(null,actual_type_66493),canonical_f_66495);
} else
{elem_66423.attachEvent(cljs.core.name.call(null,actual_type_66493),canonical_f_66495);
}
{
var G__66496 = cljs.core.next.call(null,seq__66401_66486__$1);
var G__66497 = null;
var G__66498 = 0;
var G__66499 = 0;
seq__66401_66473 = G__66496;
chunk__66403_66474 = G__66497;
count__66404_66475 = G__66498;
i__66405_66476 = G__66499;
continue;
}
}
} else
{}
}
break;
}
{
var G__66500 = cljs.core.next.call(null,seq__66400_66464__$1);
var G__66501 = null;
var G__66502 = 0;
var G__66503 = 0;
seq__66400_66425 = G__66500;
chunk__66407_66426 = G__66501;
count__66408_66427 = G__66502;
i__66409_66428 = G__66503;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__66504){
var elem_sel = cljs.core.first(arglist__66504);
var type_fs = cljs.core.rest(arglist__66504);
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
var vec__66528_66551 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_66552 = cljs.core.nth.call(null,vec__66528_66551,0,null);var selector_66553 = cljs.core.nth.call(null,vec__66528_66551,1,null);var seq__66529_66554 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__66536_66555 = null;var count__66537_66556 = 0;var i__66538_66557 = 0;while(true){
if((i__66538_66557 < count__66537_66556))
{var vec__66545_66558 = cljs.core._nth.call(null,chunk__66536_66555,i__66538_66557);var orig_type_66559 = cljs.core.nth.call(null,vec__66545_66558,0,null);var f_66560 = cljs.core.nth.call(null,vec__66545_66558,1,null);var seq__66539_66561 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_66559,new cljs.core.PersistentArrayMap.fromArray([orig_type_66559,cljs.core.identity], true, false)));var chunk__66541_66562 = null;var count__66542_66563 = 0;var i__66543_66564 = 0;while(true){
if((i__66543_66564 < count__66542_66563))
{var vec__66546_66565 = cljs.core._nth.call(null,chunk__66541_66562,i__66543_66564);var actual_type_66566 = cljs.core.nth.call(null,vec__66546_66565,0,null);var __66567 = cljs.core.nth.call(null,vec__66546_66565,1,null);var keys_66568 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_66553,actual_type_66566,f_66560], null);var canonical_f_66569 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_66552),keys_66568);dommy.core.update_event_listeners_BANG_.call(null,elem_66552,dommy.utils.dissoc_in,keys_66568);
if(cljs.core.truth_(elem_66552.removeEventListener))
{elem_66552.removeEventListener(cljs.core.name.call(null,actual_type_66566),canonical_f_66569);
} else
{elem_66552.detachEvent(cljs.core.name.call(null,actual_type_66566),canonical_f_66569);
}
{
var G__66570 = seq__66539_66561;
var G__66571 = chunk__66541_66562;
var G__66572 = count__66542_66563;
var G__66573 = (i__66543_66564 + 1);
seq__66539_66561 = G__66570;
chunk__66541_66562 = G__66571;
count__66542_66563 = G__66572;
i__66543_66564 = G__66573;
continue;
}
} else
{var temp__4092__auto___66574 = cljs.core.seq.call(null,seq__66539_66561);if(temp__4092__auto___66574)
{var seq__66539_66575__$1 = temp__4092__auto___66574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66539_66575__$1))
{var c__4017__auto___66576 = cljs.core.chunk_first.call(null,seq__66539_66575__$1);{
var G__66577 = cljs.core.chunk_rest.call(null,seq__66539_66575__$1);
var G__66578 = c__4017__auto___66576;
var G__66579 = cljs.core.count.call(null,c__4017__auto___66576);
var G__66580 = 0;
seq__66539_66561 = G__66577;
chunk__66541_66562 = G__66578;
count__66542_66563 = G__66579;
i__66543_66564 = G__66580;
continue;
}
} else
{var vec__66547_66581 = cljs.core.first.call(null,seq__66539_66575__$1);var actual_type_66582 = cljs.core.nth.call(null,vec__66547_66581,0,null);var __66583 = cljs.core.nth.call(null,vec__66547_66581,1,null);var keys_66584 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_66553,actual_type_66582,f_66560], null);var canonical_f_66585 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_66552),keys_66584);dommy.core.update_event_listeners_BANG_.call(null,elem_66552,dommy.utils.dissoc_in,keys_66584);
if(cljs.core.truth_(elem_66552.removeEventListener))
{elem_66552.removeEventListener(cljs.core.name.call(null,actual_type_66582),canonical_f_66585);
} else
{elem_66552.detachEvent(cljs.core.name.call(null,actual_type_66582),canonical_f_66585);
}
{
var G__66586 = cljs.core.next.call(null,seq__66539_66575__$1);
var G__66587 = null;
var G__66588 = 0;
var G__66589 = 0;
seq__66539_66561 = G__66586;
chunk__66541_66562 = G__66587;
count__66542_66563 = G__66588;
i__66543_66564 = G__66589;
continue;
}
}
} else
{}
}
break;
}
{
var G__66590 = seq__66529_66554;
var G__66591 = chunk__66536_66555;
var G__66592 = count__66537_66556;
var G__66593 = (i__66538_66557 + 1);
seq__66529_66554 = G__66590;
chunk__66536_66555 = G__66591;
count__66537_66556 = G__66592;
i__66538_66557 = G__66593;
continue;
}
} else
{var temp__4092__auto___66594 = cljs.core.seq.call(null,seq__66529_66554);if(temp__4092__auto___66594)
{var seq__66529_66595__$1 = temp__4092__auto___66594;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66529_66595__$1))
{var c__4017__auto___66596 = cljs.core.chunk_first.call(null,seq__66529_66595__$1);{
var G__66597 = cljs.core.chunk_rest.call(null,seq__66529_66595__$1);
var G__66598 = c__4017__auto___66596;
var G__66599 = cljs.core.count.call(null,c__4017__auto___66596);
var G__66600 = 0;
seq__66529_66554 = G__66597;
chunk__66536_66555 = G__66598;
count__66537_66556 = G__66599;
i__66538_66557 = G__66600;
continue;
}
} else
{var vec__66548_66601 = cljs.core.first.call(null,seq__66529_66595__$1);var orig_type_66602 = cljs.core.nth.call(null,vec__66548_66601,0,null);var f_66603 = cljs.core.nth.call(null,vec__66548_66601,1,null);var seq__66530_66604 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_66602,new cljs.core.PersistentArrayMap.fromArray([orig_type_66602,cljs.core.identity], true, false)));var chunk__66532_66605 = null;var count__66533_66606 = 0;var i__66534_66607 = 0;while(true){
if((i__66534_66607 < count__66533_66606))
{var vec__66549_66608 = cljs.core._nth.call(null,chunk__66532_66605,i__66534_66607);var actual_type_66609 = cljs.core.nth.call(null,vec__66549_66608,0,null);var __66610 = cljs.core.nth.call(null,vec__66549_66608,1,null);var keys_66611 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_66553,actual_type_66609,f_66603], null);var canonical_f_66612 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_66552),keys_66611);dommy.core.update_event_listeners_BANG_.call(null,elem_66552,dommy.utils.dissoc_in,keys_66611);
if(cljs.core.truth_(elem_66552.removeEventListener))
{elem_66552.removeEventListener(cljs.core.name.call(null,actual_type_66609),canonical_f_66612);
} else
{elem_66552.detachEvent(cljs.core.name.call(null,actual_type_66609),canonical_f_66612);
}
{
var G__66613 = seq__66530_66604;
var G__66614 = chunk__66532_66605;
var G__66615 = count__66533_66606;
var G__66616 = (i__66534_66607 + 1);
seq__66530_66604 = G__66613;
chunk__66532_66605 = G__66614;
count__66533_66606 = G__66615;
i__66534_66607 = G__66616;
continue;
}
} else
{var temp__4092__auto___66617__$1 = cljs.core.seq.call(null,seq__66530_66604);if(temp__4092__auto___66617__$1)
{var seq__66530_66618__$1 = temp__4092__auto___66617__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66530_66618__$1))
{var c__4017__auto___66619 = cljs.core.chunk_first.call(null,seq__66530_66618__$1);{
var G__66620 = cljs.core.chunk_rest.call(null,seq__66530_66618__$1);
var G__66621 = c__4017__auto___66619;
var G__66622 = cljs.core.count.call(null,c__4017__auto___66619);
var G__66623 = 0;
seq__66530_66604 = G__66620;
chunk__66532_66605 = G__66621;
count__66533_66606 = G__66622;
i__66534_66607 = G__66623;
continue;
}
} else
{var vec__66550_66624 = cljs.core.first.call(null,seq__66530_66618__$1);var actual_type_66625 = cljs.core.nth.call(null,vec__66550_66624,0,null);var __66626 = cljs.core.nth.call(null,vec__66550_66624,1,null);var keys_66627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_66553,actual_type_66625,f_66603], null);var canonical_f_66628 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_66552),keys_66627);dommy.core.update_event_listeners_BANG_.call(null,elem_66552,dommy.utils.dissoc_in,keys_66627);
if(cljs.core.truth_(elem_66552.removeEventListener))
{elem_66552.removeEventListener(cljs.core.name.call(null,actual_type_66625),canonical_f_66628);
} else
{elem_66552.detachEvent(cljs.core.name.call(null,actual_type_66625),canonical_f_66628);
}
{
var G__66629 = cljs.core.next.call(null,seq__66530_66618__$1);
var G__66630 = null;
var G__66631 = 0;
var G__66632 = 0;
seq__66530_66604 = G__66629;
chunk__66532_66605 = G__66630;
count__66533_66606 = G__66631;
i__66534_66607 = G__66632;
continue;
}
}
} else
{}
}
break;
}
{
var G__66633 = cljs.core.next.call(null,seq__66529_66595__$1);
var G__66634 = null;
var G__66635 = 0;
var G__66636 = 0;
seq__66529_66554 = G__66633;
chunk__66536_66555 = G__66634;
count__66537_66556 = G__66635;
i__66538_66557 = G__66636;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__66637){
var elem_sel = cljs.core.first(arglist__66637);
var type_fs = cljs.core.rest(arglist__66637);
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
var vec__66645_66652 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_66653 = cljs.core.nth.call(null,vec__66645_66652,0,null);var selector_66654 = cljs.core.nth.call(null,vec__66645_66652,1,null);var seq__66646_66655 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__66647_66656 = null;var count__66648_66657 = 0;var i__66649_66658 = 0;while(true){
if((i__66649_66658 < count__66648_66657))
{var vec__66650_66659 = cljs.core._nth.call(null,chunk__66647_66656,i__66649_66658);var type_66660 = cljs.core.nth.call(null,vec__66650_66659,0,null);var f_66661 = cljs.core.nth.call(null,vec__66650_66659,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_66660,((function (seq__66646_66655,chunk__66647_66656,count__66648_66657,i__66649_66658,vec__66650_66659,type_66660,f_66661){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_66660,this_fn);
return f_66661.call(null,e);
});})(seq__66646_66655,chunk__66647_66656,count__66648_66657,i__66649_66658,vec__66650_66659,type_66660,f_66661))
);
{
var G__66662 = seq__66646_66655;
var G__66663 = chunk__66647_66656;
var G__66664 = count__66648_66657;
var G__66665 = (i__66649_66658 + 1);
seq__66646_66655 = G__66662;
chunk__66647_66656 = G__66663;
count__66648_66657 = G__66664;
i__66649_66658 = G__66665;
continue;
}
} else
{var temp__4092__auto___66666 = cljs.core.seq.call(null,seq__66646_66655);if(temp__4092__auto___66666)
{var seq__66646_66667__$1 = temp__4092__auto___66666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66646_66667__$1))
{var c__4017__auto___66668 = cljs.core.chunk_first.call(null,seq__66646_66667__$1);{
var G__66669 = cljs.core.chunk_rest.call(null,seq__66646_66667__$1);
var G__66670 = c__4017__auto___66668;
var G__66671 = cljs.core.count.call(null,c__4017__auto___66668);
var G__66672 = 0;
seq__66646_66655 = G__66669;
chunk__66647_66656 = G__66670;
count__66648_66657 = G__66671;
i__66649_66658 = G__66672;
continue;
}
} else
{var vec__66651_66673 = cljs.core.first.call(null,seq__66646_66667__$1);var type_66674 = cljs.core.nth.call(null,vec__66651_66673,0,null);var f_66675 = cljs.core.nth.call(null,vec__66651_66673,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_66674,((function (seq__66646_66655,chunk__66647_66656,count__66648_66657,i__66649_66658,vec__66651_66673,type_66674,f_66675,seq__66646_66667__$1,temp__4092__auto___66666){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_66674,this_fn);
return f_66675.call(null,e);
});})(seq__66646_66655,chunk__66647_66656,count__66648_66657,i__66649_66658,vec__66651_66673,type_66674,f_66675,seq__66646_66667__$1,temp__4092__auto___66666))
);
{
var G__66676 = cljs.core.next.call(null,seq__66646_66667__$1);
var G__66677 = null;
var G__66678 = 0;
var G__66679 = 0;
seq__66646_66655 = G__66676;
chunk__66647_66656 = G__66677;
count__66648_66657 = G__66678;
i__66649_66658 = G__66679;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__66680){
var elem_sel = cljs.core.first(arglist__66680);
var type_fs = cljs.core.rest(arglist__66680);
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
var fire_BANG___delegate = function (node,event_type,p__66681){var vec__66683 = p__66681;var update_event_BANG_ = cljs.core.nth.call(null,vec__66683,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__66681 = null;if (arguments.length > 2) {
  p__66681 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__66681);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__66684){
var node = cljs.core.first(arglist__66684);
arglist__66684 = cljs.core.next(arglist__66684);
var event_type = cljs.core.first(arglist__66684);
var p__66681 = cljs.core.rest(arglist__66684);
return fire_BANG___delegate(node,event_type,p__66681);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
