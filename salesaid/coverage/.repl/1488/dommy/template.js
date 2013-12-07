// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj9070 = {};return obj9070;
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
{var str_9073 = node_str.substring(base_idx);while(true){
var next_idx_9074 = dommy.template.next_css_index.call(null,str_9073,1);var frag_9075 = (((next_idx_9074 >= 0))?str_9073.substring(0,next_idx_9074):str_9073);var G__9072_9076 = frag_9075.charAt(0);if(cljs.core._EQ_.call(null,"#",G__9072_9076))
{node.setAttribute("id",frag_9075.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__9072_9076))
{dommy.attrs.add_class_BANG_.call(null,node,frag_9075.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_9075.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_9074 >= 0))
{{
var G__9077 = str_9073.substring(next_idx_9074);
str_9073 = G__9077;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__9083 = data;if(G__9083)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__9083.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9083.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9083);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9083);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__9084_9088 = cljs.core.seq.call(null,data);var chunk__9085_9089 = null;var count__9086_9090 = 0;var i__9087_9091 = 0;while(true){
if((i__9087_9091 < count__9086_9090))
{var child_9092 = cljs.core._nth.call(null,chunk__9085_9089,i__9087_9091);__GT_document_fragment.call(null,result_frag,child_9092);
{
var G__9093 = seq__9084_9088;
var G__9094 = chunk__9085_9089;
var G__9095 = count__9086_9090;
var G__9096 = (i__9087_9091 + 1);
seq__9084_9088 = G__9093;
chunk__9085_9089 = G__9094;
count__9086_9090 = G__9095;
i__9087_9091 = G__9096;
continue;
}
} else
{var temp__4092__auto___9097 = cljs.core.seq.call(null,seq__9084_9088);if(temp__4092__auto___9097)
{var seq__9084_9098__$1 = temp__4092__auto___9097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9084_9098__$1))
{var c__5497__auto___9099 = cljs.core.chunk_first.call(null,seq__9084_9098__$1);{
var G__9100 = cljs.core.chunk_rest.call(null,seq__9084_9098__$1);
var G__9101 = c__5497__auto___9099;
var G__9102 = cljs.core.count.call(null,c__5497__auto___9099);
var G__9103 = 0;
seq__9084_9088 = G__9100;
chunk__9085_9089 = G__9101;
count__9086_9090 = G__9102;
i__9087_9091 = G__9103;
continue;
}
} else
{var child_9104 = cljs.core.first.call(null,seq__9084_9098__$1);__GT_document_fragment.call(null,result_frag,child_9104);
{
var G__9105 = cljs.core.next.call(null,seq__9084_9098__$1);
var G__9106 = null;
var G__9107 = 0;
var G__9108 = 0;
seq__9084_9088 = G__9105;
chunk__9085_9089 = G__9106;
count__9086_9090 = G__9107;
i__9087_9091 = G__9108;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__9110 = data;if(G__9110)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__9110.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9110.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9110);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9110);
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
dommy.template.compound_element = (function compound_element(p__9111){var vec__9131 = p__9111;var tag_name = cljs.core.nth.call(null,vec__9131,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__9131,1,null);var children = cljs.core.nthnext.call(null,vec__9131,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__9133 = maybe_attrs;if(G__9133)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__9133.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9133.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9133);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9133);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__9134_9150 = cljs.core.seq.call(null,attrs);var chunk__9135_9151 = null;var count__9136_9152 = 0;var i__9137_9153 = 0;while(true){
if((i__9137_9153 < count__9136_9152))
{var vec__9138_9154 = cljs.core._nth.call(null,chunk__9135_9151,i__9137_9153);var k_9155 = cljs.core.nth.call(null,vec__9138_9154,0,null);var v_9156 = cljs.core.nth.call(null,vec__9138_9154,1,null);var G__9139_9157 = k_9155;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9139_9157))
{var seq__9140_9158 = cljs.core.seq.call(null,v_9156);var chunk__9141_9159 = null;var count__9142_9160 = 0;var i__9143_9161 = 0;while(true){
if((i__9143_9161 < count__9142_9160))
{var c_9162 = cljs.core._nth.call(null,chunk__9141_9159,i__9143_9161);dommy.attrs.add_class_BANG_.call(null,n,c_9162);
{
var G__9163 = seq__9140_9158;
var G__9164 = chunk__9141_9159;
var G__9165 = count__9142_9160;
var G__9166 = (i__9143_9161 + 1);
seq__9140_9158 = G__9163;
chunk__9141_9159 = G__9164;
count__9142_9160 = G__9165;
i__9143_9161 = G__9166;
continue;
}
} else
{var temp__4092__auto___9167 = cljs.core.seq.call(null,seq__9140_9158);if(temp__4092__auto___9167)
{var seq__9140_9168__$1 = temp__4092__auto___9167;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9140_9168__$1))
{var c__5497__auto___9169 = cljs.core.chunk_first.call(null,seq__9140_9168__$1);{
var G__9170 = cljs.core.chunk_rest.call(null,seq__9140_9168__$1);
var G__9171 = c__5497__auto___9169;
var G__9172 = cljs.core.count.call(null,c__5497__auto___9169);
var G__9173 = 0;
seq__9140_9158 = G__9170;
chunk__9141_9159 = G__9171;
count__9142_9160 = G__9172;
i__9143_9161 = G__9173;
continue;
}
} else
{var c_9174 = cljs.core.first.call(null,seq__9140_9168__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9174);
{
var G__9175 = cljs.core.next.call(null,seq__9140_9168__$1);
var G__9176 = null;
var G__9177 = 0;
var G__9178 = 0;
seq__9140_9158 = G__9175;
chunk__9141_9159 = G__9176;
count__9142_9160 = G__9177;
i__9143_9161 = G__9178;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9139_9157))
{dommy.attrs.add_class_BANG_.call(null,n,v_9156);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9155,v_9156);
} else
{}
}
}
{
var G__9179 = seq__9134_9150;
var G__9180 = chunk__9135_9151;
var G__9181 = count__9136_9152;
var G__9182 = (i__9137_9153 + 1);
seq__9134_9150 = G__9179;
chunk__9135_9151 = G__9180;
count__9136_9152 = G__9181;
i__9137_9153 = G__9182;
continue;
}
} else
{var temp__4092__auto___9183 = cljs.core.seq.call(null,seq__9134_9150);if(temp__4092__auto___9183)
{var seq__9134_9184__$1 = temp__4092__auto___9183;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9134_9184__$1))
{var c__5497__auto___9185 = cljs.core.chunk_first.call(null,seq__9134_9184__$1);{
var G__9186 = cljs.core.chunk_rest.call(null,seq__9134_9184__$1);
var G__9187 = c__5497__auto___9185;
var G__9188 = cljs.core.count.call(null,c__5497__auto___9185);
var G__9189 = 0;
seq__9134_9150 = G__9186;
chunk__9135_9151 = G__9187;
count__9136_9152 = G__9188;
i__9137_9153 = G__9189;
continue;
}
} else
{var vec__9144_9190 = cljs.core.first.call(null,seq__9134_9184__$1);var k_9191 = cljs.core.nth.call(null,vec__9144_9190,0,null);var v_9192 = cljs.core.nth.call(null,vec__9144_9190,1,null);var G__9145_9193 = k_9191;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9145_9193))
{var seq__9146_9194 = cljs.core.seq.call(null,v_9192);var chunk__9147_9195 = null;var count__9148_9196 = 0;var i__9149_9197 = 0;while(true){
if((i__9149_9197 < count__9148_9196))
{var c_9198 = cljs.core._nth.call(null,chunk__9147_9195,i__9149_9197);dommy.attrs.add_class_BANG_.call(null,n,c_9198);
{
var G__9199 = seq__9146_9194;
var G__9200 = chunk__9147_9195;
var G__9201 = count__9148_9196;
var G__9202 = (i__9149_9197 + 1);
seq__9146_9194 = G__9199;
chunk__9147_9195 = G__9200;
count__9148_9196 = G__9201;
i__9149_9197 = G__9202;
continue;
}
} else
{var temp__4092__auto___9203__$1 = cljs.core.seq.call(null,seq__9146_9194);if(temp__4092__auto___9203__$1)
{var seq__9146_9204__$1 = temp__4092__auto___9203__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9146_9204__$1))
{var c__5497__auto___9205 = cljs.core.chunk_first.call(null,seq__9146_9204__$1);{
var G__9206 = cljs.core.chunk_rest.call(null,seq__9146_9204__$1);
var G__9207 = c__5497__auto___9205;
var G__9208 = cljs.core.count.call(null,c__5497__auto___9205);
var G__9209 = 0;
seq__9146_9194 = G__9206;
chunk__9147_9195 = G__9207;
count__9148_9196 = G__9208;
i__9149_9197 = G__9209;
continue;
}
} else
{var c_9210 = cljs.core.first.call(null,seq__9146_9204__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9210);
{
var G__9211 = cljs.core.next.call(null,seq__9146_9204__$1);
var G__9212 = null;
var G__9213 = 0;
var G__9214 = 0;
seq__9146_9194 = G__9211;
chunk__9147_9195 = G__9212;
count__9148_9196 = G__9213;
i__9149_9197 = G__9214;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9145_9193))
{dommy.attrs.add_class_BANG_.call(null,n,v_9192);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9191,v_9192);
} else
{}
}
}
{
var G__9215 = cljs.core.next.call(null,seq__9134_9184__$1);
var G__9216 = null;
var G__9217 = 0;
var G__9218 = 0;
seq__9134_9150 = G__9215;
chunk__9135_9151 = G__9216;
count__9136_9152 = G__9217;
i__9137_9153 = G__9218;
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
}catch (e9219){if((e9219 instanceof ReferenceError))
{var __9220 = e9219;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9219;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__9222 = data;if(G__9222)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__9222.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9222.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9222);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9222);
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
