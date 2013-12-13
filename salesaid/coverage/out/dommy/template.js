// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj293055 = {};return obj293055;
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
{var str_293058 = node_str.substring(base_idx);while(true){
var next_idx_293059 = dommy.template.next_css_index.call(null,str_293058,1);var frag_293060 = (((next_idx_293059 >= 0))?str_293058.substring(0,next_idx_293059):str_293058);var G__293057_293061 = frag_293060.charAt(0);if(cljs.core._EQ_.call(null,"#",G__293057_293061))
{node.setAttribute("id",frag_293060.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__293057_293061))
{dommy.attrs.add_class_BANG_.call(null,node,frag_293060.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_293060.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_293059 >= 0))
{{
var G__293062 = str_293058.substring(next_idx_293059);
str_293058 = G__293062;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__293068 = data;if(G__293068)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__293068.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__293068.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__293068);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__293068);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__293069_293073 = cljs.core.seq.call(null,data);var chunk__293070_293074 = null;var count__293071_293075 = 0;var i__293072_293076 = 0;while(true){
if((i__293072_293076 < count__293071_293075))
{var child_293077 = cljs.core._nth.call(null,chunk__293070_293074,i__293072_293076);__GT_document_fragment.call(null,result_frag,child_293077);
{
var G__293078 = seq__293069_293073;
var G__293079 = chunk__293070_293074;
var G__293080 = count__293071_293075;
var G__293081 = (i__293072_293076 + 1);
seq__293069_293073 = G__293078;
chunk__293070_293074 = G__293079;
count__293071_293075 = G__293080;
i__293072_293076 = G__293081;
continue;
}
} else
{var temp__4092__auto___293082 = cljs.core.seq.call(null,seq__293069_293073);if(temp__4092__auto___293082)
{var seq__293069_293083__$1 = temp__4092__auto___293082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__293069_293083__$1))
{var c__4017__auto___293084 = cljs.core.chunk_first.call(null,seq__293069_293083__$1);{
var G__293085 = cljs.core.chunk_rest.call(null,seq__293069_293083__$1);
var G__293086 = c__4017__auto___293084;
var G__293087 = cljs.core.count.call(null,c__4017__auto___293084);
var G__293088 = 0;
seq__293069_293073 = G__293085;
chunk__293070_293074 = G__293086;
count__293071_293075 = G__293087;
i__293072_293076 = G__293088;
continue;
}
} else
{var child_293089 = cljs.core.first.call(null,seq__293069_293083__$1);__GT_document_fragment.call(null,result_frag,child_293089);
{
var G__293090 = cljs.core.next.call(null,seq__293069_293083__$1);
var G__293091 = null;
var G__293092 = 0;
var G__293093 = 0;
seq__293069_293073 = G__293090;
chunk__293070_293074 = G__293091;
count__293071_293075 = G__293092;
i__293072_293076 = G__293093;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__293095 = data;if(G__293095)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__293095.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__293095.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__293095);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__293095);
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
dommy.template.compound_element = (function compound_element(p__293096){var vec__293116 = p__293096;var tag_name = cljs.core.nth.call(null,vec__293116,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__293116,1,null);var children = cljs.core.nthnext.call(null,vec__293116,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__293118 = maybe_attrs;if(G__293118)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__293118.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__293118.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__293118);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__293118);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__293119_293135 = cljs.core.seq.call(null,attrs);var chunk__293120_293136 = null;var count__293121_293137 = 0;var i__293122_293138 = 0;while(true){
if((i__293122_293138 < count__293121_293137))
{var vec__293123_293139 = cljs.core._nth.call(null,chunk__293120_293136,i__293122_293138);var k_293140 = cljs.core.nth.call(null,vec__293123_293139,0,null);var v_293141 = cljs.core.nth.call(null,vec__293123_293139,1,null);var G__293124_293142 = k_293140;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__293124_293142))
{var seq__293125_293143 = cljs.core.seq.call(null,v_293141);var chunk__293126_293144 = null;var count__293127_293145 = 0;var i__293128_293146 = 0;while(true){
if((i__293128_293146 < count__293127_293145))
{var c_293147 = cljs.core._nth.call(null,chunk__293126_293144,i__293128_293146);dommy.attrs.add_class_BANG_.call(null,n,c_293147);
{
var G__293148 = seq__293125_293143;
var G__293149 = chunk__293126_293144;
var G__293150 = count__293127_293145;
var G__293151 = (i__293128_293146 + 1);
seq__293125_293143 = G__293148;
chunk__293126_293144 = G__293149;
count__293127_293145 = G__293150;
i__293128_293146 = G__293151;
continue;
}
} else
{var temp__4092__auto___293152 = cljs.core.seq.call(null,seq__293125_293143);if(temp__4092__auto___293152)
{var seq__293125_293153__$1 = temp__4092__auto___293152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__293125_293153__$1))
{var c__4017__auto___293154 = cljs.core.chunk_first.call(null,seq__293125_293153__$1);{
var G__293155 = cljs.core.chunk_rest.call(null,seq__293125_293153__$1);
var G__293156 = c__4017__auto___293154;
var G__293157 = cljs.core.count.call(null,c__4017__auto___293154);
var G__293158 = 0;
seq__293125_293143 = G__293155;
chunk__293126_293144 = G__293156;
count__293127_293145 = G__293157;
i__293128_293146 = G__293158;
continue;
}
} else
{var c_293159 = cljs.core.first.call(null,seq__293125_293153__$1);dommy.attrs.add_class_BANG_.call(null,n,c_293159);
{
var G__293160 = cljs.core.next.call(null,seq__293125_293153__$1);
var G__293161 = null;
var G__293162 = 0;
var G__293163 = 0;
seq__293125_293143 = G__293160;
chunk__293126_293144 = G__293161;
count__293127_293145 = G__293162;
i__293128_293146 = G__293163;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__293124_293142))
{dommy.attrs.add_class_BANG_.call(null,n,v_293141);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_293140,v_293141);
} else
{}
}
}
{
var G__293164 = seq__293119_293135;
var G__293165 = chunk__293120_293136;
var G__293166 = count__293121_293137;
var G__293167 = (i__293122_293138 + 1);
seq__293119_293135 = G__293164;
chunk__293120_293136 = G__293165;
count__293121_293137 = G__293166;
i__293122_293138 = G__293167;
continue;
}
} else
{var temp__4092__auto___293168 = cljs.core.seq.call(null,seq__293119_293135);if(temp__4092__auto___293168)
{var seq__293119_293169__$1 = temp__4092__auto___293168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__293119_293169__$1))
{var c__4017__auto___293170 = cljs.core.chunk_first.call(null,seq__293119_293169__$1);{
var G__293171 = cljs.core.chunk_rest.call(null,seq__293119_293169__$1);
var G__293172 = c__4017__auto___293170;
var G__293173 = cljs.core.count.call(null,c__4017__auto___293170);
var G__293174 = 0;
seq__293119_293135 = G__293171;
chunk__293120_293136 = G__293172;
count__293121_293137 = G__293173;
i__293122_293138 = G__293174;
continue;
}
} else
{var vec__293129_293175 = cljs.core.first.call(null,seq__293119_293169__$1);var k_293176 = cljs.core.nth.call(null,vec__293129_293175,0,null);var v_293177 = cljs.core.nth.call(null,vec__293129_293175,1,null);var G__293130_293178 = k_293176;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__293130_293178))
{var seq__293131_293179 = cljs.core.seq.call(null,v_293177);var chunk__293132_293180 = null;var count__293133_293181 = 0;var i__293134_293182 = 0;while(true){
if((i__293134_293182 < count__293133_293181))
{var c_293183 = cljs.core._nth.call(null,chunk__293132_293180,i__293134_293182);dommy.attrs.add_class_BANG_.call(null,n,c_293183);
{
var G__293184 = seq__293131_293179;
var G__293185 = chunk__293132_293180;
var G__293186 = count__293133_293181;
var G__293187 = (i__293134_293182 + 1);
seq__293131_293179 = G__293184;
chunk__293132_293180 = G__293185;
count__293133_293181 = G__293186;
i__293134_293182 = G__293187;
continue;
}
} else
{var temp__4092__auto___293188__$1 = cljs.core.seq.call(null,seq__293131_293179);if(temp__4092__auto___293188__$1)
{var seq__293131_293189__$1 = temp__4092__auto___293188__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__293131_293189__$1))
{var c__4017__auto___293190 = cljs.core.chunk_first.call(null,seq__293131_293189__$1);{
var G__293191 = cljs.core.chunk_rest.call(null,seq__293131_293189__$1);
var G__293192 = c__4017__auto___293190;
var G__293193 = cljs.core.count.call(null,c__4017__auto___293190);
var G__293194 = 0;
seq__293131_293179 = G__293191;
chunk__293132_293180 = G__293192;
count__293133_293181 = G__293193;
i__293134_293182 = G__293194;
continue;
}
} else
{var c_293195 = cljs.core.first.call(null,seq__293131_293189__$1);dommy.attrs.add_class_BANG_.call(null,n,c_293195);
{
var G__293196 = cljs.core.next.call(null,seq__293131_293189__$1);
var G__293197 = null;
var G__293198 = 0;
var G__293199 = 0;
seq__293131_293179 = G__293196;
chunk__293132_293180 = G__293197;
count__293133_293181 = G__293198;
i__293134_293182 = G__293199;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__293130_293178))
{dommy.attrs.add_class_BANG_.call(null,n,v_293177);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_293176,v_293177);
} else
{}
}
}
{
var G__293200 = cljs.core.next.call(null,seq__293119_293169__$1);
var G__293201 = null;
var G__293202 = 0;
var G__293203 = 0;
seq__293119_293135 = G__293200;
chunk__293120_293136 = G__293201;
count__293121_293137 = G__293202;
i__293122_293138 = G__293203;
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
}catch (e293204){if((e293204 instanceof ReferenceError))
{var __293205 = e293204;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e293204;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__293207 = data;if(G__293207)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__293207.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__293207.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__293207);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__293207);
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
