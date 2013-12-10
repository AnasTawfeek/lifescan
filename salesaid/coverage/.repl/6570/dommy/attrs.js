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
var G__8504 = (i + class$.length);
start_from = G__8504;
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
{var temp__4090__auto___8529 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8529))
{var class_list_8530 = temp__4090__auto___8529;var seq__8517_8531 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8518_8532 = null;var count__8519_8533 = 0;var i__8520_8534 = 0;while(true){
if((i__8520_8534 < count__8519_8533))
{var class_8535 = cljs.core._nth.call(null,chunk__8518_8532,i__8520_8534);class_list_8530.add(class_8535);
{
var G__8536 = seq__8517_8531;
var G__8537 = chunk__8518_8532;
var G__8538 = count__8519_8533;
var G__8539 = (i__8520_8534 + 1);
seq__8517_8531 = G__8536;
chunk__8518_8532 = G__8537;
count__8519_8533 = G__8538;
i__8520_8534 = G__8539;
continue;
}
} else
{var temp__4092__auto___8540 = cljs.core.seq.call(null,seq__8517_8531);if(temp__4092__auto___8540)
{var seq__8517_8541__$1 = temp__4092__auto___8540;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8517_8541__$1))
{var c__5398__auto___8542 = cljs.core.chunk_first.call(null,seq__8517_8541__$1);{
var G__8543 = cljs.core.chunk_rest.call(null,seq__8517_8541__$1);
var G__8544 = c__5398__auto___8542;
var G__8545 = cljs.core.count.call(null,c__5398__auto___8542);
var G__8546 = 0;
seq__8517_8531 = G__8543;
chunk__8518_8532 = G__8544;
count__8519_8533 = G__8545;
i__8520_8534 = G__8546;
continue;
}
} else
{var class_8547 = cljs.core.first.call(null,seq__8517_8541__$1);class_list_8530.add(class_8547);
{
var G__8548 = cljs.core.next.call(null,seq__8517_8541__$1);
var G__8549 = null;
var G__8550 = 0;
var G__8551 = 0;
seq__8517_8531 = G__8548;
chunk__8518_8532 = G__8549;
count__8519_8533 = G__8550;
i__8520_8534 = G__8551;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_8552 = elem__$1.className;var seq__8521_8553 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8522_8554 = null;var count__8523_8555 = 0;var i__8524_8556 = 0;while(true){
if((i__8524_8556 < count__8523_8555))
{var class_8557 = cljs.core._nth.call(null,chunk__8522_8554,i__8524_8556);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8552,class_8557)))
{} else
{elem__$1.className = (((class_name_8552 === ""))?class_8557:[cljs.core.str(class_name_8552),cljs.core.str(" "),cljs.core.str(class_8557)].join(''));
}
{
var G__8558 = seq__8521_8553;
var G__8559 = chunk__8522_8554;
var G__8560 = count__8523_8555;
var G__8561 = (i__8524_8556 + 1);
seq__8521_8553 = G__8558;
chunk__8522_8554 = G__8559;
count__8523_8555 = G__8560;
i__8524_8556 = G__8561;
continue;
}
} else
{var temp__4092__auto___8562 = cljs.core.seq.call(null,seq__8521_8553);if(temp__4092__auto___8562)
{var seq__8521_8563__$1 = temp__4092__auto___8562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8521_8563__$1))
{var c__5398__auto___8564 = cljs.core.chunk_first.call(null,seq__8521_8563__$1);{
var G__8565 = cljs.core.chunk_rest.call(null,seq__8521_8563__$1);
var G__8566 = c__5398__auto___8564;
var G__8567 = cljs.core.count.call(null,c__5398__auto___8564);
var G__8568 = 0;
seq__8521_8553 = G__8565;
chunk__8522_8554 = G__8566;
count__8523_8555 = G__8567;
i__8524_8556 = G__8568;
continue;
}
} else
{var class_8569 = cljs.core.first.call(null,seq__8521_8563__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8552,class_8569)))
{} else
{elem__$1.className = (((class_name_8552 === ""))?class_8569:[cljs.core.str(class_name_8552),cljs.core.str(" "),cljs.core.str(class_8569)].join(''));
}
{
var G__8570 = cljs.core.next.call(null,seq__8521_8563__$1);
var G__8571 = null;
var G__8572 = 0;
var G__8573 = 0;
seq__8521_8553 = G__8570;
chunk__8522_8554 = G__8571;
count__8523_8555 = G__8572;
i__8524_8556 = G__8573;
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
var G__8574__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8525_8575 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__8526_8576 = null;var count__8527_8577 = 0;var i__8528_8578 = 0;while(true){
if((i__8528_8578 < count__8527_8577))
{var c_8579 = cljs.core._nth.call(null,chunk__8526_8576,i__8528_8578);add_class_BANG_.call(null,elem__$1,c_8579);
{
var G__8580 = seq__8525_8575;
var G__8581 = chunk__8526_8576;
var G__8582 = count__8527_8577;
var G__8583 = (i__8528_8578 + 1);
seq__8525_8575 = G__8580;
chunk__8526_8576 = G__8581;
count__8527_8577 = G__8582;
i__8528_8578 = G__8583;
continue;
}
} else
{var temp__4092__auto___8584 = cljs.core.seq.call(null,seq__8525_8575);if(temp__4092__auto___8584)
{var seq__8525_8585__$1 = temp__4092__auto___8584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8525_8585__$1))
{var c__5398__auto___8586 = cljs.core.chunk_first.call(null,seq__8525_8585__$1);{
var G__8587 = cljs.core.chunk_rest.call(null,seq__8525_8585__$1);
var G__8588 = c__5398__auto___8586;
var G__8589 = cljs.core.count.call(null,c__5398__auto___8586);
var G__8590 = 0;
seq__8525_8575 = G__8587;
chunk__8526_8576 = G__8588;
count__8527_8577 = G__8589;
i__8528_8578 = G__8590;
continue;
}
} else
{var c_8591 = cljs.core.first.call(null,seq__8525_8585__$1);add_class_BANG_.call(null,elem__$1,c_8591);
{
var G__8592 = cljs.core.next.call(null,seq__8525_8585__$1);
var G__8593 = null;
var G__8594 = 0;
var G__8595 = 0;
seq__8525_8575 = G__8592;
chunk__8526_8576 = G__8593;
count__8527_8577 = G__8594;
i__8528_8578 = G__8595;
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
var G__8574 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8574__delegate.call(this,elem,classes,more_classes);};
G__8574.cljs$lang$maxFixedArity = 2;
G__8574.cljs$lang$applyTo = (function (arglist__8596){
var elem = cljs.core.first(arglist__8596);
arglist__8596 = cljs.core.next(arglist__8596);
var classes = cljs.core.first(arglist__8596);
var more_classes = cljs.core.rest(arglist__8596);
return G__8574__delegate(elem,classes,more_classes);
});
G__8574.cljs$core$IFn$_invoke$arity$variadic = G__8574__delegate;
return G__8574;
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
var G__8597 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__8597;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___8606 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8606))
{var class_list_8607 = temp__4090__auto___8606;class_list_8607.remove(class$__$1);
} else
{var class_name_8608 = elem__$1.className;var new_class_name_8609 = dommy.attrs.remove_class_str.call(null,class_name_8608,class$__$1);if((class_name_8608 === new_class_name_8609))
{} else
{elem__$1.className = new_class_name_8609;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__8610__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8602 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__8603 = null;var count__8604 = 0;var i__8605 = 0;while(true){
if((i__8605 < count__8604))
{var c = cljs.core._nth.call(null,chunk__8603,i__8605);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8611 = seq__8602;
var G__8612 = chunk__8603;
var G__8613 = count__8604;
var G__8614 = (i__8605 + 1);
seq__8602 = G__8611;
chunk__8603 = G__8612;
count__8604 = G__8613;
i__8605 = G__8614;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8602);if(temp__4092__auto__)
{var seq__8602__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8602__$1))
{var c__5398__auto__ = cljs.core.chunk_first.call(null,seq__8602__$1);{
var G__8615 = cljs.core.chunk_rest.call(null,seq__8602__$1);
var G__8616 = c__5398__auto__;
var G__8617 = cljs.core.count.call(null,c__5398__auto__);
var G__8618 = 0;
seq__8602 = G__8615;
chunk__8603 = G__8616;
count__8604 = G__8617;
i__8605 = G__8618;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8602__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8619 = cljs.core.next.call(null,seq__8602__$1);
var G__8620 = null;
var G__8621 = 0;
var G__8622 = 0;
seq__8602 = G__8619;
chunk__8603 = G__8620;
count__8604 = G__8621;
i__8605 = G__8622;
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
var G__8610 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8610__delegate.call(this,elem,class$,classes);};
G__8610.cljs$lang$maxFixedArity = 2;
G__8610.cljs$lang$applyTo = (function (arglist__8623){
var elem = cljs.core.first(arglist__8623);
arglist__8623 = cljs.core.next(arglist__8623);
var class$ = cljs.core.first(arglist__8623);
var classes = cljs.core.rest(arglist__8623);
return G__8610__delegate(elem,class$,classes);
});
G__8610.cljs$core$IFn$_invoke$arity$variadic = G__8610__delegate;
return G__8610;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___8624 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8624))
{var class_list_8625 = temp__4090__auto___8624;class_list_8625.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__8628){var vec__8629 = p__8628;var k = cljs.core.nth.call(null,vec__8629,0,null);var v = cljs.core.nth.call(null,vec__8629,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__8636_8642 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8637_8643 = null;var count__8638_8644 = 0;var i__8639_8645 = 0;while(true){
if((i__8639_8645 < count__8638_8644))
{var vec__8640_8646 = cljs.core._nth.call(null,chunk__8637_8643,i__8639_8645);var k_8647 = cljs.core.nth.call(null,vec__8640_8646,0,null);var v_8648 = cljs.core.nth.call(null,vec__8640_8646,1,null);(style[cljs.core.name.call(null,k_8647)] = v_8648);
{
var G__8649 = seq__8636_8642;
var G__8650 = chunk__8637_8643;
var G__8651 = count__8638_8644;
var G__8652 = (i__8639_8645 + 1);
seq__8636_8642 = G__8649;
chunk__8637_8643 = G__8650;
count__8638_8644 = G__8651;
i__8639_8645 = G__8652;
continue;
}
} else
{var temp__4092__auto___8653 = cljs.core.seq.call(null,seq__8636_8642);if(temp__4092__auto___8653)
{var seq__8636_8654__$1 = temp__4092__auto___8653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8636_8654__$1))
{var c__5398__auto___8655 = cljs.core.chunk_first.call(null,seq__8636_8654__$1);{
var G__8656 = cljs.core.chunk_rest.call(null,seq__8636_8654__$1);
var G__8657 = c__5398__auto___8655;
var G__8658 = cljs.core.count.call(null,c__5398__auto___8655);
var G__8659 = 0;
seq__8636_8642 = G__8656;
chunk__8637_8643 = G__8657;
count__8638_8644 = G__8658;
i__8639_8645 = G__8659;
continue;
}
} else
{var vec__8641_8660 = cljs.core.first.call(null,seq__8636_8654__$1);var k_8661 = cljs.core.nth.call(null,vec__8641_8660,0,null);var v_8662 = cljs.core.nth.call(null,vec__8641_8660,1,null);(style[cljs.core.name.call(null,k_8661)] = v_8662);
{
var G__8663 = cljs.core.next.call(null,seq__8636_8654__$1);
var G__8664 = null;
var G__8665 = 0;
var G__8666 = 0;
seq__8636_8642 = G__8663;
chunk__8637_8643 = G__8664;
count__8638_8644 = G__8665;
i__8639_8645 = G__8666;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8667){
var elem = cljs.core.first(arglist__8667);
var kvs = cljs.core.rest(arglist__8667);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8674_8680 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8675_8681 = null;var count__8676_8682 = 0;var i__8677_8683 = 0;while(true){
if((i__8677_8683 < count__8676_8682))
{var vec__8678_8684 = cljs.core._nth.call(null,chunk__8675_8681,i__8677_8683);var k_8685 = cljs.core.nth.call(null,vec__8678_8684,0,null);var v_8686 = cljs.core.nth.call(null,vec__8678_8684,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8685,[cljs.core.str(v_8686),cljs.core.str("px")].join(''));
{
var G__8687 = seq__8674_8680;
var G__8688 = chunk__8675_8681;
var G__8689 = count__8676_8682;
var G__8690 = (i__8677_8683 + 1);
seq__8674_8680 = G__8687;
chunk__8675_8681 = G__8688;
count__8676_8682 = G__8689;
i__8677_8683 = G__8690;
continue;
}
} else
{var temp__4092__auto___8691 = cljs.core.seq.call(null,seq__8674_8680);if(temp__4092__auto___8691)
{var seq__8674_8692__$1 = temp__4092__auto___8691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8674_8692__$1))
{var c__5398__auto___8693 = cljs.core.chunk_first.call(null,seq__8674_8692__$1);{
var G__8694 = cljs.core.chunk_rest.call(null,seq__8674_8692__$1);
var G__8695 = c__5398__auto___8693;
var G__8696 = cljs.core.count.call(null,c__5398__auto___8693);
var G__8697 = 0;
seq__8674_8680 = G__8694;
chunk__8675_8681 = G__8695;
count__8676_8682 = G__8696;
i__8677_8683 = G__8697;
continue;
}
} else
{var vec__8679_8698 = cljs.core.first.call(null,seq__8674_8692__$1);var k_8699 = cljs.core.nth.call(null,vec__8679_8698,0,null);var v_8700 = cljs.core.nth.call(null,vec__8679_8698,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8699,[cljs.core.str(v_8700),cljs.core.str("px")].join(''));
{
var G__8701 = cljs.core.next.call(null,seq__8674_8692__$1);
var G__8702 = null;
var G__8703 = 0;
var G__8704 = 0;
seq__8674_8680 = G__8701;
chunk__8675_8681 = G__8702;
count__8676_8682 = G__8703;
i__8677_8683 = G__8704;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8705){
var elem = cljs.core.first(arglist__8705);
var kvs = cljs.core.rest(arglist__8705);
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
{var G__8714 = dommy.template.__GT_node_like.call(null,elem);(G__8714[cljs.core.name.call(null,k)] = v);
return G__8714;
} else
{var G__8715 = dommy.template.__GT_node_like.call(null,elem);G__8715.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__8715;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8722__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8716_8723 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__8717_8724 = null;var count__8718_8725 = 0;var i__8719_8726 = 0;while(true){
if((i__8719_8726 < count__8718_8725))
{var vec__8720_8727 = cljs.core._nth.call(null,chunk__8717_8724,i__8719_8726);var k_8728__$1 = cljs.core.nth.call(null,vec__8720_8727,0,null);var v_8729__$1 = cljs.core.nth.call(null,vec__8720_8727,1,null);set_attr_BANG_.call(null,elem__$1,k_8728__$1,v_8729__$1);
{
var G__8730 = seq__8716_8723;
var G__8731 = chunk__8717_8724;
var G__8732 = count__8718_8725;
var G__8733 = (i__8719_8726 + 1);
seq__8716_8723 = G__8730;
chunk__8717_8724 = G__8731;
count__8718_8725 = G__8732;
i__8719_8726 = G__8733;
continue;
}
} else
{var temp__4092__auto___8734 = cljs.core.seq.call(null,seq__8716_8723);if(temp__4092__auto___8734)
{var seq__8716_8735__$1 = temp__4092__auto___8734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8716_8735__$1))
{var c__5398__auto___8736 = cljs.core.chunk_first.call(null,seq__8716_8735__$1);{
var G__8737 = cljs.core.chunk_rest.call(null,seq__8716_8735__$1);
var G__8738 = c__5398__auto___8736;
var G__8739 = cljs.core.count.call(null,c__5398__auto___8736);
var G__8740 = 0;
seq__8716_8723 = G__8737;
chunk__8717_8724 = G__8738;
count__8718_8725 = G__8739;
i__8719_8726 = G__8740;
continue;
}
} else
{var vec__8721_8741 = cljs.core.first.call(null,seq__8716_8735__$1);var k_8742__$1 = cljs.core.nth.call(null,vec__8721_8741,0,null);var v_8743__$1 = cljs.core.nth.call(null,vec__8721_8741,1,null);set_attr_BANG_.call(null,elem__$1,k_8742__$1,v_8743__$1);
{
var G__8744 = cljs.core.next.call(null,seq__8716_8735__$1);
var G__8745 = null;
var G__8746 = 0;
var G__8747 = 0;
seq__8716_8723 = G__8744;
chunk__8717_8724 = G__8745;
count__8718_8725 = G__8746;
i__8719_8726 = G__8747;
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
var G__8722 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8722__delegate.call(this,elem,k,v,kvs);};
G__8722.cljs$lang$maxFixedArity = 3;
G__8722.cljs$lang$applyTo = (function (arglist__8748){
var elem = cljs.core.first(arglist__8748);
arglist__8748 = cljs.core.next(arglist__8748);
var k = cljs.core.first(arglist__8748);
arglist__8748 = cljs.core.next(arglist__8748);
var v = cljs.core.first(arglist__8748);
var kvs = cljs.core.rest(arglist__8748);
return G__8722__delegate(elem,k,v,kvs);
});
G__8722.cljs$core$IFn$_invoke$arity$variadic = G__8722__delegate;
return G__8722;
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
var G__8757__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8753_8758 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8754_8759 = null;var count__8755_8760 = 0;var i__8756_8761 = 0;while(true){
if((i__8756_8761 < count__8755_8760))
{var k_8762__$1 = cljs.core._nth.call(null,chunk__8754_8759,i__8756_8761);remove_attr_BANG_.call(null,elem__$1,k_8762__$1);
{
var G__8763 = seq__8753_8758;
var G__8764 = chunk__8754_8759;
var G__8765 = count__8755_8760;
var G__8766 = (i__8756_8761 + 1);
seq__8753_8758 = G__8763;
chunk__8754_8759 = G__8764;
count__8755_8760 = G__8765;
i__8756_8761 = G__8766;
continue;
}
} else
{var temp__4092__auto___8767 = cljs.core.seq.call(null,seq__8753_8758);if(temp__4092__auto___8767)
{var seq__8753_8768__$1 = temp__4092__auto___8767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8753_8768__$1))
{var c__5398__auto___8769 = cljs.core.chunk_first.call(null,seq__8753_8768__$1);{
var G__8770 = cljs.core.chunk_rest.call(null,seq__8753_8768__$1);
var G__8771 = c__5398__auto___8769;
var G__8772 = cljs.core.count.call(null,c__5398__auto___8769);
var G__8773 = 0;
seq__8753_8758 = G__8770;
chunk__8754_8759 = G__8771;
count__8755_8760 = G__8772;
i__8756_8761 = G__8773;
continue;
}
} else
{var k_8774__$1 = cljs.core.first.call(null,seq__8753_8768__$1);remove_attr_BANG_.call(null,elem__$1,k_8774__$1);
{
var G__8775 = cljs.core.next.call(null,seq__8753_8768__$1);
var G__8776 = null;
var G__8777 = 0;
var G__8778 = 0;
seq__8753_8758 = G__8775;
chunk__8754_8759 = G__8776;
count__8755_8760 = G__8777;
i__8756_8761 = G__8778;
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
var G__8757 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8757__delegate.call(this,elem,k,ks);};
G__8757.cljs$lang$maxFixedArity = 2;
G__8757.cljs$lang$applyTo = (function (arglist__8779){
var elem = cljs.core.first(arglist__8779);
arglist__8779 = cljs.core.next(arglist__8779);
var k = cljs.core.first(arglist__8779);
var ks = cljs.core.rest(arglist__8779);
return G__8757__delegate(elem,k,ks);
});
G__8757.cljs$core$IFn$_invoke$arity$variadic = G__8757__delegate;
return G__8757;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__8781 = dommy.template.__GT_node_like.call(null,elem);G__8781.style.display = ((show_QMARK_)?"":"none");
return G__8781;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__8783 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8783,false);
return G__8783;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__8785 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8785,true);
return G__8785;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__8787 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__8787["constructor"] = Object);
return G__8787;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
