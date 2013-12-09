// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj24338 = {};return obj24338;
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
{var str_24341 = node_str.substring(base_idx);while(true){
var next_idx_24342 = dommy.template.next_css_index.call(null,str_24341,1);var frag_24343 = (((next_idx_24342 >= 0))?str_24341.substring(0,next_idx_24342):str_24341);var G__24340_24344 = frag_24343.charAt(0);if(cljs.core._EQ_.call(null,"#",G__24340_24344))
{node.setAttribute("id",frag_24343.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__24340_24344))
{dommy.attrs.add_class_BANG_.call(null,node,frag_24343.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_24343.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_24342 >= 0))
{{
var G__24345 = str_24341.substring(next_idx_24342);
str_24341 = G__24345;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__24351 = data;if(G__24351)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__24351.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24351.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24351);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24351);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__24352_24356 = cljs.core.seq.call(null,data);var chunk__24353_24357 = null;var count__24354_24358 = 0;var i__24355_24359 = 0;while(true){
if((i__24355_24359 < count__24354_24358))
{var child_24360 = cljs.core._nth.call(null,chunk__24353_24357,i__24355_24359);__GT_document_fragment.call(null,result_frag,child_24360);
{
var G__24361 = seq__24352_24356;
var G__24362 = chunk__24353_24357;
var G__24363 = count__24354_24358;
var G__24364 = (i__24355_24359 + 1);
seq__24352_24356 = G__24361;
chunk__24353_24357 = G__24362;
count__24354_24358 = G__24363;
i__24355_24359 = G__24364;
continue;
}
} else
{var temp__4092__auto___24365 = cljs.core.seq.call(null,seq__24352_24356);if(temp__4092__auto___24365)
{var seq__24352_24366__$1 = temp__4092__auto___24365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24352_24366__$1))
{var c__5489__auto___24367 = cljs.core.chunk_first.call(null,seq__24352_24366__$1);{
var G__24368 = cljs.core.chunk_rest.call(null,seq__24352_24366__$1);
var G__24369 = c__5489__auto___24367;
var G__24370 = cljs.core.count.call(null,c__5489__auto___24367);
var G__24371 = 0;
seq__24352_24356 = G__24368;
chunk__24353_24357 = G__24369;
count__24354_24358 = G__24370;
i__24355_24359 = G__24371;
continue;
}
} else
{var child_24372 = cljs.core.first.call(null,seq__24352_24366__$1);__GT_document_fragment.call(null,result_frag,child_24372);
{
var G__24373 = cljs.core.next.call(null,seq__24352_24366__$1);
var G__24374 = null;
var G__24375 = 0;
var G__24376 = 0;
seq__24352_24356 = G__24373;
chunk__24353_24357 = G__24374;
count__24354_24358 = G__24375;
i__24355_24359 = G__24376;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__24378 = data;if(G__24378)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__24378.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24378.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24378);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24378);
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
dommy.template.compound_element = (function compound_element(p__24379){var vec__24399 = p__24379;var tag_name = cljs.core.nth.call(null,vec__24399,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__24399,1,null);var children = cljs.core.nthnext.call(null,vec__24399,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__24401 = maybe_attrs;if(G__24401)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__24401.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24401.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24401);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24401);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__24402_24418 = cljs.core.seq.call(null,attrs);var chunk__24403_24419 = null;var count__24404_24420 = 0;var i__24405_24421 = 0;while(true){
if((i__24405_24421 < count__24404_24420))
{var vec__24406_24422 = cljs.core._nth.call(null,chunk__24403_24419,i__24405_24421);var k_24423 = cljs.core.nth.call(null,vec__24406_24422,0,null);var v_24424 = cljs.core.nth.call(null,vec__24406_24422,1,null);var G__24407_24425 = k_24423;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__24407_24425))
{var seq__24408_24426 = cljs.core.seq.call(null,v_24424);var chunk__24409_24427 = null;var count__24410_24428 = 0;var i__24411_24429 = 0;while(true){
if((i__24411_24429 < count__24410_24428))
{var c_24430 = cljs.core._nth.call(null,chunk__24409_24427,i__24411_24429);dommy.attrs.add_class_BANG_.call(null,n,c_24430);
{
var G__24431 = seq__24408_24426;
var G__24432 = chunk__24409_24427;
var G__24433 = count__24410_24428;
var G__24434 = (i__24411_24429 + 1);
seq__24408_24426 = G__24431;
chunk__24409_24427 = G__24432;
count__24410_24428 = G__24433;
i__24411_24429 = G__24434;
continue;
}
} else
{var temp__4092__auto___24435 = cljs.core.seq.call(null,seq__24408_24426);if(temp__4092__auto___24435)
{var seq__24408_24436__$1 = temp__4092__auto___24435;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24408_24436__$1))
{var c__5489__auto___24437 = cljs.core.chunk_first.call(null,seq__24408_24436__$1);{
var G__24438 = cljs.core.chunk_rest.call(null,seq__24408_24436__$1);
var G__24439 = c__5489__auto___24437;
var G__24440 = cljs.core.count.call(null,c__5489__auto___24437);
var G__24441 = 0;
seq__24408_24426 = G__24438;
chunk__24409_24427 = G__24439;
count__24410_24428 = G__24440;
i__24411_24429 = G__24441;
continue;
}
} else
{var c_24442 = cljs.core.first.call(null,seq__24408_24436__$1);dommy.attrs.add_class_BANG_.call(null,n,c_24442);
{
var G__24443 = cljs.core.next.call(null,seq__24408_24436__$1);
var G__24444 = null;
var G__24445 = 0;
var G__24446 = 0;
seq__24408_24426 = G__24443;
chunk__24409_24427 = G__24444;
count__24410_24428 = G__24445;
i__24411_24429 = G__24446;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__24407_24425))
{dommy.attrs.add_class_BANG_.call(null,n,v_24424);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_24423,v_24424);
} else
{}
}
}
{
var G__24447 = seq__24402_24418;
var G__24448 = chunk__24403_24419;
var G__24449 = count__24404_24420;
var G__24450 = (i__24405_24421 + 1);
seq__24402_24418 = G__24447;
chunk__24403_24419 = G__24448;
count__24404_24420 = G__24449;
i__24405_24421 = G__24450;
continue;
}
} else
{var temp__4092__auto___24451 = cljs.core.seq.call(null,seq__24402_24418);if(temp__4092__auto___24451)
{var seq__24402_24452__$1 = temp__4092__auto___24451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24402_24452__$1))
{var c__5489__auto___24453 = cljs.core.chunk_first.call(null,seq__24402_24452__$1);{
var G__24454 = cljs.core.chunk_rest.call(null,seq__24402_24452__$1);
var G__24455 = c__5489__auto___24453;
var G__24456 = cljs.core.count.call(null,c__5489__auto___24453);
var G__24457 = 0;
seq__24402_24418 = G__24454;
chunk__24403_24419 = G__24455;
count__24404_24420 = G__24456;
i__24405_24421 = G__24457;
continue;
}
} else
{var vec__24412_24458 = cljs.core.first.call(null,seq__24402_24452__$1);var k_24459 = cljs.core.nth.call(null,vec__24412_24458,0,null);var v_24460 = cljs.core.nth.call(null,vec__24412_24458,1,null);var G__24413_24461 = k_24459;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__24413_24461))
{var seq__24414_24462 = cljs.core.seq.call(null,v_24460);var chunk__24415_24463 = null;var count__24416_24464 = 0;var i__24417_24465 = 0;while(true){
if((i__24417_24465 < count__24416_24464))
{var c_24466 = cljs.core._nth.call(null,chunk__24415_24463,i__24417_24465);dommy.attrs.add_class_BANG_.call(null,n,c_24466);
{
var G__24467 = seq__24414_24462;
var G__24468 = chunk__24415_24463;
var G__24469 = count__24416_24464;
var G__24470 = (i__24417_24465 + 1);
seq__24414_24462 = G__24467;
chunk__24415_24463 = G__24468;
count__24416_24464 = G__24469;
i__24417_24465 = G__24470;
continue;
}
} else
{var temp__4092__auto___24471__$1 = cljs.core.seq.call(null,seq__24414_24462);if(temp__4092__auto___24471__$1)
{var seq__24414_24472__$1 = temp__4092__auto___24471__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24414_24472__$1))
{var c__5489__auto___24473 = cljs.core.chunk_first.call(null,seq__24414_24472__$1);{
var G__24474 = cljs.core.chunk_rest.call(null,seq__24414_24472__$1);
var G__24475 = c__5489__auto___24473;
var G__24476 = cljs.core.count.call(null,c__5489__auto___24473);
var G__24477 = 0;
seq__24414_24462 = G__24474;
chunk__24415_24463 = G__24475;
count__24416_24464 = G__24476;
i__24417_24465 = G__24477;
continue;
}
} else
{var c_24478 = cljs.core.first.call(null,seq__24414_24472__$1);dommy.attrs.add_class_BANG_.call(null,n,c_24478);
{
var G__24479 = cljs.core.next.call(null,seq__24414_24472__$1);
var G__24480 = null;
var G__24481 = 0;
var G__24482 = 0;
seq__24414_24462 = G__24479;
chunk__24415_24463 = G__24480;
count__24416_24464 = G__24481;
i__24417_24465 = G__24482;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__24413_24461))
{dommy.attrs.add_class_BANG_.call(null,n,v_24460);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_24459,v_24460);
} else
{}
}
}
{
var G__24483 = cljs.core.next.call(null,seq__24402_24452__$1);
var G__24484 = null;
var G__24485 = 0;
var G__24486 = 0;
seq__24402_24418 = G__24483;
chunk__24403_24419 = G__24484;
count__24404_24420 = G__24485;
i__24405_24421 = G__24486;
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
}catch (e24487){if((e24487 instanceof ReferenceError))
{var __24488 = e24487;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24487;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__24490 = data;if(G__24490)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__24490.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24490.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24490);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24490);
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
