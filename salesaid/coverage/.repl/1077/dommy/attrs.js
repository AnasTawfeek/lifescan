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
var G__8476 = (i + class$.length);
start_from = G__8476;
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
{var temp__4090__auto___8501 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8501))
{var class_list_8502 = temp__4090__auto___8501;var seq__8489_8503 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8490_8504 = null;var count__8491_8505 = 0;var i__8492_8506 = 0;while(true){
if((i__8492_8506 < count__8491_8505))
{var class_8507 = cljs.core._nth.call(null,chunk__8490_8504,i__8492_8506);class_list_8502.add(class_8507);
{
var G__8508 = seq__8489_8503;
var G__8509 = chunk__8490_8504;
var G__8510 = count__8491_8505;
var G__8511 = (i__8492_8506 + 1);
seq__8489_8503 = G__8508;
chunk__8490_8504 = G__8509;
count__8491_8505 = G__8510;
i__8492_8506 = G__8511;
continue;
}
} else
{var temp__4092__auto___8512 = cljs.core.seq.call(null,seq__8489_8503);if(temp__4092__auto___8512)
{var seq__8489_8513__$1 = temp__4092__auto___8512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8489_8513__$1))
{var c__5398__auto___8514 = cljs.core.chunk_first.call(null,seq__8489_8513__$1);{
var G__8515 = cljs.core.chunk_rest.call(null,seq__8489_8513__$1);
var G__8516 = c__5398__auto___8514;
var G__8517 = cljs.core.count.call(null,c__5398__auto___8514);
var G__8518 = 0;
seq__8489_8503 = G__8515;
chunk__8490_8504 = G__8516;
count__8491_8505 = G__8517;
i__8492_8506 = G__8518;
continue;
}
} else
{var class_8519 = cljs.core.first.call(null,seq__8489_8513__$1);class_list_8502.add(class_8519);
{
var G__8520 = cljs.core.next.call(null,seq__8489_8513__$1);
var G__8521 = null;
var G__8522 = 0;
var G__8523 = 0;
seq__8489_8503 = G__8520;
chunk__8490_8504 = G__8521;
count__8491_8505 = G__8522;
i__8492_8506 = G__8523;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_8524 = elem__$1.className;var seq__8493_8525 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8494_8526 = null;var count__8495_8527 = 0;var i__8496_8528 = 0;while(true){
if((i__8496_8528 < count__8495_8527))
{var class_8529 = cljs.core._nth.call(null,chunk__8494_8526,i__8496_8528);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8524,class_8529)))
{} else
{elem__$1.className = (((class_name_8524 === ""))?class_8529:[cljs.core.str(class_name_8524),cljs.core.str(" "),cljs.core.str(class_8529)].join(''));
}
{
var G__8530 = seq__8493_8525;
var G__8531 = chunk__8494_8526;
var G__8532 = count__8495_8527;
var G__8533 = (i__8496_8528 + 1);
seq__8493_8525 = G__8530;
chunk__8494_8526 = G__8531;
count__8495_8527 = G__8532;
i__8496_8528 = G__8533;
continue;
}
} else
{var temp__4092__auto___8534 = cljs.core.seq.call(null,seq__8493_8525);if(temp__4092__auto___8534)
{var seq__8493_8535__$1 = temp__4092__auto___8534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8493_8535__$1))
{var c__5398__auto___8536 = cljs.core.chunk_first.call(null,seq__8493_8535__$1);{
var G__8537 = cljs.core.chunk_rest.call(null,seq__8493_8535__$1);
var G__8538 = c__5398__auto___8536;
var G__8539 = cljs.core.count.call(null,c__5398__auto___8536);
var G__8540 = 0;
seq__8493_8525 = G__8537;
chunk__8494_8526 = G__8538;
count__8495_8527 = G__8539;
i__8496_8528 = G__8540;
continue;
}
} else
{var class_8541 = cljs.core.first.call(null,seq__8493_8535__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8524,class_8541)))
{} else
{elem__$1.className = (((class_name_8524 === ""))?class_8541:[cljs.core.str(class_name_8524),cljs.core.str(" "),cljs.core.str(class_8541)].join(''));
}
{
var G__8542 = cljs.core.next.call(null,seq__8493_8535__$1);
var G__8543 = null;
var G__8544 = 0;
var G__8545 = 0;
seq__8493_8525 = G__8542;
chunk__8494_8526 = G__8543;
count__8495_8527 = G__8544;
i__8496_8528 = G__8545;
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
var G__8546__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8497_8547 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__8498_8548 = null;var count__8499_8549 = 0;var i__8500_8550 = 0;while(true){
if((i__8500_8550 < count__8499_8549))
{var c_8551 = cljs.core._nth.call(null,chunk__8498_8548,i__8500_8550);add_class_BANG_.call(null,elem__$1,c_8551);
{
var G__8552 = seq__8497_8547;
var G__8553 = chunk__8498_8548;
var G__8554 = count__8499_8549;
var G__8555 = (i__8500_8550 + 1);
seq__8497_8547 = G__8552;
chunk__8498_8548 = G__8553;
count__8499_8549 = G__8554;
i__8500_8550 = G__8555;
continue;
}
} else
{var temp__4092__auto___8556 = cljs.core.seq.call(null,seq__8497_8547);if(temp__4092__auto___8556)
{var seq__8497_8557__$1 = temp__4092__auto___8556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8497_8557__$1))
{var c__5398__auto___8558 = cljs.core.chunk_first.call(null,seq__8497_8557__$1);{
var G__8559 = cljs.core.chunk_rest.call(null,seq__8497_8557__$1);
var G__8560 = c__5398__auto___8558;
var G__8561 = cljs.core.count.call(null,c__5398__auto___8558);
var G__8562 = 0;
seq__8497_8547 = G__8559;
chunk__8498_8548 = G__8560;
count__8499_8549 = G__8561;
i__8500_8550 = G__8562;
continue;
}
} else
{var c_8563 = cljs.core.first.call(null,seq__8497_8557__$1);add_class_BANG_.call(null,elem__$1,c_8563);
{
var G__8564 = cljs.core.next.call(null,seq__8497_8557__$1);
var G__8565 = null;
var G__8566 = 0;
var G__8567 = 0;
seq__8497_8547 = G__8564;
chunk__8498_8548 = G__8565;
count__8499_8549 = G__8566;
i__8500_8550 = G__8567;
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
var G__8546 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8546__delegate.call(this,elem,classes,more_classes);};
G__8546.cljs$lang$maxFixedArity = 2;
G__8546.cljs$lang$applyTo = (function (arglist__8568){
var elem = cljs.core.first(arglist__8568);
arglist__8568 = cljs.core.next(arglist__8568);
var classes = cljs.core.first(arglist__8568);
var more_classes = cljs.core.rest(arglist__8568);
return G__8546__delegate(elem,classes,more_classes);
});
G__8546.cljs$core$IFn$_invoke$arity$variadic = G__8546__delegate;
return G__8546;
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
var G__8569 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__8569;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___8578 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8578))
{var class_list_8579 = temp__4090__auto___8578;class_list_8579.remove(class$__$1);
} else
{var class_name_8580 = elem__$1.className;var new_class_name_8581 = dommy.attrs.remove_class_str.call(null,class_name_8580,class$__$1);if((class_name_8580 === new_class_name_8581))
{} else
{elem__$1.className = new_class_name_8581;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__8582__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8574 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__8575 = null;var count__8576 = 0;var i__8577 = 0;while(true){
if((i__8577 < count__8576))
{var c = cljs.core._nth.call(null,chunk__8575,i__8577);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8583 = seq__8574;
var G__8584 = chunk__8575;
var G__8585 = count__8576;
var G__8586 = (i__8577 + 1);
seq__8574 = G__8583;
chunk__8575 = G__8584;
count__8576 = G__8585;
i__8577 = G__8586;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8574);if(temp__4092__auto__)
{var seq__8574__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8574__$1))
{var c__5398__auto__ = cljs.core.chunk_first.call(null,seq__8574__$1);{
var G__8587 = cljs.core.chunk_rest.call(null,seq__8574__$1);
var G__8588 = c__5398__auto__;
var G__8589 = cljs.core.count.call(null,c__5398__auto__);
var G__8590 = 0;
seq__8574 = G__8587;
chunk__8575 = G__8588;
count__8576 = G__8589;
i__8577 = G__8590;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8574__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8591 = cljs.core.next.call(null,seq__8574__$1);
var G__8592 = null;
var G__8593 = 0;
var G__8594 = 0;
seq__8574 = G__8591;
chunk__8575 = G__8592;
count__8576 = G__8593;
i__8577 = G__8594;
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
var G__8582 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8582__delegate.call(this,elem,class$,classes);};
G__8582.cljs$lang$maxFixedArity = 2;
G__8582.cljs$lang$applyTo = (function (arglist__8595){
var elem = cljs.core.first(arglist__8595);
arglist__8595 = cljs.core.next(arglist__8595);
var class$ = cljs.core.first(arglist__8595);
var classes = cljs.core.rest(arglist__8595);
return G__8582__delegate(elem,class$,classes);
});
G__8582.cljs$core$IFn$_invoke$arity$variadic = G__8582__delegate;
return G__8582;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___8596 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8596))
{var class_list_8597 = temp__4090__auto___8596;class_list_8597.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__8600){var vec__8601 = p__8600;var k = cljs.core.nth.call(null,vec__8601,0,null);var v = cljs.core.nth.call(null,vec__8601,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__8608_8614 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8609_8615 = null;var count__8610_8616 = 0;var i__8611_8617 = 0;while(true){
if((i__8611_8617 < count__8610_8616))
{var vec__8612_8618 = cljs.core._nth.call(null,chunk__8609_8615,i__8611_8617);var k_8619 = cljs.core.nth.call(null,vec__8612_8618,0,null);var v_8620 = cljs.core.nth.call(null,vec__8612_8618,1,null);(style[cljs.core.name.call(null,k_8619)] = v_8620);
{
var G__8621 = seq__8608_8614;
var G__8622 = chunk__8609_8615;
var G__8623 = count__8610_8616;
var G__8624 = (i__8611_8617 + 1);
seq__8608_8614 = G__8621;
chunk__8609_8615 = G__8622;
count__8610_8616 = G__8623;
i__8611_8617 = G__8624;
continue;
}
} else
{var temp__4092__auto___8625 = cljs.core.seq.call(null,seq__8608_8614);if(temp__4092__auto___8625)
{var seq__8608_8626__$1 = temp__4092__auto___8625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8608_8626__$1))
{var c__5398__auto___8627 = cljs.core.chunk_first.call(null,seq__8608_8626__$1);{
var G__8628 = cljs.core.chunk_rest.call(null,seq__8608_8626__$1);
var G__8629 = c__5398__auto___8627;
var G__8630 = cljs.core.count.call(null,c__5398__auto___8627);
var G__8631 = 0;
seq__8608_8614 = G__8628;
chunk__8609_8615 = G__8629;
count__8610_8616 = G__8630;
i__8611_8617 = G__8631;
continue;
}
} else
{var vec__8613_8632 = cljs.core.first.call(null,seq__8608_8626__$1);var k_8633 = cljs.core.nth.call(null,vec__8613_8632,0,null);var v_8634 = cljs.core.nth.call(null,vec__8613_8632,1,null);(style[cljs.core.name.call(null,k_8633)] = v_8634);
{
var G__8635 = cljs.core.next.call(null,seq__8608_8626__$1);
var G__8636 = null;
var G__8637 = 0;
var G__8638 = 0;
seq__8608_8614 = G__8635;
chunk__8609_8615 = G__8636;
count__8610_8616 = G__8637;
i__8611_8617 = G__8638;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8639){
var elem = cljs.core.first(arglist__8639);
var kvs = cljs.core.rest(arglist__8639);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8646_8652 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8647_8653 = null;var count__8648_8654 = 0;var i__8649_8655 = 0;while(true){
if((i__8649_8655 < count__8648_8654))
{var vec__8650_8656 = cljs.core._nth.call(null,chunk__8647_8653,i__8649_8655);var k_8657 = cljs.core.nth.call(null,vec__8650_8656,0,null);var v_8658 = cljs.core.nth.call(null,vec__8650_8656,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8657,[cljs.core.str(v_8658),cljs.core.str("px")].join(''));
{
var G__8659 = seq__8646_8652;
var G__8660 = chunk__8647_8653;
var G__8661 = count__8648_8654;
var G__8662 = (i__8649_8655 + 1);
seq__8646_8652 = G__8659;
chunk__8647_8653 = G__8660;
count__8648_8654 = G__8661;
i__8649_8655 = G__8662;
continue;
}
} else
{var temp__4092__auto___8663 = cljs.core.seq.call(null,seq__8646_8652);if(temp__4092__auto___8663)
{var seq__8646_8664__$1 = temp__4092__auto___8663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8646_8664__$1))
{var c__5398__auto___8665 = cljs.core.chunk_first.call(null,seq__8646_8664__$1);{
var G__8666 = cljs.core.chunk_rest.call(null,seq__8646_8664__$1);
var G__8667 = c__5398__auto___8665;
var G__8668 = cljs.core.count.call(null,c__5398__auto___8665);
var G__8669 = 0;
seq__8646_8652 = G__8666;
chunk__8647_8653 = G__8667;
count__8648_8654 = G__8668;
i__8649_8655 = G__8669;
continue;
}
} else
{var vec__8651_8670 = cljs.core.first.call(null,seq__8646_8664__$1);var k_8671 = cljs.core.nth.call(null,vec__8651_8670,0,null);var v_8672 = cljs.core.nth.call(null,vec__8651_8670,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8671,[cljs.core.str(v_8672),cljs.core.str("px")].join(''));
{
var G__8673 = cljs.core.next.call(null,seq__8646_8664__$1);
var G__8674 = null;
var G__8675 = 0;
var G__8676 = 0;
seq__8646_8652 = G__8673;
chunk__8647_8653 = G__8674;
count__8648_8654 = G__8675;
i__8649_8655 = G__8676;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8677){
var elem = cljs.core.first(arglist__8677);
var kvs = cljs.core.rest(arglist__8677);
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
{var G__8686 = dommy.template.__GT_node_like.call(null,elem);(G__8686[cljs.core.name.call(null,k)] = v);
return G__8686;
} else
{var G__8687 = dommy.template.__GT_node_like.call(null,elem);G__8687.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__8687;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8694__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8688_8695 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__8689_8696 = null;var count__8690_8697 = 0;var i__8691_8698 = 0;while(true){
if((i__8691_8698 < count__8690_8697))
{var vec__8692_8699 = cljs.core._nth.call(null,chunk__8689_8696,i__8691_8698);var k_8700__$1 = cljs.core.nth.call(null,vec__8692_8699,0,null);var v_8701__$1 = cljs.core.nth.call(null,vec__8692_8699,1,null);set_attr_BANG_.call(null,elem__$1,k_8700__$1,v_8701__$1);
{
var G__8702 = seq__8688_8695;
var G__8703 = chunk__8689_8696;
var G__8704 = count__8690_8697;
var G__8705 = (i__8691_8698 + 1);
seq__8688_8695 = G__8702;
chunk__8689_8696 = G__8703;
count__8690_8697 = G__8704;
i__8691_8698 = G__8705;
continue;
}
} else
{var temp__4092__auto___8706 = cljs.core.seq.call(null,seq__8688_8695);if(temp__4092__auto___8706)
{var seq__8688_8707__$1 = temp__4092__auto___8706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8688_8707__$1))
{var c__5398__auto___8708 = cljs.core.chunk_first.call(null,seq__8688_8707__$1);{
var G__8709 = cljs.core.chunk_rest.call(null,seq__8688_8707__$1);
var G__8710 = c__5398__auto___8708;
var G__8711 = cljs.core.count.call(null,c__5398__auto___8708);
var G__8712 = 0;
seq__8688_8695 = G__8709;
chunk__8689_8696 = G__8710;
count__8690_8697 = G__8711;
i__8691_8698 = G__8712;
continue;
}
} else
{var vec__8693_8713 = cljs.core.first.call(null,seq__8688_8707__$1);var k_8714__$1 = cljs.core.nth.call(null,vec__8693_8713,0,null);var v_8715__$1 = cljs.core.nth.call(null,vec__8693_8713,1,null);set_attr_BANG_.call(null,elem__$1,k_8714__$1,v_8715__$1);
{
var G__8716 = cljs.core.next.call(null,seq__8688_8707__$1);
var G__8717 = null;
var G__8718 = 0;
var G__8719 = 0;
seq__8688_8695 = G__8716;
chunk__8689_8696 = G__8717;
count__8690_8697 = G__8718;
i__8691_8698 = G__8719;
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
var G__8694 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8694__delegate.call(this,elem,k,v,kvs);};
G__8694.cljs$lang$maxFixedArity = 3;
G__8694.cljs$lang$applyTo = (function (arglist__8720){
var elem = cljs.core.first(arglist__8720);
arglist__8720 = cljs.core.next(arglist__8720);
var k = cljs.core.first(arglist__8720);
arglist__8720 = cljs.core.next(arglist__8720);
var v = cljs.core.first(arglist__8720);
var kvs = cljs.core.rest(arglist__8720);
return G__8694__delegate(elem,k,v,kvs);
});
G__8694.cljs$core$IFn$_invoke$arity$variadic = G__8694__delegate;
return G__8694;
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
var G__8729__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8725_8730 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8726_8731 = null;var count__8727_8732 = 0;var i__8728_8733 = 0;while(true){
if((i__8728_8733 < count__8727_8732))
{var k_8734__$1 = cljs.core._nth.call(null,chunk__8726_8731,i__8728_8733);remove_attr_BANG_.call(null,elem__$1,k_8734__$1);
{
var G__8735 = seq__8725_8730;
var G__8736 = chunk__8726_8731;
var G__8737 = count__8727_8732;
var G__8738 = (i__8728_8733 + 1);
seq__8725_8730 = G__8735;
chunk__8726_8731 = G__8736;
count__8727_8732 = G__8737;
i__8728_8733 = G__8738;
continue;
}
} else
{var temp__4092__auto___8739 = cljs.core.seq.call(null,seq__8725_8730);if(temp__4092__auto___8739)
{var seq__8725_8740__$1 = temp__4092__auto___8739;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8725_8740__$1))
{var c__5398__auto___8741 = cljs.core.chunk_first.call(null,seq__8725_8740__$1);{
var G__8742 = cljs.core.chunk_rest.call(null,seq__8725_8740__$1);
var G__8743 = c__5398__auto___8741;
var G__8744 = cljs.core.count.call(null,c__5398__auto___8741);
var G__8745 = 0;
seq__8725_8730 = G__8742;
chunk__8726_8731 = G__8743;
count__8727_8732 = G__8744;
i__8728_8733 = G__8745;
continue;
}
} else
{var k_8746__$1 = cljs.core.first.call(null,seq__8725_8740__$1);remove_attr_BANG_.call(null,elem__$1,k_8746__$1);
{
var G__8747 = cljs.core.next.call(null,seq__8725_8740__$1);
var G__8748 = null;
var G__8749 = 0;
var G__8750 = 0;
seq__8725_8730 = G__8747;
chunk__8726_8731 = G__8748;
count__8727_8732 = G__8749;
i__8728_8733 = G__8750;
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
var G__8729 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8729__delegate.call(this,elem,k,ks);};
G__8729.cljs$lang$maxFixedArity = 2;
G__8729.cljs$lang$applyTo = (function (arglist__8751){
var elem = cljs.core.first(arglist__8751);
arglist__8751 = cljs.core.next(arglist__8751);
var k = cljs.core.first(arglist__8751);
var ks = cljs.core.rest(arglist__8751);
return G__8729__delegate(elem,k,ks);
});
G__8729.cljs$core$IFn$_invoke$arity$variadic = G__8729__delegate;
return G__8729;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__8753 = dommy.template.__GT_node_like.call(null,elem);G__8753.style.display = ((show_QMARK_)?"":"none");
return G__8753;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__8755 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8755,false);
return G__8755;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__8757 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8757,true);
return G__8757;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__8759 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__8759["constructor"] = Object);
return G__8759;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
