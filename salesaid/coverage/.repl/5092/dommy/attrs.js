// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__4662__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__4662__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__4662__auto__;
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
var G__8468 = (i + class$.length);
start_from = G__8468;
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
{var temp__4090__auto___8493 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8493))
{var class_list_8494 = temp__4090__auto___8493;var seq__8481_8495 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8482_8496 = null;var count__8483_8497 = 0;var i__8484_8498 = 0;while(true){
if((i__8484_8498 < count__8483_8497))
{var class_8499 = cljs.core._nth.call(null,chunk__8482_8496,i__8484_8498);class_list_8494.add(class_8499);
{
var G__8500 = seq__8481_8495;
var G__8501 = chunk__8482_8496;
var G__8502 = count__8483_8497;
var G__8503 = (i__8484_8498 + 1);
seq__8481_8495 = G__8500;
chunk__8482_8496 = G__8501;
count__8483_8497 = G__8502;
i__8484_8498 = G__8503;
continue;
}
} else
{var temp__4092__auto___8504 = cljs.core.seq.call(null,seq__8481_8495);if(temp__4092__auto___8504)
{var seq__8481_8505__$1 = temp__4092__auto___8504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8481_8505__$1))
{var c__5398__auto___8506 = cljs.core.chunk_first.call(null,seq__8481_8505__$1);{
var G__8507 = cljs.core.chunk_rest.call(null,seq__8481_8505__$1);
var G__8508 = c__5398__auto___8506;
var G__8509 = cljs.core.count.call(null,c__5398__auto___8506);
var G__8510 = 0;
seq__8481_8495 = G__8507;
chunk__8482_8496 = G__8508;
count__8483_8497 = G__8509;
i__8484_8498 = G__8510;
continue;
}
} else
{var class_8511 = cljs.core.first.call(null,seq__8481_8505__$1);class_list_8494.add(class_8511);
{
var G__8512 = cljs.core.next.call(null,seq__8481_8505__$1);
var G__8513 = null;
var G__8514 = 0;
var G__8515 = 0;
seq__8481_8495 = G__8512;
chunk__8482_8496 = G__8513;
count__8483_8497 = G__8514;
i__8484_8498 = G__8515;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_8516 = elem__$1.className;var seq__8485_8517 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8486_8518 = null;var count__8487_8519 = 0;var i__8488_8520 = 0;while(true){
if((i__8488_8520 < count__8487_8519))
{var class_8521 = cljs.core._nth.call(null,chunk__8486_8518,i__8488_8520);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8516,class_8521)))
{} else
{elem__$1.className = (((class_name_8516 === ""))?class_8521:[cljs.core.str(class_name_8516),cljs.core.str(" "),cljs.core.str(class_8521)].join(''));
}
{
var G__8522 = seq__8485_8517;
var G__8523 = chunk__8486_8518;
var G__8524 = count__8487_8519;
var G__8525 = (i__8488_8520 + 1);
seq__8485_8517 = G__8522;
chunk__8486_8518 = G__8523;
count__8487_8519 = G__8524;
i__8488_8520 = G__8525;
continue;
}
} else
{var temp__4092__auto___8526 = cljs.core.seq.call(null,seq__8485_8517);if(temp__4092__auto___8526)
{var seq__8485_8527__$1 = temp__4092__auto___8526;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8485_8527__$1))
{var c__5398__auto___8528 = cljs.core.chunk_first.call(null,seq__8485_8527__$1);{
var G__8529 = cljs.core.chunk_rest.call(null,seq__8485_8527__$1);
var G__8530 = c__5398__auto___8528;
var G__8531 = cljs.core.count.call(null,c__5398__auto___8528);
var G__8532 = 0;
seq__8485_8517 = G__8529;
chunk__8486_8518 = G__8530;
count__8487_8519 = G__8531;
i__8488_8520 = G__8532;
continue;
}
} else
{var class_8533 = cljs.core.first.call(null,seq__8485_8527__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8516,class_8533)))
{} else
{elem__$1.className = (((class_name_8516 === ""))?class_8533:[cljs.core.str(class_name_8516),cljs.core.str(" "),cljs.core.str(class_8533)].join(''));
}
{
var G__8534 = cljs.core.next.call(null,seq__8485_8527__$1);
var G__8535 = null;
var G__8536 = 0;
var G__8537 = 0;
seq__8485_8517 = G__8534;
chunk__8486_8518 = G__8535;
count__8487_8519 = G__8536;
i__8488_8520 = G__8537;
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
var G__8538__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8489_8539 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__8490_8540 = null;var count__8491_8541 = 0;var i__8492_8542 = 0;while(true){
if((i__8492_8542 < count__8491_8541))
{var c_8543 = cljs.core._nth.call(null,chunk__8490_8540,i__8492_8542);add_class_BANG_.call(null,elem__$1,c_8543);
{
var G__8544 = seq__8489_8539;
var G__8545 = chunk__8490_8540;
var G__8546 = count__8491_8541;
var G__8547 = (i__8492_8542 + 1);
seq__8489_8539 = G__8544;
chunk__8490_8540 = G__8545;
count__8491_8541 = G__8546;
i__8492_8542 = G__8547;
continue;
}
} else
{var temp__4092__auto___8548 = cljs.core.seq.call(null,seq__8489_8539);if(temp__4092__auto___8548)
{var seq__8489_8549__$1 = temp__4092__auto___8548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8489_8549__$1))
{var c__5398__auto___8550 = cljs.core.chunk_first.call(null,seq__8489_8549__$1);{
var G__8551 = cljs.core.chunk_rest.call(null,seq__8489_8549__$1);
var G__8552 = c__5398__auto___8550;
var G__8553 = cljs.core.count.call(null,c__5398__auto___8550);
var G__8554 = 0;
seq__8489_8539 = G__8551;
chunk__8490_8540 = G__8552;
count__8491_8541 = G__8553;
i__8492_8542 = G__8554;
continue;
}
} else
{var c_8555 = cljs.core.first.call(null,seq__8489_8549__$1);add_class_BANG_.call(null,elem__$1,c_8555);
{
var G__8556 = cljs.core.next.call(null,seq__8489_8549__$1);
var G__8557 = null;
var G__8558 = 0;
var G__8559 = 0;
seq__8489_8539 = G__8556;
chunk__8490_8540 = G__8557;
count__8491_8541 = G__8558;
i__8492_8542 = G__8559;
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
var G__8538 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8538__delegate.call(this,elem,classes,more_classes);};
G__8538.cljs$lang$maxFixedArity = 2;
G__8538.cljs$lang$applyTo = (function (arglist__8560){
var elem = cljs.core.first(arglist__8560);
arglist__8560 = cljs.core.next(arglist__8560);
var classes = cljs.core.first(arglist__8560);
var more_classes = cljs.core.rest(arglist__8560);
return G__8538__delegate(elem,classes,more_classes);
});
G__8538.cljs$core$IFn$_invoke$arity$variadic = G__8538__delegate;
return G__8538;
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
var G__8561 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__8561;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___8570 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8570))
{var class_list_8571 = temp__4090__auto___8570;class_list_8571.remove(class$__$1);
} else
{var class_name_8572 = elem__$1.className;var new_class_name_8573 = dommy.attrs.remove_class_str.call(null,class_name_8572,class$__$1);if((class_name_8572 === new_class_name_8573))
{} else
{elem__$1.className = new_class_name_8573;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__8574__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8566 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__8567 = null;var count__8568 = 0;var i__8569 = 0;while(true){
if((i__8569 < count__8568))
{var c = cljs.core._nth.call(null,chunk__8567,i__8569);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8575 = seq__8566;
var G__8576 = chunk__8567;
var G__8577 = count__8568;
var G__8578 = (i__8569 + 1);
seq__8566 = G__8575;
chunk__8567 = G__8576;
count__8568 = G__8577;
i__8569 = G__8578;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8566);if(temp__4092__auto__)
{var seq__8566__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8566__$1))
{var c__5398__auto__ = cljs.core.chunk_first.call(null,seq__8566__$1);{
var G__8579 = cljs.core.chunk_rest.call(null,seq__8566__$1);
var G__8580 = c__5398__auto__;
var G__8581 = cljs.core.count.call(null,c__5398__auto__);
var G__8582 = 0;
seq__8566 = G__8579;
chunk__8567 = G__8580;
count__8568 = G__8581;
i__8569 = G__8582;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8566__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8583 = cljs.core.next.call(null,seq__8566__$1);
var G__8584 = null;
var G__8585 = 0;
var G__8586 = 0;
seq__8566 = G__8583;
chunk__8567 = G__8584;
count__8568 = G__8585;
i__8569 = G__8586;
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
var G__8574 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8574__delegate.call(this,elem,class$,classes);};
G__8574.cljs$lang$maxFixedArity = 2;
G__8574.cljs$lang$applyTo = (function (arglist__8587){
var elem = cljs.core.first(arglist__8587);
arglist__8587 = cljs.core.next(arglist__8587);
var class$ = cljs.core.first(arglist__8587);
var classes = cljs.core.rest(arglist__8587);
return G__8574__delegate(elem,class$,classes);
});
G__8574.cljs$core$IFn$_invoke$arity$variadic = G__8574__delegate;
return G__8574;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___8588 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8588))
{var class_list_8589 = temp__4090__auto___8588;class_list_8589.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__8592){var vec__8593 = p__8592;var k = cljs.core.nth.call(null,vec__8593,0,null);var v = cljs.core.nth.call(null,vec__8593,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__8600_8606 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8601_8607 = null;var count__8602_8608 = 0;var i__8603_8609 = 0;while(true){
if((i__8603_8609 < count__8602_8608))
{var vec__8604_8610 = cljs.core._nth.call(null,chunk__8601_8607,i__8603_8609);var k_8611 = cljs.core.nth.call(null,vec__8604_8610,0,null);var v_8612 = cljs.core.nth.call(null,vec__8604_8610,1,null);(style[cljs.core.name.call(null,k_8611)] = v_8612);
{
var G__8613 = seq__8600_8606;
var G__8614 = chunk__8601_8607;
var G__8615 = count__8602_8608;
var G__8616 = (i__8603_8609 + 1);
seq__8600_8606 = G__8613;
chunk__8601_8607 = G__8614;
count__8602_8608 = G__8615;
i__8603_8609 = G__8616;
continue;
}
} else
{var temp__4092__auto___8617 = cljs.core.seq.call(null,seq__8600_8606);if(temp__4092__auto___8617)
{var seq__8600_8618__$1 = temp__4092__auto___8617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8600_8618__$1))
{var c__5398__auto___8619 = cljs.core.chunk_first.call(null,seq__8600_8618__$1);{
var G__8620 = cljs.core.chunk_rest.call(null,seq__8600_8618__$1);
var G__8621 = c__5398__auto___8619;
var G__8622 = cljs.core.count.call(null,c__5398__auto___8619);
var G__8623 = 0;
seq__8600_8606 = G__8620;
chunk__8601_8607 = G__8621;
count__8602_8608 = G__8622;
i__8603_8609 = G__8623;
continue;
}
} else
{var vec__8605_8624 = cljs.core.first.call(null,seq__8600_8618__$1);var k_8625 = cljs.core.nth.call(null,vec__8605_8624,0,null);var v_8626 = cljs.core.nth.call(null,vec__8605_8624,1,null);(style[cljs.core.name.call(null,k_8625)] = v_8626);
{
var G__8627 = cljs.core.next.call(null,seq__8600_8618__$1);
var G__8628 = null;
var G__8629 = 0;
var G__8630 = 0;
seq__8600_8606 = G__8627;
chunk__8601_8607 = G__8628;
count__8602_8608 = G__8629;
i__8603_8609 = G__8630;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8631){
var elem = cljs.core.first(arglist__8631);
var kvs = cljs.core.rest(arglist__8631);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8638_8644 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8639_8645 = null;var count__8640_8646 = 0;var i__8641_8647 = 0;while(true){
if((i__8641_8647 < count__8640_8646))
{var vec__8642_8648 = cljs.core._nth.call(null,chunk__8639_8645,i__8641_8647);var k_8649 = cljs.core.nth.call(null,vec__8642_8648,0,null);var v_8650 = cljs.core.nth.call(null,vec__8642_8648,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8649,[cljs.core.str(v_8650),cljs.core.str("px")].join(''));
{
var G__8651 = seq__8638_8644;
var G__8652 = chunk__8639_8645;
var G__8653 = count__8640_8646;
var G__8654 = (i__8641_8647 + 1);
seq__8638_8644 = G__8651;
chunk__8639_8645 = G__8652;
count__8640_8646 = G__8653;
i__8641_8647 = G__8654;
continue;
}
} else
{var temp__4092__auto___8655 = cljs.core.seq.call(null,seq__8638_8644);if(temp__4092__auto___8655)
{var seq__8638_8656__$1 = temp__4092__auto___8655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8638_8656__$1))
{var c__5398__auto___8657 = cljs.core.chunk_first.call(null,seq__8638_8656__$1);{
var G__8658 = cljs.core.chunk_rest.call(null,seq__8638_8656__$1);
var G__8659 = c__5398__auto___8657;
var G__8660 = cljs.core.count.call(null,c__5398__auto___8657);
var G__8661 = 0;
seq__8638_8644 = G__8658;
chunk__8639_8645 = G__8659;
count__8640_8646 = G__8660;
i__8641_8647 = G__8661;
continue;
}
} else
{var vec__8643_8662 = cljs.core.first.call(null,seq__8638_8656__$1);var k_8663 = cljs.core.nth.call(null,vec__8643_8662,0,null);var v_8664 = cljs.core.nth.call(null,vec__8643_8662,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8663,[cljs.core.str(v_8664),cljs.core.str("px")].join(''));
{
var G__8665 = cljs.core.next.call(null,seq__8638_8656__$1);
var G__8666 = null;
var G__8667 = 0;
var G__8668 = 0;
seq__8638_8644 = G__8665;
chunk__8639_8645 = G__8666;
count__8640_8646 = G__8667;
i__8641_8647 = G__8668;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8669){
var elem = cljs.core.first(arglist__8669);
var kvs = cljs.core.rest(arglist__8669);
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
{var G__8678 = dommy.template.__GT_node_like.call(null,elem);(G__8678[cljs.core.name.call(null,k)] = v);
return G__8678;
} else
{var G__8679 = dommy.template.__GT_node_like.call(null,elem);G__8679.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__8679;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8686__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8680_8687 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__8681_8688 = null;var count__8682_8689 = 0;var i__8683_8690 = 0;while(true){
if((i__8683_8690 < count__8682_8689))
{var vec__8684_8691 = cljs.core._nth.call(null,chunk__8681_8688,i__8683_8690);var k_8692__$1 = cljs.core.nth.call(null,vec__8684_8691,0,null);var v_8693__$1 = cljs.core.nth.call(null,vec__8684_8691,1,null);set_attr_BANG_.call(null,elem__$1,k_8692__$1,v_8693__$1);
{
var G__8694 = seq__8680_8687;
var G__8695 = chunk__8681_8688;
var G__8696 = count__8682_8689;
var G__8697 = (i__8683_8690 + 1);
seq__8680_8687 = G__8694;
chunk__8681_8688 = G__8695;
count__8682_8689 = G__8696;
i__8683_8690 = G__8697;
continue;
}
} else
{var temp__4092__auto___8698 = cljs.core.seq.call(null,seq__8680_8687);if(temp__4092__auto___8698)
{var seq__8680_8699__$1 = temp__4092__auto___8698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8680_8699__$1))
{var c__5398__auto___8700 = cljs.core.chunk_first.call(null,seq__8680_8699__$1);{
var G__8701 = cljs.core.chunk_rest.call(null,seq__8680_8699__$1);
var G__8702 = c__5398__auto___8700;
var G__8703 = cljs.core.count.call(null,c__5398__auto___8700);
var G__8704 = 0;
seq__8680_8687 = G__8701;
chunk__8681_8688 = G__8702;
count__8682_8689 = G__8703;
i__8683_8690 = G__8704;
continue;
}
} else
{var vec__8685_8705 = cljs.core.first.call(null,seq__8680_8699__$1);var k_8706__$1 = cljs.core.nth.call(null,vec__8685_8705,0,null);var v_8707__$1 = cljs.core.nth.call(null,vec__8685_8705,1,null);set_attr_BANG_.call(null,elem__$1,k_8706__$1,v_8707__$1);
{
var G__8708 = cljs.core.next.call(null,seq__8680_8699__$1);
var G__8709 = null;
var G__8710 = 0;
var G__8711 = 0;
seq__8680_8687 = G__8708;
chunk__8681_8688 = G__8709;
count__8682_8689 = G__8710;
i__8683_8690 = G__8711;
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
var G__8686 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8686__delegate.call(this,elem,k,v,kvs);};
G__8686.cljs$lang$maxFixedArity = 3;
G__8686.cljs$lang$applyTo = (function (arglist__8712){
var elem = cljs.core.first(arglist__8712);
arglist__8712 = cljs.core.next(arglist__8712);
var k = cljs.core.first(arglist__8712);
arglist__8712 = cljs.core.next(arglist__8712);
var v = cljs.core.first(arglist__8712);
var kvs = cljs.core.rest(arglist__8712);
return G__8686__delegate(elem,k,v,kvs);
});
G__8686.cljs$core$IFn$_invoke$arity$variadic = G__8686__delegate;
return G__8686;
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
var G__8721__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8717_8722 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8718_8723 = null;var count__8719_8724 = 0;var i__8720_8725 = 0;while(true){
if((i__8720_8725 < count__8719_8724))
{var k_8726__$1 = cljs.core._nth.call(null,chunk__8718_8723,i__8720_8725);remove_attr_BANG_.call(null,elem__$1,k_8726__$1);
{
var G__8727 = seq__8717_8722;
var G__8728 = chunk__8718_8723;
var G__8729 = count__8719_8724;
var G__8730 = (i__8720_8725 + 1);
seq__8717_8722 = G__8727;
chunk__8718_8723 = G__8728;
count__8719_8724 = G__8729;
i__8720_8725 = G__8730;
continue;
}
} else
{var temp__4092__auto___8731 = cljs.core.seq.call(null,seq__8717_8722);if(temp__4092__auto___8731)
{var seq__8717_8732__$1 = temp__4092__auto___8731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8717_8732__$1))
{var c__5398__auto___8733 = cljs.core.chunk_first.call(null,seq__8717_8732__$1);{
var G__8734 = cljs.core.chunk_rest.call(null,seq__8717_8732__$1);
var G__8735 = c__5398__auto___8733;
var G__8736 = cljs.core.count.call(null,c__5398__auto___8733);
var G__8737 = 0;
seq__8717_8722 = G__8734;
chunk__8718_8723 = G__8735;
count__8719_8724 = G__8736;
i__8720_8725 = G__8737;
continue;
}
} else
{var k_8738__$1 = cljs.core.first.call(null,seq__8717_8732__$1);remove_attr_BANG_.call(null,elem__$1,k_8738__$1);
{
var G__8739 = cljs.core.next.call(null,seq__8717_8732__$1);
var G__8740 = null;
var G__8741 = 0;
var G__8742 = 0;
seq__8717_8722 = G__8739;
chunk__8718_8723 = G__8740;
count__8719_8724 = G__8741;
i__8720_8725 = G__8742;
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
var G__8721 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8721__delegate.call(this,elem,k,ks);};
G__8721.cljs$lang$maxFixedArity = 2;
G__8721.cljs$lang$applyTo = (function (arglist__8743){
var elem = cljs.core.first(arglist__8743);
arglist__8743 = cljs.core.next(arglist__8743);
var k = cljs.core.first(arglist__8743);
var ks = cljs.core.rest(arglist__8743);
return G__8721__delegate(elem,k,ks);
});
G__8721.cljs$core$IFn$_invoke$arity$variadic = G__8721__delegate;
return G__8721;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__8745 = dommy.template.__GT_node_like.call(null,elem);G__8745.style.display = ((show_QMARK_)?"":"none");
return G__8745;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__8747 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8747,false);
return G__8747;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__8749 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8749,true);
return G__8749;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__8751 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__8751["constructor"] = Object);
return G__8751;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
