// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__4753__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__4753__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__4753__auto__;
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
var G__23649 = (i + class$.length);
start_from = G__23649;
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
{var temp__4090__auto___23674 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___23674))
{var class_list_23675 = temp__4090__auto___23674;var seq__23662_23676 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__23663_23677 = null;var count__23664_23678 = 0;var i__23665_23679 = 0;while(true){
if((i__23665_23679 < count__23664_23678))
{var class_23680 = cljs.core._nth.call(null,chunk__23663_23677,i__23665_23679);class_list_23675.add(class_23680);
{
var G__23681 = seq__23662_23676;
var G__23682 = chunk__23663_23677;
var G__23683 = count__23664_23678;
var G__23684 = (i__23665_23679 + 1);
seq__23662_23676 = G__23681;
chunk__23663_23677 = G__23682;
count__23664_23678 = G__23683;
i__23665_23679 = G__23684;
continue;
}
} else
{var temp__4092__auto___23685 = cljs.core.seq.call(null,seq__23662_23676);if(temp__4092__auto___23685)
{var seq__23662_23686__$1 = temp__4092__auto___23685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23662_23686__$1))
{var c__5489__auto___23687 = cljs.core.chunk_first.call(null,seq__23662_23686__$1);{
var G__23688 = cljs.core.chunk_rest.call(null,seq__23662_23686__$1);
var G__23689 = c__5489__auto___23687;
var G__23690 = cljs.core.count.call(null,c__5489__auto___23687);
var G__23691 = 0;
seq__23662_23676 = G__23688;
chunk__23663_23677 = G__23689;
count__23664_23678 = G__23690;
i__23665_23679 = G__23691;
continue;
}
} else
{var class_23692 = cljs.core.first.call(null,seq__23662_23686__$1);class_list_23675.add(class_23692);
{
var G__23693 = cljs.core.next.call(null,seq__23662_23686__$1);
var G__23694 = null;
var G__23695 = 0;
var G__23696 = 0;
seq__23662_23676 = G__23693;
chunk__23663_23677 = G__23694;
count__23664_23678 = G__23695;
i__23665_23679 = G__23696;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_23697 = elem__$1.className;var seq__23666_23698 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__23667_23699 = null;var count__23668_23700 = 0;var i__23669_23701 = 0;while(true){
if((i__23669_23701 < count__23668_23700))
{var class_23702 = cljs.core._nth.call(null,chunk__23667_23699,i__23669_23701);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_23697,class_23702)))
{} else
{elem__$1.className = (((class_name_23697 === ""))?class_23702:[cljs.core.str(class_name_23697),cljs.core.str(" "),cljs.core.str(class_23702)].join(''));
}
{
var G__23703 = seq__23666_23698;
var G__23704 = chunk__23667_23699;
var G__23705 = count__23668_23700;
var G__23706 = (i__23669_23701 + 1);
seq__23666_23698 = G__23703;
chunk__23667_23699 = G__23704;
count__23668_23700 = G__23705;
i__23669_23701 = G__23706;
continue;
}
} else
{var temp__4092__auto___23707 = cljs.core.seq.call(null,seq__23666_23698);if(temp__4092__auto___23707)
{var seq__23666_23708__$1 = temp__4092__auto___23707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23666_23708__$1))
{var c__5489__auto___23709 = cljs.core.chunk_first.call(null,seq__23666_23708__$1);{
var G__23710 = cljs.core.chunk_rest.call(null,seq__23666_23708__$1);
var G__23711 = c__5489__auto___23709;
var G__23712 = cljs.core.count.call(null,c__5489__auto___23709);
var G__23713 = 0;
seq__23666_23698 = G__23710;
chunk__23667_23699 = G__23711;
count__23668_23700 = G__23712;
i__23669_23701 = G__23713;
continue;
}
} else
{var class_23714 = cljs.core.first.call(null,seq__23666_23708__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_23697,class_23714)))
{} else
{elem__$1.className = (((class_name_23697 === ""))?class_23714:[cljs.core.str(class_name_23697),cljs.core.str(" "),cljs.core.str(class_23714)].join(''));
}
{
var G__23715 = cljs.core.next.call(null,seq__23666_23708__$1);
var G__23716 = null;
var G__23717 = 0;
var G__23718 = 0;
seq__23666_23698 = G__23715;
chunk__23667_23699 = G__23716;
count__23668_23700 = G__23717;
i__23669_23701 = G__23718;
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
var G__23719__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__23670_23720 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__23671_23721 = null;var count__23672_23722 = 0;var i__23673_23723 = 0;while(true){
if((i__23673_23723 < count__23672_23722))
{var c_23724 = cljs.core._nth.call(null,chunk__23671_23721,i__23673_23723);add_class_BANG_.call(null,elem__$1,c_23724);
{
var G__23725 = seq__23670_23720;
var G__23726 = chunk__23671_23721;
var G__23727 = count__23672_23722;
var G__23728 = (i__23673_23723 + 1);
seq__23670_23720 = G__23725;
chunk__23671_23721 = G__23726;
count__23672_23722 = G__23727;
i__23673_23723 = G__23728;
continue;
}
} else
{var temp__4092__auto___23729 = cljs.core.seq.call(null,seq__23670_23720);if(temp__4092__auto___23729)
{var seq__23670_23730__$1 = temp__4092__auto___23729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23670_23730__$1))
{var c__5489__auto___23731 = cljs.core.chunk_first.call(null,seq__23670_23730__$1);{
var G__23732 = cljs.core.chunk_rest.call(null,seq__23670_23730__$1);
var G__23733 = c__5489__auto___23731;
var G__23734 = cljs.core.count.call(null,c__5489__auto___23731);
var G__23735 = 0;
seq__23670_23720 = G__23732;
chunk__23671_23721 = G__23733;
count__23672_23722 = G__23734;
i__23673_23723 = G__23735;
continue;
}
} else
{var c_23736 = cljs.core.first.call(null,seq__23670_23730__$1);add_class_BANG_.call(null,elem__$1,c_23736);
{
var G__23737 = cljs.core.next.call(null,seq__23670_23730__$1);
var G__23738 = null;
var G__23739 = 0;
var G__23740 = 0;
seq__23670_23720 = G__23737;
chunk__23671_23721 = G__23738;
count__23672_23722 = G__23739;
i__23673_23723 = G__23740;
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
var G__23719 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23719__delegate.call(this,elem,classes,more_classes);};
G__23719.cljs$lang$maxFixedArity = 2;
G__23719.cljs$lang$applyTo = (function (arglist__23741){
var elem = cljs.core.first(arglist__23741);
arglist__23741 = cljs.core.next(arglist__23741);
var classes = cljs.core.first(arglist__23741);
var more_classes = cljs.core.rest(arglist__23741);
return G__23719__delegate(elem,classes,more_classes);
});
G__23719.cljs$core$IFn$_invoke$arity$variadic = G__23719__delegate;
return G__23719;
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
var G__23742 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__23742;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___23751 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___23751))
{var class_list_23752 = temp__4090__auto___23751;class_list_23752.remove(class$__$1);
} else
{var class_name_23753 = elem__$1.className;var new_class_name_23754 = dommy.attrs.remove_class_str.call(null,class_name_23753,class$__$1);if((class_name_23753 === new_class_name_23754))
{} else
{elem__$1.className = new_class_name_23754;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__23755__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__23747 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__23748 = null;var count__23749 = 0;var i__23750 = 0;while(true){
if((i__23750 < count__23749))
{var c = cljs.core._nth.call(null,chunk__23748,i__23750);remove_class_BANG_.call(null,elem__$1,c);
{
var G__23756 = seq__23747;
var G__23757 = chunk__23748;
var G__23758 = count__23749;
var G__23759 = (i__23750 + 1);
seq__23747 = G__23756;
chunk__23748 = G__23757;
count__23749 = G__23758;
i__23750 = G__23759;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__23747);if(temp__4092__auto__)
{var seq__23747__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23747__$1))
{var c__5489__auto__ = cljs.core.chunk_first.call(null,seq__23747__$1);{
var G__23760 = cljs.core.chunk_rest.call(null,seq__23747__$1);
var G__23761 = c__5489__auto__;
var G__23762 = cljs.core.count.call(null,c__5489__auto__);
var G__23763 = 0;
seq__23747 = G__23760;
chunk__23748 = G__23761;
count__23749 = G__23762;
i__23750 = G__23763;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__23747__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__23764 = cljs.core.next.call(null,seq__23747__$1);
var G__23765 = null;
var G__23766 = 0;
var G__23767 = 0;
seq__23747 = G__23764;
chunk__23748 = G__23765;
count__23749 = G__23766;
i__23750 = G__23767;
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
var G__23755 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23755__delegate.call(this,elem,class$,classes);};
G__23755.cljs$lang$maxFixedArity = 2;
G__23755.cljs$lang$applyTo = (function (arglist__23768){
var elem = cljs.core.first(arglist__23768);
arglist__23768 = cljs.core.next(arglist__23768);
var class$ = cljs.core.first(arglist__23768);
var classes = cljs.core.rest(arglist__23768);
return G__23755__delegate(elem,class$,classes);
});
G__23755.cljs$core$IFn$_invoke$arity$variadic = G__23755__delegate;
return G__23755;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___23769 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___23769))
{var class_list_23770 = temp__4090__auto___23769;class_list_23770.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__23773){var vec__23774 = p__23773;var k = cljs.core.nth.call(null,vec__23774,0,null);var v = cljs.core.nth.call(null,vec__23774,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__23781_23787 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__23782_23788 = null;var count__23783_23789 = 0;var i__23784_23790 = 0;while(true){
if((i__23784_23790 < count__23783_23789))
{var vec__23785_23791 = cljs.core._nth.call(null,chunk__23782_23788,i__23784_23790);var k_23792 = cljs.core.nth.call(null,vec__23785_23791,0,null);var v_23793 = cljs.core.nth.call(null,vec__23785_23791,1,null);(style[cljs.core.name.call(null,k_23792)] = v_23793);
{
var G__23794 = seq__23781_23787;
var G__23795 = chunk__23782_23788;
var G__23796 = count__23783_23789;
var G__23797 = (i__23784_23790 + 1);
seq__23781_23787 = G__23794;
chunk__23782_23788 = G__23795;
count__23783_23789 = G__23796;
i__23784_23790 = G__23797;
continue;
}
} else
{var temp__4092__auto___23798 = cljs.core.seq.call(null,seq__23781_23787);if(temp__4092__auto___23798)
{var seq__23781_23799__$1 = temp__4092__auto___23798;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23781_23799__$1))
{var c__5489__auto___23800 = cljs.core.chunk_first.call(null,seq__23781_23799__$1);{
var G__23801 = cljs.core.chunk_rest.call(null,seq__23781_23799__$1);
var G__23802 = c__5489__auto___23800;
var G__23803 = cljs.core.count.call(null,c__5489__auto___23800);
var G__23804 = 0;
seq__23781_23787 = G__23801;
chunk__23782_23788 = G__23802;
count__23783_23789 = G__23803;
i__23784_23790 = G__23804;
continue;
}
} else
{var vec__23786_23805 = cljs.core.first.call(null,seq__23781_23799__$1);var k_23806 = cljs.core.nth.call(null,vec__23786_23805,0,null);var v_23807 = cljs.core.nth.call(null,vec__23786_23805,1,null);(style[cljs.core.name.call(null,k_23806)] = v_23807);
{
var G__23808 = cljs.core.next.call(null,seq__23781_23799__$1);
var G__23809 = null;
var G__23810 = 0;
var G__23811 = 0;
seq__23781_23787 = G__23808;
chunk__23782_23788 = G__23809;
count__23783_23789 = G__23810;
i__23784_23790 = G__23811;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__23812){
var elem = cljs.core.first(arglist__23812);
var kvs = cljs.core.rest(arglist__23812);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__23819_23825 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__23820_23826 = null;var count__23821_23827 = 0;var i__23822_23828 = 0;while(true){
if((i__23822_23828 < count__23821_23827))
{var vec__23823_23829 = cljs.core._nth.call(null,chunk__23820_23826,i__23822_23828);var k_23830 = cljs.core.nth.call(null,vec__23823_23829,0,null);var v_23831 = cljs.core.nth.call(null,vec__23823_23829,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_23830,[cljs.core.str(v_23831),cljs.core.str("px")].join(''));
{
var G__23832 = seq__23819_23825;
var G__23833 = chunk__23820_23826;
var G__23834 = count__23821_23827;
var G__23835 = (i__23822_23828 + 1);
seq__23819_23825 = G__23832;
chunk__23820_23826 = G__23833;
count__23821_23827 = G__23834;
i__23822_23828 = G__23835;
continue;
}
} else
{var temp__4092__auto___23836 = cljs.core.seq.call(null,seq__23819_23825);if(temp__4092__auto___23836)
{var seq__23819_23837__$1 = temp__4092__auto___23836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23819_23837__$1))
{var c__5489__auto___23838 = cljs.core.chunk_first.call(null,seq__23819_23837__$1);{
var G__23839 = cljs.core.chunk_rest.call(null,seq__23819_23837__$1);
var G__23840 = c__5489__auto___23838;
var G__23841 = cljs.core.count.call(null,c__5489__auto___23838);
var G__23842 = 0;
seq__23819_23825 = G__23839;
chunk__23820_23826 = G__23840;
count__23821_23827 = G__23841;
i__23822_23828 = G__23842;
continue;
}
} else
{var vec__23824_23843 = cljs.core.first.call(null,seq__23819_23837__$1);var k_23844 = cljs.core.nth.call(null,vec__23824_23843,0,null);var v_23845 = cljs.core.nth.call(null,vec__23824_23843,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_23844,[cljs.core.str(v_23845),cljs.core.str("px")].join(''));
{
var G__23846 = cljs.core.next.call(null,seq__23819_23837__$1);
var G__23847 = null;
var G__23848 = 0;
var G__23849 = 0;
seq__23819_23825 = G__23846;
chunk__23820_23826 = G__23847;
count__23821_23827 = G__23848;
i__23822_23828 = G__23849;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__23850){
var elem = cljs.core.first(arglist__23850);
var kvs = cljs.core.rest(arglist__23850);
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
{var G__23859 = dommy.template.__GT_node_like.call(null,elem);(G__23859[cljs.core.name.call(null,k)] = v);
return G__23859;
} else
{var G__23860 = dommy.template.__GT_node_like.call(null,elem);G__23860.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__23860;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__23867__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__23861_23868 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__23862_23869 = null;var count__23863_23870 = 0;var i__23864_23871 = 0;while(true){
if((i__23864_23871 < count__23863_23870))
{var vec__23865_23872 = cljs.core._nth.call(null,chunk__23862_23869,i__23864_23871);var k_23873__$1 = cljs.core.nth.call(null,vec__23865_23872,0,null);var v_23874__$1 = cljs.core.nth.call(null,vec__23865_23872,1,null);set_attr_BANG_.call(null,elem__$1,k_23873__$1,v_23874__$1);
{
var G__23875 = seq__23861_23868;
var G__23876 = chunk__23862_23869;
var G__23877 = count__23863_23870;
var G__23878 = (i__23864_23871 + 1);
seq__23861_23868 = G__23875;
chunk__23862_23869 = G__23876;
count__23863_23870 = G__23877;
i__23864_23871 = G__23878;
continue;
}
} else
{var temp__4092__auto___23879 = cljs.core.seq.call(null,seq__23861_23868);if(temp__4092__auto___23879)
{var seq__23861_23880__$1 = temp__4092__auto___23879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23861_23880__$1))
{var c__5489__auto___23881 = cljs.core.chunk_first.call(null,seq__23861_23880__$1);{
var G__23882 = cljs.core.chunk_rest.call(null,seq__23861_23880__$1);
var G__23883 = c__5489__auto___23881;
var G__23884 = cljs.core.count.call(null,c__5489__auto___23881);
var G__23885 = 0;
seq__23861_23868 = G__23882;
chunk__23862_23869 = G__23883;
count__23863_23870 = G__23884;
i__23864_23871 = G__23885;
continue;
}
} else
{var vec__23866_23886 = cljs.core.first.call(null,seq__23861_23880__$1);var k_23887__$1 = cljs.core.nth.call(null,vec__23866_23886,0,null);var v_23888__$1 = cljs.core.nth.call(null,vec__23866_23886,1,null);set_attr_BANG_.call(null,elem__$1,k_23887__$1,v_23888__$1);
{
var G__23889 = cljs.core.next.call(null,seq__23861_23880__$1);
var G__23890 = null;
var G__23891 = 0;
var G__23892 = 0;
seq__23861_23868 = G__23889;
chunk__23862_23869 = G__23890;
count__23863_23870 = G__23891;
i__23864_23871 = G__23892;
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
var G__23867 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23867__delegate.call(this,elem,k,v,kvs);};
G__23867.cljs$lang$maxFixedArity = 3;
G__23867.cljs$lang$applyTo = (function (arglist__23893){
var elem = cljs.core.first(arglist__23893);
arglist__23893 = cljs.core.next(arglist__23893);
var k = cljs.core.first(arglist__23893);
arglist__23893 = cljs.core.next(arglist__23893);
var v = cljs.core.first(arglist__23893);
var kvs = cljs.core.rest(arglist__23893);
return G__23867__delegate(elem,k,v,kvs);
});
G__23867.cljs$core$IFn$_invoke$arity$variadic = G__23867__delegate;
return G__23867;
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
var G__23902__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__23898_23903 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__23899_23904 = null;var count__23900_23905 = 0;var i__23901_23906 = 0;while(true){
if((i__23901_23906 < count__23900_23905))
{var k_23907__$1 = cljs.core._nth.call(null,chunk__23899_23904,i__23901_23906);remove_attr_BANG_.call(null,elem__$1,k_23907__$1);
{
var G__23908 = seq__23898_23903;
var G__23909 = chunk__23899_23904;
var G__23910 = count__23900_23905;
var G__23911 = (i__23901_23906 + 1);
seq__23898_23903 = G__23908;
chunk__23899_23904 = G__23909;
count__23900_23905 = G__23910;
i__23901_23906 = G__23911;
continue;
}
} else
{var temp__4092__auto___23912 = cljs.core.seq.call(null,seq__23898_23903);if(temp__4092__auto___23912)
{var seq__23898_23913__$1 = temp__4092__auto___23912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23898_23913__$1))
{var c__5489__auto___23914 = cljs.core.chunk_first.call(null,seq__23898_23913__$1);{
var G__23915 = cljs.core.chunk_rest.call(null,seq__23898_23913__$1);
var G__23916 = c__5489__auto___23914;
var G__23917 = cljs.core.count.call(null,c__5489__auto___23914);
var G__23918 = 0;
seq__23898_23903 = G__23915;
chunk__23899_23904 = G__23916;
count__23900_23905 = G__23917;
i__23901_23906 = G__23918;
continue;
}
} else
{var k_23919__$1 = cljs.core.first.call(null,seq__23898_23913__$1);remove_attr_BANG_.call(null,elem__$1,k_23919__$1);
{
var G__23920 = cljs.core.next.call(null,seq__23898_23913__$1);
var G__23921 = null;
var G__23922 = 0;
var G__23923 = 0;
seq__23898_23903 = G__23920;
chunk__23899_23904 = G__23921;
count__23900_23905 = G__23922;
i__23901_23906 = G__23923;
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
var G__23902 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23902__delegate.call(this,elem,k,ks);};
G__23902.cljs$lang$maxFixedArity = 2;
G__23902.cljs$lang$applyTo = (function (arglist__23924){
var elem = cljs.core.first(arglist__23924);
arglist__23924 = cljs.core.next(arglist__23924);
var k = cljs.core.first(arglist__23924);
var ks = cljs.core.rest(arglist__23924);
return G__23902__delegate(elem,k,ks);
});
G__23902.cljs$core$IFn$_invoke$arity$variadic = G__23902__delegate;
return G__23902;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__23926 = dommy.template.__GT_node_like.call(null,elem);G__23926.style.display = ((show_QMARK_)?"":"none");
return G__23926;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__23928 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__23928,false);
return G__23928;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__23930 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__23930,true);
return G__23930;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__23932 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__23932["constructor"] = Object);
return G__23932;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
