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
var G__9501 = (i + class$.length);
start_from = G__9501;
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
{var temp__4090__auto___9526 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9526))
{var class_list_9527 = temp__4090__auto___9526;var seq__9514_9528 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9515_9529 = null;var count__9516_9530 = 0;var i__9517_9531 = 0;while(true){
if((i__9517_9531 < count__9516_9530))
{var class_9532 = cljs.core._nth.call(null,chunk__9515_9529,i__9517_9531);class_list_9527.add(class_9532);
{
var G__9533 = seq__9514_9528;
var G__9534 = chunk__9515_9529;
var G__9535 = count__9516_9530;
var G__9536 = (i__9517_9531 + 1);
seq__9514_9528 = G__9533;
chunk__9515_9529 = G__9534;
count__9516_9530 = G__9535;
i__9517_9531 = G__9536;
continue;
}
} else
{var temp__4092__auto___9537 = cljs.core.seq.call(null,seq__9514_9528);if(temp__4092__auto___9537)
{var seq__9514_9538__$1 = temp__4092__auto___9537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9514_9538__$1))
{var c__4015__auto___9539 = cljs.core.chunk_first.call(null,seq__9514_9538__$1);{
var G__9540 = cljs.core.chunk_rest.call(null,seq__9514_9538__$1);
var G__9541 = c__4015__auto___9539;
var G__9542 = cljs.core.count.call(null,c__4015__auto___9539);
var G__9543 = 0;
seq__9514_9528 = G__9540;
chunk__9515_9529 = G__9541;
count__9516_9530 = G__9542;
i__9517_9531 = G__9543;
continue;
}
} else
{var class_9544 = cljs.core.first.call(null,seq__9514_9538__$1);class_list_9527.add(class_9544);
{
var G__9545 = cljs.core.next.call(null,seq__9514_9538__$1);
var G__9546 = null;
var G__9547 = 0;
var G__9548 = 0;
seq__9514_9528 = G__9545;
chunk__9515_9529 = G__9546;
count__9516_9530 = G__9547;
i__9517_9531 = G__9548;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_9549 = elem__$1.className;var seq__9518_9550 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9519_9551 = null;var count__9520_9552 = 0;var i__9521_9553 = 0;while(true){
if((i__9521_9553 < count__9520_9552))
{var class_9554 = cljs.core._nth.call(null,chunk__9519_9551,i__9521_9553);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9549,class_9554)))
{} else
{elem__$1.className = (((class_name_9549 === ""))?class_9554:[cljs.core.str(class_name_9549),cljs.core.str(" "),cljs.core.str(class_9554)].join(''));
}
{
var G__9555 = seq__9518_9550;
var G__9556 = chunk__9519_9551;
var G__9557 = count__9520_9552;
var G__9558 = (i__9521_9553 + 1);
seq__9518_9550 = G__9555;
chunk__9519_9551 = G__9556;
count__9520_9552 = G__9557;
i__9521_9553 = G__9558;
continue;
}
} else
{var temp__4092__auto___9559 = cljs.core.seq.call(null,seq__9518_9550);if(temp__4092__auto___9559)
{var seq__9518_9560__$1 = temp__4092__auto___9559;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9518_9560__$1))
{var c__4015__auto___9561 = cljs.core.chunk_first.call(null,seq__9518_9560__$1);{
var G__9562 = cljs.core.chunk_rest.call(null,seq__9518_9560__$1);
var G__9563 = c__4015__auto___9561;
var G__9564 = cljs.core.count.call(null,c__4015__auto___9561);
var G__9565 = 0;
seq__9518_9550 = G__9562;
chunk__9519_9551 = G__9563;
count__9520_9552 = G__9564;
i__9521_9553 = G__9565;
continue;
}
} else
{var class_9566 = cljs.core.first.call(null,seq__9518_9560__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9549,class_9566)))
{} else
{elem__$1.className = (((class_name_9549 === ""))?class_9566:[cljs.core.str(class_name_9549),cljs.core.str(" "),cljs.core.str(class_9566)].join(''));
}
{
var G__9567 = cljs.core.next.call(null,seq__9518_9560__$1);
var G__9568 = null;
var G__9569 = 0;
var G__9570 = 0;
seq__9518_9550 = G__9567;
chunk__9519_9551 = G__9568;
count__9520_9552 = G__9569;
i__9521_9553 = G__9570;
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
var G__9571__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9522_9572 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__9523_9573 = null;var count__9524_9574 = 0;var i__9525_9575 = 0;while(true){
if((i__9525_9575 < count__9524_9574))
{var c_9576 = cljs.core._nth.call(null,chunk__9523_9573,i__9525_9575);add_class_BANG_.call(null,elem__$1,c_9576);
{
var G__9577 = seq__9522_9572;
var G__9578 = chunk__9523_9573;
var G__9579 = count__9524_9574;
var G__9580 = (i__9525_9575 + 1);
seq__9522_9572 = G__9577;
chunk__9523_9573 = G__9578;
count__9524_9574 = G__9579;
i__9525_9575 = G__9580;
continue;
}
} else
{var temp__4092__auto___9581 = cljs.core.seq.call(null,seq__9522_9572);if(temp__4092__auto___9581)
{var seq__9522_9582__$1 = temp__4092__auto___9581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9522_9582__$1))
{var c__4015__auto___9583 = cljs.core.chunk_first.call(null,seq__9522_9582__$1);{
var G__9584 = cljs.core.chunk_rest.call(null,seq__9522_9582__$1);
var G__9585 = c__4015__auto___9583;
var G__9586 = cljs.core.count.call(null,c__4015__auto___9583);
var G__9587 = 0;
seq__9522_9572 = G__9584;
chunk__9523_9573 = G__9585;
count__9524_9574 = G__9586;
i__9525_9575 = G__9587;
continue;
}
} else
{var c_9588 = cljs.core.first.call(null,seq__9522_9582__$1);add_class_BANG_.call(null,elem__$1,c_9588);
{
var G__9589 = cljs.core.next.call(null,seq__9522_9582__$1);
var G__9590 = null;
var G__9591 = 0;
var G__9592 = 0;
seq__9522_9572 = G__9589;
chunk__9523_9573 = G__9590;
count__9524_9574 = G__9591;
i__9525_9575 = G__9592;
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
var G__9571 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9571__delegate.call(this,elem,classes,more_classes);};
G__9571.cljs$lang$maxFixedArity = 2;
G__9571.cljs$lang$applyTo = (function (arglist__9593){
var elem = cljs.core.first(arglist__9593);
arglist__9593 = cljs.core.next(arglist__9593);
var classes = cljs.core.first(arglist__9593);
var more_classes = cljs.core.rest(arglist__9593);
return G__9571__delegate(elem,classes,more_classes);
});
G__9571.cljs$core$IFn$_invoke$arity$variadic = G__9571__delegate;
return G__9571;
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
var G__9594 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__9594;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9603 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9603))
{var class_list_9604 = temp__4090__auto___9603;class_list_9604.remove(class$__$1);
} else
{var class_name_9605 = elem__$1.className;var new_class_name_9606 = dommy.attrs.remove_class_str.call(null,class_name_9605,class$__$1);if((class_name_9605 === new_class_name_9606))
{} else
{elem__$1.className = new_class_name_9606;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__9607__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9599 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__9600 = null;var count__9601 = 0;var i__9602 = 0;while(true){
if((i__9602 < count__9601))
{var c = cljs.core._nth.call(null,chunk__9600,i__9602);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9608 = seq__9599;
var G__9609 = chunk__9600;
var G__9610 = count__9601;
var G__9611 = (i__9602 + 1);
seq__9599 = G__9608;
chunk__9600 = G__9609;
count__9601 = G__9610;
i__9602 = G__9611;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9599);if(temp__4092__auto__)
{var seq__9599__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9599__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__9599__$1);{
var G__9612 = cljs.core.chunk_rest.call(null,seq__9599__$1);
var G__9613 = c__4015__auto__;
var G__9614 = cljs.core.count.call(null,c__4015__auto__);
var G__9615 = 0;
seq__9599 = G__9612;
chunk__9600 = G__9613;
count__9601 = G__9614;
i__9602 = G__9615;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__9599__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9616 = cljs.core.next.call(null,seq__9599__$1);
var G__9617 = null;
var G__9618 = 0;
var G__9619 = 0;
seq__9599 = G__9616;
chunk__9600 = G__9617;
count__9601 = G__9618;
i__9602 = G__9619;
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
var G__9607 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9607__delegate.call(this,elem,class$,classes);};
G__9607.cljs$lang$maxFixedArity = 2;
G__9607.cljs$lang$applyTo = (function (arglist__9620){
var elem = cljs.core.first(arglist__9620);
arglist__9620 = cljs.core.next(arglist__9620);
var class$ = cljs.core.first(arglist__9620);
var classes = cljs.core.rest(arglist__9620);
return G__9607__delegate(elem,class$,classes);
});
G__9607.cljs$core$IFn$_invoke$arity$variadic = G__9607__delegate;
return G__9607;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___9621 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9621))
{var class_list_9622 = temp__4090__auto___9621;class_list_9622.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__9625){var vec__9626 = p__9625;var k = cljs.core.nth.call(null,vec__9626,0,null);var v = cljs.core.nth.call(null,vec__9626,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__9633_9639 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9634_9640 = null;var count__9635_9641 = 0;var i__9636_9642 = 0;while(true){
if((i__9636_9642 < count__9635_9641))
{var vec__9637_9643 = cljs.core._nth.call(null,chunk__9634_9640,i__9636_9642);var k_9644 = cljs.core.nth.call(null,vec__9637_9643,0,null);var v_9645 = cljs.core.nth.call(null,vec__9637_9643,1,null);(style[cljs.core.name.call(null,k_9644)] = v_9645);
{
var G__9646 = seq__9633_9639;
var G__9647 = chunk__9634_9640;
var G__9648 = count__9635_9641;
var G__9649 = (i__9636_9642 + 1);
seq__9633_9639 = G__9646;
chunk__9634_9640 = G__9647;
count__9635_9641 = G__9648;
i__9636_9642 = G__9649;
continue;
}
} else
{var temp__4092__auto___9650 = cljs.core.seq.call(null,seq__9633_9639);if(temp__4092__auto___9650)
{var seq__9633_9651__$1 = temp__4092__auto___9650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9633_9651__$1))
{var c__4015__auto___9652 = cljs.core.chunk_first.call(null,seq__9633_9651__$1);{
var G__9653 = cljs.core.chunk_rest.call(null,seq__9633_9651__$1);
var G__9654 = c__4015__auto___9652;
var G__9655 = cljs.core.count.call(null,c__4015__auto___9652);
var G__9656 = 0;
seq__9633_9639 = G__9653;
chunk__9634_9640 = G__9654;
count__9635_9641 = G__9655;
i__9636_9642 = G__9656;
continue;
}
} else
{var vec__9638_9657 = cljs.core.first.call(null,seq__9633_9651__$1);var k_9658 = cljs.core.nth.call(null,vec__9638_9657,0,null);var v_9659 = cljs.core.nth.call(null,vec__9638_9657,1,null);(style[cljs.core.name.call(null,k_9658)] = v_9659);
{
var G__9660 = cljs.core.next.call(null,seq__9633_9651__$1);
var G__9661 = null;
var G__9662 = 0;
var G__9663 = 0;
seq__9633_9639 = G__9660;
chunk__9634_9640 = G__9661;
count__9635_9641 = G__9662;
i__9636_9642 = G__9663;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__9664){
var elem = cljs.core.first(arglist__9664);
var kvs = cljs.core.rest(arglist__9664);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9671_9677 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9672_9678 = null;var count__9673_9679 = 0;var i__9674_9680 = 0;while(true){
if((i__9674_9680 < count__9673_9679))
{var vec__9675_9681 = cljs.core._nth.call(null,chunk__9672_9678,i__9674_9680);var k_9682 = cljs.core.nth.call(null,vec__9675_9681,0,null);var v_9683 = cljs.core.nth.call(null,vec__9675_9681,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9682,[cljs.core.str(v_9683),cljs.core.str("px")].join(''));
{
var G__9684 = seq__9671_9677;
var G__9685 = chunk__9672_9678;
var G__9686 = count__9673_9679;
var G__9687 = (i__9674_9680 + 1);
seq__9671_9677 = G__9684;
chunk__9672_9678 = G__9685;
count__9673_9679 = G__9686;
i__9674_9680 = G__9687;
continue;
}
} else
{var temp__4092__auto___9688 = cljs.core.seq.call(null,seq__9671_9677);if(temp__4092__auto___9688)
{var seq__9671_9689__$1 = temp__4092__auto___9688;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9671_9689__$1))
{var c__4015__auto___9690 = cljs.core.chunk_first.call(null,seq__9671_9689__$1);{
var G__9691 = cljs.core.chunk_rest.call(null,seq__9671_9689__$1);
var G__9692 = c__4015__auto___9690;
var G__9693 = cljs.core.count.call(null,c__4015__auto___9690);
var G__9694 = 0;
seq__9671_9677 = G__9691;
chunk__9672_9678 = G__9692;
count__9673_9679 = G__9693;
i__9674_9680 = G__9694;
continue;
}
} else
{var vec__9676_9695 = cljs.core.first.call(null,seq__9671_9689__$1);var k_9696 = cljs.core.nth.call(null,vec__9676_9695,0,null);var v_9697 = cljs.core.nth.call(null,vec__9676_9695,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9696,[cljs.core.str(v_9697),cljs.core.str("px")].join(''));
{
var G__9698 = cljs.core.next.call(null,seq__9671_9689__$1);
var G__9699 = null;
var G__9700 = 0;
var G__9701 = 0;
seq__9671_9677 = G__9698;
chunk__9672_9678 = G__9699;
count__9673_9679 = G__9700;
i__9674_9680 = G__9701;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__9702){
var elem = cljs.core.first(arglist__9702);
var kvs = cljs.core.rest(arglist__9702);
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
{var G__9711 = dommy.template.__GT_node_like.call(null,elem);(G__9711[cljs.core.name.call(null,k)] = v);
return G__9711;
} else
{var G__9712 = dommy.template.__GT_node_like.call(null,elem);G__9712.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__9712;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__9719__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9713_9720 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__9714_9721 = null;var count__9715_9722 = 0;var i__9716_9723 = 0;while(true){
if((i__9716_9723 < count__9715_9722))
{var vec__9717_9724 = cljs.core._nth.call(null,chunk__9714_9721,i__9716_9723);var k_9725__$1 = cljs.core.nth.call(null,vec__9717_9724,0,null);var v_9726__$1 = cljs.core.nth.call(null,vec__9717_9724,1,null);set_attr_BANG_.call(null,elem__$1,k_9725__$1,v_9726__$1);
{
var G__9727 = seq__9713_9720;
var G__9728 = chunk__9714_9721;
var G__9729 = count__9715_9722;
var G__9730 = (i__9716_9723 + 1);
seq__9713_9720 = G__9727;
chunk__9714_9721 = G__9728;
count__9715_9722 = G__9729;
i__9716_9723 = G__9730;
continue;
}
} else
{var temp__4092__auto___9731 = cljs.core.seq.call(null,seq__9713_9720);if(temp__4092__auto___9731)
{var seq__9713_9732__$1 = temp__4092__auto___9731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9713_9732__$1))
{var c__4015__auto___9733 = cljs.core.chunk_first.call(null,seq__9713_9732__$1);{
var G__9734 = cljs.core.chunk_rest.call(null,seq__9713_9732__$1);
var G__9735 = c__4015__auto___9733;
var G__9736 = cljs.core.count.call(null,c__4015__auto___9733);
var G__9737 = 0;
seq__9713_9720 = G__9734;
chunk__9714_9721 = G__9735;
count__9715_9722 = G__9736;
i__9716_9723 = G__9737;
continue;
}
} else
{var vec__9718_9738 = cljs.core.first.call(null,seq__9713_9732__$1);var k_9739__$1 = cljs.core.nth.call(null,vec__9718_9738,0,null);var v_9740__$1 = cljs.core.nth.call(null,vec__9718_9738,1,null);set_attr_BANG_.call(null,elem__$1,k_9739__$1,v_9740__$1);
{
var G__9741 = cljs.core.next.call(null,seq__9713_9732__$1);
var G__9742 = null;
var G__9743 = 0;
var G__9744 = 0;
seq__9713_9720 = G__9741;
chunk__9714_9721 = G__9742;
count__9715_9722 = G__9743;
i__9716_9723 = G__9744;
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
var G__9719 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__9719__delegate.call(this,elem,k,v,kvs);};
G__9719.cljs$lang$maxFixedArity = 3;
G__9719.cljs$lang$applyTo = (function (arglist__9745){
var elem = cljs.core.first(arglist__9745);
arglist__9745 = cljs.core.next(arglist__9745);
var k = cljs.core.first(arglist__9745);
arglist__9745 = cljs.core.next(arglist__9745);
var v = cljs.core.first(arglist__9745);
var kvs = cljs.core.rest(arglist__9745);
return G__9719__delegate(elem,k,v,kvs);
});
G__9719.cljs$core$IFn$_invoke$arity$variadic = G__9719__delegate;
return G__9719;
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
var G__9754__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9750_9755 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__9751_9756 = null;var count__9752_9757 = 0;var i__9753_9758 = 0;while(true){
if((i__9753_9758 < count__9752_9757))
{var k_9759__$1 = cljs.core._nth.call(null,chunk__9751_9756,i__9753_9758);remove_attr_BANG_.call(null,elem__$1,k_9759__$1);
{
var G__9760 = seq__9750_9755;
var G__9761 = chunk__9751_9756;
var G__9762 = count__9752_9757;
var G__9763 = (i__9753_9758 + 1);
seq__9750_9755 = G__9760;
chunk__9751_9756 = G__9761;
count__9752_9757 = G__9762;
i__9753_9758 = G__9763;
continue;
}
} else
{var temp__4092__auto___9764 = cljs.core.seq.call(null,seq__9750_9755);if(temp__4092__auto___9764)
{var seq__9750_9765__$1 = temp__4092__auto___9764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9750_9765__$1))
{var c__4015__auto___9766 = cljs.core.chunk_first.call(null,seq__9750_9765__$1);{
var G__9767 = cljs.core.chunk_rest.call(null,seq__9750_9765__$1);
var G__9768 = c__4015__auto___9766;
var G__9769 = cljs.core.count.call(null,c__4015__auto___9766);
var G__9770 = 0;
seq__9750_9755 = G__9767;
chunk__9751_9756 = G__9768;
count__9752_9757 = G__9769;
i__9753_9758 = G__9770;
continue;
}
} else
{var k_9771__$1 = cljs.core.first.call(null,seq__9750_9765__$1);remove_attr_BANG_.call(null,elem__$1,k_9771__$1);
{
var G__9772 = cljs.core.next.call(null,seq__9750_9765__$1);
var G__9773 = null;
var G__9774 = 0;
var G__9775 = 0;
seq__9750_9755 = G__9772;
chunk__9751_9756 = G__9773;
count__9752_9757 = G__9774;
i__9753_9758 = G__9775;
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
var G__9754 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9754__delegate.call(this,elem,k,ks);};
G__9754.cljs$lang$maxFixedArity = 2;
G__9754.cljs$lang$applyTo = (function (arglist__9776){
var elem = cljs.core.first(arglist__9776);
arglist__9776 = cljs.core.next(arglist__9776);
var k = cljs.core.first(arglist__9776);
var ks = cljs.core.rest(arglist__9776);
return G__9754__delegate(elem,k,ks);
});
G__9754.cljs$core$IFn$_invoke$arity$variadic = G__9754__delegate;
return G__9754;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__9778 = dommy.template.__GT_node_like.call(null,elem);G__9778.style.display = ((show_QMARK_)?"":"none");
return G__9778;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__9780 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9780,false);
return G__9780;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__9782 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9782,true);
return G__9782;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__9784 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__9784["constructor"] = Object);
return G__9784;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
