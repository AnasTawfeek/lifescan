// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3279__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3279__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3279__auto__;
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
var G__8541 = (i + class$.length);
start_from = G__8541;
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
{var temp__4090__auto___8566 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8566))
{var class_list_8567 = temp__4090__auto___8566;var seq__8554_8568 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8555_8569 = null;var count__8556_8570 = 0;var i__8557_8571 = 0;while(true){
if((i__8557_8571 < count__8556_8570))
{var class_8572 = cljs.core._nth.call(null,chunk__8555_8569,i__8557_8571);class_list_8567.add(class_8572);
{
var G__8573 = seq__8554_8568;
var G__8574 = chunk__8555_8569;
var G__8575 = count__8556_8570;
var G__8576 = (i__8557_8571 + 1);
seq__8554_8568 = G__8573;
chunk__8555_8569 = G__8574;
count__8556_8570 = G__8575;
i__8557_8571 = G__8576;
continue;
}
} else
{var temp__4092__auto___8577 = cljs.core.seq.call(null,seq__8554_8568);if(temp__4092__auto___8577)
{var seq__8554_8578__$1 = temp__4092__auto___8577;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8554_8578__$1))
{var c__4015__auto___8579 = cljs.core.chunk_first.call(null,seq__8554_8578__$1);{
var G__8580 = cljs.core.chunk_rest.call(null,seq__8554_8578__$1);
var G__8581 = c__4015__auto___8579;
var G__8582 = cljs.core.count.call(null,c__4015__auto___8579);
var G__8583 = 0;
seq__8554_8568 = G__8580;
chunk__8555_8569 = G__8581;
count__8556_8570 = G__8582;
i__8557_8571 = G__8583;
continue;
}
} else
{var class_8584 = cljs.core.first.call(null,seq__8554_8578__$1);class_list_8567.add(class_8584);
{
var G__8585 = cljs.core.next.call(null,seq__8554_8578__$1);
var G__8586 = null;
var G__8587 = 0;
var G__8588 = 0;
seq__8554_8568 = G__8585;
chunk__8555_8569 = G__8586;
count__8556_8570 = G__8587;
i__8557_8571 = G__8588;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_8589 = elem__$1.className;var seq__8558_8590 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8559_8591 = null;var count__8560_8592 = 0;var i__8561_8593 = 0;while(true){
if((i__8561_8593 < count__8560_8592))
{var class_8594 = cljs.core._nth.call(null,chunk__8559_8591,i__8561_8593);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8589,class_8594)))
{} else
{elem__$1.className = (((class_name_8589 === ""))?class_8594:[cljs.core.str(class_name_8589),cljs.core.str(" "),cljs.core.str(class_8594)].join(''));
}
{
var G__8595 = seq__8558_8590;
var G__8596 = chunk__8559_8591;
var G__8597 = count__8560_8592;
var G__8598 = (i__8561_8593 + 1);
seq__8558_8590 = G__8595;
chunk__8559_8591 = G__8596;
count__8560_8592 = G__8597;
i__8561_8593 = G__8598;
continue;
}
} else
{var temp__4092__auto___8599 = cljs.core.seq.call(null,seq__8558_8590);if(temp__4092__auto___8599)
{var seq__8558_8600__$1 = temp__4092__auto___8599;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8558_8600__$1))
{var c__4015__auto___8601 = cljs.core.chunk_first.call(null,seq__8558_8600__$1);{
var G__8602 = cljs.core.chunk_rest.call(null,seq__8558_8600__$1);
var G__8603 = c__4015__auto___8601;
var G__8604 = cljs.core.count.call(null,c__4015__auto___8601);
var G__8605 = 0;
seq__8558_8590 = G__8602;
chunk__8559_8591 = G__8603;
count__8560_8592 = G__8604;
i__8561_8593 = G__8605;
continue;
}
} else
{var class_8606 = cljs.core.first.call(null,seq__8558_8600__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8589,class_8606)))
{} else
{elem__$1.className = (((class_name_8589 === ""))?class_8606:[cljs.core.str(class_name_8589),cljs.core.str(" "),cljs.core.str(class_8606)].join(''));
}
{
var G__8607 = cljs.core.next.call(null,seq__8558_8600__$1);
var G__8608 = null;
var G__8609 = 0;
var G__8610 = 0;
seq__8558_8590 = G__8607;
chunk__8559_8591 = G__8608;
count__8560_8592 = G__8609;
i__8561_8593 = G__8610;
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
var G__8611__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8562_8612 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__8563_8613 = null;var count__8564_8614 = 0;var i__8565_8615 = 0;while(true){
if((i__8565_8615 < count__8564_8614))
{var c_8616 = cljs.core._nth.call(null,chunk__8563_8613,i__8565_8615);add_class_BANG_.call(null,elem__$1,c_8616);
{
var G__8617 = seq__8562_8612;
var G__8618 = chunk__8563_8613;
var G__8619 = count__8564_8614;
var G__8620 = (i__8565_8615 + 1);
seq__8562_8612 = G__8617;
chunk__8563_8613 = G__8618;
count__8564_8614 = G__8619;
i__8565_8615 = G__8620;
continue;
}
} else
{var temp__4092__auto___8621 = cljs.core.seq.call(null,seq__8562_8612);if(temp__4092__auto___8621)
{var seq__8562_8622__$1 = temp__4092__auto___8621;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8562_8622__$1))
{var c__4015__auto___8623 = cljs.core.chunk_first.call(null,seq__8562_8622__$1);{
var G__8624 = cljs.core.chunk_rest.call(null,seq__8562_8622__$1);
var G__8625 = c__4015__auto___8623;
var G__8626 = cljs.core.count.call(null,c__4015__auto___8623);
var G__8627 = 0;
seq__8562_8612 = G__8624;
chunk__8563_8613 = G__8625;
count__8564_8614 = G__8626;
i__8565_8615 = G__8627;
continue;
}
} else
{var c_8628 = cljs.core.first.call(null,seq__8562_8622__$1);add_class_BANG_.call(null,elem__$1,c_8628);
{
var G__8629 = cljs.core.next.call(null,seq__8562_8622__$1);
var G__8630 = null;
var G__8631 = 0;
var G__8632 = 0;
seq__8562_8612 = G__8629;
chunk__8563_8613 = G__8630;
count__8564_8614 = G__8631;
i__8565_8615 = G__8632;
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
var G__8611 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8611__delegate.call(this,elem,classes,more_classes);};
G__8611.cljs$lang$maxFixedArity = 2;
G__8611.cljs$lang$applyTo = (function (arglist__8633){
var elem = cljs.core.first(arglist__8633);
arglist__8633 = cljs.core.next(arglist__8633);
var classes = cljs.core.first(arglist__8633);
var more_classes = cljs.core.rest(arglist__8633);
return G__8611__delegate(elem,classes,more_classes);
});
G__8611.cljs$core$IFn$_invoke$arity$variadic = G__8611__delegate;
return G__8611;
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
var G__8634 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__8634;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___8643 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8643))
{var class_list_8644 = temp__4090__auto___8643;class_list_8644.remove(class$__$1);
} else
{var class_name_8645 = elem__$1.className;var new_class_name_8646 = dommy.attrs.remove_class_str.call(null,class_name_8645,class$__$1);if((class_name_8645 === new_class_name_8646))
{} else
{elem__$1.className = new_class_name_8646;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__8647__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8639 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__8640 = null;var count__8641 = 0;var i__8642 = 0;while(true){
if((i__8642 < count__8641))
{var c = cljs.core._nth.call(null,chunk__8640,i__8642);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8648 = seq__8639;
var G__8649 = chunk__8640;
var G__8650 = count__8641;
var G__8651 = (i__8642 + 1);
seq__8639 = G__8648;
chunk__8640 = G__8649;
count__8641 = G__8650;
i__8642 = G__8651;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8639);if(temp__4092__auto__)
{var seq__8639__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8639__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__8639__$1);{
var G__8652 = cljs.core.chunk_rest.call(null,seq__8639__$1);
var G__8653 = c__4015__auto__;
var G__8654 = cljs.core.count.call(null,c__4015__auto__);
var G__8655 = 0;
seq__8639 = G__8652;
chunk__8640 = G__8653;
count__8641 = G__8654;
i__8642 = G__8655;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8639__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8656 = cljs.core.next.call(null,seq__8639__$1);
var G__8657 = null;
var G__8658 = 0;
var G__8659 = 0;
seq__8639 = G__8656;
chunk__8640 = G__8657;
count__8641 = G__8658;
i__8642 = G__8659;
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
var G__8647 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8647__delegate.call(this,elem,class$,classes);};
G__8647.cljs$lang$maxFixedArity = 2;
G__8647.cljs$lang$applyTo = (function (arglist__8660){
var elem = cljs.core.first(arglist__8660);
arglist__8660 = cljs.core.next(arglist__8660);
var class$ = cljs.core.first(arglist__8660);
var classes = cljs.core.rest(arglist__8660);
return G__8647__delegate(elem,class$,classes);
});
G__8647.cljs$core$IFn$_invoke$arity$variadic = G__8647__delegate;
return G__8647;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___8661 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8661))
{var class_list_8662 = temp__4090__auto___8661;class_list_8662.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__8665){var vec__8666 = p__8665;var k = cljs.core.nth.call(null,vec__8666,0,null);var v = cljs.core.nth.call(null,vec__8666,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__8673_8679 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8674_8680 = null;var count__8675_8681 = 0;var i__8676_8682 = 0;while(true){
if((i__8676_8682 < count__8675_8681))
{var vec__8677_8683 = cljs.core._nth.call(null,chunk__8674_8680,i__8676_8682);var k_8684 = cljs.core.nth.call(null,vec__8677_8683,0,null);var v_8685 = cljs.core.nth.call(null,vec__8677_8683,1,null);(style[cljs.core.name.call(null,k_8684)] = v_8685);
{
var G__8686 = seq__8673_8679;
var G__8687 = chunk__8674_8680;
var G__8688 = count__8675_8681;
var G__8689 = (i__8676_8682 + 1);
seq__8673_8679 = G__8686;
chunk__8674_8680 = G__8687;
count__8675_8681 = G__8688;
i__8676_8682 = G__8689;
continue;
}
} else
{var temp__4092__auto___8690 = cljs.core.seq.call(null,seq__8673_8679);if(temp__4092__auto___8690)
{var seq__8673_8691__$1 = temp__4092__auto___8690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8673_8691__$1))
{var c__4015__auto___8692 = cljs.core.chunk_first.call(null,seq__8673_8691__$1);{
var G__8693 = cljs.core.chunk_rest.call(null,seq__8673_8691__$1);
var G__8694 = c__4015__auto___8692;
var G__8695 = cljs.core.count.call(null,c__4015__auto___8692);
var G__8696 = 0;
seq__8673_8679 = G__8693;
chunk__8674_8680 = G__8694;
count__8675_8681 = G__8695;
i__8676_8682 = G__8696;
continue;
}
} else
{var vec__8678_8697 = cljs.core.first.call(null,seq__8673_8691__$1);var k_8698 = cljs.core.nth.call(null,vec__8678_8697,0,null);var v_8699 = cljs.core.nth.call(null,vec__8678_8697,1,null);(style[cljs.core.name.call(null,k_8698)] = v_8699);
{
var G__8700 = cljs.core.next.call(null,seq__8673_8691__$1);
var G__8701 = null;
var G__8702 = 0;
var G__8703 = 0;
seq__8673_8679 = G__8700;
chunk__8674_8680 = G__8701;
count__8675_8681 = G__8702;
i__8676_8682 = G__8703;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8704){
var elem = cljs.core.first(arglist__8704);
var kvs = cljs.core.rest(arglist__8704);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8711_8717 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8712_8718 = null;var count__8713_8719 = 0;var i__8714_8720 = 0;while(true){
if((i__8714_8720 < count__8713_8719))
{var vec__8715_8721 = cljs.core._nth.call(null,chunk__8712_8718,i__8714_8720);var k_8722 = cljs.core.nth.call(null,vec__8715_8721,0,null);var v_8723 = cljs.core.nth.call(null,vec__8715_8721,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8722,[cljs.core.str(v_8723),cljs.core.str("px")].join(''));
{
var G__8724 = seq__8711_8717;
var G__8725 = chunk__8712_8718;
var G__8726 = count__8713_8719;
var G__8727 = (i__8714_8720 + 1);
seq__8711_8717 = G__8724;
chunk__8712_8718 = G__8725;
count__8713_8719 = G__8726;
i__8714_8720 = G__8727;
continue;
}
} else
{var temp__4092__auto___8728 = cljs.core.seq.call(null,seq__8711_8717);if(temp__4092__auto___8728)
{var seq__8711_8729__$1 = temp__4092__auto___8728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8711_8729__$1))
{var c__4015__auto___8730 = cljs.core.chunk_first.call(null,seq__8711_8729__$1);{
var G__8731 = cljs.core.chunk_rest.call(null,seq__8711_8729__$1);
var G__8732 = c__4015__auto___8730;
var G__8733 = cljs.core.count.call(null,c__4015__auto___8730);
var G__8734 = 0;
seq__8711_8717 = G__8731;
chunk__8712_8718 = G__8732;
count__8713_8719 = G__8733;
i__8714_8720 = G__8734;
continue;
}
} else
{var vec__8716_8735 = cljs.core.first.call(null,seq__8711_8729__$1);var k_8736 = cljs.core.nth.call(null,vec__8716_8735,0,null);var v_8737 = cljs.core.nth.call(null,vec__8716_8735,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8736,[cljs.core.str(v_8737),cljs.core.str("px")].join(''));
{
var G__8738 = cljs.core.next.call(null,seq__8711_8729__$1);
var G__8739 = null;
var G__8740 = 0;
var G__8741 = 0;
seq__8711_8717 = G__8738;
chunk__8712_8718 = G__8739;
count__8713_8719 = G__8740;
i__8714_8720 = G__8741;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8742){
var elem = cljs.core.first(arglist__8742);
var kvs = cljs.core.rest(arglist__8742);
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
{var G__8751 = dommy.template.__GT_node_like.call(null,elem);(G__8751[cljs.core.name.call(null,k)] = v);
return G__8751;
} else
{var G__8752 = dommy.template.__GT_node_like.call(null,elem);G__8752.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__8752;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8759__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8753_8760 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__8754_8761 = null;var count__8755_8762 = 0;var i__8756_8763 = 0;while(true){
if((i__8756_8763 < count__8755_8762))
{var vec__8757_8764 = cljs.core._nth.call(null,chunk__8754_8761,i__8756_8763);var k_8765__$1 = cljs.core.nth.call(null,vec__8757_8764,0,null);var v_8766__$1 = cljs.core.nth.call(null,vec__8757_8764,1,null);set_attr_BANG_.call(null,elem__$1,k_8765__$1,v_8766__$1);
{
var G__8767 = seq__8753_8760;
var G__8768 = chunk__8754_8761;
var G__8769 = count__8755_8762;
var G__8770 = (i__8756_8763 + 1);
seq__8753_8760 = G__8767;
chunk__8754_8761 = G__8768;
count__8755_8762 = G__8769;
i__8756_8763 = G__8770;
continue;
}
} else
{var temp__4092__auto___8771 = cljs.core.seq.call(null,seq__8753_8760);if(temp__4092__auto___8771)
{var seq__8753_8772__$1 = temp__4092__auto___8771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8753_8772__$1))
{var c__4015__auto___8773 = cljs.core.chunk_first.call(null,seq__8753_8772__$1);{
var G__8774 = cljs.core.chunk_rest.call(null,seq__8753_8772__$1);
var G__8775 = c__4015__auto___8773;
var G__8776 = cljs.core.count.call(null,c__4015__auto___8773);
var G__8777 = 0;
seq__8753_8760 = G__8774;
chunk__8754_8761 = G__8775;
count__8755_8762 = G__8776;
i__8756_8763 = G__8777;
continue;
}
} else
{var vec__8758_8778 = cljs.core.first.call(null,seq__8753_8772__$1);var k_8779__$1 = cljs.core.nth.call(null,vec__8758_8778,0,null);var v_8780__$1 = cljs.core.nth.call(null,vec__8758_8778,1,null);set_attr_BANG_.call(null,elem__$1,k_8779__$1,v_8780__$1);
{
var G__8781 = cljs.core.next.call(null,seq__8753_8772__$1);
var G__8782 = null;
var G__8783 = 0;
var G__8784 = 0;
seq__8753_8760 = G__8781;
chunk__8754_8761 = G__8782;
count__8755_8762 = G__8783;
i__8756_8763 = G__8784;
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
var G__8759 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8759__delegate.call(this,elem,k,v,kvs);};
G__8759.cljs$lang$maxFixedArity = 3;
G__8759.cljs$lang$applyTo = (function (arglist__8785){
var elem = cljs.core.first(arglist__8785);
arglist__8785 = cljs.core.next(arglist__8785);
var k = cljs.core.first(arglist__8785);
arglist__8785 = cljs.core.next(arglist__8785);
var v = cljs.core.first(arglist__8785);
var kvs = cljs.core.rest(arglist__8785);
return G__8759__delegate(elem,k,v,kvs);
});
G__8759.cljs$core$IFn$_invoke$arity$variadic = G__8759__delegate;
return G__8759;
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
var G__8794__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8790_8795 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8791_8796 = null;var count__8792_8797 = 0;var i__8793_8798 = 0;while(true){
if((i__8793_8798 < count__8792_8797))
{var k_8799__$1 = cljs.core._nth.call(null,chunk__8791_8796,i__8793_8798);remove_attr_BANG_.call(null,elem__$1,k_8799__$1);
{
var G__8800 = seq__8790_8795;
var G__8801 = chunk__8791_8796;
var G__8802 = count__8792_8797;
var G__8803 = (i__8793_8798 + 1);
seq__8790_8795 = G__8800;
chunk__8791_8796 = G__8801;
count__8792_8797 = G__8802;
i__8793_8798 = G__8803;
continue;
}
} else
{var temp__4092__auto___8804 = cljs.core.seq.call(null,seq__8790_8795);if(temp__4092__auto___8804)
{var seq__8790_8805__$1 = temp__4092__auto___8804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8790_8805__$1))
{var c__4015__auto___8806 = cljs.core.chunk_first.call(null,seq__8790_8805__$1);{
var G__8807 = cljs.core.chunk_rest.call(null,seq__8790_8805__$1);
var G__8808 = c__4015__auto___8806;
var G__8809 = cljs.core.count.call(null,c__4015__auto___8806);
var G__8810 = 0;
seq__8790_8795 = G__8807;
chunk__8791_8796 = G__8808;
count__8792_8797 = G__8809;
i__8793_8798 = G__8810;
continue;
}
} else
{var k_8811__$1 = cljs.core.first.call(null,seq__8790_8805__$1);remove_attr_BANG_.call(null,elem__$1,k_8811__$1);
{
var G__8812 = cljs.core.next.call(null,seq__8790_8805__$1);
var G__8813 = null;
var G__8814 = 0;
var G__8815 = 0;
seq__8790_8795 = G__8812;
chunk__8791_8796 = G__8813;
count__8792_8797 = G__8814;
i__8793_8798 = G__8815;
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
var G__8794 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8794__delegate.call(this,elem,k,ks);};
G__8794.cljs$lang$maxFixedArity = 2;
G__8794.cljs$lang$applyTo = (function (arglist__8816){
var elem = cljs.core.first(arglist__8816);
arglist__8816 = cljs.core.next(arglist__8816);
var k = cljs.core.first(arglist__8816);
var ks = cljs.core.rest(arglist__8816);
return G__8794__delegate(elem,k,ks);
});
G__8794.cljs$core$IFn$_invoke$arity$variadic = G__8794__delegate;
return G__8794;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__8818 = dommy.template.__GT_node_like.call(null,elem);G__8818.style.display = ((show_QMARK_)?"":"none");
return G__8818;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__8820 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8820,false);
return G__8820;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__8822 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8822,true);
return G__8822;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__8824 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__8824["constructor"] = Object);
return G__8824;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
