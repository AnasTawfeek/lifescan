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
var G__290944 = (i + class$.length);
start_from = G__290944;
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
{var temp__4090__auto___290969 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___290969))
{var class_list_290970 = temp__4090__auto___290969;var seq__290957_290971 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__290958_290972 = null;var count__290959_290973 = 0;var i__290960_290974 = 0;while(true){
if((i__290960_290974 < count__290959_290973))
{var class_290975 = cljs.core._nth.call(null,chunk__290958_290972,i__290960_290974);class_list_290970.add(class_290975);
{
var G__290976 = seq__290957_290971;
var G__290977 = chunk__290958_290972;
var G__290978 = count__290959_290973;
var G__290979 = (i__290960_290974 + 1);
seq__290957_290971 = G__290976;
chunk__290958_290972 = G__290977;
count__290959_290973 = G__290978;
i__290960_290974 = G__290979;
continue;
}
} else
{var temp__4092__auto___290980 = cljs.core.seq.call(null,seq__290957_290971);if(temp__4092__auto___290980)
{var seq__290957_290981__$1 = temp__4092__auto___290980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__290957_290981__$1))
{var c__4017__auto___290982 = cljs.core.chunk_first.call(null,seq__290957_290981__$1);{
var G__290983 = cljs.core.chunk_rest.call(null,seq__290957_290981__$1);
var G__290984 = c__4017__auto___290982;
var G__290985 = cljs.core.count.call(null,c__4017__auto___290982);
var G__290986 = 0;
seq__290957_290971 = G__290983;
chunk__290958_290972 = G__290984;
count__290959_290973 = G__290985;
i__290960_290974 = G__290986;
continue;
}
} else
{var class_290987 = cljs.core.first.call(null,seq__290957_290981__$1);class_list_290970.add(class_290987);
{
var G__290988 = cljs.core.next.call(null,seq__290957_290981__$1);
var G__290989 = null;
var G__290990 = 0;
var G__290991 = 0;
seq__290957_290971 = G__290988;
chunk__290958_290972 = G__290989;
count__290959_290973 = G__290990;
i__290960_290974 = G__290991;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_290992 = elem__$1.className;var seq__290961_290993 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__290962_290994 = null;var count__290963_290995 = 0;var i__290964_290996 = 0;while(true){
if((i__290964_290996 < count__290963_290995))
{var class_290997 = cljs.core._nth.call(null,chunk__290962_290994,i__290964_290996);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_290992,class_290997)))
{} else
{elem__$1.className = (((class_name_290992 === ""))?class_290997:[cljs.core.str(class_name_290992),cljs.core.str(" "),cljs.core.str(class_290997)].join(''));
}
{
var G__290998 = seq__290961_290993;
var G__290999 = chunk__290962_290994;
var G__291000 = count__290963_290995;
var G__291001 = (i__290964_290996 + 1);
seq__290961_290993 = G__290998;
chunk__290962_290994 = G__290999;
count__290963_290995 = G__291000;
i__290964_290996 = G__291001;
continue;
}
} else
{var temp__4092__auto___291002 = cljs.core.seq.call(null,seq__290961_290993);if(temp__4092__auto___291002)
{var seq__290961_291003__$1 = temp__4092__auto___291002;if(cljs.core.chunked_seq_QMARK_.call(null,seq__290961_291003__$1))
{var c__4017__auto___291004 = cljs.core.chunk_first.call(null,seq__290961_291003__$1);{
var G__291005 = cljs.core.chunk_rest.call(null,seq__290961_291003__$1);
var G__291006 = c__4017__auto___291004;
var G__291007 = cljs.core.count.call(null,c__4017__auto___291004);
var G__291008 = 0;
seq__290961_290993 = G__291005;
chunk__290962_290994 = G__291006;
count__290963_290995 = G__291007;
i__290964_290996 = G__291008;
continue;
}
} else
{var class_291009 = cljs.core.first.call(null,seq__290961_291003__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_290992,class_291009)))
{} else
{elem__$1.className = (((class_name_290992 === ""))?class_291009:[cljs.core.str(class_name_290992),cljs.core.str(" "),cljs.core.str(class_291009)].join(''));
}
{
var G__291010 = cljs.core.next.call(null,seq__290961_291003__$1);
var G__291011 = null;
var G__291012 = 0;
var G__291013 = 0;
seq__290961_290993 = G__291010;
chunk__290962_290994 = G__291011;
count__290963_290995 = G__291012;
i__290964_290996 = G__291013;
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
var G__291014__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__290965_291015 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__290966_291016 = null;var count__290967_291017 = 0;var i__290968_291018 = 0;while(true){
if((i__290968_291018 < count__290967_291017))
{var c_291019 = cljs.core._nth.call(null,chunk__290966_291016,i__290968_291018);add_class_BANG_.call(null,elem__$1,c_291019);
{
var G__291020 = seq__290965_291015;
var G__291021 = chunk__290966_291016;
var G__291022 = count__290967_291017;
var G__291023 = (i__290968_291018 + 1);
seq__290965_291015 = G__291020;
chunk__290966_291016 = G__291021;
count__290967_291017 = G__291022;
i__290968_291018 = G__291023;
continue;
}
} else
{var temp__4092__auto___291024 = cljs.core.seq.call(null,seq__290965_291015);if(temp__4092__auto___291024)
{var seq__290965_291025__$1 = temp__4092__auto___291024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__290965_291025__$1))
{var c__4017__auto___291026 = cljs.core.chunk_first.call(null,seq__290965_291025__$1);{
var G__291027 = cljs.core.chunk_rest.call(null,seq__290965_291025__$1);
var G__291028 = c__4017__auto___291026;
var G__291029 = cljs.core.count.call(null,c__4017__auto___291026);
var G__291030 = 0;
seq__290965_291015 = G__291027;
chunk__290966_291016 = G__291028;
count__290967_291017 = G__291029;
i__290968_291018 = G__291030;
continue;
}
} else
{var c_291031 = cljs.core.first.call(null,seq__290965_291025__$1);add_class_BANG_.call(null,elem__$1,c_291031);
{
var G__291032 = cljs.core.next.call(null,seq__290965_291025__$1);
var G__291033 = null;
var G__291034 = 0;
var G__291035 = 0;
seq__290965_291015 = G__291032;
chunk__290966_291016 = G__291033;
count__290967_291017 = G__291034;
i__290968_291018 = G__291035;
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
var G__291014 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__291014__delegate.call(this,elem,classes,more_classes);};
G__291014.cljs$lang$maxFixedArity = 2;
G__291014.cljs$lang$applyTo = (function (arglist__291036){
var elem = cljs.core.first(arglist__291036);
arglist__291036 = cljs.core.next(arglist__291036);
var classes = cljs.core.first(arglist__291036);
var more_classes = cljs.core.rest(arglist__291036);
return G__291014__delegate(elem,classes,more_classes);
});
G__291014.cljs$core$IFn$_invoke$arity$variadic = G__291014__delegate;
return G__291014;
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
var G__291037 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__291037;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___291046 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___291046))
{var class_list_291047 = temp__4090__auto___291046;class_list_291047.remove(class$__$1);
} else
{var class_name_291048 = elem__$1.className;var new_class_name_291049 = dommy.attrs.remove_class_str.call(null,class_name_291048,class$__$1);if((class_name_291048 === new_class_name_291049))
{} else
{elem__$1.className = new_class_name_291049;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__291050__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__291042 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__291043 = null;var count__291044 = 0;var i__291045 = 0;while(true){
if((i__291045 < count__291044))
{var c = cljs.core._nth.call(null,chunk__291043,i__291045);remove_class_BANG_.call(null,elem__$1,c);
{
var G__291051 = seq__291042;
var G__291052 = chunk__291043;
var G__291053 = count__291044;
var G__291054 = (i__291045 + 1);
seq__291042 = G__291051;
chunk__291043 = G__291052;
count__291044 = G__291053;
i__291045 = G__291054;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__291042);if(temp__4092__auto__)
{var seq__291042__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__291042__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__291042__$1);{
var G__291055 = cljs.core.chunk_rest.call(null,seq__291042__$1);
var G__291056 = c__4017__auto__;
var G__291057 = cljs.core.count.call(null,c__4017__auto__);
var G__291058 = 0;
seq__291042 = G__291055;
chunk__291043 = G__291056;
count__291044 = G__291057;
i__291045 = G__291058;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__291042__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__291059 = cljs.core.next.call(null,seq__291042__$1);
var G__291060 = null;
var G__291061 = 0;
var G__291062 = 0;
seq__291042 = G__291059;
chunk__291043 = G__291060;
count__291044 = G__291061;
i__291045 = G__291062;
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
var G__291050 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__291050__delegate.call(this,elem,class$,classes);};
G__291050.cljs$lang$maxFixedArity = 2;
G__291050.cljs$lang$applyTo = (function (arglist__291063){
var elem = cljs.core.first(arglist__291063);
arglist__291063 = cljs.core.next(arglist__291063);
var class$ = cljs.core.first(arglist__291063);
var classes = cljs.core.rest(arglist__291063);
return G__291050__delegate(elem,class$,classes);
});
G__291050.cljs$core$IFn$_invoke$arity$variadic = G__291050__delegate;
return G__291050;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___291064 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___291064))
{var class_list_291065 = temp__4090__auto___291064;class_list_291065.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__291068){var vec__291069 = p__291068;var k = cljs.core.nth.call(null,vec__291069,0,null);var v = cljs.core.nth.call(null,vec__291069,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__291076_291082 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__291077_291083 = null;var count__291078_291084 = 0;var i__291079_291085 = 0;while(true){
if((i__291079_291085 < count__291078_291084))
{var vec__291080_291086 = cljs.core._nth.call(null,chunk__291077_291083,i__291079_291085);var k_291087 = cljs.core.nth.call(null,vec__291080_291086,0,null);var v_291088 = cljs.core.nth.call(null,vec__291080_291086,1,null);(style[cljs.core.name.call(null,k_291087)] = v_291088);
{
var G__291089 = seq__291076_291082;
var G__291090 = chunk__291077_291083;
var G__291091 = count__291078_291084;
var G__291092 = (i__291079_291085 + 1);
seq__291076_291082 = G__291089;
chunk__291077_291083 = G__291090;
count__291078_291084 = G__291091;
i__291079_291085 = G__291092;
continue;
}
} else
{var temp__4092__auto___291093 = cljs.core.seq.call(null,seq__291076_291082);if(temp__4092__auto___291093)
{var seq__291076_291094__$1 = temp__4092__auto___291093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__291076_291094__$1))
{var c__4017__auto___291095 = cljs.core.chunk_first.call(null,seq__291076_291094__$1);{
var G__291096 = cljs.core.chunk_rest.call(null,seq__291076_291094__$1);
var G__291097 = c__4017__auto___291095;
var G__291098 = cljs.core.count.call(null,c__4017__auto___291095);
var G__291099 = 0;
seq__291076_291082 = G__291096;
chunk__291077_291083 = G__291097;
count__291078_291084 = G__291098;
i__291079_291085 = G__291099;
continue;
}
} else
{var vec__291081_291100 = cljs.core.first.call(null,seq__291076_291094__$1);var k_291101 = cljs.core.nth.call(null,vec__291081_291100,0,null);var v_291102 = cljs.core.nth.call(null,vec__291081_291100,1,null);(style[cljs.core.name.call(null,k_291101)] = v_291102);
{
var G__291103 = cljs.core.next.call(null,seq__291076_291094__$1);
var G__291104 = null;
var G__291105 = 0;
var G__291106 = 0;
seq__291076_291082 = G__291103;
chunk__291077_291083 = G__291104;
count__291078_291084 = G__291105;
i__291079_291085 = G__291106;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__291107){
var elem = cljs.core.first(arglist__291107);
var kvs = cljs.core.rest(arglist__291107);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__291114_291120 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__291115_291121 = null;var count__291116_291122 = 0;var i__291117_291123 = 0;while(true){
if((i__291117_291123 < count__291116_291122))
{var vec__291118_291124 = cljs.core._nth.call(null,chunk__291115_291121,i__291117_291123);var k_291125 = cljs.core.nth.call(null,vec__291118_291124,0,null);var v_291126 = cljs.core.nth.call(null,vec__291118_291124,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_291125,[cljs.core.str(v_291126),cljs.core.str("px")].join(''));
{
var G__291127 = seq__291114_291120;
var G__291128 = chunk__291115_291121;
var G__291129 = count__291116_291122;
var G__291130 = (i__291117_291123 + 1);
seq__291114_291120 = G__291127;
chunk__291115_291121 = G__291128;
count__291116_291122 = G__291129;
i__291117_291123 = G__291130;
continue;
}
} else
{var temp__4092__auto___291131 = cljs.core.seq.call(null,seq__291114_291120);if(temp__4092__auto___291131)
{var seq__291114_291132__$1 = temp__4092__auto___291131;if(cljs.core.chunked_seq_QMARK_.call(null,seq__291114_291132__$1))
{var c__4017__auto___291133 = cljs.core.chunk_first.call(null,seq__291114_291132__$1);{
var G__291134 = cljs.core.chunk_rest.call(null,seq__291114_291132__$1);
var G__291135 = c__4017__auto___291133;
var G__291136 = cljs.core.count.call(null,c__4017__auto___291133);
var G__291137 = 0;
seq__291114_291120 = G__291134;
chunk__291115_291121 = G__291135;
count__291116_291122 = G__291136;
i__291117_291123 = G__291137;
continue;
}
} else
{var vec__291119_291138 = cljs.core.first.call(null,seq__291114_291132__$1);var k_291139 = cljs.core.nth.call(null,vec__291119_291138,0,null);var v_291140 = cljs.core.nth.call(null,vec__291119_291138,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_291139,[cljs.core.str(v_291140),cljs.core.str("px")].join(''));
{
var G__291141 = cljs.core.next.call(null,seq__291114_291132__$1);
var G__291142 = null;
var G__291143 = 0;
var G__291144 = 0;
seq__291114_291120 = G__291141;
chunk__291115_291121 = G__291142;
count__291116_291122 = G__291143;
i__291117_291123 = G__291144;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__291145){
var elem = cljs.core.first(arglist__291145);
var kvs = cljs.core.rest(arglist__291145);
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
{var G__291154 = dommy.template.__GT_node_like.call(null,elem);(G__291154[cljs.core.name.call(null,k)] = v);
return G__291154;
} else
{var G__291155 = dommy.template.__GT_node_like.call(null,elem);G__291155.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__291155;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__291162__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__291156_291163 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__291157_291164 = null;var count__291158_291165 = 0;var i__291159_291166 = 0;while(true){
if((i__291159_291166 < count__291158_291165))
{var vec__291160_291167 = cljs.core._nth.call(null,chunk__291157_291164,i__291159_291166);var k_291168__$1 = cljs.core.nth.call(null,vec__291160_291167,0,null);var v_291169__$1 = cljs.core.nth.call(null,vec__291160_291167,1,null);set_attr_BANG_.call(null,elem__$1,k_291168__$1,v_291169__$1);
{
var G__291170 = seq__291156_291163;
var G__291171 = chunk__291157_291164;
var G__291172 = count__291158_291165;
var G__291173 = (i__291159_291166 + 1);
seq__291156_291163 = G__291170;
chunk__291157_291164 = G__291171;
count__291158_291165 = G__291172;
i__291159_291166 = G__291173;
continue;
}
} else
{var temp__4092__auto___291174 = cljs.core.seq.call(null,seq__291156_291163);if(temp__4092__auto___291174)
{var seq__291156_291175__$1 = temp__4092__auto___291174;if(cljs.core.chunked_seq_QMARK_.call(null,seq__291156_291175__$1))
{var c__4017__auto___291176 = cljs.core.chunk_first.call(null,seq__291156_291175__$1);{
var G__291177 = cljs.core.chunk_rest.call(null,seq__291156_291175__$1);
var G__291178 = c__4017__auto___291176;
var G__291179 = cljs.core.count.call(null,c__4017__auto___291176);
var G__291180 = 0;
seq__291156_291163 = G__291177;
chunk__291157_291164 = G__291178;
count__291158_291165 = G__291179;
i__291159_291166 = G__291180;
continue;
}
} else
{var vec__291161_291181 = cljs.core.first.call(null,seq__291156_291175__$1);var k_291182__$1 = cljs.core.nth.call(null,vec__291161_291181,0,null);var v_291183__$1 = cljs.core.nth.call(null,vec__291161_291181,1,null);set_attr_BANG_.call(null,elem__$1,k_291182__$1,v_291183__$1);
{
var G__291184 = cljs.core.next.call(null,seq__291156_291175__$1);
var G__291185 = null;
var G__291186 = 0;
var G__291187 = 0;
seq__291156_291163 = G__291184;
chunk__291157_291164 = G__291185;
count__291158_291165 = G__291186;
i__291159_291166 = G__291187;
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
var G__291162 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__291162__delegate.call(this,elem,k,v,kvs);};
G__291162.cljs$lang$maxFixedArity = 3;
G__291162.cljs$lang$applyTo = (function (arglist__291188){
var elem = cljs.core.first(arglist__291188);
arglist__291188 = cljs.core.next(arglist__291188);
var k = cljs.core.first(arglist__291188);
arglist__291188 = cljs.core.next(arglist__291188);
var v = cljs.core.first(arglist__291188);
var kvs = cljs.core.rest(arglist__291188);
return G__291162__delegate(elem,k,v,kvs);
});
G__291162.cljs$core$IFn$_invoke$arity$variadic = G__291162__delegate;
return G__291162;
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
var G__291197__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__291193_291198 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__291194_291199 = null;var count__291195_291200 = 0;var i__291196_291201 = 0;while(true){
if((i__291196_291201 < count__291195_291200))
{var k_291202__$1 = cljs.core._nth.call(null,chunk__291194_291199,i__291196_291201);remove_attr_BANG_.call(null,elem__$1,k_291202__$1);
{
var G__291203 = seq__291193_291198;
var G__291204 = chunk__291194_291199;
var G__291205 = count__291195_291200;
var G__291206 = (i__291196_291201 + 1);
seq__291193_291198 = G__291203;
chunk__291194_291199 = G__291204;
count__291195_291200 = G__291205;
i__291196_291201 = G__291206;
continue;
}
} else
{var temp__4092__auto___291207 = cljs.core.seq.call(null,seq__291193_291198);if(temp__4092__auto___291207)
{var seq__291193_291208__$1 = temp__4092__auto___291207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__291193_291208__$1))
{var c__4017__auto___291209 = cljs.core.chunk_first.call(null,seq__291193_291208__$1);{
var G__291210 = cljs.core.chunk_rest.call(null,seq__291193_291208__$1);
var G__291211 = c__4017__auto___291209;
var G__291212 = cljs.core.count.call(null,c__4017__auto___291209);
var G__291213 = 0;
seq__291193_291198 = G__291210;
chunk__291194_291199 = G__291211;
count__291195_291200 = G__291212;
i__291196_291201 = G__291213;
continue;
}
} else
{var k_291214__$1 = cljs.core.first.call(null,seq__291193_291208__$1);remove_attr_BANG_.call(null,elem__$1,k_291214__$1);
{
var G__291215 = cljs.core.next.call(null,seq__291193_291208__$1);
var G__291216 = null;
var G__291217 = 0;
var G__291218 = 0;
seq__291193_291198 = G__291215;
chunk__291194_291199 = G__291216;
count__291195_291200 = G__291217;
i__291196_291201 = G__291218;
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
var G__291197 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__291197__delegate.call(this,elem,k,ks);};
G__291197.cljs$lang$maxFixedArity = 2;
G__291197.cljs$lang$applyTo = (function (arglist__291219){
var elem = cljs.core.first(arglist__291219);
arglist__291219 = cljs.core.next(arglist__291219);
var k = cljs.core.first(arglist__291219);
var ks = cljs.core.rest(arglist__291219);
return G__291197__delegate(elem,k,ks);
});
G__291197.cljs$core$IFn$_invoke$arity$variadic = G__291197__delegate;
return G__291197;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__291221 = dommy.template.__GT_node_like.call(null,elem);G__291221.style.display = ((show_QMARK_)?"":"none");
return G__291221;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__291223 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__291223,false);
return G__291223;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__291225 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__291225,true);
return G__291225;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__291227 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__291227["constructor"] = Object);
return G__291227;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
