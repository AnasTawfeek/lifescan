// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj57008 = {};return obj57008;
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
{var str_57011 = node_str.substring(base_idx);while(true){
var next_idx_57012 = dommy.template.next_css_index.call(null,str_57011,1);var frag_57013 = (((next_idx_57012 >= 0))?str_57011.substring(0,next_idx_57012):str_57011);var G__57010_57014 = frag_57013.charAt(0);if(cljs.core._EQ_.call(null,"#",G__57010_57014))
{node.setAttribute("id",frag_57013.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__57010_57014))
{dommy.attrs.add_class_BANG_.call(null,node,frag_57013.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_57013.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_57012 >= 0))
{{
var G__57015 = str_57011.substring(next_idx_57012);
str_57011 = G__57015;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__57021 = data;if(G__57021)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__57021.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__57021.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__57021);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__57021);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__57022_57026 = cljs.core.seq.call(null,data);var chunk__57023_57027 = null;var count__57024_57028 = 0;var i__57025_57029 = 0;while(true){
if((i__57025_57029 < count__57024_57028))
{var child_57030 = cljs.core._nth.call(null,chunk__57023_57027,i__57025_57029);__GT_document_fragment.call(null,result_frag,child_57030);
{
var G__57031 = seq__57022_57026;
var G__57032 = chunk__57023_57027;
var G__57033 = count__57024_57028;
var G__57034 = (i__57025_57029 + 1);
seq__57022_57026 = G__57031;
chunk__57023_57027 = G__57032;
count__57024_57028 = G__57033;
i__57025_57029 = G__57034;
continue;
}
} else
{var temp__4092__auto___57035 = cljs.core.seq.call(null,seq__57022_57026);if(temp__4092__auto___57035)
{var seq__57022_57036__$1 = temp__4092__auto___57035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57022_57036__$1))
{var c__4017__auto___57037 = cljs.core.chunk_first.call(null,seq__57022_57036__$1);{
var G__57038 = cljs.core.chunk_rest.call(null,seq__57022_57036__$1);
var G__57039 = c__4017__auto___57037;
var G__57040 = cljs.core.count.call(null,c__4017__auto___57037);
var G__57041 = 0;
seq__57022_57026 = G__57038;
chunk__57023_57027 = G__57039;
count__57024_57028 = G__57040;
i__57025_57029 = G__57041;
continue;
}
} else
{var child_57042 = cljs.core.first.call(null,seq__57022_57036__$1);__GT_document_fragment.call(null,result_frag,child_57042);
{
var G__57043 = cljs.core.next.call(null,seq__57022_57036__$1);
var G__57044 = null;
var G__57045 = 0;
var G__57046 = 0;
seq__57022_57026 = G__57043;
chunk__57023_57027 = G__57044;
count__57024_57028 = G__57045;
i__57025_57029 = G__57046;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__57048 = data;if(G__57048)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__57048.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__57048.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__57048);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__57048);
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
dommy.template.compound_element = (function compound_element(p__57049){var vec__57069 = p__57049;var tag_name = cljs.core.nth.call(null,vec__57069,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__57069,1,null);var children = cljs.core.nthnext.call(null,vec__57069,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__57071 = maybe_attrs;if(G__57071)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__57071.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__57071.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__57071);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__57071);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__57072_57088 = cljs.core.seq.call(null,attrs);var chunk__57073_57089 = null;var count__57074_57090 = 0;var i__57075_57091 = 0;while(true){
if((i__57075_57091 < count__57074_57090))
{var vec__57076_57092 = cljs.core._nth.call(null,chunk__57073_57089,i__57075_57091);var k_57093 = cljs.core.nth.call(null,vec__57076_57092,0,null);var v_57094 = cljs.core.nth.call(null,vec__57076_57092,1,null);var G__57077_57095 = k_57093;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__57077_57095))
{var seq__57078_57096 = cljs.core.seq.call(null,v_57094);var chunk__57079_57097 = null;var count__57080_57098 = 0;var i__57081_57099 = 0;while(true){
if((i__57081_57099 < count__57080_57098))
{var c_57100 = cljs.core._nth.call(null,chunk__57079_57097,i__57081_57099);dommy.attrs.add_class_BANG_.call(null,n,c_57100);
{
var G__57101 = seq__57078_57096;
var G__57102 = chunk__57079_57097;
var G__57103 = count__57080_57098;
var G__57104 = (i__57081_57099 + 1);
seq__57078_57096 = G__57101;
chunk__57079_57097 = G__57102;
count__57080_57098 = G__57103;
i__57081_57099 = G__57104;
continue;
}
} else
{var temp__4092__auto___57105 = cljs.core.seq.call(null,seq__57078_57096);if(temp__4092__auto___57105)
{var seq__57078_57106__$1 = temp__4092__auto___57105;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57078_57106__$1))
{var c__4017__auto___57107 = cljs.core.chunk_first.call(null,seq__57078_57106__$1);{
var G__57108 = cljs.core.chunk_rest.call(null,seq__57078_57106__$1);
var G__57109 = c__4017__auto___57107;
var G__57110 = cljs.core.count.call(null,c__4017__auto___57107);
var G__57111 = 0;
seq__57078_57096 = G__57108;
chunk__57079_57097 = G__57109;
count__57080_57098 = G__57110;
i__57081_57099 = G__57111;
continue;
}
} else
{var c_57112 = cljs.core.first.call(null,seq__57078_57106__$1);dommy.attrs.add_class_BANG_.call(null,n,c_57112);
{
var G__57113 = cljs.core.next.call(null,seq__57078_57106__$1);
var G__57114 = null;
var G__57115 = 0;
var G__57116 = 0;
seq__57078_57096 = G__57113;
chunk__57079_57097 = G__57114;
count__57080_57098 = G__57115;
i__57081_57099 = G__57116;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__57077_57095))
{dommy.attrs.add_class_BANG_.call(null,n,v_57094);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_57093,v_57094);
} else
{}
}
}
{
var G__57117 = seq__57072_57088;
var G__57118 = chunk__57073_57089;
var G__57119 = count__57074_57090;
var G__57120 = (i__57075_57091 + 1);
seq__57072_57088 = G__57117;
chunk__57073_57089 = G__57118;
count__57074_57090 = G__57119;
i__57075_57091 = G__57120;
continue;
}
} else
{var temp__4092__auto___57121 = cljs.core.seq.call(null,seq__57072_57088);if(temp__4092__auto___57121)
{var seq__57072_57122__$1 = temp__4092__auto___57121;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57072_57122__$1))
{var c__4017__auto___57123 = cljs.core.chunk_first.call(null,seq__57072_57122__$1);{
var G__57124 = cljs.core.chunk_rest.call(null,seq__57072_57122__$1);
var G__57125 = c__4017__auto___57123;
var G__57126 = cljs.core.count.call(null,c__4017__auto___57123);
var G__57127 = 0;
seq__57072_57088 = G__57124;
chunk__57073_57089 = G__57125;
count__57074_57090 = G__57126;
i__57075_57091 = G__57127;
continue;
}
} else
{var vec__57082_57128 = cljs.core.first.call(null,seq__57072_57122__$1);var k_57129 = cljs.core.nth.call(null,vec__57082_57128,0,null);var v_57130 = cljs.core.nth.call(null,vec__57082_57128,1,null);var G__57083_57131 = k_57129;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__57083_57131))
{var seq__57084_57132 = cljs.core.seq.call(null,v_57130);var chunk__57085_57133 = null;var count__57086_57134 = 0;var i__57087_57135 = 0;while(true){
if((i__57087_57135 < count__57086_57134))
{var c_57136 = cljs.core._nth.call(null,chunk__57085_57133,i__57087_57135);dommy.attrs.add_class_BANG_.call(null,n,c_57136);
{
var G__57137 = seq__57084_57132;
var G__57138 = chunk__57085_57133;
var G__57139 = count__57086_57134;
var G__57140 = (i__57087_57135 + 1);
seq__57084_57132 = G__57137;
chunk__57085_57133 = G__57138;
count__57086_57134 = G__57139;
i__57087_57135 = G__57140;
continue;
}
} else
{var temp__4092__auto___57141__$1 = cljs.core.seq.call(null,seq__57084_57132);if(temp__4092__auto___57141__$1)
{var seq__57084_57142__$1 = temp__4092__auto___57141__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57084_57142__$1))
{var c__4017__auto___57143 = cljs.core.chunk_first.call(null,seq__57084_57142__$1);{
var G__57144 = cljs.core.chunk_rest.call(null,seq__57084_57142__$1);
var G__57145 = c__4017__auto___57143;
var G__57146 = cljs.core.count.call(null,c__4017__auto___57143);
var G__57147 = 0;
seq__57084_57132 = G__57144;
chunk__57085_57133 = G__57145;
count__57086_57134 = G__57146;
i__57087_57135 = G__57147;
continue;
}
} else
{var c_57148 = cljs.core.first.call(null,seq__57084_57142__$1);dommy.attrs.add_class_BANG_.call(null,n,c_57148);
{
var G__57149 = cljs.core.next.call(null,seq__57084_57142__$1);
var G__57150 = null;
var G__57151 = 0;
var G__57152 = 0;
seq__57084_57132 = G__57149;
chunk__57085_57133 = G__57150;
count__57086_57134 = G__57151;
i__57087_57135 = G__57152;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__57083_57131))
{dommy.attrs.add_class_BANG_.call(null,n,v_57130);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_57129,v_57130);
} else
{}
}
}
{
var G__57153 = cljs.core.next.call(null,seq__57072_57122__$1);
var G__57154 = null;
var G__57155 = 0;
var G__57156 = 0;
seq__57072_57088 = G__57153;
chunk__57073_57089 = G__57154;
count__57074_57090 = G__57155;
i__57075_57091 = G__57156;
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
}catch (e57157){if((e57157 instanceof ReferenceError))
{var __57158 = e57157;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57157;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__57160 = data;if(G__57160)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__57160.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__57160.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__57160);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__57160);
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
