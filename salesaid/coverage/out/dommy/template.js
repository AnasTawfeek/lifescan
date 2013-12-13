// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj220127 = {};return obj220127;
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
{var str_220130 = node_str.substring(base_idx);while(true){
var next_idx_220131 = dommy.template.next_css_index.call(null,str_220130,1);var frag_220132 = (((next_idx_220131 >= 0))?str_220130.substring(0,next_idx_220131):str_220130);var G__220129_220133 = frag_220132.charAt(0);if(cljs.core._EQ_.call(null,"#",G__220129_220133))
{node.setAttribute("id",frag_220132.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__220129_220133))
{dommy.attrs.add_class_BANG_.call(null,node,frag_220132.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_220132.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_220131 >= 0))
{{
var G__220134 = str_220130.substring(next_idx_220131);
str_220130 = G__220134;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__220140 = data;if(G__220140)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__220140.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__220140.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__220140);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__220140);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__220141_220145 = cljs.core.seq.call(null,data);var chunk__220142_220146 = null;var count__220143_220147 = 0;var i__220144_220148 = 0;while(true){
if((i__220144_220148 < count__220143_220147))
{var child_220149 = cljs.core._nth.call(null,chunk__220142_220146,i__220144_220148);__GT_document_fragment.call(null,result_frag,child_220149);
{
var G__220150 = seq__220141_220145;
var G__220151 = chunk__220142_220146;
var G__220152 = count__220143_220147;
var G__220153 = (i__220144_220148 + 1);
seq__220141_220145 = G__220150;
chunk__220142_220146 = G__220151;
count__220143_220147 = G__220152;
i__220144_220148 = G__220153;
continue;
}
} else
{var temp__4092__auto___220154 = cljs.core.seq.call(null,seq__220141_220145);if(temp__4092__auto___220154)
{var seq__220141_220155__$1 = temp__4092__auto___220154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__220141_220155__$1))
{var c__4017__auto___220156 = cljs.core.chunk_first.call(null,seq__220141_220155__$1);{
var G__220157 = cljs.core.chunk_rest.call(null,seq__220141_220155__$1);
var G__220158 = c__4017__auto___220156;
var G__220159 = cljs.core.count.call(null,c__4017__auto___220156);
var G__220160 = 0;
seq__220141_220145 = G__220157;
chunk__220142_220146 = G__220158;
count__220143_220147 = G__220159;
i__220144_220148 = G__220160;
continue;
}
} else
{var child_220161 = cljs.core.first.call(null,seq__220141_220155__$1);__GT_document_fragment.call(null,result_frag,child_220161);
{
var G__220162 = cljs.core.next.call(null,seq__220141_220155__$1);
var G__220163 = null;
var G__220164 = 0;
var G__220165 = 0;
seq__220141_220145 = G__220162;
chunk__220142_220146 = G__220163;
count__220143_220147 = G__220164;
i__220144_220148 = G__220165;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__220167 = data;if(G__220167)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__220167.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__220167.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__220167);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__220167);
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
dommy.template.compound_element = (function compound_element(p__220168){var vec__220188 = p__220168;var tag_name = cljs.core.nth.call(null,vec__220188,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__220188,1,null);var children = cljs.core.nthnext.call(null,vec__220188,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__220190 = maybe_attrs;if(G__220190)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__220190.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__220190.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__220190);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__220190);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__220191_220207 = cljs.core.seq.call(null,attrs);var chunk__220192_220208 = null;var count__220193_220209 = 0;var i__220194_220210 = 0;while(true){
if((i__220194_220210 < count__220193_220209))
{var vec__220195_220211 = cljs.core._nth.call(null,chunk__220192_220208,i__220194_220210);var k_220212 = cljs.core.nth.call(null,vec__220195_220211,0,null);var v_220213 = cljs.core.nth.call(null,vec__220195_220211,1,null);var G__220196_220214 = k_220212;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__220196_220214))
{var seq__220197_220215 = cljs.core.seq.call(null,v_220213);var chunk__220198_220216 = null;var count__220199_220217 = 0;var i__220200_220218 = 0;while(true){
if((i__220200_220218 < count__220199_220217))
{var c_220219 = cljs.core._nth.call(null,chunk__220198_220216,i__220200_220218);dommy.attrs.add_class_BANG_.call(null,n,c_220219);
{
var G__220220 = seq__220197_220215;
var G__220221 = chunk__220198_220216;
var G__220222 = count__220199_220217;
var G__220223 = (i__220200_220218 + 1);
seq__220197_220215 = G__220220;
chunk__220198_220216 = G__220221;
count__220199_220217 = G__220222;
i__220200_220218 = G__220223;
continue;
}
} else
{var temp__4092__auto___220224 = cljs.core.seq.call(null,seq__220197_220215);if(temp__4092__auto___220224)
{var seq__220197_220225__$1 = temp__4092__auto___220224;if(cljs.core.chunked_seq_QMARK_.call(null,seq__220197_220225__$1))
{var c__4017__auto___220226 = cljs.core.chunk_first.call(null,seq__220197_220225__$1);{
var G__220227 = cljs.core.chunk_rest.call(null,seq__220197_220225__$1);
var G__220228 = c__4017__auto___220226;
var G__220229 = cljs.core.count.call(null,c__4017__auto___220226);
var G__220230 = 0;
seq__220197_220215 = G__220227;
chunk__220198_220216 = G__220228;
count__220199_220217 = G__220229;
i__220200_220218 = G__220230;
continue;
}
} else
{var c_220231 = cljs.core.first.call(null,seq__220197_220225__$1);dommy.attrs.add_class_BANG_.call(null,n,c_220231);
{
var G__220232 = cljs.core.next.call(null,seq__220197_220225__$1);
var G__220233 = null;
var G__220234 = 0;
var G__220235 = 0;
seq__220197_220215 = G__220232;
chunk__220198_220216 = G__220233;
count__220199_220217 = G__220234;
i__220200_220218 = G__220235;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__220196_220214))
{dommy.attrs.add_class_BANG_.call(null,n,v_220213);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_220212,v_220213);
} else
{}
}
}
{
var G__220236 = seq__220191_220207;
var G__220237 = chunk__220192_220208;
var G__220238 = count__220193_220209;
var G__220239 = (i__220194_220210 + 1);
seq__220191_220207 = G__220236;
chunk__220192_220208 = G__220237;
count__220193_220209 = G__220238;
i__220194_220210 = G__220239;
continue;
}
} else
{var temp__4092__auto___220240 = cljs.core.seq.call(null,seq__220191_220207);if(temp__4092__auto___220240)
{var seq__220191_220241__$1 = temp__4092__auto___220240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__220191_220241__$1))
{var c__4017__auto___220242 = cljs.core.chunk_first.call(null,seq__220191_220241__$1);{
var G__220243 = cljs.core.chunk_rest.call(null,seq__220191_220241__$1);
var G__220244 = c__4017__auto___220242;
var G__220245 = cljs.core.count.call(null,c__4017__auto___220242);
var G__220246 = 0;
seq__220191_220207 = G__220243;
chunk__220192_220208 = G__220244;
count__220193_220209 = G__220245;
i__220194_220210 = G__220246;
continue;
}
} else
{var vec__220201_220247 = cljs.core.first.call(null,seq__220191_220241__$1);var k_220248 = cljs.core.nth.call(null,vec__220201_220247,0,null);var v_220249 = cljs.core.nth.call(null,vec__220201_220247,1,null);var G__220202_220250 = k_220248;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__220202_220250))
{var seq__220203_220251 = cljs.core.seq.call(null,v_220249);var chunk__220204_220252 = null;var count__220205_220253 = 0;var i__220206_220254 = 0;while(true){
if((i__220206_220254 < count__220205_220253))
{var c_220255 = cljs.core._nth.call(null,chunk__220204_220252,i__220206_220254);dommy.attrs.add_class_BANG_.call(null,n,c_220255);
{
var G__220256 = seq__220203_220251;
var G__220257 = chunk__220204_220252;
var G__220258 = count__220205_220253;
var G__220259 = (i__220206_220254 + 1);
seq__220203_220251 = G__220256;
chunk__220204_220252 = G__220257;
count__220205_220253 = G__220258;
i__220206_220254 = G__220259;
continue;
}
} else
{var temp__4092__auto___220260__$1 = cljs.core.seq.call(null,seq__220203_220251);if(temp__4092__auto___220260__$1)
{var seq__220203_220261__$1 = temp__4092__auto___220260__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__220203_220261__$1))
{var c__4017__auto___220262 = cljs.core.chunk_first.call(null,seq__220203_220261__$1);{
var G__220263 = cljs.core.chunk_rest.call(null,seq__220203_220261__$1);
var G__220264 = c__4017__auto___220262;
var G__220265 = cljs.core.count.call(null,c__4017__auto___220262);
var G__220266 = 0;
seq__220203_220251 = G__220263;
chunk__220204_220252 = G__220264;
count__220205_220253 = G__220265;
i__220206_220254 = G__220266;
continue;
}
} else
{var c_220267 = cljs.core.first.call(null,seq__220203_220261__$1);dommy.attrs.add_class_BANG_.call(null,n,c_220267);
{
var G__220268 = cljs.core.next.call(null,seq__220203_220261__$1);
var G__220269 = null;
var G__220270 = 0;
var G__220271 = 0;
seq__220203_220251 = G__220268;
chunk__220204_220252 = G__220269;
count__220205_220253 = G__220270;
i__220206_220254 = G__220271;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__220202_220250))
{dommy.attrs.add_class_BANG_.call(null,n,v_220249);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_220248,v_220249);
} else
{}
}
}
{
var G__220272 = cljs.core.next.call(null,seq__220191_220241__$1);
var G__220273 = null;
var G__220274 = 0;
var G__220275 = 0;
seq__220191_220207 = G__220272;
chunk__220192_220208 = G__220273;
count__220193_220209 = G__220274;
i__220194_220210 = G__220275;
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
}catch (e220276){if((e220276 instanceof ReferenceError))
{var __220277 = e220276;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220276;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__220279 = data;if(G__220279)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__220279.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__220279.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__220279);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__220279);
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
