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
var append_BANG___2 = (function (parent,child){var G__8771 = dommy.template.__GT_node_like.call(null,parent);G__8771.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8771;
});
var append_BANG___3 = (function() { 
var G__8776__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8772_8777 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8773_8778 = null;var count__8774_8779 = 0;var i__8775_8780 = 0;while(true){
if((i__8775_8780 < count__8774_8779))
{var c_8781 = cljs.core._nth.call(null,chunk__8773_8778,i__8775_8780);append_BANG_.call(null,parent__$1,c_8781);
{
var G__8782 = seq__8772_8777;
var G__8783 = chunk__8773_8778;
var G__8784 = count__8774_8779;
var G__8785 = (i__8775_8780 + 1);
seq__8772_8777 = G__8782;
chunk__8773_8778 = G__8783;
count__8774_8779 = G__8784;
i__8775_8780 = G__8785;
continue;
}
} else
{var temp__4092__auto___8786 = cljs.core.seq.call(null,seq__8772_8777);if(temp__4092__auto___8786)
{var seq__8772_8787__$1 = temp__4092__auto___8786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8772_8787__$1))
{var c__5398__auto___8788 = cljs.core.chunk_first.call(null,seq__8772_8787__$1);{
var G__8789 = cljs.core.chunk_rest.call(null,seq__8772_8787__$1);
var G__8790 = c__5398__auto___8788;
var G__8791 = cljs.core.count.call(null,c__5398__auto___8788);
var G__8792 = 0;
seq__8772_8777 = G__8789;
chunk__8773_8778 = G__8790;
count__8774_8779 = G__8791;
i__8775_8780 = G__8792;
continue;
}
} else
{var c_8793 = cljs.core.first.call(null,seq__8772_8787__$1);append_BANG_.call(null,parent__$1,c_8793);
{
var G__8794 = cljs.core.next.call(null,seq__8772_8787__$1);
var G__8795 = null;
var G__8796 = 0;
var G__8797 = 0;
seq__8772_8777 = G__8794;
chunk__8773_8778 = G__8795;
count__8774_8779 = G__8796;
i__8775_8780 = G__8797;
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
var G__8776 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8776__delegate.call(this,parent,child,more_children);};
G__8776.cljs$lang$maxFixedArity = 2;
G__8776.cljs$lang$applyTo = (function (arglist__8798){
var parent = cljs.core.first(arglist__8798);
arglist__8798 = cljs.core.next(arglist__8798);
var child = cljs.core.first(arglist__8798);
var more_children = cljs.core.rest(arglist__8798);
return G__8776__delegate(parent,child,more_children);
});
G__8776.cljs$core$IFn$_invoke$arity$variadic = G__8776__delegate;
return G__8776;
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
var prepend_BANG___2 = (function (parent,child){var G__8804 = dommy.template.__GT_node_like.call(null,parent);G__8804.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__8804;
});
var prepend_BANG___3 = (function() { 
var G__8809__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8805_8810 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8806_8811 = null;var count__8807_8812 = 0;var i__8808_8813 = 0;while(true){
if((i__8808_8813 < count__8807_8812))
{var c_8814 = cljs.core._nth.call(null,chunk__8806_8811,i__8808_8813);prepend_BANG_.call(null,parent__$1,c_8814);
{
var G__8815 = seq__8805_8810;
var G__8816 = chunk__8806_8811;
var G__8817 = count__8807_8812;
var G__8818 = (i__8808_8813 + 1);
seq__8805_8810 = G__8815;
chunk__8806_8811 = G__8816;
count__8807_8812 = G__8817;
i__8808_8813 = G__8818;
continue;
}
} else
{var temp__4092__auto___8819 = cljs.core.seq.call(null,seq__8805_8810);if(temp__4092__auto___8819)
{var seq__8805_8820__$1 = temp__4092__auto___8819;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8805_8820__$1))
{var c__5398__auto___8821 = cljs.core.chunk_first.call(null,seq__8805_8820__$1);{
var G__8822 = cljs.core.chunk_rest.call(null,seq__8805_8820__$1);
var G__8823 = c__5398__auto___8821;
var G__8824 = cljs.core.count.call(null,c__5398__auto___8821);
var G__8825 = 0;
seq__8805_8810 = G__8822;
chunk__8806_8811 = G__8823;
count__8807_8812 = G__8824;
i__8808_8813 = G__8825;
continue;
}
} else
{var c_8826 = cljs.core.first.call(null,seq__8805_8820__$1);prepend_BANG_.call(null,parent__$1,c_8826);
{
var G__8827 = cljs.core.next.call(null,seq__8805_8820__$1);
var G__8828 = null;
var G__8829 = 0;
var G__8830 = 0;
seq__8805_8810 = G__8827;
chunk__8806_8811 = G__8828;
count__8807_8812 = G__8829;
i__8808_8813 = G__8830;
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
var G__8809 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8809__delegate.call(this,parent,child,more_children);};
G__8809.cljs$lang$maxFixedArity = 2;
G__8809.cljs$lang$applyTo = (function (arglist__8831){
var parent = cljs.core.first(arglist__8831);
arglist__8831 = cljs.core.next(arglist__8831);
var child = cljs.core.first(arglist__8831);
var more_children = cljs.core.rest(arglist__8831);
return G__8809__delegate(parent,child,more_children);
});
G__8809.cljs$core$IFn$_invoke$arity$variadic = G__8809__delegate;
return G__8809;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___8832 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___8832))
{var next_8833 = temp__4090__auto___8832;parent.insertBefore(actual_node,next_8833);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8835 = dommy.template.__GT_node_like.call(null,parent);G__8835.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8835,node_like);
return G__8835;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8837 = elem__$1.parentNode;G__8837.removeChild(elem__$1);
return G__8837;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8838_SHARP_){return p1__8838_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__8839_SHARP_){return !((p1__8839_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8840){var vec__8841 = p__8840;var special_mouse_event = cljs.core.nth.call(null,vec__8841,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__8841,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4674__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4674__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8842){
var elem = cljs.core.first(arglist__8842);
arglist__8842 = cljs.core.next(arglist__8842);
var f = cljs.core.first(arglist__8842);
var args = cljs.core.rest(arglist__8842);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8843_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8843_SHARP_));
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
var vec__8867_8890 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8891 = cljs.core.nth.call(null,vec__8867_8890,0,null);var selector_8892 = cljs.core.nth.call(null,vec__8867_8890,1,null);var seq__8868_8893 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8875_8894 = null;var count__8876_8895 = 0;var i__8877_8896 = 0;while(true){
if((i__8877_8896 < count__8876_8895))
{var vec__8884_8897 = cljs.core._nth.call(null,chunk__8875_8894,i__8877_8896);var orig_type_8898 = cljs.core.nth.call(null,vec__8884_8897,0,null);var f_8899 = cljs.core.nth.call(null,vec__8884_8897,1,null);var seq__8878_8900 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8898,new cljs.core.PersistentArrayMap.fromArray([orig_type_8898,cljs.core.identity], true, false)));var chunk__8880_8901 = null;var count__8881_8902 = 0;var i__8882_8903 = 0;while(true){
if((i__8882_8903 < count__8881_8902))
{var vec__8885_8904 = cljs.core._nth.call(null,chunk__8880_8901,i__8882_8903);var actual_type_8905 = cljs.core.nth.call(null,vec__8885_8904,0,null);var factory_8906 = cljs.core.nth.call(null,vec__8885_8904,1,null);var canonical_f_8907 = (cljs.core.truth_(selector_8892)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8891,selector_8892):cljs.core.identity).call(null,factory_8906.call(null,f_8899));dommy.core.update_event_listeners_BANG_.call(null,elem_8891,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8892,actual_type_8905,f_8899], null),canonical_f_8907);
if(cljs.core.truth_(elem_8891.addEventListener))
{elem_8891.addEventListener(cljs.core.name.call(null,actual_type_8905),canonical_f_8907);
} else
{elem_8891.attachEvent(cljs.core.name.call(null,actual_type_8905),canonical_f_8907);
}
{
var G__8908 = seq__8878_8900;
var G__8909 = chunk__8880_8901;
var G__8910 = count__8881_8902;
var G__8911 = (i__8882_8903 + 1);
seq__8878_8900 = G__8908;
chunk__8880_8901 = G__8909;
count__8881_8902 = G__8910;
i__8882_8903 = G__8911;
continue;
}
} else
{var temp__4092__auto___8912 = cljs.core.seq.call(null,seq__8878_8900);if(temp__4092__auto___8912)
{var seq__8878_8913__$1 = temp__4092__auto___8912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8878_8913__$1))
{var c__5398__auto___8914 = cljs.core.chunk_first.call(null,seq__8878_8913__$1);{
var G__8915 = cljs.core.chunk_rest.call(null,seq__8878_8913__$1);
var G__8916 = c__5398__auto___8914;
var G__8917 = cljs.core.count.call(null,c__5398__auto___8914);
var G__8918 = 0;
seq__8878_8900 = G__8915;
chunk__8880_8901 = G__8916;
count__8881_8902 = G__8917;
i__8882_8903 = G__8918;
continue;
}
} else
{var vec__8886_8919 = cljs.core.first.call(null,seq__8878_8913__$1);var actual_type_8920 = cljs.core.nth.call(null,vec__8886_8919,0,null);var factory_8921 = cljs.core.nth.call(null,vec__8886_8919,1,null);var canonical_f_8922 = (cljs.core.truth_(selector_8892)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8891,selector_8892):cljs.core.identity).call(null,factory_8921.call(null,f_8899));dommy.core.update_event_listeners_BANG_.call(null,elem_8891,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8892,actual_type_8920,f_8899], null),canonical_f_8922);
if(cljs.core.truth_(elem_8891.addEventListener))
{elem_8891.addEventListener(cljs.core.name.call(null,actual_type_8920),canonical_f_8922);
} else
{elem_8891.attachEvent(cljs.core.name.call(null,actual_type_8920),canonical_f_8922);
}
{
var G__8923 = cljs.core.next.call(null,seq__8878_8913__$1);
var G__8924 = null;
var G__8925 = 0;
var G__8926 = 0;
seq__8878_8900 = G__8923;
chunk__8880_8901 = G__8924;
count__8881_8902 = G__8925;
i__8882_8903 = G__8926;
continue;
}
}
} else
{}
}
break;
}
{
var G__8927 = seq__8868_8893;
var G__8928 = chunk__8875_8894;
var G__8929 = count__8876_8895;
var G__8930 = (i__8877_8896 + 1);
seq__8868_8893 = G__8927;
chunk__8875_8894 = G__8928;
count__8876_8895 = G__8929;
i__8877_8896 = G__8930;
continue;
}
} else
{var temp__4092__auto___8931 = cljs.core.seq.call(null,seq__8868_8893);if(temp__4092__auto___8931)
{var seq__8868_8932__$1 = temp__4092__auto___8931;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8868_8932__$1))
{var c__5398__auto___8933 = cljs.core.chunk_first.call(null,seq__8868_8932__$1);{
var G__8934 = cljs.core.chunk_rest.call(null,seq__8868_8932__$1);
var G__8935 = c__5398__auto___8933;
var G__8936 = cljs.core.count.call(null,c__5398__auto___8933);
var G__8937 = 0;
seq__8868_8893 = G__8934;
chunk__8875_8894 = G__8935;
count__8876_8895 = G__8936;
i__8877_8896 = G__8937;
continue;
}
} else
{var vec__8887_8938 = cljs.core.first.call(null,seq__8868_8932__$1);var orig_type_8939 = cljs.core.nth.call(null,vec__8887_8938,0,null);var f_8940 = cljs.core.nth.call(null,vec__8887_8938,1,null);var seq__8869_8941 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8939,new cljs.core.PersistentArrayMap.fromArray([orig_type_8939,cljs.core.identity], true, false)));var chunk__8871_8942 = null;var count__8872_8943 = 0;var i__8873_8944 = 0;while(true){
if((i__8873_8944 < count__8872_8943))
{var vec__8888_8945 = cljs.core._nth.call(null,chunk__8871_8942,i__8873_8944);var actual_type_8946 = cljs.core.nth.call(null,vec__8888_8945,0,null);var factory_8947 = cljs.core.nth.call(null,vec__8888_8945,1,null);var canonical_f_8948 = (cljs.core.truth_(selector_8892)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8891,selector_8892):cljs.core.identity).call(null,factory_8947.call(null,f_8940));dommy.core.update_event_listeners_BANG_.call(null,elem_8891,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8892,actual_type_8946,f_8940], null),canonical_f_8948);
if(cljs.core.truth_(elem_8891.addEventListener))
{elem_8891.addEventListener(cljs.core.name.call(null,actual_type_8946),canonical_f_8948);
} else
{elem_8891.attachEvent(cljs.core.name.call(null,actual_type_8946),canonical_f_8948);
}
{
var G__8949 = seq__8869_8941;
var G__8950 = chunk__8871_8942;
var G__8951 = count__8872_8943;
var G__8952 = (i__8873_8944 + 1);
seq__8869_8941 = G__8949;
chunk__8871_8942 = G__8950;
count__8872_8943 = G__8951;
i__8873_8944 = G__8952;
continue;
}
} else
{var temp__4092__auto___8953__$1 = cljs.core.seq.call(null,seq__8869_8941);if(temp__4092__auto___8953__$1)
{var seq__8869_8954__$1 = temp__4092__auto___8953__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8869_8954__$1))
{var c__5398__auto___8955 = cljs.core.chunk_first.call(null,seq__8869_8954__$1);{
var G__8956 = cljs.core.chunk_rest.call(null,seq__8869_8954__$1);
var G__8957 = c__5398__auto___8955;
var G__8958 = cljs.core.count.call(null,c__5398__auto___8955);
var G__8959 = 0;
seq__8869_8941 = G__8956;
chunk__8871_8942 = G__8957;
count__8872_8943 = G__8958;
i__8873_8944 = G__8959;
continue;
}
} else
{var vec__8889_8960 = cljs.core.first.call(null,seq__8869_8954__$1);var actual_type_8961 = cljs.core.nth.call(null,vec__8889_8960,0,null);var factory_8962 = cljs.core.nth.call(null,vec__8889_8960,1,null);var canonical_f_8963 = (cljs.core.truth_(selector_8892)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8891,selector_8892):cljs.core.identity).call(null,factory_8962.call(null,f_8940));dommy.core.update_event_listeners_BANG_.call(null,elem_8891,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8892,actual_type_8961,f_8940], null),canonical_f_8963);
if(cljs.core.truth_(elem_8891.addEventListener))
{elem_8891.addEventListener(cljs.core.name.call(null,actual_type_8961),canonical_f_8963);
} else
{elem_8891.attachEvent(cljs.core.name.call(null,actual_type_8961),canonical_f_8963);
}
{
var G__8964 = cljs.core.next.call(null,seq__8869_8954__$1);
var G__8965 = null;
var G__8966 = 0;
var G__8967 = 0;
seq__8869_8941 = G__8964;
chunk__8871_8942 = G__8965;
count__8872_8943 = G__8966;
i__8873_8944 = G__8967;
continue;
}
}
} else
{}
}
break;
}
{
var G__8968 = cljs.core.next.call(null,seq__8868_8932__$1);
var G__8969 = null;
var G__8970 = 0;
var G__8971 = 0;
seq__8868_8893 = G__8968;
chunk__8875_8894 = G__8969;
count__8876_8895 = G__8970;
i__8877_8896 = G__8971;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__8972){
var elem_sel = cljs.core.first(arglist__8972);
var type_fs = cljs.core.rest(arglist__8972);
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
var vec__8996_9019 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9020 = cljs.core.nth.call(null,vec__8996_9019,0,null);var selector_9021 = cljs.core.nth.call(null,vec__8996_9019,1,null);var seq__8997_9022 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9004_9023 = null;var count__9005_9024 = 0;var i__9006_9025 = 0;while(true){
if((i__9006_9025 < count__9005_9024))
{var vec__9013_9026 = cljs.core._nth.call(null,chunk__9004_9023,i__9006_9025);var orig_type_9027 = cljs.core.nth.call(null,vec__9013_9026,0,null);var f_9028 = cljs.core.nth.call(null,vec__9013_9026,1,null);var seq__9007_9029 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9027,new cljs.core.PersistentArrayMap.fromArray([orig_type_9027,cljs.core.identity], true, false)));var chunk__9009_9030 = null;var count__9010_9031 = 0;var i__9011_9032 = 0;while(true){
if((i__9011_9032 < count__9010_9031))
{var vec__9014_9033 = cljs.core._nth.call(null,chunk__9009_9030,i__9011_9032);var actual_type_9034 = cljs.core.nth.call(null,vec__9014_9033,0,null);var __9035 = cljs.core.nth.call(null,vec__9014_9033,1,null);var keys_9036 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9021,actual_type_9034,f_9028], null);var canonical_f_9037 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9020),keys_9036);dommy.core.update_event_listeners_BANG_.call(null,elem_9020,dommy.utils.dissoc_in,keys_9036);
if(cljs.core.truth_(elem_9020.removeEventListener))
{elem_9020.removeEventListener(cljs.core.name.call(null,actual_type_9034),canonical_f_9037);
} else
{elem_9020.detachEvent(cljs.core.name.call(null,actual_type_9034),canonical_f_9037);
}
{
var G__9038 = seq__9007_9029;
var G__9039 = chunk__9009_9030;
var G__9040 = count__9010_9031;
var G__9041 = (i__9011_9032 + 1);
seq__9007_9029 = G__9038;
chunk__9009_9030 = G__9039;
count__9010_9031 = G__9040;
i__9011_9032 = G__9041;
continue;
}
} else
{var temp__4092__auto___9042 = cljs.core.seq.call(null,seq__9007_9029);if(temp__4092__auto___9042)
{var seq__9007_9043__$1 = temp__4092__auto___9042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9007_9043__$1))
{var c__5398__auto___9044 = cljs.core.chunk_first.call(null,seq__9007_9043__$1);{
var G__9045 = cljs.core.chunk_rest.call(null,seq__9007_9043__$1);
var G__9046 = c__5398__auto___9044;
var G__9047 = cljs.core.count.call(null,c__5398__auto___9044);
var G__9048 = 0;
seq__9007_9029 = G__9045;
chunk__9009_9030 = G__9046;
count__9010_9031 = G__9047;
i__9011_9032 = G__9048;
continue;
}
} else
{var vec__9015_9049 = cljs.core.first.call(null,seq__9007_9043__$1);var actual_type_9050 = cljs.core.nth.call(null,vec__9015_9049,0,null);var __9051 = cljs.core.nth.call(null,vec__9015_9049,1,null);var keys_9052 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9021,actual_type_9050,f_9028], null);var canonical_f_9053 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9020),keys_9052);dommy.core.update_event_listeners_BANG_.call(null,elem_9020,dommy.utils.dissoc_in,keys_9052);
if(cljs.core.truth_(elem_9020.removeEventListener))
{elem_9020.removeEventListener(cljs.core.name.call(null,actual_type_9050),canonical_f_9053);
} else
{elem_9020.detachEvent(cljs.core.name.call(null,actual_type_9050),canonical_f_9053);
}
{
var G__9054 = cljs.core.next.call(null,seq__9007_9043__$1);
var G__9055 = null;
var G__9056 = 0;
var G__9057 = 0;
seq__9007_9029 = G__9054;
chunk__9009_9030 = G__9055;
count__9010_9031 = G__9056;
i__9011_9032 = G__9057;
continue;
}
}
} else
{}
}
break;
}
{
var G__9058 = seq__8997_9022;
var G__9059 = chunk__9004_9023;
var G__9060 = count__9005_9024;
var G__9061 = (i__9006_9025 + 1);
seq__8997_9022 = G__9058;
chunk__9004_9023 = G__9059;
count__9005_9024 = G__9060;
i__9006_9025 = G__9061;
continue;
}
} else
{var temp__4092__auto___9062 = cljs.core.seq.call(null,seq__8997_9022);if(temp__4092__auto___9062)
{var seq__8997_9063__$1 = temp__4092__auto___9062;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8997_9063__$1))
{var c__5398__auto___9064 = cljs.core.chunk_first.call(null,seq__8997_9063__$1);{
var G__9065 = cljs.core.chunk_rest.call(null,seq__8997_9063__$1);
var G__9066 = c__5398__auto___9064;
var G__9067 = cljs.core.count.call(null,c__5398__auto___9064);
var G__9068 = 0;
seq__8997_9022 = G__9065;
chunk__9004_9023 = G__9066;
count__9005_9024 = G__9067;
i__9006_9025 = G__9068;
continue;
}
} else
{var vec__9016_9069 = cljs.core.first.call(null,seq__8997_9063__$1);var orig_type_9070 = cljs.core.nth.call(null,vec__9016_9069,0,null);var f_9071 = cljs.core.nth.call(null,vec__9016_9069,1,null);var seq__8998_9072 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9070,new cljs.core.PersistentArrayMap.fromArray([orig_type_9070,cljs.core.identity], true, false)));var chunk__9000_9073 = null;var count__9001_9074 = 0;var i__9002_9075 = 0;while(true){
if((i__9002_9075 < count__9001_9074))
{var vec__9017_9076 = cljs.core._nth.call(null,chunk__9000_9073,i__9002_9075);var actual_type_9077 = cljs.core.nth.call(null,vec__9017_9076,0,null);var __9078 = cljs.core.nth.call(null,vec__9017_9076,1,null);var keys_9079 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9021,actual_type_9077,f_9071], null);var canonical_f_9080 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9020),keys_9079);dommy.core.update_event_listeners_BANG_.call(null,elem_9020,dommy.utils.dissoc_in,keys_9079);
if(cljs.core.truth_(elem_9020.removeEventListener))
{elem_9020.removeEventListener(cljs.core.name.call(null,actual_type_9077),canonical_f_9080);
} else
{elem_9020.detachEvent(cljs.core.name.call(null,actual_type_9077),canonical_f_9080);
}
{
var G__9081 = seq__8998_9072;
var G__9082 = chunk__9000_9073;
var G__9083 = count__9001_9074;
var G__9084 = (i__9002_9075 + 1);
seq__8998_9072 = G__9081;
chunk__9000_9073 = G__9082;
count__9001_9074 = G__9083;
i__9002_9075 = G__9084;
continue;
}
} else
{var temp__4092__auto___9085__$1 = cljs.core.seq.call(null,seq__8998_9072);if(temp__4092__auto___9085__$1)
{var seq__8998_9086__$1 = temp__4092__auto___9085__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8998_9086__$1))
{var c__5398__auto___9087 = cljs.core.chunk_first.call(null,seq__8998_9086__$1);{
var G__9088 = cljs.core.chunk_rest.call(null,seq__8998_9086__$1);
var G__9089 = c__5398__auto___9087;
var G__9090 = cljs.core.count.call(null,c__5398__auto___9087);
var G__9091 = 0;
seq__8998_9072 = G__9088;
chunk__9000_9073 = G__9089;
count__9001_9074 = G__9090;
i__9002_9075 = G__9091;
continue;
}
} else
{var vec__9018_9092 = cljs.core.first.call(null,seq__8998_9086__$1);var actual_type_9093 = cljs.core.nth.call(null,vec__9018_9092,0,null);var __9094 = cljs.core.nth.call(null,vec__9018_9092,1,null);var keys_9095 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9021,actual_type_9093,f_9071], null);var canonical_f_9096 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9020),keys_9095);dommy.core.update_event_listeners_BANG_.call(null,elem_9020,dommy.utils.dissoc_in,keys_9095);
if(cljs.core.truth_(elem_9020.removeEventListener))
{elem_9020.removeEventListener(cljs.core.name.call(null,actual_type_9093),canonical_f_9096);
} else
{elem_9020.detachEvent(cljs.core.name.call(null,actual_type_9093),canonical_f_9096);
}
{
var G__9097 = cljs.core.next.call(null,seq__8998_9086__$1);
var G__9098 = null;
var G__9099 = 0;
var G__9100 = 0;
seq__8998_9072 = G__9097;
chunk__9000_9073 = G__9098;
count__9001_9074 = G__9099;
i__9002_9075 = G__9100;
continue;
}
}
} else
{}
}
break;
}
{
var G__9101 = cljs.core.next.call(null,seq__8997_9063__$1);
var G__9102 = null;
var G__9103 = 0;
var G__9104 = 0;
seq__8997_9022 = G__9101;
chunk__9004_9023 = G__9102;
count__9005_9024 = G__9103;
i__9006_9025 = G__9104;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9105){
var elem_sel = cljs.core.first(arglist__9105);
var type_fs = cljs.core.rest(arglist__9105);
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
var vec__9113_9120 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9121 = cljs.core.nth.call(null,vec__9113_9120,0,null);var selector_9122 = cljs.core.nth.call(null,vec__9113_9120,1,null);var seq__9114_9123 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9115_9124 = null;var count__9116_9125 = 0;var i__9117_9126 = 0;while(true){
if((i__9117_9126 < count__9116_9125))
{var vec__9118_9127 = cljs.core._nth.call(null,chunk__9115_9124,i__9117_9126);var type_9128 = cljs.core.nth.call(null,vec__9118_9127,0,null);var f_9129 = cljs.core.nth.call(null,vec__9118_9127,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9128,((function (seq__9114_9123,chunk__9115_9124,count__9116_9125,i__9117_9126,vec__9118_9127,type_9128,f_9129){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9128,this_fn);
return f_9129.call(null,e);
});})(seq__9114_9123,chunk__9115_9124,count__9116_9125,i__9117_9126,vec__9118_9127,type_9128,f_9129))
);
{
var G__9130 = seq__9114_9123;
var G__9131 = chunk__9115_9124;
var G__9132 = count__9116_9125;
var G__9133 = (i__9117_9126 + 1);
seq__9114_9123 = G__9130;
chunk__9115_9124 = G__9131;
count__9116_9125 = G__9132;
i__9117_9126 = G__9133;
continue;
}
} else
{var temp__4092__auto___9134 = cljs.core.seq.call(null,seq__9114_9123);if(temp__4092__auto___9134)
{var seq__9114_9135__$1 = temp__4092__auto___9134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9114_9135__$1))
{var c__5398__auto___9136 = cljs.core.chunk_first.call(null,seq__9114_9135__$1);{
var G__9137 = cljs.core.chunk_rest.call(null,seq__9114_9135__$1);
var G__9138 = c__5398__auto___9136;
var G__9139 = cljs.core.count.call(null,c__5398__auto___9136);
var G__9140 = 0;
seq__9114_9123 = G__9137;
chunk__9115_9124 = G__9138;
count__9116_9125 = G__9139;
i__9117_9126 = G__9140;
continue;
}
} else
{var vec__9119_9141 = cljs.core.first.call(null,seq__9114_9135__$1);var type_9142 = cljs.core.nth.call(null,vec__9119_9141,0,null);var f_9143 = cljs.core.nth.call(null,vec__9119_9141,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9142,((function (seq__9114_9123,chunk__9115_9124,count__9116_9125,i__9117_9126,vec__9119_9141,type_9142,f_9143,seq__9114_9135__$1,temp__4092__auto___9134){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9142,this_fn);
return f_9143.call(null,e);
});})(seq__9114_9123,chunk__9115_9124,count__9116_9125,i__9117_9126,vec__9119_9141,type_9142,f_9143,seq__9114_9135__$1,temp__4092__auto___9134))
);
{
var G__9144 = cljs.core.next.call(null,seq__9114_9135__$1);
var G__9145 = null;
var G__9146 = 0;
var G__9147 = 0;
seq__9114_9123 = G__9144;
chunk__9115_9124 = G__9145;
count__9116_9125 = G__9146;
i__9117_9126 = G__9147;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9148){
var elem_sel = cljs.core.first(arglist__9148);
var type_fs = cljs.core.rest(arglist__9148);
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
var fire_BANG___delegate = function (node,event_type,p__9149){var vec__9151 = p__9149;var update_event_BANG_ = cljs.core.nth.call(null,vec__9151,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__9149 = null;if (arguments.length > 2) {
  p__9149 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__9149);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__9152){
var node = cljs.core.first(arglist__9152);
arglist__9152 = cljs.core.next(arglist__9152);
var event_type = cljs.core.first(arglist__9152);
var p__9149 = cljs.core.rest(arglist__9152);
return fire_BANG___delegate(node,event_type,p__9149);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
