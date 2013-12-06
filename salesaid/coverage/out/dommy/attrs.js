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
var G__44797 = (i + class$.length);
start_from = G__44797;
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
{var temp__4090__auto___44822 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___44822))
{var class_list_44823 = temp__4090__auto___44822;var seq__44810_44824 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__44811_44825 = null;var count__44812_44826 = 0;var i__44813_44827 = 0;while(true){
if((i__44813_44827 < count__44812_44826))
{var class_44828 = cljs.core._nth.call(null,chunk__44811_44825,i__44813_44827);class_list_44823.add(class_44828);
{
var G__44829 = seq__44810_44824;
var G__44830 = chunk__44811_44825;
var G__44831 = count__44812_44826;
var G__44832 = (i__44813_44827 + 1);
seq__44810_44824 = G__44829;
chunk__44811_44825 = G__44830;
count__44812_44826 = G__44831;
i__44813_44827 = G__44832;
continue;
}
} else
{var temp__4092__auto___44833 = cljs.core.seq.call(null,seq__44810_44824);if(temp__4092__auto___44833)
{var seq__44810_44834__$1 = temp__4092__auto___44833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44810_44834__$1))
{var c__4017__auto___44835 = cljs.core.chunk_first.call(null,seq__44810_44834__$1);{
var G__44836 = cljs.core.chunk_rest.call(null,seq__44810_44834__$1);
var G__44837 = c__4017__auto___44835;
var G__44838 = cljs.core.count.call(null,c__4017__auto___44835);
var G__44839 = 0;
seq__44810_44824 = G__44836;
chunk__44811_44825 = G__44837;
count__44812_44826 = G__44838;
i__44813_44827 = G__44839;
continue;
}
} else
{var class_44840 = cljs.core.first.call(null,seq__44810_44834__$1);class_list_44823.add(class_44840);
{
var G__44841 = cljs.core.next.call(null,seq__44810_44834__$1);
var G__44842 = null;
var G__44843 = 0;
var G__44844 = 0;
seq__44810_44824 = G__44841;
chunk__44811_44825 = G__44842;
count__44812_44826 = G__44843;
i__44813_44827 = G__44844;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_44845 = elem__$1.className;var seq__44814_44846 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__44815_44847 = null;var count__44816_44848 = 0;var i__44817_44849 = 0;while(true){
if((i__44817_44849 < count__44816_44848))
{var class_44850 = cljs.core._nth.call(null,chunk__44815_44847,i__44817_44849);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_44845,class_44850)))
{} else
{elem__$1.className = (((class_name_44845 === ""))?class_44850:[cljs.core.str(class_name_44845),cljs.core.str(" "),cljs.core.str(class_44850)].join(''));
}
{
var G__44851 = seq__44814_44846;
var G__44852 = chunk__44815_44847;
var G__44853 = count__44816_44848;
var G__44854 = (i__44817_44849 + 1);
seq__44814_44846 = G__44851;
chunk__44815_44847 = G__44852;
count__44816_44848 = G__44853;
i__44817_44849 = G__44854;
continue;
}
} else
{var temp__4092__auto___44855 = cljs.core.seq.call(null,seq__44814_44846);if(temp__4092__auto___44855)
{var seq__44814_44856__$1 = temp__4092__auto___44855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44814_44856__$1))
{var c__4017__auto___44857 = cljs.core.chunk_first.call(null,seq__44814_44856__$1);{
var G__44858 = cljs.core.chunk_rest.call(null,seq__44814_44856__$1);
var G__44859 = c__4017__auto___44857;
var G__44860 = cljs.core.count.call(null,c__4017__auto___44857);
var G__44861 = 0;
seq__44814_44846 = G__44858;
chunk__44815_44847 = G__44859;
count__44816_44848 = G__44860;
i__44817_44849 = G__44861;
continue;
}
} else
{var class_44862 = cljs.core.first.call(null,seq__44814_44856__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_44845,class_44862)))
{} else
{elem__$1.className = (((class_name_44845 === ""))?class_44862:[cljs.core.str(class_name_44845),cljs.core.str(" "),cljs.core.str(class_44862)].join(''));
}
{
var G__44863 = cljs.core.next.call(null,seq__44814_44856__$1);
var G__44864 = null;
var G__44865 = 0;
var G__44866 = 0;
seq__44814_44846 = G__44863;
chunk__44815_44847 = G__44864;
count__44816_44848 = G__44865;
i__44817_44849 = G__44866;
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
var G__44867__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__44818_44868 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__44819_44869 = null;var count__44820_44870 = 0;var i__44821_44871 = 0;while(true){
if((i__44821_44871 < count__44820_44870))
{var c_44872 = cljs.core._nth.call(null,chunk__44819_44869,i__44821_44871);add_class_BANG_.call(null,elem__$1,c_44872);
{
var G__44873 = seq__44818_44868;
var G__44874 = chunk__44819_44869;
var G__44875 = count__44820_44870;
var G__44876 = (i__44821_44871 + 1);
seq__44818_44868 = G__44873;
chunk__44819_44869 = G__44874;
count__44820_44870 = G__44875;
i__44821_44871 = G__44876;
continue;
}
} else
{var temp__4092__auto___44877 = cljs.core.seq.call(null,seq__44818_44868);if(temp__4092__auto___44877)
{var seq__44818_44878__$1 = temp__4092__auto___44877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44818_44878__$1))
{var c__4017__auto___44879 = cljs.core.chunk_first.call(null,seq__44818_44878__$1);{
var G__44880 = cljs.core.chunk_rest.call(null,seq__44818_44878__$1);
var G__44881 = c__4017__auto___44879;
var G__44882 = cljs.core.count.call(null,c__4017__auto___44879);
var G__44883 = 0;
seq__44818_44868 = G__44880;
chunk__44819_44869 = G__44881;
count__44820_44870 = G__44882;
i__44821_44871 = G__44883;
continue;
}
} else
{var c_44884 = cljs.core.first.call(null,seq__44818_44878__$1);add_class_BANG_.call(null,elem__$1,c_44884);
{
var G__44885 = cljs.core.next.call(null,seq__44818_44878__$1);
var G__44886 = null;
var G__44887 = 0;
var G__44888 = 0;
seq__44818_44868 = G__44885;
chunk__44819_44869 = G__44886;
count__44820_44870 = G__44887;
i__44821_44871 = G__44888;
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
var G__44867 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44867__delegate.call(this,elem,classes,more_classes);};
G__44867.cljs$lang$maxFixedArity = 2;
G__44867.cljs$lang$applyTo = (function (arglist__44889){
var elem = cljs.core.first(arglist__44889);
arglist__44889 = cljs.core.next(arglist__44889);
var classes = cljs.core.first(arglist__44889);
var more_classes = cljs.core.rest(arglist__44889);
return G__44867__delegate(elem,classes,more_classes);
});
G__44867.cljs$core$IFn$_invoke$arity$variadic = G__44867__delegate;
return G__44867;
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
var G__44890 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__44890;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___44899 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___44899))
{var class_list_44900 = temp__4090__auto___44899;class_list_44900.remove(class$__$1);
} else
{var class_name_44901 = elem__$1.className;var new_class_name_44902 = dommy.attrs.remove_class_str.call(null,class_name_44901,class$__$1);if((class_name_44901 === new_class_name_44902))
{} else
{elem__$1.className = new_class_name_44902;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__44903__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__44895 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__44896 = null;var count__44897 = 0;var i__44898 = 0;while(true){
if((i__44898 < count__44897))
{var c = cljs.core._nth.call(null,chunk__44896,i__44898);remove_class_BANG_.call(null,elem__$1,c);
{
var G__44904 = seq__44895;
var G__44905 = chunk__44896;
var G__44906 = count__44897;
var G__44907 = (i__44898 + 1);
seq__44895 = G__44904;
chunk__44896 = G__44905;
count__44897 = G__44906;
i__44898 = G__44907;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44895);if(temp__4092__auto__)
{var seq__44895__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44895__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__44895__$1);{
var G__44908 = cljs.core.chunk_rest.call(null,seq__44895__$1);
var G__44909 = c__4017__auto__;
var G__44910 = cljs.core.count.call(null,c__4017__auto__);
var G__44911 = 0;
seq__44895 = G__44908;
chunk__44896 = G__44909;
count__44897 = G__44910;
i__44898 = G__44911;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__44895__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__44912 = cljs.core.next.call(null,seq__44895__$1);
var G__44913 = null;
var G__44914 = 0;
var G__44915 = 0;
seq__44895 = G__44912;
chunk__44896 = G__44913;
count__44897 = G__44914;
i__44898 = G__44915;
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
var G__44903 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44903__delegate.call(this,elem,class$,classes);};
G__44903.cljs$lang$maxFixedArity = 2;
G__44903.cljs$lang$applyTo = (function (arglist__44916){
var elem = cljs.core.first(arglist__44916);
arglist__44916 = cljs.core.next(arglist__44916);
var class$ = cljs.core.first(arglist__44916);
var classes = cljs.core.rest(arglist__44916);
return G__44903__delegate(elem,class$,classes);
});
G__44903.cljs$core$IFn$_invoke$arity$variadic = G__44903__delegate;
return G__44903;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___44917 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___44917))
{var class_list_44918 = temp__4090__auto___44917;class_list_44918.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__44921){var vec__44922 = p__44921;var k = cljs.core.nth.call(null,vec__44922,0,null);var v = cljs.core.nth.call(null,vec__44922,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__44929_44935 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__44930_44936 = null;var count__44931_44937 = 0;var i__44932_44938 = 0;while(true){
if((i__44932_44938 < count__44931_44937))
{var vec__44933_44939 = cljs.core._nth.call(null,chunk__44930_44936,i__44932_44938);var k_44940 = cljs.core.nth.call(null,vec__44933_44939,0,null);var v_44941 = cljs.core.nth.call(null,vec__44933_44939,1,null);(style[cljs.core.name.call(null,k_44940)] = v_44941);
{
var G__44942 = seq__44929_44935;
var G__44943 = chunk__44930_44936;
var G__44944 = count__44931_44937;
var G__44945 = (i__44932_44938 + 1);
seq__44929_44935 = G__44942;
chunk__44930_44936 = G__44943;
count__44931_44937 = G__44944;
i__44932_44938 = G__44945;
continue;
}
} else
{var temp__4092__auto___44946 = cljs.core.seq.call(null,seq__44929_44935);if(temp__4092__auto___44946)
{var seq__44929_44947__$1 = temp__4092__auto___44946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44929_44947__$1))
{var c__4017__auto___44948 = cljs.core.chunk_first.call(null,seq__44929_44947__$1);{
var G__44949 = cljs.core.chunk_rest.call(null,seq__44929_44947__$1);
var G__44950 = c__4017__auto___44948;
var G__44951 = cljs.core.count.call(null,c__4017__auto___44948);
var G__44952 = 0;
seq__44929_44935 = G__44949;
chunk__44930_44936 = G__44950;
count__44931_44937 = G__44951;
i__44932_44938 = G__44952;
continue;
}
} else
{var vec__44934_44953 = cljs.core.first.call(null,seq__44929_44947__$1);var k_44954 = cljs.core.nth.call(null,vec__44934_44953,0,null);var v_44955 = cljs.core.nth.call(null,vec__44934_44953,1,null);(style[cljs.core.name.call(null,k_44954)] = v_44955);
{
var G__44956 = cljs.core.next.call(null,seq__44929_44947__$1);
var G__44957 = null;
var G__44958 = 0;
var G__44959 = 0;
seq__44929_44935 = G__44956;
chunk__44930_44936 = G__44957;
count__44931_44937 = G__44958;
i__44932_44938 = G__44959;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__44960){
var elem = cljs.core.first(arglist__44960);
var kvs = cljs.core.rest(arglist__44960);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__44967_44973 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__44968_44974 = null;var count__44969_44975 = 0;var i__44970_44976 = 0;while(true){
if((i__44970_44976 < count__44969_44975))
{var vec__44971_44977 = cljs.core._nth.call(null,chunk__44968_44974,i__44970_44976);var k_44978 = cljs.core.nth.call(null,vec__44971_44977,0,null);var v_44979 = cljs.core.nth.call(null,vec__44971_44977,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_44978,[cljs.core.str(v_44979),cljs.core.str("px")].join(''));
{
var G__44980 = seq__44967_44973;
var G__44981 = chunk__44968_44974;
var G__44982 = count__44969_44975;
var G__44983 = (i__44970_44976 + 1);
seq__44967_44973 = G__44980;
chunk__44968_44974 = G__44981;
count__44969_44975 = G__44982;
i__44970_44976 = G__44983;
continue;
}
} else
{var temp__4092__auto___44984 = cljs.core.seq.call(null,seq__44967_44973);if(temp__4092__auto___44984)
{var seq__44967_44985__$1 = temp__4092__auto___44984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44967_44985__$1))
{var c__4017__auto___44986 = cljs.core.chunk_first.call(null,seq__44967_44985__$1);{
var G__44987 = cljs.core.chunk_rest.call(null,seq__44967_44985__$1);
var G__44988 = c__4017__auto___44986;
var G__44989 = cljs.core.count.call(null,c__4017__auto___44986);
var G__44990 = 0;
seq__44967_44973 = G__44987;
chunk__44968_44974 = G__44988;
count__44969_44975 = G__44989;
i__44970_44976 = G__44990;
continue;
}
} else
{var vec__44972_44991 = cljs.core.first.call(null,seq__44967_44985__$1);var k_44992 = cljs.core.nth.call(null,vec__44972_44991,0,null);var v_44993 = cljs.core.nth.call(null,vec__44972_44991,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_44992,[cljs.core.str(v_44993),cljs.core.str("px")].join(''));
{
var G__44994 = cljs.core.next.call(null,seq__44967_44985__$1);
var G__44995 = null;
var G__44996 = 0;
var G__44997 = 0;
seq__44967_44973 = G__44994;
chunk__44968_44974 = G__44995;
count__44969_44975 = G__44996;
i__44970_44976 = G__44997;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__44998){
var elem = cljs.core.first(arglist__44998);
var kvs = cljs.core.rest(arglist__44998);
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
{var G__45007 = dommy.template.__GT_node_like.call(null,elem);(G__45007[cljs.core.name.call(null,k)] = v);
return G__45007;
} else
{var G__45008 = dommy.template.__GT_node_like.call(null,elem);G__45008.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__45008;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__45015__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45009_45016 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__45010_45017 = null;var count__45011_45018 = 0;var i__45012_45019 = 0;while(true){
if((i__45012_45019 < count__45011_45018))
{var vec__45013_45020 = cljs.core._nth.call(null,chunk__45010_45017,i__45012_45019);var k_45021__$1 = cljs.core.nth.call(null,vec__45013_45020,0,null);var v_45022__$1 = cljs.core.nth.call(null,vec__45013_45020,1,null);set_attr_BANG_.call(null,elem__$1,k_45021__$1,v_45022__$1);
{
var G__45023 = seq__45009_45016;
var G__45024 = chunk__45010_45017;
var G__45025 = count__45011_45018;
var G__45026 = (i__45012_45019 + 1);
seq__45009_45016 = G__45023;
chunk__45010_45017 = G__45024;
count__45011_45018 = G__45025;
i__45012_45019 = G__45026;
continue;
}
} else
{var temp__4092__auto___45027 = cljs.core.seq.call(null,seq__45009_45016);if(temp__4092__auto___45027)
{var seq__45009_45028__$1 = temp__4092__auto___45027;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45009_45028__$1))
{var c__4017__auto___45029 = cljs.core.chunk_first.call(null,seq__45009_45028__$1);{
var G__45030 = cljs.core.chunk_rest.call(null,seq__45009_45028__$1);
var G__45031 = c__4017__auto___45029;
var G__45032 = cljs.core.count.call(null,c__4017__auto___45029);
var G__45033 = 0;
seq__45009_45016 = G__45030;
chunk__45010_45017 = G__45031;
count__45011_45018 = G__45032;
i__45012_45019 = G__45033;
continue;
}
} else
{var vec__45014_45034 = cljs.core.first.call(null,seq__45009_45028__$1);var k_45035__$1 = cljs.core.nth.call(null,vec__45014_45034,0,null);var v_45036__$1 = cljs.core.nth.call(null,vec__45014_45034,1,null);set_attr_BANG_.call(null,elem__$1,k_45035__$1,v_45036__$1);
{
var G__45037 = cljs.core.next.call(null,seq__45009_45028__$1);
var G__45038 = null;
var G__45039 = 0;
var G__45040 = 0;
seq__45009_45016 = G__45037;
chunk__45010_45017 = G__45038;
count__45011_45018 = G__45039;
i__45012_45019 = G__45040;
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
var G__45015 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45015__delegate.call(this,elem,k,v,kvs);};
G__45015.cljs$lang$maxFixedArity = 3;
G__45015.cljs$lang$applyTo = (function (arglist__45041){
var elem = cljs.core.first(arglist__45041);
arglist__45041 = cljs.core.next(arglist__45041);
var k = cljs.core.first(arglist__45041);
arglist__45041 = cljs.core.next(arglist__45041);
var v = cljs.core.first(arglist__45041);
var kvs = cljs.core.rest(arglist__45041);
return G__45015__delegate(elem,k,v,kvs);
});
G__45015.cljs$core$IFn$_invoke$arity$variadic = G__45015__delegate;
return G__45015;
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
var G__45050__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45046_45051 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__45047_45052 = null;var count__45048_45053 = 0;var i__45049_45054 = 0;while(true){
if((i__45049_45054 < count__45048_45053))
{var k_45055__$1 = cljs.core._nth.call(null,chunk__45047_45052,i__45049_45054);remove_attr_BANG_.call(null,elem__$1,k_45055__$1);
{
var G__45056 = seq__45046_45051;
var G__45057 = chunk__45047_45052;
var G__45058 = count__45048_45053;
var G__45059 = (i__45049_45054 + 1);
seq__45046_45051 = G__45056;
chunk__45047_45052 = G__45057;
count__45048_45053 = G__45058;
i__45049_45054 = G__45059;
continue;
}
} else
{var temp__4092__auto___45060 = cljs.core.seq.call(null,seq__45046_45051);if(temp__4092__auto___45060)
{var seq__45046_45061__$1 = temp__4092__auto___45060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45046_45061__$1))
{var c__4017__auto___45062 = cljs.core.chunk_first.call(null,seq__45046_45061__$1);{
var G__45063 = cljs.core.chunk_rest.call(null,seq__45046_45061__$1);
var G__45064 = c__4017__auto___45062;
var G__45065 = cljs.core.count.call(null,c__4017__auto___45062);
var G__45066 = 0;
seq__45046_45051 = G__45063;
chunk__45047_45052 = G__45064;
count__45048_45053 = G__45065;
i__45049_45054 = G__45066;
continue;
}
} else
{var k_45067__$1 = cljs.core.first.call(null,seq__45046_45061__$1);remove_attr_BANG_.call(null,elem__$1,k_45067__$1);
{
var G__45068 = cljs.core.next.call(null,seq__45046_45061__$1);
var G__45069 = null;
var G__45070 = 0;
var G__45071 = 0;
seq__45046_45051 = G__45068;
chunk__45047_45052 = G__45069;
count__45048_45053 = G__45070;
i__45049_45054 = G__45071;
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
var G__45050 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45050__delegate.call(this,elem,k,ks);};
G__45050.cljs$lang$maxFixedArity = 2;
G__45050.cljs$lang$applyTo = (function (arglist__45072){
var elem = cljs.core.first(arglist__45072);
arglist__45072 = cljs.core.next(arglist__45072);
var k = cljs.core.first(arglist__45072);
var ks = cljs.core.rest(arglist__45072);
return G__45050__delegate(elem,k,ks);
});
G__45050.cljs$core$IFn$_invoke$arity$variadic = G__45050__delegate;
return G__45050;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__45074 = dommy.template.__GT_node_like.call(null,elem);G__45074.style.display = ((show_QMARK_)?"":"none");
return G__45074;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__45076 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__45076,false);
return G__45076;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__45078 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__45078,true);
return G__45078;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__45080 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__45080["constructor"] = Object);
return G__45080;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
