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
var G__64575 = (i + class$.length);
start_from = G__64575;
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
{var temp__4090__auto___64600 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___64600))
{var class_list_64601 = temp__4090__auto___64600;var seq__64588_64602 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__64589_64603 = null;var count__64590_64604 = 0;var i__64591_64605 = 0;while(true){
if((i__64591_64605 < count__64590_64604))
{var class_64606 = cljs.core._nth.call(null,chunk__64589_64603,i__64591_64605);class_list_64601.add(class_64606);
{
var G__64607 = seq__64588_64602;
var G__64608 = chunk__64589_64603;
var G__64609 = count__64590_64604;
var G__64610 = (i__64591_64605 + 1);
seq__64588_64602 = G__64607;
chunk__64589_64603 = G__64608;
count__64590_64604 = G__64609;
i__64591_64605 = G__64610;
continue;
}
} else
{var temp__4092__auto___64611 = cljs.core.seq.call(null,seq__64588_64602);if(temp__4092__auto___64611)
{var seq__64588_64612__$1 = temp__4092__auto___64611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64588_64612__$1))
{var c__4017__auto___64613 = cljs.core.chunk_first.call(null,seq__64588_64612__$1);{
var G__64614 = cljs.core.chunk_rest.call(null,seq__64588_64612__$1);
var G__64615 = c__4017__auto___64613;
var G__64616 = cljs.core.count.call(null,c__4017__auto___64613);
var G__64617 = 0;
seq__64588_64602 = G__64614;
chunk__64589_64603 = G__64615;
count__64590_64604 = G__64616;
i__64591_64605 = G__64617;
continue;
}
} else
{var class_64618 = cljs.core.first.call(null,seq__64588_64612__$1);class_list_64601.add(class_64618);
{
var G__64619 = cljs.core.next.call(null,seq__64588_64612__$1);
var G__64620 = null;
var G__64621 = 0;
var G__64622 = 0;
seq__64588_64602 = G__64619;
chunk__64589_64603 = G__64620;
count__64590_64604 = G__64621;
i__64591_64605 = G__64622;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_64623 = elem__$1.className;var seq__64592_64624 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__64593_64625 = null;var count__64594_64626 = 0;var i__64595_64627 = 0;while(true){
if((i__64595_64627 < count__64594_64626))
{var class_64628 = cljs.core._nth.call(null,chunk__64593_64625,i__64595_64627);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_64623,class_64628)))
{} else
{elem__$1.className = (((class_name_64623 === ""))?class_64628:[cljs.core.str(class_name_64623),cljs.core.str(" "),cljs.core.str(class_64628)].join(''));
}
{
var G__64629 = seq__64592_64624;
var G__64630 = chunk__64593_64625;
var G__64631 = count__64594_64626;
var G__64632 = (i__64595_64627 + 1);
seq__64592_64624 = G__64629;
chunk__64593_64625 = G__64630;
count__64594_64626 = G__64631;
i__64595_64627 = G__64632;
continue;
}
} else
{var temp__4092__auto___64633 = cljs.core.seq.call(null,seq__64592_64624);if(temp__4092__auto___64633)
{var seq__64592_64634__$1 = temp__4092__auto___64633;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64592_64634__$1))
{var c__4017__auto___64635 = cljs.core.chunk_first.call(null,seq__64592_64634__$1);{
var G__64636 = cljs.core.chunk_rest.call(null,seq__64592_64634__$1);
var G__64637 = c__4017__auto___64635;
var G__64638 = cljs.core.count.call(null,c__4017__auto___64635);
var G__64639 = 0;
seq__64592_64624 = G__64636;
chunk__64593_64625 = G__64637;
count__64594_64626 = G__64638;
i__64595_64627 = G__64639;
continue;
}
} else
{var class_64640 = cljs.core.first.call(null,seq__64592_64634__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_64623,class_64640)))
{} else
{elem__$1.className = (((class_name_64623 === ""))?class_64640:[cljs.core.str(class_name_64623),cljs.core.str(" "),cljs.core.str(class_64640)].join(''));
}
{
var G__64641 = cljs.core.next.call(null,seq__64592_64634__$1);
var G__64642 = null;
var G__64643 = 0;
var G__64644 = 0;
seq__64592_64624 = G__64641;
chunk__64593_64625 = G__64642;
count__64594_64626 = G__64643;
i__64595_64627 = G__64644;
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
var G__64645__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__64596_64646 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__64597_64647 = null;var count__64598_64648 = 0;var i__64599_64649 = 0;while(true){
if((i__64599_64649 < count__64598_64648))
{var c_64650 = cljs.core._nth.call(null,chunk__64597_64647,i__64599_64649);add_class_BANG_.call(null,elem__$1,c_64650);
{
var G__64651 = seq__64596_64646;
var G__64652 = chunk__64597_64647;
var G__64653 = count__64598_64648;
var G__64654 = (i__64599_64649 + 1);
seq__64596_64646 = G__64651;
chunk__64597_64647 = G__64652;
count__64598_64648 = G__64653;
i__64599_64649 = G__64654;
continue;
}
} else
{var temp__4092__auto___64655 = cljs.core.seq.call(null,seq__64596_64646);if(temp__4092__auto___64655)
{var seq__64596_64656__$1 = temp__4092__auto___64655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64596_64656__$1))
{var c__4017__auto___64657 = cljs.core.chunk_first.call(null,seq__64596_64656__$1);{
var G__64658 = cljs.core.chunk_rest.call(null,seq__64596_64656__$1);
var G__64659 = c__4017__auto___64657;
var G__64660 = cljs.core.count.call(null,c__4017__auto___64657);
var G__64661 = 0;
seq__64596_64646 = G__64658;
chunk__64597_64647 = G__64659;
count__64598_64648 = G__64660;
i__64599_64649 = G__64661;
continue;
}
} else
{var c_64662 = cljs.core.first.call(null,seq__64596_64656__$1);add_class_BANG_.call(null,elem__$1,c_64662);
{
var G__64663 = cljs.core.next.call(null,seq__64596_64656__$1);
var G__64664 = null;
var G__64665 = 0;
var G__64666 = 0;
seq__64596_64646 = G__64663;
chunk__64597_64647 = G__64664;
count__64598_64648 = G__64665;
i__64599_64649 = G__64666;
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
var G__64645 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__64645__delegate.call(this,elem,classes,more_classes);};
G__64645.cljs$lang$maxFixedArity = 2;
G__64645.cljs$lang$applyTo = (function (arglist__64667){
var elem = cljs.core.first(arglist__64667);
arglist__64667 = cljs.core.next(arglist__64667);
var classes = cljs.core.first(arglist__64667);
var more_classes = cljs.core.rest(arglist__64667);
return G__64645__delegate(elem,classes,more_classes);
});
G__64645.cljs$core$IFn$_invoke$arity$variadic = G__64645__delegate;
return G__64645;
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
var G__64668 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__64668;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___64677 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___64677))
{var class_list_64678 = temp__4090__auto___64677;class_list_64678.remove(class$__$1);
} else
{var class_name_64679 = elem__$1.className;var new_class_name_64680 = dommy.attrs.remove_class_str.call(null,class_name_64679,class$__$1);if((class_name_64679 === new_class_name_64680))
{} else
{elem__$1.className = new_class_name_64680;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__64681__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__64673 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__64674 = null;var count__64675 = 0;var i__64676 = 0;while(true){
if((i__64676 < count__64675))
{var c = cljs.core._nth.call(null,chunk__64674,i__64676);remove_class_BANG_.call(null,elem__$1,c);
{
var G__64682 = seq__64673;
var G__64683 = chunk__64674;
var G__64684 = count__64675;
var G__64685 = (i__64676 + 1);
seq__64673 = G__64682;
chunk__64674 = G__64683;
count__64675 = G__64684;
i__64676 = G__64685;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__64673);if(temp__4092__auto__)
{var seq__64673__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64673__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__64673__$1);{
var G__64686 = cljs.core.chunk_rest.call(null,seq__64673__$1);
var G__64687 = c__4017__auto__;
var G__64688 = cljs.core.count.call(null,c__4017__auto__);
var G__64689 = 0;
seq__64673 = G__64686;
chunk__64674 = G__64687;
count__64675 = G__64688;
i__64676 = G__64689;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__64673__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__64690 = cljs.core.next.call(null,seq__64673__$1);
var G__64691 = null;
var G__64692 = 0;
var G__64693 = 0;
seq__64673 = G__64690;
chunk__64674 = G__64691;
count__64675 = G__64692;
i__64676 = G__64693;
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
var G__64681 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__64681__delegate.call(this,elem,class$,classes);};
G__64681.cljs$lang$maxFixedArity = 2;
G__64681.cljs$lang$applyTo = (function (arglist__64694){
var elem = cljs.core.first(arglist__64694);
arglist__64694 = cljs.core.next(arglist__64694);
var class$ = cljs.core.first(arglist__64694);
var classes = cljs.core.rest(arglist__64694);
return G__64681__delegate(elem,class$,classes);
});
G__64681.cljs$core$IFn$_invoke$arity$variadic = G__64681__delegate;
return G__64681;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___64695 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___64695))
{var class_list_64696 = temp__4090__auto___64695;class_list_64696.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__64699){var vec__64700 = p__64699;var k = cljs.core.nth.call(null,vec__64700,0,null);var v = cljs.core.nth.call(null,vec__64700,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__64707_64713 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__64708_64714 = null;var count__64709_64715 = 0;var i__64710_64716 = 0;while(true){
if((i__64710_64716 < count__64709_64715))
{var vec__64711_64717 = cljs.core._nth.call(null,chunk__64708_64714,i__64710_64716);var k_64718 = cljs.core.nth.call(null,vec__64711_64717,0,null);var v_64719 = cljs.core.nth.call(null,vec__64711_64717,1,null);(style[cljs.core.name.call(null,k_64718)] = v_64719);
{
var G__64720 = seq__64707_64713;
var G__64721 = chunk__64708_64714;
var G__64722 = count__64709_64715;
var G__64723 = (i__64710_64716 + 1);
seq__64707_64713 = G__64720;
chunk__64708_64714 = G__64721;
count__64709_64715 = G__64722;
i__64710_64716 = G__64723;
continue;
}
} else
{var temp__4092__auto___64724 = cljs.core.seq.call(null,seq__64707_64713);if(temp__4092__auto___64724)
{var seq__64707_64725__$1 = temp__4092__auto___64724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64707_64725__$1))
{var c__4017__auto___64726 = cljs.core.chunk_first.call(null,seq__64707_64725__$1);{
var G__64727 = cljs.core.chunk_rest.call(null,seq__64707_64725__$1);
var G__64728 = c__4017__auto___64726;
var G__64729 = cljs.core.count.call(null,c__4017__auto___64726);
var G__64730 = 0;
seq__64707_64713 = G__64727;
chunk__64708_64714 = G__64728;
count__64709_64715 = G__64729;
i__64710_64716 = G__64730;
continue;
}
} else
{var vec__64712_64731 = cljs.core.first.call(null,seq__64707_64725__$1);var k_64732 = cljs.core.nth.call(null,vec__64712_64731,0,null);var v_64733 = cljs.core.nth.call(null,vec__64712_64731,1,null);(style[cljs.core.name.call(null,k_64732)] = v_64733);
{
var G__64734 = cljs.core.next.call(null,seq__64707_64725__$1);
var G__64735 = null;
var G__64736 = 0;
var G__64737 = 0;
seq__64707_64713 = G__64734;
chunk__64708_64714 = G__64735;
count__64709_64715 = G__64736;
i__64710_64716 = G__64737;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__64738){
var elem = cljs.core.first(arglist__64738);
var kvs = cljs.core.rest(arglist__64738);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__64745_64751 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__64746_64752 = null;var count__64747_64753 = 0;var i__64748_64754 = 0;while(true){
if((i__64748_64754 < count__64747_64753))
{var vec__64749_64755 = cljs.core._nth.call(null,chunk__64746_64752,i__64748_64754);var k_64756 = cljs.core.nth.call(null,vec__64749_64755,0,null);var v_64757 = cljs.core.nth.call(null,vec__64749_64755,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_64756,[cljs.core.str(v_64757),cljs.core.str("px")].join(''));
{
var G__64758 = seq__64745_64751;
var G__64759 = chunk__64746_64752;
var G__64760 = count__64747_64753;
var G__64761 = (i__64748_64754 + 1);
seq__64745_64751 = G__64758;
chunk__64746_64752 = G__64759;
count__64747_64753 = G__64760;
i__64748_64754 = G__64761;
continue;
}
} else
{var temp__4092__auto___64762 = cljs.core.seq.call(null,seq__64745_64751);if(temp__4092__auto___64762)
{var seq__64745_64763__$1 = temp__4092__auto___64762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64745_64763__$1))
{var c__4017__auto___64764 = cljs.core.chunk_first.call(null,seq__64745_64763__$1);{
var G__64765 = cljs.core.chunk_rest.call(null,seq__64745_64763__$1);
var G__64766 = c__4017__auto___64764;
var G__64767 = cljs.core.count.call(null,c__4017__auto___64764);
var G__64768 = 0;
seq__64745_64751 = G__64765;
chunk__64746_64752 = G__64766;
count__64747_64753 = G__64767;
i__64748_64754 = G__64768;
continue;
}
} else
{var vec__64750_64769 = cljs.core.first.call(null,seq__64745_64763__$1);var k_64770 = cljs.core.nth.call(null,vec__64750_64769,0,null);var v_64771 = cljs.core.nth.call(null,vec__64750_64769,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_64770,[cljs.core.str(v_64771),cljs.core.str("px")].join(''));
{
var G__64772 = cljs.core.next.call(null,seq__64745_64763__$1);
var G__64773 = null;
var G__64774 = 0;
var G__64775 = 0;
seq__64745_64751 = G__64772;
chunk__64746_64752 = G__64773;
count__64747_64753 = G__64774;
i__64748_64754 = G__64775;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__64776){
var elem = cljs.core.first(arglist__64776);
var kvs = cljs.core.rest(arglist__64776);
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
{var G__64785 = dommy.template.__GT_node_like.call(null,elem);(G__64785[cljs.core.name.call(null,k)] = v);
return G__64785;
} else
{var G__64786 = dommy.template.__GT_node_like.call(null,elem);G__64786.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__64786;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__64793__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__64787_64794 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__64788_64795 = null;var count__64789_64796 = 0;var i__64790_64797 = 0;while(true){
if((i__64790_64797 < count__64789_64796))
{var vec__64791_64798 = cljs.core._nth.call(null,chunk__64788_64795,i__64790_64797);var k_64799__$1 = cljs.core.nth.call(null,vec__64791_64798,0,null);var v_64800__$1 = cljs.core.nth.call(null,vec__64791_64798,1,null);set_attr_BANG_.call(null,elem__$1,k_64799__$1,v_64800__$1);
{
var G__64801 = seq__64787_64794;
var G__64802 = chunk__64788_64795;
var G__64803 = count__64789_64796;
var G__64804 = (i__64790_64797 + 1);
seq__64787_64794 = G__64801;
chunk__64788_64795 = G__64802;
count__64789_64796 = G__64803;
i__64790_64797 = G__64804;
continue;
}
} else
{var temp__4092__auto___64805 = cljs.core.seq.call(null,seq__64787_64794);if(temp__4092__auto___64805)
{var seq__64787_64806__$1 = temp__4092__auto___64805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64787_64806__$1))
{var c__4017__auto___64807 = cljs.core.chunk_first.call(null,seq__64787_64806__$1);{
var G__64808 = cljs.core.chunk_rest.call(null,seq__64787_64806__$1);
var G__64809 = c__4017__auto___64807;
var G__64810 = cljs.core.count.call(null,c__4017__auto___64807);
var G__64811 = 0;
seq__64787_64794 = G__64808;
chunk__64788_64795 = G__64809;
count__64789_64796 = G__64810;
i__64790_64797 = G__64811;
continue;
}
} else
{var vec__64792_64812 = cljs.core.first.call(null,seq__64787_64806__$1);var k_64813__$1 = cljs.core.nth.call(null,vec__64792_64812,0,null);var v_64814__$1 = cljs.core.nth.call(null,vec__64792_64812,1,null);set_attr_BANG_.call(null,elem__$1,k_64813__$1,v_64814__$1);
{
var G__64815 = cljs.core.next.call(null,seq__64787_64806__$1);
var G__64816 = null;
var G__64817 = 0;
var G__64818 = 0;
seq__64787_64794 = G__64815;
chunk__64788_64795 = G__64816;
count__64789_64796 = G__64817;
i__64790_64797 = G__64818;
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
var G__64793 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__64793__delegate.call(this,elem,k,v,kvs);};
G__64793.cljs$lang$maxFixedArity = 3;
G__64793.cljs$lang$applyTo = (function (arglist__64819){
var elem = cljs.core.first(arglist__64819);
arglist__64819 = cljs.core.next(arglist__64819);
var k = cljs.core.first(arglist__64819);
arglist__64819 = cljs.core.next(arglist__64819);
var v = cljs.core.first(arglist__64819);
var kvs = cljs.core.rest(arglist__64819);
return G__64793__delegate(elem,k,v,kvs);
});
G__64793.cljs$core$IFn$_invoke$arity$variadic = G__64793__delegate;
return G__64793;
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
var G__64828__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__64824_64829 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__64825_64830 = null;var count__64826_64831 = 0;var i__64827_64832 = 0;while(true){
if((i__64827_64832 < count__64826_64831))
{var k_64833__$1 = cljs.core._nth.call(null,chunk__64825_64830,i__64827_64832);remove_attr_BANG_.call(null,elem__$1,k_64833__$1);
{
var G__64834 = seq__64824_64829;
var G__64835 = chunk__64825_64830;
var G__64836 = count__64826_64831;
var G__64837 = (i__64827_64832 + 1);
seq__64824_64829 = G__64834;
chunk__64825_64830 = G__64835;
count__64826_64831 = G__64836;
i__64827_64832 = G__64837;
continue;
}
} else
{var temp__4092__auto___64838 = cljs.core.seq.call(null,seq__64824_64829);if(temp__4092__auto___64838)
{var seq__64824_64839__$1 = temp__4092__auto___64838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64824_64839__$1))
{var c__4017__auto___64840 = cljs.core.chunk_first.call(null,seq__64824_64839__$1);{
var G__64841 = cljs.core.chunk_rest.call(null,seq__64824_64839__$1);
var G__64842 = c__4017__auto___64840;
var G__64843 = cljs.core.count.call(null,c__4017__auto___64840);
var G__64844 = 0;
seq__64824_64829 = G__64841;
chunk__64825_64830 = G__64842;
count__64826_64831 = G__64843;
i__64827_64832 = G__64844;
continue;
}
} else
{var k_64845__$1 = cljs.core.first.call(null,seq__64824_64839__$1);remove_attr_BANG_.call(null,elem__$1,k_64845__$1);
{
var G__64846 = cljs.core.next.call(null,seq__64824_64839__$1);
var G__64847 = null;
var G__64848 = 0;
var G__64849 = 0;
seq__64824_64829 = G__64846;
chunk__64825_64830 = G__64847;
count__64826_64831 = G__64848;
i__64827_64832 = G__64849;
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
var G__64828 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__64828__delegate.call(this,elem,k,ks);};
G__64828.cljs$lang$maxFixedArity = 2;
G__64828.cljs$lang$applyTo = (function (arglist__64850){
var elem = cljs.core.first(arglist__64850);
arglist__64850 = cljs.core.next(arglist__64850);
var k = cljs.core.first(arglist__64850);
var ks = cljs.core.rest(arglist__64850);
return G__64828__delegate(elem,k,ks);
});
G__64828.cljs$core$IFn$_invoke$arity$variadic = G__64828__delegate;
return G__64828;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__64852 = dommy.template.__GT_node_like.call(null,elem);G__64852.style.display = ((show_QMARK_)?"":"none");
return G__64852;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__64854 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__64854,false);
return G__64854;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__64856 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__64856,true);
return G__64856;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__64858 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__64858["constructor"] = Object);
return G__64858;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
