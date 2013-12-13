// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj9165 = {};return obj9165;
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
{var str_9168 = node_str.substring(base_idx);while(true){
var next_idx_9169 = dommy.template.next_css_index.call(null,str_9168,1);var frag_9170 = (((next_idx_9169 >= 0))?str_9168.substring(0,next_idx_9169):str_9168);var G__9167_9171 = frag_9170.charAt(0);if(cljs.core._EQ_.call(null,"#",G__9167_9171))
{node.setAttribute("id",frag_9170.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__9167_9171))
{dommy.attrs.add_class_BANG_.call(null,node,frag_9170.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_9170.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_9169 >= 0))
{{
var G__9172 = str_9168.substring(next_idx_9169);
str_9168 = G__9172;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__9178 = data;if(G__9178)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9178.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9178.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9178);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9178);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__9179_9183 = cljs.core.seq.call(null,data);var chunk__9180_9184 = null;var count__9181_9185 = 0;var i__9182_9186 = 0;while(true){
if((i__9182_9186 < count__9181_9185))
{var child_9187 = cljs.core._nth.call(null,chunk__9180_9184,i__9182_9186);__GT_document_fragment.call(null,result_frag,child_9187);
{
var G__9188 = seq__9179_9183;
var G__9189 = chunk__9180_9184;
var G__9190 = count__9181_9185;
var G__9191 = (i__9182_9186 + 1);
seq__9179_9183 = G__9188;
chunk__9180_9184 = G__9189;
count__9181_9185 = G__9190;
i__9182_9186 = G__9191;
continue;
}
} else
{var temp__4092__auto___9192 = cljs.core.seq.call(null,seq__9179_9183);if(temp__4092__auto___9192)
{var seq__9179_9193__$1 = temp__4092__auto___9192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9179_9193__$1))
{var c__5398__auto___9194 = cljs.core.chunk_first.call(null,seq__9179_9193__$1);{
var G__9195 = cljs.core.chunk_rest.call(null,seq__9179_9193__$1);
var G__9196 = c__5398__auto___9194;
var G__9197 = cljs.core.count.call(null,c__5398__auto___9194);
var G__9198 = 0;
seq__9179_9183 = G__9195;
chunk__9180_9184 = G__9196;
count__9181_9185 = G__9197;
i__9182_9186 = G__9198;
continue;
}
} else
{var child_9199 = cljs.core.first.call(null,seq__9179_9193__$1);__GT_document_fragment.call(null,result_frag,child_9199);
{
var G__9200 = cljs.core.next.call(null,seq__9179_9193__$1);
var G__9201 = null;
var G__9202 = 0;
var G__9203 = 0;
seq__9179_9183 = G__9200;
chunk__9180_9184 = G__9201;
count__9181_9185 = G__9202;
i__9182_9186 = G__9203;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__9205 = data;if(G__9205)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9205.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9205.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9205);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9205);
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
dommy.template.compound_element = (function compound_element(p__9206){var vec__9226 = p__9206;var tag_name = cljs.core.nth.call(null,vec__9226,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__9226,1,null);var children = cljs.core.nthnext.call(null,vec__9226,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__9228 = maybe_attrs;if(G__9228)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9228.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9228.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9228);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9228);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__9229_9245 = cljs.core.seq.call(null,attrs);var chunk__9230_9246 = null;var count__9231_9247 = 0;var i__9232_9248 = 0;while(true){
if((i__9232_9248 < count__9231_9247))
{var vec__9233_9249 = cljs.core._nth.call(null,chunk__9230_9246,i__9232_9248);var k_9250 = cljs.core.nth.call(null,vec__9233_9249,0,null);var v_9251 = cljs.core.nth.call(null,vec__9233_9249,1,null);var G__9234_9252 = k_9250;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9234_9252))
{var seq__9235_9253 = cljs.core.seq.call(null,v_9251);var chunk__9236_9254 = null;var count__9237_9255 = 0;var i__9238_9256 = 0;while(true){
if((i__9238_9256 < count__9237_9255))
{var c_9257 = cljs.core._nth.call(null,chunk__9236_9254,i__9238_9256);dommy.attrs.add_class_BANG_.call(null,n,c_9257);
{
var G__9258 = seq__9235_9253;
var G__9259 = chunk__9236_9254;
var G__9260 = count__9237_9255;
var G__9261 = (i__9238_9256 + 1);
seq__9235_9253 = G__9258;
chunk__9236_9254 = G__9259;
count__9237_9255 = G__9260;
i__9238_9256 = G__9261;
continue;
}
} else
{var temp__4092__auto___9262 = cljs.core.seq.call(null,seq__9235_9253);if(temp__4092__auto___9262)
{var seq__9235_9263__$1 = temp__4092__auto___9262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9235_9263__$1))
{var c__5398__auto___9264 = cljs.core.chunk_first.call(null,seq__9235_9263__$1);{
var G__9265 = cljs.core.chunk_rest.call(null,seq__9235_9263__$1);
var G__9266 = c__5398__auto___9264;
var G__9267 = cljs.core.count.call(null,c__5398__auto___9264);
var G__9268 = 0;
seq__9235_9253 = G__9265;
chunk__9236_9254 = G__9266;
count__9237_9255 = G__9267;
i__9238_9256 = G__9268;
continue;
}
} else
{var c_9269 = cljs.core.first.call(null,seq__9235_9263__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9269);
{
var G__9270 = cljs.core.next.call(null,seq__9235_9263__$1);
var G__9271 = null;
var G__9272 = 0;
var G__9273 = 0;
seq__9235_9253 = G__9270;
chunk__9236_9254 = G__9271;
count__9237_9255 = G__9272;
i__9238_9256 = G__9273;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9234_9252))
{dommy.attrs.add_class_BANG_.call(null,n,v_9251);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9250,v_9251);
} else
{}
}
}
{
var G__9274 = seq__9229_9245;
var G__9275 = chunk__9230_9246;
var G__9276 = count__9231_9247;
var G__9277 = (i__9232_9248 + 1);
seq__9229_9245 = G__9274;
chunk__9230_9246 = G__9275;
count__9231_9247 = G__9276;
i__9232_9248 = G__9277;
continue;
}
} else
{var temp__4092__auto___9278 = cljs.core.seq.call(null,seq__9229_9245);if(temp__4092__auto___9278)
{var seq__9229_9279__$1 = temp__4092__auto___9278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9229_9279__$1))
{var c__5398__auto___9280 = cljs.core.chunk_first.call(null,seq__9229_9279__$1);{
var G__9281 = cljs.core.chunk_rest.call(null,seq__9229_9279__$1);
var G__9282 = c__5398__auto___9280;
var G__9283 = cljs.core.count.call(null,c__5398__auto___9280);
var G__9284 = 0;
seq__9229_9245 = G__9281;
chunk__9230_9246 = G__9282;
count__9231_9247 = G__9283;
i__9232_9248 = G__9284;
continue;
}
} else
{var vec__9239_9285 = cljs.core.first.call(null,seq__9229_9279__$1);var k_9286 = cljs.core.nth.call(null,vec__9239_9285,0,null);var v_9287 = cljs.core.nth.call(null,vec__9239_9285,1,null);var G__9240_9288 = k_9286;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9240_9288))
{var seq__9241_9289 = cljs.core.seq.call(null,v_9287);var chunk__9242_9290 = null;var count__9243_9291 = 0;var i__9244_9292 = 0;while(true){
if((i__9244_9292 < count__9243_9291))
{var c_9293 = cljs.core._nth.call(null,chunk__9242_9290,i__9244_9292);dommy.attrs.add_class_BANG_.call(null,n,c_9293);
{
var G__9294 = seq__9241_9289;
var G__9295 = chunk__9242_9290;
var G__9296 = count__9243_9291;
var G__9297 = (i__9244_9292 + 1);
seq__9241_9289 = G__9294;
chunk__9242_9290 = G__9295;
count__9243_9291 = G__9296;
i__9244_9292 = G__9297;
continue;
}
} else
{var temp__4092__auto___9298__$1 = cljs.core.seq.call(null,seq__9241_9289);if(temp__4092__auto___9298__$1)
{var seq__9241_9299__$1 = temp__4092__auto___9298__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9241_9299__$1))
{var c__5398__auto___9300 = cljs.core.chunk_first.call(null,seq__9241_9299__$1);{
var G__9301 = cljs.core.chunk_rest.call(null,seq__9241_9299__$1);
var G__9302 = c__5398__auto___9300;
var G__9303 = cljs.core.count.call(null,c__5398__auto___9300);
var G__9304 = 0;
seq__9241_9289 = G__9301;
chunk__9242_9290 = G__9302;
count__9243_9291 = G__9303;
i__9244_9292 = G__9304;
continue;
}
} else
{var c_9305 = cljs.core.first.call(null,seq__9241_9299__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9305);
{
var G__9306 = cljs.core.next.call(null,seq__9241_9299__$1);
var G__9307 = null;
var G__9308 = 0;
var G__9309 = 0;
seq__9241_9289 = G__9306;
chunk__9242_9290 = G__9307;
count__9243_9291 = G__9308;
i__9244_9292 = G__9309;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9240_9288))
{dommy.attrs.add_class_BANG_.call(null,n,v_9287);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9286,v_9287);
} else
{}
}
}
{
var G__9310 = cljs.core.next.call(null,seq__9229_9279__$1);
var G__9311 = null;
var G__9312 = 0;
var G__9313 = 0;
seq__9229_9245 = G__9310;
chunk__9230_9246 = G__9311;
count__9231_9247 = G__9312;
i__9232_9248 = G__9313;
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
}catch (e9314){if((e9314 instanceof ReferenceError))
{var __9315 = e9314;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9314;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__9317 = data;if(G__9317)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9317.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9317.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9317);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9317);
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
