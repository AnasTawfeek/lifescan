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
var G__425405 = (i + class$.length);
start_from = G__425405;
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
{var temp__4090__auto___425430 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___425430))
{var class_list_425431 = temp__4090__auto___425430;var seq__425418_425432 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__425419_425433 = null;var count__425420_425434 = 0;var i__425421_425435 = 0;while(true){
if((i__425421_425435 < count__425420_425434))
{var class_425436 = cljs.core._nth.call(null,chunk__425419_425433,i__425421_425435);class_list_425431.add(class_425436);
{
var G__425437 = seq__425418_425432;
var G__425438 = chunk__425419_425433;
var G__425439 = count__425420_425434;
var G__425440 = (i__425421_425435 + 1);
seq__425418_425432 = G__425437;
chunk__425419_425433 = G__425438;
count__425420_425434 = G__425439;
i__425421_425435 = G__425440;
continue;
}
} else
{var temp__4092__auto___425441 = cljs.core.seq.call(null,seq__425418_425432);if(temp__4092__auto___425441)
{var seq__425418_425442__$1 = temp__4092__auto___425441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__425418_425442__$1))
{var c__4017__auto___425443 = cljs.core.chunk_first.call(null,seq__425418_425442__$1);{
var G__425444 = cljs.core.chunk_rest.call(null,seq__425418_425442__$1);
var G__425445 = c__4017__auto___425443;
var G__425446 = cljs.core.count.call(null,c__4017__auto___425443);
var G__425447 = 0;
seq__425418_425432 = G__425444;
chunk__425419_425433 = G__425445;
count__425420_425434 = G__425446;
i__425421_425435 = G__425447;
continue;
}
} else
{var class_425448 = cljs.core.first.call(null,seq__425418_425442__$1);class_list_425431.add(class_425448);
{
var G__425449 = cljs.core.next.call(null,seq__425418_425442__$1);
var G__425450 = null;
var G__425451 = 0;
var G__425452 = 0;
seq__425418_425432 = G__425449;
chunk__425419_425433 = G__425450;
count__425420_425434 = G__425451;
i__425421_425435 = G__425452;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_425453 = elem__$1.className;var seq__425422_425454 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__425423_425455 = null;var count__425424_425456 = 0;var i__425425_425457 = 0;while(true){
if((i__425425_425457 < count__425424_425456))
{var class_425458 = cljs.core._nth.call(null,chunk__425423_425455,i__425425_425457);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_425453,class_425458)))
{} else
{elem__$1.className = (((class_name_425453 === ""))?class_425458:[cljs.core.str(class_name_425453),cljs.core.str(" "),cljs.core.str(class_425458)].join(''));
}
{
var G__425459 = seq__425422_425454;
var G__425460 = chunk__425423_425455;
var G__425461 = count__425424_425456;
var G__425462 = (i__425425_425457 + 1);
seq__425422_425454 = G__425459;
chunk__425423_425455 = G__425460;
count__425424_425456 = G__425461;
i__425425_425457 = G__425462;
continue;
}
} else
{var temp__4092__auto___425463 = cljs.core.seq.call(null,seq__425422_425454);if(temp__4092__auto___425463)
{var seq__425422_425464__$1 = temp__4092__auto___425463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__425422_425464__$1))
{var c__4017__auto___425465 = cljs.core.chunk_first.call(null,seq__425422_425464__$1);{
var G__425466 = cljs.core.chunk_rest.call(null,seq__425422_425464__$1);
var G__425467 = c__4017__auto___425465;
var G__425468 = cljs.core.count.call(null,c__4017__auto___425465);
var G__425469 = 0;
seq__425422_425454 = G__425466;
chunk__425423_425455 = G__425467;
count__425424_425456 = G__425468;
i__425425_425457 = G__425469;
continue;
}
} else
{var class_425470 = cljs.core.first.call(null,seq__425422_425464__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_425453,class_425470)))
{} else
{elem__$1.className = (((class_name_425453 === ""))?class_425470:[cljs.core.str(class_name_425453),cljs.core.str(" "),cljs.core.str(class_425470)].join(''));
}
{
var G__425471 = cljs.core.next.call(null,seq__425422_425464__$1);
var G__425472 = null;
var G__425473 = 0;
var G__425474 = 0;
seq__425422_425454 = G__425471;
chunk__425423_425455 = G__425472;
count__425424_425456 = G__425473;
i__425425_425457 = G__425474;
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
var G__425475__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__425426_425476 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__425427_425477 = null;var count__425428_425478 = 0;var i__425429_425479 = 0;while(true){
if((i__425429_425479 < count__425428_425478))
{var c_425480 = cljs.core._nth.call(null,chunk__425427_425477,i__425429_425479);add_class_BANG_.call(null,elem__$1,c_425480);
{
var G__425481 = seq__425426_425476;
var G__425482 = chunk__425427_425477;
var G__425483 = count__425428_425478;
var G__425484 = (i__425429_425479 + 1);
seq__425426_425476 = G__425481;
chunk__425427_425477 = G__425482;
count__425428_425478 = G__425483;
i__425429_425479 = G__425484;
continue;
}
} else
{var temp__4092__auto___425485 = cljs.core.seq.call(null,seq__425426_425476);if(temp__4092__auto___425485)
{var seq__425426_425486__$1 = temp__4092__auto___425485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__425426_425486__$1))
{var c__4017__auto___425487 = cljs.core.chunk_first.call(null,seq__425426_425486__$1);{
var G__425488 = cljs.core.chunk_rest.call(null,seq__425426_425486__$1);
var G__425489 = c__4017__auto___425487;
var G__425490 = cljs.core.count.call(null,c__4017__auto___425487);
var G__425491 = 0;
seq__425426_425476 = G__425488;
chunk__425427_425477 = G__425489;
count__425428_425478 = G__425490;
i__425429_425479 = G__425491;
continue;
}
} else
{var c_425492 = cljs.core.first.call(null,seq__425426_425486__$1);add_class_BANG_.call(null,elem__$1,c_425492);
{
var G__425493 = cljs.core.next.call(null,seq__425426_425486__$1);
var G__425494 = null;
var G__425495 = 0;
var G__425496 = 0;
seq__425426_425476 = G__425493;
chunk__425427_425477 = G__425494;
count__425428_425478 = G__425495;
i__425429_425479 = G__425496;
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
var G__425475 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__425475__delegate.call(this,elem,classes,more_classes);};
G__425475.cljs$lang$maxFixedArity = 2;
G__425475.cljs$lang$applyTo = (function (arglist__425497){
var elem = cljs.core.first(arglist__425497);
arglist__425497 = cljs.core.next(arglist__425497);
var classes = cljs.core.first(arglist__425497);
var more_classes = cljs.core.rest(arglist__425497);
return G__425475__delegate(elem,classes,more_classes);
});
G__425475.cljs$core$IFn$_invoke$arity$variadic = G__425475__delegate;
return G__425475;
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
var G__425498 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__425498;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___425507 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___425507))
{var class_list_425508 = temp__4090__auto___425507;class_list_425508.remove(class$__$1);
} else
{var class_name_425509 = elem__$1.className;var new_class_name_425510 = dommy.attrs.remove_class_str.call(null,class_name_425509,class$__$1);if((class_name_425509 === new_class_name_425510))
{} else
{elem__$1.className = new_class_name_425510;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__425511__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__425503 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__425504 = null;var count__425505 = 0;var i__425506 = 0;while(true){
if((i__425506 < count__425505))
{var c = cljs.core._nth.call(null,chunk__425504,i__425506);remove_class_BANG_.call(null,elem__$1,c);
{
var G__425512 = seq__425503;
var G__425513 = chunk__425504;
var G__425514 = count__425505;
var G__425515 = (i__425506 + 1);
seq__425503 = G__425512;
chunk__425504 = G__425513;
count__425505 = G__425514;
i__425506 = G__425515;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__425503);if(temp__4092__auto__)
{var seq__425503__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__425503__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__425503__$1);{
var G__425516 = cljs.core.chunk_rest.call(null,seq__425503__$1);
var G__425517 = c__4017__auto__;
var G__425518 = cljs.core.count.call(null,c__4017__auto__);
var G__425519 = 0;
seq__425503 = G__425516;
chunk__425504 = G__425517;
count__425505 = G__425518;
i__425506 = G__425519;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__425503__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__425520 = cljs.core.next.call(null,seq__425503__$1);
var G__425521 = null;
var G__425522 = 0;
var G__425523 = 0;
seq__425503 = G__425520;
chunk__425504 = G__425521;
count__425505 = G__425522;
i__425506 = G__425523;
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
var G__425511 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__425511__delegate.call(this,elem,class$,classes);};
G__425511.cljs$lang$maxFixedArity = 2;
G__425511.cljs$lang$applyTo = (function (arglist__425524){
var elem = cljs.core.first(arglist__425524);
arglist__425524 = cljs.core.next(arglist__425524);
var class$ = cljs.core.first(arglist__425524);
var classes = cljs.core.rest(arglist__425524);
return G__425511__delegate(elem,class$,classes);
});
G__425511.cljs$core$IFn$_invoke$arity$variadic = G__425511__delegate;
return G__425511;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___425525 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___425525))
{var class_list_425526 = temp__4090__auto___425525;class_list_425526.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__425529){var vec__425530 = p__425529;var k = cljs.core.nth.call(null,vec__425530,0,null);var v = cljs.core.nth.call(null,vec__425530,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__425537_425543 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__425538_425544 = null;var count__425539_425545 = 0;var i__425540_425546 = 0;while(true){
if((i__425540_425546 < count__425539_425545))
{var vec__425541_425547 = cljs.core._nth.call(null,chunk__425538_425544,i__425540_425546);var k_425548 = cljs.core.nth.call(null,vec__425541_425547,0,null);var v_425549 = cljs.core.nth.call(null,vec__425541_425547,1,null);(style[cljs.core.name.call(null,k_425548)] = v_425549);
{
var G__425550 = seq__425537_425543;
var G__425551 = chunk__425538_425544;
var G__425552 = count__425539_425545;
var G__425553 = (i__425540_425546 + 1);
seq__425537_425543 = G__425550;
chunk__425538_425544 = G__425551;
count__425539_425545 = G__425552;
i__425540_425546 = G__425553;
continue;
}
} else
{var temp__4092__auto___425554 = cljs.core.seq.call(null,seq__425537_425543);if(temp__4092__auto___425554)
{var seq__425537_425555__$1 = temp__4092__auto___425554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__425537_425555__$1))
{var c__4017__auto___425556 = cljs.core.chunk_first.call(null,seq__425537_425555__$1);{
var G__425557 = cljs.core.chunk_rest.call(null,seq__425537_425555__$1);
var G__425558 = c__4017__auto___425556;
var G__425559 = cljs.core.count.call(null,c__4017__auto___425556);
var G__425560 = 0;
seq__425537_425543 = G__425557;
chunk__425538_425544 = G__425558;
count__425539_425545 = G__425559;
i__425540_425546 = G__425560;
continue;
}
} else
{var vec__425542_425561 = cljs.core.first.call(null,seq__425537_425555__$1);var k_425562 = cljs.core.nth.call(null,vec__425542_425561,0,null);var v_425563 = cljs.core.nth.call(null,vec__425542_425561,1,null);(style[cljs.core.name.call(null,k_425562)] = v_425563);
{
var G__425564 = cljs.core.next.call(null,seq__425537_425555__$1);
var G__425565 = null;
var G__425566 = 0;
var G__425567 = 0;
seq__425537_425543 = G__425564;
chunk__425538_425544 = G__425565;
count__425539_425545 = G__425566;
i__425540_425546 = G__425567;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__425568){
var elem = cljs.core.first(arglist__425568);
var kvs = cljs.core.rest(arglist__425568);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__425575_425581 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__425576_425582 = null;var count__425577_425583 = 0;var i__425578_425584 = 0;while(true){
if((i__425578_425584 < count__425577_425583))
{var vec__425579_425585 = cljs.core._nth.call(null,chunk__425576_425582,i__425578_425584);var k_425586 = cljs.core.nth.call(null,vec__425579_425585,0,null);var v_425587 = cljs.core.nth.call(null,vec__425579_425585,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_425586,[cljs.core.str(v_425587),cljs.core.str("px")].join(''));
{
var G__425588 = seq__425575_425581;
var G__425589 = chunk__425576_425582;
var G__425590 = count__425577_425583;
var G__425591 = (i__425578_425584 + 1);
seq__425575_425581 = G__425588;
chunk__425576_425582 = G__425589;
count__425577_425583 = G__425590;
i__425578_425584 = G__425591;
continue;
}
} else
{var temp__4092__auto___425592 = cljs.core.seq.call(null,seq__425575_425581);if(temp__4092__auto___425592)
{var seq__425575_425593__$1 = temp__4092__auto___425592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__425575_425593__$1))
{var c__4017__auto___425594 = cljs.core.chunk_first.call(null,seq__425575_425593__$1);{
var G__425595 = cljs.core.chunk_rest.call(null,seq__425575_425593__$1);
var G__425596 = c__4017__auto___425594;
var G__425597 = cljs.core.count.call(null,c__4017__auto___425594);
var G__425598 = 0;
seq__425575_425581 = G__425595;
chunk__425576_425582 = G__425596;
count__425577_425583 = G__425597;
i__425578_425584 = G__425598;
continue;
}
} else
{var vec__425580_425599 = cljs.core.first.call(null,seq__425575_425593__$1);var k_425600 = cljs.core.nth.call(null,vec__425580_425599,0,null);var v_425601 = cljs.core.nth.call(null,vec__425580_425599,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_425600,[cljs.core.str(v_425601),cljs.core.str("px")].join(''));
{
var G__425602 = cljs.core.next.call(null,seq__425575_425593__$1);
var G__425603 = null;
var G__425604 = 0;
var G__425605 = 0;
seq__425575_425581 = G__425602;
chunk__425576_425582 = G__425603;
count__425577_425583 = G__425604;
i__425578_425584 = G__425605;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__425606){
var elem = cljs.core.first(arglist__425606);
var kvs = cljs.core.rest(arglist__425606);
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
{var G__425615 = dommy.template.__GT_node_like.call(null,elem);(G__425615[cljs.core.name.call(null,k)] = v);
return G__425615;
} else
{var G__425616 = dommy.template.__GT_node_like.call(null,elem);G__425616.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__425616;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__425623__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__425617_425624 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__425618_425625 = null;var count__425619_425626 = 0;var i__425620_425627 = 0;while(true){
if((i__425620_425627 < count__425619_425626))
{var vec__425621_425628 = cljs.core._nth.call(null,chunk__425618_425625,i__425620_425627);var k_425629__$1 = cljs.core.nth.call(null,vec__425621_425628,0,null);var v_425630__$1 = cljs.core.nth.call(null,vec__425621_425628,1,null);set_attr_BANG_.call(null,elem__$1,k_425629__$1,v_425630__$1);
{
var G__425631 = seq__425617_425624;
var G__425632 = chunk__425618_425625;
var G__425633 = count__425619_425626;
var G__425634 = (i__425620_425627 + 1);
seq__425617_425624 = G__425631;
chunk__425618_425625 = G__425632;
count__425619_425626 = G__425633;
i__425620_425627 = G__425634;
continue;
}
} else
{var temp__4092__auto___425635 = cljs.core.seq.call(null,seq__425617_425624);if(temp__4092__auto___425635)
{var seq__425617_425636__$1 = temp__4092__auto___425635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__425617_425636__$1))
{var c__4017__auto___425637 = cljs.core.chunk_first.call(null,seq__425617_425636__$1);{
var G__425638 = cljs.core.chunk_rest.call(null,seq__425617_425636__$1);
var G__425639 = c__4017__auto___425637;
var G__425640 = cljs.core.count.call(null,c__4017__auto___425637);
var G__425641 = 0;
seq__425617_425624 = G__425638;
chunk__425618_425625 = G__425639;
count__425619_425626 = G__425640;
i__425620_425627 = G__425641;
continue;
}
} else
{var vec__425622_425642 = cljs.core.first.call(null,seq__425617_425636__$1);var k_425643__$1 = cljs.core.nth.call(null,vec__425622_425642,0,null);var v_425644__$1 = cljs.core.nth.call(null,vec__425622_425642,1,null);set_attr_BANG_.call(null,elem__$1,k_425643__$1,v_425644__$1);
{
var G__425645 = cljs.core.next.call(null,seq__425617_425636__$1);
var G__425646 = null;
var G__425647 = 0;
var G__425648 = 0;
seq__425617_425624 = G__425645;
chunk__425618_425625 = G__425646;
count__425619_425626 = G__425647;
i__425620_425627 = G__425648;
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
var G__425623 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__425623__delegate.call(this,elem,k,v,kvs);};
G__425623.cljs$lang$maxFixedArity = 3;
G__425623.cljs$lang$applyTo = (function (arglist__425649){
var elem = cljs.core.first(arglist__425649);
arglist__425649 = cljs.core.next(arglist__425649);
var k = cljs.core.first(arglist__425649);
arglist__425649 = cljs.core.next(arglist__425649);
var v = cljs.core.first(arglist__425649);
var kvs = cljs.core.rest(arglist__425649);
return G__425623__delegate(elem,k,v,kvs);
});
G__425623.cljs$core$IFn$_invoke$arity$variadic = G__425623__delegate;
return G__425623;
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
var G__425658__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__425654_425659 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__425655_425660 = null;var count__425656_425661 = 0;var i__425657_425662 = 0;while(true){
if((i__425657_425662 < count__425656_425661))
{var k_425663__$1 = cljs.core._nth.call(null,chunk__425655_425660,i__425657_425662);remove_attr_BANG_.call(null,elem__$1,k_425663__$1);
{
var G__425664 = seq__425654_425659;
var G__425665 = chunk__425655_425660;
var G__425666 = count__425656_425661;
var G__425667 = (i__425657_425662 + 1);
seq__425654_425659 = G__425664;
chunk__425655_425660 = G__425665;
count__425656_425661 = G__425666;
i__425657_425662 = G__425667;
continue;
}
} else
{var temp__4092__auto___425668 = cljs.core.seq.call(null,seq__425654_425659);if(temp__4092__auto___425668)
{var seq__425654_425669__$1 = temp__4092__auto___425668;if(cljs.core.chunked_seq_QMARK_.call(null,seq__425654_425669__$1))
{var c__4017__auto___425670 = cljs.core.chunk_first.call(null,seq__425654_425669__$1);{
var G__425671 = cljs.core.chunk_rest.call(null,seq__425654_425669__$1);
var G__425672 = c__4017__auto___425670;
var G__425673 = cljs.core.count.call(null,c__4017__auto___425670);
var G__425674 = 0;
seq__425654_425659 = G__425671;
chunk__425655_425660 = G__425672;
count__425656_425661 = G__425673;
i__425657_425662 = G__425674;
continue;
}
} else
{var k_425675__$1 = cljs.core.first.call(null,seq__425654_425669__$1);remove_attr_BANG_.call(null,elem__$1,k_425675__$1);
{
var G__425676 = cljs.core.next.call(null,seq__425654_425669__$1);
var G__425677 = null;
var G__425678 = 0;
var G__425679 = 0;
seq__425654_425659 = G__425676;
chunk__425655_425660 = G__425677;
count__425656_425661 = G__425678;
i__425657_425662 = G__425679;
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
var G__425658 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__425658__delegate.call(this,elem,k,ks);};
G__425658.cljs$lang$maxFixedArity = 2;
G__425658.cljs$lang$applyTo = (function (arglist__425680){
var elem = cljs.core.first(arglist__425680);
arglist__425680 = cljs.core.next(arglist__425680);
var k = cljs.core.first(arglist__425680);
var ks = cljs.core.rest(arglist__425680);
return G__425658__delegate(elem,k,ks);
});
G__425658.cljs$core$IFn$_invoke$arity$variadic = G__425658__delegate;
return G__425658;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__425682 = dommy.template.__GT_node_like.call(null,elem);G__425682.style.display = ((show_QMARK_)?"":"none");
return G__425682;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__425684 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__425684,false);
return G__425684;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__425686 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__425686,true);
return G__425686;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__425688 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__425688["constructor"] = Object);
return G__425688;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
