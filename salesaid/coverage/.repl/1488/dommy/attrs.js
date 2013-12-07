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
var G__9223 = (i + class$.length);
start_from = G__9223;
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
{var temp__4090__auto___9248 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9248))
{var class_list_9249 = temp__4090__auto___9248;var seq__9236_9250 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9237_9251 = null;var count__9238_9252 = 0;var i__9239_9253 = 0;while(true){
if((i__9239_9253 < count__9238_9252))
{var class_9254 = cljs.core._nth.call(null,chunk__9237_9251,i__9239_9253);class_list_9249.add(class_9254);
{
var G__9255 = seq__9236_9250;
var G__9256 = chunk__9237_9251;
var G__9257 = count__9238_9252;
var G__9258 = (i__9239_9253 + 1);
seq__9236_9250 = G__9255;
chunk__9237_9251 = G__9256;
count__9238_9252 = G__9257;
i__9239_9253 = G__9258;
continue;
}
} else
{var temp__4092__auto___9259 = cljs.core.seq.call(null,seq__9236_9250);if(temp__4092__auto___9259)
{var seq__9236_9260__$1 = temp__4092__auto___9259;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9236_9260__$1))
{var c__5497__auto___9261 = cljs.core.chunk_first.call(null,seq__9236_9260__$1);{
var G__9262 = cljs.core.chunk_rest.call(null,seq__9236_9260__$1);
var G__9263 = c__5497__auto___9261;
var G__9264 = cljs.core.count.call(null,c__5497__auto___9261);
var G__9265 = 0;
seq__9236_9250 = G__9262;
chunk__9237_9251 = G__9263;
count__9238_9252 = G__9264;
i__9239_9253 = G__9265;
continue;
}
} else
{var class_9266 = cljs.core.first.call(null,seq__9236_9260__$1);class_list_9249.add(class_9266);
{
var G__9267 = cljs.core.next.call(null,seq__9236_9260__$1);
var G__9268 = null;
var G__9269 = 0;
var G__9270 = 0;
seq__9236_9250 = G__9267;
chunk__9237_9251 = G__9268;
count__9238_9252 = G__9269;
i__9239_9253 = G__9270;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_9271 = elem__$1.className;var seq__9240_9272 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9241_9273 = null;var count__9242_9274 = 0;var i__9243_9275 = 0;while(true){
if((i__9243_9275 < count__9242_9274))
{var class_9276 = cljs.core._nth.call(null,chunk__9241_9273,i__9243_9275);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9271,class_9276)))
{} else
{elem__$1.className = (((class_name_9271 === ""))?class_9276:[cljs.core.str(class_name_9271),cljs.core.str(" "),cljs.core.str(class_9276)].join(''));
}
{
var G__9277 = seq__9240_9272;
var G__9278 = chunk__9241_9273;
var G__9279 = count__9242_9274;
var G__9280 = (i__9243_9275 + 1);
seq__9240_9272 = G__9277;
chunk__9241_9273 = G__9278;
count__9242_9274 = G__9279;
i__9243_9275 = G__9280;
continue;
}
} else
{var temp__4092__auto___9281 = cljs.core.seq.call(null,seq__9240_9272);if(temp__4092__auto___9281)
{var seq__9240_9282__$1 = temp__4092__auto___9281;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9240_9282__$1))
{var c__5497__auto___9283 = cljs.core.chunk_first.call(null,seq__9240_9282__$1);{
var G__9284 = cljs.core.chunk_rest.call(null,seq__9240_9282__$1);
var G__9285 = c__5497__auto___9283;
var G__9286 = cljs.core.count.call(null,c__5497__auto___9283);
var G__9287 = 0;
seq__9240_9272 = G__9284;
chunk__9241_9273 = G__9285;
count__9242_9274 = G__9286;
i__9243_9275 = G__9287;
continue;
}
} else
{var class_9288 = cljs.core.first.call(null,seq__9240_9282__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9271,class_9288)))
{} else
{elem__$1.className = (((class_name_9271 === ""))?class_9288:[cljs.core.str(class_name_9271),cljs.core.str(" "),cljs.core.str(class_9288)].join(''));
}
{
var G__9289 = cljs.core.next.call(null,seq__9240_9282__$1);
var G__9290 = null;
var G__9291 = 0;
var G__9292 = 0;
seq__9240_9272 = G__9289;
chunk__9241_9273 = G__9290;
count__9242_9274 = G__9291;
i__9243_9275 = G__9292;
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
var G__9293__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9244_9294 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__9245_9295 = null;var count__9246_9296 = 0;var i__9247_9297 = 0;while(true){
if((i__9247_9297 < count__9246_9296))
{var c_9298 = cljs.core._nth.call(null,chunk__9245_9295,i__9247_9297);add_class_BANG_.call(null,elem__$1,c_9298);
{
var G__9299 = seq__9244_9294;
var G__9300 = chunk__9245_9295;
var G__9301 = count__9246_9296;
var G__9302 = (i__9247_9297 + 1);
seq__9244_9294 = G__9299;
chunk__9245_9295 = G__9300;
count__9246_9296 = G__9301;
i__9247_9297 = G__9302;
continue;
}
} else
{var temp__4092__auto___9303 = cljs.core.seq.call(null,seq__9244_9294);if(temp__4092__auto___9303)
{var seq__9244_9304__$1 = temp__4092__auto___9303;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9244_9304__$1))
{var c__5497__auto___9305 = cljs.core.chunk_first.call(null,seq__9244_9304__$1);{
var G__9306 = cljs.core.chunk_rest.call(null,seq__9244_9304__$1);
var G__9307 = c__5497__auto___9305;
var G__9308 = cljs.core.count.call(null,c__5497__auto___9305);
var G__9309 = 0;
seq__9244_9294 = G__9306;
chunk__9245_9295 = G__9307;
count__9246_9296 = G__9308;
i__9247_9297 = G__9309;
continue;
}
} else
{var c_9310 = cljs.core.first.call(null,seq__9244_9304__$1);add_class_BANG_.call(null,elem__$1,c_9310);
{
var G__9311 = cljs.core.next.call(null,seq__9244_9304__$1);
var G__9312 = null;
var G__9313 = 0;
var G__9314 = 0;
seq__9244_9294 = G__9311;
chunk__9245_9295 = G__9312;
count__9246_9296 = G__9313;
i__9247_9297 = G__9314;
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
var G__9293 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9293__delegate.call(this,elem,classes,more_classes);};
G__9293.cljs$lang$maxFixedArity = 2;
G__9293.cljs$lang$applyTo = (function (arglist__9315){
var elem = cljs.core.first(arglist__9315);
arglist__9315 = cljs.core.next(arglist__9315);
var classes = cljs.core.first(arglist__9315);
var more_classes = cljs.core.rest(arglist__9315);
return G__9293__delegate(elem,classes,more_classes);
});
G__9293.cljs$core$IFn$_invoke$arity$variadic = G__9293__delegate;
return G__9293;
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
var G__9316 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__9316;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9325 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9325))
{var class_list_9326 = temp__4090__auto___9325;class_list_9326.remove(class$__$1);
} else
{var class_name_9327 = elem__$1.className;var new_class_name_9328 = dommy.attrs.remove_class_str.call(null,class_name_9327,class$__$1);if((class_name_9327 === new_class_name_9328))
{} else
{elem__$1.className = new_class_name_9328;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__9329__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9321 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__9322 = null;var count__9323 = 0;var i__9324 = 0;while(true){
if((i__9324 < count__9323))
{var c = cljs.core._nth.call(null,chunk__9322,i__9324);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9330 = seq__9321;
var G__9331 = chunk__9322;
var G__9332 = count__9323;
var G__9333 = (i__9324 + 1);
seq__9321 = G__9330;
chunk__9322 = G__9331;
count__9323 = G__9332;
i__9324 = G__9333;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9321);if(temp__4092__auto__)
{var seq__9321__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9321__$1))
{var c__5497__auto__ = cljs.core.chunk_first.call(null,seq__9321__$1);{
var G__9334 = cljs.core.chunk_rest.call(null,seq__9321__$1);
var G__9335 = c__5497__auto__;
var G__9336 = cljs.core.count.call(null,c__5497__auto__);
var G__9337 = 0;
seq__9321 = G__9334;
chunk__9322 = G__9335;
count__9323 = G__9336;
i__9324 = G__9337;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__9321__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9338 = cljs.core.next.call(null,seq__9321__$1);
var G__9339 = null;
var G__9340 = 0;
var G__9341 = 0;
seq__9321 = G__9338;
chunk__9322 = G__9339;
count__9323 = G__9340;
i__9324 = G__9341;
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
var G__9329 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9329__delegate.call(this,elem,class$,classes);};
G__9329.cljs$lang$maxFixedArity = 2;
G__9329.cljs$lang$applyTo = (function (arglist__9342){
var elem = cljs.core.first(arglist__9342);
arglist__9342 = cljs.core.next(arglist__9342);
var class$ = cljs.core.first(arglist__9342);
var classes = cljs.core.rest(arglist__9342);
return G__9329__delegate(elem,class$,classes);
});
G__9329.cljs$core$IFn$_invoke$arity$variadic = G__9329__delegate;
return G__9329;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___9343 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9343))
{var class_list_9344 = temp__4090__auto___9343;class_list_9344.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__9347){var vec__9348 = p__9347;var k = cljs.core.nth.call(null,vec__9348,0,null);var v = cljs.core.nth.call(null,vec__9348,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__9355_9361 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9356_9362 = null;var count__9357_9363 = 0;var i__9358_9364 = 0;while(true){
if((i__9358_9364 < count__9357_9363))
{var vec__9359_9365 = cljs.core._nth.call(null,chunk__9356_9362,i__9358_9364);var k_9366 = cljs.core.nth.call(null,vec__9359_9365,0,null);var v_9367 = cljs.core.nth.call(null,vec__9359_9365,1,null);(style[cljs.core.name.call(null,k_9366)] = v_9367);
{
var G__9368 = seq__9355_9361;
var G__9369 = chunk__9356_9362;
var G__9370 = count__9357_9363;
var G__9371 = (i__9358_9364 + 1);
seq__9355_9361 = G__9368;
chunk__9356_9362 = G__9369;
count__9357_9363 = G__9370;
i__9358_9364 = G__9371;
continue;
}
} else
{var temp__4092__auto___9372 = cljs.core.seq.call(null,seq__9355_9361);if(temp__4092__auto___9372)
{var seq__9355_9373__$1 = temp__4092__auto___9372;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9355_9373__$1))
{var c__5497__auto___9374 = cljs.core.chunk_first.call(null,seq__9355_9373__$1);{
var G__9375 = cljs.core.chunk_rest.call(null,seq__9355_9373__$1);
var G__9376 = c__5497__auto___9374;
var G__9377 = cljs.core.count.call(null,c__5497__auto___9374);
var G__9378 = 0;
seq__9355_9361 = G__9375;
chunk__9356_9362 = G__9376;
count__9357_9363 = G__9377;
i__9358_9364 = G__9378;
continue;
}
} else
{var vec__9360_9379 = cljs.core.first.call(null,seq__9355_9373__$1);var k_9380 = cljs.core.nth.call(null,vec__9360_9379,0,null);var v_9381 = cljs.core.nth.call(null,vec__9360_9379,1,null);(style[cljs.core.name.call(null,k_9380)] = v_9381);
{
var G__9382 = cljs.core.next.call(null,seq__9355_9373__$1);
var G__9383 = null;
var G__9384 = 0;
var G__9385 = 0;
seq__9355_9361 = G__9382;
chunk__9356_9362 = G__9383;
count__9357_9363 = G__9384;
i__9358_9364 = G__9385;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__9386){
var elem = cljs.core.first(arglist__9386);
var kvs = cljs.core.rest(arglist__9386);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9393_9399 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9394_9400 = null;var count__9395_9401 = 0;var i__9396_9402 = 0;while(true){
if((i__9396_9402 < count__9395_9401))
{var vec__9397_9403 = cljs.core._nth.call(null,chunk__9394_9400,i__9396_9402);var k_9404 = cljs.core.nth.call(null,vec__9397_9403,0,null);var v_9405 = cljs.core.nth.call(null,vec__9397_9403,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9404,[cljs.core.str(v_9405),cljs.core.str("px")].join(''));
{
var G__9406 = seq__9393_9399;
var G__9407 = chunk__9394_9400;
var G__9408 = count__9395_9401;
var G__9409 = (i__9396_9402 + 1);
seq__9393_9399 = G__9406;
chunk__9394_9400 = G__9407;
count__9395_9401 = G__9408;
i__9396_9402 = G__9409;
continue;
}
} else
{var temp__4092__auto___9410 = cljs.core.seq.call(null,seq__9393_9399);if(temp__4092__auto___9410)
{var seq__9393_9411__$1 = temp__4092__auto___9410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9393_9411__$1))
{var c__5497__auto___9412 = cljs.core.chunk_first.call(null,seq__9393_9411__$1);{
var G__9413 = cljs.core.chunk_rest.call(null,seq__9393_9411__$1);
var G__9414 = c__5497__auto___9412;
var G__9415 = cljs.core.count.call(null,c__5497__auto___9412);
var G__9416 = 0;
seq__9393_9399 = G__9413;
chunk__9394_9400 = G__9414;
count__9395_9401 = G__9415;
i__9396_9402 = G__9416;
continue;
}
} else
{var vec__9398_9417 = cljs.core.first.call(null,seq__9393_9411__$1);var k_9418 = cljs.core.nth.call(null,vec__9398_9417,0,null);var v_9419 = cljs.core.nth.call(null,vec__9398_9417,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9418,[cljs.core.str(v_9419),cljs.core.str("px")].join(''));
{
var G__9420 = cljs.core.next.call(null,seq__9393_9411__$1);
var G__9421 = null;
var G__9422 = 0;
var G__9423 = 0;
seq__9393_9399 = G__9420;
chunk__9394_9400 = G__9421;
count__9395_9401 = G__9422;
i__9396_9402 = G__9423;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__9424){
var elem = cljs.core.first(arglist__9424);
var kvs = cljs.core.rest(arglist__9424);
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
{var G__9433 = dommy.template.__GT_node_like.call(null,elem);(G__9433[cljs.core.name.call(null,k)] = v);
return G__9433;
} else
{var G__9434 = dommy.template.__GT_node_like.call(null,elem);G__9434.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__9434;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__9441__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9435_9442 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__9436_9443 = null;var count__9437_9444 = 0;var i__9438_9445 = 0;while(true){
if((i__9438_9445 < count__9437_9444))
{var vec__9439_9446 = cljs.core._nth.call(null,chunk__9436_9443,i__9438_9445);var k_9447__$1 = cljs.core.nth.call(null,vec__9439_9446,0,null);var v_9448__$1 = cljs.core.nth.call(null,vec__9439_9446,1,null);set_attr_BANG_.call(null,elem__$1,k_9447__$1,v_9448__$1);
{
var G__9449 = seq__9435_9442;
var G__9450 = chunk__9436_9443;
var G__9451 = count__9437_9444;
var G__9452 = (i__9438_9445 + 1);
seq__9435_9442 = G__9449;
chunk__9436_9443 = G__9450;
count__9437_9444 = G__9451;
i__9438_9445 = G__9452;
continue;
}
} else
{var temp__4092__auto___9453 = cljs.core.seq.call(null,seq__9435_9442);if(temp__4092__auto___9453)
{var seq__9435_9454__$1 = temp__4092__auto___9453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9435_9454__$1))
{var c__5497__auto___9455 = cljs.core.chunk_first.call(null,seq__9435_9454__$1);{
var G__9456 = cljs.core.chunk_rest.call(null,seq__9435_9454__$1);
var G__9457 = c__5497__auto___9455;
var G__9458 = cljs.core.count.call(null,c__5497__auto___9455);
var G__9459 = 0;
seq__9435_9442 = G__9456;
chunk__9436_9443 = G__9457;
count__9437_9444 = G__9458;
i__9438_9445 = G__9459;
continue;
}
} else
{var vec__9440_9460 = cljs.core.first.call(null,seq__9435_9454__$1);var k_9461__$1 = cljs.core.nth.call(null,vec__9440_9460,0,null);var v_9462__$1 = cljs.core.nth.call(null,vec__9440_9460,1,null);set_attr_BANG_.call(null,elem__$1,k_9461__$1,v_9462__$1);
{
var G__9463 = cljs.core.next.call(null,seq__9435_9454__$1);
var G__9464 = null;
var G__9465 = 0;
var G__9466 = 0;
seq__9435_9442 = G__9463;
chunk__9436_9443 = G__9464;
count__9437_9444 = G__9465;
i__9438_9445 = G__9466;
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
var G__9441 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__9441__delegate.call(this,elem,k,v,kvs);};
G__9441.cljs$lang$maxFixedArity = 3;
G__9441.cljs$lang$applyTo = (function (arglist__9467){
var elem = cljs.core.first(arglist__9467);
arglist__9467 = cljs.core.next(arglist__9467);
var k = cljs.core.first(arglist__9467);
arglist__9467 = cljs.core.next(arglist__9467);
var v = cljs.core.first(arglist__9467);
var kvs = cljs.core.rest(arglist__9467);
return G__9441__delegate(elem,k,v,kvs);
});
G__9441.cljs$core$IFn$_invoke$arity$variadic = G__9441__delegate;
return G__9441;
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
var G__9476__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9472_9477 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__9473_9478 = null;var count__9474_9479 = 0;var i__9475_9480 = 0;while(true){
if((i__9475_9480 < count__9474_9479))
{var k_9481__$1 = cljs.core._nth.call(null,chunk__9473_9478,i__9475_9480);remove_attr_BANG_.call(null,elem__$1,k_9481__$1);
{
var G__9482 = seq__9472_9477;
var G__9483 = chunk__9473_9478;
var G__9484 = count__9474_9479;
var G__9485 = (i__9475_9480 + 1);
seq__9472_9477 = G__9482;
chunk__9473_9478 = G__9483;
count__9474_9479 = G__9484;
i__9475_9480 = G__9485;
continue;
}
} else
{var temp__4092__auto___9486 = cljs.core.seq.call(null,seq__9472_9477);if(temp__4092__auto___9486)
{var seq__9472_9487__$1 = temp__4092__auto___9486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9472_9487__$1))
{var c__5497__auto___9488 = cljs.core.chunk_first.call(null,seq__9472_9487__$1);{
var G__9489 = cljs.core.chunk_rest.call(null,seq__9472_9487__$1);
var G__9490 = c__5497__auto___9488;
var G__9491 = cljs.core.count.call(null,c__5497__auto___9488);
var G__9492 = 0;
seq__9472_9477 = G__9489;
chunk__9473_9478 = G__9490;
count__9474_9479 = G__9491;
i__9475_9480 = G__9492;
continue;
}
} else
{var k_9493__$1 = cljs.core.first.call(null,seq__9472_9487__$1);remove_attr_BANG_.call(null,elem__$1,k_9493__$1);
{
var G__9494 = cljs.core.next.call(null,seq__9472_9487__$1);
var G__9495 = null;
var G__9496 = 0;
var G__9497 = 0;
seq__9472_9477 = G__9494;
chunk__9473_9478 = G__9495;
count__9474_9479 = G__9496;
i__9475_9480 = G__9497;
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
var G__9476 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9476__delegate.call(this,elem,k,ks);};
G__9476.cljs$lang$maxFixedArity = 2;
G__9476.cljs$lang$applyTo = (function (arglist__9498){
var elem = cljs.core.first(arglist__9498);
arglist__9498 = cljs.core.next(arglist__9498);
var k = cljs.core.first(arglist__9498);
var ks = cljs.core.rest(arglist__9498);
return G__9476__delegate(elem,k,ks);
});
G__9476.cljs$core$IFn$_invoke$arity$variadic = G__9476__delegate;
return G__9476;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__9500 = dommy.template.__GT_node_like.call(null,elem);G__9500.style.display = ((show_QMARK_)?"":"none");
return G__9500;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__9502 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9502,false);
return G__9502;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__9504 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9504,true);
return G__9504;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__9506 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__9506["constructor"] = Object);
return G__9506;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
