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
dommy.core.text = (function text(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var or__4772__auto__ = elem__$1.textContent;if(cljs.core.truth_(or__4772__auto__))
{return or__4772__auto__;
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
var append_BANG___2 = (function (parent,child){var G__8873 = dommy.template.__GT_node_like.call(null,parent);G__8873.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8873;
});
var append_BANG___3 = (function() { 
var G__8878__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8874_8879 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8875_8880 = null;var count__8876_8881 = 0;var i__8877_8882 = 0;while(true){
if((i__8877_8882 < count__8876_8881))
{var c_8883 = cljs.core._nth.call(null,chunk__8875_8880,i__8877_8882);append_BANG_.call(null,parent__$1,c_8883);
{
var G__8884 = seq__8874_8879;
var G__8885 = chunk__8875_8880;
var G__8886 = count__8876_8881;
var G__8887 = (i__8877_8882 + 1);
seq__8874_8879 = G__8884;
chunk__8875_8880 = G__8885;
count__8876_8881 = G__8886;
i__8877_8882 = G__8887;
continue;
}
} else
{var temp__4092__auto___8888 = cljs.core.seq.call(null,seq__8874_8879);if(temp__4092__auto___8888)
{var seq__8874_8889__$1 = temp__4092__auto___8888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8874_8889__$1))
{var c__5496__auto___8890 = cljs.core.chunk_first.call(null,seq__8874_8889__$1);{
var G__8891 = cljs.core.chunk_rest.call(null,seq__8874_8889__$1);
var G__8892 = c__5496__auto___8890;
var G__8893 = cljs.core.count.call(null,c__5496__auto___8890);
var G__8894 = 0;
seq__8874_8879 = G__8891;
chunk__8875_8880 = G__8892;
count__8876_8881 = G__8893;
i__8877_8882 = G__8894;
continue;
}
} else
{var c_8895 = cljs.core.first.call(null,seq__8874_8889__$1);append_BANG_.call(null,parent__$1,c_8895);
{
var G__8896 = cljs.core.next.call(null,seq__8874_8889__$1);
var G__8897 = null;
var G__8898 = 0;
var G__8899 = 0;
seq__8874_8879 = G__8896;
chunk__8875_8880 = G__8897;
count__8876_8881 = G__8898;
i__8877_8882 = G__8899;
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
var G__8878 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8878__delegate.call(this,parent,child,more_children);};
G__8878.cljs$lang$maxFixedArity = 2;
G__8878.cljs$lang$applyTo = (function (arglist__8900){
var parent = cljs.core.first(arglist__8900);
arglist__8900 = cljs.core.next(arglist__8900);
var child = cljs.core.first(arglist__8900);
var more_children = cljs.core.rest(arglist__8900);
return G__8878__delegate(parent,child,more_children);
});
G__8878.cljs$core$IFn$_invoke$arity$variadic = G__8878__delegate;
return G__8878;
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
var prepend_BANG___2 = (function (parent,child){var G__8906 = dommy.template.__GT_node_like.call(null,parent);G__8906.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__8906;
});
var prepend_BANG___3 = (function() { 
var G__8911__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8907_8912 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8908_8913 = null;var count__8909_8914 = 0;var i__8910_8915 = 0;while(true){
if((i__8910_8915 < count__8909_8914))
{var c_8916 = cljs.core._nth.call(null,chunk__8908_8913,i__8910_8915);prepend_BANG_.call(null,parent__$1,c_8916);
{
var G__8917 = seq__8907_8912;
var G__8918 = chunk__8908_8913;
var G__8919 = count__8909_8914;
var G__8920 = (i__8910_8915 + 1);
seq__8907_8912 = G__8917;
chunk__8908_8913 = G__8918;
count__8909_8914 = G__8919;
i__8910_8915 = G__8920;
continue;
}
} else
{var temp__4092__auto___8921 = cljs.core.seq.call(null,seq__8907_8912);if(temp__4092__auto___8921)
{var seq__8907_8922__$1 = temp__4092__auto___8921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8907_8922__$1))
{var c__5496__auto___8923 = cljs.core.chunk_first.call(null,seq__8907_8922__$1);{
var G__8924 = cljs.core.chunk_rest.call(null,seq__8907_8922__$1);
var G__8925 = c__5496__auto___8923;
var G__8926 = cljs.core.count.call(null,c__5496__auto___8923);
var G__8927 = 0;
seq__8907_8912 = G__8924;
chunk__8908_8913 = G__8925;
count__8909_8914 = G__8926;
i__8910_8915 = G__8927;
continue;
}
} else
{var c_8928 = cljs.core.first.call(null,seq__8907_8922__$1);prepend_BANG_.call(null,parent__$1,c_8928);
{
var G__8929 = cljs.core.next.call(null,seq__8907_8922__$1);
var G__8930 = null;
var G__8931 = 0;
var G__8932 = 0;
seq__8907_8912 = G__8929;
chunk__8908_8913 = G__8930;
count__8909_8914 = G__8931;
i__8910_8915 = G__8932;
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
var G__8911 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8911__delegate.call(this,parent,child,more_children);};
G__8911.cljs$lang$maxFixedArity = 2;
G__8911.cljs$lang$applyTo = (function (arglist__8933){
var parent = cljs.core.first(arglist__8933);
arglist__8933 = cljs.core.next(arglist__8933);
var child = cljs.core.first(arglist__8933);
var more_children = cljs.core.rest(arglist__8933);
return G__8911__delegate(parent,child,more_children);
});
G__8911.cljs$core$IFn$_invoke$arity$variadic = G__8911__delegate;
return G__8911;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___8934 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___8934))
{var next_8935 = temp__4090__auto___8934;parent.insertBefore(actual_node,next_8935);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8937 = dommy.template.__GT_node_like.call(null,parent);G__8937.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8937,node_like);
return G__8937;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8939 = elem__$1.parentNode;G__8939.removeChild(elem__$1);
return G__8939;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8940_SHARP_){return p1__8940_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__8941_SHARP_){return !((p1__8941_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8942){var vec__8943 = p__8942;var special_mouse_event = cljs.core.nth.call(null,vec__8943,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__8943,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4772__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4772__auto__))
{return or__4772__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__4760__auto__ = related_target;if(cljs.core.truth_(and__4760__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__4760__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__4772__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__4772__auto__))
{return or__4772__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8944){
var elem = cljs.core.first(arglist__8944);
arglist__8944 = cljs.core.next(arglist__8944);
var f = cljs.core.first(arglist__8944);
var args = cljs.core.rest(arglist__8944);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8945_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8945_SHARP_));
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
var vec__8969_8992 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8993 = cljs.core.nth.call(null,vec__8969_8992,0,null);var selector_8994 = cljs.core.nth.call(null,vec__8969_8992,1,null);var seq__8970_8995 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8977_8996 = null;var count__8978_8997 = 0;var i__8979_8998 = 0;while(true){
if((i__8979_8998 < count__8978_8997))
{var vec__8986_8999 = cljs.core._nth.call(null,chunk__8977_8996,i__8979_8998);var orig_type_9000 = cljs.core.nth.call(null,vec__8986_8999,0,null);var f_9001 = cljs.core.nth.call(null,vec__8986_8999,1,null);var seq__8980_9002 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9000,new cljs.core.PersistentArrayMap.fromArray([orig_type_9000,cljs.core.identity], true, false)));var chunk__8982_9003 = null;var count__8983_9004 = 0;var i__8984_9005 = 0;while(true){
if((i__8984_9005 < count__8983_9004))
{var vec__8987_9006 = cljs.core._nth.call(null,chunk__8982_9003,i__8984_9005);var actual_type_9007 = cljs.core.nth.call(null,vec__8987_9006,0,null);var factory_9008 = cljs.core.nth.call(null,vec__8987_9006,1,null);var canonical_f_9009 = (cljs.core.truth_(selector_8994)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8993,selector_8994):cljs.core.identity).call(null,factory_9008.call(null,f_9001));dommy.core.update_event_listeners_BANG_.call(null,elem_8993,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8994,actual_type_9007,f_9001], null),canonical_f_9009);
if(cljs.core.truth_(elem_8993.addEventListener))
{elem_8993.addEventListener(cljs.core.name.call(null,actual_type_9007),canonical_f_9009);
} else
{elem_8993.attachEvent(cljs.core.name.call(null,actual_type_9007),canonical_f_9009);
}
{
var G__9010 = seq__8980_9002;
var G__9011 = chunk__8982_9003;
var G__9012 = count__8983_9004;
var G__9013 = (i__8984_9005 + 1);
seq__8980_9002 = G__9010;
chunk__8982_9003 = G__9011;
count__8983_9004 = G__9012;
i__8984_9005 = G__9013;
continue;
}
} else
{var temp__4092__auto___9014 = cljs.core.seq.call(null,seq__8980_9002);if(temp__4092__auto___9014)
{var seq__8980_9015__$1 = temp__4092__auto___9014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8980_9015__$1))
{var c__5496__auto___9016 = cljs.core.chunk_first.call(null,seq__8980_9015__$1);{
var G__9017 = cljs.core.chunk_rest.call(null,seq__8980_9015__$1);
var G__9018 = c__5496__auto___9016;
var G__9019 = cljs.core.count.call(null,c__5496__auto___9016);
var G__9020 = 0;
seq__8980_9002 = G__9017;
chunk__8982_9003 = G__9018;
count__8983_9004 = G__9019;
i__8984_9005 = G__9020;
continue;
}
} else
{var vec__8988_9021 = cljs.core.first.call(null,seq__8980_9015__$1);var actual_type_9022 = cljs.core.nth.call(null,vec__8988_9021,0,null);var factory_9023 = cljs.core.nth.call(null,vec__8988_9021,1,null);var canonical_f_9024 = (cljs.core.truth_(selector_8994)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8993,selector_8994):cljs.core.identity).call(null,factory_9023.call(null,f_9001));dommy.core.update_event_listeners_BANG_.call(null,elem_8993,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8994,actual_type_9022,f_9001], null),canonical_f_9024);
if(cljs.core.truth_(elem_8993.addEventListener))
{elem_8993.addEventListener(cljs.core.name.call(null,actual_type_9022),canonical_f_9024);
} else
{elem_8993.attachEvent(cljs.core.name.call(null,actual_type_9022),canonical_f_9024);
}
{
var G__9025 = cljs.core.next.call(null,seq__8980_9015__$1);
var G__9026 = null;
var G__9027 = 0;
var G__9028 = 0;
seq__8980_9002 = G__9025;
chunk__8982_9003 = G__9026;
count__8983_9004 = G__9027;
i__8984_9005 = G__9028;
continue;
}
}
} else
{}
}
break;
}
{
var G__9029 = seq__8970_8995;
var G__9030 = chunk__8977_8996;
var G__9031 = count__8978_8997;
var G__9032 = (i__8979_8998 + 1);
seq__8970_8995 = G__9029;
chunk__8977_8996 = G__9030;
count__8978_8997 = G__9031;
i__8979_8998 = G__9032;
continue;
}
} else
{var temp__4092__auto___9033 = cljs.core.seq.call(null,seq__8970_8995);if(temp__4092__auto___9033)
{var seq__8970_9034__$1 = temp__4092__auto___9033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8970_9034__$1))
{var c__5496__auto___9035 = cljs.core.chunk_first.call(null,seq__8970_9034__$1);{
var G__9036 = cljs.core.chunk_rest.call(null,seq__8970_9034__$1);
var G__9037 = c__5496__auto___9035;
var G__9038 = cljs.core.count.call(null,c__5496__auto___9035);
var G__9039 = 0;
seq__8970_8995 = G__9036;
chunk__8977_8996 = G__9037;
count__8978_8997 = G__9038;
i__8979_8998 = G__9039;
continue;
}
} else
{var vec__8989_9040 = cljs.core.first.call(null,seq__8970_9034__$1);var orig_type_9041 = cljs.core.nth.call(null,vec__8989_9040,0,null);var f_9042 = cljs.core.nth.call(null,vec__8989_9040,1,null);var seq__8971_9043 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9041,new cljs.core.PersistentArrayMap.fromArray([orig_type_9041,cljs.core.identity], true, false)));var chunk__8973_9044 = null;var count__8974_9045 = 0;var i__8975_9046 = 0;while(true){
if((i__8975_9046 < count__8974_9045))
{var vec__8990_9047 = cljs.core._nth.call(null,chunk__8973_9044,i__8975_9046);var actual_type_9048 = cljs.core.nth.call(null,vec__8990_9047,0,null);var factory_9049 = cljs.core.nth.call(null,vec__8990_9047,1,null);var canonical_f_9050 = (cljs.core.truth_(selector_8994)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8993,selector_8994):cljs.core.identity).call(null,factory_9049.call(null,f_9042));dommy.core.update_event_listeners_BANG_.call(null,elem_8993,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8994,actual_type_9048,f_9042], null),canonical_f_9050);
if(cljs.core.truth_(elem_8993.addEventListener))
{elem_8993.addEventListener(cljs.core.name.call(null,actual_type_9048),canonical_f_9050);
} else
{elem_8993.attachEvent(cljs.core.name.call(null,actual_type_9048),canonical_f_9050);
}
{
var G__9051 = seq__8971_9043;
var G__9052 = chunk__8973_9044;
var G__9053 = count__8974_9045;
var G__9054 = (i__8975_9046 + 1);
seq__8971_9043 = G__9051;
chunk__8973_9044 = G__9052;
count__8974_9045 = G__9053;
i__8975_9046 = G__9054;
continue;
}
} else
{var temp__4092__auto___9055__$1 = cljs.core.seq.call(null,seq__8971_9043);if(temp__4092__auto___9055__$1)
{var seq__8971_9056__$1 = temp__4092__auto___9055__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8971_9056__$1))
{var c__5496__auto___9057 = cljs.core.chunk_first.call(null,seq__8971_9056__$1);{
var G__9058 = cljs.core.chunk_rest.call(null,seq__8971_9056__$1);
var G__9059 = c__5496__auto___9057;
var G__9060 = cljs.core.count.call(null,c__5496__auto___9057);
var G__9061 = 0;
seq__8971_9043 = G__9058;
chunk__8973_9044 = G__9059;
count__8974_9045 = G__9060;
i__8975_9046 = G__9061;
continue;
}
} else
{var vec__8991_9062 = cljs.core.first.call(null,seq__8971_9056__$1);var actual_type_9063 = cljs.core.nth.call(null,vec__8991_9062,0,null);var factory_9064 = cljs.core.nth.call(null,vec__8991_9062,1,null);var canonical_f_9065 = (cljs.core.truth_(selector_8994)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8993,selector_8994):cljs.core.identity).call(null,factory_9064.call(null,f_9042));dommy.core.update_event_listeners_BANG_.call(null,elem_8993,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8994,actual_type_9063,f_9042], null),canonical_f_9065);
if(cljs.core.truth_(elem_8993.addEventListener))
{elem_8993.addEventListener(cljs.core.name.call(null,actual_type_9063),canonical_f_9065);
} else
{elem_8993.attachEvent(cljs.core.name.call(null,actual_type_9063),canonical_f_9065);
}
{
var G__9066 = cljs.core.next.call(null,seq__8971_9056__$1);
var G__9067 = null;
var G__9068 = 0;
var G__9069 = 0;
seq__8971_9043 = G__9066;
chunk__8973_9044 = G__9067;
count__8974_9045 = G__9068;
i__8975_9046 = G__9069;
continue;
}
}
} else
{}
}
break;
}
{
var G__9070 = cljs.core.next.call(null,seq__8970_9034__$1);
var G__9071 = null;
var G__9072 = 0;
var G__9073 = 0;
seq__8970_8995 = G__9070;
chunk__8977_8996 = G__9071;
count__8978_8997 = G__9072;
i__8979_8998 = G__9073;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__9074){
var elem_sel = cljs.core.first(arglist__9074);
var type_fs = cljs.core.rest(arglist__9074);
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
var vec__9098_9121 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9122 = cljs.core.nth.call(null,vec__9098_9121,0,null);var selector_9123 = cljs.core.nth.call(null,vec__9098_9121,1,null);var seq__9099_9124 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9106_9125 = null;var count__9107_9126 = 0;var i__9108_9127 = 0;while(true){
if((i__9108_9127 < count__9107_9126))
{var vec__9115_9128 = cljs.core._nth.call(null,chunk__9106_9125,i__9108_9127);var orig_type_9129 = cljs.core.nth.call(null,vec__9115_9128,0,null);var f_9130 = cljs.core.nth.call(null,vec__9115_9128,1,null);var seq__9109_9131 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9129,new cljs.core.PersistentArrayMap.fromArray([orig_type_9129,cljs.core.identity], true, false)));var chunk__9111_9132 = null;var count__9112_9133 = 0;var i__9113_9134 = 0;while(true){
if((i__9113_9134 < count__9112_9133))
{var vec__9116_9135 = cljs.core._nth.call(null,chunk__9111_9132,i__9113_9134);var actual_type_9136 = cljs.core.nth.call(null,vec__9116_9135,0,null);var __9137 = cljs.core.nth.call(null,vec__9116_9135,1,null);var keys_9138 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9123,actual_type_9136,f_9130], null);var canonical_f_9139 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9122),keys_9138);dommy.core.update_event_listeners_BANG_.call(null,elem_9122,dommy.utils.dissoc_in,keys_9138);
if(cljs.core.truth_(elem_9122.removeEventListener))
{elem_9122.removeEventListener(cljs.core.name.call(null,actual_type_9136),canonical_f_9139);
} else
{elem_9122.detachEvent(cljs.core.name.call(null,actual_type_9136),canonical_f_9139);
}
{
var G__9140 = seq__9109_9131;
var G__9141 = chunk__9111_9132;
var G__9142 = count__9112_9133;
var G__9143 = (i__9113_9134 + 1);
seq__9109_9131 = G__9140;
chunk__9111_9132 = G__9141;
count__9112_9133 = G__9142;
i__9113_9134 = G__9143;
continue;
}
} else
{var temp__4092__auto___9144 = cljs.core.seq.call(null,seq__9109_9131);if(temp__4092__auto___9144)
{var seq__9109_9145__$1 = temp__4092__auto___9144;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9109_9145__$1))
{var c__5496__auto___9146 = cljs.core.chunk_first.call(null,seq__9109_9145__$1);{
var G__9147 = cljs.core.chunk_rest.call(null,seq__9109_9145__$1);
var G__9148 = c__5496__auto___9146;
var G__9149 = cljs.core.count.call(null,c__5496__auto___9146);
var G__9150 = 0;
seq__9109_9131 = G__9147;
chunk__9111_9132 = G__9148;
count__9112_9133 = G__9149;
i__9113_9134 = G__9150;
continue;
}
} else
{var vec__9117_9151 = cljs.core.first.call(null,seq__9109_9145__$1);var actual_type_9152 = cljs.core.nth.call(null,vec__9117_9151,0,null);var __9153 = cljs.core.nth.call(null,vec__9117_9151,1,null);var keys_9154 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9123,actual_type_9152,f_9130], null);var canonical_f_9155 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9122),keys_9154);dommy.core.update_event_listeners_BANG_.call(null,elem_9122,dommy.utils.dissoc_in,keys_9154);
if(cljs.core.truth_(elem_9122.removeEventListener))
{elem_9122.removeEventListener(cljs.core.name.call(null,actual_type_9152),canonical_f_9155);
} else
{elem_9122.detachEvent(cljs.core.name.call(null,actual_type_9152),canonical_f_9155);
}
{
var G__9156 = cljs.core.next.call(null,seq__9109_9145__$1);
var G__9157 = null;
var G__9158 = 0;
var G__9159 = 0;
seq__9109_9131 = G__9156;
chunk__9111_9132 = G__9157;
count__9112_9133 = G__9158;
i__9113_9134 = G__9159;
continue;
}
}
} else
{}
}
break;
}
{
var G__9160 = seq__9099_9124;
var G__9161 = chunk__9106_9125;
var G__9162 = count__9107_9126;
var G__9163 = (i__9108_9127 + 1);
seq__9099_9124 = G__9160;
chunk__9106_9125 = G__9161;
count__9107_9126 = G__9162;
i__9108_9127 = G__9163;
continue;
}
} else
{var temp__4092__auto___9164 = cljs.core.seq.call(null,seq__9099_9124);if(temp__4092__auto___9164)
{var seq__9099_9165__$1 = temp__4092__auto___9164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9099_9165__$1))
{var c__5496__auto___9166 = cljs.core.chunk_first.call(null,seq__9099_9165__$1);{
var G__9167 = cljs.core.chunk_rest.call(null,seq__9099_9165__$1);
var G__9168 = c__5496__auto___9166;
var G__9169 = cljs.core.count.call(null,c__5496__auto___9166);
var G__9170 = 0;
seq__9099_9124 = G__9167;
chunk__9106_9125 = G__9168;
count__9107_9126 = G__9169;
i__9108_9127 = G__9170;
continue;
}
} else
{var vec__9118_9171 = cljs.core.first.call(null,seq__9099_9165__$1);var orig_type_9172 = cljs.core.nth.call(null,vec__9118_9171,0,null);var f_9173 = cljs.core.nth.call(null,vec__9118_9171,1,null);var seq__9100_9174 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9172,new cljs.core.PersistentArrayMap.fromArray([orig_type_9172,cljs.core.identity], true, false)));var chunk__9102_9175 = null;var count__9103_9176 = 0;var i__9104_9177 = 0;while(true){
if((i__9104_9177 < count__9103_9176))
{var vec__9119_9178 = cljs.core._nth.call(null,chunk__9102_9175,i__9104_9177);var actual_type_9179 = cljs.core.nth.call(null,vec__9119_9178,0,null);var __9180 = cljs.core.nth.call(null,vec__9119_9178,1,null);var keys_9181 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9123,actual_type_9179,f_9173], null);var canonical_f_9182 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9122),keys_9181);dommy.core.update_event_listeners_BANG_.call(null,elem_9122,dommy.utils.dissoc_in,keys_9181);
if(cljs.core.truth_(elem_9122.removeEventListener))
{elem_9122.removeEventListener(cljs.core.name.call(null,actual_type_9179),canonical_f_9182);
} else
{elem_9122.detachEvent(cljs.core.name.call(null,actual_type_9179),canonical_f_9182);
}
{
var G__9183 = seq__9100_9174;
var G__9184 = chunk__9102_9175;
var G__9185 = count__9103_9176;
var G__9186 = (i__9104_9177 + 1);
seq__9100_9174 = G__9183;
chunk__9102_9175 = G__9184;
count__9103_9176 = G__9185;
i__9104_9177 = G__9186;
continue;
}
} else
{var temp__4092__auto___9187__$1 = cljs.core.seq.call(null,seq__9100_9174);if(temp__4092__auto___9187__$1)
{var seq__9100_9188__$1 = temp__4092__auto___9187__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9100_9188__$1))
{var c__5496__auto___9189 = cljs.core.chunk_first.call(null,seq__9100_9188__$1);{
var G__9190 = cljs.core.chunk_rest.call(null,seq__9100_9188__$1);
var G__9191 = c__5496__auto___9189;
var G__9192 = cljs.core.count.call(null,c__5496__auto___9189);
var G__9193 = 0;
seq__9100_9174 = G__9190;
chunk__9102_9175 = G__9191;
count__9103_9176 = G__9192;
i__9104_9177 = G__9193;
continue;
}
} else
{var vec__9120_9194 = cljs.core.first.call(null,seq__9100_9188__$1);var actual_type_9195 = cljs.core.nth.call(null,vec__9120_9194,0,null);var __9196 = cljs.core.nth.call(null,vec__9120_9194,1,null);var keys_9197 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9123,actual_type_9195,f_9173], null);var canonical_f_9198 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9122),keys_9197);dommy.core.update_event_listeners_BANG_.call(null,elem_9122,dommy.utils.dissoc_in,keys_9197);
if(cljs.core.truth_(elem_9122.removeEventListener))
{elem_9122.removeEventListener(cljs.core.name.call(null,actual_type_9195),canonical_f_9198);
} else
{elem_9122.detachEvent(cljs.core.name.call(null,actual_type_9195),canonical_f_9198);
}
{
var G__9199 = cljs.core.next.call(null,seq__9100_9188__$1);
var G__9200 = null;
var G__9201 = 0;
var G__9202 = 0;
seq__9100_9174 = G__9199;
chunk__9102_9175 = G__9200;
count__9103_9176 = G__9201;
i__9104_9177 = G__9202;
continue;
}
}
} else
{}
}
break;
}
{
var G__9203 = cljs.core.next.call(null,seq__9099_9165__$1);
var G__9204 = null;
var G__9205 = 0;
var G__9206 = 0;
seq__9099_9124 = G__9203;
chunk__9106_9125 = G__9204;
count__9107_9126 = G__9205;
i__9108_9127 = G__9206;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9207){
var elem_sel = cljs.core.first(arglist__9207);
var type_fs = cljs.core.rest(arglist__9207);
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
var vec__9215_9222 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9223 = cljs.core.nth.call(null,vec__9215_9222,0,null);var selector_9224 = cljs.core.nth.call(null,vec__9215_9222,1,null);var seq__9216_9225 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9217_9226 = null;var count__9218_9227 = 0;var i__9219_9228 = 0;while(true){
if((i__9219_9228 < count__9218_9227))
{var vec__9220_9229 = cljs.core._nth.call(null,chunk__9217_9226,i__9219_9228);var type_9230 = cljs.core.nth.call(null,vec__9220_9229,0,null);var f_9231 = cljs.core.nth.call(null,vec__9220_9229,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9230,((function (seq__9216_9225,chunk__9217_9226,count__9218_9227,i__9219_9228,vec__9220_9229,type_9230,f_9231){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9230,this_fn);
return f_9231.call(null,e);
});})(seq__9216_9225,chunk__9217_9226,count__9218_9227,i__9219_9228,vec__9220_9229,type_9230,f_9231))
);
{
var G__9232 = seq__9216_9225;
var G__9233 = chunk__9217_9226;
var G__9234 = count__9218_9227;
var G__9235 = (i__9219_9228 + 1);
seq__9216_9225 = G__9232;
chunk__9217_9226 = G__9233;
count__9218_9227 = G__9234;
i__9219_9228 = G__9235;
continue;
}
} else
{var temp__4092__auto___9236 = cljs.core.seq.call(null,seq__9216_9225);if(temp__4092__auto___9236)
{var seq__9216_9237__$1 = temp__4092__auto___9236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9216_9237__$1))
{var c__5496__auto___9238 = cljs.core.chunk_first.call(null,seq__9216_9237__$1);{
var G__9239 = cljs.core.chunk_rest.call(null,seq__9216_9237__$1);
var G__9240 = c__5496__auto___9238;
var G__9241 = cljs.core.count.call(null,c__5496__auto___9238);
var G__9242 = 0;
seq__9216_9225 = G__9239;
chunk__9217_9226 = G__9240;
count__9218_9227 = G__9241;
i__9219_9228 = G__9242;
continue;
}
} else
{var vec__9221_9243 = cljs.core.first.call(null,seq__9216_9237__$1);var type_9244 = cljs.core.nth.call(null,vec__9221_9243,0,null);var f_9245 = cljs.core.nth.call(null,vec__9221_9243,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9244,((function (seq__9216_9225,chunk__9217_9226,count__9218_9227,i__9219_9228,vec__9221_9243,type_9244,f_9245,seq__9216_9237__$1,temp__4092__auto___9236){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9244,this_fn);
return f_9245.call(null,e);
});})(seq__9216_9225,chunk__9217_9226,count__9218_9227,i__9219_9228,vec__9221_9243,type_9244,f_9245,seq__9216_9237__$1,temp__4092__auto___9236))
);
{
var G__9246 = cljs.core.next.call(null,seq__9216_9237__$1);
var G__9247 = null;
var G__9248 = 0;
var G__9249 = 0;
seq__9216_9225 = G__9246;
chunk__9217_9226 = G__9247;
count__9218_9227 = G__9248;
i__9219_9228 = G__9249;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9250){
var elem_sel = cljs.core.first(arglist__9250);
var type_fs = cljs.core.rest(arglist__9250);
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
var fire_BANG___delegate = function (node,event_type,p__9251){var vec__9253 = p__9251;var update_event_BANG_ = cljs.core.nth.call(null,vec__9253,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__4772__auto__ = update_event_BANG_;if(cljs.core.truth_(or__4772__auto__))
{return or__4772__auto__;
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
var p__9251 = null;if (arguments.length > 2) {
  p__9251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__9251);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__9254){
var node = cljs.core.first(arglist__9254);
arglist__9254 = cljs.core.next(arglist__9254);
var event_type = cljs.core.first(arglist__9254);
var p__9251 = cljs.core.rest(arglist__9254);
return fire_BANG___delegate(node,event_type,p__9251);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
