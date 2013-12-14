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
var G__427684 = (i + class$.length);
start_from = G__427684;
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
{var temp__4090__auto___427709 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___427709))
{var class_list_427710 = temp__4090__auto___427709;var seq__427697_427711 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__427698_427712 = null;var count__427699_427713 = 0;var i__427700_427714 = 0;while(true){
if((i__427700_427714 < count__427699_427713))
{var class_427715 = cljs.core._nth.call(null,chunk__427698_427712,i__427700_427714);class_list_427710.add(class_427715);
{
var G__427716 = seq__427697_427711;
var G__427717 = chunk__427698_427712;
var G__427718 = count__427699_427713;
var G__427719 = (i__427700_427714 + 1);
seq__427697_427711 = G__427716;
chunk__427698_427712 = G__427717;
count__427699_427713 = G__427718;
i__427700_427714 = G__427719;
continue;
}
} else
{var temp__4092__auto___427720 = cljs.core.seq.call(null,seq__427697_427711);if(temp__4092__auto___427720)
{var seq__427697_427721__$1 = temp__4092__auto___427720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427697_427721__$1))
{var c__4017__auto___427722 = cljs.core.chunk_first.call(null,seq__427697_427721__$1);{
var G__427723 = cljs.core.chunk_rest.call(null,seq__427697_427721__$1);
var G__427724 = c__4017__auto___427722;
var G__427725 = cljs.core.count.call(null,c__4017__auto___427722);
var G__427726 = 0;
seq__427697_427711 = G__427723;
chunk__427698_427712 = G__427724;
count__427699_427713 = G__427725;
i__427700_427714 = G__427726;
continue;
}
} else
{var class_427727 = cljs.core.first.call(null,seq__427697_427721__$1);class_list_427710.add(class_427727);
{
var G__427728 = cljs.core.next.call(null,seq__427697_427721__$1);
var G__427729 = null;
var G__427730 = 0;
var G__427731 = 0;
seq__427697_427711 = G__427728;
chunk__427698_427712 = G__427729;
count__427699_427713 = G__427730;
i__427700_427714 = G__427731;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_427732 = elem__$1.className;var seq__427701_427733 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__427702_427734 = null;var count__427703_427735 = 0;var i__427704_427736 = 0;while(true){
if((i__427704_427736 < count__427703_427735))
{var class_427737 = cljs.core._nth.call(null,chunk__427702_427734,i__427704_427736);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_427732,class_427737)))
{} else
{elem__$1.className = (((class_name_427732 === ""))?class_427737:[cljs.core.str(class_name_427732),cljs.core.str(" "),cljs.core.str(class_427737)].join(''));
}
{
var G__427738 = seq__427701_427733;
var G__427739 = chunk__427702_427734;
var G__427740 = count__427703_427735;
var G__427741 = (i__427704_427736 + 1);
seq__427701_427733 = G__427738;
chunk__427702_427734 = G__427739;
count__427703_427735 = G__427740;
i__427704_427736 = G__427741;
continue;
}
} else
{var temp__4092__auto___427742 = cljs.core.seq.call(null,seq__427701_427733);if(temp__4092__auto___427742)
{var seq__427701_427743__$1 = temp__4092__auto___427742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427701_427743__$1))
{var c__4017__auto___427744 = cljs.core.chunk_first.call(null,seq__427701_427743__$1);{
var G__427745 = cljs.core.chunk_rest.call(null,seq__427701_427743__$1);
var G__427746 = c__4017__auto___427744;
var G__427747 = cljs.core.count.call(null,c__4017__auto___427744);
var G__427748 = 0;
seq__427701_427733 = G__427745;
chunk__427702_427734 = G__427746;
count__427703_427735 = G__427747;
i__427704_427736 = G__427748;
continue;
}
} else
{var class_427749 = cljs.core.first.call(null,seq__427701_427743__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_427732,class_427749)))
{} else
{elem__$1.className = (((class_name_427732 === ""))?class_427749:[cljs.core.str(class_name_427732),cljs.core.str(" "),cljs.core.str(class_427749)].join(''));
}
{
var G__427750 = cljs.core.next.call(null,seq__427701_427743__$1);
var G__427751 = null;
var G__427752 = 0;
var G__427753 = 0;
seq__427701_427733 = G__427750;
chunk__427702_427734 = G__427751;
count__427703_427735 = G__427752;
i__427704_427736 = G__427753;
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
var G__427754__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__427705_427755 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__427706_427756 = null;var count__427707_427757 = 0;var i__427708_427758 = 0;while(true){
if((i__427708_427758 < count__427707_427757))
{var c_427759 = cljs.core._nth.call(null,chunk__427706_427756,i__427708_427758);add_class_BANG_.call(null,elem__$1,c_427759);
{
var G__427760 = seq__427705_427755;
var G__427761 = chunk__427706_427756;
var G__427762 = count__427707_427757;
var G__427763 = (i__427708_427758 + 1);
seq__427705_427755 = G__427760;
chunk__427706_427756 = G__427761;
count__427707_427757 = G__427762;
i__427708_427758 = G__427763;
continue;
}
} else
{var temp__4092__auto___427764 = cljs.core.seq.call(null,seq__427705_427755);if(temp__4092__auto___427764)
{var seq__427705_427765__$1 = temp__4092__auto___427764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427705_427765__$1))
{var c__4017__auto___427766 = cljs.core.chunk_first.call(null,seq__427705_427765__$1);{
var G__427767 = cljs.core.chunk_rest.call(null,seq__427705_427765__$1);
var G__427768 = c__4017__auto___427766;
var G__427769 = cljs.core.count.call(null,c__4017__auto___427766);
var G__427770 = 0;
seq__427705_427755 = G__427767;
chunk__427706_427756 = G__427768;
count__427707_427757 = G__427769;
i__427708_427758 = G__427770;
continue;
}
} else
{var c_427771 = cljs.core.first.call(null,seq__427705_427765__$1);add_class_BANG_.call(null,elem__$1,c_427771);
{
var G__427772 = cljs.core.next.call(null,seq__427705_427765__$1);
var G__427773 = null;
var G__427774 = 0;
var G__427775 = 0;
seq__427705_427755 = G__427772;
chunk__427706_427756 = G__427773;
count__427707_427757 = G__427774;
i__427708_427758 = G__427775;
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
var G__427754 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__427754__delegate.call(this,elem,classes,more_classes);};
G__427754.cljs$lang$maxFixedArity = 2;
G__427754.cljs$lang$applyTo = (function (arglist__427776){
var elem = cljs.core.first(arglist__427776);
arglist__427776 = cljs.core.next(arglist__427776);
var classes = cljs.core.first(arglist__427776);
var more_classes = cljs.core.rest(arglist__427776);
return G__427754__delegate(elem,classes,more_classes);
});
G__427754.cljs$core$IFn$_invoke$arity$variadic = G__427754__delegate;
return G__427754;
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
var G__427777 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__427777;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___427786 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___427786))
{var class_list_427787 = temp__4090__auto___427786;class_list_427787.remove(class$__$1);
} else
{var class_name_427788 = elem__$1.className;var new_class_name_427789 = dommy.attrs.remove_class_str.call(null,class_name_427788,class$__$1);if((class_name_427788 === new_class_name_427789))
{} else
{elem__$1.className = new_class_name_427789;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__427790__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__427782 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__427783 = null;var count__427784 = 0;var i__427785 = 0;while(true){
if((i__427785 < count__427784))
{var c = cljs.core._nth.call(null,chunk__427783,i__427785);remove_class_BANG_.call(null,elem__$1,c);
{
var G__427791 = seq__427782;
var G__427792 = chunk__427783;
var G__427793 = count__427784;
var G__427794 = (i__427785 + 1);
seq__427782 = G__427791;
chunk__427783 = G__427792;
count__427784 = G__427793;
i__427785 = G__427794;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__427782);if(temp__4092__auto__)
{var seq__427782__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427782__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__427782__$1);{
var G__427795 = cljs.core.chunk_rest.call(null,seq__427782__$1);
var G__427796 = c__4017__auto__;
var G__427797 = cljs.core.count.call(null,c__4017__auto__);
var G__427798 = 0;
seq__427782 = G__427795;
chunk__427783 = G__427796;
count__427784 = G__427797;
i__427785 = G__427798;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__427782__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__427799 = cljs.core.next.call(null,seq__427782__$1);
var G__427800 = null;
var G__427801 = 0;
var G__427802 = 0;
seq__427782 = G__427799;
chunk__427783 = G__427800;
count__427784 = G__427801;
i__427785 = G__427802;
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
var G__427790 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__427790__delegate.call(this,elem,class$,classes);};
G__427790.cljs$lang$maxFixedArity = 2;
G__427790.cljs$lang$applyTo = (function (arglist__427803){
var elem = cljs.core.first(arglist__427803);
arglist__427803 = cljs.core.next(arglist__427803);
var class$ = cljs.core.first(arglist__427803);
var classes = cljs.core.rest(arglist__427803);
return G__427790__delegate(elem,class$,classes);
});
G__427790.cljs$core$IFn$_invoke$arity$variadic = G__427790__delegate;
return G__427790;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___427804 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___427804))
{var class_list_427805 = temp__4090__auto___427804;class_list_427805.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__427808){var vec__427809 = p__427808;var k = cljs.core.nth.call(null,vec__427809,0,null);var v = cljs.core.nth.call(null,vec__427809,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__427816_427822 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__427817_427823 = null;var count__427818_427824 = 0;var i__427819_427825 = 0;while(true){
if((i__427819_427825 < count__427818_427824))
{var vec__427820_427826 = cljs.core._nth.call(null,chunk__427817_427823,i__427819_427825);var k_427827 = cljs.core.nth.call(null,vec__427820_427826,0,null);var v_427828 = cljs.core.nth.call(null,vec__427820_427826,1,null);(style[cljs.core.name.call(null,k_427827)] = v_427828);
{
var G__427829 = seq__427816_427822;
var G__427830 = chunk__427817_427823;
var G__427831 = count__427818_427824;
var G__427832 = (i__427819_427825 + 1);
seq__427816_427822 = G__427829;
chunk__427817_427823 = G__427830;
count__427818_427824 = G__427831;
i__427819_427825 = G__427832;
continue;
}
} else
{var temp__4092__auto___427833 = cljs.core.seq.call(null,seq__427816_427822);if(temp__4092__auto___427833)
{var seq__427816_427834__$1 = temp__4092__auto___427833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427816_427834__$1))
{var c__4017__auto___427835 = cljs.core.chunk_first.call(null,seq__427816_427834__$1);{
var G__427836 = cljs.core.chunk_rest.call(null,seq__427816_427834__$1);
var G__427837 = c__4017__auto___427835;
var G__427838 = cljs.core.count.call(null,c__4017__auto___427835);
var G__427839 = 0;
seq__427816_427822 = G__427836;
chunk__427817_427823 = G__427837;
count__427818_427824 = G__427838;
i__427819_427825 = G__427839;
continue;
}
} else
{var vec__427821_427840 = cljs.core.first.call(null,seq__427816_427834__$1);var k_427841 = cljs.core.nth.call(null,vec__427821_427840,0,null);var v_427842 = cljs.core.nth.call(null,vec__427821_427840,1,null);(style[cljs.core.name.call(null,k_427841)] = v_427842);
{
var G__427843 = cljs.core.next.call(null,seq__427816_427834__$1);
var G__427844 = null;
var G__427845 = 0;
var G__427846 = 0;
seq__427816_427822 = G__427843;
chunk__427817_427823 = G__427844;
count__427818_427824 = G__427845;
i__427819_427825 = G__427846;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__427847){
var elem = cljs.core.first(arglist__427847);
var kvs = cljs.core.rest(arglist__427847);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__427854_427860 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__427855_427861 = null;var count__427856_427862 = 0;var i__427857_427863 = 0;while(true){
if((i__427857_427863 < count__427856_427862))
{var vec__427858_427864 = cljs.core._nth.call(null,chunk__427855_427861,i__427857_427863);var k_427865 = cljs.core.nth.call(null,vec__427858_427864,0,null);var v_427866 = cljs.core.nth.call(null,vec__427858_427864,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_427865,[cljs.core.str(v_427866),cljs.core.str("px")].join(''));
{
var G__427867 = seq__427854_427860;
var G__427868 = chunk__427855_427861;
var G__427869 = count__427856_427862;
var G__427870 = (i__427857_427863 + 1);
seq__427854_427860 = G__427867;
chunk__427855_427861 = G__427868;
count__427856_427862 = G__427869;
i__427857_427863 = G__427870;
continue;
}
} else
{var temp__4092__auto___427871 = cljs.core.seq.call(null,seq__427854_427860);if(temp__4092__auto___427871)
{var seq__427854_427872__$1 = temp__4092__auto___427871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427854_427872__$1))
{var c__4017__auto___427873 = cljs.core.chunk_first.call(null,seq__427854_427872__$1);{
var G__427874 = cljs.core.chunk_rest.call(null,seq__427854_427872__$1);
var G__427875 = c__4017__auto___427873;
var G__427876 = cljs.core.count.call(null,c__4017__auto___427873);
var G__427877 = 0;
seq__427854_427860 = G__427874;
chunk__427855_427861 = G__427875;
count__427856_427862 = G__427876;
i__427857_427863 = G__427877;
continue;
}
} else
{var vec__427859_427878 = cljs.core.first.call(null,seq__427854_427872__$1);var k_427879 = cljs.core.nth.call(null,vec__427859_427878,0,null);var v_427880 = cljs.core.nth.call(null,vec__427859_427878,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_427879,[cljs.core.str(v_427880),cljs.core.str("px")].join(''));
{
var G__427881 = cljs.core.next.call(null,seq__427854_427872__$1);
var G__427882 = null;
var G__427883 = 0;
var G__427884 = 0;
seq__427854_427860 = G__427881;
chunk__427855_427861 = G__427882;
count__427856_427862 = G__427883;
i__427857_427863 = G__427884;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__427885){
var elem = cljs.core.first(arglist__427885);
var kvs = cljs.core.rest(arglist__427885);
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
{var G__427894 = dommy.template.__GT_node_like.call(null,elem);(G__427894[cljs.core.name.call(null,k)] = v);
return G__427894;
} else
{var G__427895 = dommy.template.__GT_node_like.call(null,elem);G__427895.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__427895;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__427902__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__427896_427903 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__427897_427904 = null;var count__427898_427905 = 0;var i__427899_427906 = 0;while(true){
if((i__427899_427906 < count__427898_427905))
{var vec__427900_427907 = cljs.core._nth.call(null,chunk__427897_427904,i__427899_427906);var k_427908__$1 = cljs.core.nth.call(null,vec__427900_427907,0,null);var v_427909__$1 = cljs.core.nth.call(null,vec__427900_427907,1,null);set_attr_BANG_.call(null,elem__$1,k_427908__$1,v_427909__$1);
{
var G__427910 = seq__427896_427903;
var G__427911 = chunk__427897_427904;
var G__427912 = count__427898_427905;
var G__427913 = (i__427899_427906 + 1);
seq__427896_427903 = G__427910;
chunk__427897_427904 = G__427911;
count__427898_427905 = G__427912;
i__427899_427906 = G__427913;
continue;
}
} else
{var temp__4092__auto___427914 = cljs.core.seq.call(null,seq__427896_427903);if(temp__4092__auto___427914)
{var seq__427896_427915__$1 = temp__4092__auto___427914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427896_427915__$1))
{var c__4017__auto___427916 = cljs.core.chunk_first.call(null,seq__427896_427915__$1);{
var G__427917 = cljs.core.chunk_rest.call(null,seq__427896_427915__$1);
var G__427918 = c__4017__auto___427916;
var G__427919 = cljs.core.count.call(null,c__4017__auto___427916);
var G__427920 = 0;
seq__427896_427903 = G__427917;
chunk__427897_427904 = G__427918;
count__427898_427905 = G__427919;
i__427899_427906 = G__427920;
continue;
}
} else
{var vec__427901_427921 = cljs.core.first.call(null,seq__427896_427915__$1);var k_427922__$1 = cljs.core.nth.call(null,vec__427901_427921,0,null);var v_427923__$1 = cljs.core.nth.call(null,vec__427901_427921,1,null);set_attr_BANG_.call(null,elem__$1,k_427922__$1,v_427923__$1);
{
var G__427924 = cljs.core.next.call(null,seq__427896_427915__$1);
var G__427925 = null;
var G__427926 = 0;
var G__427927 = 0;
seq__427896_427903 = G__427924;
chunk__427897_427904 = G__427925;
count__427898_427905 = G__427926;
i__427899_427906 = G__427927;
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
var G__427902 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__427902__delegate.call(this,elem,k,v,kvs);};
G__427902.cljs$lang$maxFixedArity = 3;
G__427902.cljs$lang$applyTo = (function (arglist__427928){
var elem = cljs.core.first(arglist__427928);
arglist__427928 = cljs.core.next(arglist__427928);
var k = cljs.core.first(arglist__427928);
arglist__427928 = cljs.core.next(arglist__427928);
var v = cljs.core.first(arglist__427928);
var kvs = cljs.core.rest(arglist__427928);
return G__427902__delegate(elem,k,v,kvs);
});
G__427902.cljs$core$IFn$_invoke$arity$variadic = G__427902__delegate;
return G__427902;
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
var G__427937__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__427933_427938 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__427934_427939 = null;var count__427935_427940 = 0;var i__427936_427941 = 0;while(true){
if((i__427936_427941 < count__427935_427940))
{var k_427942__$1 = cljs.core._nth.call(null,chunk__427934_427939,i__427936_427941);remove_attr_BANG_.call(null,elem__$1,k_427942__$1);
{
var G__427943 = seq__427933_427938;
var G__427944 = chunk__427934_427939;
var G__427945 = count__427935_427940;
var G__427946 = (i__427936_427941 + 1);
seq__427933_427938 = G__427943;
chunk__427934_427939 = G__427944;
count__427935_427940 = G__427945;
i__427936_427941 = G__427946;
continue;
}
} else
{var temp__4092__auto___427947 = cljs.core.seq.call(null,seq__427933_427938);if(temp__4092__auto___427947)
{var seq__427933_427948__$1 = temp__4092__auto___427947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427933_427948__$1))
{var c__4017__auto___427949 = cljs.core.chunk_first.call(null,seq__427933_427948__$1);{
var G__427950 = cljs.core.chunk_rest.call(null,seq__427933_427948__$1);
var G__427951 = c__4017__auto___427949;
var G__427952 = cljs.core.count.call(null,c__4017__auto___427949);
var G__427953 = 0;
seq__427933_427938 = G__427950;
chunk__427934_427939 = G__427951;
count__427935_427940 = G__427952;
i__427936_427941 = G__427953;
continue;
}
} else
{var k_427954__$1 = cljs.core.first.call(null,seq__427933_427948__$1);remove_attr_BANG_.call(null,elem__$1,k_427954__$1);
{
var G__427955 = cljs.core.next.call(null,seq__427933_427948__$1);
var G__427956 = null;
var G__427957 = 0;
var G__427958 = 0;
seq__427933_427938 = G__427955;
chunk__427934_427939 = G__427956;
count__427935_427940 = G__427957;
i__427936_427941 = G__427958;
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
var G__427937 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__427937__delegate.call(this,elem,k,ks);};
G__427937.cljs$lang$maxFixedArity = 2;
G__427937.cljs$lang$applyTo = (function (arglist__427959){
var elem = cljs.core.first(arglist__427959);
arglist__427959 = cljs.core.next(arglist__427959);
var k = cljs.core.first(arglist__427959);
var ks = cljs.core.rest(arglist__427959);
return G__427937__delegate(elem,k,ks);
});
G__427937.cljs$core$IFn$_invoke$arity$variadic = G__427937__delegate;
return G__427937;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__427961 = dommy.template.__GT_node_like.call(null,elem);G__427961.style.display = ((show_QMARK_)?"":"none");
return G__427961;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__427963 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__427963,false);
return G__427963;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__427965 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__427965,true);
return G__427965;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__427967 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__427967["constructor"] = Object);
return G__427967;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
