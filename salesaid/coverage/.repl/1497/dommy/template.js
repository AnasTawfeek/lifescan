// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj10570 = {};return obj10570;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__4753__auto__ = this$;if(and__4753__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__4753__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__5368__auto__ = (((this$ == null))?null:this$);return (function (){var or__4765__auto__ = (dommy.template._elem[goog.typeOf(x__5368__auto__)]);if(or__4765__auto__)
{return or__4765__auto__;
} else
{var or__4765__auto____$1 = (dommy.template._elem["_"]);if(or__4765__auto____$1)
{return or__4765__auto____$1;
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
{var str_10573 = node_str.substring(base_idx);while(true){
var next_idx_10574 = dommy.template.next_css_index.call(null,str_10573,1);var frag_10575 = (((next_idx_10574 >= 0))?str_10573.substring(0,next_idx_10574):str_10573);var G__10572_10576 = frag_10575.charAt(0);if(cljs.core._EQ_.call(null,"#",G__10572_10576))
{node.setAttribute("id",frag_10575.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__10572_10576))
{dommy.attrs.add_class_BANG_.call(null,node,frag_10575.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_10575.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_10574 >= 0))
{{
var G__10577 = str_10573.substring(next_idx_10574);
str_10573 = G__10577;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__10583 = data;if(G__10583)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__10583.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10583.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10583);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10583);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__10584_10588 = cljs.core.seq.call(null,data);var chunk__10585_10589 = null;var count__10586_10590 = 0;var i__10587_10591 = 0;while(true){
if((i__10587_10591 < count__10586_10590))
{var child_10592 = cljs.core._nth.call(null,chunk__10585_10589,i__10587_10591);__GT_document_fragment.call(null,result_frag,child_10592);
{
var G__10593 = seq__10584_10588;
var G__10594 = chunk__10585_10589;
var G__10595 = count__10586_10590;
var G__10596 = (i__10587_10591 + 1);
seq__10584_10588 = G__10593;
chunk__10585_10589 = G__10594;
count__10586_10590 = G__10595;
i__10587_10591 = G__10596;
continue;
}
} else
{var temp__4092__auto___10597 = cljs.core.seq.call(null,seq__10584_10588);if(temp__4092__auto___10597)
{var seq__10584_10598__$1 = temp__4092__auto___10597;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10584_10598__$1))
{var c__5489__auto___10599 = cljs.core.chunk_first.call(null,seq__10584_10598__$1);{
var G__10600 = cljs.core.chunk_rest.call(null,seq__10584_10598__$1);
var G__10601 = c__5489__auto___10599;
var G__10602 = cljs.core.count.call(null,c__5489__auto___10599);
var G__10603 = 0;
seq__10584_10588 = G__10600;
chunk__10585_10589 = G__10601;
count__10586_10590 = G__10602;
i__10587_10591 = G__10603;
continue;
}
} else
{var child_10604 = cljs.core.first.call(null,seq__10584_10598__$1);__GT_document_fragment.call(null,result_frag,child_10604);
{
var G__10605 = cljs.core.next.call(null,seq__10584_10598__$1);
var G__10606 = null;
var G__10607 = 0;
var G__10608 = 0;
seq__10584_10588 = G__10605;
chunk__10585_10589 = G__10606;
count__10586_10590 = G__10607;
i__10587_10591 = G__10608;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__10610 = data;if(G__10610)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__10610.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10610.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10610);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10610);
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
dommy.template.compound_element = (function compound_element(p__10611){var vec__10631 = p__10611;var tag_name = cljs.core.nth.call(null,vec__10631,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__10631,1,null);var children = cljs.core.nthnext.call(null,vec__10631,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__10633 = maybe_attrs;if(G__10633)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__10633.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10633.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10633);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10633);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__10634_10650 = cljs.core.seq.call(null,attrs);var chunk__10635_10651 = null;var count__10636_10652 = 0;var i__10637_10653 = 0;while(true){
if((i__10637_10653 < count__10636_10652))
{var vec__10638_10654 = cljs.core._nth.call(null,chunk__10635_10651,i__10637_10653);var k_10655 = cljs.core.nth.call(null,vec__10638_10654,0,null);var v_10656 = cljs.core.nth.call(null,vec__10638_10654,1,null);var G__10639_10657 = k_10655;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__10639_10657))
{var seq__10640_10658 = cljs.core.seq.call(null,v_10656);var chunk__10641_10659 = null;var count__10642_10660 = 0;var i__10643_10661 = 0;while(true){
if((i__10643_10661 < count__10642_10660))
{var c_10662 = cljs.core._nth.call(null,chunk__10641_10659,i__10643_10661);dommy.attrs.add_class_BANG_.call(null,n,c_10662);
{
var G__10663 = seq__10640_10658;
var G__10664 = chunk__10641_10659;
var G__10665 = count__10642_10660;
var G__10666 = (i__10643_10661 + 1);
seq__10640_10658 = G__10663;
chunk__10641_10659 = G__10664;
count__10642_10660 = G__10665;
i__10643_10661 = G__10666;
continue;
}
} else
{var temp__4092__auto___10667 = cljs.core.seq.call(null,seq__10640_10658);if(temp__4092__auto___10667)
{var seq__10640_10668__$1 = temp__4092__auto___10667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10640_10668__$1))
{var c__5489__auto___10669 = cljs.core.chunk_first.call(null,seq__10640_10668__$1);{
var G__10670 = cljs.core.chunk_rest.call(null,seq__10640_10668__$1);
var G__10671 = c__5489__auto___10669;
var G__10672 = cljs.core.count.call(null,c__5489__auto___10669);
var G__10673 = 0;
seq__10640_10658 = G__10670;
chunk__10641_10659 = G__10671;
count__10642_10660 = G__10672;
i__10643_10661 = G__10673;
continue;
}
} else
{var c_10674 = cljs.core.first.call(null,seq__10640_10668__$1);dommy.attrs.add_class_BANG_.call(null,n,c_10674);
{
var G__10675 = cljs.core.next.call(null,seq__10640_10668__$1);
var G__10676 = null;
var G__10677 = 0;
var G__10678 = 0;
seq__10640_10658 = G__10675;
chunk__10641_10659 = G__10676;
count__10642_10660 = G__10677;
i__10643_10661 = G__10678;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__10639_10657))
{dommy.attrs.add_class_BANG_.call(null,n,v_10656);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_10655,v_10656);
} else
{}
}
}
{
var G__10679 = seq__10634_10650;
var G__10680 = chunk__10635_10651;
var G__10681 = count__10636_10652;
var G__10682 = (i__10637_10653 + 1);
seq__10634_10650 = G__10679;
chunk__10635_10651 = G__10680;
count__10636_10652 = G__10681;
i__10637_10653 = G__10682;
continue;
}
} else
{var temp__4092__auto___10683 = cljs.core.seq.call(null,seq__10634_10650);if(temp__4092__auto___10683)
{var seq__10634_10684__$1 = temp__4092__auto___10683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10634_10684__$1))
{var c__5489__auto___10685 = cljs.core.chunk_first.call(null,seq__10634_10684__$1);{
var G__10686 = cljs.core.chunk_rest.call(null,seq__10634_10684__$1);
var G__10687 = c__5489__auto___10685;
var G__10688 = cljs.core.count.call(null,c__5489__auto___10685);
var G__10689 = 0;
seq__10634_10650 = G__10686;
chunk__10635_10651 = G__10687;
count__10636_10652 = G__10688;
i__10637_10653 = G__10689;
continue;
}
} else
{var vec__10644_10690 = cljs.core.first.call(null,seq__10634_10684__$1);var k_10691 = cljs.core.nth.call(null,vec__10644_10690,0,null);var v_10692 = cljs.core.nth.call(null,vec__10644_10690,1,null);var G__10645_10693 = k_10691;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__10645_10693))
{var seq__10646_10694 = cljs.core.seq.call(null,v_10692);var chunk__10647_10695 = null;var count__10648_10696 = 0;var i__10649_10697 = 0;while(true){
if((i__10649_10697 < count__10648_10696))
{var c_10698 = cljs.core._nth.call(null,chunk__10647_10695,i__10649_10697);dommy.attrs.add_class_BANG_.call(null,n,c_10698);
{
var G__10699 = seq__10646_10694;
var G__10700 = chunk__10647_10695;
var G__10701 = count__10648_10696;
var G__10702 = (i__10649_10697 + 1);
seq__10646_10694 = G__10699;
chunk__10647_10695 = G__10700;
count__10648_10696 = G__10701;
i__10649_10697 = G__10702;
continue;
}
} else
{var temp__4092__auto___10703__$1 = cljs.core.seq.call(null,seq__10646_10694);if(temp__4092__auto___10703__$1)
{var seq__10646_10704__$1 = temp__4092__auto___10703__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10646_10704__$1))
{var c__5489__auto___10705 = cljs.core.chunk_first.call(null,seq__10646_10704__$1);{
var G__10706 = cljs.core.chunk_rest.call(null,seq__10646_10704__$1);
var G__10707 = c__5489__auto___10705;
var G__10708 = cljs.core.count.call(null,c__5489__auto___10705);
var G__10709 = 0;
seq__10646_10694 = G__10706;
chunk__10647_10695 = G__10707;
count__10648_10696 = G__10708;
i__10649_10697 = G__10709;
continue;
}
} else
{var c_10710 = cljs.core.first.call(null,seq__10646_10704__$1);dommy.attrs.add_class_BANG_.call(null,n,c_10710);
{
var G__10711 = cljs.core.next.call(null,seq__10646_10704__$1);
var G__10712 = null;
var G__10713 = 0;
var G__10714 = 0;
seq__10646_10694 = G__10711;
chunk__10647_10695 = G__10712;
count__10648_10696 = G__10713;
i__10649_10697 = G__10714;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__10645_10693))
{dommy.attrs.add_class_BANG_.call(null,n,v_10692);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_10691,v_10692);
} else
{}
}
}
{
var G__10715 = cljs.core.next.call(null,seq__10634_10684__$1);
var G__10716 = null;
var G__10717 = 0;
var G__10718 = 0;
seq__10634_10650 = G__10715;
chunk__10635_10651 = G__10716;
count__10636_10652 = G__10717;
i__10637_10653 = G__10718;
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
}catch (e10719){if((e10719 instanceof ReferenceError))
{var __10720 = e10719;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10719;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__10722 = data;if(G__10722)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__10722.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10722.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10722);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10722);
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
