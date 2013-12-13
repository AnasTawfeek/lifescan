// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3281__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3281__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3281__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__336524 = (i + class$.length);
start_from = G__336524;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___336549 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___336549))
{var class_list_336550 = temp__4090__auto___336549;var seq__336537_336551 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__336538_336552 = null;var count__336539_336553 = 0;var i__336540_336554 = 0;while(true){
if((i__336540_336554 < count__336539_336553))
{var class_336555 = cljs.core._nth.call(null,chunk__336538_336552,i__336540_336554);class_list_336550.add(class_336555);
{
var G__336556 = seq__336537_336551;
var G__336557 = chunk__336538_336552;
var G__336558 = count__336539_336553;
var G__336559 = (i__336540_336554 + 1);
seq__336537_336551 = G__336556;
chunk__336538_336552 = G__336557;
count__336539_336553 = G__336558;
i__336540_336554 = G__336559;
continue;
}
} else
{var temp__4092__auto___336560 = cljs.core.seq.call(null,seq__336537_336551);if(temp__4092__auto___336560)
{var seq__336537_336561__$1 = temp__4092__auto___336560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__336537_336561__$1))
{var c__4017__auto___336562 = cljs.core.chunk_first.call(null,seq__336537_336561__$1);{
var G__336563 = cljs.core.chunk_rest.call(null,seq__336537_336561__$1);
var G__336564 = c__4017__auto___336562;
var G__336565 = cljs.core.count.call(null,c__4017__auto___336562);
var G__336566 = 0;
seq__336537_336551 = G__336563;
chunk__336538_336552 = G__336564;
count__336539_336553 = G__336565;
i__336540_336554 = G__336566;
continue;
}
} else
{var class_336567 = cljs.core.first.call(null,seq__336537_336561__$1);class_list_336550.add(class_336567);
{
var G__336568 = cljs.core.next.call(null,seq__336537_336561__$1);
var G__336569 = null;
var G__336570 = 0;
var G__336571 = 0;
seq__336537_336551 = G__336568;
chunk__336538_336552 = G__336569;
count__336539_336553 = G__336570;
i__336540_336554 = G__336571;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_336572 = elem__$1.className;var seq__336541_336573 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__336542_336574 = null;var count__336543_336575 = 0;var i__336544_336576 = 0;while(true){
if((i__336544_336576 < count__336543_336575))
{var class_336577 = cljs.core._nth.call(null,chunk__336542_336574,i__336544_336576);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_336572,class_336577)))
{} else
{elem__$1.className = (((class_name_336572 === ""))?class_336577:[cljs.core.str(class_name_336572),cljs.core.str(" "),cljs.core.str(class_336577)].join(''));
}
{
var G__336578 = seq__336541_336573;
var G__336579 = chunk__336542_336574;
var G__336580 = count__336543_336575;
var G__336581 = (i__336544_336576 + 1);
seq__336541_336573 = G__336578;
chunk__336542_336574 = G__336579;
count__336543_336575 = G__336580;
i__336544_336576 = G__336581;
continue;
}
} else
{var temp__4092__auto___336582 = cljs.core.seq.call(null,seq__336541_336573);if(temp__4092__auto___336582)
{var seq__336541_336583__$1 = temp__4092__auto___336582;if(cljs.core.chunked_seq_QMARK_.call(null,seq__336541_336583__$1))
{var c__4017__auto___336584 = cljs.core.chunk_first.call(null,seq__336541_336583__$1);{
var G__336585 = cljs.core.chunk_rest.call(null,seq__336541_336583__$1);
var G__336586 = c__4017__auto___336584;
var G__336587 = cljs.core.count.call(null,c__4017__auto___336584);
var G__336588 = 0;
seq__336541_336573 = G__336585;
chunk__336542_336574 = G__336586;
count__336543_336575 = G__336587;
i__336544_336576 = G__336588;
continue;
}
} else
{var class_336589 = cljs.core.first.call(null,seq__336541_336583__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_336572,class_336589)))
{} else
{elem__$1.className = (((class_name_336572 === ""))?class_336589:[cljs.core.str(class_name_336572),cljs.core.str(" "),cljs.core.str(class_336589)].join(''));
}
{
var G__336590 = cljs.core.next.call(null,seq__336541_336583__$1);
var G__336591 = null;
var G__336592 = 0;
var G__336593 = 0;
seq__336541_336573 = G__336590;
chunk__336542_336574 = G__336591;
count__336543_336575 = G__336592;
i__336544_336576 = G__336593;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__336594__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__336545_336595 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__336546_336596 = null;var count__336547_336597 = 0;var i__336548_336598 = 0;while(true){
if((i__336548_336598 < count__336547_336597))
{var c_336599 = cljs.core._nth.call(null,chunk__336546_336596,i__336548_336598);add_class_BANG_.call(null,elem__$1,c_336599);
{
var G__336600 = seq__336545_336595;
var G__336601 = chunk__336546_336596;
var G__336602 = count__336547_336597;
var G__336603 = (i__336548_336598 + 1);
seq__336545_336595 = G__336600;
chunk__336546_336596 = G__336601;
count__336547_336597 = G__336602;
i__336548_336598 = G__336603;
continue;
}
} else
{var temp__4092__auto___336604 = cljs.core.seq.call(null,seq__336545_336595);if(temp__4092__auto___336604)
{var seq__336545_336605__$1 = temp__4092__auto___336604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__336545_336605__$1))
{var c__4017__auto___336606 = cljs.core.chunk_first.call(null,seq__336545_336605__$1);{
var G__336607 = cljs.core.chunk_rest.call(null,seq__336545_336605__$1);
var G__336608 = c__4017__auto___336606;
var G__336609 = cljs.core.count.call(null,c__4017__auto___336606);
var G__336610 = 0;
seq__336545_336595 = G__336607;
chunk__336546_336596 = G__336608;
count__336547_336597 = G__336609;
i__336548_336598 = G__336610;
continue;
}
} else
{var c_336611 = cljs.core.first.call(null,seq__336545_336605__$1);add_class_BANG_.call(null,elem__$1,c_336611);
{
var G__336612 = cljs.core.next.call(null,seq__336545_336605__$1);
var G__336613 = null;
var G__336614 = 0;
var G__336615 = 0;
seq__336545_336595 = G__336612;
chunk__336546_336596 = G__336613;
count__336547_336597 = G__336614;
i__336548_336598 = G__336615;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__336594 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__336594__delegate.call(this,elem,classes,more_classes);};
G__336594.cljs$lang$maxFixedArity = 2;
G__336594.cljs$lang$applyTo = (function (arglist__336616){
var elem = cljs.core.first(arglist__336616);
arglist__336616 = cljs.core.next(arglist__336616);
var classes = cljs.core.first(arglist__336616);
var more_classes = cljs.core.rest(arglist__336616);
return G__336594__delegate(elem,classes,more_classes);
});
G__336594.cljs$core$IFn$_invoke$arity$variadic = G__336594__delegate;
return G__336594;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__336617 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__336617;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___336626 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___336626))
{var class_list_336627 = temp__4090__auto___336626;class_list_336627.remove(class$__$1);
} else
{var class_name_336628 = elem__$1.className;var new_class_name_336629 = dommy.attrs.remove_class_str.call(null,class_name_336628,class$__$1);if((class_name_336628 === new_class_name_336629))
{} else
{elem__$1.className = new_class_name_336629;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__336630__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__336622 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__336623 = null;var count__336624 = 0;var i__336625 = 0;while(true){
if((i__336625 < count__336624))
{var c = cljs.core._nth.call(null,chunk__336623,i__336625);remove_class_BANG_.call(null,elem__$1,c);
{
var G__336631 = seq__336622;
var G__336632 = chunk__336623;
var G__336633 = count__336624;
var G__336634 = (i__336625 + 1);
seq__336622 = G__336631;
chunk__336623 = G__336632;
count__336624 = G__336633;
i__336625 = G__336634;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__336622);if(temp__4092__auto__)
{var seq__336622__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__336622__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__336622__$1);{
var G__336635 = cljs.core.chunk_rest.call(null,seq__336622__$1);
var G__336636 = c__4017__auto__;
var G__336637 = cljs.core.count.call(null,c__4017__auto__);
var G__336638 = 0;
seq__336622 = G__336635;
chunk__336623 = G__336636;
count__336624 = G__336637;
i__336625 = G__336638;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__336622__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__336639 = cljs.core.next.call(null,seq__336622__$1);
var G__336640 = null;
var G__336641 = 0;
var G__336642 = 0;
seq__336622 = G__336639;
chunk__336623 = G__336640;
count__336624 = G__336641;
i__336625 = G__336642;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__336630 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__336630__delegate.call(this,elem,class$,classes);};
G__336630.cljs$lang$maxFixedArity = 2;
G__336630.cljs$lang$applyTo = (function (arglist__336643){
var elem = cljs.core.first(arglist__336643);
arglist__336643 = cljs.core.next(arglist__336643);
var class$ = cljs.core.first(arglist__336643);
var classes = cljs.core.rest(arglist__336643);
return G__336630__delegate(elem,class$,classes);
});
G__336630.cljs$core$IFn$_invoke$arity$variadic = G__336630__delegate;
return G__336630;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___336644 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___336644))
{var class_list_336645 = temp__4090__auto___336644;class_list_336645.toggle(class$);
} else
{toggle_class_BANG_.call(null,elem__$1,class$,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__336648){var vec__336649 = p__336648;var k = cljs.core.nth.call(null,vec__336649,0,null);var v = cljs.core.nth.call(null,vec__336649,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__336656_336662 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__336657_336663 = null;var count__336658_336664 = 0;var i__336659_336665 = 0;while(true){
if((i__336659_336665 < count__336658_336664))
{var vec__336660_336666 = cljs.core._nth.call(null,chunk__336657_336663,i__336659_336665);var k_336667 = cljs.core.nth.call(null,vec__336660_336666,0,null);var v_336668 = cljs.core.nth.call(null,vec__336660_336666,1,null);(style[cljs.core.name.call(null,k_336667)] = v_336668);
{
var G__336669 = seq__336656_336662;
var G__336670 = chunk__336657_336663;
var G__336671 = count__336658_336664;
var G__336672 = (i__336659_336665 + 1);
seq__336656_336662 = G__336669;
chunk__336657_336663 = G__336670;
count__336658_336664 = G__336671;
i__336659_336665 = G__336672;
continue;
}
} else
{var temp__4092__auto___336673 = cljs.core.seq.call(null,seq__336656_336662);if(temp__4092__auto___336673)
{var seq__336656_336674__$1 = temp__4092__auto___336673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__336656_336674__$1))
{var c__4017__auto___336675 = cljs.core.chunk_first.call(null,seq__336656_336674__$1);{
var G__336676 = cljs.core.chunk_rest.call(null,seq__336656_336674__$1);
var G__336677 = c__4017__auto___336675;
var G__336678 = cljs.core.count.call(null,c__4017__auto___336675);
var G__336679 = 0;
seq__336656_336662 = G__336676;
chunk__336657_336663 = G__336677;
count__336658_336664 = G__336678;
i__336659_336665 = G__336679;
continue;
}
} else
{var vec__336661_336680 = cljs.core.first.call(null,seq__336656_336674__$1);var k_336681 = cljs.core.nth.call(null,vec__336661_336680,0,null);var v_336682 = cljs.core.nth.call(null,vec__336661_336680,1,null);(style[cljs.core.name.call(null,k_336681)] = v_336682);
{
var G__336683 = cljs.core.next.call(null,seq__336656_336674__$1);
var G__336684 = null;
var G__336685 = 0;
var G__336686 = 0;
seq__336656_336662 = G__336683;
chunk__336657_336663 = G__336684;
count__336658_336664 = G__336685;
i__336659_336665 = G__336686;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__336687){
var elem = cljs.core.first(arglist__336687);
var kvs = cljs.core.rest(arglist__336687);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__336694_336700 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__336695_336701 = null;var count__336696_336702 = 0;var i__336697_336703 = 0;while(true){
if((i__336697_336703 < count__336696_336702))
{var vec__336698_336704 = cljs.core._nth.call(null,chunk__336695_336701,i__336697_336703);var k_336705 = cljs.core.nth.call(null,vec__336698_336704,0,null);var v_336706 = cljs.core.nth.call(null,vec__336698_336704,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_336705,[cljs.core.str(v_336706),cljs.core.str("px")].join(''));
{
var G__336707 = seq__336694_336700;
var G__336708 = chunk__336695_336701;
var G__336709 = count__336696_336702;
var G__336710 = (i__336697_336703 + 1);
seq__336694_336700 = G__336707;
chunk__336695_336701 = G__336708;
count__336696_336702 = G__336709;
i__336697_336703 = G__336710;
continue;
}
} else
{var temp__4092__auto___336711 = cljs.core.seq.call(null,seq__336694_336700);if(temp__4092__auto___336711)
{var seq__336694_336712__$1 = temp__4092__auto___336711;if(cljs.core.chunked_seq_QMARK_.call(null,seq__336694_336712__$1))
{var c__4017__auto___336713 = cljs.core.chunk_first.call(null,seq__336694_336712__$1);{
var G__336714 = cljs.core.chunk_rest.call(null,seq__336694_336712__$1);
var G__336715 = c__4017__auto___336713;
var G__336716 = cljs.core.count.call(null,c__4017__auto___336713);
var G__336717 = 0;
seq__336694_336700 = G__336714;
chunk__336695_336701 = G__336715;
count__336696_336702 = G__336716;
i__336697_336703 = G__336717;
continue;
}
} else
{var vec__336699_336718 = cljs.core.first.call(null,seq__336694_336712__$1);var k_336719 = cljs.core.nth.call(null,vec__336699_336718,0,null);var v_336720 = cljs.core.nth.call(null,vec__336699_336718,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_336719,[cljs.core.str(v_336720),cljs.core.str("px")].join(''));
{
var G__336721 = cljs.core.next.call(null,seq__336694_336712__$1);
var G__336722 = null;
var G__336723 = 0;
var G__336724 = 0;
seq__336694_336700 = G__336721;
chunk__336695_336701 = G__336722;
count__336696_336702 = G__336723;
i__336697_336703 = G__336724;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__336725){
var elem = cljs.core.first(arglist__336725);
var kvs = cljs.core.rest(arglist__336725);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__336734 = dommy.template.__GT_node_like.call(null,elem);(G__336734[cljs.core.name.call(null,k)] = v);
return G__336734;
} else
{var G__336735 = dommy.template.__GT_node_like.call(null,elem);G__336735.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__336735;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__336742__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__336736_336743 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__336737_336744 = null;var count__336738_336745 = 0;var i__336739_336746 = 0;while(true){
if((i__336739_336746 < count__336738_336745))
{var vec__336740_336747 = cljs.core._nth.call(null,chunk__336737_336744,i__336739_336746);var k_336748__$1 = cljs.core.nth.call(null,vec__336740_336747,0,null);var v_336749__$1 = cljs.core.nth.call(null,vec__336740_336747,1,null);set_attr_BANG_.call(null,elem__$1,k_336748__$1,v_336749__$1);
{
var G__336750 = seq__336736_336743;
var G__336751 = chunk__336737_336744;
var G__336752 = count__336738_336745;
var G__336753 = (i__336739_336746 + 1);
seq__336736_336743 = G__336750;
chunk__336737_336744 = G__336751;
count__336738_336745 = G__336752;
i__336739_336746 = G__336753;
continue;
}
} else
{var temp__4092__auto___336754 = cljs.core.seq.call(null,seq__336736_336743);if(temp__4092__auto___336754)
{var seq__336736_336755__$1 = temp__4092__auto___336754;if(cljs.core.chunked_seq_QMARK_.call(null,seq__336736_336755__$1))
{var c__4017__auto___336756 = cljs.core.chunk_first.call(null,seq__336736_336755__$1);{
var G__336757 = cljs.core.chunk_rest.call(null,seq__336736_336755__$1);
var G__336758 = c__4017__auto___336756;
var G__336759 = cljs.core.count.call(null,c__4017__auto___336756);
var G__336760 = 0;
seq__336736_336743 = G__336757;
chunk__336737_336744 = G__336758;
count__336738_336745 = G__336759;
i__336739_336746 = G__336760;
continue;
}
} else
{var vec__336741_336761 = cljs.core.first.call(null,seq__336736_336755__$1);var k_336762__$1 = cljs.core.nth.call(null,vec__336741_336761,0,null);var v_336763__$1 = cljs.core.nth.call(null,vec__336741_336761,1,null);set_attr_BANG_.call(null,elem__$1,k_336762__$1,v_336763__$1);
{
var G__336764 = cljs.core.next.call(null,seq__336736_336755__$1);
var G__336765 = null;
var G__336766 = 0;
var G__336767 = 0;
seq__336736_336743 = G__336764;
chunk__336737_336744 = G__336765;
count__336738_336745 = G__336766;
i__336739_336746 = G__336767;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__336742 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__336742__delegate.call(this,elem,k,v,kvs);};
G__336742.cljs$lang$maxFixedArity = 3;
G__336742.cljs$lang$applyTo = (function (arglist__336768){
var elem = cljs.core.first(arglist__336768);
arglist__336768 = cljs.core.next(arglist__336768);
var k = cljs.core.first(arglist__336768);
arglist__336768 = cljs.core.next(arglist__336768);
var v = cljs.core.first(arglist__336768);
var kvs = cljs.core.rest(arglist__336768);
return G__336742__delegate(elem,k,v,kvs);
});
G__336742.cljs$core$IFn$_invoke$arity$variadic = G__336742__delegate;
return G__336742;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__336777__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__336773_336778 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__336774_336779 = null;var count__336775_336780 = 0;var i__336776_336781 = 0;while(true){
if((i__336776_336781 < count__336775_336780))
{var k_336782__$1 = cljs.core._nth.call(null,chunk__336774_336779,i__336776_336781);remove_attr_BANG_.call(null,elem__$1,k_336782__$1);
{
var G__336783 = seq__336773_336778;
var G__336784 = chunk__336774_336779;
var G__336785 = count__336775_336780;
var G__336786 = (i__336776_336781 + 1);
seq__336773_336778 = G__336783;
chunk__336774_336779 = G__336784;
count__336775_336780 = G__336785;
i__336776_336781 = G__336786;
continue;
}
} else
{var temp__4092__auto___336787 = cljs.core.seq.call(null,seq__336773_336778);if(temp__4092__auto___336787)
{var seq__336773_336788__$1 = temp__4092__auto___336787;if(cljs.core.chunked_seq_QMARK_.call(null,seq__336773_336788__$1))
{var c__4017__auto___336789 = cljs.core.chunk_first.call(null,seq__336773_336788__$1);{
var G__336790 = cljs.core.chunk_rest.call(null,seq__336773_336788__$1);
var G__336791 = c__4017__auto___336789;
var G__336792 = cljs.core.count.call(null,c__4017__auto___336789);
var G__336793 = 0;
seq__336773_336778 = G__336790;
chunk__336774_336779 = G__336791;
count__336775_336780 = G__336792;
i__336776_336781 = G__336793;
continue;
}
} else
{var k_336794__$1 = cljs.core.first.call(null,seq__336773_336788__$1);remove_attr_BANG_.call(null,elem__$1,k_336794__$1);
{
var G__336795 = cljs.core.next.call(null,seq__336773_336788__$1);
var G__336796 = null;
var G__336797 = 0;
var G__336798 = 0;
seq__336773_336778 = G__336795;
chunk__336774_336779 = G__336796;
count__336775_336780 = G__336797;
i__336776_336781 = G__336798;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__336777 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__336777__delegate.call(this,elem,k,ks);};
G__336777.cljs$lang$maxFixedArity = 2;
G__336777.cljs$lang$applyTo = (function (arglist__336799){
var elem = cljs.core.first(arglist__336799);
arglist__336799 = cljs.core.next(arglist__336799);
var k = cljs.core.first(arglist__336799);
var ks = cljs.core.rest(arglist__336799);
return G__336777__delegate(elem,k,ks);
});
G__336777.cljs$core$IFn$_invoke$arity$variadic = G__336777__delegate;
return G__336777;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__336801 = dommy.template.__GT_node_like.call(null,elem);G__336801.style.display = ((show_QMARK_)?"":"none");
return G__336801;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__336803 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__336803,false);
return G__336803;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__336805 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__336805,true);
return G__336805;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__336807 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__336807["constructor"] = Object);
return G__336807;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
