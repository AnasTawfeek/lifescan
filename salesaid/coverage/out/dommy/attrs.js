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
var G__218016 = (i + class$.length);
start_from = G__218016;
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
{var temp__4090__auto___218041 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___218041))
{var class_list_218042 = temp__4090__auto___218041;var seq__218029_218043 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__218030_218044 = null;var count__218031_218045 = 0;var i__218032_218046 = 0;while(true){
if((i__218032_218046 < count__218031_218045))
{var class_218047 = cljs.core._nth.call(null,chunk__218030_218044,i__218032_218046);class_list_218042.add(class_218047);
{
var G__218048 = seq__218029_218043;
var G__218049 = chunk__218030_218044;
var G__218050 = count__218031_218045;
var G__218051 = (i__218032_218046 + 1);
seq__218029_218043 = G__218048;
chunk__218030_218044 = G__218049;
count__218031_218045 = G__218050;
i__218032_218046 = G__218051;
continue;
}
} else
{var temp__4092__auto___218052 = cljs.core.seq.call(null,seq__218029_218043);if(temp__4092__auto___218052)
{var seq__218029_218053__$1 = temp__4092__auto___218052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__218029_218053__$1))
{var c__4017__auto___218054 = cljs.core.chunk_first.call(null,seq__218029_218053__$1);{
var G__218055 = cljs.core.chunk_rest.call(null,seq__218029_218053__$1);
var G__218056 = c__4017__auto___218054;
var G__218057 = cljs.core.count.call(null,c__4017__auto___218054);
var G__218058 = 0;
seq__218029_218043 = G__218055;
chunk__218030_218044 = G__218056;
count__218031_218045 = G__218057;
i__218032_218046 = G__218058;
continue;
}
} else
{var class_218059 = cljs.core.first.call(null,seq__218029_218053__$1);class_list_218042.add(class_218059);
{
var G__218060 = cljs.core.next.call(null,seq__218029_218053__$1);
var G__218061 = null;
var G__218062 = 0;
var G__218063 = 0;
seq__218029_218043 = G__218060;
chunk__218030_218044 = G__218061;
count__218031_218045 = G__218062;
i__218032_218046 = G__218063;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_218064 = elem__$1.className;var seq__218033_218065 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__218034_218066 = null;var count__218035_218067 = 0;var i__218036_218068 = 0;while(true){
if((i__218036_218068 < count__218035_218067))
{var class_218069 = cljs.core._nth.call(null,chunk__218034_218066,i__218036_218068);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_218064,class_218069)))
{} else
{elem__$1.className = (((class_name_218064 === ""))?class_218069:[cljs.core.str(class_name_218064),cljs.core.str(" "),cljs.core.str(class_218069)].join(''));
}
{
var G__218070 = seq__218033_218065;
var G__218071 = chunk__218034_218066;
var G__218072 = count__218035_218067;
var G__218073 = (i__218036_218068 + 1);
seq__218033_218065 = G__218070;
chunk__218034_218066 = G__218071;
count__218035_218067 = G__218072;
i__218036_218068 = G__218073;
continue;
}
} else
{var temp__4092__auto___218074 = cljs.core.seq.call(null,seq__218033_218065);if(temp__4092__auto___218074)
{var seq__218033_218075__$1 = temp__4092__auto___218074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__218033_218075__$1))
{var c__4017__auto___218076 = cljs.core.chunk_first.call(null,seq__218033_218075__$1);{
var G__218077 = cljs.core.chunk_rest.call(null,seq__218033_218075__$1);
var G__218078 = c__4017__auto___218076;
var G__218079 = cljs.core.count.call(null,c__4017__auto___218076);
var G__218080 = 0;
seq__218033_218065 = G__218077;
chunk__218034_218066 = G__218078;
count__218035_218067 = G__218079;
i__218036_218068 = G__218080;
continue;
}
} else
{var class_218081 = cljs.core.first.call(null,seq__218033_218075__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_218064,class_218081)))
{} else
{elem__$1.className = (((class_name_218064 === ""))?class_218081:[cljs.core.str(class_name_218064),cljs.core.str(" "),cljs.core.str(class_218081)].join(''));
}
{
var G__218082 = cljs.core.next.call(null,seq__218033_218075__$1);
var G__218083 = null;
var G__218084 = 0;
var G__218085 = 0;
seq__218033_218065 = G__218082;
chunk__218034_218066 = G__218083;
count__218035_218067 = G__218084;
i__218036_218068 = G__218085;
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
var G__218086__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__218037_218087 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__218038_218088 = null;var count__218039_218089 = 0;var i__218040_218090 = 0;while(true){
if((i__218040_218090 < count__218039_218089))
{var c_218091 = cljs.core._nth.call(null,chunk__218038_218088,i__218040_218090);add_class_BANG_.call(null,elem__$1,c_218091);
{
var G__218092 = seq__218037_218087;
var G__218093 = chunk__218038_218088;
var G__218094 = count__218039_218089;
var G__218095 = (i__218040_218090 + 1);
seq__218037_218087 = G__218092;
chunk__218038_218088 = G__218093;
count__218039_218089 = G__218094;
i__218040_218090 = G__218095;
continue;
}
} else
{var temp__4092__auto___218096 = cljs.core.seq.call(null,seq__218037_218087);if(temp__4092__auto___218096)
{var seq__218037_218097__$1 = temp__4092__auto___218096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__218037_218097__$1))
{var c__4017__auto___218098 = cljs.core.chunk_first.call(null,seq__218037_218097__$1);{
var G__218099 = cljs.core.chunk_rest.call(null,seq__218037_218097__$1);
var G__218100 = c__4017__auto___218098;
var G__218101 = cljs.core.count.call(null,c__4017__auto___218098);
var G__218102 = 0;
seq__218037_218087 = G__218099;
chunk__218038_218088 = G__218100;
count__218039_218089 = G__218101;
i__218040_218090 = G__218102;
continue;
}
} else
{var c_218103 = cljs.core.first.call(null,seq__218037_218097__$1);add_class_BANG_.call(null,elem__$1,c_218103);
{
var G__218104 = cljs.core.next.call(null,seq__218037_218097__$1);
var G__218105 = null;
var G__218106 = 0;
var G__218107 = 0;
seq__218037_218087 = G__218104;
chunk__218038_218088 = G__218105;
count__218039_218089 = G__218106;
i__218040_218090 = G__218107;
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
var G__218086 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__218086__delegate.call(this,elem,classes,more_classes);};
G__218086.cljs$lang$maxFixedArity = 2;
G__218086.cljs$lang$applyTo = (function (arglist__218108){
var elem = cljs.core.first(arglist__218108);
arglist__218108 = cljs.core.next(arglist__218108);
var classes = cljs.core.first(arglist__218108);
var more_classes = cljs.core.rest(arglist__218108);
return G__218086__delegate(elem,classes,more_classes);
});
G__218086.cljs$core$IFn$_invoke$arity$variadic = G__218086__delegate;
return G__218086;
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
var G__218109 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__218109;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___218118 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___218118))
{var class_list_218119 = temp__4090__auto___218118;class_list_218119.remove(class$__$1);
} else
{var class_name_218120 = elem__$1.className;var new_class_name_218121 = dommy.attrs.remove_class_str.call(null,class_name_218120,class$__$1);if((class_name_218120 === new_class_name_218121))
{} else
{elem__$1.className = new_class_name_218121;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__218122__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__218114 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__218115 = null;var count__218116 = 0;var i__218117 = 0;while(true){
if((i__218117 < count__218116))
{var c = cljs.core._nth.call(null,chunk__218115,i__218117);remove_class_BANG_.call(null,elem__$1,c);
{
var G__218123 = seq__218114;
var G__218124 = chunk__218115;
var G__218125 = count__218116;
var G__218126 = (i__218117 + 1);
seq__218114 = G__218123;
chunk__218115 = G__218124;
count__218116 = G__218125;
i__218117 = G__218126;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__218114);if(temp__4092__auto__)
{var seq__218114__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__218114__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__218114__$1);{
var G__218127 = cljs.core.chunk_rest.call(null,seq__218114__$1);
var G__218128 = c__4017__auto__;
var G__218129 = cljs.core.count.call(null,c__4017__auto__);
var G__218130 = 0;
seq__218114 = G__218127;
chunk__218115 = G__218128;
count__218116 = G__218129;
i__218117 = G__218130;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__218114__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__218131 = cljs.core.next.call(null,seq__218114__$1);
var G__218132 = null;
var G__218133 = 0;
var G__218134 = 0;
seq__218114 = G__218131;
chunk__218115 = G__218132;
count__218116 = G__218133;
i__218117 = G__218134;
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
var G__218122 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__218122__delegate.call(this,elem,class$,classes);};
G__218122.cljs$lang$maxFixedArity = 2;
G__218122.cljs$lang$applyTo = (function (arglist__218135){
var elem = cljs.core.first(arglist__218135);
arglist__218135 = cljs.core.next(arglist__218135);
var class$ = cljs.core.first(arglist__218135);
var classes = cljs.core.rest(arglist__218135);
return G__218122__delegate(elem,class$,classes);
});
G__218122.cljs$core$IFn$_invoke$arity$variadic = G__218122__delegate;
return G__218122;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___218136 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___218136))
{var class_list_218137 = temp__4090__auto___218136;class_list_218137.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__218140){var vec__218141 = p__218140;var k = cljs.core.nth.call(null,vec__218141,0,null);var v = cljs.core.nth.call(null,vec__218141,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__218148_218154 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__218149_218155 = null;var count__218150_218156 = 0;var i__218151_218157 = 0;while(true){
if((i__218151_218157 < count__218150_218156))
{var vec__218152_218158 = cljs.core._nth.call(null,chunk__218149_218155,i__218151_218157);var k_218159 = cljs.core.nth.call(null,vec__218152_218158,0,null);var v_218160 = cljs.core.nth.call(null,vec__218152_218158,1,null);(style[cljs.core.name.call(null,k_218159)] = v_218160);
{
var G__218161 = seq__218148_218154;
var G__218162 = chunk__218149_218155;
var G__218163 = count__218150_218156;
var G__218164 = (i__218151_218157 + 1);
seq__218148_218154 = G__218161;
chunk__218149_218155 = G__218162;
count__218150_218156 = G__218163;
i__218151_218157 = G__218164;
continue;
}
} else
{var temp__4092__auto___218165 = cljs.core.seq.call(null,seq__218148_218154);if(temp__4092__auto___218165)
{var seq__218148_218166__$1 = temp__4092__auto___218165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__218148_218166__$1))
{var c__4017__auto___218167 = cljs.core.chunk_first.call(null,seq__218148_218166__$1);{
var G__218168 = cljs.core.chunk_rest.call(null,seq__218148_218166__$1);
var G__218169 = c__4017__auto___218167;
var G__218170 = cljs.core.count.call(null,c__4017__auto___218167);
var G__218171 = 0;
seq__218148_218154 = G__218168;
chunk__218149_218155 = G__218169;
count__218150_218156 = G__218170;
i__218151_218157 = G__218171;
continue;
}
} else
{var vec__218153_218172 = cljs.core.first.call(null,seq__218148_218166__$1);var k_218173 = cljs.core.nth.call(null,vec__218153_218172,0,null);var v_218174 = cljs.core.nth.call(null,vec__218153_218172,1,null);(style[cljs.core.name.call(null,k_218173)] = v_218174);
{
var G__218175 = cljs.core.next.call(null,seq__218148_218166__$1);
var G__218176 = null;
var G__218177 = 0;
var G__218178 = 0;
seq__218148_218154 = G__218175;
chunk__218149_218155 = G__218176;
count__218150_218156 = G__218177;
i__218151_218157 = G__218178;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__218179){
var elem = cljs.core.first(arglist__218179);
var kvs = cljs.core.rest(arglist__218179);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__218186_218192 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__218187_218193 = null;var count__218188_218194 = 0;var i__218189_218195 = 0;while(true){
if((i__218189_218195 < count__218188_218194))
{var vec__218190_218196 = cljs.core._nth.call(null,chunk__218187_218193,i__218189_218195);var k_218197 = cljs.core.nth.call(null,vec__218190_218196,0,null);var v_218198 = cljs.core.nth.call(null,vec__218190_218196,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_218197,[cljs.core.str(v_218198),cljs.core.str("px")].join(''));
{
var G__218199 = seq__218186_218192;
var G__218200 = chunk__218187_218193;
var G__218201 = count__218188_218194;
var G__218202 = (i__218189_218195 + 1);
seq__218186_218192 = G__218199;
chunk__218187_218193 = G__218200;
count__218188_218194 = G__218201;
i__218189_218195 = G__218202;
continue;
}
} else
{var temp__4092__auto___218203 = cljs.core.seq.call(null,seq__218186_218192);if(temp__4092__auto___218203)
{var seq__218186_218204__$1 = temp__4092__auto___218203;if(cljs.core.chunked_seq_QMARK_.call(null,seq__218186_218204__$1))
{var c__4017__auto___218205 = cljs.core.chunk_first.call(null,seq__218186_218204__$1);{
var G__218206 = cljs.core.chunk_rest.call(null,seq__218186_218204__$1);
var G__218207 = c__4017__auto___218205;
var G__218208 = cljs.core.count.call(null,c__4017__auto___218205);
var G__218209 = 0;
seq__218186_218192 = G__218206;
chunk__218187_218193 = G__218207;
count__218188_218194 = G__218208;
i__218189_218195 = G__218209;
continue;
}
} else
{var vec__218191_218210 = cljs.core.first.call(null,seq__218186_218204__$1);var k_218211 = cljs.core.nth.call(null,vec__218191_218210,0,null);var v_218212 = cljs.core.nth.call(null,vec__218191_218210,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_218211,[cljs.core.str(v_218212),cljs.core.str("px")].join(''));
{
var G__218213 = cljs.core.next.call(null,seq__218186_218204__$1);
var G__218214 = null;
var G__218215 = 0;
var G__218216 = 0;
seq__218186_218192 = G__218213;
chunk__218187_218193 = G__218214;
count__218188_218194 = G__218215;
i__218189_218195 = G__218216;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__218217){
var elem = cljs.core.first(arglist__218217);
var kvs = cljs.core.rest(arglist__218217);
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
{var G__218226 = dommy.template.__GT_node_like.call(null,elem);(G__218226[cljs.core.name.call(null,k)] = v);
return G__218226;
} else
{var G__218227 = dommy.template.__GT_node_like.call(null,elem);G__218227.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__218227;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__218234__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__218228_218235 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__218229_218236 = null;var count__218230_218237 = 0;var i__218231_218238 = 0;while(true){
if((i__218231_218238 < count__218230_218237))
{var vec__218232_218239 = cljs.core._nth.call(null,chunk__218229_218236,i__218231_218238);var k_218240__$1 = cljs.core.nth.call(null,vec__218232_218239,0,null);var v_218241__$1 = cljs.core.nth.call(null,vec__218232_218239,1,null);set_attr_BANG_.call(null,elem__$1,k_218240__$1,v_218241__$1);
{
var G__218242 = seq__218228_218235;
var G__218243 = chunk__218229_218236;
var G__218244 = count__218230_218237;
var G__218245 = (i__218231_218238 + 1);
seq__218228_218235 = G__218242;
chunk__218229_218236 = G__218243;
count__218230_218237 = G__218244;
i__218231_218238 = G__218245;
continue;
}
} else
{var temp__4092__auto___218246 = cljs.core.seq.call(null,seq__218228_218235);if(temp__4092__auto___218246)
{var seq__218228_218247__$1 = temp__4092__auto___218246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__218228_218247__$1))
{var c__4017__auto___218248 = cljs.core.chunk_first.call(null,seq__218228_218247__$1);{
var G__218249 = cljs.core.chunk_rest.call(null,seq__218228_218247__$1);
var G__218250 = c__4017__auto___218248;
var G__218251 = cljs.core.count.call(null,c__4017__auto___218248);
var G__218252 = 0;
seq__218228_218235 = G__218249;
chunk__218229_218236 = G__218250;
count__218230_218237 = G__218251;
i__218231_218238 = G__218252;
continue;
}
} else
{var vec__218233_218253 = cljs.core.first.call(null,seq__218228_218247__$1);var k_218254__$1 = cljs.core.nth.call(null,vec__218233_218253,0,null);var v_218255__$1 = cljs.core.nth.call(null,vec__218233_218253,1,null);set_attr_BANG_.call(null,elem__$1,k_218254__$1,v_218255__$1);
{
var G__218256 = cljs.core.next.call(null,seq__218228_218247__$1);
var G__218257 = null;
var G__218258 = 0;
var G__218259 = 0;
seq__218228_218235 = G__218256;
chunk__218229_218236 = G__218257;
count__218230_218237 = G__218258;
i__218231_218238 = G__218259;
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
var G__218234 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__218234__delegate.call(this,elem,k,v,kvs);};
G__218234.cljs$lang$maxFixedArity = 3;
G__218234.cljs$lang$applyTo = (function (arglist__218260){
var elem = cljs.core.first(arglist__218260);
arglist__218260 = cljs.core.next(arglist__218260);
var k = cljs.core.first(arglist__218260);
arglist__218260 = cljs.core.next(arglist__218260);
var v = cljs.core.first(arglist__218260);
var kvs = cljs.core.rest(arglist__218260);
return G__218234__delegate(elem,k,v,kvs);
});
G__218234.cljs$core$IFn$_invoke$arity$variadic = G__218234__delegate;
return G__218234;
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
var G__218269__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__218265_218270 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__218266_218271 = null;var count__218267_218272 = 0;var i__218268_218273 = 0;while(true){
if((i__218268_218273 < count__218267_218272))
{var k_218274__$1 = cljs.core._nth.call(null,chunk__218266_218271,i__218268_218273);remove_attr_BANG_.call(null,elem__$1,k_218274__$1);
{
var G__218275 = seq__218265_218270;
var G__218276 = chunk__218266_218271;
var G__218277 = count__218267_218272;
var G__218278 = (i__218268_218273 + 1);
seq__218265_218270 = G__218275;
chunk__218266_218271 = G__218276;
count__218267_218272 = G__218277;
i__218268_218273 = G__218278;
continue;
}
} else
{var temp__4092__auto___218279 = cljs.core.seq.call(null,seq__218265_218270);if(temp__4092__auto___218279)
{var seq__218265_218280__$1 = temp__4092__auto___218279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__218265_218280__$1))
{var c__4017__auto___218281 = cljs.core.chunk_first.call(null,seq__218265_218280__$1);{
var G__218282 = cljs.core.chunk_rest.call(null,seq__218265_218280__$1);
var G__218283 = c__4017__auto___218281;
var G__218284 = cljs.core.count.call(null,c__4017__auto___218281);
var G__218285 = 0;
seq__218265_218270 = G__218282;
chunk__218266_218271 = G__218283;
count__218267_218272 = G__218284;
i__218268_218273 = G__218285;
continue;
}
} else
{var k_218286__$1 = cljs.core.first.call(null,seq__218265_218280__$1);remove_attr_BANG_.call(null,elem__$1,k_218286__$1);
{
var G__218287 = cljs.core.next.call(null,seq__218265_218280__$1);
var G__218288 = null;
var G__218289 = 0;
var G__218290 = 0;
seq__218265_218270 = G__218287;
chunk__218266_218271 = G__218288;
count__218267_218272 = G__218289;
i__218268_218273 = G__218290;
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
var G__218269 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__218269__delegate.call(this,elem,k,ks);};
G__218269.cljs$lang$maxFixedArity = 2;
G__218269.cljs$lang$applyTo = (function (arglist__218291){
var elem = cljs.core.first(arglist__218291);
arglist__218291 = cljs.core.next(arglist__218291);
var k = cljs.core.first(arglist__218291);
var ks = cljs.core.rest(arglist__218291);
return G__218269__delegate(elem,k,ks);
});
G__218269.cljs$core$IFn$_invoke$arity$variadic = G__218269__delegate;
return G__218269;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__218293 = dommy.template.__GT_node_like.call(null,elem);G__218293.style.display = ((show_QMARK_)?"":"none");
return G__218293;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__218295 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__218295,false);
return G__218295;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__218297 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__218297,true);
return G__218297;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__218299 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__218299["constructor"] = Object);
return G__218299;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
