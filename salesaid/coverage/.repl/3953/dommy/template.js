// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj11605 = {};return obj11605;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__4753__auto__ = this$;if(and__4753__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__4753__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__5368__auto__ = (((this$ == null))?null:this$);return (function (){var or__4765__auto__ = (dommy.template._elem[goog.typeOf(x__5368__auto__)]);if(or__4765__auto__)
{return or__4765__auto__;
} else
{var or__4765__auto____$1 = (dommy.template._elem["_"]);if(or__4765__auto____$1)
{return or__4765__auto____$1;
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
{var str_11608 = node_str.substring(base_idx);while(true){
var next_idx_11609 = dommy.template.next_css_index.call(null,str_11608,1);var frag_11610 = (((next_idx_11609 >= 0))?str_11608.substring(0,next_idx_11609):str_11608);var G__11607_11611 = frag_11610.charAt(0);if(cljs.core._EQ_.call(null,"#",G__11607_11611))
{node.setAttribute("id",frag_11610.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__11607_11611))
{dommy.attrs.add_class_BANG_.call(null,node,frag_11610.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_11610.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_11609 >= 0))
{{
var G__11612 = str_11608.substring(next_idx_11609);
str_11608 = G__11612;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__11618 = data;if(G__11618)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__11618.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11618.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11618);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11618);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__11619_11623 = cljs.core.seq.call(null,data);var chunk__11620_11624 = null;var count__11621_11625 = 0;var i__11622_11626 = 0;while(true){
if((i__11622_11626 < count__11621_11625))
{var child_11627 = cljs.core._nth.call(null,chunk__11620_11624,i__11622_11626);__GT_document_fragment.call(null,result_frag,child_11627);
{
var G__11628 = seq__11619_11623;
var G__11629 = chunk__11620_11624;
var G__11630 = count__11621_11625;
var G__11631 = (i__11622_11626 + 1);
seq__11619_11623 = G__11628;
chunk__11620_11624 = G__11629;
count__11621_11625 = G__11630;
i__11622_11626 = G__11631;
continue;
}
} else
{var temp__4092__auto___11632 = cljs.core.seq.call(null,seq__11619_11623);if(temp__4092__auto___11632)
{var seq__11619_11633__$1 = temp__4092__auto___11632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11619_11633__$1))
{var c__5489__auto___11634 = cljs.core.chunk_first.call(null,seq__11619_11633__$1);{
var G__11635 = cljs.core.chunk_rest.call(null,seq__11619_11633__$1);
var G__11636 = c__5489__auto___11634;
var G__11637 = cljs.core.count.call(null,c__5489__auto___11634);
var G__11638 = 0;
seq__11619_11623 = G__11635;
chunk__11620_11624 = G__11636;
count__11621_11625 = G__11637;
i__11622_11626 = G__11638;
continue;
}
} else
{var child_11639 = cljs.core.first.call(null,seq__11619_11633__$1);__GT_document_fragment.call(null,result_frag,child_11639);
{
var G__11640 = cljs.core.next.call(null,seq__11619_11633__$1);
var G__11641 = null;
var G__11642 = 0;
var G__11643 = 0;
seq__11619_11623 = G__11640;
chunk__11620_11624 = G__11641;
count__11621_11625 = G__11642;
i__11622_11626 = G__11643;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__11645 = data;if(G__11645)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__11645.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11645.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11645);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11645);
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
dommy.template.compound_element = (function compound_element(p__11646){var vec__11666 = p__11646;var tag_name = cljs.core.nth.call(null,vec__11666,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__11666,1,null);var children = cljs.core.nthnext.call(null,vec__11666,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__11668 = maybe_attrs;if(G__11668)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__11668.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11668.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11668);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11668);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__11669_11685 = cljs.core.seq.call(null,attrs);var chunk__11670_11686 = null;var count__11671_11687 = 0;var i__11672_11688 = 0;while(true){
if((i__11672_11688 < count__11671_11687))
{var vec__11673_11689 = cljs.core._nth.call(null,chunk__11670_11686,i__11672_11688);var k_11690 = cljs.core.nth.call(null,vec__11673_11689,0,null);var v_11691 = cljs.core.nth.call(null,vec__11673_11689,1,null);var G__11674_11692 = k_11690;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__11674_11692))
{var seq__11675_11693 = cljs.core.seq.call(null,v_11691);var chunk__11676_11694 = null;var count__11677_11695 = 0;var i__11678_11696 = 0;while(true){
if((i__11678_11696 < count__11677_11695))
{var c_11697 = cljs.core._nth.call(null,chunk__11676_11694,i__11678_11696);dommy.attrs.add_class_BANG_.call(null,n,c_11697);
{
var G__11698 = seq__11675_11693;
var G__11699 = chunk__11676_11694;
var G__11700 = count__11677_11695;
var G__11701 = (i__11678_11696 + 1);
seq__11675_11693 = G__11698;
chunk__11676_11694 = G__11699;
count__11677_11695 = G__11700;
i__11678_11696 = G__11701;
continue;
}
} else
{var temp__4092__auto___11702 = cljs.core.seq.call(null,seq__11675_11693);if(temp__4092__auto___11702)
{var seq__11675_11703__$1 = temp__4092__auto___11702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11675_11703__$1))
{var c__5489__auto___11704 = cljs.core.chunk_first.call(null,seq__11675_11703__$1);{
var G__11705 = cljs.core.chunk_rest.call(null,seq__11675_11703__$1);
var G__11706 = c__5489__auto___11704;
var G__11707 = cljs.core.count.call(null,c__5489__auto___11704);
var G__11708 = 0;
seq__11675_11693 = G__11705;
chunk__11676_11694 = G__11706;
count__11677_11695 = G__11707;
i__11678_11696 = G__11708;
continue;
}
} else
{var c_11709 = cljs.core.first.call(null,seq__11675_11703__$1);dommy.attrs.add_class_BANG_.call(null,n,c_11709);
{
var G__11710 = cljs.core.next.call(null,seq__11675_11703__$1);
var G__11711 = null;
var G__11712 = 0;
var G__11713 = 0;
seq__11675_11693 = G__11710;
chunk__11676_11694 = G__11711;
count__11677_11695 = G__11712;
i__11678_11696 = G__11713;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__11674_11692))
{dommy.attrs.add_class_BANG_.call(null,n,v_11691);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_11690,v_11691);
} else
{}
}
}
{
var G__11714 = seq__11669_11685;
var G__11715 = chunk__11670_11686;
var G__11716 = count__11671_11687;
var G__11717 = (i__11672_11688 + 1);
seq__11669_11685 = G__11714;
chunk__11670_11686 = G__11715;
count__11671_11687 = G__11716;
i__11672_11688 = G__11717;
continue;
}
} else
{var temp__4092__auto___11718 = cljs.core.seq.call(null,seq__11669_11685);if(temp__4092__auto___11718)
{var seq__11669_11719__$1 = temp__4092__auto___11718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11669_11719__$1))
{var c__5489__auto___11720 = cljs.core.chunk_first.call(null,seq__11669_11719__$1);{
var G__11721 = cljs.core.chunk_rest.call(null,seq__11669_11719__$1);
var G__11722 = c__5489__auto___11720;
var G__11723 = cljs.core.count.call(null,c__5489__auto___11720);
var G__11724 = 0;
seq__11669_11685 = G__11721;
chunk__11670_11686 = G__11722;
count__11671_11687 = G__11723;
i__11672_11688 = G__11724;
continue;
}
} else
{var vec__11679_11725 = cljs.core.first.call(null,seq__11669_11719__$1);var k_11726 = cljs.core.nth.call(null,vec__11679_11725,0,null);var v_11727 = cljs.core.nth.call(null,vec__11679_11725,1,null);var G__11680_11728 = k_11726;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__11680_11728))
{var seq__11681_11729 = cljs.core.seq.call(null,v_11727);var chunk__11682_11730 = null;var count__11683_11731 = 0;var i__11684_11732 = 0;while(true){
if((i__11684_11732 < count__11683_11731))
{var c_11733 = cljs.core._nth.call(null,chunk__11682_11730,i__11684_11732);dommy.attrs.add_class_BANG_.call(null,n,c_11733);
{
var G__11734 = seq__11681_11729;
var G__11735 = chunk__11682_11730;
var G__11736 = count__11683_11731;
var G__11737 = (i__11684_11732 + 1);
seq__11681_11729 = G__11734;
chunk__11682_11730 = G__11735;
count__11683_11731 = G__11736;
i__11684_11732 = G__11737;
continue;
}
} else
{var temp__4092__auto___11738__$1 = cljs.core.seq.call(null,seq__11681_11729);if(temp__4092__auto___11738__$1)
{var seq__11681_11739__$1 = temp__4092__auto___11738__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11681_11739__$1))
{var c__5489__auto___11740 = cljs.core.chunk_first.call(null,seq__11681_11739__$1);{
var G__11741 = cljs.core.chunk_rest.call(null,seq__11681_11739__$1);
var G__11742 = c__5489__auto___11740;
var G__11743 = cljs.core.count.call(null,c__5489__auto___11740);
var G__11744 = 0;
seq__11681_11729 = G__11741;
chunk__11682_11730 = G__11742;
count__11683_11731 = G__11743;
i__11684_11732 = G__11744;
continue;
}
} else
{var c_11745 = cljs.core.first.call(null,seq__11681_11739__$1);dommy.attrs.add_class_BANG_.call(null,n,c_11745);
{
var G__11746 = cljs.core.next.call(null,seq__11681_11739__$1);
var G__11747 = null;
var G__11748 = 0;
var G__11749 = 0;
seq__11681_11729 = G__11746;
chunk__11682_11730 = G__11747;
count__11683_11731 = G__11748;
i__11684_11732 = G__11749;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__11680_11728))
{dommy.attrs.add_class_BANG_.call(null,n,v_11727);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_11726,v_11727);
} else
{}
}
}
{
var G__11750 = cljs.core.next.call(null,seq__11669_11719__$1);
var G__11751 = null;
var G__11752 = 0;
var G__11753 = 0;
seq__11669_11685 = G__11750;
chunk__11670_11686 = G__11751;
count__11671_11687 = G__11752;
i__11672_11688 = G__11753;
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
}catch (e11754){if((e11754 instanceof ReferenceError))
{var __11755 = e11754;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11754;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__11757 = data;if(G__11757)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__11757.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11757.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11757);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11757);
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
