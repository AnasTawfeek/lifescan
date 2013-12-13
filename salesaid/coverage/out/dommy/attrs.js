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
var G__183831 = (i + class$.length);
start_from = G__183831;
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
{var temp__4090__auto___183856 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___183856))
{var class_list_183857 = temp__4090__auto___183856;var seq__183844_183858 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__183845_183859 = null;var count__183846_183860 = 0;var i__183847_183861 = 0;while(true){
if((i__183847_183861 < count__183846_183860))
{var class_183862 = cljs.core._nth.call(null,chunk__183845_183859,i__183847_183861);class_list_183857.add(class_183862);
{
var G__183863 = seq__183844_183858;
var G__183864 = chunk__183845_183859;
var G__183865 = count__183846_183860;
var G__183866 = (i__183847_183861 + 1);
seq__183844_183858 = G__183863;
chunk__183845_183859 = G__183864;
count__183846_183860 = G__183865;
i__183847_183861 = G__183866;
continue;
}
} else
{var temp__4092__auto___183867 = cljs.core.seq.call(null,seq__183844_183858);if(temp__4092__auto___183867)
{var seq__183844_183868__$1 = temp__4092__auto___183867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183844_183868__$1))
{var c__4017__auto___183869 = cljs.core.chunk_first.call(null,seq__183844_183868__$1);{
var G__183870 = cljs.core.chunk_rest.call(null,seq__183844_183868__$1);
var G__183871 = c__4017__auto___183869;
var G__183872 = cljs.core.count.call(null,c__4017__auto___183869);
var G__183873 = 0;
seq__183844_183858 = G__183870;
chunk__183845_183859 = G__183871;
count__183846_183860 = G__183872;
i__183847_183861 = G__183873;
continue;
}
} else
{var class_183874 = cljs.core.first.call(null,seq__183844_183868__$1);class_list_183857.add(class_183874);
{
var G__183875 = cljs.core.next.call(null,seq__183844_183868__$1);
var G__183876 = null;
var G__183877 = 0;
var G__183878 = 0;
seq__183844_183858 = G__183875;
chunk__183845_183859 = G__183876;
count__183846_183860 = G__183877;
i__183847_183861 = G__183878;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_183879 = elem__$1.className;var seq__183848_183880 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__183849_183881 = null;var count__183850_183882 = 0;var i__183851_183883 = 0;while(true){
if((i__183851_183883 < count__183850_183882))
{var class_183884 = cljs.core._nth.call(null,chunk__183849_183881,i__183851_183883);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_183879,class_183884)))
{} else
{elem__$1.className = (((class_name_183879 === ""))?class_183884:[cljs.core.str(class_name_183879),cljs.core.str(" "),cljs.core.str(class_183884)].join(''));
}
{
var G__183885 = seq__183848_183880;
var G__183886 = chunk__183849_183881;
var G__183887 = count__183850_183882;
var G__183888 = (i__183851_183883 + 1);
seq__183848_183880 = G__183885;
chunk__183849_183881 = G__183886;
count__183850_183882 = G__183887;
i__183851_183883 = G__183888;
continue;
}
} else
{var temp__4092__auto___183889 = cljs.core.seq.call(null,seq__183848_183880);if(temp__4092__auto___183889)
{var seq__183848_183890__$1 = temp__4092__auto___183889;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183848_183890__$1))
{var c__4017__auto___183891 = cljs.core.chunk_first.call(null,seq__183848_183890__$1);{
var G__183892 = cljs.core.chunk_rest.call(null,seq__183848_183890__$1);
var G__183893 = c__4017__auto___183891;
var G__183894 = cljs.core.count.call(null,c__4017__auto___183891);
var G__183895 = 0;
seq__183848_183880 = G__183892;
chunk__183849_183881 = G__183893;
count__183850_183882 = G__183894;
i__183851_183883 = G__183895;
continue;
}
} else
{var class_183896 = cljs.core.first.call(null,seq__183848_183890__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_183879,class_183896)))
{} else
{elem__$1.className = (((class_name_183879 === ""))?class_183896:[cljs.core.str(class_name_183879),cljs.core.str(" "),cljs.core.str(class_183896)].join(''));
}
{
var G__183897 = cljs.core.next.call(null,seq__183848_183890__$1);
var G__183898 = null;
var G__183899 = 0;
var G__183900 = 0;
seq__183848_183880 = G__183897;
chunk__183849_183881 = G__183898;
count__183850_183882 = G__183899;
i__183851_183883 = G__183900;
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
var G__183901__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__183852_183902 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__183853_183903 = null;var count__183854_183904 = 0;var i__183855_183905 = 0;while(true){
if((i__183855_183905 < count__183854_183904))
{var c_183906 = cljs.core._nth.call(null,chunk__183853_183903,i__183855_183905);add_class_BANG_.call(null,elem__$1,c_183906);
{
var G__183907 = seq__183852_183902;
var G__183908 = chunk__183853_183903;
var G__183909 = count__183854_183904;
var G__183910 = (i__183855_183905 + 1);
seq__183852_183902 = G__183907;
chunk__183853_183903 = G__183908;
count__183854_183904 = G__183909;
i__183855_183905 = G__183910;
continue;
}
} else
{var temp__4092__auto___183911 = cljs.core.seq.call(null,seq__183852_183902);if(temp__4092__auto___183911)
{var seq__183852_183912__$1 = temp__4092__auto___183911;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183852_183912__$1))
{var c__4017__auto___183913 = cljs.core.chunk_first.call(null,seq__183852_183912__$1);{
var G__183914 = cljs.core.chunk_rest.call(null,seq__183852_183912__$1);
var G__183915 = c__4017__auto___183913;
var G__183916 = cljs.core.count.call(null,c__4017__auto___183913);
var G__183917 = 0;
seq__183852_183902 = G__183914;
chunk__183853_183903 = G__183915;
count__183854_183904 = G__183916;
i__183855_183905 = G__183917;
continue;
}
} else
{var c_183918 = cljs.core.first.call(null,seq__183852_183912__$1);add_class_BANG_.call(null,elem__$1,c_183918);
{
var G__183919 = cljs.core.next.call(null,seq__183852_183912__$1);
var G__183920 = null;
var G__183921 = 0;
var G__183922 = 0;
seq__183852_183902 = G__183919;
chunk__183853_183903 = G__183920;
count__183854_183904 = G__183921;
i__183855_183905 = G__183922;
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
var G__183901 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__183901__delegate.call(this,elem,classes,more_classes);};
G__183901.cljs$lang$maxFixedArity = 2;
G__183901.cljs$lang$applyTo = (function (arglist__183923){
var elem = cljs.core.first(arglist__183923);
arglist__183923 = cljs.core.next(arglist__183923);
var classes = cljs.core.first(arglist__183923);
var more_classes = cljs.core.rest(arglist__183923);
return G__183901__delegate(elem,classes,more_classes);
});
G__183901.cljs$core$IFn$_invoke$arity$variadic = G__183901__delegate;
return G__183901;
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
var G__183924 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__183924;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___183933 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___183933))
{var class_list_183934 = temp__4090__auto___183933;class_list_183934.remove(class$__$1);
} else
{var class_name_183935 = elem__$1.className;var new_class_name_183936 = dommy.attrs.remove_class_str.call(null,class_name_183935,class$__$1);if((class_name_183935 === new_class_name_183936))
{} else
{elem__$1.className = new_class_name_183936;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__183937__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__183929 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__183930 = null;var count__183931 = 0;var i__183932 = 0;while(true){
if((i__183932 < count__183931))
{var c = cljs.core._nth.call(null,chunk__183930,i__183932);remove_class_BANG_.call(null,elem__$1,c);
{
var G__183938 = seq__183929;
var G__183939 = chunk__183930;
var G__183940 = count__183931;
var G__183941 = (i__183932 + 1);
seq__183929 = G__183938;
chunk__183930 = G__183939;
count__183931 = G__183940;
i__183932 = G__183941;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__183929);if(temp__4092__auto__)
{var seq__183929__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183929__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__183929__$1);{
var G__183942 = cljs.core.chunk_rest.call(null,seq__183929__$1);
var G__183943 = c__4017__auto__;
var G__183944 = cljs.core.count.call(null,c__4017__auto__);
var G__183945 = 0;
seq__183929 = G__183942;
chunk__183930 = G__183943;
count__183931 = G__183944;
i__183932 = G__183945;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__183929__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__183946 = cljs.core.next.call(null,seq__183929__$1);
var G__183947 = null;
var G__183948 = 0;
var G__183949 = 0;
seq__183929 = G__183946;
chunk__183930 = G__183947;
count__183931 = G__183948;
i__183932 = G__183949;
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
var G__183937 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__183937__delegate.call(this,elem,class$,classes);};
G__183937.cljs$lang$maxFixedArity = 2;
G__183937.cljs$lang$applyTo = (function (arglist__183950){
var elem = cljs.core.first(arglist__183950);
arglist__183950 = cljs.core.next(arglist__183950);
var class$ = cljs.core.first(arglist__183950);
var classes = cljs.core.rest(arglist__183950);
return G__183937__delegate(elem,class$,classes);
});
G__183937.cljs$core$IFn$_invoke$arity$variadic = G__183937__delegate;
return G__183937;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___183951 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___183951))
{var class_list_183952 = temp__4090__auto___183951;class_list_183952.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__183955){var vec__183956 = p__183955;var k = cljs.core.nth.call(null,vec__183956,0,null);var v = cljs.core.nth.call(null,vec__183956,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__183963_183969 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__183964_183970 = null;var count__183965_183971 = 0;var i__183966_183972 = 0;while(true){
if((i__183966_183972 < count__183965_183971))
{var vec__183967_183973 = cljs.core._nth.call(null,chunk__183964_183970,i__183966_183972);var k_183974 = cljs.core.nth.call(null,vec__183967_183973,0,null);var v_183975 = cljs.core.nth.call(null,vec__183967_183973,1,null);(style[cljs.core.name.call(null,k_183974)] = v_183975);
{
var G__183976 = seq__183963_183969;
var G__183977 = chunk__183964_183970;
var G__183978 = count__183965_183971;
var G__183979 = (i__183966_183972 + 1);
seq__183963_183969 = G__183976;
chunk__183964_183970 = G__183977;
count__183965_183971 = G__183978;
i__183966_183972 = G__183979;
continue;
}
} else
{var temp__4092__auto___183980 = cljs.core.seq.call(null,seq__183963_183969);if(temp__4092__auto___183980)
{var seq__183963_183981__$1 = temp__4092__auto___183980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183963_183981__$1))
{var c__4017__auto___183982 = cljs.core.chunk_first.call(null,seq__183963_183981__$1);{
var G__183983 = cljs.core.chunk_rest.call(null,seq__183963_183981__$1);
var G__183984 = c__4017__auto___183982;
var G__183985 = cljs.core.count.call(null,c__4017__auto___183982);
var G__183986 = 0;
seq__183963_183969 = G__183983;
chunk__183964_183970 = G__183984;
count__183965_183971 = G__183985;
i__183966_183972 = G__183986;
continue;
}
} else
{var vec__183968_183987 = cljs.core.first.call(null,seq__183963_183981__$1);var k_183988 = cljs.core.nth.call(null,vec__183968_183987,0,null);var v_183989 = cljs.core.nth.call(null,vec__183968_183987,1,null);(style[cljs.core.name.call(null,k_183988)] = v_183989);
{
var G__183990 = cljs.core.next.call(null,seq__183963_183981__$1);
var G__183991 = null;
var G__183992 = 0;
var G__183993 = 0;
seq__183963_183969 = G__183990;
chunk__183964_183970 = G__183991;
count__183965_183971 = G__183992;
i__183966_183972 = G__183993;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__183994){
var elem = cljs.core.first(arglist__183994);
var kvs = cljs.core.rest(arglist__183994);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__184001_184007 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__184002_184008 = null;var count__184003_184009 = 0;var i__184004_184010 = 0;while(true){
if((i__184004_184010 < count__184003_184009))
{var vec__184005_184011 = cljs.core._nth.call(null,chunk__184002_184008,i__184004_184010);var k_184012 = cljs.core.nth.call(null,vec__184005_184011,0,null);var v_184013 = cljs.core.nth.call(null,vec__184005_184011,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_184012,[cljs.core.str(v_184013),cljs.core.str("px")].join(''));
{
var G__184014 = seq__184001_184007;
var G__184015 = chunk__184002_184008;
var G__184016 = count__184003_184009;
var G__184017 = (i__184004_184010 + 1);
seq__184001_184007 = G__184014;
chunk__184002_184008 = G__184015;
count__184003_184009 = G__184016;
i__184004_184010 = G__184017;
continue;
}
} else
{var temp__4092__auto___184018 = cljs.core.seq.call(null,seq__184001_184007);if(temp__4092__auto___184018)
{var seq__184001_184019__$1 = temp__4092__auto___184018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184001_184019__$1))
{var c__4017__auto___184020 = cljs.core.chunk_first.call(null,seq__184001_184019__$1);{
var G__184021 = cljs.core.chunk_rest.call(null,seq__184001_184019__$1);
var G__184022 = c__4017__auto___184020;
var G__184023 = cljs.core.count.call(null,c__4017__auto___184020);
var G__184024 = 0;
seq__184001_184007 = G__184021;
chunk__184002_184008 = G__184022;
count__184003_184009 = G__184023;
i__184004_184010 = G__184024;
continue;
}
} else
{var vec__184006_184025 = cljs.core.first.call(null,seq__184001_184019__$1);var k_184026 = cljs.core.nth.call(null,vec__184006_184025,0,null);var v_184027 = cljs.core.nth.call(null,vec__184006_184025,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_184026,[cljs.core.str(v_184027),cljs.core.str("px")].join(''));
{
var G__184028 = cljs.core.next.call(null,seq__184001_184019__$1);
var G__184029 = null;
var G__184030 = 0;
var G__184031 = 0;
seq__184001_184007 = G__184028;
chunk__184002_184008 = G__184029;
count__184003_184009 = G__184030;
i__184004_184010 = G__184031;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__184032){
var elem = cljs.core.first(arglist__184032);
var kvs = cljs.core.rest(arglist__184032);
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
{var G__184041 = dommy.template.__GT_node_like.call(null,elem);(G__184041[cljs.core.name.call(null,k)] = v);
return G__184041;
} else
{var G__184042 = dommy.template.__GT_node_like.call(null,elem);G__184042.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__184042;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__184049__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__184043_184050 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__184044_184051 = null;var count__184045_184052 = 0;var i__184046_184053 = 0;while(true){
if((i__184046_184053 < count__184045_184052))
{var vec__184047_184054 = cljs.core._nth.call(null,chunk__184044_184051,i__184046_184053);var k_184055__$1 = cljs.core.nth.call(null,vec__184047_184054,0,null);var v_184056__$1 = cljs.core.nth.call(null,vec__184047_184054,1,null);set_attr_BANG_.call(null,elem__$1,k_184055__$1,v_184056__$1);
{
var G__184057 = seq__184043_184050;
var G__184058 = chunk__184044_184051;
var G__184059 = count__184045_184052;
var G__184060 = (i__184046_184053 + 1);
seq__184043_184050 = G__184057;
chunk__184044_184051 = G__184058;
count__184045_184052 = G__184059;
i__184046_184053 = G__184060;
continue;
}
} else
{var temp__4092__auto___184061 = cljs.core.seq.call(null,seq__184043_184050);if(temp__4092__auto___184061)
{var seq__184043_184062__$1 = temp__4092__auto___184061;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184043_184062__$1))
{var c__4017__auto___184063 = cljs.core.chunk_first.call(null,seq__184043_184062__$1);{
var G__184064 = cljs.core.chunk_rest.call(null,seq__184043_184062__$1);
var G__184065 = c__4017__auto___184063;
var G__184066 = cljs.core.count.call(null,c__4017__auto___184063);
var G__184067 = 0;
seq__184043_184050 = G__184064;
chunk__184044_184051 = G__184065;
count__184045_184052 = G__184066;
i__184046_184053 = G__184067;
continue;
}
} else
{var vec__184048_184068 = cljs.core.first.call(null,seq__184043_184062__$1);var k_184069__$1 = cljs.core.nth.call(null,vec__184048_184068,0,null);var v_184070__$1 = cljs.core.nth.call(null,vec__184048_184068,1,null);set_attr_BANG_.call(null,elem__$1,k_184069__$1,v_184070__$1);
{
var G__184071 = cljs.core.next.call(null,seq__184043_184062__$1);
var G__184072 = null;
var G__184073 = 0;
var G__184074 = 0;
seq__184043_184050 = G__184071;
chunk__184044_184051 = G__184072;
count__184045_184052 = G__184073;
i__184046_184053 = G__184074;
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
var G__184049 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__184049__delegate.call(this,elem,k,v,kvs);};
G__184049.cljs$lang$maxFixedArity = 3;
G__184049.cljs$lang$applyTo = (function (arglist__184075){
var elem = cljs.core.first(arglist__184075);
arglist__184075 = cljs.core.next(arglist__184075);
var k = cljs.core.first(arglist__184075);
arglist__184075 = cljs.core.next(arglist__184075);
var v = cljs.core.first(arglist__184075);
var kvs = cljs.core.rest(arglist__184075);
return G__184049__delegate(elem,k,v,kvs);
});
G__184049.cljs$core$IFn$_invoke$arity$variadic = G__184049__delegate;
return G__184049;
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
var G__184084__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__184080_184085 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__184081_184086 = null;var count__184082_184087 = 0;var i__184083_184088 = 0;while(true){
if((i__184083_184088 < count__184082_184087))
{var k_184089__$1 = cljs.core._nth.call(null,chunk__184081_184086,i__184083_184088);remove_attr_BANG_.call(null,elem__$1,k_184089__$1);
{
var G__184090 = seq__184080_184085;
var G__184091 = chunk__184081_184086;
var G__184092 = count__184082_184087;
var G__184093 = (i__184083_184088 + 1);
seq__184080_184085 = G__184090;
chunk__184081_184086 = G__184091;
count__184082_184087 = G__184092;
i__184083_184088 = G__184093;
continue;
}
} else
{var temp__4092__auto___184094 = cljs.core.seq.call(null,seq__184080_184085);if(temp__4092__auto___184094)
{var seq__184080_184095__$1 = temp__4092__auto___184094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184080_184095__$1))
{var c__4017__auto___184096 = cljs.core.chunk_first.call(null,seq__184080_184095__$1);{
var G__184097 = cljs.core.chunk_rest.call(null,seq__184080_184095__$1);
var G__184098 = c__4017__auto___184096;
var G__184099 = cljs.core.count.call(null,c__4017__auto___184096);
var G__184100 = 0;
seq__184080_184085 = G__184097;
chunk__184081_184086 = G__184098;
count__184082_184087 = G__184099;
i__184083_184088 = G__184100;
continue;
}
} else
{var k_184101__$1 = cljs.core.first.call(null,seq__184080_184095__$1);remove_attr_BANG_.call(null,elem__$1,k_184101__$1);
{
var G__184102 = cljs.core.next.call(null,seq__184080_184095__$1);
var G__184103 = null;
var G__184104 = 0;
var G__184105 = 0;
seq__184080_184085 = G__184102;
chunk__184081_184086 = G__184103;
count__184082_184087 = G__184104;
i__184083_184088 = G__184105;
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
var G__184084 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__184084__delegate.call(this,elem,k,ks);};
G__184084.cljs$lang$maxFixedArity = 2;
G__184084.cljs$lang$applyTo = (function (arglist__184106){
var elem = cljs.core.first(arglist__184106);
arglist__184106 = cljs.core.next(arglist__184106);
var k = cljs.core.first(arglist__184106);
var ks = cljs.core.rest(arglist__184106);
return G__184084__delegate(elem,k,ks);
});
G__184084.cljs$core$IFn$_invoke$arity$variadic = G__184084__delegate;
return G__184084;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__184108 = dommy.template.__GT_node_like.call(null,elem);G__184108.style.display = ((show_QMARK_)?"":"none");
return G__184108;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__184110 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__184110,false);
return G__184110;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__184112 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__184112,true);
return G__184112;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__184114 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__184114["constructor"] = Object);
return G__184114;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
