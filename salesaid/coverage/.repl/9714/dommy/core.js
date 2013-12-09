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
var append_BANG___2 = (function (parent,child){var G__8779 = dommy.template.__GT_node_like.call(null,parent);G__8779.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8779;
});
var append_BANG___3 = (function() { 
var G__8784__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8780_8785 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8781_8786 = null;var count__8782_8787 = 0;var i__8783_8788 = 0;while(true){
if((i__8783_8788 < count__8782_8787))
{var c_8789 = cljs.core._nth.call(null,chunk__8781_8786,i__8783_8788);append_BANG_.call(null,parent__$1,c_8789);
{
var G__8790 = seq__8780_8785;
var G__8791 = chunk__8781_8786;
var G__8792 = count__8782_8787;
var G__8793 = (i__8783_8788 + 1);
seq__8780_8785 = G__8790;
chunk__8781_8786 = G__8791;
count__8782_8787 = G__8792;
i__8783_8788 = G__8793;
continue;
}
} else
{var temp__4092__auto___8794 = cljs.core.seq.call(null,seq__8780_8785);if(temp__4092__auto___8794)
{var seq__8780_8795__$1 = temp__4092__auto___8794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8780_8795__$1))
{var c__5398__auto___8796 = cljs.core.chunk_first.call(null,seq__8780_8795__$1);{
var G__8797 = cljs.core.chunk_rest.call(null,seq__8780_8795__$1);
var G__8798 = c__5398__auto___8796;
var G__8799 = cljs.core.count.call(null,c__5398__auto___8796);
var G__8800 = 0;
seq__8780_8785 = G__8797;
chunk__8781_8786 = G__8798;
count__8782_8787 = G__8799;
i__8783_8788 = G__8800;
continue;
}
} else
{var c_8801 = cljs.core.first.call(null,seq__8780_8795__$1);append_BANG_.call(null,parent__$1,c_8801);
{
var G__8802 = cljs.core.next.call(null,seq__8780_8795__$1);
var G__8803 = null;
var G__8804 = 0;
var G__8805 = 0;
seq__8780_8785 = G__8802;
chunk__8781_8786 = G__8803;
count__8782_8787 = G__8804;
i__8783_8788 = G__8805;
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
var G__8784 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8784__delegate.call(this,parent,child,more_children);};
G__8784.cljs$lang$maxFixedArity = 2;
G__8784.cljs$lang$applyTo = (function (arglist__8806){
var parent = cljs.core.first(arglist__8806);
arglist__8806 = cljs.core.next(arglist__8806);
var child = cljs.core.first(arglist__8806);
var more_children = cljs.core.rest(arglist__8806);
return G__8784__delegate(parent,child,more_children);
});
G__8784.cljs$core$IFn$_invoke$arity$variadic = G__8784__delegate;
return G__8784;
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
var prepend_BANG___2 = (function (parent,child){var G__8812 = dommy.template.__GT_node_like.call(null,parent);G__8812.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__8812;
});
var prepend_BANG___3 = (function() { 
var G__8817__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8813_8818 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8814_8819 = null;var count__8815_8820 = 0;var i__8816_8821 = 0;while(true){
if((i__8816_8821 < count__8815_8820))
{var c_8822 = cljs.core._nth.call(null,chunk__8814_8819,i__8816_8821);prepend_BANG_.call(null,parent__$1,c_8822);
{
var G__8823 = seq__8813_8818;
var G__8824 = chunk__8814_8819;
var G__8825 = count__8815_8820;
var G__8826 = (i__8816_8821 + 1);
seq__8813_8818 = G__8823;
chunk__8814_8819 = G__8824;
count__8815_8820 = G__8825;
i__8816_8821 = G__8826;
continue;
}
} else
{var temp__4092__auto___8827 = cljs.core.seq.call(null,seq__8813_8818);if(temp__4092__auto___8827)
{var seq__8813_8828__$1 = temp__4092__auto___8827;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8813_8828__$1))
{var c__5398__auto___8829 = cljs.core.chunk_first.call(null,seq__8813_8828__$1);{
var G__8830 = cljs.core.chunk_rest.call(null,seq__8813_8828__$1);
var G__8831 = c__5398__auto___8829;
var G__8832 = cljs.core.count.call(null,c__5398__auto___8829);
var G__8833 = 0;
seq__8813_8818 = G__8830;
chunk__8814_8819 = G__8831;
count__8815_8820 = G__8832;
i__8816_8821 = G__8833;
continue;
}
} else
{var c_8834 = cljs.core.first.call(null,seq__8813_8828__$1);prepend_BANG_.call(null,parent__$1,c_8834);
{
var G__8835 = cljs.core.next.call(null,seq__8813_8828__$1);
var G__8836 = null;
var G__8837 = 0;
var G__8838 = 0;
seq__8813_8818 = G__8835;
chunk__8814_8819 = G__8836;
count__8815_8820 = G__8837;
i__8816_8821 = G__8838;
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
var G__8817 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8817__delegate.call(this,parent,child,more_children);};
G__8817.cljs$lang$maxFixedArity = 2;
G__8817.cljs$lang$applyTo = (function (arglist__8839){
var parent = cljs.core.first(arglist__8839);
arglist__8839 = cljs.core.next(arglist__8839);
var child = cljs.core.first(arglist__8839);
var more_children = cljs.core.rest(arglist__8839);
return G__8817__delegate(parent,child,more_children);
});
G__8817.cljs$core$IFn$_invoke$arity$variadic = G__8817__delegate;
return G__8817;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___8840 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___8840))
{var next_8841 = temp__4090__auto___8840;parent.insertBefore(actual_node,next_8841);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8843 = dommy.template.__GT_node_like.call(null,parent);G__8843.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8843,node_like);
return G__8843;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8845 = elem__$1.parentNode;G__8845.removeChild(elem__$1);
return G__8845;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8846_SHARP_){return p1__8846_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__8847_SHARP_){return !((p1__8847_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8848){var vec__8849 = p__8848;var special_mouse_event = cljs.core.nth.call(null,vec__8849,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__8849,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4674__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4674__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8850){
var elem = cljs.core.first(arglist__8850);
arglist__8850 = cljs.core.next(arglist__8850);
var f = cljs.core.first(arglist__8850);
var args = cljs.core.rest(arglist__8850);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8851_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8851_SHARP_));
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
var vec__8875_8898 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8899 = cljs.core.nth.call(null,vec__8875_8898,0,null);var selector_8900 = cljs.core.nth.call(null,vec__8875_8898,1,null);var seq__8876_8901 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8883_8902 = null;var count__8884_8903 = 0;var i__8885_8904 = 0;while(true){
if((i__8885_8904 < count__8884_8903))
{var vec__8892_8905 = cljs.core._nth.call(null,chunk__8883_8902,i__8885_8904);var orig_type_8906 = cljs.core.nth.call(null,vec__8892_8905,0,null);var f_8907 = cljs.core.nth.call(null,vec__8892_8905,1,null);var seq__8886_8908 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8906,new cljs.core.PersistentArrayMap.fromArray([orig_type_8906,cljs.core.identity], true, false)));var chunk__8888_8909 = null;var count__8889_8910 = 0;var i__8890_8911 = 0;while(true){
if((i__8890_8911 < count__8889_8910))
{var vec__8893_8912 = cljs.core._nth.call(null,chunk__8888_8909,i__8890_8911);var actual_type_8913 = cljs.core.nth.call(null,vec__8893_8912,0,null);var factory_8914 = cljs.core.nth.call(null,vec__8893_8912,1,null);var canonical_f_8915 = (cljs.core.truth_(selector_8900)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8899,selector_8900):cljs.core.identity).call(null,factory_8914.call(null,f_8907));dommy.core.update_event_listeners_BANG_.call(null,elem_8899,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8900,actual_type_8913,f_8907], null),canonical_f_8915);
if(cljs.core.truth_(elem_8899.addEventListener))
{elem_8899.addEventListener(cljs.core.name.call(null,actual_type_8913),canonical_f_8915);
} else
{elem_8899.attachEvent(cljs.core.name.call(null,actual_type_8913),canonical_f_8915);
}
{
var G__8916 = seq__8886_8908;
var G__8917 = chunk__8888_8909;
var G__8918 = count__8889_8910;
var G__8919 = (i__8890_8911 + 1);
seq__8886_8908 = G__8916;
chunk__8888_8909 = G__8917;
count__8889_8910 = G__8918;
i__8890_8911 = G__8919;
continue;
}
} else
{var temp__4092__auto___8920 = cljs.core.seq.call(null,seq__8886_8908);if(temp__4092__auto___8920)
{var seq__8886_8921__$1 = temp__4092__auto___8920;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8886_8921__$1))
{var c__5398__auto___8922 = cljs.core.chunk_first.call(null,seq__8886_8921__$1);{
var G__8923 = cljs.core.chunk_rest.call(null,seq__8886_8921__$1);
var G__8924 = c__5398__auto___8922;
var G__8925 = cljs.core.count.call(null,c__5398__auto___8922);
var G__8926 = 0;
seq__8886_8908 = G__8923;
chunk__8888_8909 = G__8924;
count__8889_8910 = G__8925;
i__8890_8911 = G__8926;
continue;
}
} else
{var vec__8894_8927 = cljs.core.first.call(null,seq__8886_8921__$1);var actual_type_8928 = cljs.core.nth.call(null,vec__8894_8927,0,null);var factory_8929 = cljs.core.nth.call(null,vec__8894_8927,1,null);var canonical_f_8930 = (cljs.core.truth_(selector_8900)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8899,selector_8900):cljs.core.identity).call(null,factory_8929.call(null,f_8907));dommy.core.update_event_listeners_BANG_.call(null,elem_8899,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8900,actual_type_8928,f_8907], null),canonical_f_8930);
if(cljs.core.truth_(elem_8899.addEventListener))
{elem_8899.addEventListener(cljs.core.name.call(null,actual_type_8928),canonical_f_8930);
} else
{elem_8899.attachEvent(cljs.core.name.call(null,actual_type_8928),canonical_f_8930);
}
{
var G__8931 = cljs.core.next.call(null,seq__8886_8921__$1);
var G__8932 = null;
var G__8933 = 0;
var G__8934 = 0;
seq__8886_8908 = G__8931;
chunk__8888_8909 = G__8932;
count__8889_8910 = G__8933;
i__8890_8911 = G__8934;
continue;
}
}
} else
{}
}
break;
}
{
var G__8935 = seq__8876_8901;
var G__8936 = chunk__8883_8902;
var G__8937 = count__8884_8903;
var G__8938 = (i__8885_8904 + 1);
seq__8876_8901 = G__8935;
chunk__8883_8902 = G__8936;
count__8884_8903 = G__8937;
i__8885_8904 = G__8938;
continue;
}
} else
{var temp__4092__auto___8939 = cljs.core.seq.call(null,seq__8876_8901);if(temp__4092__auto___8939)
{var seq__8876_8940__$1 = temp__4092__auto___8939;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8876_8940__$1))
{var c__5398__auto___8941 = cljs.core.chunk_first.call(null,seq__8876_8940__$1);{
var G__8942 = cljs.core.chunk_rest.call(null,seq__8876_8940__$1);
var G__8943 = c__5398__auto___8941;
var G__8944 = cljs.core.count.call(null,c__5398__auto___8941);
var G__8945 = 0;
seq__8876_8901 = G__8942;
chunk__8883_8902 = G__8943;
count__8884_8903 = G__8944;
i__8885_8904 = G__8945;
continue;
}
} else
{var vec__8895_8946 = cljs.core.first.call(null,seq__8876_8940__$1);var orig_type_8947 = cljs.core.nth.call(null,vec__8895_8946,0,null);var f_8948 = cljs.core.nth.call(null,vec__8895_8946,1,null);var seq__8877_8949 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8947,new cljs.core.PersistentArrayMap.fromArray([orig_type_8947,cljs.core.identity], true, false)));var chunk__8879_8950 = null;var count__8880_8951 = 0;var i__8881_8952 = 0;while(true){
if((i__8881_8952 < count__8880_8951))
{var vec__8896_8953 = cljs.core._nth.call(null,chunk__8879_8950,i__8881_8952);var actual_type_8954 = cljs.core.nth.call(null,vec__8896_8953,0,null);var factory_8955 = cljs.core.nth.call(null,vec__8896_8953,1,null);var canonical_f_8956 = (cljs.core.truth_(selector_8900)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8899,selector_8900):cljs.core.identity).call(null,factory_8955.call(null,f_8948));dommy.core.update_event_listeners_BANG_.call(null,elem_8899,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8900,actual_type_8954,f_8948], null),canonical_f_8956);
if(cljs.core.truth_(elem_8899.addEventListener))
{elem_8899.addEventListener(cljs.core.name.call(null,actual_type_8954),canonical_f_8956);
} else
{elem_8899.attachEvent(cljs.core.name.call(null,actual_type_8954),canonical_f_8956);
}
{
var G__8957 = seq__8877_8949;
var G__8958 = chunk__8879_8950;
var G__8959 = count__8880_8951;
var G__8960 = (i__8881_8952 + 1);
seq__8877_8949 = G__8957;
chunk__8879_8950 = G__8958;
count__8880_8951 = G__8959;
i__8881_8952 = G__8960;
continue;
}
} else
{var temp__4092__auto___8961__$1 = cljs.core.seq.call(null,seq__8877_8949);if(temp__4092__auto___8961__$1)
{var seq__8877_8962__$1 = temp__4092__auto___8961__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8877_8962__$1))
{var c__5398__auto___8963 = cljs.core.chunk_first.call(null,seq__8877_8962__$1);{
var G__8964 = cljs.core.chunk_rest.call(null,seq__8877_8962__$1);
var G__8965 = c__5398__auto___8963;
var G__8966 = cljs.core.count.call(null,c__5398__auto___8963);
var G__8967 = 0;
seq__8877_8949 = G__8964;
chunk__8879_8950 = G__8965;
count__8880_8951 = G__8966;
i__8881_8952 = G__8967;
continue;
}
} else
{var vec__8897_8968 = cljs.core.first.call(null,seq__8877_8962__$1);var actual_type_8969 = cljs.core.nth.call(null,vec__8897_8968,0,null);var factory_8970 = cljs.core.nth.call(null,vec__8897_8968,1,null);var canonical_f_8971 = (cljs.core.truth_(selector_8900)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8899,selector_8900):cljs.core.identity).call(null,factory_8970.call(null,f_8948));dommy.core.update_event_listeners_BANG_.call(null,elem_8899,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8900,actual_type_8969,f_8948], null),canonical_f_8971);
if(cljs.core.truth_(elem_8899.addEventListener))
{elem_8899.addEventListener(cljs.core.name.call(null,actual_type_8969),canonical_f_8971);
} else
{elem_8899.attachEvent(cljs.core.name.call(null,actual_type_8969),canonical_f_8971);
}
{
var G__8972 = cljs.core.next.call(null,seq__8877_8962__$1);
var G__8973 = null;
var G__8974 = 0;
var G__8975 = 0;
seq__8877_8949 = G__8972;
chunk__8879_8950 = G__8973;
count__8880_8951 = G__8974;
i__8881_8952 = G__8975;
continue;
}
}
} else
{}
}
break;
}
{
var G__8976 = cljs.core.next.call(null,seq__8876_8940__$1);
var G__8977 = null;
var G__8978 = 0;
var G__8979 = 0;
seq__8876_8901 = G__8976;
chunk__8883_8902 = G__8977;
count__8884_8903 = G__8978;
i__8885_8904 = G__8979;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__8980){
var elem_sel = cljs.core.first(arglist__8980);
var type_fs = cljs.core.rest(arglist__8980);
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
var vec__9004_9027 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9028 = cljs.core.nth.call(null,vec__9004_9027,0,null);var selector_9029 = cljs.core.nth.call(null,vec__9004_9027,1,null);var seq__9005_9030 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9012_9031 = null;var count__9013_9032 = 0;var i__9014_9033 = 0;while(true){
if((i__9014_9033 < count__9013_9032))
{var vec__9021_9034 = cljs.core._nth.call(null,chunk__9012_9031,i__9014_9033);var orig_type_9035 = cljs.core.nth.call(null,vec__9021_9034,0,null);var f_9036 = cljs.core.nth.call(null,vec__9021_9034,1,null);var seq__9015_9037 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9035,new cljs.core.PersistentArrayMap.fromArray([orig_type_9035,cljs.core.identity], true, false)));var chunk__9017_9038 = null;var count__9018_9039 = 0;var i__9019_9040 = 0;while(true){
if((i__9019_9040 < count__9018_9039))
{var vec__9022_9041 = cljs.core._nth.call(null,chunk__9017_9038,i__9019_9040);var actual_type_9042 = cljs.core.nth.call(null,vec__9022_9041,0,null);var __9043 = cljs.core.nth.call(null,vec__9022_9041,1,null);var keys_9044 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9029,actual_type_9042,f_9036], null);var canonical_f_9045 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9028),keys_9044);dommy.core.update_event_listeners_BANG_.call(null,elem_9028,dommy.utils.dissoc_in,keys_9044);
if(cljs.core.truth_(elem_9028.removeEventListener))
{elem_9028.removeEventListener(cljs.core.name.call(null,actual_type_9042),canonical_f_9045);
} else
{elem_9028.detachEvent(cljs.core.name.call(null,actual_type_9042),canonical_f_9045);
}
{
var G__9046 = seq__9015_9037;
var G__9047 = chunk__9017_9038;
var G__9048 = count__9018_9039;
var G__9049 = (i__9019_9040 + 1);
seq__9015_9037 = G__9046;
chunk__9017_9038 = G__9047;
count__9018_9039 = G__9048;
i__9019_9040 = G__9049;
continue;
}
} else
{var temp__4092__auto___9050 = cljs.core.seq.call(null,seq__9015_9037);if(temp__4092__auto___9050)
{var seq__9015_9051__$1 = temp__4092__auto___9050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9015_9051__$1))
{var c__5398__auto___9052 = cljs.core.chunk_first.call(null,seq__9015_9051__$1);{
var G__9053 = cljs.core.chunk_rest.call(null,seq__9015_9051__$1);
var G__9054 = c__5398__auto___9052;
var G__9055 = cljs.core.count.call(null,c__5398__auto___9052);
var G__9056 = 0;
seq__9015_9037 = G__9053;
chunk__9017_9038 = G__9054;
count__9018_9039 = G__9055;
i__9019_9040 = G__9056;
continue;
}
} else
{var vec__9023_9057 = cljs.core.first.call(null,seq__9015_9051__$1);var actual_type_9058 = cljs.core.nth.call(null,vec__9023_9057,0,null);var __9059 = cljs.core.nth.call(null,vec__9023_9057,1,null);var keys_9060 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9029,actual_type_9058,f_9036], null);var canonical_f_9061 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9028),keys_9060);dommy.core.update_event_listeners_BANG_.call(null,elem_9028,dommy.utils.dissoc_in,keys_9060);
if(cljs.core.truth_(elem_9028.removeEventListener))
{elem_9028.removeEventListener(cljs.core.name.call(null,actual_type_9058),canonical_f_9061);
} else
{elem_9028.detachEvent(cljs.core.name.call(null,actual_type_9058),canonical_f_9061);
}
{
var G__9062 = cljs.core.next.call(null,seq__9015_9051__$1);
var G__9063 = null;
var G__9064 = 0;
var G__9065 = 0;
seq__9015_9037 = G__9062;
chunk__9017_9038 = G__9063;
count__9018_9039 = G__9064;
i__9019_9040 = G__9065;
continue;
}
}
} else
{}
}
break;
}
{
var G__9066 = seq__9005_9030;
var G__9067 = chunk__9012_9031;
var G__9068 = count__9013_9032;
var G__9069 = (i__9014_9033 + 1);
seq__9005_9030 = G__9066;
chunk__9012_9031 = G__9067;
count__9013_9032 = G__9068;
i__9014_9033 = G__9069;
continue;
}
} else
{var temp__4092__auto___9070 = cljs.core.seq.call(null,seq__9005_9030);if(temp__4092__auto___9070)
{var seq__9005_9071__$1 = temp__4092__auto___9070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9005_9071__$1))
{var c__5398__auto___9072 = cljs.core.chunk_first.call(null,seq__9005_9071__$1);{
var G__9073 = cljs.core.chunk_rest.call(null,seq__9005_9071__$1);
var G__9074 = c__5398__auto___9072;
var G__9075 = cljs.core.count.call(null,c__5398__auto___9072);
var G__9076 = 0;
seq__9005_9030 = G__9073;
chunk__9012_9031 = G__9074;
count__9013_9032 = G__9075;
i__9014_9033 = G__9076;
continue;
}
} else
{var vec__9024_9077 = cljs.core.first.call(null,seq__9005_9071__$1);var orig_type_9078 = cljs.core.nth.call(null,vec__9024_9077,0,null);var f_9079 = cljs.core.nth.call(null,vec__9024_9077,1,null);var seq__9006_9080 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9078,new cljs.core.PersistentArrayMap.fromArray([orig_type_9078,cljs.core.identity], true, false)));var chunk__9008_9081 = null;var count__9009_9082 = 0;var i__9010_9083 = 0;while(true){
if((i__9010_9083 < count__9009_9082))
{var vec__9025_9084 = cljs.core._nth.call(null,chunk__9008_9081,i__9010_9083);var actual_type_9085 = cljs.core.nth.call(null,vec__9025_9084,0,null);var __9086 = cljs.core.nth.call(null,vec__9025_9084,1,null);var keys_9087 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9029,actual_type_9085,f_9079], null);var canonical_f_9088 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9028),keys_9087);dommy.core.update_event_listeners_BANG_.call(null,elem_9028,dommy.utils.dissoc_in,keys_9087);
if(cljs.core.truth_(elem_9028.removeEventListener))
{elem_9028.removeEventListener(cljs.core.name.call(null,actual_type_9085),canonical_f_9088);
} else
{elem_9028.detachEvent(cljs.core.name.call(null,actual_type_9085),canonical_f_9088);
}
{
var G__9089 = seq__9006_9080;
var G__9090 = chunk__9008_9081;
var G__9091 = count__9009_9082;
var G__9092 = (i__9010_9083 + 1);
seq__9006_9080 = G__9089;
chunk__9008_9081 = G__9090;
count__9009_9082 = G__9091;
i__9010_9083 = G__9092;
continue;
}
} else
{var temp__4092__auto___9093__$1 = cljs.core.seq.call(null,seq__9006_9080);if(temp__4092__auto___9093__$1)
{var seq__9006_9094__$1 = temp__4092__auto___9093__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9006_9094__$1))
{var c__5398__auto___9095 = cljs.core.chunk_first.call(null,seq__9006_9094__$1);{
var G__9096 = cljs.core.chunk_rest.call(null,seq__9006_9094__$1);
var G__9097 = c__5398__auto___9095;
var G__9098 = cljs.core.count.call(null,c__5398__auto___9095);
var G__9099 = 0;
seq__9006_9080 = G__9096;
chunk__9008_9081 = G__9097;
count__9009_9082 = G__9098;
i__9010_9083 = G__9099;
continue;
}
} else
{var vec__9026_9100 = cljs.core.first.call(null,seq__9006_9094__$1);var actual_type_9101 = cljs.core.nth.call(null,vec__9026_9100,0,null);var __9102 = cljs.core.nth.call(null,vec__9026_9100,1,null);var keys_9103 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9029,actual_type_9101,f_9079], null);var canonical_f_9104 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9028),keys_9103);dommy.core.update_event_listeners_BANG_.call(null,elem_9028,dommy.utils.dissoc_in,keys_9103);
if(cljs.core.truth_(elem_9028.removeEventListener))
{elem_9028.removeEventListener(cljs.core.name.call(null,actual_type_9101),canonical_f_9104);
} else
{elem_9028.detachEvent(cljs.core.name.call(null,actual_type_9101),canonical_f_9104);
}
{
var G__9105 = cljs.core.next.call(null,seq__9006_9094__$1);
var G__9106 = null;
var G__9107 = 0;
var G__9108 = 0;
seq__9006_9080 = G__9105;
chunk__9008_9081 = G__9106;
count__9009_9082 = G__9107;
i__9010_9083 = G__9108;
continue;
}
}
} else
{}
}
break;
}
{
var G__9109 = cljs.core.next.call(null,seq__9005_9071__$1);
var G__9110 = null;
var G__9111 = 0;
var G__9112 = 0;
seq__9005_9030 = G__9109;
chunk__9012_9031 = G__9110;
count__9013_9032 = G__9111;
i__9014_9033 = G__9112;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9113){
var elem_sel = cljs.core.first(arglist__9113);
var type_fs = cljs.core.rest(arglist__9113);
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
var vec__9121_9128 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9129 = cljs.core.nth.call(null,vec__9121_9128,0,null);var selector_9130 = cljs.core.nth.call(null,vec__9121_9128,1,null);var seq__9122_9131 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9123_9132 = null;var count__9124_9133 = 0;var i__9125_9134 = 0;while(true){
if((i__9125_9134 < count__9124_9133))
{var vec__9126_9135 = cljs.core._nth.call(null,chunk__9123_9132,i__9125_9134);var type_9136 = cljs.core.nth.call(null,vec__9126_9135,0,null);var f_9137 = cljs.core.nth.call(null,vec__9126_9135,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9136,((function (seq__9122_9131,chunk__9123_9132,count__9124_9133,i__9125_9134,vec__9126_9135,type_9136,f_9137){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9136,this_fn);
return f_9137.call(null,e);
});})(seq__9122_9131,chunk__9123_9132,count__9124_9133,i__9125_9134,vec__9126_9135,type_9136,f_9137))
);
{
var G__9138 = seq__9122_9131;
var G__9139 = chunk__9123_9132;
var G__9140 = count__9124_9133;
var G__9141 = (i__9125_9134 + 1);
seq__9122_9131 = G__9138;
chunk__9123_9132 = G__9139;
count__9124_9133 = G__9140;
i__9125_9134 = G__9141;
continue;
}
} else
{var temp__4092__auto___9142 = cljs.core.seq.call(null,seq__9122_9131);if(temp__4092__auto___9142)
{var seq__9122_9143__$1 = temp__4092__auto___9142;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9122_9143__$1))
{var c__5398__auto___9144 = cljs.core.chunk_first.call(null,seq__9122_9143__$1);{
var G__9145 = cljs.core.chunk_rest.call(null,seq__9122_9143__$1);
var G__9146 = c__5398__auto___9144;
var G__9147 = cljs.core.count.call(null,c__5398__auto___9144);
var G__9148 = 0;
seq__9122_9131 = G__9145;
chunk__9123_9132 = G__9146;
count__9124_9133 = G__9147;
i__9125_9134 = G__9148;
continue;
}
} else
{var vec__9127_9149 = cljs.core.first.call(null,seq__9122_9143__$1);var type_9150 = cljs.core.nth.call(null,vec__9127_9149,0,null);var f_9151 = cljs.core.nth.call(null,vec__9127_9149,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9150,((function (seq__9122_9131,chunk__9123_9132,count__9124_9133,i__9125_9134,vec__9127_9149,type_9150,f_9151,seq__9122_9143__$1,temp__4092__auto___9142){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9150,this_fn);
return f_9151.call(null,e);
});})(seq__9122_9131,chunk__9123_9132,count__9124_9133,i__9125_9134,vec__9127_9149,type_9150,f_9151,seq__9122_9143__$1,temp__4092__auto___9142))
);
{
var G__9152 = cljs.core.next.call(null,seq__9122_9143__$1);
var G__9153 = null;
var G__9154 = 0;
var G__9155 = 0;
seq__9122_9131 = G__9152;
chunk__9123_9132 = G__9153;
count__9124_9133 = G__9154;
i__9125_9134 = G__9155;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9156){
var elem_sel = cljs.core.first(arglist__9156);
var type_fs = cljs.core.rest(arglist__9156);
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
var fire_BANG___delegate = function (node,event_type,p__9157){var vec__9159 = p__9157;var update_event_BANG_ = cljs.core.nth.call(null,vec__9159,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__9157 = null;if (arguments.length > 2) {
  p__9157 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__9157);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__9160){
var node = cljs.core.first(arglist__9160);
arglist__9160 = cljs.core.next(arglist__9160);
var event_type = cljs.core.first(arglist__9160);
var p__9157 = cljs.core.rest(arglist__9160);
return fire_BANG___delegate(node,event_type,p__9157);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
