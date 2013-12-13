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
var append_BANG___2 = (function (parent,child){var G__8803 = dommy.template.__GT_node_like.call(null,parent);G__8803.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8803;
});
var append_BANG___3 = (function() { 
var G__8808__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8804_8809 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8805_8810 = null;var count__8806_8811 = 0;var i__8807_8812 = 0;while(true){
if((i__8807_8812 < count__8806_8811))
{var c_8813 = cljs.core._nth.call(null,chunk__8805_8810,i__8807_8812);append_BANG_.call(null,parent__$1,c_8813);
{
var G__8814 = seq__8804_8809;
var G__8815 = chunk__8805_8810;
var G__8816 = count__8806_8811;
var G__8817 = (i__8807_8812 + 1);
seq__8804_8809 = G__8814;
chunk__8805_8810 = G__8815;
count__8806_8811 = G__8816;
i__8807_8812 = G__8817;
continue;
}
} else
{var temp__4092__auto___8818 = cljs.core.seq.call(null,seq__8804_8809);if(temp__4092__auto___8818)
{var seq__8804_8819__$1 = temp__4092__auto___8818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8804_8819__$1))
{var c__5398__auto___8820 = cljs.core.chunk_first.call(null,seq__8804_8819__$1);{
var G__8821 = cljs.core.chunk_rest.call(null,seq__8804_8819__$1);
var G__8822 = c__5398__auto___8820;
var G__8823 = cljs.core.count.call(null,c__5398__auto___8820);
var G__8824 = 0;
seq__8804_8809 = G__8821;
chunk__8805_8810 = G__8822;
count__8806_8811 = G__8823;
i__8807_8812 = G__8824;
continue;
}
} else
{var c_8825 = cljs.core.first.call(null,seq__8804_8819__$1);append_BANG_.call(null,parent__$1,c_8825);
{
var G__8826 = cljs.core.next.call(null,seq__8804_8819__$1);
var G__8827 = null;
var G__8828 = 0;
var G__8829 = 0;
seq__8804_8809 = G__8826;
chunk__8805_8810 = G__8827;
count__8806_8811 = G__8828;
i__8807_8812 = G__8829;
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
var G__8808 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8808__delegate.call(this,parent,child,more_children);};
G__8808.cljs$lang$maxFixedArity = 2;
G__8808.cljs$lang$applyTo = (function (arglist__8830){
var parent = cljs.core.first(arglist__8830);
arglist__8830 = cljs.core.next(arglist__8830);
var child = cljs.core.first(arglist__8830);
var more_children = cljs.core.rest(arglist__8830);
return G__8808__delegate(parent,child,more_children);
});
G__8808.cljs$core$IFn$_invoke$arity$variadic = G__8808__delegate;
return G__8808;
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
var prepend_BANG___2 = (function (parent,child){var G__8836 = dommy.template.__GT_node_like.call(null,parent);G__8836.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__8836;
});
var prepend_BANG___3 = (function() { 
var G__8841__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8837_8842 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8838_8843 = null;var count__8839_8844 = 0;var i__8840_8845 = 0;while(true){
if((i__8840_8845 < count__8839_8844))
{var c_8846 = cljs.core._nth.call(null,chunk__8838_8843,i__8840_8845);prepend_BANG_.call(null,parent__$1,c_8846);
{
var G__8847 = seq__8837_8842;
var G__8848 = chunk__8838_8843;
var G__8849 = count__8839_8844;
var G__8850 = (i__8840_8845 + 1);
seq__8837_8842 = G__8847;
chunk__8838_8843 = G__8848;
count__8839_8844 = G__8849;
i__8840_8845 = G__8850;
continue;
}
} else
{var temp__4092__auto___8851 = cljs.core.seq.call(null,seq__8837_8842);if(temp__4092__auto___8851)
{var seq__8837_8852__$1 = temp__4092__auto___8851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8837_8852__$1))
{var c__5398__auto___8853 = cljs.core.chunk_first.call(null,seq__8837_8852__$1);{
var G__8854 = cljs.core.chunk_rest.call(null,seq__8837_8852__$1);
var G__8855 = c__5398__auto___8853;
var G__8856 = cljs.core.count.call(null,c__5398__auto___8853);
var G__8857 = 0;
seq__8837_8842 = G__8854;
chunk__8838_8843 = G__8855;
count__8839_8844 = G__8856;
i__8840_8845 = G__8857;
continue;
}
} else
{var c_8858 = cljs.core.first.call(null,seq__8837_8852__$1);prepend_BANG_.call(null,parent__$1,c_8858);
{
var G__8859 = cljs.core.next.call(null,seq__8837_8852__$1);
var G__8860 = null;
var G__8861 = 0;
var G__8862 = 0;
seq__8837_8842 = G__8859;
chunk__8838_8843 = G__8860;
count__8839_8844 = G__8861;
i__8840_8845 = G__8862;
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
var G__8841 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8841__delegate.call(this,parent,child,more_children);};
G__8841.cljs$lang$maxFixedArity = 2;
G__8841.cljs$lang$applyTo = (function (arglist__8863){
var parent = cljs.core.first(arglist__8863);
arglist__8863 = cljs.core.next(arglist__8863);
var child = cljs.core.first(arglist__8863);
var more_children = cljs.core.rest(arglist__8863);
return G__8841__delegate(parent,child,more_children);
});
G__8841.cljs$core$IFn$_invoke$arity$variadic = G__8841__delegate;
return G__8841;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___8864 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___8864))
{var next_8865 = temp__4090__auto___8864;parent.insertBefore(actual_node,next_8865);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8867 = dommy.template.__GT_node_like.call(null,parent);G__8867.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8867,node_like);
return G__8867;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8869 = elem__$1.parentNode;G__8869.removeChild(elem__$1);
return G__8869;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8870_SHARP_){return p1__8870_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__8871_SHARP_){return !((p1__8871_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8872){var vec__8873 = p__8872;var special_mouse_event = cljs.core.nth.call(null,vec__8873,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__8873,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4674__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4674__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8874){
var elem = cljs.core.first(arglist__8874);
arglist__8874 = cljs.core.next(arglist__8874);
var f = cljs.core.first(arglist__8874);
var args = cljs.core.rest(arglist__8874);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8875_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8875_SHARP_));
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
var vec__8899_8922 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8923 = cljs.core.nth.call(null,vec__8899_8922,0,null);var selector_8924 = cljs.core.nth.call(null,vec__8899_8922,1,null);var seq__8900_8925 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8907_8926 = null;var count__8908_8927 = 0;var i__8909_8928 = 0;while(true){
if((i__8909_8928 < count__8908_8927))
{var vec__8916_8929 = cljs.core._nth.call(null,chunk__8907_8926,i__8909_8928);var orig_type_8930 = cljs.core.nth.call(null,vec__8916_8929,0,null);var f_8931 = cljs.core.nth.call(null,vec__8916_8929,1,null);var seq__8910_8932 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8930,new cljs.core.PersistentArrayMap.fromArray([orig_type_8930,cljs.core.identity], true, false)));var chunk__8912_8933 = null;var count__8913_8934 = 0;var i__8914_8935 = 0;while(true){
if((i__8914_8935 < count__8913_8934))
{var vec__8917_8936 = cljs.core._nth.call(null,chunk__8912_8933,i__8914_8935);var actual_type_8937 = cljs.core.nth.call(null,vec__8917_8936,0,null);var factory_8938 = cljs.core.nth.call(null,vec__8917_8936,1,null);var canonical_f_8939 = (cljs.core.truth_(selector_8924)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8923,selector_8924):cljs.core.identity).call(null,factory_8938.call(null,f_8931));dommy.core.update_event_listeners_BANG_.call(null,elem_8923,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8924,actual_type_8937,f_8931], null),canonical_f_8939);
if(cljs.core.truth_(elem_8923.addEventListener))
{elem_8923.addEventListener(cljs.core.name.call(null,actual_type_8937),canonical_f_8939);
} else
{elem_8923.attachEvent(cljs.core.name.call(null,actual_type_8937),canonical_f_8939);
}
{
var G__8940 = seq__8910_8932;
var G__8941 = chunk__8912_8933;
var G__8942 = count__8913_8934;
var G__8943 = (i__8914_8935 + 1);
seq__8910_8932 = G__8940;
chunk__8912_8933 = G__8941;
count__8913_8934 = G__8942;
i__8914_8935 = G__8943;
continue;
}
} else
{var temp__4092__auto___8944 = cljs.core.seq.call(null,seq__8910_8932);if(temp__4092__auto___8944)
{var seq__8910_8945__$1 = temp__4092__auto___8944;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8910_8945__$1))
{var c__5398__auto___8946 = cljs.core.chunk_first.call(null,seq__8910_8945__$1);{
var G__8947 = cljs.core.chunk_rest.call(null,seq__8910_8945__$1);
var G__8948 = c__5398__auto___8946;
var G__8949 = cljs.core.count.call(null,c__5398__auto___8946);
var G__8950 = 0;
seq__8910_8932 = G__8947;
chunk__8912_8933 = G__8948;
count__8913_8934 = G__8949;
i__8914_8935 = G__8950;
continue;
}
} else
{var vec__8918_8951 = cljs.core.first.call(null,seq__8910_8945__$1);var actual_type_8952 = cljs.core.nth.call(null,vec__8918_8951,0,null);var factory_8953 = cljs.core.nth.call(null,vec__8918_8951,1,null);var canonical_f_8954 = (cljs.core.truth_(selector_8924)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8923,selector_8924):cljs.core.identity).call(null,factory_8953.call(null,f_8931));dommy.core.update_event_listeners_BANG_.call(null,elem_8923,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8924,actual_type_8952,f_8931], null),canonical_f_8954);
if(cljs.core.truth_(elem_8923.addEventListener))
{elem_8923.addEventListener(cljs.core.name.call(null,actual_type_8952),canonical_f_8954);
} else
{elem_8923.attachEvent(cljs.core.name.call(null,actual_type_8952),canonical_f_8954);
}
{
var G__8955 = cljs.core.next.call(null,seq__8910_8945__$1);
var G__8956 = null;
var G__8957 = 0;
var G__8958 = 0;
seq__8910_8932 = G__8955;
chunk__8912_8933 = G__8956;
count__8913_8934 = G__8957;
i__8914_8935 = G__8958;
continue;
}
}
} else
{}
}
break;
}
{
var G__8959 = seq__8900_8925;
var G__8960 = chunk__8907_8926;
var G__8961 = count__8908_8927;
var G__8962 = (i__8909_8928 + 1);
seq__8900_8925 = G__8959;
chunk__8907_8926 = G__8960;
count__8908_8927 = G__8961;
i__8909_8928 = G__8962;
continue;
}
} else
{var temp__4092__auto___8963 = cljs.core.seq.call(null,seq__8900_8925);if(temp__4092__auto___8963)
{var seq__8900_8964__$1 = temp__4092__auto___8963;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8900_8964__$1))
{var c__5398__auto___8965 = cljs.core.chunk_first.call(null,seq__8900_8964__$1);{
var G__8966 = cljs.core.chunk_rest.call(null,seq__8900_8964__$1);
var G__8967 = c__5398__auto___8965;
var G__8968 = cljs.core.count.call(null,c__5398__auto___8965);
var G__8969 = 0;
seq__8900_8925 = G__8966;
chunk__8907_8926 = G__8967;
count__8908_8927 = G__8968;
i__8909_8928 = G__8969;
continue;
}
} else
{var vec__8919_8970 = cljs.core.first.call(null,seq__8900_8964__$1);var orig_type_8971 = cljs.core.nth.call(null,vec__8919_8970,0,null);var f_8972 = cljs.core.nth.call(null,vec__8919_8970,1,null);var seq__8901_8973 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8971,new cljs.core.PersistentArrayMap.fromArray([orig_type_8971,cljs.core.identity], true, false)));var chunk__8903_8974 = null;var count__8904_8975 = 0;var i__8905_8976 = 0;while(true){
if((i__8905_8976 < count__8904_8975))
{var vec__8920_8977 = cljs.core._nth.call(null,chunk__8903_8974,i__8905_8976);var actual_type_8978 = cljs.core.nth.call(null,vec__8920_8977,0,null);var factory_8979 = cljs.core.nth.call(null,vec__8920_8977,1,null);var canonical_f_8980 = (cljs.core.truth_(selector_8924)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8923,selector_8924):cljs.core.identity).call(null,factory_8979.call(null,f_8972));dommy.core.update_event_listeners_BANG_.call(null,elem_8923,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8924,actual_type_8978,f_8972], null),canonical_f_8980);
if(cljs.core.truth_(elem_8923.addEventListener))
{elem_8923.addEventListener(cljs.core.name.call(null,actual_type_8978),canonical_f_8980);
} else
{elem_8923.attachEvent(cljs.core.name.call(null,actual_type_8978),canonical_f_8980);
}
{
var G__8981 = seq__8901_8973;
var G__8982 = chunk__8903_8974;
var G__8983 = count__8904_8975;
var G__8984 = (i__8905_8976 + 1);
seq__8901_8973 = G__8981;
chunk__8903_8974 = G__8982;
count__8904_8975 = G__8983;
i__8905_8976 = G__8984;
continue;
}
} else
{var temp__4092__auto___8985__$1 = cljs.core.seq.call(null,seq__8901_8973);if(temp__4092__auto___8985__$1)
{var seq__8901_8986__$1 = temp__4092__auto___8985__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8901_8986__$1))
{var c__5398__auto___8987 = cljs.core.chunk_first.call(null,seq__8901_8986__$1);{
var G__8988 = cljs.core.chunk_rest.call(null,seq__8901_8986__$1);
var G__8989 = c__5398__auto___8987;
var G__8990 = cljs.core.count.call(null,c__5398__auto___8987);
var G__8991 = 0;
seq__8901_8973 = G__8988;
chunk__8903_8974 = G__8989;
count__8904_8975 = G__8990;
i__8905_8976 = G__8991;
continue;
}
} else
{var vec__8921_8992 = cljs.core.first.call(null,seq__8901_8986__$1);var actual_type_8993 = cljs.core.nth.call(null,vec__8921_8992,0,null);var factory_8994 = cljs.core.nth.call(null,vec__8921_8992,1,null);var canonical_f_8995 = (cljs.core.truth_(selector_8924)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8923,selector_8924):cljs.core.identity).call(null,factory_8994.call(null,f_8972));dommy.core.update_event_listeners_BANG_.call(null,elem_8923,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8924,actual_type_8993,f_8972], null),canonical_f_8995);
if(cljs.core.truth_(elem_8923.addEventListener))
{elem_8923.addEventListener(cljs.core.name.call(null,actual_type_8993),canonical_f_8995);
} else
{elem_8923.attachEvent(cljs.core.name.call(null,actual_type_8993),canonical_f_8995);
}
{
var G__8996 = cljs.core.next.call(null,seq__8901_8986__$1);
var G__8997 = null;
var G__8998 = 0;
var G__8999 = 0;
seq__8901_8973 = G__8996;
chunk__8903_8974 = G__8997;
count__8904_8975 = G__8998;
i__8905_8976 = G__8999;
continue;
}
}
} else
{}
}
break;
}
{
var G__9000 = cljs.core.next.call(null,seq__8900_8964__$1);
var G__9001 = null;
var G__9002 = 0;
var G__9003 = 0;
seq__8900_8925 = G__9000;
chunk__8907_8926 = G__9001;
count__8908_8927 = G__9002;
i__8909_8928 = G__9003;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__9004){
var elem_sel = cljs.core.first(arglist__9004);
var type_fs = cljs.core.rest(arglist__9004);
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
var vec__9028_9051 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9052 = cljs.core.nth.call(null,vec__9028_9051,0,null);var selector_9053 = cljs.core.nth.call(null,vec__9028_9051,1,null);var seq__9029_9054 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9036_9055 = null;var count__9037_9056 = 0;var i__9038_9057 = 0;while(true){
if((i__9038_9057 < count__9037_9056))
{var vec__9045_9058 = cljs.core._nth.call(null,chunk__9036_9055,i__9038_9057);var orig_type_9059 = cljs.core.nth.call(null,vec__9045_9058,0,null);var f_9060 = cljs.core.nth.call(null,vec__9045_9058,1,null);var seq__9039_9061 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9059,new cljs.core.PersistentArrayMap.fromArray([orig_type_9059,cljs.core.identity], true, false)));var chunk__9041_9062 = null;var count__9042_9063 = 0;var i__9043_9064 = 0;while(true){
if((i__9043_9064 < count__9042_9063))
{var vec__9046_9065 = cljs.core._nth.call(null,chunk__9041_9062,i__9043_9064);var actual_type_9066 = cljs.core.nth.call(null,vec__9046_9065,0,null);var __9067 = cljs.core.nth.call(null,vec__9046_9065,1,null);var keys_9068 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9053,actual_type_9066,f_9060], null);var canonical_f_9069 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9052),keys_9068);dommy.core.update_event_listeners_BANG_.call(null,elem_9052,dommy.utils.dissoc_in,keys_9068);
if(cljs.core.truth_(elem_9052.removeEventListener))
{elem_9052.removeEventListener(cljs.core.name.call(null,actual_type_9066),canonical_f_9069);
} else
{elem_9052.detachEvent(cljs.core.name.call(null,actual_type_9066),canonical_f_9069);
}
{
var G__9070 = seq__9039_9061;
var G__9071 = chunk__9041_9062;
var G__9072 = count__9042_9063;
var G__9073 = (i__9043_9064 + 1);
seq__9039_9061 = G__9070;
chunk__9041_9062 = G__9071;
count__9042_9063 = G__9072;
i__9043_9064 = G__9073;
continue;
}
} else
{var temp__4092__auto___9074 = cljs.core.seq.call(null,seq__9039_9061);if(temp__4092__auto___9074)
{var seq__9039_9075__$1 = temp__4092__auto___9074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9039_9075__$1))
{var c__5398__auto___9076 = cljs.core.chunk_first.call(null,seq__9039_9075__$1);{
var G__9077 = cljs.core.chunk_rest.call(null,seq__9039_9075__$1);
var G__9078 = c__5398__auto___9076;
var G__9079 = cljs.core.count.call(null,c__5398__auto___9076);
var G__9080 = 0;
seq__9039_9061 = G__9077;
chunk__9041_9062 = G__9078;
count__9042_9063 = G__9079;
i__9043_9064 = G__9080;
continue;
}
} else
{var vec__9047_9081 = cljs.core.first.call(null,seq__9039_9075__$1);var actual_type_9082 = cljs.core.nth.call(null,vec__9047_9081,0,null);var __9083 = cljs.core.nth.call(null,vec__9047_9081,1,null);var keys_9084 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9053,actual_type_9082,f_9060], null);var canonical_f_9085 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9052),keys_9084);dommy.core.update_event_listeners_BANG_.call(null,elem_9052,dommy.utils.dissoc_in,keys_9084);
if(cljs.core.truth_(elem_9052.removeEventListener))
{elem_9052.removeEventListener(cljs.core.name.call(null,actual_type_9082),canonical_f_9085);
} else
{elem_9052.detachEvent(cljs.core.name.call(null,actual_type_9082),canonical_f_9085);
}
{
var G__9086 = cljs.core.next.call(null,seq__9039_9075__$1);
var G__9087 = null;
var G__9088 = 0;
var G__9089 = 0;
seq__9039_9061 = G__9086;
chunk__9041_9062 = G__9087;
count__9042_9063 = G__9088;
i__9043_9064 = G__9089;
continue;
}
}
} else
{}
}
break;
}
{
var G__9090 = seq__9029_9054;
var G__9091 = chunk__9036_9055;
var G__9092 = count__9037_9056;
var G__9093 = (i__9038_9057 + 1);
seq__9029_9054 = G__9090;
chunk__9036_9055 = G__9091;
count__9037_9056 = G__9092;
i__9038_9057 = G__9093;
continue;
}
} else
{var temp__4092__auto___9094 = cljs.core.seq.call(null,seq__9029_9054);if(temp__4092__auto___9094)
{var seq__9029_9095__$1 = temp__4092__auto___9094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9029_9095__$1))
{var c__5398__auto___9096 = cljs.core.chunk_first.call(null,seq__9029_9095__$1);{
var G__9097 = cljs.core.chunk_rest.call(null,seq__9029_9095__$1);
var G__9098 = c__5398__auto___9096;
var G__9099 = cljs.core.count.call(null,c__5398__auto___9096);
var G__9100 = 0;
seq__9029_9054 = G__9097;
chunk__9036_9055 = G__9098;
count__9037_9056 = G__9099;
i__9038_9057 = G__9100;
continue;
}
} else
{var vec__9048_9101 = cljs.core.first.call(null,seq__9029_9095__$1);var orig_type_9102 = cljs.core.nth.call(null,vec__9048_9101,0,null);var f_9103 = cljs.core.nth.call(null,vec__9048_9101,1,null);var seq__9030_9104 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9102,new cljs.core.PersistentArrayMap.fromArray([orig_type_9102,cljs.core.identity], true, false)));var chunk__9032_9105 = null;var count__9033_9106 = 0;var i__9034_9107 = 0;while(true){
if((i__9034_9107 < count__9033_9106))
{var vec__9049_9108 = cljs.core._nth.call(null,chunk__9032_9105,i__9034_9107);var actual_type_9109 = cljs.core.nth.call(null,vec__9049_9108,0,null);var __9110 = cljs.core.nth.call(null,vec__9049_9108,1,null);var keys_9111 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9053,actual_type_9109,f_9103], null);var canonical_f_9112 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9052),keys_9111);dommy.core.update_event_listeners_BANG_.call(null,elem_9052,dommy.utils.dissoc_in,keys_9111);
if(cljs.core.truth_(elem_9052.removeEventListener))
{elem_9052.removeEventListener(cljs.core.name.call(null,actual_type_9109),canonical_f_9112);
} else
{elem_9052.detachEvent(cljs.core.name.call(null,actual_type_9109),canonical_f_9112);
}
{
var G__9113 = seq__9030_9104;
var G__9114 = chunk__9032_9105;
var G__9115 = count__9033_9106;
var G__9116 = (i__9034_9107 + 1);
seq__9030_9104 = G__9113;
chunk__9032_9105 = G__9114;
count__9033_9106 = G__9115;
i__9034_9107 = G__9116;
continue;
}
} else
{var temp__4092__auto___9117__$1 = cljs.core.seq.call(null,seq__9030_9104);if(temp__4092__auto___9117__$1)
{var seq__9030_9118__$1 = temp__4092__auto___9117__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9030_9118__$1))
{var c__5398__auto___9119 = cljs.core.chunk_first.call(null,seq__9030_9118__$1);{
var G__9120 = cljs.core.chunk_rest.call(null,seq__9030_9118__$1);
var G__9121 = c__5398__auto___9119;
var G__9122 = cljs.core.count.call(null,c__5398__auto___9119);
var G__9123 = 0;
seq__9030_9104 = G__9120;
chunk__9032_9105 = G__9121;
count__9033_9106 = G__9122;
i__9034_9107 = G__9123;
continue;
}
} else
{var vec__9050_9124 = cljs.core.first.call(null,seq__9030_9118__$1);var actual_type_9125 = cljs.core.nth.call(null,vec__9050_9124,0,null);var __9126 = cljs.core.nth.call(null,vec__9050_9124,1,null);var keys_9127 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9053,actual_type_9125,f_9103], null);var canonical_f_9128 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9052),keys_9127);dommy.core.update_event_listeners_BANG_.call(null,elem_9052,dommy.utils.dissoc_in,keys_9127);
if(cljs.core.truth_(elem_9052.removeEventListener))
{elem_9052.removeEventListener(cljs.core.name.call(null,actual_type_9125),canonical_f_9128);
} else
{elem_9052.detachEvent(cljs.core.name.call(null,actual_type_9125),canonical_f_9128);
}
{
var G__9129 = cljs.core.next.call(null,seq__9030_9118__$1);
var G__9130 = null;
var G__9131 = 0;
var G__9132 = 0;
seq__9030_9104 = G__9129;
chunk__9032_9105 = G__9130;
count__9033_9106 = G__9131;
i__9034_9107 = G__9132;
continue;
}
}
} else
{}
}
break;
}
{
var G__9133 = cljs.core.next.call(null,seq__9029_9095__$1);
var G__9134 = null;
var G__9135 = 0;
var G__9136 = 0;
seq__9029_9054 = G__9133;
chunk__9036_9055 = G__9134;
count__9037_9056 = G__9135;
i__9038_9057 = G__9136;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9137){
var elem_sel = cljs.core.first(arglist__9137);
var type_fs = cljs.core.rest(arglist__9137);
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
var vec__9145_9152 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9153 = cljs.core.nth.call(null,vec__9145_9152,0,null);var selector_9154 = cljs.core.nth.call(null,vec__9145_9152,1,null);var seq__9146_9155 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9147_9156 = null;var count__9148_9157 = 0;var i__9149_9158 = 0;while(true){
if((i__9149_9158 < count__9148_9157))
{var vec__9150_9159 = cljs.core._nth.call(null,chunk__9147_9156,i__9149_9158);var type_9160 = cljs.core.nth.call(null,vec__9150_9159,0,null);var f_9161 = cljs.core.nth.call(null,vec__9150_9159,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9160,((function (seq__9146_9155,chunk__9147_9156,count__9148_9157,i__9149_9158,vec__9150_9159,type_9160,f_9161){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9160,this_fn);
return f_9161.call(null,e);
});})(seq__9146_9155,chunk__9147_9156,count__9148_9157,i__9149_9158,vec__9150_9159,type_9160,f_9161))
);
{
var G__9162 = seq__9146_9155;
var G__9163 = chunk__9147_9156;
var G__9164 = count__9148_9157;
var G__9165 = (i__9149_9158 + 1);
seq__9146_9155 = G__9162;
chunk__9147_9156 = G__9163;
count__9148_9157 = G__9164;
i__9149_9158 = G__9165;
continue;
}
} else
{var temp__4092__auto___9166 = cljs.core.seq.call(null,seq__9146_9155);if(temp__4092__auto___9166)
{var seq__9146_9167__$1 = temp__4092__auto___9166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9146_9167__$1))
{var c__5398__auto___9168 = cljs.core.chunk_first.call(null,seq__9146_9167__$1);{
var G__9169 = cljs.core.chunk_rest.call(null,seq__9146_9167__$1);
var G__9170 = c__5398__auto___9168;
var G__9171 = cljs.core.count.call(null,c__5398__auto___9168);
var G__9172 = 0;
seq__9146_9155 = G__9169;
chunk__9147_9156 = G__9170;
count__9148_9157 = G__9171;
i__9149_9158 = G__9172;
continue;
}
} else
{var vec__9151_9173 = cljs.core.first.call(null,seq__9146_9167__$1);var type_9174 = cljs.core.nth.call(null,vec__9151_9173,0,null);var f_9175 = cljs.core.nth.call(null,vec__9151_9173,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9174,((function (seq__9146_9155,chunk__9147_9156,count__9148_9157,i__9149_9158,vec__9151_9173,type_9174,f_9175,seq__9146_9167__$1,temp__4092__auto___9166){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9174,this_fn);
return f_9175.call(null,e);
});})(seq__9146_9155,chunk__9147_9156,count__9148_9157,i__9149_9158,vec__9151_9173,type_9174,f_9175,seq__9146_9167__$1,temp__4092__auto___9166))
);
{
var G__9176 = cljs.core.next.call(null,seq__9146_9167__$1);
var G__9177 = null;
var G__9178 = 0;
var G__9179 = 0;
seq__9146_9155 = G__9176;
chunk__9147_9156 = G__9177;
count__9148_9157 = G__9178;
i__9149_9158 = G__9179;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9180){
var elem_sel = cljs.core.first(arglist__9180);
var type_fs = cljs.core.rest(arglist__9180);
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
var fire_BANG___delegate = function (node,event_type,p__9181){var vec__9183 = p__9181;var update_event_BANG_ = cljs.core.nth.call(null,vec__9183,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__9181 = null;if (arguments.length > 2) {
  p__9181 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__9181);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__9184){
var node = cljs.core.first(arglist__9184);
arglist__9184 = cljs.core.next(arglist__9184);
var event_type = cljs.core.first(arglist__9184);
var p__9181 = cljs.core.rest(arglist__9184);
return fire_BANG___delegate(node,event_type,p__9181);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
