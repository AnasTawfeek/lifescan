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
var G__57161 = (i + class$.length);
start_from = G__57161;
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
{var temp__4090__auto___57186 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___57186))
{var class_list_57187 = temp__4090__auto___57186;var seq__57174_57188 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__57175_57189 = null;var count__57176_57190 = 0;var i__57177_57191 = 0;while(true){
if((i__57177_57191 < count__57176_57190))
{var class_57192 = cljs.core._nth.call(null,chunk__57175_57189,i__57177_57191);class_list_57187.add(class_57192);
{
var G__57193 = seq__57174_57188;
var G__57194 = chunk__57175_57189;
var G__57195 = count__57176_57190;
var G__57196 = (i__57177_57191 + 1);
seq__57174_57188 = G__57193;
chunk__57175_57189 = G__57194;
count__57176_57190 = G__57195;
i__57177_57191 = G__57196;
continue;
}
} else
{var temp__4092__auto___57197 = cljs.core.seq.call(null,seq__57174_57188);if(temp__4092__auto___57197)
{var seq__57174_57198__$1 = temp__4092__auto___57197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57174_57198__$1))
{var c__4017__auto___57199 = cljs.core.chunk_first.call(null,seq__57174_57198__$1);{
var G__57200 = cljs.core.chunk_rest.call(null,seq__57174_57198__$1);
var G__57201 = c__4017__auto___57199;
var G__57202 = cljs.core.count.call(null,c__4017__auto___57199);
var G__57203 = 0;
seq__57174_57188 = G__57200;
chunk__57175_57189 = G__57201;
count__57176_57190 = G__57202;
i__57177_57191 = G__57203;
continue;
}
} else
{var class_57204 = cljs.core.first.call(null,seq__57174_57198__$1);class_list_57187.add(class_57204);
{
var G__57205 = cljs.core.next.call(null,seq__57174_57198__$1);
var G__57206 = null;
var G__57207 = 0;
var G__57208 = 0;
seq__57174_57188 = G__57205;
chunk__57175_57189 = G__57206;
count__57176_57190 = G__57207;
i__57177_57191 = G__57208;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_57209 = elem__$1.className;var seq__57178_57210 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__57179_57211 = null;var count__57180_57212 = 0;var i__57181_57213 = 0;while(true){
if((i__57181_57213 < count__57180_57212))
{var class_57214 = cljs.core._nth.call(null,chunk__57179_57211,i__57181_57213);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_57209,class_57214)))
{} else
{elem__$1.className = (((class_name_57209 === ""))?class_57214:[cljs.core.str(class_name_57209),cljs.core.str(" "),cljs.core.str(class_57214)].join(''));
}
{
var G__57215 = seq__57178_57210;
var G__57216 = chunk__57179_57211;
var G__57217 = count__57180_57212;
var G__57218 = (i__57181_57213 + 1);
seq__57178_57210 = G__57215;
chunk__57179_57211 = G__57216;
count__57180_57212 = G__57217;
i__57181_57213 = G__57218;
continue;
}
} else
{var temp__4092__auto___57219 = cljs.core.seq.call(null,seq__57178_57210);if(temp__4092__auto___57219)
{var seq__57178_57220__$1 = temp__4092__auto___57219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57178_57220__$1))
{var c__4017__auto___57221 = cljs.core.chunk_first.call(null,seq__57178_57220__$1);{
var G__57222 = cljs.core.chunk_rest.call(null,seq__57178_57220__$1);
var G__57223 = c__4017__auto___57221;
var G__57224 = cljs.core.count.call(null,c__4017__auto___57221);
var G__57225 = 0;
seq__57178_57210 = G__57222;
chunk__57179_57211 = G__57223;
count__57180_57212 = G__57224;
i__57181_57213 = G__57225;
continue;
}
} else
{var class_57226 = cljs.core.first.call(null,seq__57178_57220__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_57209,class_57226)))
{} else
{elem__$1.className = (((class_name_57209 === ""))?class_57226:[cljs.core.str(class_name_57209),cljs.core.str(" "),cljs.core.str(class_57226)].join(''));
}
{
var G__57227 = cljs.core.next.call(null,seq__57178_57220__$1);
var G__57228 = null;
var G__57229 = 0;
var G__57230 = 0;
seq__57178_57210 = G__57227;
chunk__57179_57211 = G__57228;
count__57180_57212 = G__57229;
i__57181_57213 = G__57230;
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
var G__57231__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__57182_57232 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__57183_57233 = null;var count__57184_57234 = 0;var i__57185_57235 = 0;while(true){
if((i__57185_57235 < count__57184_57234))
{var c_57236 = cljs.core._nth.call(null,chunk__57183_57233,i__57185_57235);add_class_BANG_.call(null,elem__$1,c_57236);
{
var G__57237 = seq__57182_57232;
var G__57238 = chunk__57183_57233;
var G__57239 = count__57184_57234;
var G__57240 = (i__57185_57235 + 1);
seq__57182_57232 = G__57237;
chunk__57183_57233 = G__57238;
count__57184_57234 = G__57239;
i__57185_57235 = G__57240;
continue;
}
} else
{var temp__4092__auto___57241 = cljs.core.seq.call(null,seq__57182_57232);if(temp__4092__auto___57241)
{var seq__57182_57242__$1 = temp__4092__auto___57241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57182_57242__$1))
{var c__4017__auto___57243 = cljs.core.chunk_first.call(null,seq__57182_57242__$1);{
var G__57244 = cljs.core.chunk_rest.call(null,seq__57182_57242__$1);
var G__57245 = c__4017__auto___57243;
var G__57246 = cljs.core.count.call(null,c__4017__auto___57243);
var G__57247 = 0;
seq__57182_57232 = G__57244;
chunk__57183_57233 = G__57245;
count__57184_57234 = G__57246;
i__57185_57235 = G__57247;
continue;
}
} else
{var c_57248 = cljs.core.first.call(null,seq__57182_57242__$1);add_class_BANG_.call(null,elem__$1,c_57248);
{
var G__57249 = cljs.core.next.call(null,seq__57182_57242__$1);
var G__57250 = null;
var G__57251 = 0;
var G__57252 = 0;
seq__57182_57232 = G__57249;
chunk__57183_57233 = G__57250;
count__57184_57234 = G__57251;
i__57185_57235 = G__57252;
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
var G__57231 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__57231__delegate.call(this,elem,classes,more_classes);};
G__57231.cljs$lang$maxFixedArity = 2;
G__57231.cljs$lang$applyTo = (function (arglist__57253){
var elem = cljs.core.first(arglist__57253);
arglist__57253 = cljs.core.next(arglist__57253);
var classes = cljs.core.first(arglist__57253);
var more_classes = cljs.core.rest(arglist__57253);
return G__57231__delegate(elem,classes,more_classes);
});
G__57231.cljs$core$IFn$_invoke$arity$variadic = G__57231__delegate;
return G__57231;
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
var G__57254 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__57254;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___57263 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___57263))
{var class_list_57264 = temp__4090__auto___57263;class_list_57264.remove(class$__$1);
} else
{var class_name_57265 = elem__$1.className;var new_class_name_57266 = dommy.attrs.remove_class_str.call(null,class_name_57265,class$__$1);if((class_name_57265 === new_class_name_57266))
{} else
{elem__$1.className = new_class_name_57266;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__57267__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__57259 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__57260 = null;var count__57261 = 0;var i__57262 = 0;while(true){
if((i__57262 < count__57261))
{var c = cljs.core._nth.call(null,chunk__57260,i__57262);remove_class_BANG_.call(null,elem__$1,c);
{
var G__57268 = seq__57259;
var G__57269 = chunk__57260;
var G__57270 = count__57261;
var G__57271 = (i__57262 + 1);
seq__57259 = G__57268;
chunk__57260 = G__57269;
count__57261 = G__57270;
i__57262 = G__57271;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__57259);if(temp__4092__auto__)
{var seq__57259__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57259__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__57259__$1);{
var G__57272 = cljs.core.chunk_rest.call(null,seq__57259__$1);
var G__57273 = c__4017__auto__;
var G__57274 = cljs.core.count.call(null,c__4017__auto__);
var G__57275 = 0;
seq__57259 = G__57272;
chunk__57260 = G__57273;
count__57261 = G__57274;
i__57262 = G__57275;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__57259__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__57276 = cljs.core.next.call(null,seq__57259__$1);
var G__57277 = null;
var G__57278 = 0;
var G__57279 = 0;
seq__57259 = G__57276;
chunk__57260 = G__57277;
count__57261 = G__57278;
i__57262 = G__57279;
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
var G__57267 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__57267__delegate.call(this,elem,class$,classes);};
G__57267.cljs$lang$maxFixedArity = 2;
G__57267.cljs$lang$applyTo = (function (arglist__57280){
var elem = cljs.core.first(arglist__57280);
arglist__57280 = cljs.core.next(arglist__57280);
var class$ = cljs.core.first(arglist__57280);
var classes = cljs.core.rest(arglist__57280);
return G__57267__delegate(elem,class$,classes);
});
G__57267.cljs$core$IFn$_invoke$arity$variadic = G__57267__delegate;
return G__57267;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___57281 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___57281))
{var class_list_57282 = temp__4090__auto___57281;class_list_57282.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__57285){var vec__57286 = p__57285;var k = cljs.core.nth.call(null,vec__57286,0,null);var v = cljs.core.nth.call(null,vec__57286,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__57293_57299 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__57294_57300 = null;var count__57295_57301 = 0;var i__57296_57302 = 0;while(true){
if((i__57296_57302 < count__57295_57301))
{var vec__57297_57303 = cljs.core._nth.call(null,chunk__57294_57300,i__57296_57302);var k_57304 = cljs.core.nth.call(null,vec__57297_57303,0,null);var v_57305 = cljs.core.nth.call(null,vec__57297_57303,1,null);(style[cljs.core.name.call(null,k_57304)] = v_57305);
{
var G__57306 = seq__57293_57299;
var G__57307 = chunk__57294_57300;
var G__57308 = count__57295_57301;
var G__57309 = (i__57296_57302 + 1);
seq__57293_57299 = G__57306;
chunk__57294_57300 = G__57307;
count__57295_57301 = G__57308;
i__57296_57302 = G__57309;
continue;
}
} else
{var temp__4092__auto___57310 = cljs.core.seq.call(null,seq__57293_57299);if(temp__4092__auto___57310)
{var seq__57293_57311__$1 = temp__4092__auto___57310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57293_57311__$1))
{var c__4017__auto___57312 = cljs.core.chunk_first.call(null,seq__57293_57311__$1);{
var G__57313 = cljs.core.chunk_rest.call(null,seq__57293_57311__$1);
var G__57314 = c__4017__auto___57312;
var G__57315 = cljs.core.count.call(null,c__4017__auto___57312);
var G__57316 = 0;
seq__57293_57299 = G__57313;
chunk__57294_57300 = G__57314;
count__57295_57301 = G__57315;
i__57296_57302 = G__57316;
continue;
}
} else
{var vec__57298_57317 = cljs.core.first.call(null,seq__57293_57311__$1);var k_57318 = cljs.core.nth.call(null,vec__57298_57317,0,null);var v_57319 = cljs.core.nth.call(null,vec__57298_57317,1,null);(style[cljs.core.name.call(null,k_57318)] = v_57319);
{
var G__57320 = cljs.core.next.call(null,seq__57293_57311__$1);
var G__57321 = null;
var G__57322 = 0;
var G__57323 = 0;
seq__57293_57299 = G__57320;
chunk__57294_57300 = G__57321;
count__57295_57301 = G__57322;
i__57296_57302 = G__57323;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__57324){
var elem = cljs.core.first(arglist__57324);
var kvs = cljs.core.rest(arglist__57324);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__57331_57337 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__57332_57338 = null;var count__57333_57339 = 0;var i__57334_57340 = 0;while(true){
if((i__57334_57340 < count__57333_57339))
{var vec__57335_57341 = cljs.core._nth.call(null,chunk__57332_57338,i__57334_57340);var k_57342 = cljs.core.nth.call(null,vec__57335_57341,0,null);var v_57343 = cljs.core.nth.call(null,vec__57335_57341,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_57342,[cljs.core.str(v_57343),cljs.core.str("px")].join(''));
{
var G__57344 = seq__57331_57337;
var G__57345 = chunk__57332_57338;
var G__57346 = count__57333_57339;
var G__57347 = (i__57334_57340 + 1);
seq__57331_57337 = G__57344;
chunk__57332_57338 = G__57345;
count__57333_57339 = G__57346;
i__57334_57340 = G__57347;
continue;
}
} else
{var temp__4092__auto___57348 = cljs.core.seq.call(null,seq__57331_57337);if(temp__4092__auto___57348)
{var seq__57331_57349__$1 = temp__4092__auto___57348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57331_57349__$1))
{var c__4017__auto___57350 = cljs.core.chunk_first.call(null,seq__57331_57349__$1);{
var G__57351 = cljs.core.chunk_rest.call(null,seq__57331_57349__$1);
var G__57352 = c__4017__auto___57350;
var G__57353 = cljs.core.count.call(null,c__4017__auto___57350);
var G__57354 = 0;
seq__57331_57337 = G__57351;
chunk__57332_57338 = G__57352;
count__57333_57339 = G__57353;
i__57334_57340 = G__57354;
continue;
}
} else
{var vec__57336_57355 = cljs.core.first.call(null,seq__57331_57349__$1);var k_57356 = cljs.core.nth.call(null,vec__57336_57355,0,null);var v_57357 = cljs.core.nth.call(null,vec__57336_57355,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_57356,[cljs.core.str(v_57357),cljs.core.str("px")].join(''));
{
var G__57358 = cljs.core.next.call(null,seq__57331_57349__$1);
var G__57359 = null;
var G__57360 = 0;
var G__57361 = 0;
seq__57331_57337 = G__57358;
chunk__57332_57338 = G__57359;
count__57333_57339 = G__57360;
i__57334_57340 = G__57361;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__57362){
var elem = cljs.core.first(arglist__57362);
var kvs = cljs.core.rest(arglist__57362);
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
{var G__57371 = dommy.template.__GT_node_like.call(null,elem);(G__57371[cljs.core.name.call(null,k)] = v);
return G__57371;
} else
{var G__57372 = dommy.template.__GT_node_like.call(null,elem);G__57372.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__57372;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__57379__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__57373_57380 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__57374_57381 = null;var count__57375_57382 = 0;var i__57376_57383 = 0;while(true){
if((i__57376_57383 < count__57375_57382))
{var vec__57377_57384 = cljs.core._nth.call(null,chunk__57374_57381,i__57376_57383);var k_57385__$1 = cljs.core.nth.call(null,vec__57377_57384,0,null);var v_57386__$1 = cljs.core.nth.call(null,vec__57377_57384,1,null);set_attr_BANG_.call(null,elem__$1,k_57385__$1,v_57386__$1);
{
var G__57387 = seq__57373_57380;
var G__57388 = chunk__57374_57381;
var G__57389 = count__57375_57382;
var G__57390 = (i__57376_57383 + 1);
seq__57373_57380 = G__57387;
chunk__57374_57381 = G__57388;
count__57375_57382 = G__57389;
i__57376_57383 = G__57390;
continue;
}
} else
{var temp__4092__auto___57391 = cljs.core.seq.call(null,seq__57373_57380);if(temp__4092__auto___57391)
{var seq__57373_57392__$1 = temp__4092__auto___57391;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57373_57392__$1))
{var c__4017__auto___57393 = cljs.core.chunk_first.call(null,seq__57373_57392__$1);{
var G__57394 = cljs.core.chunk_rest.call(null,seq__57373_57392__$1);
var G__57395 = c__4017__auto___57393;
var G__57396 = cljs.core.count.call(null,c__4017__auto___57393);
var G__57397 = 0;
seq__57373_57380 = G__57394;
chunk__57374_57381 = G__57395;
count__57375_57382 = G__57396;
i__57376_57383 = G__57397;
continue;
}
} else
{var vec__57378_57398 = cljs.core.first.call(null,seq__57373_57392__$1);var k_57399__$1 = cljs.core.nth.call(null,vec__57378_57398,0,null);var v_57400__$1 = cljs.core.nth.call(null,vec__57378_57398,1,null);set_attr_BANG_.call(null,elem__$1,k_57399__$1,v_57400__$1);
{
var G__57401 = cljs.core.next.call(null,seq__57373_57392__$1);
var G__57402 = null;
var G__57403 = 0;
var G__57404 = 0;
seq__57373_57380 = G__57401;
chunk__57374_57381 = G__57402;
count__57375_57382 = G__57403;
i__57376_57383 = G__57404;
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
var G__57379 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__57379__delegate.call(this,elem,k,v,kvs);};
G__57379.cljs$lang$maxFixedArity = 3;
G__57379.cljs$lang$applyTo = (function (arglist__57405){
var elem = cljs.core.first(arglist__57405);
arglist__57405 = cljs.core.next(arglist__57405);
var k = cljs.core.first(arglist__57405);
arglist__57405 = cljs.core.next(arglist__57405);
var v = cljs.core.first(arglist__57405);
var kvs = cljs.core.rest(arglist__57405);
return G__57379__delegate(elem,k,v,kvs);
});
G__57379.cljs$core$IFn$_invoke$arity$variadic = G__57379__delegate;
return G__57379;
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
var G__57414__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__57410_57415 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__57411_57416 = null;var count__57412_57417 = 0;var i__57413_57418 = 0;while(true){
if((i__57413_57418 < count__57412_57417))
{var k_57419__$1 = cljs.core._nth.call(null,chunk__57411_57416,i__57413_57418);remove_attr_BANG_.call(null,elem__$1,k_57419__$1);
{
var G__57420 = seq__57410_57415;
var G__57421 = chunk__57411_57416;
var G__57422 = count__57412_57417;
var G__57423 = (i__57413_57418 + 1);
seq__57410_57415 = G__57420;
chunk__57411_57416 = G__57421;
count__57412_57417 = G__57422;
i__57413_57418 = G__57423;
continue;
}
} else
{var temp__4092__auto___57424 = cljs.core.seq.call(null,seq__57410_57415);if(temp__4092__auto___57424)
{var seq__57410_57425__$1 = temp__4092__auto___57424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57410_57425__$1))
{var c__4017__auto___57426 = cljs.core.chunk_first.call(null,seq__57410_57425__$1);{
var G__57427 = cljs.core.chunk_rest.call(null,seq__57410_57425__$1);
var G__57428 = c__4017__auto___57426;
var G__57429 = cljs.core.count.call(null,c__4017__auto___57426);
var G__57430 = 0;
seq__57410_57415 = G__57427;
chunk__57411_57416 = G__57428;
count__57412_57417 = G__57429;
i__57413_57418 = G__57430;
continue;
}
} else
{var k_57431__$1 = cljs.core.first.call(null,seq__57410_57425__$1);remove_attr_BANG_.call(null,elem__$1,k_57431__$1);
{
var G__57432 = cljs.core.next.call(null,seq__57410_57425__$1);
var G__57433 = null;
var G__57434 = 0;
var G__57435 = 0;
seq__57410_57415 = G__57432;
chunk__57411_57416 = G__57433;
count__57412_57417 = G__57434;
i__57413_57418 = G__57435;
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
var G__57414 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__57414__delegate.call(this,elem,k,ks);};
G__57414.cljs$lang$maxFixedArity = 2;
G__57414.cljs$lang$applyTo = (function (arglist__57436){
var elem = cljs.core.first(arglist__57436);
arglist__57436 = cljs.core.next(arglist__57436);
var k = cljs.core.first(arglist__57436);
var ks = cljs.core.rest(arglist__57436);
return G__57414__delegate(elem,k,ks);
});
G__57414.cljs$core$IFn$_invoke$arity$variadic = G__57414__delegate;
return G__57414;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__57438 = dommy.template.__GT_node_like.call(null,elem);G__57438.style.display = ((show_QMARK_)?"":"none");
return G__57438;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__57440 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__57440,false);
return G__57440;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__57442 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__57442,true);
return G__57442;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__57444 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__57444["constructor"] = Object);
return G__57444;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
