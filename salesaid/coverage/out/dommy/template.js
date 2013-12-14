// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj429795 = {};return obj429795;
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
{var str_429798 = node_str.substring(base_idx);while(true){
var next_idx_429799 = dommy.template.next_css_index.call(null,str_429798,1);var frag_429800 = (((next_idx_429799 >= 0))?str_429798.substring(0,next_idx_429799):str_429798);var G__429797_429801 = frag_429800.charAt(0);if(cljs.core._EQ_.call(null,"#",G__429797_429801))
{node.setAttribute("id",frag_429800.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__429797_429801))
{dommy.attrs.add_class_BANG_.call(null,node,frag_429800.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_429800.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_429799 >= 0))
{{
var G__429802 = str_429798.substring(next_idx_429799);
str_429798 = G__429802;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__429808 = data;if(G__429808)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__429808.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__429808.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__429808);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__429808);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__429809_429813 = cljs.core.seq.call(null,data);var chunk__429810_429814 = null;var count__429811_429815 = 0;var i__429812_429816 = 0;while(true){
if((i__429812_429816 < count__429811_429815))
{var child_429817 = cljs.core._nth.call(null,chunk__429810_429814,i__429812_429816);__GT_document_fragment.call(null,result_frag,child_429817);
{
var G__429818 = seq__429809_429813;
var G__429819 = chunk__429810_429814;
var G__429820 = count__429811_429815;
var G__429821 = (i__429812_429816 + 1);
seq__429809_429813 = G__429818;
chunk__429810_429814 = G__429819;
count__429811_429815 = G__429820;
i__429812_429816 = G__429821;
continue;
}
} else
{var temp__4092__auto___429822 = cljs.core.seq.call(null,seq__429809_429813);if(temp__4092__auto___429822)
{var seq__429809_429823__$1 = temp__4092__auto___429822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429809_429823__$1))
{var c__4017__auto___429824 = cljs.core.chunk_first.call(null,seq__429809_429823__$1);{
var G__429825 = cljs.core.chunk_rest.call(null,seq__429809_429823__$1);
var G__429826 = c__4017__auto___429824;
var G__429827 = cljs.core.count.call(null,c__4017__auto___429824);
var G__429828 = 0;
seq__429809_429813 = G__429825;
chunk__429810_429814 = G__429826;
count__429811_429815 = G__429827;
i__429812_429816 = G__429828;
continue;
}
} else
{var child_429829 = cljs.core.first.call(null,seq__429809_429823__$1);__GT_document_fragment.call(null,result_frag,child_429829);
{
var G__429830 = cljs.core.next.call(null,seq__429809_429823__$1);
var G__429831 = null;
var G__429832 = 0;
var G__429833 = 0;
seq__429809_429813 = G__429830;
chunk__429810_429814 = G__429831;
count__429811_429815 = G__429832;
i__429812_429816 = G__429833;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__429835 = data;if(G__429835)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__429835.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__429835.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__429835);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__429835);
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
dommy.template.compound_element = (function compound_element(p__429836){var vec__429856 = p__429836;var tag_name = cljs.core.nth.call(null,vec__429856,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__429856,1,null);var children = cljs.core.nthnext.call(null,vec__429856,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__429858 = maybe_attrs;if(G__429858)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__429858.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__429858.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__429858);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__429858);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__429859_429875 = cljs.core.seq.call(null,attrs);var chunk__429860_429876 = null;var count__429861_429877 = 0;var i__429862_429878 = 0;while(true){
if((i__429862_429878 < count__429861_429877))
{var vec__429863_429879 = cljs.core._nth.call(null,chunk__429860_429876,i__429862_429878);var k_429880 = cljs.core.nth.call(null,vec__429863_429879,0,null);var v_429881 = cljs.core.nth.call(null,vec__429863_429879,1,null);var G__429864_429882 = k_429880;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__429864_429882))
{var seq__429865_429883 = cljs.core.seq.call(null,v_429881);var chunk__429866_429884 = null;var count__429867_429885 = 0;var i__429868_429886 = 0;while(true){
if((i__429868_429886 < count__429867_429885))
{var c_429887 = cljs.core._nth.call(null,chunk__429866_429884,i__429868_429886);dommy.attrs.add_class_BANG_.call(null,n,c_429887);
{
var G__429888 = seq__429865_429883;
var G__429889 = chunk__429866_429884;
var G__429890 = count__429867_429885;
var G__429891 = (i__429868_429886 + 1);
seq__429865_429883 = G__429888;
chunk__429866_429884 = G__429889;
count__429867_429885 = G__429890;
i__429868_429886 = G__429891;
continue;
}
} else
{var temp__4092__auto___429892 = cljs.core.seq.call(null,seq__429865_429883);if(temp__4092__auto___429892)
{var seq__429865_429893__$1 = temp__4092__auto___429892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429865_429893__$1))
{var c__4017__auto___429894 = cljs.core.chunk_first.call(null,seq__429865_429893__$1);{
var G__429895 = cljs.core.chunk_rest.call(null,seq__429865_429893__$1);
var G__429896 = c__4017__auto___429894;
var G__429897 = cljs.core.count.call(null,c__4017__auto___429894);
var G__429898 = 0;
seq__429865_429883 = G__429895;
chunk__429866_429884 = G__429896;
count__429867_429885 = G__429897;
i__429868_429886 = G__429898;
continue;
}
} else
{var c_429899 = cljs.core.first.call(null,seq__429865_429893__$1);dommy.attrs.add_class_BANG_.call(null,n,c_429899);
{
var G__429900 = cljs.core.next.call(null,seq__429865_429893__$1);
var G__429901 = null;
var G__429902 = 0;
var G__429903 = 0;
seq__429865_429883 = G__429900;
chunk__429866_429884 = G__429901;
count__429867_429885 = G__429902;
i__429868_429886 = G__429903;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__429864_429882))
{dommy.attrs.add_class_BANG_.call(null,n,v_429881);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_429880,v_429881);
} else
{}
}
}
{
var G__429904 = seq__429859_429875;
var G__429905 = chunk__429860_429876;
var G__429906 = count__429861_429877;
var G__429907 = (i__429862_429878 + 1);
seq__429859_429875 = G__429904;
chunk__429860_429876 = G__429905;
count__429861_429877 = G__429906;
i__429862_429878 = G__429907;
continue;
}
} else
{var temp__4092__auto___429908 = cljs.core.seq.call(null,seq__429859_429875);if(temp__4092__auto___429908)
{var seq__429859_429909__$1 = temp__4092__auto___429908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429859_429909__$1))
{var c__4017__auto___429910 = cljs.core.chunk_first.call(null,seq__429859_429909__$1);{
var G__429911 = cljs.core.chunk_rest.call(null,seq__429859_429909__$1);
var G__429912 = c__4017__auto___429910;
var G__429913 = cljs.core.count.call(null,c__4017__auto___429910);
var G__429914 = 0;
seq__429859_429875 = G__429911;
chunk__429860_429876 = G__429912;
count__429861_429877 = G__429913;
i__429862_429878 = G__429914;
continue;
}
} else
{var vec__429869_429915 = cljs.core.first.call(null,seq__429859_429909__$1);var k_429916 = cljs.core.nth.call(null,vec__429869_429915,0,null);var v_429917 = cljs.core.nth.call(null,vec__429869_429915,1,null);var G__429870_429918 = k_429916;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__429870_429918))
{var seq__429871_429919 = cljs.core.seq.call(null,v_429917);var chunk__429872_429920 = null;var count__429873_429921 = 0;var i__429874_429922 = 0;while(true){
if((i__429874_429922 < count__429873_429921))
{var c_429923 = cljs.core._nth.call(null,chunk__429872_429920,i__429874_429922);dommy.attrs.add_class_BANG_.call(null,n,c_429923);
{
var G__429924 = seq__429871_429919;
var G__429925 = chunk__429872_429920;
var G__429926 = count__429873_429921;
var G__429927 = (i__429874_429922 + 1);
seq__429871_429919 = G__429924;
chunk__429872_429920 = G__429925;
count__429873_429921 = G__429926;
i__429874_429922 = G__429927;
continue;
}
} else
{var temp__4092__auto___429928__$1 = cljs.core.seq.call(null,seq__429871_429919);if(temp__4092__auto___429928__$1)
{var seq__429871_429929__$1 = temp__4092__auto___429928__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__429871_429929__$1))
{var c__4017__auto___429930 = cljs.core.chunk_first.call(null,seq__429871_429929__$1);{
var G__429931 = cljs.core.chunk_rest.call(null,seq__429871_429929__$1);
var G__429932 = c__4017__auto___429930;
var G__429933 = cljs.core.count.call(null,c__4017__auto___429930);
var G__429934 = 0;
seq__429871_429919 = G__429931;
chunk__429872_429920 = G__429932;
count__429873_429921 = G__429933;
i__429874_429922 = G__429934;
continue;
}
} else
{var c_429935 = cljs.core.first.call(null,seq__429871_429929__$1);dommy.attrs.add_class_BANG_.call(null,n,c_429935);
{
var G__429936 = cljs.core.next.call(null,seq__429871_429929__$1);
var G__429937 = null;
var G__429938 = 0;
var G__429939 = 0;
seq__429871_429919 = G__429936;
chunk__429872_429920 = G__429937;
count__429873_429921 = G__429938;
i__429874_429922 = G__429939;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__429870_429918))
{dommy.attrs.add_class_BANG_.call(null,n,v_429917);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_429916,v_429917);
} else
{}
}
}
{
var G__429940 = cljs.core.next.call(null,seq__429859_429909__$1);
var G__429941 = null;
var G__429942 = 0;
var G__429943 = 0;
seq__429859_429875 = G__429940;
chunk__429860_429876 = G__429941;
count__429861_429877 = G__429942;
i__429862_429878 = G__429943;
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
}catch (e429944){if((e429944 instanceof ReferenceError))
{var __429945 = e429944;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e429944;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__429947 = data;if(G__429947)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__429947.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__429947.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__429947);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__429947);
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
