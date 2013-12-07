// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj16467 = {};return obj16467;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__4762__auto__ = this$;if(and__4762__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__4762__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__5377__auto__ = (((this$ == null))?null:this$);return (function (){var or__4774__auto__ = (dommy.template._elem[goog.typeOf(x__5377__auto__)]);if(or__4774__auto__)
{return or__4774__auto__;
} else
{var or__4774__auto____$1 = (dommy.template._elem["_"]);if(or__4774__auto____$1)
{return or__4774__auto____$1;
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
{var str_16470 = node_str.substring(base_idx);while(true){
var next_idx_16471 = dommy.template.next_css_index.call(null,str_16470,1);var frag_16472 = (((next_idx_16471 >= 0))?str_16470.substring(0,next_idx_16471):str_16470);var G__16469_16473 = frag_16472.charAt(0);if(cljs.core._EQ_.call(null,"#",G__16469_16473))
{node.setAttribute("id",frag_16472.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__16469_16473))
{dommy.attrs.add_class_BANG_.call(null,node,frag_16472.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_16472.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_16471 >= 0))
{{
var G__16474 = str_16470.substring(next_idx_16471);
str_16470 = G__16474;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__16480 = data;if(G__16480)
{var bit__5400__auto__ = null;if(cljs.core.truth_((function (){var or__4774__auto__ = bit__5400__auto__;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
} else
{return G__16480.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16480.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16480);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16480);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__16481_16485 = cljs.core.seq.call(null,data);var chunk__16482_16486 = null;var count__16483_16487 = 0;var i__16484_16488 = 0;while(true){
if((i__16484_16488 < count__16483_16487))
{var child_16489 = cljs.core._nth.call(null,chunk__16482_16486,i__16484_16488);__GT_document_fragment.call(null,result_frag,child_16489);
{
var G__16490 = seq__16481_16485;
var G__16491 = chunk__16482_16486;
var G__16492 = count__16483_16487;
var G__16493 = (i__16484_16488 + 1);
seq__16481_16485 = G__16490;
chunk__16482_16486 = G__16491;
count__16483_16487 = G__16492;
i__16484_16488 = G__16493;
continue;
}
} else
{var temp__4092__auto___16494 = cljs.core.seq.call(null,seq__16481_16485);if(temp__4092__auto___16494)
{var seq__16481_16495__$1 = temp__4092__auto___16494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16481_16495__$1))
{var c__5498__auto___16496 = cljs.core.chunk_first.call(null,seq__16481_16495__$1);{
var G__16497 = cljs.core.chunk_rest.call(null,seq__16481_16495__$1);
var G__16498 = c__5498__auto___16496;
var G__16499 = cljs.core.count.call(null,c__5498__auto___16496);
var G__16500 = 0;
seq__16481_16485 = G__16497;
chunk__16482_16486 = G__16498;
count__16483_16487 = G__16499;
i__16484_16488 = G__16500;
continue;
}
} else
{var child_16501 = cljs.core.first.call(null,seq__16481_16495__$1);__GT_document_fragment.call(null,result_frag,child_16501);
{
var G__16502 = cljs.core.next.call(null,seq__16481_16495__$1);
var G__16503 = null;
var G__16504 = 0;
var G__16505 = 0;
seq__16481_16485 = G__16502;
chunk__16482_16486 = G__16503;
count__16483_16487 = G__16504;
i__16484_16488 = G__16505;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__16507 = data;if(G__16507)
{var bit__5400__auto__ = null;if(cljs.core.truth_((function (){var or__4774__auto__ = bit__5400__auto__;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
} else
{return G__16507.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16507.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16507);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16507);
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
dommy.template.compound_element = (function compound_element(p__16508){var vec__16528 = p__16508;var tag_name = cljs.core.nth.call(null,vec__16528,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__16528,1,null);var children = cljs.core.nthnext.call(null,vec__16528,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__16530 = maybe_attrs;if(G__16530)
{var bit__5400__auto__ = null;if(cljs.core.truth_((function (){var or__4774__auto__ = bit__5400__auto__;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
} else
{return G__16530.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16530.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16530);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16530);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__16531_16547 = cljs.core.seq.call(null,attrs);var chunk__16532_16548 = null;var count__16533_16549 = 0;var i__16534_16550 = 0;while(true){
if((i__16534_16550 < count__16533_16549))
{var vec__16535_16551 = cljs.core._nth.call(null,chunk__16532_16548,i__16534_16550);var k_16552 = cljs.core.nth.call(null,vec__16535_16551,0,null);var v_16553 = cljs.core.nth.call(null,vec__16535_16551,1,null);var G__16536_16554 = k_16552;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16536_16554))
{var seq__16537_16555 = cljs.core.seq.call(null,v_16553);var chunk__16538_16556 = null;var count__16539_16557 = 0;var i__16540_16558 = 0;while(true){
if((i__16540_16558 < count__16539_16557))
{var c_16559 = cljs.core._nth.call(null,chunk__16538_16556,i__16540_16558);dommy.attrs.add_class_BANG_.call(null,n,c_16559);
{
var G__16560 = seq__16537_16555;
var G__16561 = chunk__16538_16556;
var G__16562 = count__16539_16557;
var G__16563 = (i__16540_16558 + 1);
seq__16537_16555 = G__16560;
chunk__16538_16556 = G__16561;
count__16539_16557 = G__16562;
i__16540_16558 = G__16563;
continue;
}
} else
{var temp__4092__auto___16564 = cljs.core.seq.call(null,seq__16537_16555);if(temp__4092__auto___16564)
{var seq__16537_16565__$1 = temp__4092__auto___16564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16537_16565__$1))
{var c__5498__auto___16566 = cljs.core.chunk_first.call(null,seq__16537_16565__$1);{
var G__16567 = cljs.core.chunk_rest.call(null,seq__16537_16565__$1);
var G__16568 = c__5498__auto___16566;
var G__16569 = cljs.core.count.call(null,c__5498__auto___16566);
var G__16570 = 0;
seq__16537_16555 = G__16567;
chunk__16538_16556 = G__16568;
count__16539_16557 = G__16569;
i__16540_16558 = G__16570;
continue;
}
} else
{var c_16571 = cljs.core.first.call(null,seq__16537_16565__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16571);
{
var G__16572 = cljs.core.next.call(null,seq__16537_16565__$1);
var G__16573 = null;
var G__16574 = 0;
var G__16575 = 0;
seq__16537_16555 = G__16572;
chunk__16538_16556 = G__16573;
count__16539_16557 = G__16574;
i__16540_16558 = G__16575;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16536_16554))
{dommy.attrs.add_class_BANG_.call(null,n,v_16553);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16552,v_16553);
} else
{}
}
}
{
var G__16576 = seq__16531_16547;
var G__16577 = chunk__16532_16548;
var G__16578 = count__16533_16549;
var G__16579 = (i__16534_16550 + 1);
seq__16531_16547 = G__16576;
chunk__16532_16548 = G__16577;
count__16533_16549 = G__16578;
i__16534_16550 = G__16579;
continue;
}
} else
{var temp__4092__auto___16580 = cljs.core.seq.call(null,seq__16531_16547);if(temp__4092__auto___16580)
{var seq__16531_16581__$1 = temp__4092__auto___16580;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16531_16581__$1))
{var c__5498__auto___16582 = cljs.core.chunk_first.call(null,seq__16531_16581__$1);{
var G__16583 = cljs.core.chunk_rest.call(null,seq__16531_16581__$1);
var G__16584 = c__5498__auto___16582;
var G__16585 = cljs.core.count.call(null,c__5498__auto___16582);
var G__16586 = 0;
seq__16531_16547 = G__16583;
chunk__16532_16548 = G__16584;
count__16533_16549 = G__16585;
i__16534_16550 = G__16586;
continue;
}
} else
{var vec__16541_16587 = cljs.core.first.call(null,seq__16531_16581__$1);var k_16588 = cljs.core.nth.call(null,vec__16541_16587,0,null);var v_16589 = cljs.core.nth.call(null,vec__16541_16587,1,null);var G__16542_16590 = k_16588;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16542_16590))
{var seq__16543_16591 = cljs.core.seq.call(null,v_16589);var chunk__16544_16592 = null;var count__16545_16593 = 0;var i__16546_16594 = 0;while(true){
if((i__16546_16594 < count__16545_16593))
{var c_16595 = cljs.core._nth.call(null,chunk__16544_16592,i__16546_16594);dommy.attrs.add_class_BANG_.call(null,n,c_16595);
{
var G__16596 = seq__16543_16591;
var G__16597 = chunk__16544_16592;
var G__16598 = count__16545_16593;
var G__16599 = (i__16546_16594 + 1);
seq__16543_16591 = G__16596;
chunk__16544_16592 = G__16597;
count__16545_16593 = G__16598;
i__16546_16594 = G__16599;
continue;
}
} else
{var temp__4092__auto___16600__$1 = cljs.core.seq.call(null,seq__16543_16591);if(temp__4092__auto___16600__$1)
{var seq__16543_16601__$1 = temp__4092__auto___16600__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16543_16601__$1))
{var c__5498__auto___16602 = cljs.core.chunk_first.call(null,seq__16543_16601__$1);{
var G__16603 = cljs.core.chunk_rest.call(null,seq__16543_16601__$1);
var G__16604 = c__5498__auto___16602;
var G__16605 = cljs.core.count.call(null,c__5498__auto___16602);
var G__16606 = 0;
seq__16543_16591 = G__16603;
chunk__16544_16592 = G__16604;
count__16545_16593 = G__16605;
i__16546_16594 = G__16606;
continue;
}
} else
{var c_16607 = cljs.core.first.call(null,seq__16543_16601__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16607);
{
var G__16608 = cljs.core.next.call(null,seq__16543_16601__$1);
var G__16609 = null;
var G__16610 = 0;
var G__16611 = 0;
seq__16543_16591 = G__16608;
chunk__16544_16592 = G__16609;
count__16545_16593 = G__16610;
i__16546_16594 = G__16611;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16542_16590))
{dommy.attrs.add_class_BANG_.call(null,n,v_16589);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16588,v_16589);
} else
{}
}
}
{
var G__16612 = cljs.core.next.call(null,seq__16531_16581__$1);
var G__16613 = null;
var G__16614 = 0;
var G__16615 = 0;
seq__16531_16547 = G__16612;
chunk__16532_16548 = G__16613;
count__16533_16549 = G__16614;
i__16534_16550 = G__16615;
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
}catch (e16616){if((e16616 instanceof ReferenceError))
{var __16617 = e16616;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16616;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__16619 = data;if(G__16619)
{var bit__5400__auto__ = null;if(cljs.core.truth_((function (){var or__4774__auto__ = bit__5400__auto__;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
} else
{return G__16619.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16619.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16619);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16619);
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
