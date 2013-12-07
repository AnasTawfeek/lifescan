// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj8972 = {};return obj8972;
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
{var str_8975 = node_str.substring(base_idx);while(true){
var next_idx_8976 = dommy.template.next_css_index.call(null,str_8975,1);var frag_8977 = (((next_idx_8976 >= 0))?str_8975.substring(0,next_idx_8976):str_8975);var G__8974_8978 = frag_8977.charAt(0);if(cljs.core._EQ_.call(null,"#",G__8974_8978))
{node.setAttribute("id",frag_8977.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__8974_8978))
{dommy.attrs.add_class_BANG_.call(null,node,frag_8977.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_8977.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_8976 >= 0))
{{
var G__8979 = str_8975.substring(next_idx_8976);
str_8975 = G__8979;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__8985 = data;if(G__8985)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__8985.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8985.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8985);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8985);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__8986_8990 = cljs.core.seq.call(null,data);var chunk__8987_8991 = null;var count__8988_8992 = 0;var i__8989_8993 = 0;while(true){
if((i__8989_8993 < count__8988_8992))
{var child_8994 = cljs.core._nth.call(null,chunk__8987_8991,i__8989_8993);__GT_document_fragment.call(null,result_frag,child_8994);
{
var G__8995 = seq__8986_8990;
var G__8996 = chunk__8987_8991;
var G__8997 = count__8988_8992;
var G__8998 = (i__8989_8993 + 1);
seq__8986_8990 = G__8995;
chunk__8987_8991 = G__8996;
count__8988_8992 = G__8997;
i__8989_8993 = G__8998;
continue;
}
} else
{var temp__4092__auto___8999 = cljs.core.seq.call(null,seq__8986_8990);if(temp__4092__auto___8999)
{var seq__8986_9000__$1 = temp__4092__auto___8999;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8986_9000__$1))
{var c__5497__auto___9001 = cljs.core.chunk_first.call(null,seq__8986_9000__$1);{
var G__9002 = cljs.core.chunk_rest.call(null,seq__8986_9000__$1);
var G__9003 = c__5497__auto___9001;
var G__9004 = cljs.core.count.call(null,c__5497__auto___9001);
var G__9005 = 0;
seq__8986_8990 = G__9002;
chunk__8987_8991 = G__9003;
count__8988_8992 = G__9004;
i__8989_8993 = G__9005;
continue;
}
} else
{var child_9006 = cljs.core.first.call(null,seq__8986_9000__$1);__GT_document_fragment.call(null,result_frag,child_9006);
{
var G__9007 = cljs.core.next.call(null,seq__8986_9000__$1);
var G__9008 = null;
var G__9009 = 0;
var G__9010 = 0;
seq__8986_8990 = G__9007;
chunk__8987_8991 = G__9008;
count__8988_8992 = G__9009;
i__8989_8993 = G__9010;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__9012 = data;if(G__9012)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__9012.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9012.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9012);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9012);
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
dommy.template.compound_element = (function compound_element(p__9013){var vec__9033 = p__9013;var tag_name = cljs.core.nth.call(null,vec__9033,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__9033,1,null);var children = cljs.core.nthnext.call(null,vec__9033,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__9035 = maybe_attrs;if(G__9035)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__9035.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9035.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9035);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9035);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__9036_9052 = cljs.core.seq.call(null,attrs);var chunk__9037_9053 = null;var count__9038_9054 = 0;var i__9039_9055 = 0;while(true){
if((i__9039_9055 < count__9038_9054))
{var vec__9040_9056 = cljs.core._nth.call(null,chunk__9037_9053,i__9039_9055);var k_9057 = cljs.core.nth.call(null,vec__9040_9056,0,null);var v_9058 = cljs.core.nth.call(null,vec__9040_9056,1,null);var G__9041_9059 = k_9057;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9041_9059))
{var seq__9042_9060 = cljs.core.seq.call(null,v_9058);var chunk__9043_9061 = null;var count__9044_9062 = 0;var i__9045_9063 = 0;while(true){
if((i__9045_9063 < count__9044_9062))
{var c_9064 = cljs.core._nth.call(null,chunk__9043_9061,i__9045_9063);dommy.attrs.add_class_BANG_.call(null,n,c_9064);
{
var G__9065 = seq__9042_9060;
var G__9066 = chunk__9043_9061;
var G__9067 = count__9044_9062;
var G__9068 = (i__9045_9063 + 1);
seq__9042_9060 = G__9065;
chunk__9043_9061 = G__9066;
count__9044_9062 = G__9067;
i__9045_9063 = G__9068;
continue;
}
} else
{var temp__4092__auto___9069 = cljs.core.seq.call(null,seq__9042_9060);if(temp__4092__auto___9069)
{var seq__9042_9070__$1 = temp__4092__auto___9069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9042_9070__$1))
{var c__5497__auto___9071 = cljs.core.chunk_first.call(null,seq__9042_9070__$1);{
var G__9072 = cljs.core.chunk_rest.call(null,seq__9042_9070__$1);
var G__9073 = c__5497__auto___9071;
var G__9074 = cljs.core.count.call(null,c__5497__auto___9071);
var G__9075 = 0;
seq__9042_9060 = G__9072;
chunk__9043_9061 = G__9073;
count__9044_9062 = G__9074;
i__9045_9063 = G__9075;
continue;
}
} else
{var c_9076 = cljs.core.first.call(null,seq__9042_9070__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9076);
{
var G__9077 = cljs.core.next.call(null,seq__9042_9070__$1);
var G__9078 = null;
var G__9079 = 0;
var G__9080 = 0;
seq__9042_9060 = G__9077;
chunk__9043_9061 = G__9078;
count__9044_9062 = G__9079;
i__9045_9063 = G__9080;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9041_9059))
{dommy.attrs.add_class_BANG_.call(null,n,v_9058);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9057,v_9058);
} else
{}
}
}
{
var G__9081 = seq__9036_9052;
var G__9082 = chunk__9037_9053;
var G__9083 = count__9038_9054;
var G__9084 = (i__9039_9055 + 1);
seq__9036_9052 = G__9081;
chunk__9037_9053 = G__9082;
count__9038_9054 = G__9083;
i__9039_9055 = G__9084;
continue;
}
} else
{var temp__4092__auto___9085 = cljs.core.seq.call(null,seq__9036_9052);if(temp__4092__auto___9085)
{var seq__9036_9086__$1 = temp__4092__auto___9085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9036_9086__$1))
{var c__5497__auto___9087 = cljs.core.chunk_first.call(null,seq__9036_9086__$1);{
var G__9088 = cljs.core.chunk_rest.call(null,seq__9036_9086__$1);
var G__9089 = c__5497__auto___9087;
var G__9090 = cljs.core.count.call(null,c__5497__auto___9087);
var G__9091 = 0;
seq__9036_9052 = G__9088;
chunk__9037_9053 = G__9089;
count__9038_9054 = G__9090;
i__9039_9055 = G__9091;
continue;
}
} else
{var vec__9046_9092 = cljs.core.first.call(null,seq__9036_9086__$1);var k_9093 = cljs.core.nth.call(null,vec__9046_9092,0,null);var v_9094 = cljs.core.nth.call(null,vec__9046_9092,1,null);var G__9047_9095 = k_9093;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9047_9095))
{var seq__9048_9096 = cljs.core.seq.call(null,v_9094);var chunk__9049_9097 = null;var count__9050_9098 = 0;var i__9051_9099 = 0;while(true){
if((i__9051_9099 < count__9050_9098))
{var c_9100 = cljs.core._nth.call(null,chunk__9049_9097,i__9051_9099);dommy.attrs.add_class_BANG_.call(null,n,c_9100);
{
var G__9101 = seq__9048_9096;
var G__9102 = chunk__9049_9097;
var G__9103 = count__9050_9098;
var G__9104 = (i__9051_9099 + 1);
seq__9048_9096 = G__9101;
chunk__9049_9097 = G__9102;
count__9050_9098 = G__9103;
i__9051_9099 = G__9104;
continue;
}
} else
{var temp__4092__auto___9105__$1 = cljs.core.seq.call(null,seq__9048_9096);if(temp__4092__auto___9105__$1)
{var seq__9048_9106__$1 = temp__4092__auto___9105__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9048_9106__$1))
{var c__5497__auto___9107 = cljs.core.chunk_first.call(null,seq__9048_9106__$1);{
var G__9108 = cljs.core.chunk_rest.call(null,seq__9048_9106__$1);
var G__9109 = c__5497__auto___9107;
var G__9110 = cljs.core.count.call(null,c__5497__auto___9107);
var G__9111 = 0;
seq__9048_9096 = G__9108;
chunk__9049_9097 = G__9109;
count__9050_9098 = G__9110;
i__9051_9099 = G__9111;
continue;
}
} else
{var c_9112 = cljs.core.first.call(null,seq__9048_9106__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9112);
{
var G__9113 = cljs.core.next.call(null,seq__9048_9106__$1);
var G__9114 = null;
var G__9115 = 0;
var G__9116 = 0;
seq__9048_9096 = G__9113;
chunk__9049_9097 = G__9114;
count__9050_9098 = G__9115;
i__9051_9099 = G__9116;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9047_9095))
{dommy.attrs.add_class_BANG_.call(null,n,v_9094);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9093,v_9094);
} else
{}
}
}
{
var G__9117 = cljs.core.next.call(null,seq__9036_9086__$1);
var G__9118 = null;
var G__9119 = 0;
var G__9120 = 0;
seq__9036_9052 = G__9117;
chunk__9037_9053 = G__9118;
count__9038_9054 = G__9119;
i__9039_9055 = G__9120;
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
}catch (e9121){if((e9121 instanceof ReferenceError))
{var __9122 = e9121;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9121;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__9124 = data;if(G__9124)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__9124.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9124.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9124);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9124);
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
