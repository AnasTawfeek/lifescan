// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj427516 = {};return obj427516;
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
{var str_427519 = node_str.substring(base_idx);while(true){
var next_idx_427520 = dommy.template.next_css_index.call(null,str_427519,1);var frag_427521 = (((next_idx_427520 >= 0))?str_427519.substring(0,next_idx_427520):str_427519);var G__427518_427522 = frag_427521.charAt(0);if(cljs.core._EQ_.call(null,"#",G__427518_427522))
{node.setAttribute("id",frag_427521.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__427518_427522))
{dommy.attrs.add_class_BANG_.call(null,node,frag_427521.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_427521.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_427520 >= 0))
{{
var G__427523 = str_427519.substring(next_idx_427520);
str_427519 = G__427523;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__427529 = data;if(G__427529)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__427529.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__427529.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__427529);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__427529);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__427530_427534 = cljs.core.seq.call(null,data);var chunk__427531_427535 = null;var count__427532_427536 = 0;var i__427533_427537 = 0;while(true){
if((i__427533_427537 < count__427532_427536))
{var child_427538 = cljs.core._nth.call(null,chunk__427531_427535,i__427533_427537);__GT_document_fragment.call(null,result_frag,child_427538);
{
var G__427539 = seq__427530_427534;
var G__427540 = chunk__427531_427535;
var G__427541 = count__427532_427536;
var G__427542 = (i__427533_427537 + 1);
seq__427530_427534 = G__427539;
chunk__427531_427535 = G__427540;
count__427532_427536 = G__427541;
i__427533_427537 = G__427542;
continue;
}
} else
{var temp__4092__auto___427543 = cljs.core.seq.call(null,seq__427530_427534);if(temp__4092__auto___427543)
{var seq__427530_427544__$1 = temp__4092__auto___427543;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427530_427544__$1))
{var c__4017__auto___427545 = cljs.core.chunk_first.call(null,seq__427530_427544__$1);{
var G__427546 = cljs.core.chunk_rest.call(null,seq__427530_427544__$1);
var G__427547 = c__4017__auto___427545;
var G__427548 = cljs.core.count.call(null,c__4017__auto___427545);
var G__427549 = 0;
seq__427530_427534 = G__427546;
chunk__427531_427535 = G__427547;
count__427532_427536 = G__427548;
i__427533_427537 = G__427549;
continue;
}
} else
{var child_427550 = cljs.core.first.call(null,seq__427530_427544__$1);__GT_document_fragment.call(null,result_frag,child_427550);
{
var G__427551 = cljs.core.next.call(null,seq__427530_427544__$1);
var G__427552 = null;
var G__427553 = 0;
var G__427554 = 0;
seq__427530_427534 = G__427551;
chunk__427531_427535 = G__427552;
count__427532_427536 = G__427553;
i__427533_427537 = G__427554;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__427556 = data;if(G__427556)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__427556.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__427556.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__427556);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__427556);
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
dommy.template.compound_element = (function compound_element(p__427557){var vec__427577 = p__427557;var tag_name = cljs.core.nth.call(null,vec__427577,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__427577,1,null);var children = cljs.core.nthnext.call(null,vec__427577,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__427579 = maybe_attrs;if(G__427579)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__427579.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__427579.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__427579);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__427579);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__427580_427596 = cljs.core.seq.call(null,attrs);var chunk__427581_427597 = null;var count__427582_427598 = 0;var i__427583_427599 = 0;while(true){
if((i__427583_427599 < count__427582_427598))
{var vec__427584_427600 = cljs.core._nth.call(null,chunk__427581_427597,i__427583_427599);var k_427601 = cljs.core.nth.call(null,vec__427584_427600,0,null);var v_427602 = cljs.core.nth.call(null,vec__427584_427600,1,null);var G__427585_427603 = k_427601;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__427585_427603))
{var seq__427586_427604 = cljs.core.seq.call(null,v_427602);var chunk__427587_427605 = null;var count__427588_427606 = 0;var i__427589_427607 = 0;while(true){
if((i__427589_427607 < count__427588_427606))
{var c_427608 = cljs.core._nth.call(null,chunk__427587_427605,i__427589_427607);dommy.attrs.add_class_BANG_.call(null,n,c_427608);
{
var G__427609 = seq__427586_427604;
var G__427610 = chunk__427587_427605;
var G__427611 = count__427588_427606;
var G__427612 = (i__427589_427607 + 1);
seq__427586_427604 = G__427609;
chunk__427587_427605 = G__427610;
count__427588_427606 = G__427611;
i__427589_427607 = G__427612;
continue;
}
} else
{var temp__4092__auto___427613 = cljs.core.seq.call(null,seq__427586_427604);if(temp__4092__auto___427613)
{var seq__427586_427614__$1 = temp__4092__auto___427613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427586_427614__$1))
{var c__4017__auto___427615 = cljs.core.chunk_first.call(null,seq__427586_427614__$1);{
var G__427616 = cljs.core.chunk_rest.call(null,seq__427586_427614__$1);
var G__427617 = c__4017__auto___427615;
var G__427618 = cljs.core.count.call(null,c__4017__auto___427615);
var G__427619 = 0;
seq__427586_427604 = G__427616;
chunk__427587_427605 = G__427617;
count__427588_427606 = G__427618;
i__427589_427607 = G__427619;
continue;
}
} else
{var c_427620 = cljs.core.first.call(null,seq__427586_427614__$1);dommy.attrs.add_class_BANG_.call(null,n,c_427620);
{
var G__427621 = cljs.core.next.call(null,seq__427586_427614__$1);
var G__427622 = null;
var G__427623 = 0;
var G__427624 = 0;
seq__427586_427604 = G__427621;
chunk__427587_427605 = G__427622;
count__427588_427606 = G__427623;
i__427589_427607 = G__427624;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__427585_427603))
{dommy.attrs.add_class_BANG_.call(null,n,v_427602);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_427601,v_427602);
} else
{}
}
}
{
var G__427625 = seq__427580_427596;
var G__427626 = chunk__427581_427597;
var G__427627 = count__427582_427598;
var G__427628 = (i__427583_427599 + 1);
seq__427580_427596 = G__427625;
chunk__427581_427597 = G__427626;
count__427582_427598 = G__427627;
i__427583_427599 = G__427628;
continue;
}
} else
{var temp__4092__auto___427629 = cljs.core.seq.call(null,seq__427580_427596);if(temp__4092__auto___427629)
{var seq__427580_427630__$1 = temp__4092__auto___427629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427580_427630__$1))
{var c__4017__auto___427631 = cljs.core.chunk_first.call(null,seq__427580_427630__$1);{
var G__427632 = cljs.core.chunk_rest.call(null,seq__427580_427630__$1);
var G__427633 = c__4017__auto___427631;
var G__427634 = cljs.core.count.call(null,c__4017__auto___427631);
var G__427635 = 0;
seq__427580_427596 = G__427632;
chunk__427581_427597 = G__427633;
count__427582_427598 = G__427634;
i__427583_427599 = G__427635;
continue;
}
} else
{var vec__427590_427636 = cljs.core.first.call(null,seq__427580_427630__$1);var k_427637 = cljs.core.nth.call(null,vec__427590_427636,0,null);var v_427638 = cljs.core.nth.call(null,vec__427590_427636,1,null);var G__427591_427639 = k_427637;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__427591_427639))
{var seq__427592_427640 = cljs.core.seq.call(null,v_427638);var chunk__427593_427641 = null;var count__427594_427642 = 0;var i__427595_427643 = 0;while(true){
if((i__427595_427643 < count__427594_427642))
{var c_427644 = cljs.core._nth.call(null,chunk__427593_427641,i__427595_427643);dommy.attrs.add_class_BANG_.call(null,n,c_427644);
{
var G__427645 = seq__427592_427640;
var G__427646 = chunk__427593_427641;
var G__427647 = count__427594_427642;
var G__427648 = (i__427595_427643 + 1);
seq__427592_427640 = G__427645;
chunk__427593_427641 = G__427646;
count__427594_427642 = G__427647;
i__427595_427643 = G__427648;
continue;
}
} else
{var temp__4092__auto___427649__$1 = cljs.core.seq.call(null,seq__427592_427640);if(temp__4092__auto___427649__$1)
{var seq__427592_427650__$1 = temp__4092__auto___427649__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__427592_427650__$1))
{var c__4017__auto___427651 = cljs.core.chunk_first.call(null,seq__427592_427650__$1);{
var G__427652 = cljs.core.chunk_rest.call(null,seq__427592_427650__$1);
var G__427653 = c__4017__auto___427651;
var G__427654 = cljs.core.count.call(null,c__4017__auto___427651);
var G__427655 = 0;
seq__427592_427640 = G__427652;
chunk__427593_427641 = G__427653;
count__427594_427642 = G__427654;
i__427595_427643 = G__427655;
continue;
}
} else
{var c_427656 = cljs.core.first.call(null,seq__427592_427650__$1);dommy.attrs.add_class_BANG_.call(null,n,c_427656);
{
var G__427657 = cljs.core.next.call(null,seq__427592_427650__$1);
var G__427658 = null;
var G__427659 = 0;
var G__427660 = 0;
seq__427592_427640 = G__427657;
chunk__427593_427641 = G__427658;
count__427594_427642 = G__427659;
i__427595_427643 = G__427660;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__427591_427639))
{dommy.attrs.add_class_BANG_.call(null,n,v_427638);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_427637,v_427638);
} else
{}
}
}
{
var G__427661 = cljs.core.next.call(null,seq__427580_427630__$1);
var G__427662 = null;
var G__427663 = 0;
var G__427664 = 0;
seq__427580_427596 = G__427661;
chunk__427581_427597 = G__427662;
count__427582_427598 = G__427663;
i__427583_427599 = G__427664;
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
}catch (e427665){if((e427665 instanceof ReferenceError))
{var __427666 = e427665;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e427665;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__427668 = data;if(G__427668)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__427668.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__427668.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__427668);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__427668);
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
