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
var G__8500 = (i + class$.length);
start_from = G__8500;
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
{var temp__4090__auto___8525 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8525))
{var class_list_8526 = temp__4090__auto___8525;var seq__8513_8527 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8514_8528 = null;var count__8515_8529 = 0;var i__8516_8530 = 0;while(true){
if((i__8516_8530 < count__8515_8529))
{var class_8531 = cljs.core._nth.call(null,chunk__8514_8528,i__8516_8530);class_list_8526.add(class_8531);
{
var G__8532 = seq__8513_8527;
var G__8533 = chunk__8514_8528;
var G__8534 = count__8515_8529;
var G__8535 = (i__8516_8530 + 1);
seq__8513_8527 = G__8532;
chunk__8514_8528 = G__8533;
count__8515_8529 = G__8534;
i__8516_8530 = G__8535;
continue;
}
} else
{var temp__4092__auto___8536 = cljs.core.seq.call(null,seq__8513_8527);if(temp__4092__auto___8536)
{var seq__8513_8537__$1 = temp__4092__auto___8536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8513_8537__$1))
{var c__5398__auto___8538 = cljs.core.chunk_first.call(null,seq__8513_8537__$1);{
var G__8539 = cljs.core.chunk_rest.call(null,seq__8513_8537__$1);
var G__8540 = c__5398__auto___8538;
var G__8541 = cljs.core.count.call(null,c__5398__auto___8538);
var G__8542 = 0;
seq__8513_8527 = G__8539;
chunk__8514_8528 = G__8540;
count__8515_8529 = G__8541;
i__8516_8530 = G__8542;
continue;
}
} else
{var class_8543 = cljs.core.first.call(null,seq__8513_8537__$1);class_list_8526.add(class_8543);
{
var G__8544 = cljs.core.next.call(null,seq__8513_8537__$1);
var G__8545 = null;
var G__8546 = 0;
var G__8547 = 0;
seq__8513_8527 = G__8544;
chunk__8514_8528 = G__8545;
count__8515_8529 = G__8546;
i__8516_8530 = G__8547;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_8548 = elem__$1.className;var seq__8517_8549 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8518_8550 = null;var count__8519_8551 = 0;var i__8520_8552 = 0;while(true){
if((i__8520_8552 < count__8519_8551))
{var class_8553 = cljs.core._nth.call(null,chunk__8518_8550,i__8520_8552);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8548,class_8553)))
{} else
{elem__$1.className = (((class_name_8548 === ""))?class_8553:[cljs.core.str(class_name_8548),cljs.core.str(" "),cljs.core.str(class_8553)].join(''));
}
{
var G__8554 = seq__8517_8549;
var G__8555 = chunk__8518_8550;
var G__8556 = count__8519_8551;
var G__8557 = (i__8520_8552 + 1);
seq__8517_8549 = G__8554;
chunk__8518_8550 = G__8555;
count__8519_8551 = G__8556;
i__8520_8552 = G__8557;
continue;
}
} else
{var temp__4092__auto___8558 = cljs.core.seq.call(null,seq__8517_8549);if(temp__4092__auto___8558)
{var seq__8517_8559__$1 = temp__4092__auto___8558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8517_8559__$1))
{var c__5398__auto___8560 = cljs.core.chunk_first.call(null,seq__8517_8559__$1);{
var G__8561 = cljs.core.chunk_rest.call(null,seq__8517_8559__$1);
var G__8562 = c__5398__auto___8560;
var G__8563 = cljs.core.count.call(null,c__5398__auto___8560);
var G__8564 = 0;
seq__8517_8549 = G__8561;
chunk__8518_8550 = G__8562;
count__8519_8551 = G__8563;
i__8520_8552 = G__8564;
continue;
}
} else
{var class_8565 = cljs.core.first.call(null,seq__8517_8559__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8548,class_8565)))
{} else
{elem__$1.className = (((class_name_8548 === ""))?class_8565:[cljs.core.str(class_name_8548),cljs.core.str(" "),cljs.core.str(class_8565)].join(''));
}
{
var G__8566 = cljs.core.next.call(null,seq__8517_8559__$1);
var G__8567 = null;
var G__8568 = 0;
var G__8569 = 0;
seq__8517_8549 = G__8566;
chunk__8518_8550 = G__8567;
count__8519_8551 = G__8568;
i__8520_8552 = G__8569;
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
var G__8570__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8521_8571 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__8522_8572 = null;var count__8523_8573 = 0;var i__8524_8574 = 0;while(true){
if((i__8524_8574 < count__8523_8573))
{var c_8575 = cljs.core._nth.call(null,chunk__8522_8572,i__8524_8574);add_class_BANG_.call(null,elem__$1,c_8575);
{
var G__8576 = seq__8521_8571;
var G__8577 = chunk__8522_8572;
var G__8578 = count__8523_8573;
var G__8579 = (i__8524_8574 + 1);
seq__8521_8571 = G__8576;
chunk__8522_8572 = G__8577;
count__8523_8573 = G__8578;
i__8524_8574 = G__8579;
continue;
}
} else
{var temp__4092__auto___8580 = cljs.core.seq.call(null,seq__8521_8571);if(temp__4092__auto___8580)
{var seq__8521_8581__$1 = temp__4092__auto___8580;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8521_8581__$1))
{var c__5398__auto___8582 = cljs.core.chunk_first.call(null,seq__8521_8581__$1);{
var G__8583 = cljs.core.chunk_rest.call(null,seq__8521_8581__$1);
var G__8584 = c__5398__auto___8582;
var G__8585 = cljs.core.count.call(null,c__5398__auto___8582);
var G__8586 = 0;
seq__8521_8571 = G__8583;
chunk__8522_8572 = G__8584;
count__8523_8573 = G__8585;
i__8524_8574 = G__8586;
continue;
}
} else
{var c_8587 = cljs.core.first.call(null,seq__8521_8581__$1);add_class_BANG_.call(null,elem__$1,c_8587);
{
var G__8588 = cljs.core.next.call(null,seq__8521_8581__$1);
var G__8589 = null;
var G__8590 = 0;
var G__8591 = 0;
seq__8521_8571 = G__8588;
chunk__8522_8572 = G__8589;
count__8523_8573 = G__8590;
i__8524_8574 = G__8591;
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
var G__8570 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8570__delegate.call(this,elem,classes,more_classes);};
G__8570.cljs$lang$maxFixedArity = 2;
G__8570.cljs$lang$applyTo = (function (arglist__8592){
var elem = cljs.core.first(arglist__8592);
arglist__8592 = cljs.core.next(arglist__8592);
var classes = cljs.core.first(arglist__8592);
var more_classes = cljs.core.rest(arglist__8592);
return G__8570__delegate(elem,classes,more_classes);
});
G__8570.cljs$core$IFn$_invoke$arity$variadic = G__8570__delegate;
return G__8570;
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
var G__8593 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__8593;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___8602 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8602))
{var class_list_8603 = temp__4090__auto___8602;class_list_8603.remove(class$__$1);
} else
{var class_name_8604 = elem__$1.className;var new_class_name_8605 = dommy.attrs.remove_class_str.call(null,class_name_8604,class$__$1);if((class_name_8604 === new_class_name_8605))
{} else
{elem__$1.className = new_class_name_8605;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__8606__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8598 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__8599 = null;var count__8600 = 0;var i__8601 = 0;while(true){
if((i__8601 < count__8600))
{var c = cljs.core._nth.call(null,chunk__8599,i__8601);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8607 = seq__8598;
var G__8608 = chunk__8599;
var G__8609 = count__8600;
var G__8610 = (i__8601 + 1);
seq__8598 = G__8607;
chunk__8599 = G__8608;
count__8600 = G__8609;
i__8601 = G__8610;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8598);if(temp__4092__auto__)
{var seq__8598__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8598__$1))
{var c__5398__auto__ = cljs.core.chunk_first.call(null,seq__8598__$1);{
var G__8611 = cljs.core.chunk_rest.call(null,seq__8598__$1);
var G__8612 = c__5398__auto__;
var G__8613 = cljs.core.count.call(null,c__5398__auto__);
var G__8614 = 0;
seq__8598 = G__8611;
chunk__8599 = G__8612;
count__8600 = G__8613;
i__8601 = G__8614;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8598__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8615 = cljs.core.next.call(null,seq__8598__$1);
var G__8616 = null;
var G__8617 = 0;
var G__8618 = 0;
seq__8598 = G__8615;
chunk__8599 = G__8616;
count__8600 = G__8617;
i__8601 = G__8618;
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
var G__8606 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8606__delegate.call(this,elem,class$,classes);};
G__8606.cljs$lang$maxFixedArity = 2;
G__8606.cljs$lang$applyTo = (function (arglist__8619){
var elem = cljs.core.first(arglist__8619);
arglist__8619 = cljs.core.next(arglist__8619);
var class$ = cljs.core.first(arglist__8619);
var classes = cljs.core.rest(arglist__8619);
return G__8606__delegate(elem,class$,classes);
});
G__8606.cljs$core$IFn$_invoke$arity$variadic = G__8606__delegate;
return G__8606;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___8620 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8620))
{var class_list_8621 = temp__4090__auto___8620;class_list_8621.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__8624){var vec__8625 = p__8624;var k = cljs.core.nth.call(null,vec__8625,0,null);var v = cljs.core.nth.call(null,vec__8625,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__8632_8638 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8633_8639 = null;var count__8634_8640 = 0;var i__8635_8641 = 0;while(true){
if((i__8635_8641 < count__8634_8640))
{var vec__8636_8642 = cljs.core._nth.call(null,chunk__8633_8639,i__8635_8641);var k_8643 = cljs.core.nth.call(null,vec__8636_8642,0,null);var v_8644 = cljs.core.nth.call(null,vec__8636_8642,1,null);(style[cljs.core.name.call(null,k_8643)] = v_8644);
{
var G__8645 = seq__8632_8638;
var G__8646 = chunk__8633_8639;
var G__8647 = count__8634_8640;
var G__8648 = (i__8635_8641 + 1);
seq__8632_8638 = G__8645;
chunk__8633_8639 = G__8646;
count__8634_8640 = G__8647;
i__8635_8641 = G__8648;
continue;
}
} else
{var temp__4092__auto___8649 = cljs.core.seq.call(null,seq__8632_8638);if(temp__4092__auto___8649)
{var seq__8632_8650__$1 = temp__4092__auto___8649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8632_8650__$1))
{var c__5398__auto___8651 = cljs.core.chunk_first.call(null,seq__8632_8650__$1);{
var G__8652 = cljs.core.chunk_rest.call(null,seq__8632_8650__$1);
var G__8653 = c__5398__auto___8651;
var G__8654 = cljs.core.count.call(null,c__5398__auto___8651);
var G__8655 = 0;
seq__8632_8638 = G__8652;
chunk__8633_8639 = G__8653;
count__8634_8640 = G__8654;
i__8635_8641 = G__8655;
continue;
}
} else
{var vec__8637_8656 = cljs.core.first.call(null,seq__8632_8650__$1);var k_8657 = cljs.core.nth.call(null,vec__8637_8656,0,null);var v_8658 = cljs.core.nth.call(null,vec__8637_8656,1,null);(style[cljs.core.name.call(null,k_8657)] = v_8658);
{
var G__8659 = cljs.core.next.call(null,seq__8632_8650__$1);
var G__8660 = null;
var G__8661 = 0;
var G__8662 = 0;
seq__8632_8638 = G__8659;
chunk__8633_8639 = G__8660;
count__8634_8640 = G__8661;
i__8635_8641 = G__8662;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8663){
var elem = cljs.core.first(arglist__8663);
var kvs = cljs.core.rest(arglist__8663);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8670_8676 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8671_8677 = null;var count__8672_8678 = 0;var i__8673_8679 = 0;while(true){
if((i__8673_8679 < count__8672_8678))
{var vec__8674_8680 = cljs.core._nth.call(null,chunk__8671_8677,i__8673_8679);var k_8681 = cljs.core.nth.call(null,vec__8674_8680,0,null);var v_8682 = cljs.core.nth.call(null,vec__8674_8680,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8681,[cljs.core.str(v_8682),cljs.core.str("px")].join(''));
{
var G__8683 = seq__8670_8676;
var G__8684 = chunk__8671_8677;
var G__8685 = count__8672_8678;
var G__8686 = (i__8673_8679 + 1);
seq__8670_8676 = G__8683;
chunk__8671_8677 = G__8684;
count__8672_8678 = G__8685;
i__8673_8679 = G__8686;
continue;
}
} else
{var temp__4092__auto___8687 = cljs.core.seq.call(null,seq__8670_8676);if(temp__4092__auto___8687)
{var seq__8670_8688__$1 = temp__4092__auto___8687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8670_8688__$1))
{var c__5398__auto___8689 = cljs.core.chunk_first.call(null,seq__8670_8688__$1);{
var G__8690 = cljs.core.chunk_rest.call(null,seq__8670_8688__$1);
var G__8691 = c__5398__auto___8689;
var G__8692 = cljs.core.count.call(null,c__5398__auto___8689);
var G__8693 = 0;
seq__8670_8676 = G__8690;
chunk__8671_8677 = G__8691;
count__8672_8678 = G__8692;
i__8673_8679 = G__8693;
continue;
}
} else
{var vec__8675_8694 = cljs.core.first.call(null,seq__8670_8688__$1);var k_8695 = cljs.core.nth.call(null,vec__8675_8694,0,null);var v_8696 = cljs.core.nth.call(null,vec__8675_8694,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8695,[cljs.core.str(v_8696),cljs.core.str("px")].join(''));
{
var G__8697 = cljs.core.next.call(null,seq__8670_8688__$1);
var G__8698 = null;
var G__8699 = 0;
var G__8700 = 0;
seq__8670_8676 = G__8697;
chunk__8671_8677 = G__8698;
count__8672_8678 = G__8699;
i__8673_8679 = G__8700;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8701){
var elem = cljs.core.first(arglist__8701);
var kvs = cljs.core.rest(arglist__8701);
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
{var G__8710 = dommy.template.__GT_node_like.call(null,elem);(G__8710[cljs.core.name.call(null,k)] = v);
return G__8710;
} else
{var G__8711 = dommy.template.__GT_node_like.call(null,elem);G__8711.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__8711;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8718__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8712_8719 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__8713_8720 = null;var count__8714_8721 = 0;var i__8715_8722 = 0;while(true){
if((i__8715_8722 < count__8714_8721))
{var vec__8716_8723 = cljs.core._nth.call(null,chunk__8713_8720,i__8715_8722);var k_8724__$1 = cljs.core.nth.call(null,vec__8716_8723,0,null);var v_8725__$1 = cljs.core.nth.call(null,vec__8716_8723,1,null);set_attr_BANG_.call(null,elem__$1,k_8724__$1,v_8725__$1);
{
var G__8726 = seq__8712_8719;
var G__8727 = chunk__8713_8720;
var G__8728 = count__8714_8721;
var G__8729 = (i__8715_8722 + 1);
seq__8712_8719 = G__8726;
chunk__8713_8720 = G__8727;
count__8714_8721 = G__8728;
i__8715_8722 = G__8729;
continue;
}
} else
{var temp__4092__auto___8730 = cljs.core.seq.call(null,seq__8712_8719);if(temp__4092__auto___8730)
{var seq__8712_8731__$1 = temp__4092__auto___8730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8712_8731__$1))
{var c__5398__auto___8732 = cljs.core.chunk_first.call(null,seq__8712_8731__$1);{
var G__8733 = cljs.core.chunk_rest.call(null,seq__8712_8731__$1);
var G__8734 = c__5398__auto___8732;
var G__8735 = cljs.core.count.call(null,c__5398__auto___8732);
var G__8736 = 0;
seq__8712_8719 = G__8733;
chunk__8713_8720 = G__8734;
count__8714_8721 = G__8735;
i__8715_8722 = G__8736;
continue;
}
} else
{var vec__8717_8737 = cljs.core.first.call(null,seq__8712_8731__$1);var k_8738__$1 = cljs.core.nth.call(null,vec__8717_8737,0,null);var v_8739__$1 = cljs.core.nth.call(null,vec__8717_8737,1,null);set_attr_BANG_.call(null,elem__$1,k_8738__$1,v_8739__$1);
{
var G__8740 = cljs.core.next.call(null,seq__8712_8731__$1);
var G__8741 = null;
var G__8742 = 0;
var G__8743 = 0;
seq__8712_8719 = G__8740;
chunk__8713_8720 = G__8741;
count__8714_8721 = G__8742;
i__8715_8722 = G__8743;
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
var G__8718 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8718__delegate.call(this,elem,k,v,kvs);};
G__8718.cljs$lang$maxFixedArity = 3;
G__8718.cljs$lang$applyTo = (function (arglist__8744){
var elem = cljs.core.first(arglist__8744);
arglist__8744 = cljs.core.next(arglist__8744);
var k = cljs.core.first(arglist__8744);
arglist__8744 = cljs.core.next(arglist__8744);
var v = cljs.core.first(arglist__8744);
var kvs = cljs.core.rest(arglist__8744);
return G__8718__delegate(elem,k,v,kvs);
});
G__8718.cljs$core$IFn$_invoke$arity$variadic = G__8718__delegate;
return G__8718;
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
var G__8753__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8749_8754 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8750_8755 = null;var count__8751_8756 = 0;var i__8752_8757 = 0;while(true){
if((i__8752_8757 < count__8751_8756))
{var k_8758__$1 = cljs.core._nth.call(null,chunk__8750_8755,i__8752_8757);remove_attr_BANG_.call(null,elem__$1,k_8758__$1);
{
var G__8759 = seq__8749_8754;
var G__8760 = chunk__8750_8755;
var G__8761 = count__8751_8756;
var G__8762 = (i__8752_8757 + 1);
seq__8749_8754 = G__8759;
chunk__8750_8755 = G__8760;
count__8751_8756 = G__8761;
i__8752_8757 = G__8762;
continue;
}
} else
{var temp__4092__auto___8763 = cljs.core.seq.call(null,seq__8749_8754);if(temp__4092__auto___8763)
{var seq__8749_8764__$1 = temp__4092__auto___8763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8749_8764__$1))
{var c__5398__auto___8765 = cljs.core.chunk_first.call(null,seq__8749_8764__$1);{
var G__8766 = cljs.core.chunk_rest.call(null,seq__8749_8764__$1);
var G__8767 = c__5398__auto___8765;
var G__8768 = cljs.core.count.call(null,c__5398__auto___8765);
var G__8769 = 0;
seq__8749_8754 = G__8766;
chunk__8750_8755 = G__8767;
count__8751_8756 = G__8768;
i__8752_8757 = G__8769;
continue;
}
} else
{var k_8770__$1 = cljs.core.first.call(null,seq__8749_8764__$1);remove_attr_BANG_.call(null,elem__$1,k_8770__$1);
{
var G__8771 = cljs.core.next.call(null,seq__8749_8764__$1);
var G__8772 = null;
var G__8773 = 0;
var G__8774 = 0;
seq__8749_8754 = G__8771;
chunk__8750_8755 = G__8772;
count__8751_8756 = G__8773;
i__8752_8757 = G__8774;
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
var G__8753 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8753__delegate.call(this,elem,k,ks);};
G__8753.cljs$lang$maxFixedArity = 2;
G__8753.cljs$lang$applyTo = (function (arglist__8775){
var elem = cljs.core.first(arglist__8775);
arglist__8775 = cljs.core.next(arglist__8775);
var k = cljs.core.first(arglist__8775);
var ks = cljs.core.rest(arglist__8775);
return G__8753__delegate(elem,k,ks);
});
G__8753.cljs$core$IFn$_invoke$arity$variadic = G__8753__delegate;
return G__8753;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__8777 = dommy.template.__GT_node_like.call(null,elem);G__8777.style.display = ((show_QMARK_)?"":"none");
return G__8777;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__8779 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8779,false);
return G__8779;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__8781 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8781,true);
return G__8781;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__8783 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__8783["constructor"] = Object);
return G__8783;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
