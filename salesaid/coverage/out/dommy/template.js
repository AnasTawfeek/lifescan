// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj8388 = {};return obj8388;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3279__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (dommy.template._elem[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (dommy.template._elem["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
{var str_8391 = node_str.substring(base_idx);while(true){
var next_idx_8392 = dommy.template.next_css_index.call(null,str_8391,1);var frag_8393 = (((next_idx_8392 >= 0))?str_8391.substring(0,next_idx_8392):str_8391);var G__8390_8394 = frag_8393.charAt(0);if(cljs.core._EQ_.call(null,"#",G__8390_8394))
{node.setAttribute("id",frag_8393.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__8390_8394))
{dommy.attrs.add_class_BANG_.call(null,node,frag_8393.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_8393.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_8392 >= 0))
{{
var G__8395 = str_8391.substring(next_idx_8392);
str_8391 = G__8395;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__8401 = data;if(G__8401)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__8401.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8401.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8401);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8401);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__8402_8406 = cljs.core.seq.call(null,data);var chunk__8403_8407 = null;var count__8404_8408 = 0;var i__8405_8409 = 0;while(true){
if((i__8405_8409 < count__8404_8408))
{var child_8410 = cljs.core._nth.call(null,chunk__8403_8407,i__8405_8409);__GT_document_fragment.call(null,result_frag,child_8410);
{
var G__8411 = seq__8402_8406;
var G__8412 = chunk__8403_8407;
var G__8413 = count__8404_8408;
var G__8414 = (i__8405_8409 + 1);
seq__8402_8406 = G__8411;
chunk__8403_8407 = G__8412;
count__8404_8408 = G__8413;
i__8405_8409 = G__8414;
continue;
}
} else
{var temp__4092__auto___8415 = cljs.core.seq.call(null,seq__8402_8406);if(temp__4092__auto___8415)
{var seq__8402_8416__$1 = temp__4092__auto___8415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8402_8416__$1))
{var c__4015__auto___8417 = cljs.core.chunk_first.call(null,seq__8402_8416__$1);{
var G__8418 = cljs.core.chunk_rest.call(null,seq__8402_8416__$1);
var G__8419 = c__4015__auto___8417;
var G__8420 = cljs.core.count.call(null,c__4015__auto___8417);
var G__8421 = 0;
seq__8402_8406 = G__8418;
chunk__8403_8407 = G__8419;
count__8404_8408 = G__8420;
i__8405_8409 = G__8421;
continue;
}
} else
{var child_8422 = cljs.core.first.call(null,seq__8402_8416__$1);__GT_document_fragment.call(null,result_frag,child_8422);
{
var G__8423 = cljs.core.next.call(null,seq__8402_8416__$1);
var G__8424 = null;
var G__8425 = 0;
var G__8426 = 0;
seq__8402_8406 = G__8423;
chunk__8403_8407 = G__8424;
count__8404_8408 = G__8425;
i__8405_8409 = G__8426;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__8428 = data;if(G__8428)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__8428.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8428.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8428);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8428);
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
dommy.template.compound_element = (function compound_element(p__8429){var vec__8449 = p__8429;var tag_name = cljs.core.nth.call(null,vec__8449,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__8449,1,null);var children = cljs.core.nthnext.call(null,vec__8449,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__8451 = maybe_attrs;if(G__8451)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__8451.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8451.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8451);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8451);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__8452_8468 = cljs.core.seq.call(null,attrs);var chunk__8453_8469 = null;var count__8454_8470 = 0;var i__8455_8471 = 0;while(true){
if((i__8455_8471 < count__8454_8470))
{var vec__8456_8472 = cljs.core._nth.call(null,chunk__8453_8469,i__8455_8471);var k_8473 = cljs.core.nth.call(null,vec__8456_8472,0,null);var v_8474 = cljs.core.nth.call(null,vec__8456_8472,1,null);var G__8457_8475 = k_8473;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__8457_8475))
{var seq__8458_8476 = cljs.core.seq.call(null,v_8474);var chunk__8459_8477 = null;var count__8460_8478 = 0;var i__8461_8479 = 0;while(true){
if((i__8461_8479 < count__8460_8478))
{var c_8480 = cljs.core._nth.call(null,chunk__8459_8477,i__8461_8479);dommy.attrs.add_class_BANG_.call(null,n,c_8480);
{
var G__8481 = seq__8458_8476;
var G__8482 = chunk__8459_8477;
var G__8483 = count__8460_8478;
var G__8484 = (i__8461_8479 + 1);
seq__8458_8476 = G__8481;
chunk__8459_8477 = G__8482;
count__8460_8478 = G__8483;
i__8461_8479 = G__8484;
continue;
}
} else
{var temp__4092__auto___8485 = cljs.core.seq.call(null,seq__8458_8476);if(temp__4092__auto___8485)
{var seq__8458_8486__$1 = temp__4092__auto___8485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8458_8486__$1))
{var c__4015__auto___8487 = cljs.core.chunk_first.call(null,seq__8458_8486__$1);{
var G__8488 = cljs.core.chunk_rest.call(null,seq__8458_8486__$1);
var G__8489 = c__4015__auto___8487;
var G__8490 = cljs.core.count.call(null,c__4015__auto___8487);
var G__8491 = 0;
seq__8458_8476 = G__8488;
chunk__8459_8477 = G__8489;
count__8460_8478 = G__8490;
i__8461_8479 = G__8491;
continue;
}
} else
{var c_8492 = cljs.core.first.call(null,seq__8458_8486__$1);dommy.attrs.add_class_BANG_.call(null,n,c_8492);
{
var G__8493 = cljs.core.next.call(null,seq__8458_8486__$1);
var G__8494 = null;
var G__8495 = 0;
var G__8496 = 0;
seq__8458_8476 = G__8493;
chunk__8459_8477 = G__8494;
count__8460_8478 = G__8495;
i__8461_8479 = G__8496;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__8457_8475))
{dommy.attrs.add_class_BANG_.call(null,n,v_8474);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_8473,v_8474);
} else
{}
}
}
{
var G__8497 = seq__8452_8468;
var G__8498 = chunk__8453_8469;
var G__8499 = count__8454_8470;
var G__8500 = (i__8455_8471 + 1);
seq__8452_8468 = G__8497;
chunk__8453_8469 = G__8498;
count__8454_8470 = G__8499;
i__8455_8471 = G__8500;
continue;
}
} else
{var temp__4092__auto___8501 = cljs.core.seq.call(null,seq__8452_8468);if(temp__4092__auto___8501)
{var seq__8452_8502__$1 = temp__4092__auto___8501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8452_8502__$1))
{var c__4015__auto___8503 = cljs.core.chunk_first.call(null,seq__8452_8502__$1);{
var G__8504 = cljs.core.chunk_rest.call(null,seq__8452_8502__$1);
var G__8505 = c__4015__auto___8503;
var G__8506 = cljs.core.count.call(null,c__4015__auto___8503);
var G__8507 = 0;
seq__8452_8468 = G__8504;
chunk__8453_8469 = G__8505;
count__8454_8470 = G__8506;
i__8455_8471 = G__8507;
continue;
}
} else
{var vec__8462_8508 = cljs.core.first.call(null,seq__8452_8502__$1);var k_8509 = cljs.core.nth.call(null,vec__8462_8508,0,null);var v_8510 = cljs.core.nth.call(null,vec__8462_8508,1,null);var G__8463_8511 = k_8509;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__8463_8511))
{var seq__8464_8512 = cljs.core.seq.call(null,v_8510);var chunk__8465_8513 = null;var count__8466_8514 = 0;var i__8467_8515 = 0;while(true){
if((i__8467_8515 < count__8466_8514))
{var c_8516 = cljs.core._nth.call(null,chunk__8465_8513,i__8467_8515);dommy.attrs.add_class_BANG_.call(null,n,c_8516);
{
var G__8517 = seq__8464_8512;
var G__8518 = chunk__8465_8513;
var G__8519 = count__8466_8514;
var G__8520 = (i__8467_8515 + 1);
seq__8464_8512 = G__8517;
chunk__8465_8513 = G__8518;
count__8466_8514 = G__8519;
i__8467_8515 = G__8520;
continue;
}
} else
{var temp__4092__auto___8521__$1 = cljs.core.seq.call(null,seq__8464_8512);if(temp__4092__auto___8521__$1)
{var seq__8464_8522__$1 = temp__4092__auto___8521__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8464_8522__$1))
{var c__4015__auto___8523 = cljs.core.chunk_first.call(null,seq__8464_8522__$1);{
var G__8524 = cljs.core.chunk_rest.call(null,seq__8464_8522__$1);
var G__8525 = c__4015__auto___8523;
var G__8526 = cljs.core.count.call(null,c__4015__auto___8523);
var G__8527 = 0;
seq__8464_8512 = G__8524;
chunk__8465_8513 = G__8525;
count__8466_8514 = G__8526;
i__8467_8515 = G__8527;
continue;
}
} else
{var c_8528 = cljs.core.first.call(null,seq__8464_8522__$1);dommy.attrs.add_class_BANG_.call(null,n,c_8528);
{
var G__8529 = cljs.core.next.call(null,seq__8464_8522__$1);
var G__8530 = null;
var G__8531 = 0;
var G__8532 = 0;
seq__8464_8512 = G__8529;
chunk__8465_8513 = G__8530;
count__8466_8514 = G__8531;
i__8467_8515 = G__8532;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__8463_8511))
{dommy.attrs.add_class_BANG_.call(null,n,v_8510);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_8509,v_8510);
} else
{}
}
}
{
var G__8533 = cljs.core.next.call(null,seq__8452_8502__$1);
var G__8534 = null;
var G__8535 = 0;
var G__8536 = 0;
seq__8452_8468 = G__8533;
chunk__8453_8469 = G__8534;
count__8454_8470 = G__8535;
i__8455_8471 = G__8536;
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
}catch (e8537){if((e8537 instanceof ReferenceError))
{var __8538 = e8537;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8537;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__8540 = data;if(G__8540)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__8540.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8540.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8540);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8540);
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
