// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj11674 = {};return obj11674;
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
{var str_11677 = node_str.substring(base_idx);while(true){
var next_idx_11678 = dommy.template.next_css_index.call(null,str_11677,1);var frag_11679 = (((next_idx_11678 >= 0))?str_11677.substring(0,next_idx_11678):str_11677);var G__11676_11680 = frag_11679.charAt(0);if(cljs.core._EQ_.call(null,"#",G__11676_11680))
{node.setAttribute("id",frag_11679.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__11676_11680))
{dommy.attrs.add_class_BANG_.call(null,node,frag_11679.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_11679.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_11678 >= 0))
{{
var G__11681 = str_11677.substring(next_idx_11678);
str_11677 = G__11681;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__11687 = data;if(G__11687)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__11687.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11687.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11687);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11687);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__11688_11692 = cljs.core.seq.call(null,data);var chunk__11689_11693 = null;var count__11690_11694 = 0;var i__11691_11695 = 0;while(true){
if((i__11691_11695 < count__11690_11694))
{var child_11696 = cljs.core._nth.call(null,chunk__11689_11693,i__11691_11695);__GT_document_fragment.call(null,result_frag,child_11696);
{
var G__11697 = seq__11688_11692;
var G__11698 = chunk__11689_11693;
var G__11699 = count__11690_11694;
var G__11700 = (i__11691_11695 + 1);
seq__11688_11692 = G__11697;
chunk__11689_11693 = G__11698;
count__11690_11694 = G__11699;
i__11691_11695 = G__11700;
continue;
}
} else
{var temp__4092__auto___11701 = cljs.core.seq.call(null,seq__11688_11692);if(temp__4092__auto___11701)
{var seq__11688_11702__$1 = temp__4092__auto___11701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11688_11702__$1))
{var c__5497__auto___11703 = cljs.core.chunk_first.call(null,seq__11688_11702__$1);{
var G__11704 = cljs.core.chunk_rest.call(null,seq__11688_11702__$1);
var G__11705 = c__5497__auto___11703;
var G__11706 = cljs.core.count.call(null,c__5497__auto___11703);
var G__11707 = 0;
seq__11688_11692 = G__11704;
chunk__11689_11693 = G__11705;
count__11690_11694 = G__11706;
i__11691_11695 = G__11707;
continue;
}
} else
{var child_11708 = cljs.core.first.call(null,seq__11688_11702__$1);__GT_document_fragment.call(null,result_frag,child_11708);
{
var G__11709 = cljs.core.next.call(null,seq__11688_11702__$1);
var G__11710 = null;
var G__11711 = 0;
var G__11712 = 0;
seq__11688_11692 = G__11709;
chunk__11689_11693 = G__11710;
count__11690_11694 = G__11711;
i__11691_11695 = G__11712;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__11714 = data;if(G__11714)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__11714.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11714.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11714);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11714);
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
dommy.template.compound_element = (function compound_element(p__11715){var vec__11735 = p__11715;var tag_name = cljs.core.nth.call(null,vec__11735,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__11735,1,null);var children = cljs.core.nthnext.call(null,vec__11735,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__11737 = maybe_attrs;if(G__11737)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__11737.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11737.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11737);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11737);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__11738_11754 = cljs.core.seq.call(null,attrs);var chunk__11739_11755 = null;var count__11740_11756 = 0;var i__11741_11757 = 0;while(true){
if((i__11741_11757 < count__11740_11756))
{var vec__11742_11758 = cljs.core._nth.call(null,chunk__11739_11755,i__11741_11757);var k_11759 = cljs.core.nth.call(null,vec__11742_11758,0,null);var v_11760 = cljs.core.nth.call(null,vec__11742_11758,1,null);var G__11743_11761 = k_11759;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__11743_11761))
{var seq__11744_11762 = cljs.core.seq.call(null,v_11760);var chunk__11745_11763 = null;var count__11746_11764 = 0;var i__11747_11765 = 0;while(true){
if((i__11747_11765 < count__11746_11764))
{var c_11766 = cljs.core._nth.call(null,chunk__11745_11763,i__11747_11765);dommy.attrs.add_class_BANG_.call(null,n,c_11766);
{
var G__11767 = seq__11744_11762;
var G__11768 = chunk__11745_11763;
var G__11769 = count__11746_11764;
var G__11770 = (i__11747_11765 + 1);
seq__11744_11762 = G__11767;
chunk__11745_11763 = G__11768;
count__11746_11764 = G__11769;
i__11747_11765 = G__11770;
continue;
}
} else
{var temp__4092__auto___11771 = cljs.core.seq.call(null,seq__11744_11762);if(temp__4092__auto___11771)
{var seq__11744_11772__$1 = temp__4092__auto___11771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11744_11772__$1))
{var c__5497__auto___11773 = cljs.core.chunk_first.call(null,seq__11744_11772__$1);{
var G__11774 = cljs.core.chunk_rest.call(null,seq__11744_11772__$1);
var G__11775 = c__5497__auto___11773;
var G__11776 = cljs.core.count.call(null,c__5497__auto___11773);
var G__11777 = 0;
seq__11744_11762 = G__11774;
chunk__11745_11763 = G__11775;
count__11746_11764 = G__11776;
i__11747_11765 = G__11777;
continue;
}
} else
{var c_11778 = cljs.core.first.call(null,seq__11744_11772__$1);dommy.attrs.add_class_BANG_.call(null,n,c_11778);
{
var G__11779 = cljs.core.next.call(null,seq__11744_11772__$1);
var G__11780 = null;
var G__11781 = 0;
var G__11782 = 0;
seq__11744_11762 = G__11779;
chunk__11745_11763 = G__11780;
count__11746_11764 = G__11781;
i__11747_11765 = G__11782;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__11743_11761))
{dommy.attrs.add_class_BANG_.call(null,n,v_11760);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_11759,v_11760);
} else
{}
}
}
{
var G__11783 = seq__11738_11754;
var G__11784 = chunk__11739_11755;
var G__11785 = count__11740_11756;
var G__11786 = (i__11741_11757 + 1);
seq__11738_11754 = G__11783;
chunk__11739_11755 = G__11784;
count__11740_11756 = G__11785;
i__11741_11757 = G__11786;
continue;
}
} else
{var temp__4092__auto___11787 = cljs.core.seq.call(null,seq__11738_11754);if(temp__4092__auto___11787)
{var seq__11738_11788__$1 = temp__4092__auto___11787;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11738_11788__$1))
{var c__5497__auto___11789 = cljs.core.chunk_first.call(null,seq__11738_11788__$1);{
var G__11790 = cljs.core.chunk_rest.call(null,seq__11738_11788__$1);
var G__11791 = c__5497__auto___11789;
var G__11792 = cljs.core.count.call(null,c__5497__auto___11789);
var G__11793 = 0;
seq__11738_11754 = G__11790;
chunk__11739_11755 = G__11791;
count__11740_11756 = G__11792;
i__11741_11757 = G__11793;
continue;
}
} else
{var vec__11748_11794 = cljs.core.first.call(null,seq__11738_11788__$1);var k_11795 = cljs.core.nth.call(null,vec__11748_11794,0,null);var v_11796 = cljs.core.nth.call(null,vec__11748_11794,1,null);var G__11749_11797 = k_11795;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__11749_11797))
{var seq__11750_11798 = cljs.core.seq.call(null,v_11796);var chunk__11751_11799 = null;var count__11752_11800 = 0;var i__11753_11801 = 0;while(true){
if((i__11753_11801 < count__11752_11800))
{var c_11802 = cljs.core._nth.call(null,chunk__11751_11799,i__11753_11801);dommy.attrs.add_class_BANG_.call(null,n,c_11802);
{
var G__11803 = seq__11750_11798;
var G__11804 = chunk__11751_11799;
var G__11805 = count__11752_11800;
var G__11806 = (i__11753_11801 + 1);
seq__11750_11798 = G__11803;
chunk__11751_11799 = G__11804;
count__11752_11800 = G__11805;
i__11753_11801 = G__11806;
continue;
}
} else
{var temp__4092__auto___11807__$1 = cljs.core.seq.call(null,seq__11750_11798);if(temp__4092__auto___11807__$1)
{var seq__11750_11808__$1 = temp__4092__auto___11807__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11750_11808__$1))
{var c__5497__auto___11809 = cljs.core.chunk_first.call(null,seq__11750_11808__$1);{
var G__11810 = cljs.core.chunk_rest.call(null,seq__11750_11808__$1);
var G__11811 = c__5497__auto___11809;
var G__11812 = cljs.core.count.call(null,c__5497__auto___11809);
var G__11813 = 0;
seq__11750_11798 = G__11810;
chunk__11751_11799 = G__11811;
count__11752_11800 = G__11812;
i__11753_11801 = G__11813;
continue;
}
} else
{var c_11814 = cljs.core.first.call(null,seq__11750_11808__$1);dommy.attrs.add_class_BANG_.call(null,n,c_11814);
{
var G__11815 = cljs.core.next.call(null,seq__11750_11808__$1);
var G__11816 = null;
var G__11817 = 0;
var G__11818 = 0;
seq__11750_11798 = G__11815;
chunk__11751_11799 = G__11816;
count__11752_11800 = G__11817;
i__11753_11801 = G__11818;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__11749_11797))
{dommy.attrs.add_class_BANG_.call(null,n,v_11796);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_11795,v_11796);
} else
{}
}
}
{
var G__11819 = cljs.core.next.call(null,seq__11738_11788__$1);
var G__11820 = null;
var G__11821 = 0;
var G__11822 = 0;
seq__11738_11754 = G__11819;
chunk__11739_11755 = G__11820;
count__11740_11756 = G__11821;
i__11741_11757 = G__11822;
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
}catch (e11823){if((e11823 instanceof ReferenceError))
{var __11824 = e11823;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11823;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__11826 = data;if(G__11826)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__11826.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11826.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11826);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__11826);
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
