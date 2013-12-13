// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj9259 = {};return obj9259;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__4760__auto__ = this$;if(and__4760__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__4760__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__5375__auto__ = (((this$ == null))?null:this$);return (function (){var or__4772__auto__ = (dommy.template._elem[goog.typeOf(x__5375__auto__)]);if(or__4772__auto__)
{return or__4772__auto__;
} else
{var or__4772__auto____$1 = (dommy.template._elem["_"]);if(or__4772__auto____$1)
{return or__4772__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = document.createElement(tag);if((base_idx >= 0))
{var str_9262 = node_str.substring(base_idx);while(true){
var next_idx_9263 = dommy.template.next_css_index.call(null,str_9262,1);var frag_9264 = (((next_idx_9263 >= 0))?str_9262.substring(0,next_idx_9263):str_9262);var G__9261_9265 = frag_9264.charAt(0);if(cljs.core._EQ_.call(null,"#",G__9261_9265))
{node.setAttribute("id",frag_9264.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__9261_9265))
{dommy.attrs.add_class_BANG_.call(null,node,frag_9264.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_9264.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_9263 >= 0))
{{
var G__9266 = str_9262.substring(next_idx_9263);
str_9262 = G__9266;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__9272 = data;if(G__9272)
{var bit__5398__auto__ = null;if(cljs.core.truth_((function (){var or__4772__auto__ = bit__5398__auto__;if(cljs.core.truth_(or__4772__auto__))
{return or__4772__auto__;
} else
{return G__9272.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9272.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9272);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9272);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__9273_9277 = cljs.core.seq.call(null,data);var chunk__9274_9278 = null;var count__9275_9279 = 0;var i__9276_9280 = 0;while(true){
if((i__9276_9280 < count__9275_9279))
{var child_9281 = cljs.core._nth.call(null,chunk__9274_9278,i__9276_9280);__GT_document_fragment.call(null,result_frag,child_9281);
{
var G__9282 = seq__9273_9277;
var G__9283 = chunk__9274_9278;
var G__9284 = count__9275_9279;
var G__9285 = (i__9276_9280 + 1);
seq__9273_9277 = G__9282;
chunk__9274_9278 = G__9283;
count__9275_9279 = G__9284;
i__9276_9280 = G__9285;
continue;
}
} else
{var temp__4092__auto___9286 = cljs.core.seq.call(null,seq__9273_9277);if(temp__4092__auto___9286)
{var seq__9273_9287__$1 = temp__4092__auto___9286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9273_9287__$1))
{var c__5496__auto___9288 = cljs.core.chunk_first.call(null,seq__9273_9287__$1);{
var G__9289 = cljs.core.chunk_rest.call(null,seq__9273_9287__$1);
var G__9290 = c__5496__auto___9288;
var G__9291 = cljs.core.count.call(null,c__5496__auto___9288);
var G__9292 = 0;
seq__9273_9277 = G__9289;
chunk__9274_9278 = G__9290;
count__9275_9279 = G__9291;
i__9276_9280 = G__9292;
continue;
}
} else
{var child_9293 = cljs.core.first.call(null,seq__9273_9287__$1);__GT_document_fragment.call(null,result_frag,child_9293);
{
var G__9294 = cljs.core.next.call(null,seq__9273_9287__$1);
var G__9295 = null;
var G__9296 = 0;
var G__9297 = 0;
seq__9273_9277 = G__9294;
chunk__9274_9278 = G__9295;
count__9275_9279 = G__9296;
i__9276_9280 = G__9297;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__9299 = data;if(G__9299)
{var bit__5398__auto__ = null;if(cljs.core.truth_((function (){var or__4772__auto__ = bit__5398__auto__;if(cljs.core.truth_(or__4772__auto__))
{return or__4772__auto__;
} else
{return G__9299.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9299.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9299);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9299);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__9300){var vec__9320 = p__9300;var tag_name = cljs.core.nth.call(null,vec__9320,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__9320,1,null);var children = cljs.core.nthnext.call(null,vec__9320,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__9322 = maybe_attrs;if(G__9322)
{var bit__5398__auto__ = null;if(cljs.core.truth_((function (){var or__4772__auto__ = bit__5398__auto__;if(cljs.core.truth_(or__4772__auto__))
{return or__4772__auto__;
} else
{return G__9322.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9322.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9322);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9322);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__9323_9339 = cljs.core.seq.call(null,attrs);var chunk__9324_9340 = null;var count__9325_9341 = 0;var i__9326_9342 = 0;while(true){
if((i__9326_9342 < count__9325_9341))
{var vec__9327_9343 = cljs.core._nth.call(null,chunk__9324_9340,i__9326_9342);var k_9344 = cljs.core.nth.call(null,vec__9327_9343,0,null);var v_9345 = cljs.core.nth.call(null,vec__9327_9343,1,null);var G__9328_9346 = k_9344;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9328_9346))
{var seq__9329_9347 = cljs.core.seq.call(null,v_9345);var chunk__9330_9348 = null;var count__9331_9349 = 0;var i__9332_9350 = 0;while(true){
if((i__9332_9350 < count__9331_9349))
{var c_9351 = cljs.core._nth.call(null,chunk__9330_9348,i__9332_9350);dommy.attrs.add_class_BANG_.call(null,n,c_9351);
{
var G__9352 = seq__9329_9347;
var G__9353 = chunk__9330_9348;
var G__9354 = count__9331_9349;
var G__9355 = (i__9332_9350 + 1);
seq__9329_9347 = G__9352;
chunk__9330_9348 = G__9353;
count__9331_9349 = G__9354;
i__9332_9350 = G__9355;
continue;
}
} else
{var temp__4092__auto___9356 = cljs.core.seq.call(null,seq__9329_9347);if(temp__4092__auto___9356)
{var seq__9329_9357__$1 = temp__4092__auto___9356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9329_9357__$1))
{var c__5496__auto___9358 = cljs.core.chunk_first.call(null,seq__9329_9357__$1);{
var G__9359 = cljs.core.chunk_rest.call(null,seq__9329_9357__$1);
var G__9360 = c__5496__auto___9358;
var G__9361 = cljs.core.count.call(null,c__5496__auto___9358);
var G__9362 = 0;
seq__9329_9347 = G__9359;
chunk__9330_9348 = G__9360;
count__9331_9349 = G__9361;
i__9332_9350 = G__9362;
continue;
}
} else
{var c_9363 = cljs.core.first.call(null,seq__9329_9357__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9363);
{
var G__9364 = cljs.core.next.call(null,seq__9329_9357__$1);
var G__9365 = null;
var G__9366 = 0;
var G__9367 = 0;
seq__9329_9347 = G__9364;
chunk__9330_9348 = G__9365;
count__9331_9349 = G__9366;
i__9332_9350 = G__9367;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9328_9346))
{dommy.attrs.add_class_BANG_.call(null,n,v_9345);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9344,v_9345);
} else
{}
}
}
{
var G__9368 = seq__9323_9339;
var G__9369 = chunk__9324_9340;
var G__9370 = count__9325_9341;
var G__9371 = (i__9326_9342 + 1);
seq__9323_9339 = G__9368;
chunk__9324_9340 = G__9369;
count__9325_9341 = G__9370;
i__9326_9342 = G__9371;
continue;
}
} else
{var temp__4092__auto___9372 = cljs.core.seq.call(null,seq__9323_9339);if(temp__4092__auto___9372)
{var seq__9323_9373__$1 = temp__4092__auto___9372;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9323_9373__$1))
{var c__5496__auto___9374 = cljs.core.chunk_first.call(null,seq__9323_9373__$1);{
var G__9375 = cljs.core.chunk_rest.call(null,seq__9323_9373__$1);
var G__9376 = c__5496__auto___9374;
var G__9377 = cljs.core.count.call(null,c__5496__auto___9374);
var G__9378 = 0;
seq__9323_9339 = G__9375;
chunk__9324_9340 = G__9376;
count__9325_9341 = G__9377;
i__9326_9342 = G__9378;
continue;
}
} else
{var vec__9333_9379 = cljs.core.first.call(null,seq__9323_9373__$1);var k_9380 = cljs.core.nth.call(null,vec__9333_9379,0,null);var v_9381 = cljs.core.nth.call(null,vec__9333_9379,1,null);var G__9334_9382 = k_9380;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9334_9382))
{var seq__9335_9383 = cljs.core.seq.call(null,v_9381);var chunk__9336_9384 = null;var count__9337_9385 = 0;var i__9338_9386 = 0;while(true){
if((i__9338_9386 < count__9337_9385))
{var c_9387 = cljs.core._nth.call(null,chunk__9336_9384,i__9338_9386);dommy.attrs.add_class_BANG_.call(null,n,c_9387);
{
var G__9388 = seq__9335_9383;
var G__9389 = chunk__9336_9384;
var G__9390 = count__9337_9385;
var G__9391 = (i__9338_9386 + 1);
seq__9335_9383 = G__9388;
chunk__9336_9384 = G__9389;
count__9337_9385 = G__9390;
i__9338_9386 = G__9391;
continue;
}
} else
{var temp__4092__auto___9392__$1 = cljs.core.seq.call(null,seq__9335_9383);if(temp__4092__auto___9392__$1)
{var seq__9335_9393__$1 = temp__4092__auto___9392__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9335_9393__$1))
{var c__5496__auto___9394 = cljs.core.chunk_first.call(null,seq__9335_9393__$1);{
var G__9395 = cljs.core.chunk_rest.call(null,seq__9335_9393__$1);
var G__9396 = c__5496__auto___9394;
var G__9397 = cljs.core.count.call(null,c__5496__auto___9394);
var G__9398 = 0;
seq__9335_9383 = G__9395;
chunk__9336_9384 = G__9396;
count__9337_9385 = G__9397;
i__9338_9386 = G__9398;
continue;
}
} else
{var c_9399 = cljs.core.first.call(null,seq__9335_9393__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9399);
{
var G__9400 = cljs.core.next.call(null,seq__9335_9393__$1);
var G__9401 = null;
var G__9402 = 0;
var G__9403 = 0;
seq__9335_9383 = G__9400;
chunk__9336_9384 = G__9401;
count__9337_9385 = G__9402;
i__9338_9386 = G__9403;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9334_9382))
{dommy.attrs.add_class_BANG_.call(null,n,v_9381);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9380,v_9381);
} else
{}
}
}
{
var G__9404 = cljs.core.next.call(null,seq__9323_9373__$1);
var G__9405 = null;
var G__9406 = 0;
var G__9407 = 0;
seq__9323_9339 = G__9404;
chunk__9324_9340 = G__9405;
count__9325_9341 = G__9406;
i__9326_9342 = G__9407;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e9408){if((e9408 instanceof ReferenceError))
{var __9409 = e9408;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9408;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__9411 = data;if(G__9411)
{var bit__5398__auto__ = null;if(cljs.core.truth_((function (){var or__4772__auto__ = bit__5398__auto__;if(cljs.core.truth_(or__4772__auto__))
{return or__4772__auto__;
} else
{return G__9411.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9411.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9411);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9411);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
