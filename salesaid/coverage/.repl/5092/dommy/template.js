// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj9157 = {};return obj9157;
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
{var str_9160 = node_str.substring(base_idx);while(true){
var next_idx_9161 = dommy.template.next_css_index.call(null,str_9160,1);var frag_9162 = (((next_idx_9161 >= 0))?str_9160.substring(0,next_idx_9161):str_9160);var G__9159_9163 = frag_9162.charAt(0);if(cljs.core._EQ_.call(null,"#",G__9159_9163))
{node.setAttribute("id",frag_9162.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__9159_9163))
{dommy.attrs.add_class_BANG_.call(null,node,frag_9162.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_9162.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_9161 >= 0))
{{
var G__9164 = str_9160.substring(next_idx_9161);
str_9160 = G__9164;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__9170 = data;if(G__9170)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9170.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9170.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9170);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9170);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__9171_9175 = cljs.core.seq.call(null,data);var chunk__9172_9176 = null;var count__9173_9177 = 0;var i__9174_9178 = 0;while(true){
if((i__9174_9178 < count__9173_9177))
{var child_9179 = cljs.core._nth.call(null,chunk__9172_9176,i__9174_9178);__GT_document_fragment.call(null,result_frag,child_9179);
{
var G__9180 = seq__9171_9175;
var G__9181 = chunk__9172_9176;
var G__9182 = count__9173_9177;
var G__9183 = (i__9174_9178 + 1);
seq__9171_9175 = G__9180;
chunk__9172_9176 = G__9181;
count__9173_9177 = G__9182;
i__9174_9178 = G__9183;
continue;
}
} else
{var temp__4092__auto___9184 = cljs.core.seq.call(null,seq__9171_9175);if(temp__4092__auto___9184)
{var seq__9171_9185__$1 = temp__4092__auto___9184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9171_9185__$1))
{var c__5398__auto___9186 = cljs.core.chunk_first.call(null,seq__9171_9185__$1);{
var G__9187 = cljs.core.chunk_rest.call(null,seq__9171_9185__$1);
var G__9188 = c__5398__auto___9186;
var G__9189 = cljs.core.count.call(null,c__5398__auto___9186);
var G__9190 = 0;
seq__9171_9175 = G__9187;
chunk__9172_9176 = G__9188;
count__9173_9177 = G__9189;
i__9174_9178 = G__9190;
continue;
}
} else
{var child_9191 = cljs.core.first.call(null,seq__9171_9185__$1);__GT_document_fragment.call(null,result_frag,child_9191);
{
var G__9192 = cljs.core.next.call(null,seq__9171_9185__$1);
var G__9193 = null;
var G__9194 = 0;
var G__9195 = 0;
seq__9171_9175 = G__9192;
chunk__9172_9176 = G__9193;
count__9173_9177 = G__9194;
i__9174_9178 = G__9195;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__9197 = data;if(G__9197)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9197.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9197.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9197);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9197);
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
dommy.template.compound_element = (function compound_element(p__9198){var vec__9218 = p__9198;var tag_name = cljs.core.nth.call(null,vec__9218,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__9218,1,null);var children = cljs.core.nthnext.call(null,vec__9218,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__9220 = maybe_attrs;if(G__9220)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9220.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9220.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9220);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9220);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__9221_9237 = cljs.core.seq.call(null,attrs);var chunk__9222_9238 = null;var count__9223_9239 = 0;var i__9224_9240 = 0;while(true){
if((i__9224_9240 < count__9223_9239))
{var vec__9225_9241 = cljs.core._nth.call(null,chunk__9222_9238,i__9224_9240);var k_9242 = cljs.core.nth.call(null,vec__9225_9241,0,null);var v_9243 = cljs.core.nth.call(null,vec__9225_9241,1,null);var G__9226_9244 = k_9242;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9226_9244))
{var seq__9227_9245 = cljs.core.seq.call(null,v_9243);var chunk__9228_9246 = null;var count__9229_9247 = 0;var i__9230_9248 = 0;while(true){
if((i__9230_9248 < count__9229_9247))
{var c_9249 = cljs.core._nth.call(null,chunk__9228_9246,i__9230_9248);dommy.attrs.add_class_BANG_.call(null,n,c_9249);
{
var G__9250 = seq__9227_9245;
var G__9251 = chunk__9228_9246;
var G__9252 = count__9229_9247;
var G__9253 = (i__9230_9248 + 1);
seq__9227_9245 = G__9250;
chunk__9228_9246 = G__9251;
count__9229_9247 = G__9252;
i__9230_9248 = G__9253;
continue;
}
} else
{var temp__4092__auto___9254 = cljs.core.seq.call(null,seq__9227_9245);if(temp__4092__auto___9254)
{var seq__9227_9255__$1 = temp__4092__auto___9254;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9227_9255__$1))
{var c__5398__auto___9256 = cljs.core.chunk_first.call(null,seq__9227_9255__$1);{
var G__9257 = cljs.core.chunk_rest.call(null,seq__9227_9255__$1);
var G__9258 = c__5398__auto___9256;
var G__9259 = cljs.core.count.call(null,c__5398__auto___9256);
var G__9260 = 0;
seq__9227_9245 = G__9257;
chunk__9228_9246 = G__9258;
count__9229_9247 = G__9259;
i__9230_9248 = G__9260;
continue;
}
} else
{var c_9261 = cljs.core.first.call(null,seq__9227_9255__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9261);
{
var G__9262 = cljs.core.next.call(null,seq__9227_9255__$1);
var G__9263 = null;
var G__9264 = 0;
var G__9265 = 0;
seq__9227_9245 = G__9262;
chunk__9228_9246 = G__9263;
count__9229_9247 = G__9264;
i__9230_9248 = G__9265;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9226_9244))
{dommy.attrs.add_class_BANG_.call(null,n,v_9243);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9242,v_9243);
} else
{}
}
}
{
var G__9266 = seq__9221_9237;
var G__9267 = chunk__9222_9238;
var G__9268 = count__9223_9239;
var G__9269 = (i__9224_9240 + 1);
seq__9221_9237 = G__9266;
chunk__9222_9238 = G__9267;
count__9223_9239 = G__9268;
i__9224_9240 = G__9269;
continue;
}
} else
{var temp__4092__auto___9270 = cljs.core.seq.call(null,seq__9221_9237);if(temp__4092__auto___9270)
{var seq__9221_9271__$1 = temp__4092__auto___9270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9221_9271__$1))
{var c__5398__auto___9272 = cljs.core.chunk_first.call(null,seq__9221_9271__$1);{
var G__9273 = cljs.core.chunk_rest.call(null,seq__9221_9271__$1);
var G__9274 = c__5398__auto___9272;
var G__9275 = cljs.core.count.call(null,c__5398__auto___9272);
var G__9276 = 0;
seq__9221_9237 = G__9273;
chunk__9222_9238 = G__9274;
count__9223_9239 = G__9275;
i__9224_9240 = G__9276;
continue;
}
} else
{var vec__9231_9277 = cljs.core.first.call(null,seq__9221_9271__$1);var k_9278 = cljs.core.nth.call(null,vec__9231_9277,0,null);var v_9279 = cljs.core.nth.call(null,vec__9231_9277,1,null);var G__9232_9280 = k_9278;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9232_9280))
{var seq__9233_9281 = cljs.core.seq.call(null,v_9279);var chunk__9234_9282 = null;var count__9235_9283 = 0;var i__9236_9284 = 0;while(true){
if((i__9236_9284 < count__9235_9283))
{var c_9285 = cljs.core._nth.call(null,chunk__9234_9282,i__9236_9284);dommy.attrs.add_class_BANG_.call(null,n,c_9285);
{
var G__9286 = seq__9233_9281;
var G__9287 = chunk__9234_9282;
var G__9288 = count__9235_9283;
var G__9289 = (i__9236_9284 + 1);
seq__9233_9281 = G__9286;
chunk__9234_9282 = G__9287;
count__9235_9283 = G__9288;
i__9236_9284 = G__9289;
continue;
}
} else
{var temp__4092__auto___9290__$1 = cljs.core.seq.call(null,seq__9233_9281);if(temp__4092__auto___9290__$1)
{var seq__9233_9291__$1 = temp__4092__auto___9290__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9233_9291__$1))
{var c__5398__auto___9292 = cljs.core.chunk_first.call(null,seq__9233_9291__$1);{
var G__9293 = cljs.core.chunk_rest.call(null,seq__9233_9291__$1);
var G__9294 = c__5398__auto___9292;
var G__9295 = cljs.core.count.call(null,c__5398__auto___9292);
var G__9296 = 0;
seq__9233_9281 = G__9293;
chunk__9234_9282 = G__9294;
count__9235_9283 = G__9295;
i__9236_9284 = G__9296;
continue;
}
} else
{var c_9297 = cljs.core.first.call(null,seq__9233_9291__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9297);
{
var G__9298 = cljs.core.next.call(null,seq__9233_9291__$1);
var G__9299 = null;
var G__9300 = 0;
var G__9301 = 0;
seq__9233_9281 = G__9298;
chunk__9234_9282 = G__9299;
count__9235_9283 = G__9300;
i__9236_9284 = G__9301;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9232_9280))
{dommy.attrs.add_class_BANG_.call(null,n,v_9279);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9278,v_9279);
} else
{}
}
}
{
var G__9302 = cljs.core.next.call(null,seq__9221_9271__$1);
var G__9303 = null;
var G__9304 = 0;
var G__9305 = 0;
seq__9221_9237 = G__9302;
chunk__9222_9238 = G__9303;
count__9223_9239 = G__9304;
i__9224_9240 = G__9305;
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
}catch (e9306){if((e9306 instanceof ReferenceError))
{var __9307 = e9306;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9306;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__9309 = data;if(G__9309)
{var bit__5300__auto__ = null;if(cljs.core.truth_((function (){var or__4674__auto__ = bit__5300__auto__;if(cljs.core.truth_(or__4674__auto__))
{return or__4674__auto__;
} else
{return G__9309.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9309.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9309);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9309);
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
