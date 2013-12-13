// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj288497 = {};return obj288497;
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
{var str_288500 = node_str.substring(base_idx);while(true){
var next_idx_288501 = dommy.template.next_css_index.call(null,str_288500,1);var frag_288502 = (((next_idx_288501 >= 0))?str_288500.substring(0,next_idx_288501):str_288500);var G__288499_288503 = frag_288502.charAt(0);if(cljs.core._EQ_.call(null,"#",G__288499_288503))
{node.setAttribute("id",frag_288502.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__288499_288503))
{dommy.attrs.add_class_BANG_.call(null,node,frag_288502.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_288502.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_288501 >= 0))
{{
var G__288504 = str_288500.substring(next_idx_288501);
str_288500 = G__288504;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__288510 = data;if(G__288510)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__288510.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__288510.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__288510);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__288510);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__288511_288515 = cljs.core.seq.call(null,data);var chunk__288512_288516 = null;var count__288513_288517 = 0;var i__288514_288518 = 0;while(true){
if((i__288514_288518 < count__288513_288517))
{var child_288519 = cljs.core._nth.call(null,chunk__288512_288516,i__288514_288518);__GT_document_fragment.call(null,result_frag,child_288519);
{
var G__288520 = seq__288511_288515;
var G__288521 = chunk__288512_288516;
var G__288522 = count__288513_288517;
var G__288523 = (i__288514_288518 + 1);
seq__288511_288515 = G__288520;
chunk__288512_288516 = G__288521;
count__288513_288517 = G__288522;
i__288514_288518 = G__288523;
continue;
}
} else
{var temp__4092__auto___288524 = cljs.core.seq.call(null,seq__288511_288515);if(temp__4092__auto___288524)
{var seq__288511_288525__$1 = temp__4092__auto___288524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288511_288525__$1))
{var c__4017__auto___288526 = cljs.core.chunk_first.call(null,seq__288511_288525__$1);{
var G__288527 = cljs.core.chunk_rest.call(null,seq__288511_288525__$1);
var G__288528 = c__4017__auto___288526;
var G__288529 = cljs.core.count.call(null,c__4017__auto___288526);
var G__288530 = 0;
seq__288511_288515 = G__288527;
chunk__288512_288516 = G__288528;
count__288513_288517 = G__288529;
i__288514_288518 = G__288530;
continue;
}
} else
{var child_288531 = cljs.core.first.call(null,seq__288511_288525__$1);__GT_document_fragment.call(null,result_frag,child_288531);
{
var G__288532 = cljs.core.next.call(null,seq__288511_288525__$1);
var G__288533 = null;
var G__288534 = 0;
var G__288535 = 0;
seq__288511_288515 = G__288532;
chunk__288512_288516 = G__288533;
count__288513_288517 = G__288534;
i__288514_288518 = G__288535;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__288537 = data;if(G__288537)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__288537.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__288537.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__288537);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__288537);
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
dommy.template.compound_element = (function compound_element(p__288538){var vec__288558 = p__288538;var tag_name = cljs.core.nth.call(null,vec__288558,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__288558,1,null);var children = cljs.core.nthnext.call(null,vec__288558,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__288560 = maybe_attrs;if(G__288560)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__288560.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__288560.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__288560);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__288560);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__288561_288577 = cljs.core.seq.call(null,attrs);var chunk__288562_288578 = null;var count__288563_288579 = 0;var i__288564_288580 = 0;while(true){
if((i__288564_288580 < count__288563_288579))
{var vec__288565_288581 = cljs.core._nth.call(null,chunk__288562_288578,i__288564_288580);var k_288582 = cljs.core.nth.call(null,vec__288565_288581,0,null);var v_288583 = cljs.core.nth.call(null,vec__288565_288581,1,null);var G__288566_288584 = k_288582;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__288566_288584))
{var seq__288567_288585 = cljs.core.seq.call(null,v_288583);var chunk__288568_288586 = null;var count__288569_288587 = 0;var i__288570_288588 = 0;while(true){
if((i__288570_288588 < count__288569_288587))
{var c_288589 = cljs.core._nth.call(null,chunk__288568_288586,i__288570_288588);dommy.attrs.add_class_BANG_.call(null,n,c_288589);
{
var G__288590 = seq__288567_288585;
var G__288591 = chunk__288568_288586;
var G__288592 = count__288569_288587;
var G__288593 = (i__288570_288588 + 1);
seq__288567_288585 = G__288590;
chunk__288568_288586 = G__288591;
count__288569_288587 = G__288592;
i__288570_288588 = G__288593;
continue;
}
} else
{var temp__4092__auto___288594 = cljs.core.seq.call(null,seq__288567_288585);if(temp__4092__auto___288594)
{var seq__288567_288595__$1 = temp__4092__auto___288594;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288567_288595__$1))
{var c__4017__auto___288596 = cljs.core.chunk_first.call(null,seq__288567_288595__$1);{
var G__288597 = cljs.core.chunk_rest.call(null,seq__288567_288595__$1);
var G__288598 = c__4017__auto___288596;
var G__288599 = cljs.core.count.call(null,c__4017__auto___288596);
var G__288600 = 0;
seq__288567_288585 = G__288597;
chunk__288568_288586 = G__288598;
count__288569_288587 = G__288599;
i__288570_288588 = G__288600;
continue;
}
} else
{var c_288601 = cljs.core.first.call(null,seq__288567_288595__$1);dommy.attrs.add_class_BANG_.call(null,n,c_288601);
{
var G__288602 = cljs.core.next.call(null,seq__288567_288595__$1);
var G__288603 = null;
var G__288604 = 0;
var G__288605 = 0;
seq__288567_288585 = G__288602;
chunk__288568_288586 = G__288603;
count__288569_288587 = G__288604;
i__288570_288588 = G__288605;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__288566_288584))
{dommy.attrs.add_class_BANG_.call(null,n,v_288583);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_288582,v_288583);
} else
{}
}
}
{
var G__288606 = seq__288561_288577;
var G__288607 = chunk__288562_288578;
var G__288608 = count__288563_288579;
var G__288609 = (i__288564_288580 + 1);
seq__288561_288577 = G__288606;
chunk__288562_288578 = G__288607;
count__288563_288579 = G__288608;
i__288564_288580 = G__288609;
continue;
}
} else
{var temp__4092__auto___288610 = cljs.core.seq.call(null,seq__288561_288577);if(temp__4092__auto___288610)
{var seq__288561_288611__$1 = temp__4092__auto___288610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288561_288611__$1))
{var c__4017__auto___288612 = cljs.core.chunk_first.call(null,seq__288561_288611__$1);{
var G__288613 = cljs.core.chunk_rest.call(null,seq__288561_288611__$1);
var G__288614 = c__4017__auto___288612;
var G__288615 = cljs.core.count.call(null,c__4017__auto___288612);
var G__288616 = 0;
seq__288561_288577 = G__288613;
chunk__288562_288578 = G__288614;
count__288563_288579 = G__288615;
i__288564_288580 = G__288616;
continue;
}
} else
{var vec__288571_288617 = cljs.core.first.call(null,seq__288561_288611__$1);var k_288618 = cljs.core.nth.call(null,vec__288571_288617,0,null);var v_288619 = cljs.core.nth.call(null,vec__288571_288617,1,null);var G__288572_288620 = k_288618;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__288572_288620))
{var seq__288573_288621 = cljs.core.seq.call(null,v_288619);var chunk__288574_288622 = null;var count__288575_288623 = 0;var i__288576_288624 = 0;while(true){
if((i__288576_288624 < count__288575_288623))
{var c_288625 = cljs.core._nth.call(null,chunk__288574_288622,i__288576_288624);dommy.attrs.add_class_BANG_.call(null,n,c_288625);
{
var G__288626 = seq__288573_288621;
var G__288627 = chunk__288574_288622;
var G__288628 = count__288575_288623;
var G__288629 = (i__288576_288624 + 1);
seq__288573_288621 = G__288626;
chunk__288574_288622 = G__288627;
count__288575_288623 = G__288628;
i__288576_288624 = G__288629;
continue;
}
} else
{var temp__4092__auto___288630__$1 = cljs.core.seq.call(null,seq__288573_288621);if(temp__4092__auto___288630__$1)
{var seq__288573_288631__$1 = temp__4092__auto___288630__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__288573_288631__$1))
{var c__4017__auto___288632 = cljs.core.chunk_first.call(null,seq__288573_288631__$1);{
var G__288633 = cljs.core.chunk_rest.call(null,seq__288573_288631__$1);
var G__288634 = c__4017__auto___288632;
var G__288635 = cljs.core.count.call(null,c__4017__auto___288632);
var G__288636 = 0;
seq__288573_288621 = G__288633;
chunk__288574_288622 = G__288634;
count__288575_288623 = G__288635;
i__288576_288624 = G__288636;
continue;
}
} else
{var c_288637 = cljs.core.first.call(null,seq__288573_288631__$1);dommy.attrs.add_class_BANG_.call(null,n,c_288637);
{
var G__288638 = cljs.core.next.call(null,seq__288573_288631__$1);
var G__288639 = null;
var G__288640 = 0;
var G__288641 = 0;
seq__288573_288621 = G__288638;
chunk__288574_288622 = G__288639;
count__288575_288623 = G__288640;
i__288576_288624 = G__288641;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__288572_288620))
{dommy.attrs.add_class_BANG_.call(null,n,v_288619);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_288618,v_288619);
} else
{}
}
}
{
var G__288642 = cljs.core.next.call(null,seq__288561_288611__$1);
var G__288643 = null;
var G__288644 = 0;
var G__288645 = 0;
seq__288561_288577 = G__288642;
chunk__288562_288578 = G__288643;
count__288563_288579 = G__288644;
i__288564_288580 = G__288645;
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
}catch (e288646){if((e288646 instanceof ReferenceError))
{var __288647 = e288646;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e288646;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__288649 = data;if(G__288649)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__288649.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__288649.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__288649);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__288649);
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
