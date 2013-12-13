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
var G__256759 = (i + class$.length);
start_from = G__256759;
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
{var temp__4090__auto___256784 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___256784))
{var class_list_256785 = temp__4090__auto___256784;var seq__256772_256786 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__256773_256787 = null;var count__256774_256788 = 0;var i__256775_256789 = 0;while(true){
if((i__256775_256789 < count__256774_256788))
{var class_256790 = cljs.core._nth.call(null,chunk__256773_256787,i__256775_256789);class_list_256785.add(class_256790);
{
var G__256791 = seq__256772_256786;
var G__256792 = chunk__256773_256787;
var G__256793 = count__256774_256788;
var G__256794 = (i__256775_256789 + 1);
seq__256772_256786 = G__256791;
chunk__256773_256787 = G__256792;
count__256774_256788 = G__256793;
i__256775_256789 = G__256794;
continue;
}
} else
{var temp__4092__auto___256795 = cljs.core.seq.call(null,seq__256772_256786);if(temp__4092__auto___256795)
{var seq__256772_256796__$1 = temp__4092__auto___256795;if(cljs.core.chunked_seq_QMARK_.call(null,seq__256772_256796__$1))
{var c__4017__auto___256797 = cljs.core.chunk_first.call(null,seq__256772_256796__$1);{
var G__256798 = cljs.core.chunk_rest.call(null,seq__256772_256796__$1);
var G__256799 = c__4017__auto___256797;
var G__256800 = cljs.core.count.call(null,c__4017__auto___256797);
var G__256801 = 0;
seq__256772_256786 = G__256798;
chunk__256773_256787 = G__256799;
count__256774_256788 = G__256800;
i__256775_256789 = G__256801;
continue;
}
} else
{var class_256802 = cljs.core.first.call(null,seq__256772_256796__$1);class_list_256785.add(class_256802);
{
var G__256803 = cljs.core.next.call(null,seq__256772_256796__$1);
var G__256804 = null;
var G__256805 = 0;
var G__256806 = 0;
seq__256772_256786 = G__256803;
chunk__256773_256787 = G__256804;
count__256774_256788 = G__256805;
i__256775_256789 = G__256806;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_256807 = elem__$1.className;var seq__256776_256808 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__256777_256809 = null;var count__256778_256810 = 0;var i__256779_256811 = 0;while(true){
if((i__256779_256811 < count__256778_256810))
{var class_256812 = cljs.core._nth.call(null,chunk__256777_256809,i__256779_256811);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_256807,class_256812)))
{} else
{elem__$1.className = (((class_name_256807 === ""))?class_256812:[cljs.core.str(class_name_256807),cljs.core.str(" "),cljs.core.str(class_256812)].join(''));
}
{
var G__256813 = seq__256776_256808;
var G__256814 = chunk__256777_256809;
var G__256815 = count__256778_256810;
var G__256816 = (i__256779_256811 + 1);
seq__256776_256808 = G__256813;
chunk__256777_256809 = G__256814;
count__256778_256810 = G__256815;
i__256779_256811 = G__256816;
continue;
}
} else
{var temp__4092__auto___256817 = cljs.core.seq.call(null,seq__256776_256808);if(temp__4092__auto___256817)
{var seq__256776_256818__$1 = temp__4092__auto___256817;if(cljs.core.chunked_seq_QMARK_.call(null,seq__256776_256818__$1))
{var c__4017__auto___256819 = cljs.core.chunk_first.call(null,seq__256776_256818__$1);{
var G__256820 = cljs.core.chunk_rest.call(null,seq__256776_256818__$1);
var G__256821 = c__4017__auto___256819;
var G__256822 = cljs.core.count.call(null,c__4017__auto___256819);
var G__256823 = 0;
seq__256776_256808 = G__256820;
chunk__256777_256809 = G__256821;
count__256778_256810 = G__256822;
i__256779_256811 = G__256823;
continue;
}
} else
{var class_256824 = cljs.core.first.call(null,seq__256776_256818__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_256807,class_256824)))
{} else
{elem__$1.className = (((class_name_256807 === ""))?class_256824:[cljs.core.str(class_name_256807),cljs.core.str(" "),cljs.core.str(class_256824)].join(''));
}
{
var G__256825 = cljs.core.next.call(null,seq__256776_256818__$1);
var G__256826 = null;
var G__256827 = 0;
var G__256828 = 0;
seq__256776_256808 = G__256825;
chunk__256777_256809 = G__256826;
count__256778_256810 = G__256827;
i__256779_256811 = G__256828;
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
var G__256829__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__256780_256830 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__256781_256831 = null;var count__256782_256832 = 0;var i__256783_256833 = 0;while(true){
if((i__256783_256833 < count__256782_256832))
{var c_256834 = cljs.core._nth.call(null,chunk__256781_256831,i__256783_256833);add_class_BANG_.call(null,elem__$1,c_256834);
{
var G__256835 = seq__256780_256830;
var G__256836 = chunk__256781_256831;
var G__256837 = count__256782_256832;
var G__256838 = (i__256783_256833 + 1);
seq__256780_256830 = G__256835;
chunk__256781_256831 = G__256836;
count__256782_256832 = G__256837;
i__256783_256833 = G__256838;
continue;
}
} else
{var temp__4092__auto___256839 = cljs.core.seq.call(null,seq__256780_256830);if(temp__4092__auto___256839)
{var seq__256780_256840__$1 = temp__4092__auto___256839;if(cljs.core.chunked_seq_QMARK_.call(null,seq__256780_256840__$1))
{var c__4017__auto___256841 = cljs.core.chunk_first.call(null,seq__256780_256840__$1);{
var G__256842 = cljs.core.chunk_rest.call(null,seq__256780_256840__$1);
var G__256843 = c__4017__auto___256841;
var G__256844 = cljs.core.count.call(null,c__4017__auto___256841);
var G__256845 = 0;
seq__256780_256830 = G__256842;
chunk__256781_256831 = G__256843;
count__256782_256832 = G__256844;
i__256783_256833 = G__256845;
continue;
}
} else
{var c_256846 = cljs.core.first.call(null,seq__256780_256840__$1);add_class_BANG_.call(null,elem__$1,c_256846);
{
var G__256847 = cljs.core.next.call(null,seq__256780_256840__$1);
var G__256848 = null;
var G__256849 = 0;
var G__256850 = 0;
seq__256780_256830 = G__256847;
chunk__256781_256831 = G__256848;
count__256782_256832 = G__256849;
i__256783_256833 = G__256850;
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
var G__256829 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__256829__delegate.call(this,elem,classes,more_classes);};
G__256829.cljs$lang$maxFixedArity = 2;
G__256829.cljs$lang$applyTo = (function (arglist__256851){
var elem = cljs.core.first(arglist__256851);
arglist__256851 = cljs.core.next(arglist__256851);
var classes = cljs.core.first(arglist__256851);
var more_classes = cljs.core.rest(arglist__256851);
return G__256829__delegate(elem,classes,more_classes);
});
G__256829.cljs$core$IFn$_invoke$arity$variadic = G__256829__delegate;
return G__256829;
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
var G__256852 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__256852;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___256861 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___256861))
{var class_list_256862 = temp__4090__auto___256861;class_list_256862.remove(class$__$1);
} else
{var class_name_256863 = elem__$1.className;var new_class_name_256864 = dommy.attrs.remove_class_str.call(null,class_name_256863,class$__$1);if((class_name_256863 === new_class_name_256864))
{} else
{elem__$1.className = new_class_name_256864;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__256865__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__256857 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__256858 = null;var count__256859 = 0;var i__256860 = 0;while(true){
if((i__256860 < count__256859))
{var c = cljs.core._nth.call(null,chunk__256858,i__256860);remove_class_BANG_.call(null,elem__$1,c);
{
var G__256866 = seq__256857;
var G__256867 = chunk__256858;
var G__256868 = count__256859;
var G__256869 = (i__256860 + 1);
seq__256857 = G__256866;
chunk__256858 = G__256867;
count__256859 = G__256868;
i__256860 = G__256869;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__256857);if(temp__4092__auto__)
{var seq__256857__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__256857__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__256857__$1);{
var G__256870 = cljs.core.chunk_rest.call(null,seq__256857__$1);
var G__256871 = c__4017__auto__;
var G__256872 = cljs.core.count.call(null,c__4017__auto__);
var G__256873 = 0;
seq__256857 = G__256870;
chunk__256858 = G__256871;
count__256859 = G__256872;
i__256860 = G__256873;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__256857__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__256874 = cljs.core.next.call(null,seq__256857__$1);
var G__256875 = null;
var G__256876 = 0;
var G__256877 = 0;
seq__256857 = G__256874;
chunk__256858 = G__256875;
count__256859 = G__256876;
i__256860 = G__256877;
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
var G__256865 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__256865__delegate.call(this,elem,class$,classes);};
G__256865.cljs$lang$maxFixedArity = 2;
G__256865.cljs$lang$applyTo = (function (arglist__256878){
var elem = cljs.core.first(arglist__256878);
arglist__256878 = cljs.core.next(arglist__256878);
var class$ = cljs.core.first(arglist__256878);
var classes = cljs.core.rest(arglist__256878);
return G__256865__delegate(elem,class$,classes);
});
G__256865.cljs$core$IFn$_invoke$arity$variadic = G__256865__delegate;
return G__256865;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___256879 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___256879))
{var class_list_256880 = temp__4090__auto___256879;class_list_256880.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__256883){var vec__256884 = p__256883;var k = cljs.core.nth.call(null,vec__256884,0,null);var v = cljs.core.nth.call(null,vec__256884,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__256891_256897 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__256892_256898 = null;var count__256893_256899 = 0;var i__256894_256900 = 0;while(true){
if((i__256894_256900 < count__256893_256899))
{var vec__256895_256901 = cljs.core._nth.call(null,chunk__256892_256898,i__256894_256900);var k_256902 = cljs.core.nth.call(null,vec__256895_256901,0,null);var v_256903 = cljs.core.nth.call(null,vec__256895_256901,1,null);(style[cljs.core.name.call(null,k_256902)] = v_256903);
{
var G__256904 = seq__256891_256897;
var G__256905 = chunk__256892_256898;
var G__256906 = count__256893_256899;
var G__256907 = (i__256894_256900 + 1);
seq__256891_256897 = G__256904;
chunk__256892_256898 = G__256905;
count__256893_256899 = G__256906;
i__256894_256900 = G__256907;
continue;
}
} else
{var temp__4092__auto___256908 = cljs.core.seq.call(null,seq__256891_256897);if(temp__4092__auto___256908)
{var seq__256891_256909__$1 = temp__4092__auto___256908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__256891_256909__$1))
{var c__4017__auto___256910 = cljs.core.chunk_first.call(null,seq__256891_256909__$1);{
var G__256911 = cljs.core.chunk_rest.call(null,seq__256891_256909__$1);
var G__256912 = c__4017__auto___256910;
var G__256913 = cljs.core.count.call(null,c__4017__auto___256910);
var G__256914 = 0;
seq__256891_256897 = G__256911;
chunk__256892_256898 = G__256912;
count__256893_256899 = G__256913;
i__256894_256900 = G__256914;
continue;
}
} else
{var vec__256896_256915 = cljs.core.first.call(null,seq__256891_256909__$1);var k_256916 = cljs.core.nth.call(null,vec__256896_256915,0,null);var v_256917 = cljs.core.nth.call(null,vec__256896_256915,1,null);(style[cljs.core.name.call(null,k_256916)] = v_256917);
{
var G__256918 = cljs.core.next.call(null,seq__256891_256909__$1);
var G__256919 = null;
var G__256920 = 0;
var G__256921 = 0;
seq__256891_256897 = G__256918;
chunk__256892_256898 = G__256919;
count__256893_256899 = G__256920;
i__256894_256900 = G__256921;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__256922){
var elem = cljs.core.first(arglist__256922);
var kvs = cljs.core.rest(arglist__256922);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__256929_256935 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__256930_256936 = null;var count__256931_256937 = 0;var i__256932_256938 = 0;while(true){
if((i__256932_256938 < count__256931_256937))
{var vec__256933_256939 = cljs.core._nth.call(null,chunk__256930_256936,i__256932_256938);var k_256940 = cljs.core.nth.call(null,vec__256933_256939,0,null);var v_256941 = cljs.core.nth.call(null,vec__256933_256939,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_256940,[cljs.core.str(v_256941),cljs.core.str("px")].join(''));
{
var G__256942 = seq__256929_256935;
var G__256943 = chunk__256930_256936;
var G__256944 = count__256931_256937;
var G__256945 = (i__256932_256938 + 1);
seq__256929_256935 = G__256942;
chunk__256930_256936 = G__256943;
count__256931_256937 = G__256944;
i__256932_256938 = G__256945;
continue;
}
} else
{var temp__4092__auto___256946 = cljs.core.seq.call(null,seq__256929_256935);if(temp__4092__auto___256946)
{var seq__256929_256947__$1 = temp__4092__auto___256946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__256929_256947__$1))
{var c__4017__auto___256948 = cljs.core.chunk_first.call(null,seq__256929_256947__$1);{
var G__256949 = cljs.core.chunk_rest.call(null,seq__256929_256947__$1);
var G__256950 = c__4017__auto___256948;
var G__256951 = cljs.core.count.call(null,c__4017__auto___256948);
var G__256952 = 0;
seq__256929_256935 = G__256949;
chunk__256930_256936 = G__256950;
count__256931_256937 = G__256951;
i__256932_256938 = G__256952;
continue;
}
} else
{var vec__256934_256953 = cljs.core.first.call(null,seq__256929_256947__$1);var k_256954 = cljs.core.nth.call(null,vec__256934_256953,0,null);var v_256955 = cljs.core.nth.call(null,vec__256934_256953,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_256954,[cljs.core.str(v_256955),cljs.core.str("px")].join(''));
{
var G__256956 = cljs.core.next.call(null,seq__256929_256947__$1);
var G__256957 = null;
var G__256958 = 0;
var G__256959 = 0;
seq__256929_256935 = G__256956;
chunk__256930_256936 = G__256957;
count__256931_256937 = G__256958;
i__256932_256938 = G__256959;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__256960){
var elem = cljs.core.first(arglist__256960);
var kvs = cljs.core.rest(arglist__256960);
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
{var G__256969 = dommy.template.__GT_node_like.call(null,elem);(G__256969[cljs.core.name.call(null,k)] = v);
return G__256969;
} else
{var G__256970 = dommy.template.__GT_node_like.call(null,elem);G__256970.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__256970;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__256977__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__256971_256978 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__256972_256979 = null;var count__256973_256980 = 0;var i__256974_256981 = 0;while(true){
if((i__256974_256981 < count__256973_256980))
{var vec__256975_256982 = cljs.core._nth.call(null,chunk__256972_256979,i__256974_256981);var k_256983__$1 = cljs.core.nth.call(null,vec__256975_256982,0,null);var v_256984__$1 = cljs.core.nth.call(null,vec__256975_256982,1,null);set_attr_BANG_.call(null,elem__$1,k_256983__$1,v_256984__$1);
{
var G__256985 = seq__256971_256978;
var G__256986 = chunk__256972_256979;
var G__256987 = count__256973_256980;
var G__256988 = (i__256974_256981 + 1);
seq__256971_256978 = G__256985;
chunk__256972_256979 = G__256986;
count__256973_256980 = G__256987;
i__256974_256981 = G__256988;
continue;
}
} else
{var temp__4092__auto___256989 = cljs.core.seq.call(null,seq__256971_256978);if(temp__4092__auto___256989)
{var seq__256971_256990__$1 = temp__4092__auto___256989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__256971_256990__$1))
{var c__4017__auto___256991 = cljs.core.chunk_first.call(null,seq__256971_256990__$1);{
var G__256992 = cljs.core.chunk_rest.call(null,seq__256971_256990__$1);
var G__256993 = c__4017__auto___256991;
var G__256994 = cljs.core.count.call(null,c__4017__auto___256991);
var G__256995 = 0;
seq__256971_256978 = G__256992;
chunk__256972_256979 = G__256993;
count__256973_256980 = G__256994;
i__256974_256981 = G__256995;
continue;
}
} else
{var vec__256976_256996 = cljs.core.first.call(null,seq__256971_256990__$1);var k_256997__$1 = cljs.core.nth.call(null,vec__256976_256996,0,null);var v_256998__$1 = cljs.core.nth.call(null,vec__256976_256996,1,null);set_attr_BANG_.call(null,elem__$1,k_256997__$1,v_256998__$1);
{
var G__256999 = cljs.core.next.call(null,seq__256971_256990__$1);
var G__257000 = null;
var G__257001 = 0;
var G__257002 = 0;
seq__256971_256978 = G__256999;
chunk__256972_256979 = G__257000;
count__256973_256980 = G__257001;
i__256974_256981 = G__257002;
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
var G__256977 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__256977__delegate.call(this,elem,k,v,kvs);};
G__256977.cljs$lang$maxFixedArity = 3;
G__256977.cljs$lang$applyTo = (function (arglist__257003){
var elem = cljs.core.first(arglist__257003);
arglist__257003 = cljs.core.next(arglist__257003);
var k = cljs.core.first(arglist__257003);
arglist__257003 = cljs.core.next(arglist__257003);
var v = cljs.core.first(arglist__257003);
var kvs = cljs.core.rest(arglist__257003);
return G__256977__delegate(elem,k,v,kvs);
});
G__256977.cljs$core$IFn$_invoke$arity$variadic = G__256977__delegate;
return G__256977;
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
var G__257012__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__257008_257013 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__257009_257014 = null;var count__257010_257015 = 0;var i__257011_257016 = 0;while(true){
if((i__257011_257016 < count__257010_257015))
{var k_257017__$1 = cljs.core._nth.call(null,chunk__257009_257014,i__257011_257016);remove_attr_BANG_.call(null,elem__$1,k_257017__$1);
{
var G__257018 = seq__257008_257013;
var G__257019 = chunk__257009_257014;
var G__257020 = count__257010_257015;
var G__257021 = (i__257011_257016 + 1);
seq__257008_257013 = G__257018;
chunk__257009_257014 = G__257019;
count__257010_257015 = G__257020;
i__257011_257016 = G__257021;
continue;
}
} else
{var temp__4092__auto___257022 = cljs.core.seq.call(null,seq__257008_257013);if(temp__4092__auto___257022)
{var seq__257008_257023__$1 = temp__4092__auto___257022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__257008_257023__$1))
{var c__4017__auto___257024 = cljs.core.chunk_first.call(null,seq__257008_257023__$1);{
var G__257025 = cljs.core.chunk_rest.call(null,seq__257008_257023__$1);
var G__257026 = c__4017__auto___257024;
var G__257027 = cljs.core.count.call(null,c__4017__auto___257024);
var G__257028 = 0;
seq__257008_257013 = G__257025;
chunk__257009_257014 = G__257026;
count__257010_257015 = G__257027;
i__257011_257016 = G__257028;
continue;
}
} else
{var k_257029__$1 = cljs.core.first.call(null,seq__257008_257023__$1);remove_attr_BANG_.call(null,elem__$1,k_257029__$1);
{
var G__257030 = cljs.core.next.call(null,seq__257008_257023__$1);
var G__257031 = null;
var G__257032 = 0;
var G__257033 = 0;
seq__257008_257013 = G__257030;
chunk__257009_257014 = G__257031;
count__257010_257015 = G__257032;
i__257011_257016 = G__257033;
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
var G__257012 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__257012__delegate.call(this,elem,k,ks);};
G__257012.cljs$lang$maxFixedArity = 2;
G__257012.cljs$lang$applyTo = (function (arglist__257034){
var elem = cljs.core.first(arglist__257034);
arglist__257034 = cljs.core.next(arglist__257034);
var k = cljs.core.first(arglist__257034);
var ks = cljs.core.rest(arglist__257034);
return G__257012__delegate(elem,k,ks);
});
G__257012.cljs$core$IFn$_invoke$arity$variadic = G__257012__delegate;
return G__257012;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__257036 = dommy.template.__GT_node_like.call(null,elem);G__257036.style.display = ((show_QMARK_)?"":"none");
return G__257036;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__257038 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__257038,false);
return G__257038;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__257040 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__257040,true);
return G__257040;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__257042 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__257042["constructor"] = Object);
return G__257042;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
