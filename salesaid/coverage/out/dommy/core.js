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
var append_BANG___2 = (function (parent,child){var G__68593 = dommy.template.__GT_node_like.call(null,parent);G__68593.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__68593;
});
var append_BANG___3 = (function() { 
var G__68598__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__68594_68599 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__68595_68600 = null;var count__68596_68601 = 0;var i__68597_68602 = 0;while(true){
if((i__68597_68602 < count__68596_68601))
{var c_68603 = cljs.core._nth.call(null,chunk__68595_68600,i__68597_68602);append_BANG_.call(null,parent__$1,c_68603);
{
var G__68604 = seq__68594_68599;
var G__68605 = chunk__68595_68600;
var G__68606 = count__68596_68601;
var G__68607 = (i__68597_68602 + 1);
seq__68594_68599 = G__68604;
chunk__68595_68600 = G__68605;
count__68596_68601 = G__68606;
i__68597_68602 = G__68607;
continue;
}
} else
{var temp__4092__auto___68608 = cljs.core.seq.call(null,seq__68594_68599);if(temp__4092__auto___68608)
{var seq__68594_68609__$1 = temp__4092__auto___68608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68594_68609__$1))
{var c__4017__auto___68610 = cljs.core.chunk_first.call(null,seq__68594_68609__$1);{
var G__68611 = cljs.core.chunk_rest.call(null,seq__68594_68609__$1);
var G__68612 = c__4017__auto___68610;
var G__68613 = cljs.core.count.call(null,c__4017__auto___68610);
var G__68614 = 0;
seq__68594_68599 = G__68611;
chunk__68595_68600 = G__68612;
count__68596_68601 = G__68613;
i__68597_68602 = G__68614;
continue;
}
} else
{var c_68615 = cljs.core.first.call(null,seq__68594_68609__$1);append_BANG_.call(null,parent__$1,c_68615);
{
var G__68616 = cljs.core.next.call(null,seq__68594_68609__$1);
var G__68617 = null;
var G__68618 = 0;
var G__68619 = 0;
seq__68594_68599 = G__68616;
chunk__68595_68600 = G__68617;
count__68596_68601 = G__68618;
i__68597_68602 = G__68619;
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
var G__68598 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__68598__delegate.call(this,parent,child,more_children);};
G__68598.cljs$lang$maxFixedArity = 2;
G__68598.cljs$lang$applyTo = (function (arglist__68620){
var parent = cljs.core.first(arglist__68620);
arglist__68620 = cljs.core.next(arglist__68620);
var child = cljs.core.first(arglist__68620);
var more_children = cljs.core.rest(arglist__68620);
return G__68598__delegate(parent,child,more_children);
});
G__68598.cljs$core$IFn$_invoke$arity$variadic = G__68598__delegate;
return G__68598;
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
var prepend_BANG___2 = (function (parent,child){var G__68626 = dommy.template.__GT_node_like.call(null,parent);G__68626.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__68626;
});
var prepend_BANG___3 = (function() { 
var G__68631__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__68627_68632 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__68628_68633 = null;var count__68629_68634 = 0;var i__68630_68635 = 0;while(true){
if((i__68630_68635 < count__68629_68634))
{var c_68636 = cljs.core._nth.call(null,chunk__68628_68633,i__68630_68635);prepend_BANG_.call(null,parent__$1,c_68636);
{
var G__68637 = seq__68627_68632;
var G__68638 = chunk__68628_68633;
var G__68639 = count__68629_68634;
var G__68640 = (i__68630_68635 + 1);
seq__68627_68632 = G__68637;
chunk__68628_68633 = G__68638;
count__68629_68634 = G__68639;
i__68630_68635 = G__68640;
continue;
}
} else
{var temp__4092__auto___68641 = cljs.core.seq.call(null,seq__68627_68632);if(temp__4092__auto___68641)
{var seq__68627_68642__$1 = temp__4092__auto___68641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68627_68642__$1))
{var c__4017__auto___68643 = cljs.core.chunk_first.call(null,seq__68627_68642__$1);{
var G__68644 = cljs.core.chunk_rest.call(null,seq__68627_68642__$1);
var G__68645 = c__4017__auto___68643;
var G__68646 = cljs.core.count.call(null,c__4017__auto___68643);
var G__68647 = 0;
seq__68627_68632 = G__68644;
chunk__68628_68633 = G__68645;
count__68629_68634 = G__68646;
i__68630_68635 = G__68647;
continue;
}
} else
{var c_68648 = cljs.core.first.call(null,seq__68627_68642__$1);prepend_BANG_.call(null,parent__$1,c_68648);
{
var G__68649 = cljs.core.next.call(null,seq__68627_68642__$1);
var G__68650 = null;
var G__68651 = 0;
var G__68652 = 0;
seq__68627_68632 = G__68649;
chunk__68628_68633 = G__68650;
count__68629_68634 = G__68651;
i__68630_68635 = G__68652;
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
var G__68631 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__68631__delegate.call(this,parent,child,more_children);};
G__68631.cljs$lang$maxFixedArity = 2;
G__68631.cljs$lang$applyTo = (function (arglist__68653){
var parent = cljs.core.first(arglist__68653);
arglist__68653 = cljs.core.next(arglist__68653);
var child = cljs.core.first(arglist__68653);
var more_children = cljs.core.rest(arglist__68653);
return G__68631__delegate(parent,child,more_children);
});
G__68631.cljs$core$IFn$_invoke$arity$variadic = G__68631__delegate;
return G__68631;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___68654 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___68654))
{var next_68655 = temp__4090__auto___68654;parent.insertBefore(actual_node,next_68655);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__68657 = dommy.template.__GT_node_like.call(null,parent);G__68657.innerHTML = "";
dommy.core.append_BANG_.call(null,G__68657,node_like);
return G__68657;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__68659 = elem__$1.parentNode;G__68659.removeChild(elem__$1);
return G__68659;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__68660_SHARP_){return p1__68660_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__68661_SHARP_){return !((p1__68661_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__68662){var vec__68663 = p__68662;var special_mouse_event = cljs.core.nth.call(null,vec__68663,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__68663,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3293__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3293__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__68664){
var elem = cljs.core.first(arglist__68664);
arglist__68664 = cljs.core.next(arglist__68664);
var f = cljs.core.first(arglist__68664);
var args = cljs.core.rest(arglist__68664);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__68665_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__68665_SHARP_));
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
var vec__68689_68712 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_68713 = cljs.core.nth.call(null,vec__68689_68712,0,null);var selector_68714 = cljs.core.nth.call(null,vec__68689_68712,1,null);var seq__68690_68715 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__68697_68716 = null;var count__68698_68717 = 0;var i__68699_68718 = 0;while(true){
if((i__68699_68718 < count__68698_68717))
{var vec__68706_68719 = cljs.core._nth.call(null,chunk__68697_68716,i__68699_68718);var orig_type_68720 = cljs.core.nth.call(null,vec__68706_68719,0,null);var f_68721 = cljs.core.nth.call(null,vec__68706_68719,1,null);var seq__68700_68722 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_68720,new cljs.core.PersistentArrayMap.fromArray([orig_type_68720,cljs.core.identity], true, false)));var chunk__68702_68723 = null;var count__68703_68724 = 0;var i__68704_68725 = 0;while(true){
if((i__68704_68725 < count__68703_68724))
{var vec__68707_68726 = cljs.core._nth.call(null,chunk__68702_68723,i__68704_68725);var actual_type_68727 = cljs.core.nth.call(null,vec__68707_68726,0,null);var factory_68728 = cljs.core.nth.call(null,vec__68707_68726,1,null);var canonical_f_68729 = (cljs.core.truth_(selector_68714)?cljs.core.partial.call(null,dommy.core.live_listener,elem_68713,selector_68714):cljs.core.identity).call(null,factory_68728.call(null,f_68721));dommy.core.update_event_listeners_BANG_.call(null,elem_68713,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_68714,actual_type_68727,f_68721], null),canonical_f_68729);
if(cljs.core.truth_(elem_68713.addEventListener))
{elem_68713.addEventListener(cljs.core.name.call(null,actual_type_68727),canonical_f_68729);
} else
{elem_68713.attachEvent(cljs.core.name.call(null,actual_type_68727),canonical_f_68729);
}
{
var G__68730 = seq__68700_68722;
var G__68731 = chunk__68702_68723;
var G__68732 = count__68703_68724;
var G__68733 = (i__68704_68725 + 1);
seq__68700_68722 = G__68730;
chunk__68702_68723 = G__68731;
count__68703_68724 = G__68732;
i__68704_68725 = G__68733;
continue;
}
} else
{var temp__4092__auto___68734 = cljs.core.seq.call(null,seq__68700_68722);if(temp__4092__auto___68734)
{var seq__68700_68735__$1 = temp__4092__auto___68734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68700_68735__$1))
{var c__4017__auto___68736 = cljs.core.chunk_first.call(null,seq__68700_68735__$1);{
var G__68737 = cljs.core.chunk_rest.call(null,seq__68700_68735__$1);
var G__68738 = c__4017__auto___68736;
var G__68739 = cljs.core.count.call(null,c__4017__auto___68736);
var G__68740 = 0;
seq__68700_68722 = G__68737;
chunk__68702_68723 = G__68738;
count__68703_68724 = G__68739;
i__68704_68725 = G__68740;
continue;
}
} else
{var vec__68708_68741 = cljs.core.first.call(null,seq__68700_68735__$1);var actual_type_68742 = cljs.core.nth.call(null,vec__68708_68741,0,null);var factory_68743 = cljs.core.nth.call(null,vec__68708_68741,1,null);var canonical_f_68744 = (cljs.core.truth_(selector_68714)?cljs.core.partial.call(null,dommy.core.live_listener,elem_68713,selector_68714):cljs.core.identity).call(null,factory_68743.call(null,f_68721));dommy.core.update_event_listeners_BANG_.call(null,elem_68713,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_68714,actual_type_68742,f_68721], null),canonical_f_68744);
if(cljs.core.truth_(elem_68713.addEventListener))
{elem_68713.addEventListener(cljs.core.name.call(null,actual_type_68742),canonical_f_68744);
} else
{elem_68713.attachEvent(cljs.core.name.call(null,actual_type_68742),canonical_f_68744);
}
{
var G__68745 = cljs.core.next.call(null,seq__68700_68735__$1);
var G__68746 = null;
var G__68747 = 0;
var G__68748 = 0;
seq__68700_68722 = G__68745;
chunk__68702_68723 = G__68746;
count__68703_68724 = G__68747;
i__68704_68725 = G__68748;
continue;
}
}
} else
{}
}
break;
}
{
var G__68749 = seq__68690_68715;
var G__68750 = chunk__68697_68716;
var G__68751 = count__68698_68717;
var G__68752 = (i__68699_68718 + 1);
seq__68690_68715 = G__68749;
chunk__68697_68716 = G__68750;
count__68698_68717 = G__68751;
i__68699_68718 = G__68752;
continue;
}
} else
{var temp__4092__auto___68753 = cljs.core.seq.call(null,seq__68690_68715);if(temp__4092__auto___68753)
{var seq__68690_68754__$1 = temp__4092__auto___68753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68690_68754__$1))
{var c__4017__auto___68755 = cljs.core.chunk_first.call(null,seq__68690_68754__$1);{
var G__68756 = cljs.core.chunk_rest.call(null,seq__68690_68754__$1);
var G__68757 = c__4017__auto___68755;
var G__68758 = cljs.core.count.call(null,c__4017__auto___68755);
var G__68759 = 0;
seq__68690_68715 = G__68756;
chunk__68697_68716 = G__68757;
count__68698_68717 = G__68758;
i__68699_68718 = G__68759;
continue;
}
} else
{var vec__68709_68760 = cljs.core.first.call(null,seq__68690_68754__$1);var orig_type_68761 = cljs.core.nth.call(null,vec__68709_68760,0,null);var f_68762 = cljs.core.nth.call(null,vec__68709_68760,1,null);var seq__68691_68763 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_68761,new cljs.core.PersistentArrayMap.fromArray([orig_type_68761,cljs.core.identity], true, false)));var chunk__68693_68764 = null;var count__68694_68765 = 0;var i__68695_68766 = 0;while(true){
if((i__68695_68766 < count__68694_68765))
{var vec__68710_68767 = cljs.core._nth.call(null,chunk__68693_68764,i__68695_68766);var actual_type_68768 = cljs.core.nth.call(null,vec__68710_68767,0,null);var factory_68769 = cljs.core.nth.call(null,vec__68710_68767,1,null);var canonical_f_68770 = (cljs.core.truth_(selector_68714)?cljs.core.partial.call(null,dommy.core.live_listener,elem_68713,selector_68714):cljs.core.identity).call(null,factory_68769.call(null,f_68762));dommy.core.update_event_listeners_BANG_.call(null,elem_68713,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_68714,actual_type_68768,f_68762], null),canonical_f_68770);
if(cljs.core.truth_(elem_68713.addEventListener))
{elem_68713.addEventListener(cljs.core.name.call(null,actual_type_68768),canonical_f_68770);
} else
{elem_68713.attachEvent(cljs.core.name.call(null,actual_type_68768),canonical_f_68770);
}
{
var G__68771 = seq__68691_68763;
var G__68772 = chunk__68693_68764;
var G__68773 = count__68694_68765;
var G__68774 = (i__68695_68766 + 1);
seq__68691_68763 = G__68771;
chunk__68693_68764 = G__68772;
count__68694_68765 = G__68773;
i__68695_68766 = G__68774;
continue;
}
} else
{var temp__4092__auto___68775__$1 = cljs.core.seq.call(null,seq__68691_68763);if(temp__4092__auto___68775__$1)
{var seq__68691_68776__$1 = temp__4092__auto___68775__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68691_68776__$1))
{var c__4017__auto___68777 = cljs.core.chunk_first.call(null,seq__68691_68776__$1);{
var G__68778 = cljs.core.chunk_rest.call(null,seq__68691_68776__$1);
var G__68779 = c__4017__auto___68777;
var G__68780 = cljs.core.count.call(null,c__4017__auto___68777);
var G__68781 = 0;
seq__68691_68763 = G__68778;
chunk__68693_68764 = G__68779;
count__68694_68765 = G__68780;
i__68695_68766 = G__68781;
continue;
}
} else
{var vec__68711_68782 = cljs.core.first.call(null,seq__68691_68776__$1);var actual_type_68783 = cljs.core.nth.call(null,vec__68711_68782,0,null);var factory_68784 = cljs.core.nth.call(null,vec__68711_68782,1,null);var canonical_f_68785 = (cljs.core.truth_(selector_68714)?cljs.core.partial.call(null,dommy.core.live_listener,elem_68713,selector_68714):cljs.core.identity).call(null,factory_68784.call(null,f_68762));dommy.core.update_event_listeners_BANG_.call(null,elem_68713,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_68714,actual_type_68783,f_68762], null),canonical_f_68785);
if(cljs.core.truth_(elem_68713.addEventListener))
{elem_68713.addEventListener(cljs.core.name.call(null,actual_type_68783),canonical_f_68785);
} else
{elem_68713.attachEvent(cljs.core.name.call(null,actual_type_68783),canonical_f_68785);
}
{
var G__68786 = cljs.core.next.call(null,seq__68691_68776__$1);
var G__68787 = null;
var G__68788 = 0;
var G__68789 = 0;
seq__68691_68763 = G__68786;
chunk__68693_68764 = G__68787;
count__68694_68765 = G__68788;
i__68695_68766 = G__68789;
continue;
}
}
} else
{}
}
break;
}
{
var G__68790 = cljs.core.next.call(null,seq__68690_68754__$1);
var G__68791 = null;
var G__68792 = 0;
var G__68793 = 0;
seq__68690_68715 = G__68790;
chunk__68697_68716 = G__68791;
count__68698_68717 = G__68792;
i__68699_68718 = G__68793;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__68794){
var elem_sel = cljs.core.first(arglist__68794);
var type_fs = cljs.core.rest(arglist__68794);
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
var vec__68818_68841 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_68842 = cljs.core.nth.call(null,vec__68818_68841,0,null);var selector_68843 = cljs.core.nth.call(null,vec__68818_68841,1,null);var seq__68819_68844 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__68826_68845 = null;var count__68827_68846 = 0;var i__68828_68847 = 0;while(true){
if((i__68828_68847 < count__68827_68846))
{var vec__68835_68848 = cljs.core._nth.call(null,chunk__68826_68845,i__68828_68847);var orig_type_68849 = cljs.core.nth.call(null,vec__68835_68848,0,null);var f_68850 = cljs.core.nth.call(null,vec__68835_68848,1,null);var seq__68829_68851 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_68849,new cljs.core.PersistentArrayMap.fromArray([orig_type_68849,cljs.core.identity], true, false)));var chunk__68831_68852 = null;var count__68832_68853 = 0;var i__68833_68854 = 0;while(true){
if((i__68833_68854 < count__68832_68853))
{var vec__68836_68855 = cljs.core._nth.call(null,chunk__68831_68852,i__68833_68854);var actual_type_68856 = cljs.core.nth.call(null,vec__68836_68855,0,null);var __68857 = cljs.core.nth.call(null,vec__68836_68855,1,null);var keys_68858 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_68843,actual_type_68856,f_68850], null);var canonical_f_68859 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_68842),keys_68858);dommy.core.update_event_listeners_BANG_.call(null,elem_68842,dommy.utils.dissoc_in,keys_68858);
if(cljs.core.truth_(elem_68842.removeEventListener))
{elem_68842.removeEventListener(cljs.core.name.call(null,actual_type_68856),canonical_f_68859);
} else
{elem_68842.detachEvent(cljs.core.name.call(null,actual_type_68856),canonical_f_68859);
}
{
var G__68860 = seq__68829_68851;
var G__68861 = chunk__68831_68852;
var G__68862 = count__68832_68853;
var G__68863 = (i__68833_68854 + 1);
seq__68829_68851 = G__68860;
chunk__68831_68852 = G__68861;
count__68832_68853 = G__68862;
i__68833_68854 = G__68863;
continue;
}
} else
{var temp__4092__auto___68864 = cljs.core.seq.call(null,seq__68829_68851);if(temp__4092__auto___68864)
{var seq__68829_68865__$1 = temp__4092__auto___68864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68829_68865__$1))
{var c__4017__auto___68866 = cljs.core.chunk_first.call(null,seq__68829_68865__$1);{
var G__68867 = cljs.core.chunk_rest.call(null,seq__68829_68865__$1);
var G__68868 = c__4017__auto___68866;
var G__68869 = cljs.core.count.call(null,c__4017__auto___68866);
var G__68870 = 0;
seq__68829_68851 = G__68867;
chunk__68831_68852 = G__68868;
count__68832_68853 = G__68869;
i__68833_68854 = G__68870;
continue;
}
} else
{var vec__68837_68871 = cljs.core.first.call(null,seq__68829_68865__$1);var actual_type_68872 = cljs.core.nth.call(null,vec__68837_68871,0,null);var __68873 = cljs.core.nth.call(null,vec__68837_68871,1,null);var keys_68874 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_68843,actual_type_68872,f_68850], null);var canonical_f_68875 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_68842),keys_68874);dommy.core.update_event_listeners_BANG_.call(null,elem_68842,dommy.utils.dissoc_in,keys_68874);
if(cljs.core.truth_(elem_68842.removeEventListener))
{elem_68842.removeEventListener(cljs.core.name.call(null,actual_type_68872),canonical_f_68875);
} else
{elem_68842.detachEvent(cljs.core.name.call(null,actual_type_68872),canonical_f_68875);
}
{
var G__68876 = cljs.core.next.call(null,seq__68829_68865__$1);
var G__68877 = null;
var G__68878 = 0;
var G__68879 = 0;
seq__68829_68851 = G__68876;
chunk__68831_68852 = G__68877;
count__68832_68853 = G__68878;
i__68833_68854 = G__68879;
continue;
}
}
} else
{}
}
break;
}
{
var G__68880 = seq__68819_68844;
var G__68881 = chunk__68826_68845;
var G__68882 = count__68827_68846;
var G__68883 = (i__68828_68847 + 1);
seq__68819_68844 = G__68880;
chunk__68826_68845 = G__68881;
count__68827_68846 = G__68882;
i__68828_68847 = G__68883;
continue;
}
} else
{var temp__4092__auto___68884 = cljs.core.seq.call(null,seq__68819_68844);if(temp__4092__auto___68884)
{var seq__68819_68885__$1 = temp__4092__auto___68884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68819_68885__$1))
{var c__4017__auto___68886 = cljs.core.chunk_first.call(null,seq__68819_68885__$1);{
var G__68887 = cljs.core.chunk_rest.call(null,seq__68819_68885__$1);
var G__68888 = c__4017__auto___68886;
var G__68889 = cljs.core.count.call(null,c__4017__auto___68886);
var G__68890 = 0;
seq__68819_68844 = G__68887;
chunk__68826_68845 = G__68888;
count__68827_68846 = G__68889;
i__68828_68847 = G__68890;
continue;
}
} else
{var vec__68838_68891 = cljs.core.first.call(null,seq__68819_68885__$1);var orig_type_68892 = cljs.core.nth.call(null,vec__68838_68891,0,null);var f_68893 = cljs.core.nth.call(null,vec__68838_68891,1,null);var seq__68820_68894 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_68892,new cljs.core.PersistentArrayMap.fromArray([orig_type_68892,cljs.core.identity], true, false)));var chunk__68822_68895 = null;var count__68823_68896 = 0;var i__68824_68897 = 0;while(true){
if((i__68824_68897 < count__68823_68896))
{var vec__68839_68898 = cljs.core._nth.call(null,chunk__68822_68895,i__68824_68897);var actual_type_68899 = cljs.core.nth.call(null,vec__68839_68898,0,null);var __68900 = cljs.core.nth.call(null,vec__68839_68898,1,null);var keys_68901 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_68843,actual_type_68899,f_68893], null);var canonical_f_68902 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_68842),keys_68901);dommy.core.update_event_listeners_BANG_.call(null,elem_68842,dommy.utils.dissoc_in,keys_68901);
if(cljs.core.truth_(elem_68842.removeEventListener))
{elem_68842.removeEventListener(cljs.core.name.call(null,actual_type_68899),canonical_f_68902);
} else
{elem_68842.detachEvent(cljs.core.name.call(null,actual_type_68899),canonical_f_68902);
}
{
var G__68903 = seq__68820_68894;
var G__68904 = chunk__68822_68895;
var G__68905 = count__68823_68896;
var G__68906 = (i__68824_68897 + 1);
seq__68820_68894 = G__68903;
chunk__68822_68895 = G__68904;
count__68823_68896 = G__68905;
i__68824_68897 = G__68906;
continue;
}
} else
{var temp__4092__auto___68907__$1 = cljs.core.seq.call(null,seq__68820_68894);if(temp__4092__auto___68907__$1)
{var seq__68820_68908__$1 = temp__4092__auto___68907__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68820_68908__$1))
{var c__4017__auto___68909 = cljs.core.chunk_first.call(null,seq__68820_68908__$1);{
var G__68910 = cljs.core.chunk_rest.call(null,seq__68820_68908__$1);
var G__68911 = c__4017__auto___68909;
var G__68912 = cljs.core.count.call(null,c__4017__auto___68909);
var G__68913 = 0;
seq__68820_68894 = G__68910;
chunk__68822_68895 = G__68911;
count__68823_68896 = G__68912;
i__68824_68897 = G__68913;
continue;
}
} else
{var vec__68840_68914 = cljs.core.first.call(null,seq__68820_68908__$1);var actual_type_68915 = cljs.core.nth.call(null,vec__68840_68914,0,null);var __68916 = cljs.core.nth.call(null,vec__68840_68914,1,null);var keys_68917 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_68843,actual_type_68915,f_68893], null);var canonical_f_68918 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_68842),keys_68917);dommy.core.update_event_listeners_BANG_.call(null,elem_68842,dommy.utils.dissoc_in,keys_68917);
if(cljs.core.truth_(elem_68842.removeEventListener))
{elem_68842.removeEventListener(cljs.core.name.call(null,actual_type_68915),canonical_f_68918);
} else
{elem_68842.detachEvent(cljs.core.name.call(null,actual_type_68915),canonical_f_68918);
}
{
var G__68919 = cljs.core.next.call(null,seq__68820_68908__$1);
var G__68920 = null;
var G__68921 = 0;
var G__68922 = 0;
seq__68820_68894 = G__68919;
chunk__68822_68895 = G__68920;
count__68823_68896 = G__68921;
i__68824_68897 = G__68922;
continue;
}
}
} else
{}
}
break;
}
{
var G__68923 = cljs.core.next.call(null,seq__68819_68885__$1);
var G__68924 = null;
var G__68925 = 0;
var G__68926 = 0;
seq__68819_68844 = G__68923;
chunk__68826_68845 = G__68924;
count__68827_68846 = G__68925;
i__68828_68847 = G__68926;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__68927){
var elem_sel = cljs.core.first(arglist__68927);
var type_fs = cljs.core.rest(arglist__68927);
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
var vec__68935_68942 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_68943 = cljs.core.nth.call(null,vec__68935_68942,0,null);var selector_68944 = cljs.core.nth.call(null,vec__68935_68942,1,null);var seq__68936_68945 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__68937_68946 = null;var count__68938_68947 = 0;var i__68939_68948 = 0;while(true){
if((i__68939_68948 < count__68938_68947))
{var vec__68940_68949 = cljs.core._nth.call(null,chunk__68937_68946,i__68939_68948);var type_68950 = cljs.core.nth.call(null,vec__68940_68949,0,null);var f_68951 = cljs.core.nth.call(null,vec__68940_68949,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_68950,((function (seq__68936_68945,chunk__68937_68946,count__68938_68947,i__68939_68948,vec__68940_68949,type_68950,f_68951){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_68950,this_fn);
return f_68951.call(null,e);
});})(seq__68936_68945,chunk__68937_68946,count__68938_68947,i__68939_68948,vec__68940_68949,type_68950,f_68951))
);
{
var G__68952 = seq__68936_68945;
var G__68953 = chunk__68937_68946;
var G__68954 = count__68938_68947;
var G__68955 = (i__68939_68948 + 1);
seq__68936_68945 = G__68952;
chunk__68937_68946 = G__68953;
count__68938_68947 = G__68954;
i__68939_68948 = G__68955;
continue;
}
} else
{var temp__4092__auto___68956 = cljs.core.seq.call(null,seq__68936_68945);if(temp__4092__auto___68956)
{var seq__68936_68957__$1 = temp__4092__auto___68956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68936_68957__$1))
{var c__4017__auto___68958 = cljs.core.chunk_first.call(null,seq__68936_68957__$1);{
var G__68959 = cljs.core.chunk_rest.call(null,seq__68936_68957__$1);
var G__68960 = c__4017__auto___68958;
var G__68961 = cljs.core.count.call(null,c__4017__auto___68958);
var G__68962 = 0;
seq__68936_68945 = G__68959;
chunk__68937_68946 = G__68960;
count__68938_68947 = G__68961;
i__68939_68948 = G__68962;
continue;
}
} else
{var vec__68941_68963 = cljs.core.first.call(null,seq__68936_68957__$1);var type_68964 = cljs.core.nth.call(null,vec__68941_68963,0,null);var f_68965 = cljs.core.nth.call(null,vec__68941_68963,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_68964,((function (seq__68936_68945,chunk__68937_68946,count__68938_68947,i__68939_68948,vec__68941_68963,type_68964,f_68965,seq__68936_68957__$1,temp__4092__auto___68956){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_68964,this_fn);
return f_68965.call(null,e);
});})(seq__68936_68945,chunk__68937_68946,count__68938_68947,i__68939_68948,vec__68941_68963,type_68964,f_68965,seq__68936_68957__$1,temp__4092__auto___68956))
);
{
var G__68966 = cljs.core.next.call(null,seq__68936_68957__$1);
var G__68967 = null;
var G__68968 = 0;
var G__68969 = 0;
seq__68936_68945 = G__68966;
chunk__68937_68946 = G__68967;
count__68938_68947 = G__68968;
i__68939_68948 = G__68969;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__68970){
var elem_sel = cljs.core.first(arglist__68970);
var type_fs = cljs.core.rest(arglist__68970);
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
var fire_BANG___delegate = function (node,event_type,p__68971){var vec__68973 = p__68971;var update_event_BANG_ = cljs.core.nth.call(null,vec__68973,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__68971 = null;if (arguments.length > 2) {
  p__68971 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__68971);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__68974){
var node = cljs.core.first(arglist__68974);
arglist__68974 = cljs.core.next(arglist__68974);
var event_type = cljs.core.first(arglist__68974);
var p__68971 = cljs.core.rest(arglist__68974);
return fire_BANG___delegate(node,event_type,p__68971);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
