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
var G__9125 = (i + class$.length);
start_from = G__9125;
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
{var temp__4090__auto___9150 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9150))
{var class_list_9151 = temp__4090__auto___9150;var seq__9138_9152 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9139_9153 = null;var count__9140_9154 = 0;var i__9141_9155 = 0;while(true){
if((i__9141_9155 < count__9140_9154))
{var class_9156 = cljs.core._nth.call(null,chunk__9139_9153,i__9141_9155);class_list_9151.add(class_9156);
{
var G__9157 = seq__9138_9152;
var G__9158 = chunk__9139_9153;
var G__9159 = count__9140_9154;
var G__9160 = (i__9141_9155 + 1);
seq__9138_9152 = G__9157;
chunk__9139_9153 = G__9158;
count__9140_9154 = G__9159;
i__9141_9155 = G__9160;
continue;
}
} else
{var temp__4092__auto___9161 = cljs.core.seq.call(null,seq__9138_9152);if(temp__4092__auto___9161)
{var seq__9138_9162__$1 = temp__4092__auto___9161;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9138_9162__$1))
{var c__5497__auto___9163 = cljs.core.chunk_first.call(null,seq__9138_9162__$1);{
var G__9164 = cljs.core.chunk_rest.call(null,seq__9138_9162__$1);
var G__9165 = c__5497__auto___9163;
var G__9166 = cljs.core.count.call(null,c__5497__auto___9163);
var G__9167 = 0;
seq__9138_9152 = G__9164;
chunk__9139_9153 = G__9165;
count__9140_9154 = G__9166;
i__9141_9155 = G__9167;
continue;
}
} else
{var class_9168 = cljs.core.first.call(null,seq__9138_9162__$1);class_list_9151.add(class_9168);
{
var G__9169 = cljs.core.next.call(null,seq__9138_9162__$1);
var G__9170 = null;
var G__9171 = 0;
var G__9172 = 0;
seq__9138_9152 = G__9169;
chunk__9139_9153 = G__9170;
count__9140_9154 = G__9171;
i__9141_9155 = G__9172;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_9173 = elem__$1.className;var seq__9142_9174 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9143_9175 = null;var count__9144_9176 = 0;var i__9145_9177 = 0;while(true){
if((i__9145_9177 < count__9144_9176))
{var class_9178 = cljs.core._nth.call(null,chunk__9143_9175,i__9145_9177);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9173,class_9178)))
{} else
{elem__$1.className = (((class_name_9173 === ""))?class_9178:[cljs.core.str(class_name_9173),cljs.core.str(" "),cljs.core.str(class_9178)].join(''));
}
{
var G__9179 = seq__9142_9174;
var G__9180 = chunk__9143_9175;
var G__9181 = count__9144_9176;
var G__9182 = (i__9145_9177 + 1);
seq__9142_9174 = G__9179;
chunk__9143_9175 = G__9180;
count__9144_9176 = G__9181;
i__9145_9177 = G__9182;
continue;
}
} else
{var temp__4092__auto___9183 = cljs.core.seq.call(null,seq__9142_9174);if(temp__4092__auto___9183)
{var seq__9142_9184__$1 = temp__4092__auto___9183;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9142_9184__$1))
{var c__5497__auto___9185 = cljs.core.chunk_first.call(null,seq__9142_9184__$1);{
var G__9186 = cljs.core.chunk_rest.call(null,seq__9142_9184__$1);
var G__9187 = c__5497__auto___9185;
var G__9188 = cljs.core.count.call(null,c__5497__auto___9185);
var G__9189 = 0;
seq__9142_9174 = G__9186;
chunk__9143_9175 = G__9187;
count__9144_9176 = G__9188;
i__9145_9177 = G__9189;
continue;
}
} else
{var class_9190 = cljs.core.first.call(null,seq__9142_9184__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9173,class_9190)))
{} else
{elem__$1.className = (((class_name_9173 === ""))?class_9190:[cljs.core.str(class_name_9173),cljs.core.str(" "),cljs.core.str(class_9190)].join(''));
}
{
var G__9191 = cljs.core.next.call(null,seq__9142_9184__$1);
var G__9192 = null;
var G__9193 = 0;
var G__9194 = 0;
seq__9142_9174 = G__9191;
chunk__9143_9175 = G__9192;
count__9144_9176 = G__9193;
i__9145_9177 = G__9194;
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
var G__9195__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9146_9196 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__9147_9197 = null;var count__9148_9198 = 0;var i__9149_9199 = 0;while(true){
if((i__9149_9199 < count__9148_9198))
{var c_9200 = cljs.core._nth.call(null,chunk__9147_9197,i__9149_9199);add_class_BANG_.call(null,elem__$1,c_9200);
{
var G__9201 = seq__9146_9196;
var G__9202 = chunk__9147_9197;
var G__9203 = count__9148_9198;
var G__9204 = (i__9149_9199 + 1);
seq__9146_9196 = G__9201;
chunk__9147_9197 = G__9202;
count__9148_9198 = G__9203;
i__9149_9199 = G__9204;
continue;
}
} else
{var temp__4092__auto___9205 = cljs.core.seq.call(null,seq__9146_9196);if(temp__4092__auto___9205)
{var seq__9146_9206__$1 = temp__4092__auto___9205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9146_9206__$1))
{var c__5497__auto___9207 = cljs.core.chunk_first.call(null,seq__9146_9206__$1);{
var G__9208 = cljs.core.chunk_rest.call(null,seq__9146_9206__$1);
var G__9209 = c__5497__auto___9207;
var G__9210 = cljs.core.count.call(null,c__5497__auto___9207);
var G__9211 = 0;
seq__9146_9196 = G__9208;
chunk__9147_9197 = G__9209;
count__9148_9198 = G__9210;
i__9149_9199 = G__9211;
continue;
}
} else
{var c_9212 = cljs.core.first.call(null,seq__9146_9206__$1);add_class_BANG_.call(null,elem__$1,c_9212);
{
var G__9213 = cljs.core.next.call(null,seq__9146_9206__$1);
var G__9214 = null;
var G__9215 = 0;
var G__9216 = 0;
seq__9146_9196 = G__9213;
chunk__9147_9197 = G__9214;
count__9148_9198 = G__9215;
i__9149_9199 = G__9216;
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
var G__9195 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9195__delegate.call(this,elem,classes,more_classes);};
G__9195.cljs$lang$maxFixedArity = 2;
G__9195.cljs$lang$applyTo = (function (arglist__9217){
var elem = cljs.core.first(arglist__9217);
arglist__9217 = cljs.core.next(arglist__9217);
var classes = cljs.core.first(arglist__9217);
var more_classes = cljs.core.rest(arglist__9217);
return G__9195__delegate(elem,classes,more_classes);
});
G__9195.cljs$core$IFn$_invoke$arity$variadic = G__9195__delegate;
return G__9195;
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
var G__9218 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__9218;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9227 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9227))
{var class_list_9228 = temp__4090__auto___9227;class_list_9228.remove(class$__$1);
} else
{var class_name_9229 = elem__$1.className;var new_class_name_9230 = dommy.attrs.remove_class_str.call(null,class_name_9229,class$__$1);if((class_name_9229 === new_class_name_9230))
{} else
{elem__$1.className = new_class_name_9230;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__9231__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9223 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__9224 = null;var count__9225 = 0;var i__9226 = 0;while(true){
if((i__9226 < count__9225))
{var c = cljs.core._nth.call(null,chunk__9224,i__9226);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9232 = seq__9223;
var G__9233 = chunk__9224;
var G__9234 = count__9225;
var G__9235 = (i__9226 + 1);
seq__9223 = G__9232;
chunk__9224 = G__9233;
count__9225 = G__9234;
i__9226 = G__9235;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9223);if(temp__4092__auto__)
{var seq__9223__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9223__$1))
{var c__5497__auto__ = cljs.core.chunk_first.call(null,seq__9223__$1);{
var G__9236 = cljs.core.chunk_rest.call(null,seq__9223__$1);
var G__9237 = c__5497__auto__;
var G__9238 = cljs.core.count.call(null,c__5497__auto__);
var G__9239 = 0;
seq__9223 = G__9236;
chunk__9224 = G__9237;
count__9225 = G__9238;
i__9226 = G__9239;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__9223__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9240 = cljs.core.next.call(null,seq__9223__$1);
var G__9241 = null;
var G__9242 = 0;
var G__9243 = 0;
seq__9223 = G__9240;
chunk__9224 = G__9241;
count__9225 = G__9242;
i__9226 = G__9243;
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
var G__9231 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9231__delegate.call(this,elem,class$,classes);};
G__9231.cljs$lang$maxFixedArity = 2;
G__9231.cljs$lang$applyTo = (function (arglist__9244){
var elem = cljs.core.first(arglist__9244);
arglist__9244 = cljs.core.next(arglist__9244);
var class$ = cljs.core.first(arglist__9244);
var classes = cljs.core.rest(arglist__9244);
return G__9231__delegate(elem,class$,classes);
});
G__9231.cljs$core$IFn$_invoke$arity$variadic = G__9231__delegate;
return G__9231;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___9245 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9245))
{var class_list_9246 = temp__4090__auto___9245;class_list_9246.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__9249){var vec__9250 = p__9249;var k = cljs.core.nth.call(null,vec__9250,0,null);var v = cljs.core.nth.call(null,vec__9250,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__9257_9263 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9258_9264 = null;var count__9259_9265 = 0;var i__9260_9266 = 0;while(true){
if((i__9260_9266 < count__9259_9265))
{var vec__9261_9267 = cljs.core._nth.call(null,chunk__9258_9264,i__9260_9266);var k_9268 = cljs.core.nth.call(null,vec__9261_9267,0,null);var v_9269 = cljs.core.nth.call(null,vec__9261_9267,1,null);(style[cljs.core.name.call(null,k_9268)] = v_9269);
{
var G__9270 = seq__9257_9263;
var G__9271 = chunk__9258_9264;
var G__9272 = count__9259_9265;
var G__9273 = (i__9260_9266 + 1);
seq__9257_9263 = G__9270;
chunk__9258_9264 = G__9271;
count__9259_9265 = G__9272;
i__9260_9266 = G__9273;
continue;
}
} else
{var temp__4092__auto___9274 = cljs.core.seq.call(null,seq__9257_9263);if(temp__4092__auto___9274)
{var seq__9257_9275__$1 = temp__4092__auto___9274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9257_9275__$1))
{var c__5497__auto___9276 = cljs.core.chunk_first.call(null,seq__9257_9275__$1);{
var G__9277 = cljs.core.chunk_rest.call(null,seq__9257_9275__$1);
var G__9278 = c__5497__auto___9276;
var G__9279 = cljs.core.count.call(null,c__5497__auto___9276);
var G__9280 = 0;
seq__9257_9263 = G__9277;
chunk__9258_9264 = G__9278;
count__9259_9265 = G__9279;
i__9260_9266 = G__9280;
continue;
}
} else
{var vec__9262_9281 = cljs.core.first.call(null,seq__9257_9275__$1);var k_9282 = cljs.core.nth.call(null,vec__9262_9281,0,null);var v_9283 = cljs.core.nth.call(null,vec__9262_9281,1,null);(style[cljs.core.name.call(null,k_9282)] = v_9283);
{
var G__9284 = cljs.core.next.call(null,seq__9257_9275__$1);
var G__9285 = null;
var G__9286 = 0;
var G__9287 = 0;
seq__9257_9263 = G__9284;
chunk__9258_9264 = G__9285;
count__9259_9265 = G__9286;
i__9260_9266 = G__9287;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__9288){
var elem = cljs.core.first(arglist__9288);
var kvs = cljs.core.rest(arglist__9288);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9295_9301 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9296_9302 = null;var count__9297_9303 = 0;var i__9298_9304 = 0;while(true){
if((i__9298_9304 < count__9297_9303))
{var vec__9299_9305 = cljs.core._nth.call(null,chunk__9296_9302,i__9298_9304);var k_9306 = cljs.core.nth.call(null,vec__9299_9305,0,null);var v_9307 = cljs.core.nth.call(null,vec__9299_9305,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9306,[cljs.core.str(v_9307),cljs.core.str("px")].join(''));
{
var G__9308 = seq__9295_9301;
var G__9309 = chunk__9296_9302;
var G__9310 = count__9297_9303;
var G__9311 = (i__9298_9304 + 1);
seq__9295_9301 = G__9308;
chunk__9296_9302 = G__9309;
count__9297_9303 = G__9310;
i__9298_9304 = G__9311;
continue;
}
} else
{var temp__4092__auto___9312 = cljs.core.seq.call(null,seq__9295_9301);if(temp__4092__auto___9312)
{var seq__9295_9313__$1 = temp__4092__auto___9312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9295_9313__$1))
{var c__5497__auto___9314 = cljs.core.chunk_first.call(null,seq__9295_9313__$1);{
var G__9315 = cljs.core.chunk_rest.call(null,seq__9295_9313__$1);
var G__9316 = c__5497__auto___9314;
var G__9317 = cljs.core.count.call(null,c__5497__auto___9314);
var G__9318 = 0;
seq__9295_9301 = G__9315;
chunk__9296_9302 = G__9316;
count__9297_9303 = G__9317;
i__9298_9304 = G__9318;
continue;
}
} else
{var vec__9300_9319 = cljs.core.first.call(null,seq__9295_9313__$1);var k_9320 = cljs.core.nth.call(null,vec__9300_9319,0,null);var v_9321 = cljs.core.nth.call(null,vec__9300_9319,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9320,[cljs.core.str(v_9321),cljs.core.str("px")].join(''));
{
var G__9322 = cljs.core.next.call(null,seq__9295_9313__$1);
var G__9323 = null;
var G__9324 = 0;
var G__9325 = 0;
seq__9295_9301 = G__9322;
chunk__9296_9302 = G__9323;
count__9297_9303 = G__9324;
i__9298_9304 = G__9325;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__9326){
var elem = cljs.core.first(arglist__9326);
var kvs = cljs.core.rest(arglist__9326);
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
{var G__9335 = dommy.template.__GT_node_like.call(null,elem);(G__9335[cljs.core.name.call(null,k)] = v);
return G__9335;
} else
{var G__9336 = dommy.template.__GT_node_like.call(null,elem);G__9336.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__9336;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__9343__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9337_9344 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__9338_9345 = null;var count__9339_9346 = 0;var i__9340_9347 = 0;while(true){
if((i__9340_9347 < count__9339_9346))
{var vec__9341_9348 = cljs.core._nth.call(null,chunk__9338_9345,i__9340_9347);var k_9349__$1 = cljs.core.nth.call(null,vec__9341_9348,0,null);var v_9350__$1 = cljs.core.nth.call(null,vec__9341_9348,1,null);set_attr_BANG_.call(null,elem__$1,k_9349__$1,v_9350__$1);
{
var G__9351 = seq__9337_9344;
var G__9352 = chunk__9338_9345;
var G__9353 = count__9339_9346;
var G__9354 = (i__9340_9347 + 1);
seq__9337_9344 = G__9351;
chunk__9338_9345 = G__9352;
count__9339_9346 = G__9353;
i__9340_9347 = G__9354;
continue;
}
} else
{var temp__4092__auto___9355 = cljs.core.seq.call(null,seq__9337_9344);if(temp__4092__auto___9355)
{var seq__9337_9356__$1 = temp__4092__auto___9355;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9337_9356__$1))
{var c__5497__auto___9357 = cljs.core.chunk_first.call(null,seq__9337_9356__$1);{
var G__9358 = cljs.core.chunk_rest.call(null,seq__9337_9356__$1);
var G__9359 = c__5497__auto___9357;
var G__9360 = cljs.core.count.call(null,c__5497__auto___9357);
var G__9361 = 0;
seq__9337_9344 = G__9358;
chunk__9338_9345 = G__9359;
count__9339_9346 = G__9360;
i__9340_9347 = G__9361;
continue;
}
} else
{var vec__9342_9362 = cljs.core.first.call(null,seq__9337_9356__$1);var k_9363__$1 = cljs.core.nth.call(null,vec__9342_9362,0,null);var v_9364__$1 = cljs.core.nth.call(null,vec__9342_9362,1,null);set_attr_BANG_.call(null,elem__$1,k_9363__$1,v_9364__$1);
{
var G__9365 = cljs.core.next.call(null,seq__9337_9356__$1);
var G__9366 = null;
var G__9367 = 0;
var G__9368 = 0;
seq__9337_9344 = G__9365;
chunk__9338_9345 = G__9366;
count__9339_9346 = G__9367;
i__9340_9347 = G__9368;
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
var G__9343 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__9343__delegate.call(this,elem,k,v,kvs);};
G__9343.cljs$lang$maxFixedArity = 3;
G__9343.cljs$lang$applyTo = (function (arglist__9369){
var elem = cljs.core.first(arglist__9369);
arglist__9369 = cljs.core.next(arglist__9369);
var k = cljs.core.first(arglist__9369);
arglist__9369 = cljs.core.next(arglist__9369);
var v = cljs.core.first(arglist__9369);
var kvs = cljs.core.rest(arglist__9369);
return G__9343__delegate(elem,k,v,kvs);
});
G__9343.cljs$core$IFn$_invoke$arity$variadic = G__9343__delegate;
return G__9343;
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
var G__9378__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9374_9379 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__9375_9380 = null;var count__9376_9381 = 0;var i__9377_9382 = 0;while(true){
if((i__9377_9382 < count__9376_9381))
{var k_9383__$1 = cljs.core._nth.call(null,chunk__9375_9380,i__9377_9382);remove_attr_BANG_.call(null,elem__$1,k_9383__$1);
{
var G__9384 = seq__9374_9379;
var G__9385 = chunk__9375_9380;
var G__9386 = count__9376_9381;
var G__9387 = (i__9377_9382 + 1);
seq__9374_9379 = G__9384;
chunk__9375_9380 = G__9385;
count__9376_9381 = G__9386;
i__9377_9382 = G__9387;
continue;
}
} else
{var temp__4092__auto___9388 = cljs.core.seq.call(null,seq__9374_9379);if(temp__4092__auto___9388)
{var seq__9374_9389__$1 = temp__4092__auto___9388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9374_9389__$1))
{var c__5497__auto___9390 = cljs.core.chunk_first.call(null,seq__9374_9389__$1);{
var G__9391 = cljs.core.chunk_rest.call(null,seq__9374_9389__$1);
var G__9392 = c__5497__auto___9390;
var G__9393 = cljs.core.count.call(null,c__5497__auto___9390);
var G__9394 = 0;
seq__9374_9379 = G__9391;
chunk__9375_9380 = G__9392;
count__9376_9381 = G__9393;
i__9377_9382 = G__9394;
continue;
}
} else
{var k_9395__$1 = cljs.core.first.call(null,seq__9374_9389__$1);remove_attr_BANG_.call(null,elem__$1,k_9395__$1);
{
var G__9396 = cljs.core.next.call(null,seq__9374_9389__$1);
var G__9397 = null;
var G__9398 = 0;
var G__9399 = 0;
seq__9374_9379 = G__9396;
chunk__9375_9380 = G__9397;
count__9376_9381 = G__9398;
i__9377_9382 = G__9399;
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
var G__9378 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9378__delegate.call(this,elem,k,ks);};
G__9378.cljs$lang$maxFixedArity = 2;
G__9378.cljs$lang$applyTo = (function (arglist__9400){
var elem = cljs.core.first(arglist__9400);
arglist__9400 = cljs.core.next(arglist__9400);
var k = cljs.core.first(arglist__9400);
var ks = cljs.core.rest(arglist__9400);
return G__9378__delegate(elem,k,ks);
});
G__9378.cljs$core$IFn$_invoke$arity$variadic = G__9378__delegate;
return G__9378;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__9402 = dommy.template.__GT_node_like.call(null,elem);G__9402.style.display = ((show_QMARK_)?"":"none");
return G__9402;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__9404 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9404,false);
return G__9404;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__9406 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9406,true);
return G__9406;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__9408 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__9408["constructor"] = Object);
return G__9408;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
