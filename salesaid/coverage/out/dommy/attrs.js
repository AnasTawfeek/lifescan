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
var G__416289 = (i + class$.length);
start_from = G__416289;
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
{var temp__4090__auto___416314 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___416314))
{var class_list_416315 = temp__4090__auto___416314;var seq__416302_416316 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__416303_416317 = null;var count__416304_416318 = 0;var i__416305_416319 = 0;while(true){
if((i__416305_416319 < count__416304_416318))
{var class_416320 = cljs.core._nth.call(null,chunk__416303_416317,i__416305_416319);class_list_416315.add(class_416320);
{
var G__416321 = seq__416302_416316;
var G__416322 = chunk__416303_416317;
var G__416323 = count__416304_416318;
var G__416324 = (i__416305_416319 + 1);
seq__416302_416316 = G__416321;
chunk__416303_416317 = G__416322;
count__416304_416318 = G__416323;
i__416305_416319 = G__416324;
continue;
}
} else
{var temp__4092__auto___416325 = cljs.core.seq.call(null,seq__416302_416316);if(temp__4092__auto___416325)
{var seq__416302_416326__$1 = temp__4092__auto___416325;if(cljs.core.chunked_seq_QMARK_.call(null,seq__416302_416326__$1))
{var c__4017__auto___416327 = cljs.core.chunk_first.call(null,seq__416302_416326__$1);{
var G__416328 = cljs.core.chunk_rest.call(null,seq__416302_416326__$1);
var G__416329 = c__4017__auto___416327;
var G__416330 = cljs.core.count.call(null,c__4017__auto___416327);
var G__416331 = 0;
seq__416302_416316 = G__416328;
chunk__416303_416317 = G__416329;
count__416304_416318 = G__416330;
i__416305_416319 = G__416331;
continue;
}
} else
{var class_416332 = cljs.core.first.call(null,seq__416302_416326__$1);class_list_416315.add(class_416332);
{
var G__416333 = cljs.core.next.call(null,seq__416302_416326__$1);
var G__416334 = null;
var G__416335 = 0;
var G__416336 = 0;
seq__416302_416316 = G__416333;
chunk__416303_416317 = G__416334;
count__416304_416318 = G__416335;
i__416305_416319 = G__416336;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_416337 = elem__$1.className;var seq__416306_416338 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__416307_416339 = null;var count__416308_416340 = 0;var i__416309_416341 = 0;while(true){
if((i__416309_416341 < count__416308_416340))
{var class_416342 = cljs.core._nth.call(null,chunk__416307_416339,i__416309_416341);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_416337,class_416342)))
{} else
{elem__$1.className = (((class_name_416337 === ""))?class_416342:[cljs.core.str(class_name_416337),cljs.core.str(" "),cljs.core.str(class_416342)].join(''));
}
{
var G__416343 = seq__416306_416338;
var G__416344 = chunk__416307_416339;
var G__416345 = count__416308_416340;
var G__416346 = (i__416309_416341 + 1);
seq__416306_416338 = G__416343;
chunk__416307_416339 = G__416344;
count__416308_416340 = G__416345;
i__416309_416341 = G__416346;
continue;
}
} else
{var temp__4092__auto___416347 = cljs.core.seq.call(null,seq__416306_416338);if(temp__4092__auto___416347)
{var seq__416306_416348__$1 = temp__4092__auto___416347;if(cljs.core.chunked_seq_QMARK_.call(null,seq__416306_416348__$1))
{var c__4017__auto___416349 = cljs.core.chunk_first.call(null,seq__416306_416348__$1);{
var G__416350 = cljs.core.chunk_rest.call(null,seq__416306_416348__$1);
var G__416351 = c__4017__auto___416349;
var G__416352 = cljs.core.count.call(null,c__4017__auto___416349);
var G__416353 = 0;
seq__416306_416338 = G__416350;
chunk__416307_416339 = G__416351;
count__416308_416340 = G__416352;
i__416309_416341 = G__416353;
continue;
}
} else
{var class_416354 = cljs.core.first.call(null,seq__416306_416348__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_416337,class_416354)))
{} else
{elem__$1.className = (((class_name_416337 === ""))?class_416354:[cljs.core.str(class_name_416337),cljs.core.str(" "),cljs.core.str(class_416354)].join(''));
}
{
var G__416355 = cljs.core.next.call(null,seq__416306_416348__$1);
var G__416356 = null;
var G__416357 = 0;
var G__416358 = 0;
seq__416306_416338 = G__416355;
chunk__416307_416339 = G__416356;
count__416308_416340 = G__416357;
i__416309_416341 = G__416358;
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
var G__416359__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__416310_416360 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__416311_416361 = null;var count__416312_416362 = 0;var i__416313_416363 = 0;while(true){
if((i__416313_416363 < count__416312_416362))
{var c_416364 = cljs.core._nth.call(null,chunk__416311_416361,i__416313_416363);add_class_BANG_.call(null,elem__$1,c_416364);
{
var G__416365 = seq__416310_416360;
var G__416366 = chunk__416311_416361;
var G__416367 = count__416312_416362;
var G__416368 = (i__416313_416363 + 1);
seq__416310_416360 = G__416365;
chunk__416311_416361 = G__416366;
count__416312_416362 = G__416367;
i__416313_416363 = G__416368;
continue;
}
} else
{var temp__4092__auto___416369 = cljs.core.seq.call(null,seq__416310_416360);if(temp__4092__auto___416369)
{var seq__416310_416370__$1 = temp__4092__auto___416369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__416310_416370__$1))
{var c__4017__auto___416371 = cljs.core.chunk_first.call(null,seq__416310_416370__$1);{
var G__416372 = cljs.core.chunk_rest.call(null,seq__416310_416370__$1);
var G__416373 = c__4017__auto___416371;
var G__416374 = cljs.core.count.call(null,c__4017__auto___416371);
var G__416375 = 0;
seq__416310_416360 = G__416372;
chunk__416311_416361 = G__416373;
count__416312_416362 = G__416374;
i__416313_416363 = G__416375;
continue;
}
} else
{var c_416376 = cljs.core.first.call(null,seq__416310_416370__$1);add_class_BANG_.call(null,elem__$1,c_416376);
{
var G__416377 = cljs.core.next.call(null,seq__416310_416370__$1);
var G__416378 = null;
var G__416379 = 0;
var G__416380 = 0;
seq__416310_416360 = G__416377;
chunk__416311_416361 = G__416378;
count__416312_416362 = G__416379;
i__416313_416363 = G__416380;
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
var G__416359 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__416359__delegate.call(this,elem,classes,more_classes);};
G__416359.cljs$lang$maxFixedArity = 2;
G__416359.cljs$lang$applyTo = (function (arglist__416381){
var elem = cljs.core.first(arglist__416381);
arglist__416381 = cljs.core.next(arglist__416381);
var classes = cljs.core.first(arglist__416381);
var more_classes = cljs.core.rest(arglist__416381);
return G__416359__delegate(elem,classes,more_classes);
});
G__416359.cljs$core$IFn$_invoke$arity$variadic = G__416359__delegate;
return G__416359;
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
var G__416382 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__416382;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___416391 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___416391))
{var class_list_416392 = temp__4090__auto___416391;class_list_416392.remove(class$__$1);
} else
{var class_name_416393 = elem__$1.className;var new_class_name_416394 = dommy.attrs.remove_class_str.call(null,class_name_416393,class$__$1);if((class_name_416393 === new_class_name_416394))
{} else
{elem__$1.className = new_class_name_416394;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__416395__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__416387 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__416388 = null;var count__416389 = 0;var i__416390 = 0;while(true){
if((i__416390 < count__416389))
{var c = cljs.core._nth.call(null,chunk__416388,i__416390);remove_class_BANG_.call(null,elem__$1,c);
{
var G__416396 = seq__416387;
var G__416397 = chunk__416388;
var G__416398 = count__416389;
var G__416399 = (i__416390 + 1);
seq__416387 = G__416396;
chunk__416388 = G__416397;
count__416389 = G__416398;
i__416390 = G__416399;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__416387);if(temp__4092__auto__)
{var seq__416387__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__416387__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__416387__$1);{
var G__416400 = cljs.core.chunk_rest.call(null,seq__416387__$1);
var G__416401 = c__4017__auto__;
var G__416402 = cljs.core.count.call(null,c__4017__auto__);
var G__416403 = 0;
seq__416387 = G__416400;
chunk__416388 = G__416401;
count__416389 = G__416402;
i__416390 = G__416403;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__416387__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__416404 = cljs.core.next.call(null,seq__416387__$1);
var G__416405 = null;
var G__416406 = 0;
var G__416407 = 0;
seq__416387 = G__416404;
chunk__416388 = G__416405;
count__416389 = G__416406;
i__416390 = G__416407;
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
var G__416395 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__416395__delegate.call(this,elem,class$,classes);};
G__416395.cljs$lang$maxFixedArity = 2;
G__416395.cljs$lang$applyTo = (function (arglist__416408){
var elem = cljs.core.first(arglist__416408);
arglist__416408 = cljs.core.next(arglist__416408);
var class$ = cljs.core.first(arglist__416408);
var classes = cljs.core.rest(arglist__416408);
return G__416395__delegate(elem,class$,classes);
});
G__416395.cljs$core$IFn$_invoke$arity$variadic = G__416395__delegate;
return G__416395;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___416409 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___416409))
{var class_list_416410 = temp__4090__auto___416409;class_list_416410.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__416413){var vec__416414 = p__416413;var k = cljs.core.nth.call(null,vec__416414,0,null);var v = cljs.core.nth.call(null,vec__416414,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__416421_416427 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__416422_416428 = null;var count__416423_416429 = 0;var i__416424_416430 = 0;while(true){
if((i__416424_416430 < count__416423_416429))
{var vec__416425_416431 = cljs.core._nth.call(null,chunk__416422_416428,i__416424_416430);var k_416432 = cljs.core.nth.call(null,vec__416425_416431,0,null);var v_416433 = cljs.core.nth.call(null,vec__416425_416431,1,null);(style[cljs.core.name.call(null,k_416432)] = v_416433);
{
var G__416434 = seq__416421_416427;
var G__416435 = chunk__416422_416428;
var G__416436 = count__416423_416429;
var G__416437 = (i__416424_416430 + 1);
seq__416421_416427 = G__416434;
chunk__416422_416428 = G__416435;
count__416423_416429 = G__416436;
i__416424_416430 = G__416437;
continue;
}
} else
{var temp__4092__auto___416438 = cljs.core.seq.call(null,seq__416421_416427);if(temp__4092__auto___416438)
{var seq__416421_416439__$1 = temp__4092__auto___416438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__416421_416439__$1))
{var c__4017__auto___416440 = cljs.core.chunk_first.call(null,seq__416421_416439__$1);{
var G__416441 = cljs.core.chunk_rest.call(null,seq__416421_416439__$1);
var G__416442 = c__4017__auto___416440;
var G__416443 = cljs.core.count.call(null,c__4017__auto___416440);
var G__416444 = 0;
seq__416421_416427 = G__416441;
chunk__416422_416428 = G__416442;
count__416423_416429 = G__416443;
i__416424_416430 = G__416444;
continue;
}
} else
{var vec__416426_416445 = cljs.core.first.call(null,seq__416421_416439__$1);var k_416446 = cljs.core.nth.call(null,vec__416426_416445,0,null);var v_416447 = cljs.core.nth.call(null,vec__416426_416445,1,null);(style[cljs.core.name.call(null,k_416446)] = v_416447);
{
var G__416448 = cljs.core.next.call(null,seq__416421_416439__$1);
var G__416449 = null;
var G__416450 = 0;
var G__416451 = 0;
seq__416421_416427 = G__416448;
chunk__416422_416428 = G__416449;
count__416423_416429 = G__416450;
i__416424_416430 = G__416451;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__416452){
var elem = cljs.core.first(arglist__416452);
var kvs = cljs.core.rest(arglist__416452);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__416459_416465 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__416460_416466 = null;var count__416461_416467 = 0;var i__416462_416468 = 0;while(true){
if((i__416462_416468 < count__416461_416467))
{var vec__416463_416469 = cljs.core._nth.call(null,chunk__416460_416466,i__416462_416468);var k_416470 = cljs.core.nth.call(null,vec__416463_416469,0,null);var v_416471 = cljs.core.nth.call(null,vec__416463_416469,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_416470,[cljs.core.str(v_416471),cljs.core.str("px")].join(''));
{
var G__416472 = seq__416459_416465;
var G__416473 = chunk__416460_416466;
var G__416474 = count__416461_416467;
var G__416475 = (i__416462_416468 + 1);
seq__416459_416465 = G__416472;
chunk__416460_416466 = G__416473;
count__416461_416467 = G__416474;
i__416462_416468 = G__416475;
continue;
}
} else
{var temp__4092__auto___416476 = cljs.core.seq.call(null,seq__416459_416465);if(temp__4092__auto___416476)
{var seq__416459_416477__$1 = temp__4092__auto___416476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__416459_416477__$1))
{var c__4017__auto___416478 = cljs.core.chunk_first.call(null,seq__416459_416477__$1);{
var G__416479 = cljs.core.chunk_rest.call(null,seq__416459_416477__$1);
var G__416480 = c__4017__auto___416478;
var G__416481 = cljs.core.count.call(null,c__4017__auto___416478);
var G__416482 = 0;
seq__416459_416465 = G__416479;
chunk__416460_416466 = G__416480;
count__416461_416467 = G__416481;
i__416462_416468 = G__416482;
continue;
}
} else
{var vec__416464_416483 = cljs.core.first.call(null,seq__416459_416477__$1);var k_416484 = cljs.core.nth.call(null,vec__416464_416483,0,null);var v_416485 = cljs.core.nth.call(null,vec__416464_416483,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_416484,[cljs.core.str(v_416485),cljs.core.str("px")].join(''));
{
var G__416486 = cljs.core.next.call(null,seq__416459_416477__$1);
var G__416487 = null;
var G__416488 = 0;
var G__416489 = 0;
seq__416459_416465 = G__416486;
chunk__416460_416466 = G__416487;
count__416461_416467 = G__416488;
i__416462_416468 = G__416489;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__416490){
var elem = cljs.core.first(arglist__416490);
var kvs = cljs.core.rest(arglist__416490);
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
{var G__416499 = dommy.template.__GT_node_like.call(null,elem);(G__416499[cljs.core.name.call(null,k)] = v);
return G__416499;
} else
{var G__416500 = dommy.template.__GT_node_like.call(null,elem);G__416500.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__416500;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__416507__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__416501_416508 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__416502_416509 = null;var count__416503_416510 = 0;var i__416504_416511 = 0;while(true){
if((i__416504_416511 < count__416503_416510))
{var vec__416505_416512 = cljs.core._nth.call(null,chunk__416502_416509,i__416504_416511);var k_416513__$1 = cljs.core.nth.call(null,vec__416505_416512,0,null);var v_416514__$1 = cljs.core.nth.call(null,vec__416505_416512,1,null);set_attr_BANG_.call(null,elem__$1,k_416513__$1,v_416514__$1);
{
var G__416515 = seq__416501_416508;
var G__416516 = chunk__416502_416509;
var G__416517 = count__416503_416510;
var G__416518 = (i__416504_416511 + 1);
seq__416501_416508 = G__416515;
chunk__416502_416509 = G__416516;
count__416503_416510 = G__416517;
i__416504_416511 = G__416518;
continue;
}
} else
{var temp__4092__auto___416519 = cljs.core.seq.call(null,seq__416501_416508);if(temp__4092__auto___416519)
{var seq__416501_416520__$1 = temp__4092__auto___416519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__416501_416520__$1))
{var c__4017__auto___416521 = cljs.core.chunk_first.call(null,seq__416501_416520__$1);{
var G__416522 = cljs.core.chunk_rest.call(null,seq__416501_416520__$1);
var G__416523 = c__4017__auto___416521;
var G__416524 = cljs.core.count.call(null,c__4017__auto___416521);
var G__416525 = 0;
seq__416501_416508 = G__416522;
chunk__416502_416509 = G__416523;
count__416503_416510 = G__416524;
i__416504_416511 = G__416525;
continue;
}
} else
{var vec__416506_416526 = cljs.core.first.call(null,seq__416501_416520__$1);var k_416527__$1 = cljs.core.nth.call(null,vec__416506_416526,0,null);var v_416528__$1 = cljs.core.nth.call(null,vec__416506_416526,1,null);set_attr_BANG_.call(null,elem__$1,k_416527__$1,v_416528__$1);
{
var G__416529 = cljs.core.next.call(null,seq__416501_416520__$1);
var G__416530 = null;
var G__416531 = 0;
var G__416532 = 0;
seq__416501_416508 = G__416529;
chunk__416502_416509 = G__416530;
count__416503_416510 = G__416531;
i__416504_416511 = G__416532;
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
var G__416507 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__416507__delegate.call(this,elem,k,v,kvs);};
G__416507.cljs$lang$maxFixedArity = 3;
G__416507.cljs$lang$applyTo = (function (arglist__416533){
var elem = cljs.core.first(arglist__416533);
arglist__416533 = cljs.core.next(arglist__416533);
var k = cljs.core.first(arglist__416533);
arglist__416533 = cljs.core.next(arglist__416533);
var v = cljs.core.first(arglist__416533);
var kvs = cljs.core.rest(arglist__416533);
return G__416507__delegate(elem,k,v,kvs);
});
G__416507.cljs$core$IFn$_invoke$arity$variadic = G__416507__delegate;
return G__416507;
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
var G__416542__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__416538_416543 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__416539_416544 = null;var count__416540_416545 = 0;var i__416541_416546 = 0;while(true){
if((i__416541_416546 < count__416540_416545))
{var k_416547__$1 = cljs.core._nth.call(null,chunk__416539_416544,i__416541_416546);remove_attr_BANG_.call(null,elem__$1,k_416547__$1);
{
var G__416548 = seq__416538_416543;
var G__416549 = chunk__416539_416544;
var G__416550 = count__416540_416545;
var G__416551 = (i__416541_416546 + 1);
seq__416538_416543 = G__416548;
chunk__416539_416544 = G__416549;
count__416540_416545 = G__416550;
i__416541_416546 = G__416551;
continue;
}
} else
{var temp__4092__auto___416552 = cljs.core.seq.call(null,seq__416538_416543);if(temp__4092__auto___416552)
{var seq__416538_416553__$1 = temp__4092__auto___416552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__416538_416553__$1))
{var c__4017__auto___416554 = cljs.core.chunk_first.call(null,seq__416538_416553__$1);{
var G__416555 = cljs.core.chunk_rest.call(null,seq__416538_416553__$1);
var G__416556 = c__4017__auto___416554;
var G__416557 = cljs.core.count.call(null,c__4017__auto___416554);
var G__416558 = 0;
seq__416538_416543 = G__416555;
chunk__416539_416544 = G__416556;
count__416540_416545 = G__416557;
i__416541_416546 = G__416558;
continue;
}
} else
{var k_416559__$1 = cljs.core.first.call(null,seq__416538_416553__$1);remove_attr_BANG_.call(null,elem__$1,k_416559__$1);
{
var G__416560 = cljs.core.next.call(null,seq__416538_416553__$1);
var G__416561 = null;
var G__416562 = 0;
var G__416563 = 0;
seq__416538_416543 = G__416560;
chunk__416539_416544 = G__416561;
count__416540_416545 = G__416562;
i__416541_416546 = G__416563;
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
var G__416542 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__416542__delegate.call(this,elem,k,ks);};
G__416542.cljs$lang$maxFixedArity = 2;
G__416542.cljs$lang$applyTo = (function (arglist__416564){
var elem = cljs.core.first(arglist__416564);
arglist__416564 = cljs.core.next(arglist__416564);
var k = cljs.core.first(arglist__416564);
var ks = cljs.core.rest(arglist__416564);
return G__416542__delegate(elem,k,ks);
});
G__416542.cljs$core$IFn$_invoke$arity$variadic = G__416542__delegate;
return G__416542;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__416566 = dommy.template.__GT_node_like.call(null,elem);G__416566.style.display = ((show_QMARK_)?"":"none");
return G__416566;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__416568 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__416568,false);
return G__416568;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__416570 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__416570,true);
return G__416570;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__416572 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__416572["constructor"] = Object);
return G__416572;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
