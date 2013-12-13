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
var G__8470 = (i + class$.length);
start_from = G__8470;
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
{var temp__4090__auto___8495 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8495))
{var class_list_8496 = temp__4090__auto___8495;var seq__8483_8497 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8484_8498 = null;var count__8485_8499 = 0;var i__8486_8500 = 0;while(true){
if((i__8486_8500 < count__8485_8499))
{var class_8501 = cljs.core._nth.call(null,chunk__8484_8498,i__8486_8500);class_list_8496.add(class_8501);
{
var G__8502 = seq__8483_8497;
var G__8503 = chunk__8484_8498;
var G__8504 = count__8485_8499;
var G__8505 = (i__8486_8500 + 1);
seq__8483_8497 = G__8502;
chunk__8484_8498 = G__8503;
count__8485_8499 = G__8504;
i__8486_8500 = G__8505;
continue;
}
} else
{var temp__4092__auto___8506 = cljs.core.seq.call(null,seq__8483_8497);if(temp__4092__auto___8506)
{var seq__8483_8507__$1 = temp__4092__auto___8506;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8483_8507__$1))
{var c__5398__auto___8508 = cljs.core.chunk_first.call(null,seq__8483_8507__$1);{
var G__8509 = cljs.core.chunk_rest.call(null,seq__8483_8507__$1);
var G__8510 = c__5398__auto___8508;
var G__8511 = cljs.core.count.call(null,c__5398__auto___8508);
var G__8512 = 0;
seq__8483_8497 = G__8509;
chunk__8484_8498 = G__8510;
count__8485_8499 = G__8511;
i__8486_8500 = G__8512;
continue;
}
} else
{var class_8513 = cljs.core.first.call(null,seq__8483_8507__$1);class_list_8496.add(class_8513);
{
var G__8514 = cljs.core.next.call(null,seq__8483_8507__$1);
var G__8515 = null;
var G__8516 = 0;
var G__8517 = 0;
seq__8483_8497 = G__8514;
chunk__8484_8498 = G__8515;
count__8485_8499 = G__8516;
i__8486_8500 = G__8517;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_8518 = elem__$1.className;var seq__8487_8519 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8488_8520 = null;var count__8489_8521 = 0;var i__8490_8522 = 0;while(true){
if((i__8490_8522 < count__8489_8521))
{var class_8523 = cljs.core._nth.call(null,chunk__8488_8520,i__8490_8522);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8518,class_8523)))
{} else
{elem__$1.className = (((class_name_8518 === ""))?class_8523:[cljs.core.str(class_name_8518),cljs.core.str(" "),cljs.core.str(class_8523)].join(''));
}
{
var G__8524 = seq__8487_8519;
var G__8525 = chunk__8488_8520;
var G__8526 = count__8489_8521;
var G__8527 = (i__8490_8522 + 1);
seq__8487_8519 = G__8524;
chunk__8488_8520 = G__8525;
count__8489_8521 = G__8526;
i__8490_8522 = G__8527;
continue;
}
} else
{var temp__4092__auto___8528 = cljs.core.seq.call(null,seq__8487_8519);if(temp__4092__auto___8528)
{var seq__8487_8529__$1 = temp__4092__auto___8528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8487_8529__$1))
{var c__5398__auto___8530 = cljs.core.chunk_first.call(null,seq__8487_8529__$1);{
var G__8531 = cljs.core.chunk_rest.call(null,seq__8487_8529__$1);
var G__8532 = c__5398__auto___8530;
var G__8533 = cljs.core.count.call(null,c__5398__auto___8530);
var G__8534 = 0;
seq__8487_8519 = G__8531;
chunk__8488_8520 = G__8532;
count__8489_8521 = G__8533;
i__8490_8522 = G__8534;
continue;
}
} else
{var class_8535 = cljs.core.first.call(null,seq__8487_8529__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8518,class_8535)))
{} else
{elem__$1.className = (((class_name_8518 === ""))?class_8535:[cljs.core.str(class_name_8518),cljs.core.str(" "),cljs.core.str(class_8535)].join(''));
}
{
var G__8536 = cljs.core.next.call(null,seq__8487_8529__$1);
var G__8537 = null;
var G__8538 = 0;
var G__8539 = 0;
seq__8487_8519 = G__8536;
chunk__8488_8520 = G__8537;
count__8489_8521 = G__8538;
i__8490_8522 = G__8539;
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
var G__8540__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8491_8541 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__8492_8542 = null;var count__8493_8543 = 0;var i__8494_8544 = 0;while(true){
if((i__8494_8544 < count__8493_8543))
{var c_8545 = cljs.core._nth.call(null,chunk__8492_8542,i__8494_8544);add_class_BANG_.call(null,elem__$1,c_8545);
{
var G__8546 = seq__8491_8541;
var G__8547 = chunk__8492_8542;
var G__8548 = count__8493_8543;
var G__8549 = (i__8494_8544 + 1);
seq__8491_8541 = G__8546;
chunk__8492_8542 = G__8547;
count__8493_8543 = G__8548;
i__8494_8544 = G__8549;
continue;
}
} else
{var temp__4092__auto___8550 = cljs.core.seq.call(null,seq__8491_8541);if(temp__4092__auto___8550)
{var seq__8491_8551__$1 = temp__4092__auto___8550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8491_8551__$1))
{var c__5398__auto___8552 = cljs.core.chunk_first.call(null,seq__8491_8551__$1);{
var G__8553 = cljs.core.chunk_rest.call(null,seq__8491_8551__$1);
var G__8554 = c__5398__auto___8552;
var G__8555 = cljs.core.count.call(null,c__5398__auto___8552);
var G__8556 = 0;
seq__8491_8541 = G__8553;
chunk__8492_8542 = G__8554;
count__8493_8543 = G__8555;
i__8494_8544 = G__8556;
continue;
}
} else
{var c_8557 = cljs.core.first.call(null,seq__8491_8551__$1);add_class_BANG_.call(null,elem__$1,c_8557);
{
var G__8558 = cljs.core.next.call(null,seq__8491_8551__$1);
var G__8559 = null;
var G__8560 = 0;
var G__8561 = 0;
seq__8491_8541 = G__8558;
chunk__8492_8542 = G__8559;
count__8493_8543 = G__8560;
i__8494_8544 = G__8561;
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
var G__8540 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8540__delegate.call(this,elem,classes,more_classes);};
G__8540.cljs$lang$maxFixedArity = 2;
G__8540.cljs$lang$applyTo = (function (arglist__8562){
var elem = cljs.core.first(arglist__8562);
arglist__8562 = cljs.core.next(arglist__8562);
var classes = cljs.core.first(arglist__8562);
var more_classes = cljs.core.rest(arglist__8562);
return G__8540__delegate(elem,classes,more_classes);
});
G__8540.cljs$core$IFn$_invoke$arity$variadic = G__8540__delegate;
return G__8540;
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
var G__8563 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__8563;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___8572 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8572))
{var class_list_8573 = temp__4090__auto___8572;class_list_8573.remove(class$__$1);
} else
{var class_name_8574 = elem__$1.className;var new_class_name_8575 = dommy.attrs.remove_class_str.call(null,class_name_8574,class$__$1);if((class_name_8574 === new_class_name_8575))
{} else
{elem__$1.className = new_class_name_8575;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__8576__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8568 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__8569 = null;var count__8570 = 0;var i__8571 = 0;while(true){
if((i__8571 < count__8570))
{var c = cljs.core._nth.call(null,chunk__8569,i__8571);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8577 = seq__8568;
var G__8578 = chunk__8569;
var G__8579 = count__8570;
var G__8580 = (i__8571 + 1);
seq__8568 = G__8577;
chunk__8569 = G__8578;
count__8570 = G__8579;
i__8571 = G__8580;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8568);if(temp__4092__auto__)
{var seq__8568__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8568__$1))
{var c__5398__auto__ = cljs.core.chunk_first.call(null,seq__8568__$1);{
var G__8581 = cljs.core.chunk_rest.call(null,seq__8568__$1);
var G__8582 = c__5398__auto__;
var G__8583 = cljs.core.count.call(null,c__5398__auto__);
var G__8584 = 0;
seq__8568 = G__8581;
chunk__8569 = G__8582;
count__8570 = G__8583;
i__8571 = G__8584;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8568__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8585 = cljs.core.next.call(null,seq__8568__$1);
var G__8586 = null;
var G__8587 = 0;
var G__8588 = 0;
seq__8568 = G__8585;
chunk__8569 = G__8586;
count__8570 = G__8587;
i__8571 = G__8588;
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
var G__8576 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8576__delegate.call(this,elem,class$,classes);};
G__8576.cljs$lang$maxFixedArity = 2;
G__8576.cljs$lang$applyTo = (function (arglist__8589){
var elem = cljs.core.first(arglist__8589);
arglist__8589 = cljs.core.next(arglist__8589);
var class$ = cljs.core.first(arglist__8589);
var classes = cljs.core.rest(arglist__8589);
return G__8576__delegate(elem,class$,classes);
});
G__8576.cljs$core$IFn$_invoke$arity$variadic = G__8576__delegate;
return G__8576;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___8590 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8590))
{var class_list_8591 = temp__4090__auto___8590;class_list_8591.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__8594){var vec__8595 = p__8594;var k = cljs.core.nth.call(null,vec__8595,0,null);var v = cljs.core.nth.call(null,vec__8595,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__8602_8608 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8603_8609 = null;var count__8604_8610 = 0;var i__8605_8611 = 0;while(true){
if((i__8605_8611 < count__8604_8610))
{var vec__8606_8612 = cljs.core._nth.call(null,chunk__8603_8609,i__8605_8611);var k_8613 = cljs.core.nth.call(null,vec__8606_8612,0,null);var v_8614 = cljs.core.nth.call(null,vec__8606_8612,1,null);(style[cljs.core.name.call(null,k_8613)] = v_8614);
{
var G__8615 = seq__8602_8608;
var G__8616 = chunk__8603_8609;
var G__8617 = count__8604_8610;
var G__8618 = (i__8605_8611 + 1);
seq__8602_8608 = G__8615;
chunk__8603_8609 = G__8616;
count__8604_8610 = G__8617;
i__8605_8611 = G__8618;
continue;
}
} else
{var temp__4092__auto___8619 = cljs.core.seq.call(null,seq__8602_8608);if(temp__4092__auto___8619)
{var seq__8602_8620__$1 = temp__4092__auto___8619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8602_8620__$1))
{var c__5398__auto___8621 = cljs.core.chunk_first.call(null,seq__8602_8620__$1);{
var G__8622 = cljs.core.chunk_rest.call(null,seq__8602_8620__$1);
var G__8623 = c__5398__auto___8621;
var G__8624 = cljs.core.count.call(null,c__5398__auto___8621);
var G__8625 = 0;
seq__8602_8608 = G__8622;
chunk__8603_8609 = G__8623;
count__8604_8610 = G__8624;
i__8605_8611 = G__8625;
continue;
}
} else
{var vec__8607_8626 = cljs.core.first.call(null,seq__8602_8620__$1);var k_8627 = cljs.core.nth.call(null,vec__8607_8626,0,null);var v_8628 = cljs.core.nth.call(null,vec__8607_8626,1,null);(style[cljs.core.name.call(null,k_8627)] = v_8628);
{
var G__8629 = cljs.core.next.call(null,seq__8602_8620__$1);
var G__8630 = null;
var G__8631 = 0;
var G__8632 = 0;
seq__8602_8608 = G__8629;
chunk__8603_8609 = G__8630;
count__8604_8610 = G__8631;
i__8605_8611 = G__8632;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8633){
var elem = cljs.core.first(arglist__8633);
var kvs = cljs.core.rest(arglist__8633);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8640_8646 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8641_8647 = null;var count__8642_8648 = 0;var i__8643_8649 = 0;while(true){
if((i__8643_8649 < count__8642_8648))
{var vec__8644_8650 = cljs.core._nth.call(null,chunk__8641_8647,i__8643_8649);var k_8651 = cljs.core.nth.call(null,vec__8644_8650,0,null);var v_8652 = cljs.core.nth.call(null,vec__8644_8650,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8651,[cljs.core.str(v_8652),cljs.core.str("px")].join(''));
{
var G__8653 = seq__8640_8646;
var G__8654 = chunk__8641_8647;
var G__8655 = count__8642_8648;
var G__8656 = (i__8643_8649 + 1);
seq__8640_8646 = G__8653;
chunk__8641_8647 = G__8654;
count__8642_8648 = G__8655;
i__8643_8649 = G__8656;
continue;
}
} else
{var temp__4092__auto___8657 = cljs.core.seq.call(null,seq__8640_8646);if(temp__4092__auto___8657)
{var seq__8640_8658__$1 = temp__4092__auto___8657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8640_8658__$1))
{var c__5398__auto___8659 = cljs.core.chunk_first.call(null,seq__8640_8658__$1);{
var G__8660 = cljs.core.chunk_rest.call(null,seq__8640_8658__$1);
var G__8661 = c__5398__auto___8659;
var G__8662 = cljs.core.count.call(null,c__5398__auto___8659);
var G__8663 = 0;
seq__8640_8646 = G__8660;
chunk__8641_8647 = G__8661;
count__8642_8648 = G__8662;
i__8643_8649 = G__8663;
continue;
}
} else
{var vec__8645_8664 = cljs.core.first.call(null,seq__8640_8658__$1);var k_8665 = cljs.core.nth.call(null,vec__8645_8664,0,null);var v_8666 = cljs.core.nth.call(null,vec__8645_8664,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8665,[cljs.core.str(v_8666),cljs.core.str("px")].join(''));
{
var G__8667 = cljs.core.next.call(null,seq__8640_8658__$1);
var G__8668 = null;
var G__8669 = 0;
var G__8670 = 0;
seq__8640_8646 = G__8667;
chunk__8641_8647 = G__8668;
count__8642_8648 = G__8669;
i__8643_8649 = G__8670;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8671){
var elem = cljs.core.first(arglist__8671);
var kvs = cljs.core.rest(arglist__8671);
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
{var G__8680 = dommy.template.__GT_node_like.call(null,elem);(G__8680[cljs.core.name.call(null,k)] = v);
return G__8680;
} else
{var G__8681 = dommy.template.__GT_node_like.call(null,elem);G__8681.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__8681;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8688__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8682_8689 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__8683_8690 = null;var count__8684_8691 = 0;var i__8685_8692 = 0;while(true){
if((i__8685_8692 < count__8684_8691))
{var vec__8686_8693 = cljs.core._nth.call(null,chunk__8683_8690,i__8685_8692);var k_8694__$1 = cljs.core.nth.call(null,vec__8686_8693,0,null);var v_8695__$1 = cljs.core.nth.call(null,vec__8686_8693,1,null);set_attr_BANG_.call(null,elem__$1,k_8694__$1,v_8695__$1);
{
var G__8696 = seq__8682_8689;
var G__8697 = chunk__8683_8690;
var G__8698 = count__8684_8691;
var G__8699 = (i__8685_8692 + 1);
seq__8682_8689 = G__8696;
chunk__8683_8690 = G__8697;
count__8684_8691 = G__8698;
i__8685_8692 = G__8699;
continue;
}
} else
{var temp__4092__auto___8700 = cljs.core.seq.call(null,seq__8682_8689);if(temp__4092__auto___8700)
{var seq__8682_8701__$1 = temp__4092__auto___8700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8682_8701__$1))
{var c__5398__auto___8702 = cljs.core.chunk_first.call(null,seq__8682_8701__$1);{
var G__8703 = cljs.core.chunk_rest.call(null,seq__8682_8701__$1);
var G__8704 = c__5398__auto___8702;
var G__8705 = cljs.core.count.call(null,c__5398__auto___8702);
var G__8706 = 0;
seq__8682_8689 = G__8703;
chunk__8683_8690 = G__8704;
count__8684_8691 = G__8705;
i__8685_8692 = G__8706;
continue;
}
} else
{var vec__8687_8707 = cljs.core.first.call(null,seq__8682_8701__$1);var k_8708__$1 = cljs.core.nth.call(null,vec__8687_8707,0,null);var v_8709__$1 = cljs.core.nth.call(null,vec__8687_8707,1,null);set_attr_BANG_.call(null,elem__$1,k_8708__$1,v_8709__$1);
{
var G__8710 = cljs.core.next.call(null,seq__8682_8701__$1);
var G__8711 = null;
var G__8712 = 0;
var G__8713 = 0;
seq__8682_8689 = G__8710;
chunk__8683_8690 = G__8711;
count__8684_8691 = G__8712;
i__8685_8692 = G__8713;
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
var G__8688 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8688__delegate.call(this,elem,k,v,kvs);};
G__8688.cljs$lang$maxFixedArity = 3;
G__8688.cljs$lang$applyTo = (function (arglist__8714){
var elem = cljs.core.first(arglist__8714);
arglist__8714 = cljs.core.next(arglist__8714);
var k = cljs.core.first(arglist__8714);
arglist__8714 = cljs.core.next(arglist__8714);
var v = cljs.core.first(arglist__8714);
var kvs = cljs.core.rest(arglist__8714);
return G__8688__delegate(elem,k,v,kvs);
});
G__8688.cljs$core$IFn$_invoke$arity$variadic = G__8688__delegate;
return G__8688;
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
var G__8723__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8719_8724 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8720_8725 = null;var count__8721_8726 = 0;var i__8722_8727 = 0;while(true){
if((i__8722_8727 < count__8721_8726))
{var k_8728__$1 = cljs.core._nth.call(null,chunk__8720_8725,i__8722_8727);remove_attr_BANG_.call(null,elem__$1,k_8728__$1);
{
var G__8729 = seq__8719_8724;
var G__8730 = chunk__8720_8725;
var G__8731 = count__8721_8726;
var G__8732 = (i__8722_8727 + 1);
seq__8719_8724 = G__8729;
chunk__8720_8725 = G__8730;
count__8721_8726 = G__8731;
i__8722_8727 = G__8732;
continue;
}
} else
{var temp__4092__auto___8733 = cljs.core.seq.call(null,seq__8719_8724);if(temp__4092__auto___8733)
{var seq__8719_8734__$1 = temp__4092__auto___8733;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8719_8734__$1))
{var c__5398__auto___8735 = cljs.core.chunk_first.call(null,seq__8719_8734__$1);{
var G__8736 = cljs.core.chunk_rest.call(null,seq__8719_8734__$1);
var G__8737 = c__5398__auto___8735;
var G__8738 = cljs.core.count.call(null,c__5398__auto___8735);
var G__8739 = 0;
seq__8719_8724 = G__8736;
chunk__8720_8725 = G__8737;
count__8721_8726 = G__8738;
i__8722_8727 = G__8739;
continue;
}
} else
{var k_8740__$1 = cljs.core.first.call(null,seq__8719_8734__$1);remove_attr_BANG_.call(null,elem__$1,k_8740__$1);
{
var G__8741 = cljs.core.next.call(null,seq__8719_8734__$1);
var G__8742 = null;
var G__8743 = 0;
var G__8744 = 0;
seq__8719_8724 = G__8741;
chunk__8720_8725 = G__8742;
count__8721_8726 = G__8743;
i__8722_8727 = G__8744;
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
var G__8723 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8723__delegate.call(this,elem,k,ks);};
G__8723.cljs$lang$maxFixedArity = 2;
G__8723.cljs$lang$applyTo = (function (arglist__8745){
var elem = cljs.core.first(arglist__8745);
arglist__8745 = cljs.core.next(arglist__8745);
var k = cljs.core.first(arglist__8745);
var ks = cljs.core.rest(arglist__8745);
return G__8723__delegate(elem,k,ks);
});
G__8723.cljs$core$IFn$_invoke$arity$variadic = G__8723__delegate;
return G__8723;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__8747 = dommy.template.__GT_node_like.call(null,elem);G__8747.style.display = ((show_QMARK_)?"":"none");
return G__8747;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__8749 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8749,false);
return G__8749;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__8751 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8751,true);
return G__8751;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__8753 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__8753["constructor"] = Object);
return G__8753;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
