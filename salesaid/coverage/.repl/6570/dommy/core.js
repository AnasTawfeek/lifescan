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
var append_BANG___2 = (function (parent,child){var G__8807 = dommy.template.__GT_node_like.call(null,parent);G__8807.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8807;
});
var append_BANG___3 = (function() { 
var G__8812__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8808_8813 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8809_8814 = null;var count__8810_8815 = 0;var i__8811_8816 = 0;while(true){
if((i__8811_8816 < count__8810_8815))
{var c_8817 = cljs.core._nth.call(null,chunk__8809_8814,i__8811_8816);append_BANG_.call(null,parent__$1,c_8817);
{
var G__8818 = seq__8808_8813;
var G__8819 = chunk__8809_8814;
var G__8820 = count__8810_8815;
var G__8821 = (i__8811_8816 + 1);
seq__8808_8813 = G__8818;
chunk__8809_8814 = G__8819;
count__8810_8815 = G__8820;
i__8811_8816 = G__8821;
continue;
}
} else
{var temp__4092__auto___8822 = cljs.core.seq.call(null,seq__8808_8813);if(temp__4092__auto___8822)
{var seq__8808_8823__$1 = temp__4092__auto___8822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8808_8823__$1))
{var c__5398__auto___8824 = cljs.core.chunk_first.call(null,seq__8808_8823__$1);{
var G__8825 = cljs.core.chunk_rest.call(null,seq__8808_8823__$1);
var G__8826 = c__5398__auto___8824;
var G__8827 = cljs.core.count.call(null,c__5398__auto___8824);
var G__8828 = 0;
seq__8808_8813 = G__8825;
chunk__8809_8814 = G__8826;
count__8810_8815 = G__8827;
i__8811_8816 = G__8828;
continue;
}
} else
{var c_8829 = cljs.core.first.call(null,seq__8808_8823__$1);append_BANG_.call(null,parent__$1,c_8829);
{
var G__8830 = cljs.core.next.call(null,seq__8808_8823__$1);
var G__8831 = null;
var G__8832 = 0;
var G__8833 = 0;
seq__8808_8813 = G__8830;
chunk__8809_8814 = G__8831;
count__8810_8815 = G__8832;
i__8811_8816 = G__8833;
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
var G__8812 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8812__delegate.call(this,parent,child,more_children);};
G__8812.cljs$lang$maxFixedArity = 2;
G__8812.cljs$lang$applyTo = (function (arglist__8834){
var parent = cljs.core.first(arglist__8834);
arglist__8834 = cljs.core.next(arglist__8834);
var child = cljs.core.first(arglist__8834);
var more_children = cljs.core.rest(arglist__8834);
return G__8812__delegate(parent,child,more_children);
});
G__8812.cljs$core$IFn$_invoke$arity$variadic = G__8812__delegate;
return G__8812;
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
var prepend_BANG___2 = (function (parent,child){var G__8840 = dommy.template.__GT_node_like.call(null,parent);G__8840.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__8840;
});
var prepend_BANG___3 = (function() { 
var G__8845__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8841_8846 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8842_8847 = null;var count__8843_8848 = 0;var i__8844_8849 = 0;while(true){
if((i__8844_8849 < count__8843_8848))
{var c_8850 = cljs.core._nth.call(null,chunk__8842_8847,i__8844_8849);prepend_BANG_.call(null,parent__$1,c_8850);
{
var G__8851 = seq__8841_8846;
var G__8852 = chunk__8842_8847;
var G__8853 = count__8843_8848;
var G__8854 = (i__8844_8849 + 1);
seq__8841_8846 = G__8851;
chunk__8842_8847 = G__8852;
count__8843_8848 = G__8853;
i__8844_8849 = G__8854;
continue;
}
} else
{var temp__4092__auto___8855 = cljs.core.seq.call(null,seq__8841_8846);if(temp__4092__auto___8855)
{var seq__8841_8856__$1 = temp__4092__auto___8855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8841_8856__$1))
{var c__5398__auto___8857 = cljs.core.chunk_first.call(null,seq__8841_8856__$1);{
var G__8858 = cljs.core.chunk_rest.call(null,seq__8841_8856__$1);
var G__8859 = c__5398__auto___8857;
var G__8860 = cljs.core.count.call(null,c__5398__auto___8857);
var G__8861 = 0;
seq__8841_8846 = G__8858;
chunk__8842_8847 = G__8859;
count__8843_8848 = G__8860;
i__8844_8849 = G__8861;
continue;
}
} else
{var c_8862 = cljs.core.first.call(null,seq__8841_8856__$1);prepend_BANG_.call(null,parent__$1,c_8862);
{
var G__8863 = cljs.core.next.call(null,seq__8841_8856__$1);
var G__8864 = null;
var G__8865 = 0;
var G__8866 = 0;
seq__8841_8846 = G__8863;
chunk__8842_8847 = G__8864;
count__8843_8848 = G__8865;
i__8844_8849 = G__8866;
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
var G__8845 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8845__delegate.call(this,parent,child,more_children);};
G__8845.cljs$lang$maxFixedArity = 2;
G__8845.cljs$lang$applyTo = (function (arglist__8867){
var parent = cljs.core.first(arglist__8867);
arglist__8867 = cljs.core.next(arglist__8867);
var child = cljs.core.first(arglist__8867);
var more_children = cljs.core.rest(arglist__8867);
return G__8845__delegate(parent,child,more_children);
});
G__8845.cljs$core$IFn$_invoke$arity$variadic = G__8845__delegate;
return G__8845;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___8868 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___8868))
{var next_8869 = temp__4090__auto___8868;parent.insertBefore(actual_node,next_8869);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8871 = dommy.template.__GT_node_like.call(null,parent);G__8871.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8871,node_like);
return G__8871;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8873 = elem__$1.parentNode;G__8873.removeChild(elem__$1);
return G__8873;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8874_SHARP_){return p1__8874_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__8875_SHARP_){return !((p1__8875_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8876){var vec__8877 = p__8876;var special_mouse_event = cljs.core.nth.call(null,vec__8877,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__8877,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4674__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4674__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8878){
var elem = cljs.core.first(arglist__8878);
arglist__8878 = cljs.core.next(arglist__8878);
var f = cljs.core.first(arglist__8878);
var args = cljs.core.rest(arglist__8878);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8879_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8879_SHARP_));
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
var vec__8903_8926 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8927 = cljs.core.nth.call(null,vec__8903_8926,0,null);var selector_8928 = cljs.core.nth.call(null,vec__8903_8926,1,null);var seq__8904_8929 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8911_8930 = null;var count__8912_8931 = 0;var i__8913_8932 = 0;while(true){
if((i__8913_8932 < count__8912_8931))
{var vec__8920_8933 = cljs.core._nth.call(null,chunk__8911_8930,i__8913_8932);var orig_type_8934 = cljs.core.nth.call(null,vec__8920_8933,0,null);var f_8935 = cljs.core.nth.call(null,vec__8920_8933,1,null);var seq__8914_8936 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8934,new cljs.core.PersistentArrayMap.fromArray([orig_type_8934,cljs.core.identity], true, false)));var chunk__8916_8937 = null;var count__8917_8938 = 0;var i__8918_8939 = 0;while(true){
if((i__8918_8939 < count__8917_8938))
{var vec__8921_8940 = cljs.core._nth.call(null,chunk__8916_8937,i__8918_8939);var actual_type_8941 = cljs.core.nth.call(null,vec__8921_8940,0,null);var factory_8942 = cljs.core.nth.call(null,vec__8921_8940,1,null);var canonical_f_8943 = (cljs.core.truth_(selector_8928)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8927,selector_8928):cljs.core.identity).call(null,factory_8942.call(null,f_8935));dommy.core.update_event_listeners_BANG_.call(null,elem_8927,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8928,actual_type_8941,f_8935], null),canonical_f_8943);
if(cljs.core.truth_(elem_8927.addEventListener))
{elem_8927.addEventListener(cljs.core.name.call(null,actual_type_8941),canonical_f_8943);
} else
{elem_8927.attachEvent(cljs.core.name.call(null,actual_type_8941),canonical_f_8943);
}
{
var G__8944 = seq__8914_8936;
var G__8945 = chunk__8916_8937;
var G__8946 = count__8917_8938;
var G__8947 = (i__8918_8939 + 1);
seq__8914_8936 = G__8944;
chunk__8916_8937 = G__8945;
count__8917_8938 = G__8946;
i__8918_8939 = G__8947;
continue;
}
} else
{var temp__4092__auto___8948 = cljs.core.seq.call(null,seq__8914_8936);if(temp__4092__auto___8948)
{var seq__8914_8949__$1 = temp__4092__auto___8948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8914_8949__$1))
{var c__5398__auto___8950 = cljs.core.chunk_first.call(null,seq__8914_8949__$1);{
var G__8951 = cljs.core.chunk_rest.call(null,seq__8914_8949__$1);
var G__8952 = c__5398__auto___8950;
var G__8953 = cljs.core.count.call(null,c__5398__auto___8950);
var G__8954 = 0;
seq__8914_8936 = G__8951;
chunk__8916_8937 = G__8952;
count__8917_8938 = G__8953;
i__8918_8939 = G__8954;
continue;
}
} else
{var vec__8922_8955 = cljs.core.first.call(null,seq__8914_8949__$1);var actual_type_8956 = cljs.core.nth.call(null,vec__8922_8955,0,null);var factory_8957 = cljs.core.nth.call(null,vec__8922_8955,1,null);var canonical_f_8958 = (cljs.core.truth_(selector_8928)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8927,selector_8928):cljs.core.identity).call(null,factory_8957.call(null,f_8935));dommy.core.update_event_listeners_BANG_.call(null,elem_8927,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8928,actual_type_8956,f_8935], null),canonical_f_8958);
if(cljs.core.truth_(elem_8927.addEventListener))
{elem_8927.addEventListener(cljs.core.name.call(null,actual_type_8956),canonical_f_8958);
} else
{elem_8927.attachEvent(cljs.core.name.call(null,actual_type_8956),canonical_f_8958);
}
{
var G__8959 = cljs.core.next.call(null,seq__8914_8949__$1);
var G__8960 = null;
var G__8961 = 0;
var G__8962 = 0;
seq__8914_8936 = G__8959;
chunk__8916_8937 = G__8960;
count__8917_8938 = G__8961;
i__8918_8939 = G__8962;
continue;
}
}
} else
{}
}
break;
}
{
var G__8963 = seq__8904_8929;
var G__8964 = chunk__8911_8930;
var G__8965 = count__8912_8931;
var G__8966 = (i__8913_8932 + 1);
seq__8904_8929 = G__8963;
chunk__8911_8930 = G__8964;
count__8912_8931 = G__8965;
i__8913_8932 = G__8966;
continue;
}
} else
{var temp__4092__auto___8967 = cljs.core.seq.call(null,seq__8904_8929);if(temp__4092__auto___8967)
{var seq__8904_8968__$1 = temp__4092__auto___8967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8904_8968__$1))
{var c__5398__auto___8969 = cljs.core.chunk_first.call(null,seq__8904_8968__$1);{
var G__8970 = cljs.core.chunk_rest.call(null,seq__8904_8968__$1);
var G__8971 = c__5398__auto___8969;
var G__8972 = cljs.core.count.call(null,c__5398__auto___8969);
var G__8973 = 0;
seq__8904_8929 = G__8970;
chunk__8911_8930 = G__8971;
count__8912_8931 = G__8972;
i__8913_8932 = G__8973;
continue;
}
} else
{var vec__8923_8974 = cljs.core.first.call(null,seq__8904_8968__$1);var orig_type_8975 = cljs.core.nth.call(null,vec__8923_8974,0,null);var f_8976 = cljs.core.nth.call(null,vec__8923_8974,1,null);var seq__8905_8977 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8975,new cljs.core.PersistentArrayMap.fromArray([orig_type_8975,cljs.core.identity], true, false)));var chunk__8907_8978 = null;var count__8908_8979 = 0;var i__8909_8980 = 0;while(true){
if((i__8909_8980 < count__8908_8979))
{var vec__8924_8981 = cljs.core._nth.call(null,chunk__8907_8978,i__8909_8980);var actual_type_8982 = cljs.core.nth.call(null,vec__8924_8981,0,null);var factory_8983 = cljs.core.nth.call(null,vec__8924_8981,1,null);var canonical_f_8984 = (cljs.core.truth_(selector_8928)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8927,selector_8928):cljs.core.identity).call(null,factory_8983.call(null,f_8976));dommy.core.update_event_listeners_BANG_.call(null,elem_8927,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8928,actual_type_8982,f_8976], null),canonical_f_8984);
if(cljs.core.truth_(elem_8927.addEventListener))
{elem_8927.addEventListener(cljs.core.name.call(null,actual_type_8982),canonical_f_8984);
} else
{elem_8927.attachEvent(cljs.core.name.call(null,actual_type_8982),canonical_f_8984);
}
{
var G__8985 = seq__8905_8977;
var G__8986 = chunk__8907_8978;
var G__8987 = count__8908_8979;
var G__8988 = (i__8909_8980 + 1);
seq__8905_8977 = G__8985;
chunk__8907_8978 = G__8986;
count__8908_8979 = G__8987;
i__8909_8980 = G__8988;
continue;
}
} else
{var temp__4092__auto___8989__$1 = cljs.core.seq.call(null,seq__8905_8977);if(temp__4092__auto___8989__$1)
{var seq__8905_8990__$1 = temp__4092__auto___8989__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8905_8990__$1))
{var c__5398__auto___8991 = cljs.core.chunk_first.call(null,seq__8905_8990__$1);{
var G__8992 = cljs.core.chunk_rest.call(null,seq__8905_8990__$1);
var G__8993 = c__5398__auto___8991;
var G__8994 = cljs.core.count.call(null,c__5398__auto___8991);
var G__8995 = 0;
seq__8905_8977 = G__8992;
chunk__8907_8978 = G__8993;
count__8908_8979 = G__8994;
i__8909_8980 = G__8995;
continue;
}
} else
{var vec__8925_8996 = cljs.core.first.call(null,seq__8905_8990__$1);var actual_type_8997 = cljs.core.nth.call(null,vec__8925_8996,0,null);var factory_8998 = cljs.core.nth.call(null,vec__8925_8996,1,null);var canonical_f_8999 = (cljs.core.truth_(selector_8928)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8927,selector_8928):cljs.core.identity).call(null,factory_8998.call(null,f_8976));dommy.core.update_event_listeners_BANG_.call(null,elem_8927,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8928,actual_type_8997,f_8976], null),canonical_f_8999);
if(cljs.core.truth_(elem_8927.addEventListener))
{elem_8927.addEventListener(cljs.core.name.call(null,actual_type_8997),canonical_f_8999);
} else
{elem_8927.attachEvent(cljs.core.name.call(null,actual_type_8997),canonical_f_8999);
}
{
var G__9000 = cljs.core.next.call(null,seq__8905_8990__$1);
var G__9001 = null;
var G__9002 = 0;
var G__9003 = 0;
seq__8905_8977 = G__9000;
chunk__8907_8978 = G__9001;
count__8908_8979 = G__9002;
i__8909_8980 = G__9003;
continue;
}
}
} else
{}
}
break;
}
{
var G__9004 = cljs.core.next.call(null,seq__8904_8968__$1);
var G__9005 = null;
var G__9006 = 0;
var G__9007 = 0;
seq__8904_8929 = G__9004;
chunk__8911_8930 = G__9005;
count__8912_8931 = G__9006;
i__8913_8932 = G__9007;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__9008){
var elem_sel = cljs.core.first(arglist__9008);
var type_fs = cljs.core.rest(arglist__9008);
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
var vec__9032_9055 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9056 = cljs.core.nth.call(null,vec__9032_9055,0,null);var selector_9057 = cljs.core.nth.call(null,vec__9032_9055,1,null);var seq__9033_9058 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9040_9059 = null;var count__9041_9060 = 0;var i__9042_9061 = 0;while(true){
if((i__9042_9061 < count__9041_9060))
{var vec__9049_9062 = cljs.core._nth.call(null,chunk__9040_9059,i__9042_9061);var orig_type_9063 = cljs.core.nth.call(null,vec__9049_9062,0,null);var f_9064 = cljs.core.nth.call(null,vec__9049_9062,1,null);var seq__9043_9065 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9063,new cljs.core.PersistentArrayMap.fromArray([orig_type_9063,cljs.core.identity], true, false)));var chunk__9045_9066 = null;var count__9046_9067 = 0;var i__9047_9068 = 0;while(true){
if((i__9047_9068 < count__9046_9067))
{var vec__9050_9069 = cljs.core._nth.call(null,chunk__9045_9066,i__9047_9068);var actual_type_9070 = cljs.core.nth.call(null,vec__9050_9069,0,null);var __9071 = cljs.core.nth.call(null,vec__9050_9069,1,null);var keys_9072 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9057,actual_type_9070,f_9064], null);var canonical_f_9073 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9056),keys_9072);dommy.core.update_event_listeners_BANG_.call(null,elem_9056,dommy.utils.dissoc_in,keys_9072);
if(cljs.core.truth_(elem_9056.removeEventListener))
{elem_9056.removeEventListener(cljs.core.name.call(null,actual_type_9070),canonical_f_9073);
} else
{elem_9056.detachEvent(cljs.core.name.call(null,actual_type_9070),canonical_f_9073);
}
{
var G__9074 = seq__9043_9065;
var G__9075 = chunk__9045_9066;
var G__9076 = count__9046_9067;
var G__9077 = (i__9047_9068 + 1);
seq__9043_9065 = G__9074;
chunk__9045_9066 = G__9075;
count__9046_9067 = G__9076;
i__9047_9068 = G__9077;
continue;
}
} else
{var temp__4092__auto___9078 = cljs.core.seq.call(null,seq__9043_9065);if(temp__4092__auto___9078)
{var seq__9043_9079__$1 = temp__4092__auto___9078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9043_9079__$1))
{var c__5398__auto___9080 = cljs.core.chunk_first.call(null,seq__9043_9079__$1);{
var G__9081 = cljs.core.chunk_rest.call(null,seq__9043_9079__$1);
var G__9082 = c__5398__auto___9080;
var G__9083 = cljs.core.count.call(null,c__5398__auto___9080);
var G__9084 = 0;
seq__9043_9065 = G__9081;
chunk__9045_9066 = G__9082;
count__9046_9067 = G__9083;
i__9047_9068 = G__9084;
continue;
}
} else
{var vec__9051_9085 = cljs.core.first.call(null,seq__9043_9079__$1);var actual_type_9086 = cljs.core.nth.call(null,vec__9051_9085,0,null);var __9087 = cljs.core.nth.call(null,vec__9051_9085,1,null);var keys_9088 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9057,actual_type_9086,f_9064], null);var canonical_f_9089 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9056),keys_9088);dommy.core.update_event_listeners_BANG_.call(null,elem_9056,dommy.utils.dissoc_in,keys_9088);
if(cljs.core.truth_(elem_9056.removeEventListener))
{elem_9056.removeEventListener(cljs.core.name.call(null,actual_type_9086),canonical_f_9089);
} else
{elem_9056.detachEvent(cljs.core.name.call(null,actual_type_9086),canonical_f_9089);
}
{
var G__9090 = cljs.core.next.call(null,seq__9043_9079__$1);
var G__9091 = null;
var G__9092 = 0;
var G__9093 = 0;
seq__9043_9065 = G__9090;
chunk__9045_9066 = G__9091;
count__9046_9067 = G__9092;
i__9047_9068 = G__9093;
continue;
}
}
} else
{}
}
break;
}
{
var G__9094 = seq__9033_9058;
var G__9095 = chunk__9040_9059;
var G__9096 = count__9041_9060;
var G__9097 = (i__9042_9061 + 1);
seq__9033_9058 = G__9094;
chunk__9040_9059 = G__9095;
count__9041_9060 = G__9096;
i__9042_9061 = G__9097;
continue;
}
} else
{var temp__4092__auto___9098 = cljs.core.seq.call(null,seq__9033_9058);if(temp__4092__auto___9098)
{var seq__9033_9099__$1 = temp__4092__auto___9098;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9033_9099__$1))
{var c__5398__auto___9100 = cljs.core.chunk_first.call(null,seq__9033_9099__$1);{
var G__9101 = cljs.core.chunk_rest.call(null,seq__9033_9099__$1);
var G__9102 = c__5398__auto___9100;
var G__9103 = cljs.core.count.call(null,c__5398__auto___9100);
var G__9104 = 0;
seq__9033_9058 = G__9101;
chunk__9040_9059 = G__9102;
count__9041_9060 = G__9103;
i__9042_9061 = G__9104;
continue;
}
} else
{var vec__9052_9105 = cljs.core.first.call(null,seq__9033_9099__$1);var orig_type_9106 = cljs.core.nth.call(null,vec__9052_9105,0,null);var f_9107 = cljs.core.nth.call(null,vec__9052_9105,1,null);var seq__9034_9108 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9106,new cljs.core.PersistentArrayMap.fromArray([orig_type_9106,cljs.core.identity], true, false)));var chunk__9036_9109 = null;var count__9037_9110 = 0;var i__9038_9111 = 0;while(true){
if((i__9038_9111 < count__9037_9110))
{var vec__9053_9112 = cljs.core._nth.call(null,chunk__9036_9109,i__9038_9111);var actual_type_9113 = cljs.core.nth.call(null,vec__9053_9112,0,null);var __9114 = cljs.core.nth.call(null,vec__9053_9112,1,null);var keys_9115 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9057,actual_type_9113,f_9107], null);var canonical_f_9116 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9056),keys_9115);dommy.core.update_event_listeners_BANG_.call(null,elem_9056,dommy.utils.dissoc_in,keys_9115);
if(cljs.core.truth_(elem_9056.removeEventListener))
{elem_9056.removeEventListener(cljs.core.name.call(null,actual_type_9113),canonical_f_9116);
} else
{elem_9056.detachEvent(cljs.core.name.call(null,actual_type_9113),canonical_f_9116);
}
{
var G__9117 = seq__9034_9108;
var G__9118 = chunk__9036_9109;
var G__9119 = count__9037_9110;
var G__9120 = (i__9038_9111 + 1);
seq__9034_9108 = G__9117;
chunk__9036_9109 = G__9118;
count__9037_9110 = G__9119;
i__9038_9111 = G__9120;
continue;
}
} else
{var temp__4092__auto___9121__$1 = cljs.core.seq.call(null,seq__9034_9108);if(temp__4092__auto___9121__$1)
{var seq__9034_9122__$1 = temp__4092__auto___9121__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9034_9122__$1))
{var c__5398__auto___9123 = cljs.core.chunk_first.call(null,seq__9034_9122__$1);{
var G__9124 = cljs.core.chunk_rest.call(null,seq__9034_9122__$1);
var G__9125 = c__5398__auto___9123;
var G__9126 = cljs.core.count.call(null,c__5398__auto___9123);
var G__9127 = 0;
seq__9034_9108 = G__9124;
chunk__9036_9109 = G__9125;
count__9037_9110 = G__9126;
i__9038_9111 = G__9127;
continue;
}
} else
{var vec__9054_9128 = cljs.core.first.call(null,seq__9034_9122__$1);var actual_type_9129 = cljs.core.nth.call(null,vec__9054_9128,0,null);var __9130 = cljs.core.nth.call(null,vec__9054_9128,1,null);var keys_9131 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9057,actual_type_9129,f_9107], null);var canonical_f_9132 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9056),keys_9131);dommy.core.update_event_listeners_BANG_.call(null,elem_9056,dommy.utils.dissoc_in,keys_9131);
if(cljs.core.truth_(elem_9056.removeEventListener))
{elem_9056.removeEventListener(cljs.core.name.call(null,actual_type_9129),canonical_f_9132);
} else
{elem_9056.detachEvent(cljs.core.name.call(null,actual_type_9129),canonical_f_9132);
}
{
var G__9133 = cljs.core.next.call(null,seq__9034_9122__$1);
var G__9134 = null;
var G__9135 = 0;
var G__9136 = 0;
seq__9034_9108 = G__9133;
chunk__9036_9109 = G__9134;
count__9037_9110 = G__9135;
i__9038_9111 = G__9136;
continue;
}
}
} else
{}
}
break;
}
{
var G__9137 = cljs.core.next.call(null,seq__9033_9099__$1);
var G__9138 = null;
var G__9139 = 0;
var G__9140 = 0;
seq__9033_9058 = G__9137;
chunk__9040_9059 = G__9138;
count__9041_9060 = G__9139;
i__9042_9061 = G__9140;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9141){
var elem_sel = cljs.core.first(arglist__9141);
var type_fs = cljs.core.rest(arglist__9141);
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
var vec__9149_9156 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9157 = cljs.core.nth.call(null,vec__9149_9156,0,null);var selector_9158 = cljs.core.nth.call(null,vec__9149_9156,1,null);var seq__9150_9159 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9151_9160 = null;var count__9152_9161 = 0;var i__9153_9162 = 0;while(true){
if((i__9153_9162 < count__9152_9161))
{var vec__9154_9163 = cljs.core._nth.call(null,chunk__9151_9160,i__9153_9162);var type_9164 = cljs.core.nth.call(null,vec__9154_9163,0,null);var f_9165 = cljs.core.nth.call(null,vec__9154_9163,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9164,((function (seq__9150_9159,chunk__9151_9160,count__9152_9161,i__9153_9162,vec__9154_9163,type_9164,f_9165){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9164,this_fn);
return f_9165.call(null,e);
});})(seq__9150_9159,chunk__9151_9160,count__9152_9161,i__9153_9162,vec__9154_9163,type_9164,f_9165))
);
{
var G__9166 = seq__9150_9159;
var G__9167 = chunk__9151_9160;
var G__9168 = count__9152_9161;
var G__9169 = (i__9153_9162 + 1);
seq__9150_9159 = G__9166;
chunk__9151_9160 = G__9167;
count__9152_9161 = G__9168;
i__9153_9162 = G__9169;
continue;
}
} else
{var temp__4092__auto___9170 = cljs.core.seq.call(null,seq__9150_9159);if(temp__4092__auto___9170)
{var seq__9150_9171__$1 = temp__4092__auto___9170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9150_9171__$1))
{var c__5398__auto___9172 = cljs.core.chunk_first.call(null,seq__9150_9171__$1);{
var G__9173 = cljs.core.chunk_rest.call(null,seq__9150_9171__$1);
var G__9174 = c__5398__auto___9172;
var G__9175 = cljs.core.count.call(null,c__5398__auto___9172);
var G__9176 = 0;
seq__9150_9159 = G__9173;
chunk__9151_9160 = G__9174;
count__9152_9161 = G__9175;
i__9153_9162 = G__9176;
continue;
}
} else
{var vec__9155_9177 = cljs.core.first.call(null,seq__9150_9171__$1);var type_9178 = cljs.core.nth.call(null,vec__9155_9177,0,null);var f_9179 = cljs.core.nth.call(null,vec__9155_9177,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9178,((function (seq__9150_9159,chunk__9151_9160,count__9152_9161,i__9153_9162,vec__9155_9177,type_9178,f_9179,seq__9150_9171__$1,temp__4092__auto___9170){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9178,this_fn);
return f_9179.call(null,e);
});})(seq__9150_9159,chunk__9151_9160,count__9152_9161,i__9153_9162,vec__9155_9177,type_9178,f_9179,seq__9150_9171__$1,temp__4092__auto___9170))
);
{
var G__9180 = cljs.core.next.call(null,seq__9150_9171__$1);
var G__9181 = null;
var G__9182 = 0;
var G__9183 = 0;
seq__9150_9159 = G__9180;
chunk__9151_9160 = G__9181;
count__9152_9161 = G__9182;
i__9153_9162 = G__9183;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9184){
var elem_sel = cljs.core.first(arglist__9184);
var type_fs = cljs.core.rest(arglist__9184);
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
var fire_BANG___delegate = function (node,event_type,p__9185){var vec__9187 = p__9185;var update_event_BANG_ = cljs.core.nth.call(null,vec__9187,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__9185 = null;if (arguments.length > 2) {
  p__9185 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__9185);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__9188){
var node = cljs.core.first(arglist__9188);
arglist__9188 = cljs.core.next(arglist__9188);
var event_type = cljs.core.first(arglist__9188);
var p__9185 = cljs.core.rest(arglist__9188);
return fire_BANG___delegate(node,event_type,p__9185);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
