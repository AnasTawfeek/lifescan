// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj20319 = {};return obj20319;
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
{var str_20322 = node_str.substring(base_idx);while(true){
var next_idx_20323 = dommy.template.next_css_index.call(null,str_20322,1);var frag_20324 = (((next_idx_20323 >= 0))?str_20322.substring(0,next_idx_20323):str_20322);var G__20321_20325 = frag_20324.charAt(0);if(cljs.core._EQ_.call(null,"#",G__20321_20325))
{node.setAttribute("id",frag_20324.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__20321_20325))
{dommy.attrs.add_class_BANG_.call(null,node,frag_20324.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_20324.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_20323 >= 0))
{{
var G__20326 = str_20322.substring(next_idx_20323);
str_20322 = G__20326;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__20332 = data;if(G__20332)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__20332.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__20332.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__20332);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__20332);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__20333_20337 = cljs.core.seq.call(null,data);var chunk__20334_20338 = null;var count__20335_20339 = 0;var i__20336_20340 = 0;while(true){
if((i__20336_20340 < count__20335_20339))
{var child_20341 = cljs.core._nth.call(null,chunk__20334_20338,i__20336_20340);__GT_document_fragment.call(null,result_frag,child_20341);
{
var G__20342 = seq__20333_20337;
var G__20343 = chunk__20334_20338;
var G__20344 = count__20335_20339;
var G__20345 = (i__20336_20340 + 1);
seq__20333_20337 = G__20342;
chunk__20334_20338 = G__20343;
count__20335_20339 = G__20344;
i__20336_20340 = G__20345;
continue;
}
} else
{var temp__4092__auto___20346 = cljs.core.seq.call(null,seq__20333_20337);if(temp__4092__auto___20346)
{var seq__20333_20347__$1 = temp__4092__auto___20346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20333_20347__$1))
{var c__5489__auto___20348 = cljs.core.chunk_first.call(null,seq__20333_20347__$1);{
var G__20349 = cljs.core.chunk_rest.call(null,seq__20333_20347__$1);
var G__20350 = c__5489__auto___20348;
var G__20351 = cljs.core.count.call(null,c__5489__auto___20348);
var G__20352 = 0;
seq__20333_20337 = G__20349;
chunk__20334_20338 = G__20350;
count__20335_20339 = G__20351;
i__20336_20340 = G__20352;
continue;
}
} else
{var child_20353 = cljs.core.first.call(null,seq__20333_20347__$1);__GT_document_fragment.call(null,result_frag,child_20353);
{
var G__20354 = cljs.core.next.call(null,seq__20333_20347__$1);
var G__20355 = null;
var G__20356 = 0;
var G__20357 = 0;
seq__20333_20337 = G__20354;
chunk__20334_20338 = G__20355;
count__20335_20339 = G__20356;
i__20336_20340 = G__20357;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__20359 = data;if(G__20359)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__20359.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__20359.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__20359);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__20359);
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
dommy.template.compound_element = (function compound_element(p__20360){var vec__20380 = p__20360;var tag_name = cljs.core.nth.call(null,vec__20380,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__20380,1,null);var children = cljs.core.nthnext.call(null,vec__20380,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__20382 = maybe_attrs;if(G__20382)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__20382.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__20382.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__20382);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__20382);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__20383_20399 = cljs.core.seq.call(null,attrs);var chunk__20384_20400 = null;var count__20385_20401 = 0;var i__20386_20402 = 0;while(true){
if((i__20386_20402 < count__20385_20401))
{var vec__20387_20403 = cljs.core._nth.call(null,chunk__20384_20400,i__20386_20402);var k_20404 = cljs.core.nth.call(null,vec__20387_20403,0,null);var v_20405 = cljs.core.nth.call(null,vec__20387_20403,1,null);var G__20388_20406 = k_20404;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__20388_20406))
{var seq__20389_20407 = cljs.core.seq.call(null,v_20405);var chunk__20390_20408 = null;var count__20391_20409 = 0;var i__20392_20410 = 0;while(true){
if((i__20392_20410 < count__20391_20409))
{var c_20411 = cljs.core._nth.call(null,chunk__20390_20408,i__20392_20410);dommy.attrs.add_class_BANG_.call(null,n,c_20411);
{
var G__20412 = seq__20389_20407;
var G__20413 = chunk__20390_20408;
var G__20414 = count__20391_20409;
var G__20415 = (i__20392_20410 + 1);
seq__20389_20407 = G__20412;
chunk__20390_20408 = G__20413;
count__20391_20409 = G__20414;
i__20392_20410 = G__20415;
continue;
}
} else
{var temp__4092__auto___20416 = cljs.core.seq.call(null,seq__20389_20407);if(temp__4092__auto___20416)
{var seq__20389_20417__$1 = temp__4092__auto___20416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20389_20417__$1))
{var c__5489__auto___20418 = cljs.core.chunk_first.call(null,seq__20389_20417__$1);{
var G__20419 = cljs.core.chunk_rest.call(null,seq__20389_20417__$1);
var G__20420 = c__5489__auto___20418;
var G__20421 = cljs.core.count.call(null,c__5489__auto___20418);
var G__20422 = 0;
seq__20389_20407 = G__20419;
chunk__20390_20408 = G__20420;
count__20391_20409 = G__20421;
i__20392_20410 = G__20422;
continue;
}
} else
{var c_20423 = cljs.core.first.call(null,seq__20389_20417__$1);dommy.attrs.add_class_BANG_.call(null,n,c_20423);
{
var G__20424 = cljs.core.next.call(null,seq__20389_20417__$1);
var G__20425 = null;
var G__20426 = 0;
var G__20427 = 0;
seq__20389_20407 = G__20424;
chunk__20390_20408 = G__20425;
count__20391_20409 = G__20426;
i__20392_20410 = G__20427;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__20388_20406))
{dommy.attrs.add_class_BANG_.call(null,n,v_20405);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_20404,v_20405);
} else
{}
}
}
{
var G__20428 = seq__20383_20399;
var G__20429 = chunk__20384_20400;
var G__20430 = count__20385_20401;
var G__20431 = (i__20386_20402 + 1);
seq__20383_20399 = G__20428;
chunk__20384_20400 = G__20429;
count__20385_20401 = G__20430;
i__20386_20402 = G__20431;
continue;
}
} else
{var temp__4092__auto___20432 = cljs.core.seq.call(null,seq__20383_20399);if(temp__4092__auto___20432)
{var seq__20383_20433__$1 = temp__4092__auto___20432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20383_20433__$1))
{var c__5489__auto___20434 = cljs.core.chunk_first.call(null,seq__20383_20433__$1);{
var G__20435 = cljs.core.chunk_rest.call(null,seq__20383_20433__$1);
var G__20436 = c__5489__auto___20434;
var G__20437 = cljs.core.count.call(null,c__5489__auto___20434);
var G__20438 = 0;
seq__20383_20399 = G__20435;
chunk__20384_20400 = G__20436;
count__20385_20401 = G__20437;
i__20386_20402 = G__20438;
continue;
}
} else
{var vec__20393_20439 = cljs.core.first.call(null,seq__20383_20433__$1);var k_20440 = cljs.core.nth.call(null,vec__20393_20439,0,null);var v_20441 = cljs.core.nth.call(null,vec__20393_20439,1,null);var G__20394_20442 = k_20440;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__20394_20442))
{var seq__20395_20443 = cljs.core.seq.call(null,v_20441);var chunk__20396_20444 = null;var count__20397_20445 = 0;var i__20398_20446 = 0;while(true){
if((i__20398_20446 < count__20397_20445))
{var c_20447 = cljs.core._nth.call(null,chunk__20396_20444,i__20398_20446);dommy.attrs.add_class_BANG_.call(null,n,c_20447);
{
var G__20448 = seq__20395_20443;
var G__20449 = chunk__20396_20444;
var G__20450 = count__20397_20445;
var G__20451 = (i__20398_20446 + 1);
seq__20395_20443 = G__20448;
chunk__20396_20444 = G__20449;
count__20397_20445 = G__20450;
i__20398_20446 = G__20451;
continue;
}
} else
{var temp__4092__auto___20452__$1 = cljs.core.seq.call(null,seq__20395_20443);if(temp__4092__auto___20452__$1)
{var seq__20395_20453__$1 = temp__4092__auto___20452__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20395_20453__$1))
{var c__5489__auto___20454 = cljs.core.chunk_first.call(null,seq__20395_20453__$1);{
var G__20455 = cljs.core.chunk_rest.call(null,seq__20395_20453__$1);
var G__20456 = c__5489__auto___20454;
var G__20457 = cljs.core.count.call(null,c__5489__auto___20454);
var G__20458 = 0;
seq__20395_20443 = G__20455;
chunk__20396_20444 = G__20456;
count__20397_20445 = G__20457;
i__20398_20446 = G__20458;
continue;
}
} else
{var c_20459 = cljs.core.first.call(null,seq__20395_20453__$1);dommy.attrs.add_class_BANG_.call(null,n,c_20459);
{
var G__20460 = cljs.core.next.call(null,seq__20395_20453__$1);
var G__20461 = null;
var G__20462 = 0;
var G__20463 = 0;
seq__20395_20443 = G__20460;
chunk__20396_20444 = G__20461;
count__20397_20445 = G__20462;
i__20398_20446 = G__20463;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__20394_20442))
{dommy.attrs.add_class_BANG_.call(null,n,v_20441);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_20440,v_20441);
} else
{}
}
}
{
var G__20464 = cljs.core.next.call(null,seq__20383_20433__$1);
var G__20465 = null;
var G__20466 = 0;
var G__20467 = 0;
seq__20383_20399 = G__20464;
chunk__20384_20400 = G__20465;
count__20385_20401 = G__20466;
i__20386_20402 = G__20467;
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
}catch (e20468){if((e20468 instanceof ReferenceError))
{var __20469 = e20468;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20468;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__20471 = data;if(G__20471)
{var bit__5391__auto__ = null;if(cljs.core.truth_((function (){var or__4765__auto__ = bit__5391__auto__;if(cljs.core.truth_(or__4765__auto__))
{return or__4765__auto__;
} else
{return G__20471.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__20471.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__20471);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__20471);
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
