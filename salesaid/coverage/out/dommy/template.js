// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj185942 = {};return obj185942;
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
{var str_185945 = node_str.substring(base_idx);while(true){
var next_idx_185946 = dommy.template.next_css_index.call(null,str_185945,1);var frag_185947 = (((next_idx_185946 >= 0))?str_185945.substring(0,next_idx_185946):str_185945);var G__185944_185948 = frag_185947.charAt(0);if(cljs.core._EQ_.call(null,"#",G__185944_185948))
{node.setAttribute("id",frag_185947.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__185944_185948))
{dommy.attrs.add_class_BANG_.call(null,node,frag_185947.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_185947.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_185946 >= 0))
{{
var G__185949 = str_185945.substring(next_idx_185946);
str_185945 = G__185949;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__185955 = data;if(G__185955)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__185955.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__185955.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__185955);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__185955);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__185956_185960 = cljs.core.seq.call(null,data);var chunk__185957_185961 = null;var count__185958_185962 = 0;var i__185959_185963 = 0;while(true){
if((i__185959_185963 < count__185958_185962))
{var child_185964 = cljs.core._nth.call(null,chunk__185957_185961,i__185959_185963);__GT_document_fragment.call(null,result_frag,child_185964);
{
var G__185965 = seq__185956_185960;
var G__185966 = chunk__185957_185961;
var G__185967 = count__185958_185962;
var G__185968 = (i__185959_185963 + 1);
seq__185956_185960 = G__185965;
chunk__185957_185961 = G__185966;
count__185958_185962 = G__185967;
i__185959_185963 = G__185968;
continue;
}
} else
{var temp__4092__auto___185969 = cljs.core.seq.call(null,seq__185956_185960);if(temp__4092__auto___185969)
{var seq__185956_185970__$1 = temp__4092__auto___185969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__185956_185970__$1))
{var c__4017__auto___185971 = cljs.core.chunk_first.call(null,seq__185956_185970__$1);{
var G__185972 = cljs.core.chunk_rest.call(null,seq__185956_185970__$1);
var G__185973 = c__4017__auto___185971;
var G__185974 = cljs.core.count.call(null,c__4017__auto___185971);
var G__185975 = 0;
seq__185956_185960 = G__185972;
chunk__185957_185961 = G__185973;
count__185958_185962 = G__185974;
i__185959_185963 = G__185975;
continue;
}
} else
{var child_185976 = cljs.core.first.call(null,seq__185956_185970__$1);__GT_document_fragment.call(null,result_frag,child_185976);
{
var G__185977 = cljs.core.next.call(null,seq__185956_185970__$1);
var G__185978 = null;
var G__185979 = 0;
var G__185980 = 0;
seq__185956_185960 = G__185977;
chunk__185957_185961 = G__185978;
count__185958_185962 = G__185979;
i__185959_185963 = G__185980;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__185982 = data;if(G__185982)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__185982.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__185982.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__185982);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__185982);
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
dommy.template.compound_element = (function compound_element(p__185983){var vec__186003 = p__185983;var tag_name = cljs.core.nth.call(null,vec__186003,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__186003,1,null);var children = cljs.core.nthnext.call(null,vec__186003,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__186005 = maybe_attrs;if(G__186005)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__186005.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__186005.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__186005);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__186005);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__186006_186022 = cljs.core.seq.call(null,attrs);var chunk__186007_186023 = null;var count__186008_186024 = 0;var i__186009_186025 = 0;while(true){
if((i__186009_186025 < count__186008_186024))
{var vec__186010_186026 = cljs.core._nth.call(null,chunk__186007_186023,i__186009_186025);var k_186027 = cljs.core.nth.call(null,vec__186010_186026,0,null);var v_186028 = cljs.core.nth.call(null,vec__186010_186026,1,null);var G__186011_186029 = k_186027;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__186011_186029))
{var seq__186012_186030 = cljs.core.seq.call(null,v_186028);var chunk__186013_186031 = null;var count__186014_186032 = 0;var i__186015_186033 = 0;while(true){
if((i__186015_186033 < count__186014_186032))
{var c_186034 = cljs.core._nth.call(null,chunk__186013_186031,i__186015_186033);dommy.attrs.add_class_BANG_.call(null,n,c_186034);
{
var G__186035 = seq__186012_186030;
var G__186036 = chunk__186013_186031;
var G__186037 = count__186014_186032;
var G__186038 = (i__186015_186033 + 1);
seq__186012_186030 = G__186035;
chunk__186013_186031 = G__186036;
count__186014_186032 = G__186037;
i__186015_186033 = G__186038;
continue;
}
} else
{var temp__4092__auto___186039 = cljs.core.seq.call(null,seq__186012_186030);if(temp__4092__auto___186039)
{var seq__186012_186040__$1 = temp__4092__auto___186039;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186012_186040__$1))
{var c__4017__auto___186041 = cljs.core.chunk_first.call(null,seq__186012_186040__$1);{
var G__186042 = cljs.core.chunk_rest.call(null,seq__186012_186040__$1);
var G__186043 = c__4017__auto___186041;
var G__186044 = cljs.core.count.call(null,c__4017__auto___186041);
var G__186045 = 0;
seq__186012_186030 = G__186042;
chunk__186013_186031 = G__186043;
count__186014_186032 = G__186044;
i__186015_186033 = G__186045;
continue;
}
} else
{var c_186046 = cljs.core.first.call(null,seq__186012_186040__$1);dommy.attrs.add_class_BANG_.call(null,n,c_186046);
{
var G__186047 = cljs.core.next.call(null,seq__186012_186040__$1);
var G__186048 = null;
var G__186049 = 0;
var G__186050 = 0;
seq__186012_186030 = G__186047;
chunk__186013_186031 = G__186048;
count__186014_186032 = G__186049;
i__186015_186033 = G__186050;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__186011_186029))
{dommy.attrs.add_class_BANG_.call(null,n,v_186028);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_186027,v_186028);
} else
{}
}
}
{
var G__186051 = seq__186006_186022;
var G__186052 = chunk__186007_186023;
var G__186053 = count__186008_186024;
var G__186054 = (i__186009_186025 + 1);
seq__186006_186022 = G__186051;
chunk__186007_186023 = G__186052;
count__186008_186024 = G__186053;
i__186009_186025 = G__186054;
continue;
}
} else
{var temp__4092__auto___186055 = cljs.core.seq.call(null,seq__186006_186022);if(temp__4092__auto___186055)
{var seq__186006_186056__$1 = temp__4092__auto___186055;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186006_186056__$1))
{var c__4017__auto___186057 = cljs.core.chunk_first.call(null,seq__186006_186056__$1);{
var G__186058 = cljs.core.chunk_rest.call(null,seq__186006_186056__$1);
var G__186059 = c__4017__auto___186057;
var G__186060 = cljs.core.count.call(null,c__4017__auto___186057);
var G__186061 = 0;
seq__186006_186022 = G__186058;
chunk__186007_186023 = G__186059;
count__186008_186024 = G__186060;
i__186009_186025 = G__186061;
continue;
}
} else
{var vec__186016_186062 = cljs.core.first.call(null,seq__186006_186056__$1);var k_186063 = cljs.core.nth.call(null,vec__186016_186062,0,null);var v_186064 = cljs.core.nth.call(null,vec__186016_186062,1,null);var G__186017_186065 = k_186063;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__186017_186065))
{var seq__186018_186066 = cljs.core.seq.call(null,v_186064);var chunk__186019_186067 = null;var count__186020_186068 = 0;var i__186021_186069 = 0;while(true){
if((i__186021_186069 < count__186020_186068))
{var c_186070 = cljs.core._nth.call(null,chunk__186019_186067,i__186021_186069);dommy.attrs.add_class_BANG_.call(null,n,c_186070);
{
var G__186071 = seq__186018_186066;
var G__186072 = chunk__186019_186067;
var G__186073 = count__186020_186068;
var G__186074 = (i__186021_186069 + 1);
seq__186018_186066 = G__186071;
chunk__186019_186067 = G__186072;
count__186020_186068 = G__186073;
i__186021_186069 = G__186074;
continue;
}
} else
{var temp__4092__auto___186075__$1 = cljs.core.seq.call(null,seq__186018_186066);if(temp__4092__auto___186075__$1)
{var seq__186018_186076__$1 = temp__4092__auto___186075__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186018_186076__$1))
{var c__4017__auto___186077 = cljs.core.chunk_first.call(null,seq__186018_186076__$1);{
var G__186078 = cljs.core.chunk_rest.call(null,seq__186018_186076__$1);
var G__186079 = c__4017__auto___186077;
var G__186080 = cljs.core.count.call(null,c__4017__auto___186077);
var G__186081 = 0;
seq__186018_186066 = G__186078;
chunk__186019_186067 = G__186079;
count__186020_186068 = G__186080;
i__186021_186069 = G__186081;
continue;
}
} else
{var c_186082 = cljs.core.first.call(null,seq__186018_186076__$1);dommy.attrs.add_class_BANG_.call(null,n,c_186082);
{
var G__186083 = cljs.core.next.call(null,seq__186018_186076__$1);
var G__186084 = null;
var G__186085 = 0;
var G__186086 = 0;
seq__186018_186066 = G__186083;
chunk__186019_186067 = G__186084;
count__186020_186068 = G__186085;
i__186021_186069 = G__186086;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__186017_186065))
{dommy.attrs.add_class_BANG_.call(null,n,v_186064);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_186063,v_186064);
} else
{}
}
}
{
var G__186087 = cljs.core.next.call(null,seq__186006_186056__$1);
var G__186088 = null;
var G__186089 = 0;
var G__186090 = 0;
seq__186006_186022 = G__186087;
chunk__186007_186023 = G__186088;
count__186008_186024 = G__186089;
i__186009_186025 = G__186090;
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
}catch (e186091){if((e186091 instanceof ReferenceError))
{var __186092 = e186091;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e186091;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__186094 = data;if(G__186094)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__186094.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__186094.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__186094);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__186094);
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
