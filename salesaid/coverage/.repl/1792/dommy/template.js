// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj9189 = {};return obj9189;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__4662__auto__ = this$;if(and__4662__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__4662__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__5277__auto__ = (((this$ == null))?null:this$);return (function (){var or__4674__auto__ = (dommy.template._elem[goog.typeOf(x__5277__auto__)]);if(or__4674__auto__)
{return or__4674__auto__;
} else
{var or__4674__auto____$1 = (dommy.template._elem["_"]);if(or__4674__auto____$1)
{return or__4674__auto____$1;
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
{var str_9192 = node_str.substring(base_idx);while(true){
var next_idx_9193 = dommy.template.next_css_index.call(null,str_9192,1);var frag_9194 = (((next_idx_9193 >= 0))?str_9192.substring(0,next_idx_9193):str_9192);var G__9191_9195 = frag_9194.charAt(0);if(cljs.core._EQ_.call(null,"#",G__9191_9195))
{node.setAttribute("id",frag_9194.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__9191_9195))
{dommy.attrs.add_class_BANG_.call(null,node,frag_9194.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_9194.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_9193 >= 0))
{{
var G__9196 = str_9192.substring(next_idx_9193);
str_9192 = G__9196;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__9202 = data;if(G__9202)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9202.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9202.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9202);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9202);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__9203_9207 = cljs.core.seq.call(null,data);var chunk__9204_9208 = null;var count__9205_9209 = 0;var i__9206_9210 = 0;while(true){
if((i__9206_9210 < count__9205_9209))
{var child_9211 = cljs.core._nth.call(null,chunk__9204_9208,i__9206_9210);__GT_document_fragment.call(null,result_frag,child_9211);
{
var G__9212 = seq__9203_9207;
var G__9213 = chunk__9204_9208;
var G__9214 = count__9205_9209;
var G__9215 = (i__9206_9210 + 1);
seq__9203_9207 = G__9212;
chunk__9204_9208 = G__9213;
count__9205_9209 = G__9214;
i__9206_9210 = G__9215;
continue;
}
} else
{var temp__4092__auto___9216 = cljs.core.seq.call(null,seq__9203_9207);if(temp__4092__auto___9216)
{var seq__9203_9217__$1 = temp__4092__auto___9216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9203_9217__$1))
{var c__5398__auto___9218 = cljs.core.chunk_first.call(null,seq__9203_9217__$1);{
var G__9219 = cljs.core.chunk_rest.call(null,seq__9203_9217__$1);
var G__9220 = c__5398__auto___9218;
var G__9221 = cljs.core.count.call(null,c__5398__auto___9218);
var G__9222 = 0;
seq__9203_9207 = G__9219;
chunk__9204_9208 = G__9220;
count__9205_9209 = G__9221;
i__9206_9210 = G__9222;
continue;
}
} else
{var child_9223 = cljs.core.first.call(null,seq__9203_9217__$1);__GT_document_fragment.call(null,result_frag,child_9223);
{
var G__9224 = cljs.core.next.call(null,seq__9203_9217__$1);
var G__9225 = null;
var G__9226 = 0;
var G__9227 = 0;
seq__9203_9207 = G__9224;
chunk__9204_9208 = G__9225;
count__9205_9209 = G__9226;
i__9206_9210 = G__9227;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__9229 = data;if(G__9229)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9229.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9229.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9229);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9229);
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
dommy.template.compound_element = (function compound_element(p__9230){var vec__9250 = p__9230;var tag_name = cljs.core.nth.call(null,vec__9250,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__9250,1,null);var children = cljs.core.nthnext.call(null,vec__9250,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__9252 = maybe_attrs;if(G__9252)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9252.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9252.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9252);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9252);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__9253_9269 = cljs.core.seq.call(null,attrs);var chunk__9254_9270 = null;var count__9255_9271 = 0;var i__9256_9272 = 0;while(true){
if((i__9256_9272 < count__9255_9271))
{var vec__9257_9273 = cljs.core._nth.call(null,chunk__9254_9270,i__9256_9272);var k_9274 = cljs.core.nth.call(null,vec__9257_9273,0,null);var v_9275 = cljs.core.nth.call(null,vec__9257_9273,1,null);var G__9258_9276 = k_9274;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9258_9276))
{var seq__9259_9277 = cljs.core.seq.call(null,v_9275);var chunk__9260_9278 = null;var count__9261_9279 = 0;var i__9262_9280 = 0;while(true){
if((i__9262_9280 < count__9261_9279))
{var c_9281 = cljs.core._nth.call(null,chunk__9260_9278,i__9262_9280);dommy.attrs.add_class_BANG_.call(null,n,c_9281);
{
var G__9282 = seq__9259_9277;
var G__9283 = chunk__9260_9278;
var G__9284 = count__9261_9279;
var G__9285 = (i__9262_9280 + 1);
seq__9259_9277 = G__9282;
chunk__9260_9278 = G__9283;
count__9261_9279 = G__9284;
i__9262_9280 = G__9285;
continue;
}
} else
{var temp__4092__auto___9286 = cljs.core.seq.call(null,seq__9259_9277);if(temp__4092__auto___9286)
{var seq__9259_9287__$1 = temp__4092__auto___9286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9259_9287__$1))
{var c__5398__auto___9288 = cljs.core.chunk_first.call(null,seq__9259_9287__$1);{
var G__9289 = cljs.core.chunk_rest.call(null,seq__9259_9287__$1);
var G__9290 = c__5398__auto___9288;
var G__9291 = cljs.core.count.call(null,c__5398__auto___9288);
var G__9292 = 0;
seq__9259_9277 = G__9289;
chunk__9260_9278 = G__9290;
count__9261_9279 = G__9291;
i__9262_9280 = G__9292;
continue;
}
} else
{var c_9293 = cljs.core.first.call(null,seq__9259_9287__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9293);
{
var G__9294 = cljs.core.next.call(null,seq__9259_9287__$1);
var G__9295 = null;
var G__9296 = 0;
var G__9297 = 0;
seq__9259_9277 = G__9294;
chunk__9260_9278 = G__9295;
count__9261_9279 = G__9296;
i__9262_9280 = G__9297;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9258_9276))
{dommy.attrs.add_class_BANG_.call(null,n,v_9275);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9274,v_9275);
} else
{}
}
}
{
var G__9298 = seq__9253_9269;
var G__9299 = chunk__9254_9270;
var G__9300 = count__9255_9271;
var G__9301 = (i__9256_9272 + 1);
seq__9253_9269 = G__9298;
chunk__9254_9270 = G__9299;
count__9255_9271 = G__9300;
i__9256_9272 = G__9301;
continue;
}
} else
{var temp__4092__auto___9302 = cljs.core.seq.call(null,seq__9253_9269);if(temp__4092__auto___9302)
{var seq__9253_9303__$1 = temp__4092__auto___9302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9253_9303__$1))
{var c__5398__auto___9304 = cljs.core.chunk_first.call(null,seq__9253_9303__$1);{
var G__9305 = cljs.core.chunk_rest.call(null,seq__9253_9303__$1);
var G__9306 = c__5398__auto___9304;
var G__9307 = cljs.core.count.call(null,c__5398__auto___9304);
var G__9308 = 0;
seq__9253_9269 = G__9305;
chunk__9254_9270 = G__9306;
count__9255_9271 = G__9307;
i__9256_9272 = G__9308;
continue;
}
} else
{var vec__9263_9309 = cljs.core.first.call(null,seq__9253_9303__$1);var k_9310 = cljs.core.nth.call(null,vec__9263_9309,0,null);var v_9311 = cljs.core.nth.call(null,vec__9263_9309,1,null);var G__9264_9312 = k_9310;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9264_9312))
{var seq__9265_9313 = cljs.core.seq.call(null,v_9311);var chunk__9266_9314 = null;var count__9267_9315 = 0;var i__9268_9316 = 0;while(true){
if((i__9268_9316 < count__9267_9315))
{var c_9317 = cljs.core._nth.call(null,chunk__9266_9314,i__9268_9316);dommy.attrs.add_class_BANG_.call(null,n,c_9317);
{
var G__9318 = seq__9265_9313;
var G__9319 = chunk__9266_9314;
var G__9320 = count__9267_9315;
var G__9321 = (i__9268_9316 + 1);
seq__9265_9313 = G__9318;
chunk__9266_9314 = G__9319;
count__9267_9315 = G__9320;
i__9268_9316 = G__9321;
continue;
}
} else
{var temp__4092__auto___9322__$1 = cljs.core.seq.call(null,seq__9265_9313);if(temp__4092__auto___9322__$1)
{var seq__9265_9323__$1 = temp__4092__auto___9322__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9265_9323__$1))
{var c__5398__auto___9324 = cljs.core.chunk_first.call(null,seq__9265_9323__$1);{
var G__9325 = cljs.core.chunk_rest.call(null,seq__9265_9323__$1);
var G__9326 = c__5398__auto___9324;
var G__9327 = cljs.core.count.call(null,c__5398__auto___9324);
var G__9328 = 0;
seq__9265_9313 = G__9325;
chunk__9266_9314 = G__9326;
count__9267_9315 = G__9327;
i__9268_9316 = G__9328;
continue;
}
} else
{var c_9329 = cljs.core.first.call(null,seq__9265_9323__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9329);
{
var G__9330 = cljs.core.next.call(null,seq__9265_9323__$1);
var G__9331 = null;
var G__9332 = 0;
var G__9333 = 0;
seq__9265_9313 = G__9330;
chunk__9266_9314 = G__9331;
count__9267_9315 = G__9332;
i__9268_9316 = G__9333;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9264_9312))
{dommy.attrs.add_class_BANG_.call(null,n,v_9311);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9310,v_9311);
} else
{}
}
}
{
var G__9334 = cljs.core.next.call(null,seq__9253_9303__$1);
var G__9335 = null;
var G__9336 = 0;
var G__9337 = 0;
seq__9253_9269 = G__9334;
chunk__9254_9270 = G__9335;
count__9255_9271 = G__9336;
i__9256_9272 = G__9337;
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
}catch (e9338){if((e9338 instanceof ReferenceError))
{var __9339 = e9338;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9338;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__9341 = data;if(G__9341)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9341.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9341.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9341);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9341);
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
