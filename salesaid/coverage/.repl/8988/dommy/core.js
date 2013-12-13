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
dommy.core.text = (function text(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var or__4674__auto__ = elem__$1.textContent;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
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
var append_BANG___2 = (function (parent,child){var G__8775 = dommy.template.__GT_node_like.call(null,parent);G__8775.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8775;
});
var append_BANG___3 = (function() { 
var G__8780__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8776_8781 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8777_8782 = null;var count__8778_8783 = 0;var i__8779_8784 = 0;while(true){
if((i__8779_8784 < count__8778_8783))
{var c_8785 = cljs.core._nth.call(null,chunk__8777_8782,i__8779_8784);append_BANG_.call(null,parent__$1,c_8785);
{
var G__8786 = seq__8776_8781;
var G__8787 = chunk__8777_8782;
var G__8788 = count__8778_8783;
var G__8789 = (i__8779_8784 + 1);
seq__8776_8781 = G__8786;
chunk__8777_8782 = G__8787;
count__8778_8783 = G__8788;
i__8779_8784 = G__8789;
continue;
}
} else
{var temp__4092__auto___8790 = cljs.core.seq.call(null,seq__8776_8781);if(temp__4092__auto___8790)
{var seq__8776_8791__$1 = temp__4092__auto___8790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8776_8791__$1))
{var c__5398__auto___8792 = cljs.core.chunk_first.call(null,seq__8776_8791__$1);{
var G__8793 = cljs.core.chunk_rest.call(null,seq__8776_8791__$1);
var G__8794 = c__5398__auto___8792;
var G__8795 = cljs.core.count.call(null,c__5398__auto___8792);
var G__8796 = 0;
seq__8776_8781 = G__8793;
chunk__8777_8782 = G__8794;
count__8778_8783 = G__8795;
i__8779_8784 = G__8796;
continue;
}
} else
{var c_8797 = cljs.core.first.call(null,seq__8776_8791__$1);append_BANG_.call(null,parent__$1,c_8797);
{
var G__8798 = cljs.core.next.call(null,seq__8776_8791__$1);
var G__8799 = null;
var G__8800 = 0;
var G__8801 = 0;
seq__8776_8781 = G__8798;
chunk__8777_8782 = G__8799;
count__8778_8783 = G__8800;
i__8779_8784 = G__8801;
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
var G__8780 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8780__delegate.call(this,parent,child,more_children);};
G__8780.cljs$lang$maxFixedArity = 2;
G__8780.cljs$lang$applyTo = (function (arglist__8802){
var parent = cljs.core.first(arglist__8802);
arglist__8802 = cljs.core.next(arglist__8802);
var child = cljs.core.first(arglist__8802);
var more_children = cljs.core.rest(arglist__8802);
return G__8780__delegate(parent,child,more_children);
});
G__8780.cljs$core$IFn$_invoke$arity$variadic = G__8780__delegate;
return G__8780;
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
var prepend_BANG___2 = (function (parent,child){var G__8808 = dommy.template.__GT_node_like.call(null,parent);G__8808.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__8808;
});
var prepend_BANG___3 = (function() { 
var G__8813__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8809_8814 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8810_8815 = null;var count__8811_8816 = 0;var i__8812_8817 = 0;while(true){
if((i__8812_8817 < count__8811_8816))
{var c_8818 = cljs.core._nth.call(null,chunk__8810_8815,i__8812_8817);prepend_BANG_.call(null,parent__$1,c_8818);
{
var G__8819 = seq__8809_8814;
var G__8820 = chunk__8810_8815;
var G__8821 = count__8811_8816;
var G__8822 = (i__8812_8817 + 1);
seq__8809_8814 = G__8819;
chunk__8810_8815 = G__8820;
count__8811_8816 = G__8821;
i__8812_8817 = G__8822;
continue;
}
} else
{var temp__4092__auto___8823 = cljs.core.seq.call(null,seq__8809_8814);if(temp__4092__auto___8823)
{var seq__8809_8824__$1 = temp__4092__auto___8823;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8809_8824__$1))
{var c__5398__auto___8825 = cljs.core.chunk_first.call(null,seq__8809_8824__$1);{
var G__8826 = cljs.core.chunk_rest.call(null,seq__8809_8824__$1);
var G__8827 = c__5398__auto___8825;
var G__8828 = cljs.core.count.call(null,c__5398__auto___8825);
var G__8829 = 0;
seq__8809_8814 = G__8826;
chunk__8810_8815 = G__8827;
count__8811_8816 = G__8828;
i__8812_8817 = G__8829;
continue;
}
} else
{var c_8830 = cljs.core.first.call(null,seq__8809_8824__$1);prepend_BANG_.call(null,parent__$1,c_8830);
{
var G__8831 = cljs.core.next.call(null,seq__8809_8824__$1);
var G__8832 = null;
var G__8833 = 0;
var G__8834 = 0;
seq__8809_8814 = G__8831;
chunk__8810_8815 = G__8832;
count__8811_8816 = G__8833;
i__8812_8817 = G__8834;
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
var G__8813 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8813__delegate.call(this,parent,child,more_children);};
G__8813.cljs$lang$maxFixedArity = 2;
G__8813.cljs$lang$applyTo = (function (arglist__8835){
var parent = cljs.core.first(arglist__8835);
arglist__8835 = cljs.core.next(arglist__8835);
var child = cljs.core.first(arglist__8835);
var more_children = cljs.core.rest(arglist__8835);
return G__8813__delegate(parent,child,more_children);
});
G__8813.cljs$core$IFn$_invoke$arity$variadic = G__8813__delegate;
return G__8813;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___8836 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___8836))
{var next_8837 = temp__4090__auto___8836;parent.insertBefore(actual_node,next_8837);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8839 = dommy.template.__GT_node_like.call(null,parent);G__8839.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8839,node_like);
return G__8839;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8841 = elem__$1.parentNode;G__8841.removeChild(elem__$1);
return G__8841;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8842_SHARP_){return p1__8842_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__8843_SHARP_){return !((p1__8843_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8844){var vec__8845 = p__8844;var special_mouse_event = cljs.core.nth.call(null,vec__8845,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__8845,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4674__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__4662__auto__ = related_target;if(cljs.core.truth_(and__4662__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__4662__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__4674__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8846){
var elem = cljs.core.first(arglist__8846);
arglist__8846 = cljs.core.next(arglist__8846);
var f = cljs.core.first(arglist__8846);
var args = cljs.core.rest(arglist__8846);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8847_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8847_SHARP_));
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
var vec__8871_8894 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8895 = cljs.core.nth.call(null,vec__8871_8894,0,null);var selector_8896 = cljs.core.nth.call(null,vec__8871_8894,1,null);var seq__8872_8897 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8879_8898 = null;var count__8880_8899 = 0;var i__8881_8900 = 0;while(true){
if((i__8881_8900 < count__8880_8899))
{var vec__8888_8901 = cljs.core._nth.call(null,chunk__8879_8898,i__8881_8900);var orig_type_8902 = cljs.core.nth.call(null,vec__8888_8901,0,null);var f_8903 = cljs.core.nth.call(null,vec__8888_8901,1,null);var seq__8882_8904 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8902,new cljs.core.PersistentArrayMap.fromArray([orig_type_8902,cljs.core.identity], true, false)));var chunk__8884_8905 = null;var count__8885_8906 = 0;var i__8886_8907 = 0;while(true){
if((i__8886_8907 < count__8885_8906))
{var vec__8889_8908 = cljs.core._nth.call(null,chunk__8884_8905,i__8886_8907);var actual_type_8909 = cljs.core.nth.call(null,vec__8889_8908,0,null);var factory_8910 = cljs.core.nth.call(null,vec__8889_8908,1,null);var canonical_f_8911 = (cljs.core.truth_(selector_8896)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8895,selector_8896):cljs.core.identity).call(null,factory_8910.call(null,f_8903));dommy.core.update_event_listeners_BANG_.call(null,elem_8895,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8896,actual_type_8909,f_8903], null),canonical_f_8911);
if(cljs.core.truth_(elem_8895.addEventListener))
{elem_8895.addEventListener(cljs.core.name.call(null,actual_type_8909),canonical_f_8911);
} else
{elem_8895.attachEvent(cljs.core.name.call(null,actual_type_8909),canonical_f_8911);
}
{
var G__8912 = seq__8882_8904;
var G__8913 = chunk__8884_8905;
var G__8914 = count__8885_8906;
var G__8915 = (i__8886_8907 + 1);
seq__8882_8904 = G__8912;
chunk__8884_8905 = G__8913;
count__8885_8906 = G__8914;
i__8886_8907 = G__8915;
continue;
}
} else
{var temp__4092__auto___8916 = cljs.core.seq.call(null,seq__8882_8904);if(temp__4092__auto___8916)
{var seq__8882_8917__$1 = temp__4092__auto___8916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8882_8917__$1))
{var c__5398__auto___8918 = cljs.core.chunk_first.call(null,seq__8882_8917__$1);{
var G__8919 = cljs.core.chunk_rest.call(null,seq__8882_8917__$1);
var G__8920 = c__5398__auto___8918;
var G__8921 = cljs.core.count.call(null,c__5398__auto___8918);
var G__8922 = 0;
seq__8882_8904 = G__8919;
chunk__8884_8905 = G__8920;
count__8885_8906 = G__8921;
i__8886_8907 = G__8922;
continue;
}
} else
{var vec__8890_8923 = cljs.core.first.call(null,seq__8882_8917__$1);var actual_type_8924 = cljs.core.nth.call(null,vec__8890_8923,0,null);var factory_8925 = cljs.core.nth.call(null,vec__8890_8923,1,null);var canonical_f_8926 = (cljs.core.truth_(selector_8896)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8895,selector_8896):cljs.core.identity).call(null,factory_8925.call(null,f_8903));dommy.core.update_event_listeners_BANG_.call(null,elem_8895,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8896,actual_type_8924,f_8903], null),canonical_f_8926);
if(cljs.core.truth_(elem_8895.addEventListener))
{elem_8895.addEventListener(cljs.core.name.call(null,actual_type_8924),canonical_f_8926);
} else
{elem_8895.attachEvent(cljs.core.name.call(null,actual_type_8924),canonical_f_8926);
}
{
var G__8927 = cljs.core.next.call(null,seq__8882_8917__$1);
var G__8928 = null;
var G__8929 = 0;
var G__8930 = 0;
seq__8882_8904 = G__8927;
chunk__8884_8905 = G__8928;
count__8885_8906 = G__8929;
i__8886_8907 = G__8930;
continue;
}
}
} else
{}
}
break;
}
{
var G__8931 = seq__8872_8897;
var G__8932 = chunk__8879_8898;
var G__8933 = count__8880_8899;
var G__8934 = (i__8881_8900 + 1);
seq__8872_8897 = G__8931;
chunk__8879_8898 = G__8932;
count__8880_8899 = G__8933;
i__8881_8900 = G__8934;
continue;
}
} else
{var temp__4092__auto___8935 = cljs.core.seq.call(null,seq__8872_8897);if(temp__4092__auto___8935)
{var seq__8872_8936__$1 = temp__4092__auto___8935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8872_8936__$1))
{var c__5398__auto___8937 = cljs.core.chunk_first.call(null,seq__8872_8936__$1);{
var G__8938 = cljs.core.chunk_rest.call(null,seq__8872_8936__$1);
var G__8939 = c__5398__auto___8937;
var G__8940 = cljs.core.count.call(null,c__5398__auto___8937);
var G__8941 = 0;
seq__8872_8897 = G__8938;
chunk__8879_8898 = G__8939;
count__8880_8899 = G__8940;
i__8881_8900 = G__8941;
continue;
}
} else
{var vec__8891_8942 = cljs.core.first.call(null,seq__8872_8936__$1);var orig_type_8943 = cljs.core.nth.call(null,vec__8891_8942,0,null);var f_8944 = cljs.core.nth.call(null,vec__8891_8942,1,null);var seq__8873_8945 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8943,new cljs.core.PersistentArrayMap.fromArray([orig_type_8943,cljs.core.identity], true, false)));var chunk__8875_8946 = null;var count__8876_8947 = 0;var i__8877_8948 = 0;while(true){
if((i__8877_8948 < count__8876_8947))
{var vec__8892_8949 = cljs.core._nth.call(null,chunk__8875_8946,i__8877_8948);var actual_type_8950 = cljs.core.nth.call(null,vec__8892_8949,0,null);var factory_8951 = cljs.core.nth.call(null,vec__8892_8949,1,null);var canonical_f_8952 = (cljs.core.truth_(selector_8896)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8895,selector_8896):cljs.core.identity).call(null,factory_8951.call(null,f_8944));dommy.core.update_event_listeners_BANG_.call(null,elem_8895,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8896,actual_type_8950,f_8944], null),canonical_f_8952);
if(cljs.core.truth_(elem_8895.addEventListener))
{elem_8895.addEventListener(cljs.core.name.call(null,actual_type_8950),canonical_f_8952);
} else
{elem_8895.attachEvent(cljs.core.name.call(null,actual_type_8950),canonical_f_8952);
}
{
var G__8953 = seq__8873_8945;
var G__8954 = chunk__8875_8946;
var G__8955 = count__8876_8947;
var G__8956 = (i__8877_8948 + 1);
seq__8873_8945 = G__8953;
chunk__8875_8946 = G__8954;
count__8876_8947 = G__8955;
i__8877_8948 = G__8956;
continue;
}
} else
{var temp__4092__auto___8957__$1 = cljs.core.seq.call(null,seq__8873_8945);if(temp__4092__auto___8957__$1)
{var seq__8873_8958__$1 = temp__4092__auto___8957__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8873_8958__$1))
{var c__5398__auto___8959 = cljs.core.chunk_first.call(null,seq__8873_8958__$1);{
var G__8960 = cljs.core.chunk_rest.call(null,seq__8873_8958__$1);
var G__8961 = c__5398__auto___8959;
var G__8962 = cljs.core.count.call(null,c__5398__auto___8959);
var G__8963 = 0;
seq__8873_8945 = G__8960;
chunk__8875_8946 = G__8961;
count__8876_8947 = G__8962;
i__8877_8948 = G__8963;
continue;
}
} else
{var vec__8893_8964 = cljs.core.first.call(null,seq__8873_8958__$1);var actual_type_8965 = cljs.core.nth.call(null,vec__8893_8964,0,null);var factory_8966 = cljs.core.nth.call(null,vec__8893_8964,1,null);var canonical_f_8967 = (cljs.core.truth_(selector_8896)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8895,selector_8896):cljs.core.identity).call(null,factory_8966.call(null,f_8944));dommy.core.update_event_listeners_BANG_.call(null,elem_8895,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8896,actual_type_8965,f_8944], null),canonical_f_8967);
if(cljs.core.truth_(elem_8895.addEventListener))
{elem_8895.addEventListener(cljs.core.name.call(null,actual_type_8965),canonical_f_8967);
} else
{elem_8895.attachEvent(cljs.core.name.call(null,actual_type_8965),canonical_f_8967);
}
{
var G__8968 = cljs.core.next.call(null,seq__8873_8958__$1);
var G__8969 = null;
var G__8970 = 0;
var G__8971 = 0;
seq__8873_8945 = G__8968;
chunk__8875_8946 = G__8969;
count__8876_8947 = G__8970;
i__8877_8948 = G__8971;
continue;
}
}
} else
{}
}
break;
}
{
var G__8972 = cljs.core.next.call(null,seq__8872_8936__$1);
var G__8973 = null;
var G__8974 = 0;
var G__8975 = 0;
seq__8872_8897 = G__8972;
chunk__8879_8898 = G__8973;
count__8880_8899 = G__8974;
i__8881_8900 = G__8975;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__8976){
var elem_sel = cljs.core.first(arglist__8976);
var type_fs = cljs.core.rest(arglist__8976);
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
var vec__9000_9023 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9024 = cljs.core.nth.call(null,vec__9000_9023,0,null);var selector_9025 = cljs.core.nth.call(null,vec__9000_9023,1,null);var seq__9001_9026 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9008_9027 = null;var count__9009_9028 = 0;var i__9010_9029 = 0;while(true){
if((i__9010_9029 < count__9009_9028))
{var vec__9017_9030 = cljs.core._nth.call(null,chunk__9008_9027,i__9010_9029);var orig_type_9031 = cljs.core.nth.call(null,vec__9017_9030,0,null);var f_9032 = cljs.core.nth.call(null,vec__9017_9030,1,null);var seq__9011_9033 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9031,new cljs.core.PersistentArrayMap.fromArray([orig_type_9031,cljs.core.identity], true, false)));var chunk__9013_9034 = null;var count__9014_9035 = 0;var i__9015_9036 = 0;while(true){
if((i__9015_9036 < count__9014_9035))
{var vec__9018_9037 = cljs.core._nth.call(null,chunk__9013_9034,i__9015_9036);var actual_type_9038 = cljs.core.nth.call(null,vec__9018_9037,0,null);var __9039 = cljs.core.nth.call(null,vec__9018_9037,1,null);var keys_9040 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9025,actual_type_9038,f_9032], null);var canonical_f_9041 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9024),keys_9040);dommy.core.update_event_listeners_BANG_.call(null,elem_9024,dommy.utils.dissoc_in,keys_9040);
if(cljs.core.truth_(elem_9024.removeEventListener))
{elem_9024.removeEventListener(cljs.core.name.call(null,actual_type_9038),canonical_f_9041);
} else
{elem_9024.detachEvent(cljs.core.name.call(null,actual_type_9038),canonical_f_9041);
}
{
var G__9042 = seq__9011_9033;
var G__9043 = chunk__9013_9034;
var G__9044 = count__9014_9035;
var G__9045 = (i__9015_9036 + 1);
seq__9011_9033 = G__9042;
chunk__9013_9034 = G__9043;
count__9014_9035 = G__9044;
i__9015_9036 = G__9045;
continue;
}
} else
{var temp__4092__auto___9046 = cljs.core.seq.call(null,seq__9011_9033);if(temp__4092__auto___9046)
{var seq__9011_9047__$1 = temp__4092__auto___9046;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9011_9047__$1))
{var c__5398__auto___9048 = cljs.core.chunk_first.call(null,seq__9011_9047__$1);{
var G__9049 = cljs.core.chunk_rest.call(null,seq__9011_9047__$1);
var G__9050 = c__5398__auto___9048;
var G__9051 = cljs.core.count.call(null,c__5398__auto___9048);
var G__9052 = 0;
seq__9011_9033 = G__9049;
chunk__9013_9034 = G__9050;
count__9014_9035 = G__9051;
i__9015_9036 = G__9052;
continue;
}
} else
{var vec__9019_9053 = cljs.core.first.call(null,seq__9011_9047__$1);var actual_type_9054 = cljs.core.nth.call(null,vec__9019_9053,0,null);var __9055 = cljs.core.nth.call(null,vec__9019_9053,1,null);var keys_9056 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9025,actual_type_9054,f_9032], null);var canonical_f_9057 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9024),keys_9056);dommy.core.update_event_listeners_BANG_.call(null,elem_9024,dommy.utils.dissoc_in,keys_9056);
if(cljs.core.truth_(elem_9024.removeEventListener))
{elem_9024.removeEventListener(cljs.core.name.call(null,actual_type_9054),canonical_f_9057);
} else
{elem_9024.detachEvent(cljs.core.name.call(null,actual_type_9054),canonical_f_9057);
}
{
var G__9058 = cljs.core.next.call(null,seq__9011_9047__$1);
var G__9059 = null;
var G__9060 = 0;
var G__9061 = 0;
seq__9011_9033 = G__9058;
chunk__9013_9034 = G__9059;
count__9014_9035 = G__9060;
i__9015_9036 = G__9061;
continue;
}
}
} else
{}
}
break;
}
{
var G__9062 = seq__9001_9026;
var G__9063 = chunk__9008_9027;
var G__9064 = count__9009_9028;
var G__9065 = (i__9010_9029 + 1);
seq__9001_9026 = G__9062;
chunk__9008_9027 = G__9063;
count__9009_9028 = G__9064;
i__9010_9029 = G__9065;
continue;
}
} else
{var temp__4092__auto___9066 = cljs.core.seq.call(null,seq__9001_9026);if(temp__4092__auto___9066)
{var seq__9001_9067__$1 = temp__4092__auto___9066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9001_9067__$1))
{var c__5398__auto___9068 = cljs.core.chunk_first.call(null,seq__9001_9067__$1);{
var G__9069 = cljs.core.chunk_rest.call(null,seq__9001_9067__$1);
var G__9070 = c__5398__auto___9068;
var G__9071 = cljs.core.count.call(null,c__5398__auto___9068);
var G__9072 = 0;
seq__9001_9026 = G__9069;
chunk__9008_9027 = G__9070;
count__9009_9028 = G__9071;
i__9010_9029 = G__9072;
continue;
}
} else
{var vec__9020_9073 = cljs.core.first.call(null,seq__9001_9067__$1);var orig_type_9074 = cljs.core.nth.call(null,vec__9020_9073,0,null);var f_9075 = cljs.core.nth.call(null,vec__9020_9073,1,null);var seq__9002_9076 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9074,new cljs.core.PersistentArrayMap.fromArray([orig_type_9074,cljs.core.identity], true, false)));var chunk__9004_9077 = null;var count__9005_9078 = 0;var i__9006_9079 = 0;while(true){
if((i__9006_9079 < count__9005_9078))
{var vec__9021_9080 = cljs.core._nth.call(null,chunk__9004_9077,i__9006_9079);var actual_type_9081 = cljs.core.nth.call(null,vec__9021_9080,0,null);var __9082 = cljs.core.nth.call(null,vec__9021_9080,1,null);var keys_9083 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9025,actual_type_9081,f_9075], null);var canonical_f_9084 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9024),keys_9083);dommy.core.update_event_listeners_BANG_.call(null,elem_9024,dommy.utils.dissoc_in,keys_9083);
if(cljs.core.truth_(elem_9024.removeEventListener))
{elem_9024.removeEventListener(cljs.core.name.call(null,actual_type_9081),canonical_f_9084);
} else
{elem_9024.detachEvent(cljs.core.name.call(null,actual_type_9081),canonical_f_9084);
}
{
var G__9085 = seq__9002_9076;
var G__9086 = chunk__9004_9077;
var G__9087 = count__9005_9078;
var G__9088 = (i__9006_9079 + 1);
seq__9002_9076 = G__9085;
chunk__9004_9077 = G__9086;
count__9005_9078 = G__9087;
i__9006_9079 = G__9088;
continue;
}
} else
{var temp__4092__auto___9089__$1 = cljs.core.seq.call(null,seq__9002_9076);if(temp__4092__auto___9089__$1)
{var seq__9002_9090__$1 = temp__4092__auto___9089__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9002_9090__$1))
{var c__5398__auto___9091 = cljs.core.chunk_first.call(null,seq__9002_9090__$1);{
var G__9092 = cljs.core.chunk_rest.call(null,seq__9002_9090__$1);
var G__9093 = c__5398__auto___9091;
var G__9094 = cljs.core.count.call(null,c__5398__auto___9091);
var G__9095 = 0;
seq__9002_9076 = G__9092;
chunk__9004_9077 = G__9093;
count__9005_9078 = G__9094;
i__9006_9079 = G__9095;
continue;
}
} else
{var vec__9022_9096 = cljs.core.first.call(null,seq__9002_9090__$1);var actual_type_9097 = cljs.core.nth.call(null,vec__9022_9096,0,null);var __9098 = cljs.core.nth.call(null,vec__9022_9096,1,null);var keys_9099 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9025,actual_type_9097,f_9075], null);var canonical_f_9100 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9024),keys_9099);dommy.core.update_event_listeners_BANG_.call(null,elem_9024,dommy.utils.dissoc_in,keys_9099);
if(cljs.core.truth_(elem_9024.removeEventListener))
{elem_9024.removeEventListener(cljs.core.name.call(null,actual_type_9097),canonical_f_9100);
} else
{elem_9024.detachEvent(cljs.core.name.call(null,actual_type_9097),canonical_f_9100);
}
{
var G__9101 = cljs.core.next.call(null,seq__9002_9090__$1);
var G__9102 = null;
var G__9103 = 0;
var G__9104 = 0;
seq__9002_9076 = G__9101;
chunk__9004_9077 = G__9102;
count__9005_9078 = G__9103;
i__9006_9079 = G__9104;
continue;
}
}
} else
{}
}
break;
}
{
var G__9105 = cljs.core.next.call(null,seq__9001_9067__$1);
var G__9106 = null;
var G__9107 = 0;
var G__9108 = 0;
seq__9001_9026 = G__9105;
chunk__9008_9027 = G__9106;
count__9009_9028 = G__9107;
i__9010_9029 = G__9108;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9109){
var elem_sel = cljs.core.first(arglist__9109);
var type_fs = cljs.core.rest(arglist__9109);
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
var vec__9117_9124 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9125 = cljs.core.nth.call(null,vec__9117_9124,0,null);var selector_9126 = cljs.core.nth.call(null,vec__9117_9124,1,null);var seq__9118_9127 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9119_9128 = null;var count__9120_9129 = 0;var i__9121_9130 = 0;while(true){
if((i__9121_9130 < count__9120_9129))
{var vec__9122_9131 = cljs.core._nth.call(null,chunk__9119_9128,i__9121_9130);var type_9132 = cljs.core.nth.call(null,vec__9122_9131,0,null);var f_9133 = cljs.core.nth.call(null,vec__9122_9131,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9132,((function (seq__9118_9127,chunk__9119_9128,count__9120_9129,i__9121_9130,vec__9122_9131,type_9132,f_9133){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9132,this_fn);
return f_9133.call(null,e);
});})(seq__9118_9127,chunk__9119_9128,count__9120_9129,i__9121_9130,vec__9122_9131,type_9132,f_9133))
);
{
var G__9134 = seq__9118_9127;
var G__9135 = chunk__9119_9128;
var G__9136 = count__9120_9129;
var G__9137 = (i__9121_9130 + 1);
seq__9118_9127 = G__9134;
chunk__9119_9128 = G__9135;
count__9120_9129 = G__9136;
i__9121_9130 = G__9137;
continue;
}
} else
{var temp__4092__auto___9138 = cljs.core.seq.call(null,seq__9118_9127);if(temp__4092__auto___9138)
{var seq__9118_9139__$1 = temp__4092__auto___9138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9118_9139__$1))
{var c__5398__auto___9140 = cljs.core.chunk_first.call(null,seq__9118_9139__$1);{
var G__9141 = cljs.core.chunk_rest.call(null,seq__9118_9139__$1);
var G__9142 = c__5398__auto___9140;
var G__9143 = cljs.core.count.call(null,c__5398__auto___9140);
var G__9144 = 0;
seq__9118_9127 = G__9141;
chunk__9119_9128 = G__9142;
count__9120_9129 = G__9143;
i__9121_9130 = G__9144;
continue;
}
} else
{var vec__9123_9145 = cljs.core.first.call(null,seq__9118_9139__$1);var type_9146 = cljs.core.nth.call(null,vec__9123_9145,0,null);var f_9147 = cljs.core.nth.call(null,vec__9123_9145,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9146,((function (seq__9118_9127,chunk__9119_9128,count__9120_9129,i__9121_9130,vec__9123_9145,type_9146,f_9147,seq__9118_9139__$1,temp__4092__auto___9138){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9146,this_fn);
return f_9147.call(null,e);
});})(seq__9118_9127,chunk__9119_9128,count__9120_9129,i__9121_9130,vec__9123_9145,type_9146,f_9147,seq__9118_9139__$1,temp__4092__auto___9138))
);
{
var G__9148 = cljs.core.next.call(null,seq__9118_9139__$1);
var G__9149 = null;
var G__9150 = 0;
var G__9151 = 0;
seq__9118_9127 = G__9148;
chunk__9119_9128 = G__9149;
count__9120_9129 = G__9150;
i__9121_9130 = G__9151;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9152){
var elem_sel = cljs.core.first(arglist__9152);
var type_fs = cljs.core.rest(arglist__9152);
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
var fire_BANG___delegate = function (node,event_type,p__9153){var vec__9155 = p__9153;var update_event_BANG_ = cljs.core.nth.call(null,vec__9155,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__4674__auto__ = update_event_BANG_;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
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
var p__9153 = null;if (arguments.length > 2) {
  p__9153 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__9153);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__9156){
var node = cljs.core.first(arglist__9156);
arglist__9156 = cljs.core.next(arglist__9156);
var event_type = cljs.core.first(arglist__9156);
var p__9153 = cljs.core.rest(arglist__9156);
return fire_BANG___delegate(node,event_type,p__9153);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
