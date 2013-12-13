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
var G__286386 = (i + class$.length);
start_from = G__286386;
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
{var temp__4090__auto___286411 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___286411))
{var class_list_286412 = temp__4090__auto___286411;var seq__286399_286413 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__286400_286414 = null;var count__286401_286415 = 0;var i__286402_286416 = 0;while(true){
if((i__286402_286416 < count__286401_286415))
{var class_286417 = cljs.core._nth.call(null,chunk__286400_286414,i__286402_286416);class_list_286412.add(class_286417);
{
var G__286418 = seq__286399_286413;
var G__286419 = chunk__286400_286414;
var G__286420 = count__286401_286415;
var G__286421 = (i__286402_286416 + 1);
seq__286399_286413 = G__286418;
chunk__286400_286414 = G__286419;
count__286401_286415 = G__286420;
i__286402_286416 = G__286421;
continue;
}
} else
{var temp__4092__auto___286422 = cljs.core.seq.call(null,seq__286399_286413);if(temp__4092__auto___286422)
{var seq__286399_286423__$1 = temp__4092__auto___286422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__286399_286423__$1))
{var c__4017__auto___286424 = cljs.core.chunk_first.call(null,seq__286399_286423__$1);{
var G__286425 = cljs.core.chunk_rest.call(null,seq__286399_286423__$1);
var G__286426 = c__4017__auto___286424;
var G__286427 = cljs.core.count.call(null,c__4017__auto___286424);
var G__286428 = 0;
seq__286399_286413 = G__286425;
chunk__286400_286414 = G__286426;
count__286401_286415 = G__286427;
i__286402_286416 = G__286428;
continue;
}
} else
{var class_286429 = cljs.core.first.call(null,seq__286399_286423__$1);class_list_286412.add(class_286429);
{
var G__286430 = cljs.core.next.call(null,seq__286399_286423__$1);
var G__286431 = null;
var G__286432 = 0;
var G__286433 = 0;
seq__286399_286413 = G__286430;
chunk__286400_286414 = G__286431;
count__286401_286415 = G__286432;
i__286402_286416 = G__286433;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_286434 = elem__$1.className;var seq__286403_286435 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__286404_286436 = null;var count__286405_286437 = 0;var i__286406_286438 = 0;while(true){
if((i__286406_286438 < count__286405_286437))
{var class_286439 = cljs.core._nth.call(null,chunk__286404_286436,i__286406_286438);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_286434,class_286439)))
{} else
{elem__$1.className = (((class_name_286434 === ""))?class_286439:[cljs.core.str(class_name_286434),cljs.core.str(" "),cljs.core.str(class_286439)].join(''));
}
{
var G__286440 = seq__286403_286435;
var G__286441 = chunk__286404_286436;
var G__286442 = count__286405_286437;
var G__286443 = (i__286406_286438 + 1);
seq__286403_286435 = G__286440;
chunk__286404_286436 = G__286441;
count__286405_286437 = G__286442;
i__286406_286438 = G__286443;
continue;
}
} else
{var temp__4092__auto___286444 = cljs.core.seq.call(null,seq__286403_286435);if(temp__4092__auto___286444)
{var seq__286403_286445__$1 = temp__4092__auto___286444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__286403_286445__$1))
{var c__4017__auto___286446 = cljs.core.chunk_first.call(null,seq__286403_286445__$1);{
var G__286447 = cljs.core.chunk_rest.call(null,seq__286403_286445__$1);
var G__286448 = c__4017__auto___286446;
var G__286449 = cljs.core.count.call(null,c__4017__auto___286446);
var G__286450 = 0;
seq__286403_286435 = G__286447;
chunk__286404_286436 = G__286448;
count__286405_286437 = G__286449;
i__286406_286438 = G__286450;
continue;
}
} else
{var class_286451 = cljs.core.first.call(null,seq__286403_286445__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_286434,class_286451)))
{} else
{elem__$1.className = (((class_name_286434 === ""))?class_286451:[cljs.core.str(class_name_286434),cljs.core.str(" "),cljs.core.str(class_286451)].join(''));
}
{
var G__286452 = cljs.core.next.call(null,seq__286403_286445__$1);
var G__286453 = null;
var G__286454 = 0;
var G__286455 = 0;
seq__286403_286435 = G__286452;
chunk__286404_286436 = G__286453;
count__286405_286437 = G__286454;
i__286406_286438 = G__286455;
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
var G__286456__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__286407_286457 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__286408_286458 = null;var count__286409_286459 = 0;var i__286410_286460 = 0;while(true){
if((i__286410_286460 < count__286409_286459))
{var c_286461 = cljs.core._nth.call(null,chunk__286408_286458,i__286410_286460);add_class_BANG_.call(null,elem__$1,c_286461);
{
var G__286462 = seq__286407_286457;
var G__286463 = chunk__286408_286458;
var G__286464 = count__286409_286459;
var G__286465 = (i__286410_286460 + 1);
seq__286407_286457 = G__286462;
chunk__286408_286458 = G__286463;
count__286409_286459 = G__286464;
i__286410_286460 = G__286465;
continue;
}
} else
{var temp__4092__auto___286466 = cljs.core.seq.call(null,seq__286407_286457);if(temp__4092__auto___286466)
{var seq__286407_286467__$1 = temp__4092__auto___286466;if(cljs.core.chunked_seq_QMARK_.call(null,seq__286407_286467__$1))
{var c__4017__auto___286468 = cljs.core.chunk_first.call(null,seq__286407_286467__$1);{
var G__286469 = cljs.core.chunk_rest.call(null,seq__286407_286467__$1);
var G__286470 = c__4017__auto___286468;
var G__286471 = cljs.core.count.call(null,c__4017__auto___286468);
var G__286472 = 0;
seq__286407_286457 = G__286469;
chunk__286408_286458 = G__286470;
count__286409_286459 = G__286471;
i__286410_286460 = G__286472;
continue;
}
} else
{var c_286473 = cljs.core.first.call(null,seq__286407_286467__$1);add_class_BANG_.call(null,elem__$1,c_286473);
{
var G__286474 = cljs.core.next.call(null,seq__286407_286467__$1);
var G__286475 = null;
var G__286476 = 0;
var G__286477 = 0;
seq__286407_286457 = G__286474;
chunk__286408_286458 = G__286475;
count__286409_286459 = G__286476;
i__286410_286460 = G__286477;
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
var G__286456 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__286456__delegate.call(this,elem,classes,more_classes);};
G__286456.cljs$lang$maxFixedArity = 2;
G__286456.cljs$lang$applyTo = (function (arglist__286478){
var elem = cljs.core.first(arglist__286478);
arglist__286478 = cljs.core.next(arglist__286478);
var classes = cljs.core.first(arglist__286478);
var more_classes = cljs.core.rest(arglist__286478);
return G__286456__delegate(elem,classes,more_classes);
});
G__286456.cljs$core$IFn$_invoke$arity$variadic = G__286456__delegate;
return G__286456;
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
var G__286479 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__286479;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___286488 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___286488))
{var class_list_286489 = temp__4090__auto___286488;class_list_286489.remove(class$__$1);
} else
{var class_name_286490 = elem__$1.className;var new_class_name_286491 = dommy.attrs.remove_class_str.call(null,class_name_286490,class$__$1);if((class_name_286490 === new_class_name_286491))
{} else
{elem__$1.className = new_class_name_286491;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__286492__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__286484 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__286485 = null;var count__286486 = 0;var i__286487 = 0;while(true){
if((i__286487 < count__286486))
{var c = cljs.core._nth.call(null,chunk__286485,i__286487);remove_class_BANG_.call(null,elem__$1,c);
{
var G__286493 = seq__286484;
var G__286494 = chunk__286485;
var G__286495 = count__286486;
var G__286496 = (i__286487 + 1);
seq__286484 = G__286493;
chunk__286485 = G__286494;
count__286486 = G__286495;
i__286487 = G__286496;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__286484);if(temp__4092__auto__)
{var seq__286484__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__286484__$1))
{var c__4017__auto__ = cljs.core.chunk_first.call(null,seq__286484__$1);{
var G__286497 = cljs.core.chunk_rest.call(null,seq__286484__$1);
var G__286498 = c__4017__auto__;
var G__286499 = cljs.core.count.call(null,c__4017__auto__);
var G__286500 = 0;
seq__286484 = G__286497;
chunk__286485 = G__286498;
count__286486 = G__286499;
i__286487 = G__286500;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__286484__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__286501 = cljs.core.next.call(null,seq__286484__$1);
var G__286502 = null;
var G__286503 = 0;
var G__286504 = 0;
seq__286484 = G__286501;
chunk__286485 = G__286502;
count__286486 = G__286503;
i__286487 = G__286504;
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
var G__286492 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__286492__delegate.call(this,elem,class$,classes);};
G__286492.cljs$lang$maxFixedArity = 2;
G__286492.cljs$lang$applyTo = (function (arglist__286505){
var elem = cljs.core.first(arglist__286505);
arglist__286505 = cljs.core.next(arglist__286505);
var class$ = cljs.core.first(arglist__286505);
var classes = cljs.core.rest(arglist__286505);
return G__286492__delegate(elem,class$,classes);
});
G__286492.cljs$core$IFn$_invoke$arity$variadic = G__286492__delegate;
return G__286492;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___286506 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___286506))
{var class_list_286507 = temp__4090__auto___286506;class_list_286507.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__286510){var vec__286511 = p__286510;var k = cljs.core.nth.call(null,vec__286511,0,null);var v = cljs.core.nth.call(null,vec__286511,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__286518_286524 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__286519_286525 = null;var count__286520_286526 = 0;var i__286521_286527 = 0;while(true){
if((i__286521_286527 < count__286520_286526))
{var vec__286522_286528 = cljs.core._nth.call(null,chunk__286519_286525,i__286521_286527);var k_286529 = cljs.core.nth.call(null,vec__286522_286528,0,null);var v_286530 = cljs.core.nth.call(null,vec__286522_286528,1,null);(style[cljs.core.name.call(null,k_286529)] = v_286530);
{
var G__286531 = seq__286518_286524;
var G__286532 = chunk__286519_286525;
var G__286533 = count__286520_286526;
var G__286534 = (i__286521_286527 + 1);
seq__286518_286524 = G__286531;
chunk__286519_286525 = G__286532;
count__286520_286526 = G__286533;
i__286521_286527 = G__286534;
continue;
}
} else
{var temp__4092__auto___286535 = cljs.core.seq.call(null,seq__286518_286524);if(temp__4092__auto___286535)
{var seq__286518_286536__$1 = temp__4092__auto___286535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__286518_286536__$1))
{var c__4017__auto___286537 = cljs.core.chunk_first.call(null,seq__286518_286536__$1);{
var G__286538 = cljs.core.chunk_rest.call(null,seq__286518_286536__$1);
var G__286539 = c__4017__auto___286537;
var G__286540 = cljs.core.count.call(null,c__4017__auto___286537);
var G__286541 = 0;
seq__286518_286524 = G__286538;
chunk__286519_286525 = G__286539;
count__286520_286526 = G__286540;
i__286521_286527 = G__286541;
continue;
}
} else
{var vec__286523_286542 = cljs.core.first.call(null,seq__286518_286536__$1);var k_286543 = cljs.core.nth.call(null,vec__286523_286542,0,null);var v_286544 = cljs.core.nth.call(null,vec__286523_286542,1,null);(style[cljs.core.name.call(null,k_286543)] = v_286544);
{
var G__286545 = cljs.core.next.call(null,seq__286518_286536__$1);
var G__286546 = null;
var G__286547 = 0;
var G__286548 = 0;
seq__286518_286524 = G__286545;
chunk__286519_286525 = G__286546;
count__286520_286526 = G__286547;
i__286521_286527 = G__286548;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__286549){
var elem = cljs.core.first(arglist__286549);
var kvs = cljs.core.rest(arglist__286549);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__286556_286562 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__286557_286563 = null;var count__286558_286564 = 0;var i__286559_286565 = 0;while(true){
if((i__286559_286565 < count__286558_286564))
{var vec__286560_286566 = cljs.core._nth.call(null,chunk__286557_286563,i__286559_286565);var k_286567 = cljs.core.nth.call(null,vec__286560_286566,0,null);var v_286568 = cljs.core.nth.call(null,vec__286560_286566,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_286567,[cljs.core.str(v_286568),cljs.core.str("px")].join(''));
{
var G__286569 = seq__286556_286562;
var G__286570 = chunk__286557_286563;
var G__286571 = count__286558_286564;
var G__286572 = (i__286559_286565 + 1);
seq__286556_286562 = G__286569;
chunk__286557_286563 = G__286570;
count__286558_286564 = G__286571;
i__286559_286565 = G__286572;
continue;
}
} else
{var temp__4092__auto___286573 = cljs.core.seq.call(null,seq__286556_286562);if(temp__4092__auto___286573)
{var seq__286556_286574__$1 = temp__4092__auto___286573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__286556_286574__$1))
{var c__4017__auto___286575 = cljs.core.chunk_first.call(null,seq__286556_286574__$1);{
var G__286576 = cljs.core.chunk_rest.call(null,seq__286556_286574__$1);
var G__286577 = c__4017__auto___286575;
var G__286578 = cljs.core.count.call(null,c__4017__auto___286575);
var G__286579 = 0;
seq__286556_286562 = G__286576;
chunk__286557_286563 = G__286577;
count__286558_286564 = G__286578;
i__286559_286565 = G__286579;
continue;
}
} else
{var vec__286561_286580 = cljs.core.first.call(null,seq__286556_286574__$1);var k_286581 = cljs.core.nth.call(null,vec__286561_286580,0,null);var v_286582 = cljs.core.nth.call(null,vec__286561_286580,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_286581,[cljs.core.str(v_286582),cljs.core.str("px")].join(''));
{
var G__286583 = cljs.core.next.call(null,seq__286556_286574__$1);
var G__286584 = null;
var G__286585 = 0;
var G__286586 = 0;
seq__286556_286562 = G__286583;
chunk__286557_286563 = G__286584;
count__286558_286564 = G__286585;
i__286559_286565 = G__286586;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__286587){
var elem = cljs.core.first(arglist__286587);
var kvs = cljs.core.rest(arglist__286587);
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
{var G__286596 = dommy.template.__GT_node_like.call(null,elem);(G__286596[cljs.core.name.call(null,k)] = v);
return G__286596;
} else
{var G__286597 = dommy.template.__GT_node_like.call(null,elem);G__286597.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__286597;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__286604__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__286598_286605 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__286599_286606 = null;var count__286600_286607 = 0;var i__286601_286608 = 0;while(true){
if((i__286601_286608 < count__286600_286607))
{var vec__286602_286609 = cljs.core._nth.call(null,chunk__286599_286606,i__286601_286608);var k_286610__$1 = cljs.core.nth.call(null,vec__286602_286609,0,null);var v_286611__$1 = cljs.core.nth.call(null,vec__286602_286609,1,null);set_attr_BANG_.call(null,elem__$1,k_286610__$1,v_286611__$1);
{
var G__286612 = seq__286598_286605;
var G__286613 = chunk__286599_286606;
var G__286614 = count__286600_286607;
var G__286615 = (i__286601_286608 + 1);
seq__286598_286605 = G__286612;
chunk__286599_286606 = G__286613;
count__286600_286607 = G__286614;
i__286601_286608 = G__286615;
continue;
}
} else
{var temp__4092__auto___286616 = cljs.core.seq.call(null,seq__286598_286605);if(temp__4092__auto___286616)
{var seq__286598_286617__$1 = temp__4092__auto___286616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__286598_286617__$1))
{var c__4017__auto___286618 = cljs.core.chunk_first.call(null,seq__286598_286617__$1);{
var G__286619 = cljs.core.chunk_rest.call(null,seq__286598_286617__$1);
var G__286620 = c__4017__auto___286618;
var G__286621 = cljs.core.count.call(null,c__4017__auto___286618);
var G__286622 = 0;
seq__286598_286605 = G__286619;
chunk__286599_286606 = G__286620;
count__286600_286607 = G__286621;
i__286601_286608 = G__286622;
continue;
}
} else
{var vec__286603_286623 = cljs.core.first.call(null,seq__286598_286617__$1);var k_286624__$1 = cljs.core.nth.call(null,vec__286603_286623,0,null);var v_286625__$1 = cljs.core.nth.call(null,vec__286603_286623,1,null);set_attr_BANG_.call(null,elem__$1,k_286624__$1,v_286625__$1);
{
var G__286626 = cljs.core.next.call(null,seq__286598_286617__$1);
var G__286627 = null;
var G__286628 = 0;
var G__286629 = 0;
seq__286598_286605 = G__286626;
chunk__286599_286606 = G__286627;
count__286600_286607 = G__286628;
i__286601_286608 = G__286629;
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
var G__286604 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__286604__delegate.call(this,elem,k,v,kvs);};
G__286604.cljs$lang$maxFixedArity = 3;
G__286604.cljs$lang$applyTo = (function (arglist__286630){
var elem = cljs.core.first(arglist__286630);
arglist__286630 = cljs.core.next(arglist__286630);
var k = cljs.core.first(arglist__286630);
arglist__286630 = cljs.core.next(arglist__286630);
var v = cljs.core.first(arglist__286630);
var kvs = cljs.core.rest(arglist__286630);
return G__286604__delegate(elem,k,v,kvs);
});
G__286604.cljs$core$IFn$_invoke$arity$variadic = G__286604__delegate;
return G__286604;
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
var G__286639__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__286635_286640 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__286636_286641 = null;var count__286637_286642 = 0;var i__286638_286643 = 0;while(true){
if((i__286638_286643 < count__286637_286642))
{var k_286644__$1 = cljs.core._nth.call(null,chunk__286636_286641,i__286638_286643);remove_attr_BANG_.call(null,elem__$1,k_286644__$1);
{
var G__286645 = seq__286635_286640;
var G__286646 = chunk__286636_286641;
var G__286647 = count__286637_286642;
var G__286648 = (i__286638_286643 + 1);
seq__286635_286640 = G__286645;
chunk__286636_286641 = G__286646;
count__286637_286642 = G__286647;
i__286638_286643 = G__286648;
continue;
}
} else
{var temp__4092__auto___286649 = cljs.core.seq.call(null,seq__286635_286640);if(temp__4092__auto___286649)
{var seq__286635_286650__$1 = temp__4092__auto___286649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__286635_286650__$1))
{var c__4017__auto___286651 = cljs.core.chunk_first.call(null,seq__286635_286650__$1);{
var G__286652 = cljs.core.chunk_rest.call(null,seq__286635_286650__$1);
var G__286653 = c__4017__auto___286651;
var G__286654 = cljs.core.count.call(null,c__4017__auto___286651);
var G__286655 = 0;
seq__286635_286640 = G__286652;
chunk__286636_286641 = G__286653;
count__286637_286642 = G__286654;
i__286638_286643 = G__286655;
continue;
}
} else
{var k_286656__$1 = cljs.core.first.call(null,seq__286635_286650__$1);remove_attr_BANG_.call(null,elem__$1,k_286656__$1);
{
var G__286657 = cljs.core.next.call(null,seq__286635_286650__$1);
var G__286658 = null;
var G__286659 = 0;
var G__286660 = 0;
seq__286635_286640 = G__286657;
chunk__286636_286641 = G__286658;
count__286637_286642 = G__286659;
i__286638_286643 = G__286660;
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
var G__286639 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__286639__delegate.call(this,elem,k,ks);};
G__286639.cljs$lang$maxFixedArity = 2;
G__286639.cljs$lang$applyTo = (function (arglist__286661){
var elem = cljs.core.first(arglist__286661);
arglist__286661 = cljs.core.next(arglist__286661);
var k = cljs.core.first(arglist__286661);
var ks = cljs.core.rest(arglist__286661);
return G__286639__delegate(elem,k,ks);
});
G__286639.cljs$core$IFn$_invoke$arity$variadic = G__286639__delegate;
return G__286639;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__286663 = dommy.template.__GT_node_like.call(null,elem);G__286663.style.display = ((show_QMARK_)?"":"none");
return G__286663;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__286665 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__286665,false);
return G__286665;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__286667 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__286667,true);
return G__286667;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__286669 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__286669["constructor"] = Object);
return G__286669;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
