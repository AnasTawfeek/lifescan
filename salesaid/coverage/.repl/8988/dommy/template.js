// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj9161 = {};return obj9161;
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
{var str_9164 = node_str.substring(base_idx);while(true){
var next_idx_9165 = dommy.template.next_css_index.call(null,str_9164,1);var frag_9166 = (((next_idx_9165 >= 0))?str_9164.substring(0,next_idx_9165):str_9164);var G__9163_9167 = frag_9166.charAt(0);if(cljs.core._EQ_.call(null,"#",G__9163_9167))
{node.setAttribute("id",frag_9166.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__9163_9167))
{dommy.attrs.add_class_BANG_.call(null,node,frag_9166.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_9166.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_9165 >= 0))
{{
var G__9168 = str_9164.substring(next_idx_9165);
str_9164 = G__9168;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__9174 = data;if(G__9174)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9174.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9174.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9174);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9174);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__9175_9179 = cljs.core.seq.call(null,data);var chunk__9176_9180 = null;var count__9177_9181 = 0;var i__9178_9182 = 0;while(true){
if((i__9178_9182 < count__9177_9181))
{var child_9183 = cljs.core._nth.call(null,chunk__9176_9180,i__9178_9182);__GT_document_fragment.call(null,result_frag,child_9183);
{
var G__9184 = seq__9175_9179;
var G__9185 = chunk__9176_9180;
var G__9186 = count__9177_9181;
var G__9187 = (i__9178_9182 + 1);
seq__9175_9179 = G__9184;
chunk__9176_9180 = G__9185;
count__9177_9181 = G__9186;
i__9178_9182 = G__9187;
continue;
}
} else
{var temp__4092__auto___9188 = cljs.core.seq.call(null,seq__9175_9179);if(temp__4092__auto___9188)
{var seq__9175_9189__$1 = temp__4092__auto___9188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9175_9189__$1))
{var c__5398__auto___9190 = cljs.core.chunk_first.call(null,seq__9175_9189__$1);{
var G__9191 = cljs.core.chunk_rest.call(null,seq__9175_9189__$1);
var G__9192 = c__5398__auto___9190;
var G__9193 = cljs.core.count.call(null,c__5398__auto___9190);
var G__9194 = 0;
seq__9175_9179 = G__9191;
chunk__9176_9180 = G__9192;
count__9177_9181 = G__9193;
i__9178_9182 = G__9194;
continue;
}
} else
{var child_9195 = cljs.core.first.call(null,seq__9175_9189__$1);__GT_document_fragment.call(null,result_frag,child_9195);
{
var G__9196 = cljs.core.next.call(null,seq__9175_9189__$1);
var G__9197 = null;
var G__9198 = 0;
var G__9199 = 0;
seq__9175_9179 = G__9196;
chunk__9176_9180 = G__9197;
count__9177_9181 = G__9198;
i__9178_9182 = G__9199;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__9201 = data;if(G__9201)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9201.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9201.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9201);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9201);
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
dommy.template.compound_element = (function compound_element(p__9202){var vec__9222 = p__9202;var tag_name = cljs.core.nth.call(null,vec__9222,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__9222,1,null);var children = cljs.core.nthnext.call(null,vec__9222,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__9224 = maybe_attrs;if(G__9224)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9224.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9224.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9224);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9224);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__9225_9241 = cljs.core.seq.call(null,attrs);var chunk__9226_9242 = null;var count__9227_9243 = 0;var i__9228_9244 = 0;while(true){
if((i__9228_9244 < count__9227_9243))
{var vec__9229_9245 = cljs.core._nth.call(null,chunk__9226_9242,i__9228_9244);var k_9246 = cljs.core.nth.call(null,vec__9229_9245,0,null);var v_9247 = cljs.core.nth.call(null,vec__9229_9245,1,null);var G__9230_9248 = k_9246;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9230_9248))
{var seq__9231_9249 = cljs.core.seq.call(null,v_9247);var chunk__9232_9250 = null;var count__9233_9251 = 0;var i__9234_9252 = 0;while(true){
if((i__9234_9252 < count__9233_9251))
{var c_9253 = cljs.core._nth.call(null,chunk__9232_9250,i__9234_9252);dommy.attrs.add_class_BANG_.call(null,n,c_9253);
{
var G__9254 = seq__9231_9249;
var G__9255 = chunk__9232_9250;
var G__9256 = count__9233_9251;
var G__9257 = (i__9234_9252 + 1);
seq__9231_9249 = G__9254;
chunk__9232_9250 = G__9255;
count__9233_9251 = G__9256;
i__9234_9252 = G__9257;
continue;
}
} else
{var temp__4092__auto___9258 = cljs.core.seq.call(null,seq__9231_9249);if(temp__4092__auto___9258)
{var seq__9231_9259__$1 = temp__4092__auto___9258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9231_9259__$1))
{var c__5398__auto___9260 = cljs.core.chunk_first.call(null,seq__9231_9259__$1);{
var G__9261 = cljs.core.chunk_rest.call(null,seq__9231_9259__$1);
var G__9262 = c__5398__auto___9260;
var G__9263 = cljs.core.count.call(null,c__5398__auto___9260);
var G__9264 = 0;
seq__9231_9249 = G__9261;
chunk__9232_9250 = G__9262;
count__9233_9251 = G__9263;
i__9234_9252 = G__9264;
continue;
}
} else
{var c_9265 = cljs.core.first.call(null,seq__9231_9259__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9265);
{
var G__9266 = cljs.core.next.call(null,seq__9231_9259__$1);
var G__9267 = null;
var G__9268 = 0;
var G__9269 = 0;
seq__9231_9249 = G__9266;
chunk__9232_9250 = G__9267;
count__9233_9251 = G__9268;
i__9234_9252 = G__9269;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9230_9248))
{dommy.attrs.add_class_BANG_.call(null,n,v_9247);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9246,v_9247);
} else
{}
}
}
{
var G__9270 = seq__9225_9241;
var G__9271 = chunk__9226_9242;
var G__9272 = count__9227_9243;
var G__9273 = (i__9228_9244 + 1);
seq__9225_9241 = G__9270;
chunk__9226_9242 = G__9271;
count__9227_9243 = G__9272;
i__9228_9244 = G__9273;
continue;
}
} else
{var temp__4092__auto___9274 = cljs.core.seq.call(null,seq__9225_9241);if(temp__4092__auto___9274)
{var seq__9225_9275__$1 = temp__4092__auto___9274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9225_9275__$1))
{var c__5398__auto___9276 = cljs.core.chunk_first.call(null,seq__9225_9275__$1);{
var G__9277 = cljs.core.chunk_rest.call(null,seq__9225_9275__$1);
var G__9278 = c__5398__auto___9276;
var G__9279 = cljs.core.count.call(null,c__5398__auto___9276);
var G__9280 = 0;
seq__9225_9241 = G__9277;
chunk__9226_9242 = G__9278;
count__9227_9243 = G__9279;
i__9228_9244 = G__9280;
continue;
}
} else
{var vec__9235_9281 = cljs.core.first.call(null,seq__9225_9275__$1);var k_9282 = cljs.core.nth.call(null,vec__9235_9281,0,null);var v_9283 = cljs.core.nth.call(null,vec__9235_9281,1,null);var G__9236_9284 = k_9282;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9236_9284))
{var seq__9237_9285 = cljs.core.seq.call(null,v_9283);var chunk__9238_9286 = null;var count__9239_9287 = 0;var i__9240_9288 = 0;while(true){
if((i__9240_9288 < count__9239_9287))
{var c_9289 = cljs.core._nth.call(null,chunk__9238_9286,i__9240_9288);dommy.attrs.add_class_BANG_.call(null,n,c_9289);
{
var G__9290 = seq__9237_9285;
var G__9291 = chunk__9238_9286;
var G__9292 = count__9239_9287;
var G__9293 = (i__9240_9288 + 1);
seq__9237_9285 = G__9290;
chunk__9238_9286 = G__9291;
count__9239_9287 = G__9292;
i__9240_9288 = G__9293;
continue;
}
} else
{var temp__4092__auto___9294__$1 = cljs.core.seq.call(null,seq__9237_9285);if(temp__4092__auto___9294__$1)
{var seq__9237_9295__$1 = temp__4092__auto___9294__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9237_9295__$1))
{var c__5398__auto___9296 = cljs.core.chunk_first.call(null,seq__9237_9295__$1);{
var G__9297 = cljs.core.chunk_rest.call(null,seq__9237_9295__$1);
var G__9298 = c__5398__auto___9296;
var G__9299 = cljs.core.count.call(null,c__5398__auto___9296);
var G__9300 = 0;
seq__9237_9285 = G__9297;
chunk__9238_9286 = G__9298;
count__9239_9287 = G__9299;
i__9240_9288 = G__9300;
continue;
}
} else
{var c_9301 = cljs.core.first.call(null,seq__9237_9295__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9301);
{
var G__9302 = cljs.core.next.call(null,seq__9237_9295__$1);
var G__9303 = null;
var G__9304 = 0;
var G__9305 = 0;
seq__9237_9285 = G__9302;
chunk__9238_9286 = G__9303;
count__9239_9287 = G__9304;
i__9240_9288 = G__9305;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9236_9284))
{dommy.attrs.add_class_BANG_.call(null,n,v_9283);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9282,v_9283);
} else
{}
}
}
{
var G__9306 = cljs.core.next.call(null,seq__9225_9275__$1);
var G__9307 = null;
var G__9308 = 0;
var G__9309 = 0;
seq__9225_9241 = G__9306;
chunk__9226_9242 = G__9307;
count__9227_9243 = G__9308;
i__9228_9244 = G__9309;
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
}catch (e9310){if((e9310 instanceof ReferenceError))
{var __9311 = e9310;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9310;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__9313 = data;if(G__9313)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9313.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9313.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9313);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9313);
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
