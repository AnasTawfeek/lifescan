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
var G__8472 = (i + class$.length);
start_from = G__8472;
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
{var temp__4090__auto___8497 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8497))
{var class_list_8498 = temp__4090__auto___8497;var seq__8485_8499 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8486_8500 = null;var count__8487_8501 = 0;var i__8488_8502 = 0;while(true){
if((i__8488_8502 < count__8487_8501))
{var class_8503 = cljs.core._nth.call(null,chunk__8486_8500,i__8488_8502);class_list_8498.add(class_8503);
{
var G__8504 = seq__8485_8499;
var G__8505 = chunk__8486_8500;
var G__8506 = count__8487_8501;
var G__8507 = (i__8488_8502 + 1);
seq__8485_8499 = G__8504;
chunk__8486_8500 = G__8505;
count__8487_8501 = G__8506;
i__8488_8502 = G__8507;
continue;
}
} else
{var temp__4092__auto___8508 = cljs.core.seq.call(null,seq__8485_8499);if(temp__4092__auto___8508)
{var seq__8485_8509__$1 = temp__4092__auto___8508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8485_8509__$1))
{var c__5398__auto___8510 = cljs.core.chunk_first.call(null,seq__8485_8509__$1);{
var G__8511 = cljs.core.chunk_rest.call(null,seq__8485_8509__$1);
var G__8512 = c__5398__auto___8510;
var G__8513 = cljs.core.count.call(null,c__5398__auto___8510);
var G__8514 = 0;
seq__8485_8499 = G__8511;
chunk__8486_8500 = G__8512;
count__8487_8501 = G__8513;
i__8488_8502 = G__8514;
continue;
}
} else
{var class_8515 = cljs.core.first.call(null,seq__8485_8509__$1);class_list_8498.add(class_8515);
{
var G__8516 = cljs.core.next.call(null,seq__8485_8509__$1);
var G__8517 = null;
var G__8518 = 0;
var G__8519 = 0;
seq__8485_8499 = G__8516;
chunk__8486_8500 = G__8517;
count__8487_8501 = G__8518;
i__8488_8502 = G__8519;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_8520 = elem__$1.className;var seq__8489_8521 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8490_8522 = null;var count__8491_8523 = 0;var i__8492_8524 = 0;while(true){
if((i__8492_8524 < count__8491_8523))
{var class_8525 = cljs.core._nth.call(null,chunk__8490_8522,i__8492_8524);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8520,class_8525)))
{} else
{elem__$1.className = (((class_name_8520 === ""))?class_8525:[cljs.core.str(class_name_8520),cljs.core.str(" "),cljs.core.str(class_8525)].join(''));
}
{
var G__8526 = seq__8489_8521;
var G__8527 = chunk__8490_8522;
var G__8528 = count__8491_8523;
var G__8529 = (i__8492_8524 + 1);
seq__8489_8521 = G__8526;
chunk__8490_8522 = G__8527;
count__8491_8523 = G__8528;
i__8492_8524 = G__8529;
continue;
}
} else
{var temp__4092__auto___8530 = cljs.core.seq.call(null,seq__8489_8521);if(temp__4092__auto___8530)
{var seq__8489_8531__$1 = temp__4092__auto___8530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8489_8531__$1))
{var c__5398__auto___8532 = cljs.core.chunk_first.call(null,seq__8489_8531__$1);{
var G__8533 = cljs.core.chunk_rest.call(null,seq__8489_8531__$1);
var G__8534 = c__5398__auto___8532;
var G__8535 = cljs.core.count.call(null,c__5398__auto___8532);
var G__8536 = 0;
seq__8489_8521 = G__8533;
chunk__8490_8522 = G__8534;
count__8491_8523 = G__8535;
i__8492_8524 = G__8536;
continue;
}
} else
{var class_8537 = cljs.core.first.call(null,seq__8489_8531__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8520,class_8537)))
{} else
{elem__$1.className = (((class_name_8520 === ""))?class_8537:[cljs.core.str(class_name_8520),cljs.core.str(" "),cljs.core.str(class_8537)].join(''));
}
{
var G__8538 = cljs.core.next.call(null,seq__8489_8531__$1);
var G__8539 = null;
var G__8540 = 0;
var G__8541 = 0;
seq__8489_8521 = G__8538;
chunk__8490_8522 = G__8539;
count__8491_8523 = G__8540;
i__8492_8524 = G__8541;
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
var G__8542__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8493_8543 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__8494_8544 = null;var count__8495_8545 = 0;var i__8496_8546 = 0;while(true){
if((i__8496_8546 < count__8495_8545))
{var c_8547 = cljs.core._nth.call(null,chunk__8494_8544,i__8496_8546);add_class_BANG_.call(null,elem__$1,c_8547);
{
var G__8548 = seq__8493_8543;
var G__8549 = chunk__8494_8544;
var G__8550 = count__8495_8545;
var G__8551 = (i__8496_8546 + 1);
seq__8493_8543 = G__8548;
chunk__8494_8544 = G__8549;
count__8495_8545 = G__8550;
i__8496_8546 = G__8551;
continue;
}
} else
{var temp__4092__auto___8552 = cljs.core.seq.call(null,seq__8493_8543);if(temp__4092__auto___8552)
{var seq__8493_8553__$1 = temp__4092__auto___8552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8493_8553__$1))
{var c__5398__auto___8554 = cljs.core.chunk_first.call(null,seq__8493_8553__$1);{
var G__8555 = cljs.core.chunk_rest.call(null,seq__8493_8553__$1);
var G__8556 = c__5398__auto___8554;
var G__8557 = cljs.core.count.call(null,c__5398__auto___8554);
var G__8558 = 0;
seq__8493_8543 = G__8555;
chunk__8494_8544 = G__8556;
count__8495_8545 = G__8557;
i__8496_8546 = G__8558;
continue;
}
} else
{var c_8559 = cljs.core.first.call(null,seq__8493_8553__$1);add_class_BANG_.call(null,elem__$1,c_8559);
{
var G__8560 = cljs.core.next.call(null,seq__8493_8553__$1);
var G__8561 = null;
var G__8562 = 0;
var G__8563 = 0;
seq__8493_8543 = G__8560;
chunk__8494_8544 = G__8561;
count__8495_8545 = G__8562;
i__8496_8546 = G__8563;
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
var G__8542 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8542__delegate.call(this,elem,classes,more_classes);};
G__8542.cljs$lang$maxFixedArity = 2;
G__8542.cljs$lang$applyTo = (function (arglist__8564){
var elem = cljs.core.first(arglist__8564);
arglist__8564 = cljs.core.next(arglist__8564);
var classes = cljs.core.first(arglist__8564);
var more_classes = cljs.core.rest(arglist__8564);
return G__8542__delegate(elem,classes,more_classes);
});
G__8542.cljs$core$IFn$_invoke$arity$variadic = G__8542__delegate;
return G__8542;
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
var G__8565 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__8565;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___8574 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8574))
{var class_list_8575 = temp__4090__auto___8574;class_list_8575.remove(class$__$1);
} else
{var class_name_8576 = elem__$1.className;var new_class_name_8577 = dommy.attrs.remove_class_str.call(null,class_name_8576,class$__$1);if((class_name_8576 === new_class_name_8577))
{} else
{elem__$1.className = new_class_name_8577;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__8578__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8570 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__8571 = null;var count__8572 = 0;var i__8573 = 0;while(true){
if((i__8573 < count__8572))
{var c = cljs.core._nth.call(null,chunk__8571,i__8573);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8579 = seq__8570;
var G__8580 = chunk__8571;
var G__8581 = count__8572;
var G__8582 = (i__8573 + 1);
seq__8570 = G__8579;
chunk__8571 = G__8580;
count__8572 = G__8581;
i__8573 = G__8582;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8570);if(temp__4092__auto__)
{var seq__8570__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8570__$1))
{var c__5398__auto__ = cljs.core.chunk_first.call(null,seq__8570__$1);{
var G__8583 = cljs.core.chunk_rest.call(null,seq__8570__$1);
var G__8584 = c__5398__auto__;
var G__8585 = cljs.core.count.call(null,c__5398__auto__);
var G__8586 = 0;
seq__8570 = G__8583;
chunk__8571 = G__8584;
count__8572 = G__8585;
i__8573 = G__8586;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8570__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8587 = cljs.core.next.call(null,seq__8570__$1);
var G__8588 = null;
var G__8589 = 0;
var G__8590 = 0;
seq__8570 = G__8587;
chunk__8571 = G__8588;
count__8572 = G__8589;
i__8573 = G__8590;
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
var G__8578 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8578__delegate.call(this,elem,class$,classes);};
G__8578.cljs$lang$maxFixedArity = 2;
G__8578.cljs$lang$applyTo = (function (arglist__8591){
var elem = cljs.core.first(arglist__8591);
arglist__8591 = cljs.core.next(arglist__8591);
var class$ = cljs.core.first(arglist__8591);
var classes = cljs.core.rest(arglist__8591);
return G__8578__delegate(elem,class$,classes);
});
G__8578.cljs$core$IFn$_invoke$arity$variadic = G__8578__delegate;
return G__8578;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___8592 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8592))
{var class_list_8593 = temp__4090__auto___8592;class_list_8593.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__8596){var vec__8597 = p__8596;var k = cljs.core.nth.call(null,vec__8597,0,null);var v = cljs.core.nth.call(null,vec__8597,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__8604_8610 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8605_8611 = null;var count__8606_8612 = 0;var i__8607_8613 = 0;while(true){
if((i__8607_8613 < count__8606_8612))
{var vec__8608_8614 = cljs.core._nth.call(null,chunk__8605_8611,i__8607_8613);var k_8615 = cljs.core.nth.call(null,vec__8608_8614,0,null);var v_8616 = cljs.core.nth.call(null,vec__8608_8614,1,null);(style[cljs.core.name.call(null,k_8615)] = v_8616);
{
var G__8617 = seq__8604_8610;
var G__8618 = chunk__8605_8611;
var G__8619 = count__8606_8612;
var G__8620 = (i__8607_8613 + 1);
seq__8604_8610 = G__8617;
chunk__8605_8611 = G__8618;
count__8606_8612 = G__8619;
i__8607_8613 = G__8620;
continue;
}
} else
{var temp__4092__auto___8621 = cljs.core.seq.call(null,seq__8604_8610);if(temp__4092__auto___8621)
{var seq__8604_8622__$1 = temp__4092__auto___8621;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8604_8622__$1))
{var c__5398__auto___8623 = cljs.core.chunk_first.call(null,seq__8604_8622__$1);{
var G__8624 = cljs.core.chunk_rest.call(null,seq__8604_8622__$1);
var G__8625 = c__5398__auto___8623;
var G__8626 = cljs.core.count.call(null,c__5398__auto___8623);
var G__8627 = 0;
seq__8604_8610 = G__8624;
chunk__8605_8611 = G__8625;
count__8606_8612 = G__8626;
i__8607_8613 = G__8627;
continue;
}
} else
{var vec__8609_8628 = cljs.core.first.call(null,seq__8604_8622__$1);var k_8629 = cljs.core.nth.call(null,vec__8609_8628,0,null);var v_8630 = cljs.core.nth.call(null,vec__8609_8628,1,null);(style[cljs.core.name.call(null,k_8629)] = v_8630);
{
var G__8631 = cljs.core.next.call(null,seq__8604_8622__$1);
var G__8632 = null;
var G__8633 = 0;
var G__8634 = 0;
seq__8604_8610 = G__8631;
chunk__8605_8611 = G__8632;
count__8606_8612 = G__8633;
i__8607_8613 = G__8634;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8635){
var elem = cljs.core.first(arglist__8635);
var kvs = cljs.core.rest(arglist__8635);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8642_8648 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8643_8649 = null;var count__8644_8650 = 0;var i__8645_8651 = 0;while(true){
if((i__8645_8651 < count__8644_8650))
{var vec__8646_8652 = cljs.core._nth.call(null,chunk__8643_8649,i__8645_8651);var k_8653 = cljs.core.nth.call(null,vec__8646_8652,0,null);var v_8654 = cljs.core.nth.call(null,vec__8646_8652,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8653,[cljs.core.str(v_8654),cljs.core.str("px")].join(''));
{
var G__8655 = seq__8642_8648;
var G__8656 = chunk__8643_8649;
var G__8657 = count__8644_8650;
var G__8658 = (i__8645_8651 + 1);
seq__8642_8648 = G__8655;
chunk__8643_8649 = G__8656;
count__8644_8650 = G__8657;
i__8645_8651 = G__8658;
continue;
}
} else
{var temp__4092__auto___8659 = cljs.core.seq.call(null,seq__8642_8648);if(temp__4092__auto___8659)
{var seq__8642_8660__$1 = temp__4092__auto___8659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8642_8660__$1))
{var c__5398__auto___8661 = cljs.core.chunk_first.call(null,seq__8642_8660__$1);{
var G__8662 = cljs.core.chunk_rest.call(null,seq__8642_8660__$1);
var G__8663 = c__5398__auto___8661;
var G__8664 = cljs.core.count.call(null,c__5398__auto___8661);
var G__8665 = 0;
seq__8642_8648 = G__8662;
chunk__8643_8649 = G__8663;
count__8644_8650 = G__8664;
i__8645_8651 = G__8665;
continue;
}
} else
{var vec__8647_8666 = cljs.core.first.call(null,seq__8642_8660__$1);var k_8667 = cljs.core.nth.call(null,vec__8647_8666,0,null);var v_8668 = cljs.core.nth.call(null,vec__8647_8666,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8667,[cljs.core.str(v_8668),cljs.core.str("px")].join(''));
{
var G__8669 = cljs.core.next.call(null,seq__8642_8660__$1);
var G__8670 = null;
var G__8671 = 0;
var G__8672 = 0;
seq__8642_8648 = G__8669;
chunk__8643_8649 = G__8670;
count__8644_8650 = G__8671;
i__8645_8651 = G__8672;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8673){
var elem = cljs.core.first(arglist__8673);
var kvs = cljs.core.rest(arglist__8673);
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
{var G__8682 = dommy.template.__GT_node_like.call(null,elem);(G__8682[cljs.core.name.call(null,k)] = v);
return G__8682;
} else
{var G__8683 = dommy.template.__GT_node_like.call(null,elem);G__8683.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__8683;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8690__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8684_8691 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__8685_8692 = null;var count__8686_8693 = 0;var i__8687_8694 = 0;while(true){
if((i__8687_8694 < count__8686_8693))
{var vec__8688_8695 = cljs.core._nth.call(null,chunk__8685_8692,i__8687_8694);var k_8696__$1 = cljs.core.nth.call(null,vec__8688_8695,0,null);var v_8697__$1 = cljs.core.nth.call(null,vec__8688_8695,1,null);set_attr_BANG_.call(null,elem__$1,k_8696__$1,v_8697__$1);
{
var G__8698 = seq__8684_8691;
var G__8699 = chunk__8685_8692;
var G__8700 = count__8686_8693;
var G__8701 = (i__8687_8694 + 1);
seq__8684_8691 = G__8698;
chunk__8685_8692 = G__8699;
count__8686_8693 = G__8700;
i__8687_8694 = G__8701;
continue;
}
} else
{var temp__4092__auto___8702 = cljs.core.seq.call(null,seq__8684_8691);if(temp__4092__auto___8702)
{var seq__8684_8703__$1 = temp__4092__auto___8702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8684_8703__$1))
{var c__5398__auto___8704 = cljs.core.chunk_first.call(null,seq__8684_8703__$1);{
var G__8705 = cljs.core.chunk_rest.call(null,seq__8684_8703__$1);
var G__8706 = c__5398__auto___8704;
var G__8707 = cljs.core.count.call(null,c__5398__auto___8704);
var G__8708 = 0;
seq__8684_8691 = G__8705;
chunk__8685_8692 = G__8706;
count__8686_8693 = G__8707;
i__8687_8694 = G__8708;
continue;
}
} else
{var vec__8689_8709 = cljs.core.first.call(null,seq__8684_8703__$1);var k_8710__$1 = cljs.core.nth.call(null,vec__8689_8709,0,null);var v_8711__$1 = cljs.core.nth.call(null,vec__8689_8709,1,null);set_attr_BANG_.call(null,elem__$1,k_8710__$1,v_8711__$1);
{
var G__8712 = cljs.core.next.call(null,seq__8684_8703__$1);
var G__8713 = null;
var G__8714 = 0;
var G__8715 = 0;
seq__8684_8691 = G__8712;
chunk__8685_8692 = G__8713;
count__8686_8693 = G__8714;
i__8687_8694 = G__8715;
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
var G__8690 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8690__delegate.call(this,elem,k,v,kvs);};
G__8690.cljs$lang$maxFixedArity = 3;
G__8690.cljs$lang$applyTo = (function (arglist__8716){
var elem = cljs.core.first(arglist__8716);
arglist__8716 = cljs.core.next(arglist__8716);
var k = cljs.core.first(arglist__8716);
arglist__8716 = cljs.core.next(arglist__8716);
var v = cljs.core.first(arglist__8716);
var kvs = cljs.core.rest(arglist__8716);
return G__8690__delegate(elem,k,v,kvs);
});
G__8690.cljs$core$IFn$_invoke$arity$variadic = G__8690__delegate;
return G__8690;
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
var G__8725__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8721_8726 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8722_8727 = null;var count__8723_8728 = 0;var i__8724_8729 = 0;while(true){
if((i__8724_8729 < count__8723_8728))
{var k_8730__$1 = cljs.core._nth.call(null,chunk__8722_8727,i__8724_8729);remove_attr_BANG_.call(null,elem__$1,k_8730__$1);
{
var G__8731 = seq__8721_8726;
var G__8732 = chunk__8722_8727;
var G__8733 = count__8723_8728;
var G__8734 = (i__8724_8729 + 1);
seq__8721_8726 = G__8731;
chunk__8722_8727 = G__8732;
count__8723_8728 = G__8733;
i__8724_8729 = G__8734;
continue;
}
} else
{var temp__4092__auto___8735 = cljs.core.seq.call(null,seq__8721_8726);if(temp__4092__auto___8735)
{var seq__8721_8736__$1 = temp__4092__auto___8735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8721_8736__$1))
{var c__5398__auto___8737 = cljs.core.chunk_first.call(null,seq__8721_8736__$1);{
var G__8738 = cljs.core.chunk_rest.call(null,seq__8721_8736__$1);
var G__8739 = c__5398__auto___8737;
var G__8740 = cljs.core.count.call(null,c__5398__auto___8737);
var G__8741 = 0;
seq__8721_8726 = G__8738;
chunk__8722_8727 = G__8739;
count__8723_8728 = G__8740;
i__8724_8729 = G__8741;
continue;
}
} else
{var k_8742__$1 = cljs.core.first.call(null,seq__8721_8736__$1);remove_attr_BANG_.call(null,elem__$1,k_8742__$1);
{
var G__8743 = cljs.core.next.call(null,seq__8721_8736__$1);
var G__8744 = null;
var G__8745 = 0;
var G__8746 = 0;
seq__8721_8726 = G__8743;
chunk__8722_8727 = G__8744;
count__8723_8728 = G__8745;
i__8724_8729 = G__8746;
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
var G__8725 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8725__delegate.call(this,elem,k,ks);};
G__8725.cljs$lang$maxFixedArity = 2;
G__8725.cljs$lang$applyTo = (function (arglist__8747){
var elem = cljs.core.first(arglist__8747);
arglist__8747 = cljs.core.next(arglist__8747);
var k = cljs.core.first(arglist__8747);
var ks = cljs.core.rest(arglist__8747);
return G__8725__delegate(elem,k,ks);
});
G__8725.cljs$core$IFn$_invoke$arity$variadic = G__8725__delegate;
return G__8725;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__8749 = dommy.template.__GT_node_like.call(null,elem);G__8749.style.display = ((show_QMARK_)?"":"none");
return G__8749;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__8751 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8751,false);
return G__8751;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__8753 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8753,true);
return G__8753;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__8755 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__8755["constructor"] = Object);
return G__8755;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
