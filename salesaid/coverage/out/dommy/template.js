// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj35546 = {};return obj35546;
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
{var str_35549 = node_str.substring(base_idx);while(true){
var next_idx_35550 = dommy.template.next_css_index.call(null,str_35549,1);var frag_35551 = (((next_idx_35550 >= 0))?str_35549.substring(0,next_idx_35550):str_35549);var G__35548_35552 = frag_35551.charAt(0);if(cljs.core._EQ_.call(null,"#",G__35548_35552))
{node.setAttribute("id",frag_35551.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__35548_35552))
{dommy.attrs.add_class_BANG_.call(null,node,frag_35551.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_35551.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_35550 >= 0))
{{
var G__35553 = str_35549.substring(next_idx_35550);
str_35549 = G__35553;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__35559 = data;if(G__35559)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__35559.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35559.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35559);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35559);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__35560_35564 = cljs.core.seq.call(null,data);var chunk__35561_35565 = null;var count__35562_35566 = 0;var i__35563_35567 = 0;while(true){
if((i__35563_35567 < count__35562_35566))
{var child_35568 = cljs.core._nth.call(null,chunk__35561_35565,i__35563_35567);__GT_document_fragment.call(null,result_frag,child_35568);
{
var G__35569 = seq__35560_35564;
var G__35570 = chunk__35561_35565;
var G__35571 = count__35562_35566;
var G__35572 = (i__35563_35567 + 1);
seq__35560_35564 = G__35569;
chunk__35561_35565 = G__35570;
count__35562_35566 = G__35571;
i__35563_35567 = G__35572;
continue;
}
} else
{var temp__4092__auto___35573 = cljs.core.seq.call(null,seq__35560_35564);if(temp__4092__auto___35573)
{var seq__35560_35574__$1 = temp__4092__auto___35573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35560_35574__$1))
{var c__4017__auto___35575 = cljs.core.chunk_first.call(null,seq__35560_35574__$1);{
var G__35576 = cljs.core.chunk_rest.call(null,seq__35560_35574__$1);
var G__35577 = c__4017__auto___35575;
var G__35578 = cljs.core.count.call(null,c__4017__auto___35575);
var G__35579 = 0;
seq__35560_35564 = G__35576;
chunk__35561_35565 = G__35577;
count__35562_35566 = G__35578;
i__35563_35567 = G__35579;
continue;
}
} else
{var child_35580 = cljs.core.first.call(null,seq__35560_35574__$1);__GT_document_fragment.call(null,result_frag,child_35580);
{
var G__35581 = cljs.core.next.call(null,seq__35560_35574__$1);
var G__35582 = null;
var G__35583 = 0;
var G__35584 = 0;
seq__35560_35564 = G__35581;
chunk__35561_35565 = G__35582;
count__35562_35566 = G__35583;
i__35563_35567 = G__35584;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__35586 = data;if(G__35586)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__35586.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35586.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35586);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35586);
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
dommy.template.compound_element = (function compound_element(p__35587){var vec__35607 = p__35587;var tag_name = cljs.core.nth.call(null,vec__35607,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__35607,1,null);var children = cljs.core.nthnext.call(null,vec__35607,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__35609 = maybe_attrs;if(G__35609)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__35609.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35609.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35609);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35609);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__35610_35626 = cljs.core.seq.call(null,attrs);var chunk__35611_35627 = null;var count__35612_35628 = 0;var i__35613_35629 = 0;while(true){
if((i__35613_35629 < count__35612_35628))
{var vec__35614_35630 = cljs.core._nth.call(null,chunk__35611_35627,i__35613_35629);var k_35631 = cljs.core.nth.call(null,vec__35614_35630,0,null);var v_35632 = cljs.core.nth.call(null,vec__35614_35630,1,null);var G__35615_35633 = k_35631;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__35615_35633))
{var seq__35616_35634 = cljs.core.seq.call(null,v_35632);var chunk__35617_35635 = null;var count__35618_35636 = 0;var i__35619_35637 = 0;while(true){
if((i__35619_35637 < count__35618_35636))
{var c_35638 = cljs.core._nth.call(null,chunk__35617_35635,i__35619_35637);dommy.attrs.add_class_BANG_.call(null,n,c_35638);
{
var G__35639 = seq__35616_35634;
var G__35640 = chunk__35617_35635;
var G__35641 = count__35618_35636;
var G__35642 = (i__35619_35637 + 1);
seq__35616_35634 = G__35639;
chunk__35617_35635 = G__35640;
count__35618_35636 = G__35641;
i__35619_35637 = G__35642;
continue;
}
} else
{var temp__4092__auto___35643 = cljs.core.seq.call(null,seq__35616_35634);if(temp__4092__auto___35643)
{var seq__35616_35644__$1 = temp__4092__auto___35643;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35616_35644__$1))
{var c__4017__auto___35645 = cljs.core.chunk_first.call(null,seq__35616_35644__$1);{
var G__35646 = cljs.core.chunk_rest.call(null,seq__35616_35644__$1);
var G__35647 = c__4017__auto___35645;
var G__35648 = cljs.core.count.call(null,c__4017__auto___35645);
var G__35649 = 0;
seq__35616_35634 = G__35646;
chunk__35617_35635 = G__35647;
count__35618_35636 = G__35648;
i__35619_35637 = G__35649;
continue;
}
} else
{var c_35650 = cljs.core.first.call(null,seq__35616_35644__$1);dommy.attrs.add_class_BANG_.call(null,n,c_35650);
{
var G__35651 = cljs.core.next.call(null,seq__35616_35644__$1);
var G__35652 = null;
var G__35653 = 0;
var G__35654 = 0;
seq__35616_35634 = G__35651;
chunk__35617_35635 = G__35652;
count__35618_35636 = G__35653;
i__35619_35637 = G__35654;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__35615_35633))
{dommy.attrs.add_class_BANG_.call(null,n,v_35632);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_35631,v_35632);
} else
{}
}
}
{
var G__35655 = seq__35610_35626;
var G__35656 = chunk__35611_35627;
var G__35657 = count__35612_35628;
var G__35658 = (i__35613_35629 + 1);
seq__35610_35626 = G__35655;
chunk__35611_35627 = G__35656;
count__35612_35628 = G__35657;
i__35613_35629 = G__35658;
continue;
}
} else
{var temp__4092__auto___35659 = cljs.core.seq.call(null,seq__35610_35626);if(temp__4092__auto___35659)
{var seq__35610_35660__$1 = temp__4092__auto___35659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35610_35660__$1))
{var c__4017__auto___35661 = cljs.core.chunk_first.call(null,seq__35610_35660__$1);{
var G__35662 = cljs.core.chunk_rest.call(null,seq__35610_35660__$1);
var G__35663 = c__4017__auto___35661;
var G__35664 = cljs.core.count.call(null,c__4017__auto___35661);
var G__35665 = 0;
seq__35610_35626 = G__35662;
chunk__35611_35627 = G__35663;
count__35612_35628 = G__35664;
i__35613_35629 = G__35665;
continue;
}
} else
{var vec__35620_35666 = cljs.core.first.call(null,seq__35610_35660__$1);var k_35667 = cljs.core.nth.call(null,vec__35620_35666,0,null);var v_35668 = cljs.core.nth.call(null,vec__35620_35666,1,null);var G__35621_35669 = k_35667;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__35621_35669))
{var seq__35622_35670 = cljs.core.seq.call(null,v_35668);var chunk__35623_35671 = null;var count__35624_35672 = 0;var i__35625_35673 = 0;while(true){
if((i__35625_35673 < count__35624_35672))
{var c_35674 = cljs.core._nth.call(null,chunk__35623_35671,i__35625_35673);dommy.attrs.add_class_BANG_.call(null,n,c_35674);
{
var G__35675 = seq__35622_35670;
var G__35676 = chunk__35623_35671;
var G__35677 = count__35624_35672;
var G__35678 = (i__35625_35673 + 1);
seq__35622_35670 = G__35675;
chunk__35623_35671 = G__35676;
count__35624_35672 = G__35677;
i__35625_35673 = G__35678;
continue;
}
} else
{var temp__4092__auto___35679__$1 = cljs.core.seq.call(null,seq__35622_35670);if(temp__4092__auto___35679__$1)
{var seq__35622_35680__$1 = temp__4092__auto___35679__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35622_35680__$1))
{var c__4017__auto___35681 = cljs.core.chunk_first.call(null,seq__35622_35680__$1);{
var G__35682 = cljs.core.chunk_rest.call(null,seq__35622_35680__$1);
var G__35683 = c__4017__auto___35681;
var G__35684 = cljs.core.count.call(null,c__4017__auto___35681);
var G__35685 = 0;
seq__35622_35670 = G__35682;
chunk__35623_35671 = G__35683;
count__35624_35672 = G__35684;
i__35625_35673 = G__35685;
continue;
}
} else
{var c_35686 = cljs.core.first.call(null,seq__35622_35680__$1);dommy.attrs.add_class_BANG_.call(null,n,c_35686);
{
var G__35687 = cljs.core.next.call(null,seq__35622_35680__$1);
var G__35688 = null;
var G__35689 = 0;
var G__35690 = 0;
seq__35622_35670 = G__35687;
chunk__35623_35671 = G__35688;
count__35624_35672 = G__35689;
i__35625_35673 = G__35690;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__35621_35669))
{dommy.attrs.add_class_BANG_.call(null,n,v_35668);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_35667,v_35668);
} else
{}
}
}
{
var G__35691 = cljs.core.next.call(null,seq__35610_35660__$1);
var G__35692 = null;
var G__35693 = 0;
var G__35694 = 0;
seq__35610_35626 = G__35691;
chunk__35611_35627 = G__35692;
count__35612_35628 = G__35693;
i__35613_35629 = G__35694;
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
}catch (e35695){if((e35695 instanceof ReferenceError))
{var __35696 = e35695;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35695;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__35698 = data;if(G__35698)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__35698.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35698.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35698);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35698);
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
