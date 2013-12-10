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
var G__66865 = (i + class$.length);
start_from = G__66865;
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
{var temp__4090__auto___66890 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___66890))
{var class_list_66891 = temp__4090__auto___66890;var seq__66878_66892 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__66879_66893 = null;var count__66880_66894 = 0;var i__66881_66895 = 0;while(true){
if((i__66881_66895 < count__66880_66894))
{var class_66896 = cljs.core._nth.call(null,chunk__66879_66893,i__66881_66895);class_list_66891.add(class_66896);
{
var G__66897 = seq__66878_66892;
var G__66898 = chunk__66879_66893;
var G__66899 = count__66880_66894;
var G__66900 = (i__66881_66895 + 1);
seq__66878_66892 = G__66897;
chunk__66879_66893 = G__66898;
count__66880_66894 = G__66899;
i__66881_66895 = G__66900;
continue;
}
} else
{var temp__4092__auto___66901 = cljs.core.seq.call(null,seq__66878_66892);if(temp__4092__auto___66901)
{var seq__66878_66902__$1 = temp__4092__auto___66901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66878_66902__$1))
{var c__4017__auto___66903 = cljs.core.chunk_first.call(null,seq__66878_66902__$1);{
var G__66904 = cljs.core.chunk_rest.call(null,seq__66878_66902__$1);
var G__66905 = c__4017__auto___66903;
var G__66906 = cljs.core.count.call(null,c__4017__auto___66903);
var G__66907 = 0;
seq__66878_66892 = G__66904;
chunk__66879_66893 = G__66905;
count__66880_66894 = G__66906;
i__66881_66895 = G__66907;
continue;
}
} else
{var class_66908 = cljs.core.first.call(null,seq__66878_66902__$1);class_list_66891.add(class_66908);
{
var G__66909 = cljs.core.next.call(null,seq__66878_66902__$1);
var G__66910 = null;
var G__66911 = 0;
var G__66912 = 0;
seq__66878_66892 = G__66909;
chunk__66879_66893 = G__66910;
count__66880_66894 = G__66911;
i__66881_66895 = G__66912;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_66913 = elem__$1.className;var seq__66882_66914 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__66883_66915 = null;var count__66884_66916 = 0;var i__66885_66917 = 0;while(true){
if((i__66885_66917 < count__66884_66916))
{var class_66918 = cljs.core._nth.call(null,chunk__66883_66915,i__66885_66917);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_66913,class_66918)))
{} else
{elem__$1.className = (((class_name_66913 === ""))?class_66918:[cljs.core.str(class_name_66913),cljs.core.str(" "),cljs.core.str(class_66918)].join(''));
}
{
var G__66919 = seq__66882_66914;
var G__66920 = chunk__66883_66915;
var G__66921 = count__66884_66916;
var G__66922 = (i__66885_66917 + 1);
seq__66882_66914 = G__66919;
chunk__66883_66915 = G__66920;
count__66884_66916 = G__66921;
i__66885_66917 = G__66922;
continue;
}
} else
{var temp__4092__auto___66923 = cljs.core.seq.call(null,seq__66882_66914);if(temp__4092__auto___66923)
{var seq__66882_66924__$1 = temp__4092__auto___66923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66882_66924__$1))
{var c__4017__auto___66925 = cljs.core.chunk_first.call(null,seq__66882_66924__$1);{
var G__66926 = cljs.core.chunk_rest.call(null,seq__66882_66924__$1);
var G__66927 = c__4017__auto___66925;
var G__66928 = cljs.core.count.call(null,c__4017__auto___66925);
var G__66929 = 0;
seq__66882_66914 = G__66926;
chunk__66883_66915 = G__66927;
count__66884_66916 = G__66928;
i__66885_66917 = G__66929;
continue;
}
} else
{var class_66930 = cljs.core.first.call(null,seq__66882_66924__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_66913,class_66930)))
{} else
{elem__$1.className = (((class_name_66913 === ""))?class_66930:[cljs.core.str(class_name_66913),cljs.core.str(" "),cljs.core.str(class_66930)].join(''));
}
{
var G__66931 = cljs.core.next.call(null,seq__66882_66924__$1);
var G__66932 = null;
var G__66933 = 0;
var G__66934 = 0;
seq__66882_66914 = G__66931;
chunk__66883_66915 = G__66932;
count__66884_66916 = G__66933;
i__66885_66917 = G__66934;
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
var G__66935__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__66886_66936 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__66887_66937 = null;var count__66888_66938 = 0;var i__66889_66939 = 0;while(true){
if((i__66889_66939 < count__66888_66938))
{var c_66940 = cljs.core._nth.call(null,chunk__66887_66937,i__66889_66939);add_class_BANG_.call(null,elem__$1,c_66940);
{
var G__66941 = seq__66886_66936;
var G__66942 = chunk__66887_66937;
var G__66943 = count__66888_66938;
var G__66944 = (i__66889_66939 + 1);
seq__66886_66936 = G__66941;
chunk__66887_66937 = G__66942;
count__66888_66938 = G__66943;
i__66889_66939 = G__66944;
continue;
}
} else
{var temp__4092__auto___66945 = cljs.core.seq.call(null,seq__66886_66936);if(temp__4092__auto___66945)
{var seq__66886_66946__$1 = temp__4092__auto___66945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66886_66946__$1))
{var c__4017__auto___66947 = cljs.core.chunk_first.call(null,seq__66886_66946__$1);{
var G__66948 = cljs.core.chunk_rest.call(null,seq__66886_66946__$1);
var G__66949 = c__4017__auto___66947;
var G__66950 = cljs.core.count.call(null,c__4017__auto___66947);
var G__66951 = 0;
seq__66886_66936 = G__66948;
chunk__66887_66937 = G__66949;
count__66888_66938 = G__66950;
i__66889_66939 = G__66951;
continue;
}
} else
{var c_66952 = cljs.core.first.call(null,seq__66886_66946__$1);add_class_BANG_.call(null,elem__$1,c_66952);
{
var G__66953 = cljs.core.next.call(null,seq__66886_66946__$1);
var G__66954 = null;
var G__66955 = 0;
var G__66956 = 0;
seq__66886_66936 = G__66953;
chunk__66887_66937 = G__66954;
count__66888_66938 = G__66955;
i__66889_66939 = G__66956;
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
var G__66935 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__66935__delegate.call(this,elem,classes,more_classes);};
G__66935.cljs$lang$maxFixedArity = 2;
G__66935.cljs$lang$applyTo = (function (arglist__66957){
var elem = cljs.core.first(arglist__66957);
arglist__66957 = cljs.core.next(arglist__66957);
var classes = cljs.core.first(arglist__66957);
var more_classes = cljs.core.rest(arglist__66957);
return G__66935__delegate(elem,classes,more_classes);
});
G__66935.cljs$core$IFn$_invoke$arity$variadic = G__66935__delegate;
return G__66935;
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
var G__66958 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__66958;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___66967 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___66967))
{var class_list_66968 = temp__4090__auto___66967;class_list_66968.remove(class$__$1);
} else
{var class_name_66969 = elem__$1.className;var new_class_name_66970 = dommy.attrs.remove_class_str.call(null,class_name_66969,class$__$1);if((class_name_66969 === new_class_name_66970))
{} else
{elem__$1.className = new_class_name_66970;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__66971__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__66963 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__66964 = null;var count__66965 = 0;var i__66966 = 0;while(true){
if((i__66966 < count__66965))
{var c = cljs.core._nth.call(null,chunk__66964,i__66966);remove_class_BANG_.call(null,elem__$1,c);
{
var G__66972 = seq__66963;
var G__66973 = chunk__66964;
var G__66974 = count__66965;
var G__66975 = (i__66966 + 1);
seq__66963 = G__66972;
chunk__66964 = G__66973;
count__66965 = G__66974;
i__66966 = G__66975;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__66963);if(temp__4092__auto__)
{var seq__66963__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66963__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__66963__$1);{
var G__66976 = cljs.core.chunk_rest.call(null,seq__66963__$1);
var G__66977 = c__4017__auto__;
var G__66978 = cljs.core.count.call(null,c__4017__auto__);
var G__66979 = 0;
seq__66963 = G__66976;
chunk__66964 = G__66977;
count__66965 = G__66978;
i__66966 = G__66979;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__66963__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__66980 = cljs.core.next.call(null,seq__66963__$1);
var G__66981 = null;
var G__66982 = 0;
var G__66983 = 0;
seq__66963 = G__66980;
chunk__66964 = G__66981;
count__66965 = G__66982;
i__66966 = G__66983;
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
var G__66971 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__66971__delegate.call(this,elem,class$,classes);};
G__66971.cljs$lang$maxFixedArity = 2;
G__66971.cljs$lang$applyTo = (function (arglist__66984){
var elem = cljs.core.first(arglist__66984);
arglist__66984 = cljs.core.next(arglist__66984);
var class$ = cljs.core.first(arglist__66984);
var classes = cljs.core.rest(arglist__66984);
return G__66971__delegate(elem,class$,classes);
});
G__66971.cljs$core$IFn$_invoke$arity$variadic = G__66971__delegate;
return G__66971;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___66985 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___66985))
{var class_list_66986 = temp__4090__auto___66985;class_list_66986.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__66989){var vec__66990 = p__66989;var k = cljs.core.nth.call(null,vec__66990,0,null);var v = cljs.core.nth.call(null,vec__66990,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__66997_67003 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__66998_67004 = null;var count__66999_67005 = 0;var i__67000_67006 = 0;while(true){
if((i__67000_67006 < count__66999_67005))
{var vec__67001_67007 = cljs.core._nth.call(null,chunk__66998_67004,i__67000_67006);var k_67008 = cljs.core.nth.call(null,vec__67001_67007,0,null);var v_67009 = cljs.core.nth.call(null,vec__67001_67007,1,null);(style[cljs.core.name.call(null,k_67008)] = v_67009);
{
var G__67010 = seq__66997_67003;
var G__67011 = chunk__66998_67004;
var G__67012 = count__66999_67005;
var G__67013 = (i__67000_67006 + 1);
seq__66997_67003 = G__67010;
chunk__66998_67004 = G__67011;
count__66999_67005 = G__67012;
i__67000_67006 = G__67013;
continue;
}
} else
{var temp__4092__auto___67014 = cljs.core.seq.call(null,seq__66997_67003);if(temp__4092__auto___67014)
{var seq__66997_67015__$1 = temp__4092__auto___67014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66997_67015__$1))
{var c__4017__auto___67016 = cljs.core.chunk_first.call(null,seq__66997_67015__$1);{
var G__67017 = cljs.core.chunk_rest.call(null,seq__66997_67015__$1);
var G__67018 = c__4017__auto___67016;
var G__67019 = cljs.core.count.call(null,c__4017__auto___67016);
var G__67020 = 0;
seq__66997_67003 = G__67017;
chunk__66998_67004 = G__67018;
count__66999_67005 = G__67019;
i__67000_67006 = G__67020;
continue;
}
} else
{var vec__67002_67021 = cljs.core.first.call(null,seq__66997_67015__$1);var k_67022 = cljs.core.nth.call(null,vec__67002_67021,0,null);var v_67023 = cljs.core.nth.call(null,vec__67002_67021,1,null);(style[cljs.core.name.call(null,k_67022)] = v_67023);
{
var G__67024 = cljs.core.next.call(null,seq__66997_67015__$1);
var G__67025 = null;
var G__67026 = 0;
var G__67027 = 0;
seq__66997_67003 = G__67024;
chunk__66998_67004 = G__67025;
count__66999_67005 = G__67026;
i__67000_67006 = G__67027;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__67028){
var elem = cljs.core.first(arglist__67028);
var kvs = cljs.core.rest(arglist__67028);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__67035_67041 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__67036_67042 = null;var count__67037_67043 = 0;var i__67038_67044 = 0;while(true){
if((i__67038_67044 < count__67037_67043))
{var vec__67039_67045 = cljs.core._nth.call(null,chunk__67036_67042,i__67038_67044);var k_67046 = cljs.core.nth.call(null,vec__67039_67045,0,null);var v_67047 = cljs.core.nth.call(null,vec__67039_67045,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_67046,[cljs.core.str(v_67047),cljs.core.str("px")].join(''));
{
var G__67048 = seq__67035_67041;
var G__67049 = chunk__67036_67042;
var G__67050 = count__67037_67043;
var G__67051 = (i__67038_67044 + 1);
seq__67035_67041 = G__67048;
chunk__67036_67042 = G__67049;
count__67037_67043 = G__67050;
i__67038_67044 = G__67051;
continue;
}
} else
{var temp__4092__auto___67052 = cljs.core.seq.call(null,seq__67035_67041);if(temp__4092__auto___67052)
{var seq__67035_67053__$1 = temp__4092__auto___67052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67035_67053__$1))
{var c__4017__auto___67054 = cljs.core.chunk_first.call(null,seq__67035_67053__$1);{
var G__67055 = cljs.core.chunk_rest.call(null,seq__67035_67053__$1);
var G__67056 = c__4017__auto___67054;
var G__67057 = cljs.core.count.call(null,c__4017__auto___67054);
var G__67058 = 0;
seq__67035_67041 = G__67055;
chunk__67036_67042 = G__67056;
count__67037_67043 = G__67057;
i__67038_67044 = G__67058;
continue;
}
} else
{var vec__67040_67059 = cljs.core.first.call(null,seq__67035_67053__$1);var k_67060 = cljs.core.nth.call(null,vec__67040_67059,0,null);var v_67061 = cljs.core.nth.call(null,vec__67040_67059,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_67060,[cljs.core.str(v_67061),cljs.core.str("px")].join(''));
{
var G__67062 = cljs.core.next.call(null,seq__67035_67053__$1);
var G__67063 = null;
var G__67064 = 0;
var G__67065 = 0;
seq__67035_67041 = G__67062;
chunk__67036_67042 = G__67063;
count__67037_67043 = G__67064;
i__67038_67044 = G__67065;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__67066){
var elem = cljs.core.first(arglist__67066);
var kvs = cljs.core.rest(arglist__67066);
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
{var G__67075 = dommy.template.__GT_node_like.call(null,elem);(G__67075[cljs.core.name.call(null,k)] = v);
return G__67075;
} else
{var G__67076 = dommy.template.__GT_node_like.call(null,elem);G__67076.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__67076;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__67083__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__67077_67084 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__67078_67085 = null;var count__67079_67086 = 0;var i__67080_67087 = 0;while(true){
if((i__67080_67087 < count__67079_67086))
{var vec__67081_67088 = cljs.core._nth.call(null,chunk__67078_67085,i__67080_67087);var k_67089__$1 = cljs.core.nth.call(null,vec__67081_67088,0,null);var v_67090__$1 = cljs.core.nth.call(null,vec__67081_67088,1,null);set_attr_BANG_.call(null,elem__$1,k_67089__$1,v_67090__$1);
{
var G__67091 = seq__67077_67084;
var G__67092 = chunk__67078_67085;
var G__67093 = count__67079_67086;
var G__67094 = (i__67080_67087 + 1);
seq__67077_67084 = G__67091;
chunk__67078_67085 = G__67092;
count__67079_67086 = G__67093;
i__67080_67087 = G__67094;
continue;
}
} else
{var temp__4092__auto___67095 = cljs.core.seq.call(null,seq__67077_67084);if(temp__4092__auto___67095)
{var seq__67077_67096__$1 = temp__4092__auto___67095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67077_67096__$1))
{var c__4017__auto___67097 = cljs.core.chunk_first.call(null,seq__67077_67096__$1);{
var G__67098 = cljs.core.chunk_rest.call(null,seq__67077_67096__$1);
var G__67099 = c__4017__auto___67097;
var G__67100 = cljs.core.count.call(null,c__4017__auto___67097);
var G__67101 = 0;
seq__67077_67084 = G__67098;
chunk__67078_67085 = G__67099;
count__67079_67086 = G__67100;
i__67080_67087 = G__67101;
continue;
}
} else
{var vec__67082_67102 = cljs.core.first.call(null,seq__67077_67096__$1);var k_67103__$1 = cljs.core.nth.call(null,vec__67082_67102,0,null);var v_67104__$1 = cljs.core.nth.call(null,vec__67082_67102,1,null);set_attr_BANG_.call(null,elem__$1,k_67103__$1,v_67104__$1);
{
var G__67105 = cljs.core.next.call(null,seq__67077_67096__$1);
var G__67106 = null;
var G__67107 = 0;
var G__67108 = 0;
seq__67077_67084 = G__67105;
chunk__67078_67085 = G__67106;
count__67079_67086 = G__67107;
i__67080_67087 = G__67108;
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
var G__67083 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__67083__delegate.call(this,elem,k,v,kvs);};
G__67083.cljs$lang$maxFixedArity = 3;
G__67083.cljs$lang$applyTo = (function (arglist__67109){
var elem = cljs.core.first(arglist__67109);
arglist__67109 = cljs.core.next(arglist__67109);
var k = cljs.core.first(arglist__67109);
arglist__67109 = cljs.core.next(arglist__67109);
var v = cljs.core.first(arglist__67109);
var kvs = cljs.core.rest(arglist__67109);
return G__67083__delegate(elem,k,v,kvs);
});
G__67083.cljs$core$IFn$_invoke$arity$variadic = G__67083__delegate;
return G__67083;
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
var G__67118__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__67114_67119 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__67115_67120 = null;var count__67116_67121 = 0;var i__67117_67122 = 0;while(true){
if((i__67117_67122 < count__67116_67121))
{var k_67123__$1 = cljs.core._nth.call(null,chunk__67115_67120,i__67117_67122);remove_attr_BANG_.call(null,elem__$1,k_67123__$1);
{
var G__67124 = seq__67114_67119;
var G__67125 = chunk__67115_67120;
var G__67126 = count__67116_67121;
var G__67127 = (i__67117_67122 + 1);
seq__67114_67119 = G__67124;
chunk__67115_67120 = G__67125;
count__67116_67121 = G__67126;
i__67117_67122 = G__67127;
continue;
}
} else
{var temp__4092__auto___67128 = cljs.core.seq.call(null,seq__67114_67119);if(temp__4092__auto___67128)
{var seq__67114_67129__$1 = temp__4092__auto___67128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67114_67129__$1))
{var c__4017__auto___67130 = cljs.core.chunk_first.call(null,seq__67114_67129__$1);{
var G__67131 = cljs.core.chunk_rest.call(null,seq__67114_67129__$1);
var G__67132 = c__4017__auto___67130;
var G__67133 = cljs.core.count.call(null,c__4017__auto___67130);
var G__67134 = 0;
seq__67114_67119 = G__67131;
chunk__67115_67120 = G__67132;
count__67116_67121 = G__67133;
i__67117_67122 = G__67134;
continue;
}
} else
{var k_67135__$1 = cljs.core.first.call(null,seq__67114_67129__$1);remove_attr_BANG_.call(null,elem__$1,k_67135__$1);
{
var G__67136 = cljs.core.next.call(null,seq__67114_67129__$1);
var G__67137 = null;
var G__67138 = 0;
var G__67139 = 0;
seq__67114_67119 = G__67136;
chunk__67115_67120 = G__67137;
count__67116_67121 = G__67138;
i__67117_67122 = G__67139;
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
var G__67118 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__67118__delegate.call(this,elem,k,ks);};
G__67118.cljs$lang$maxFixedArity = 2;
G__67118.cljs$lang$applyTo = (function (arglist__67140){
var elem = cljs.core.first(arglist__67140);
arglist__67140 = cljs.core.next(arglist__67140);
var k = cljs.core.first(arglist__67140);
var ks = cljs.core.rest(arglist__67140);
return G__67118__delegate(elem,k,ks);
});
G__67118.cljs$core$IFn$_invoke$arity$variadic = G__67118__delegate;
return G__67118;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__67142 = dommy.template.__GT_node_like.call(null,elem);G__67142.style.display = ((show_QMARK_)?"":"none");
return G__67142;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__67144 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__67144,false);
return G__67144;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__67146 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__67146,true);
return G__67146;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__67148 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__67148["constructor"] = Object);
return G__67148;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
