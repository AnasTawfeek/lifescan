// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj68976 = {};return obj68976;
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
{var str_68979 = node_str.substring(base_idx);while(true){
var next_idx_68980 = dommy.template.next_css_index.call(null,str_68979,1);var frag_68981 = (((next_idx_68980 >= 0))?str_68979.substring(0,next_idx_68980):str_68979);var G__68978_68982 = frag_68981.charAt(0);if(cljs.core._EQ_.call(null,"#",G__68978_68982))
{node.setAttribute("id",frag_68981.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__68978_68982))
{dommy.attrs.add_class_BANG_.call(null,node,frag_68981.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_68981.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_68980 >= 0))
{{
var G__68983 = str_68979.substring(next_idx_68980);
str_68979 = G__68983;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__68989 = data;if(G__68989)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__68989.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__68989.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__68989);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__68989);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__68990_68994 = cljs.core.seq.call(null,data);var chunk__68991_68995 = null;var count__68992_68996 = 0;var i__68993_68997 = 0;while(true){
if((i__68993_68997 < count__68992_68996))
{var child_68998 = cljs.core._nth.call(null,chunk__68991_68995,i__68993_68997);__GT_document_fragment.call(null,result_frag,child_68998);
{
var G__68999 = seq__68990_68994;
var G__69000 = chunk__68991_68995;
var G__69001 = count__68992_68996;
var G__69002 = (i__68993_68997 + 1);
seq__68990_68994 = G__68999;
chunk__68991_68995 = G__69000;
count__68992_68996 = G__69001;
i__68993_68997 = G__69002;
continue;
}
} else
{var temp__4092__auto___69003 = cljs.core.seq.call(null,seq__68990_68994);if(temp__4092__auto___69003)
{var seq__68990_69004__$1 = temp__4092__auto___69003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68990_69004__$1))
{var c__4017__auto___69005 = cljs.core.chunk_first.call(null,seq__68990_69004__$1);{
var G__69006 = cljs.core.chunk_rest.call(null,seq__68990_69004__$1);
var G__69007 = c__4017__auto___69005;
var G__69008 = cljs.core.count.call(null,c__4017__auto___69005);
var G__69009 = 0;
seq__68990_68994 = G__69006;
chunk__68991_68995 = G__69007;
count__68992_68996 = G__69008;
i__68993_68997 = G__69009;
continue;
}
} else
{var child_69010 = cljs.core.first.call(null,seq__68990_69004__$1);__GT_document_fragment.call(null,result_frag,child_69010);
{
var G__69011 = cljs.core.next.call(null,seq__68990_69004__$1);
var G__69012 = null;
var G__69013 = 0;
var G__69014 = 0;
seq__68990_68994 = G__69011;
chunk__68991_68995 = G__69012;
count__68992_68996 = G__69013;
i__68993_68997 = G__69014;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__69016 = data;if(G__69016)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__69016.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__69016.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__69016);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__69016);
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
dommy.template.compound_element = (function compound_element(p__69017){var vec__69037 = p__69017;var tag_name = cljs.core.nth.call(null,vec__69037,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__69037,1,null);var children = cljs.core.nthnext.call(null,vec__69037,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__69039 = maybe_attrs;if(G__69039)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__69039.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__69039.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__69039);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__69039);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__69040_69056 = cljs.core.seq.call(null,attrs);var chunk__69041_69057 = null;var count__69042_69058 = 0;var i__69043_69059 = 0;while(true){
if((i__69043_69059 < count__69042_69058))
{var vec__69044_69060 = cljs.core._nth.call(null,chunk__69041_69057,i__69043_69059);var k_69061 = cljs.core.nth.call(null,vec__69044_69060,0,null);var v_69062 = cljs.core.nth.call(null,vec__69044_69060,1,null);var G__69045_69063 = k_69061;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__69045_69063))
{var seq__69046_69064 = cljs.core.seq.call(null,v_69062);var chunk__69047_69065 = null;var count__69048_69066 = 0;var i__69049_69067 = 0;while(true){
if((i__69049_69067 < count__69048_69066))
{var c_69068 = cljs.core._nth.call(null,chunk__69047_69065,i__69049_69067);dommy.attrs.add_class_BANG_.call(null,n,c_69068);
{
var G__69069 = seq__69046_69064;
var G__69070 = chunk__69047_69065;
var G__69071 = count__69048_69066;
var G__69072 = (i__69049_69067 + 1);
seq__69046_69064 = G__69069;
chunk__69047_69065 = G__69070;
count__69048_69066 = G__69071;
i__69049_69067 = G__69072;
continue;
}
} else
{var temp__4092__auto___69073 = cljs.core.seq.call(null,seq__69046_69064);if(temp__4092__auto___69073)
{var seq__69046_69074__$1 = temp__4092__auto___69073;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69046_69074__$1))
{var c__4017__auto___69075 = cljs.core.chunk_first.call(null,seq__69046_69074__$1);{
var G__69076 = cljs.core.chunk_rest.call(null,seq__69046_69074__$1);
var G__69077 = c__4017__auto___69075;
var G__69078 = cljs.core.count.call(null,c__4017__auto___69075);
var G__69079 = 0;
seq__69046_69064 = G__69076;
chunk__69047_69065 = G__69077;
count__69048_69066 = G__69078;
i__69049_69067 = G__69079;
continue;
}
} else
{var c_69080 = cljs.core.first.call(null,seq__69046_69074__$1);dommy.attrs.add_class_BANG_.call(null,n,c_69080);
{
var G__69081 = cljs.core.next.call(null,seq__69046_69074__$1);
var G__69082 = null;
var G__69083 = 0;
var G__69084 = 0;
seq__69046_69064 = G__69081;
chunk__69047_69065 = G__69082;
count__69048_69066 = G__69083;
i__69049_69067 = G__69084;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__69045_69063))
{dommy.attrs.add_class_BANG_.call(null,n,v_69062);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_69061,v_69062);
} else
{}
}
}
{
var G__69085 = seq__69040_69056;
var G__69086 = chunk__69041_69057;
var G__69087 = count__69042_69058;
var G__69088 = (i__69043_69059 + 1);
seq__69040_69056 = G__69085;
chunk__69041_69057 = G__69086;
count__69042_69058 = G__69087;
i__69043_69059 = G__69088;
continue;
}
} else
{var temp__4092__auto___69089 = cljs.core.seq.call(null,seq__69040_69056);if(temp__4092__auto___69089)
{var seq__69040_69090__$1 = temp__4092__auto___69089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69040_69090__$1))
{var c__4017__auto___69091 = cljs.core.chunk_first.call(null,seq__69040_69090__$1);{
var G__69092 = cljs.core.chunk_rest.call(null,seq__69040_69090__$1);
var G__69093 = c__4017__auto___69091;
var G__69094 = cljs.core.count.call(null,c__4017__auto___69091);
var G__69095 = 0;
seq__69040_69056 = G__69092;
chunk__69041_69057 = G__69093;
count__69042_69058 = G__69094;
i__69043_69059 = G__69095;
continue;
}
} else
{var vec__69050_69096 = cljs.core.first.call(null,seq__69040_69090__$1);var k_69097 = cljs.core.nth.call(null,vec__69050_69096,0,null);var v_69098 = cljs.core.nth.call(null,vec__69050_69096,1,null);var G__69051_69099 = k_69097;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__69051_69099))
{var seq__69052_69100 = cljs.core.seq.call(null,v_69098);var chunk__69053_69101 = null;var count__69054_69102 = 0;var i__69055_69103 = 0;while(true){
if((i__69055_69103 < count__69054_69102))
{var c_69104 = cljs.core._nth.call(null,chunk__69053_69101,i__69055_69103);dommy.attrs.add_class_BANG_.call(null,n,c_69104);
{
var G__69105 = seq__69052_69100;
var G__69106 = chunk__69053_69101;
var G__69107 = count__69054_69102;
var G__69108 = (i__69055_69103 + 1);
seq__69052_69100 = G__69105;
chunk__69053_69101 = G__69106;
count__69054_69102 = G__69107;
i__69055_69103 = G__69108;
continue;
}
} else
{var temp__4092__auto___69109__$1 = cljs.core.seq.call(null,seq__69052_69100);if(temp__4092__auto___69109__$1)
{var seq__69052_69110__$1 = temp__4092__auto___69109__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__69052_69110__$1))
{var c__4017__auto___69111 = cljs.core.chunk_first.call(null,seq__69052_69110__$1);{
var G__69112 = cljs.core.chunk_rest.call(null,seq__69052_69110__$1);
var G__69113 = c__4017__auto___69111;
var G__69114 = cljs.core.count.call(null,c__4017__auto___69111);
var G__69115 = 0;
seq__69052_69100 = G__69112;
chunk__69053_69101 = G__69113;
count__69054_69102 = G__69114;
i__69055_69103 = G__69115;
continue;
}
} else
{var c_69116 = cljs.core.first.call(null,seq__69052_69110__$1);dommy.attrs.add_class_BANG_.call(null,n,c_69116);
{
var G__69117 = cljs.core.next.call(null,seq__69052_69110__$1);
var G__69118 = null;
var G__69119 = 0;
var G__69120 = 0;
seq__69052_69100 = G__69117;
chunk__69053_69101 = G__69118;
count__69054_69102 = G__69119;
i__69055_69103 = G__69120;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__69051_69099))
{dommy.attrs.add_class_BANG_.call(null,n,v_69098);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_69097,v_69098);
} else
{}
}
}
{
var G__69121 = cljs.core.next.call(null,seq__69040_69090__$1);
var G__69122 = null;
var G__69123 = 0;
var G__69124 = 0;
seq__69040_69056 = G__69121;
chunk__69041_69057 = G__69122;
count__69042_69058 = G__69123;
i__69043_69059 = G__69124;
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
}catch (e69125){if((e69125 instanceof ReferenceError))
{var __69126 = e69125;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e69125;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__69128 = data;if(G__69128)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__69128.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__69128.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__69128);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__69128);
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
