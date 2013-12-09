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
var G__11758 = (i + class$.length);
start_from = G__11758;
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
{var temp__4090__auto___11783 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___11783))
{var class_list_11784 = temp__4090__auto___11783;var seq__11771_11785 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11772_11786 = null;var count__11773_11787 = 0;var i__11774_11788 = 0;while(true){
if((i__11774_11788 < count__11773_11787))
{var class_11789 = cljs.core._nth.call(null,chunk__11772_11786,i__11774_11788);class_list_11784.add(class_11789);
{
var G__11790 = seq__11771_11785;
var G__11791 = chunk__11772_11786;
var G__11792 = count__11773_11787;
var G__11793 = (i__11774_11788 + 1);
seq__11771_11785 = G__11790;
chunk__11772_11786 = G__11791;
count__11773_11787 = G__11792;
i__11774_11788 = G__11793;
continue;
}
} else
{var temp__4092__auto___11794 = cljs.core.seq.call(null,seq__11771_11785);if(temp__4092__auto___11794)
{var seq__11771_11795__$1 = temp__4092__auto___11794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11771_11795__$1))
{var c__5489__auto___11796 = cljs.core.chunk_first.call(null,seq__11771_11795__$1);{
var G__11797 = cljs.core.chunk_rest.call(null,seq__11771_11795__$1);
var G__11798 = c__5489__auto___11796;
var G__11799 = cljs.core.count.call(null,c__5489__auto___11796);
var G__11800 = 0;
seq__11771_11785 = G__11797;
chunk__11772_11786 = G__11798;
count__11773_11787 = G__11799;
i__11774_11788 = G__11800;
continue;
}
} else
{var class_11801 = cljs.core.first.call(null,seq__11771_11795__$1);class_list_11784.add(class_11801);
{
var G__11802 = cljs.core.next.call(null,seq__11771_11795__$1);
var G__11803 = null;
var G__11804 = 0;
var G__11805 = 0;
seq__11771_11785 = G__11802;
chunk__11772_11786 = G__11803;
count__11773_11787 = G__11804;
i__11774_11788 = G__11805;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_11806 = elem__$1.className;var seq__11775_11807 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11776_11808 = null;var count__11777_11809 = 0;var i__11778_11810 = 0;while(true){
if((i__11778_11810 < count__11777_11809))
{var class_11811 = cljs.core._nth.call(null,chunk__11776_11808,i__11778_11810);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11806,class_11811)))
{} else
{elem__$1.className = (((class_name_11806 === ""))?class_11811:[cljs.core.str(class_name_11806),cljs.core.str(" "),cljs.core.str(class_11811)].join(''));
}
{
var G__11812 = seq__11775_11807;
var G__11813 = chunk__11776_11808;
var G__11814 = count__11777_11809;
var G__11815 = (i__11778_11810 + 1);
seq__11775_11807 = G__11812;
chunk__11776_11808 = G__11813;
count__11777_11809 = G__11814;
i__11778_11810 = G__11815;
continue;
}
} else
{var temp__4092__auto___11816 = cljs.core.seq.call(null,seq__11775_11807);if(temp__4092__auto___11816)
{var seq__11775_11817__$1 = temp__4092__auto___11816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11775_11817__$1))
{var c__5489__auto___11818 = cljs.core.chunk_first.call(null,seq__11775_11817__$1);{
var G__11819 = cljs.core.chunk_rest.call(null,seq__11775_11817__$1);
var G__11820 = c__5489__auto___11818;
var G__11821 = cljs.core.count.call(null,c__5489__auto___11818);
var G__11822 = 0;
seq__11775_11807 = G__11819;
chunk__11776_11808 = G__11820;
count__11777_11809 = G__11821;
i__11778_11810 = G__11822;
continue;
}
} else
{var class_11823 = cljs.core.first.call(null,seq__11775_11817__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11806,class_11823)))
{} else
{elem__$1.className = (((class_name_11806 === ""))?class_11823:[cljs.core.str(class_name_11806),cljs.core.str(" "),cljs.core.str(class_11823)].join(''));
}
{
var G__11824 = cljs.core.next.call(null,seq__11775_11817__$1);
var G__11825 = null;
var G__11826 = 0;
var G__11827 = 0;
seq__11775_11807 = G__11824;
chunk__11776_11808 = G__11825;
count__11777_11809 = G__11826;
i__11778_11810 = G__11827;
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
var G__11828__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11779_11829 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__11780_11830 = null;var count__11781_11831 = 0;var i__11782_11832 = 0;while(true){
if((i__11782_11832 < count__11781_11831))
{var c_11833 = cljs.core._nth.call(null,chunk__11780_11830,i__11782_11832);add_class_BANG_.call(null,elem__$1,c_11833);
{
var G__11834 = seq__11779_11829;
var G__11835 = chunk__11780_11830;
var G__11836 = count__11781_11831;
var G__11837 = (i__11782_11832 + 1);
seq__11779_11829 = G__11834;
chunk__11780_11830 = G__11835;
count__11781_11831 = G__11836;
i__11782_11832 = G__11837;
continue;
}
} else
{var temp__4092__auto___11838 = cljs.core.seq.call(null,seq__11779_11829);if(temp__4092__auto___11838)
{var seq__11779_11839__$1 = temp__4092__auto___11838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11779_11839__$1))
{var c__5489__auto___11840 = cljs.core.chunk_first.call(null,seq__11779_11839__$1);{
var G__11841 = cljs.core.chunk_rest.call(null,seq__11779_11839__$1);
var G__11842 = c__5489__auto___11840;
var G__11843 = cljs.core.count.call(null,c__5489__auto___11840);
var G__11844 = 0;
seq__11779_11829 = G__11841;
chunk__11780_11830 = G__11842;
count__11781_11831 = G__11843;
i__11782_11832 = G__11844;
continue;
}
} else
{var c_11845 = cljs.core.first.call(null,seq__11779_11839__$1);add_class_BANG_.call(null,elem__$1,c_11845);
{
var G__11846 = cljs.core.next.call(null,seq__11779_11839__$1);
var G__11847 = null;
var G__11848 = 0;
var G__11849 = 0;
seq__11779_11829 = G__11846;
chunk__11780_11830 = G__11847;
count__11781_11831 = G__11848;
i__11782_11832 = G__11849;
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
var G__11828 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11828__delegate.call(this,elem,classes,more_classes);};
G__11828.cljs$lang$maxFixedArity = 2;
G__11828.cljs$lang$applyTo = (function (arglist__11850){
var elem = cljs.core.first(arglist__11850);
arglist__11850 = cljs.core.next(arglist__11850);
var classes = cljs.core.first(arglist__11850);
var more_classes = cljs.core.rest(arglist__11850);
return G__11828__delegate(elem,classes,more_classes);
});
G__11828.cljs$core$IFn$_invoke$arity$variadic = G__11828__delegate;
return G__11828;
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
var G__11851 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__11851;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___11860 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___11860))
{var class_list_11861 = temp__4090__auto___11860;class_list_11861.remove(class$__$1);
} else
{var class_name_11862 = elem__$1.className;var new_class_name_11863 = dommy.attrs.remove_class_str.call(null,class_name_11862,class$__$1);if((class_name_11862 === new_class_name_11863))
{} else
{elem__$1.className = new_class_name_11863;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__11864__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11856 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__11857 = null;var count__11858 = 0;var i__11859 = 0;while(true){
if((i__11859 < count__11858))
{var c = cljs.core._nth.call(null,chunk__11857,i__11859);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11865 = seq__11856;
var G__11866 = chunk__11857;
var G__11867 = count__11858;
var G__11868 = (i__11859 + 1);
seq__11856 = G__11865;
chunk__11857 = G__11866;
count__11858 = G__11867;
i__11859 = G__11868;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11856);if(temp__4092__auto__)
{var seq__11856__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11856__$1))
{var c__5489__auto__ = cljs.core.chunk_first.call(null,seq__11856__$1);{
var G__11869 = cljs.core.chunk_rest.call(null,seq__11856__$1);
var G__11870 = c__5489__auto__;
var G__11871 = cljs.core.count.call(null,c__5489__auto__);
var G__11872 = 0;
seq__11856 = G__11869;
chunk__11857 = G__11870;
count__11858 = G__11871;
i__11859 = G__11872;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__11856__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11873 = cljs.core.next.call(null,seq__11856__$1);
var G__11874 = null;
var G__11875 = 0;
var G__11876 = 0;
seq__11856 = G__11873;
chunk__11857 = G__11874;
count__11858 = G__11875;
i__11859 = G__11876;
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
var G__11864 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11864__delegate.call(this,elem,class$,classes);};
G__11864.cljs$lang$maxFixedArity = 2;
G__11864.cljs$lang$applyTo = (function (arglist__11877){
var elem = cljs.core.first(arglist__11877);
arglist__11877 = cljs.core.next(arglist__11877);
var class$ = cljs.core.first(arglist__11877);
var classes = cljs.core.rest(arglist__11877);
return G__11864__delegate(elem,class$,classes);
});
G__11864.cljs$core$IFn$_invoke$arity$variadic = G__11864__delegate;
return G__11864;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___11878 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___11878))
{var class_list_11879 = temp__4090__auto___11878;class_list_11879.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__11882){var vec__11883 = p__11882;var k = cljs.core.nth.call(null,vec__11883,0,null);var v = cljs.core.nth.call(null,vec__11883,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__11890_11896 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__11891_11897 = null;var count__11892_11898 = 0;var i__11893_11899 = 0;while(true){
if((i__11893_11899 < count__11892_11898))
{var vec__11894_11900 = cljs.core._nth.call(null,chunk__11891_11897,i__11893_11899);var k_11901 = cljs.core.nth.call(null,vec__11894_11900,0,null);var v_11902 = cljs.core.nth.call(null,vec__11894_11900,1,null);(style[cljs.core.name.call(null,k_11901)] = v_11902);
{
var G__11903 = seq__11890_11896;
var G__11904 = chunk__11891_11897;
var G__11905 = count__11892_11898;
var G__11906 = (i__11893_11899 + 1);
seq__11890_11896 = G__11903;
chunk__11891_11897 = G__11904;
count__11892_11898 = G__11905;
i__11893_11899 = G__11906;
continue;
}
} else
{var temp__4092__auto___11907 = cljs.core.seq.call(null,seq__11890_11896);if(temp__4092__auto___11907)
{var seq__11890_11908__$1 = temp__4092__auto___11907;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11890_11908__$1))
{var c__5489__auto___11909 = cljs.core.chunk_first.call(null,seq__11890_11908__$1);{
var G__11910 = cljs.core.chunk_rest.call(null,seq__11890_11908__$1);
var G__11911 = c__5489__auto___11909;
var G__11912 = cljs.core.count.call(null,c__5489__auto___11909);
var G__11913 = 0;
seq__11890_11896 = G__11910;
chunk__11891_11897 = G__11911;
count__11892_11898 = G__11912;
i__11893_11899 = G__11913;
continue;
}
} else
{var vec__11895_11914 = cljs.core.first.call(null,seq__11890_11908__$1);var k_11915 = cljs.core.nth.call(null,vec__11895_11914,0,null);var v_11916 = cljs.core.nth.call(null,vec__11895_11914,1,null);(style[cljs.core.name.call(null,k_11915)] = v_11916);
{
var G__11917 = cljs.core.next.call(null,seq__11890_11908__$1);
var G__11918 = null;
var G__11919 = 0;
var G__11920 = 0;
seq__11890_11896 = G__11917;
chunk__11891_11897 = G__11918;
count__11892_11898 = G__11919;
i__11893_11899 = G__11920;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__11921){
var elem = cljs.core.first(arglist__11921);
var kvs = cljs.core.rest(arglist__11921);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11928_11934 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__11929_11935 = null;var count__11930_11936 = 0;var i__11931_11937 = 0;while(true){
if((i__11931_11937 < count__11930_11936))
{var vec__11932_11938 = cljs.core._nth.call(null,chunk__11929_11935,i__11931_11937);var k_11939 = cljs.core.nth.call(null,vec__11932_11938,0,null);var v_11940 = cljs.core.nth.call(null,vec__11932_11938,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_11939,[cljs.core.str(v_11940),cljs.core.str("px")].join(''));
{
var G__11941 = seq__11928_11934;
var G__11942 = chunk__11929_11935;
var G__11943 = count__11930_11936;
var G__11944 = (i__11931_11937 + 1);
seq__11928_11934 = G__11941;
chunk__11929_11935 = G__11942;
count__11930_11936 = G__11943;
i__11931_11937 = G__11944;
continue;
}
} else
{var temp__4092__auto___11945 = cljs.core.seq.call(null,seq__11928_11934);if(temp__4092__auto___11945)
{var seq__11928_11946__$1 = temp__4092__auto___11945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11928_11946__$1))
{var c__5489__auto___11947 = cljs.core.chunk_first.call(null,seq__11928_11946__$1);{
var G__11948 = cljs.core.chunk_rest.call(null,seq__11928_11946__$1);
var G__11949 = c__5489__auto___11947;
var G__11950 = cljs.core.count.call(null,c__5489__auto___11947);
var G__11951 = 0;
seq__11928_11934 = G__11948;
chunk__11929_11935 = G__11949;
count__11930_11936 = G__11950;
i__11931_11937 = G__11951;
continue;
}
} else
{var vec__11933_11952 = cljs.core.first.call(null,seq__11928_11946__$1);var k_11953 = cljs.core.nth.call(null,vec__11933_11952,0,null);var v_11954 = cljs.core.nth.call(null,vec__11933_11952,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_11953,[cljs.core.str(v_11954),cljs.core.str("px")].join(''));
{
var G__11955 = cljs.core.next.call(null,seq__11928_11946__$1);
var G__11956 = null;
var G__11957 = 0;
var G__11958 = 0;
seq__11928_11934 = G__11955;
chunk__11929_11935 = G__11956;
count__11930_11936 = G__11957;
i__11931_11937 = G__11958;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__11959){
var elem = cljs.core.first(arglist__11959);
var kvs = cljs.core.rest(arglist__11959);
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
{var G__11968 = dommy.template.__GT_node_like.call(null,elem);(G__11968[cljs.core.name.call(null,k)] = v);
return G__11968;
} else
{var G__11969 = dommy.template.__GT_node_like.call(null,elem);G__11969.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__11969;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__11976__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11970_11977 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__11971_11978 = null;var count__11972_11979 = 0;var i__11973_11980 = 0;while(true){
if((i__11973_11980 < count__11972_11979))
{var vec__11974_11981 = cljs.core._nth.call(null,chunk__11971_11978,i__11973_11980);var k_11982__$1 = cljs.core.nth.call(null,vec__11974_11981,0,null);var v_11983__$1 = cljs.core.nth.call(null,vec__11974_11981,1,null);set_attr_BANG_.call(null,elem__$1,k_11982__$1,v_11983__$1);
{
var G__11984 = seq__11970_11977;
var G__11985 = chunk__11971_11978;
var G__11986 = count__11972_11979;
var G__11987 = (i__11973_11980 + 1);
seq__11970_11977 = G__11984;
chunk__11971_11978 = G__11985;
count__11972_11979 = G__11986;
i__11973_11980 = G__11987;
continue;
}
} else
{var temp__4092__auto___11988 = cljs.core.seq.call(null,seq__11970_11977);if(temp__4092__auto___11988)
{var seq__11970_11989__$1 = temp__4092__auto___11988;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11970_11989__$1))
{var c__5489__auto___11990 = cljs.core.chunk_first.call(null,seq__11970_11989__$1);{
var G__11991 = cljs.core.chunk_rest.call(null,seq__11970_11989__$1);
var G__11992 = c__5489__auto___11990;
var G__11993 = cljs.core.count.call(null,c__5489__auto___11990);
var G__11994 = 0;
seq__11970_11977 = G__11991;
chunk__11971_11978 = G__11992;
count__11972_11979 = G__11993;
i__11973_11980 = G__11994;
continue;
}
} else
{var vec__11975_11995 = cljs.core.first.call(null,seq__11970_11989__$1);var k_11996__$1 = cljs.core.nth.call(null,vec__11975_11995,0,null);var v_11997__$1 = cljs.core.nth.call(null,vec__11975_11995,1,null);set_attr_BANG_.call(null,elem__$1,k_11996__$1,v_11997__$1);
{
var G__11998 = cljs.core.next.call(null,seq__11970_11989__$1);
var G__11999 = null;
var G__12000 = 0;
var G__12001 = 0;
seq__11970_11977 = G__11998;
chunk__11971_11978 = G__11999;
count__11972_11979 = G__12000;
i__11973_11980 = G__12001;
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
var G__11976 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__11976__delegate.call(this,elem,k,v,kvs);};
G__11976.cljs$lang$maxFixedArity = 3;
G__11976.cljs$lang$applyTo = (function (arglist__12002){
var elem = cljs.core.first(arglist__12002);
arglist__12002 = cljs.core.next(arglist__12002);
var k = cljs.core.first(arglist__12002);
arglist__12002 = cljs.core.next(arglist__12002);
var v = cljs.core.first(arglist__12002);
var kvs = cljs.core.rest(arglist__12002);
return G__11976__delegate(elem,k,v,kvs);
});
G__11976.cljs$core$IFn$_invoke$arity$variadic = G__11976__delegate;
return G__11976;
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
var G__12011__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12007_12012 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__12008_12013 = null;var count__12009_12014 = 0;var i__12010_12015 = 0;while(true){
if((i__12010_12015 < count__12009_12014))
{var k_12016__$1 = cljs.core._nth.call(null,chunk__12008_12013,i__12010_12015);remove_attr_BANG_.call(null,elem__$1,k_12016__$1);
{
var G__12017 = seq__12007_12012;
var G__12018 = chunk__12008_12013;
var G__12019 = count__12009_12014;
var G__12020 = (i__12010_12015 + 1);
seq__12007_12012 = G__12017;
chunk__12008_12013 = G__12018;
count__12009_12014 = G__12019;
i__12010_12015 = G__12020;
continue;
}
} else
{var temp__4092__auto___12021 = cljs.core.seq.call(null,seq__12007_12012);if(temp__4092__auto___12021)
{var seq__12007_12022__$1 = temp__4092__auto___12021;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12007_12022__$1))
{var c__5489__auto___12023 = cljs.core.chunk_first.call(null,seq__12007_12022__$1);{
var G__12024 = cljs.core.chunk_rest.call(null,seq__12007_12022__$1);
var G__12025 = c__5489__auto___12023;
var G__12026 = cljs.core.count.call(null,c__5489__auto___12023);
var G__12027 = 0;
seq__12007_12012 = G__12024;
chunk__12008_12013 = G__12025;
count__12009_12014 = G__12026;
i__12010_12015 = G__12027;
continue;
}
} else
{var k_12028__$1 = cljs.core.first.call(null,seq__12007_12022__$1);remove_attr_BANG_.call(null,elem__$1,k_12028__$1);
{
var G__12029 = cljs.core.next.call(null,seq__12007_12022__$1);
var G__12030 = null;
var G__12031 = 0;
var G__12032 = 0;
seq__12007_12012 = G__12029;
chunk__12008_12013 = G__12030;
count__12009_12014 = G__12031;
i__12010_12015 = G__12032;
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
var G__12011 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12011__delegate.call(this,elem,k,ks);};
G__12011.cljs$lang$maxFixedArity = 2;
G__12011.cljs$lang$applyTo = (function (arglist__12033){
var elem = cljs.core.first(arglist__12033);
arglist__12033 = cljs.core.next(arglist__12033);
var k = cljs.core.first(arglist__12033);
var ks = cljs.core.rest(arglist__12033);
return G__12011__delegate(elem,k,ks);
});
G__12011.cljs$core$IFn$_invoke$arity$variadic = G__12011__delegate;
return G__12011;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__12035 = dommy.template.__GT_node_like.call(null,elem);G__12035.style.display = ((show_QMARK_)?"":"none");
return G__12035;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__12037 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12037,false);
return G__12037;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__12039 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12039,true);
return G__12039;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__12041 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__12041["constructor"] = Object);
return G__12041;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
