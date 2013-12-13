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
var append_BANG___2 = (function (parent,child){var G__288114 = dommy.template.__GT_node_like.call(null,parent);G__288114.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__288114;
});
var append_BANG___3 = (function() { 
var G__288119__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__288115_288120 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__288116_288121 = null;var count__288117_288122 = 0;var i__288118_288123 = 0;while(true){
if((i__288118_288123 < count__288117_288122))
{var c_288124 = cljs.core._nth.call(null,chunk__288116_288121,i__288118_288123);append_BANG_.call(null,parent__$1,c_288124);
{
var G__288125 = seq__288115_288120;
var G__288126 = chunk__288116_288121;
var G__288127 = count__288117_288122;
var G__288128 = (i__288118_288123 + 1);
seq__288115_288120 = G__288125;
chunk__288116_288121 = G__288126;
count__288117_288122 = G__288127;
i__288118_288123 = G__288128;
continue;
}
} else
{var temp__4092__auto___288129 = cljs.core.seq.call(null,seq__288115_288120);if(temp__4092__auto___288129)
{var seq__288115_288130__$1 = temp__4092__auto___288129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288115_288130__$1))
{var c__4017__auto___288131 = cljs.core.chunk_first.call(null,seq__288115_288130__$1);{
var G__288132 = cljs.core.chunk_rest.call(null,seq__288115_288130__$1);
var G__288133 = c__4017__auto___288131;
var G__288134 = cljs.core.count.call(null,c__4017__auto___288131);
var G__288135 = 0;
seq__288115_288120 = G__288132;
chunk__288116_288121 = G__288133;
count__288117_288122 = G__288134;
i__288118_288123 = G__288135;
continue;
}
} else
{var c_288136 = cljs.core.first.call(null,seq__288115_288130__$1);append_BANG_.call(null,parent__$1,c_288136);
{
var G__288137 = cljs.core.next.call(null,seq__288115_288130__$1);
var G__288138 = null;
var G__288139 = 0;
var G__288140 = 0;
seq__288115_288120 = G__288137;
chunk__288116_288121 = G__288138;
count__288117_288122 = G__288139;
i__288118_288123 = G__288140;
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
var G__288119 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__288119__delegate.call(this,parent,child,more_children);};
G__288119.cljs$lang$maxFixedArity = 2;
G__288119.cljs$lang$applyTo = (function (arglist__288141){
var parent = cljs.core.first(arglist__288141);
arglist__288141 = cljs.core.next(arglist__288141);
var child = cljs.core.first(arglist__288141);
var more_children = cljs.core.rest(arglist__288141);
return G__288119__delegate(parent,child,more_children);
});
G__288119.cljs$core$IFn$_invoke$arity$variadic = G__288119__delegate;
return G__288119;
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
var prepend_BANG___2 = (function (parent,child){var G__288147 = dommy.template.__GT_node_like.call(null,parent);G__288147.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__288147;
});
var prepend_BANG___3 = (function() { 
var G__288152__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__288148_288153 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__288149_288154 = null;var count__288150_288155 = 0;var i__288151_288156 = 0;while(true){
if((i__288151_288156 < count__288150_288155))
{var c_288157 = cljs.core._nth.call(null,chunk__288149_288154,i__288151_288156);prepend_BANG_.call(null,parent__$1,c_288157);
{
var G__288158 = seq__288148_288153;
var G__288159 = chunk__288149_288154;
var G__288160 = count__288150_288155;
var G__288161 = (i__288151_288156 + 1);
seq__288148_288153 = G__288158;
chunk__288149_288154 = G__288159;
count__288150_288155 = G__288160;
i__288151_288156 = G__288161;
continue;
}
} else
{var temp__4092__auto___288162 = cljs.core.seq.call(null,seq__288148_288153);if(temp__4092__auto___288162)
{var seq__288148_288163__$1 = temp__4092__auto___288162;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288148_288163__$1))
{var c__4017__auto___288164 = cljs.core.chunk_first.call(null,seq__288148_288163__$1);{
var G__288165 = cljs.core.chunk_rest.call(null,seq__288148_288163__$1);
var G__288166 = c__4017__auto___288164;
var G__288167 = cljs.core.count.call(null,c__4017__auto___288164);
var G__288168 = 0;
seq__288148_288153 = G__288165;
chunk__288149_288154 = G__288166;
count__288150_288155 = G__288167;
i__288151_288156 = G__288168;
continue;
}
} else
{var c_288169 = cljs.core.first.call(null,seq__288148_288163__$1);prepend_BANG_.call(null,parent__$1,c_288169);
{
var G__288170 = cljs.core.next.call(null,seq__288148_288163__$1);
var G__288171 = null;
var G__288172 = 0;
var G__288173 = 0;
seq__288148_288153 = G__288170;
chunk__288149_288154 = G__288171;
count__288150_288155 = G__288172;
i__288151_288156 = G__288173;
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
var G__288152 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__288152__delegate.call(this,parent,child,more_children);};
G__288152.cljs$lang$maxFixedArity = 2;
G__288152.cljs$lang$applyTo = (function (arglist__288174){
var parent = cljs.core.first(arglist__288174);
arglist__288174 = cljs.core.next(arglist__288174);
var child = cljs.core.first(arglist__288174);
var more_children = cljs.core.rest(arglist__288174);
return G__288152__delegate(parent,child,more_children);
});
G__288152.cljs$core$IFn$_invoke$arity$variadic = G__288152__delegate;
return G__288152;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___288175 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___288175))
{var next_288176 = temp__4090__auto___288175;parent.insertBefore(actual_node,next_288176);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__288178 = dommy.template.__GT_node_like.call(null,parent);G__288178.innerHTML = "";
dommy.core.append_BANG_.call(null,G__288178,node_like);
return G__288178;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__288180 = elem__$1.parentNode;G__288180.removeChild(elem__$1);
return G__288180;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__288181_SHARP_){return p1__288181_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__288182_SHARP_){return !((p1__288182_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__288183){var vec__288184 = p__288183;var special_mouse_event = cljs.core.nth.call(null,vec__288184,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__288184,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__288185){
var elem = cljs.core.first(arglist__288185);
arglist__288185 = cljs.core.next(arglist__288185);
var f = cljs.core.first(arglist__288185);
var args = cljs.core.rest(arglist__288185);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__288186_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__288186_SHARP_));
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
var vec__288210_288233 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_288234 = cljs.core.nth.call(null,vec__288210_288233,0,null);var selector_288235 = cljs.core.nth.call(null,vec__288210_288233,1,null);var seq__288211_288236 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__288218_288237 = null;var count__288219_288238 = 0;var i__288220_288239 = 0;while(true){
if((i__288220_288239 < count__288219_288238))
{var vec__288227_288240 = cljs.core._nth.call(null,chunk__288218_288237,i__288220_288239);var orig_type_288241 = cljs.core.nth.call(null,vec__288227_288240,0,null);var f_288242 = cljs.core.nth.call(null,vec__288227_288240,1,null);var seq__288221_288243 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_288241,new cljs.core.PersistentArrayMap.fromArray([orig_type_288241,cljs.core.identity], true, false)));var chunk__288223_288244 = null;var count__288224_288245 = 0;var i__288225_288246 = 0;while(true){
if((i__288225_288246 < count__288224_288245))
{var vec__288228_288247 = cljs.core._nth.call(null,chunk__288223_288244,i__288225_288246);var actual_type_288248 = cljs.core.nth.call(null,vec__288228_288247,0,null);var factory_288249 = cljs.core.nth.call(null,vec__288228_288247,1,null);var canonical_f_288250 = (cljs.core.truth_(selector_288235)?cljs.core.partial.call(null,dommy.core.live_listener,elem_288234,selector_288235):cljs.core.identity).call(null,factory_288249.call(null,f_288242));dommy.core.update_event_listeners_BANG_.call(null,elem_288234,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_288235,actual_type_288248,f_288242], null),canonical_f_288250);
if(cljs.core.truth_(elem_288234.addEventListener))
{elem_288234.addEventListener(cljs.core.name.call(null,actual_type_288248),canonical_f_288250);
} else
{elem_288234.attachEvent(cljs.core.name.call(null,actual_type_288248),canonical_f_288250);
}
{
var G__288251 = seq__288221_288243;
var G__288252 = chunk__288223_288244;
var G__288253 = count__288224_288245;
var G__288254 = (i__288225_288246 + 1);
seq__288221_288243 = G__288251;
chunk__288223_288244 = G__288252;
count__288224_288245 = G__288253;
i__288225_288246 = G__288254;
continue;
}
} else
{var temp__4092__auto___288255 = cljs.core.seq.call(null,seq__288221_288243);if(temp__4092__auto___288255)
{var seq__288221_288256__$1 = temp__4092__auto___288255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288221_288256__$1))
{var c__4017__auto___288257 = cljs.core.chunk_first.call(null,seq__288221_288256__$1);{
var G__288258 = cljs.core.chunk_rest.call(null,seq__288221_288256__$1);
var G__288259 = c__4017__auto___288257;
var G__288260 = cljs.core.count.call(null,c__4017__auto___288257);
var G__288261 = 0;
seq__288221_288243 = G__288258;
chunk__288223_288244 = G__288259;
count__288224_288245 = G__288260;
i__288225_288246 = G__288261;
continue;
}
} else
{var vec__288229_288262 = cljs.core.first.call(null,seq__288221_288256__$1);var actual_type_288263 = cljs.core.nth.call(null,vec__288229_288262,0,null);var factory_288264 = cljs.core.nth.call(null,vec__288229_288262,1,null);var canonical_f_288265 = (cljs.core.truth_(selector_288235)?cljs.core.partial.call(null,dommy.core.live_listener,elem_288234,selector_288235):cljs.core.identity).call(null,factory_288264.call(null,f_288242));dommy.core.update_event_listeners_BANG_.call(null,elem_288234,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_288235,actual_type_288263,f_288242], null),canonical_f_288265);
if(cljs.core.truth_(elem_288234.addEventListener))
{elem_288234.addEventListener(cljs.core.name.call(null,actual_type_288263),canonical_f_288265);
} else
{elem_288234.attachEvent(cljs.core.name.call(null,actual_type_288263),canonical_f_288265);
}
{
var G__288266 = cljs.core.next.call(null,seq__288221_288256__$1);
var G__288267 = null;
var G__288268 = 0;
var G__288269 = 0;
seq__288221_288243 = G__288266;
chunk__288223_288244 = G__288267;
count__288224_288245 = G__288268;
i__288225_288246 = G__288269;
continue;
}
}
} else
{}
}
break;
}
{
var G__288270 = seq__288211_288236;
var G__288271 = chunk__288218_288237;
var G__288272 = count__288219_288238;
var G__288273 = (i__288220_288239 + 1);
seq__288211_288236 = G__288270;
chunk__288218_288237 = G__288271;
count__288219_288238 = G__288272;
i__288220_288239 = G__288273;
continue;
}
} else
{var temp__4092__auto___288274 = cljs.core.seq.call(null,seq__288211_288236);if(temp__4092__auto___288274)
{var seq__288211_288275__$1 = temp__4092__auto___288274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288211_288275__$1))
{var c__4017__auto___288276 = cljs.core.chunk_first.call(null,seq__288211_288275__$1);{
var G__288277 = cljs.core.chunk_rest.call(null,seq__288211_288275__$1);
var G__288278 = c__4017__auto___288276;
var G__288279 = cljs.core.count.call(null,c__4017__auto___288276);
var G__288280 = 0;
seq__288211_288236 = G__288277;
chunk__288218_288237 = G__288278;
count__288219_288238 = G__288279;
i__288220_288239 = G__288280;
continue;
}
} else
{var vec__288230_288281 = cljs.core.first.call(null,seq__288211_288275__$1);var orig_type_288282 = cljs.core.nth.call(null,vec__288230_288281,0,null);var f_288283 = cljs.core.nth.call(null,vec__288230_288281,1,null);var seq__288212_288284 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_288282,new cljs.core.PersistentArrayMap.fromArray([orig_type_288282,cljs.core.identity], true, false)));var chunk__288214_288285 = null;var count__288215_288286 = 0;var i__288216_288287 = 0;while(true){
if((i__288216_288287 < count__288215_288286))
{var vec__288231_288288 = cljs.core._nth.call(null,chunk__288214_288285,i__288216_288287);var actual_type_288289 = cljs.core.nth.call(null,vec__288231_288288,0,null);var factory_288290 = cljs.core.nth.call(null,vec__288231_288288,1,null);var canonical_f_288291 = (cljs.core.truth_(selector_288235)?cljs.core.partial.call(null,dommy.core.live_listener,elem_288234,selector_288235):cljs.core.identity).call(null,factory_288290.call(null,f_288283));dommy.core.update_event_listeners_BANG_.call(null,elem_288234,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_288235,actual_type_288289,f_288283], null),canonical_f_288291);
if(cljs.core.truth_(elem_288234.addEventListener))
{elem_288234.addEventListener(cljs.core.name.call(null,actual_type_288289),canonical_f_288291);
} else
{elem_288234.attachEvent(cljs.core.name.call(null,actual_type_288289),canonical_f_288291);
}
{
var G__288292 = seq__288212_288284;
var G__288293 = chunk__288214_288285;
var G__288294 = count__288215_288286;
var G__288295 = (i__288216_288287 + 1);
seq__288212_288284 = G__288292;
chunk__288214_288285 = G__288293;
count__288215_288286 = G__288294;
i__288216_288287 = G__288295;
continue;
}
} else
{var temp__4092__auto___288296__$1 = cljs.core.seq.call(null,seq__288212_288284);if(temp__4092__auto___288296__$1)
{var seq__288212_288297__$1 = temp__4092__auto___288296__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288212_288297__$1))
{var c__4017__auto___288298 = cljs.core.chunk_first.call(null,seq__288212_288297__$1);{
var G__288299 = cljs.core.chunk_rest.call(null,seq__288212_288297__$1);
var G__288300 = c__4017__auto___288298;
var G__288301 = cljs.core.count.call(null,c__4017__auto___288298);
var G__288302 = 0;
seq__288212_288284 = G__288299;
chunk__288214_288285 = G__288300;
count__288215_288286 = G__288301;
i__288216_288287 = G__288302;
continue;
}
} else
{var vec__288232_288303 = cljs.core.first.call(null,seq__288212_288297__$1);var actual_type_288304 = cljs.core.nth.call(null,vec__288232_288303,0,null);var factory_288305 = cljs.core.nth.call(null,vec__288232_288303,1,null);var canonical_f_288306 = (cljs.core.truth_(selector_288235)?cljs.core.partial.call(null,dommy.core.live_listener,elem_288234,selector_288235):cljs.core.identity).call(null,factory_288305.call(null,f_288283));dommy.core.update_event_listeners_BANG_.call(null,elem_288234,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_288235,actual_type_288304,f_288283], null),canonical_f_288306);
if(cljs.core.truth_(elem_288234.addEventListener))
{elem_288234.addEventListener(cljs.core.name.call(null,actual_type_288304),canonical_f_288306);
} else
{elem_288234.attachEvent(cljs.core.name.call(null,actual_type_288304),canonical_f_288306);
}
{
var G__288307 = cljs.core.next.call(null,seq__288212_288297__$1);
var G__288308 = null;
var G__288309 = 0;
var G__288310 = 0;
seq__288212_288284 = G__288307;
chunk__288214_288285 = G__288308;
count__288215_288286 = G__288309;
i__288216_288287 = G__288310;
continue;
}
}
} else
{}
}
break;
}
{
var G__288311 = cljs.core.next.call(null,seq__288211_288275__$1);
var G__288312 = null;
var G__288313 = 0;
var G__288314 = 0;
seq__288211_288236 = G__288311;
chunk__288218_288237 = G__288312;
count__288219_288238 = G__288313;
i__288220_288239 = G__288314;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__288315){
var elem_sel = cljs.core.first(arglist__288315);
var type_fs = cljs.core.rest(arglist__288315);
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
var vec__288339_288362 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_288363 = cljs.core.nth.call(null,vec__288339_288362,0,null);var selector_288364 = cljs.core.nth.call(null,vec__288339_288362,1,null);var seq__288340_288365 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__288347_288366 = null;var count__288348_288367 = 0;var i__288349_288368 = 0;while(true){
if((i__288349_288368 < count__288348_288367))
{var vec__288356_288369 = cljs.core._nth.call(null,chunk__288347_288366,i__288349_288368);var orig_type_288370 = cljs.core.nth.call(null,vec__288356_288369,0,null);var f_288371 = cljs.core.nth.call(null,vec__288356_288369,1,null);var seq__288350_288372 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_288370,new cljs.core.PersistentArrayMap.fromArray([orig_type_288370,cljs.core.identity], true, false)));var chunk__288352_288373 = null;var count__288353_288374 = 0;var i__288354_288375 = 0;while(true){
if((i__288354_288375 < count__288353_288374))
{var vec__288357_288376 = cljs.core._nth.call(null,chunk__288352_288373,i__288354_288375);var actual_type_288377 = cljs.core.nth.call(null,vec__288357_288376,0,null);var __288378 = cljs.core.nth.call(null,vec__288357_288376,1,null);var keys_288379 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_288364,actual_type_288377,f_288371], null);var canonical_f_288380 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_288363),keys_288379);dommy.core.update_event_listeners_BANG_.call(null,elem_288363,dommy.utils.dissoc_in,keys_288379);
if(cljs.core.truth_(elem_288363.removeEventListener))
{elem_288363.removeEventListener(cljs.core.name.call(null,actual_type_288377),canonical_f_288380);
} else
{elem_288363.detachEvent(cljs.core.name.call(null,actual_type_288377),canonical_f_288380);
}
{
var G__288381 = seq__288350_288372;
var G__288382 = chunk__288352_288373;
var G__288383 = count__288353_288374;
var G__288384 = (i__288354_288375 + 1);
seq__288350_288372 = G__288381;
chunk__288352_288373 = G__288382;
count__288353_288374 = G__288383;
i__288354_288375 = G__288384;
continue;
}
} else
{var temp__4092__auto___288385 = cljs.core.seq.call(null,seq__288350_288372);if(temp__4092__auto___288385)
{var seq__288350_288386__$1 = temp__4092__auto___288385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288350_288386__$1))
{var c__4017__auto___288387 = cljs.core.chunk_first.call(null,seq__288350_288386__$1);{
var G__288388 = cljs.core.chunk_rest.call(null,seq__288350_288386__$1);
var G__288389 = c__4017__auto___288387;
var G__288390 = cljs.core.count.call(null,c__4017__auto___288387);
var G__288391 = 0;
seq__288350_288372 = G__288388;
chunk__288352_288373 = G__288389;
count__288353_288374 = G__288390;
i__288354_288375 = G__288391;
continue;
}
} else
{var vec__288358_288392 = cljs.core.first.call(null,seq__288350_288386__$1);var actual_type_288393 = cljs.core.nth.call(null,vec__288358_288392,0,null);var __288394 = cljs.core.nth.call(null,vec__288358_288392,1,null);var keys_288395 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_288364,actual_type_288393,f_288371], null);var canonical_f_288396 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_288363),keys_288395);dommy.core.update_event_listeners_BANG_.call(null,elem_288363,dommy.utils.dissoc_in,keys_288395);
if(cljs.core.truth_(elem_288363.removeEventListener))
{elem_288363.removeEventListener(cljs.core.name.call(null,actual_type_288393),canonical_f_288396);
} else
{elem_288363.detachEvent(cljs.core.name.call(null,actual_type_288393),canonical_f_288396);
}
{
var G__288397 = cljs.core.next.call(null,seq__288350_288386__$1);
var G__288398 = null;
var G__288399 = 0;
var G__288400 = 0;
seq__288350_288372 = G__288397;
chunk__288352_288373 = G__288398;
count__288353_288374 = G__288399;
i__288354_288375 = G__288400;
continue;
}
}
} else
{}
}
break;
}
{
var G__288401 = seq__288340_288365;
var G__288402 = chunk__288347_288366;
var G__288403 = count__288348_288367;
var G__288404 = (i__288349_288368 + 1);
seq__288340_288365 = G__288401;
chunk__288347_288366 = G__288402;
count__288348_288367 = G__288403;
i__288349_288368 = G__288404;
continue;
}
} else
{var temp__4092__auto___288405 = cljs.core.seq.call(null,seq__288340_288365);if(temp__4092__auto___288405)
{var seq__288340_288406__$1 = temp__4092__auto___288405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288340_288406__$1))
{var c__4017__auto___288407 = cljs.core.chunk_first.call(null,seq__288340_288406__$1);{
var G__288408 = cljs.core.chunk_rest.call(null,seq__288340_288406__$1);
var G__288409 = c__4017__auto___288407;
var G__288410 = cljs.core.count.call(null,c__4017__auto___288407);
var G__288411 = 0;
seq__288340_288365 = G__288408;
chunk__288347_288366 = G__288409;
count__288348_288367 = G__288410;
i__288349_288368 = G__288411;
continue;
}
} else
{var vec__288359_288412 = cljs.core.first.call(null,seq__288340_288406__$1);var orig_type_288413 = cljs.core.nth.call(null,vec__288359_288412,0,null);var f_288414 = cljs.core.nth.call(null,vec__288359_288412,1,null);var seq__288341_288415 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_288413,new cljs.core.PersistentArrayMap.fromArray([orig_type_288413,cljs.core.identity], true, false)));var chunk__288343_288416 = null;var count__288344_288417 = 0;var i__288345_288418 = 0;while(true){
if((i__288345_288418 < count__288344_288417))
{var vec__288360_288419 = cljs.core._nth.call(null,chunk__288343_288416,i__288345_288418);var actual_type_288420 = cljs.core.nth.call(null,vec__288360_288419,0,null);var __288421 = cljs.core.nth.call(null,vec__288360_288419,1,null);var keys_288422 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_288364,actual_type_288420,f_288414], null);var canonical_f_288423 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_288363),keys_288422);dommy.core.update_event_listeners_BANG_.call(null,elem_288363,dommy.utils.dissoc_in,keys_288422);
if(cljs.core.truth_(elem_288363.removeEventListener))
{elem_288363.removeEventListener(cljs.core.name.call(null,actual_type_288420),canonical_f_288423);
} else
{elem_288363.detachEvent(cljs.core.name.call(null,actual_type_288420),canonical_f_288423);
}
{
var G__288424 = seq__288341_288415;
var G__288425 = chunk__288343_288416;
var G__288426 = count__288344_288417;
var G__288427 = (i__288345_288418 + 1);
seq__288341_288415 = G__288424;
chunk__288343_288416 = G__288425;
count__288344_288417 = G__288426;
i__288345_288418 = G__288427;
continue;
}
} else
{var temp__4092__auto___288428__$1 = cljs.core.seq.call(null,seq__288341_288415);if(temp__4092__auto___288428__$1)
{var seq__288341_288429__$1 = temp__4092__auto___288428__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288341_288429__$1))
{var c__4017__auto___288430 = cljs.core.chunk_first.call(null,seq__288341_288429__$1);{
var G__288431 = cljs.core.chunk_rest.call(null,seq__288341_288429__$1);
var G__288432 = c__4017__auto___288430;
var G__288433 = cljs.core.count.call(null,c__4017__auto___288430);
var G__288434 = 0;
seq__288341_288415 = G__288431;
chunk__288343_288416 = G__288432;
count__288344_288417 = G__288433;
i__288345_288418 = G__288434;
continue;
}
} else
{var vec__288361_288435 = cljs.core.first.call(null,seq__288341_288429__$1);var actual_type_288436 = cljs.core.nth.call(null,vec__288361_288435,0,null);var __288437 = cljs.core.nth.call(null,vec__288361_288435,1,null);var keys_288438 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_288364,actual_type_288436,f_288414], null);var canonical_f_288439 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_288363),keys_288438);dommy.core.update_event_listeners_BANG_.call(null,elem_288363,dommy.utils.dissoc_in,keys_288438);
if(cljs.core.truth_(elem_288363.removeEventListener))
{elem_288363.removeEventListener(cljs.core.name.call(null,actual_type_288436),canonical_f_288439);
} else
{elem_288363.detachEvent(cljs.core.name.call(null,actual_type_288436),canonical_f_288439);
}
{
var G__288440 = cljs.core.next.call(null,seq__288341_288429__$1);
var G__288441 = null;
var G__288442 = 0;
var G__288443 = 0;
seq__288341_288415 = G__288440;
chunk__288343_288416 = G__288441;
count__288344_288417 = G__288442;
i__288345_288418 = G__288443;
continue;
}
}
} else
{}
}
break;
}
{
var G__288444 = cljs.core.next.call(null,seq__288340_288406__$1);
var G__288445 = null;
var G__288446 = 0;
var G__288447 = 0;
seq__288340_288365 = G__288444;
chunk__288347_288366 = G__288445;
count__288348_288367 = G__288446;
i__288349_288368 = G__288447;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__288448){
var elem_sel = cljs.core.first(arglist__288448);
var type_fs = cljs.core.rest(arglist__288448);
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
var vec__288456_288463 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_288464 = cljs.core.nth.call(null,vec__288456_288463,0,null);var selector_288465 = cljs.core.nth.call(null,vec__288456_288463,1,null);var seq__288457_288466 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__288458_288467 = null;var count__288459_288468 = 0;var i__288460_288469 = 0;while(true){
if((i__288460_288469 < count__288459_288468))
{var vec__288461_288470 = cljs.core._nth.call(null,chunk__288458_288467,i__288460_288469);var type_288471 = cljs.core.nth.call(null,vec__288461_288470,0,null);var f_288472 = cljs.core.nth.call(null,vec__288461_288470,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_288471,((function (seq__288457_288466,chunk__288458_288467,count__288459_288468,i__288460_288469,vec__288461_288470,type_288471,f_288472){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_288471,this_fn);
return f_288472.call(null,e);
});})(seq__288457_288466,chunk__288458_288467,count__288459_288468,i__288460_288469,vec__288461_288470,type_288471,f_288472))
);
{
var G__288473 = seq__288457_288466;
var G__288474 = chunk__288458_288467;
var G__288475 = count__288459_288468;
var G__288476 = (i__288460_288469 + 1);
seq__288457_288466 = G__288473;
chunk__288458_288467 = G__288474;
count__288459_288468 = G__288475;
i__288460_288469 = G__288476;
continue;
}
} else
{var temp__4092__auto___288477 = cljs.core.seq.call(null,seq__288457_288466);if(temp__4092__auto___288477)
{var seq__288457_288478__$1 = temp__4092__auto___288477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288457_288478__$1))
{var c__4017__auto___288479 = cljs.core.chunk_first.call(null,seq__288457_288478__$1);{
var G__288480 = cljs.core.chunk_rest.call(null,seq__288457_288478__$1);
var G__288481 = c__4017__auto___288479;
var G__288482 = cljs.core.count.call(null,c__4017__auto___288479);
var G__288483 = 0;
seq__288457_288466 = G__288480;
chunk__288458_288467 = G__288481;
count__288459_288468 = G__288482;
i__288460_288469 = G__288483;
continue;
}
} else
{var vec__288462_288484 = cljs.core.first.call(null,seq__288457_288478__$1);var type_288485 = cljs.core.nth.call(null,vec__288462_288484,0,null);var f_288486 = cljs.core.nth.call(null,vec__288462_288484,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_288485,((function (seq__288457_288466,chunk__288458_288467,count__288459_288468,i__288460_288469,vec__288462_288484,type_288485,f_288486,seq__288457_288478__$1,temp__4092__auto___288477){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_288485,this_fn);
return f_288486.call(null,e);
});})(seq__288457_288466,chunk__288458_288467,count__288459_288468,i__288460_288469,vec__288462_288484,type_288485,f_288486,seq__288457_288478__$1,temp__4092__auto___288477))
);
{
var G__288487 = cljs.core.next.call(null,seq__288457_288478__$1);
var G__288488 = null;
var G__288489 = 0;
var G__288490 = 0;
seq__288457_288466 = G__288487;
chunk__288458_288467 = G__288488;
count__288459_288468 = G__288489;
i__288460_288469 = G__288490;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__288491){
var elem_sel = cljs.core.first(arglist__288491);
var type_fs = cljs.core.rest(arglist__288491);
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
var fire_BANG___delegate = function (node,event_type,p__288492){var vec__288494 = p__288492;var update_event_BANG_ = cljs.core.nth.call(null,vec__288494,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__288492 = null;if (arguments.length > 2) {
  p__288492 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__288492);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__288495){
var node = cljs.core.first(arglist__288495);
arglist__288495 = cljs.core.next(arglist__288495);
var event_type = cljs.core.first(arglist__288495);
var p__288492 = cljs.core.rest(arglist__288495);
return fire_BANG___delegate(node,event_type,p__288492);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
