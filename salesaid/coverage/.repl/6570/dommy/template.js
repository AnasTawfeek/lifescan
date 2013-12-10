// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj9193 = {};return obj9193;
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
{var str_9196 = node_str.substring(base_idx);while(true){
var next_idx_9197 = dommy.template.next_css_index.call(null,str_9196,1);var frag_9198 = (((next_idx_9197 >= 0))?str_9196.substring(0,next_idx_9197):str_9196);var G__9195_9199 = frag_9198.charAt(0);if(cljs.core._EQ_.call(null,"#",G__9195_9199))
{node.setAttribute("id",frag_9198.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__9195_9199))
{dommy.attrs.add_class_BANG_.call(null,node,frag_9198.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_9198.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_9197 >= 0))
{{
var G__9200 = str_9196.substring(next_idx_9197);
str_9196 = G__9200;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__9206 = data;if(G__9206)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9206.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9206.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9206);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9206);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__9207_9211 = cljs.core.seq.call(null,data);var chunk__9208_9212 = null;var count__9209_9213 = 0;var i__9210_9214 = 0;while(true){
if((i__9210_9214 < count__9209_9213))
{var child_9215 = cljs.core._nth.call(null,chunk__9208_9212,i__9210_9214);__GT_document_fragment.call(null,result_frag,child_9215);
{
var G__9216 = seq__9207_9211;
var G__9217 = chunk__9208_9212;
var G__9218 = count__9209_9213;
var G__9219 = (i__9210_9214 + 1);
seq__9207_9211 = G__9216;
chunk__9208_9212 = G__9217;
count__9209_9213 = G__9218;
i__9210_9214 = G__9219;
continue;
}
} else
{var temp__4092__auto___9220 = cljs.core.seq.call(null,seq__9207_9211);if(temp__4092__auto___9220)
{var seq__9207_9221__$1 = temp__4092__auto___9220;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9207_9221__$1))
{var c__5398__auto___9222 = cljs.core.chunk_first.call(null,seq__9207_9221__$1);{
var G__9223 = cljs.core.chunk_rest.call(null,seq__9207_9221__$1);
var G__9224 = c__5398__auto___9222;
var G__9225 = cljs.core.count.call(null,c__5398__auto___9222);
var G__9226 = 0;
seq__9207_9211 = G__9223;
chunk__9208_9212 = G__9224;
count__9209_9213 = G__9225;
i__9210_9214 = G__9226;
continue;
}
} else
{var child_9227 = cljs.core.first.call(null,seq__9207_9221__$1);__GT_document_fragment.call(null,result_frag,child_9227);
{
var G__9228 = cljs.core.next.call(null,seq__9207_9221__$1);
var G__9229 = null;
var G__9230 = 0;
var G__9231 = 0;
seq__9207_9211 = G__9228;
chunk__9208_9212 = G__9229;
count__9209_9213 = G__9230;
i__9210_9214 = G__9231;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__9233 = data;if(G__9233)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9233.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9233.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9233);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9233);
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
dommy.template.compound_element = (function compound_element(p__9234){var vec__9254 = p__9234;var tag_name = cljs.core.nth.call(null,vec__9254,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__9254,1,null);var children = cljs.core.nthnext.call(null,vec__9254,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__9256 = maybe_attrs;if(G__9256)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9256.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9256.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9256);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9256);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__9257_9273 = cljs.core.seq.call(null,attrs);var chunk__9258_9274 = null;var count__9259_9275 = 0;var i__9260_9276 = 0;while(true){
if((i__9260_9276 < count__9259_9275))
{var vec__9261_9277 = cljs.core._nth.call(null,chunk__9258_9274,i__9260_9276);var k_9278 = cljs.core.nth.call(null,vec__9261_9277,0,null);var v_9279 = cljs.core.nth.call(null,vec__9261_9277,1,null);var G__9262_9280 = k_9278;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9262_9280))
{var seq__9263_9281 = cljs.core.seq.call(null,v_9279);var chunk__9264_9282 = null;var count__9265_9283 = 0;var i__9266_9284 = 0;while(true){
if((i__9266_9284 < count__9265_9283))
{var c_9285 = cljs.core._nth.call(null,chunk__9264_9282,i__9266_9284);dommy.attrs.add_class_BANG_.call(null,n,c_9285);
{
var G__9286 = seq__9263_9281;
var G__9287 = chunk__9264_9282;
var G__9288 = count__9265_9283;
var G__9289 = (i__9266_9284 + 1);
seq__9263_9281 = G__9286;
chunk__9264_9282 = G__9287;
count__9265_9283 = G__9288;
i__9266_9284 = G__9289;
continue;
}
} else
{var temp__4092__auto___9290 = cljs.core.seq.call(null,seq__9263_9281);if(temp__4092__auto___9290)
{var seq__9263_9291__$1 = temp__4092__auto___9290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9263_9291__$1))
{var c__5398__auto___9292 = cljs.core.chunk_first.call(null,seq__9263_9291__$1);{
var G__9293 = cljs.core.chunk_rest.call(null,seq__9263_9291__$1);
var G__9294 = c__5398__auto___9292;
var G__9295 = cljs.core.count.call(null,c__5398__auto___9292);
var G__9296 = 0;
seq__9263_9281 = G__9293;
chunk__9264_9282 = G__9294;
count__9265_9283 = G__9295;
i__9266_9284 = G__9296;
continue;
}
} else
{var c_9297 = cljs.core.first.call(null,seq__9263_9291__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9297);
{
var G__9298 = cljs.core.next.call(null,seq__9263_9291__$1);
var G__9299 = null;
var G__9300 = 0;
var G__9301 = 0;
seq__9263_9281 = G__9298;
chunk__9264_9282 = G__9299;
count__9265_9283 = G__9300;
i__9266_9284 = G__9301;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9262_9280))
{dommy.attrs.add_class_BANG_.call(null,n,v_9279);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9278,v_9279);
} else
{}
}
}
{
var G__9302 = seq__9257_9273;
var G__9303 = chunk__9258_9274;
var G__9304 = count__9259_9275;
var G__9305 = (i__9260_9276 + 1);
seq__9257_9273 = G__9302;
chunk__9258_9274 = G__9303;
count__9259_9275 = G__9304;
i__9260_9276 = G__9305;
continue;
}
} else
{var temp__4092__auto___9306 = cljs.core.seq.call(null,seq__9257_9273);if(temp__4092__auto___9306)
{var seq__9257_9307__$1 = temp__4092__auto___9306;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9257_9307__$1))
{var c__5398__auto___9308 = cljs.core.chunk_first.call(null,seq__9257_9307__$1);{
var G__9309 = cljs.core.chunk_rest.call(null,seq__9257_9307__$1);
var G__9310 = c__5398__auto___9308;
var G__9311 = cljs.core.count.call(null,c__5398__auto___9308);
var G__9312 = 0;
seq__9257_9273 = G__9309;
chunk__9258_9274 = G__9310;
count__9259_9275 = G__9311;
i__9260_9276 = G__9312;
continue;
}
} else
{var vec__9267_9313 = cljs.core.first.call(null,seq__9257_9307__$1);var k_9314 = cljs.core.nth.call(null,vec__9267_9313,0,null);var v_9315 = cljs.core.nth.call(null,vec__9267_9313,1,null);var G__9268_9316 = k_9314;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9268_9316))
{var seq__9269_9317 = cljs.core.seq.call(null,v_9315);var chunk__9270_9318 = null;var count__9271_9319 = 0;var i__9272_9320 = 0;while(true){
if((i__9272_9320 < count__9271_9319))
{var c_9321 = cljs.core._nth.call(null,chunk__9270_9318,i__9272_9320);dommy.attrs.add_class_BANG_.call(null,n,c_9321);
{
var G__9322 = seq__9269_9317;
var G__9323 = chunk__9270_9318;
var G__9324 = count__9271_9319;
var G__9325 = (i__9272_9320 + 1);
seq__9269_9317 = G__9322;
chunk__9270_9318 = G__9323;
count__9271_9319 = G__9324;
i__9272_9320 = G__9325;
continue;
}
} else
{var temp__4092__auto___9326__$1 = cljs.core.seq.call(null,seq__9269_9317);if(temp__4092__auto___9326__$1)
{var seq__9269_9327__$1 = temp__4092__auto___9326__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9269_9327__$1))
{var c__5398__auto___9328 = cljs.core.chunk_first.call(null,seq__9269_9327__$1);{
var G__9329 = cljs.core.chunk_rest.call(null,seq__9269_9327__$1);
var G__9330 = c__5398__auto___9328;
var G__9331 = cljs.core.count.call(null,c__5398__auto___9328);
var G__9332 = 0;
seq__9269_9317 = G__9329;
chunk__9270_9318 = G__9330;
count__9271_9319 = G__9331;
i__9272_9320 = G__9332;
continue;
}
} else
{var c_9333 = cljs.core.first.call(null,seq__9269_9327__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9333);
{
var G__9334 = cljs.core.next.call(null,seq__9269_9327__$1);
var G__9335 = null;
var G__9336 = 0;
var G__9337 = 0;
seq__9269_9317 = G__9334;
chunk__9270_9318 = G__9335;
count__9271_9319 = G__9336;
i__9272_9320 = G__9337;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9268_9316))
{dommy.attrs.add_class_BANG_.call(null,n,v_9315);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9314,v_9315);
} else
{}
}
}
{
var G__9338 = cljs.core.next.call(null,seq__9257_9307__$1);
var G__9339 = null;
var G__9340 = 0;
var G__9341 = 0;
seq__9257_9273 = G__9338;
chunk__9258_9274 = G__9339;
count__9259_9275 = G__9340;
i__9260_9276 = G__9341;
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
}catch (e9342){if((e9342 instanceof ReferenceError))
{var __9343 = e9342;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9342;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__9345 = data;if(G__9345)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9345.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9345.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9345);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9345);
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
