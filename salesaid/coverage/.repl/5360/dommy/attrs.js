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
var G__19630 = (i + class$.length);
start_from = G__19630;
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
{var temp__4090__auto___19655 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___19655))
{var class_list_19656 = temp__4090__auto___19655;var seq__19643_19657 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__19644_19658 = null;var count__19645_19659 = 0;var i__19646_19660 = 0;while(true){
if((i__19646_19660 < count__19645_19659))
{var class_19661 = cljs.core._nth.call(null,chunk__19644_19658,i__19646_19660);class_list_19656.add(class_19661);
{
var G__19662 = seq__19643_19657;
var G__19663 = chunk__19644_19658;
var G__19664 = count__19645_19659;
var G__19665 = (i__19646_19660 + 1);
seq__19643_19657 = G__19662;
chunk__19644_19658 = G__19663;
count__19645_19659 = G__19664;
i__19646_19660 = G__19665;
continue;
}
} else
{var temp__4092__auto___19666 = cljs.core.seq.call(null,seq__19643_19657);if(temp__4092__auto___19666)
{var seq__19643_19667__$1 = temp__4092__auto___19666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19643_19667__$1))
{var c__5489__auto___19668 = cljs.core.chunk_first.call(null,seq__19643_19667__$1);{
var G__19669 = cljs.core.chunk_rest.call(null,seq__19643_19667__$1);
var G__19670 = c__5489__auto___19668;
var G__19671 = cljs.core.count.call(null,c__5489__auto___19668);
var G__19672 = 0;
seq__19643_19657 = G__19669;
chunk__19644_19658 = G__19670;
count__19645_19659 = G__19671;
i__19646_19660 = G__19672;
continue;
}
} else
{var class_19673 = cljs.core.first.call(null,seq__19643_19667__$1);class_list_19656.add(class_19673);
{
var G__19674 = cljs.core.next.call(null,seq__19643_19667__$1);
var G__19675 = null;
var G__19676 = 0;
var G__19677 = 0;
seq__19643_19657 = G__19674;
chunk__19644_19658 = G__19675;
count__19645_19659 = G__19676;
i__19646_19660 = G__19677;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_19678 = elem__$1.className;var seq__19647_19679 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__19648_19680 = null;var count__19649_19681 = 0;var i__19650_19682 = 0;while(true){
if((i__19650_19682 < count__19649_19681))
{var class_19683 = cljs.core._nth.call(null,chunk__19648_19680,i__19650_19682);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_19678,class_19683)))
{} else
{elem__$1.className = (((class_name_19678 === ""))?class_19683:[cljs.core.str(class_name_19678),cljs.core.str(" "),cljs.core.str(class_19683)].join(''));
}
{
var G__19684 = seq__19647_19679;
var G__19685 = chunk__19648_19680;
var G__19686 = count__19649_19681;
var G__19687 = (i__19650_19682 + 1);
seq__19647_19679 = G__19684;
chunk__19648_19680 = G__19685;
count__19649_19681 = G__19686;
i__19650_19682 = G__19687;
continue;
}
} else
{var temp__4092__auto___19688 = cljs.core.seq.call(null,seq__19647_19679);if(temp__4092__auto___19688)
{var seq__19647_19689__$1 = temp__4092__auto___19688;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19647_19689__$1))
{var c__5489__auto___19690 = cljs.core.chunk_first.call(null,seq__19647_19689__$1);{
var G__19691 = cljs.core.chunk_rest.call(null,seq__19647_19689__$1);
var G__19692 = c__5489__auto___19690;
var G__19693 = cljs.core.count.call(null,c__5489__auto___19690);
var G__19694 = 0;
seq__19647_19679 = G__19691;
chunk__19648_19680 = G__19692;
count__19649_19681 = G__19693;
i__19650_19682 = G__19694;
continue;
}
} else
{var class_19695 = cljs.core.first.call(null,seq__19647_19689__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_19678,class_19695)))
{} else
{elem__$1.className = (((class_name_19678 === ""))?class_19695:[cljs.core.str(class_name_19678),cljs.core.str(" "),cljs.core.str(class_19695)].join(''));
}
{
var G__19696 = cljs.core.next.call(null,seq__19647_19689__$1);
var G__19697 = null;
var G__19698 = 0;
var G__19699 = 0;
seq__19647_19679 = G__19696;
chunk__19648_19680 = G__19697;
count__19649_19681 = G__19698;
i__19650_19682 = G__19699;
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
var G__19700__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__19651_19701 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__19652_19702 = null;var count__19653_19703 = 0;var i__19654_19704 = 0;while(true){
if((i__19654_19704 < count__19653_19703))
{var c_19705 = cljs.core._nth.call(null,chunk__19652_19702,i__19654_19704);add_class_BANG_.call(null,elem__$1,c_19705);
{
var G__19706 = seq__19651_19701;
var G__19707 = chunk__19652_19702;
var G__19708 = count__19653_19703;
var G__19709 = (i__19654_19704 + 1);
seq__19651_19701 = G__19706;
chunk__19652_19702 = G__19707;
count__19653_19703 = G__19708;
i__19654_19704 = G__19709;
continue;
}
} else
{var temp__4092__auto___19710 = cljs.core.seq.call(null,seq__19651_19701);if(temp__4092__auto___19710)
{var seq__19651_19711__$1 = temp__4092__auto___19710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19651_19711__$1))
{var c__5489__auto___19712 = cljs.core.chunk_first.call(null,seq__19651_19711__$1);{
var G__19713 = cljs.core.chunk_rest.call(null,seq__19651_19711__$1);
var G__19714 = c__5489__auto___19712;
var G__19715 = cljs.core.count.call(null,c__5489__auto___19712);
var G__19716 = 0;
seq__19651_19701 = G__19713;
chunk__19652_19702 = G__19714;
count__19653_19703 = G__19715;
i__19654_19704 = G__19716;
continue;
}
} else
{var c_19717 = cljs.core.first.call(null,seq__19651_19711__$1);add_class_BANG_.call(null,elem__$1,c_19717);
{
var G__19718 = cljs.core.next.call(null,seq__19651_19711__$1);
var G__19719 = null;
var G__19720 = 0;
var G__19721 = 0;
seq__19651_19701 = G__19718;
chunk__19652_19702 = G__19719;
count__19653_19703 = G__19720;
i__19654_19704 = G__19721;
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
var G__19700 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19700__delegate.call(this,elem,classes,more_classes);};
G__19700.cljs$lang$maxFixedArity = 2;
G__19700.cljs$lang$applyTo = (function (arglist__19722){
var elem = cljs.core.first(arglist__19722);
arglist__19722 = cljs.core.next(arglist__19722);
var classes = cljs.core.first(arglist__19722);
var more_classes = cljs.core.rest(arglist__19722);
return G__19700__delegate(elem,classes,more_classes);
});
G__19700.cljs$core$IFn$_invoke$arity$variadic = G__19700__delegate;
return G__19700;
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
var G__19723 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__19723;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___19732 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___19732))
{var class_list_19733 = temp__4090__auto___19732;class_list_19733.remove(class$__$1);
} else
{var class_name_19734 = elem__$1.className;var new_class_name_19735 = dommy.attrs.remove_class_str.call(null,class_name_19734,class$__$1);if((class_name_19734 === new_class_name_19735))
{} else
{elem__$1.className = new_class_name_19735;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__19736__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__19728 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__19729 = null;var count__19730 = 0;var i__19731 = 0;while(true){
if((i__19731 < count__19730))
{var c = cljs.core._nth.call(null,chunk__19729,i__19731);remove_class_BANG_.call(null,elem__$1,c);
{
var G__19737 = seq__19728;
var G__19738 = chunk__19729;
var G__19739 = count__19730;
var G__19740 = (i__19731 + 1);
seq__19728 = G__19737;
chunk__19729 = G__19738;
count__19730 = G__19739;
i__19731 = G__19740;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19728);if(temp__4092__auto__)
{var seq__19728__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19728__$1))
{var c__5489__auto__ = cljs.core.chunk_first.call(null,seq__19728__$1);{
var G__19741 = cljs.core.chunk_rest.call(null,seq__19728__$1);
var G__19742 = c__5489__auto__;
var G__19743 = cljs.core.count.call(null,c__5489__auto__);
var G__19744 = 0;
seq__19728 = G__19741;
chunk__19729 = G__19742;
count__19730 = G__19743;
i__19731 = G__19744;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__19728__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__19745 = cljs.core.next.call(null,seq__19728__$1);
var G__19746 = null;
var G__19747 = 0;
var G__19748 = 0;
seq__19728 = G__19745;
chunk__19729 = G__19746;
count__19730 = G__19747;
i__19731 = G__19748;
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
var G__19736 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19736__delegate.call(this,elem,class$,classes);};
G__19736.cljs$lang$maxFixedArity = 2;
G__19736.cljs$lang$applyTo = (function (arglist__19749){
var elem = cljs.core.first(arglist__19749);
arglist__19749 = cljs.core.next(arglist__19749);
var class$ = cljs.core.first(arglist__19749);
var classes = cljs.core.rest(arglist__19749);
return G__19736__delegate(elem,class$,classes);
});
G__19736.cljs$core$IFn$_invoke$arity$variadic = G__19736__delegate;
return G__19736;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___19750 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___19750))
{var class_list_19751 = temp__4090__auto___19750;class_list_19751.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__19754){var vec__19755 = p__19754;var k = cljs.core.nth.call(null,vec__19755,0,null);var v = cljs.core.nth.call(null,vec__19755,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__19762_19768 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__19763_19769 = null;var count__19764_19770 = 0;var i__19765_19771 = 0;while(true){
if((i__19765_19771 < count__19764_19770))
{var vec__19766_19772 = cljs.core._nth.call(null,chunk__19763_19769,i__19765_19771);var k_19773 = cljs.core.nth.call(null,vec__19766_19772,0,null);var v_19774 = cljs.core.nth.call(null,vec__19766_19772,1,null);(style[cljs.core.name.call(null,k_19773)] = v_19774);
{
var G__19775 = seq__19762_19768;
var G__19776 = chunk__19763_19769;
var G__19777 = count__19764_19770;
var G__19778 = (i__19765_19771 + 1);
seq__19762_19768 = G__19775;
chunk__19763_19769 = G__19776;
count__19764_19770 = G__19777;
i__19765_19771 = G__19778;
continue;
}
} else
{var temp__4092__auto___19779 = cljs.core.seq.call(null,seq__19762_19768);if(temp__4092__auto___19779)
{var seq__19762_19780__$1 = temp__4092__auto___19779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19762_19780__$1))
{var c__5489__auto___19781 = cljs.core.chunk_first.call(null,seq__19762_19780__$1);{
var G__19782 = cljs.core.chunk_rest.call(null,seq__19762_19780__$1);
var G__19783 = c__5489__auto___19781;
var G__19784 = cljs.core.count.call(null,c__5489__auto___19781);
var G__19785 = 0;
seq__19762_19768 = G__19782;
chunk__19763_19769 = G__19783;
count__19764_19770 = G__19784;
i__19765_19771 = G__19785;
continue;
}
} else
{var vec__19767_19786 = cljs.core.first.call(null,seq__19762_19780__$1);var k_19787 = cljs.core.nth.call(null,vec__19767_19786,0,null);var v_19788 = cljs.core.nth.call(null,vec__19767_19786,1,null);(style[cljs.core.name.call(null,k_19787)] = v_19788);
{
var G__19789 = cljs.core.next.call(null,seq__19762_19780__$1);
var G__19790 = null;
var G__19791 = 0;
var G__19792 = 0;
seq__19762_19768 = G__19789;
chunk__19763_19769 = G__19790;
count__19764_19770 = G__19791;
i__19765_19771 = G__19792;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19793){
var elem = cljs.core.first(arglist__19793);
var kvs = cljs.core.rest(arglist__19793);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__19800_19806 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__19801_19807 = null;var count__19802_19808 = 0;var i__19803_19809 = 0;while(true){
if((i__19803_19809 < count__19802_19808))
{var vec__19804_19810 = cljs.core._nth.call(null,chunk__19801_19807,i__19803_19809);var k_19811 = cljs.core.nth.call(null,vec__19804_19810,0,null);var v_19812 = cljs.core.nth.call(null,vec__19804_19810,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_19811,[cljs.core.str(v_19812),cljs.core.str("px")].join(''));
{
var G__19813 = seq__19800_19806;
var G__19814 = chunk__19801_19807;
var G__19815 = count__19802_19808;
var G__19816 = (i__19803_19809 + 1);
seq__19800_19806 = G__19813;
chunk__19801_19807 = G__19814;
count__19802_19808 = G__19815;
i__19803_19809 = G__19816;
continue;
}
} else
{var temp__4092__auto___19817 = cljs.core.seq.call(null,seq__19800_19806);if(temp__4092__auto___19817)
{var seq__19800_19818__$1 = temp__4092__auto___19817;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19800_19818__$1))
{var c__5489__auto___19819 = cljs.core.chunk_first.call(null,seq__19800_19818__$1);{
var G__19820 = cljs.core.chunk_rest.call(null,seq__19800_19818__$1);
var G__19821 = c__5489__auto___19819;
var G__19822 = cljs.core.count.call(null,c__5489__auto___19819);
var G__19823 = 0;
seq__19800_19806 = G__19820;
chunk__19801_19807 = G__19821;
count__19802_19808 = G__19822;
i__19803_19809 = G__19823;
continue;
}
} else
{var vec__19805_19824 = cljs.core.first.call(null,seq__19800_19818__$1);var k_19825 = cljs.core.nth.call(null,vec__19805_19824,0,null);var v_19826 = cljs.core.nth.call(null,vec__19805_19824,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_19825,[cljs.core.str(v_19826),cljs.core.str("px")].join(''));
{
var G__19827 = cljs.core.next.call(null,seq__19800_19818__$1);
var G__19828 = null;
var G__19829 = 0;
var G__19830 = 0;
seq__19800_19806 = G__19827;
chunk__19801_19807 = G__19828;
count__19802_19808 = G__19829;
i__19803_19809 = G__19830;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__19831){
var elem = cljs.core.first(arglist__19831);
var kvs = cljs.core.rest(arglist__19831);
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
{var G__19840 = dommy.template.__GT_node_like.call(null,elem);(G__19840[cljs.core.name.call(null,k)] = v);
return G__19840;
} else
{var G__19841 = dommy.template.__GT_node_like.call(null,elem);G__19841.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__19841;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__19848__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__19842_19849 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__19843_19850 = null;var count__19844_19851 = 0;var i__19845_19852 = 0;while(true){
if((i__19845_19852 < count__19844_19851))
{var vec__19846_19853 = cljs.core._nth.call(null,chunk__19843_19850,i__19845_19852);var k_19854__$1 = cljs.core.nth.call(null,vec__19846_19853,0,null);var v_19855__$1 = cljs.core.nth.call(null,vec__19846_19853,1,null);set_attr_BANG_.call(null,elem__$1,k_19854__$1,v_19855__$1);
{
var G__19856 = seq__19842_19849;
var G__19857 = chunk__19843_19850;
var G__19858 = count__19844_19851;
var G__19859 = (i__19845_19852 + 1);
seq__19842_19849 = G__19856;
chunk__19843_19850 = G__19857;
count__19844_19851 = G__19858;
i__19845_19852 = G__19859;
continue;
}
} else
{var temp__4092__auto___19860 = cljs.core.seq.call(null,seq__19842_19849);if(temp__4092__auto___19860)
{var seq__19842_19861__$1 = temp__4092__auto___19860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19842_19861__$1))
{var c__5489__auto___19862 = cljs.core.chunk_first.call(null,seq__19842_19861__$1);{
var G__19863 = cljs.core.chunk_rest.call(null,seq__19842_19861__$1);
var G__19864 = c__5489__auto___19862;
var G__19865 = cljs.core.count.call(null,c__5489__auto___19862);
var G__19866 = 0;
seq__19842_19849 = G__19863;
chunk__19843_19850 = G__19864;
count__19844_19851 = G__19865;
i__19845_19852 = G__19866;
continue;
}
} else
{var vec__19847_19867 = cljs.core.first.call(null,seq__19842_19861__$1);var k_19868__$1 = cljs.core.nth.call(null,vec__19847_19867,0,null);var v_19869__$1 = cljs.core.nth.call(null,vec__19847_19867,1,null);set_attr_BANG_.call(null,elem__$1,k_19868__$1,v_19869__$1);
{
var G__19870 = cljs.core.next.call(null,seq__19842_19861__$1);
var G__19871 = null;
var G__19872 = 0;
var G__19873 = 0;
seq__19842_19849 = G__19870;
chunk__19843_19850 = G__19871;
count__19844_19851 = G__19872;
i__19845_19852 = G__19873;
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
var G__19848 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19848__delegate.call(this,elem,k,v,kvs);};
G__19848.cljs$lang$maxFixedArity = 3;
G__19848.cljs$lang$applyTo = (function (arglist__19874){
var elem = cljs.core.first(arglist__19874);
arglist__19874 = cljs.core.next(arglist__19874);
var k = cljs.core.first(arglist__19874);
arglist__19874 = cljs.core.next(arglist__19874);
var v = cljs.core.first(arglist__19874);
var kvs = cljs.core.rest(arglist__19874);
return G__19848__delegate(elem,k,v,kvs);
});
G__19848.cljs$core$IFn$_invoke$arity$variadic = G__19848__delegate;
return G__19848;
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
var G__19883__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__19879_19884 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__19880_19885 = null;var count__19881_19886 = 0;var i__19882_19887 = 0;while(true){
if((i__19882_19887 < count__19881_19886))
{var k_19888__$1 = cljs.core._nth.call(null,chunk__19880_19885,i__19882_19887);remove_attr_BANG_.call(null,elem__$1,k_19888__$1);
{
var G__19889 = seq__19879_19884;
var G__19890 = chunk__19880_19885;
var G__19891 = count__19881_19886;
var G__19892 = (i__19882_19887 + 1);
seq__19879_19884 = G__19889;
chunk__19880_19885 = G__19890;
count__19881_19886 = G__19891;
i__19882_19887 = G__19892;
continue;
}
} else
{var temp__4092__auto___19893 = cljs.core.seq.call(null,seq__19879_19884);if(temp__4092__auto___19893)
{var seq__19879_19894__$1 = temp__4092__auto___19893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19879_19894__$1))
{var c__5489__auto___19895 = cljs.core.chunk_first.call(null,seq__19879_19894__$1);{
var G__19896 = cljs.core.chunk_rest.call(null,seq__19879_19894__$1);
var G__19897 = c__5489__auto___19895;
var G__19898 = cljs.core.count.call(null,c__5489__auto___19895);
var G__19899 = 0;
seq__19879_19884 = G__19896;
chunk__19880_19885 = G__19897;
count__19881_19886 = G__19898;
i__19882_19887 = G__19899;
continue;
}
} else
{var k_19900__$1 = cljs.core.first.call(null,seq__19879_19894__$1);remove_attr_BANG_.call(null,elem__$1,k_19900__$1);
{
var G__19901 = cljs.core.next.call(null,seq__19879_19894__$1);
var G__19902 = null;
var G__19903 = 0;
var G__19904 = 0;
seq__19879_19884 = G__19901;
chunk__19880_19885 = G__19902;
count__19881_19886 = G__19903;
i__19882_19887 = G__19904;
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
var G__19883 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19883__delegate.call(this,elem,k,ks);};
G__19883.cljs$lang$maxFixedArity = 2;
G__19883.cljs$lang$applyTo = (function (arglist__19905){
var elem = cljs.core.first(arglist__19905);
arglist__19905 = cljs.core.next(arglist__19905);
var k = cljs.core.first(arglist__19905);
var ks = cljs.core.rest(arglist__19905);
return G__19883__delegate(elem,k,ks);
});
G__19883.cljs$core$IFn$_invoke$arity$variadic = G__19883__delegate;
return G__19883;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__19907 = dommy.template.__GT_node_like.call(null,elem);G__19907.style.display = ((show_QMARK_)?"":"none");
return G__19907;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__19909 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__19909,false);
return G__19909;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__19911 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__19911,true);
return G__19911;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__19913 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__19913["constructor"] = Object);
return G__19913;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
