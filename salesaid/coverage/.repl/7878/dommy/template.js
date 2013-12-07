// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj12778 = {};return obj12778;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__4761__auto__ = this$;if(and__4761__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__4761__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__5376__auto__ = (((this$ == null))?null:this$);return (function (){var or__4773__auto__ = (dommy.template._elem[goog.typeOf(x__5376__auto__)]);if(or__4773__auto__)
{return or__4773__auto__;
} else
{var or__4773__auto____$1 = (dommy.template._elem["_"]);if(or__4773__auto____$1)
{return or__4773__auto____$1;
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
{var str_12781 = node_str.substring(base_idx);while(true){
var next_idx_12782 = dommy.template.next_css_index.call(null,str_12781,1);var frag_12783 = (((next_idx_12782 >= 0))?str_12781.substring(0,next_idx_12782):str_12781);var G__12780_12784 = frag_12783.charAt(0);if(cljs.core._EQ_.call(null,"#",G__12780_12784))
{node.setAttribute("id",frag_12783.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__12780_12784))
{dommy.attrs.add_class_BANG_.call(null,node,frag_12783.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_12783.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_12782 >= 0))
{{
var G__12785 = str_12781.substring(next_idx_12782);
str_12781 = G__12785;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__12791 = data;if(G__12791)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__12791.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12791.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12791);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12791);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__12792_12796 = cljs.core.seq.call(null,data);var chunk__12793_12797 = null;var count__12794_12798 = 0;var i__12795_12799 = 0;while(true){
if((i__12795_12799 < count__12794_12798))
{var child_12800 = cljs.core._nth.call(null,chunk__12793_12797,i__12795_12799);__GT_document_fragment.call(null,result_frag,child_12800);
{
var G__12801 = seq__12792_12796;
var G__12802 = chunk__12793_12797;
var G__12803 = count__12794_12798;
var G__12804 = (i__12795_12799 + 1);
seq__12792_12796 = G__12801;
chunk__12793_12797 = G__12802;
count__12794_12798 = G__12803;
i__12795_12799 = G__12804;
continue;
}
} else
{var temp__4092__auto___12805 = cljs.core.seq.call(null,seq__12792_12796);if(temp__4092__auto___12805)
{var seq__12792_12806__$1 = temp__4092__auto___12805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12792_12806__$1))
{var c__5497__auto___12807 = cljs.core.chunk_first.call(null,seq__12792_12806__$1);{
var G__12808 = cljs.core.chunk_rest.call(null,seq__12792_12806__$1);
var G__12809 = c__5497__auto___12807;
var G__12810 = cljs.core.count.call(null,c__5497__auto___12807);
var G__12811 = 0;
seq__12792_12796 = G__12808;
chunk__12793_12797 = G__12809;
count__12794_12798 = G__12810;
i__12795_12799 = G__12811;
continue;
}
} else
{var child_12812 = cljs.core.first.call(null,seq__12792_12806__$1);__GT_document_fragment.call(null,result_frag,child_12812);
{
var G__12813 = cljs.core.next.call(null,seq__12792_12806__$1);
var G__12814 = null;
var G__12815 = 0;
var G__12816 = 0;
seq__12792_12796 = G__12813;
chunk__12793_12797 = G__12814;
count__12794_12798 = G__12815;
i__12795_12799 = G__12816;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__12818 = data;if(G__12818)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__12818.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12818.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12818);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12818);
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
dommy.template.compound_element = (function compound_element(p__12819){var vec__12839 = p__12819;var tag_name = cljs.core.nth.call(null,vec__12839,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__12839,1,null);var children = cljs.core.nthnext.call(null,vec__12839,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__12841 = maybe_attrs;if(G__12841)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__12841.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12841.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12841);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12841);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__12842_12858 = cljs.core.seq.call(null,attrs);var chunk__12843_12859 = null;var count__12844_12860 = 0;var i__12845_12861 = 0;while(true){
if((i__12845_12861 < count__12844_12860))
{var vec__12846_12862 = cljs.core._nth.call(null,chunk__12843_12859,i__12845_12861);var k_12863 = cljs.core.nth.call(null,vec__12846_12862,0,null);var v_12864 = cljs.core.nth.call(null,vec__12846_12862,1,null);var G__12847_12865 = k_12863;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__12847_12865))
{var seq__12848_12866 = cljs.core.seq.call(null,v_12864);var chunk__12849_12867 = null;var count__12850_12868 = 0;var i__12851_12869 = 0;while(true){
if((i__12851_12869 < count__12850_12868))
{var c_12870 = cljs.core._nth.call(null,chunk__12849_12867,i__12851_12869);dommy.attrs.add_class_BANG_.call(null,n,c_12870);
{
var G__12871 = seq__12848_12866;
var G__12872 = chunk__12849_12867;
var G__12873 = count__12850_12868;
var G__12874 = (i__12851_12869 + 1);
seq__12848_12866 = G__12871;
chunk__12849_12867 = G__12872;
count__12850_12868 = G__12873;
i__12851_12869 = G__12874;
continue;
}
} else
{var temp__4092__auto___12875 = cljs.core.seq.call(null,seq__12848_12866);if(temp__4092__auto___12875)
{var seq__12848_12876__$1 = temp__4092__auto___12875;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12848_12876__$1))
{var c__5497__auto___12877 = cljs.core.chunk_first.call(null,seq__12848_12876__$1);{
var G__12878 = cljs.core.chunk_rest.call(null,seq__12848_12876__$1);
var G__12879 = c__5497__auto___12877;
var G__12880 = cljs.core.count.call(null,c__5497__auto___12877);
var G__12881 = 0;
seq__12848_12866 = G__12878;
chunk__12849_12867 = G__12879;
count__12850_12868 = G__12880;
i__12851_12869 = G__12881;
continue;
}
} else
{var c_12882 = cljs.core.first.call(null,seq__12848_12876__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12882);
{
var G__12883 = cljs.core.next.call(null,seq__12848_12876__$1);
var G__12884 = null;
var G__12885 = 0;
var G__12886 = 0;
seq__12848_12866 = G__12883;
chunk__12849_12867 = G__12884;
count__12850_12868 = G__12885;
i__12851_12869 = G__12886;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__12847_12865))
{dommy.attrs.add_class_BANG_.call(null,n,v_12864);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_12863,v_12864);
} else
{}
}
}
{
var G__12887 = seq__12842_12858;
var G__12888 = chunk__12843_12859;
var G__12889 = count__12844_12860;
var G__12890 = (i__12845_12861 + 1);
seq__12842_12858 = G__12887;
chunk__12843_12859 = G__12888;
count__12844_12860 = G__12889;
i__12845_12861 = G__12890;
continue;
}
} else
{var temp__4092__auto___12891 = cljs.core.seq.call(null,seq__12842_12858);if(temp__4092__auto___12891)
{var seq__12842_12892__$1 = temp__4092__auto___12891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12842_12892__$1))
{var c__5497__auto___12893 = cljs.core.chunk_first.call(null,seq__12842_12892__$1);{
var G__12894 = cljs.core.chunk_rest.call(null,seq__12842_12892__$1);
var G__12895 = c__5497__auto___12893;
var G__12896 = cljs.core.count.call(null,c__5497__auto___12893);
var G__12897 = 0;
seq__12842_12858 = G__12894;
chunk__12843_12859 = G__12895;
count__12844_12860 = G__12896;
i__12845_12861 = G__12897;
continue;
}
} else
{var vec__12852_12898 = cljs.core.first.call(null,seq__12842_12892__$1);var k_12899 = cljs.core.nth.call(null,vec__12852_12898,0,null);var v_12900 = cljs.core.nth.call(null,vec__12852_12898,1,null);var G__12853_12901 = k_12899;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__12853_12901))
{var seq__12854_12902 = cljs.core.seq.call(null,v_12900);var chunk__12855_12903 = null;var count__12856_12904 = 0;var i__12857_12905 = 0;while(true){
if((i__12857_12905 < count__12856_12904))
{var c_12906 = cljs.core._nth.call(null,chunk__12855_12903,i__12857_12905);dommy.attrs.add_class_BANG_.call(null,n,c_12906);
{
var G__12907 = seq__12854_12902;
var G__12908 = chunk__12855_12903;
var G__12909 = count__12856_12904;
var G__12910 = (i__12857_12905 + 1);
seq__12854_12902 = G__12907;
chunk__12855_12903 = G__12908;
count__12856_12904 = G__12909;
i__12857_12905 = G__12910;
continue;
}
} else
{var temp__4092__auto___12911__$1 = cljs.core.seq.call(null,seq__12854_12902);if(temp__4092__auto___12911__$1)
{var seq__12854_12912__$1 = temp__4092__auto___12911__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12854_12912__$1))
{var c__5497__auto___12913 = cljs.core.chunk_first.call(null,seq__12854_12912__$1);{
var G__12914 = cljs.core.chunk_rest.call(null,seq__12854_12912__$1);
var G__12915 = c__5497__auto___12913;
var G__12916 = cljs.core.count.call(null,c__5497__auto___12913);
var G__12917 = 0;
seq__12854_12902 = G__12914;
chunk__12855_12903 = G__12915;
count__12856_12904 = G__12916;
i__12857_12905 = G__12917;
continue;
}
} else
{var c_12918 = cljs.core.first.call(null,seq__12854_12912__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12918);
{
var G__12919 = cljs.core.next.call(null,seq__12854_12912__$1);
var G__12920 = null;
var G__12921 = 0;
var G__12922 = 0;
seq__12854_12902 = G__12919;
chunk__12855_12903 = G__12920;
count__12856_12904 = G__12921;
i__12857_12905 = G__12922;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__12853_12901))
{dommy.attrs.add_class_BANG_.call(null,n,v_12900);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_12899,v_12900);
} else
{}
}
}
{
var G__12923 = cljs.core.next.call(null,seq__12842_12892__$1);
var G__12924 = null;
var G__12925 = 0;
var G__12926 = 0;
seq__12842_12858 = G__12923;
chunk__12843_12859 = G__12924;
count__12844_12860 = G__12925;
i__12845_12861 = G__12926;
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
}catch (e12927){if((e12927 instanceof ReferenceError))
{var __12928 = e12927;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12927;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__12930 = data;if(G__12930)
{var bit__5399__auto__ = null;if(cljs.core.truth_((function (){var or__4773__auto__ = bit__5399__auto__;if(cljs.core.truth_(or__4773__auto__))
{return or__4773__auto__;
} else
{return G__12930.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12930.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12930);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12930);
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
