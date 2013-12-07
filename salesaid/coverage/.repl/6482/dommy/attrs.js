// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__4761__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__4761__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__4761__auto__;
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
var G__15573 = (i + class$.length);
start_from = G__15573;
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
{var temp__4090__auto___15598 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15598))
{var class_list_15599 = temp__4090__auto___15598;var seq__15586_15600 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__15587_15601 = null;var count__15588_15602 = 0;var i__15589_15603 = 0;while(true){
if((i__15589_15603 < count__15588_15602))
{var class_15604 = cljs.core._nth.call(null,chunk__15587_15601,i__15589_15603);class_list_15599.add(class_15604);
{
var G__15605 = seq__15586_15600;
var G__15606 = chunk__15587_15601;
var G__15607 = count__15588_15602;
var G__15608 = (i__15589_15603 + 1);
seq__15586_15600 = G__15605;
chunk__15587_15601 = G__15606;
count__15588_15602 = G__15607;
i__15589_15603 = G__15608;
continue;
}
} else
{var temp__4092__auto___15609 = cljs.core.seq.call(null,seq__15586_15600);if(temp__4092__auto___15609)
{var seq__15586_15610__$1 = temp__4092__auto___15609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15586_15610__$1))
{var c__5497__auto___15611 = cljs.core.chunk_first.call(null,seq__15586_15610__$1);{
var G__15612 = cljs.core.chunk_rest.call(null,seq__15586_15610__$1);
var G__15613 = c__5497__auto___15611;
var G__15614 = cljs.core.count.call(null,c__5497__auto___15611);
var G__15615 = 0;
seq__15586_15600 = G__15612;
chunk__15587_15601 = G__15613;
count__15588_15602 = G__15614;
i__15589_15603 = G__15615;
continue;
}
} else
{var class_15616 = cljs.core.first.call(null,seq__15586_15610__$1);class_list_15599.add(class_15616);
{
var G__15617 = cljs.core.next.call(null,seq__15586_15610__$1);
var G__15618 = null;
var G__15619 = 0;
var G__15620 = 0;
seq__15586_15600 = G__15617;
chunk__15587_15601 = G__15618;
count__15588_15602 = G__15619;
i__15589_15603 = G__15620;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_15621 = elem__$1.className;var seq__15590_15622 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__15591_15623 = null;var count__15592_15624 = 0;var i__15593_15625 = 0;while(true){
if((i__15593_15625 < count__15592_15624))
{var class_15626 = cljs.core._nth.call(null,chunk__15591_15623,i__15593_15625);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_15621,class_15626)))
{} else
{elem__$1.className = (((class_name_15621 === ""))?class_15626:[cljs.core.str(class_name_15621),cljs.core.str(" "),cljs.core.str(class_15626)].join(''));
}
{
var G__15627 = seq__15590_15622;
var G__15628 = chunk__15591_15623;
var G__15629 = count__15592_15624;
var G__15630 = (i__15593_15625 + 1);
seq__15590_15622 = G__15627;
chunk__15591_15623 = G__15628;
count__15592_15624 = G__15629;
i__15593_15625 = G__15630;
continue;
}
} else
{var temp__4092__auto___15631 = cljs.core.seq.call(null,seq__15590_15622);if(temp__4092__auto___15631)
{var seq__15590_15632__$1 = temp__4092__auto___15631;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15590_15632__$1))
{var c__5497__auto___15633 = cljs.core.chunk_first.call(null,seq__15590_15632__$1);{
var G__15634 = cljs.core.chunk_rest.call(null,seq__15590_15632__$1);
var G__15635 = c__5497__auto___15633;
var G__15636 = cljs.core.count.call(null,c__5497__auto___15633);
var G__15637 = 0;
seq__15590_15622 = G__15634;
chunk__15591_15623 = G__15635;
count__15592_15624 = G__15636;
i__15593_15625 = G__15637;
continue;
}
} else
{var class_15638 = cljs.core.first.call(null,seq__15590_15632__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_15621,class_15638)))
{} else
{elem__$1.className = (((class_name_15621 === ""))?class_15638:[cljs.core.str(class_name_15621),cljs.core.str(" "),cljs.core.str(class_15638)].join(''));
}
{
var G__15639 = cljs.core.next.call(null,seq__15590_15632__$1);
var G__15640 = null;
var G__15641 = 0;
var G__15642 = 0;
seq__15590_15622 = G__15639;
chunk__15591_15623 = G__15640;
count__15592_15624 = G__15641;
i__15593_15625 = G__15642;
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
var G__15643__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15594_15644 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__15595_15645 = null;var count__15596_15646 = 0;var i__15597_15647 = 0;while(true){
if((i__15597_15647 < count__15596_15646))
{var c_15648 = cljs.core._nth.call(null,chunk__15595_15645,i__15597_15647);add_class_BANG_.call(null,elem__$1,c_15648);
{
var G__15649 = seq__15594_15644;
var G__15650 = chunk__15595_15645;
var G__15651 = count__15596_15646;
var G__15652 = (i__15597_15647 + 1);
seq__15594_15644 = G__15649;
chunk__15595_15645 = G__15650;
count__15596_15646 = G__15651;
i__15597_15647 = G__15652;
continue;
}
} else
{var temp__4092__auto___15653 = cljs.core.seq.call(null,seq__15594_15644);if(temp__4092__auto___15653)
{var seq__15594_15654__$1 = temp__4092__auto___15653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15594_15654__$1))
{var c__5497__auto___15655 = cljs.core.chunk_first.call(null,seq__15594_15654__$1);{
var G__15656 = cljs.core.chunk_rest.call(null,seq__15594_15654__$1);
var G__15657 = c__5497__auto___15655;
var G__15658 = cljs.core.count.call(null,c__5497__auto___15655);
var G__15659 = 0;
seq__15594_15644 = G__15656;
chunk__15595_15645 = G__15657;
count__15596_15646 = G__15658;
i__15597_15647 = G__15659;
continue;
}
} else
{var c_15660 = cljs.core.first.call(null,seq__15594_15654__$1);add_class_BANG_.call(null,elem__$1,c_15660);
{
var G__15661 = cljs.core.next.call(null,seq__15594_15654__$1);
var G__15662 = null;
var G__15663 = 0;
var G__15664 = 0;
seq__15594_15644 = G__15661;
chunk__15595_15645 = G__15662;
count__15596_15646 = G__15663;
i__15597_15647 = G__15664;
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
var G__15643 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15643__delegate.call(this,elem,classes,more_classes);};
G__15643.cljs$lang$maxFixedArity = 2;
G__15643.cljs$lang$applyTo = (function (arglist__15665){
var elem = cljs.core.first(arglist__15665);
arglist__15665 = cljs.core.next(arglist__15665);
var classes = cljs.core.first(arglist__15665);
var more_classes = cljs.core.rest(arglist__15665);
return G__15643__delegate(elem,classes,more_classes);
});
G__15643.cljs$core$IFn$_invoke$arity$variadic = G__15643__delegate;
return G__15643;
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
var G__15666 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__15666;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___15675 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15675))
{var class_list_15676 = temp__4090__auto___15675;class_list_15676.remove(class$__$1);
} else
{var class_name_15677 = elem__$1.className;var new_class_name_15678 = dommy.attrs.remove_class_str.call(null,class_name_15677,class$__$1);if((class_name_15677 === new_class_name_15678))
{} else
{elem__$1.className = new_class_name_15678;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__15679__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15671 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__15672 = null;var count__15673 = 0;var i__15674 = 0;while(true){
if((i__15674 < count__15673))
{var c = cljs.core._nth.call(null,chunk__15672,i__15674);remove_class_BANG_.call(null,elem__$1,c);
{
var G__15680 = seq__15671;
var G__15681 = chunk__15672;
var G__15682 = count__15673;
var G__15683 = (i__15674 + 1);
seq__15671 = G__15680;
chunk__15672 = G__15681;
count__15673 = G__15682;
i__15674 = G__15683;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15671);if(temp__4092__auto__)
{var seq__15671__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15671__$1))
{var c__5497__auto__ = cljs.core.chunk_first.call(null,seq__15671__$1);{
var G__15684 = cljs.core.chunk_rest.call(null,seq__15671__$1);
var G__15685 = c__5497__auto__;
var G__15686 = cljs.core.count.call(null,c__5497__auto__);
var G__15687 = 0;
seq__15671 = G__15684;
chunk__15672 = G__15685;
count__15673 = G__15686;
i__15674 = G__15687;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__15671__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__15688 = cljs.core.next.call(null,seq__15671__$1);
var G__15689 = null;
var G__15690 = 0;
var G__15691 = 0;
seq__15671 = G__15688;
chunk__15672 = G__15689;
count__15673 = G__15690;
i__15674 = G__15691;
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
var G__15679 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15679__delegate.call(this,elem,class$,classes);};
G__15679.cljs$lang$maxFixedArity = 2;
G__15679.cljs$lang$applyTo = (function (arglist__15692){
var elem = cljs.core.first(arglist__15692);
arglist__15692 = cljs.core.next(arglist__15692);
var class$ = cljs.core.first(arglist__15692);
var classes = cljs.core.rest(arglist__15692);
return G__15679__delegate(elem,class$,classes);
});
G__15679.cljs$core$IFn$_invoke$arity$variadic = G__15679__delegate;
return G__15679;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___15693 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15693))
{var class_list_15694 = temp__4090__auto___15693;class_list_15694.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__15697){var vec__15698 = p__15697;var k = cljs.core.nth.call(null,vec__15698,0,null);var v = cljs.core.nth.call(null,vec__15698,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__15705_15711 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__15706_15712 = null;var count__15707_15713 = 0;var i__15708_15714 = 0;while(true){
if((i__15708_15714 < count__15707_15713))
{var vec__15709_15715 = cljs.core._nth.call(null,chunk__15706_15712,i__15708_15714);var k_15716 = cljs.core.nth.call(null,vec__15709_15715,0,null);var v_15717 = cljs.core.nth.call(null,vec__15709_15715,1,null);(style[cljs.core.name.call(null,k_15716)] = v_15717);
{
var G__15718 = seq__15705_15711;
var G__15719 = chunk__15706_15712;
var G__15720 = count__15707_15713;
var G__15721 = (i__15708_15714 + 1);
seq__15705_15711 = G__15718;
chunk__15706_15712 = G__15719;
count__15707_15713 = G__15720;
i__15708_15714 = G__15721;
continue;
}
} else
{var temp__4092__auto___15722 = cljs.core.seq.call(null,seq__15705_15711);if(temp__4092__auto___15722)
{var seq__15705_15723__$1 = temp__4092__auto___15722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15705_15723__$1))
{var c__5497__auto___15724 = cljs.core.chunk_first.call(null,seq__15705_15723__$1);{
var G__15725 = cljs.core.chunk_rest.call(null,seq__15705_15723__$1);
var G__15726 = c__5497__auto___15724;
var G__15727 = cljs.core.count.call(null,c__5497__auto___15724);
var G__15728 = 0;
seq__15705_15711 = G__15725;
chunk__15706_15712 = G__15726;
count__15707_15713 = G__15727;
i__15708_15714 = G__15728;
continue;
}
} else
{var vec__15710_15729 = cljs.core.first.call(null,seq__15705_15723__$1);var k_15730 = cljs.core.nth.call(null,vec__15710_15729,0,null);var v_15731 = cljs.core.nth.call(null,vec__15710_15729,1,null);(style[cljs.core.name.call(null,k_15730)] = v_15731);
{
var G__15732 = cljs.core.next.call(null,seq__15705_15723__$1);
var G__15733 = null;
var G__15734 = 0;
var G__15735 = 0;
seq__15705_15711 = G__15732;
chunk__15706_15712 = G__15733;
count__15707_15713 = G__15734;
i__15708_15714 = G__15735;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15736){
var elem = cljs.core.first(arglist__15736);
var kvs = cljs.core.rest(arglist__15736);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15743_15749 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__15744_15750 = null;var count__15745_15751 = 0;var i__15746_15752 = 0;while(true){
if((i__15746_15752 < count__15745_15751))
{var vec__15747_15753 = cljs.core._nth.call(null,chunk__15744_15750,i__15746_15752);var k_15754 = cljs.core.nth.call(null,vec__15747_15753,0,null);var v_15755 = cljs.core.nth.call(null,vec__15747_15753,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_15754,[cljs.core.str(v_15755),cljs.core.str("px")].join(''));
{
var G__15756 = seq__15743_15749;
var G__15757 = chunk__15744_15750;
var G__15758 = count__15745_15751;
var G__15759 = (i__15746_15752 + 1);
seq__15743_15749 = G__15756;
chunk__15744_15750 = G__15757;
count__15745_15751 = G__15758;
i__15746_15752 = G__15759;
continue;
}
} else
{var temp__4092__auto___15760 = cljs.core.seq.call(null,seq__15743_15749);if(temp__4092__auto___15760)
{var seq__15743_15761__$1 = temp__4092__auto___15760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15743_15761__$1))
{var c__5497__auto___15762 = cljs.core.chunk_first.call(null,seq__15743_15761__$1);{
var G__15763 = cljs.core.chunk_rest.call(null,seq__15743_15761__$1);
var G__15764 = c__5497__auto___15762;
var G__15765 = cljs.core.count.call(null,c__5497__auto___15762);
var G__15766 = 0;
seq__15743_15749 = G__15763;
chunk__15744_15750 = G__15764;
count__15745_15751 = G__15765;
i__15746_15752 = G__15766;
continue;
}
} else
{var vec__15748_15767 = cljs.core.first.call(null,seq__15743_15761__$1);var k_15768 = cljs.core.nth.call(null,vec__15748_15767,0,null);var v_15769 = cljs.core.nth.call(null,vec__15748_15767,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_15768,[cljs.core.str(v_15769),cljs.core.str("px")].join(''));
{
var G__15770 = cljs.core.next.call(null,seq__15743_15761__$1);
var G__15771 = null;
var G__15772 = 0;
var G__15773 = 0;
seq__15743_15749 = G__15770;
chunk__15744_15750 = G__15771;
count__15745_15751 = G__15772;
i__15746_15752 = G__15773;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__15774){
var elem = cljs.core.first(arglist__15774);
var kvs = cljs.core.rest(arglist__15774);
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
{var G__15783 = dommy.template.__GT_node_like.call(null,elem);(G__15783[cljs.core.name.call(null,k)] = v);
return G__15783;
} else
{var G__15784 = dommy.template.__GT_node_like.call(null,elem);G__15784.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__15784;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__15791__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15785_15792 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__15786_15793 = null;var count__15787_15794 = 0;var i__15788_15795 = 0;while(true){
if((i__15788_15795 < count__15787_15794))
{var vec__15789_15796 = cljs.core._nth.call(null,chunk__15786_15793,i__15788_15795);var k_15797__$1 = cljs.core.nth.call(null,vec__15789_15796,0,null);var v_15798__$1 = cljs.core.nth.call(null,vec__15789_15796,1,null);set_attr_BANG_.call(null,elem__$1,k_15797__$1,v_15798__$1);
{
var G__15799 = seq__15785_15792;
var G__15800 = chunk__15786_15793;
var G__15801 = count__15787_15794;
var G__15802 = (i__15788_15795 + 1);
seq__15785_15792 = G__15799;
chunk__15786_15793 = G__15800;
count__15787_15794 = G__15801;
i__15788_15795 = G__15802;
continue;
}
} else
{var temp__4092__auto___15803 = cljs.core.seq.call(null,seq__15785_15792);if(temp__4092__auto___15803)
{var seq__15785_15804__$1 = temp__4092__auto___15803;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15785_15804__$1))
{var c__5497__auto___15805 = cljs.core.chunk_first.call(null,seq__15785_15804__$1);{
var G__15806 = cljs.core.chunk_rest.call(null,seq__15785_15804__$1);
var G__15807 = c__5497__auto___15805;
var G__15808 = cljs.core.count.call(null,c__5497__auto___15805);
var G__15809 = 0;
seq__15785_15792 = G__15806;
chunk__15786_15793 = G__15807;
count__15787_15794 = G__15808;
i__15788_15795 = G__15809;
continue;
}
} else
{var vec__15790_15810 = cljs.core.first.call(null,seq__15785_15804__$1);var k_15811__$1 = cljs.core.nth.call(null,vec__15790_15810,0,null);var v_15812__$1 = cljs.core.nth.call(null,vec__15790_15810,1,null);set_attr_BANG_.call(null,elem__$1,k_15811__$1,v_15812__$1);
{
var G__15813 = cljs.core.next.call(null,seq__15785_15804__$1);
var G__15814 = null;
var G__15815 = 0;
var G__15816 = 0;
seq__15785_15792 = G__15813;
chunk__15786_15793 = G__15814;
count__15787_15794 = G__15815;
i__15788_15795 = G__15816;
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
var G__15791 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15791__delegate.call(this,elem,k,v,kvs);};
G__15791.cljs$lang$maxFixedArity = 3;
G__15791.cljs$lang$applyTo = (function (arglist__15817){
var elem = cljs.core.first(arglist__15817);
arglist__15817 = cljs.core.next(arglist__15817);
var k = cljs.core.first(arglist__15817);
arglist__15817 = cljs.core.next(arglist__15817);
var v = cljs.core.first(arglist__15817);
var kvs = cljs.core.rest(arglist__15817);
return G__15791__delegate(elem,k,v,kvs);
});
G__15791.cljs$core$IFn$_invoke$arity$variadic = G__15791__delegate;
return G__15791;
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
var G__15826__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15822_15827 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__15823_15828 = null;var count__15824_15829 = 0;var i__15825_15830 = 0;while(true){
if((i__15825_15830 < count__15824_15829))
{var k_15831__$1 = cljs.core._nth.call(null,chunk__15823_15828,i__15825_15830);remove_attr_BANG_.call(null,elem__$1,k_15831__$1);
{
var G__15832 = seq__15822_15827;
var G__15833 = chunk__15823_15828;
var G__15834 = count__15824_15829;
var G__15835 = (i__15825_15830 + 1);
seq__15822_15827 = G__15832;
chunk__15823_15828 = G__15833;
count__15824_15829 = G__15834;
i__15825_15830 = G__15835;
continue;
}
} else
{var temp__4092__auto___15836 = cljs.core.seq.call(null,seq__15822_15827);if(temp__4092__auto___15836)
{var seq__15822_15837__$1 = temp__4092__auto___15836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15822_15837__$1))
{var c__5497__auto___15838 = cljs.core.chunk_first.call(null,seq__15822_15837__$1);{
var G__15839 = cljs.core.chunk_rest.call(null,seq__15822_15837__$1);
var G__15840 = c__5497__auto___15838;
var G__15841 = cljs.core.count.call(null,c__5497__auto___15838);
var G__15842 = 0;
seq__15822_15827 = G__15839;
chunk__15823_15828 = G__15840;
count__15824_15829 = G__15841;
i__15825_15830 = G__15842;
continue;
}
} else
{var k_15843__$1 = cljs.core.first.call(null,seq__15822_15837__$1);remove_attr_BANG_.call(null,elem__$1,k_15843__$1);
{
var G__15844 = cljs.core.next.call(null,seq__15822_15837__$1);
var G__15845 = null;
var G__15846 = 0;
var G__15847 = 0;
seq__15822_15827 = G__15844;
chunk__15823_15828 = G__15845;
count__15824_15829 = G__15846;
i__15825_15830 = G__15847;
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
var G__15826 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15826__delegate.call(this,elem,k,ks);};
G__15826.cljs$lang$maxFixedArity = 2;
G__15826.cljs$lang$applyTo = (function (arglist__15848){
var elem = cljs.core.first(arglist__15848);
arglist__15848 = cljs.core.next(arglist__15848);
var k = cljs.core.first(arglist__15848);
var ks = cljs.core.rest(arglist__15848);
return G__15826__delegate(elem,k,ks);
});
G__15826.cljs$core$IFn$_invoke$arity$variadic = G__15826__delegate;
return G__15826;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__15850 = dommy.template.__GT_node_like.call(null,elem);G__15850.style.display = ((show_QMARK_)?"":"none");
return G__15850;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__15852 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__15852,false);
return G__15852;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__15854 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__15854,true);
return G__15854;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__15856 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__15856["constructor"] = Object);
return G__15856;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
