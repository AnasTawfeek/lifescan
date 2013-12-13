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
var append_BANG___2 = (function (parent,child){var G__292672 = dommy.template.__GT_node_like.call(null,parent);G__292672.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__292672;
});
var append_BANG___3 = (function() { 
var G__292677__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__292673_292678 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__292674_292679 = null;var count__292675_292680 = 0;var i__292676_292681 = 0;while(true){
if((i__292676_292681 < count__292675_292680))
{var c_292682 = cljs.core._nth.call(null,chunk__292674_292679,i__292676_292681);append_BANG_.call(null,parent__$1,c_292682);
{
var G__292683 = seq__292673_292678;
var G__292684 = chunk__292674_292679;
var G__292685 = count__292675_292680;
var G__292686 = (i__292676_292681 + 1);
seq__292673_292678 = G__292683;
chunk__292674_292679 = G__292684;
count__292675_292680 = G__292685;
i__292676_292681 = G__292686;
continue;
}
} else
{var temp__4092__auto___292687 = cljs.core.seq.call(null,seq__292673_292678);if(temp__4092__auto___292687)
{var seq__292673_292688__$1 = temp__4092__auto___292687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__292673_292688__$1))
{var c__4017__auto___292689 = cljs.core.chunk_first.call(null,seq__292673_292688__$1);{
var G__292690 = cljs.core.chunk_rest.call(null,seq__292673_292688__$1);
var G__292691 = c__4017__auto___292689;
var G__292692 = cljs.core.count.call(null,c__4017__auto___292689);
var G__292693 = 0;
seq__292673_292678 = G__292690;
chunk__292674_292679 = G__292691;
count__292675_292680 = G__292692;
i__292676_292681 = G__292693;
continue;
}
} else
{var c_292694 = cljs.core.first.call(null,seq__292673_292688__$1);append_BANG_.call(null,parent__$1,c_292694);
{
var G__292695 = cljs.core.next.call(null,seq__292673_292688__$1);
var G__292696 = null;
var G__292697 = 0;
var G__292698 = 0;
seq__292673_292678 = G__292695;
chunk__292674_292679 = G__292696;
count__292675_292680 = G__292697;
i__292676_292681 = G__292698;
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
var G__292677 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__292677__delegate.call(this,parent,child,more_children);};
G__292677.cljs$lang$maxFixedArity = 2;
G__292677.cljs$lang$applyTo = (function (arglist__292699){
var parent = cljs.core.first(arglist__292699);
arglist__292699 = cljs.core.next(arglist__292699);
var child = cljs.core.first(arglist__292699);
var more_children = cljs.core.rest(arglist__292699);
return G__292677__delegate(parent,child,more_children);
});
G__292677.cljs$core$IFn$_invoke$arity$variadic = G__292677__delegate;
return G__292677;
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
var prepend_BANG___2 = (function (parent,child){var G__292705 = dommy.template.__GT_node_like.call(null,parent);G__292705.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__292705;
});
var prepend_BANG___3 = (function() { 
var G__292710__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__292706_292711 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__292707_292712 = null;var count__292708_292713 = 0;var i__292709_292714 = 0;while(true){
if((i__292709_292714 < count__292708_292713))
{var c_292715 = cljs.core._nth.call(null,chunk__292707_292712,i__292709_292714);prepend_BANG_.call(null,parent__$1,c_292715);
{
var G__292716 = seq__292706_292711;
var G__292717 = chunk__292707_292712;
var G__292718 = count__292708_292713;
var G__292719 = (i__292709_292714 + 1);
seq__292706_292711 = G__292716;
chunk__292707_292712 = G__292717;
count__292708_292713 = G__292718;
i__292709_292714 = G__292719;
continue;
}
} else
{var temp__4092__auto___292720 = cljs.core.seq.call(null,seq__292706_292711);if(temp__4092__auto___292720)
{var seq__292706_292721__$1 = temp__4092__auto___292720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__292706_292721__$1))
{var c__4017__auto___292722 = cljs.core.chunk_first.call(null,seq__292706_292721__$1);{
var G__292723 = cljs.core.chunk_rest.call(null,seq__292706_292721__$1);
var G__292724 = c__4017__auto___292722;
var G__292725 = cljs.core.count.call(null,c__4017__auto___292722);
var G__292726 = 0;
seq__292706_292711 = G__292723;
chunk__292707_292712 = G__292724;
count__292708_292713 = G__292725;
i__292709_292714 = G__292726;
continue;
}
} else
{var c_292727 = cljs.core.first.call(null,seq__292706_292721__$1);prepend_BANG_.call(null,parent__$1,c_292727);
{
var G__292728 = cljs.core.next.call(null,seq__292706_292721__$1);
var G__292729 = null;
var G__292730 = 0;
var G__292731 = 0;
seq__292706_292711 = G__292728;
chunk__292707_292712 = G__292729;
count__292708_292713 = G__292730;
i__292709_292714 = G__292731;
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
var G__292710 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__292710__delegate.call(this,parent,child,more_children);};
G__292710.cljs$lang$maxFixedArity = 2;
G__292710.cljs$lang$applyTo = (function (arglist__292732){
var parent = cljs.core.first(arglist__292732);
arglist__292732 = cljs.core.next(arglist__292732);
var child = cljs.core.first(arglist__292732);
var more_children = cljs.core.rest(arglist__292732);
return G__292710__delegate(parent,child,more_children);
});
G__292710.cljs$core$IFn$_invoke$arity$variadic = G__292710__delegate;
return G__292710;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___292733 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___292733))
{var next_292734 = temp__4090__auto___292733;parent.insertBefore(actual_node,next_292734);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__292736 = dommy.template.__GT_node_like.call(null,parent);G__292736.innerHTML = "";
dommy.core.append_BANG_.call(null,G__292736,node_like);
return G__292736;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__292738 = elem__$1.parentNode;G__292738.removeChild(elem__$1);
return G__292738;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__292739_SHARP_){return p1__292739_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__292740_SHARP_){return !((p1__292740_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__292741){var vec__292742 = p__292741;var special_mouse_event = cljs.core.nth.call(null,vec__292742,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__292742,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__292743){
var elem = cljs.core.first(arglist__292743);
arglist__292743 = cljs.core.next(arglist__292743);
var f = cljs.core.first(arglist__292743);
var args = cljs.core.rest(arglist__292743);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__292744_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__292744_SHARP_));
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
var vec__292768_292791 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_292792 = cljs.core.nth.call(null,vec__292768_292791,0,null);var selector_292793 = cljs.core.nth.call(null,vec__292768_292791,1,null);var seq__292769_292794 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__292776_292795 = null;var count__292777_292796 = 0;var i__292778_292797 = 0;while(true){
if((i__292778_292797 < count__292777_292796))
{var vec__292785_292798 = cljs.core._nth.call(null,chunk__292776_292795,i__292778_292797);var orig_type_292799 = cljs.core.nth.call(null,vec__292785_292798,0,null);var f_292800 = cljs.core.nth.call(null,vec__292785_292798,1,null);var seq__292779_292801 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_292799,new cljs.core.PersistentArrayMap.fromArray([orig_type_292799,cljs.core.identity], true, false)));var chunk__292781_292802 = null;var count__292782_292803 = 0;var i__292783_292804 = 0;while(true){
if((i__292783_292804 < count__292782_292803))
{var vec__292786_292805 = cljs.core._nth.call(null,chunk__292781_292802,i__292783_292804);var actual_type_292806 = cljs.core.nth.call(null,vec__292786_292805,0,null);var factory_292807 = cljs.core.nth.call(null,vec__292786_292805,1,null);var canonical_f_292808 = (cljs.core.truth_(selector_292793)?cljs.core.partial.call(null,dommy.core.live_listener,elem_292792,selector_292793):cljs.core.identity).call(null,factory_292807.call(null,f_292800));dommy.core.update_event_listeners_BANG_.call(null,elem_292792,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_292793,actual_type_292806,f_292800], null),canonical_f_292808);
if(cljs.core.truth_(elem_292792.addEventListener))
{elem_292792.addEventListener(cljs.core.name.call(null,actual_type_292806),canonical_f_292808);
} else
{elem_292792.attachEvent(cljs.core.name.call(null,actual_type_292806),canonical_f_292808);
}
{
var G__292809 = seq__292779_292801;
var G__292810 = chunk__292781_292802;
var G__292811 = count__292782_292803;
var G__292812 = (i__292783_292804 + 1);
seq__292779_292801 = G__292809;
chunk__292781_292802 = G__292810;
count__292782_292803 = G__292811;
i__292783_292804 = G__292812;
continue;
}
} else
{var temp__4092__auto___292813 = cljs.core.seq.call(null,seq__292779_292801);if(temp__4092__auto___292813)
{var seq__292779_292814__$1 = temp__4092__auto___292813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__292779_292814__$1))
{var c__4017__auto___292815 = cljs.core.chunk_first.call(null,seq__292779_292814__$1);{
var G__292816 = cljs.core.chunk_rest.call(null,seq__292779_292814__$1);
var G__292817 = c__4017__auto___292815;
var G__292818 = cljs.core.count.call(null,c__4017__auto___292815);
var G__292819 = 0;
seq__292779_292801 = G__292816;
chunk__292781_292802 = G__292817;
count__292782_292803 = G__292818;
i__292783_292804 = G__292819;
continue;
}
} else
{var vec__292787_292820 = cljs.core.first.call(null,seq__292779_292814__$1);var actual_type_292821 = cljs.core.nth.call(null,vec__292787_292820,0,null);var factory_292822 = cljs.core.nth.call(null,vec__292787_292820,1,null);var canonical_f_292823 = (cljs.core.truth_(selector_292793)?cljs.core.partial.call(null,dommy.core.live_listener,elem_292792,selector_292793):cljs.core.identity).call(null,factory_292822.call(null,f_292800));dommy.core.update_event_listeners_BANG_.call(null,elem_292792,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_292793,actual_type_292821,f_292800], null),canonical_f_292823);
if(cljs.core.truth_(elem_292792.addEventListener))
{elem_292792.addEventListener(cljs.core.name.call(null,actual_type_292821),canonical_f_292823);
} else
{elem_292792.attachEvent(cljs.core.name.call(null,actual_type_292821),canonical_f_292823);
}
{
var G__292824 = cljs.core.next.call(null,seq__292779_292814__$1);
var G__292825 = null;
var G__292826 = 0;
var G__292827 = 0;
seq__292779_292801 = G__292824;
chunk__292781_292802 = G__292825;
count__292782_292803 = G__292826;
i__292783_292804 = G__292827;
continue;
}
}
} else
{}
}
break;
}
{
var G__292828 = seq__292769_292794;
var G__292829 = chunk__292776_292795;
var G__292830 = count__292777_292796;
var G__292831 = (i__292778_292797 + 1);
seq__292769_292794 = G__292828;
chunk__292776_292795 = G__292829;
count__292777_292796 = G__292830;
i__292778_292797 = G__292831;
continue;
}
} else
{var temp__4092__auto___292832 = cljs.core.seq.call(null,seq__292769_292794);if(temp__4092__auto___292832)
{var seq__292769_292833__$1 = temp__4092__auto___292832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__292769_292833__$1))
{var c__4017__auto___292834 = cljs.core.chunk_first.call(null,seq__292769_292833__$1);{
var G__292835 = cljs.core.chunk_rest.call(null,seq__292769_292833__$1);
var G__292836 = c__4017__auto___292834;
var G__292837 = cljs.core.count.call(null,c__4017__auto___292834);
var G__292838 = 0;
seq__292769_292794 = G__292835;
chunk__292776_292795 = G__292836;
count__292777_292796 = G__292837;
i__292778_292797 = G__292838;
continue;
}
} else
{var vec__292788_292839 = cljs.core.first.call(null,seq__292769_292833__$1);var orig_type_292840 = cljs.core.nth.call(null,vec__292788_292839,0,null);var f_292841 = cljs.core.nth.call(null,vec__292788_292839,1,null);var seq__292770_292842 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_292840,new cljs.core.PersistentArrayMap.fromArray([orig_type_292840,cljs.core.identity], true, false)));var chunk__292772_292843 = null;var count__292773_292844 = 0;var i__292774_292845 = 0;while(true){
if((i__292774_292845 < count__292773_292844))
{var vec__292789_292846 = cljs.core._nth.call(null,chunk__292772_292843,i__292774_292845);var actual_type_292847 = cljs.core.nth.call(null,vec__292789_292846,0,null);var factory_292848 = cljs.core.nth.call(null,vec__292789_292846,1,null);var canonical_f_292849 = (cljs.core.truth_(selector_292793)?cljs.core.partial.call(null,dommy.core.live_listener,elem_292792,selector_292793):cljs.core.identity).call(null,factory_292848.call(null,f_292841));dommy.core.update_event_listeners_BANG_.call(null,elem_292792,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_292793,actual_type_292847,f_292841], null),canonical_f_292849);
if(cljs.core.truth_(elem_292792.addEventListener))
{elem_292792.addEventListener(cljs.core.name.call(null,actual_type_292847),canonical_f_292849);
} else
{elem_292792.attachEvent(cljs.core.name.call(null,actual_type_292847),canonical_f_292849);
}
{
var G__292850 = seq__292770_292842;
var G__292851 = chunk__292772_292843;
var G__292852 = count__292773_292844;
var G__292853 = (i__292774_292845 + 1);
seq__292770_292842 = G__292850;
chunk__292772_292843 = G__292851;
count__292773_292844 = G__292852;
i__292774_292845 = G__292853;
continue;
}
} else
{var temp__4092__auto___292854__$1 = cljs.core.seq.call(null,seq__292770_292842);if(temp__4092__auto___292854__$1)
{var seq__292770_292855__$1 = temp__4092__auto___292854__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__292770_292855__$1))
{var c__4017__auto___292856 = cljs.core.chunk_first.call(null,seq__292770_292855__$1);{
var G__292857 = cljs.core.chunk_rest.call(null,seq__292770_292855__$1);
var G__292858 = c__4017__auto___292856;
var G__292859 = cljs.core.count.call(null,c__4017__auto___292856);
var G__292860 = 0;
seq__292770_292842 = G__292857;
chunk__292772_292843 = G__292858;
count__292773_292844 = G__292859;
i__292774_292845 = G__292860;
continue;
}
} else
{var vec__292790_292861 = cljs.core.first.call(null,seq__292770_292855__$1);var actual_type_292862 = cljs.core.nth.call(null,vec__292790_292861,0,null);var factory_292863 = cljs.core.nth.call(null,vec__292790_292861,1,null);var canonical_f_292864 = (cljs.core.truth_(selector_292793)?cljs.core.partial.call(null,dommy.core.live_listener,elem_292792,selector_292793):cljs.core.identity).call(null,factory_292863.call(null,f_292841));dommy.core.update_event_listeners_BANG_.call(null,elem_292792,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_292793,actual_type_292862,f_292841], null),canonical_f_292864);
if(cljs.core.truth_(elem_292792.addEventListener))
{elem_292792.addEventListener(cljs.core.name.call(null,actual_type_292862),canonical_f_292864);
} else
{elem_292792.attachEvent(cljs.core.name.call(null,actual_type_292862),canonical_f_292864);
}
{
var G__292865 = cljs.core.next.call(null,seq__292770_292855__$1);
var G__292866 = null;
var G__292867 = 0;
var G__292868 = 0;
seq__292770_292842 = G__292865;
chunk__292772_292843 = G__292866;
count__292773_292844 = G__292867;
i__292774_292845 = G__292868;
continue;
}
}
} else
{}
}
break;
}
{
var G__292869 = cljs.core.next.call(null,seq__292769_292833__$1);
var G__292870 = null;
var G__292871 = 0;
var G__292872 = 0;
seq__292769_292794 = G__292869;
chunk__292776_292795 = G__292870;
count__292777_292796 = G__292871;
i__292778_292797 = G__292872;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__292873){
var elem_sel = cljs.core.first(arglist__292873);
var type_fs = cljs.core.rest(arglist__292873);
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
var vec__292897_292920 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_292921 = cljs.core.nth.call(null,vec__292897_292920,0,null);var selector_292922 = cljs.core.nth.call(null,vec__292897_292920,1,null);var seq__292898_292923 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__292905_292924 = null;var count__292906_292925 = 0;var i__292907_292926 = 0;while(true){
if((i__292907_292926 < count__292906_292925))
{var vec__292914_292927 = cljs.core._nth.call(null,chunk__292905_292924,i__292907_292926);var orig_type_292928 = cljs.core.nth.call(null,vec__292914_292927,0,null);var f_292929 = cljs.core.nth.call(null,vec__292914_292927,1,null);var seq__292908_292930 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_292928,new cljs.core.PersistentArrayMap.fromArray([orig_type_292928,cljs.core.identity], true, false)));var chunk__292910_292931 = null;var count__292911_292932 = 0;var i__292912_292933 = 0;while(true){
if((i__292912_292933 < count__292911_292932))
{var vec__292915_292934 = cljs.core._nth.call(null,chunk__292910_292931,i__292912_292933);var actual_type_292935 = cljs.core.nth.call(null,vec__292915_292934,0,null);var __292936 = cljs.core.nth.call(null,vec__292915_292934,1,null);var keys_292937 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_292922,actual_type_292935,f_292929], null);var canonical_f_292938 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_292921),keys_292937);dommy.core.update_event_listeners_BANG_.call(null,elem_292921,dommy.utils.dissoc_in,keys_292937);
if(cljs.core.truth_(elem_292921.removeEventListener))
{elem_292921.removeEventListener(cljs.core.name.call(null,actual_type_292935),canonical_f_292938);
} else
{elem_292921.detachEvent(cljs.core.name.call(null,actual_type_292935),canonical_f_292938);
}
{
var G__292939 = seq__292908_292930;
var G__292940 = chunk__292910_292931;
var G__292941 = count__292911_292932;
var G__292942 = (i__292912_292933 + 1);
seq__292908_292930 = G__292939;
chunk__292910_292931 = G__292940;
count__292911_292932 = G__292941;
i__292912_292933 = G__292942;
continue;
}
} else
{var temp__4092__auto___292943 = cljs.core.seq.call(null,seq__292908_292930);if(temp__4092__auto___292943)
{var seq__292908_292944__$1 = temp__4092__auto___292943;if(cljs.core.chunked_seq_QMARK_.call(null,seq__292908_292944__$1))
{var c__4017__auto___292945 = cljs.core.chunk_first.call(null,seq__292908_292944__$1);{
var G__292946 = cljs.core.chunk_rest.call(null,seq__292908_292944__$1);
var G__292947 = c__4017__auto___292945;
var G__292948 = cljs.core.count.call(null,c__4017__auto___292945);
var G__292949 = 0;
seq__292908_292930 = G__292946;
chunk__292910_292931 = G__292947;
count__292911_292932 = G__292948;
i__292912_292933 = G__292949;
continue;
}
} else
{var vec__292916_292950 = cljs.core.first.call(null,seq__292908_292944__$1);var actual_type_292951 = cljs.core.nth.call(null,vec__292916_292950,0,null);var __292952 = cljs.core.nth.call(null,vec__292916_292950,1,null);var keys_292953 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_292922,actual_type_292951,f_292929], null);var canonical_f_292954 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_292921),keys_292953);dommy.core.update_event_listeners_BANG_.call(null,elem_292921,dommy.utils.dissoc_in,keys_292953);
if(cljs.core.truth_(elem_292921.removeEventListener))
{elem_292921.removeEventListener(cljs.core.name.call(null,actual_type_292951),canonical_f_292954);
} else
{elem_292921.detachEvent(cljs.core.name.call(null,actual_type_292951),canonical_f_292954);
}
{
var G__292955 = cljs.core.next.call(null,seq__292908_292944__$1);
var G__292956 = null;
var G__292957 = 0;
var G__292958 = 0;
seq__292908_292930 = G__292955;
chunk__292910_292931 = G__292956;
count__292911_292932 = G__292957;
i__292912_292933 = G__292958;
continue;
}
}
} else
{}
}
break;
}
{
var G__292959 = seq__292898_292923;
var G__292960 = chunk__292905_292924;
var G__292961 = count__292906_292925;
var G__292962 = (i__292907_292926 + 1);
seq__292898_292923 = G__292959;
chunk__292905_292924 = G__292960;
count__292906_292925 = G__292961;
i__292907_292926 = G__292962;
continue;
}
} else
{var temp__4092__auto___292963 = cljs.core.seq.call(null,seq__292898_292923);if(temp__4092__auto___292963)
{var seq__292898_292964__$1 = temp__4092__auto___292963;if(cljs.core.chunked_seq_QMARK_.call(null,seq__292898_292964__$1))
{var c__4017__auto___292965 = cljs.core.chunk_first.call(null,seq__292898_292964__$1);{
var G__292966 = cljs.core.chunk_rest.call(null,seq__292898_292964__$1);
var G__292967 = c__4017__auto___292965;
var G__292968 = cljs.core.count.call(null,c__4017__auto___292965);
var G__292969 = 0;
seq__292898_292923 = G__292966;
chunk__292905_292924 = G__292967;
count__292906_292925 = G__292968;
i__292907_292926 = G__292969;
continue;
}
} else
{var vec__292917_292970 = cljs.core.first.call(null,seq__292898_292964__$1);var orig_type_292971 = cljs.core.nth.call(null,vec__292917_292970,0,null);var f_292972 = cljs.core.nth.call(null,vec__292917_292970,1,null);var seq__292899_292973 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_292971,new cljs.core.PersistentArrayMap.fromArray([orig_type_292971,cljs.core.identity], true, false)));var chunk__292901_292974 = null;var count__292902_292975 = 0;var i__292903_292976 = 0;while(true){
if((i__292903_292976 < count__292902_292975))
{var vec__292918_292977 = cljs.core._nth.call(null,chunk__292901_292974,i__292903_292976);var actual_type_292978 = cljs.core.nth.call(null,vec__292918_292977,0,null);var __292979 = cljs.core.nth.call(null,vec__292918_292977,1,null);var keys_292980 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_292922,actual_type_292978,f_292972], null);var canonical_f_292981 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_292921),keys_292980);dommy.core.update_event_listeners_BANG_.call(null,elem_292921,dommy.utils.dissoc_in,keys_292980);
if(cljs.core.truth_(elem_292921.removeEventListener))
{elem_292921.removeEventListener(cljs.core.name.call(null,actual_type_292978),canonical_f_292981);
} else
{elem_292921.detachEvent(cljs.core.name.call(null,actual_type_292978),canonical_f_292981);
}
{
var G__292982 = seq__292899_292973;
var G__292983 = chunk__292901_292974;
var G__292984 = count__292902_292975;
var G__292985 = (i__292903_292976 + 1);
seq__292899_292973 = G__292982;
chunk__292901_292974 = G__292983;
count__292902_292975 = G__292984;
i__292903_292976 = G__292985;
continue;
}
} else
{var temp__4092__auto___292986__$1 = cljs.core.seq.call(null,seq__292899_292973);if(temp__4092__auto___292986__$1)
{var seq__292899_292987__$1 = temp__4092__auto___292986__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__292899_292987__$1))
{var c__4017__auto___292988 = cljs.core.chunk_first.call(null,seq__292899_292987__$1);{
var G__292989 = cljs.core.chunk_rest.call(null,seq__292899_292987__$1);
var G__292990 = c__4017__auto___292988;
var G__292991 = cljs.core.count.call(null,c__4017__auto___292988);
var G__292992 = 0;
seq__292899_292973 = G__292989;
chunk__292901_292974 = G__292990;
count__292902_292975 = G__292991;
i__292903_292976 = G__292992;
continue;
}
} else
{var vec__292919_292993 = cljs.core.first.call(null,seq__292899_292987__$1);var actual_type_292994 = cljs.core.nth.call(null,vec__292919_292993,0,null);var __292995 = cljs.core.nth.call(null,vec__292919_292993,1,null);var keys_292996 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_292922,actual_type_292994,f_292972], null);var canonical_f_292997 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_292921),keys_292996);dommy.core.update_event_listeners_BANG_.call(null,elem_292921,dommy.utils.dissoc_in,keys_292996);
if(cljs.core.truth_(elem_292921.removeEventListener))
{elem_292921.removeEventListener(cljs.core.name.call(null,actual_type_292994),canonical_f_292997);
} else
{elem_292921.detachEvent(cljs.core.name.call(null,actual_type_292994),canonical_f_292997);
}
{
var G__292998 = cljs.core.next.call(null,seq__292899_292987__$1);
var G__292999 = null;
var G__293000 = 0;
var G__293001 = 0;
seq__292899_292973 = G__292998;
chunk__292901_292974 = G__292999;
count__292902_292975 = G__293000;
i__292903_292976 = G__293001;
continue;
}
}
} else
{}
}
break;
}
{
var G__293002 = cljs.core.next.call(null,seq__292898_292964__$1);
var G__293003 = null;
var G__293004 = 0;
var G__293005 = 0;
seq__292898_292923 = G__293002;
chunk__292905_292924 = G__293003;
count__292906_292925 = G__293004;
i__292907_292926 = G__293005;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__293006){
var elem_sel = cljs.core.first(arglist__293006);
var type_fs = cljs.core.rest(arglist__293006);
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
var vec__293014_293021 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_293022 = cljs.core.nth.call(null,vec__293014_293021,0,null);var selector_293023 = cljs.core.nth.call(null,vec__293014_293021,1,null);var seq__293015_293024 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__293016_293025 = null;var count__293017_293026 = 0;var i__293018_293027 = 0;while(true){
if((i__293018_293027 < count__293017_293026))
{var vec__293019_293028 = cljs.core._nth.call(null,chunk__293016_293025,i__293018_293027);var type_293029 = cljs.core.nth.call(null,vec__293019_293028,0,null);var f_293030 = cljs.core.nth.call(null,vec__293019_293028,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_293029,((function (seq__293015_293024,chunk__293016_293025,count__293017_293026,i__293018_293027,vec__293019_293028,type_293029,f_293030){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_293029,this_fn);
return f_293030.call(null,e);
});})(seq__293015_293024,chunk__293016_293025,count__293017_293026,i__293018_293027,vec__293019_293028,type_293029,f_293030))
);
{
var G__293031 = seq__293015_293024;
var G__293032 = chunk__293016_293025;
var G__293033 = count__293017_293026;
var G__293034 = (i__293018_293027 + 1);
seq__293015_293024 = G__293031;
chunk__293016_293025 = G__293032;
count__293017_293026 = G__293033;
i__293018_293027 = G__293034;
continue;
}
} else
{var temp__4092__auto___293035 = cljs.core.seq.call(null,seq__293015_293024);if(temp__4092__auto___293035)
{var seq__293015_293036__$1 = temp__4092__auto___293035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__293015_293036__$1))
{var c__4017__auto___293037 = cljs.core.chunk_first.call(null,seq__293015_293036__$1);{
var G__293038 = cljs.core.chunk_rest.call(null,seq__293015_293036__$1);
var G__293039 = c__4017__auto___293037;
var G__293040 = cljs.core.count.call(null,c__4017__auto___293037);
var G__293041 = 0;
seq__293015_293024 = G__293038;
chunk__293016_293025 = G__293039;
count__293017_293026 = G__293040;
i__293018_293027 = G__293041;
continue;
}
} else
{var vec__293020_293042 = cljs.core.first.call(null,seq__293015_293036__$1);var type_293043 = cljs.core.nth.call(null,vec__293020_293042,0,null);var f_293044 = cljs.core.nth.call(null,vec__293020_293042,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_293043,((function (seq__293015_293024,chunk__293016_293025,count__293017_293026,i__293018_293027,vec__293020_293042,type_293043,f_293044,seq__293015_293036__$1,temp__4092__auto___293035){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_293043,this_fn);
return f_293044.call(null,e);
});})(seq__293015_293024,chunk__293016_293025,count__293017_293026,i__293018_293027,vec__293020_293042,type_293043,f_293044,seq__293015_293036__$1,temp__4092__auto___293035))
);
{
var G__293045 = cljs.core.next.call(null,seq__293015_293036__$1);
var G__293046 = null;
var G__293047 = 0;
var G__293048 = 0;
seq__293015_293024 = G__293045;
chunk__293016_293025 = G__293046;
count__293017_293026 = G__293047;
i__293018_293027 = G__293048;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__293049){
var elem_sel = cljs.core.first(arglist__293049);
var type_fs = cljs.core.rest(arglist__293049);
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
var fire_BANG___delegate = function (node,event_type,p__293050){var vec__293052 = p__293050;var update_event_BANG_ = cljs.core.nth.call(null,vec__293052,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__293050 = null;if (arguments.length > 2) {
  p__293050 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__293050);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__293053){
var node = cljs.core.first(arglist__293053);
arglist__293053 = cljs.core.next(arglist__293053);
var event_type = cljs.core.first(arglist__293053);
var p__293050 = cljs.core.rest(arglist__293053);
return fire_BANG___delegate(node,event_type,p__293050);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
