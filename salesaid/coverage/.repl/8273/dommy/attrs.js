// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__4762__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__4762__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__4762__auto__;
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
var G__12172 = (i + class$.length);
start_from = G__12172;
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
{var temp__4090__auto___12197 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___12197))
{var class_list_12198 = temp__4090__auto___12197;var seq__12185_12199 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__12186_12200 = null;var count__12187_12201 = 0;var i__12188_12202 = 0;while(true){
if((i__12188_12202 < count__12187_12201))
{var class_12203 = cljs.core._nth.call(null,chunk__12186_12200,i__12188_12202);class_list_12198.add(class_12203);
{
var G__12204 = seq__12185_12199;
var G__12205 = chunk__12186_12200;
var G__12206 = count__12187_12201;
var G__12207 = (i__12188_12202 + 1);
seq__12185_12199 = G__12204;
chunk__12186_12200 = G__12205;
count__12187_12201 = G__12206;
i__12188_12202 = G__12207;
continue;
}
} else
{var temp__4092__auto___12208 = cljs.core.seq.call(null,seq__12185_12199);if(temp__4092__auto___12208)
{var seq__12185_12209__$1 = temp__4092__auto___12208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12185_12209__$1))
{var c__5498__auto___12210 = cljs.core.chunk_first.call(null,seq__12185_12209__$1);{
var G__12211 = cljs.core.chunk_rest.call(null,seq__12185_12209__$1);
var G__12212 = c__5498__auto___12210;
var G__12213 = cljs.core.count.call(null,c__5498__auto___12210);
var G__12214 = 0;
seq__12185_12199 = G__12211;
chunk__12186_12200 = G__12212;
count__12187_12201 = G__12213;
i__12188_12202 = G__12214;
continue;
}
} else
{var class_12215 = cljs.core.first.call(null,seq__12185_12209__$1);class_list_12198.add(class_12215);
{
var G__12216 = cljs.core.next.call(null,seq__12185_12209__$1);
var G__12217 = null;
var G__12218 = 0;
var G__12219 = 0;
seq__12185_12199 = G__12216;
chunk__12186_12200 = G__12217;
count__12187_12201 = G__12218;
i__12188_12202 = G__12219;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_12220 = elem__$1.className;var seq__12189_12221 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__12190_12222 = null;var count__12191_12223 = 0;var i__12192_12224 = 0;while(true){
if((i__12192_12224 < count__12191_12223))
{var class_12225 = cljs.core._nth.call(null,chunk__12190_12222,i__12192_12224);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_12220,class_12225)))
{} else
{elem__$1.className = (((class_name_12220 === ""))?class_12225:[cljs.core.str(class_name_12220),cljs.core.str(" "),cljs.core.str(class_12225)].join(''));
}
{
var G__12226 = seq__12189_12221;
var G__12227 = chunk__12190_12222;
var G__12228 = count__12191_12223;
var G__12229 = (i__12192_12224 + 1);
seq__12189_12221 = G__12226;
chunk__12190_12222 = G__12227;
count__12191_12223 = G__12228;
i__12192_12224 = G__12229;
continue;
}
} else
{var temp__4092__auto___12230 = cljs.core.seq.call(null,seq__12189_12221);if(temp__4092__auto___12230)
{var seq__12189_12231__$1 = temp__4092__auto___12230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12189_12231__$1))
{var c__5498__auto___12232 = cljs.core.chunk_first.call(null,seq__12189_12231__$1);{
var G__12233 = cljs.core.chunk_rest.call(null,seq__12189_12231__$1);
var G__12234 = c__5498__auto___12232;
var G__12235 = cljs.core.count.call(null,c__5498__auto___12232);
var G__12236 = 0;
seq__12189_12221 = G__12233;
chunk__12190_12222 = G__12234;
count__12191_12223 = G__12235;
i__12192_12224 = G__12236;
continue;
}
} else
{var class_12237 = cljs.core.first.call(null,seq__12189_12231__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_12220,class_12237)))
{} else
{elem__$1.className = (((class_name_12220 === ""))?class_12237:[cljs.core.str(class_name_12220),cljs.core.str(" "),cljs.core.str(class_12237)].join(''));
}
{
var G__12238 = cljs.core.next.call(null,seq__12189_12231__$1);
var G__12239 = null;
var G__12240 = 0;
var G__12241 = 0;
seq__12189_12221 = G__12238;
chunk__12190_12222 = G__12239;
count__12191_12223 = G__12240;
i__12192_12224 = G__12241;
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
var G__12242__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12193_12243 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__12194_12244 = null;var count__12195_12245 = 0;var i__12196_12246 = 0;while(true){
if((i__12196_12246 < count__12195_12245))
{var c_12247 = cljs.core._nth.call(null,chunk__12194_12244,i__12196_12246);add_class_BANG_.call(null,elem__$1,c_12247);
{
var G__12248 = seq__12193_12243;
var G__12249 = chunk__12194_12244;
var G__12250 = count__12195_12245;
var G__12251 = (i__12196_12246 + 1);
seq__12193_12243 = G__12248;
chunk__12194_12244 = G__12249;
count__12195_12245 = G__12250;
i__12196_12246 = G__12251;
continue;
}
} else
{var temp__4092__auto___12252 = cljs.core.seq.call(null,seq__12193_12243);if(temp__4092__auto___12252)
{var seq__12193_12253__$1 = temp__4092__auto___12252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12193_12253__$1))
{var c__5498__auto___12254 = cljs.core.chunk_first.call(null,seq__12193_12253__$1);{
var G__12255 = cljs.core.chunk_rest.call(null,seq__12193_12253__$1);
var G__12256 = c__5498__auto___12254;
var G__12257 = cljs.core.count.call(null,c__5498__auto___12254);
var G__12258 = 0;
seq__12193_12243 = G__12255;
chunk__12194_12244 = G__12256;
count__12195_12245 = G__12257;
i__12196_12246 = G__12258;
continue;
}
} else
{var c_12259 = cljs.core.first.call(null,seq__12193_12253__$1);add_class_BANG_.call(null,elem__$1,c_12259);
{
var G__12260 = cljs.core.next.call(null,seq__12193_12253__$1);
var G__12261 = null;
var G__12262 = 0;
var G__12263 = 0;
seq__12193_12243 = G__12260;
chunk__12194_12244 = G__12261;
count__12195_12245 = G__12262;
i__12196_12246 = G__12263;
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
var G__12242 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12242__delegate.call(this,elem,classes,more_classes);};
G__12242.cljs$lang$maxFixedArity = 2;
G__12242.cljs$lang$applyTo = (function (arglist__12264){
var elem = cljs.core.first(arglist__12264);
arglist__12264 = cljs.core.next(arglist__12264);
var classes = cljs.core.first(arglist__12264);
var more_classes = cljs.core.rest(arglist__12264);
return G__12242__delegate(elem,classes,more_classes);
});
G__12242.cljs$core$IFn$_invoke$arity$variadic = G__12242__delegate;
return G__12242;
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
var G__12265 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__12265;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___12274 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___12274))
{var class_list_12275 = temp__4090__auto___12274;class_list_12275.remove(class$__$1);
} else
{var class_name_12276 = elem__$1.className;var new_class_name_12277 = dommy.attrs.remove_class_str.call(null,class_name_12276,class$__$1);if((class_name_12276 === new_class_name_12277))
{} else
{elem__$1.className = new_class_name_12277;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__12278__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12270 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__12271 = null;var count__12272 = 0;var i__12273 = 0;while(true){
if((i__12273 < count__12272))
{var c = cljs.core._nth.call(null,chunk__12271,i__12273);remove_class_BANG_.call(null,elem__$1,c);
{
var G__12279 = seq__12270;
var G__12280 = chunk__12271;
var G__12281 = count__12272;
var G__12282 = (i__12273 + 1);
seq__12270 = G__12279;
chunk__12271 = G__12280;
count__12272 = G__12281;
i__12273 = G__12282;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12270);if(temp__4092__auto__)
{var seq__12270__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12270__$1))
{var c__5498__auto__ = cljs.core.chunk_first.call(null,seq__12270__$1);{
var G__12283 = cljs.core.chunk_rest.call(null,seq__12270__$1);
var G__12284 = c__5498__auto__;
var G__12285 = cljs.core.count.call(null,c__5498__auto__);
var G__12286 = 0;
seq__12270 = G__12283;
chunk__12271 = G__12284;
count__12272 = G__12285;
i__12273 = G__12286;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__12270__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__12287 = cljs.core.next.call(null,seq__12270__$1);
var G__12288 = null;
var G__12289 = 0;
var G__12290 = 0;
seq__12270 = G__12287;
chunk__12271 = G__12288;
count__12272 = G__12289;
i__12273 = G__12290;
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
var G__12278 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12278__delegate.call(this,elem,class$,classes);};
G__12278.cljs$lang$maxFixedArity = 2;
G__12278.cljs$lang$applyTo = (function (arglist__12291){
var elem = cljs.core.first(arglist__12291);
arglist__12291 = cljs.core.next(arglist__12291);
var class$ = cljs.core.first(arglist__12291);
var classes = cljs.core.rest(arglist__12291);
return G__12278__delegate(elem,class$,classes);
});
G__12278.cljs$core$IFn$_invoke$arity$variadic = G__12278__delegate;
return G__12278;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___12292 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___12292))
{var class_list_12293 = temp__4090__auto___12292;class_list_12293.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__12296){var vec__12297 = p__12296;var k = cljs.core.nth.call(null,vec__12297,0,null);var v = cljs.core.nth.call(null,vec__12297,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__12304_12310 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__12305_12311 = null;var count__12306_12312 = 0;var i__12307_12313 = 0;while(true){
if((i__12307_12313 < count__12306_12312))
{var vec__12308_12314 = cljs.core._nth.call(null,chunk__12305_12311,i__12307_12313);var k_12315 = cljs.core.nth.call(null,vec__12308_12314,0,null);var v_12316 = cljs.core.nth.call(null,vec__12308_12314,1,null);(style[cljs.core.name.call(null,k_12315)] = v_12316);
{
var G__12317 = seq__12304_12310;
var G__12318 = chunk__12305_12311;
var G__12319 = count__12306_12312;
var G__12320 = (i__12307_12313 + 1);
seq__12304_12310 = G__12317;
chunk__12305_12311 = G__12318;
count__12306_12312 = G__12319;
i__12307_12313 = G__12320;
continue;
}
} else
{var temp__4092__auto___12321 = cljs.core.seq.call(null,seq__12304_12310);if(temp__4092__auto___12321)
{var seq__12304_12322__$1 = temp__4092__auto___12321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12304_12322__$1))
{var c__5498__auto___12323 = cljs.core.chunk_first.call(null,seq__12304_12322__$1);{
var G__12324 = cljs.core.chunk_rest.call(null,seq__12304_12322__$1);
var G__12325 = c__5498__auto___12323;
var G__12326 = cljs.core.count.call(null,c__5498__auto___12323);
var G__12327 = 0;
seq__12304_12310 = G__12324;
chunk__12305_12311 = G__12325;
count__12306_12312 = G__12326;
i__12307_12313 = G__12327;
continue;
}
} else
{var vec__12309_12328 = cljs.core.first.call(null,seq__12304_12322__$1);var k_12329 = cljs.core.nth.call(null,vec__12309_12328,0,null);var v_12330 = cljs.core.nth.call(null,vec__12309_12328,1,null);(style[cljs.core.name.call(null,k_12329)] = v_12330);
{
var G__12331 = cljs.core.next.call(null,seq__12304_12322__$1);
var G__12332 = null;
var G__12333 = 0;
var G__12334 = 0;
seq__12304_12310 = G__12331;
chunk__12305_12311 = G__12332;
count__12306_12312 = G__12333;
i__12307_12313 = G__12334;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__12335){
var elem = cljs.core.first(arglist__12335);
var kvs = cljs.core.rest(arglist__12335);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12342_12348 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__12343_12349 = null;var count__12344_12350 = 0;var i__12345_12351 = 0;while(true){
if((i__12345_12351 < count__12344_12350))
{var vec__12346_12352 = cljs.core._nth.call(null,chunk__12343_12349,i__12345_12351);var k_12353 = cljs.core.nth.call(null,vec__12346_12352,0,null);var v_12354 = cljs.core.nth.call(null,vec__12346_12352,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_12353,[cljs.core.str(v_12354),cljs.core.str("px")].join(''));
{
var G__12355 = seq__12342_12348;
var G__12356 = chunk__12343_12349;
var G__12357 = count__12344_12350;
var G__12358 = (i__12345_12351 + 1);
seq__12342_12348 = G__12355;
chunk__12343_12349 = G__12356;
count__12344_12350 = G__12357;
i__12345_12351 = G__12358;
continue;
}
} else
{var temp__4092__auto___12359 = cljs.core.seq.call(null,seq__12342_12348);if(temp__4092__auto___12359)
{var seq__12342_12360__$1 = temp__4092__auto___12359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12342_12360__$1))
{var c__5498__auto___12361 = cljs.core.chunk_first.call(null,seq__12342_12360__$1);{
var G__12362 = cljs.core.chunk_rest.call(null,seq__12342_12360__$1);
var G__12363 = c__5498__auto___12361;
var G__12364 = cljs.core.count.call(null,c__5498__auto___12361);
var G__12365 = 0;
seq__12342_12348 = G__12362;
chunk__12343_12349 = G__12363;
count__12344_12350 = G__12364;
i__12345_12351 = G__12365;
continue;
}
} else
{var vec__12347_12366 = cljs.core.first.call(null,seq__12342_12360__$1);var k_12367 = cljs.core.nth.call(null,vec__12347_12366,0,null);var v_12368 = cljs.core.nth.call(null,vec__12347_12366,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_12367,[cljs.core.str(v_12368),cljs.core.str("px")].join(''));
{
var G__12369 = cljs.core.next.call(null,seq__12342_12360__$1);
var G__12370 = null;
var G__12371 = 0;
var G__12372 = 0;
seq__12342_12348 = G__12369;
chunk__12343_12349 = G__12370;
count__12344_12350 = G__12371;
i__12345_12351 = G__12372;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__12373){
var elem = cljs.core.first(arglist__12373);
var kvs = cljs.core.rest(arglist__12373);
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
{var G__12382 = dommy.template.__GT_node_like.call(null,elem);(G__12382[cljs.core.name.call(null,k)] = v);
return G__12382;
} else
{var G__12383 = dommy.template.__GT_node_like.call(null,elem);G__12383.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__12383;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__12390__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12384_12391 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__12385_12392 = null;var count__12386_12393 = 0;var i__12387_12394 = 0;while(true){
if((i__12387_12394 < count__12386_12393))
{var vec__12388_12395 = cljs.core._nth.call(null,chunk__12385_12392,i__12387_12394);var k_12396__$1 = cljs.core.nth.call(null,vec__12388_12395,0,null);var v_12397__$1 = cljs.core.nth.call(null,vec__12388_12395,1,null);set_attr_BANG_.call(null,elem__$1,k_12396__$1,v_12397__$1);
{
var G__12398 = seq__12384_12391;
var G__12399 = chunk__12385_12392;
var G__12400 = count__12386_12393;
var G__12401 = (i__12387_12394 + 1);
seq__12384_12391 = G__12398;
chunk__12385_12392 = G__12399;
count__12386_12393 = G__12400;
i__12387_12394 = G__12401;
continue;
}
} else
{var temp__4092__auto___12402 = cljs.core.seq.call(null,seq__12384_12391);if(temp__4092__auto___12402)
{var seq__12384_12403__$1 = temp__4092__auto___12402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12384_12403__$1))
{var c__5498__auto___12404 = cljs.core.chunk_first.call(null,seq__12384_12403__$1);{
var G__12405 = cljs.core.chunk_rest.call(null,seq__12384_12403__$1);
var G__12406 = c__5498__auto___12404;
var G__12407 = cljs.core.count.call(null,c__5498__auto___12404);
var G__12408 = 0;
seq__12384_12391 = G__12405;
chunk__12385_12392 = G__12406;
count__12386_12393 = G__12407;
i__12387_12394 = G__12408;
continue;
}
} else
{var vec__12389_12409 = cljs.core.first.call(null,seq__12384_12403__$1);var k_12410__$1 = cljs.core.nth.call(null,vec__12389_12409,0,null);var v_12411__$1 = cljs.core.nth.call(null,vec__12389_12409,1,null);set_attr_BANG_.call(null,elem__$1,k_12410__$1,v_12411__$1);
{
var G__12412 = cljs.core.next.call(null,seq__12384_12403__$1);
var G__12413 = null;
var G__12414 = 0;
var G__12415 = 0;
seq__12384_12391 = G__12412;
chunk__12385_12392 = G__12413;
count__12386_12393 = G__12414;
i__12387_12394 = G__12415;
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
var G__12390 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__12390__delegate.call(this,elem,k,v,kvs);};
G__12390.cljs$lang$maxFixedArity = 3;
G__12390.cljs$lang$applyTo = (function (arglist__12416){
var elem = cljs.core.first(arglist__12416);
arglist__12416 = cljs.core.next(arglist__12416);
var k = cljs.core.first(arglist__12416);
arglist__12416 = cljs.core.next(arglist__12416);
var v = cljs.core.first(arglist__12416);
var kvs = cljs.core.rest(arglist__12416);
return G__12390__delegate(elem,k,v,kvs);
});
G__12390.cljs$core$IFn$_invoke$arity$variadic = G__12390__delegate;
return G__12390;
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
var G__12425__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12421_12426 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__12422_12427 = null;var count__12423_12428 = 0;var i__12424_12429 = 0;while(true){
if((i__12424_12429 < count__12423_12428))
{var k_12430__$1 = cljs.core._nth.call(null,chunk__12422_12427,i__12424_12429);remove_attr_BANG_.call(null,elem__$1,k_12430__$1);
{
var G__12431 = seq__12421_12426;
var G__12432 = chunk__12422_12427;
var G__12433 = count__12423_12428;
var G__12434 = (i__12424_12429 + 1);
seq__12421_12426 = G__12431;
chunk__12422_12427 = G__12432;
count__12423_12428 = G__12433;
i__12424_12429 = G__12434;
continue;
}
} else
{var temp__4092__auto___12435 = cljs.core.seq.call(null,seq__12421_12426);if(temp__4092__auto___12435)
{var seq__12421_12436__$1 = temp__4092__auto___12435;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12421_12436__$1))
{var c__5498__auto___12437 = cljs.core.chunk_first.call(null,seq__12421_12436__$1);{
var G__12438 = cljs.core.chunk_rest.call(null,seq__12421_12436__$1);
var G__12439 = c__5498__auto___12437;
var G__12440 = cljs.core.count.call(null,c__5498__auto___12437);
var G__12441 = 0;
seq__12421_12426 = G__12438;
chunk__12422_12427 = G__12439;
count__12423_12428 = G__12440;
i__12424_12429 = G__12441;
continue;
}
} else
{var k_12442__$1 = cljs.core.first.call(null,seq__12421_12436__$1);remove_attr_BANG_.call(null,elem__$1,k_12442__$1);
{
var G__12443 = cljs.core.next.call(null,seq__12421_12436__$1);
var G__12444 = null;
var G__12445 = 0;
var G__12446 = 0;
seq__12421_12426 = G__12443;
chunk__12422_12427 = G__12444;
count__12423_12428 = G__12445;
i__12424_12429 = G__12446;
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
var G__12425 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12425__delegate.call(this,elem,k,ks);};
G__12425.cljs$lang$maxFixedArity = 2;
G__12425.cljs$lang$applyTo = (function (arglist__12447){
var elem = cljs.core.first(arglist__12447);
arglist__12447 = cljs.core.next(arglist__12447);
var k = cljs.core.first(arglist__12447);
var ks = cljs.core.rest(arglist__12447);
return G__12425__delegate(elem,k,ks);
});
G__12425.cljs$core$IFn$_invoke$arity$variadic = G__12425__delegate;
return G__12425;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__12449 = dommy.template.__GT_node_like.call(null,elem);G__12449.style.display = ((show_QMARK_)?"":"none");
return G__12449;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__12451 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12451,false);
return G__12451;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__12453 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12453,true);
return G__12453;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__12455 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__12455["constructor"] = Object);
return G__12455;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
