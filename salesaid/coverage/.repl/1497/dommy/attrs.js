// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__4753__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__4753__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__4753__auto__;
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
var G__10723 = (i + class$.length);
start_from = G__10723;
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
{var temp__4090__auto___10748 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___10748))
{var class_list_10749 = temp__4090__auto___10748;var seq__10736_10750 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__10737_10751 = null;var count__10738_10752 = 0;var i__10739_10753 = 0;while(true){
if((i__10739_10753 < count__10738_10752))
{var class_10754 = cljs.core._nth.call(null,chunk__10737_10751,i__10739_10753);class_list_10749.add(class_10754);
{
var G__10755 = seq__10736_10750;
var G__10756 = chunk__10737_10751;
var G__10757 = count__10738_10752;
var G__10758 = (i__10739_10753 + 1);
seq__10736_10750 = G__10755;
chunk__10737_10751 = G__10756;
count__10738_10752 = G__10757;
i__10739_10753 = G__10758;
continue;
}
} else
{var temp__4092__auto___10759 = cljs.core.seq.call(null,seq__10736_10750);if(temp__4092__auto___10759)
{var seq__10736_10760__$1 = temp__4092__auto___10759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10736_10760__$1))
{var c__5489__auto___10761 = cljs.core.chunk_first.call(null,seq__10736_10760__$1);{
var G__10762 = cljs.core.chunk_rest.call(null,seq__10736_10760__$1);
var G__10763 = c__5489__auto___10761;
var G__10764 = cljs.core.count.call(null,c__5489__auto___10761);
var G__10765 = 0;
seq__10736_10750 = G__10762;
chunk__10737_10751 = G__10763;
count__10738_10752 = G__10764;
i__10739_10753 = G__10765;
continue;
}
} else
{var class_10766 = cljs.core.first.call(null,seq__10736_10760__$1);class_list_10749.add(class_10766);
{
var G__10767 = cljs.core.next.call(null,seq__10736_10760__$1);
var G__10768 = null;
var G__10769 = 0;
var G__10770 = 0;
seq__10736_10750 = G__10767;
chunk__10737_10751 = G__10768;
count__10738_10752 = G__10769;
i__10739_10753 = G__10770;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_10771 = elem__$1.className;var seq__10740_10772 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__10741_10773 = null;var count__10742_10774 = 0;var i__10743_10775 = 0;while(true){
if((i__10743_10775 < count__10742_10774))
{var class_10776 = cljs.core._nth.call(null,chunk__10741_10773,i__10743_10775);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_10771,class_10776)))
{} else
{elem__$1.className = (((class_name_10771 === ""))?class_10776:[cljs.core.str(class_name_10771),cljs.core.str(" "),cljs.core.str(class_10776)].join(''));
}
{
var G__10777 = seq__10740_10772;
var G__10778 = chunk__10741_10773;
var G__10779 = count__10742_10774;
var G__10780 = (i__10743_10775 + 1);
seq__10740_10772 = G__10777;
chunk__10741_10773 = G__10778;
count__10742_10774 = G__10779;
i__10743_10775 = G__10780;
continue;
}
} else
{var temp__4092__auto___10781 = cljs.core.seq.call(null,seq__10740_10772);if(temp__4092__auto___10781)
{var seq__10740_10782__$1 = temp__4092__auto___10781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10740_10782__$1))
{var c__5489__auto___10783 = cljs.core.chunk_first.call(null,seq__10740_10782__$1);{
var G__10784 = cljs.core.chunk_rest.call(null,seq__10740_10782__$1);
var G__10785 = c__5489__auto___10783;
var G__10786 = cljs.core.count.call(null,c__5489__auto___10783);
var G__10787 = 0;
seq__10740_10772 = G__10784;
chunk__10741_10773 = G__10785;
count__10742_10774 = G__10786;
i__10743_10775 = G__10787;
continue;
}
} else
{var class_10788 = cljs.core.first.call(null,seq__10740_10782__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_10771,class_10788)))
{} else
{elem__$1.className = (((class_name_10771 === ""))?class_10788:[cljs.core.str(class_name_10771),cljs.core.str(" "),cljs.core.str(class_10788)].join(''));
}
{
var G__10789 = cljs.core.next.call(null,seq__10740_10782__$1);
var G__10790 = null;
var G__10791 = 0;
var G__10792 = 0;
seq__10740_10772 = G__10789;
chunk__10741_10773 = G__10790;
count__10742_10774 = G__10791;
i__10743_10775 = G__10792;
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
var G__10793__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__10744_10794 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__10745_10795 = null;var count__10746_10796 = 0;var i__10747_10797 = 0;while(true){
if((i__10747_10797 < count__10746_10796))
{var c_10798 = cljs.core._nth.call(null,chunk__10745_10795,i__10747_10797);add_class_BANG_.call(null,elem__$1,c_10798);
{
var G__10799 = seq__10744_10794;
var G__10800 = chunk__10745_10795;
var G__10801 = count__10746_10796;
var G__10802 = (i__10747_10797 + 1);
seq__10744_10794 = G__10799;
chunk__10745_10795 = G__10800;
count__10746_10796 = G__10801;
i__10747_10797 = G__10802;
continue;
}
} else
{var temp__4092__auto___10803 = cljs.core.seq.call(null,seq__10744_10794);if(temp__4092__auto___10803)
{var seq__10744_10804__$1 = temp__4092__auto___10803;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10744_10804__$1))
{var c__5489__auto___10805 = cljs.core.chunk_first.call(null,seq__10744_10804__$1);{
var G__10806 = cljs.core.chunk_rest.call(null,seq__10744_10804__$1);
var G__10807 = c__5489__auto___10805;
var G__10808 = cljs.core.count.call(null,c__5489__auto___10805);
var G__10809 = 0;
seq__10744_10794 = G__10806;
chunk__10745_10795 = G__10807;
count__10746_10796 = G__10808;
i__10747_10797 = G__10809;
continue;
}
} else
{var c_10810 = cljs.core.first.call(null,seq__10744_10804__$1);add_class_BANG_.call(null,elem__$1,c_10810);
{
var G__10811 = cljs.core.next.call(null,seq__10744_10804__$1);
var G__10812 = null;
var G__10813 = 0;
var G__10814 = 0;
seq__10744_10794 = G__10811;
chunk__10745_10795 = G__10812;
count__10746_10796 = G__10813;
i__10747_10797 = G__10814;
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
var G__10793 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10793__delegate.call(this,elem,classes,more_classes);};
G__10793.cljs$lang$maxFixedArity = 2;
G__10793.cljs$lang$applyTo = (function (arglist__10815){
var elem = cljs.core.first(arglist__10815);
arglist__10815 = cljs.core.next(arglist__10815);
var classes = cljs.core.first(arglist__10815);
var more_classes = cljs.core.rest(arglist__10815);
return G__10793__delegate(elem,classes,more_classes);
});
G__10793.cljs$core$IFn$_invoke$arity$variadic = G__10793__delegate;
return G__10793;
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
var G__10816 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__10816;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___10825 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___10825))
{var class_list_10826 = temp__4090__auto___10825;class_list_10826.remove(class$__$1);
} else
{var class_name_10827 = elem__$1.className;var new_class_name_10828 = dommy.attrs.remove_class_str.call(null,class_name_10827,class$__$1);if((class_name_10827 === new_class_name_10828))
{} else
{elem__$1.className = new_class_name_10828;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__10829__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__10821 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__10822 = null;var count__10823 = 0;var i__10824 = 0;while(true){
if((i__10824 < count__10823))
{var c = cljs.core._nth.call(null,chunk__10822,i__10824);remove_class_BANG_.call(null,elem__$1,c);
{
var G__10830 = seq__10821;
var G__10831 = chunk__10822;
var G__10832 = count__10823;
var G__10833 = (i__10824 + 1);
seq__10821 = G__10830;
chunk__10822 = G__10831;
count__10823 = G__10832;
i__10824 = G__10833;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10821);if(temp__4092__auto__)
{var seq__10821__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10821__$1))
{var c__5489__auto__ = cljs.core.chunk_first.call(null,seq__10821__$1);{
var G__10834 = cljs.core.chunk_rest.call(null,seq__10821__$1);
var G__10835 = c__5489__auto__;
var G__10836 = cljs.core.count.call(null,c__5489__auto__);
var G__10837 = 0;
seq__10821 = G__10834;
chunk__10822 = G__10835;
count__10823 = G__10836;
i__10824 = G__10837;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__10821__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__10838 = cljs.core.next.call(null,seq__10821__$1);
var G__10839 = null;
var G__10840 = 0;
var G__10841 = 0;
seq__10821 = G__10838;
chunk__10822 = G__10839;
count__10823 = G__10840;
i__10824 = G__10841;
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
var G__10829 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10829__delegate.call(this,elem,class$,classes);};
G__10829.cljs$lang$maxFixedArity = 2;
G__10829.cljs$lang$applyTo = (function (arglist__10842){
var elem = cljs.core.first(arglist__10842);
arglist__10842 = cljs.core.next(arglist__10842);
var class$ = cljs.core.first(arglist__10842);
var classes = cljs.core.rest(arglist__10842);
return G__10829__delegate(elem,class$,classes);
});
G__10829.cljs$core$IFn$_invoke$arity$variadic = G__10829__delegate;
return G__10829;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___10843 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___10843))
{var class_list_10844 = temp__4090__auto___10843;class_list_10844.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__10847){var vec__10848 = p__10847;var k = cljs.core.nth.call(null,vec__10848,0,null);var v = cljs.core.nth.call(null,vec__10848,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__10855_10861 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__10856_10862 = null;var count__10857_10863 = 0;var i__10858_10864 = 0;while(true){
if((i__10858_10864 < count__10857_10863))
{var vec__10859_10865 = cljs.core._nth.call(null,chunk__10856_10862,i__10858_10864);var k_10866 = cljs.core.nth.call(null,vec__10859_10865,0,null);var v_10867 = cljs.core.nth.call(null,vec__10859_10865,1,null);(style[cljs.core.name.call(null,k_10866)] = v_10867);
{
var G__10868 = seq__10855_10861;
var G__10869 = chunk__10856_10862;
var G__10870 = count__10857_10863;
var G__10871 = (i__10858_10864 + 1);
seq__10855_10861 = G__10868;
chunk__10856_10862 = G__10869;
count__10857_10863 = G__10870;
i__10858_10864 = G__10871;
continue;
}
} else
{var temp__4092__auto___10872 = cljs.core.seq.call(null,seq__10855_10861);if(temp__4092__auto___10872)
{var seq__10855_10873__$1 = temp__4092__auto___10872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10855_10873__$1))
{var c__5489__auto___10874 = cljs.core.chunk_first.call(null,seq__10855_10873__$1);{
var G__10875 = cljs.core.chunk_rest.call(null,seq__10855_10873__$1);
var G__10876 = c__5489__auto___10874;
var G__10877 = cljs.core.count.call(null,c__5489__auto___10874);
var G__10878 = 0;
seq__10855_10861 = G__10875;
chunk__10856_10862 = G__10876;
count__10857_10863 = G__10877;
i__10858_10864 = G__10878;
continue;
}
} else
{var vec__10860_10879 = cljs.core.first.call(null,seq__10855_10873__$1);var k_10880 = cljs.core.nth.call(null,vec__10860_10879,0,null);var v_10881 = cljs.core.nth.call(null,vec__10860_10879,1,null);(style[cljs.core.name.call(null,k_10880)] = v_10881);
{
var G__10882 = cljs.core.next.call(null,seq__10855_10873__$1);
var G__10883 = null;
var G__10884 = 0;
var G__10885 = 0;
seq__10855_10861 = G__10882;
chunk__10856_10862 = G__10883;
count__10857_10863 = G__10884;
i__10858_10864 = G__10885;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10886){
var elem = cljs.core.first(arglist__10886);
var kvs = cljs.core.rest(arglist__10886);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__10893_10899 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__10894_10900 = null;var count__10895_10901 = 0;var i__10896_10902 = 0;while(true){
if((i__10896_10902 < count__10895_10901))
{var vec__10897_10903 = cljs.core._nth.call(null,chunk__10894_10900,i__10896_10902);var k_10904 = cljs.core.nth.call(null,vec__10897_10903,0,null);var v_10905 = cljs.core.nth.call(null,vec__10897_10903,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_10904,[cljs.core.str(v_10905),cljs.core.str("px")].join(''));
{
var G__10906 = seq__10893_10899;
var G__10907 = chunk__10894_10900;
var G__10908 = count__10895_10901;
var G__10909 = (i__10896_10902 + 1);
seq__10893_10899 = G__10906;
chunk__10894_10900 = G__10907;
count__10895_10901 = G__10908;
i__10896_10902 = G__10909;
continue;
}
} else
{var temp__4092__auto___10910 = cljs.core.seq.call(null,seq__10893_10899);if(temp__4092__auto___10910)
{var seq__10893_10911__$1 = temp__4092__auto___10910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10893_10911__$1))
{var c__5489__auto___10912 = cljs.core.chunk_first.call(null,seq__10893_10911__$1);{
var G__10913 = cljs.core.chunk_rest.call(null,seq__10893_10911__$1);
var G__10914 = c__5489__auto___10912;
var G__10915 = cljs.core.count.call(null,c__5489__auto___10912);
var G__10916 = 0;
seq__10893_10899 = G__10913;
chunk__10894_10900 = G__10914;
count__10895_10901 = G__10915;
i__10896_10902 = G__10916;
continue;
}
} else
{var vec__10898_10917 = cljs.core.first.call(null,seq__10893_10911__$1);var k_10918 = cljs.core.nth.call(null,vec__10898_10917,0,null);var v_10919 = cljs.core.nth.call(null,vec__10898_10917,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_10918,[cljs.core.str(v_10919),cljs.core.str("px")].join(''));
{
var G__10920 = cljs.core.next.call(null,seq__10893_10911__$1);
var G__10921 = null;
var G__10922 = 0;
var G__10923 = 0;
seq__10893_10899 = G__10920;
chunk__10894_10900 = G__10921;
count__10895_10901 = G__10922;
i__10896_10902 = G__10923;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__10924){
var elem = cljs.core.first(arglist__10924);
var kvs = cljs.core.rest(arglist__10924);
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
{var G__10933 = dommy.template.__GT_node_like.call(null,elem);(G__10933[cljs.core.name.call(null,k)] = v);
return G__10933;
} else
{var G__10934 = dommy.template.__GT_node_like.call(null,elem);G__10934.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__10934;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__10941__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__10935_10942 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__10936_10943 = null;var count__10937_10944 = 0;var i__10938_10945 = 0;while(true){
if((i__10938_10945 < count__10937_10944))
{var vec__10939_10946 = cljs.core._nth.call(null,chunk__10936_10943,i__10938_10945);var k_10947__$1 = cljs.core.nth.call(null,vec__10939_10946,0,null);var v_10948__$1 = cljs.core.nth.call(null,vec__10939_10946,1,null);set_attr_BANG_.call(null,elem__$1,k_10947__$1,v_10948__$1);
{
var G__10949 = seq__10935_10942;
var G__10950 = chunk__10936_10943;
var G__10951 = count__10937_10944;
var G__10952 = (i__10938_10945 + 1);
seq__10935_10942 = G__10949;
chunk__10936_10943 = G__10950;
count__10937_10944 = G__10951;
i__10938_10945 = G__10952;
continue;
}
} else
{var temp__4092__auto___10953 = cljs.core.seq.call(null,seq__10935_10942);if(temp__4092__auto___10953)
{var seq__10935_10954__$1 = temp__4092__auto___10953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10935_10954__$1))
{var c__5489__auto___10955 = cljs.core.chunk_first.call(null,seq__10935_10954__$1);{
var G__10956 = cljs.core.chunk_rest.call(null,seq__10935_10954__$1);
var G__10957 = c__5489__auto___10955;
var G__10958 = cljs.core.count.call(null,c__5489__auto___10955);
var G__10959 = 0;
seq__10935_10942 = G__10956;
chunk__10936_10943 = G__10957;
count__10937_10944 = G__10958;
i__10938_10945 = G__10959;
continue;
}
} else
{var vec__10940_10960 = cljs.core.first.call(null,seq__10935_10954__$1);var k_10961__$1 = cljs.core.nth.call(null,vec__10940_10960,0,null);var v_10962__$1 = cljs.core.nth.call(null,vec__10940_10960,1,null);set_attr_BANG_.call(null,elem__$1,k_10961__$1,v_10962__$1);
{
var G__10963 = cljs.core.next.call(null,seq__10935_10954__$1);
var G__10964 = null;
var G__10965 = 0;
var G__10966 = 0;
seq__10935_10942 = G__10963;
chunk__10936_10943 = G__10964;
count__10937_10944 = G__10965;
i__10938_10945 = G__10966;
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
var G__10941 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__10941__delegate.call(this,elem,k,v,kvs);};
G__10941.cljs$lang$maxFixedArity = 3;
G__10941.cljs$lang$applyTo = (function (arglist__10967){
var elem = cljs.core.first(arglist__10967);
arglist__10967 = cljs.core.next(arglist__10967);
var k = cljs.core.first(arglist__10967);
arglist__10967 = cljs.core.next(arglist__10967);
var v = cljs.core.first(arglist__10967);
var kvs = cljs.core.rest(arglist__10967);
return G__10941__delegate(elem,k,v,kvs);
});
G__10941.cljs$core$IFn$_invoke$arity$variadic = G__10941__delegate;
return G__10941;
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
var G__10976__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__10972_10977 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__10973_10978 = null;var count__10974_10979 = 0;var i__10975_10980 = 0;while(true){
if((i__10975_10980 < count__10974_10979))
{var k_10981__$1 = cljs.core._nth.call(null,chunk__10973_10978,i__10975_10980);remove_attr_BANG_.call(null,elem__$1,k_10981__$1);
{
var G__10982 = seq__10972_10977;
var G__10983 = chunk__10973_10978;
var G__10984 = count__10974_10979;
var G__10985 = (i__10975_10980 + 1);
seq__10972_10977 = G__10982;
chunk__10973_10978 = G__10983;
count__10974_10979 = G__10984;
i__10975_10980 = G__10985;
continue;
}
} else
{var temp__4092__auto___10986 = cljs.core.seq.call(null,seq__10972_10977);if(temp__4092__auto___10986)
{var seq__10972_10987__$1 = temp__4092__auto___10986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10972_10987__$1))
{var c__5489__auto___10988 = cljs.core.chunk_first.call(null,seq__10972_10987__$1);{
var G__10989 = cljs.core.chunk_rest.call(null,seq__10972_10987__$1);
var G__10990 = c__5489__auto___10988;
var G__10991 = cljs.core.count.call(null,c__5489__auto___10988);
var G__10992 = 0;
seq__10972_10977 = G__10989;
chunk__10973_10978 = G__10990;
count__10974_10979 = G__10991;
i__10975_10980 = G__10992;
continue;
}
} else
{var k_10993__$1 = cljs.core.first.call(null,seq__10972_10987__$1);remove_attr_BANG_.call(null,elem__$1,k_10993__$1);
{
var G__10994 = cljs.core.next.call(null,seq__10972_10987__$1);
var G__10995 = null;
var G__10996 = 0;
var G__10997 = 0;
seq__10972_10977 = G__10994;
chunk__10973_10978 = G__10995;
count__10974_10979 = G__10996;
i__10975_10980 = G__10997;
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
var G__10976 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10976__delegate.call(this,elem,k,ks);};
G__10976.cljs$lang$maxFixedArity = 2;
G__10976.cljs$lang$applyTo = (function (arglist__10998){
var elem = cljs.core.first(arglist__10998);
arglist__10998 = cljs.core.next(arglist__10998);
var k = cljs.core.first(arglist__10998);
var ks = cljs.core.rest(arglist__10998);
return G__10976__delegate(elem,k,ks);
});
G__10976.cljs$core$IFn$_invoke$arity$variadic = G__10976__delegate;
return G__10976;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__11000 = dommy.template.__GT_node_like.call(null,elem);G__11000.style.display = ((show_QMARK_)?"":"none");
return G__11000;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__11002 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__11002,false);
return G__11002;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__11004 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__11004,true);
return G__11004;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__11006 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__11006["constructor"] = Object);
return G__11006;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
