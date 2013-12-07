// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj15420 = {};return obj15420;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__4761__auto__ = this$;if(and__4761__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__4761__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__5376__auto__ = (((this$ == null))?null:this$);return (function (){var or__4773__auto__ = (dommy.template._elem[goog.typeOf(x__5376__auto__)]);if(or__4773__auto__)
{return or__4773__auto__;
} else
{var or__4773__auto____$1 = (dommy.template._elem["_"]);if(or__4773__auto____$1)
{return or__4773__auto____$1;
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
{var str_15423 = node_str.substring(base_idx);while(true){
var next_idx_15424 = dommy.template.next_css_index.call(null,str_15423,1);var frag_15425 = (((next_idx_15424 >= 0))?str_15423.substring(0,next_idx_15424):str_15423);var G__15422_15426 = frag_15425.charAt(0);if(cljs.core._EQ_.call(null,"#",G__15422_15426))
{node.setAttribute("id",frag_15425.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__15422_15426))
{dommy.attrs.add_class_BANG_.call(null,node,frag_15425.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_15425.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_15424 >= 0))
{{
var G__15427 = str_15423.substring(next_idx_15424);
str_15423 = G__15427;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__15433 = data;if(G__15433)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__15433.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15433.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15433);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15433);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__15434_15438 = cljs.core.seq.call(null,data);var chunk__15435_15439 = null;var count__15436_15440 = 0;var i__15437_15441 = 0;while(true){
if((i__15437_15441 < count__15436_15440))
{var child_15442 = cljs.core._nth.call(null,chunk__15435_15439,i__15437_15441);__GT_document_fragment.call(null,result_frag,child_15442);
{
var G__15443 = seq__15434_15438;
var G__15444 = chunk__15435_15439;
var G__15445 = count__15436_15440;
var G__15446 = (i__15437_15441 + 1);
seq__15434_15438 = G__15443;
chunk__15435_15439 = G__15444;
count__15436_15440 = G__15445;
i__15437_15441 = G__15446;
continue;
}
} else
{var temp__4092__auto___15447 = cljs.core.seq.call(null,seq__15434_15438);if(temp__4092__auto___15447)
{var seq__15434_15448__$1 = temp__4092__auto___15447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15434_15448__$1))
{var c__5497__auto___15449 = cljs.core.chunk_first.call(null,seq__15434_15448__$1);{
var G__15450 = cljs.core.chunk_rest.call(null,seq__15434_15448__$1);
var G__15451 = c__5497__auto___15449;
var G__15452 = cljs.core.count.call(null,c__5497__auto___15449);
var G__15453 = 0;
seq__15434_15438 = G__15450;
chunk__15435_15439 = G__15451;
count__15436_15440 = G__15452;
i__15437_15441 = G__15453;
continue;
}
} else
{var child_15454 = cljs.core.first.call(null,seq__15434_15448__$1);__GT_document_fragment.call(null,result_frag,child_15454);
{
var G__15455 = cljs.core.next.call(null,seq__15434_15448__$1);
var G__15456 = null;
var G__15457 = 0;
var G__15458 = 0;
seq__15434_15438 = G__15455;
chunk__15435_15439 = G__15456;
count__15436_15440 = G__15457;
i__15437_15441 = G__15458;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__15460 = data;if(G__15460)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__15460.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15460.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15460);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15460);
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
dommy.template.compound_element = (function compound_element(p__15461){var vec__15481 = p__15461;var tag_name = cljs.core.nth.call(null,vec__15481,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__15481,1,null);var children = cljs.core.nthnext.call(null,vec__15481,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__15483 = maybe_attrs;if(G__15483)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__15483.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15483.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15483);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15483);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__15484_15500 = cljs.core.seq.call(null,attrs);var chunk__15485_15501 = null;var count__15486_15502 = 0;var i__15487_15503 = 0;while(true){
if((i__15487_15503 < count__15486_15502))
{var vec__15488_15504 = cljs.core._nth.call(null,chunk__15485_15501,i__15487_15503);var k_15505 = cljs.core.nth.call(null,vec__15488_15504,0,null);var v_15506 = cljs.core.nth.call(null,vec__15488_15504,1,null);var G__15489_15507 = k_15505;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__15489_15507))
{var seq__15490_15508 = cljs.core.seq.call(null,v_15506);var chunk__15491_15509 = null;var count__15492_15510 = 0;var i__15493_15511 = 0;while(true){
if((i__15493_15511 < count__15492_15510))
{var c_15512 = cljs.core._nth.call(null,chunk__15491_15509,i__15493_15511);dommy.attrs.add_class_BANG_.call(null,n,c_15512);
{
var G__15513 = seq__15490_15508;
var G__15514 = chunk__15491_15509;
var G__15515 = count__15492_15510;
var G__15516 = (i__15493_15511 + 1);
seq__15490_15508 = G__15513;
chunk__15491_15509 = G__15514;
count__15492_15510 = G__15515;
i__15493_15511 = G__15516;
continue;
}
} else
{var temp__4092__auto___15517 = cljs.core.seq.call(null,seq__15490_15508);if(temp__4092__auto___15517)
{var seq__15490_15518__$1 = temp__4092__auto___15517;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15490_15518__$1))
{var c__5497__auto___15519 = cljs.core.chunk_first.call(null,seq__15490_15518__$1);{
var G__15520 = cljs.core.chunk_rest.call(null,seq__15490_15518__$1);
var G__15521 = c__5497__auto___15519;
var G__15522 = cljs.core.count.call(null,c__5497__auto___15519);
var G__15523 = 0;
seq__15490_15508 = G__15520;
chunk__15491_15509 = G__15521;
count__15492_15510 = G__15522;
i__15493_15511 = G__15523;
continue;
}
} else
{var c_15524 = cljs.core.first.call(null,seq__15490_15518__$1);dommy.attrs.add_class_BANG_.call(null,n,c_15524);
{
var G__15525 = cljs.core.next.call(null,seq__15490_15518__$1);
var G__15526 = null;
var G__15527 = 0;
var G__15528 = 0;
seq__15490_15508 = G__15525;
chunk__15491_15509 = G__15526;
count__15492_15510 = G__15527;
i__15493_15511 = G__15528;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__15489_15507))
{dommy.attrs.add_class_BANG_.call(null,n,v_15506);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_15505,v_15506);
} else
{}
}
}
{
var G__15529 = seq__15484_15500;
var G__15530 = chunk__15485_15501;
var G__15531 = count__15486_15502;
var G__15532 = (i__15487_15503 + 1);
seq__15484_15500 = G__15529;
chunk__15485_15501 = G__15530;
count__15486_15502 = G__15531;
i__15487_15503 = G__15532;
continue;
}
} else
{var temp__4092__auto___15533 = cljs.core.seq.call(null,seq__15484_15500);if(temp__4092__auto___15533)
{var seq__15484_15534__$1 = temp__4092__auto___15533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15484_15534__$1))
{var c__5497__auto___15535 = cljs.core.chunk_first.call(null,seq__15484_15534__$1);{
var G__15536 = cljs.core.chunk_rest.call(null,seq__15484_15534__$1);
var G__15537 = c__5497__auto___15535;
var G__15538 = cljs.core.count.call(null,c__5497__auto___15535);
var G__15539 = 0;
seq__15484_15500 = G__15536;
chunk__15485_15501 = G__15537;
count__15486_15502 = G__15538;
i__15487_15503 = G__15539;
continue;
}
} else
{var vec__15494_15540 = cljs.core.first.call(null,seq__15484_15534__$1);var k_15541 = cljs.core.nth.call(null,vec__15494_15540,0,null);var v_15542 = cljs.core.nth.call(null,vec__15494_15540,1,null);var G__15495_15543 = k_15541;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__15495_15543))
{var seq__15496_15544 = cljs.core.seq.call(null,v_15542);var chunk__15497_15545 = null;var count__15498_15546 = 0;var i__15499_15547 = 0;while(true){
if((i__15499_15547 < count__15498_15546))
{var c_15548 = cljs.core._nth.call(null,chunk__15497_15545,i__15499_15547);dommy.attrs.add_class_BANG_.call(null,n,c_15548);
{
var G__15549 = seq__15496_15544;
var G__15550 = chunk__15497_15545;
var G__15551 = count__15498_15546;
var G__15552 = (i__15499_15547 + 1);
seq__15496_15544 = G__15549;
chunk__15497_15545 = G__15550;
count__15498_15546 = G__15551;
i__15499_15547 = G__15552;
continue;
}
} else
{var temp__4092__auto___15553__$1 = cljs.core.seq.call(null,seq__15496_15544);if(temp__4092__auto___15553__$1)
{var seq__15496_15554__$1 = temp__4092__auto___15553__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15496_15554__$1))
{var c__5497__auto___15555 = cljs.core.chunk_first.call(null,seq__15496_15554__$1);{
var G__15556 = cljs.core.chunk_rest.call(null,seq__15496_15554__$1);
var G__15557 = c__5497__auto___15555;
var G__15558 = cljs.core.count.call(null,c__5497__auto___15555);
var G__15559 = 0;
seq__15496_15544 = G__15556;
chunk__15497_15545 = G__15557;
count__15498_15546 = G__15558;
i__15499_15547 = G__15559;
continue;
}
} else
{var c_15560 = cljs.core.first.call(null,seq__15496_15554__$1);dommy.attrs.add_class_BANG_.call(null,n,c_15560);
{
var G__15561 = cljs.core.next.call(null,seq__15496_15554__$1);
var G__15562 = null;
var G__15563 = 0;
var G__15564 = 0;
seq__15496_15544 = G__15561;
chunk__15497_15545 = G__15562;
count__15498_15546 = G__15563;
i__15499_15547 = G__15564;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__15495_15543))
{dommy.attrs.add_class_BANG_.call(null,n,v_15542);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_15541,v_15542);
} else
{}
}
}
{
var G__15565 = cljs.core.next.call(null,seq__15484_15534__$1);
var G__15566 = null;
var G__15567 = 0;
var G__15568 = 0;
seq__15484_15500 = G__15565;
chunk__15485_15501 = G__15566;
count__15486_15502 = G__15567;
i__15487_15503 = G__15568;
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
}catch (e15569){if((e15569 instanceof ReferenceError))
{var __15570 = e15569;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15569;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__15572 = data;if(G__15572)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__15572.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15572.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15572);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15572);
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
