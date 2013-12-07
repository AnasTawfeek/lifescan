// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__4762__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__4762__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__4762__auto__;
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
var G__16620 = (i + class$.length);
start_from = G__16620;
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
{var temp__4090__auto___16645 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16645))
{var class_list_16646 = temp__4090__auto___16645;var seq__16633_16647 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16634_16648 = null;var count__16635_16649 = 0;var i__16636_16650 = 0;while(true){
if((i__16636_16650 < count__16635_16649))
{var class_16651 = cljs.core._nth.call(null,chunk__16634_16648,i__16636_16650);class_list_16646.add(class_16651);
{
var G__16652 = seq__16633_16647;
var G__16653 = chunk__16634_16648;
var G__16654 = count__16635_16649;
var G__16655 = (i__16636_16650 + 1);
seq__16633_16647 = G__16652;
chunk__16634_16648 = G__16653;
count__16635_16649 = G__16654;
i__16636_16650 = G__16655;
continue;
}
} else
{var temp__4092__auto___16656 = cljs.core.seq.call(null,seq__16633_16647);if(temp__4092__auto___16656)
{var seq__16633_16657__$1 = temp__4092__auto___16656;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16633_16657__$1))
{var c__5498__auto___16658 = cljs.core.chunk_first.call(null,seq__16633_16657__$1);{
var G__16659 = cljs.core.chunk_rest.call(null,seq__16633_16657__$1);
var G__16660 = c__5498__auto___16658;
var G__16661 = cljs.core.count.call(null,c__5498__auto___16658);
var G__16662 = 0;
seq__16633_16647 = G__16659;
chunk__16634_16648 = G__16660;
count__16635_16649 = G__16661;
i__16636_16650 = G__16662;
continue;
}
} else
{var class_16663 = cljs.core.first.call(null,seq__16633_16657__$1);class_list_16646.add(class_16663);
{
var G__16664 = cljs.core.next.call(null,seq__16633_16657__$1);
var G__16665 = null;
var G__16666 = 0;
var G__16667 = 0;
seq__16633_16647 = G__16664;
chunk__16634_16648 = G__16665;
count__16635_16649 = G__16666;
i__16636_16650 = G__16667;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_16668 = elem__$1.className;var seq__16637_16669 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16638_16670 = null;var count__16639_16671 = 0;var i__16640_16672 = 0;while(true){
if((i__16640_16672 < count__16639_16671))
{var class_16673 = cljs.core._nth.call(null,chunk__16638_16670,i__16640_16672);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16668,class_16673)))
{} else
{elem__$1.className = (((class_name_16668 === ""))?class_16673:[cljs.core.str(class_name_16668),cljs.core.str(" "),cljs.core.str(class_16673)].join(''));
}
{
var G__16674 = seq__16637_16669;
var G__16675 = chunk__16638_16670;
var G__16676 = count__16639_16671;
var G__16677 = (i__16640_16672 + 1);
seq__16637_16669 = G__16674;
chunk__16638_16670 = G__16675;
count__16639_16671 = G__16676;
i__16640_16672 = G__16677;
continue;
}
} else
{var temp__4092__auto___16678 = cljs.core.seq.call(null,seq__16637_16669);if(temp__4092__auto___16678)
{var seq__16637_16679__$1 = temp__4092__auto___16678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16637_16679__$1))
{var c__5498__auto___16680 = cljs.core.chunk_first.call(null,seq__16637_16679__$1);{
var G__16681 = cljs.core.chunk_rest.call(null,seq__16637_16679__$1);
var G__16682 = c__5498__auto___16680;
var G__16683 = cljs.core.count.call(null,c__5498__auto___16680);
var G__16684 = 0;
seq__16637_16669 = G__16681;
chunk__16638_16670 = G__16682;
count__16639_16671 = G__16683;
i__16640_16672 = G__16684;
continue;
}
} else
{var class_16685 = cljs.core.first.call(null,seq__16637_16679__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16668,class_16685)))
{} else
{elem__$1.className = (((class_name_16668 === ""))?class_16685:[cljs.core.str(class_name_16668),cljs.core.str(" "),cljs.core.str(class_16685)].join(''));
}
{
var G__16686 = cljs.core.next.call(null,seq__16637_16679__$1);
var G__16687 = null;
var G__16688 = 0;
var G__16689 = 0;
seq__16637_16669 = G__16686;
chunk__16638_16670 = G__16687;
count__16639_16671 = G__16688;
i__16640_16672 = G__16689;
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
var G__16690__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16641_16691 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__16642_16692 = null;var count__16643_16693 = 0;var i__16644_16694 = 0;while(true){
if((i__16644_16694 < count__16643_16693))
{var c_16695 = cljs.core._nth.call(null,chunk__16642_16692,i__16644_16694);add_class_BANG_.call(null,elem__$1,c_16695);
{
var G__16696 = seq__16641_16691;
var G__16697 = chunk__16642_16692;
var G__16698 = count__16643_16693;
var G__16699 = (i__16644_16694 + 1);
seq__16641_16691 = G__16696;
chunk__16642_16692 = G__16697;
count__16643_16693 = G__16698;
i__16644_16694 = G__16699;
continue;
}
} else
{var temp__4092__auto___16700 = cljs.core.seq.call(null,seq__16641_16691);if(temp__4092__auto___16700)
{var seq__16641_16701__$1 = temp__4092__auto___16700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16641_16701__$1))
{var c__5498__auto___16702 = cljs.core.chunk_first.call(null,seq__16641_16701__$1);{
var G__16703 = cljs.core.chunk_rest.call(null,seq__16641_16701__$1);
var G__16704 = c__5498__auto___16702;
var G__16705 = cljs.core.count.call(null,c__5498__auto___16702);
var G__16706 = 0;
seq__16641_16691 = G__16703;
chunk__16642_16692 = G__16704;
count__16643_16693 = G__16705;
i__16644_16694 = G__16706;
continue;
}
} else
{var c_16707 = cljs.core.first.call(null,seq__16641_16701__$1);add_class_BANG_.call(null,elem__$1,c_16707);
{
var G__16708 = cljs.core.next.call(null,seq__16641_16701__$1);
var G__16709 = null;
var G__16710 = 0;
var G__16711 = 0;
seq__16641_16691 = G__16708;
chunk__16642_16692 = G__16709;
count__16643_16693 = G__16710;
i__16644_16694 = G__16711;
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
var G__16690 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16690__delegate.call(this,elem,classes,more_classes);};
G__16690.cljs$lang$maxFixedArity = 2;
G__16690.cljs$lang$applyTo = (function (arglist__16712){
var elem = cljs.core.first(arglist__16712);
arglist__16712 = cljs.core.next(arglist__16712);
var classes = cljs.core.first(arglist__16712);
var more_classes = cljs.core.rest(arglist__16712);
return G__16690__delegate(elem,classes,more_classes);
});
G__16690.cljs$core$IFn$_invoke$arity$variadic = G__16690__delegate;
return G__16690;
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
var G__16713 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__16713;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16722 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16722))
{var class_list_16723 = temp__4090__auto___16722;class_list_16723.remove(class$__$1);
} else
{var class_name_16724 = elem__$1.className;var new_class_name_16725 = dommy.attrs.remove_class_str.call(null,class_name_16724,class$__$1);if((class_name_16724 === new_class_name_16725))
{} else
{elem__$1.className = new_class_name_16725;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__16726__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16718 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__16719 = null;var count__16720 = 0;var i__16721 = 0;while(true){
if((i__16721 < count__16720))
{var c = cljs.core._nth.call(null,chunk__16719,i__16721);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16727 = seq__16718;
var G__16728 = chunk__16719;
var G__16729 = count__16720;
var G__16730 = (i__16721 + 1);
seq__16718 = G__16727;
chunk__16719 = G__16728;
count__16720 = G__16729;
i__16721 = G__16730;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16718);if(temp__4092__auto__)
{var seq__16718__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16718__$1))
{var c__5498__auto__ = cljs.core.chunk_first.call(null,seq__16718__$1);{
var G__16731 = cljs.core.chunk_rest.call(null,seq__16718__$1);
var G__16732 = c__5498__auto__;
var G__16733 = cljs.core.count.call(null,c__5498__auto__);
var G__16734 = 0;
seq__16718 = G__16731;
chunk__16719 = G__16732;
count__16720 = G__16733;
i__16721 = G__16734;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__16718__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16735 = cljs.core.next.call(null,seq__16718__$1);
var G__16736 = null;
var G__16737 = 0;
var G__16738 = 0;
seq__16718 = G__16735;
chunk__16719 = G__16736;
count__16720 = G__16737;
i__16721 = G__16738;
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
var G__16726 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16726__delegate.call(this,elem,class$,classes);};
G__16726.cljs$lang$maxFixedArity = 2;
G__16726.cljs$lang$applyTo = (function (arglist__16739){
var elem = cljs.core.first(arglist__16739);
arglist__16739 = cljs.core.next(arglist__16739);
var class$ = cljs.core.first(arglist__16739);
var classes = cljs.core.rest(arglist__16739);
return G__16726__delegate(elem,class$,classes);
});
G__16726.cljs$core$IFn$_invoke$arity$variadic = G__16726__delegate;
return G__16726;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___16740 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16740))
{var class_list_16741 = temp__4090__auto___16740;class_list_16741.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__16744){var vec__16745 = p__16744;var k = cljs.core.nth.call(null,vec__16745,0,null);var v = cljs.core.nth.call(null,vec__16745,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__16752_16758 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16753_16759 = null;var count__16754_16760 = 0;var i__16755_16761 = 0;while(true){
if((i__16755_16761 < count__16754_16760))
{var vec__16756_16762 = cljs.core._nth.call(null,chunk__16753_16759,i__16755_16761);var k_16763 = cljs.core.nth.call(null,vec__16756_16762,0,null);var v_16764 = cljs.core.nth.call(null,vec__16756_16762,1,null);(style[cljs.core.name.call(null,k_16763)] = v_16764);
{
var G__16765 = seq__16752_16758;
var G__16766 = chunk__16753_16759;
var G__16767 = count__16754_16760;
var G__16768 = (i__16755_16761 + 1);
seq__16752_16758 = G__16765;
chunk__16753_16759 = G__16766;
count__16754_16760 = G__16767;
i__16755_16761 = G__16768;
continue;
}
} else
{var temp__4092__auto___16769 = cljs.core.seq.call(null,seq__16752_16758);if(temp__4092__auto___16769)
{var seq__16752_16770__$1 = temp__4092__auto___16769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16752_16770__$1))
{var c__5498__auto___16771 = cljs.core.chunk_first.call(null,seq__16752_16770__$1);{
var G__16772 = cljs.core.chunk_rest.call(null,seq__16752_16770__$1);
var G__16773 = c__5498__auto___16771;
var G__16774 = cljs.core.count.call(null,c__5498__auto___16771);
var G__16775 = 0;
seq__16752_16758 = G__16772;
chunk__16753_16759 = G__16773;
count__16754_16760 = G__16774;
i__16755_16761 = G__16775;
continue;
}
} else
{var vec__16757_16776 = cljs.core.first.call(null,seq__16752_16770__$1);var k_16777 = cljs.core.nth.call(null,vec__16757_16776,0,null);var v_16778 = cljs.core.nth.call(null,vec__16757_16776,1,null);(style[cljs.core.name.call(null,k_16777)] = v_16778);
{
var G__16779 = cljs.core.next.call(null,seq__16752_16770__$1);
var G__16780 = null;
var G__16781 = 0;
var G__16782 = 0;
seq__16752_16758 = G__16779;
chunk__16753_16759 = G__16780;
count__16754_16760 = G__16781;
i__16755_16761 = G__16782;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16783){
var elem = cljs.core.first(arglist__16783);
var kvs = cljs.core.rest(arglist__16783);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16790_16796 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16791_16797 = null;var count__16792_16798 = 0;var i__16793_16799 = 0;while(true){
if((i__16793_16799 < count__16792_16798))
{var vec__16794_16800 = cljs.core._nth.call(null,chunk__16791_16797,i__16793_16799);var k_16801 = cljs.core.nth.call(null,vec__16794_16800,0,null);var v_16802 = cljs.core.nth.call(null,vec__16794_16800,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16801,[cljs.core.str(v_16802),cljs.core.str("px")].join(''));
{
var G__16803 = seq__16790_16796;
var G__16804 = chunk__16791_16797;
var G__16805 = count__16792_16798;
var G__16806 = (i__16793_16799 + 1);
seq__16790_16796 = G__16803;
chunk__16791_16797 = G__16804;
count__16792_16798 = G__16805;
i__16793_16799 = G__16806;
continue;
}
} else
{var temp__4092__auto___16807 = cljs.core.seq.call(null,seq__16790_16796);if(temp__4092__auto___16807)
{var seq__16790_16808__$1 = temp__4092__auto___16807;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16790_16808__$1))
{var c__5498__auto___16809 = cljs.core.chunk_first.call(null,seq__16790_16808__$1);{
var G__16810 = cljs.core.chunk_rest.call(null,seq__16790_16808__$1);
var G__16811 = c__5498__auto___16809;
var G__16812 = cljs.core.count.call(null,c__5498__auto___16809);
var G__16813 = 0;
seq__16790_16796 = G__16810;
chunk__16791_16797 = G__16811;
count__16792_16798 = G__16812;
i__16793_16799 = G__16813;
continue;
}
} else
{var vec__16795_16814 = cljs.core.first.call(null,seq__16790_16808__$1);var k_16815 = cljs.core.nth.call(null,vec__16795_16814,0,null);var v_16816 = cljs.core.nth.call(null,vec__16795_16814,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16815,[cljs.core.str(v_16816),cljs.core.str("px")].join(''));
{
var G__16817 = cljs.core.next.call(null,seq__16790_16808__$1);
var G__16818 = null;
var G__16819 = 0;
var G__16820 = 0;
seq__16790_16796 = G__16817;
chunk__16791_16797 = G__16818;
count__16792_16798 = G__16819;
i__16793_16799 = G__16820;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__16821){
var elem = cljs.core.first(arglist__16821);
var kvs = cljs.core.rest(arglist__16821);
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
{var G__16830 = dommy.template.__GT_node_like.call(null,elem);(G__16830[cljs.core.name.call(null,k)] = v);
return G__16830;
} else
{var G__16831 = dommy.template.__GT_node_like.call(null,elem);G__16831.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__16831;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__16838__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16832_16839 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__16833_16840 = null;var count__16834_16841 = 0;var i__16835_16842 = 0;while(true){
if((i__16835_16842 < count__16834_16841))
{var vec__16836_16843 = cljs.core._nth.call(null,chunk__16833_16840,i__16835_16842);var k_16844__$1 = cljs.core.nth.call(null,vec__16836_16843,0,null);var v_16845__$1 = cljs.core.nth.call(null,vec__16836_16843,1,null);set_attr_BANG_.call(null,elem__$1,k_16844__$1,v_16845__$1);
{
var G__16846 = seq__16832_16839;
var G__16847 = chunk__16833_16840;
var G__16848 = count__16834_16841;
var G__16849 = (i__16835_16842 + 1);
seq__16832_16839 = G__16846;
chunk__16833_16840 = G__16847;
count__16834_16841 = G__16848;
i__16835_16842 = G__16849;
continue;
}
} else
{var temp__4092__auto___16850 = cljs.core.seq.call(null,seq__16832_16839);if(temp__4092__auto___16850)
{var seq__16832_16851__$1 = temp__4092__auto___16850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16832_16851__$1))
{var c__5498__auto___16852 = cljs.core.chunk_first.call(null,seq__16832_16851__$1);{
var G__16853 = cljs.core.chunk_rest.call(null,seq__16832_16851__$1);
var G__16854 = c__5498__auto___16852;
var G__16855 = cljs.core.count.call(null,c__5498__auto___16852);
var G__16856 = 0;
seq__16832_16839 = G__16853;
chunk__16833_16840 = G__16854;
count__16834_16841 = G__16855;
i__16835_16842 = G__16856;
continue;
}
} else
{var vec__16837_16857 = cljs.core.first.call(null,seq__16832_16851__$1);var k_16858__$1 = cljs.core.nth.call(null,vec__16837_16857,0,null);var v_16859__$1 = cljs.core.nth.call(null,vec__16837_16857,1,null);set_attr_BANG_.call(null,elem__$1,k_16858__$1,v_16859__$1);
{
var G__16860 = cljs.core.next.call(null,seq__16832_16851__$1);
var G__16861 = null;
var G__16862 = 0;
var G__16863 = 0;
seq__16832_16839 = G__16860;
chunk__16833_16840 = G__16861;
count__16834_16841 = G__16862;
i__16835_16842 = G__16863;
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
var G__16838 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__16838__delegate.call(this,elem,k,v,kvs);};
G__16838.cljs$lang$maxFixedArity = 3;
G__16838.cljs$lang$applyTo = (function (arglist__16864){
var elem = cljs.core.first(arglist__16864);
arglist__16864 = cljs.core.next(arglist__16864);
var k = cljs.core.first(arglist__16864);
arglist__16864 = cljs.core.next(arglist__16864);
var v = cljs.core.first(arglist__16864);
var kvs = cljs.core.rest(arglist__16864);
return G__16838__delegate(elem,k,v,kvs);
});
G__16838.cljs$core$IFn$_invoke$arity$variadic = G__16838__delegate;
return G__16838;
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
var G__16873__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16869_16874 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__16870_16875 = null;var count__16871_16876 = 0;var i__16872_16877 = 0;while(true){
if((i__16872_16877 < count__16871_16876))
{var k_16878__$1 = cljs.core._nth.call(null,chunk__16870_16875,i__16872_16877);remove_attr_BANG_.call(null,elem__$1,k_16878__$1);
{
var G__16879 = seq__16869_16874;
var G__16880 = chunk__16870_16875;
var G__16881 = count__16871_16876;
var G__16882 = (i__16872_16877 + 1);
seq__16869_16874 = G__16879;
chunk__16870_16875 = G__16880;
count__16871_16876 = G__16881;
i__16872_16877 = G__16882;
continue;
}
} else
{var temp__4092__auto___16883 = cljs.core.seq.call(null,seq__16869_16874);if(temp__4092__auto___16883)
{var seq__16869_16884__$1 = temp__4092__auto___16883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16869_16884__$1))
{var c__5498__auto___16885 = cljs.core.chunk_first.call(null,seq__16869_16884__$1);{
var G__16886 = cljs.core.chunk_rest.call(null,seq__16869_16884__$1);
var G__16887 = c__5498__auto___16885;
var G__16888 = cljs.core.count.call(null,c__5498__auto___16885);
var G__16889 = 0;
seq__16869_16874 = G__16886;
chunk__16870_16875 = G__16887;
count__16871_16876 = G__16888;
i__16872_16877 = G__16889;
continue;
}
} else
{var k_16890__$1 = cljs.core.first.call(null,seq__16869_16884__$1);remove_attr_BANG_.call(null,elem__$1,k_16890__$1);
{
var G__16891 = cljs.core.next.call(null,seq__16869_16884__$1);
var G__16892 = null;
var G__16893 = 0;
var G__16894 = 0;
seq__16869_16874 = G__16891;
chunk__16870_16875 = G__16892;
count__16871_16876 = G__16893;
i__16872_16877 = G__16894;
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
var G__16873 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16873__delegate.call(this,elem,k,ks);};
G__16873.cljs$lang$maxFixedArity = 2;
G__16873.cljs$lang$applyTo = (function (arglist__16895){
var elem = cljs.core.first(arglist__16895);
arglist__16895 = cljs.core.next(arglist__16895);
var k = cljs.core.first(arglist__16895);
var ks = cljs.core.rest(arglist__16895);
return G__16873__delegate(elem,k,ks);
});
G__16873.cljs$core$IFn$_invoke$arity$variadic = G__16873__delegate;
return G__16873;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__16897 = dommy.template.__GT_node_like.call(null,elem);G__16897.style.display = ((show_QMARK_)?"":"none");
return G__16897;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__16899 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__16899,false);
return G__16899;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__16901 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__16901,true);
return G__16901;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__16903 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__16903["constructor"] = Object);
return G__16903;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
