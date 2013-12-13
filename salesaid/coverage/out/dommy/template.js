// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj418400 = {};return obj418400;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3281__auto__ = this$;if(and__3281__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3281__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__3896__auto__ = (((this$ == null))?null:this$);return (function (){var or__3293__auto__ = (dommy.template._elem[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (dommy.template._elem["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
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
{var str_418403 = node_str.substring(base_idx);while(true){
var next_idx_418404 = dommy.template.next_css_index.call(null,str_418403,1);var frag_418405 = (((next_idx_418404 >= 0))?str_418403.substring(0,next_idx_418404):str_418403);var G__418402_418406 = frag_418405.charAt(0);if(cljs.core._EQ_.call(null,"#",G__418402_418406))
{node.setAttribute("id",frag_418405.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__418402_418406))
{dommy.attrs.add_class_BANG_.call(null,node,frag_418405.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_418405.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_418404 >= 0))
{{
var G__418407 = str_418403.substring(next_idx_418404);
str_418403 = G__418407;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__418413 = data;if(G__418413)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__418413.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__418413.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__418413);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__418413);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__418414_418418 = cljs.core.seq.call(null,data);var chunk__418415_418419 = null;var count__418416_418420 = 0;var i__418417_418421 = 0;while(true){
if((i__418417_418421 < count__418416_418420))
{var child_418422 = cljs.core._nth.call(null,chunk__418415_418419,i__418417_418421);__GT_document_fragment.call(null,result_frag,child_418422);
{
var G__418423 = seq__418414_418418;
var G__418424 = chunk__418415_418419;
var G__418425 = count__418416_418420;
var G__418426 = (i__418417_418421 + 1);
seq__418414_418418 = G__418423;
chunk__418415_418419 = G__418424;
count__418416_418420 = G__418425;
i__418417_418421 = G__418426;
continue;
}
} else
{var temp__4092__auto___418427 = cljs.core.seq.call(null,seq__418414_418418);if(temp__4092__auto___418427)
{var seq__418414_418428__$1 = temp__4092__auto___418427;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418414_418428__$1))
{var c__4017__auto___418429 = cljs.core.chunk_first.call(null,seq__418414_418428__$1);{
var G__418430 = cljs.core.chunk_rest.call(null,seq__418414_418428__$1);
var G__418431 = c__4017__auto___418429;
var G__418432 = cljs.core.count.call(null,c__4017__auto___418429);
var G__418433 = 0;
seq__418414_418418 = G__418430;
chunk__418415_418419 = G__418431;
count__418416_418420 = G__418432;
i__418417_418421 = G__418433;
continue;
}
} else
{var child_418434 = cljs.core.first.call(null,seq__418414_418428__$1);__GT_document_fragment.call(null,result_frag,child_418434);
{
var G__418435 = cljs.core.next.call(null,seq__418414_418428__$1);
var G__418436 = null;
var G__418437 = 0;
var G__418438 = 0;
seq__418414_418418 = G__418435;
chunk__418415_418419 = G__418436;
count__418416_418420 = G__418437;
i__418417_418421 = G__418438;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__418440 = data;if(G__418440)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__418440.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__418440.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__418440);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__418440);
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
dommy.template.compound_element = (function compound_element(p__418441){var vec__418461 = p__418441;var tag_name = cljs.core.nth.call(null,vec__418461,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__418461,1,null);var children = cljs.core.nthnext.call(null,vec__418461,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__418463 = maybe_attrs;if(G__418463)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__418463.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__418463.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__418463);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__418463);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__418464_418480 = cljs.core.seq.call(null,attrs);var chunk__418465_418481 = null;var count__418466_418482 = 0;var i__418467_418483 = 0;while(true){
if((i__418467_418483 < count__418466_418482))
{var vec__418468_418484 = cljs.core._nth.call(null,chunk__418465_418481,i__418467_418483);var k_418485 = cljs.core.nth.call(null,vec__418468_418484,0,null);var v_418486 = cljs.core.nth.call(null,vec__418468_418484,1,null);var G__418469_418487 = k_418485;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__418469_418487))
{var seq__418470_418488 = cljs.core.seq.call(null,v_418486);var chunk__418471_418489 = null;var count__418472_418490 = 0;var i__418473_418491 = 0;while(true){
if((i__418473_418491 < count__418472_418490))
{var c_418492 = cljs.core._nth.call(null,chunk__418471_418489,i__418473_418491);dommy.attrs.add_class_BANG_.call(null,n,c_418492);
{
var G__418493 = seq__418470_418488;
var G__418494 = chunk__418471_418489;
var G__418495 = count__418472_418490;
var G__418496 = (i__418473_418491 + 1);
seq__418470_418488 = G__418493;
chunk__418471_418489 = G__418494;
count__418472_418490 = G__418495;
i__418473_418491 = G__418496;
continue;
}
} else
{var temp__4092__auto___418497 = cljs.core.seq.call(null,seq__418470_418488);if(temp__4092__auto___418497)
{var seq__418470_418498__$1 = temp__4092__auto___418497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418470_418498__$1))
{var c__4017__auto___418499 = cljs.core.chunk_first.call(null,seq__418470_418498__$1);{
var G__418500 = cljs.core.chunk_rest.call(null,seq__418470_418498__$1);
var G__418501 = c__4017__auto___418499;
var G__418502 = cljs.core.count.call(null,c__4017__auto___418499);
var G__418503 = 0;
seq__418470_418488 = G__418500;
chunk__418471_418489 = G__418501;
count__418472_418490 = G__418502;
i__418473_418491 = G__418503;
continue;
}
} else
{var c_418504 = cljs.core.first.call(null,seq__418470_418498__$1);dommy.attrs.add_class_BANG_.call(null,n,c_418504);
{
var G__418505 = cljs.core.next.call(null,seq__418470_418498__$1);
var G__418506 = null;
var G__418507 = 0;
var G__418508 = 0;
seq__418470_418488 = G__418505;
chunk__418471_418489 = G__418506;
count__418472_418490 = G__418507;
i__418473_418491 = G__418508;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__418469_418487))
{dommy.attrs.add_class_BANG_.call(null,n,v_418486);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_418485,v_418486);
} else
{}
}
}
{
var G__418509 = seq__418464_418480;
var G__418510 = chunk__418465_418481;
var G__418511 = count__418466_418482;
var G__418512 = (i__418467_418483 + 1);
seq__418464_418480 = G__418509;
chunk__418465_418481 = G__418510;
count__418466_418482 = G__418511;
i__418467_418483 = G__418512;
continue;
}
} else
{var temp__4092__auto___418513 = cljs.core.seq.call(null,seq__418464_418480);if(temp__4092__auto___418513)
{var seq__418464_418514__$1 = temp__4092__auto___418513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418464_418514__$1))
{var c__4017__auto___418515 = cljs.core.chunk_first.call(null,seq__418464_418514__$1);{
var G__418516 = cljs.core.chunk_rest.call(null,seq__418464_418514__$1);
var G__418517 = c__4017__auto___418515;
var G__418518 = cljs.core.count.call(null,c__4017__auto___418515);
var G__418519 = 0;
seq__418464_418480 = G__418516;
chunk__418465_418481 = G__418517;
count__418466_418482 = G__418518;
i__418467_418483 = G__418519;
continue;
}
} else
{var vec__418474_418520 = cljs.core.first.call(null,seq__418464_418514__$1);var k_418521 = cljs.core.nth.call(null,vec__418474_418520,0,null);var v_418522 = cljs.core.nth.call(null,vec__418474_418520,1,null);var G__418475_418523 = k_418521;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__418475_418523))
{var seq__418476_418524 = cljs.core.seq.call(null,v_418522);var chunk__418477_418525 = null;var count__418478_418526 = 0;var i__418479_418527 = 0;while(true){
if((i__418479_418527 < count__418478_418526))
{var c_418528 = cljs.core._nth.call(null,chunk__418477_418525,i__418479_418527);dommy.attrs.add_class_BANG_.call(null,n,c_418528);
{
var G__418529 = seq__418476_418524;
var G__418530 = chunk__418477_418525;
var G__418531 = count__418478_418526;
var G__418532 = (i__418479_418527 + 1);
seq__418476_418524 = G__418529;
chunk__418477_418525 = G__418530;
count__418478_418526 = G__418531;
i__418479_418527 = G__418532;
continue;
}
} else
{var temp__4092__auto___418533__$1 = cljs.core.seq.call(null,seq__418476_418524);if(temp__4092__auto___418533__$1)
{var seq__418476_418534__$1 = temp__4092__auto___418533__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__418476_418534__$1))
{var c__4017__auto___418535 = cljs.core.chunk_first.call(null,seq__418476_418534__$1);{
var G__418536 = cljs.core.chunk_rest.call(null,seq__418476_418534__$1);
var G__418537 = c__4017__auto___418535;
var G__418538 = cljs.core.count.call(null,c__4017__auto___418535);
var G__418539 = 0;
seq__418476_418524 = G__418536;
chunk__418477_418525 = G__418537;
count__418478_418526 = G__418538;
i__418479_418527 = G__418539;
continue;
}
} else
{var c_418540 = cljs.core.first.call(null,seq__418476_418534__$1);dommy.attrs.add_class_BANG_.call(null,n,c_418540);
{
var G__418541 = cljs.core.next.call(null,seq__418476_418534__$1);
var G__418542 = null;
var G__418543 = 0;
var G__418544 = 0;
seq__418476_418524 = G__418541;
chunk__418477_418525 = G__418542;
count__418478_418526 = G__418543;
i__418479_418527 = G__418544;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__418475_418523))
{dommy.attrs.add_class_BANG_.call(null,n,v_418522);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_418521,v_418522);
} else
{}
}
}
{
var G__418545 = cljs.core.next.call(null,seq__418464_418514__$1);
var G__418546 = null;
var G__418547 = 0;
var G__418548 = 0;
seq__418464_418480 = G__418545;
chunk__418465_418481 = G__418546;
count__418466_418482 = G__418547;
i__418467_418483 = G__418548;
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
}catch (e418549){if((e418549 instanceof ReferenceError))
{var __418550 = e418549;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e418549;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__418552 = data;if(G__418552)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__418552.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__418552.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__418552);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__418552);
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
