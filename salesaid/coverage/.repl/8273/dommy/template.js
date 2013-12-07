// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj12019 = {};return obj12019;
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
{var str_12022 = node_str.substring(base_idx);while(true){
var next_idx_12023 = dommy.template.next_css_index.call(null,str_12022,1);var frag_12024 = (((next_idx_12023 >= 0))?str_12022.substring(0,next_idx_12023):str_12022);var G__12021_12025 = frag_12024.charAt(0);if(cljs.core._EQ_.call(null,"#",G__12021_12025))
{node.setAttribute("id",frag_12024.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__12021_12025))
{dommy.attrs.add_class_BANG_.call(null,node,frag_12024.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_12024.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_12023 >= 0))
{{
var G__12026 = str_12022.substring(next_idx_12023);
str_12022 = G__12026;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__12032 = data;if(G__12032)
{var bit__5400__auto__ = null;if(cljs.core.truth_((function (){var or__4774__auto__ = bit__5400__auto__;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
} else
{return G__12032.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12032.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12032);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12032);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__12033_12037 = cljs.core.seq.call(null,data);var chunk__12034_12038 = null;var count__12035_12039 = 0;var i__12036_12040 = 0;while(true){
if((i__12036_12040 < count__12035_12039))
{var child_12041 = cljs.core._nth.call(null,chunk__12034_12038,i__12036_12040);__GT_document_fragment.call(null,result_frag,child_12041);
{
var G__12042 = seq__12033_12037;
var G__12043 = chunk__12034_12038;
var G__12044 = count__12035_12039;
var G__12045 = (i__12036_12040 + 1);
seq__12033_12037 = G__12042;
chunk__12034_12038 = G__12043;
count__12035_12039 = G__12044;
i__12036_12040 = G__12045;
continue;
}
} else
{var temp__4092__auto___12046 = cljs.core.seq.call(null,seq__12033_12037);if(temp__4092__auto___12046)
{var seq__12033_12047__$1 = temp__4092__auto___12046;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12033_12047__$1))
{var c__5498__auto___12048 = cljs.core.chunk_first.call(null,seq__12033_12047__$1);{
var G__12049 = cljs.core.chunk_rest.call(null,seq__12033_12047__$1);
var G__12050 = c__5498__auto___12048;
var G__12051 = cljs.core.count.call(null,c__5498__auto___12048);
var G__12052 = 0;
seq__12033_12037 = G__12049;
chunk__12034_12038 = G__12050;
count__12035_12039 = G__12051;
i__12036_12040 = G__12052;
continue;
}
} else
{var child_12053 = cljs.core.first.call(null,seq__12033_12047__$1);__GT_document_fragment.call(null,result_frag,child_12053);
{
var G__12054 = cljs.core.next.call(null,seq__12033_12047__$1);
var G__12055 = null;
var G__12056 = 0;
var G__12057 = 0;
seq__12033_12037 = G__12054;
chunk__12034_12038 = G__12055;
count__12035_12039 = G__12056;
i__12036_12040 = G__12057;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__12059 = data;if(G__12059)
{var bit__5400__auto__ = null;if(cljs.core.truth_((function (){var or__4774__auto__ = bit__5400__auto__;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
} else
{return G__12059.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12059.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12059);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12059);
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
dommy.template.compound_element = (function compound_element(p__12060){var vec__12080 = p__12060;var tag_name = cljs.core.nth.call(null,vec__12080,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__12080,1,null);var children = cljs.core.nthnext.call(null,vec__12080,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__12082 = maybe_attrs;if(G__12082)
{var bit__5400__auto__ = null;if(cljs.core.truth_((function (){var or__4774__auto__ = bit__5400__auto__;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
} else
{return G__12082.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12082.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12082);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12082);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__12083_12099 = cljs.core.seq.call(null,attrs);var chunk__12084_12100 = null;var count__12085_12101 = 0;var i__12086_12102 = 0;while(true){
if((i__12086_12102 < count__12085_12101))
{var vec__12087_12103 = cljs.core._nth.call(null,chunk__12084_12100,i__12086_12102);var k_12104 = cljs.core.nth.call(null,vec__12087_12103,0,null);var v_12105 = cljs.core.nth.call(null,vec__12087_12103,1,null);var G__12088_12106 = k_12104;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__12088_12106))
{var seq__12089_12107 = cljs.core.seq.call(null,v_12105);var chunk__12090_12108 = null;var count__12091_12109 = 0;var i__12092_12110 = 0;while(true){
if((i__12092_12110 < count__12091_12109))
{var c_12111 = cljs.core._nth.call(null,chunk__12090_12108,i__12092_12110);dommy.attrs.add_class_BANG_.call(null,n,c_12111);
{
var G__12112 = seq__12089_12107;
var G__12113 = chunk__12090_12108;
var G__12114 = count__12091_12109;
var G__12115 = (i__12092_12110 + 1);
seq__12089_12107 = G__12112;
chunk__12090_12108 = G__12113;
count__12091_12109 = G__12114;
i__12092_12110 = G__12115;
continue;
}
} else
{var temp__4092__auto___12116 = cljs.core.seq.call(null,seq__12089_12107);if(temp__4092__auto___12116)
{var seq__12089_12117__$1 = temp__4092__auto___12116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12089_12117__$1))
{var c__5498__auto___12118 = cljs.core.chunk_first.call(null,seq__12089_12117__$1);{
var G__12119 = cljs.core.chunk_rest.call(null,seq__12089_12117__$1);
var G__12120 = c__5498__auto___12118;
var G__12121 = cljs.core.count.call(null,c__5498__auto___12118);
var G__12122 = 0;
seq__12089_12107 = G__12119;
chunk__12090_12108 = G__12120;
count__12091_12109 = G__12121;
i__12092_12110 = G__12122;
continue;
}
} else
{var c_12123 = cljs.core.first.call(null,seq__12089_12117__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12123);
{
var G__12124 = cljs.core.next.call(null,seq__12089_12117__$1);
var G__12125 = null;
var G__12126 = 0;
var G__12127 = 0;
seq__12089_12107 = G__12124;
chunk__12090_12108 = G__12125;
count__12091_12109 = G__12126;
i__12092_12110 = G__12127;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__12088_12106))
{dommy.attrs.add_class_BANG_.call(null,n,v_12105);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_12104,v_12105);
} else
{}
}
}
{
var G__12128 = seq__12083_12099;
var G__12129 = chunk__12084_12100;
var G__12130 = count__12085_12101;
var G__12131 = (i__12086_12102 + 1);
seq__12083_12099 = G__12128;
chunk__12084_12100 = G__12129;
count__12085_12101 = G__12130;
i__12086_12102 = G__12131;
continue;
}
} else
{var temp__4092__auto___12132 = cljs.core.seq.call(null,seq__12083_12099);if(temp__4092__auto___12132)
{var seq__12083_12133__$1 = temp__4092__auto___12132;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12083_12133__$1))
{var c__5498__auto___12134 = cljs.core.chunk_first.call(null,seq__12083_12133__$1);{
var G__12135 = cljs.core.chunk_rest.call(null,seq__12083_12133__$1);
var G__12136 = c__5498__auto___12134;
var G__12137 = cljs.core.count.call(null,c__5498__auto___12134);
var G__12138 = 0;
seq__12083_12099 = G__12135;
chunk__12084_12100 = G__12136;
count__12085_12101 = G__12137;
i__12086_12102 = G__12138;
continue;
}
} else
{var vec__12093_12139 = cljs.core.first.call(null,seq__12083_12133__$1);var k_12140 = cljs.core.nth.call(null,vec__12093_12139,0,null);var v_12141 = cljs.core.nth.call(null,vec__12093_12139,1,null);var G__12094_12142 = k_12140;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__12094_12142))
{var seq__12095_12143 = cljs.core.seq.call(null,v_12141);var chunk__12096_12144 = null;var count__12097_12145 = 0;var i__12098_12146 = 0;while(true){
if((i__12098_12146 < count__12097_12145))
{var c_12147 = cljs.core._nth.call(null,chunk__12096_12144,i__12098_12146);dommy.attrs.add_class_BANG_.call(null,n,c_12147);
{
var G__12148 = seq__12095_12143;
var G__12149 = chunk__12096_12144;
var G__12150 = count__12097_12145;
var G__12151 = (i__12098_12146 + 1);
seq__12095_12143 = G__12148;
chunk__12096_12144 = G__12149;
count__12097_12145 = G__12150;
i__12098_12146 = G__12151;
continue;
}
} else
{var temp__4092__auto___12152__$1 = cljs.core.seq.call(null,seq__12095_12143);if(temp__4092__auto___12152__$1)
{var seq__12095_12153__$1 = temp__4092__auto___12152__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12095_12153__$1))
{var c__5498__auto___12154 = cljs.core.chunk_first.call(null,seq__12095_12153__$1);{
var G__12155 = cljs.core.chunk_rest.call(null,seq__12095_12153__$1);
var G__12156 = c__5498__auto___12154;
var G__12157 = cljs.core.count.call(null,c__5498__auto___12154);
var G__12158 = 0;
seq__12095_12143 = G__12155;
chunk__12096_12144 = G__12156;
count__12097_12145 = G__12157;
i__12098_12146 = G__12158;
continue;
}
} else
{var c_12159 = cljs.core.first.call(null,seq__12095_12153__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12159);
{
var G__12160 = cljs.core.next.call(null,seq__12095_12153__$1);
var G__12161 = null;
var G__12162 = 0;
var G__12163 = 0;
seq__12095_12143 = G__12160;
chunk__12096_12144 = G__12161;
count__12097_12145 = G__12162;
i__12098_12146 = G__12163;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__12094_12142))
{dommy.attrs.add_class_BANG_.call(null,n,v_12141);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_12140,v_12141);
} else
{}
}
}
{
var G__12164 = cljs.core.next.call(null,seq__12083_12133__$1);
var G__12165 = null;
var G__12166 = 0;
var G__12167 = 0;
seq__12083_12099 = G__12164;
chunk__12084_12100 = G__12165;
count__12085_12101 = G__12166;
i__12086_12102 = G__12167;
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
}catch (e12168){if((e12168 instanceof ReferenceError))
{var __12169 = e12168;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12168;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__12171 = data;if(G__12171)
{var bit__5400__auto__ = null;if(cljs.core.truth_((function (){var or__4774__auto__ = bit__5400__auto__;if(cljs.core.truth_(or__4774__auto__))
{return or__4774__auto__;
} else
{return G__12171.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12171.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12171);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12171);
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
