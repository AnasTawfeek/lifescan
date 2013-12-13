// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj258870 = {};return obj258870;
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
{var str_258873 = node_str.substring(base_idx);while(true){
var next_idx_258874 = dommy.template.next_css_index.call(null,str_258873,1);var frag_258875 = (((next_idx_258874 >= 0))?str_258873.substring(0,next_idx_258874):str_258873);var G__258872_258876 = frag_258875.charAt(0);if(cljs.core._EQ_.call(null,"#",G__258872_258876))
{node.setAttribute("id",frag_258875.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__258872_258876))
{dommy.attrs.add_class_BANG_.call(null,node,frag_258875.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_258875.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_258874 >= 0))
{{
var G__258877 = str_258873.substring(next_idx_258874);
str_258873 = G__258877;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__258883 = data;if(G__258883)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__258883.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__258883.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__258883);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__258883);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__258884_258888 = cljs.core.seq.call(null,data);var chunk__258885_258889 = null;var count__258886_258890 = 0;var i__258887_258891 = 0;while(true){
if((i__258887_258891 < count__258886_258890))
{var child_258892 = cljs.core._nth.call(null,chunk__258885_258889,i__258887_258891);__GT_document_fragment.call(null,result_frag,child_258892);
{
var G__258893 = seq__258884_258888;
var G__258894 = chunk__258885_258889;
var G__258895 = count__258886_258890;
var G__258896 = (i__258887_258891 + 1);
seq__258884_258888 = G__258893;
chunk__258885_258889 = G__258894;
count__258886_258890 = G__258895;
i__258887_258891 = G__258896;
continue;
}
} else
{var temp__4092__auto___258897 = cljs.core.seq.call(null,seq__258884_258888);if(temp__4092__auto___258897)
{var seq__258884_258898__$1 = temp__4092__auto___258897;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258884_258898__$1))
{var c__4017__auto___258899 = cljs.core.chunk_first.call(null,seq__258884_258898__$1);{
var G__258900 = cljs.core.chunk_rest.call(null,seq__258884_258898__$1);
var G__258901 = c__4017__auto___258899;
var G__258902 = cljs.core.count.call(null,c__4017__auto___258899);
var G__258903 = 0;
seq__258884_258888 = G__258900;
chunk__258885_258889 = G__258901;
count__258886_258890 = G__258902;
i__258887_258891 = G__258903;
continue;
}
} else
{var child_258904 = cljs.core.first.call(null,seq__258884_258898__$1);__GT_document_fragment.call(null,result_frag,child_258904);
{
var G__258905 = cljs.core.next.call(null,seq__258884_258898__$1);
var G__258906 = null;
var G__258907 = 0;
var G__258908 = 0;
seq__258884_258888 = G__258905;
chunk__258885_258889 = G__258906;
count__258886_258890 = G__258907;
i__258887_258891 = G__258908;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__258910 = data;if(G__258910)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__258910.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__258910.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__258910);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__258910);
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
dommy.template.compound_element = (function compound_element(p__258911){var vec__258931 = p__258911;var tag_name = cljs.core.nth.call(null,vec__258931,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__258931,1,null);var children = cljs.core.nthnext.call(null,vec__258931,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__258933 = maybe_attrs;if(G__258933)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__258933.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__258933.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__258933);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__258933);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__258934_258950 = cljs.core.seq.call(null,attrs);var chunk__258935_258951 = null;var count__258936_258952 = 0;var i__258937_258953 = 0;while(true){
if((i__258937_258953 < count__258936_258952))
{var vec__258938_258954 = cljs.core._nth.call(null,chunk__258935_258951,i__258937_258953);var k_258955 = cljs.core.nth.call(null,vec__258938_258954,0,null);var v_258956 = cljs.core.nth.call(null,vec__258938_258954,1,null);var G__258939_258957 = k_258955;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__258939_258957))
{var seq__258940_258958 = cljs.core.seq.call(null,v_258956);var chunk__258941_258959 = null;var count__258942_258960 = 0;var i__258943_258961 = 0;while(true){
if((i__258943_258961 < count__258942_258960))
{var c_258962 = cljs.core._nth.call(null,chunk__258941_258959,i__258943_258961);dommy.attrs.add_class_BANG_.call(null,n,c_258962);
{
var G__258963 = seq__258940_258958;
var G__258964 = chunk__258941_258959;
var G__258965 = count__258942_258960;
var G__258966 = (i__258943_258961 + 1);
seq__258940_258958 = G__258963;
chunk__258941_258959 = G__258964;
count__258942_258960 = G__258965;
i__258943_258961 = G__258966;
continue;
}
} else
{var temp__4092__auto___258967 = cljs.core.seq.call(null,seq__258940_258958);if(temp__4092__auto___258967)
{var seq__258940_258968__$1 = temp__4092__auto___258967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258940_258968__$1))
{var c__4017__auto___258969 = cljs.core.chunk_first.call(null,seq__258940_258968__$1);{
var G__258970 = cljs.core.chunk_rest.call(null,seq__258940_258968__$1);
var G__258971 = c__4017__auto___258969;
var G__258972 = cljs.core.count.call(null,c__4017__auto___258969);
var G__258973 = 0;
seq__258940_258958 = G__258970;
chunk__258941_258959 = G__258971;
count__258942_258960 = G__258972;
i__258943_258961 = G__258973;
continue;
}
} else
{var c_258974 = cljs.core.first.call(null,seq__258940_258968__$1);dommy.attrs.add_class_BANG_.call(null,n,c_258974);
{
var G__258975 = cljs.core.next.call(null,seq__258940_258968__$1);
var G__258976 = null;
var G__258977 = 0;
var G__258978 = 0;
seq__258940_258958 = G__258975;
chunk__258941_258959 = G__258976;
count__258942_258960 = G__258977;
i__258943_258961 = G__258978;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__258939_258957))
{dommy.attrs.add_class_BANG_.call(null,n,v_258956);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_258955,v_258956);
} else
{}
}
}
{
var G__258979 = seq__258934_258950;
var G__258980 = chunk__258935_258951;
var G__258981 = count__258936_258952;
var G__258982 = (i__258937_258953 + 1);
seq__258934_258950 = G__258979;
chunk__258935_258951 = G__258980;
count__258936_258952 = G__258981;
i__258937_258953 = G__258982;
continue;
}
} else
{var temp__4092__auto___258983 = cljs.core.seq.call(null,seq__258934_258950);if(temp__4092__auto___258983)
{var seq__258934_258984__$1 = temp__4092__auto___258983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258934_258984__$1))
{var c__4017__auto___258985 = cljs.core.chunk_first.call(null,seq__258934_258984__$1);{
var G__258986 = cljs.core.chunk_rest.call(null,seq__258934_258984__$1);
var G__258987 = c__4017__auto___258985;
var G__258988 = cljs.core.count.call(null,c__4017__auto___258985);
var G__258989 = 0;
seq__258934_258950 = G__258986;
chunk__258935_258951 = G__258987;
count__258936_258952 = G__258988;
i__258937_258953 = G__258989;
continue;
}
} else
{var vec__258944_258990 = cljs.core.first.call(null,seq__258934_258984__$1);var k_258991 = cljs.core.nth.call(null,vec__258944_258990,0,null);var v_258992 = cljs.core.nth.call(null,vec__258944_258990,1,null);var G__258945_258993 = k_258991;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__258945_258993))
{var seq__258946_258994 = cljs.core.seq.call(null,v_258992);var chunk__258947_258995 = null;var count__258948_258996 = 0;var i__258949_258997 = 0;while(true){
if((i__258949_258997 < count__258948_258996))
{var c_258998 = cljs.core._nth.call(null,chunk__258947_258995,i__258949_258997);dommy.attrs.add_class_BANG_.call(null,n,c_258998);
{
var G__258999 = seq__258946_258994;
var G__259000 = chunk__258947_258995;
var G__259001 = count__258948_258996;
var G__259002 = (i__258949_258997 + 1);
seq__258946_258994 = G__258999;
chunk__258947_258995 = G__259000;
count__258948_258996 = G__259001;
i__258949_258997 = G__259002;
continue;
}
} else
{var temp__4092__auto___259003__$1 = cljs.core.seq.call(null,seq__258946_258994);if(temp__4092__auto___259003__$1)
{var seq__258946_259004__$1 = temp__4092__auto___259003__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__258946_259004__$1))
{var c__4017__auto___259005 = cljs.core.chunk_first.call(null,seq__258946_259004__$1);{
var G__259006 = cljs.core.chunk_rest.call(null,seq__258946_259004__$1);
var G__259007 = c__4017__auto___259005;
var G__259008 = cljs.core.count.call(null,c__4017__auto___259005);
var G__259009 = 0;
seq__258946_258994 = G__259006;
chunk__258947_258995 = G__259007;
count__258948_258996 = G__259008;
i__258949_258997 = G__259009;
continue;
}
} else
{var c_259010 = cljs.core.first.call(null,seq__258946_259004__$1);dommy.attrs.add_class_BANG_.call(null,n,c_259010);
{
var G__259011 = cljs.core.next.call(null,seq__258946_259004__$1);
var G__259012 = null;
var G__259013 = 0;
var G__259014 = 0;
seq__258946_258994 = G__259011;
chunk__258947_258995 = G__259012;
count__258948_258996 = G__259013;
i__258949_258997 = G__259014;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__258945_258993))
{dommy.attrs.add_class_BANG_.call(null,n,v_258992);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_258991,v_258992);
} else
{}
}
}
{
var G__259015 = cljs.core.next.call(null,seq__258934_258984__$1);
var G__259016 = null;
var G__259017 = 0;
var G__259018 = 0;
seq__258934_258950 = G__259015;
chunk__258935_258951 = G__259016;
count__258936_258952 = G__259017;
i__258937_258953 = G__259018;
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
}catch (e259019){if((e259019 instanceof ReferenceError))
{var __259020 = e259019;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e259019;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__259022 = data;if(G__259022)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__259022.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__259022.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__259022);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__259022);
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
