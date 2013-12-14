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
var append_BANG___2 = (function (parent,child){var G__427133 = dommy.template.__GT_node_like.call(null,parent);G__427133.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__427133;
});
var append_BANG___3 = (function() { 
var G__427138__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__427134_427139 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__427135_427140 = null;var count__427136_427141 = 0;var i__427137_427142 = 0;while(true){
if((i__427137_427142 < count__427136_427141))
{var c_427143 = cljs.core._nth.call(null,chunk__427135_427140,i__427137_427142);append_BANG_.call(null,parent__$1,c_427143);
{
var G__427144 = seq__427134_427139;
var G__427145 = chunk__427135_427140;
var G__427146 = count__427136_427141;
var G__427147 = (i__427137_427142 + 1);
seq__427134_427139 = G__427144;
chunk__427135_427140 = G__427145;
count__427136_427141 = G__427146;
i__427137_427142 = G__427147;
continue;
}
} else
{var temp__4092__auto___427148 = cljs.core.seq.call(null,seq__427134_427139);if(temp__4092__auto___427148)
{var seq__427134_427149__$1 = temp__4092__auto___427148;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427134_427149__$1))
{var c__4017__auto___427150 = cljs.core.chunk_first.call(null,seq__427134_427149__$1);{
var G__427151 = cljs.core.chunk_rest.call(null,seq__427134_427149__$1);
var G__427152 = c__4017__auto___427150;
var G__427153 = cljs.core.count.call(null,c__4017__auto___427150);
var G__427154 = 0;
seq__427134_427139 = G__427151;
chunk__427135_427140 = G__427152;
count__427136_427141 = G__427153;
i__427137_427142 = G__427154;
continue;
}
} else
{var c_427155 = cljs.core.first.call(null,seq__427134_427149__$1);append_BANG_.call(null,parent__$1,c_427155);
{
var G__427156 = cljs.core.next.call(null,seq__427134_427149__$1);
var G__427157 = null;
var G__427158 = 0;
var G__427159 = 0;
seq__427134_427139 = G__427156;
chunk__427135_427140 = G__427157;
count__427136_427141 = G__427158;
i__427137_427142 = G__427159;
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
var G__427138 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__427138__delegate.call(this,parent,child,more_children);};
G__427138.cljs$lang$maxFixedArity = 2;
G__427138.cljs$lang$applyTo = (function (arglist__427160){
var parent = cljs.core.first(arglist__427160);
arglist__427160 = cljs.core.next(arglist__427160);
var child = cljs.core.first(arglist__427160);
var more_children = cljs.core.rest(arglist__427160);
return G__427138__delegate(parent,child,more_children);
});
G__427138.cljs$core$IFn$_invoke$arity$variadic = G__427138__delegate;
return G__427138;
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
var prepend_BANG___2 = (function (parent,child){var G__427166 = dommy.template.__GT_node_like.call(null,parent);G__427166.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__427166;
});
var prepend_BANG___3 = (function() { 
var G__427171__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__427167_427172 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__427168_427173 = null;var count__427169_427174 = 0;var i__427170_427175 = 0;while(true){
if((i__427170_427175 < count__427169_427174))
{var c_427176 = cljs.core._nth.call(null,chunk__427168_427173,i__427170_427175);prepend_BANG_.call(null,parent__$1,c_427176);
{
var G__427177 = seq__427167_427172;
var G__427178 = chunk__427168_427173;
var G__427179 = count__427169_427174;
var G__427180 = (i__427170_427175 + 1);
seq__427167_427172 = G__427177;
chunk__427168_427173 = G__427178;
count__427169_427174 = G__427179;
i__427170_427175 = G__427180;
continue;
}
} else
{var temp__4092__auto___427181 = cljs.core.seq.call(null,seq__427167_427172);if(temp__4092__auto___427181)
{var seq__427167_427182__$1 = temp__4092__auto___427181;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427167_427182__$1))
{var c__4017__auto___427183 = cljs.core.chunk_first.call(null,seq__427167_427182__$1);{
var G__427184 = cljs.core.chunk_rest.call(null,seq__427167_427182__$1);
var G__427185 = c__4017__auto___427183;
var G__427186 = cljs.core.count.call(null,c__4017__auto___427183);
var G__427187 = 0;
seq__427167_427172 = G__427184;
chunk__427168_427173 = G__427185;
count__427169_427174 = G__427186;
i__427170_427175 = G__427187;
continue;
}
} else
{var c_427188 = cljs.core.first.call(null,seq__427167_427182__$1);prepend_BANG_.call(null,parent__$1,c_427188);
{
var G__427189 = cljs.core.next.call(null,seq__427167_427182__$1);
var G__427190 = null;
var G__427191 = 0;
var G__427192 = 0;
seq__427167_427172 = G__427189;
chunk__427168_427173 = G__427190;
count__427169_427174 = G__427191;
i__427170_427175 = G__427192;
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
var G__427171 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__427171__delegate.call(this,parent,child,more_children);};
G__427171.cljs$lang$maxFixedArity = 2;
G__427171.cljs$lang$applyTo = (function (arglist__427193){
var parent = cljs.core.first(arglist__427193);
arglist__427193 = cljs.core.next(arglist__427193);
var child = cljs.core.first(arglist__427193);
var more_children = cljs.core.rest(arglist__427193);
return G__427171__delegate(parent,child,more_children);
});
G__427171.cljs$core$IFn$_invoke$arity$variadic = G__427171__delegate;
return G__427171;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___427194 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___427194))
{var next_427195 = temp__4090__auto___427194;parent.insertBefore(actual_node,next_427195);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__427197 = dommy.template.__GT_node_like.call(null,parent);G__427197.innerHTML = "";
dommy.core.append_BANG_.call(null,G__427197,node_like);
return G__427197;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__427199 = elem__$1.parentNode;G__427199.removeChild(elem__$1);
return G__427199;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__427200_SHARP_){return p1__427200_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__427201_SHARP_){return !((p1__427201_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__427202){var vec__427203 = p__427202;var special_mouse_event = cljs.core.nth.call(null,vec__427203,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__427203,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__427204){
var elem = cljs.core.first(arglist__427204);
arglist__427204 = cljs.core.next(arglist__427204);
var f = cljs.core.first(arglist__427204);
var args = cljs.core.rest(arglist__427204);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__427205_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__427205_SHARP_));
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
var vec__427229_427252 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_427253 = cljs.core.nth.call(null,vec__427229_427252,0,null);var selector_427254 = cljs.core.nth.call(null,vec__427229_427252,1,null);var seq__427230_427255 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__427237_427256 = null;var count__427238_427257 = 0;var i__427239_427258 = 0;while(true){
if((i__427239_427258 < count__427238_427257))
{var vec__427246_427259 = cljs.core._nth.call(null,chunk__427237_427256,i__427239_427258);var orig_type_427260 = cljs.core.nth.call(null,vec__427246_427259,0,null);var f_427261 = cljs.core.nth.call(null,vec__427246_427259,1,null);var seq__427240_427262 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_427260,new cljs.core.PersistentArrayMap.fromArray([orig_type_427260,cljs.core.identity], true, false)));var chunk__427242_427263 = null;var count__427243_427264 = 0;var i__427244_427265 = 0;while(true){
if((i__427244_427265 < count__427243_427264))
{var vec__427247_427266 = cljs.core._nth.call(null,chunk__427242_427263,i__427244_427265);var actual_type_427267 = cljs.core.nth.call(null,vec__427247_427266,0,null);var factory_427268 = cljs.core.nth.call(null,vec__427247_427266,1,null);var canonical_f_427269 = (cljs.core.truth_(selector_427254)?cljs.core.partial.call(null,dommy.core.live_listener,elem_427253,selector_427254):cljs.core.identity).call(null,factory_427268.call(null,f_427261));dommy.core.update_event_listeners_BANG_.call(null,elem_427253,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_427254,actual_type_427267,f_427261], null),canonical_f_427269);
if(cljs.core.truth_(elem_427253.addEventListener))
{elem_427253.addEventListener(cljs.core.name.call(null,actual_type_427267),canonical_f_427269);
} else
{elem_427253.attachEvent(cljs.core.name.call(null,actual_type_427267),canonical_f_427269);
}
{
var G__427270 = seq__427240_427262;
var G__427271 = chunk__427242_427263;
var G__427272 = count__427243_427264;
var G__427273 = (i__427244_427265 + 1);
seq__427240_427262 = G__427270;
chunk__427242_427263 = G__427271;
count__427243_427264 = G__427272;
i__427244_427265 = G__427273;
continue;
}
} else
{var temp__4092__auto___427274 = cljs.core.seq.call(null,seq__427240_427262);if(temp__4092__auto___427274)
{var seq__427240_427275__$1 = temp__4092__auto___427274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427240_427275__$1))
{var c__4017__auto___427276 = cljs.core.chunk_first.call(null,seq__427240_427275__$1);{
var G__427277 = cljs.core.chunk_rest.call(null,seq__427240_427275__$1);
var G__427278 = c__4017__auto___427276;
var G__427279 = cljs.core.count.call(null,c__4017__auto___427276);
var G__427280 = 0;
seq__427240_427262 = G__427277;
chunk__427242_427263 = G__427278;
count__427243_427264 = G__427279;
i__427244_427265 = G__427280;
continue;
}
} else
{var vec__427248_427281 = cljs.core.first.call(null,seq__427240_427275__$1);var actual_type_427282 = cljs.core.nth.call(null,vec__427248_427281,0,null);var factory_427283 = cljs.core.nth.call(null,vec__427248_427281,1,null);var canonical_f_427284 = (cljs.core.truth_(selector_427254)?cljs.core.partial.call(null,dommy.core.live_listener,elem_427253,selector_427254):cljs.core.identity).call(null,factory_427283.call(null,f_427261));dommy.core.update_event_listeners_BANG_.call(null,elem_427253,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_427254,actual_type_427282,f_427261], null),canonical_f_427284);
if(cljs.core.truth_(elem_427253.addEventListener))
{elem_427253.addEventListener(cljs.core.name.call(null,actual_type_427282),canonical_f_427284);
} else
{elem_427253.attachEvent(cljs.core.name.call(null,actual_type_427282),canonical_f_427284);
}
{
var G__427285 = cljs.core.next.call(null,seq__427240_427275__$1);
var G__427286 = null;
var G__427287 = 0;
var G__427288 = 0;
seq__427240_427262 = G__427285;
chunk__427242_427263 = G__427286;
count__427243_427264 = G__427287;
i__427244_427265 = G__427288;
continue;
}
}
} else
{}
}
break;
}
{
var G__427289 = seq__427230_427255;
var G__427290 = chunk__427237_427256;
var G__427291 = count__427238_427257;
var G__427292 = (i__427239_427258 + 1);
seq__427230_427255 = G__427289;
chunk__427237_427256 = G__427290;
count__427238_427257 = G__427291;
i__427239_427258 = G__427292;
continue;
}
} else
{var temp__4092__auto___427293 = cljs.core.seq.call(null,seq__427230_427255);if(temp__4092__auto___427293)
{var seq__427230_427294__$1 = temp__4092__auto___427293;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427230_427294__$1))
{var c__4017__auto___427295 = cljs.core.chunk_first.call(null,seq__427230_427294__$1);{
var G__427296 = cljs.core.chunk_rest.call(null,seq__427230_427294__$1);
var G__427297 = c__4017__auto___427295;
var G__427298 = cljs.core.count.call(null,c__4017__auto___427295);
var G__427299 = 0;
seq__427230_427255 = G__427296;
chunk__427237_427256 = G__427297;
count__427238_427257 = G__427298;
i__427239_427258 = G__427299;
continue;
}
} else
{var vec__427249_427300 = cljs.core.first.call(null,seq__427230_427294__$1);var orig_type_427301 = cljs.core.nth.call(null,vec__427249_427300,0,null);var f_427302 = cljs.core.nth.call(null,vec__427249_427300,1,null);var seq__427231_427303 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_427301,new cljs.core.PersistentArrayMap.fromArray([orig_type_427301,cljs.core.identity], true, false)));var chunk__427233_427304 = null;var count__427234_427305 = 0;var i__427235_427306 = 0;while(true){
if((i__427235_427306 < count__427234_427305))
{var vec__427250_427307 = cljs.core._nth.call(null,chunk__427233_427304,i__427235_427306);var actual_type_427308 = cljs.core.nth.call(null,vec__427250_427307,0,null);var factory_427309 = cljs.core.nth.call(null,vec__427250_427307,1,null);var canonical_f_427310 = (cljs.core.truth_(selector_427254)?cljs.core.partial.call(null,dommy.core.live_listener,elem_427253,selector_427254):cljs.core.identity).call(null,factory_427309.call(null,f_427302));dommy.core.update_event_listeners_BANG_.call(null,elem_427253,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_427254,actual_type_427308,f_427302], null),canonical_f_427310);
if(cljs.core.truth_(elem_427253.addEventListener))
{elem_427253.addEventListener(cljs.core.name.call(null,actual_type_427308),canonical_f_427310);
} else
{elem_427253.attachEvent(cljs.core.name.call(null,actual_type_427308),canonical_f_427310);
}
{
var G__427311 = seq__427231_427303;
var G__427312 = chunk__427233_427304;
var G__427313 = count__427234_427305;
var G__427314 = (i__427235_427306 + 1);
seq__427231_427303 = G__427311;
chunk__427233_427304 = G__427312;
count__427234_427305 = G__427313;
i__427235_427306 = G__427314;
continue;
}
} else
{var temp__4092__auto___427315__$1 = cljs.core.seq.call(null,seq__427231_427303);if(temp__4092__auto___427315__$1)
{var seq__427231_427316__$1 = temp__4092__auto___427315__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427231_427316__$1))
{var c__4017__auto___427317 = cljs.core.chunk_first.call(null,seq__427231_427316__$1);{
var G__427318 = cljs.core.chunk_rest.call(null,seq__427231_427316__$1);
var G__427319 = c__4017__auto___427317;
var G__427320 = cljs.core.count.call(null,c__4017__auto___427317);
var G__427321 = 0;
seq__427231_427303 = G__427318;
chunk__427233_427304 = G__427319;
count__427234_427305 = G__427320;
i__427235_427306 = G__427321;
continue;
}
} else
{var vec__427251_427322 = cljs.core.first.call(null,seq__427231_427316__$1);var actual_type_427323 = cljs.core.nth.call(null,vec__427251_427322,0,null);var factory_427324 = cljs.core.nth.call(null,vec__427251_427322,1,null);var canonical_f_427325 = (cljs.core.truth_(selector_427254)?cljs.core.partial.call(null,dommy.core.live_listener,elem_427253,selector_427254):cljs.core.identity).call(null,factory_427324.call(null,f_427302));dommy.core.update_event_listeners_BANG_.call(null,elem_427253,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_427254,actual_type_427323,f_427302], null),canonical_f_427325);
if(cljs.core.truth_(elem_427253.addEventListener))
{elem_427253.addEventListener(cljs.core.name.call(null,actual_type_427323),canonical_f_427325);
} else
{elem_427253.attachEvent(cljs.core.name.call(null,actual_type_427323),canonical_f_427325);
}
{
var G__427326 = cljs.core.next.call(null,seq__427231_427316__$1);
var G__427327 = null;
var G__427328 = 0;
var G__427329 = 0;
seq__427231_427303 = G__427326;
chunk__427233_427304 = G__427327;
count__427234_427305 = G__427328;
i__427235_427306 = G__427329;
continue;
}
}
} else
{}
}
break;
}
{
var G__427330 = cljs.core.next.call(null,seq__427230_427294__$1);
var G__427331 = null;
var G__427332 = 0;
var G__427333 = 0;
seq__427230_427255 = G__427330;
chunk__427237_427256 = G__427331;
count__427238_427257 = G__427332;
i__427239_427258 = G__427333;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__427334){
var elem_sel = cljs.core.first(arglist__427334);
var type_fs = cljs.core.rest(arglist__427334);
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
var vec__427358_427381 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_427382 = cljs.core.nth.call(null,vec__427358_427381,0,null);var selector_427383 = cljs.core.nth.call(null,vec__427358_427381,1,null);var seq__427359_427384 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__427366_427385 = null;var count__427367_427386 = 0;var i__427368_427387 = 0;while(true){
if((i__427368_427387 < count__427367_427386))
{var vec__427375_427388 = cljs.core._nth.call(null,chunk__427366_427385,i__427368_427387);var orig_type_427389 = cljs.core.nth.call(null,vec__427375_427388,0,null);var f_427390 = cljs.core.nth.call(null,vec__427375_427388,1,null);var seq__427369_427391 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_427389,new cljs.core.PersistentArrayMap.fromArray([orig_type_427389,cljs.core.identity], true, false)));var chunk__427371_427392 = null;var count__427372_427393 = 0;var i__427373_427394 = 0;while(true){
if((i__427373_427394 < count__427372_427393))
{var vec__427376_427395 = cljs.core._nth.call(null,chunk__427371_427392,i__427373_427394);var actual_type_427396 = cljs.core.nth.call(null,vec__427376_427395,0,null);var __427397 = cljs.core.nth.call(null,vec__427376_427395,1,null);var keys_427398 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_427383,actual_type_427396,f_427390], null);var canonical_f_427399 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_427382),keys_427398);dommy.core.update_event_listeners_BANG_.call(null,elem_427382,dommy.utils.dissoc_in,keys_427398);
if(cljs.core.truth_(elem_427382.removeEventListener))
{elem_427382.removeEventListener(cljs.core.name.call(null,actual_type_427396),canonical_f_427399);
} else
{elem_427382.detachEvent(cljs.core.name.call(null,actual_type_427396),canonical_f_427399);
}
{
var G__427400 = seq__427369_427391;
var G__427401 = chunk__427371_427392;
var G__427402 = count__427372_427393;
var G__427403 = (i__427373_427394 + 1);
seq__427369_427391 = G__427400;
chunk__427371_427392 = G__427401;
count__427372_427393 = G__427402;
i__427373_427394 = G__427403;
continue;
}
} else
{var temp__4092__auto___427404 = cljs.core.seq.call(null,seq__427369_427391);if(temp__4092__auto___427404)
{var seq__427369_427405__$1 = temp__4092__auto___427404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427369_427405__$1))
{var c__4017__auto___427406 = cljs.core.chunk_first.call(null,seq__427369_427405__$1);{
var G__427407 = cljs.core.chunk_rest.call(null,seq__427369_427405__$1);
var G__427408 = c__4017__auto___427406;
var G__427409 = cljs.core.count.call(null,c__4017__auto___427406);
var G__427410 = 0;
seq__427369_427391 = G__427407;
chunk__427371_427392 = G__427408;
count__427372_427393 = G__427409;
i__427373_427394 = G__427410;
continue;
}
} else
{var vec__427377_427411 = cljs.core.first.call(null,seq__427369_427405__$1);var actual_type_427412 = cljs.core.nth.call(null,vec__427377_427411,0,null);var __427413 = cljs.core.nth.call(null,vec__427377_427411,1,null);var keys_427414 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_427383,actual_type_427412,f_427390], null);var canonical_f_427415 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_427382),keys_427414);dommy.core.update_event_listeners_BANG_.call(null,elem_427382,dommy.utils.dissoc_in,keys_427414);
if(cljs.core.truth_(elem_427382.removeEventListener))
{elem_427382.removeEventListener(cljs.core.name.call(null,actual_type_427412),canonical_f_427415);
} else
{elem_427382.detachEvent(cljs.core.name.call(null,actual_type_427412),canonical_f_427415);
}
{
var G__427416 = cljs.core.next.call(null,seq__427369_427405__$1);
var G__427417 = null;
var G__427418 = 0;
var G__427419 = 0;
seq__427369_427391 = G__427416;
chunk__427371_427392 = G__427417;
count__427372_427393 = G__427418;
i__427373_427394 = G__427419;
continue;
}
}
} else
{}
}
break;
}
{
var G__427420 = seq__427359_427384;
var G__427421 = chunk__427366_427385;
var G__427422 = count__427367_427386;
var G__427423 = (i__427368_427387 + 1);
seq__427359_427384 = G__427420;
chunk__427366_427385 = G__427421;
count__427367_427386 = G__427422;
i__427368_427387 = G__427423;
continue;
}
} else
{var temp__4092__auto___427424 = cljs.core.seq.call(null,seq__427359_427384);if(temp__4092__auto___427424)
{var seq__427359_427425__$1 = temp__4092__auto___427424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427359_427425__$1))
{var c__4017__auto___427426 = cljs.core.chunk_first.call(null,seq__427359_427425__$1);{
var G__427427 = cljs.core.chunk_rest.call(null,seq__427359_427425__$1);
var G__427428 = c__4017__auto___427426;
var G__427429 = cljs.core.count.call(null,c__4017__auto___427426);
var G__427430 = 0;
seq__427359_427384 = G__427427;
chunk__427366_427385 = G__427428;
count__427367_427386 = G__427429;
i__427368_427387 = G__427430;
continue;
}
} else
{var vec__427378_427431 = cljs.core.first.call(null,seq__427359_427425__$1);var orig_type_427432 = cljs.core.nth.call(null,vec__427378_427431,0,null);var f_427433 = cljs.core.nth.call(null,vec__427378_427431,1,null);var seq__427360_427434 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_427432,new cljs.core.PersistentArrayMap.fromArray([orig_type_427432,cljs.core.identity], true, false)));var chunk__427362_427435 = null;var count__427363_427436 = 0;var i__427364_427437 = 0;while(true){
if((i__427364_427437 < count__427363_427436))
{var vec__427379_427438 = cljs.core._nth.call(null,chunk__427362_427435,i__427364_427437);var actual_type_427439 = cljs.core.nth.call(null,vec__427379_427438,0,null);var __427440 = cljs.core.nth.call(null,vec__427379_427438,1,null);var keys_427441 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_427383,actual_type_427439,f_427433], null);var canonical_f_427442 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_427382),keys_427441);dommy.core.update_event_listeners_BANG_.call(null,elem_427382,dommy.utils.dissoc_in,keys_427441);
if(cljs.core.truth_(elem_427382.removeEventListener))
{elem_427382.removeEventListener(cljs.core.name.call(null,actual_type_427439),canonical_f_427442);
} else
{elem_427382.detachEvent(cljs.core.name.call(null,actual_type_427439),canonical_f_427442);
}
{
var G__427443 = seq__427360_427434;
var G__427444 = chunk__427362_427435;
var G__427445 = count__427363_427436;
var G__427446 = (i__427364_427437 + 1);
seq__427360_427434 = G__427443;
chunk__427362_427435 = G__427444;
count__427363_427436 = G__427445;
i__427364_427437 = G__427446;
continue;
}
} else
{var temp__4092__auto___427447__$1 = cljs.core.seq.call(null,seq__427360_427434);if(temp__4092__auto___427447__$1)
{var seq__427360_427448__$1 = temp__4092__auto___427447__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427360_427448__$1))
{var c__4017__auto___427449 = cljs.core.chunk_first.call(null,seq__427360_427448__$1);{
var G__427450 = cljs.core.chunk_rest.call(null,seq__427360_427448__$1);
var G__427451 = c__4017__auto___427449;
var G__427452 = cljs.core.count.call(null,c__4017__auto___427449);
var G__427453 = 0;
seq__427360_427434 = G__427450;
chunk__427362_427435 = G__427451;
count__427363_427436 = G__427452;
i__427364_427437 = G__427453;
continue;
}
} else
{var vec__427380_427454 = cljs.core.first.call(null,seq__427360_427448__$1);var actual_type_427455 = cljs.core.nth.call(null,vec__427380_427454,0,null);var __427456 = cljs.core.nth.call(null,vec__427380_427454,1,null);var keys_427457 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_427383,actual_type_427455,f_427433], null);var canonical_f_427458 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_427382),keys_427457);dommy.core.update_event_listeners_BANG_.call(null,elem_427382,dommy.utils.dissoc_in,keys_427457);
if(cljs.core.truth_(elem_427382.removeEventListener))
{elem_427382.removeEventListener(cljs.core.name.call(null,actual_type_427455),canonical_f_427458);
} else
{elem_427382.detachEvent(cljs.core.name.call(null,actual_type_427455),canonical_f_427458);
}
{
var G__427459 = cljs.core.next.call(null,seq__427360_427448__$1);
var G__427460 = null;
var G__427461 = 0;
var G__427462 = 0;
seq__427360_427434 = G__427459;
chunk__427362_427435 = G__427460;
count__427363_427436 = G__427461;
i__427364_427437 = G__427462;
continue;
}
}
} else
{}
}
break;
}
{
var G__427463 = cljs.core.next.call(null,seq__427359_427425__$1);
var G__427464 = null;
var G__427465 = 0;
var G__427466 = 0;
seq__427359_427384 = G__427463;
chunk__427366_427385 = G__427464;
count__427367_427386 = G__427465;
i__427368_427387 = G__427466;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__427467){
var elem_sel = cljs.core.first(arglist__427467);
var type_fs = cljs.core.rest(arglist__427467);
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
var vec__427475_427482 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_427483 = cljs.core.nth.call(null,vec__427475_427482,0,null);var selector_427484 = cljs.core.nth.call(null,vec__427475_427482,1,null);var seq__427476_427485 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__427477_427486 = null;var count__427478_427487 = 0;var i__427479_427488 = 0;while(true){
if((i__427479_427488 < count__427478_427487))
{var vec__427480_427489 = cljs.core._nth.call(null,chunk__427477_427486,i__427479_427488);var type_427490 = cljs.core.nth.call(null,vec__427480_427489,0,null);var f_427491 = cljs.core.nth.call(null,vec__427480_427489,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_427490,((function (seq__427476_427485,chunk__427477_427486,count__427478_427487,i__427479_427488,vec__427480_427489,type_427490,f_427491){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_427490,this_fn);
return f_427491.call(null,e);
});})(seq__427476_427485,chunk__427477_427486,count__427478_427487,i__427479_427488,vec__427480_427489,type_427490,f_427491))
);
{
var G__427492 = seq__427476_427485;
var G__427493 = chunk__427477_427486;
var G__427494 = count__427478_427487;
var G__427495 = (i__427479_427488 + 1);
seq__427476_427485 = G__427492;
chunk__427477_427486 = G__427493;
count__427478_427487 = G__427494;
i__427479_427488 = G__427495;
continue;
}
} else
{var temp__4092__auto___427496 = cljs.core.seq.call(null,seq__427476_427485);if(temp__4092__auto___427496)
{var seq__427476_427497__$1 = temp__4092__auto___427496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427476_427497__$1))
{var c__4017__auto___427498 = cljs.core.chunk_first.call(null,seq__427476_427497__$1);{
var G__427499 = cljs.core.chunk_rest.call(null,seq__427476_427497__$1);
var G__427500 = c__4017__auto___427498;
var G__427501 = cljs.core.count.call(null,c__4017__auto___427498);
var G__427502 = 0;
seq__427476_427485 = G__427499;
chunk__427477_427486 = G__427500;
count__427478_427487 = G__427501;
i__427479_427488 = G__427502;
continue;
}
} else
{var vec__427481_427503 = cljs.core.first.call(null,seq__427476_427497__$1);var type_427504 = cljs.core.nth.call(null,vec__427481_427503,0,null);var f_427505 = cljs.core.nth.call(null,vec__427481_427503,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_427504,((function (seq__427476_427485,chunk__427477_427486,count__427478_427487,i__427479_427488,vec__427481_427503,type_427504,f_427505,seq__427476_427497__$1,temp__4092__auto___427496){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_427504,this_fn);
return f_427505.call(null,e);
});})(seq__427476_427485,chunk__427477_427486,count__427478_427487,i__427479_427488,vec__427481_427503,type_427504,f_427505,seq__427476_427497__$1,temp__4092__auto___427496))
);
{
var G__427506 = cljs.core.next.call(null,seq__427476_427497__$1);
var G__427507 = null;
var G__427508 = 0;
var G__427509 = 0;
seq__427476_427485 = G__427506;
chunk__427477_427486 = G__427507;
count__427478_427487 = G__427508;
i__427479_427488 = G__427509;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__427510){
var elem_sel = cljs.core.first(arglist__427510);
var type_fs = cljs.core.rest(arglist__427510);
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
var fire_BANG___delegate = function (node,event_type,p__427511){var vec__427513 = p__427511;var update_event_BANG_ = cljs.core.nth.call(null,vec__427513,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__427511 = null;if (arguments.length > 2) {
  p__427511 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__427511);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__427514){
var node = cljs.core.first(arglist__427514);
arglist__427514 = cljs.core.next(arglist__427514);
var event_type = cljs.core.first(arglist__427514);
var p__427511 = cljs.core.rest(arglist__427514);
return fire_BANG___delegate(node,event_type,p__427511);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
