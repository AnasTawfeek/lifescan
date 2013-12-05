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
var append_BANG___2 = (function (parent,child){var G__35149 = dommy.template.__GT_node_like.call(null,parent);G__35149.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__35149;
});
var append_BANG___3 = (function() { 
var G__35154__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__35150_35155 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__35151_35156 = null;var count__35152_35157 = 0;var i__35153_35158 = 0;while(true){
if((i__35153_35158 < count__35152_35157))
{var c_35159 = cljs.core._nth.call(null,chunk__35151_35156,i__35153_35158);append_BANG_.call(null,parent__$1,c_35159);
{
var G__35160 = seq__35150_35155;
var G__35161 = chunk__35151_35156;
var G__35162 = count__35152_35157;
var G__35163 = (i__35153_35158 + 1);
seq__35150_35155 = G__35160;
chunk__35151_35156 = G__35161;
count__35152_35157 = G__35162;
i__35153_35158 = G__35163;
continue;
}
} else
{var temp__4092__auto___35164 = cljs.core.seq.call(null,seq__35150_35155);if(temp__4092__auto___35164)
{var seq__35150_35165__$1 = temp__4092__auto___35164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35150_35165__$1))
{var c__4017__auto___35166 = cljs.core.chunk_first.call(null,seq__35150_35165__$1);{
var G__35167 = cljs.core.chunk_rest.call(null,seq__35150_35165__$1);
var G__35168 = c__4017__auto___35166;
var G__35169 = cljs.core.count.call(null,c__4017__auto___35166);
var G__35170 = 0;
seq__35150_35155 = G__35167;
chunk__35151_35156 = G__35168;
count__35152_35157 = G__35169;
i__35153_35158 = G__35170;
continue;
}
} else
{var c_35171 = cljs.core.first.call(null,seq__35150_35165__$1);append_BANG_.call(null,parent__$1,c_35171);
{
var G__35172 = cljs.core.next.call(null,seq__35150_35165__$1);
var G__35173 = null;
var G__35174 = 0;
var G__35175 = 0;
seq__35150_35155 = G__35172;
chunk__35151_35156 = G__35173;
count__35152_35157 = G__35174;
i__35153_35158 = G__35175;
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
var G__35154 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35154__delegate.call(this,parent,child,more_children);};
G__35154.cljs$lang$maxFixedArity = 2;
G__35154.cljs$lang$applyTo = (function (arglist__35176){
var parent = cljs.core.first(arglist__35176);
arglist__35176 = cljs.core.next(arglist__35176);
var child = cljs.core.first(arglist__35176);
var more_children = cljs.core.rest(arglist__35176);
return G__35154__delegate(parent,child,more_children);
});
G__35154.cljs$core$IFn$_invoke$arity$variadic = G__35154__delegate;
return G__35154;
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
var prepend_BANG___2 = (function (parent,child){var G__35182 = dommy.template.__GT_node_like.call(null,parent);G__35182.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__35182;
});
var prepend_BANG___3 = (function() { 
var G__35187__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__35183_35188 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__35184_35189 = null;var count__35185_35190 = 0;var i__35186_35191 = 0;while(true){
if((i__35186_35191 < count__35185_35190))
{var c_35192 = cljs.core._nth.call(null,chunk__35184_35189,i__35186_35191);prepend_BANG_.call(null,parent__$1,c_35192);
{
var G__35193 = seq__35183_35188;
var G__35194 = chunk__35184_35189;
var G__35195 = count__35185_35190;
var G__35196 = (i__35186_35191 + 1);
seq__35183_35188 = G__35193;
chunk__35184_35189 = G__35194;
count__35185_35190 = G__35195;
i__35186_35191 = G__35196;
continue;
}
} else
{var temp__4092__auto___35197 = cljs.core.seq.call(null,seq__35183_35188);if(temp__4092__auto___35197)
{var seq__35183_35198__$1 = temp__4092__auto___35197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35183_35198__$1))
{var c__4017__auto___35199 = cljs.core.chunk_first.call(null,seq__35183_35198__$1);{
var G__35200 = cljs.core.chunk_rest.call(null,seq__35183_35198__$1);
var G__35201 = c__4017__auto___35199;
var G__35202 = cljs.core.count.call(null,c__4017__auto___35199);
var G__35203 = 0;
seq__35183_35188 = G__35200;
chunk__35184_35189 = G__35201;
count__35185_35190 = G__35202;
i__35186_35191 = G__35203;
continue;
}
} else
{var c_35204 = cljs.core.first.call(null,seq__35183_35198__$1);prepend_BANG_.call(null,parent__$1,c_35204);
{
var G__35205 = cljs.core.next.call(null,seq__35183_35198__$1);
var G__35206 = null;
var G__35207 = 0;
var G__35208 = 0;
seq__35183_35188 = G__35205;
chunk__35184_35189 = G__35206;
count__35185_35190 = G__35207;
i__35186_35191 = G__35208;
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
var G__35187 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35187__delegate.call(this,parent,child,more_children);};
G__35187.cljs$lang$maxFixedArity = 2;
G__35187.cljs$lang$applyTo = (function (arglist__35209){
var parent = cljs.core.first(arglist__35209);
arglist__35209 = cljs.core.next(arglist__35209);
var child = cljs.core.first(arglist__35209);
var more_children = cljs.core.rest(arglist__35209);
return G__35187__delegate(parent,child,more_children);
});
G__35187.cljs$core$IFn$_invoke$arity$variadic = G__35187__delegate;
return G__35187;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___35210 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___35210))
{var next_35211 = temp__4090__auto___35210;parent.insertBefore(actual_node,next_35211);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__35213 = dommy.template.__GT_node_like.call(null,parent);G__35213.innerHTML = "";
dommy.core.append_BANG_.call(null,G__35213,node_like);
return G__35213;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__35215 = elem__$1.parentNode;G__35215.removeChild(elem__$1);
return G__35215;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__35216_SHARP_){return p1__35216_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__35217_SHARP_){return !((p1__35217_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35218){var vec__35219 = p__35218;var special_mouse_event = cljs.core.nth.call(null,vec__35219,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__35219,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__35220){
var elem = cljs.core.first(arglist__35220);
arglist__35220 = cljs.core.next(arglist__35220);
var f = cljs.core.first(arglist__35220);
var args = cljs.core.rest(arglist__35220);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__35221_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__35221_SHARP_));
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
var vec__35245_35268 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35269 = cljs.core.nth.call(null,vec__35245_35268,0,null);var selector_35270 = cljs.core.nth.call(null,vec__35245_35268,1,null);var seq__35246_35271 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35253_35272 = null;var count__35254_35273 = 0;var i__35255_35274 = 0;while(true){
if((i__35255_35274 < count__35254_35273))
{var vec__35262_35275 = cljs.core._nth.call(null,chunk__35253_35272,i__35255_35274);var orig_type_35276 = cljs.core.nth.call(null,vec__35262_35275,0,null);var f_35277 = cljs.core.nth.call(null,vec__35262_35275,1,null);var seq__35256_35278 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35276,new cljs.core.PersistentArrayMap.fromArray([orig_type_35276,cljs.core.identity], true, false)));var chunk__35258_35279 = null;var count__35259_35280 = 0;var i__35260_35281 = 0;while(true){
if((i__35260_35281 < count__35259_35280))
{var vec__35263_35282 = cljs.core._nth.call(null,chunk__35258_35279,i__35260_35281);var actual_type_35283 = cljs.core.nth.call(null,vec__35263_35282,0,null);var factory_35284 = cljs.core.nth.call(null,vec__35263_35282,1,null);var canonical_f_35285 = (cljs.core.truth_(selector_35270)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35269,selector_35270):cljs.core.identity).call(null,factory_35284.call(null,f_35277));dommy.core.update_event_listeners_BANG_.call(null,elem_35269,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35270,actual_type_35283,f_35277], null),canonical_f_35285);
if(cljs.core.truth_(elem_35269.addEventListener))
{elem_35269.addEventListener(cljs.core.name.call(null,actual_type_35283),canonical_f_35285);
} else
{elem_35269.attachEvent(cljs.core.name.call(null,actual_type_35283),canonical_f_35285);
}
{
var G__35286 = seq__35256_35278;
var G__35287 = chunk__35258_35279;
var G__35288 = count__35259_35280;
var G__35289 = (i__35260_35281 + 1);
seq__35256_35278 = G__35286;
chunk__35258_35279 = G__35287;
count__35259_35280 = G__35288;
i__35260_35281 = G__35289;
continue;
}
} else
{var temp__4092__auto___35290 = cljs.core.seq.call(null,seq__35256_35278);if(temp__4092__auto___35290)
{var seq__35256_35291__$1 = temp__4092__auto___35290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35256_35291__$1))
{var c__4017__auto___35292 = cljs.core.chunk_first.call(null,seq__35256_35291__$1);{
var G__35293 = cljs.core.chunk_rest.call(null,seq__35256_35291__$1);
var G__35294 = c__4017__auto___35292;
var G__35295 = cljs.core.count.call(null,c__4017__auto___35292);
var G__35296 = 0;
seq__35256_35278 = G__35293;
chunk__35258_35279 = G__35294;
count__35259_35280 = G__35295;
i__35260_35281 = G__35296;
continue;
}
} else
{var vec__35264_35297 = cljs.core.first.call(null,seq__35256_35291__$1);var actual_type_35298 = cljs.core.nth.call(null,vec__35264_35297,0,null);var factory_35299 = cljs.core.nth.call(null,vec__35264_35297,1,null);var canonical_f_35300 = (cljs.core.truth_(selector_35270)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35269,selector_35270):cljs.core.identity).call(null,factory_35299.call(null,f_35277));dommy.core.update_event_listeners_BANG_.call(null,elem_35269,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35270,actual_type_35298,f_35277], null),canonical_f_35300);
if(cljs.core.truth_(elem_35269.addEventListener))
{elem_35269.addEventListener(cljs.core.name.call(null,actual_type_35298),canonical_f_35300);
} else
{elem_35269.attachEvent(cljs.core.name.call(null,actual_type_35298),canonical_f_35300);
}
{
var G__35301 = cljs.core.next.call(null,seq__35256_35291__$1);
var G__35302 = null;
var G__35303 = 0;
var G__35304 = 0;
seq__35256_35278 = G__35301;
chunk__35258_35279 = G__35302;
count__35259_35280 = G__35303;
i__35260_35281 = G__35304;
continue;
}
}
} else
{}
}
break;
}
{
var G__35305 = seq__35246_35271;
var G__35306 = chunk__35253_35272;
var G__35307 = count__35254_35273;
var G__35308 = (i__35255_35274 + 1);
seq__35246_35271 = G__35305;
chunk__35253_35272 = G__35306;
count__35254_35273 = G__35307;
i__35255_35274 = G__35308;
continue;
}
} else
{var temp__4092__auto___35309 = cljs.core.seq.call(null,seq__35246_35271);if(temp__4092__auto___35309)
{var seq__35246_35310__$1 = temp__4092__auto___35309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35246_35310__$1))
{var c__4017__auto___35311 = cljs.core.chunk_first.call(null,seq__35246_35310__$1);{
var G__35312 = cljs.core.chunk_rest.call(null,seq__35246_35310__$1);
var G__35313 = c__4017__auto___35311;
var G__35314 = cljs.core.count.call(null,c__4017__auto___35311);
var G__35315 = 0;
seq__35246_35271 = G__35312;
chunk__35253_35272 = G__35313;
count__35254_35273 = G__35314;
i__35255_35274 = G__35315;
continue;
}
} else
{var vec__35265_35316 = cljs.core.first.call(null,seq__35246_35310__$1);var orig_type_35317 = cljs.core.nth.call(null,vec__35265_35316,0,null);var f_35318 = cljs.core.nth.call(null,vec__35265_35316,1,null);var seq__35247_35319 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35317,new cljs.core.PersistentArrayMap.fromArray([orig_type_35317,cljs.core.identity], true, false)));var chunk__35249_35320 = null;var count__35250_35321 = 0;var i__35251_35322 = 0;while(true){
if((i__35251_35322 < count__35250_35321))
{var vec__35266_35323 = cljs.core._nth.call(null,chunk__35249_35320,i__35251_35322);var actual_type_35324 = cljs.core.nth.call(null,vec__35266_35323,0,null);var factory_35325 = cljs.core.nth.call(null,vec__35266_35323,1,null);var canonical_f_35326 = (cljs.core.truth_(selector_35270)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35269,selector_35270):cljs.core.identity).call(null,factory_35325.call(null,f_35318));dommy.core.update_event_listeners_BANG_.call(null,elem_35269,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35270,actual_type_35324,f_35318], null),canonical_f_35326);
if(cljs.core.truth_(elem_35269.addEventListener))
{elem_35269.addEventListener(cljs.core.name.call(null,actual_type_35324),canonical_f_35326);
} else
{elem_35269.attachEvent(cljs.core.name.call(null,actual_type_35324),canonical_f_35326);
}
{
var G__35327 = seq__35247_35319;
var G__35328 = chunk__35249_35320;
var G__35329 = count__35250_35321;
var G__35330 = (i__35251_35322 + 1);
seq__35247_35319 = G__35327;
chunk__35249_35320 = G__35328;
count__35250_35321 = G__35329;
i__35251_35322 = G__35330;
continue;
}
} else
{var temp__4092__auto___35331__$1 = cljs.core.seq.call(null,seq__35247_35319);if(temp__4092__auto___35331__$1)
{var seq__35247_35332__$1 = temp__4092__auto___35331__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35247_35332__$1))
{var c__4017__auto___35333 = cljs.core.chunk_first.call(null,seq__35247_35332__$1);{
var G__35334 = cljs.core.chunk_rest.call(null,seq__35247_35332__$1);
var G__35335 = c__4017__auto___35333;
var G__35336 = cljs.core.count.call(null,c__4017__auto___35333);
var G__35337 = 0;
seq__35247_35319 = G__35334;
chunk__35249_35320 = G__35335;
count__35250_35321 = G__35336;
i__35251_35322 = G__35337;
continue;
}
} else
{var vec__35267_35338 = cljs.core.first.call(null,seq__35247_35332__$1);var actual_type_35339 = cljs.core.nth.call(null,vec__35267_35338,0,null);var factory_35340 = cljs.core.nth.call(null,vec__35267_35338,1,null);var canonical_f_35341 = (cljs.core.truth_(selector_35270)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35269,selector_35270):cljs.core.identity).call(null,factory_35340.call(null,f_35318));dommy.core.update_event_listeners_BANG_.call(null,elem_35269,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35270,actual_type_35339,f_35318], null),canonical_f_35341);
if(cljs.core.truth_(elem_35269.addEventListener))
{elem_35269.addEventListener(cljs.core.name.call(null,actual_type_35339),canonical_f_35341);
} else
{elem_35269.attachEvent(cljs.core.name.call(null,actual_type_35339),canonical_f_35341);
}
{
var G__35342 = cljs.core.next.call(null,seq__35247_35332__$1);
var G__35343 = null;
var G__35344 = 0;
var G__35345 = 0;
seq__35247_35319 = G__35342;
chunk__35249_35320 = G__35343;
count__35250_35321 = G__35344;
i__35251_35322 = G__35345;
continue;
}
}
} else
{}
}
break;
}
{
var G__35346 = cljs.core.next.call(null,seq__35246_35310__$1);
var G__35347 = null;
var G__35348 = 0;
var G__35349 = 0;
seq__35246_35271 = G__35346;
chunk__35253_35272 = G__35347;
count__35254_35273 = G__35348;
i__35255_35274 = G__35349;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__35350){
var elem_sel = cljs.core.first(arglist__35350);
var type_fs = cljs.core.rest(arglist__35350);
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
var vec__35374_35397 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35398 = cljs.core.nth.call(null,vec__35374_35397,0,null);var selector_35399 = cljs.core.nth.call(null,vec__35374_35397,1,null);var seq__35375_35400 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35382_35401 = null;var count__35383_35402 = 0;var i__35384_35403 = 0;while(true){
if((i__35384_35403 < count__35383_35402))
{var vec__35391_35404 = cljs.core._nth.call(null,chunk__35382_35401,i__35384_35403);var orig_type_35405 = cljs.core.nth.call(null,vec__35391_35404,0,null);var f_35406 = cljs.core.nth.call(null,vec__35391_35404,1,null);var seq__35385_35407 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35405,new cljs.core.PersistentArrayMap.fromArray([orig_type_35405,cljs.core.identity], true, false)));var chunk__35387_35408 = null;var count__35388_35409 = 0;var i__35389_35410 = 0;while(true){
if((i__35389_35410 < count__35388_35409))
{var vec__35392_35411 = cljs.core._nth.call(null,chunk__35387_35408,i__35389_35410);var actual_type_35412 = cljs.core.nth.call(null,vec__35392_35411,0,null);var __35413 = cljs.core.nth.call(null,vec__35392_35411,1,null);var keys_35414 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35399,actual_type_35412,f_35406], null);var canonical_f_35415 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35398),keys_35414);dommy.core.update_event_listeners_BANG_.call(null,elem_35398,dommy.utils.dissoc_in,keys_35414);
if(cljs.core.truth_(elem_35398.removeEventListener))
{elem_35398.removeEventListener(cljs.core.name.call(null,actual_type_35412),canonical_f_35415);
} else
{elem_35398.detachEvent(cljs.core.name.call(null,actual_type_35412),canonical_f_35415);
}
{
var G__35416 = seq__35385_35407;
var G__35417 = chunk__35387_35408;
var G__35418 = count__35388_35409;
var G__35419 = (i__35389_35410 + 1);
seq__35385_35407 = G__35416;
chunk__35387_35408 = G__35417;
count__35388_35409 = G__35418;
i__35389_35410 = G__35419;
continue;
}
} else
{var temp__4092__auto___35420 = cljs.core.seq.call(null,seq__35385_35407);if(temp__4092__auto___35420)
{var seq__35385_35421__$1 = temp__4092__auto___35420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35385_35421__$1))
{var c__4017__auto___35422 = cljs.core.chunk_first.call(null,seq__35385_35421__$1);{
var G__35423 = cljs.core.chunk_rest.call(null,seq__35385_35421__$1);
var G__35424 = c__4017__auto___35422;
var G__35425 = cljs.core.count.call(null,c__4017__auto___35422);
var G__35426 = 0;
seq__35385_35407 = G__35423;
chunk__35387_35408 = G__35424;
count__35388_35409 = G__35425;
i__35389_35410 = G__35426;
continue;
}
} else
{var vec__35393_35427 = cljs.core.first.call(null,seq__35385_35421__$1);var actual_type_35428 = cljs.core.nth.call(null,vec__35393_35427,0,null);var __35429 = cljs.core.nth.call(null,vec__35393_35427,1,null);var keys_35430 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35399,actual_type_35428,f_35406], null);var canonical_f_35431 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35398),keys_35430);dommy.core.update_event_listeners_BANG_.call(null,elem_35398,dommy.utils.dissoc_in,keys_35430);
if(cljs.core.truth_(elem_35398.removeEventListener))
{elem_35398.removeEventListener(cljs.core.name.call(null,actual_type_35428),canonical_f_35431);
} else
{elem_35398.detachEvent(cljs.core.name.call(null,actual_type_35428),canonical_f_35431);
}
{
var G__35432 = cljs.core.next.call(null,seq__35385_35421__$1);
var G__35433 = null;
var G__35434 = 0;
var G__35435 = 0;
seq__35385_35407 = G__35432;
chunk__35387_35408 = G__35433;
count__35388_35409 = G__35434;
i__35389_35410 = G__35435;
continue;
}
}
} else
{}
}
break;
}
{
var G__35436 = seq__35375_35400;
var G__35437 = chunk__35382_35401;
var G__35438 = count__35383_35402;
var G__35439 = (i__35384_35403 + 1);
seq__35375_35400 = G__35436;
chunk__35382_35401 = G__35437;
count__35383_35402 = G__35438;
i__35384_35403 = G__35439;
continue;
}
} else
{var temp__4092__auto___35440 = cljs.core.seq.call(null,seq__35375_35400);if(temp__4092__auto___35440)
{var seq__35375_35441__$1 = temp__4092__auto___35440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35375_35441__$1))
{var c__4017__auto___35442 = cljs.core.chunk_first.call(null,seq__35375_35441__$1);{
var G__35443 = cljs.core.chunk_rest.call(null,seq__35375_35441__$1);
var G__35444 = c__4017__auto___35442;
var G__35445 = cljs.core.count.call(null,c__4017__auto___35442);
var G__35446 = 0;
seq__35375_35400 = G__35443;
chunk__35382_35401 = G__35444;
count__35383_35402 = G__35445;
i__35384_35403 = G__35446;
continue;
}
} else
{var vec__35394_35447 = cljs.core.first.call(null,seq__35375_35441__$1);var orig_type_35448 = cljs.core.nth.call(null,vec__35394_35447,0,null);var f_35449 = cljs.core.nth.call(null,vec__35394_35447,1,null);var seq__35376_35450 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35448,new cljs.core.PersistentArrayMap.fromArray([orig_type_35448,cljs.core.identity], true, false)));var chunk__35378_35451 = null;var count__35379_35452 = 0;var i__35380_35453 = 0;while(true){
if((i__35380_35453 < count__35379_35452))
{var vec__35395_35454 = cljs.core._nth.call(null,chunk__35378_35451,i__35380_35453);var actual_type_35455 = cljs.core.nth.call(null,vec__35395_35454,0,null);var __35456 = cljs.core.nth.call(null,vec__35395_35454,1,null);var keys_35457 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35399,actual_type_35455,f_35449], null);var canonical_f_35458 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35398),keys_35457);dommy.core.update_event_listeners_BANG_.call(null,elem_35398,dommy.utils.dissoc_in,keys_35457);
if(cljs.core.truth_(elem_35398.removeEventListener))
{elem_35398.removeEventListener(cljs.core.name.call(null,actual_type_35455),canonical_f_35458);
} else
{elem_35398.detachEvent(cljs.core.name.call(null,actual_type_35455),canonical_f_35458);
}
{
var G__35459 = seq__35376_35450;
var G__35460 = chunk__35378_35451;
var G__35461 = count__35379_35452;
var G__35462 = (i__35380_35453 + 1);
seq__35376_35450 = G__35459;
chunk__35378_35451 = G__35460;
count__35379_35452 = G__35461;
i__35380_35453 = G__35462;
continue;
}
} else
{var temp__4092__auto___35463__$1 = cljs.core.seq.call(null,seq__35376_35450);if(temp__4092__auto___35463__$1)
{var seq__35376_35464__$1 = temp__4092__auto___35463__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35376_35464__$1))
{var c__4017__auto___35465 = cljs.core.chunk_first.call(null,seq__35376_35464__$1);{
var G__35466 = cljs.core.chunk_rest.call(null,seq__35376_35464__$1);
var G__35467 = c__4017__auto___35465;
var G__35468 = cljs.core.count.call(null,c__4017__auto___35465);
var G__35469 = 0;
seq__35376_35450 = G__35466;
chunk__35378_35451 = G__35467;
count__35379_35452 = G__35468;
i__35380_35453 = G__35469;
continue;
}
} else
{var vec__35396_35470 = cljs.core.first.call(null,seq__35376_35464__$1);var actual_type_35471 = cljs.core.nth.call(null,vec__35396_35470,0,null);var __35472 = cljs.core.nth.call(null,vec__35396_35470,1,null);var keys_35473 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35399,actual_type_35471,f_35449], null);var canonical_f_35474 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35398),keys_35473);dommy.core.update_event_listeners_BANG_.call(null,elem_35398,dommy.utils.dissoc_in,keys_35473);
if(cljs.core.truth_(elem_35398.removeEventListener))
{elem_35398.removeEventListener(cljs.core.name.call(null,actual_type_35471),canonical_f_35474);
} else
{elem_35398.detachEvent(cljs.core.name.call(null,actual_type_35471),canonical_f_35474);
}
{
var G__35475 = cljs.core.next.call(null,seq__35376_35464__$1);
var G__35476 = null;
var G__35477 = 0;
var G__35478 = 0;
seq__35376_35450 = G__35475;
chunk__35378_35451 = G__35476;
count__35379_35452 = G__35477;
i__35380_35453 = G__35478;
continue;
}
}
} else
{}
}
break;
}
{
var G__35479 = cljs.core.next.call(null,seq__35375_35441__$1);
var G__35480 = null;
var G__35481 = 0;
var G__35482 = 0;
seq__35375_35400 = G__35479;
chunk__35382_35401 = G__35480;
count__35383_35402 = G__35481;
i__35384_35403 = G__35482;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__35483){
var elem_sel = cljs.core.first(arglist__35483);
var type_fs = cljs.core.rest(arglist__35483);
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
var vec__35491_35498 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35499 = cljs.core.nth.call(null,vec__35491_35498,0,null);var selector_35500 = cljs.core.nth.call(null,vec__35491_35498,1,null);var seq__35492_35501 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35493_35502 = null;var count__35494_35503 = 0;var i__35495_35504 = 0;while(true){
if((i__35495_35504 < count__35494_35503))
{var vec__35496_35505 = cljs.core._nth.call(null,chunk__35493_35502,i__35495_35504);var type_35506 = cljs.core.nth.call(null,vec__35496_35505,0,null);var f_35507 = cljs.core.nth.call(null,vec__35496_35505,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_35506,((function (seq__35492_35501,chunk__35493_35502,count__35494_35503,i__35495_35504,vec__35496_35505,type_35506,f_35507){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_35506,this_fn);
return f_35507.call(null,e);
});})(seq__35492_35501,chunk__35493_35502,count__35494_35503,i__35495_35504,vec__35496_35505,type_35506,f_35507))
);
{
var G__35508 = seq__35492_35501;
var G__35509 = chunk__35493_35502;
var G__35510 = count__35494_35503;
var G__35511 = (i__35495_35504 + 1);
seq__35492_35501 = G__35508;
chunk__35493_35502 = G__35509;
count__35494_35503 = G__35510;
i__35495_35504 = G__35511;
continue;
}
} else
{var temp__4092__auto___35512 = cljs.core.seq.call(null,seq__35492_35501);if(temp__4092__auto___35512)
{var seq__35492_35513__$1 = temp__4092__auto___35512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35492_35513__$1))
{var c__4017__auto___35514 = cljs.core.chunk_first.call(null,seq__35492_35513__$1);{
var G__35515 = cljs.core.chunk_rest.call(null,seq__35492_35513__$1);
var G__35516 = c__4017__auto___35514;
var G__35517 = cljs.core.count.call(null,c__4017__auto___35514);
var G__35518 = 0;
seq__35492_35501 = G__35515;
chunk__35493_35502 = G__35516;
count__35494_35503 = G__35517;
i__35495_35504 = G__35518;
continue;
}
} else
{var vec__35497_35519 = cljs.core.first.call(null,seq__35492_35513__$1);var type_35520 = cljs.core.nth.call(null,vec__35497_35519,0,null);var f_35521 = cljs.core.nth.call(null,vec__35497_35519,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_35520,((function (seq__35492_35501,chunk__35493_35502,count__35494_35503,i__35495_35504,vec__35497_35519,type_35520,f_35521,seq__35492_35513__$1,temp__4092__auto___35512){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_35520,this_fn);
return f_35521.call(null,e);
});})(seq__35492_35501,chunk__35493_35502,count__35494_35503,i__35495_35504,vec__35497_35519,type_35520,f_35521,seq__35492_35513__$1,temp__4092__auto___35512))
);
{
var G__35522 = cljs.core.next.call(null,seq__35492_35513__$1);
var G__35523 = null;
var G__35524 = 0;
var G__35525 = 0;
seq__35492_35501 = G__35522;
chunk__35493_35502 = G__35523;
count__35494_35503 = G__35524;
i__35495_35504 = G__35525;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__35526){
var elem_sel = cljs.core.first(arglist__35526);
var type_fs = cljs.core.rest(arglist__35526);
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
var fire_BANG___delegate = function (node,event_type,p__35527){var vec__35529 = p__35527;var update_event_BANG_ = cljs.core.nth.call(null,vec__35529,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__35527 = null;if (arguments.length > 2) {
  p__35527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__35527);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__35530){
var node = cljs.core.first(arglist__35530);
arglist__35530 = cljs.core.next(arglist__35530);
var event_type = cljs.core.first(arglist__35530);
var p__35527 = cljs.core.rest(arglist__35530);
return fire_BANG___delegate(node,event_type,p__35527);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
