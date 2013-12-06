// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj44644 = {};return obj44644;
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
{var str_44647 = node_str.substring(base_idx);while(true){
var next_idx_44648 = dommy.template.next_css_index.call(null,str_44647,1);var frag_44649 = (((next_idx_44648 >= 0))?str_44647.substring(0,next_idx_44648):str_44647);var G__44646_44650 = frag_44649.charAt(0);if(cljs.core._EQ_.call(null,"#",G__44646_44650))
{node.setAttribute("id",frag_44649.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__44646_44650))
{dommy.attrs.add_class_BANG_.call(null,node,frag_44649.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_44649.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_44648 >= 0))
{{
var G__44651 = str_44647.substring(next_idx_44648);
str_44647 = G__44651;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__44657 = data;if(G__44657)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__44657.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__44657.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__44657);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__44657);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__44658_44662 = cljs.core.seq.call(null,data);var chunk__44659_44663 = null;var count__44660_44664 = 0;var i__44661_44665 = 0;while(true){
if((i__44661_44665 < count__44660_44664))
{var child_44666 = cljs.core._nth.call(null,chunk__44659_44663,i__44661_44665);__GT_document_fragment.call(null,result_frag,child_44666);
{
var G__44667 = seq__44658_44662;
var G__44668 = chunk__44659_44663;
var G__44669 = count__44660_44664;
var G__44670 = (i__44661_44665 + 1);
seq__44658_44662 = G__44667;
chunk__44659_44663 = G__44668;
count__44660_44664 = G__44669;
i__44661_44665 = G__44670;
continue;
}
} else
{var temp__4092__auto___44671 = cljs.core.seq.call(null,seq__44658_44662);if(temp__4092__auto___44671)
{var seq__44658_44672__$1 = temp__4092__auto___44671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44658_44672__$1))
{var c__4017__auto___44673 = cljs.core.chunk_first.call(null,seq__44658_44672__$1);{
var G__44674 = cljs.core.chunk_rest.call(null,seq__44658_44672__$1);
var G__44675 = c__4017__auto___44673;
var G__44676 = cljs.core.count.call(null,c__4017__auto___44673);
var G__44677 = 0;
seq__44658_44662 = G__44674;
chunk__44659_44663 = G__44675;
count__44660_44664 = G__44676;
i__44661_44665 = G__44677;
continue;
}
} else
{var child_44678 = cljs.core.first.call(null,seq__44658_44672__$1);__GT_document_fragment.call(null,result_frag,child_44678);
{
var G__44679 = cljs.core.next.call(null,seq__44658_44672__$1);
var G__44680 = null;
var G__44681 = 0;
var G__44682 = 0;
seq__44658_44662 = G__44679;
chunk__44659_44663 = G__44680;
count__44660_44664 = G__44681;
i__44661_44665 = G__44682;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__44684 = data;if(G__44684)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__44684.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__44684.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__44684);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__44684);
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
dommy.template.compound_element = (function compound_element(p__44685){var vec__44705 = p__44685;var tag_name = cljs.core.nth.call(null,vec__44705,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__44705,1,null);var children = cljs.core.nthnext.call(null,vec__44705,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__44707 = maybe_attrs;if(G__44707)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__44707.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__44707.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__44707);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__44707);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__44708_44724 = cljs.core.seq.call(null,attrs);var chunk__44709_44725 = null;var count__44710_44726 = 0;var i__44711_44727 = 0;while(true){
if((i__44711_44727 < count__44710_44726))
{var vec__44712_44728 = cljs.core._nth.call(null,chunk__44709_44725,i__44711_44727);var k_44729 = cljs.core.nth.call(null,vec__44712_44728,0,null);var v_44730 = cljs.core.nth.call(null,vec__44712_44728,1,null);var G__44713_44731 = k_44729;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__44713_44731))
{var seq__44714_44732 = cljs.core.seq.call(null,v_44730);var chunk__44715_44733 = null;var count__44716_44734 = 0;var i__44717_44735 = 0;while(true){
if((i__44717_44735 < count__44716_44734))
{var c_44736 = cljs.core._nth.call(null,chunk__44715_44733,i__44717_44735);dommy.attrs.add_class_BANG_.call(null,n,c_44736);
{
var G__44737 = seq__44714_44732;
var G__44738 = chunk__44715_44733;
var G__44739 = count__44716_44734;
var G__44740 = (i__44717_44735 + 1);
seq__44714_44732 = G__44737;
chunk__44715_44733 = G__44738;
count__44716_44734 = G__44739;
i__44717_44735 = G__44740;
continue;
}
} else
{var temp__4092__auto___44741 = cljs.core.seq.call(null,seq__44714_44732);if(temp__4092__auto___44741)
{var seq__44714_44742__$1 = temp__4092__auto___44741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44714_44742__$1))
{var c__4017__auto___44743 = cljs.core.chunk_first.call(null,seq__44714_44742__$1);{
var G__44744 = cljs.core.chunk_rest.call(null,seq__44714_44742__$1);
var G__44745 = c__4017__auto___44743;
var G__44746 = cljs.core.count.call(null,c__4017__auto___44743);
var G__44747 = 0;
seq__44714_44732 = G__44744;
chunk__44715_44733 = G__44745;
count__44716_44734 = G__44746;
i__44717_44735 = G__44747;
continue;
}
} else
{var c_44748 = cljs.core.first.call(null,seq__44714_44742__$1);dommy.attrs.add_class_BANG_.call(null,n,c_44748);
{
var G__44749 = cljs.core.next.call(null,seq__44714_44742__$1);
var G__44750 = null;
var G__44751 = 0;
var G__44752 = 0;
seq__44714_44732 = G__44749;
chunk__44715_44733 = G__44750;
count__44716_44734 = G__44751;
i__44717_44735 = G__44752;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__44713_44731))
{dommy.attrs.add_class_BANG_.call(null,n,v_44730);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_44729,v_44730);
} else
{}
}
}
{
var G__44753 = seq__44708_44724;
var G__44754 = chunk__44709_44725;
var G__44755 = count__44710_44726;
var G__44756 = (i__44711_44727 + 1);
seq__44708_44724 = G__44753;
chunk__44709_44725 = G__44754;
count__44710_44726 = G__44755;
i__44711_44727 = G__44756;
continue;
}
} else
{var temp__4092__auto___44757 = cljs.core.seq.call(null,seq__44708_44724);if(temp__4092__auto___44757)
{var seq__44708_44758__$1 = temp__4092__auto___44757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44708_44758__$1))
{var c__4017__auto___44759 = cljs.core.chunk_first.call(null,seq__44708_44758__$1);{
var G__44760 = cljs.core.chunk_rest.call(null,seq__44708_44758__$1);
var G__44761 = c__4017__auto___44759;
var G__44762 = cljs.core.count.call(null,c__4017__auto___44759);
var G__44763 = 0;
seq__44708_44724 = G__44760;
chunk__44709_44725 = G__44761;
count__44710_44726 = G__44762;
i__44711_44727 = G__44763;
continue;
}
} else
{var vec__44718_44764 = cljs.core.first.call(null,seq__44708_44758__$1);var k_44765 = cljs.core.nth.call(null,vec__44718_44764,0,null);var v_44766 = cljs.core.nth.call(null,vec__44718_44764,1,null);var G__44719_44767 = k_44765;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__44719_44767))
{var seq__44720_44768 = cljs.core.seq.call(null,v_44766);var chunk__44721_44769 = null;var count__44722_44770 = 0;var i__44723_44771 = 0;while(true){
if((i__44723_44771 < count__44722_44770))
{var c_44772 = cljs.core._nth.call(null,chunk__44721_44769,i__44723_44771);dommy.attrs.add_class_BANG_.call(null,n,c_44772);
{
var G__44773 = seq__44720_44768;
var G__44774 = chunk__44721_44769;
var G__44775 = count__44722_44770;
var G__44776 = (i__44723_44771 + 1);
seq__44720_44768 = G__44773;
chunk__44721_44769 = G__44774;
count__44722_44770 = G__44775;
i__44723_44771 = G__44776;
continue;
}
} else
{var temp__4092__auto___44777__$1 = cljs.core.seq.call(null,seq__44720_44768);if(temp__4092__auto___44777__$1)
{var seq__44720_44778__$1 = temp__4092__auto___44777__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44720_44778__$1))
{var c__4017__auto___44779 = cljs.core.chunk_first.call(null,seq__44720_44778__$1);{
var G__44780 = cljs.core.chunk_rest.call(null,seq__44720_44778__$1);
var G__44781 = c__4017__auto___44779;
var G__44782 = cljs.core.count.call(null,c__4017__auto___44779);
var G__44783 = 0;
seq__44720_44768 = G__44780;
chunk__44721_44769 = G__44781;
count__44722_44770 = G__44782;
i__44723_44771 = G__44783;
continue;
}
} else
{var c_44784 = cljs.core.first.call(null,seq__44720_44778__$1);dommy.attrs.add_class_BANG_.call(null,n,c_44784);
{
var G__44785 = cljs.core.next.call(null,seq__44720_44778__$1);
var G__44786 = null;
var G__44787 = 0;
var G__44788 = 0;
seq__44720_44768 = G__44785;
chunk__44721_44769 = G__44786;
count__44722_44770 = G__44787;
i__44723_44771 = G__44788;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__44719_44767))
{dommy.attrs.add_class_BANG_.call(null,n,v_44766);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_44765,v_44766);
} else
{}
}
}
{
var G__44789 = cljs.core.next.call(null,seq__44708_44758__$1);
var G__44790 = null;
var G__44791 = 0;
var G__44792 = 0;
seq__44708_44724 = G__44789;
chunk__44709_44725 = G__44790;
count__44710_44726 = G__44791;
i__44711_44727 = G__44792;
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
}catch (e44793){if((e44793 instanceof ReferenceError))
{var __44794 = e44793;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44793;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__44796 = data;if(G__44796)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__44796.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__44796.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__44796);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__44796);
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
