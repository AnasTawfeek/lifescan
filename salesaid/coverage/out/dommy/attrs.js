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
var G__35699 = (i + class$.length);
start_from = G__35699;
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
{var temp__4090__auto___35724 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___35724))
{var class_list_35725 = temp__4090__auto___35724;var seq__35712_35726 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__35713_35727 = null;var count__35714_35728 = 0;var i__35715_35729 = 0;while(true){
if((i__35715_35729 < count__35714_35728))
{var class_35730 = cljs.core._nth.call(null,chunk__35713_35727,i__35715_35729);class_list_35725.add(class_35730);
{
var G__35731 = seq__35712_35726;
var G__35732 = chunk__35713_35727;
var G__35733 = count__35714_35728;
var G__35734 = (i__35715_35729 + 1);
seq__35712_35726 = G__35731;
chunk__35713_35727 = G__35732;
count__35714_35728 = G__35733;
i__35715_35729 = G__35734;
continue;
}
} else
{var temp__4092__auto___35735 = cljs.core.seq.call(null,seq__35712_35726);if(temp__4092__auto___35735)
{var seq__35712_35736__$1 = temp__4092__auto___35735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35712_35736__$1))
{var c__4017__auto___35737 = cljs.core.chunk_first.call(null,seq__35712_35736__$1);{
var G__35738 = cljs.core.chunk_rest.call(null,seq__35712_35736__$1);
var G__35739 = c__4017__auto___35737;
var G__35740 = cljs.core.count.call(null,c__4017__auto___35737);
var G__35741 = 0;
seq__35712_35726 = G__35738;
chunk__35713_35727 = G__35739;
count__35714_35728 = G__35740;
i__35715_35729 = G__35741;
continue;
}
} else
{var class_35742 = cljs.core.first.call(null,seq__35712_35736__$1);class_list_35725.add(class_35742);
{
var G__35743 = cljs.core.next.call(null,seq__35712_35736__$1);
var G__35744 = null;
var G__35745 = 0;
var G__35746 = 0;
seq__35712_35726 = G__35743;
chunk__35713_35727 = G__35744;
count__35714_35728 = G__35745;
i__35715_35729 = G__35746;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_35747 = elem__$1.className;var seq__35716_35748 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__35717_35749 = null;var count__35718_35750 = 0;var i__35719_35751 = 0;while(true){
if((i__35719_35751 < count__35718_35750))
{var class_35752 = cljs.core._nth.call(null,chunk__35717_35749,i__35719_35751);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_35747,class_35752)))
{} else
{elem__$1.className = (((class_name_35747 === ""))?class_35752:[cljs.core.str(class_name_35747),cljs.core.str(" "),cljs.core.str(class_35752)].join(''));
}
{
var G__35753 = seq__35716_35748;
var G__35754 = chunk__35717_35749;
var G__35755 = count__35718_35750;
var G__35756 = (i__35719_35751 + 1);
seq__35716_35748 = G__35753;
chunk__35717_35749 = G__35754;
count__35718_35750 = G__35755;
i__35719_35751 = G__35756;
continue;
}
} else
{var temp__4092__auto___35757 = cljs.core.seq.call(null,seq__35716_35748);if(temp__4092__auto___35757)
{var seq__35716_35758__$1 = temp__4092__auto___35757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35716_35758__$1))
{var c__4017__auto___35759 = cljs.core.chunk_first.call(null,seq__35716_35758__$1);{
var G__35760 = cljs.core.chunk_rest.call(null,seq__35716_35758__$1);
var G__35761 = c__4017__auto___35759;
var G__35762 = cljs.core.count.call(null,c__4017__auto___35759);
var G__35763 = 0;
seq__35716_35748 = G__35760;
chunk__35717_35749 = G__35761;
count__35718_35750 = G__35762;
i__35719_35751 = G__35763;
continue;
}
} else
{var class_35764 = cljs.core.first.call(null,seq__35716_35758__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_35747,class_35764)))
{} else
{elem__$1.className = (((class_name_35747 === ""))?class_35764:[cljs.core.str(class_name_35747),cljs.core.str(" "),cljs.core.str(class_35764)].join(''));
}
{
var G__35765 = cljs.core.next.call(null,seq__35716_35758__$1);
var G__35766 = null;
var G__35767 = 0;
var G__35768 = 0;
seq__35716_35748 = G__35765;
chunk__35717_35749 = G__35766;
count__35718_35750 = G__35767;
i__35719_35751 = G__35768;
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
var G__35769__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__35720_35770 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__35721_35771 = null;var count__35722_35772 = 0;var i__35723_35773 = 0;while(true){
if((i__35723_35773 < count__35722_35772))
{var c_35774 = cljs.core._nth.call(null,chunk__35721_35771,i__35723_35773);add_class_BANG_.call(null,elem__$1,c_35774);
{
var G__35775 = seq__35720_35770;
var G__35776 = chunk__35721_35771;
var G__35777 = count__35722_35772;
var G__35778 = (i__35723_35773 + 1);
seq__35720_35770 = G__35775;
chunk__35721_35771 = G__35776;
count__35722_35772 = G__35777;
i__35723_35773 = G__35778;
continue;
}
} else
{var temp__4092__auto___35779 = cljs.core.seq.call(null,seq__35720_35770);if(temp__4092__auto___35779)
{var seq__35720_35780__$1 = temp__4092__auto___35779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35720_35780__$1))
{var c__4017__auto___35781 = cljs.core.chunk_first.call(null,seq__35720_35780__$1);{
var G__35782 = cljs.core.chunk_rest.call(null,seq__35720_35780__$1);
var G__35783 = c__4017__auto___35781;
var G__35784 = cljs.core.count.call(null,c__4017__auto___35781);
var G__35785 = 0;
seq__35720_35770 = G__35782;
chunk__35721_35771 = G__35783;
count__35722_35772 = G__35784;
i__35723_35773 = G__35785;
continue;
}
} else
{var c_35786 = cljs.core.first.call(null,seq__35720_35780__$1);add_class_BANG_.call(null,elem__$1,c_35786);
{
var G__35787 = cljs.core.next.call(null,seq__35720_35780__$1);
var G__35788 = null;
var G__35789 = 0;
var G__35790 = 0;
seq__35720_35770 = G__35787;
chunk__35721_35771 = G__35788;
count__35722_35772 = G__35789;
i__35723_35773 = G__35790;
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
var G__35769 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35769__delegate.call(this,elem,classes,more_classes);};
G__35769.cljs$lang$maxFixedArity = 2;
G__35769.cljs$lang$applyTo = (function (arglist__35791){
var elem = cljs.core.first(arglist__35791);
arglist__35791 = cljs.core.next(arglist__35791);
var classes = cljs.core.first(arglist__35791);
var more_classes = cljs.core.rest(arglist__35791);
return G__35769__delegate(elem,classes,more_classes);
});
G__35769.cljs$core$IFn$_invoke$arity$variadic = G__35769__delegate;
return G__35769;
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
var G__35792 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__35792;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___35801 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___35801))
{var class_list_35802 = temp__4090__auto___35801;class_list_35802.remove(class$__$1);
} else
{var class_name_35803 = elem__$1.className;var new_class_name_35804 = dommy.attrs.remove_class_str.call(null,class_name_35803,class$__$1);if((class_name_35803 === new_class_name_35804))
{} else
{elem__$1.className = new_class_name_35804;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__35805__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__35797 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__35798 = null;var count__35799 = 0;var i__35800 = 0;while(true){
if((i__35800 < count__35799))
{var c = cljs.core._nth.call(null,chunk__35798,i__35800);remove_class_BANG_.call(null,elem__$1,c);
{
var G__35806 = seq__35797;
var G__35807 = chunk__35798;
var G__35808 = count__35799;
var G__35809 = (i__35800 + 1);
seq__35797 = G__35806;
chunk__35798 = G__35807;
count__35799 = G__35808;
i__35800 = G__35809;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35797);if(temp__4092__auto__)
{var seq__35797__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35797__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__35797__$1);{
var G__35810 = cljs.core.chunk_rest.call(null,seq__35797__$1);
var G__35811 = c__4017__auto__;
var G__35812 = cljs.core.count.call(null,c__4017__auto__);
var G__35813 = 0;
seq__35797 = G__35810;
chunk__35798 = G__35811;
count__35799 = G__35812;
i__35800 = G__35813;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__35797__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__35814 = cljs.core.next.call(null,seq__35797__$1);
var G__35815 = null;
var G__35816 = 0;
var G__35817 = 0;
seq__35797 = G__35814;
chunk__35798 = G__35815;
count__35799 = G__35816;
i__35800 = G__35817;
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
var G__35805 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35805__delegate.call(this,elem,class$,classes);};
G__35805.cljs$lang$maxFixedArity = 2;
G__35805.cljs$lang$applyTo = (function (arglist__35818){
var elem = cljs.core.first(arglist__35818);
arglist__35818 = cljs.core.next(arglist__35818);
var class$ = cljs.core.first(arglist__35818);
var classes = cljs.core.rest(arglist__35818);
return G__35805__delegate(elem,class$,classes);
});
G__35805.cljs$core$IFn$_invoke$arity$variadic = G__35805__delegate;
return G__35805;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___35819 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___35819))
{var class_list_35820 = temp__4090__auto___35819;class_list_35820.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__35823){var vec__35824 = p__35823;var k = cljs.core.nth.call(null,vec__35824,0,null);var v = cljs.core.nth.call(null,vec__35824,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__35831_35837 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__35832_35838 = null;var count__35833_35839 = 0;var i__35834_35840 = 0;while(true){
if((i__35834_35840 < count__35833_35839))
{var vec__35835_35841 = cljs.core._nth.call(null,chunk__35832_35838,i__35834_35840);var k_35842 = cljs.core.nth.call(null,vec__35835_35841,0,null);var v_35843 = cljs.core.nth.call(null,vec__35835_35841,1,null);(style[cljs.core.name.call(null,k_35842)] = v_35843);
{
var G__35844 = seq__35831_35837;
var G__35845 = chunk__35832_35838;
var G__35846 = count__35833_35839;
var G__35847 = (i__35834_35840 + 1);
seq__35831_35837 = G__35844;
chunk__35832_35838 = G__35845;
count__35833_35839 = G__35846;
i__35834_35840 = G__35847;
continue;
}
} else
{var temp__4092__auto___35848 = cljs.core.seq.call(null,seq__35831_35837);if(temp__4092__auto___35848)
{var seq__35831_35849__$1 = temp__4092__auto___35848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35831_35849__$1))
{var c__4017__auto___35850 = cljs.core.chunk_first.call(null,seq__35831_35849__$1);{
var G__35851 = cljs.core.chunk_rest.call(null,seq__35831_35849__$1);
var G__35852 = c__4017__auto___35850;
var G__35853 = cljs.core.count.call(null,c__4017__auto___35850);
var G__35854 = 0;
seq__35831_35837 = G__35851;
chunk__35832_35838 = G__35852;
count__35833_35839 = G__35853;
i__35834_35840 = G__35854;
continue;
}
} else
{var vec__35836_35855 = cljs.core.first.call(null,seq__35831_35849__$1);var k_35856 = cljs.core.nth.call(null,vec__35836_35855,0,null);var v_35857 = cljs.core.nth.call(null,vec__35836_35855,1,null);(style[cljs.core.name.call(null,k_35856)] = v_35857);
{
var G__35858 = cljs.core.next.call(null,seq__35831_35849__$1);
var G__35859 = null;
var G__35860 = 0;
var G__35861 = 0;
seq__35831_35837 = G__35858;
chunk__35832_35838 = G__35859;
count__35833_35839 = G__35860;
i__35834_35840 = G__35861;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__35862){
var elem = cljs.core.first(arglist__35862);
var kvs = cljs.core.rest(arglist__35862);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__35869_35875 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__35870_35876 = null;var count__35871_35877 = 0;var i__35872_35878 = 0;while(true){
if((i__35872_35878 < count__35871_35877))
{var vec__35873_35879 = cljs.core._nth.call(null,chunk__35870_35876,i__35872_35878);var k_35880 = cljs.core.nth.call(null,vec__35873_35879,0,null);var v_35881 = cljs.core.nth.call(null,vec__35873_35879,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_35880,[cljs.core.str(v_35881),cljs.core.str("px")].join(''));
{
var G__35882 = seq__35869_35875;
var G__35883 = chunk__35870_35876;
var G__35884 = count__35871_35877;
var G__35885 = (i__35872_35878 + 1);
seq__35869_35875 = G__35882;
chunk__35870_35876 = G__35883;
count__35871_35877 = G__35884;
i__35872_35878 = G__35885;
continue;
}
} else
{var temp__4092__auto___35886 = cljs.core.seq.call(null,seq__35869_35875);if(temp__4092__auto___35886)
{var seq__35869_35887__$1 = temp__4092__auto___35886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35869_35887__$1))
{var c__4017__auto___35888 = cljs.core.chunk_first.call(null,seq__35869_35887__$1);{
var G__35889 = cljs.core.chunk_rest.call(null,seq__35869_35887__$1);
var G__35890 = c__4017__auto___35888;
var G__35891 = cljs.core.count.call(null,c__4017__auto___35888);
var G__35892 = 0;
seq__35869_35875 = G__35889;
chunk__35870_35876 = G__35890;
count__35871_35877 = G__35891;
i__35872_35878 = G__35892;
continue;
}
} else
{var vec__35874_35893 = cljs.core.first.call(null,seq__35869_35887__$1);var k_35894 = cljs.core.nth.call(null,vec__35874_35893,0,null);var v_35895 = cljs.core.nth.call(null,vec__35874_35893,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_35894,[cljs.core.str(v_35895),cljs.core.str("px")].join(''));
{
var G__35896 = cljs.core.next.call(null,seq__35869_35887__$1);
var G__35897 = null;
var G__35898 = 0;
var G__35899 = 0;
seq__35869_35875 = G__35896;
chunk__35870_35876 = G__35897;
count__35871_35877 = G__35898;
i__35872_35878 = G__35899;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__35900){
var elem = cljs.core.first(arglist__35900);
var kvs = cljs.core.rest(arglist__35900);
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
{var G__35909 = dommy.template.__GT_node_like.call(null,elem);(G__35909[cljs.core.name.call(null,k)] = v);
return G__35909;
} else
{var G__35910 = dommy.template.__GT_node_like.call(null,elem);G__35910.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__35910;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__35917__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__35911_35918 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__35912_35919 = null;var count__35913_35920 = 0;var i__35914_35921 = 0;while(true){
if((i__35914_35921 < count__35913_35920))
{var vec__35915_35922 = cljs.core._nth.call(null,chunk__35912_35919,i__35914_35921);var k_35923__$1 = cljs.core.nth.call(null,vec__35915_35922,0,null);var v_35924__$1 = cljs.core.nth.call(null,vec__35915_35922,1,null);set_attr_BANG_.call(null,elem__$1,k_35923__$1,v_35924__$1);
{
var G__35925 = seq__35911_35918;
var G__35926 = chunk__35912_35919;
var G__35927 = count__35913_35920;
var G__35928 = (i__35914_35921 + 1);
seq__35911_35918 = G__35925;
chunk__35912_35919 = G__35926;
count__35913_35920 = G__35927;
i__35914_35921 = G__35928;
continue;
}
} else
{var temp__4092__auto___35929 = cljs.core.seq.call(null,seq__35911_35918);if(temp__4092__auto___35929)
{var seq__35911_35930__$1 = temp__4092__auto___35929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35911_35930__$1))
{var c__4017__auto___35931 = cljs.core.chunk_first.call(null,seq__35911_35930__$1);{
var G__35932 = cljs.core.chunk_rest.call(null,seq__35911_35930__$1);
var G__35933 = c__4017__auto___35931;
var G__35934 = cljs.core.count.call(null,c__4017__auto___35931);
var G__35935 = 0;
seq__35911_35918 = G__35932;
chunk__35912_35919 = G__35933;
count__35913_35920 = G__35934;
i__35914_35921 = G__35935;
continue;
}
} else
{var vec__35916_35936 = cljs.core.first.call(null,seq__35911_35930__$1);var k_35937__$1 = cljs.core.nth.call(null,vec__35916_35936,0,null);var v_35938__$1 = cljs.core.nth.call(null,vec__35916_35936,1,null);set_attr_BANG_.call(null,elem__$1,k_35937__$1,v_35938__$1);
{
var G__35939 = cljs.core.next.call(null,seq__35911_35930__$1);
var G__35940 = null;
var G__35941 = 0;
var G__35942 = 0;
seq__35911_35918 = G__35939;
chunk__35912_35919 = G__35940;
count__35913_35920 = G__35941;
i__35914_35921 = G__35942;
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
var G__35917 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__35917__delegate.call(this,elem,k,v,kvs);};
G__35917.cljs$lang$maxFixedArity = 3;
G__35917.cljs$lang$applyTo = (function (arglist__35943){
var elem = cljs.core.first(arglist__35943);
arglist__35943 = cljs.core.next(arglist__35943);
var k = cljs.core.first(arglist__35943);
arglist__35943 = cljs.core.next(arglist__35943);
var v = cljs.core.first(arglist__35943);
var kvs = cljs.core.rest(arglist__35943);
return G__35917__delegate(elem,k,v,kvs);
});
G__35917.cljs$core$IFn$_invoke$arity$variadic = G__35917__delegate;
return G__35917;
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
var G__35952__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__35948_35953 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__35949_35954 = null;var count__35950_35955 = 0;var i__35951_35956 = 0;while(true){
if((i__35951_35956 < count__35950_35955))
{var k_35957__$1 = cljs.core._nth.call(null,chunk__35949_35954,i__35951_35956);remove_attr_BANG_.call(null,elem__$1,k_35957__$1);
{
var G__35958 = seq__35948_35953;
var G__35959 = chunk__35949_35954;
var G__35960 = count__35950_35955;
var G__35961 = (i__35951_35956 + 1);
seq__35948_35953 = G__35958;
chunk__35949_35954 = G__35959;
count__35950_35955 = G__35960;
i__35951_35956 = G__35961;
continue;
}
} else
{var temp__4092__auto___35962 = cljs.core.seq.call(null,seq__35948_35953);if(temp__4092__auto___35962)
{var seq__35948_35963__$1 = temp__4092__auto___35962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35948_35963__$1))
{var c__4017__auto___35964 = cljs.core.chunk_first.call(null,seq__35948_35963__$1);{
var G__35965 = cljs.core.chunk_rest.call(null,seq__35948_35963__$1);
var G__35966 = c__4017__auto___35964;
var G__35967 = cljs.core.count.call(null,c__4017__auto___35964);
var G__35968 = 0;
seq__35948_35953 = G__35965;
chunk__35949_35954 = G__35966;
count__35950_35955 = G__35967;
i__35951_35956 = G__35968;
continue;
}
} else
{var k_35969__$1 = cljs.core.first.call(null,seq__35948_35963__$1);remove_attr_BANG_.call(null,elem__$1,k_35969__$1);
{
var G__35970 = cljs.core.next.call(null,seq__35948_35963__$1);
var G__35971 = null;
var G__35972 = 0;
var G__35973 = 0;
seq__35948_35953 = G__35970;
chunk__35949_35954 = G__35971;
count__35950_35955 = G__35972;
i__35951_35956 = G__35973;
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
var G__35952 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35952__delegate.call(this,elem,k,ks);};
G__35952.cljs$lang$maxFixedArity = 2;
G__35952.cljs$lang$applyTo = (function (arglist__35974){
var elem = cljs.core.first(arglist__35974);
arglist__35974 = cljs.core.next(arglist__35974);
var k = cljs.core.first(arglist__35974);
var ks = cljs.core.rest(arglist__35974);
return G__35952__delegate(elem,k,ks);
});
G__35952.cljs$core$IFn$_invoke$arity$variadic = G__35952__delegate;
return G__35952;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__35976 = dommy.template.__GT_node_like.call(null,elem);G__35976.style.display = ((show_QMARK_)?"":"none");
return G__35976;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__35978 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__35978,false);
return G__35978;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__35980 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__35980,true);
return G__35980;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__35982 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__35982["constructor"] = Object);
return G__35982;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
