// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj11612 = {};return obj11612;
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
{var str_11615 = node_str.substring(base_idx);while(true){
var next_idx_11616 = dommy.template.next_css_index.call(null,str_11615,1);var frag_11617 = (((next_idx_11616 >= 0))?str_11615.substring(0,next_idx_11616):str_11615);var G__11614_11618 = frag_11617.charAt(0);if(cljs.core._EQ_.call(null,"#",G__11614_11618))
{node.setAttribute("id",frag_11617.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__11614_11618))
{dommy.attrs.add_class_BANG_.call(null,node,frag_11617.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_11617.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_11616 >= 0))
{{
var G__11619 = str_11615.substring(next_idx_11616);
str_11615 = G__11619;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__11625 = data;if(G__11625)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__11625.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11625.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11625);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11625);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__11626_11630 = cljs.core.seq.call(null,data);var chunk__11627_11631 = null;var count__11628_11632 = 0;var i__11629_11633 = 0;while(true){
if((i__11629_11633 < count__11628_11632))
{var child_11634 = cljs.core._nth.call(null,chunk__11627_11631,i__11629_11633);__GT_document_fragment.call(null,result_frag,child_11634);
{
var G__11635 = seq__11626_11630;
var G__11636 = chunk__11627_11631;
var G__11637 = count__11628_11632;
var G__11638 = (i__11629_11633 + 1);
seq__11626_11630 = G__11635;
chunk__11627_11631 = G__11636;
count__11628_11632 = G__11637;
i__11629_11633 = G__11638;
continue;
}
} else
{var temp__4092__auto___11639 = cljs.core.seq.call(null,seq__11626_11630);if(temp__4092__auto___11639)
{var seq__11626_11640__$1 = temp__4092__auto___11639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11626_11640__$1))
{var c__4015__auto___11641 = cljs.core.chunk_first.call(null,seq__11626_11640__$1);{
var G__11642 = cljs.core.chunk_rest.call(null,seq__11626_11640__$1);
var G__11643 = c__4015__auto___11641;
var G__11644 = cljs.core.count.call(null,c__4015__auto___11641);
var G__11645 = 0;
seq__11626_11630 = G__11642;
chunk__11627_11631 = G__11643;
count__11628_11632 = G__11644;
i__11629_11633 = G__11645;
continue;
}
} else
{var child_11646 = cljs.core.first.call(null,seq__11626_11640__$1);__GT_document_fragment.call(null,result_frag,child_11646);
{
var G__11647 = cljs.core.next.call(null,seq__11626_11640__$1);
var G__11648 = null;
var G__11649 = 0;
var G__11650 = 0;
seq__11626_11630 = G__11647;
chunk__11627_11631 = G__11648;
count__11628_11632 = G__11649;
i__11629_11633 = G__11650;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__11652 = data;if(G__11652)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__11652.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11652.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11652);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11652);
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
dommy.template.compound_element = (function compound_element(p__11653){var vec__11673 = p__11653;var tag_name = cljs.core.nth.call(null,vec__11673,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__11673,1,null);var children = cljs.core.nthnext.call(null,vec__11673,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__11675 = maybe_attrs;if(G__11675)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__11675.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11675.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11675);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11675);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__11676_11692 = cljs.core.seq.call(null,attrs);var chunk__11677_11693 = null;var count__11678_11694 = 0;var i__11679_11695 = 0;while(true){
if((i__11679_11695 < count__11678_11694))
{var vec__11680_11696 = cljs.core._nth.call(null,chunk__11677_11693,i__11679_11695);var k_11697 = cljs.core.nth.call(null,vec__11680_11696,0,null);var v_11698 = cljs.core.nth.call(null,vec__11680_11696,1,null);var G__11681_11699 = k_11697;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__11681_11699))
{var seq__11682_11700 = cljs.core.seq.call(null,v_11698);var chunk__11683_11701 = null;var count__11684_11702 = 0;var i__11685_11703 = 0;while(true){
if((i__11685_11703 < count__11684_11702))
{var c_11704 = cljs.core._nth.call(null,chunk__11683_11701,i__11685_11703);dommy.attrs.add_class_BANG_.call(null,n,c_11704);
{
var G__11705 = seq__11682_11700;
var G__11706 = chunk__11683_11701;
var G__11707 = count__11684_11702;
var G__11708 = (i__11685_11703 + 1);
seq__11682_11700 = G__11705;
chunk__11683_11701 = G__11706;
count__11684_11702 = G__11707;
i__11685_11703 = G__11708;
continue;
}
} else
{var temp__4092__auto___11709 = cljs.core.seq.call(null,seq__11682_11700);if(temp__4092__auto___11709)
{var seq__11682_11710__$1 = temp__4092__auto___11709;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11682_11710__$1))
{var c__4015__auto___11711 = cljs.core.chunk_first.call(null,seq__11682_11710__$1);{
var G__11712 = cljs.core.chunk_rest.call(null,seq__11682_11710__$1);
var G__11713 = c__4015__auto___11711;
var G__11714 = cljs.core.count.call(null,c__4015__auto___11711);
var G__11715 = 0;
seq__11682_11700 = G__11712;
chunk__11683_11701 = G__11713;
count__11684_11702 = G__11714;
i__11685_11703 = G__11715;
continue;
}
} else
{var c_11716 = cljs.core.first.call(null,seq__11682_11710__$1);dommy.attrs.add_class_BANG_.call(null,n,c_11716);
{
var G__11717 = cljs.core.next.call(null,seq__11682_11710__$1);
var G__11718 = null;
var G__11719 = 0;
var G__11720 = 0;
seq__11682_11700 = G__11717;
chunk__11683_11701 = G__11718;
count__11684_11702 = G__11719;
i__11685_11703 = G__11720;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__11681_11699))
{dommy.attrs.add_class_BANG_.call(null,n,v_11698);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_11697,v_11698);
} else
{}
}
}
{
var G__11721 = seq__11676_11692;
var G__11722 = chunk__11677_11693;
var G__11723 = count__11678_11694;
var G__11724 = (i__11679_11695 + 1);
seq__11676_11692 = G__11721;
chunk__11677_11693 = G__11722;
count__11678_11694 = G__11723;
i__11679_11695 = G__11724;
continue;
}
} else
{var temp__4092__auto___11725 = cljs.core.seq.call(null,seq__11676_11692);if(temp__4092__auto___11725)
{var seq__11676_11726__$1 = temp__4092__auto___11725;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11676_11726__$1))
{var c__4015__auto___11727 = cljs.core.chunk_first.call(null,seq__11676_11726__$1);{
var G__11728 = cljs.core.chunk_rest.call(null,seq__11676_11726__$1);
var G__11729 = c__4015__auto___11727;
var G__11730 = cljs.core.count.call(null,c__4015__auto___11727);
var G__11731 = 0;
seq__11676_11692 = G__11728;
chunk__11677_11693 = G__11729;
count__11678_11694 = G__11730;
i__11679_11695 = G__11731;
continue;
}
} else
{var vec__11686_11732 = cljs.core.first.call(null,seq__11676_11726__$1);var k_11733 = cljs.core.nth.call(null,vec__11686_11732,0,null);var v_11734 = cljs.core.nth.call(null,vec__11686_11732,1,null);var G__11687_11735 = k_11733;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__11687_11735))
{var seq__11688_11736 = cljs.core.seq.call(null,v_11734);var chunk__11689_11737 = null;var count__11690_11738 = 0;var i__11691_11739 = 0;while(true){
if((i__11691_11739 < count__11690_11738))
{var c_11740 = cljs.core._nth.call(null,chunk__11689_11737,i__11691_11739);dommy.attrs.add_class_BANG_.call(null,n,c_11740);
{
var G__11741 = seq__11688_11736;
var G__11742 = chunk__11689_11737;
var G__11743 = count__11690_11738;
var G__11744 = (i__11691_11739 + 1);
seq__11688_11736 = G__11741;
chunk__11689_11737 = G__11742;
count__11690_11738 = G__11743;
i__11691_11739 = G__11744;
continue;
}
} else
{var temp__4092__auto___11745__$1 = cljs.core.seq.call(null,seq__11688_11736);if(temp__4092__auto___11745__$1)
{var seq__11688_11746__$1 = temp__4092__auto___11745__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11688_11746__$1))
{var c__4015__auto___11747 = cljs.core.chunk_first.call(null,seq__11688_11746__$1);{
var G__11748 = cljs.core.chunk_rest.call(null,seq__11688_11746__$1);
var G__11749 = c__4015__auto___11747;
var G__11750 = cljs.core.count.call(null,c__4015__auto___11747);
var G__11751 = 0;
seq__11688_11736 = G__11748;
chunk__11689_11737 = G__11749;
count__11690_11738 = G__11750;
i__11691_11739 = G__11751;
continue;
}
} else
{var c_11752 = cljs.core.first.call(null,seq__11688_11746__$1);dommy.attrs.add_class_BANG_.call(null,n,c_11752);
{
var G__11753 = cljs.core.next.call(null,seq__11688_11746__$1);
var G__11754 = null;
var G__11755 = 0;
var G__11756 = 0;
seq__11688_11736 = G__11753;
chunk__11689_11737 = G__11754;
count__11690_11738 = G__11755;
i__11691_11739 = G__11756;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__11687_11735))
{dommy.attrs.add_class_BANG_.call(null,n,v_11734);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_11733,v_11734);
} else
{}
}
}
{
var G__11757 = cljs.core.next.call(null,seq__11676_11726__$1);
var G__11758 = null;
var G__11759 = 0;
var G__11760 = 0;
seq__11676_11692 = G__11757;
chunk__11677_11693 = G__11758;
count__11678_11694 = G__11759;
i__11679_11695 = G__11760;
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
}catch (e11761){if((e11761 instanceof ReferenceError))
{var __11762 = e11761;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11761;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__11764 = data;if(G__11764)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__11764.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11764.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11764);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11764);
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
