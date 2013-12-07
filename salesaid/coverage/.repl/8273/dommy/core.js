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
dommy.core.text = (function text(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var or__4774__auto__ = elem__$1.textContent;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
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
var append_BANG___2 = (function (parent,child){var G__11619 = dommy.template.__GT_node_like.call(null,parent);G__11619.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__11619;
});
var append_BANG___3 = (function() { 
var G__11624__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11620_11625 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11621_11626 = null;var count__11622_11627 = 0;var i__11623_11628 = 0;while(true){
if((i__11623_11628 < count__11622_11627))
{var c_11629 = cljs.core._nth.call(null,chunk__11621_11626,i__11623_11628);append_BANG_.call(null,parent__$1,c_11629);
{
var G__11630 = seq__11620_11625;
var G__11631 = chunk__11621_11626;
var G__11632 = count__11622_11627;
var G__11633 = (i__11623_11628 + 1);
seq__11620_11625 = G__11630;
chunk__11621_11626 = G__11631;
count__11622_11627 = G__11632;
i__11623_11628 = G__11633;
continue;
}
} else
{var temp__4092__auto___11634 = cljs.core.seq.call(null,seq__11620_11625);if(temp__4092__auto___11634)
{var seq__11620_11635__$1 = temp__4092__auto___11634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11620_11635__$1))
{var c__5498__auto___11636 = cljs.core.chunk_first.call(null,seq__11620_11635__$1);{
var G__11637 = cljs.core.chunk_rest.call(null,seq__11620_11635__$1);
var G__11638 = c__5498__auto___11636;
var G__11639 = cljs.core.count.call(null,c__5498__auto___11636);
var G__11640 = 0;
seq__11620_11625 = G__11637;
chunk__11621_11626 = G__11638;
count__11622_11627 = G__11639;
i__11623_11628 = G__11640;
continue;
}
} else
{var c_11641 = cljs.core.first.call(null,seq__11620_11635__$1);append_BANG_.call(null,parent__$1,c_11641);
{
var G__11642 = cljs.core.next.call(null,seq__11620_11635__$1);
var G__11643 = null;
var G__11644 = 0;
var G__11645 = 0;
seq__11620_11625 = G__11642;
chunk__11621_11626 = G__11643;
count__11622_11627 = G__11644;
i__11623_11628 = G__11645;
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
var G__11624 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11624__delegate.call(this,parent,child,more_children);};
G__11624.cljs$lang$maxFixedArity = 2;
G__11624.cljs$lang$applyTo = (function (arglist__11646){
var parent = cljs.core.first(arglist__11646);
arglist__11646 = cljs.core.next(arglist__11646);
var child = cljs.core.first(arglist__11646);
var more_children = cljs.core.rest(arglist__11646);
return G__11624__delegate(parent,child,more_children);
});
G__11624.cljs$core$IFn$_invoke$arity$variadic = G__11624__delegate;
return G__11624;
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
var prepend_BANG___2 = (function (parent,child){var G__11652 = dommy.template.__GT_node_like.call(null,parent);G__11652.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__11652;
});
var prepend_BANG___3 = (function() { 
var G__11657__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11653_11658 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11654_11659 = null;var count__11655_11660 = 0;var i__11656_11661 = 0;while(true){
if((i__11656_11661 < count__11655_11660))
{var c_11662 = cljs.core._nth.call(null,chunk__11654_11659,i__11656_11661);prepend_BANG_.call(null,parent__$1,c_11662);
{
var G__11663 = seq__11653_11658;
var G__11664 = chunk__11654_11659;
var G__11665 = count__11655_11660;
var G__11666 = (i__11656_11661 + 1);
seq__11653_11658 = G__11663;
chunk__11654_11659 = G__11664;
count__11655_11660 = G__11665;
i__11656_11661 = G__11666;
continue;
}
} else
{var temp__4092__auto___11667 = cljs.core.seq.call(null,seq__11653_11658);if(temp__4092__auto___11667)
{var seq__11653_11668__$1 = temp__4092__auto___11667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11653_11668__$1))
{var c__5498__auto___11669 = cljs.core.chunk_first.call(null,seq__11653_11668__$1);{
var G__11670 = cljs.core.chunk_rest.call(null,seq__11653_11668__$1);
var G__11671 = c__5498__auto___11669;
var G__11672 = cljs.core.count.call(null,c__5498__auto___11669);
var G__11673 = 0;
seq__11653_11658 = G__11670;
chunk__11654_11659 = G__11671;
count__11655_11660 = G__11672;
i__11656_11661 = G__11673;
continue;
}
} else
{var c_11674 = cljs.core.first.call(null,seq__11653_11668__$1);prepend_BANG_.call(null,parent__$1,c_11674);
{
var G__11675 = cljs.core.next.call(null,seq__11653_11668__$1);
var G__11676 = null;
var G__11677 = 0;
var G__11678 = 0;
seq__11653_11658 = G__11675;
chunk__11654_11659 = G__11676;
count__11655_11660 = G__11677;
i__11656_11661 = G__11678;
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
var G__11657 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11657__delegate.call(this,parent,child,more_children);};
G__11657.cljs$lang$maxFixedArity = 2;
G__11657.cljs$lang$applyTo = (function (arglist__11679){
var parent = cljs.core.first(arglist__11679);
arglist__11679 = cljs.core.next(arglist__11679);
var child = cljs.core.first(arglist__11679);
var more_children = cljs.core.rest(arglist__11679);
return G__11657__delegate(parent,child,more_children);
});
G__11657.cljs$core$IFn$_invoke$arity$variadic = G__11657__delegate;
return G__11657;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___11680 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___11680))
{var next_11681 = temp__4090__auto___11680;parent.insertBefore(actual_node,next_11681);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__11683 = dommy.template.__GT_node_like.call(null,parent);G__11683.innerHTML = "";
dommy.core.append_BANG_.call(null,G__11683,node_like);
return G__11683;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__11685 = elem__$1.parentNode;G__11685.removeChild(elem__$1);
return G__11685;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__11686_SHARP_){return p1__11686_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__11687_SHARP_){return !((p1__11687_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11688){var vec__11689 = p__11688;var special_mouse_event = cljs.core.nth.call(null,vec__11689,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__11689,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4774__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__4762__auto__ = related_target;if(cljs.core.truth_(and__4762__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__4762__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__4774__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__11690){
var elem = cljs.core.first(arglist__11690);
arglist__11690 = cljs.core.next(arglist__11690);
var f = cljs.core.first(arglist__11690);
var args = cljs.core.rest(arglist__11690);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__11691_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__11691_SHARP_));
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
var vec__11715_11738 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11739 = cljs.core.nth.call(null,vec__11715_11738,0,null);var selector_11740 = cljs.core.nth.call(null,vec__11715_11738,1,null);var seq__11716_11741 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11723_11742 = null;var count__11724_11743 = 0;var i__11725_11744 = 0;while(true){
if((i__11725_11744 < count__11724_11743))
{var vec__11732_11745 = cljs.core._nth.call(null,chunk__11723_11742,i__11725_11744);var orig_type_11746 = cljs.core.nth.call(null,vec__11732_11745,0,null);var f_11747 = cljs.core.nth.call(null,vec__11732_11745,1,null);var seq__11726_11748 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11746,new cljs.core.PersistentArrayMap.fromArray([orig_type_11746,cljs.core.identity], true, false)));var chunk__11728_11749 = null;var count__11729_11750 = 0;var i__11730_11751 = 0;while(true){
if((i__11730_11751 < count__11729_11750))
{var vec__11733_11752 = cljs.core._nth.call(null,chunk__11728_11749,i__11730_11751);var actual_type_11753 = cljs.core.nth.call(null,vec__11733_11752,0,null);var factory_11754 = cljs.core.nth.call(null,vec__11733_11752,1,null);var canonical_f_11755 = (cljs.core.truth_(selector_11740)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11739,selector_11740):cljs.core.identity).call(null,factory_11754.call(null,f_11747));dommy.core.update_event_listeners_BANG_.call(null,elem_11739,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11740,actual_type_11753,f_11747], null),canonical_f_11755);
if(cljs.core.truth_(elem_11739.addEventListener))
{elem_11739.addEventListener(cljs.core.name.call(null,actual_type_11753),canonical_f_11755);
} else
{elem_11739.attachEvent(cljs.core.name.call(null,actual_type_11753),canonical_f_11755);
}
{
var G__11756 = seq__11726_11748;
var G__11757 = chunk__11728_11749;
var G__11758 = count__11729_11750;
var G__11759 = (i__11730_11751 + 1);
seq__11726_11748 = G__11756;
chunk__11728_11749 = G__11757;
count__11729_11750 = G__11758;
i__11730_11751 = G__11759;
continue;
}
} else
{var temp__4092__auto___11760 = cljs.core.seq.call(null,seq__11726_11748);if(temp__4092__auto___11760)
{var seq__11726_11761__$1 = temp__4092__auto___11760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11726_11761__$1))
{var c__5498__auto___11762 = cljs.core.chunk_first.call(null,seq__11726_11761__$1);{
var G__11763 = cljs.core.chunk_rest.call(null,seq__11726_11761__$1);
var G__11764 = c__5498__auto___11762;
var G__11765 = cljs.core.count.call(null,c__5498__auto___11762);
var G__11766 = 0;
seq__11726_11748 = G__11763;
chunk__11728_11749 = G__11764;
count__11729_11750 = G__11765;
i__11730_11751 = G__11766;
continue;
}
} else
{var vec__11734_11767 = cljs.core.first.call(null,seq__11726_11761__$1);var actual_type_11768 = cljs.core.nth.call(null,vec__11734_11767,0,null);var factory_11769 = cljs.core.nth.call(null,vec__11734_11767,1,null);var canonical_f_11770 = (cljs.core.truth_(selector_11740)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11739,selector_11740):cljs.core.identity).call(null,factory_11769.call(null,f_11747));dommy.core.update_event_listeners_BANG_.call(null,elem_11739,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11740,actual_type_11768,f_11747], null),canonical_f_11770);
if(cljs.core.truth_(elem_11739.addEventListener))
{elem_11739.addEventListener(cljs.core.name.call(null,actual_type_11768),canonical_f_11770);
} else
{elem_11739.attachEvent(cljs.core.name.call(null,actual_type_11768),canonical_f_11770);
}
{
var G__11771 = cljs.core.next.call(null,seq__11726_11761__$1);
var G__11772 = null;
var G__11773 = 0;
var G__11774 = 0;
seq__11726_11748 = G__11771;
chunk__11728_11749 = G__11772;
count__11729_11750 = G__11773;
i__11730_11751 = G__11774;
continue;
}
}
} else
{}
}
break;
}
{
var G__11775 = seq__11716_11741;
var G__11776 = chunk__11723_11742;
var G__11777 = count__11724_11743;
var G__11778 = (i__11725_11744 + 1);
seq__11716_11741 = G__11775;
chunk__11723_11742 = G__11776;
count__11724_11743 = G__11777;
i__11725_11744 = G__11778;
continue;
}
} else
{var temp__4092__auto___11779 = cljs.core.seq.call(null,seq__11716_11741);if(temp__4092__auto___11779)
{var seq__11716_11780__$1 = temp__4092__auto___11779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11716_11780__$1))
{var c__5498__auto___11781 = cljs.core.chunk_first.call(null,seq__11716_11780__$1);{
var G__11782 = cljs.core.chunk_rest.call(null,seq__11716_11780__$1);
var G__11783 = c__5498__auto___11781;
var G__11784 = cljs.core.count.call(null,c__5498__auto___11781);
var G__11785 = 0;
seq__11716_11741 = G__11782;
chunk__11723_11742 = G__11783;
count__11724_11743 = G__11784;
i__11725_11744 = G__11785;
continue;
}
} else
{var vec__11735_11786 = cljs.core.first.call(null,seq__11716_11780__$1);var orig_type_11787 = cljs.core.nth.call(null,vec__11735_11786,0,null);var f_11788 = cljs.core.nth.call(null,vec__11735_11786,1,null);var seq__11717_11789 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11787,new cljs.core.PersistentArrayMap.fromArray([orig_type_11787,cljs.core.identity], true, false)));var chunk__11719_11790 = null;var count__11720_11791 = 0;var i__11721_11792 = 0;while(true){
if((i__11721_11792 < count__11720_11791))
{var vec__11736_11793 = cljs.core._nth.call(null,chunk__11719_11790,i__11721_11792);var actual_type_11794 = cljs.core.nth.call(null,vec__11736_11793,0,null);var factory_11795 = cljs.core.nth.call(null,vec__11736_11793,1,null);var canonical_f_11796 = (cljs.core.truth_(selector_11740)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11739,selector_11740):cljs.core.identity).call(null,factory_11795.call(null,f_11788));dommy.core.update_event_listeners_BANG_.call(null,elem_11739,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11740,actual_type_11794,f_11788], null),canonical_f_11796);
if(cljs.core.truth_(elem_11739.addEventListener))
{elem_11739.addEventListener(cljs.core.name.call(null,actual_type_11794),canonical_f_11796);
} else
{elem_11739.attachEvent(cljs.core.name.call(null,actual_type_11794),canonical_f_11796);
}
{
var G__11797 = seq__11717_11789;
var G__11798 = chunk__11719_11790;
var G__11799 = count__11720_11791;
var G__11800 = (i__11721_11792 + 1);
seq__11717_11789 = G__11797;
chunk__11719_11790 = G__11798;
count__11720_11791 = G__11799;
i__11721_11792 = G__11800;
continue;
}
} else
{var temp__4092__auto___11801__$1 = cljs.core.seq.call(null,seq__11717_11789);if(temp__4092__auto___11801__$1)
{var seq__11717_11802__$1 = temp__4092__auto___11801__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11717_11802__$1))
{var c__5498__auto___11803 = cljs.core.chunk_first.call(null,seq__11717_11802__$1);{
var G__11804 = cljs.core.chunk_rest.call(null,seq__11717_11802__$1);
var G__11805 = c__5498__auto___11803;
var G__11806 = cljs.core.count.call(null,c__5498__auto___11803);
var G__11807 = 0;
seq__11717_11789 = G__11804;
chunk__11719_11790 = G__11805;
count__11720_11791 = G__11806;
i__11721_11792 = G__11807;
continue;
}
} else
{var vec__11737_11808 = cljs.core.first.call(null,seq__11717_11802__$1);var actual_type_11809 = cljs.core.nth.call(null,vec__11737_11808,0,null);var factory_11810 = cljs.core.nth.call(null,vec__11737_11808,1,null);var canonical_f_11811 = (cljs.core.truth_(selector_11740)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11739,selector_11740):cljs.core.identity).call(null,factory_11810.call(null,f_11788));dommy.core.update_event_listeners_BANG_.call(null,elem_11739,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11740,actual_type_11809,f_11788], null),canonical_f_11811);
if(cljs.core.truth_(elem_11739.addEventListener))
{elem_11739.addEventListener(cljs.core.name.call(null,actual_type_11809),canonical_f_11811);
} else
{elem_11739.attachEvent(cljs.core.name.call(null,actual_type_11809),canonical_f_11811);
}
{
var G__11812 = cljs.core.next.call(null,seq__11717_11802__$1);
var G__11813 = null;
var G__11814 = 0;
var G__11815 = 0;
seq__11717_11789 = G__11812;
chunk__11719_11790 = G__11813;
count__11720_11791 = G__11814;
i__11721_11792 = G__11815;
continue;
}
}
} else
{}
}
break;
}
{
var G__11816 = cljs.core.next.call(null,seq__11716_11780__$1);
var G__11817 = null;
var G__11818 = 0;
var G__11819 = 0;
seq__11716_11741 = G__11816;
chunk__11723_11742 = G__11817;
count__11724_11743 = G__11818;
i__11725_11744 = G__11819;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__11820){
var elem_sel = cljs.core.first(arglist__11820);
var type_fs = cljs.core.rest(arglist__11820);
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
var vec__11844_11867 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11868 = cljs.core.nth.call(null,vec__11844_11867,0,null);var selector_11869 = cljs.core.nth.call(null,vec__11844_11867,1,null);var seq__11845_11870 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11852_11871 = null;var count__11853_11872 = 0;var i__11854_11873 = 0;while(true){
if((i__11854_11873 < count__11853_11872))
{var vec__11861_11874 = cljs.core._nth.call(null,chunk__11852_11871,i__11854_11873);var orig_type_11875 = cljs.core.nth.call(null,vec__11861_11874,0,null);var f_11876 = cljs.core.nth.call(null,vec__11861_11874,1,null);var seq__11855_11877 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11875,new cljs.core.PersistentArrayMap.fromArray([orig_type_11875,cljs.core.identity], true, false)));var chunk__11857_11878 = null;var count__11858_11879 = 0;var i__11859_11880 = 0;while(true){
if((i__11859_11880 < count__11858_11879))
{var vec__11862_11881 = cljs.core._nth.call(null,chunk__11857_11878,i__11859_11880);var actual_type_11882 = cljs.core.nth.call(null,vec__11862_11881,0,null);var __11883 = cljs.core.nth.call(null,vec__11862_11881,1,null);var keys_11884 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11869,actual_type_11882,f_11876], null);var canonical_f_11885 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11868),keys_11884);dommy.core.update_event_listeners_BANG_.call(null,elem_11868,dommy.utils.dissoc_in,keys_11884);
if(cljs.core.truth_(elem_11868.removeEventListener))
{elem_11868.removeEventListener(cljs.core.name.call(null,actual_type_11882),canonical_f_11885);
} else
{elem_11868.detachEvent(cljs.core.name.call(null,actual_type_11882),canonical_f_11885);
}
{
var G__11886 = seq__11855_11877;
var G__11887 = chunk__11857_11878;
var G__11888 = count__11858_11879;
var G__11889 = (i__11859_11880 + 1);
seq__11855_11877 = G__11886;
chunk__11857_11878 = G__11887;
count__11858_11879 = G__11888;
i__11859_11880 = G__11889;
continue;
}
} else
{var temp__4092__auto___11890 = cljs.core.seq.call(null,seq__11855_11877);if(temp__4092__auto___11890)
{var seq__11855_11891__$1 = temp__4092__auto___11890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11855_11891__$1))
{var c__5498__auto___11892 = cljs.core.chunk_first.call(null,seq__11855_11891__$1);{
var G__11893 = cljs.core.chunk_rest.call(null,seq__11855_11891__$1);
var G__11894 = c__5498__auto___11892;
var G__11895 = cljs.core.count.call(null,c__5498__auto___11892);
var G__11896 = 0;
seq__11855_11877 = G__11893;
chunk__11857_11878 = G__11894;
count__11858_11879 = G__11895;
i__11859_11880 = G__11896;
continue;
}
} else
{var vec__11863_11897 = cljs.core.first.call(null,seq__11855_11891__$1);var actual_type_11898 = cljs.core.nth.call(null,vec__11863_11897,0,null);var __11899 = cljs.core.nth.call(null,vec__11863_11897,1,null);var keys_11900 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11869,actual_type_11898,f_11876], null);var canonical_f_11901 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11868),keys_11900);dommy.core.update_event_listeners_BANG_.call(null,elem_11868,dommy.utils.dissoc_in,keys_11900);
if(cljs.core.truth_(elem_11868.removeEventListener))
{elem_11868.removeEventListener(cljs.core.name.call(null,actual_type_11898),canonical_f_11901);
} else
{elem_11868.detachEvent(cljs.core.name.call(null,actual_type_11898),canonical_f_11901);
}
{
var G__11902 = cljs.core.next.call(null,seq__11855_11891__$1);
var G__11903 = null;
var G__11904 = 0;
var G__11905 = 0;
seq__11855_11877 = G__11902;
chunk__11857_11878 = G__11903;
count__11858_11879 = G__11904;
i__11859_11880 = G__11905;
continue;
}
}
} else
{}
}
break;
}
{
var G__11906 = seq__11845_11870;
var G__11907 = chunk__11852_11871;
var G__11908 = count__11853_11872;
var G__11909 = (i__11854_11873 + 1);
seq__11845_11870 = G__11906;
chunk__11852_11871 = G__11907;
count__11853_11872 = G__11908;
i__11854_11873 = G__11909;
continue;
}
} else
{var temp__4092__auto___11910 = cljs.core.seq.call(null,seq__11845_11870);if(temp__4092__auto___11910)
{var seq__11845_11911__$1 = temp__4092__auto___11910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11845_11911__$1))
{var c__5498__auto___11912 = cljs.core.chunk_first.call(null,seq__11845_11911__$1);{
var G__11913 = cljs.core.chunk_rest.call(null,seq__11845_11911__$1);
var G__11914 = c__5498__auto___11912;
var G__11915 = cljs.core.count.call(null,c__5498__auto___11912);
var G__11916 = 0;
seq__11845_11870 = G__11913;
chunk__11852_11871 = G__11914;
count__11853_11872 = G__11915;
i__11854_11873 = G__11916;
continue;
}
} else
{var vec__11864_11917 = cljs.core.first.call(null,seq__11845_11911__$1);var orig_type_11918 = cljs.core.nth.call(null,vec__11864_11917,0,null);var f_11919 = cljs.core.nth.call(null,vec__11864_11917,1,null);var seq__11846_11920 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11918,new cljs.core.PersistentArrayMap.fromArray([orig_type_11918,cljs.core.identity], true, false)));var chunk__11848_11921 = null;var count__11849_11922 = 0;var i__11850_11923 = 0;while(true){
if((i__11850_11923 < count__11849_11922))
{var vec__11865_11924 = cljs.core._nth.call(null,chunk__11848_11921,i__11850_11923);var actual_type_11925 = cljs.core.nth.call(null,vec__11865_11924,0,null);var __11926 = cljs.core.nth.call(null,vec__11865_11924,1,null);var keys_11927 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11869,actual_type_11925,f_11919], null);var canonical_f_11928 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11868),keys_11927);dommy.core.update_event_listeners_BANG_.call(null,elem_11868,dommy.utils.dissoc_in,keys_11927);
if(cljs.core.truth_(elem_11868.removeEventListener))
{elem_11868.removeEventListener(cljs.core.name.call(null,actual_type_11925),canonical_f_11928);
} else
{elem_11868.detachEvent(cljs.core.name.call(null,actual_type_11925),canonical_f_11928);
}
{
var G__11929 = seq__11846_11920;
var G__11930 = chunk__11848_11921;
var G__11931 = count__11849_11922;
var G__11932 = (i__11850_11923 + 1);
seq__11846_11920 = G__11929;
chunk__11848_11921 = G__11930;
count__11849_11922 = G__11931;
i__11850_11923 = G__11932;
continue;
}
} else
{var temp__4092__auto___11933__$1 = cljs.core.seq.call(null,seq__11846_11920);if(temp__4092__auto___11933__$1)
{var seq__11846_11934__$1 = temp__4092__auto___11933__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11846_11934__$1))
{var c__5498__auto___11935 = cljs.core.chunk_first.call(null,seq__11846_11934__$1);{
var G__11936 = cljs.core.chunk_rest.call(null,seq__11846_11934__$1);
var G__11937 = c__5498__auto___11935;
var G__11938 = cljs.core.count.call(null,c__5498__auto___11935);
var G__11939 = 0;
seq__11846_11920 = G__11936;
chunk__11848_11921 = G__11937;
count__11849_11922 = G__11938;
i__11850_11923 = G__11939;
continue;
}
} else
{var vec__11866_11940 = cljs.core.first.call(null,seq__11846_11934__$1);var actual_type_11941 = cljs.core.nth.call(null,vec__11866_11940,0,null);var __11942 = cljs.core.nth.call(null,vec__11866_11940,1,null);var keys_11943 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11869,actual_type_11941,f_11919], null);var canonical_f_11944 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11868),keys_11943);dommy.core.update_event_listeners_BANG_.call(null,elem_11868,dommy.utils.dissoc_in,keys_11943);
if(cljs.core.truth_(elem_11868.removeEventListener))
{elem_11868.removeEventListener(cljs.core.name.call(null,actual_type_11941),canonical_f_11944);
} else
{elem_11868.detachEvent(cljs.core.name.call(null,actual_type_11941),canonical_f_11944);
}
{
var G__11945 = cljs.core.next.call(null,seq__11846_11934__$1);
var G__11946 = null;
var G__11947 = 0;
var G__11948 = 0;
seq__11846_11920 = G__11945;
chunk__11848_11921 = G__11946;
count__11849_11922 = G__11947;
i__11850_11923 = G__11948;
continue;
}
}
} else
{}
}
break;
}
{
var G__11949 = cljs.core.next.call(null,seq__11845_11911__$1);
var G__11950 = null;
var G__11951 = 0;
var G__11952 = 0;
seq__11845_11870 = G__11949;
chunk__11852_11871 = G__11950;
count__11853_11872 = G__11951;
i__11854_11873 = G__11952;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11953){
var elem_sel = cljs.core.first(arglist__11953);
var type_fs = cljs.core.rest(arglist__11953);
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
var vec__11961_11968 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11969 = cljs.core.nth.call(null,vec__11961_11968,0,null);var selector_11970 = cljs.core.nth.call(null,vec__11961_11968,1,null);var seq__11962_11971 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11963_11972 = null;var count__11964_11973 = 0;var i__11965_11974 = 0;while(true){
if((i__11965_11974 < count__11964_11973))
{var vec__11966_11975 = cljs.core._nth.call(null,chunk__11963_11972,i__11965_11974);var type_11976 = cljs.core.nth.call(null,vec__11966_11975,0,null);var f_11977 = cljs.core.nth.call(null,vec__11966_11975,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_11976,((function (seq__11962_11971,chunk__11963_11972,count__11964_11973,i__11965_11974,vec__11966_11975,type_11976,f_11977){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11976,this_fn);
return f_11977.call(null,e);
});})(seq__11962_11971,chunk__11963_11972,count__11964_11973,i__11965_11974,vec__11966_11975,type_11976,f_11977))
);
{
var G__11978 = seq__11962_11971;
var G__11979 = chunk__11963_11972;
var G__11980 = count__11964_11973;
var G__11981 = (i__11965_11974 + 1);
seq__11962_11971 = G__11978;
chunk__11963_11972 = G__11979;
count__11964_11973 = G__11980;
i__11965_11974 = G__11981;
continue;
}
} else
{var temp__4092__auto___11982 = cljs.core.seq.call(null,seq__11962_11971);if(temp__4092__auto___11982)
{var seq__11962_11983__$1 = temp__4092__auto___11982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11962_11983__$1))
{var c__5498__auto___11984 = cljs.core.chunk_first.call(null,seq__11962_11983__$1);{
var G__11985 = cljs.core.chunk_rest.call(null,seq__11962_11983__$1);
var G__11986 = c__5498__auto___11984;
var G__11987 = cljs.core.count.call(null,c__5498__auto___11984);
var G__11988 = 0;
seq__11962_11971 = G__11985;
chunk__11963_11972 = G__11986;
count__11964_11973 = G__11987;
i__11965_11974 = G__11988;
continue;
}
} else
{var vec__11967_11989 = cljs.core.first.call(null,seq__11962_11983__$1);var type_11990 = cljs.core.nth.call(null,vec__11967_11989,0,null);var f_11991 = cljs.core.nth.call(null,vec__11967_11989,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_11990,((function (seq__11962_11971,chunk__11963_11972,count__11964_11973,i__11965_11974,vec__11967_11989,type_11990,f_11991,seq__11962_11983__$1,temp__4092__auto___11982){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11990,this_fn);
return f_11991.call(null,e);
});})(seq__11962_11971,chunk__11963_11972,count__11964_11973,i__11965_11974,vec__11967_11989,type_11990,f_11991,seq__11962_11983__$1,temp__4092__auto___11982))
);
{
var G__11992 = cljs.core.next.call(null,seq__11962_11983__$1);
var G__11993 = null;
var G__11994 = 0;
var G__11995 = 0;
seq__11962_11971 = G__11992;
chunk__11963_11972 = G__11993;
count__11964_11973 = G__11994;
i__11965_11974 = G__11995;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11996){
var elem_sel = cljs.core.first(arglist__11996);
var type_fs = cljs.core.rest(arglist__11996);
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
var fire_BANG___delegate = function (node,event_type,p__11997){var vec__11999 = p__11997;var update_event_BANG_ = cljs.core.nth.call(null,vec__11999,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__4774__auto__ = update_event_BANG_;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
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
var p__11997 = null;if (arguments.length > 2) {
  p__11997 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__11997);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__12000){
var node = cljs.core.first(arglist__12000);
arglist__12000 = cljs.core.next(arglist__12000);
var event_type = cljs.core.first(arglist__12000);
var p__11997 = cljs.core.rest(arglist__12000);
return fire_BANG___delegate(node,event_type,p__11997);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
