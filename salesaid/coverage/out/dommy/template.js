// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj66686 = {};return obj66686;
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
{var str_66689 = node_str.substring(base_idx);while(true){
var next_idx_66690 = dommy.template.next_css_index.call(null,str_66689,1);var frag_66691 = (((next_idx_66690 >= 0))?str_66689.substring(0,next_idx_66690):str_66689);var G__66688_66692 = frag_66691.charAt(0);if(cljs.core._EQ_.call(null,"#",G__66688_66692))
{node.setAttribute("id",frag_66691.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__66688_66692))
{dommy.attrs.add_class_BANG_.call(null,node,frag_66691.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_66691.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_66690 >= 0))
{{
var G__66693 = str_66689.substring(next_idx_66690);
str_66689 = G__66693;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__66699 = data;if(G__66699)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__66699.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__66699.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66699);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66699);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__66700_66704 = cljs.core.seq.call(null,data);var chunk__66701_66705 = null;var count__66702_66706 = 0;var i__66703_66707 = 0;while(true){
if((i__66703_66707 < count__66702_66706))
{var child_66708 = cljs.core._nth.call(null,chunk__66701_66705,i__66703_66707);__GT_document_fragment.call(null,result_frag,child_66708);
{
var G__66709 = seq__66700_66704;
var G__66710 = chunk__66701_66705;
var G__66711 = count__66702_66706;
var G__66712 = (i__66703_66707 + 1);
seq__66700_66704 = G__66709;
chunk__66701_66705 = G__66710;
count__66702_66706 = G__66711;
i__66703_66707 = G__66712;
continue;
}
} else
{var temp__4092__auto___66713 = cljs.core.seq.call(null,seq__66700_66704);if(temp__4092__auto___66713)
{var seq__66700_66714__$1 = temp__4092__auto___66713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66700_66714__$1))
{var c__4017__auto___66715 = cljs.core.chunk_first.call(null,seq__66700_66714__$1);{
var G__66716 = cljs.core.chunk_rest.call(null,seq__66700_66714__$1);
var G__66717 = c__4017__auto___66715;
var G__66718 = cljs.core.count.call(null,c__4017__auto___66715);
var G__66719 = 0;
seq__66700_66704 = G__66716;
chunk__66701_66705 = G__66717;
count__66702_66706 = G__66718;
i__66703_66707 = G__66719;
continue;
}
} else
{var child_66720 = cljs.core.first.call(null,seq__66700_66714__$1);__GT_document_fragment.call(null,result_frag,child_66720);
{
var G__66721 = cljs.core.next.call(null,seq__66700_66714__$1);
var G__66722 = null;
var G__66723 = 0;
var G__66724 = 0;
seq__66700_66704 = G__66721;
chunk__66701_66705 = G__66722;
count__66702_66706 = G__66723;
i__66703_66707 = G__66724;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__66726 = data;if(G__66726)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__66726.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__66726.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66726);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66726);
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
dommy.template.compound_element = (function compound_element(p__66727){var vec__66747 = p__66727;var tag_name = cljs.core.nth.call(null,vec__66747,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__66747,1,null);var children = cljs.core.nthnext.call(null,vec__66747,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__66749 = maybe_attrs;if(G__66749)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__66749.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__66749.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66749);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66749);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__66750_66766 = cljs.core.seq.call(null,attrs);var chunk__66751_66767 = null;var count__66752_66768 = 0;var i__66753_66769 = 0;while(true){
if((i__66753_66769 < count__66752_66768))
{var vec__66754_66770 = cljs.core._nth.call(null,chunk__66751_66767,i__66753_66769);var k_66771 = cljs.core.nth.call(null,vec__66754_66770,0,null);var v_66772 = cljs.core.nth.call(null,vec__66754_66770,1,null);var G__66755_66773 = k_66771;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__66755_66773))
{var seq__66756_66774 = cljs.core.seq.call(null,v_66772);var chunk__66757_66775 = null;var count__66758_66776 = 0;var i__66759_66777 = 0;while(true){
if((i__66759_66777 < count__66758_66776))
{var c_66778 = cljs.core._nth.call(null,chunk__66757_66775,i__66759_66777);dommy.attrs.add_class_BANG_.call(null,n,c_66778);
{
var G__66779 = seq__66756_66774;
var G__66780 = chunk__66757_66775;
var G__66781 = count__66758_66776;
var G__66782 = (i__66759_66777 + 1);
seq__66756_66774 = G__66779;
chunk__66757_66775 = G__66780;
count__66758_66776 = G__66781;
i__66759_66777 = G__66782;
continue;
}
} else
{var temp__4092__auto___66783 = cljs.core.seq.call(null,seq__66756_66774);if(temp__4092__auto___66783)
{var seq__66756_66784__$1 = temp__4092__auto___66783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66756_66784__$1))
{var c__4017__auto___66785 = cljs.core.chunk_first.call(null,seq__66756_66784__$1);{
var G__66786 = cljs.core.chunk_rest.call(null,seq__66756_66784__$1);
var G__66787 = c__4017__auto___66785;
var G__66788 = cljs.core.count.call(null,c__4017__auto___66785);
var G__66789 = 0;
seq__66756_66774 = G__66786;
chunk__66757_66775 = G__66787;
count__66758_66776 = G__66788;
i__66759_66777 = G__66789;
continue;
}
} else
{var c_66790 = cljs.core.first.call(null,seq__66756_66784__$1);dommy.attrs.add_class_BANG_.call(null,n,c_66790);
{
var G__66791 = cljs.core.next.call(null,seq__66756_66784__$1);
var G__66792 = null;
var G__66793 = 0;
var G__66794 = 0;
seq__66756_66774 = G__66791;
chunk__66757_66775 = G__66792;
count__66758_66776 = G__66793;
i__66759_66777 = G__66794;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__66755_66773))
{dommy.attrs.add_class_BANG_.call(null,n,v_66772);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_66771,v_66772);
} else
{}
}
}
{
var G__66795 = seq__66750_66766;
var G__66796 = chunk__66751_66767;
var G__66797 = count__66752_66768;
var G__66798 = (i__66753_66769 + 1);
seq__66750_66766 = G__66795;
chunk__66751_66767 = G__66796;
count__66752_66768 = G__66797;
i__66753_66769 = G__66798;
continue;
}
} else
{var temp__4092__auto___66799 = cljs.core.seq.call(null,seq__66750_66766);if(temp__4092__auto___66799)
{var seq__66750_66800__$1 = temp__4092__auto___66799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66750_66800__$1))
{var c__4017__auto___66801 = cljs.core.chunk_first.call(null,seq__66750_66800__$1);{
var G__66802 = cljs.core.chunk_rest.call(null,seq__66750_66800__$1);
var G__66803 = c__4017__auto___66801;
var G__66804 = cljs.core.count.call(null,c__4017__auto___66801);
var G__66805 = 0;
seq__66750_66766 = G__66802;
chunk__66751_66767 = G__66803;
count__66752_66768 = G__66804;
i__66753_66769 = G__66805;
continue;
}
} else
{var vec__66760_66806 = cljs.core.first.call(null,seq__66750_66800__$1);var k_66807 = cljs.core.nth.call(null,vec__66760_66806,0,null);var v_66808 = cljs.core.nth.call(null,vec__66760_66806,1,null);var G__66761_66809 = k_66807;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__66761_66809))
{var seq__66762_66810 = cljs.core.seq.call(null,v_66808);var chunk__66763_66811 = null;var count__66764_66812 = 0;var i__66765_66813 = 0;while(true){
if((i__66765_66813 < count__66764_66812))
{var c_66814 = cljs.core._nth.call(null,chunk__66763_66811,i__66765_66813);dommy.attrs.add_class_BANG_.call(null,n,c_66814);
{
var G__66815 = seq__66762_66810;
var G__66816 = chunk__66763_66811;
var G__66817 = count__66764_66812;
var G__66818 = (i__66765_66813 + 1);
seq__66762_66810 = G__66815;
chunk__66763_66811 = G__66816;
count__66764_66812 = G__66817;
i__66765_66813 = G__66818;
continue;
}
} else
{var temp__4092__auto___66819__$1 = cljs.core.seq.call(null,seq__66762_66810);if(temp__4092__auto___66819__$1)
{var seq__66762_66820__$1 = temp__4092__auto___66819__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66762_66820__$1))
{var c__4017__auto___66821 = cljs.core.chunk_first.call(null,seq__66762_66820__$1);{
var G__66822 = cljs.core.chunk_rest.call(null,seq__66762_66820__$1);
var G__66823 = c__4017__auto___66821;
var G__66824 = cljs.core.count.call(null,c__4017__auto___66821);
var G__66825 = 0;
seq__66762_66810 = G__66822;
chunk__66763_66811 = G__66823;
count__66764_66812 = G__66824;
i__66765_66813 = G__66825;
continue;
}
} else
{var c_66826 = cljs.core.first.call(null,seq__66762_66820__$1);dommy.attrs.add_class_BANG_.call(null,n,c_66826);
{
var G__66827 = cljs.core.next.call(null,seq__66762_66820__$1);
var G__66828 = null;
var G__66829 = 0;
var G__66830 = 0;
seq__66762_66810 = G__66827;
chunk__66763_66811 = G__66828;
count__66764_66812 = G__66829;
i__66765_66813 = G__66830;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__66761_66809))
{dommy.attrs.add_class_BANG_.call(null,n,v_66808);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_66807,v_66808);
} else
{}
}
}
{
var G__66831 = cljs.core.next.call(null,seq__66750_66800__$1);
var G__66832 = null;
var G__66833 = 0;
var G__66834 = 0;
seq__66750_66766 = G__66831;
chunk__66751_66767 = G__66832;
count__66752_66768 = G__66833;
i__66753_66769 = G__66834;
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
}catch (e66835){if((e66835 instanceof ReferenceError))
{var __66836 = e66835;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e66835;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__66838 = data;if(G__66838)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__66838.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__66838.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66838);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66838);
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
