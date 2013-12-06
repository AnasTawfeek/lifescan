// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__4761__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__4761__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__4761__auto__;
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
var G__11827 = (i + class$.length);
start_from = G__11827;
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
{var temp__4090__auto___11852 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___11852))
{var class_list_11853 = temp__4090__auto___11852;var seq__11840_11854 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11841_11855 = null;var count__11842_11856 = 0;var i__11843_11857 = 0;while(true){
if((i__11843_11857 < count__11842_11856))
{var class_11858 = cljs.core._nth.call(null,chunk__11841_11855,i__11843_11857);class_list_11853.add(class_11858);
{
var G__11859 = seq__11840_11854;
var G__11860 = chunk__11841_11855;
var G__11861 = count__11842_11856;
var G__11862 = (i__11843_11857 + 1);
seq__11840_11854 = G__11859;
chunk__11841_11855 = G__11860;
count__11842_11856 = G__11861;
i__11843_11857 = G__11862;
continue;
}
} else
{var temp__4092__auto___11863 = cljs.core.seq.call(null,seq__11840_11854);if(temp__4092__auto___11863)
{var seq__11840_11864__$1 = temp__4092__auto___11863;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11840_11864__$1))
{var c__5497__auto___11865 = cljs.core.chunk_first.call(null,seq__11840_11864__$1);{
var G__11866 = cljs.core.chunk_rest.call(null,seq__11840_11864__$1);
var G__11867 = c__5497__auto___11865;
var G__11868 = cljs.core.count.call(null,c__5497__auto___11865);
var G__11869 = 0;
seq__11840_11854 = G__11866;
chunk__11841_11855 = G__11867;
count__11842_11856 = G__11868;
i__11843_11857 = G__11869;
continue;
}
} else
{var class_11870 = cljs.core.first.call(null,seq__11840_11864__$1);class_list_11853.add(class_11870);
{
var G__11871 = cljs.core.next.call(null,seq__11840_11864__$1);
var G__11872 = null;
var G__11873 = 0;
var G__11874 = 0;
seq__11840_11854 = G__11871;
chunk__11841_11855 = G__11872;
count__11842_11856 = G__11873;
i__11843_11857 = G__11874;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_11875 = elem__$1.className;var seq__11844_11876 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11845_11877 = null;var count__11846_11878 = 0;var i__11847_11879 = 0;while(true){
if((i__11847_11879 < count__11846_11878))
{var class_11880 = cljs.core._nth.call(null,chunk__11845_11877,i__11847_11879);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11875,class_11880)))
{} else
{elem__$1.className = (((class_name_11875 === ""))?class_11880:[cljs.core.str(class_name_11875),cljs.core.str(" "),cljs.core.str(class_11880)].join(''));
}
{
var G__11881 = seq__11844_11876;
var G__11882 = chunk__11845_11877;
var G__11883 = count__11846_11878;
var G__11884 = (i__11847_11879 + 1);
seq__11844_11876 = G__11881;
chunk__11845_11877 = G__11882;
count__11846_11878 = G__11883;
i__11847_11879 = G__11884;
continue;
}
} else
{var temp__4092__auto___11885 = cljs.core.seq.call(null,seq__11844_11876);if(temp__4092__auto___11885)
{var seq__11844_11886__$1 = temp__4092__auto___11885;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11844_11886__$1))
{var c__5497__auto___11887 = cljs.core.chunk_first.call(null,seq__11844_11886__$1);{
var G__11888 = cljs.core.chunk_rest.call(null,seq__11844_11886__$1);
var G__11889 = c__5497__auto___11887;
var G__11890 = cljs.core.count.call(null,c__5497__auto___11887);
var G__11891 = 0;
seq__11844_11876 = G__11888;
chunk__11845_11877 = G__11889;
count__11846_11878 = G__11890;
i__11847_11879 = G__11891;
continue;
}
} else
{var class_11892 = cljs.core.first.call(null,seq__11844_11886__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11875,class_11892)))
{} else
{elem__$1.className = (((class_name_11875 === ""))?class_11892:[cljs.core.str(class_name_11875),cljs.core.str(" "),cljs.core.str(class_11892)].join(''));
}
{
var G__11893 = cljs.core.next.call(null,seq__11844_11886__$1);
var G__11894 = null;
var G__11895 = 0;
var G__11896 = 0;
seq__11844_11876 = G__11893;
chunk__11845_11877 = G__11894;
count__11846_11878 = G__11895;
i__11847_11879 = G__11896;
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
var G__11897__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11848_11898 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__11849_11899 = null;var count__11850_11900 = 0;var i__11851_11901 = 0;while(true){
if((i__11851_11901 < count__11850_11900))
{var c_11902 = cljs.core._nth.call(null,chunk__11849_11899,i__11851_11901);add_class_BANG_.call(null,elem__$1,c_11902);
{
var G__11903 = seq__11848_11898;
var G__11904 = chunk__11849_11899;
var G__11905 = count__11850_11900;
var G__11906 = (i__11851_11901 + 1);
seq__11848_11898 = G__11903;
chunk__11849_11899 = G__11904;
count__11850_11900 = G__11905;
i__11851_11901 = G__11906;
continue;
}
} else
{var temp__4092__auto___11907 = cljs.core.seq.call(null,seq__11848_11898);if(temp__4092__auto___11907)
{var seq__11848_11908__$1 = temp__4092__auto___11907;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11848_11908__$1))
{var c__5497__auto___11909 = cljs.core.chunk_first.call(null,seq__11848_11908__$1);{
var G__11910 = cljs.core.chunk_rest.call(null,seq__11848_11908__$1);
var G__11911 = c__5497__auto___11909;
var G__11912 = cljs.core.count.call(null,c__5497__auto___11909);
var G__11913 = 0;
seq__11848_11898 = G__11910;
chunk__11849_11899 = G__11911;
count__11850_11900 = G__11912;
i__11851_11901 = G__11913;
continue;
}
} else
{var c_11914 = cljs.core.first.call(null,seq__11848_11908__$1);add_class_BANG_.call(null,elem__$1,c_11914);
{
var G__11915 = cljs.core.next.call(null,seq__11848_11908__$1);
var G__11916 = null;
var G__11917 = 0;
var G__11918 = 0;
seq__11848_11898 = G__11915;
chunk__11849_11899 = G__11916;
count__11850_11900 = G__11917;
i__11851_11901 = G__11918;
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
var G__11897 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11897__delegate.call(this,elem,classes,more_classes);};
G__11897.cljs$lang$maxFixedArity = 2;
G__11897.cljs$lang$applyTo = (function (arglist__11919){
var elem = cljs.core.first(arglist__11919);
arglist__11919 = cljs.core.next(arglist__11919);
var classes = cljs.core.first(arglist__11919);
var more_classes = cljs.core.rest(arglist__11919);
return G__11897__delegate(elem,classes,more_classes);
});
G__11897.cljs$core$IFn$_invoke$arity$variadic = G__11897__delegate;
return G__11897;
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
var G__11920 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__11920;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___11929 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___11929))
{var class_list_11930 = temp__4090__auto___11929;class_list_11930.remove(class$__$1);
} else
{var class_name_11931 = elem__$1.className;var new_class_name_11932 = dommy.attrs.remove_class_str.call(null,class_name_11931,class$__$1);if((class_name_11931 === new_class_name_11932))
{} else
{elem__$1.className = new_class_name_11932;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__11933__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11925 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__11926 = null;var count__11927 = 0;var i__11928 = 0;while(true){
if((i__11928 < count__11927))
{var c = cljs.core._nth.call(null,chunk__11926,i__11928);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11934 = seq__11925;
var G__11935 = chunk__11926;
var G__11936 = count__11927;
var G__11937 = (i__11928 + 1);
seq__11925 = G__11934;
chunk__11926 = G__11935;
count__11927 = G__11936;
i__11928 = G__11937;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11925);if(temp__4092__auto__)
{var seq__11925__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11925__$1))
{var c__5497__auto__ = cljs.core.chunk_first.call(null,seq__11925__$1);{
var G__11938 = cljs.core.chunk_rest.call(null,seq__11925__$1);
var G__11939 = c__5497__auto__;
var G__11940 = cljs.core.count.call(null,c__5497__auto__);
var G__11941 = 0;
seq__11925 = G__11938;
chunk__11926 = G__11939;
count__11927 = G__11940;
i__11928 = G__11941;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__11925__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11942 = cljs.core.next.call(null,seq__11925__$1);
var G__11943 = null;
var G__11944 = 0;
var G__11945 = 0;
seq__11925 = G__11942;
chunk__11926 = G__11943;
count__11927 = G__11944;
i__11928 = G__11945;
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
var G__11933 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11933__delegate.call(this,elem,class$,classes);};
G__11933.cljs$lang$maxFixedArity = 2;
G__11933.cljs$lang$applyTo = (function (arglist__11946){
var elem = cljs.core.first(arglist__11946);
arglist__11946 = cljs.core.next(arglist__11946);
var class$ = cljs.core.first(arglist__11946);
var classes = cljs.core.rest(arglist__11946);
return G__11933__delegate(elem,class$,classes);
});
G__11933.cljs$core$IFn$_invoke$arity$variadic = G__11933__delegate;
return G__11933;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___11947 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___11947))
{var class_list_11948 = temp__4090__auto___11947;class_list_11948.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__11951){var vec__11952 = p__11951;var k = cljs.core.nth.call(null,vec__11952,0,null);var v = cljs.core.nth.call(null,vec__11952,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__11959_11965 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__11960_11966 = null;var count__11961_11967 = 0;var i__11962_11968 = 0;while(true){
if((i__11962_11968 < count__11961_11967))
{var vec__11963_11969 = cljs.core._nth.call(null,chunk__11960_11966,i__11962_11968);var k_11970 = cljs.core.nth.call(null,vec__11963_11969,0,null);var v_11971 = cljs.core.nth.call(null,vec__11963_11969,1,null);(style[cljs.core.name.call(null,k_11970)] = v_11971);
{
var G__11972 = seq__11959_11965;
var G__11973 = chunk__11960_11966;
var G__11974 = count__11961_11967;
var G__11975 = (i__11962_11968 + 1);
seq__11959_11965 = G__11972;
chunk__11960_11966 = G__11973;
count__11961_11967 = G__11974;
i__11962_11968 = G__11975;
continue;
}
} else
{var temp__4092__auto___11976 = cljs.core.seq.call(null,seq__11959_11965);if(temp__4092__auto___11976)
{var seq__11959_11977__$1 = temp__4092__auto___11976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11959_11977__$1))
{var c__5497__auto___11978 = cljs.core.chunk_first.call(null,seq__11959_11977__$1);{
var G__11979 = cljs.core.chunk_rest.call(null,seq__11959_11977__$1);
var G__11980 = c__5497__auto___11978;
var G__11981 = cljs.core.count.call(null,c__5497__auto___11978);
var G__11982 = 0;
seq__11959_11965 = G__11979;
chunk__11960_11966 = G__11980;
count__11961_11967 = G__11981;
i__11962_11968 = G__11982;
continue;
}
} else
{var vec__11964_11983 = cljs.core.first.call(null,seq__11959_11977__$1);var k_11984 = cljs.core.nth.call(null,vec__11964_11983,0,null);var v_11985 = cljs.core.nth.call(null,vec__11964_11983,1,null);(style[cljs.core.name.call(null,k_11984)] = v_11985);
{
var G__11986 = cljs.core.next.call(null,seq__11959_11977__$1);
var G__11987 = null;
var G__11988 = 0;
var G__11989 = 0;
seq__11959_11965 = G__11986;
chunk__11960_11966 = G__11987;
count__11961_11967 = G__11988;
i__11962_11968 = G__11989;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__11990){
var elem = cljs.core.first(arglist__11990);
var kvs = cljs.core.rest(arglist__11990);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11997_12003 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__11998_12004 = null;var count__11999_12005 = 0;var i__12000_12006 = 0;while(true){
if((i__12000_12006 < count__11999_12005))
{var vec__12001_12007 = cljs.core._nth.call(null,chunk__11998_12004,i__12000_12006);var k_12008 = cljs.core.nth.call(null,vec__12001_12007,0,null);var v_12009 = cljs.core.nth.call(null,vec__12001_12007,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_12008,[cljs.core.str(v_12009),cljs.core.str("px")].join(''));
{
var G__12010 = seq__11997_12003;
var G__12011 = chunk__11998_12004;
var G__12012 = count__11999_12005;
var G__12013 = (i__12000_12006 + 1);
seq__11997_12003 = G__12010;
chunk__11998_12004 = G__12011;
count__11999_12005 = G__12012;
i__12000_12006 = G__12013;
continue;
}
} else
{var temp__4092__auto___12014 = cljs.core.seq.call(null,seq__11997_12003);if(temp__4092__auto___12014)
{var seq__11997_12015__$1 = temp__4092__auto___12014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11997_12015__$1))
{var c__5497__auto___12016 = cljs.core.chunk_first.call(null,seq__11997_12015__$1);{
var G__12017 = cljs.core.chunk_rest.call(null,seq__11997_12015__$1);
var G__12018 = c__5497__auto___12016;
var G__12019 = cljs.core.count.call(null,c__5497__auto___12016);
var G__12020 = 0;
seq__11997_12003 = G__12017;
chunk__11998_12004 = G__12018;
count__11999_12005 = G__12019;
i__12000_12006 = G__12020;
continue;
}
} else
{var vec__12002_12021 = cljs.core.first.call(null,seq__11997_12015__$1);var k_12022 = cljs.core.nth.call(null,vec__12002_12021,0,null);var v_12023 = cljs.core.nth.call(null,vec__12002_12021,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_12022,[cljs.core.str(v_12023),cljs.core.str("px")].join(''));
{
var G__12024 = cljs.core.next.call(null,seq__11997_12015__$1);
var G__12025 = null;
var G__12026 = 0;
var G__12027 = 0;
seq__11997_12003 = G__12024;
chunk__11998_12004 = G__12025;
count__11999_12005 = G__12026;
i__12000_12006 = G__12027;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__12028){
var elem = cljs.core.first(arglist__12028);
var kvs = cljs.core.rest(arglist__12028);
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
{var G__12037 = dommy.template.__GT_node_like.call(null,elem);(G__12037[cljs.core.name.call(null,k)] = v);
return G__12037;
} else
{var G__12038 = dommy.template.__GT_node_like.call(null,elem);G__12038.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__12038;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__12045__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12039_12046 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__12040_12047 = null;var count__12041_12048 = 0;var i__12042_12049 = 0;while(true){
if((i__12042_12049 < count__12041_12048))
{var vec__12043_12050 = cljs.core._nth.call(null,chunk__12040_12047,i__12042_12049);var k_12051__$1 = cljs.core.nth.call(null,vec__12043_12050,0,null);var v_12052__$1 = cljs.core.nth.call(null,vec__12043_12050,1,null);set_attr_BANG_.call(null,elem__$1,k_12051__$1,v_12052__$1);
{
var G__12053 = seq__12039_12046;
var G__12054 = chunk__12040_12047;
var G__12055 = count__12041_12048;
var G__12056 = (i__12042_12049 + 1);
seq__12039_12046 = G__12053;
chunk__12040_12047 = G__12054;
count__12041_12048 = G__12055;
i__12042_12049 = G__12056;
continue;
}
} else
{var temp__4092__auto___12057 = cljs.core.seq.call(null,seq__12039_12046);if(temp__4092__auto___12057)
{var seq__12039_12058__$1 = temp__4092__auto___12057;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12039_12058__$1))
{var c__5497__auto___12059 = cljs.core.chunk_first.call(null,seq__12039_12058__$1);{
var G__12060 = cljs.core.chunk_rest.call(null,seq__12039_12058__$1);
var G__12061 = c__5497__auto___12059;
var G__12062 = cljs.core.count.call(null,c__5497__auto___12059);
var G__12063 = 0;
seq__12039_12046 = G__12060;
chunk__12040_12047 = G__12061;
count__12041_12048 = G__12062;
i__12042_12049 = G__12063;
continue;
}
} else
{var vec__12044_12064 = cljs.core.first.call(null,seq__12039_12058__$1);var k_12065__$1 = cljs.core.nth.call(null,vec__12044_12064,0,null);var v_12066__$1 = cljs.core.nth.call(null,vec__12044_12064,1,null);set_attr_BANG_.call(null,elem__$1,k_12065__$1,v_12066__$1);
{
var G__12067 = cljs.core.next.call(null,seq__12039_12058__$1);
var G__12068 = null;
var G__12069 = 0;
var G__12070 = 0;
seq__12039_12046 = G__12067;
chunk__12040_12047 = G__12068;
count__12041_12048 = G__12069;
i__12042_12049 = G__12070;
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
var G__12045 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__12045__delegate.call(this,elem,k,v,kvs);};
G__12045.cljs$lang$maxFixedArity = 3;
G__12045.cljs$lang$applyTo = (function (arglist__12071){
var elem = cljs.core.first(arglist__12071);
arglist__12071 = cljs.core.next(arglist__12071);
var k = cljs.core.first(arglist__12071);
arglist__12071 = cljs.core.next(arglist__12071);
var v = cljs.core.first(arglist__12071);
var kvs = cljs.core.rest(arglist__12071);
return G__12045__delegate(elem,k,v,kvs);
});
G__12045.cljs$core$IFn$_invoke$arity$variadic = G__12045__delegate;
return G__12045;
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
var G__12080__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12076_12081 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__12077_12082 = null;var count__12078_12083 = 0;var i__12079_12084 = 0;while(true){
if((i__12079_12084 < count__12078_12083))
{var k_12085__$1 = cljs.core._nth.call(null,chunk__12077_12082,i__12079_12084);remove_attr_BANG_.call(null,elem__$1,k_12085__$1);
{
var G__12086 = seq__12076_12081;
var G__12087 = chunk__12077_12082;
var G__12088 = count__12078_12083;
var G__12089 = (i__12079_12084 + 1);
seq__12076_12081 = G__12086;
chunk__12077_12082 = G__12087;
count__12078_12083 = G__12088;
i__12079_12084 = G__12089;
continue;
}
} else
{var temp__4092__auto___12090 = cljs.core.seq.call(null,seq__12076_12081);if(temp__4092__auto___12090)
{var seq__12076_12091__$1 = temp__4092__auto___12090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12076_12091__$1))
{var c__5497__auto___12092 = cljs.core.chunk_first.call(null,seq__12076_12091__$1);{
var G__12093 = cljs.core.chunk_rest.call(null,seq__12076_12091__$1);
var G__12094 = c__5497__auto___12092;
var G__12095 = cljs.core.count.call(null,c__5497__auto___12092);
var G__12096 = 0;
seq__12076_12081 = G__12093;
chunk__12077_12082 = G__12094;
count__12078_12083 = G__12095;
i__12079_12084 = G__12096;
continue;
}
} else
{var k_12097__$1 = cljs.core.first.call(null,seq__12076_12091__$1);remove_attr_BANG_.call(null,elem__$1,k_12097__$1);
{
var G__12098 = cljs.core.next.call(null,seq__12076_12091__$1);
var G__12099 = null;
var G__12100 = 0;
var G__12101 = 0;
seq__12076_12081 = G__12098;
chunk__12077_12082 = G__12099;
count__12078_12083 = G__12100;
i__12079_12084 = G__12101;
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
var G__12080 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12080__delegate.call(this,elem,k,ks);};
G__12080.cljs$lang$maxFixedArity = 2;
G__12080.cljs$lang$applyTo = (function (arglist__12102){
var elem = cljs.core.first(arglist__12102);
arglist__12102 = cljs.core.next(arglist__12102);
var k = cljs.core.first(arglist__12102);
var ks = cljs.core.rest(arglist__12102);
return G__12080__delegate(elem,k,ks);
});
G__12080.cljs$core$IFn$_invoke$arity$variadic = G__12080__delegate;
return G__12080;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__12104 = dommy.template.__GT_node_like.call(null,elem);G__12104.style.display = ((show_QMARK_)?"":"none");
return G__12104;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__12106 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12106,false);
return G__12106;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__12108 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12108,true);
return G__12108;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__12110 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__12110["constructor"] = Object);
return G__12110;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
