// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__4760__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__4760__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__4760__auto__;
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
var G__8570 = (i + class$.length);
start_from = G__8570;
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
{var temp__4090__auto___8595 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8595))
{var class_list_8596 = temp__4090__auto___8595;var seq__8583_8597 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8584_8598 = null;var count__8585_8599 = 0;var i__8586_8600 = 0;while(true){
if((i__8586_8600 < count__8585_8599))
{var class_8601 = cljs.core._nth.call(null,chunk__8584_8598,i__8586_8600);class_list_8596.add(class_8601);
{
var G__8602 = seq__8583_8597;
var G__8603 = chunk__8584_8598;
var G__8604 = count__8585_8599;
var G__8605 = (i__8586_8600 + 1);
seq__8583_8597 = G__8602;
chunk__8584_8598 = G__8603;
count__8585_8599 = G__8604;
i__8586_8600 = G__8605;
continue;
}
} else
{var temp__4092__auto___8606 = cljs.core.seq.call(null,seq__8583_8597);if(temp__4092__auto___8606)
{var seq__8583_8607__$1 = temp__4092__auto___8606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8583_8607__$1))
{var c__5496__auto___8608 = cljs.core.chunk_first.call(null,seq__8583_8607__$1);{
var G__8609 = cljs.core.chunk_rest.call(null,seq__8583_8607__$1);
var G__8610 = c__5496__auto___8608;
var G__8611 = cljs.core.count.call(null,c__5496__auto___8608);
var G__8612 = 0;
seq__8583_8597 = G__8609;
chunk__8584_8598 = G__8610;
count__8585_8599 = G__8611;
i__8586_8600 = G__8612;
continue;
}
} else
{var class_8613 = cljs.core.first.call(null,seq__8583_8607__$1);class_list_8596.add(class_8613);
{
var G__8614 = cljs.core.next.call(null,seq__8583_8607__$1);
var G__8615 = null;
var G__8616 = 0;
var G__8617 = 0;
seq__8583_8597 = G__8614;
chunk__8584_8598 = G__8615;
count__8585_8599 = G__8616;
i__8586_8600 = G__8617;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_8618 = elem__$1.className;var seq__8587_8619 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8588_8620 = null;var count__8589_8621 = 0;var i__8590_8622 = 0;while(true){
if((i__8590_8622 < count__8589_8621))
{var class_8623 = cljs.core._nth.call(null,chunk__8588_8620,i__8590_8622);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8618,class_8623)))
{} else
{elem__$1.className = (((class_name_8618 === ""))?class_8623:[cljs.core.str(class_name_8618),cljs.core.str(" "),cljs.core.str(class_8623)].join(''));
}
{
var G__8624 = seq__8587_8619;
var G__8625 = chunk__8588_8620;
var G__8626 = count__8589_8621;
var G__8627 = (i__8590_8622 + 1);
seq__8587_8619 = G__8624;
chunk__8588_8620 = G__8625;
count__8589_8621 = G__8626;
i__8590_8622 = G__8627;
continue;
}
} else
{var temp__4092__auto___8628 = cljs.core.seq.call(null,seq__8587_8619);if(temp__4092__auto___8628)
{var seq__8587_8629__$1 = temp__4092__auto___8628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8587_8629__$1))
{var c__5496__auto___8630 = cljs.core.chunk_first.call(null,seq__8587_8629__$1);{
var G__8631 = cljs.core.chunk_rest.call(null,seq__8587_8629__$1);
var G__8632 = c__5496__auto___8630;
var G__8633 = cljs.core.count.call(null,c__5496__auto___8630);
var G__8634 = 0;
seq__8587_8619 = G__8631;
chunk__8588_8620 = G__8632;
count__8589_8621 = G__8633;
i__8590_8622 = G__8634;
continue;
}
} else
{var class_8635 = cljs.core.first.call(null,seq__8587_8629__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8618,class_8635)))
{} else
{elem__$1.className = (((class_name_8618 === ""))?class_8635:[cljs.core.str(class_name_8618),cljs.core.str(" "),cljs.core.str(class_8635)].join(''));
}
{
var G__8636 = cljs.core.next.call(null,seq__8587_8629__$1);
var G__8637 = null;
var G__8638 = 0;
var G__8639 = 0;
seq__8587_8619 = G__8636;
chunk__8588_8620 = G__8637;
count__8589_8621 = G__8638;
i__8590_8622 = G__8639;
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
var G__8640__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8591_8641 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__8592_8642 = null;var count__8593_8643 = 0;var i__8594_8644 = 0;while(true){
if((i__8594_8644 < count__8593_8643))
{var c_8645 = cljs.core._nth.call(null,chunk__8592_8642,i__8594_8644);add_class_BANG_.call(null,elem__$1,c_8645);
{
var G__8646 = seq__8591_8641;
var G__8647 = chunk__8592_8642;
var G__8648 = count__8593_8643;
var G__8649 = (i__8594_8644 + 1);
seq__8591_8641 = G__8646;
chunk__8592_8642 = G__8647;
count__8593_8643 = G__8648;
i__8594_8644 = G__8649;
continue;
}
} else
{var temp__4092__auto___8650 = cljs.core.seq.call(null,seq__8591_8641);if(temp__4092__auto___8650)
{var seq__8591_8651__$1 = temp__4092__auto___8650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8591_8651__$1))
{var c__5496__auto___8652 = cljs.core.chunk_first.call(null,seq__8591_8651__$1);{
var G__8653 = cljs.core.chunk_rest.call(null,seq__8591_8651__$1);
var G__8654 = c__5496__auto___8652;
var G__8655 = cljs.core.count.call(null,c__5496__auto___8652);
var G__8656 = 0;
seq__8591_8641 = G__8653;
chunk__8592_8642 = G__8654;
count__8593_8643 = G__8655;
i__8594_8644 = G__8656;
continue;
}
} else
{var c_8657 = cljs.core.first.call(null,seq__8591_8651__$1);add_class_BANG_.call(null,elem__$1,c_8657);
{
var G__8658 = cljs.core.next.call(null,seq__8591_8651__$1);
var G__8659 = null;
var G__8660 = 0;
var G__8661 = 0;
seq__8591_8641 = G__8658;
chunk__8592_8642 = G__8659;
count__8593_8643 = G__8660;
i__8594_8644 = G__8661;
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
var G__8640 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8640__delegate.call(this,elem,classes,more_classes);};
G__8640.cljs$lang$maxFixedArity = 2;
G__8640.cljs$lang$applyTo = (function (arglist__8662){
var elem = cljs.core.first(arglist__8662);
arglist__8662 = cljs.core.next(arglist__8662);
var classes = cljs.core.first(arglist__8662);
var more_classes = cljs.core.rest(arglist__8662);
return G__8640__delegate(elem,classes,more_classes);
});
G__8640.cljs$core$IFn$_invoke$arity$variadic = G__8640__delegate;
return G__8640;
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
var G__8663 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__8663;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___8672 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8672))
{var class_list_8673 = temp__4090__auto___8672;class_list_8673.remove(class$__$1);
} else
{var class_name_8674 = elem__$1.className;var new_class_name_8675 = dommy.attrs.remove_class_str.call(null,class_name_8674,class$__$1);if((class_name_8674 === new_class_name_8675))
{} else
{elem__$1.className = new_class_name_8675;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__8676__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8668 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__8669 = null;var count__8670 = 0;var i__8671 = 0;while(true){
if((i__8671 < count__8670))
{var c = cljs.core._nth.call(null,chunk__8669,i__8671);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8677 = seq__8668;
var G__8678 = chunk__8669;
var G__8679 = count__8670;
var G__8680 = (i__8671 + 1);
seq__8668 = G__8677;
chunk__8669 = G__8678;
count__8670 = G__8679;
i__8671 = G__8680;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8668);if(temp__4092__auto__)
{var seq__8668__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8668__$1))
{var c__5496__auto__ = cljs.core.chunk_first.call(null,seq__8668__$1);{
var G__8681 = cljs.core.chunk_rest.call(null,seq__8668__$1);
var G__8682 = c__5496__auto__;
var G__8683 = cljs.core.count.call(null,c__5496__auto__);
var G__8684 = 0;
seq__8668 = G__8681;
chunk__8669 = G__8682;
count__8670 = G__8683;
i__8671 = G__8684;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8668__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8685 = cljs.core.next.call(null,seq__8668__$1);
var G__8686 = null;
var G__8687 = 0;
var G__8688 = 0;
seq__8668 = G__8685;
chunk__8669 = G__8686;
count__8670 = G__8687;
i__8671 = G__8688;
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
var G__8676 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8676__delegate.call(this,elem,class$,classes);};
G__8676.cljs$lang$maxFixedArity = 2;
G__8676.cljs$lang$applyTo = (function (arglist__8689){
var elem = cljs.core.first(arglist__8689);
arglist__8689 = cljs.core.next(arglist__8689);
var class$ = cljs.core.first(arglist__8689);
var classes = cljs.core.rest(arglist__8689);
return G__8676__delegate(elem,class$,classes);
});
G__8676.cljs$core$IFn$_invoke$arity$variadic = G__8676__delegate;
return G__8676;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___8690 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8690))
{var class_list_8691 = temp__4090__auto___8690;class_list_8691.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__8694){var vec__8695 = p__8694;var k = cljs.core.nth.call(null,vec__8695,0,null);var v = cljs.core.nth.call(null,vec__8695,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__8702_8708 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8703_8709 = null;var count__8704_8710 = 0;var i__8705_8711 = 0;while(true){
if((i__8705_8711 < count__8704_8710))
{var vec__8706_8712 = cljs.core._nth.call(null,chunk__8703_8709,i__8705_8711);var k_8713 = cljs.core.nth.call(null,vec__8706_8712,0,null);var v_8714 = cljs.core.nth.call(null,vec__8706_8712,1,null);(style[cljs.core.name.call(null,k_8713)] = v_8714);
{
var G__8715 = seq__8702_8708;
var G__8716 = chunk__8703_8709;
var G__8717 = count__8704_8710;
var G__8718 = (i__8705_8711 + 1);
seq__8702_8708 = G__8715;
chunk__8703_8709 = G__8716;
count__8704_8710 = G__8717;
i__8705_8711 = G__8718;
continue;
}
} else
{var temp__4092__auto___8719 = cljs.core.seq.call(null,seq__8702_8708);if(temp__4092__auto___8719)
{var seq__8702_8720__$1 = temp__4092__auto___8719;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8702_8720__$1))
{var c__5496__auto___8721 = cljs.core.chunk_first.call(null,seq__8702_8720__$1);{
var G__8722 = cljs.core.chunk_rest.call(null,seq__8702_8720__$1);
var G__8723 = c__5496__auto___8721;
var G__8724 = cljs.core.count.call(null,c__5496__auto___8721);
var G__8725 = 0;
seq__8702_8708 = G__8722;
chunk__8703_8709 = G__8723;
count__8704_8710 = G__8724;
i__8705_8711 = G__8725;
continue;
}
} else
{var vec__8707_8726 = cljs.core.first.call(null,seq__8702_8720__$1);var k_8727 = cljs.core.nth.call(null,vec__8707_8726,0,null);var v_8728 = cljs.core.nth.call(null,vec__8707_8726,1,null);(style[cljs.core.name.call(null,k_8727)] = v_8728);
{
var G__8729 = cljs.core.next.call(null,seq__8702_8720__$1);
var G__8730 = null;
var G__8731 = 0;
var G__8732 = 0;
seq__8702_8708 = G__8729;
chunk__8703_8709 = G__8730;
count__8704_8710 = G__8731;
i__8705_8711 = G__8732;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8733){
var elem = cljs.core.first(arglist__8733);
var kvs = cljs.core.rest(arglist__8733);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8740_8746 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8741_8747 = null;var count__8742_8748 = 0;var i__8743_8749 = 0;while(true){
if((i__8743_8749 < count__8742_8748))
{var vec__8744_8750 = cljs.core._nth.call(null,chunk__8741_8747,i__8743_8749);var k_8751 = cljs.core.nth.call(null,vec__8744_8750,0,null);var v_8752 = cljs.core.nth.call(null,vec__8744_8750,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8751,[cljs.core.str(v_8752),cljs.core.str("px")].join(''));
{
var G__8753 = seq__8740_8746;
var G__8754 = chunk__8741_8747;
var G__8755 = count__8742_8748;
var G__8756 = (i__8743_8749 + 1);
seq__8740_8746 = G__8753;
chunk__8741_8747 = G__8754;
count__8742_8748 = G__8755;
i__8743_8749 = G__8756;
continue;
}
} else
{var temp__4092__auto___8757 = cljs.core.seq.call(null,seq__8740_8746);if(temp__4092__auto___8757)
{var seq__8740_8758__$1 = temp__4092__auto___8757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8740_8758__$1))
{var c__5496__auto___8759 = cljs.core.chunk_first.call(null,seq__8740_8758__$1);{
var G__8760 = cljs.core.chunk_rest.call(null,seq__8740_8758__$1);
var G__8761 = c__5496__auto___8759;
var G__8762 = cljs.core.count.call(null,c__5496__auto___8759);
var G__8763 = 0;
seq__8740_8746 = G__8760;
chunk__8741_8747 = G__8761;
count__8742_8748 = G__8762;
i__8743_8749 = G__8763;
continue;
}
} else
{var vec__8745_8764 = cljs.core.first.call(null,seq__8740_8758__$1);var k_8765 = cljs.core.nth.call(null,vec__8745_8764,0,null);var v_8766 = cljs.core.nth.call(null,vec__8745_8764,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8765,[cljs.core.str(v_8766),cljs.core.str("px")].join(''));
{
var G__8767 = cljs.core.next.call(null,seq__8740_8758__$1);
var G__8768 = null;
var G__8769 = 0;
var G__8770 = 0;
seq__8740_8746 = G__8767;
chunk__8741_8747 = G__8768;
count__8742_8748 = G__8769;
i__8743_8749 = G__8770;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8771){
var elem = cljs.core.first(arglist__8771);
var kvs = cljs.core.rest(arglist__8771);
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
{var G__8780 = dommy.template.__GT_node_like.call(null,elem);(G__8780[cljs.core.name.call(null,k)] = v);
return G__8780;
} else
{var G__8781 = dommy.template.__GT_node_like.call(null,elem);G__8781.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__8781;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8788__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8782_8789 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__8783_8790 = null;var count__8784_8791 = 0;var i__8785_8792 = 0;while(true){
if((i__8785_8792 < count__8784_8791))
{var vec__8786_8793 = cljs.core._nth.call(null,chunk__8783_8790,i__8785_8792);var k_8794__$1 = cljs.core.nth.call(null,vec__8786_8793,0,null);var v_8795__$1 = cljs.core.nth.call(null,vec__8786_8793,1,null);set_attr_BANG_.call(null,elem__$1,k_8794__$1,v_8795__$1);
{
var G__8796 = seq__8782_8789;
var G__8797 = chunk__8783_8790;
var G__8798 = count__8784_8791;
var G__8799 = (i__8785_8792 + 1);
seq__8782_8789 = G__8796;
chunk__8783_8790 = G__8797;
count__8784_8791 = G__8798;
i__8785_8792 = G__8799;
continue;
}
} else
{var temp__4092__auto___8800 = cljs.core.seq.call(null,seq__8782_8789);if(temp__4092__auto___8800)
{var seq__8782_8801__$1 = temp__4092__auto___8800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8782_8801__$1))
{var c__5496__auto___8802 = cljs.core.chunk_first.call(null,seq__8782_8801__$1);{
var G__8803 = cljs.core.chunk_rest.call(null,seq__8782_8801__$1);
var G__8804 = c__5496__auto___8802;
var G__8805 = cljs.core.count.call(null,c__5496__auto___8802);
var G__8806 = 0;
seq__8782_8789 = G__8803;
chunk__8783_8790 = G__8804;
count__8784_8791 = G__8805;
i__8785_8792 = G__8806;
continue;
}
} else
{var vec__8787_8807 = cljs.core.first.call(null,seq__8782_8801__$1);var k_8808__$1 = cljs.core.nth.call(null,vec__8787_8807,0,null);var v_8809__$1 = cljs.core.nth.call(null,vec__8787_8807,1,null);set_attr_BANG_.call(null,elem__$1,k_8808__$1,v_8809__$1);
{
var G__8810 = cljs.core.next.call(null,seq__8782_8801__$1);
var G__8811 = null;
var G__8812 = 0;
var G__8813 = 0;
seq__8782_8789 = G__8810;
chunk__8783_8790 = G__8811;
count__8784_8791 = G__8812;
i__8785_8792 = G__8813;
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
var G__8788 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8788__delegate.call(this,elem,k,v,kvs);};
G__8788.cljs$lang$maxFixedArity = 3;
G__8788.cljs$lang$applyTo = (function (arglist__8814){
var elem = cljs.core.first(arglist__8814);
arglist__8814 = cljs.core.next(arglist__8814);
var k = cljs.core.first(arglist__8814);
arglist__8814 = cljs.core.next(arglist__8814);
var v = cljs.core.first(arglist__8814);
var kvs = cljs.core.rest(arglist__8814);
return G__8788__delegate(elem,k,v,kvs);
});
G__8788.cljs$core$IFn$_invoke$arity$variadic = G__8788__delegate;
return G__8788;
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
var G__8823__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8819_8824 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8820_8825 = null;var count__8821_8826 = 0;var i__8822_8827 = 0;while(true){
if((i__8822_8827 < count__8821_8826))
{var k_8828__$1 = cljs.core._nth.call(null,chunk__8820_8825,i__8822_8827);remove_attr_BANG_.call(null,elem__$1,k_8828__$1);
{
var G__8829 = seq__8819_8824;
var G__8830 = chunk__8820_8825;
var G__8831 = count__8821_8826;
var G__8832 = (i__8822_8827 + 1);
seq__8819_8824 = G__8829;
chunk__8820_8825 = G__8830;
count__8821_8826 = G__8831;
i__8822_8827 = G__8832;
continue;
}
} else
{var temp__4092__auto___8833 = cljs.core.seq.call(null,seq__8819_8824);if(temp__4092__auto___8833)
{var seq__8819_8834__$1 = temp__4092__auto___8833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8819_8834__$1))
{var c__5496__auto___8835 = cljs.core.chunk_first.call(null,seq__8819_8834__$1);{
var G__8836 = cljs.core.chunk_rest.call(null,seq__8819_8834__$1);
var G__8837 = c__5496__auto___8835;
var G__8838 = cljs.core.count.call(null,c__5496__auto___8835);
var G__8839 = 0;
seq__8819_8824 = G__8836;
chunk__8820_8825 = G__8837;
count__8821_8826 = G__8838;
i__8822_8827 = G__8839;
continue;
}
} else
{var k_8840__$1 = cljs.core.first.call(null,seq__8819_8834__$1);remove_attr_BANG_.call(null,elem__$1,k_8840__$1);
{
var G__8841 = cljs.core.next.call(null,seq__8819_8834__$1);
var G__8842 = null;
var G__8843 = 0;
var G__8844 = 0;
seq__8819_8824 = G__8841;
chunk__8820_8825 = G__8842;
count__8821_8826 = G__8843;
i__8822_8827 = G__8844;
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
var G__8823 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8823__delegate.call(this,elem,k,ks);};
G__8823.cljs$lang$maxFixedArity = 2;
G__8823.cljs$lang$applyTo = (function (arglist__8845){
var elem = cljs.core.first(arglist__8845);
arglist__8845 = cljs.core.next(arglist__8845);
var k = cljs.core.first(arglist__8845);
var ks = cljs.core.rest(arglist__8845);
return G__8823__delegate(elem,k,ks);
});
G__8823.cljs$core$IFn$_invoke$arity$variadic = G__8823__delegate;
return G__8823;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__8847 = dommy.template.__GT_node_like.call(null,elem);G__8847.style.display = ((show_QMARK_)?"":"none");
return G__8847;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__8849 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8849,false);
return G__8849;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__8851 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8851,true);
return G__8851;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__8853 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__8853["constructor"] = Object);
return G__8853;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
