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
var G__12931 = (i + class$.length);
start_from = G__12931;
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
{var temp__4090__auto___12956 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___12956))
{var class_list_12957 = temp__4090__auto___12956;var seq__12944_12958 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__12945_12959 = null;var count__12946_12960 = 0;var i__12947_12961 = 0;while(true){
if((i__12947_12961 < count__12946_12960))
{var class_12962 = cljs.core._nth.call(null,chunk__12945_12959,i__12947_12961);class_list_12957.add(class_12962);
{
var G__12963 = seq__12944_12958;
var G__12964 = chunk__12945_12959;
var G__12965 = count__12946_12960;
var G__12966 = (i__12947_12961 + 1);
seq__12944_12958 = G__12963;
chunk__12945_12959 = G__12964;
count__12946_12960 = G__12965;
i__12947_12961 = G__12966;
continue;
}
} else
{var temp__4092__auto___12967 = cljs.core.seq.call(null,seq__12944_12958);if(temp__4092__auto___12967)
{var seq__12944_12968__$1 = temp__4092__auto___12967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12944_12968__$1))
{var c__5497__auto___12969 = cljs.core.chunk_first.call(null,seq__12944_12968__$1);{
var G__12970 = cljs.core.chunk_rest.call(null,seq__12944_12968__$1);
var G__12971 = c__5497__auto___12969;
var G__12972 = cljs.core.count.call(null,c__5497__auto___12969);
var G__12973 = 0;
seq__12944_12958 = G__12970;
chunk__12945_12959 = G__12971;
count__12946_12960 = G__12972;
i__12947_12961 = G__12973;
continue;
}
} else
{var class_12974 = cljs.core.first.call(null,seq__12944_12968__$1);class_list_12957.add(class_12974);
{
var G__12975 = cljs.core.next.call(null,seq__12944_12968__$1);
var G__12976 = null;
var G__12977 = 0;
var G__12978 = 0;
seq__12944_12958 = G__12975;
chunk__12945_12959 = G__12976;
count__12946_12960 = G__12977;
i__12947_12961 = G__12978;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_12979 = elem__$1.className;var seq__12948_12980 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__12949_12981 = null;var count__12950_12982 = 0;var i__12951_12983 = 0;while(true){
if((i__12951_12983 < count__12950_12982))
{var class_12984 = cljs.core._nth.call(null,chunk__12949_12981,i__12951_12983);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_12979,class_12984)))
{} else
{elem__$1.className = (((class_name_12979 === ""))?class_12984:[cljs.core.str(class_name_12979),cljs.core.str(" "),cljs.core.str(class_12984)].join(''));
}
{
var G__12985 = seq__12948_12980;
var G__12986 = chunk__12949_12981;
var G__12987 = count__12950_12982;
var G__12988 = (i__12951_12983 + 1);
seq__12948_12980 = G__12985;
chunk__12949_12981 = G__12986;
count__12950_12982 = G__12987;
i__12951_12983 = G__12988;
continue;
}
} else
{var temp__4092__auto___12989 = cljs.core.seq.call(null,seq__12948_12980);if(temp__4092__auto___12989)
{var seq__12948_12990__$1 = temp__4092__auto___12989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12948_12990__$1))
{var c__5497__auto___12991 = cljs.core.chunk_first.call(null,seq__12948_12990__$1);{
var G__12992 = cljs.core.chunk_rest.call(null,seq__12948_12990__$1);
var G__12993 = c__5497__auto___12991;
var G__12994 = cljs.core.count.call(null,c__5497__auto___12991);
var G__12995 = 0;
seq__12948_12980 = G__12992;
chunk__12949_12981 = G__12993;
count__12950_12982 = G__12994;
i__12951_12983 = G__12995;
continue;
}
} else
{var class_12996 = cljs.core.first.call(null,seq__12948_12990__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_12979,class_12996)))
{} else
{elem__$1.className = (((class_name_12979 === ""))?class_12996:[cljs.core.str(class_name_12979),cljs.core.str(" "),cljs.core.str(class_12996)].join(''));
}
{
var G__12997 = cljs.core.next.call(null,seq__12948_12990__$1);
var G__12998 = null;
var G__12999 = 0;
var G__13000 = 0;
seq__12948_12980 = G__12997;
chunk__12949_12981 = G__12998;
count__12950_12982 = G__12999;
i__12951_12983 = G__13000;
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
var G__13001__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12952_13002 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__12953_13003 = null;var count__12954_13004 = 0;var i__12955_13005 = 0;while(true){
if((i__12955_13005 < count__12954_13004))
{var c_13006 = cljs.core._nth.call(null,chunk__12953_13003,i__12955_13005);add_class_BANG_.call(null,elem__$1,c_13006);
{
var G__13007 = seq__12952_13002;
var G__13008 = chunk__12953_13003;
var G__13009 = count__12954_13004;
var G__13010 = (i__12955_13005 + 1);
seq__12952_13002 = G__13007;
chunk__12953_13003 = G__13008;
count__12954_13004 = G__13009;
i__12955_13005 = G__13010;
continue;
}
} else
{var temp__4092__auto___13011 = cljs.core.seq.call(null,seq__12952_13002);if(temp__4092__auto___13011)
{var seq__12952_13012__$1 = temp__4092__auto___13011;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12952_13012__$1))
{var c__5497__auto___13013 = cljs.core.chunk_first.call(null,seq__12952_13012__$1);{
var G__13014 = cljs.core.chunk_rest.call(null,seq__12952_13012__$1);
var G__13015 = c__5497__auto___13013;
var G__13016 = cljs.core.count.call(null,c__5497__auto___13013);
var G__13017 = 0;
seq__12952_13002 = G__13014;
chunk__12953_13003 = G__13015;
count__12954_13004 = G__13016;
i__12955_13005 = G__13017;
continue;
}
} else
{var c_13018 = cljs.core.first.call(null,seq__12952_13012__$1);add_class_BANG_.call(null,elem__$1,c_13018);
{
var G__13019 = cljs.core.next.call(null,seq__12952_13012__$1);
var G__13020 = null;
var G__13021 = 0;
var G__13022 = 0;
seq__12952_13002 = G__13019;
chunk__12953_13003 = G__13020;
count__12954_13004 = G__13021;
i__12955_13005 = G__13022;
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
var G__13001 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13001__delegate.call(this,elem,classes,more_classes);};
G__13001.cljs$lang$maxFixedArity = 2;
G__13001.cljs$lang$applyTo = (function (arglist__13023){
var elem = cljs.core.first(arglist__13023);
arglist__13023 = cljs.core.next(arglist__13023);
var classes = cljs.core.first(arglist__13023);
var more_classes = cljs.core.rest(arglist__13023);
return G__13001__delegate(elem,classes,more_classes);
});
G__13001.cljs$core$IFn$_invoke$arity$variadic = G__13001__delegate;
return G__13001;
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
var G__13024 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__13024;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___13033 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13033))
{var class_list_13034 = temp__4090__auto___13033;class_list_13034.remove(class$__$1);
} else
{var class_name_13035 = elem__$1.className;var new_class_name_13036 = dommy.attrs.remove_class_str.call(null,class_name_13035,class$__$1);if((class_name_13035 === new_class_name_13036))
{} else
{elem__$1.className = new_class_name_13036;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__13037__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13029 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__13030 = null;var count__13031 = 0;var i__13032 = 0;while(true){
if((i__13032 < count__13031))
{var c = cljs.core._nth.call(null,chunk__13030,i__13032);remove_class_BANG_.call(null,elem__$1,c);
{
var G__13038 = seq__13029;
var G__13039 = chunk__13030;
var G__13040 = count__13031;
var G__13041 = (i__13032 + 1);
seq__13029 = G__13038;
chunk__13030 = G__13039;
count__13031 = G__13040;
i__13032 = G__13041;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13029);if(temp__4092__auto__)
{var seq__13029__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13029__$1))
{var c__5497__auto__ = cljs.core.chunk_first.call(null,seq__13029__$1);{
var G__13042 = cljs.core.chunk_rest.call(null,seq__13029__$1);
var G__13043 = c__5497__auto__;
var G__13044 = cljs.core.count.call(null,c__5497__auto__);
var G__13045 = 0;
seq__13029 = G__13042;
chunk__13030 = G__13043;
count__13031 = G__13044;
i__13032 = G__13045;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__13029__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__13046 = cljs.core.next.call(null,seq__13029__$1);
var G__13047 = null;
var G__13048 = 0;
var G__13049 = 0;
seq__13029 = G__13046;
chunk__13030 = G__13047;
count__13031 = G__13048;
i__13032 = G__13049;
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
var G__13037 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13037__delegate.call(this,elem,class$,classes);};
G__13037.cljs$lang$maxFixedArity = 2;
G__13037.cljs$lang$applyTo = (function (arglist__13050){
var elem = cljs.core.first(arglist__13050);
arglist__13050 = cljs.core.next(arglist__13050);
var class$ = cljs.core.first(arglist__13050);
var classes = cljs.core.rest(arglist__13050);
return G__13037__delegate(elem,class$,classes);
});
G__13037.cljs$core$IFn$_invoke$arity$variadic = G__13037__delegate;
return G__13037;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___13051 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13051))
{var class_list_13052 = temp__4090__auto___13051;class_list_13052.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__13055){var vec__13056 = p__13055;var k = cljs.core.nth.call(null,vec__13056,0,null);var v = cljs.core.nth.call(null,vec__13056,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__13063_13069 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__13064_13070 = null;var count__13065_13071 = 0;var i__13066_13072 = 0;while(true){
if((i__13066_13072 < count__13065_13071))
{var vec__13067_13073 = cljs.core._nth.call(null,chunk__13064_13070,i__13066_13072);var k_13074 = cljs.core.nth.call(null,vec__13067_13073,0,null);var v_13075 = cljs.core.nth.call(null,vec__13067_13073,1,null);(style[cljs.core.name.call(null,k_13074)] = v_13075);
{
var G__13076 = seq__13063_13069;
var G__13077 = chunk__13064_13070;
var G__13078 = count__13065_13071;
var G__13079 = (i__13066_13072 + 1);
seq__13063_13069 = G__13076;
chunk__13064_13070 = G__13077;
count__13065_13071 = G__13078;
i__13066_13072 = G__13079;
continue;
}
} else
{var temp__4092__auto___13080 = cljs.core.seq.call(null,seq__13063_13069);if(temp__4092__auto___13080)
{var seq__13063_13081__$1 = temp__4092__auto___13080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13063_13081__$1))
{var c__5497__auto___13082 = cljs.core.chunk_first.call(null,seq__13063_13081__$1);{
var G__13083 = cljs.core.chunk_rest.call(null,seq__13063_13081__$1);
var G__13084 = c__5497__auto___13082;
var G__13085 = cljs.core.count.call(null,c__5497__auto___13082);
var G__13086 = 0;
seq__13063_13069 = G__13083;
chunk__13064_13070 = G__13084;
count__13065_13071 = G__13085;
i__13066_13072 = G__13086;
continue;
}
} else
{var vec__13068_13087 = cljs.core.first.call(null,seq__13063_13081__$1);var k_13088 = cljs.core.nth.call(null,vec__13068_13087,0,null);var v_13089 = cljs.core.nth.call(null,vec__13068_13087,1,null);(style[cljs.core.name.call(null,k_13088)] = v_13089);
{
var G__13090 = cljs.core.next.call(null,seq__13063_13081__$1);
var G__13091 = null;
var G__13092 = 0;
var G__13093 = 0;
seq__13063_13069 = G__13090;
chunk__13064_13070 = G__13091;
count__13065_13071 = G__13092;
i__13066_13072 = G__13093;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13094){
var elem = cljs.core.first(arglist__13094);
var kvs = cljs.core.rest(arglist__13094);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13101_13107 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__13102_13108 = null;var count__13103_13109 = 0;var i__13104_13110 = 0;while(true){
if((i__13104_13110 < count__13103_13109))
{var vec__13105_13111 = cljs.core._nth.call(null,chunk__13102_13108,i__13104_13110);var k_13112 = cljs.core.nth.call(null,vec__13105_13111,0,null);var v_13113 = cljs.core.nth.call(null,vec__13105_13111,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_13112,[cljs.core.str(v_13113),cljs.core.str("px")].join(''));
{
var G__13114 = seq__13101_13107;
var G__13115 = chunk__13102_13108;
var G__13116 = count__13103_13109;
var G__13117 = (i__13104_13110 + 1);
seq__13101_13107 = G__13114;
chunk__13102_13108 = G__13115;
count__13103_13109 = G__13116;
i__13104_13110 = G__13117;
continue;
}
} else
{var temp__4092__auto___13118 = cljs.core.seq.call(null,seq__13101_13107);if(temp__4092__auto___13118)
{var seq__13101_13119__$1 = temp__4092__auto___13118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13101_13119__$1))
{var c__5497__auto___13120 = cljs.core.chunk_first.call(null,seq__13101_13119__$1);{
var G__13121 = cljs.core.chunk_rest.call(null,seq__13101_13119__$1);
var G__13122 = c__5497__auto___13120;
var G__13123 = cljs.core.count.call(null,c__5497__auto___13120);
var G__13124 = 0;
seq__13101_13107 = G__13121;
chunk__13102_13108 = G__13122;
count__13103_13109 = G__13123;
i__13104_13110 = G__13124;
continue;
}
} else
{var vec__13106_13125 = cljs.core.first.call(null,seq__13101_13119__$1);var k_13126 = cljs.core.nth.call(null,vec__13106_13125,0,null);var v_13127 = cljs.core.nth.call(null,vec__13106_13125,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_13126,[cljs.core.str(v_13127),cljs.core.str("px")].join(''));
{
var G__13128 = cljs.core.next.call(null,seq__13101_13119__$1);
var G__13129 = null;
var G__13130 = 0;
var G__13131 = 0;
seq__13101_13107 = G__13128;
chunk__13102_13108 = G__13129;
count__13103_13109 = G__13130;
i__13104_13110 = G__13131;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__13132){
var elem = cljs.core.first(arglist__13132);
var kvs = cljs.core.rest(arglist__13132);
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
{var G__13141 = dommy.template.__GT_node_like.call(null,elem);(G__13141[cljs.core.name.call(null,k)] = v);
return G__13141;
} else
{var G__13142 = dommy.template.__GT_node_like.call(null,elem);G__13142.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__13142;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__13149__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13143_13150 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__13144_13151 = null;var count__13145_13152 = 0;var i__13146_13153 = 0;while(true){
if((i__13146_13153 < count__13145_13152))
{var vec__13147_13154 = cljs.core._nth.call(null,chunk__13144_13151,i__13146_13153);var k_13155__$1 = cljs.core.nth.call(null,vec__13147_13154,0,null);var v_13156__$1 = cljs.core.nth.call(null,vec__13147_13154,1,null);set_attr_BANG_.call(null,elem__$1,k_13155__$1,v_13156__$1);
{
var G__13157 = seq__13143_13150;
var G__13158 = chunk__13144_13151;
var G__13159 = count__13145_13152;
var G__13160 = (i__13146_13153 + 1);
seq__13143_13150 = G__13157;
chunk__13144_13151 = G__13158;
count__13145_13152 = G__13159;
i__13146_13153 = G__13160;
continue;
}
} else
{var temp__4092__auto___13161 = cljs.core.seq.call(null,seq__13143_13150);if(temp__4092__auto___13161)
{var seq__13143_13162__$1 = temp__4092__auto___13161;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13143_13162__$1))
{var c__5497__auto___13163 = cljs.core.chunk_first.call(null,seq__13143_13162__$1);{
var G__13164 = cljs.core.chunk_rest.call(null,seq__13143_13162__$1);
var G__13165 = c__5497__auto___13163;
var G__13166 = cljs.core.count.call(null,c__5497__auto___13163);
var G__13167 = 0;
seq__13143_13150 = G__13164;
chunk__13144_13151 = G__13165;
count__13145_13152 = G__13166;
i__13146_13153 = G__13167;
continue;
}
} else
{var vec__13148_13168 = cljs.core.first.call(null,seq__13143_13162__$1);var k_13169__$1 = cljs.core.nth.call(null,vec__13148_13168,0,null);var v_13170__$1 = cljs.core.nth.call(null,vec__13148_13168,1,null);set_attr_BANG_.call(null,elem__$1,k_13169__$1,v_13170__$1);
{
var G__13171 = cljs.core.next.call(null,seq__13143_13162__$1);
var G__13172 = null;
var G__13173 = 0;
var G__13174 = 0;
seq__13143_13150 = G__13171;
chunk__13144_13151 = G__13172;
count__13145_13152 = G__13173;
i__13146_13153 = G__13174;
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
var G__13149 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13149__delegate.call(this,elem,k,v,kvs);};
G__13149.cljs$lang$maxFixedArity = 3;
G__13149.cljs$lang$applyTo = (function (arglist__13175){
var elem = cljs.core.first(arglist__13175);
arglist__13175 = cljs.core.next(arglist__13175);
var k = cljs.core.first(arglist__13175);
arglist__13175 = cljs.core.next(arglist__13175);
var v = cljs.core.first(arglist__13175);
var kvs = cljs.core.rest(arglist__13175);
return G__13149__delegate(elem,k,v,kvs);
});
G__13149.cljs$core$IFn$_invoke$arity$variadic = G__13149__delegate;
return G__13149;
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
var G__13184__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13180_13185 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__13181_13186 = null;var count__13182_13187 = 0;var i__13183_13188 = 0;while(true){
if((i__13183_13188 < count__13182_13187))
{var k_13189__$1 = cljs.core._nth.call(null,chunk__13181_13186,i__13183_13188);remove_attr_BANG_.call(null,elem__$1,k_13189__$1);
{
var G__13190 = seq__13180_13185;
var G__13191 = chunk__13181_13186;
var G__13192 = count__13182_13187;
var G__13193 = (i__13183_13188 + 1);
seq__13180_13185 = G__13190;
chunk__13181_13186 = G__13191;
count__13182_13187 = G__13192;
i__13183_13188 = G__13193;
continue;
}
} else
{var temp__4092__auto___13194 = cljs.core.seq.call(null,seq__13180_13185);if(temp__4092__auto___13194)
{var seq__13180_13195__$1 = temp__4092__auto___13194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13180_13195__$1))
{var c__5497__auto___13196 = cljs.core.chunk_first.call(null,seq__13180_13195__$1);{
var G__13197 = cljs.core.chunk_rest.call(null,seq__13180_13195__$1);
var G__13198 = c__5497__auto___13196;
var G__13199 = cljs.core.count.call(null,c__5497__auto___13196);
var G__13200 = 0;
seq__13180_13185 = G__13197;
chunk__13181_13186 = G__13198;
count__13182_13187 = G__13199;
i__13183_13188 = G__13200;
continue;
}
} else
{var k_13201__$1 = cljs.core.first.call(null,seq__13180_13195__$1);remove_attr_BANG_.call(null,elem__$1,k_13201__$1);
{
var G__13202 = cljs.core.next.call(null,seq__13180_13195__$1);
var G__13203 = null;
var G__13204 = 0;
var G__13205 = 0;
seq__13180_13185 = G__13202;
chunk__13181_13186 = G__13203;
count__13182_13187 = G__13204;
i__13183_13188 = G__13205;
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
var G__13184 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13184__delegate.call(this,elem,k,ks);};
G__13184.cljs$lang$maxFixedArity = 2;
G__13184.cljs$lang$applyTo = (function (arglist__13206){
var elem = cljs.core.first(arglist__13206);
arglist__13206 = cljs.core.next(arglist__13206);
var k = cljs.core.first(arglist__13206);
var ks = cljs.core.rest(arglist__13206);
return G__13184__delegate(elem,k,ks);
});
G__13184.cljs$core$IFn$_invoke$arity$variadic = G__13184__delegate;
return G__13184;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__13208 = dommy.template.__GT_node_like.call(null,elem);G__13208.style.display = ((show_QMARK_)?"":"none");
return G__13208;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__13210 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__13210,false);
return G__13210;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__13212 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__13212,true);
return G__13212;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__13214 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__13214["constructor"] = Object);
return G__13214;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
