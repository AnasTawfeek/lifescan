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
var append_BANG___2 = (function (parent,child){var G__219744 = dommy.template.__GT_node_like.call(null,parent);G__219744.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__219744;
});
var append_BANG___3 = (function() { 
var G__219749__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__219745_219750 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__219746_219751 = null;var count__219747_219752 = 0;var i__219748_219753 = 0;while(true){
if((i__219748_219753 < count__219747_219752))
{var c_219754 = cljs.core._nth.call(null,chunk__219746_219751,i__219748_219753);append_BANG_.call(null,parent__$1,c_219754);
{
var G__219755 = seq__219745_219750;
var G__219756 = chunk__219746_219751;
var G__219757 = count__219747_219752;
var G__219758 = (i__219748_219753 + 1);
seq__219745_219750 = G__219755;
chunk__219746_219751 = G__219756;
count__219747_219752 = G__219757;
i__219748_219753 = G__219758;
continue;
}
} else
{var temp__4092__auto___219759 = cljs.core.seq.call(null,seq__219745_219750);if(temp__4092__auto___219759)
{var seq__219745_219760__$1 = temp__4092__auto___219759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__219745_219760__$1))
{var c__4017__auto___219761 = cljs.core.chunk_first.call(null,seq__219745_219760__$1);{
var G__219762 = cljs.core.chunk_rest.call(null,seq__219745_219760__$1);
var G__219763 = c__4017__auto___219761;
var G__219764 = cljs.core.count.call(null,c__4017__auto___219761);
var G__219765 = 0;
seq__219745_219750 = G__219762;
chunk__219746_219751 = G__219763;
count__219747_219752 = G__219764;
i__219748_219753 = G__219765;
continue;
}
} else
{var c_219766 = cljs.core.first.call(null,seq__219745_219760__$1);append_BANG_.call(null,parent__$1,c_219766);
{
var G__219767 = cljs.core.next.call(null,seq__219745_219760__$1);
var G__219768 = null;
var G__219769 = 0;
var G__219770 = 0;
seq__219745_219750 = G__219767;
chunk__219746_219751 = G__219768;
count__219747_219752 = G__219769;
i__219748_219753 = G__219770;
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
var G__219749 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__219749__delegate.call(this,parent,child,more_children);};
G__219749.cljs$lang$maxFixedArity = 2;
G__219749.cljs$lang$applyTo = (function (arglist__219771){
var parent = cljs.core.first(arglist__219771);
arglist__219771 = cljs.core.next(arglist__219771);
var child = cljs.core.first(arglist__219771);
var more_children = cljs.core.rest(arglist__219771);
return G__219749__delegate(parent,child,more_children);
});
G__219749.cljs$core$IFn$_invoke$arity$variadic = G__219749__delegate;
return G__219749;
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
var prepend_BANG___2 = (function (parent,child){var G__219777 = dommy.template.__GT_node_like.call(null,parent);G__219777.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__219777;
});
var prepend_BANG___3 = (function() { 
var G__219782__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__219778_219783 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__219779_219784 = null;var count__219780_219785 = 0;var i__219781_219786 = 0;while(true){
if((i__219781_219786 < count__219780_219785))
{var c_219787 = cljs.core._nth.call(null,chunk__219779_219784,i__219781_219786);prepend_BANG_.call(null,parent__$1,c_219787);
{
var G__219788 = seq__219778_219783;
var G__219789 = chunk__219779_219784;
var G__219790 = count__219780_219785;
var G__219791 = (i__219781_219786 + 1);
seq__219778_219783 = G__219788;
chunk__219779_219784 = G__219789;
count__219780_219785 = G__219790;
i__219781_219786 = G__219791;
continue;
}
} else
{var temp__4092__auto___219792 = cljs.core.seq.call(null,seq__219778_219783);if(temp__4092__auto___219792)
{var seq__219778_219793__$1 = temp__4092__auto___219792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__219778_219793__$1))
{var c__4017__auto___219794 = cljs.core.chunk_first.call(null,seq__219778_219793__$1);{
var G__219795 = cljs.core.chunk_rest.call(null,seq__219778_219793__$1);
var G__219796 = c__4017__auto___219794;
var G__219797 = cljs.core.count.call(null,c__4017__auto___219794);
var G__219798 = 0;
seq__219778_219783 = G__219795;
chunk__219779_219784 = G__219796;
count__219780_219785 = G__219797;
i__219781_219786 = G__219798;
continue;
}
} else
{var c_219799 = cljs.core.first.call(null,seq__219778_219793__$1);prepend_BANG_.call(null,parent__$1,c_219799);
{
var G__219800 = cljs.core.next.call(null,seq__219778_219793__$1);
var G__219801 = null;
var G__219802 = 0;
var G__219803 = 0;
seq__219778_219783 = G__219800;
chunk__219779_219784 = G__219801;
count__219780_219785 = G__219802;
i__219781_219786 = G__219803;
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
var G__219782 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__219782__delegate.call(this,parent,child,more_children);};
G__219782.cljs$lang$maxFixedArity = 2;
G__219782.cljs$lang$applyTo = (function (arglist__219804){
var parent = cljs.core.first(arglist__219804);
arglist__219804 = cljs.core.next(arglist__219804);
var child = cljs.core.first(arglist__219804);
var more_children = cljs.core.rest(arglist__219804);
return G__219782__delegate(parent,child,more_children);
});
G__219782.cljs$core$IFn$_invoke$arity$variadic = G__219782__delegate;
return G__219782;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___219805 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___219805))
{var next_219806 = temp__4090__auto___219805;parent.insertBefore(actual_node,next_219806);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__219808 = dommy.template.__GT_node_like.call(null,parent);G__219808.innerHTML = "";
dommy.core.append_BANG_.call(null,G__219808,node_like);
return G__219808;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__219810 = elem__$1.parentNode;G__219810.removeChild(elem__$1);
return G__219810;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__219811_SHARP_){return p1__219811_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__219812_SHARP_){return !((p1__219812_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__219813){var vec__219814 = p__219813;var special_mouse_event = cljs.core.nth.call(null,vec__219814,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__219814,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__219815){
var elem = cljs.core.first(arglist__219815);
arglist__219815 = cljs.core.next(arglist__219815);
var f = cljs.core.first(arglist__219815);
var args = cljs.core.rest(arglist__219815);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__219816_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__219816_SHARP_));
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
var vec__219840_219863 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_219864 = cljs.core.nth.call(null,vec__219840_219863,0,null);var selector_219865 = cljs.core.nth.call(null,vec__219840_219863,1,null);var seq__219841_219866 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__219848_219867 = null;var count__219849_219868 = 0;var i__219850_219869 = 0;while(true){
if((i__219850_219869 < count__219849_219868))
{var vec__219857_219870 = cljs.core._nth.call(null,chunk__219848_219867,i__219850_219869);var orig_type_219871 = cljs.core.nth.call(null,vec__219857_219870,0,null);var f_219872 = cljs.core.nth.call(null,vec__219857_219870,1,null);var seq__219851_219873 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_219871,new cljs.core.PersistentArrayMap.fromArray([orig_type_219871,cljs.core.identity], true, false)));var chunk__219853_219874 = null;var count__219854_219875 = 0;var i__219855_219876 = 0;while(true){
if((i__219855_219876 < count__219854_219875))
{var vec__219858_219877 = cljs.core._nth.call(null,chunk__219853_219874,i__219855_219876);var actual_type_219878 = cljs.core.nth.call(null,vec__219858_219877,0,null);var factory_219879 = cljs.core.nth.call(null,vec__219858_219877,1,null);var canonical_f_219880 = (cljs.core.truth_(selector_219865)?cljs.core.partial.call(null,dommy.core.live_listener,elem_219864,selector_219865):cljs.core.identity).call(null,factory_219879.call(null,f_219872));dommy.core.update_event_listeners_BANG_.call(null,elem_219864,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_219865,actual_type_219878,f_219872], null),canonical_f_219880);
if(cljs.core.truth_(elem_219864.addEventListener))
{elem_219864.addEventListener(cljs.core.name.call(null,actual_type_219878),canonical_f_219880);
} else
{elem_219864.attachEvent(cljs.core.name.call(null,actual_type_219878),canonical_f_219880);
}
{
var G__219881 = seq__219851_219873;
var G__219882 = chunk__219853_219874;
var G__219883 = count__219854_219875;
var G__219884 = (i__219855_219876 + 1);
seq__219851_219873 = G__219881;
chunk__219853_219874 = G__219882;
count__219854_219875 = G__219883;
i__219855_219876 = G__219884;
continue;
}
} else
{var temp__4092__auto___219885 = cljs.core.seq.call(null,seq__219851_219873);if(temp__4092__auto___219885)
{var seq__219851_219886__$1 = temp__4092__auto___219885;if(cljs.core.chunked_seq_QMARK_.call(null,seq__219851_219886__$1))
{var c__4017__auto___219887 = cljs.core.chunk_first.call(null,seq__219851_219886__$1);{
var G__219888 = cljs.core.chunk_rest.call(null,seq__219851_219886__$1);
var G__219889 = c__4017__auto___219887;
var G__219890 = cljs.core.count.call(null,c__4017__auto___219887);
var G__219891 = 0;
seq__219851_219873 = G__219888;
chunk__219853_219874 = G__219889;
count__219854_219875 = G__219890;
i__219855_219876 = G__219891;
continue;
}
} else
{var vec__219859_219892 = cljs.core.first.call(null,seq__219851_219886__$1);var actual_type_219893 = cljs.core.nth.call(null,vec__219859_219892,0,null);var factory_219894 = cljs.core.nth.call(null,vec__219859_219892,1,null);var canonical_f_219895 = (cljs.core.truth_(selector_219865)?cljs.core.partial.call(null,dommy.core.live_listener,elem_219864,selector_219865):cljs.core.identity).call(null,factory_219894.call(null,f_219872));dommy.core.update_event_listeners_BANG_.call(null,elem_219864,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_219865,actual_type_219893,f_219872], null),canonical_f_219895);
if(cljs.core.truth_(elem_219864.addEventListener))
{elem_219864.addEventListener(cljs.core.name.call(null,actual_type_219893),canonical_f_219895);
} else
{elem_219864.attachEvent(cljs.core.name.call(null,actual_type_219893),canonical_f_219895);
}
{
var G__219896 = cljs.core.next.call(null,seq__219851_219886__$1);
var G__219897 = null;
var G__219898 = 0;
var G__219899 = 0;
seq__219851_219873 = G__219896;
chunk__219853_219874 = G__219897;
count__219854_219875 = G__219898;
i__219855_219876 = G__219899;
continue;
}
}
} else
{}
}
break;
}
{
var G__219900 = seq__219841_219866;
var G__219901 = chunk__219848_219867;
var G__219902 = count__219849_219868;
var G__219903 = (i__219850_219869 + 1);
seq__219841_219866 = G__219900;
chunk__219848_219867 = G__219901;
count__219849_219868 = G__219902;
i__219850_219869 = G__219903;
continue;
}
} else
{var temp__4092__auto___219904 = cljs.core.seq.call(null,seq__219841_219866);if(temp__4092__auto___219904)
{var seq__219841_219905__$1 = temp__4092__auto___219904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__219841_219905__$1))
{var c__4017__auto___219906 = cljs.core.chunk_first.call(null,seq__219841_219905__$1);{
var G__219907 = cljs.core.chunk_rest.call(null,seq__219841_219905__$1);
var G__219908 = c__4017__auto___219906;
var G__219909 = cljs.core.count.call(null,c__4017__auto___219906);
var G__219910 = 0;
seq__219841_219866 = G__219907;
chunk__219848_219867 = G__219908;
count__219849_219868 = G__219909;
i__219850_219869 = G__219910;
continue;
}
} else
{var vec__219860_219911 = cljs.core.first.call(null,seq__219841_219905__$1);var orig_type_219912 = cljs.core.nth.call(null,vec__219860_219911,0,null);var f_219913 = cljs.core.nth.call(null,vec__219860_219911,1,null);var seq__219842_219914 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_219912,new cljs.core.PersistentArrayMap.fromArray([orig_type_219912,cljs.core.identity], true, false)));var chunk__219844_219915 = null;var count__219845_219916 = 0;var i__219846_219917 = 0;while(true){
if((i__219846_219917 < count__219845_219916))
{var vec__219861_219918 = cljs.core._nth.call(null,chunk__219844_219915,i__219846_219917);var actual_type_219919 = cljs.core.nth.call(null,vec__219861_219918,0,null);var factory_219920 = cljs.core.nth.call(null,vec__219861_219918,1,null);var canonical_f_219921 = (cljs.core.truth_(selector_219865)?cljs.core.partial.call(null,dommy.core.live_listener,elem_219864,selector_219865):cljs.core.identity).call(null,factory_219920.call(null,f_219913));dommy.core.update_event_listeners_BANG_.call(null,elem_219864,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_219865,actual_type_219919,f_219913], null),canonical_f_219921);
if(cljs.core.truth_(elem_219864.addEventListener))
{elem_219864.addEventListener(cljs.core.name.call(null,actual_type_219919),canonical_f_219921);
} else
{elem_219864.attachEvent(cljs.core.name.call(null,actual_type_219919),canonical_f_219921);
}
{
var G__219922 = seq__219842_219914;
var G__219923 = chunk__219844_219915;
var G__219924 = count__219845_219916;
var G__219925 = (i__219846_219917 + 1);
seq__219842_219914 = G__219922;
chunk__219844_219915 = G__219923;
count__219845_219916 = G__219924;
i__219846_219917 = G__219925;
continue;
}
} else
{var temp__4092__auto___219926__$1 = cljs.core.seq.call(null,seq__219842_219914);if(temp__4092__auto___219926__$1)
{var seq__219842_219927__$1 = temp__4092__auto___219926__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__219842_219927__$1))
{var c__4017__auto___219928 = cljs.core.chunk_first.call(null,seq__219842_219927__$1);{
var G__219929 = cljs.core.chunk_rest.call(null,seq__219842_219927__$1);
var G__219930 = c__4017__auto___219928;
var G__219931 = cljs.core.count.call(null,c__4017__auto___219928);
var G__219932 = 0;
seq__219842_219914 = G__219929;
chunk__219844_219915 = G__219930;
count__219845_219916 = G__219931;
i__219846_219917 = G__219932;
continue;
}
} else
{var vec__219862_219933 = cljs.core.first.call(null,seq__219842_219927__$1);var actual_type_219934 = cljs.core.nth.call(null,vec__219862_219933,0,null);var factory_219935 = cljs.core.nth.call(null,vec__219862_219933,1,null);var canonical_f_219936 = (cljs.core.truth_(selector_219865)?cljs.core.partial.call(null,dommy.core.live_listener,elem_219864,selector_219865):cljs.core.identity).call(null,factory_219935.call(null,f_219913));dommy.core.update_event_listeners_BANG_.call(null,elem_219864,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_219865,actual_type_219934,f_219913], null),canonical_f_219936);
if(cljs.core.truth_(elem_219864.addEventListener))
{elem_219864.addEventListener(cljs.core.name.call(null,actual_type_219934),canonical_f_219936);
} else
{elem_219864.attachEvent(cljs.core.name.call(null,actual_type_219934),canonical_f_219936);
}
{
var G__219937 = cljs.core.next.call(null,seq__219842_219927__$1);
var G__219938 = null;
var G__219939 = 0;
var G__219940 = 0;
seq__219842_219914 = G__219937;
chunk__219844_219915 = G__219938;
count__219845_219916 = G__219939;
i__219846_219917 = G__219940;
continue;
}
}
} else
{}
}
break;
}
{
var G__219941 = cljs.core.next.call(null,seq__219841_219905__$1);
var G__219942 = null;
var G__219943 = 0;
var G__219944 = 0;
seq__219841_219866 = G__219941;
chunk__219848_219867 = G__219942;
count__219849_219868 = G__219943;
i__219850_219869 = G__219944;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__219945){
var elem_sel = cljs.core.first(arglist__219945);
var type_fs = cljs.core.rest(arglist__219945);
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
var vec__219969_219992 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_219993 = cljs.core.nth.call(null,vec__219969_219992,0,null);var selector_219994 = cljs.core.nth.call(null,vec__219969_219992,1,null);var seq__219970_219995 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__219977_219996 = null;var count__219978_219997 = 0;var i__219979_219998 = 0;while(true){
if((i__219979_219998 < count__219978_219997))
{var vec__219986_219999 = cljs.core._nth.call(null,chunk__219977_219996,i__219979_219998);var orig_type_220000 = cljs.core.nth.call(null,vec__219986_219999,0,null);var f_220001 = cljs.core.nth.call(null,vec__219986_219999,1,null);var seq__219980_220002 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_220000,new cljs.core.PersistentArrayMap.fromArray([orig_type_220000,cljs.core.identity], true, false)));var chunk__219982_220003 = null;var count__219983_220004 = 0;var i__219984_220005 = 0;while(true){
if((i__219984_220005 < count__219983_220004))
{var vec__219987_220006 = cljs.core._nth.call(null,chunk__219982_220003,i__219984_220005);var actual_type_220007 = cljs.core.nth.call(null,vec__219987_220006,0,null);var __220008 = cljs.core.nth.call(null,vec__219987_220006,1,null);var keys_220009 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_219994,actual_type_220007,f_220001], null);var canonical_f_220010 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_219993),keys_220009);dommy.core.update_event_listeners_BANG_.call(null,elem_219993,dommy.utils.dissoc_in,keys_220009);
if(cljs.core.truth_(elem_219993.removeEventListener))
{elem_219993.removeEventListener(cljs.core.name.call(null,actual_type_220007),canonical_f_220010);
} else
{elem_219993.detachEvent(cljs.core.name.call(null,actual_type_220007),canonical_f_220010);
}
{
var G__220011 = seq__219980_220002;
var G__220012 = chunk__219982_220003;
var G__220013 = count__219983_220004;
var G__220014 = (i__219984_220005 + 1);
seq__219980_220002 = G__220011;
chunk__219982_220003 = G__220012;
count__219983_220004 = G__220013;
i__219984_220005 = G__220014;
continue;
}
} else
{var temp__4092__auto___220015 = cljs.core.seq.call(null,seq__219980_220002);if(temp__4092__auto___220015)
{var seq__219980_220016__$1 = temp__4092__auto___220015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__219980_220016__$1))
{var c__4017__auto___220017 = cljs.core.chunk_first.call(null,seq__219980_220016__$1);{
var G__220018 = cljs.core.chunk_rest.call(null,seq__219980_220016__$1);
var G__220019 = c__4017__auto___220017;
var G__220020 = cljs.core.count.call(null,c__4017__auto___220017);
var G__220021 = 0;
seq__219980_220002 = G__220018;
chunk__219982_220003 = G__220019;
count__219983_220004 = G__220020;
i__219984_220005 = G__220021;
continue;
}
} else
{var vec__219988_220022 = cljs.core.first.call(null,seq__219980_220016__$1);var actual_type_220023 = cljs.core.nth.call(null,vec__219988_220022,0,null);var __220024 = cljs.core.nth.call(null,vec__219988_220022,1,null);var keys_220025 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_219994,actual_type_220023,f_220001], null);var canonical_f_220026 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_219993),keys_220025);dommy.core.update_event_listeners_BANG_.call(null,elem_219993,dommy.utils.dissoc_in,keys_220025);
if(cljs.core.truth_(elem_219993.removeEventListener))
{elem_219993.removeEventListener(cljs.core.name.call(null,actual_type_220023),canonical_f_220026);
} else
{elem_219993.detachEvent(cljs.core.name.call(null,actual_type_220023),canonical_f_220026);
}
{
var G__220027 = cljs.core.next.call(null,seq__219980_220016__$1);
var G__220028 = null;
var G__220029 = 0;
var G__220030 = 0;
seq__219980_220002 = G__220027;
chunk__219982_220003 = G__220028;
count__219983_220004 = G__220029;
i__219984_220005 = G__220030;
continue;
}
}
} else
{}
}
break;
}
{
var G__220031 = seq__219970_219995;
var G__220032 = chunk__219977_219996;
var G__220033 = count__219978_219997;
var G__220034 = (i__219979_219998 + 1);
seq__219970_219995 = G__220031;
chunk__219977_219996 = G__220032;
count__219978_219997 = G__220033;
i__219979_219998 = G__220034;
continue;
}
} else
{var temp__4092__auto___220035 = cljs.core.seq.call(null,seq__219970_219995);if(temp__4092__auto___220035)
{var seq__219970_220036__$1 = temp__4092__auto___220035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__219970_220036__$1))
{var c__4017__auto___220037 = cljs.core.chunk_first.call(null,seq__219970_220036__$1);{
var G__220038 = cljs.core.chunk_rest.call(null,seq__219970_220036__$1);
var G__220039 = c__4017__auto___220037;
var G__220040 = cljs.core.count.call(null,c__4017__auto___220037);
var G__220041 = 0;
seq__219970_219995 = G__220038;
chunk__219977_219996 = G__220039;
count__219978_219997 = G__220040;
i__219979_219998 = G__220041;
continue;
}
} else
{var vec__219989_220042 = cljs.core.first.call(null,seq__219970_220036__$1);var orig_type_220043 = cljs.core.nth.call(null,vec__219989_220042,0,null);var f_220044 = cljs.core.nth.call(null,vec__219989_220042,1,null);var seq__219971_220045 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_220043,new cljs.core.PersistentArrayMap.fromArray([orig_type_220043,cljs.core.identity], true, false)));var chunk__219973_220046 = null;var count__219974_220047 = 0;var i__219975_220048 = 0;while(true){
if((i__219975_220048 < count__219974_220047))
{var vec__219990_220049 = cljs.core._nth.call(null,chunk__219973_220046,i__219975_220048);var actual_type_220050 = cljs.core.nth.call(null,vec__219990_220049,0,null);var __220051 = cljs.core.nth.call(null,vec__219990_220049,1,null);var keys_220052 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_219994,actual_type_220050,f_220044], null);var canonical_f_220053 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_219993),keys_220052);dommy.core.update_event_listeners_BANG_.call(null,elem_219993,dommy.utils.dissoc_in,keys_220052);
if(cljs.core.truth_(elem_219993.removeEventListener))
{elem_219993.removeEventListener(cljs.core.name.call(null,actual_type_220050),canonical_f_220053);
} else
{elem_219993.detachEvent(cljs.core.name.call(null,actual_type_220050),canonical_f_220053);
}
{
var G__220054 = seq__219971_220045;
var G__220055 = chunk__219973_220046;
var G__220056 = count__219974_220047;
var G__220057 = (i__219975_220048 + 1);
seq__219971_220045 = G__220054;
chunk__219973_220046 = G__220055;
count__219974_220047 = G__220056;
i__219975_220048 = G__220057;
continue;
}
} else
{var temp__4092__auto___220058__$1 = cljs.core.seq.call(null,seq__219971_220045);if(temp__4092__auto___220058__$1)
{var seq__219971_220059__$1 = temp__4092__auto___220058__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__219971_220059__$1))
{var c__4017__auto___220060 = cljs.core.chunk_first.call(null,seq__219971_220059__$1);{
var G__220061 = cljs.core.chunk_rest.call(null,seq__219971_220059__$1);
var G__220062 = c__4017__auto___220060;
var G__220063 = cljs.core.count.call(null,c__4017__auto___220060);
var G__220064 = 0;
seq__219971_220045 = G__220061;
chunk__219973_220046 = G__220062;
count__219974_220047 = G__220063;
i__219975_220048 = G__220064;
continue;
}
} else
{var vec__219991_220065 = cljs.core.first.call(null,seq__219971_220059__$1);var actual_type_220066 = cljs.core.nth.call(null,vec__219991_220065,0,null);var __220067 = cljs.core.nth.call(null,vec__219991_220065,1,null);var keys_220068 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_219994,actual_type_220066,f_220044], null);var canonical_f_220069 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_219993),keys_220068);dommy.core.update_event_listeners_BANG_.call(null,elem_219993,dommy.utils.dissoc_in,keys_220068);
if(cljs.core.truth_(elem_219993.removeEventListener))
{elem_219993.removeEventListener(cljs.core.name.call(null,actual_type_220066),canonical_f_220069);
} else
{elem_219993.detachEvent(cljs.core.name.call(null,actual_type_220066),canonical_f_220069);
}
{
var G__220070 = cljs.core.next.call(null,seq__219971_220059__$1);
var G__220071 = null;
var G__220072 = 0;
var G__220073 = 0;
seq__219971_220045 = G__220070;
chunk__219973_220046 = G__220071;
count__219974_220047 = G__220072;
i__219975_220048 = G__220073;
continue;
}
}
} else
{}
}
break;
}
{
var G__220074 = cljs.core.next.call(null,seq__219970_220036__$1);
var G__220075 = null;
var G__220076 = 0;
var G__220077 = 0;
seq__219970_219995 = G__220074;
chunk__219977_219996 = G__220075;
count__219978_219997 = G__220076;
i__219979_219998 = G__220077;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__220078){
var elem_sel = cljs.core.first(arglist__220078);
var type_fs = cljs.core.rest(arglist__220078);
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
var vec__220086_220093 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_220094 = cljs.core.nth.call(null,vec__220086_220093,0,null);var selector_220095 = cljs.core.nth.call(null,vec__220086_220093,1,null);var seq__220087_220096 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__220088_220097 = null;var count__220089_220098 = 0;var i__220090_220099 = 0;while(true){
if((i__220090_220099 < count__220089_220098))
{var vec__220091_220100 = cljs.core._nth.call(null,chunk__220088_220097,i__220090_220099);var type_220101 = cljs.core.nth.call(null,vec__220091_220100,0,null);var f_220102 = cljs.core.nth.call(null,vec__220091_220100,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_220101,((function (seq__220087_220096,chunk__220088_220097,count__220089_220098,i__220090_220099,vec__220091_220100,type_220101,f_220102){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_220101,this_fn);
return f_220102.call(null,e);
});})(seq__220087_220096,chunk__220088_220097,count__220089_220098,i__220090_220099,vec__220091_220100,type_220101,f_220102))
);
{
var G__220103 = seq__220087_220096;
var G__220104 = chunk__220088_220097;
var G__220105 = count__220089_220098;
var G__220106 = (i__220090_220099 + 1);
seq__220087_220096 = G__220103;
chunk__220088_220097 = G__220104;
count__220089_220098 = G__220105;
i__220090_220099 = G__220106;
continue;
}
} else
{var temp__4092__auto___220107 = cljs.core.seq.call(null,seq__220087_220096);if(temp__4092__auto___220107)
{var seq__220087_220108__$1 = temp__4092__auto___220107;if(cljs.core.chunked_seq_QMARK_.call(null,seq__220087_220108__$1))
{var c__4017__auto___220109 = cljs.core.chunk_first.call(null,seq__220087_220108__$1);{
var G__220110 = cljs.core.chunk_rest.call(null,seq__220087_220108__$1);
var G__220111 = c__4017__auto___220109;
var G__220112 = cljs.core.count.call(null,c__4017__auto___220109);
var G__220113 = 0;
seq__220087_220096 = G__220110;
chunk__220088_220097 = G__220111;
count__220089_220098 = G__220112;
i__220090_220099 = G__220113;
continue;
}
} else
{var vec__220092_220114 = cljs.core.first.call(null,seq__220087_220108__$1);var type_220115 = cljs.core.nth.call(null,vec__220092_220114,0,null);var f_220116 = cljs.core.nth.call(null,vec__220092_220114,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_220115,((function (seq__220087_220096,chunk__220088_220097,count__220089_220098,i__220090_220099,vec__220092_220114,type_220115,f_220116,seq__220087_220108__$1,temp__4092__auto___220107){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_220115,this_fn);
return f_220116.call(null,e);
});})(seq__220087_220096,chunk__220088_220097,count__220089_220098,i__220090_220099,vec__220092_220114,type_220115,f_220116,seq__220087_220108__$1,temp__4092__auto___220107))
);
{
var G__220117 = cljs.core.next.call(null,seq__220087_220108__$1);
var G__220118 = null;
var G__220119 = 0;
var G__220120 = 0;
seq__220087_220096 = G__220117;
chunk__220088_220097 = G__220118;
count__220089_220098 = G__220119;
i__220090_220099 = G__220120;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__220121){
var elem_sel = cljs.core.first(arglist__220121);
var type_fs = cljs.core.rest(arglist__220121);
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
var fire_BANG___delegate = function (node,event_type,p__220122){var vec__220124 = p__220122;var update_event_BANG_ = cljs.core.nth.call(null,vec__220124,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__220122 = null;if (arguments.length > 2) {
  p__220122 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__220122);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__220125){
var node = cljs.core.first(arglist__220125);
arglist__220125 = cljs.core.next(arglist__220125);
var event_type = cljs.core.first(arglist__220125);
var p__220122 = cljs.core.rest(arglist__220125);
return fire_BANG___delegate(node,event_type,p__220122);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
