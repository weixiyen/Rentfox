/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();
/*
 * jQuery UI 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.2",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")});return i.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;/*
 * jQuery UI Draggable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.draggable",a.extend({},a.ui.mouse,{_init:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return}this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(b);if(!this.handle){return false}return true},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b);this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(b);this.originalPageX=b.pageX;this.originalPageY=b.pageY;if(c.cursorAt){this._adjustOffsetFromHelper(c.cursorAt)}if(c.containment){this._setContainment()}this._trigger("start",b);this._cacheHelperProportions();if(a.ui.ddmanager&&!c.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,b)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(b,true);return true},_mouseDrag:function(b,d){this.position=this._generatePosition(b);this.positionAbs=this._convertPositionTo("absolute");if(!d){var c=this._uiHash();this._trigger("drag",b,c);this.position=c.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,b)}return false},_mouseStop:function(c){var d=false;if(a.ui.ddmanager&&!this.options.dropBehaviour){d=a.ui.ddmanager.drop(this,c)}if(this.dropped){d=this.dropped;this.dropped=false}if((this.options.revert=="invalid"&&!d)||(this.options.revert=="valid"&&d)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d))){var b=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){b._trigger("stop",c);b._clear()})}else{this._trigger("stop",c);this._clear()}return false},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==b.target){c=true}});return c},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c])):(d.helper=="clone"?this.element.clone():this.element);if(!b.parents("body").length){b.appendTo((d.appendTo=="parent"?this.element[0].parentNode:d.appendTo))}if(b[0]!=this.element[0]&&!(/(fixed|absolute)/).test(b.css("position"))){b.css("position","absolute")}return b},_adjustOffsetFromHelper:function(b){if(b.left!=undefined){this.offset.click.left=b.left+this.margins.left}if(b.right!=undefined){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if(b.top!=undefined){this.offset.click.top=b.top+this.margins.top}if(b.bottom!=undefined){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.element.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)&&e.containment.constructor!=Array){var c=a(e.containment)[0];if(!c){return}var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}else{if(e.containment.constructor==Array){this.containment=e.containment}}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(b,c,d){d=d||this._uiHash();a.ui.plugin.call(this,b,[c,d]);if(b=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return a.widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(b){return{helper:this.helper,position:this.position,absolutePosition:this.positionAbs,offset:this.positionAbs}}}));a.extend(a.ui.draggable,{version:"1.7.2",eventPrefix:"drag",defaults:{addClasses:true,appendTo:"parent",axis:false,cancel:":input,option",connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,delay:0,distance:1,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false}});a.ui.plugin.add("draggable","connectToSortable",{start:function(c,e){var d=a(this).data("draggable"),f=d.options,b=a.extend({},e,{item:d.element});d.sortables=[];a(f.connectToSortable).each(function(){var g=a.data(this,"sortable");if(g&&!g.options.disabled){d.sortables.push({instance:g,shouldRevert:g.options.revert});g._refreshItems();g._trigger("activate",c,b)}})},stop:function(c,e){var d=a(this).data("draggable"),b=a.extend({},e,{item:d.element});a.each(d.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;d.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(c);this.instance.options.helper=this.instance.options._helper;if(d.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",c,b)}})},drag:function(c,f){var e=a(this).data("draggable"),b=this;var d=function(i){var n=this.offset.click.top,m=this.offset.click.left;var g=this.positionAbs.top,k=this.positionAbs.left;var j=i.height,l=i.width;var p=i.top,h=i.left;return a.ui.isOver(g+n,k+m,p,h,j,l)};a.each(e.sortables,function(g){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(b).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return f.helper[0]};c.target=this.instance.currentItem[0];this.instance._mouseCapture(c,true);this.instance._mouseStart(c,true,true);this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;e._trigger("toSortable",c);e.dropped=this.instance.element;e.currentItem=e.element;this.instance.fromOutside=e}if(this.instance.currentItem){this.instance._mouseDrag(c)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",c,this.instance._uiHash(this.instance));this.instance._mouseStop(c,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}e._trigger("fromSortable",c);e.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(c,d){var b=a("body"),e=a(this).data("draggable").options;if(b.css("cursor")){e._cursor=b.css("cursor")}b.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._cursor){a("body").css("cursor",d._cursor)}}});a.ui.plugin.add("draggable","iframeFix",{start:function(b,c){var d=a(this).data("draggable").options;a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")})},stop:function(b,c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});a.ui.plugin.add("draggable","opacity",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("opacity")){e._opacity=b.css("opacity")}b.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._opacity){a(c.helper).css("opacity",d._opacity)}}});a.ui.plugin.add("draggable","scroll",{start:function(c,d){var b=a(this).data("draggable");if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){b.overflowOffset=b.scrollParent.offset()}},drag:function(d,e){var c=a(this).data("draggable"),f=c.options,b=false;if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){if(!f.axis||f.axis!="x"){if((c.overflowOffset.top+c.scrollParent[0].offsetHeight)-d.pageY<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop+f.scrollSpeed}else{if(d.pageY-c.overflowOffset.top<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop-f.scrollSpeed}}}if(!f.axis||f.axis!="y"){if((c.overflowOffset.left+c.scrollParent[0].offsetWidth)-d.pageX<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft+f.scrollSpeed}else{if(d.pageX-c.overflowOffset.left<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft-f.scrollSpeed}}}}else{if(!f.axis||f.axis!="x"){if(d.pageY-a(document).scrollTop()<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed)}else{if(a(window).height()-(d.pageY-a(document).scrollTop())<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed)}}}if(!f.axis||f.axis!="y"){if(d.pageX-a(document).scrollLeft()<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed)}else{if(a(window).width()-(d.pageX-a(document).scrollLeft())<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)}}}}if(b!==false&&a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(c,d)}}});a.ui.plugin.add("draggable","snap",{start:function(c,d){var b=a(this).data("draggable"),e=b.options;b.snapElements=[];a(e.snap.constructor!=String?(e.snap.items||":data(draggable)"):e.snap).each(function(){var g=a(this);var f=g.offset();if(this!=b.element[0]){b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:f.top,left:f.left})}})},drag:function(u,p){var g=a(this).data("draggable"),q=g.options;var y=q.snapTolerance;var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;for(var v=g.snapElements.length-1;v>=0;v--){var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=false;continue}if(q.snapMode!="inner"){var c=Math.abs(m-e)<=y;var z=Math.abs(A-f)<=y;var j=Math.abs(s-w)<=y;var k=Math.abs(n-x)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left}}var h=(c||z||j||k);if(q.snapMode!="outer"){var c=Math.abs(m-f)<=y;var z=Math.abs(A-e)<=y;var j=Math.abs(s-x)<=y;var k=Math.abs(n-w)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=(c||z||j||k||h)}}});a.ui.plugin.add("draggable","stack",{start:function(b,c){var e=a(this).data("draggable").options;var d=a.makeArray(a(e.stack.group)).sort(function(g,f){return(parseInt(a(g).css("zIndex"),10)||e.stack.min)-(parseInt(a(f).css("zIndex"),10)||e.stack.min)});a(d).each(function(f){this.style.zIndex=e.stack.min+f});this[0].style.zIndex=e.stack.min+d.length}});a.ui.plugin.add("draggable","zIndex",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("zIndex")){e._zIndex=b.css("zIndex")}b.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._zIndex){a(c.helper).css("zIndex",d._zIndex)}}})})(jQuery);;/*
 * jQuery UI Droppable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 */
(function(a){a.widget("ui.droppable",{_init:function(){var c=this.options,b=c.accept;this.isover=0;this.isout=1;this.options.accept=this.options.accept&&a.isFunction(this.options.accept)?this.options.accept:function(e){return e.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};a.ui.ddmanager.droppables[this.options.scope]=a.ui.ddmanager.droppables[this.options.scope]||[];a.ui.ddmanager.droppables[this.options.scope].push(this);(this.options.addClasses&&this.element.addClass("ui-droppable"))},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++){if(b[c]==this){b.splice(c,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable")},_setData:function(b,c){if(b=="accept"){this.options.accept=c&&a.isFunction(c)?c:function(e){return e.is(c)}}else{a.widget.prototype._setData.apply(this,arguments)}},_activate:function(c){var b=a.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}(b&&this._trigger("activate",c,this.ui(b)))},_deactivate:function(c){var b=a.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}(b&&this._trigger("deactivate",c,this.ui(b)))},_over:function(c){var b=a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return}if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",c,this.ui(b))}},_out:function(c){var b=a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return}if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",c,this.ui(b))}},_drop:function(c,d){var b=d||a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return false}var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var f=a.data(this,"droppable");if(f.options.greedy&&a.ui.intersect(b,a.extend(f,{offset:f.element.offset()}),f.options.tolerance)){e=true;return false}});if(e){return false}if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",c,this.ui(b));return this.element}return false},ui:function(b){return{draggable:(b.currentItem||b.element),helper:b.helper,position:b.position,absolutePosition:b.positionAbs,offset:b.positionAbs}}});a.extend(a.ui.droppable,{version:"1.7.2",eventPrefix:"drop",defaults:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"}});a.ui.intersect=function(q,j,o){if(!j.offset){return false}var e=(q.positionAbs||q.position.absolute).left,d=e+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height;var g=j.offset.left,c=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;switch(o){case"fit":return(g<e&&d<c&&p<n&&m<k);break;case"intersect":return(g<e+(q.helperProportions.width/2)&&d-(q.helperProportions.width/2)<c&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);break;case"pointer":var h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left),i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top),f=a.ui.isOver(i,h,p,g,j.proportions.height,j.proportions.width);return f;break;case"touch":return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((e>=g&&e<=c)||(d>=g&&d<=c)||(e<g&&d>c));break;default:return false;break}};a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,g){var b=a.ui.ddmanager.droppables[e.options.scope];var f=g?g.type:null;var h=(e.currentItem||e.element).find(":data(droppable)").andSelf();droppablesLoop:for(var d=0;d<b.length;d++){if(b[d].options.disabled||(e&&!b[d].options.accept.call(b[d].element[0],(e.currentItem||e.element)))){continue}for(var c=0;c<h.length;c++){if(h[c]==b[d].element[0]){b[d].proportions.height=0;continue droppablesLoop}}b[d].visible=b[d].element.css("display")!="none";if(!b[d].visible){continue}b[d].offset=b[d].element.offset();b[d].proportions={width:b[d].element[0].offsetWidth,height:b[d].element[0].offsetHeight};if(f=="mousedown"){b[d]._activate.call(b[d],g)}}},drop:function(b,c){var d=false;a.each(a.ui.ddmanager.droppables[b.options.scope],function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)){d=this._drop.call(this,c)}if(!this.options.disabled&&this.visible&&this.options.accept.call(this.element[0],(b.currentItem||b.element))){this.isout=1;this.isover=0;this._deactivate.call(this,c)}});return d},drag:function(b,c){if(b.options.refreshPositions){a.ui.ddmanager.prepareOffsets(b,c)}a.each(a.ui.ddmanager.droppables[b.options.scope],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var e=a.ui.intersect(b,this,this.options.tolerance);var g=!e&&this.isover==1?"isout":(e&&this.isover==0?"isover":null);if(!g){return}var f;if(this.options.greedy){var d=this.element.parents(":data(droppable):eq(0)");if(d.length){f=a.data(d[0],"droppable");f.greedyChild=(g=="isover"?1:0)}}if(f&&g=="isover"){f.isover=0;f.isout=1;f._out.call(f,c)}this[g]=1;this[g=="isout"?"isover":"isout"]=0;this[g=="isover"?"_over":"_out"].call(this,c);if(f&&g=="isout"){f.isout=0;f.isover=1;f._over.call(f,c)}})}}})(jQuery);;/*
 * jQuery UI Resizable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	ui.core.js
 */
(function(c){c.widget("ui.resizable",c.extend({},c.ui.mouse,{_init:function(){var e=this,j=this.options;this.element.addClass("ui-resizable");c.extend(this,{_aspectRatio:!!(j.aspectRatio),aspectRatio:j.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:j.helper||j.ghost||j.animate?j.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){if(/relative/.test(this.element.css("position"))&&c.browser.opera){this.element.css({position:"relative",top:"auto",left:"auto"})}this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=j.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"}var k=this.handles.split(",");this.handles={};for(var f=0;f<k.length;f++){var h=c.trim(k[f]),d="ui-resizable-"+h;var g=c('<div class="ui-resizable-handle '+d+'"></div>');if(/sw|se|ne|nw/.test(h)){g.css({zIndex:++j.zIndex})}if("se"==h){g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[h]=".ui-resizable-"+h;this.element.append(g)}}this._renderAxis=function(p){p=p||this.element;for(var m in this.handles){if(this.handles[m].constructor==String){this.handles[m]=c(this.handles[m],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var n=c(this.handles[m],this.element),o=0;o=/sw|ne|nw|se|n|s/.test(m)?n.outerHeight():n.outerWidth();var l=["padding",/ne|nw|n/.test(m)?"Top":/se|sw|s/.test(m)?"Bottom":/^e$/.test(m)?"Right":"Left"].join("");p.css(l,o);this._proportionallyResize()}if(!c(this.handles[m]).length){continue}}};this._renderAxis(this.element);this._handles=c(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!e.resizing){if(this.className){var i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}e.axis=i&&i[1]?i[1]:"se"}});if(j.autoHide){this._handles.hide();c(this.element).addClass("ui-resizable-autohide").hover(function(){c(this).removeClass("ui-resizable-autohide");e._handles.show()},function(){if(!e.resizing){c(this).addClass("ui-resizable-autohide");e._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var d=function(f){c(f).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){d(this.element);var e=this.element;e.parent().append(this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")})).end().remove()}this.originalElement.css("resize",this.originalResizeStyle);d(this.originalElement)},_mouseCapture:function(e){var f=false;for(var d in this.handles){if(c(this.handles[d])[0]==e.target){f=true}}return this.options.disabled||!!f},_mouseStart:function(f){var i=this.options,e=this.element.position(),d=this.element;this.resizing=true;this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};if(d.is(".ui-draggable")||(/absolute/).test(d.css("position"))){d.css({position:"absolute",top:e.top,left:e.left})}if(c.browser.opera&&(/relative/).test(d.css("position"))){d.css({position:"relative",top:"auto",left:"auto"})}this._renderProxy();var j=b(this.helper.css("left")),g=b(this.helper.css("top"));if(i.containment){j+=c(i.containment).scrollLeft()||0;g+=c(i.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:j,top:g};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:j,top:g};this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:f.pageX,top:f.pageY};this.aspectRatio=(typeof i.aspectRatio=="number")?i.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var h=c(".ui-resizable-"+this.axis).css("cursor");c("body").css("cursor",h=="auto"?this.axis+"-resize":h);d.addClass("ui-resizable-resizing");this._propagate("start",f);return true},_mouseDrag:function(d){var g=this.helper,f=this.options,l={},p=this,i=this.originalMousePosition,m=this.axis;var q=(d.pageX-i.left)||0,n=(d.pageY-i.top)||0;var h=this._change[m];if(!h){return false}var k=h.apply(this,[d,q,n]),j=c.browser.msie&&c.browser.version<7,e=this.sizeDiff;if(this._aspectRatio||d.shiftKey){k=this._updateRatio(k,d)}k=this._respectSize(k,d);this._propagate("resize",d);g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}this._updateCache(k);this._trigger("resize",d,this.ui());return false},_mouseStop:function(g){this.resizing=false;var h=this.options,l=this;if(this._helper){var f=this._proportionallyResizeElements,d=f.length&&(/textarea/i).test(f[0].nodeName),e=d&&c.ui.hasScroll(f[0],"left")?0:l.sizeDiff.height,j=d?0:l.sizeDiff.width;var m={width:(l.size.width-j),height:(l.size.height-e)},i=(parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left))||null,k=(parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top))||null;if(!h.animate){this.element.css(c.extend(m,{top:k,left:i}))}l.helper.height(l.size.height);l.helper.width(l.size.width);if(this._helper&&!h.animate){this._proportionallyResize()}}c("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",g);if(this._helper){this.helper.remove()}return false},_updateCache:function(d){var e=this.options;this.offset=this.helper.offset();if(a(d.left)){this.position.left=d.left}if(a(d.top)){this.position.top=d.top}if(a(d.height)){this.size.height=d.height}if(a(d.width)){this.size.width=d.width}},_updateRatio:function(g,f){var h=this.options,i=this.position,e=this.size,d=this.axis;if(g.height){g.width=(e.height*this.aspectRatio)}else{if(g.width){g.height=(e.width/this.aspectRatio)}}if(d=="sw"){g.left=i.left+(e.width-g.width);g.top=null}if(d=="nw"){g.top=i.top+(e.height-g.height);g.left=i.left+(e.width-g.width)}return g},_respectSize:function(k,f){var i=this.helper,h=this.options,q=this._aspectRatio||f.shiftKey,p=this.axis,s=a(k.width)&&h.maxWidth&&(h.maxWidth<k.width),l=a(k.height)&&h.maxHeight&&(h.maxHeight<k.height),g=a(k.width)&&h.minWidth&&(h.minWidth>k.width),r=a(k.height)&&h.minHeight&&(h.minHeight>k.height);if(g){k.width=h.minWidth}if(r){k.height=h.minHeight}if(s){k.width=h.maxWidth}if(l){k.height=h.maxHeight}var e=this.originalPosition.left+this.originalSize.width,n=this.position.top+this.size.height;var j=/sw|nw|w/.test(p),d=/nw|ne|n/.test(p);if(g&&j){k.left=e-h.minWidth}if(s&&j){k.left=e-h.maxWidth}if(r&&d){k.top=n-h.minHeight}if(l&&d){k.top=n-h.maxHeight}var m=!k.width&&!k.height;if(m&&!k.left&&k.top){k.top=null}else{if(m&&!k.top&&k.left){k.left=null}}return k},_proportionallyResize:function(){var j=this.options;if(!this._proportionallyResizeElements.length){return}var f=this.helper||this.element;for(var e=0;e<this._proportionallyResizeElements.length;e++){var g=this._proportionallyResizeElements[e];if(!this.borderDif){var d=[g.css("borderTopWidth"),g.css("borderRightWidth"),g.css("borderBottomWidth"),g.css("borderLeftWidth")],h=[g.css("paddingTop"),g.css("paddingRight"),g.css("paddingBottom"),g.css("paddingLeft")];this.borderDif=c.map(d,function(k,m){var l=parseInt(k,10)||0,n=parseInt(h[m],10)||0;return l+n})}if(c.browser.msie&&!(!(c(f).is(":hidden")||c(f).parents(":hidden").length))){continue}g.css({height:(f.height()-this.borderDif[0]-this.borderDif[2])||0,width:(f.width()-this.borderDif[1]-this.borderDif[3])||0})}},_renderProxy:function(){var e=this.element,h=this.options;this.elementOffset=e.offset();if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');var d=c.browser.msie&&c.browser.version<7,f=(d?1:0),g=(d?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++h.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(f,e,d){return{width:this.originalSize.width+e}},w:function(g,e,d){var i=this.options,f=this.originalSize,h=this.originalPosition;return{left:h.left+e,width:f.width-e}},n:function(g,e,d){var i=this.options,f=this.originalSize,h=this.originalPosition;return{top:h.top+d,height:f.height-d}},s:function(f,e,d){return{height:this.originalSize.height+d}},se:function(f,e,d){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[f,e,d]))},sw:function(f,e,d){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[f,e,d]))},ne:function(f,e,d){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[f,e,d]))},nw:function(f,e,d){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[f,e,d]))}},_propagate:function(e,d){c.ui.plugin.call(this,e,[d,this.ui()]);(e!="resize"&&this._trigger(e,d,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}));c.extend(c.ui.resizable,{version:"1.7.2",eventPrefix:"resize",defaults:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,cancel:":input,option",containment:false,delay:0,distance:1,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000}});c.ui.plugin.add("resizable","alsoResize",{start:function(e,f){var d=c(this).data("resizable"),g=d.options;_store=function(h){c(h).each(function(){c(this).data("resizable-alsoresize",{width:parseInt(c(this).width(),10),height:parseInt(c(this).height(),10),left:parseInt(c(this).css("left"),10),top:parseInt(c(this).css("top"),10)})})};if(typeof(g.alsoResize)=="object"&&!g.alsoResize.parentNode){if(g.alsoResize.length){g.alsoResize=g.alsoResize[0];_store(g.alsoResize)}else{c.each(g.alsoResize,function(h,i){_store(h)})}}else{_store(g.alsoResize)}},resize:function(f,h){var e=c(this).data("resizable"),i=e.options,g=e.originalSize,k=e.originalPosition;var j={height:(e.size.height-g.height)||0,width:(e.size.width-g.width)||0,top:(e.position.top-k.top)||0,left:(e.position.left-k.left)||0},d=function(l,m){c(l).each(function(){var p=c(this),q=c(this).data("resizable-alsoresize"),o={},n=m&&m.length?m:["width","height","top","left"];c.each(n||["width","height","top","left"],function(r,t){var s=(q[t]||0)+(j[t]||0);if(s&&s>=0){o[t]=s||null}});if(/relative/.test(p.css("position"))&&c.browser.opera){e._revertToRelativePosition=true;p.css({position:"absolute",top:"auto",left:"auto"})}p.css(o)})};if(typeof(i.alsoResize)=="object"&&!i.alsoResize.nodeType){c.each(i.alsoResize,function(l,m){d(l,m)})}else{d(i.alsoResize)}},stop:function(e,f){var d=c(this).data("resizable");if(d._revertToRelativePosition&&c.browser.opera){d._revertToRelativePosition=false;el.css({position:"relative"})}c(this).removeData("resizable-alsoresize-start")}});c.ui.plugin.add("resizable","animate",{stop:function(h,m){var n=c(this).data("resizable"),i=n.options;var g=n._proportionallyResizeElements,d=g.length&&(/textarea/i).test(g[0].nodeName),e=d&&c.ui.hasScroll(g[0],"left")?0:n.sizeDiff.height,k=d?0:n.sizeDiff.width;var f={width:(n.size.width-k),height:(n.size.height-e)},j=(parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left))||null,l=(parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top))||null;n.element.animate(c.extend(f,l&&j?{top:l,left:j}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var o={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};if(g&&g.length){c(g[0]).css({width:o.width,height:o.height})}n._updateCache(o);n._propagate("resize",h)}})}});c.ui.plugin.add("resizable","containment",{start:function(e,q){var s=c(this).data("resizable"),i=s.options,k=s.element;var f=i.containment,j=(f instanceof c)?f.get(0):(/parent/.test(f))?k.parent().get(0):f;if(!j){return}s.containerElement=c(j);if(/document/.test(f)||f==document){s.containerOffset={left:0,top:0};s.containerPosition={left:0,top:0};s.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}}else{var m=c(j),h=[];c(["Top","Right","Left","Bottom"]).each(function(p,o){h[p]=b(m.css("padding"+o))});s.containerOffset=m.offset();s.containerPosition=m.position();s.containerSize={height:(m.innerHeight()-h[3]),width:(m.innerWidth()-h[1])};var n=s.containerOffset,d=s.containerSize.height,l=s.containerSize.width,g=(c.ui.hasScroll(j,"left")?j.scrollWidth:l),r=(c.ui.hasScroll(j)?j.scrollHeight:d);s.parentData={element:j,left:n.left,top:n.top,width:g,height:r}}},resize:function(f,p){var s=c(this).data("resizable"),h=s.options,e=s.containerSize,n=s.containerOffset,l=s.size,m=s.position,q=s._aspectRatio||f.shiftKey,d={top:0,left:0},g=s.containerElement;if(g[0]!=document&&(/static/).test(g.css("position"))){d=n}if(m.left<(s._helper?n.left:0)){s.size.width=s.size.width+(s._helper?(s.position.left-n.left):(s.position.left-d.left));if(q){s.size.height=s.size.width/h.aspectRatio}s.position.left=h.helper?n.left:0}if(m.top<(s._helper?n.top:0)){s.size.height=s.size.height+(s._helper?(s.position.top-n.top):s.position.top);if(q){s.size.width=s.size.height*h.aspectRatio}s.position.top=s._helper?n.top:0}s.offset.left=s.parentData.left+s.position.left;s.offset.top=s.parentData.top+s.position.top;var k=Math.abs((s._helper?s.offset.left-d.left:(s.offset.left-d.left))+s.sizeDiff.width),r=Math.abs((s._helper?s.offset.top-d.top:(s.offset.top-n.top))+s.sizeDiff.height);var j=s.containerElement.get(0)==s.element.parent().get(0),i=/relative|absolute/.test(s.containerElement.css("position"));if(j&&i){k-=s.parentData.left}if(k+s.size.width>=s.parentData.width){s.size.width=s.parentData.width-k;if(q){s.size.height=s.size.width/s.aspectRatio}}if(r+s.size.height>=s.parentData.height){s.size.height=s.parentData.height-r;if(q){s.size.width=s.size.height*s.aspectRatio}}},stop:function(e,m){var p=c(this).data("resizable"),f=p.options,k=p.position,l=p.containerOffset,d=p.containerPosition,g=p.containerElement;var i=c(p.helper),q=i.offset(),n=i.outerWidth()-p.sizeDiff.width,j=i.outerHeight()-p.sizeDiff.height;if(p._helper&&!f.animate&&(/relative/).test(g.css("position"))){c(this).css({left:q.left-d.left-l.left,width:n,height:j})}if(p._helper&&!f.animate&&(/static/).test(g.css("position"))){c(this).css({left:q.left-d.left-l.left,width:n,height:j})}}});c.ui.plugin.add("resizable","ghost",{start:function(f,g){var d=c(this).data("resizable"),h=d.options,e=d.size;d.ghost=d.originalElement.clone();d.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof h.ghost=="string"?h.ghost:"");d.ghost.appendTo(d.helper)},resize:function(e,f){var d=c(this).data("resizable"),g=d.options;if(d.ghost){d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})}},stop:function(e,f){var d=c(this).data("resizable"),g=d.options;if(d.ghost&&d.helper){d.helper.get(0).removeChild(d.ghost.get(0))}}});c.ui.plugin.add("resizable","grid",{resize:function(d,l){var n=c(this).data("resizable"),g=n.options,j=n.size,h=n.originalSize,i=n.originalPosition,m=n.axis,k=g._aspectRatio||d.shiftKey;g.grid=typeof g.grid=="number"?[g.grid,g.grid]:g.grid;var f=Math.round((j.width-h.width)/(g.grid[0]||1))*(g.grid[0]||1),e=Math.round((j.height-h.height)/(g.grid[1]||1))*(g.grid[1]||1);if(/^(se|s|e)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e}else{if(/^(ne)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e;n.position.top=i.top-e}else{if(/^(sw)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e;n.position.left=i.left-f}else{n.size.width=h.width+f;n.size.height=h.height+e;n.position.top=i.top-e;n.position.left=i.left-f}}}}});var b=function(d){return parseInt(d,10)||0};var a=function(d){return !isNaN(parseInt(d,10))}})(jQuery);;/*
 * jQuery UI Selectable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.selectable",a.extend({},a.ui.mouse,{_init:function(){var b=this;this.element.addClass("ui-selectable");this.dragged=false;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]);c.each(function(){var d=a(this);var e=d.offset();a.data(this,"selectable-item",{element:this,$element:d,left:e.left,top:e.top,right:e.left+d.outerWidth(),bottom:e.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})})};this.refresh();this.selectees=c.addClass("ui-selectee");this._mouseInit();this.helper=a(document.createElement("div")).css({border:"1px dotted black"}).addClass("ui-selectable-helper")},destroy:function(){this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy()},_mouseStart:function(d){var b=this;this.opos=[d.pageX,d.pageY];if(this.options.disabled){return}var c=this.options;this.selectees=a(c.filter,this.element[0]);this._trigger("start",d);a(c.appendTo).append(this.helper);this.helper.css({"z-index":100,position:"absolute",left:d.clientX,top:d.clientY,width:0,height:0});if(c.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var e=a.data(this,"selectable-item");e.startselected=true;if(!d.metaKey){e.$element.removeClass("ui-selected");e.selected=false;e.$element.addClass("ui-unselecting");e.unselecting=true;b._trigger("unselecting",d,{unselecting:e.element})}});a(d.target).parents().andSelf().each(function(){var e=a.data(this,"selectable-item");if(e){e.$element.removeClass("ui-unselecting").addClass("ui-selecting");e.unselecting=false;e.selecting=true;e.selected=true;b._trigger("selecting",d,{selecting:e.element});return false}})},_mouseDrag:function(i){var c=this;this.dragged=true;if(this.options.disabled){return}var e=this.options;var d=this.opos[0],h=this.opos[1],b=i.pageX,g=i.pageY;if(d>b){var f=b;b=d;d=f}if(h>g){var f=g;g=h;h=f}this.helper.css({left:d,top:h,width:b-d,height:g-h});this.selectees.each(function(){var j=a.data(this,"selectable-item");if(!j||j.element==c.element[0]){return}var k=false;if(e.tolerance=="touch"){k=(!(j.left>b||j.right<d||j.top>g||j.bottom<h))}else{if(e.tolerance=="fit"){k=(j.left>d&&j.right<b&&j.top>h&&j.bottom<g)}}if(k){if(j.selected){j.$element.removeClass("ui-selected");j.selected=false}if(j.unselecting){j.$element.removeClass("ui-unselecting");j.unselecting=false}if(!j.selecting){j.$element.addClass("ui-selecting");j.selecting=true;c._trigger("selecting",i,{selecting:j.element})}}else{if(j.selecting){if(i.metaKey&&j.startselected){j.$element.removeClass("ui-selecting");j.selecting=false;j.$element.addClass("ui-selected");j.selected=true}else{j.$element.removeClass("ui-selecting");j.selecting=false;if(j.startselected){j.$element.addClass("ui-unselecting");j.unselecting=true}c._trigger("unselecting",i,{unselecting:j.element})}}if(j.selected){if(!i.metaKey&&!j.startselected){j.$element.removeClass("ui-selected");j.selected=false;j.$element.addClass("ui-unselecting");j.unselecting=true;c._trigger("unselecting",i,{unselecting:j.element})}}}});return false},_mouseStop:function(d){var b=this;this.dragged=false;var c=this.options;a(".ui-unselecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");e.$element.removeClass("ui-unselecting");e.unselecting=false;e.startselected=false;b._trigger("unselected",d,{unselected:e.element})});a(".ui-selecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");e.$element.removeClass("ui-selecting").addClass("ui-selected");e.selecting=false;e.selected=true;e.startselected=true;b._trigger("selected",d,{selected:e.element})});this._trigger("stop",d);this.helper.remove();return false}}));a.extend(a.ui.selectable,{version:"1.7.2",defaults:{appendTo:"body",autoRefresh:true,cancel:":input,option",delay:0,distance:0,filter:"*",tolerance:"touch"}})})(jQuery);;/*
 * jQuery UI Sortable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.sortable",a.extend({},a.ui.mouse,{_init:function(){var b=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?(/left|right/).test(this.items[0].item.css("float")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--){this.items[b].item.removeData("sortable-item")}},_mouseCapture:function(e,f){if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(e);var d=null,c=this,b=a(e.target).parents().each(function(){if(a.data(this,"sortable-item")==c){d=a(this);return false}});if(a.data(e.target,"sortable-item")==c){d=a(e.target)}if(!d){return false}if(this.options.handle&&!f){var g=false;a(this.options.handle,d).find("*").andSelf().each(function(){if(this==e.target){g=true}});if(!g){return false}}this.currentItem=d;this._removeCurrentsFromItems();return true},_mouseStart:function(e,f,b){var g=this.options,c=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(e);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(e);this.originalPageX=e.pageX;this.originalPageY=e.pageY;if(g.cursorAt){this._adjustOffsetFromHelper(g.cursorAt)}this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(g.containment){this._setContainment()}if(g.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")}a("body").css("cursor",g.cursor)}if(g.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",g.opacity)}if(g.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",g.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",e,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!b){for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("activate",e,c._uiHash(this))}}if(a.ui.ddmanager){a.ui.ddmanager.current=this}if(a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,e)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(e);return true},_mouseDrag:function(f){this.position=this._generatePosition(f);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var g=this.options,b=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-f.pageY<g.scrollSensitivity){this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop+g.scrollSpeed}else{if(f.pageY-this.overflowOffset.top<g.scrollSensitivity){this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop-g.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-f.pageX<g.scrollSensitivity){this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft+g.scrollSpeed}else{if(f.pageX-this.overflowOffset.left<g.scrollSensitivity){this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft-g.scrollSpeed}}}else{if(f.pageY-a(document).scrollTop()<g.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed)}else{if(a(window).height()-(f.pageY-a(document).scrollTop())<g.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)}}if(f.pageX-a(document).scrollLeft()<g.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed)}else{if(a(window).width()-(f.pageX-a(document).scrollLeft())<g.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed)}}}if(b!==false&&a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,f)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d],c=e.item[0],h=this._intersectsWithPointer(e);if(!h){continue}if(c!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=c&&!a.ui.contains(this.placeholder[0],c)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],c):true)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(e)){this._rearrange(f,e)}else{break}this._trigger("change",f,this._uiHash());break}}this._contactContainers(f);if(a.ui.ddmanager){a.ui.ddmanager.drag(this,f)}this._trigger("sort",f,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(c,d){if(!c){return}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,c)}if(this.options.revert){var b=this;var e=b.placeholder.offset();b.reverting=true;a(this.helper).animate({left:e.left-this.offset.parent.left-b.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-b.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){b._clear(c)})}else{this._clear(c,d)}return false},cancel:function(){var b=this;if(this.dragging){this._mouseUp();if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("deactivate",null,b._uiHash(this));if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,b._uiHash(this));this.containers[c].containerCache.over=0}}}if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)}else{a(this.domPosition.parent).prepend(this.currentItem)}return true},serialize:function(d){var b=this._getItemsAsjQuery(d&&d.connected);var c=[];d=d||{};a(b).each(function(){var e=(a(d.item||this).attr(d.attribute||"id")||"").match(d.expression||(/(.+)[-=_](.+)/));if(e){c.push((d.key||e[1]+"[]")+"="+(d.key&&d.expression?e[1]:e[2]))}});return c.join("&")},toArray:function(d){var b=this._getItemsAsjQuery(d&&d.connected);var c=[];d=d||{};b.each(function(){c.push(a(d.item||this).attr(d.attribute||"id")||"")});return c},_intersectsWith:function(m){var e=this.positionAbs.left,d=e+this.helperProportions.width,k=this.positionAbs.top,j=k+this.helperProportions.height;var f=m.left,c=f+m.width,n=m.top,i=n+m.height;var o=this.offset.click.top,h=this.offset.click.left;var g=(k+o)>n&&(k+o)<i&&(e+h)>f&&(e+h)<c;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>m[this.floating?"width":"height"])){return g}else{return(f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&n<k+(this.helperProportions.height/2)&&j-(this.helperProportions.height/2)<i)}},_intersectsWithPointer:function(d){var e=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height),c=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width),g=e&&c,b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(!g){return false}return this.floating?(((f&&f=="right")||b=="down")?2:1):(b&&(b=="down"?2:1))},_intersectsWithSides:function(e){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+(e.height/2),e.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+(e.width/2),e.width),b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(this.floating&&f){return((f=="right"&&d)||(f=="left"&&!d))}else{return b&&((b=="down"&&c)||(b=="up"&&!c))}},_getDragVerticalDirection:function(){var b=this.positionAbs.top-this.lastPositionAbs.top;return b!=0&&(b>0?"down":"up")},_getDragHorizontalDirection:function(){var b=this.positionAbs.left-this.lastPositionAbs.left;return b!=0&&(b>0?"right":"left")},refresh:function(b){this._refreshItems(b);this.refreshPositions()},_connectWith:function(){var b=this.options;return b.connectWith.constructor==String?[b.connectWith]:b.connectWith},_getItemsAsjQuery:function(b){var l=this;var g=[];var e=[];var h=this._connectWith();if(h&&b){for(var d=h.length-1;d>=0;d--){var k=a(h[d]);for(var c=k.length-1;c>=0;c--){var f=a.data(k[c],"sortable");if(f&&f!=this&&!f.options.disabled){e.push([a.isFunction(f.options.items)?f.options.items.call(f.element):a(f.options.items,f.element).not(".ui-sortable-helper"),f])}}}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper"),this]);for(var d=e.length-1;d>=0;d--){e[d][0].each(function(){g.push(this)})}return a(g)},_removeCurrentsFromItems:function(){var d=this.currentItem.find(":data(sortable-item)");for(var c=0;c<this.items.length;c++){for(var b=0;b<d.length;b++){if(d[b]==this.items[c].item[0]){this.items.splice(c,1)}}}},_refreshItems:function(b){this.items=[];this.containers=[this];var h=this.items;var p=this;var f=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]];var l=this._connectWith();if(l){for(var e=l.length-1;e>=0;e--){var m=a(l[e]);for(var d=m.length-1;d>=0;d--){var g=a.data(m[d],"sortable");if(g&&g!=this&&!g.options.disabled){f.push([a.isFunction(g.options.items)?g.options.items.call(g.element[0],b,{item:this.currentItem}):a(g.options.items,g.element),g]);this.containers.push(g)}}}}for(var e=f.length-1;e>=0;e--){var k=f[e][1];var c=f[e][0];for(var d=0,n=c.length;d<n;d++){var o=a(c[d]);o.data("sortable-item",k);h.push({item:o,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d];if(e.instance!=this.currentContainer&&this.currentContainer&&e.item[0]!=this.currentItem[0]){continue}var c=this.options.toleranceElement?a(this.options.toleranceElement,e.item):e.item;if(!b){e.width=c.outerWidth();e.height=c.outerHeight()}var f=c.offset();e.left=f.left;e.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var d=this.containers.length-1;d>=0;d--){var f=this.containers[d].element.offset();this.containers[d].containerCache.left=f.left;this.containers[d].containerCache.top=f.top;this.containers[d].containerCache.width=this.containers[d].element.outerWidth();this.containers[d].containerCache.height=this.containers[d].element.outerHeight()}}},_createPlaceholder:function(d){var b=d||this,e=b.options;if(!e.placeholder||e.placeholder.constructor==String){var c=e.placeholder;e.placeholder={element:function(){var f=a(document.createElement(b.currentItem[0].nodeName)).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!c){f.style.visibility="hidden"}return f},update:function(f,g){if(c&&!e.forcePlaceholderSize){return}if(!g.height()){g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10))}if(!g.width()){g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}}}}b.placeholder=a(e.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);e.placeholder.update(b,b.placeholder)},_contactContainers:function(d){for(var c=this.containers.length-1;c>=0;c--){if(this._intersectsWith(this.containers[c].containerCache)){if(!this.containers[c].containerCache.over){if(this.currentContainer!=this.containers[c]){var h=10000;var g=null;var e=this.positionAbs[this.containers[c].floating?"left":"top"];for(var b=this.items.length-1;b>=0;b--){if(!a.ui.contains(this.containers[c].element[0],this.items[b].item[0])){continue}var f=this.items[b][this.containers[c].floating?"left":"top"];if(Math.abs(f-e)<h){h=Math.abs(f-e);g=this.items[b]}}if(!g&&!this.options.dropOnEmpty){continue}this.currentContainer=this.containers[c];g?this._rearrange(d,g,null,true):this._rearrange(d,null,this.containers[c].element,true);this._trigger("change",d,this._uiHash());this.containers[c]._trigger("change",d,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder)}this.containers[c]._trigger("over",d,this._uiHash(this));this.containers[c].containerCache.over=1}}else{if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",d,this._uiHash(this));this.containers[c].containerCache.over=0}}}},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c,this.currentItem])):(d.helper=="clone"?this.currentItem.clone():this.currentItem);if(!b.parents("body").length){a(d.appendTo!="parent"?d.appendTo:this.currentItem[0].parentNode)[0].appendChild(b[0])}if(b[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(b[0].style.width==""||d.forceHelperSize){b.width(this.currentItem.width())}if(b[0].style.height==""||d.forceHelperSize){b.height(this.currentItem.height())}return b},_adjustOffsetFromHelper:function(b){if(b.left!=undefined){this.offset.click.left=b.left+this.margins.left}if(b.right!=undefined){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if(b.top!=undefined){this.offset.click.top=b.top+this.margins.top}if(b.bottom!=undefined){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.currentItem.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)){var c=a(e.containment)[0];var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_rearrange:function(g,f,c,e){c?c[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?f.item[0]:f.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var d=this,b=this.counter;window.setTimeout(function(){if(b==d.counter){d.refreshPositions(!e)}},0)},_clear:function(d,e){this.reverting=false;var f=[],b=this;if(!this._noFinalSort&&this.currentItem[0].parentNode){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var c in this._storedCSS){if(this._storedCSS[c]=="auto"||this._storedCSS[c]=="static"){this._storedCSS[c]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!e){f.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e){f.push(function(g){this._trigger("update",g,this._uiHash())})}if(!a.ui.contains(this.element[0],this.currentItem[0])){if(!e){f.push(function(g){this._trigger("remove",g,this._uiHash())})}for(var c=this.containers.length-1;c>=0;c--){if(a.ui.contains(this.containers[c].element[0],this.currentItem[0])&&!e){f.push((function(g){return function(h){g._trigger("receive",h,this._uiHash(this))}}).call(this,this.containers[c]));f.push((function(g){return function(h){g._trigger("update",h,this._uiHash(this))}}).call(this,this.containers[c]))}}}for(var c=this.containers.length-1;c>=0;c--){if(!e){f.push((function(g){return function(h){g._trigger("deactivate",h,this._uiHash(this))}}).call(this,this.containers[c]))}if(this.containers[c].containerCache.over){f.push((function(g){return function(h){g._trigger("out",h,this._uiHash(this))}}).call(this,this.containers[c]));this.containers[c].containerCache.over=0}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",d,this._uiHash());for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}return false}if(!e){this._trigger("beforeStop",d,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0]){this.helper.remove()}this.helper=null;if(!e){for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(a.widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(c){var b=c||this;return{helper:b.helper,placeholder:b.placeholder||a([]),position:b.position,absolutePosition:b.positionAbs,offset:b.positionAbs,item:b.currentItem,sender:c?c.element:null}}}));a.extend(a.ui.sortable,{getter:"serialize toArray",version:"1.7.2",eventPrefix:"sort",defaults:{appendTo:"parent",axis:false,cancel:":input,option",connectWith:false,containment:false,cursor:"auto",cursorAt:false,delay:0,distance:1,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000}})})(jQuery);;/*
 * jQuery UI Accordion 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.accordion",{_init:function(){var d=this.options,b=this;this.running=0;if(d.collapsible==a.ui.accordion.defaults.collapsible&&d.alwaysOpen!=a.ui.accordion.defaults.alwaysOpen){d.collapsible=!d.alwaysOpen}if(d.navigation){var c=this.element.find("a").filter(d.navigationFilter);if(c.length){if(c.filter(d.header).length){this.active=c}else{this.active=c.parent().parent().prev();c.addClass("ui-accordion-content-active")}}}this.element.addClass("ui-accordion ui-widget ui-helper-reset");if(this.element[0].nodeName=="UL"){this.element.children("li").addClass("ui-accordion-li-fix")}this.headers=this.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){a(this).removeClass("ui-state-focus")});this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");this.active=this._findActive(this.active||d.active).toggleClass("ui-state-default").toggleClass("ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");this.active.next().addClass("ui-accordion-content-active");a("<span/>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);this.active.find(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);if(a.browser.msie){this.element.find("a").css("zoom","1")}this.resize();this.element.attr("role","tablist");this.headers.attr("role","tab").bind("keydown",function(e){return b._keydown(e)}).next().attr("role","tabpanel");this.headers.not(this.active||"").attr("aria-expanded","false").attr("tabIndex","-1").next().hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex","0")}else{this.active.attr("aria-expanded","true").attr("tabIndex","0")}if(!a.browser.safari){this.headers.find("a").attr("tabIndex","-1")}if(d.event){this.headers.bind((d.event)+".accordion",function(e){return b._clickHandler.call(b,e,this)})}},destroy:function(){var c=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role").unbind(".accordion").removeData("accordion");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabindex");this.headers.find("a").removeAttr("tabindex");this.headers.children(".ui-icon").remove();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active");if(c.autoHeight||c.fillHeight){b.css("height","")}},_setData:function(b,c){if(b=="alwaysOpen"){b="collapsible";c=!c}a.widget.prototype._setData.apply(this,arguments)},_keydown:function(e){var g=this.options,f=a.ui.keyCode;if(g.disabled||e.altKey||e.ctrlKey){return}var d=this.headers.length;var b=this.headers.index(e.target);var c=false;switch(e.keyCode){case f.RIGHT:case f.DOWN:c=this.headers[(b+1)%d];break;case f.LEFT:case f.UP:c=this.headers[(b-1+d)%d];break;case f.SPACE:case f.ENTER:return this._clickHandler({target:e.target},e.target)}if(c){a(e.target).attr("tabIndex","-1");a(c).attr("tabIndex","0");c.focus();return false}return true},resize:function(){var e=this.options,d;if(e.fillSpace){if(a.browser.msie){var b=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}d=this.element.parent().height();if(a.browser.msie){this.element.parent().css("overflow",b)}this.headers.each(function(){d-=a(this).outerHeight()});var c=0;this.headers.next().each(function(){c=Math.max(c,a(this).innerHeight()-a(this).height())}).height(Math.max(0,d-c)).css("overflow","auto")}else{if(e.autoHeight){d=0;this.headers.next().each(function(){d=Math.max(d,a(this).outerHeight())}).height(d)}}},activate:function(b){var c=this._findActive(b)[0];this._clickHandler({target:c},c)},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===false?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,f){var d=this.options;if(d.disabled){return false}if(!b.target&&d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var h=this.active.next(),e={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:h},c=(this.active=a([]));this._toggle(c,h,e);return false}var g=a(b.currentTarget||f);var i=g[0]==this.active[0];if(this.running||(!d.collapsible&&i)){return false}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");if(!i){g.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").find(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);g.next().addClass("ui-accordion-content-active")}var c=g.next(),h=this.active.next(),e={options:d,newHeader:i&&d.collapsible?a([]):g,oldHeader:this.active,newContent:i&&d.collapsible?a([]):c.find("> *"),oldContent:h.find("> *")},j=this.headers.index(this.active[0])>this.headers.index(g[0]);this.active=i?a([]):g;this._toggle(c,h,e,i,j);return false},_toggle:function(b,i,g,j,k){var d=this.options,m=this;this.toShow=b;this.toHide=i;this.data=g;var c=function(){if(!m){return}return m._completed.apply(m,arguments)};this._trigger("changestart",null,this.data);this.running=i.size()===0?b.size():i.size();if(d.animated){var f={};if(d.collapsible&&j){f={toShow:a([]),toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}else{f={toShow:b,toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}if(!d.proxied){d.proxied=d.animated}if(!d.proxiedDuration){d.proxiedDuration=d.duration}d.animated=a.isFunction(d.proxied)?d.proxied(f):d.proxied;d.duration=a.isFunction(d.proxiedDuration)?d.proxiedDuration(f):d.proxiedDuration;var l=a.ui.accordion.animations,e=d.duration,h=d.animated;if(!l[h]){l[h]=function(n){this.slide(n,{easing:h,duration:e||700})}}l[h](f)}else{if(d.collapsible&&j){b.toggle()}else{i.hide();b.show()}c(true)}i.prev().attr("aria-expanded","false").attr("tabIndex","-1").blur();b.prev().attr("aria-expanded","true").attr("tabIndex","0").focus()},_completed:function(b){var c=this.options;this.running=b?0:--this.running;if(this.running){return}if(c.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})}this._trigger("change",null,this.data)}});a.extend(a.ui.accordion,{version:"1.7.2",defaults:{active:null,alwaysOpen:true,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()==location.href.toLowerCase()}},animations:{slide:function(j,h){j=a.extend({easing:"swing",duration:300},j,h);if(!j.toHide.size()){j.toShow.animate({height:"show"},j);return}if(!j.toShow.size()){j.toHide.animate({height:"hide"},j);return}var c=j.toShow.css("overflow"),g,d={},f={},e=["height","paddingTop","paddingBottom"],b;var i=j.toShow;b=i[0].style.width;i.width(parseInt(i.parent().width(),10)-parseInt(i.css("paddingLeft"),10)-parseInt(i.css("paddingRight"),10)-(parseInt(i.css("borderLeftWidth"),10)||0)-(parseInt(i.css("borderRightWidth"),10)||0));a.each(e,function(k,m){f[m]="hide";var l=(""+a.css(j.toShow[0],m)).match(/^([\d+-.]+)(.*)$/);d[m]={value:l[1],unit:l[2]||"px"}});j.toShow.css({height:0,overflow:"hidden"}).show();j.toHide.filter(":hidden").each(j.complete).end().filter(":visible").animate(f,{step:function(k,l){if(l.prop=="height"){g=(l.now-l.start)/(l.end-l.start)}j.toShow[0].style[l.prop]=(g*d[l.prop].value)+d[l.prop].unit},duration:j.duration,easing:j.easing,complete:function(){if(!j.autoHeight){j.toShow.css("height","")}j.toShow.css("width",b);j.toShow.css({overflow:c});j.complete()}})},bounceslide:function(b){this.slide(b,{easing:b.down?"easeOutBounce":"swing",duration:b.down?1000:200})},easeslide:function(b){this.slide(b,{easing:"easeinout",duration:700})}}})})(jQuery);;/*
 * jQuery UI Dialog 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 *	ui.resizable.js
 */
(function(c){var b={dragStart:"start.draggable",drag:"drag.draggable",dragStop:"stop.draggable",maxHeight:"maxHeight.resizable",minHeight:"minHeight.resizable",maxWidth:"maxWidth.resizable",minWidth:"minWidth.resizable",resizeStart:"start.resizable",resize:"drag.resizable",resizeStop:"stop.resizable"},a="ui-dialog ui-widget ui-widget-content ui-corner-all ";c.widget("ui.dialog",{_init:function(){this.originalTitle=this.element.attr("title");var l=this,m=this.options,j=m.title||this.originalTitle||"&nbsp;",e=c.ui.dialog.getTitleId(this.element),k=(this.uiDialog=c("<div/>")).appendTo(document.body).hide().addClass(a+m.dialogClass).css({position:"absolute",overflow:"hidden",zIndex:m.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(n){(m.closeOnEscape&&n.keyCode&&n.keyCode==c.ui.keyCode.ESCAPE&&l.close(n))}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(n){l.moveToTop(false,n)}),g=this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(k),f=(this.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(k),i=c('<a href="#"/>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){i.addClass("ui-state-hover")},function(){i.removeClass("ui-state-hover")}).focus(function(){i.addClass("ui-state-focus")}).blur(function(){i.removeClass("ui-state-focus")}).mousedown(function(n){n.stopPropagation()}).click(function(n){l.close(n);return false}).appendTo(f),h=(this.uiDialogTitlebarCloseText=c("<span/>")).addClass("ui-icon ui-icon-closethick").text(m.closeText).appendTo(i),d=c("<span/>").addClass("ui-dialog-title").attr("id",e).html(j).prependTo(f);f.find("*").add(f).disableSelection();(m.draggable&&c.fn.draggable&&this._makeDraggable());(m.resizable&&c.fn.resizable&&this._makeResizable());this._createButtons(m.buttons);this._isOpen=false;(m.bgiframe&&c.fn.bgiframe&&k.bgiframe());(m.autoOpen&&this.open())},destroy:function(){(this.overlay&&this.overlay.destroy());this.uiDialog.hide();this.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");this.uiDialog.remove();(this.originalTitle&&this.element.attr("title",this.originalTitle))},close:function(f){var d=this;if(false===d._trigger("beforeclose",f)){return}(d.overlay&&d.overlay.destroy());d.uiDialog.unbind("keypress.ui-dialog");(d.options.hide?d.uiDialog.hide(d.options.hide,function(){d._trigger("close",f)}):d.uiDialog.hide()&&d._trigger("close",f));c.ui.dialog.overlay.resize();d._isOpen=false;if(d.options.modal){var e=0;c(".ui-dialog").each(function(){if(this!=d.uiDialog[0]){e=Math.max(e,c(this).css("z-index"))}});c.ui.dialog.maxZ=e}},isOpen:function(){return this._isOpen},moveToTop:function(f,e){if((this.options.modal&&!f)||(!this.options.stack&&!this.options.modal)){return this._trigger("focus",e)}if(this.options.zIndex>c.ui.dialog.maxZ){c.ui.dialog.maxZ=this.options.zIndex}(this.overlay&&this.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=++c.ui.dialog.maxZ));var d={scrollTop:this.element.attr("scrollTop"),scrollLeft:this.element.attr("scrollLeft")};this.uiDialog.css("z-index",++c.ui.dialog.maxZ);this.element.attr(d);this._trigger("focus",e)},open:function(){if(this._isOpen){return}var e=this.options,d=this.uiDialog;this.overlay=e.modal?new c.ui.dialog.overlay(this):null;(d.next().length&&d.appendTo("body"));this._size();this._position(e.position);d.show(e.show);this.moveToTop(true);(e.modal&&d.bind("keypress.ui-dialog",function(h){if(h.keyCode!=c.ui.keyCode.TAB){return}var g=c(":tabbable",this),i=g.filter(":first")[0],f=g.filter(":last")[0];if(h.target==f&&!h.shiftKey){setTimeout(function(){i.focus()},1)}else{if(h.target==i&&h.shiftKey){setTimeout(function(){f.focus()},1)}}}));c([]).add(d.find(".ui-dialog-content :tabbable:first")).add(d.find(".ui-dialog-buttonpane :tabbable:first")).add(d).filter(":first").focus();this._trigger("open");this._isOpen=true},_createButtons:function(g){var f=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiDialog.find(".ui-dialog-buttonpane").remove();(typeof g=="object"&&g!==null&&c.each(g,function(){return !(d=true)}));if(d){c.each(g,function(h,i){c('<button type="button"></button>').addClass("ui-state-default ui-corner-all").text(h).click(function(){i.apply(f.element[0],arguments)}).hover(function(){c(this).addClass("ui-state-hover")},function(){c(this).removeClass("ui-state-hover")}).focus(function(){c(this).addClass("ui-state-focus")}).blur(function(){c(this).removeClass("ui-state-focus")}).appendTo(e)});e.appendTo(this.uiDialog)}},_makeDraggable:function(){var d=this,f=this.options,e;this.uiDialog.draggable({cancel:".ui-dialog-content",handle:".ui-dialog-titlebar",containment:"document",start:function(){e=f.height;c(this).height(c(this).height()).addClass("ui-dialog-dragging");(f.dragStart&&f.dragStart.apply(d.element[0],arguments))},drag:function(){(f.drag&&f.drag.apply(d.element[0],arguments))},stop:function(){c(this).removeClass("ui-dialog-dragging").height(e);(f.dragStop&&f.dragStop.apply(d.element[0],arguments));c.ui.dialog.overlay.resize()}})},_makeResizable:function(g){g=(g===undefined?this.options.resizable:g);var d=this,f=this.options,e=typeof g=="string"?g:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",alsoResize:this.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:f.minHeight,start:function(){c(this).addClass("ui-dialog-resizing");(f.resizeStart&&f.resizeStart.apply(d.element[0],arguments))},resize:function(){(f.resize&&f.resize.apply(d.element[0],arguments))},handles:e,stop:function(){c(this).removeClass("ui-dialog-resizing");f.height=c(this).height();f.width=c(this).width();(f.resizeStop&&f.resizeStop.apply(d.element[0],arguments));c.ui.dialog.overlay.resize()}}).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_position:function(i){var e=c(window),f=c(document),g=f.scrollTop(),d=f.scrollLeft(),h=g;if(c.inArray(i,["center","top","right","bottom","left"])>=0){i=[i=="right"||i=="left"?i:"center",i=="top"||i=="bottom"?i:"middle"]}if(i.constructor!=Array){i=["center","middle"]}if(i[0].constructor==Number){d+=i[0]}else{switch(i[0]){case"left":d+=0;break;case"right":d+=e.width()-this.uiDialog.outerWidth();break;default:case"center":d+=(e.width()-this.uiDialog.outerWidth())/2}}if(i[1].constructor==Number){g+=i[1]}else{switch(i[1]){case"top":g+=0;break;case"bottom":g+=e.height()-this.uiDialog.outerHeight();break;default:case"middle":g+=(e.height()-this.uiDialog.outerHeight())/2}}g=Math.max(g,h);this.uiDialog.css({top:g,left:d})},_setData:function(e,f){(b[e]&&this.uiDialog.data(b[e],f));switch(e){case"buttons":this._createButtons(f);break;case"closeText":this.uiDialogTitlebarCloseText.text(f);break;case"dialogClass":this.uiDialog.removeClass(this.options.dialogClass).addClass(a+f);break;case"draggable":(f?this._makeDraggable():this.uiDialog.draggable("destroy"));break;case"height":this.uiDialog.height(f);break;case"position":this._position(f);break;case"resizable":var d=this.uiDialog,g=this.uiDialog.is(":data(resizable)");(g&&!f&&d.resizable("destroy"));(g&&typeof f=="string"&&d.resizable("option","handles",f));(g||this._makeResizable(f));break;case"title":c(".ui-dialog-title",this.uiDialogTitlebar).html(f||"&nbsp;");break;case"width":this.uiDialog.width(f);break}c.widget.prototype._setData.apply(this,arguments)},_size:function(){var e=this.options;this.element.css({height:0,minHeight:0,width:"auto"});var d=this.uiDialog.css({height:"auto",width:e.width}).height();this.element.css({minHeight:Math.max(e.minHeight-d,0),height:e.height=="auto"?"auto":Math.max(e.height-d,0)})}});c.extend(c.ui.dialog,{version:"1.7.2",defaults:{autoOpen:true,bgiframe:false,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:"center",resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},getter:"isOpen",uuid:0,maxZ:0,getTitleId:function(d){return"ui-dialog-title-"+(d.attr("id")||++this.uuid)},overlay:function(d){this.$el=c.ui.dialog.overlay.create(d)}});c.extend(c.ui.dialog.overlay,{instances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(d){return d+".dialog-overlay"}).join(" "),create:function(e){if(this.instances.length===0){setTimeout(function(){if(c.ui.dialog.overlay.instances.length){c(document).bind(c.ui.dialog.overlay.events,function(f){var g=c(f.target).parents(".ui-dialog").css("zIndex")||0;return(g>c.ui.dialog.overlay.maxZ)})}},1);c(document).bind("keydown.dialog-overlay",function(f){(e.options.closeOnEscape&&f.keyCode&&f.keyCode==c.ui.keyCode.ESCAPE&&e.close(f))});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var d=c("<div></div>").appendTo(document.body).addClass("ui-widget-overlay").css({width:this.width(),height:this.height()});(e.options.bgiframe&&c.fn.bgiframe&&d.bgiframe());this.instances.push(d);return d},destroy:function(d){this.instances.splice(c.inArray(this.instances,d),1);if(this.instances.length===0){c([document,window]).unbind(".dialog-overlay")}d.remove();var e=0;c.each(this.instances,function(){e=Math.max(e,this.css("z-index"))});this.maxZ=e},height:function(){if(c.browser.msie&&c.browser.version<7){var e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);var d=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(e<d){return c(window).height()+"px"}else{return e+"px"}}else{return c(document).height()+"px"}},width:function(){if(c.browser.msie&&c.browser.version<7){var d=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);var e=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(d<e){return c(window).width()+"px"}else{return d+"px"}}else{return c(document).width()+"px"}},resize:function(){var d=c([]);c.each(c.ui.dialog.overlay.instances,function(){d=d.add(this)});d.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;/*
 * jQuery UI Slider 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.slider",a.extend({},a.ui.mouse,{_init:function(){var b=this,c=this.options;this._keySliding=false;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");this.range=a([]);if(c.range){if(c.range===true){this.range=a("<div></div>");if(!c.values){c.values=[this._valueMin(),this._valueMin()]}if(c.values.length&&c.values.length!=2){c.values=[c.values[0],c.values[0]]}}else{this.range=a("<div></div>")}this.range.appendTo(this.element).addClass("ui-slider-range");if(c.range=="min"||c.range=="max"){this.range.addClass("ui-slider-range-"+c.range)}this.range.addClass("ui-widget-header")}if(a(".ui-slider-handle",this.element).length==0){a('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}if(c.values&&c.values.length){while(a(".ui-slider-handle",this.element).length<c.values.length){a('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}}this.handles=a(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(d){d.preventDefault()}).hover(function(){if(!c.disabled){a(this).addClass("ui-state-hover")}},function(){a(this).removeClass("ui-state-hover")}).focus(function(){if(!c.disabled){a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");a(this).addClass("ui-state-focus")}else{a(this).blur()}}).blur(function(){a(this).removeClass("ui-state-focus")});this.handles.each(function(d){a(this).data("index.ui-slider-handle",d)});this.handles.keydown(function(i){var f=true;var e=a(this).data("index.ui-slider-handle");if(b.options.disabled){return}switch(i.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:f=false;if(!b._keySliding){b._keySliding=true;a(this).addClass("ui-state-active");b._start(i,e)}break}var g,d,h=b._step();if(b.options.values&&b.options.values.length){g=d=b.values(e)}else{g=d=b.value()}switch(i.keyCode){case a.ui.keyCode.HOME:d=b._valueMin();break;case a.ui.keyCode.END:d=b._valueMax();break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g==b._valueMax()){return}d=g+h;break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g==b._valueMin()){return}d=g-h;break}b._slide(i,e,d);return f}).keyup(function(e){var d=a(this).data("index.ui-slider-handle");if(b._keySliding){b._stop(e,d);b._change(e,d);b._keySliding=false;a(this).removeClass("ui-state-active")}});this._refreshValue()},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy()},_mouseCapture:function(d){var e=this.options;if(e.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();var h={x:d.pageX,y:d.pageY};var j=this._normValueFromMouse(h);var c=this._valueMax()-this._valueMin()+1,f;var k=this,i;this.handles.each(function(l){var m=Math.abs(j-k.values(l));if(c>m){c=m;f=a(this);i=l}});if(e.range==true&&this.values(1)==e.min){f=a(this.handles[++i])}this._start(d,i);k._handleIndex=i;f.addClass("ui-state-active").focus();var g=f.offset();var b=!a(d.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=b?{left:0,top:0}:{left:d.pageX-g.left-(f.width()/2),top:d.pageY-g.top-(f.height()/2)-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)};j=this._normValueFromMouse(h);this._slide(d,i,j);return true},_mouseStart:function(b){return true},_mouseDrag:function(d){var b={x:d.pageX,y:d.pageY};var c=this._normValueFromMouse(b);this._slide(d,this._handleIndex,c);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._handleIndex=null;this._clickOffset=null;return false},_detectOrientation:function(){this.orientation=this.options.orientation=="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(d){var c,h;if("horizontal"==this.orientation){c=this.elementSize.width;h=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{c=this.elementSize.height;h=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}var f=(h/c);if(f>1){f=1}if(f<0){f=0}if("vertical"==this.orientation){f=1-f}var e=this._valueMax()-this._valueMin(),i=f*e,b=i%this.options.step,g=this._valueMin()+i-b;if(b>(this.options.step/2)){g+=this.options.step}return parseFloat(g.toFixed(5))},_start:function(d,c){var b={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){b.value=this.values(c);b.values=this.values()}this._trigger("start",d,b)},_slide:function(f,e,d){var g=this.handles[e];if(this.options.values&&this.options.values.length){var b=this.values(e?0:1);if((this.options.values.length==2&&this.options.range===true)&&((e==0&&d>b)||(e==1&&d<b))){d=b}if(d!=this.values(e)){var c=this.values();c[e]=d;var h=this._trigger("slide",f,{handle:this.handles[e],value:d,values:c});var b=this.values(e?0:1);if(h!==false){this.values(e,d,(f.type=="mousedown"&&this.options.animate),true)}}}else{if(d!=this.value()){var h=this._trigger("slide",f,{handle:this.handles[e],value:d});if(h!==false){this._setData("value",d,(f.type=="mousedown"&&this.options.animate))}}}},_stop:function(d,c){var b={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){b.value=this.values(c);b.values=this.values()}this._trigger("stop",d,b)},_change:function(d,c){var b={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){b.value=this.values(c);b.values=this.values()}this._trigger("change",d,b)},value:function(b){if(arguments.length){this._setData("value",b);this._change(null,0)}return this._value()},values:function(b,e,c,d){if(arguments.length>1){this.options.values[b]=e;this._refreshValue(c);if(!d){this._change(null,b)}}if(arguments.length){if(this.options.values&&this.options.values.length){return this._values(b)}else{return this.value()}}else{return this._values()}},_setData:function(b,d,c){a.widget.prototype._setData.apply(this,arguments);switch(b){case"disabled":if(d){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled")}else{this.handles.removeAttr("disabled")}case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue(c);break;case"value":this._refreshValue(c);break}},_step:function(){var b=this.options.step;return b},_value:function(){var b=this.options.value;if(b<this._valueMin()){b=this._valueMin()}if(b>this._valueMax()){b=this._valueMax()}return b},_values:function(b){if(arguments.length){var c=this.options.values[b];if(c<this._valueMin()){c=this._valueMin()}if(c>this._valueMax()){c=this._valueMax()}return c}else{return this.options.values}},_valueMin:function(){var b=this.options.min;return b},_valueMax:function(){var b=this.options.max;return b},_refreshValue:function(c){var f=this.options.range,d=this.options,l=this;if(this.options.values&&this.options.values.length){var i,h;this.handles.each(function(p,n){var o=(l.values(p)-l._valueMin())/(l._valueMax()-l._valueMin())*100;var m={};m[l.orientation=="horizontal"?"left":"bottom"]=o+"%";a(this).stop(1,1)[c?"animate":"css"](m,d.animate);if(l.options.range===true){if(l.orientation=="horizontal"){(p==0)&&l.range.stop(1,1)[c?"animate":"css"]({left:o+"%"},d.animate);(p==1)&&l.range[c?"animate":"css"]({width:(o-lastValPercent)+"%"},{queue:false,duration:d.animate})}else{(p==0)&&l.range.stop(1,1)[c?"animate":"css"]({bottom:(o)+"%"},d.animate);(p==1)&&l.range[c?"animate":"css"]({height:(o-lastValPercent)+"%"},{queue:false,duration:d.animate})}}lastValPercent=o})}else{var j=this.value(),g=this._valueMin(),k=this._valueMax(),e=k!=g?(j-g)/(k-g)*100:0;var b={};b[l.orientation=="horizontal"?"left":"bottom"]=e+"%";this.handle.stop(1,1)[c?"animate":"css"](b,d.animate);(f=="min")&&(this.orientation=="horizontal")&&this.range.stop(1,1)[c?"animate":"css"]({width:e+"%"},d.animate);(f=="max")&&(this.orientation=="horizontal")&&this.range[c?"animate":"css"]({width:(100-e)+"%"},{queue:false,duration:d.animate});(f=="min")&&(this.orientation=="vertical")&&this.range.stop(1,1)[c?"animate":"css"]({height:e+"%"},d.animate);(f=="max")&&(this.orientation=="vertical")&&this.range[c?"animate":"css"]({height:(100-e)+"%"},{queue:false,duration:d.animate})}}}));a.extend(a.ui.slider,{getter:"value values",version:"1.7.2",eventPrefix:"slide",defaults:{animate:false,delay:0,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null}})})(jQuery);;/*
 * jQuery UI Tabs 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.tabs",{_init:function(){if(this.options.deselectable!==undefined){this.options.collapsible=this.options.deselectable}this._tabify(true)},_setData:function(b,c){if(b=="selected"){if(this.options.collapsible&&c==this.options.selected){return}this.select(c)}else{this.options[b]=c;if(b=="deselectable"){this.options.collapsible=c}this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+a.data(b)},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+a.data(this.list[0]));return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(c,b){return{tab:c,panel:b,index:this.anchors.index(c)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(n){this.list=this.element.children("ul:first");this.lis=a("li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return a("a",this)[0]});this.panels=a([]);var p=this,d=this.options;var c=/^#.+/;this.anchors.each(function(r,o){var q=a(o).attr("href");var s=q.split("#")[0],u;if(s&&(s===location.toString().split("#")[0]||(u=a("base")[0])&&s===u.href)){q=o.hash;o.href=q}if(c.test(q)){p.panels=p.panels.add(p._sanitizeSelector(q))}else{if(q!="#"){a.data(o,"href.tabs",q);a.data(o,"load.tabs",q.replace(/#.*$/,""));var w=p._tabId(o);o.href="#"+w;var v=a("#"+w);if(!v.length){v=a(d.panelTemplate).attr("id",w).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(p.panels[r-1]||p.list);v.data("destroy.tabs",true)}p.panels=p.panels.add(v)}else{d.disabled.push(r)}}});if(n){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(d.selected===undefined){if(location.hash){this.anchors.each(function(q,o){if(o.hash==location.hash){d.selected=q;return false}})}if(typeof d.selected!="number"&&d.cookie){d.selected=parseInt(p._cookie(),10)}if(typeof d.selected!="number"&&this.lis.filter(".ui-tabs-selected").length){d.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}d.selected=d.selected||0}else{if(d.selected===null){d.selected=-1}}d.selected=((d.selected>=0&&this.anchors[d.selected])||d.selected<0)?d.selected:0;d.disabled=a.unique(d.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(q,o){return p.lis.index(q)}))).sort();if(a.inArray(d.selected,d.disabled)!=-1){d.disabled.splice(a.inArray(d.selected,d.disabled),1)}this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(d.selected>=0&&this.anchors.length){this.panels.eq(d.selected).removeClass("ui-tabs-hide");this.lis.eq(d.selected).addClass("ui-tabs-selected ui-state-active");p.element.queue("tabs",function(){p._trigger("show",null,p._ui(p.anchors[d.selected],p.panels[d.selected]))});this.load(d.selected)}a(window).bind("unload",function(){p.lis.add(p.anchors).unbind(".tabs");p.lis=p.anchors=p.panels=null})}else{d.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}this.element[d.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(d.cookie){this._cookie(d.selected,d.cookie)}for(var g=0,m;(m=this.lis[g]);g++){a(m)[a.inArray(g,d.disabled)!=-1&&!a(m).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")}if(d.cache===false){this.anchors.removeData("cache.tabs")}this.lis.add(this.anchors).unbind(".tabs");if(d.event!="mouseover"){var f=function(o,i){if(i.is(":not(.ui-state-disabled)")){i.addClass("ui-state-"+o)}};var j=function(o,i){i.removeClass("ui-state-"+o)};this.lis.bind("mouseover.tabs",function(){f("hover",a(this))});this.lis.bind("mouseout.tabs",function(){j("hover",a(this))});this.anchors.bind("focus.tabs",function(){f("focus",a(this).closest("li"))});this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var b,h;if(d.fx){if(a.isArray(d.fx)){b=d.fx[0];h=d.fx[1]}else{b=h=d.fx}}function e(i,o){i.css({display:""});if(a.browser.msie&&o.opacity){i[0].style.removeAttribute("filter")}}var k=h?function(i,o){a(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");o.hide().removeClass("ui-tabs-hide").animate(h,h.duration||"normal",function(){e(o,h);p._trigger("show",null,p._ui(i,o[0]))})}:function(i,o){a(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");p._trigger("show",null,p._ui(i,o[0]))};var l=b?function(o,i){i.animate(b,b.duration||"normal",function(){p.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");i.addClass("ui-tabs-hide");e(i,b);p.element.dequeue("tabs")})}:function(o,i,q){p.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");i.addClass("ui-tabs-hide");p.element.dequeue("tabs")};this.anchors.bind(d.event+".tabs",function(){var o=this,r=a(this).closest("li"),i=p.panels.filter(":not(.ui-tabs-hide)"),q=a(p._sanitizeSelector(this.hash));if((r.hasClass("ui-tabs-selected")&&!d.collapsible)||r.hasClass("ui-state-disabled")||r.hasClass("ui-state-processing")||p._trigger("select",null,p._ui(this,q[0]))===false){this.blur();return false}d.selected=p.anchors.index(this);p.abort();if(d.collapsible){if(r.hasClass("ui-tabs-selected")){d.selected=-1;if(d.cookie){p._cookie(d.selected,d.cookie)}p.element.queue("tabs",function(){l(o,i)}).dequeue("tabs");this.blur();return false}else{if(!i.length){if(d.cookie){p._cookie(d.selected,d.cookie)}p.element.queue("tabs",function(){k(o,q)});p.load(p.anchors.index(this));this.blur();return false}}}if(d.cookie){p._cookie(d.selected,d.cookie)}if(q.length){if(i.length){p.element.queue("tabs",function(){l(o,i)})}p.element.queue("tabs",function(){k(o,q)});p.load(p.anchors.index(this))}else{throw"jQuery UI Tabs: Mismatching fragment identifier."}if(a.browser.msie){this.blur()}});this.anchors.bind("click.tabs",function(){return false})},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var c=a.data(this,"href.tabs");if(c){this.href=c}var d=a(this).unbind(".tabs");a.each(["href","load","cache"],function(e,f){d.removeData(f+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){if(a.data(this,"destroy.tabs")){a(this).remove()}else{a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}});if(b.cookie){this._cookie(null,b.cookie)}},add:function(e,d,c){if(c===undefined){c=this.anchors.length}var b=this,g=this.options,i=a(g.tabTemplate.replace(/#\{href\}/g,e).replace(/#\{label\}/g,d)),h=!e.indexOf("#")?e.replace("#",""):this._tabId(a("a",i)[0]);i.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var f=a("#"+h);if(!f.length){f=a(g.panelTemplate).attr("id",h).data("destroy.tabs",true)}f.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(c>=this.lis.length){i.appendTo(this.list);f.appendTo(this.list[0].parentNode)}else{i.insertBefore(this.lis[c]);f.insertBefore(this.panels[c])}g.disabled=a.map(g.disabled,function(k,j){return k>=c?++k:k});this._tabify();if(this.anchors.length==1){i.addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){b._trigger("show",null,b._ui(b.anchors[0],b.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[c],this.panels[c]))},remove:function(b){var d=this.options,e=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();if(e.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(b+(b+1<this.anchors.length?1:-1))}d.disabled=a.map(a.grep(d.disabled,function(g,f){return g!=b}),function(g,f){return g>=b?--g:g});this._tabify();this._trigger("remove",null,this._ui(e.find("a")[0],c[0]))},enable:function(b){var c=this.options;if(a.inArray(b,c.disabled)==-1){return}this.lis.eq(b).removeClass("ui-state-disabled");c.disabled=a.grep(c.disabled,function(e,d){return e!=b});this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b]))},disable:function(c){var b=this,d=this.options;if(c!=d.selected){this.lis.eq(c).addClass("ui-state-disabled");d.disabled.push(c);d.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[c],this.panels[c]))}},select:function(b){if(typeof b=="string"){b=this.anchors.index(this.anchors.filter("[href$="+b+"]"))}else{if(b===null){b=-1}}if(b==-1&&this.options.collapsible){b=this.options.selected}this.anchors.eq(b).trigger(this.options.event+".tabs")},load:function(e){var c=this,g=this.options,b=this.anchors.eq(e)[0],d=a.data(b,"load.tabs");this.abort();if(!d||this.element.queue("tabs").length!==0&&a.data(b,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(e).addClass("ui-state-processing");if(g.spinner){var f=a("span",b);f.data("label.tabs",f.html()).html(g.spinner)}this.xhr=a.ajax(a.extend({},g.ajaxOptions,{url:d,success:function(i,h){a(c._sanitizeSelector(b.hash)).html(i);c._cleanup();if(g.cache){a.data(b,"cache.tabs",true)}c._trigger("load",null,c._ui(c.anchors[e],c.panels[e]));try{g.ajaxOptions.success(i,h)}catch(j){}c.element.dequeue("tabs")}}))},abort:function(){this.element.queue([]);this.panels.stop(false,true);if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup()},url:function(c,b){this.anchors.eq(c).removeData("cache.tabs").data("load.tabs",b)},length:function(){return this.anchors.length}});a.extend(a.ui.tabs,{version:"1.7.2",getter:"length",defaults:{ajaxOptions:null,cache:false,cookie:null,collapsible:false,disabled:[],event:"click",fx:null,idPrefix:"ui-tabs-",panelTemplate:"<div></div>",spinner:"<em>Loading&#8230;</em>",tabTemplate:'<li><a href="#{href}"><span>#{label}</span></a></li>'}});a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(d,f){var b=this,g=this.options;var c=b._rotate||(b._rotate=function(h){clearTimeout(b.rotation);b.rotation=setTimeout(function(){var i=g.selected;b.select(++i<b.anchors.length?i:0)},d);if(h){h.stopPropagation()}});var e=b._unrotate||(b._unrotate=!f?function(h){if(h.clientX){b.rotate(null)}}:function(h){t=g.selected;c()});if(d){this.element.bind("tabsshow",c);this.anchors.bind(g.event+".tabs",e);c()}else{clearTimeout(b.rotation);this.element.unbind("tabsshow",c);this.anchors.unbind(g.event+".tabs",e);delete this._rotate;delete this._unrotate}}})})(jQuery);;/*
 * jQuery UI Datepicker 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	ui.core.js
 */
(function($){$.extend($.ui,{datepicker:{version:"1.7.2"}});var PROP_NAME="datepicker";function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],dateFormat:"mm/dd/yy",firstDay:0,isRTL:false};this._defaults={showOn:"focus",showAnim:"show",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,showMonthAfterYear:false,yearRange:"-10:+10",showOtherMonths:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"normal",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=$('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible"></div>')}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",log:function(){if(this.debug){console.log.apply("",arguments)}},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){target.id="dp"+(++this.uuid)}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([:\[\]\.])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:$('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return}var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==target){$.datepicker._hideDatepicker()}else{$.datepicker._showDatepicker(target)}return false})}input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst)},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst));this._updateDatepicker(inst);this._updateAlternate(inst)},_dialogDatepicker:function(input,dateText,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){var id="dp"+(++this.uuid);this._dialogInput=$('<input type="text" id="'+id+'" size="1" style="position: absolute; top: -100px;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});this._dialogInput.val(dateText);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;var browserHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",this._pos[0]+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker(null)}var date=this._getDateDatepicker(target);extendRemove(inst.settings,settings);this._setDateDatepicker(target,date);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date,endDate){var inst=this._getInst(target);if(inst){this._setDate(inst,date,endDate);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker(null,"");break;case 13:var sel=$("td."+$.datepicker._dayOverClass+", td."+$.datepicker._currentClass,inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}else{$.datepicker._hideDatepicker(null,$.datepicker._get(inst,"duration"))}return false;break;case 27:$.datepicker._hideDatepicker(null,$.datepicker._get(inst,"duration"));break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return}var inst=$.datepicker._getInst(input);var beforeShow=$.datepicker._get(inst,"beforeShow");extendRemove(inst.settings,(beforeShow?beforeShow.apply(input,[input,inst]):{}));$.datepicker._hideDatepicker(null,"");$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.rangeStart=null;inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim")||"show";var duration=$.datepicker._get(inst,"duration");var postProcess=function(){$.datepicker._datepickerShowing=true;if($.browser.msie&&parseInt($.browser.version,10)<7){$("iframe.ui-datepicker-cover").css({width:inst.dpDiv.width()+4,height:inst.dpDiv.height()+4})}};if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim](duration,postProcess)}if(duration==""){postProcess()}if(inst.input[0].type!="hidden"){inst.input[0].focus()}$.datepicker._curInst=inst}},_updateDatepicker:function(inst){var dims={width:inst.dpDiv.width()+4,height:inst.dpDiv.height()+4};var self=this;inst.dpDiv.empty().append(this._generateHTML(inst)).find("iframe.ui-datepicker-cover").css({width:dims.width,height:dims.height}).end().find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).removeClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).removeClass("ui-datepicker-next-hover")}}).bind("mouseover",function(){if(!self._isDisabledDatepicker(inst.inline?inst.dpDiv.parent()[0]:inst.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).addClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).addClass("ui-datepicker-next-hover")}}}).end().find("."+this._dayOverClass+" a").trigger("mouseover").end();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}else{inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst.input&&inst.input[0].type!="hidden"&&inst==$.datepicker._curInst){$(inst.input[0]).focus()}},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)+$(document).scrollLeft();var viewHeight=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)+$(document).scrollTop();offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0;offset.top-=(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(offset.top+dpHeight+inputHeight*2-viewHeight):0;return offset},_findPos:function(obj){while(obj&&(obj.type=="hidden"||obj.nodeType!=1)){obj=obj.nextSibling}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input,duration){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return}if(inst.stayOpen){this._selectDate("#"+inst.id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))}inst.stayOpen=false;if(this._datepickerShowing){duration=(duration!=null?duration:this._get(inst,"duration"));var showAnim=this._get(inst,"showAnim");var postProcess=function(){$.datepicker._tidyDialog(inst)};if(duration!=""&&$.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(duration==""?"hide":(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide")))](duration,postProcess)}if(duration==""){this._tidyDialog(inst)}var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}this._curInst=null},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return}var $target=$(event.target);if(($target.parents("#"+$.datepicker._mainDivId).length==0)&&!$target.hasClass($.datepicker.markerClassName)&&!$target.hasClass($.datepicker._triggerClass)&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)){$.datepicker._hideDatepicker(null,"")}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst._selectingMonthYear=false;inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_clickMonthYear:function(id){var target=$(id);var inst=this._getInst(target[0]);if(inst.input&&inst._selectingMonthYear&&!$.browser.msie){inst.input[0].focus()}inst._selectingMonthYear=!inst._selectingMonthYear},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return}var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;if(inst.stayOpen){inst.endDay=inst.endMonth=inst.endYear=null}this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));if(inst.stayOpen){inst.rangeStart=this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));this._updateDatepicker(inst)}},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);inst.stayOpen=false;inst.endDay=inst.endMonth=inst.endYear=inst.rangeStart=null;this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{if(!inst.stayOpen){this._hideDatepicker(null,this._get(inst,"duration"));this._lastInput=inst.input[0];if(typeof(inst.input[0])!="object"){inst.input[0].focus()}this._lastInput=null}}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getFullYear(),date.getMonth(),date.getDate());var firstMon=new Date(checkDate.getFullYear(),1-1,4);var firstDay=firstMon.getDay()||7;firstMon.setDate(firstMon.getDate()+1-firstDay);if(firstDay<4&&checkDate<firstMon){checkDate.setDate(checkDate.getDate()-3);return $.datepicker.iso8601Week(checkDate)}else{if(checkDate>new Date(checkDate.getFullYear(),12-1,28)){firstDay=new Date(checkDate.getFullYear()+1,1-1,4).getDay()||7;if(firstDay>4&&(checkDate.getDay()||7)<firstDay-3){return 1}}}return Math.floor(((checkDate-firstMon)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){lookAhead(match);var origSize=(match=="@"?14:(match=="y"?4:(match=="o"?3:2)));var size=origSize;var num=0;while(size>0&&iValue<value.length&&value.charAt(iValue)>="0"&&value.charAt(iValue)<="9"){num=num*10+parseInt(value.charAt(iValue++),10);size--}if(size==origSize){throw"Missing number at position "+iValue}return num};var getName=function(match,shortNames,longNames){var names=(lookAhead(match)?longNames:shortNames);var size=0;for(var j=0;j<names.length;j++){size=Math.max(size,names[j].length)}var name="";var iInit=iValue;while(size>0&&iValue<value.length){name+=value.charAt(iValue++);for(var i=0;i<names.length;i++){if(name==names[i]){return i+1}}size--}throw"Unknown name at position "+iInit};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TIMESTAMP:"@",W3C:"yy-mm-dd",formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":var doy=date.getDate();for(var m=date.getMonth()-1;m>=0;m--){doy+=this._getDaysInMonth(date.getFullYear(),m)}output+=formatNumber("o",doy,3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst){var dateFormat=this._get(inst,"dateFormat");var dates=inst.input?inst.input.val():null;inst.endDay=inst.endMonth=inst.endYear=null;var date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);date=defaultDate}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){var date=this._determineDate(this._get(inst,"defaultDate"),new Date());var minDate=this._getMinMaxDate(inst,"min",true);var maxDate=this._getMinMaxDate(inst,"max");date=(minDate&&date<minDate?minDate:date);date=(maxDate&&date>maxDate?maxDate:date);return date},_determineDate:function(date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset,getDaysInMonth){var date=new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};date=(date==null?defaultDate:(typeof date=="string"?offsetString(date,this._getDaysInMonth):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):date)));date=(date&&date.toString()=="Invalid Date"?defaultDate:date);if(date){date.setHours(0);date.setMinutes(0);date.setSeconds(0);date.setMilliseconds(0)}return this._daylightSavingAdjust(date)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,endDate){var clear=!(date);var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;date=this._determineDate(date,new Date());inst.selectedDay=inst.currentDay=date.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=date.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=date.getFullYear();if(origMonth!=inst.selectedMonth||origYear!=inst.selectedYear){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var stepBigMonths=this._get(inst,"stepBigMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min",true);var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-numMonths[1]+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery.datepicker._adjustDate(\'#'+inst.id+"', -"+stepMonths+", 'M');\" title=\""+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery.datepicker._adjustDate(\'#'+inst.id+"', +"+stepMonths+", 'M');\" title=\""+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery.datepicker._hideDatepicker();">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery.datepicker._gotoToday(\'#'+inst.id+"');\">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var endDate=inst.endDay?this._daylightSavingAdjust(new Date(inst.endYear,inst.endMonth,inst.endDay)):currentDate;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group ui-datepicker-group-';switch(col){case 0:calender+="first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+="last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+="middle";cornerClass="";break}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,selectedDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead="";for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var numRows=(isMultiMonth?6:Math.ceil((leadDays+daysInMonth)/7));var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody="";for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=otherMonth||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()>=currentDate.getTime()&&printDate.getTime()<=endDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":" onclick=\"DP_jQuery.datepicker._selectDay('#"+inst.id+"',"+drawMonth+","+drawYear+', this);return false;"')+">"+(otherMonth?(showOtherMonths?printDate.getDate():"&#xa0;"):(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()>=currentDate.getTime()&&printDate.getTime()<=endDate.getTime()?" ui-state-active":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,selectedDate,secondary,monthNames,monthNamesShort){minDate=(inst.rangeStart&&minDate&&selectedDate<minDate?selectedDate:minDate);var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span> "}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" onchange="DP_jQuery.datepicker._selectMonthYear(\'#'+inst.id+"', this, 'M');\" onclick=\"DP_jQuery.datepicker._clickMonthYear('#"+inst.id+"');\">";for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+((secondary||changeMonth||changeYear)&&(!(changeMonth&&changeYear))?"&#xa0;":"")}if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var year=0;var endYear=0;if(years.length!=2){year=drawYear-10;endYear=drawYear+10}else{if(years[0].charAt(0)=="+"||years[0].charAt(0)=="-"){year=drawYear+parseInt(years[0],10);endYear=drawYear+parseInt(years[1],10)}else{year=parseInt(years[0],10);endYear=parseInt(years[1],10)}}year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);html+='<select class="ui-datepicker-year" onchange="DP_jQuery.datepicker._selectMonthYear(\'#'+inst.id+"', this, 'Y');\" onclick=\"DP_jQuery.datepicker._clickMonthYear('#"+inst.id+"');\">";for(;year<=endYear;year++){html+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}html+="</select>"}if(showMonthAfterYear){html+=(secondary||changeMonth||changeYear?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._daylightSavingAdjust(new Date(year,month,day));var minDate=this._getMinMaxDate(inst,"min",true);var maxDate=this._getMinMaxDate(inst,"max");date=(minDate&&date<minDate?minDate:date);date=(maxDate&&date>maxDate?maxDate:date);inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax,checkRange){var date=this._determineDate(this._get(inst,minMax+"Date"),null);return(!checkRange||!inst.rangeStart?date:(!date||inst.rangeStart>date?inst.rangeStart:date))},_getDaysInMonth:function(year,month){return 32-new Date(year,month,32).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var newMinDate=(!inst.rangeStart?null:this._daylightSavingAdjust(new Date(inst.selectedYear,inst.selectedMonth,inst.selectedDay)));newMinDate=(newMinDate&&inst.rangeStart<newMinDate?inst.rangeStart:newMinDate);var minDate=newMinDate||this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date>=minDate)&&(!maxDate||date<=maxDate))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))}$.fn.datepicker=function(options){if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.7.2";window.DP_jQuery=$})(jQuery);;/*
 * jQuery UI Progressbar 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   ui.core.js
 */
(function(a){a.widget("ui.progressbar",{_init:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this._valueMin(),"aria-valuemax":this._valueMax(),"aria-valuenow":this._value()});this.valueDiv=a('<div class="ui-progressbar-value ui-widget-header ui-corner-left"></div>').appendTo(this.element);this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow").removeData("progressbar").unbind(".progressbar");this.valueDiv.remove();a.widget.prototype.destroy.apply(this,arguments)},value:function(b){if(b===undefined){return this._value()}this._setData("value",b);return this},_setData:function(b,c){switch(b){case"value":this.options.value=c;this._refreshValue();this._trigger("change",null,{});break}a.widget.prototype._setData.apply(this,arguments)},_value:function(){var b=this.options.value;if(b<this._valueMin()){b=this._valueMin()}if(b>this._valueMax()){b=this._valueMax()}return b},_valueMin:function(){var b=0;return b},_valueMax:function(){var b=100;return b},_refreshValue:function(){var b=this.value();this.valueDiv[b==this._valueMax()?"addClass":"removeClass"]("ui-corner-right");this.valueDiv.width(b+"%");this.element.attr("aria-valuenow",b)}});a.extend(a.ui.progressbar,{version:"1.7.2",defaults:{value:0}})})(jQuery);;/*
 * jQuery UI Effects 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||(function(d){d.effects={version:"1.7.2",save:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.data("ec.storage."+h[f],g[0].style[h[f]])}}},restore:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.css(h[f],g.data("ec.storage."+h[f]))}}},setMode:function(f,g){if(g=="toggle"){g=f.is(":hidden")?"show":"hide"}return g},getBaseline:function(g,h){var i,f;switch(g[0]){case"top":i=0;break;case"middle":i=0.5;break;case"bottom":i=1;break;default:i=g[0]/h.height}switch(g[1]){case"left":f=0;break;case"center":f=0.5;break;case"right":f=1;break;default:f=g[1]/h.width}return{x:f,y:i}},createWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent()}var g={width:f.outerWidth(true),height:f.outerHeight(true),"float":f.css("float")};f.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var j=f.parent();if(f.css("position")=="static"){j.css({position:"relative"});f.css({position:"relative"})}else{var i=f.css("top");if(isNaN(parseInt(i,10))){i="auto"}var h=f.css("left");if(isNaN(parseInt(h,10))){h="auto"}j.css({position:f.css("position"),top:i,left:h,zIndex:f.css("z-index")}).show();f.css({position:"relative",top:0,left:0})}j.css(g);return j},removeWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent().replaceWith(f)}return f},setTransition:function(g,i,f,h){h=h||{};d.each(i,function(k,j){unit=g.cssUnit(j);if(unit[0]>0){h[j]=unit[0]*f+unit[1]}});return h},animateClass:function(h,i,k,j){var f=(typeof k=="function"?k:(j?j:null));var g=(typeof k=="string"?k:null);return this.each(function(){var q={};var o=d(this);var p=o.attr("style")||"";if(typeof p=="object"){p=p.cssText}if(h.toggle){o.hasClass(h.toggle)?h.remove=h.toggle:h.add=h.toggle}var l=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.addClass(h.add)}if(h.remove){o.removeClass(h.remove)}var m=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.removeClass(h.add)}if(h.remove){o.addClass(h.remove)}for(var r in m){if(typeof m[r]!="function"&&m[r]&&r.indexOf("Moz")==-1&&r.indexOf("length")==-1&&m[r]!=l[r]&&(r.match(/color/i)||(!r.match(/color/i)&&!isNaN(parseInt(m[r],10))))&&(l.position!="static"||(l.position=="static"&&!r.match(/left|top|bottom|right/)))){q[r]=m[r]}}o.animate(q,i,g,function(){if(typeof d(this).attr("style")=="object"){d(this).attr("style")["cssText"]="";d(this).attr("style")["cssText"]=p}else{d(this).attr("style",p)}if(h.add){d(this).addClass(h.add)}if(h.remove){d(this).removeClass(h.remove)}if(f){f.apply(this,arguments)}})})}};function c(g,f){var i=g[1]&&g[1].constructor==Object?g[1]:{};if(f){i.mode=f}var h=g[1]&&g[1].constructor!=Object?g[1]:(i.duration?i.duration:g[2]);h=d.fx.off?0:typeof h==="number"?h:d.fx.speeds[h]||d.fx.speeds._default;var j=i.callback||(d.isFunction(g[1])&&g[1])||(d.isFunction(g[2])&&g[2])||(d.isFunction(g[3])&&g[3]);return[g[0],i,h,j]}d.fn.extend({_show:d.fn.show,_hide:d.fn.hide,__toggle:d.fn.toggle,_addClass:d.fn.addClass,_removeClass:d.fn.removeClass,_toggleClass:d.fn.toggleClass,effect:function(g,f,h,i){return d.effects[g]?d.effects[g].call(this,{method:g,options:f||{},duration:h,callback:i}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._show.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"show"))}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._hide.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"hide"))}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(d.isFunction(arguments[0])||typeof arguments[0]=="boolean")){return this.__toggle.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"toggle"))}},addClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{add:g},f,i,h]):this._addClass(g)},removeClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{remove:g},f,i,h]):this._removeClass(g)},toggleClass:function(g,f,i,h){return((typeof f!=="boolean")&&f)?d.effects.animateClass.apply(this,[{toggle:g},f,i,h]):this._toggleClass(g,f)},morph:function(f,h,g,j,i){return d.effects.animateClass.apply(this,[{add:h,remove:f},g,j,i])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(f){var g=this.css(f),h=[];d.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]}});return h}});d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(g,f){d.fx.step[f]=function(h){if(h.state==0){h.start=e(h.elem,f);h.end=b(h.end)}h.elem.style[f]="rgb("+[Math.max(Math.min(parseInt((h.pos*(h.end[0]-h.start[0]))+h.start[0],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[1]-h.start[1]))+h.start[1],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[2]-h.start[2]))+h.start[2],10),255),0)].join(",")+")"}});function b(g){var f;if(g&&g.constructor==Array&&g.length==3){return g}if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]}if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]}if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]}if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]}if(f=/rgba\(0, 0, 0, 0\)/.exec(g)){return a.transparent}return a[d.trim(g).toLowerCase()]}function e(h,f){var g;do{g=d.curCSS(h,f);if(g!=""&&g!="transparent"||d.nodeName(h,"body")){break}f="backgroundColor"}while(h=h.parentNode);return b(g)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};d.easing.jswing=d.easing.swing;d.extend(d.easing,{def:"easeOutQuad",swing:function(g,h,f,j,i){return d.easing[d.easing.def](g,h,f,j,i)},easeInQuad:function(g,h,f,j,i){return j*(h/=i)*h+f},easeOutQuad:function(g,h,f,j,i){return -j*(h/=i)*(h-2)+f},easeInOutQuad:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h+f}return -j/2*((--h)*(h-2)-1)+f},easeInCubic:function(g,h,f,j,i){return j*(h/=i)*h*h+f},easeOutCubic:function(g,h,f,j,i){return j*((h=h/i-1)*h*h+1)+f},easeInOutCubic:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h+f}return j/2*((h-=2)*h*h+2)+f},easeInQuart:function(g,h,f,j,i){return j*(h/=i)*h*h*h+f},easeOutQuart:function(g,h,f,j,i){return -j*((h=h/i-1)*h*h*h-1)+f},easeInOutQuart:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h+f}return -j/2*((h-=2)*h*h*h-2)+f},easeInQuint:function(g,h,f,j,i){return j*(h/=i)*h*h*h*h+f},easeOutQuint:function(g,h,f,j,i){return j*((h=h/i-1)*h*h*h*h+1)+f},easeInOutQuint:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h*h+f}return j/2*((h-=2)*h*h*h*h+2)+f},easeInSine:function(g,h,f,j,i){return -j*Math.cos(h/i*(Math.PI/2))+j+f},easeOutSine:function(g,h,f,j,i){return j*Math.sin(h/i*(Math.PI/2))+f},easeInOutSine:function(g,h,f,j,i){return -j/2*(Math.cos(Math.PI*h/i)-1)+f},easeInExpo:function(g,h,f,j,i){return(h==0)?f:j*Math.pow(2,10*(h/i-1))+f},easeOutExpo:function(g,h,f,j,i){return(h==i)?f+j:j*(-Math.pow(2,-10*h/i)+1)+f},easeInOutExpo:function(g,h,f,j,i){if(h==0){return f}if(h==i){return f+j}if((h/=i/2)<1){return j/2*Math.pow(2,10*(h-1))+f}return j/2*(-Math.pow(2,-10*--h)+2)+f},easeInCirc:function(g,h,f,j,i){return -j*(Math.sqrt(1-(h/=i)*h)-1)+f},easeOutCirc:function(g,h,f,j,i){return j*Math.sqrt(1-(h=h/i-1)*h)+f},easeInOutCirc:function(g,h,f,j,i){if((h/=i/2)<1){return -j/2*(Math.sqrt(1-h*h)-1)+f}return j/2*(Math.sqrt(1-(h-=2)*h)+1)+f},easeInElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return -(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f},easeOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return h*Math.pow(2,-10*i)*Math.sin((i*l-j)*(2*Math.PI)/k)+m+f},easeInOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l/2)==2){return f+m}if(!k){k=l*(0.3*1.5)}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}if(i<1){return -0.5*(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f}return h*Math.pow(2,-10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k)*0.5+m+f},easeInBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*(h/=j)*h*((i+1)*h-i)+f},easeOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*((h=h/j-1)*h*((i+1)*h+i)+1)+f},easeInOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}if((h/=j/2)<1){return k/2*(h*h*(((i*=(1.525))+1)*h-i))+f}return k/2*((h-=2)*h*(((i*=(1.525))+1)*h+i)+2)+f},easeInBounce:function(g,h,f,j,i){return j-d.easing.easeOutBounce(g,i-h,0,j,i)+f},easeOutBounce:function(g,h,f,j,i){if((h/=i)<(1/2.75)){return j*(7.5625*h*h)+f}else{if(h<(2/2.75)){return j*(7.5625*(h-=(1.5/2.75))*h+0.75)+f}else{if(h<(2.5/2.75)){return j*(7.5625*(h-=(2.25/2.75))*h+0.9375)+f}else{return j*(7.5625*(h-=(2.625/2.75))*h+0.984375)+f}}}},easeInOutBounce:function(g,h,f,j,i){if(h<i/2){return d.easing.easeInBounce(g,h*2,0,j,i)*0.5+f}return d.easing.easeOutBounce(g,h*2-i,0,j,i)*0.5+j*0.5+f}})})(jQuery);;/*
 * jQuery UI Effects Blind 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.blind=function(b){return this.queue(function(){var d=a(this),c=["position","top","left"];var h=a.effects.setMode(d,b.options.mode||"hide");var g=b.options.direction||"vertical";a.effects.save(d,c);d.show();var j=a.effects.createWrapper(d).css({overflow:"hidden"});var e=(g=="vertical")?"height":"width";var i=(g=="vertical")?j.height():j.width();if(h=="show"){j.css(e,0)}var f={};f[e]=h=="show"?i:0;j.animate(f,b.duration,b.options.easing,function(){if(h=="hide"){d.hide()}a.effects.restore(d,c);a.effects.removeWrapper(d);if(b.callback){b.callback.apply(d[0],arguments)}d.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Bounce 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.bounce=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"up";var c=b.options.distance||20;var d=b.options.times||5;var g=b.duration||250;if(/show|hide/.test(k)){l.push("opacity")}a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var c=b.options.distance||(f=="top"?e.outerHeight({margin:true})/3:e.outerWidth({margin:true})/3);if(k=="show"){e.css("opacity",0).css(f,p=="pos"?-c:c)}if(k=="hide"){c=c/(d*2)}if(k!="hide"){d--}if(k=="show"){var h={opacity:1};h[f]=(p=="pos"?"+=":"-=")+c;e.animate(h,g/2,b.options.easing);c=c/2;d--}for(var j=0;j<d;j++){var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing);c=(k=="hide")?c*2:c/2}if(k=="hide"){var h={opacity:0};h[f]=(p=="pos"?"-=":"+=")+c;e.animate(h,g/2,b.options.easing,function(){e.hide();a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}else{var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Clip 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.clip=function(b){return this.queue(function(){var f=a(this),j=["position","top","left","height","width"];var i=a.effects.setMode(f,b.options.mode||"hide");var k=b.options.direction||"vertical";a.effects.save(f,j);f.show();var c=a.effects.createWrapper(f).css({overflow:"hidden"});var e=f[0].tagName=="IMG"?c:f;var g={size:(k=="vertical")?"height":"width",position:(k=="vertical")?"top":"left"};var d=(k=="vertical")?e.height():e.width();if(i=="show"){e.css(g.size,0);e.css(g.position,d/2)}var h={};h[g.size]=i=="show"?d:0;h[g.position]=i=="show"?0:d/2;e.animate(h,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){f.hide()}a.effects.restore(f,j);a.effects.removeWrapper(f);if(b.callback){b.callback.apply(f[0],arguments)}f.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Drop 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.drop=function(b){return this.queue(function(){var e=a(this),d=["position","top","left","opacity"];var i=a.effects.setMode(e,b.options.mode||"hide");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e);var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true})/2:e.outerWidth({margin:true})/2);if(i=="show"){e.css("opacity",0).css(f,c=="pos"?-j:j)}var g={opacity:i=="show"?1:0};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Explode 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.explode=function(b){return this.queue(function(){var k=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;var e=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;b.options.mode=b.options.mode=="toggle"?(a(this).is(":visible")?"hide":"show"):b.options.mode;var h=a(this).show().css("visibility","hidden");var l=h.offset();l.top-=parseInt(h.css("marginTop"),10)||0;l.left-=parseInt(h.css("marginLeft"),10)||0;var g=h.outerWidth(true);var c=h.outerHeight(true);for(var f=0;f<k;f++){for(var d=0;d<e;d++){h.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-d*(g/e),top:-f*(c/k)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/e,height:c/k,left:l.left+d*(g/e)+(b.options.mode=="show"?(d-Math.floor(e/2))*(g/e):0),top:l.top+f*(c/k)+(b.options.mode=="show"?(f-Math.floor(k/2))*(c/k):0),opacity:b.options.mode=="show"?0:1}).animate({left:l.left+d*(g/e)+(b.options.mode=="show"?0:(d-Math.floor(e/2))*(g/e)),top:l.top+f*(c/k)+(b.options.mode=="show"?0:(f-Math.floor(k/2))*(c/k)),opacity:b.options.mode=="show"?1:0},b.duration||500)}}setTimeout(function(){b.options.mode=="show"?h.css({visibility:"visible"}):h.css({visibility:"visible"}).hide();if(b.callback){b.callback.apply(h[0])}h.dequeue();a("div.ui-effects-explode").remove()},b.duration||500)})}})(jQuery);;/*
 * jQuery UI Effects Fold 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.fold=function(b){return this.queue(function(){var e=a(this),k=["position","top","left"];var h=a.effects.setMode(e,b.options.mode||"hide");var o=b.options.size||15;var n=!(!b.options.horizFirst);var g=b.duration?b.duration/2:a.fx.speeds._default/2;a.effects.save(e,k);e.show();var d=a.effects.createWrapper(e).css({overflow:"hidden"});var i=((h=="show")!=n);var f=i?["width","height"]:["height","width"];var c=i?[d.width(),d.height()]:[d.height(),d.width()];var j=/([0-9]+)%/.exec(o);if(j){o=parseInt(j[1],10)/100*c[h=="hide"?0:1]}if(h=="show"){d.css(n?{height:0,width:o}:{height:o,width:0})}var m={},l={};m[f[0]]=h=="show"?c[0]:o;l[f[1]]=h=="show"?c[1]:0;d.animate(m,g,b.options.easing).animate(l,g,b.options.easing,function(){if(h=="hide"){e.hide()}a.effects.restore(e,k);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(e[0],arguments)}e.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Highlight 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.highlight=function(b){return this.queue(function(){var e=a(this),d=["backgroundImage","backgroundColor","opacity"];var h=a.effects.setMode(e,b.options.mode||"show");var c=b.options.color||"#ffff99";var g=e.css("backgroundColor");a.effects.save(e,d);e.show();e.css({backgroundImage:"none",backgroundColor:c});var f={backgroundColor:g};if(h=="hide"){f.opacity=0}e.animate(f,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(h=="hide"){e.hide()}a.effects.restore(e,d);if(h=="show"&&a.browser.msie){this.style.removeAttribute("filter")}if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Pulsate 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.pulsate=function(b){return this.queue(function(){var d=a(this);var g=a.effects.setMode(d,b.options.mode||"show");var f=b.options.times||5;var e=b.duration?b.duration/2:a.fx.speeds._default/2;if(g=="hide"){f--}if(d.is(":hidden")){d.css("opacity",0);d.show();d.animate({opacity:1},e,b.options.easing);f=f-2}for(var c=0;c<f;c++){d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing)}if(g=="hide"){d.animate({opacity:0},e,b.options.easing,function(){d.hide();if(b.callback){b.callback.apply(this,arguments)}})}else{d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing,function(){if(b.callback){b.callback.apply(this,arguments)}})}d.queue("fx",function(){d.dequeue()});d.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Scale 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.puff=function(b){return this.queue(function(){var f=a(this);var c=a.extend(true,{},b.options);var h=a.effects.setMode(f,b.options.mode||"hide");var g=parseInt(b.options.percent,10)||150;c.fade=true;var e={height:f.height(),width:f.width()};var d=g/100;f.from=(h=="hide")?e:{height:e.height*d,width:e.width*d};c.from=f.from;c.percent=(h=="hide")?g:100;c.mode=h;f.effect("scale",c,b.duration,b.callback);f.dequeue()})};a.effects.scale=function(b){return this.queue(function(){var g=a(this);var d=a.extend(true,{},b.options);var j=a.effects.setMode(g,b.options.mode||"effect");var h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:(j=="hide"?0:100));var i=b.options.direction||"both";var c=b.options.origin;if(j!="effect"){d.origin=c||["middle","center"];d.restore=true}var f={height:g.height(),width:g.width()};g.from=b.options.from||(j=="show"?{height:0,width:0}:f);var e={y:i!="horizontal"?(h/100):1,x:i!="vertical"?(h/100):1};g.to={height:f.height*e.y,width:f.width*e.x};if(b.options.fade){if(j=="show"){g.from.opacity=0;g.to.opacity=1}if(j=="hide"){g.from.opacity=1;g.to.opacity=0}}d.from=g.from;d.to=g.to;d.mode=j;g.effect("size",d,b.duration,b.callback);g.dequeue()})};a.effects.size=function(b){return this.queue(function(){var c=a(this),n=["position","top","left","width","height","overflow","opacity"];var m=["position","top","left","overflow","opacity"];var j=["width","height","overflow"];var p=["fontSize"];var k=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];var f=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];var g=a.effects.setMode(c,b.options.mode||"effect");var i=b.options.restore||false;var e=b.options.scale||"both";var o=b.options.origin;var d={height:c.height(),width:c.width()};c.from=b.options.from||d;c.to=b.options.to||d;if(o){var h=a.effects.getBaseline(o,d);c.from.top=(d.height-c.from.height)*h.y;c.from.left=(d.width-c.from.width)*h.x;c.to.top=(d.height-c.to.height)*h.y;c.to.left=(d.width-c.to.width)*h.x}var l={from:{y:c.from.height/d.height,x:c.from.width/d.width},to:{y:c.to.height/d.height,x:c.to.width/d.width}};if(e=="box"||e=="both"){if(l.from.y!=l.to.y){n=n.concat(k);c.from=a.effects.setTransition(c,k,l.from.y,c.from);c.to=a.effects.setTransition(c,k,l.to.y,c.to)}if(l.from.x!=l.to.x){n=n.concat(f);c.from=a.effects.setTransition(c,f,l.from.x,c.from);c.to=a.effects.setTransition(c,f,l.to.x,c.to)}}if(e=="content"||e=="both"){if(l.from.y!=l.to.y){n=n.concat(p);c.from=a.effects.setTransition(c,p,l.from.y,c.from);c.to=a.effects.setTransition(c,p,l.to.y,c.to)}}a.effects.save(c,i?n:m);c.show();a.effects.createWrapper(c);c.css("overflow","hidden").css(c.from);if(e=="content"||e=="both"){k=k.concat(["marginTop","marginBottom"]).concat(p);f=f.concat(["marginLeft","marginRight"]);j=n.concat(k).concat(f);c.find("*[width]").each(function(){child=a(this);if(i){a.effects.save(child,j)}var q={height:child.height(),width:child.width()};child.from={height:q.height*l.from.y,width:q.width*l.from.x};child.to={height:q.height*l.to.y,width:q.width*l.to.x};if(l.from.y!=l.to.y){child.from=a.effects.setTransition(child,k,l.from.y,child.from);child.to=a.effects.setTransition(child,k,l.to.y,child.to)}if(l.from.x!=l.to.x){child.from=a.effects.setTransition(child,f,l.from.x,child.from);child.to=a.effects.setTransition(child,f,l.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){if(i){a.effects.restore(child,j)}})})}c.animate(c.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(g=="hide"){c.hide()}a.effects.restore(c,i?n:m);a.effects.removeWrapper(c);if(b.callback){b.callback.apply(this,arguments)}c.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Shake 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.shake=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"left";var c=b.options.distance||20;var d=b.options.times||3;var g=b.duration||b.options.duration||140;a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var h={},o={},m={};h[f]=(p=="pos"?"-=":"+=")+c;o[f]=(p=="pos"?"+=":"-=")+c*2;m[f]=(p=="pos"?"-=":"+=")+c*2;e.animate(h,g,b.options.easing);for(var j=1;j<d;j++){e.animate(o,g,b.options.easing).animate(m,g,b.options.easing)}e.animate(o,g,b.options.easing).animate(h,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}});e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Slide 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.slide=function(b){return this.queue(function(){var e=a(this),d=["position","top","left"];var i=a.effects.setMode(e,b.options.mode||"show");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e).css({overflow:"hidden"});var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true}):e.outerWidth({margin:true}));if(i=="show"){e.css(f,c=="pos"?-j:j)}var g={};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Transfer 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.transfer=function(b){return this.queue(function(){var f=a(this),h=a(b.options.to),e=h.offset(),g={top:e.top,left:e.left,height:h.innerHeight(),width:h.innerWidth()},d=f.offset(),c=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:d.top,left:d.left,height:f.innerHeight(),width:f.innerWidth(),position:"absolute"}).animate(g,b.duration,b.options.easing,function(){c.remove();(b.callback&&b.callback.apply(f[0],arguments));f.dequeue()})})}})(jQuery);;
/*
 * Default text - jQuery plugin for html5 dragging files from desktop to browser
 *
 * Author: Weixi Yen
 *
 * Email: [Firstname][Lastname]@gmail.com
 * 
 * Copyright (c) 2010 Resopollution
 * 
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.github.com/weixiyen/jquery-filedrop
 *
 * Version:  0.1.0
 *
 * Features:
 *      Allows sending of extra parameters with file.
 *      Works with Firefox 3.6+
 *      Future-compliant with HTML5 spec (will work with Webkit browsers and IE9)
 * Usage:
 * 	See README at project homepage
 *
 */
(function($){
    
	var opts = {},
		default_opts = {
			url: '',
			refresh: 1000,
			paramname: 'userfile',
			maxfiles: 25,
			maxfilesize: 1, // MBs
			data: {},
			drop: empty,
			dragEnter: empty,
			dragOver: empty,
			dragLeave: empty,
			docEnter: empty,
			docOver: empty,
			docLeave: empty,
			error: function(err, file){alert(err);},
			uploadStarted: empty,
			uploadFinished: empty,
			progressUpdated: empty,
			speedUpdated: empty
		},
		errors = ["BrowserNotSupported", "TooManyFiles", "FileTooLarge"],
		doc_leave_timer,
		stop_loop = false;

	$.fn.filedrop = function(options) {
		opts = $.extend( {}, default_opts, options );
		try {
			this.get(0).addEventListener("drop", drop, true);
			this.bind('dragenter', dragEnter).bind('dragover', dragOver).bind('dragleave', dragLeave);
		
			document.addEventListener("drop", docDrop, true);
			$(document).bind('dragenter', docEnter).bind('dragover', docOver).bind('dragleave', docLeave);
		} catch(e) {}
		
	};
     
	function drop(e) {
		opts.drop(e);
		upload(e.dataTransfer.files);
		e.preventDefault();
		return false;
	}
	
	function getBuilder(filename, filedata, boundary) {
		var dashdash = '--',
			crlf = '\r\n',
			builder = '';

		$.each(opts.data, function(i, val) {
	    	if (typeof val === 'function') val = val();
			builder += dashdash;
			builder += boundary;
			builder += crlf;
			builder += 'Content-Disposition: form-data; name="'+i+'"';
			builder += crlf;
			builder += val;
			builder += crlf;
		});
        
        builder += dashdash;
		builder += boundary;
		builder += crlf;
		
		builder += dashdash;
		builder += boundary;
		builder += crlf;
		builder += 'Content-Disposition: form-data; name="'+opts.paramname+'"';
		builder += '; filename="' + filename + '"';
		builder += crlf;
		
		builder += 'Content-Type: application/octet-stream';
		builder += crlf;
		builder += crlf; 
		
		builder += filedata;
		builder += crlf;
        
		builder += dashdash;
		builder += boundary;
		builder += dashdash;
		builder += crlf;
		return builder;
	}

	function progress(e) {
		if (e.lengthComputable) {
			var percentage = Math.round((e.loaded * 100) / e.total);
			if (this.currentProgress != percentage) {
				
				this.currentProgress = percentage;
				opts.progressUpdated(this.index, this.file, this.currentProgress);
				
				var elapsed = new Date().getTime();
				var diffTime = elapsed - this.currentStart;
				if (diffTime >= opts.refresh) {
					var diffData = e.loaded - this.startData;
					var speed = diffData / diffTime; // KB per second
					opts.speedUpdated(this.index, this.file, speed);
					this.startData = e.loaded;
					this.currentStart = elapsed;
				}
			}
		}
	}
    
    
    
	function upload(files) {
		stop_loop = false;
		if (!files) {
			opts.error(errors[0]);
			return false;
		}
		var len = files.length;
		
		if (len > opts.maxfiles) {
		    opts.error(errors[1]);
		    return false;
		}

		for (var i=0; i<len; i++) {
			if (stop_loop) return false;
			try {
				if (i === len) return;
				var reader = new FileReader(),
					max_file_size = 1048576 * opts.maxfilesize;
					
				reader.index = i;
				reader.file = files[i];
				reader.len = len;
				if (reader.file.size > max_file_size) {
					opts.error(errors[2], reader.file);
					return false;
				}
		    	
				reader.addEventListener("loadend", send, false);
				reader.readAsBinaryString(files[i]);
			} catch(err) {
				opts.error(errors[0]);
				return false;
			}
		}
	    
		function send(e) {
			var xhr = new XMLHttpRequest(),
				upload = xhr.upload,
				file = e.target.file,
				index = e.target.index,
				start_time = new Date().getTime(),
				boundary = '------multipartformboundary' + (new Date).getTime(),
				builder = getBuilder(file.name, e.target.result, boundary);
			
			upload.index = index;
			upload.file = file;
			upload.downloadStartTime = start_time;
			upload.currentStart = start_time;
			upload.currentProgress = 0;
			upload.startData = 0;
			upload.addEventListener("progress", progress, false);
			
			xhr.open("POST", opts.url, true);
			xhr.setRequestHeader('content-type', 'multipart/form-data; boundary=' 
			    + boundary);
			    
			xhr.sendAsBinary(builder);  
			
			opts.uploadStarted(index, file, e.target.len);  
			
			xhr.onload = function() { 
			    if (xhr.responseText) {
				var now = new Date().getTime(),
				    timeDiff = now - start_time,
				    result = opts.uploadFinished(index, file, eval( '[' + xhr.responseText + ']' ), timeDiff);
			    if (result === false) stop_loop = true;
			    }
			};
		}
	}
    
	function dragEnter(e) {
		clearTimeout(doc_leave_timer);
		e.preventDefault();
		opts.dragEnter(e);
	}
	
	function dragOver(e) {
		clearTimeout(doc_leave_timer);
		e.preventDefault();
		opts.docOver(e);
		opts.dragOver(e);
	}
	 
	function dragLeave(e) {
		clearTimeout(doc_leave_timer);
		opts.dragLeave(e);
		e.stopPropagation();
	}
	 
	function docDrop(e) {
		e.preventDefault();
		opts.docLeave(e);
		return false;
	}
	 
	function docEnter(e) {
		clearTimeout(doc_leave_timer);
		e.preventDefault();
		opts.docEnter(e);
		return false;
	}
	 
	function docOver(e) {
		clearTimeout(doc_leave_timer);
		e.preventDefault();
		opts.docOver(e);
		return false;
	}
	 
	function docLeave(e) {
		doc_leave_timer = setTimeout(function(){
			opts.docLeave(e);
		}, 200);
	}
	 
	function empty(){}
     
})(jQuery);
/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2009 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license) 
	Version: 1.2.2 (03/09/2009 22:39:06)
*/
(function(a){var c=(a.browser.msie?"paste":"input")+".mask";var b=(window.orientation!=undefined);a.mask={definitions:{"9":"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"}};a.fn.extend({caret:function(e,f){if(this.length==0){return}if(typeof e=="number"){f=(typeof f=="number")?f:e;return this.each(function(){if(this.setSelectionRange){this.focus();this.setSelectionRange(e,f)}else{if(this.createTextRange){var g=this.createTextRange();g.collapse(true);g.moveEnd("character",f);g.moveStart("character",e);g.select()}}})}else{if(this[0].setSelectionRange){e=this[0].selectionStart;f=this[0].selectionEnd}else{if(document.selection&&document.selection.createRange){var d=document.selection.createRange();e=0-d.duplicate().moveStart("character",-100000);f=e+d.text.length}}return{begin:e,end:f}}},unmask:function(){return this.trigger("unmask")},mask:function(j,d){if(!j&&this.length>0){var f=a(this[0]);var g=f.data("tests");return a.map(f.data("buffer"),function(l,m){return g[m]?l:null}).join("")}d=a.extend({placeholder:"_",completed:null},d);var k=a.mask.definitions;var g=[];var e=j.length;var i=null;var h=j.length;a.each(j.split(""),function(m,l){if(l=="?"){h--;e=m}else{if(k[l]){g.push(new RegExp(k[l]));if(i==null){i=g.length-1}}else{g.push(null)}}});return this.each(function(){var r=a(this);var m=a.map(j.split(""),function(x,y){if(x!="?"){return k[x]?d.placeholder:x}});var n=false;var q=r.val();r.data("buffer",m).data("tests",g);function v(x){while(++x<=h&&!g[x]){}return x}function t(x){while(!g[x]&&--x>=0){}for(var y=x;y<h;y++){if(g[y]){m[y]=d.placeholder;var z=v(y);if(z<h&&g[y].test(m[z])){m[y]=m[z]}else{break}}}s();r.caret(Math.max(i,x))}function u(y){for(var A=y,z=d.placeholder;A<h;A++){if(g[A]){var B=v(A);var x=m[A];m[A]=z;if(B<h&&g[B].test(x)){z=x}else{break}}}}function l(y){var x=a(this).caret();var z=y.keyCode;n=(z<16||(z>16&&z<32)||(z>32&&z<41));if((x.begin-x.end)!=0&&(!n||z==8||z==46)){w(x.begin,x.end)}if(z==8||z==46||(b&&z==127)){t(x.begin+(z==46?0:-1));return false}else{if(z==27){r.val(q);r.caret(0,p());return false}}}function o(B){if(n){n=false;return(B.keyCode==8)?false:null}B=B||window.event;var C=B.charCode||B.keyCode||B.which;var z=a(this).caret();if(B.ctrlKey||B.altKey||B.metaKey){return true}else{if((C>=32&&C<=125)||C>186){var x=v(z.begin-1);if(x<h){var A=String.fromCharCode(C);if(g[x].test(A)){u(x);m[x]=A;s();var y=v(x);a(this).caret(y);if(d.completed&&y==h){d.completed.call(r)}}}}}return false}function w(x,y){for(var z=x;z<y&&z<h;z++){if(g[z]){m[z]=d.placeholder}}}function s(){return r.val(m.join("")).val()}function p(y){var z=r.val();var C=-1;for(var B=0,x=0;B<h;B++){if(g[B]){m[B]=d.placeholder;while(x++<z.length){var A=z.charAt(x-1);if(g[B].test(A)){m[B]=A;C=B;break}}if(x>z.length){break}}else{if(m[B]==z[x]&&B!=e){x++;C=B}}}if(!y&&C+1<e){r.val("");w(0,h)}else{if(y||C+1>=e){s();if(!y){r.val(r.val().substring(0,C+1))}}}return(e?B:i)}if(!r.attr("readonly")){r.one("unmask",function(){r.unbind(".mask").removeData("buffer").removeData("tests")}).bind("focus.mask",function(){q=r.val();var x=p();s();setTimeout(function(){if(x==j.length){r.caret(0,x)}else{r.caret(x)}},0)}).bind("blur.mask",function(){p();if(r.val()!=q){r.change()}}).bind("keydown.mask",l).bind("keypress.mask",o).bind(c,function(){setTimeout(function(){r.caret(p(true))},0)})}p()})}})})(jQuery);
/* 
	hasAttr plugin
	
	Description: 
		This plugin extends jquery to detect if an element has an attribute, and returns true or false.
		example: $('#myInput').hasAttr('alt'); // returns 1 or 0
		
---------------------------------*/

$.fn.hasAttr = function(name) {  
   return this.attr(name) !== undefined;
};

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

// clickmenus
function ClickMenu() {
	
	this.init = function() {
		var clickMenu;
		$('.clickmenu').live('click',function(){
			$('.clickmenu').removeClass('on');
			$(this).addClass('on');
		}).live('mouseout',function(){
			clickMenu = setTimeout('$(\'.clickmenu\').removeClass(\'on\')', 300);
		}).live('mouseover', function() {
			clearTimeout(clickMenu);
		});
	}
	this.init();
}

function dayStemmer(day) {
	var stem = 'th';
	switch(day) {
		case '1':
		case '21':
		case '31':
			stem = 'st';
			break;
		case '2':
		case '22':
			stem = 'nd';
			break;
		case '3':
		case '23':
			stem = 'rd';
			break;
		default:
			break;
	}
	return day.toString() + stem;
}

/*!
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2009 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/

/*
 * Generate a random uuid.
 *
 * USAGE: Math.uuid(length, radix)
 *   length - the desired number of characters
 *   radix  - the number of allowable values for each character.
 *
 * EXAMPLES:
 *   // No arguments  - returns RFC4122, version 4 ID
 *   >>> Math.uuid()
 *   "92329D39-6F5C-4520-ABFC-AAB64544E172"
 * 
 *   // One argument - returns ID of the specified length
 *   >>> Math.uuid(15)     // 15 character ID (default base=62)
 *   "VcydxgltxrVZSTV"
 *
 *   // Two arguments - returns ID of the specified length, and radix. (Radix must be <= 62)
 *   >>> Math.uuid(8, 2)  // 8 character ID (base=2)
 *   "01001010"
 *   >>> Math.uuid(8, 10) // 8 character ID (base=10)
 *   "47473046"
 *   >>> Math.uuid(8, 16) // 8 character ID (base=16)
 *   "098F4D35"
Math.uuid = (function() {
  // Private array of chars to use
  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''); 

  return function (len, radix) {
    var chars = CHARS, uuid = [];
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (var i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (var i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  };
})();
 */


(function($){function toIntegersAtLease(n)
{return n<10?'0'+n:n;}
Date.prototype.toJSON=function(date)
{return this.getUTCFullYear()+'-'+
toIntegersAtLease(this.getUTCMonth())+'-'+
toIntegersAtLease(this.getUTCDate());};var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.quoteString=function(string)
{if(escapeable.test(string))
{return'"'+string.replace(escapeable,function(a)
{var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};$.toJSON=function(o,compact)
{var type=typeof(o);if(type=="undefined")
return"undefined";else if(type=="number"||type=="boolean")
return o+"";else if(o===null)
return"null";if(type=="string")
{return $.quoteString(o);}
if(type=="object"&&typeof o.toJSON=="function")
return o.toJSON(compact);if(type!="function"&&typeof(o.length)=="number")
{var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i],compact));}
if(compact)
return"["+ret.join(",")+"]";else
return"["+ret.join(", ")+"]";}
if(type=="function"){throw new TypeError("Unable to convert object of type 'function' to json.");}
var ret=[];for(var k in o){var name;type=typeof(k);if(type=="number")
name='"'+k+'"';else if(type=="string")
name=$.quoteString(k);else
continue;var val=$.toJSON(o[k],compact);if(typeof(val)!="string"){continue;}
if(compact)
ret.push(name+":"+val);else
ret.push(name+": "+val);}
return"{"+ret.join(", ")+"}";};$.compactJSON=function(o)
{return $.toJSON(o,true);};$.evalJSON=function(src)
{return eval("("+src+")");};$.secureEvalJSON=function(src)
{var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
return eval("("+src+")");else
throw new SyntaxError("Error parsing JSON, source is not valid.");};})(jQuery);
function Page() 
{
	var self = this;

	self.nav = new Foxmenu;
	self.fox = new Foxhelper;
	self.thumbnail = new Thumbnail;
	self.inputText = new SetInputText;
	self.buttons = new Buttons;
	self.previewModal = new PreviewModal;
	self.errors = new Errors;
	
	$('#header .find button').bind('click', function() {
		var search = $('#header .searchbox').val();
		if (!search.match(/^[a-zA-Z0-9]+$/i)) {
			page.fox.message({
				message:'Search only accepts letters and numbers. \
					Please try again.',
				close: function(){
					parentTR.removeClass('selected');
				},
				offset: {x:200,y:0}
			});
			return false;
		}
	})
	
	
	return self;
}

Page.prototype.ajaxStart = function() {
	$('div#eventStatus').css({display:'block'});
}

Page.prototype.ajaxStop = function() {
	var self = this;
	$('div#eventStatus').css({display:'none'});
	return self;
}

Page.prototype.request = function(data) {
	var self = this;
	var async = data.async ? data.async : false;
	var type = data.type ? data.type : 'POST';
	var dataType = data.dataType ? data.dataType : 'json';
	var request = data.request ? data.request : '';
	var url = data.url ? data.url : '';
	var offset = data.offset ? data.offset : {x:0, y:0};
	var errorHandler = data.errorHandler ? data.errorHander : function(errors){
		self.errors.prompt({
			errors: errors, 
			offset: offset
		});
	}
	
	$.ajax({
		async: async,
		dataType: dataType,
		type: type,
		url: url,
		cache: false,
		data: request,
		beforeSend: function() {
			self.ajaxStart();
		},
		error: function(request, status, errorThrown) {
			self.fox.center().display({
				url: 'ajaxerror',
				callback: function() {
					$('#refreshButton').bind('click', function(){
						location.reload(true);
					});
				}
			});
			self.ajaxStop();
		},
		success: function(json) {
			self.ajaxStop().errors.clear();
			if (json.errors) {
				errorHandler(json.errors);
			} else {
				self.fox.dock();
				data.success(json);
			}
		}
	});
}

Page.prototype.makeHash = function(k,v) {
	var kv = k+'='+v;
	var hash = location.hash.replace(/^.*#/, '');
	var hashArr = hash.split(',');
	var bookmark = -1;
	
	var index = ''.indexOf(hashArr);
	if (index>=0) {hashArr.remove(index)}
	
	for ( var i=0; i<hashArr.length; i++ ){
		var val = hashArr[i].split('=');
		if (k == val[0]) {
			var bookmark = i;
			break;
		}
	}
	if (bookmark>=0) { hashArr.remove(bookmark); }

	hashArr.push(kv);
	return hashArr.join(',');
}

Page.prototype.makeMultipleHash = function() {
	var hash = location.hash.replace(/^.*#/, '');
	var hashArr = hash.split(',');
	
	var bookmark = -1;
	
	for (var i = 0, j = arguments.length; i < j; i++) {
		
		var arg = arguments[i];
		var kv = arg[0]+'='+arg[1];
		for ( var k=0; k<hashArr.length; k++ ){
			var val = hashArr[k].split('=');
			if (arg[0] == val[0]) {
				var bookmark = k;
			}
		}
		if (bookmark>=0) { hashArr.remove(bookmark); }
		
		hashArr.push(kv);
		
	}
	hashArr = $.grep(hashArr,function(n,i){
	    return(n);
	});
	return hashArr.join(',');
	
}

Page.prototype.getHashVal = function(k) {
	var hash = location.hash.replace(/^.*#/, '');
	var hashArr = hash.split(',');
	var index = ''.indexOf(hashArr);
	if (index>=0) {hashArr.remove(index)}
	var val = 0;
	$.each(hashArr, function(i, v){
		v = v.split('=');
		if (k == v[0]) {
			val = v[1];
		}
	});
	return val;
}
function Errors() 
{
	var self = this;
}

Errors.prototype.prompt = function(data) {
	var self = this;
	var errors = data.errors;
	var offset = data.offset || {x:0, y:0};
	
	self.clear();
	
	page.fox.center({x:offset.x,y:offset.y}).display({
		url:"errors.html",
		callback:function(){
			for (var i=0; i < errors.length; i++) {
				var sel = errors[i].selector;
				var msg = errors[i].message;
				if (sel) {
					$(sel).addClass('error');
				}
				$('#errorList').append('<li>' + msg + '</li>');
			}
		}
	});
	
	return self;
}

Errors.prototype.clear = function() {
	var self = this;
	
	$('.error').removeClass('error');
	
	return self;
}
function Buttons() 
{
	/* define methods
	---------------------------------*/
	var self = this;
	
	/* activate
	---------------------------------*/
	self.activate();
}

Buttons.prototype.activate = function(selector) {
	
	if (!selector) selector = '.button';
	
	$(selector).live('mousedown',function(){
		$(this).addClass("active");
	}).live('mouseup',function(){
		$(this).removeClass("active");
	}).live('mouseout',function(){
		$(this).removeClass("active");
	}).disableTextSelect();
}
function Thumbnail() 
{
	/* thumbnail manipulation
	---------------------------------*/
	var self = this;
	self.init();
}

Thumbnail.prototype.init = function() {
	var self = this;
	$(".thumb").each(function(i,val){
		if ($(this).children(".frame").children("img").attr("src"))
		{
			$(this).css("background","url('" + $(this).children(".frame").children("img").attr("src") + "') no-repeat center center")
		}
	})
	return self;
}
function PicViewer(selector) 
{
	var self = this;
	self.selector = selector;
	self.photos = [];
	self.photoLen = 0;
	self.photoIndex = 0;
	self.defaultBg = '/styles/img/picviewer_frame_placeholder.png';
	self.init();
}

PicViewer.prototype.init = function() {
	var self = this;
	self.setupArrows().setupMenu();
	$(self.selector + ' .picViewer .center').disableTextSelect();
	return self;
}

PicViewer.prototype.setup = function(photos) {
	var self = this;
	
	self.photos = photos;
	self.photoLen = photos.length;
	self.photoIndex = 0;
	
	self.showPhoto( self.photoIndex );
}

PicViewer.prototype.showDropzone = function() {
	var self = this,
		display = $(self.selector + " .picDisplay");
	$(self.selector + ' .droptext').addClass('hover');
	display.css("background","url('" + self.defaultBg + "') no-repeat center center");
}

PicViewer.prototype.hideDropzone = function() {
	var self = this;
	self.deactivateDropzone();
	$(self.selector + ' .droptext').removeClass('hover');
	self.showPhoto( self.photoIndex );
}

PicViewer.prototype.activateDropzone = function() {
	var self = this,
		display = $(self.selector + " .picDisplay");
	$(self.selector + ' .droptext').addClass('on');
	display.css("background","url('" + self.defaultBg + "') no-repeat center center");
}

PicViewer.prototype.deactivateDropzone = function() {
	var self = this;
	$(self.selector + ' .droptext').removeClass('on');
}

PicViewer.prototype.showPhoto = function(index) {
	var self = this,
		display = $(self.selector + " .picDisplay"),
		counter = $(self.selector + " .center"),
		len = self.photoLen,
		pic_num = len ? self.photoIndex + 1 : 0;
	
	// show the photo
	if (self.photos[index]) {
		display.css("background","#232323 url('" + self.photos[index].photo + "') no-repeat center center");
	} else {
		display.css("background","url('" + self.defaultBg + "') no-repeat center center");
	}
	
	// calculate the count
	counter.text(pic_num + ' of ' + len);
}

PicViewer.prototype.removePhoto = function() {
	var self = this,
		part1 = self.photos.slice( 0, self.photoIndex ),
		part2 = self.photos.slice( self.photoIndex + 1 );

	self.photos = part1.concat(part2);	
	self.photoLen -= 1;
	self.photoIndex -= 1;
	if (self.photoIndex < 0) self.photoIndex = 0;
	self.showPhoto( self.photoIndex );
}

PicViewer.prototype.addPhoto = function(photo){
	var self = this;
	self.photos = self.photos.concat(photo);
	self.photoIndex = self.photoLen;
	self.photoLen += 1;
	self.showPhoto( self.photoIndex );
}

PicViewer.prototype.setupArrows = function(){
	var self = this;

	$(self.selector + ' .picNav .left,' + self.selector + ' .picNav .right').bind('mousedown',function(){
		$(this).addClass('active');	
	}).bind('mouseup',function(){
		$(this).removeClass('active');
	}).bind('click',function(){		
		if ( $(this).hasClass('left') ) {
			self.prevPhoto();
		} else {
			self.nextPhoto();
		}
	});
	
	$(self.selector + ' .picDisplay').bind('click',function(){
		self.nextPhoto();
	});
	
	return self;
}

PicViewer.prototype.setupMenu = function(){
	var self = this;
	$(self.selector + ' .picBar .picEditor').bind('click',function(e){
		if ( $(this).hasClass('on') ) {
			$(this).removeClass('on');
		} else {
			$(this).addClass('on');
		}
		e.stopPropagation();
	});
	
	$(document).bind('click',function(){
		$(self.selector + ' .picBar .picEditor').removeClass('on');
	});
	return self;
}

PicViewer.prototype.nextPhoto = function() {
	this.photoIndex += 1;
	if (this.photoIndex === this.photoLen) this.photoIndex = 0;
	this.showPhoto( this.photoIndex );
}

PicViewer.prototype.prevPhoto = function() {
	this.photoIndex -= 1;
	if (this.photoIndex < 0) this.photoIndex = this.photoLen - 1;
	this.showPhoto( this.photoIndex );
}
function Pulse(selector) {
	this.container = $(selector + ' .container');
}

Pulse.prototype.refresh = function(data) {
	var container = this.container,
		html = this.generateHTML(data);
	container.html( html );
}

Pulse.prototype.generateHTML = function(data) {
	var html_arr = [],
		len = data.length;
	
	if (!len) return '<div class="nothing">No recent activity.</div>';
	
	for (var i=0; i < len; i++) {
		var row = '',
			pulse = data[i],
			id = pulse.id,
			type = pulse.type,
			date = pulse.date,
			html = pulse.html.replace('#Unit',''),
			day = pulse.day,
			prev_date = data[i-1] ? data[i-1].date : null,
			next_date = data[i+1] ? data[i+1].date : null; 
		
		if (date !== prev_date) row += '<dl><dt>'+day+'</dt>';
		
		row += '<dd class="' + type + '">'+ html +'</dd>';
		
		if (date !== next_date) row += '</dl>';
		
		html_arr.push(row);
	}
	
	return html_arr.join('');
}
function SetInputText() 
{
	var self = this;
	
	self.reset();
	
	return self;
};

SetInputText.prototype.reset = function() {
	
	var self = this;
	
	$("input:text,input:password").unbind('focus').unbind('blur').addClass('active').each(function(i,val){

		if ($(this).hasAttr('alt')) {
			
			var thisText = $(this).attr('alt');
			if ($(this).val() == '' || $(this).val() == thisText) $(this).val(thisText).removeClass('active');

			$(this).bind('focus',function() {
				if ( $(this).val() == thisText )
				{
					$(this).val('');
				}
				$(this).addClass('active');
			}).bind('blur',function() {
				if ( $(this).val() == '' )
				{
					$(this).val(thisText).removeClass('active');
				}
				$(this).addClass('inactive');
			});
			
		}

	});
	
	return self;
}

SetInputText.prototype.clear = function(selector) {
	var self = this;
	
	$("input:text").each(function(i,val){
		var isSampleInput = $(this).attr('value') == $(this).attr('alt');
		if (isSampleInput) {
			$(this).attr({value:''});
		}
	});
	
	return self;
}
$(function(){
	$.extend($.fn.disableTextSelect = function() {
		return this.each(function(){
			if($.browser.mozilla){//Firefox
				$(this).css('MozUserSelect','none');
			}else if($.browser.msie){//IE
				$(this).bind('selectstart',function(){return false;});
			}else{//Opera, etc.
				$(this).mousedown(function(){return false;});
			}
		});
	});
});
(function($){$.fn.extend({elastic:function(){var j=new Array('paddingTop','paddingRight','paddingBottom','paddingLeft','fontSize','lineHeight','fontFamily','width','fontWeight');return this.each(function(){if(this.type!='textarea')return false;var $textarea=$(this);var d=parseInt($textarea.css('lineHeight'),10)||parseInt($textarea.css('fontSize'),'10');var e=parseInt($textarea.css('height'),10)||d*3;var f=parseInt($textarea.css('max-height'),10)||Number.MAX_VALUE;var g=0;var h=null;var i=true;if(!h){$twin=$('<div />').css({'position':'absolute','display':'none'}).appendTo($textarea.parent());$.each(j,function(){$twin.css(this.toString(),$textarea.css(this.toString()))})};function setHeight(a,b){curratedHeight=Math.floor(parseInt(a,10));if($textarea.height()!=curratedHeight){$textarea.css({'height':curratedHeight+'px','overflow':b})}}function update(){var a=$textarea.val().replace(/<|>/g,' ').replace(/\n/g,'<br />').replace(/&/g,"&amp;");var b=$twin.html();if(a+'&nbsp;'!=b){$twin.html(a+'&nbsp;');if(Math.abs($twin.height()+d-$textarea.height())>3){var c=$twin.height()+d;if(c>=f)setHeight(f,'auto');else if(c<=e)setHeight(e,'hidden');else setHeight(c,'hidden');if(i){temp=$textarea.val();$textarea.val('');setTimeout(function(){$textarea.val(temp)},1);i=false}}}}$textarea.css({'overflow':'hidden'}).bind('focus',function(){self.periodicalUpdater=window.setInterval(function(){update()},50)}).bind('blur',function(){clearInterval(self.periodicalUpdater)});update()})}})})(jQuery);
function Foxmenu() 
{ 
	var submenu = $("#menu .sub")
	var backdrop = $("#menuBackdrop")
	
	/* method definitions
	---------------------------------*/
	this.hideSubmenu = hideSubmenu
	this.showSubmenu = showSubmenu

	
	/* methods
	---------------------------------*/
	function hideSubmenu() {
		submenu.hide()
		backdrop.removeClass("submenu")
	}

	function showSubmenu() {
		submenu.show()
		backdrop.addClass("submenu")
	}
	
}
function Foxhelper() 
{
	var self = this;
	self.incPath = "/foxhelper/";
	self.foxDisplayMessage = "index";
	self.foxDefaultMessage = "index";
	self.foxHelper = $("#foxhelper");
	self.theFox = $("#foxhelper .thefox");
	self.foxPanel = $("#foxhelper .foxpanel");
	self.alert = $("#foxhelper .balloon");
	self.foxDisplay = $("#foxhelper .display");
	self.foxDisplayWidth = $("#foxhelper").width()
	self.dockLeft = -35;
	self.dockBottom = 25;
	self.expanded = false;
	self.callback = null;

	self.init();
}
/* init
---------------------------------*/
Foxhelper.prototype.init = function(){
	
	var self = this;
	
	self.dock();
	self.foxHelper.draggable({
		handle:'.thefox',
		stop: function(){
			self._keepInBounds();
			if (self._foxOnMenu())  {
				self.dock();
			} else {
				self.display();
			}
			return self;
		}
	});

	self.theFox.bind("dblclick", function(){
		if (self.foxHelper.css("top") == "auto")
		{
			self.center().display();
		}
		else
		{
			self.dock();
		}
	}).bind("mousedown", function(){
		this.style.cursor='url("/styles/img/closedhand.cur"), move'
	}).bind("mouseup", function(){
		this.style.cursor='url("/styles/img/openhand.cur"), move'
	});

	$(window).resize(function(){
		if (self._foxOnMenu()) 
			self.dock()
		else
			self._keepInBounds()
	});
	
	$(".foxClose").live('click', function(){
		self.dock();
	});
	
	return self;
};

/* dock
---------------------------------*/
Foxhelper.prototype.dock = function(){
	var self = this;
	
	self.foxPanel.hide()
	self.foxHelper.css("left", self.dockLeft).css("bottom", self.dockBottom).css("top", "auto").css({overflow:"auto"});
	self.expanded = false;
	self.foxDisplayMessage = self.foxDefaultMessage;
	if (self.onClose){
		self.onClose();
		self.onClose = null;
		self.callback = null;
	}
	
	return self;
};

/* center
---------------------------------*/
Foxhelper.prototype.center = function(offset){
	var self = this;
	var fromLeft = $(window).width() / 2 - parseInt(self.foxPanel.css("width")) / 2;
	var fromTop = $(window).height() / 6;
	if (offset) {
		fromLeft += offset.x;
		fromTop += offset.y;
	}
	self.foxHelper.css("bottom", 0);
	self.foxHelper.css("left", fromLeft).css("top", fromTop);
	expanded = true;
	return self;
};

/* display message
---------------------------------*/
Foxhelper.prototype.display = function(opts){
	var self = this;
	var optURL = 0;
	
	self.hideAlert();
	if (!self.expanded && self.foxDisplayMessage != self.foxDefaultMessage) {
		self.foxDisplayMessage = self.foxDefaultMessage;
	}
	if(self.onClose && opts && opts.url != 'undefined') {
		self.onClose();
		self.onClose=null;
	}
	if (opts) {
		if (opts.url) {
			self.foxDisplayMessage = opts.url;
			var optURL = 1;
		}
		
		if (opts.callback) self.callback = opts.callback;
		
		if (opts.close) self.onClose = opts.close;
	} 

	self.foxPanel.show();
	
	if (self.foxDisplayMessage != self.lastFoxDisplayMessage || optURL) {
		
		self.foxDisplay.load(self.incPath + self.foxDisplayMessage, '' ,self.callback).show();
		self.lastFoxDisplayMessage = self.foxDisplayMessage;
	}

	self.expanded = true;
	self.foxHelper.css({overflow:"hidden"});
	
	return self
};



/* confirmation modal
---------------------------------*/
Foxhelper.prototype.confirm = function(opts){
	var self = this;
	var dock = true;
	var confirmButtonText = "Confirm";
	var closeFunc = null;
	var offset = opts.offset ? opts.offset : {x:0,y:0} 
	
	
	if (opts.confirmButtonText) { confirmButtonText = opts.confirmButtonText; }
	if (opts.dock != 'undefined') { dock = opts.dock; }
	if (opts.close) { closeFunc = opts.close }
	
	
	self.center(offset).display({
		url: 'confirm',
		callback: function() {
			$('#foxConfirmMessage').html(opts.message);
			$('#foxConfirmYesText').text(confirmButtonText);
			$('#foxConfirmYes').bind('click',function(){
				if (dock != 'undefined') { page.fox.dock(); }
				opts.success();
			});
		},
		close: closeFunc
	});
	
	return self;
};

/* confirmation modal
---------------------------------*/
Foxhelper.prototype.message = function(opts){
	var self = this;
	var closeText = 'Close';
	if (opts.closeText) closeText = opts.closeText;
	
	self.center({x:0,y:0}).display({
		url: 'message',
		callback: function() {
			$('#foxMessage').html(opts.message);
			$('#foxTitle').text(opts.title);
			$('#foxCloseText').text(closeText);
		}
	});
	
	return self;
};

	
/* detects if fox is on menu
---------------------------------*/
Foxhelper.prototype._foxOnMenu = function(){
	var self = this;
	var fromBottom = parseInt($(window).height()) - parseInt(self.foxHelper.css("top"))
	if (fromBottom < 170)
	{
		return true;
	}
	else
	{
		return false;
	}
};

/* checks to see if fox is over boundary
---------------------------------*/
Foxhelper.prototype._keepInBounds = function(){
	var self = this;
	var fromTop = parseInt(self.foxHelper.css("top"));
	var fromLeft = parseInt(self.foxHelper.css("left"));
	var fromRight = $(window).width() - parseInt(self.foxHelper.css("left")) - self.foxDisplayWidth;

	if (self.expanded)
	{
		if (fromTop < 0)
		{
			self.foxHelper.css("top",0)
		}
		if (fromLeft < 0)
		{
			self.foxHelper.css("left",0)
		}
		if (fromRight < 0)
		{
			self.foxHelper.css("left", $(window).width() - self.foxDisplayWidth)
		}
	}

	return self;
};

/* shows balloon
---------------------------------*/
Foxhelper.prototype.showAlert = function() {
	var self = this;
	setTimeout(function(){
		self.theFox.animate({'top':'-10px'}, 100, function(){
			$(this).animate({'top':'0'}, 250, function(){
				self.alert.bind('click',function(){
					self.center().display();
				}).slideDown('fast', function(){
					
					setInterval(function(){
						self.alert.animate({'top':'-10px'}, 200, function(){
							$(this).animate({'top':'0'}, 500);
						});
					},2500);
				});
			});
		});
	},1000);
};

/* hides balloon
---------------------------------*/
Foxhelper.prototype.hideAlert = function() {
	var self = this;
	self.alert.css({display:'none'});
};
function Homepage() {
    
    var current_pane = 1,
    	total_panes = $('#tourContent > .pane').size();
    
    function _init() {
        
        if (location.hash == '#signup') {
            //_showLeadsForm();
            _showSignUpFox();
        }
        
        $('#slideNav > li').bind('click',function(){
            _viewSlide($(this).attr('id'));
        });
        $('#slideViewer').bind('click',function(){
            _showNextSlide();
        });
        
        $('#tour-button').bind('click',function(){
        	_openTour();
        });
        $('#tour-close').bind('click',function(){
        	_closeTour();
        });
        $('.next-pane').bind('click',function(){
        	_showPane(current_pane + 1);
        });
        
        page.fox.foxDefaultMessage = 'signup';
        page.buttons.activate('a.login');
        
        _showPane(current_pane);
        _initButtons();
    }
   
    function _viewSlide(slideId) {
        $('#slideViewer').css({background: 'no-repeat url("/styles/img/'+slideId+'.png")'});
        $('#slideNav > li').removeClass('on');
        $('#'+slideId).addClass('on');
    }
    
    function _showNextSlide() {
        var listItem = $('#slideNav > li.on');
        var lastSlide = ($('#slideNav > li').length == $('#slideNav > li').index(listItem) + 1);

        if (lastSlide) {
            _viewSlide('slide_1');
        } else {
            _viewSlide(listItem.next().attr('id'));
        }
    }
    
    function _initButtons() {
        $('#signUpButton, #tour-signup-button').bind('click',function(){
            //_showLeadsForm();
            _showSignUpFox();
        });
        $('#signInButton').bind('click',function(){
            $('#signInForm').submit();
        });
        $('#signInForm input').bind('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                $('#signInForm').submit();
            } 
        });
        $('#termsLink').bind('click',function(){
        	_showTerms();
        });
        $('#privacyLink').bind('click',function(){
        	_showPrivacy();
        });
        $('#aboutLink').bind('click',function(){
        	_showAbout();
        });
        $('#supportLink').bind('click',function(){
        	_showSupport();
        });
        $('#contactLink').bind('click',function(){
        	_showContact();
        });
        
        $('#leads-button').bind('click',function(){
        	_showLeadsForm();
        });
    }

	function _showLeadsForm() {
        var opts = {
                url:"leads.html?v=beta",
                callback:_leadsLogic
        };
        page.fox.center({x:100, y:-100}).display(opts);
    }
    
    function _leadsLogic() {
		$('#send-lead').bind('click',function(){
			$.ajax({
				url: '/marketing/sendLead',
				cache: false,
				data: {
				    name: $('#lead-name').val(),
				    email: $('#lead-email').val(),
				    phone: $('#lead-phone').val(),
				    message: $('#lead-message').val()
				},
				type: 'POST',
				dataType: 'json',
				beforeSend: function() {
				    page.ajaxStart();
				},
				success: function(json) {
					page.ajaxStop();
					if (json.errors.length) {
					    _displayErrors(json.errors);    
					} else {
						$('.error').remove();
						$('#lead-form').hide();
						$('#lead-thanks').show();
						$('#lead-name-thanks').text($('#lead-name').val());
					}
				}
	        });
		});
    	$('#lead-form input').bind('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                $('#send-lead').trigger('click');
            } 
        });
        $('#lead-phone').mask("(999) 999-9999");
    }
    
    function _showSignUpFox() {
        var opts = {
                url:"signup",
                callback:_signUpLogic
        };
        page.fox.center({x:100, y:-100}).display(opts);
    }
    
    function _signUpLogic() {
    	
        $('#step1 input').bind('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                _checkBasicInfo();
            } 
        });
        $('#step2 input').bind('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                _checkAuthInfo();
            } 
        });
         
        $('#foxhelper .button').bind('click',function(){
            label = $(this).attr('rel').length ? $(this).attr('rel') : $(this).attr('id');
            switch(label) {
                case 'step1':
                    _signUpShowStep(label);
                    break;
                case 'step2':
                    _signUpShowStep(label);
                    break;
                case 'checkBasicInfo':
                    _checkBasicInfo();
                    break;
                case 'checkLoginInfo':
                    _checkAuthInfo();
                    break;
                case 'signUpNow':
                    _signUpNow();
                    break;
                case 'agreeWithTerms':
                	_agreeWithTerms();
                	break;
            }
        });
        _signUpShowStep('step0');
        
        
        $('#recaptcha_response_field').live('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                _signUpNow();
            } 
        });
        Recaptcha.create("6LclDgwAAAAAAMjA9r5epZYJW_ZXXmqRcBq9vfeE",
            "captcha", {
           theme: "custom"
        });
        $('#signupPhone').mask('(999) 999-9999');
    }
    
    function _displayErrors(errors) {
        $('.error').remove();
        $.each(errors, function(i,val){
            var html = '<div class="error"><span><span>'+val.message+'</span></span></div>';
            $(val.selector).before(html);
        });
    }
    
    function _agreeWithTerms() {
    	_signUpShowStep('step1');
        $('#signupFName').focus();
    }
    
    function _signUpShowStep(step) {
        var stepNum = parseInt(step.replace('step',''));
        var barWidth = (stepNum - 1) * 100 / 3 + '%';
        
        if (parseInt(stepNum) === 0) {
        	$('.progress, #progressInfo').hide();
        } else {
        	$('.progress, #progressInfo').show();
        	$('#foxhelper .step').removeClass('on');
	        $('#'+step).addClass('on');
	        
	        $('#progressBar').animate({width:barWidth});
	        $('#progressInfo').text('Step '+stepNum+' of 3');
        }
        
    }
    
    function _checkBasicInfo() {
        $.ajax({
            url: '/account/signUpBasicInfoCheck',
			cache: false,
            data: {
                company: $('#signupCompany').val(),
                fname: $('#signupFName').val(),
                lname: $('#signupLName').val(),
                email: $('#signupEmail').val(),
                phone: $('#signupPhone').val()
            },
            type: 'POST',
            dataType: 'json',
            beforeSend: function() {
                page.ajaxStart();
            },
           success: function(json) {
                page.ajaxStop();
                if (json.errors.length) {
                    _displayErrors(json.errors);    
                } else {
                    $('.error').remove();
                    _signUpShowStep('step2');
                    $('#signupUsername').focus();
                }
           }
        });
    }
    
    function _checkAuthInfo() {
        $.ajax({
            url: '/account/signUpAuthInfoCheck',
			cache: false,
            data: {
                username: $('#signupUsername').val(),
                password: $('#signupPassword').val(),
                secret: $('#signupSecret').val()
            },
            type: 'POST',
            dataType: 'json',
            beforeSend: function() {
                page.ajaxStart();
            },
           success: function(json) {
                page.ajaxStop();
                if (json.errors.length) {
                    _displayErrors(json.errors);    
                } else {
                    $('.error').remove();
                    _signUpShowStep('step3');
                    $('#recaptcha_response_field').focus();
                }
           }
        });
    }
    
    function _signUpNow() {
        $.ajax({
            url: '/account/createNewClient',
			cache: false,
            data: {
                company: $('#signupCompany').val(),
                fname: $('#signupFName').val(),
                lname: $('#signupLName').val(),
                email: $('#signupEmail').val(),
                phone: $('#signupPhone').val(),
                username: $('#signupUsername').val(),
                password: $('#signupPassword').val(),
                secret: $('#signupSecret').val(),
                captchaChallenge: Recaptcha.get_challenge(),
                captchaResponse: Recaptcha.get_response()
            },
            type: 'POST',
            dataType: 'json',
            beforeSend: function() {
                $('#progressBar').css({width:'100%'});
                page.ajaxStart();
            },
           success: function(json) {
                page.ajaxStop();
                if (json.errors.length) {
                    _displayErrors(json.errors);
                    $('#recaptcha_image').hide('fast');
                    Recaptcha.reload();
                    Recaptcha.focus_response_field();
                    $('#recaptcha_image').show('fast');
                } else {
                    page.fox.dock();
                    _autoAuthorization();
                }
           }
        });
    }
    
    function _autoAuthorization() {
        $('#username').val($('#signupUsername').val());
        $('#password').val($('#signupPassword').val());
        $('#signInForm').submit();
    }
    
    function _openTour() {
    	$('#tour').fadeIn('fast', function(){
    		$('#tourContent').fadeIn(function(){
    			
    			$(document).bind('keydown',function(e){
    				var code = e.keyCode || e.which;
	                if (code == 37) { 
	                	if (current_pane > 1) _showPane(current_pane - 1);
	                    e.preventDefault();
	                } else if (code == 39) {
	                    if (current_pane < total_panes) _showPane(current_pane + 1);
	                    e.preventDefault();
	                } else if (code == 27) {
	                	_closeTour();
	                }
	            });
	            
    		});
    	});
    }
    function _closeTour() {
    	$('#tourContent').fadeOut('fast', function(){
    		$('#tour').fadeOut(function(){
    			$(document).unbind('keydown');
    		});
    	})
    }
    
    function _showPane(num) {
    	var exists = $('#tourpane-' + num).size();
    	current_pane = exists > 0 ? num : 1;
    	$('#tourContent > .pane').hide();
    	setTimeout(function(){
    		$('#tourpane-' + current_pane).show();
    	}, 1);
    }
    
    function _showTerms() {
        var opts = {
                url:"terms.html"
        };
        page.fox.center({x:0, y:-100}).display(opts);
    }
    
    function _showPrivacy() {
        var opts = {
                url:"privacy.html"
        };
        page.fox.center({x:0, y:-100}).display(opts);
    }
    
    function _showAbout() {
        var opts = {
                url:"about.html"
        };
        page.fox.center({x:0, y:-100}).display(opts);
    }
    
    function _showSupport() {
        var opts = {
                url:"support.html"
        };
        page.fox.center({x:0, y:-100}).display(opts);
    }
    
    function _showContact() {
        var opts = {
                url:"contact.html"
        };
        page.fox.center({x:0, y:-100}).display(opts);
    }
    
    
    
    _init();
}
function SignIn() {
    
    function _init() {
        
        _checkRedirect();
        
        var buttons = new Buttons;
        
        $('#username').focus();
        
        $('#signInButton').bind('click',function(){
           $('#signInForm').submit(); 
        });
        
        $('#signInForm input').bind('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                $('#signInForm').submit();
            } 
        });
        
        $('.forgotEmail').bind('click',function(){
            _showEmailView();
        });
        
        $('.back').bind('click',function(){
            _showDefaultView(); 
        });
        $('#signInAgain').bind('click',function(){
            _showDefaultView('password'); 
        });
        $('#remindMe').bind('click',function(){
            $.ajax({
                url: '/account/recoverPasswordByEmail',
				cache: false,
                data: {
                    email: $('#email').val()
                },
                type: 'POST',
                dataType: 'json',
                beforeSend: function() {
                    $('div#eventStatus').css({display:'block'});
                },
               success: function(json) {
                    $('div#eventStatus').css({display:'none'});
                    if (json.error) {
                        $('#emailError').text(json.error).css({display:'block'});   
                    } else {
                        $('#emailError').css({display:'none'});
                        _showHintView(json.username, json.secret);
                    }
               }
            });
             
        });
        $('#email').bind('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                $('#remindMe').click();
            } 
        });
    }
    
    function _showEmailView() {
        $('.view').removeClass('on');
        $('.view.emailReminder').addClass('on');
        $('#email').focus();
    }
    
    function _showDefaultView(focus) {
        $('.view').removeClass('on');
        $('.view.default').addClass('on');
        if (focus == 'password') {
            $('#password').focus();
        } else {
            $('#username').focus();
        }
    }
    
    function _showHintView(username, secret) {
        $('#username').val(username);
        $('#passwordSecret').text(secret);
        $('#emailRecoveryDestination').text($('#email').val());
        $('.view').removeClass('on');
        $('.view.hint').addClass('on');
    }
    
    function _checkRedirect() {
    	if (location.hash) {
    		location.href = location.hash.replace(/^.*#/, '');
    	}
    }
    
    _init();
}
function Activate(code) {
    
    function _init() {
        $('#cannotActivate').css({display:'none'});
        var buttons = new Buttons;
        $('#username').focus();
        $('#activateButton').bind('click',function(){
        	$.ajax({
				async: true,
				dataType: 'json',
				type: 'POST',
				url: '/account/activateUser',
				data: {
        			username: $('#username').val(),
        			password: $('#password').val(),
        			reminder: $('#reminder').val(),
        			code: code
        		},
				beforeSend: function() {
					$('div#eventStatus').css({display:'block'});
				},
				success: function(json) {
					$('div#eventStatus').css({display:'none'});
					$('#activateError').removeClass('on').text('');
					if (json.errors.length > 0) {
						$('#activateError').addClass('on').text(json.errors[0]);
					} else {
						$('#activationForm').attr('action','/account').submit();
					}
				}
			});
        });
        $('#activationForm input').bind('keypress',function(e){
        	var code = e.keyCode || e.which;
			if(code == 13) { 
				$('#activateButton').click();
			}
        });
    }
    
    function _decline() {
    	$('#activationForm').css({display:'none'});
    }
   	
   	if (code != 'fake') {
    	_init();
    } else {
    	_decline();
    }
}
function Dashboard() 
{
	var self = this;
	
	self.searchPanel = $("#searchpanel");
	self.searchBox = $("#searchBox");
	self.searchBox.focus();
		
	self.refresh().init();
	$(window).resize(function(){
		self.refresh();
	});
}

Dashboard.prototype.refresh = function() {
	var self = this;
	
	var winW = $(window).width()
	if (winW < 964) winW = 964;
	var searchPanelW = self.searchPanel.width()
	self.searchPanel.css("left",winW/2 - searchPanelW/2);
	
	return self;
}

Dashboard.prototype.init = function() {
	var self = this,
		optlist = $('#dashboard-pulse-options > li');
	
	self.pulse = new Pulse('#dashboard-pulse');
	
	page.request({
		url: '/pulse/get',
		success: function(json) {
			self.pulse.refresh(json);
		}
	});
	
	optlist.bind('click',function(){
		var element = $(this),
			type = element.attr('rel'),
			label = element.text();
		
		optlist.removeClass('on');
		element.addClass('on');
		
		page.request({
			url: '/pulse/get',
			request: {
				type: type
			},
			success: function(json) {
				$('#dashboard-pulse-label').text(label);
				self.pulse.refresh(json);
			}
		});
		
	});
	
	$('#rent-progress').bind('click',function(){
		location.href = '/property/record';
	});
	
	return self;
}
/* 
	tasks remaining by Sunday
		- forms error handling
		- upload file event handling
---------------------------------*/

/* 
	PropertySetup Class
	
	Description: 
		The purpose of this class is to handle all the events for the property setup page.
		This page requires that the Rentfox 'Page' object be called on the page and available globally.
	
	Functions:
		- Displays data on properties
		- Saves property data
		- uses unitscroller to navigate units with custom functions to show whether the unit has floorplans or not
		- updates the progress of the units
		- allows floorplans to be created and assigned to units
		- allows deletion of floor plans
	
	This Class:
		- when the class is first called
		
---------------------------------*/
function PropertySetup(data) 
{
	var self = this;
	
	self.propertyId = false;
	self.currentUnitId = false;
	if(data){
		if(data.propertyId) {self.propertyId = data.propertyId;}
		if(data.unitId) {self.currentUnitId = data.unitId;}
	}
	
	self.deletePropertyLink = $('#deletePropertyLink,#propertyOptionsList .delete');
	
	self.propertyName = $('#propertyNameLabel');
	self.propertyStreet = $('#propertyStreetLabel');
	self.propertyCity = $('#propertyCityLabel');
	self.propertyState = $('#propertyStateLabel');
	self.propertyZip = $('#propertyZipLabel');
	self.propertyPhoto = $('#propertyPhotoEdit');
	self.propertyThumbnail = $('#propertyPhotoDisplay');
	
	self.propertyForm = $('#propertyName, #propertyStreet, #propertyZip');
	self.propertyNameInput = $('#propertyName');
	self.propertyStreetInput = $('#propertyStreet');
	self.propertyZipInput = $('#propertyZip');
	self.savePropertyButton = $('#savePropertyButton');
	self.savePropertyCancel = $('#savePropertyCancel');
	self.editPropertyButton = $('#editPropertyButton');
	
	self.unitMakerButton = $('#unitMakerButton');
	self.unitMakerButtonLabel = $('#unitMakerButton > span');
	self.unitMakerInput = $('#unitsInput');
	self.unitMakerShortcuts = $('#unitMakerShortcuts');
	self.textarea = $('#unitInfo textarea');
	self.unitbox = $('#unitbox');
	self.unitInfoEdit = $('#editFloorPlan');
	self.unitInfoDisplay = $('#displayFloorPlan');
	
	self.floorPlan = $('#floorPlan');
	self.floorPlanForm = $('#unitForm');
	self.floorPlanInfo = $('#floorPlanInfo');
	self.floorPlanLabel = $('#floorPlanLabel');
	self.floorPlanPhoto = $('#unitInfo .uploadPlaceHolder');
	self.floorPlanDisplayPhoto = $('#floorPlanDisplayPhoto');
	self.floorPlanList = $('#floorPlanList');
	self.floorPlanListItem = $('#floorPlanList > li');
	self.saveFloorPlanButton = $('#saveFloorPlanButton');
	self.saveFloorPlanCancel = $('#saveFloorPlanCancel');
	self.floorPlanNameInput = $('#floorPlanName');
	self.unitLabel = $('#unitLabel, #unitEditorLabel');
	self.sqftInput = $('#sqft');
	self.bedsInput = $('#beds');
	self.bathsInput = $('#baths');
	self.floorPlanDescriptionInput = $('#floorPlanDescription');
	self.unitPhotosLabel = $('#unitPhotosLabel');
	self.assignFloorPlanStatus = false;
	
	self.progress = $('#progress');
	self.progressBar = $('#progress > .bar > span');
	self.progressLabel = $('#progress > label');
	self.exitSetup = $('#exitSetup');
	self.exitSetupButton = $('#exitSetupButton');
	
	
	self.tempPropertyPhoto = {thumbid:'',photoid:'',thumbpath:''};
	
	if (self.propertyId) {
		self.setPageState(2);
	} else {
		self.setPageState(1);
	}
	
	
}

/* 
	init method
	
	Description: 
		The init function is called when we know what property we are dealing with.
		It then initializes the UnitScroller, as well as makes available the Property object and gets Property Data.
		It also initializes other methods which initialize the page so that things are clickable.
		
		THIS METHOD IS NOT CALLED IF WE ARE CREATING A NEW PROPERTY
		- at least until that property is saved.
		
---------------------------------*/
PropertySetup.prototype.init = function() {
	var self = this;

	self.prop = new Property({propertyId:self.propertyId});
	self.unit = new Unit();
	self.property = self.prop.getProperty();
	self.unitscroller = new UnitScroller({
		property:self.property, 
		clickUnit:function(units, unit){

			units.removeClass('on');
			unit.addClass('on');
			
			self.currentUnitId = unit.attr('id');
			self.loadUnit();
		}
	});
	
	self.picViewer = new PicViewer('#unitPicViewer');
	self.resetScroller().initUnitButtonSetup().initPropertyInfo().initFloorPlanSave().initUnitMaker().initAjaxUpload();
	
	self.textarea.elastic();
	
	if ($('#'+self.currentUnitId).attr('id')) {
		self.unitscroller.scrollToUnit(self.currentUnitId);
		$('#'+self.currentUnitId).click();
	}
	
	if (self.property.type === 'single') {
		$('#unitMaker').hide();
		$('#scrollFrame li:first').trigger('click');
		$('#deleteUnitLink, #renameUnitLink, #unitScroller > .label').remove();
	} else {
		$('#unitMaker').show();
	}
};

/* 
	resetUnit method
	
	Description: 
		hides unit from view
		
---------------------------------*/
PropertySetup.prototype.resetUnit = function() {
	var self = this;
	self.unitInfoDisplay.css({display:"none"});
	self.unitInfoEdit.css({display:"none"});
	self.unitbox.css({display:"none"});
	return self;
};

/* 
	pageButtonSetup method
	
	Description: 
		binds certain buttons to actions on this page
		
---------------------------------*/
PropertySetup.prototype.initUnitButtonSetup = function() {
	var self = this;
	self.exitSetupButton.bind('click',function(){
		location.href='/property/view/'+self.propertyId;
	});
	
	$('#editFloorPlanLink').bind('click',function(){
		self.exitAssignFloorPlanMode();
		self.showUnitEditor({action:'edit'});
	});
	
	$('#deleteUnitLink').bind('click',function(){
		page.fox.center().display({
			url:"deleteUnitConfirm.html",
			callback:function(){
				$('#deleteUnitButton').bind('click',function(){
					self.unit.deleteUnit({
						request: {
							unitId: self.currentUnit.id,
							propertyId: self.propertyId
						},
						success: function(json) {
							page.errors.clear();
							if (json.errors) {
								page.errors.prompt({
									errors: json.errors, 
									offset: {x:0,y:0}
								});
							} else {
								self.property = json;
								self.resetUnit().resetScroller();
								page.fox.dock();
							}
						}
					});
					
				});
			}
		});
	});
	
	$('#renameUnitLink').bind('click',function(){
		var unitLabel = self.currentUnit.label;
		$('#unitLabel').css({display:'none'});
		$('#unitLabelRenamer').css({display:'block'});
		$('#unitLabelInput').val(unitLabel).focus().select();
	});
	
	$('#unitRenameCancel').bind('click',function(){
		$('#unitLabelRenamer').css({display:'none'});
		$('#unitLabel').css({display:'block'});
	});
	
	$('#unitRenameButton').bind('click',function(){
		var unitLabel = $('#unitLabelInput').val();
		self.unit.rename({
			request: {
				unitId: self.currentUnit.id,
				unitLabel: unitLabel,
				currentLabel: self.currentUnit.label,
				propertyId: self.propertyId
			},
			success: function(json) {
				page.errors.clear();
				if (json.errors) {
					page.errors.prompt({
						errors: json.errors, 
						offset: {x:-200,y:0}
					});
				} else {
					self.property = json;
					self.loadUnit().resetScroller();
					page.fox.dock();
				}
			}
		});
	});
	
	return self;
};

/* 
	loadUnit method
	
	Description: 
		Once a person clicks on a unit on the UnitScroller, this method displays the unit and all it's information.
		In addition, this method initializes the form to edit the unit as well.
		This unit also initializes ability to manage floorplans for the unit.
		
---------------------------------*/
PropertySetup.prototype.loadUnit = function() {
	var self = this, 
		html = [],
		unitid = self.currentUnitId;
	
	self.unitbox.css({display:"block"});
	$('#unitLabelRenamer').css({display:'none'});
	$('#unitLabel').css({display:'block'});
	
	$('#unitTooltip').hide();
	
	self.currentUnit = self.getUnit(unitid);
	var type = self.property.type,
		label = type === 'single' ? self.currentUnit.label : 'Unit #' + self.currentUnit.label;
		
	self.unitLabel.text(label).unbind().bind('click',function(){
		location.href = '/unit/view/'+unitid;
	});
	self.unitPhotosLabel.text('Upload photos for ' + label);
	self.loadFloorPlanList();
		
	if (self.currentUnit.floorPlan) {
		var currentFloorplan = self.getFloorplan( self.currentUnit.floorPlan.id );
		self.floorPlanUploader.setData({
			floorplanId: self.currentUnit.floorPlan.id
		});
		html[0] = '<p>' + self.currentUnit.floorPlan.sqft + ' sqft<br />' + self.currentUnit.floorPlan.beds + ' br / '  + self.currentUnit.floorPlan.baths + ' ba</p>';
		if (self.currentUnit.floorPlan.description) {html[1] = '<p>' + self.currentUnit.floorPlan.description + '</p>';}
		html[2] = '<div class="assign"><a class="button" id="assignFloorPlanToOtherUnits"><span>&laquo; Assign floor plan to other units</span></a></div>';
		self.floorPlanDisplayPhoto.css({display:'block'});
		self.floorPlan.html(html.join('')).css({display:'block'});
		self.floorPlanLabel.text(self.currentUnit.floorPlan.label);
		
		if (type === 'single') $('#assignFloorPlanToOtherUnits').remove();
		
		if (currentFloorplan.thumb) {
			self.floorPlanPhoto.addClass('photo').children('img').attr({src: currentFloorplan.thumb});
		} else {
			self.floorPlanPhoto.removeClass('photo');
		}
		
		self.setupUploader();
		
		self.showUnit();
		$('#assignFloorPlanToOtherUnits').bind('click',function(){
			self.assignFloorPlanMode();
		});
		$("#editFloorPlanLink").css({display:"block"});
		
		$("#unitPicViewer").css({display:"block"});
		
		// unit photo uploader
		self.unitUploader.setData({
			unitid: self.currentUnit.id
		});
		page.request({
			url: '/unit/photos',
			type: 'GET',
			request: {
				unitid: self.currentUnit.id
			},
			success: function(json) {
				self.picViewer.setup( json );
			}
		});
		
	} else {
		$("#unitPicViewer").css({display:"none"});
		$("#editFloorPlanLink").css({display:"none"});
		if (self.property.floorPlans) {
			self.floorPlanDisplayPhoto.css({display:'none'});
			self.floorPlan.css({display:'none'});
			self.floorPlanLabel.text('Choose floor plan');
			self.showUnit();
		} else {
			self.showUnitEditor({action:'new'});
		}
	}
	
	return self;
};

/* 
	assignFloorPlanMode method
	
	Description: 
		Turns the UnitScroller into checkboxes so that the user can select which units to apply the current floorplan to.
		In addition this method has form processing for when the save button is clicked.
		This method will provide buttons to cancel out of the mode or save&exit the mode.
		
---------------------------------*/
PropertySetup.prototype.assignFloorPlanMode = function() {
	var self = this;
	
	var floorPlanId = self.currentUnit.floorPlan.id;
	
	self.assignFloorPlanStatus = true;
		
	$('#assignFloorPlanToOtherUnits span').text('I\'m done, save!').parent().addClass('primary').unbind().bind('click',function(){
		
		var units = '';
		$('#scrollFrame li input:checked').each(function() {
			units += $(this).parent().attr('id') + ',';
		});
		
		self.prop.assignFloorPlansToUnits({
			floorplanId: floorPlanId,
			units: units.slice(0, -1),
			propertyId: self.propertyId,
			success: function(json) {
				page.errors.clear();
				if (json.errors) {
					page.errors.prompt({
						errors: json.errors, 
						offset: {x:-270,y:0}
					});
				} else {
					self.property = json;
					self.exitAssignFloorPlanMode();
					page.fox.dock();
				}
			}
		});


		
	}).after('<a id="assignFloorPlanToOtherUnitsCancel" class="button"><span>Cancel</span></a>');
	
	$('#assignFloorPlanToOtherUnitsCancel').bind('click',function(){
		self.exitAssignFloorPlanMode();
	});
		
	self.unitscroller.property = self.property;
	self.unitscroller.loadUnits({currentUnit: self.currentUnit.id}).initListItems({
		eachUnit: function(unit){
			var html = '<input type="checkbox" id="ck_' + unit.attr('id') + '" />';
			var thisFloorPlanId = self.getUnit(unit.attr('id')).floorPlan.id;
			if (thisFloorPlanId) {
				unit.addClass('inuse');
			}
			if (thisFloorPlanId == floorPlanId) {
				html = '<input type="checkbox" id="ck_' + unit.attr('id') + '" checked="checked" />';
				unit.addClass('highlight');
			}
			unit.prepend(html);
		},
		allUnits: function(units) {
			units.unbind('click');
			$('#scrollFrame > ul > li').unbind().bind('click',function(){
				if(self.unitscroller.clickable && !$(this).children('input').attr('disabled')) {
					if ($(this).hasClass('highlight')) {
						$(this).removeClass('highlight').children('input').attr({checked:''});
					} else {
						$(this).addClass('highlight').children('input').attr({checked:'checked'});
					}
				}
				self.unitscroller.clickable = true;
			});
		}
	});
	
	return self;
};

/* 
	exitAssignFloorPlanMode method
	
	Description: 
		Exits the assign floor plan to unit mode and gets rid of the checkboxes by reloading the unitscroller to its original default.
		
---------------------------------*/
PropertySetup.prototype.exitAssignFloorPlanMode = function() {
	var self = this;
	
	if (self.assignFloorPlanStatus) {
		self.resetScroller().loadUnit();
	} else {
		self.assignFloorPlanStatus = false;
	}
	
	return self;
};

/* 
	loadFloorPlanList method
	
	Description: 
		This is called from the loadUnit function.
		This loads the floorplan dropdown selection based on the floorplans available on the property JSON.
		A button is also offered for creating new floor plans.
		
---------------------------------*/
PropertySetup.prototype.loadFloorPlanList = function() {
	var self = this;
	var html = [];
	
	for (var i in self.property.floorPlans) {
		if (self.currentUnit.floorPlanid && self.currentUnit.floorPlan.id == self.property.floorPlans[i].id) {
			html[i] = '<li class="on" id="' + self.property.floorPlans[i].id + '"><span class="delete"></span><span class="label" title="' + self.property.floorPlans[i].label + '">' + self.property.floorPlans[i].label + '</span></li>';
		} else {
			html[i] = '<li id="' + self.property.floorPlans[i].id + '"><span class="delete"></span><span class="label" title="' + self.property.floorPlans[i].label + '">' + self.property.floorPlans[i].label + '</span></li>';
		}
	}
	self.floorPlanList.html(html.join('')).prepend('<li class="new">Create new floor plan</li>');
		
	$('#floorPlanList > li').unbind().bind('click',function(e){
		var thisFloorPlanId = $(this).attr('id');
		var createNew = $(this).hasClass('new');
		var isSameFloorPlan = thisFloorPlanId == self.currentUnit.floorPlan.id;
		
		self.exitAssignFloorPlanMode();
		
		if ($(e.target).hasClass('delete')) {
			var targetedFloorPlanId = $(e.target).parent().attr('id');
			page.fox.center().display({
				url:"deleteFloorPlanConfirm.html",
				callback:function(){
					$('#deleteFloorPlanButton').bind('click',function(){
						self.prop.deleteFloorPlan({
							propertyId: self.propertyId,
							floorPlanId: targetedFloorPlanId,
							success: function(json) {
								page.errors.clear();
								if (json.errors) {
									page.errors.prompt({
										errors: json.errors, 
										offset: {x:0,y:0}
									});
								} else {
									self.property = json;
									self.loadUnit().resetScroller();
									page.fox.dock();
								}
							}
						});
						
					});
				}
			});
		} else {
			if (createNew) {
				self.showUnitEditor({action:'new'});
			} else if (!isSameFloorPlan) {
				self.unit.addFloorPlanToUnit({
					floorplanId: thisFloorPlanId,
					unitId: self.currentUnit.id,
					propertyId: self.propertyId,
					success: function(json) {
						page.errors.clear();
						if (json.errors) {
							page.errors.prompt({
								errors: json.errors, 
								offset: {x:0,y:0}
							});
						} else {
							self.property = json;
							self.loadUnit().resetScroller();
							page.fox.dock();
							self.loadUnit();
						}
					}
				});
				
			}
		}
	});
	
	return self;
};

/* 
	showUnitEditor method
	
	Description: 
		This is actually more of a floorplan editor than a unit editor.
		It switches from the unit mode to editing the unit floorplan mode.
		Changes to one floorplan affect all units with the same floorplan.
		
---------------------------------*/
PropertySetup.prototype.showUnitEditor = function(data) {
	var self = this;
	
	self.saveFloorPlanAction = data.action;
	if (data.action == 'edit') {
		self.floorPlanNameInput.attr({value:self.currentUnit.floorPlan.label}).addClass('active');
		self.sqftInput.attr({value:self.currentUnit.floorPlan.sqft}).addClass('active');
		self.bedsInput.attr({value:self.currentUnit.floorPlan.beds}).addClass('active');
		self.bathsInput.attr({value:self.currentUnit.floorPlan.baths}).addClass('active');
		self.floorPlanDescriptionInput.val(self.currentUnit.floorPlan.description);
	} else {
		self.floorPlanNameInput.attr({value:self.floorPlanNameInput.attr('alt')}).removeClass('active');
		self.sqftInput.attr({value:self.sqftInput.attr('alt')}).removeClass('active');
		self.bedsInput.attr({value:self.bedsInput.attr('alt')}).removeClass('active');
		self.bathsInput.attr({value:self.bathsInput.attr('alt')}).removeClass('active');
		self.floorPlanDescriptionInput.val('');
	}
	
	if (!self.property.floorPlans){
		self.saveFloorPlanCancel.css({display:'none'});
	} else {
		self.saveFloorPlanCancel.css({display:'block'});
	}
	self.unitInfoDisplay.css({display:'none'});
	self.unitInfoEdit.css({display:'block'});
	
	return self;
};

/* 
	showUnit method
	
	Description: 
		This is used to display the unit, as opposed to the unit editor
		
---------------------------------*/
PropertySetup.prototype.showUnit = function() {
	var self = this;
	
	self.unitInfoDisplay.css({display:'block'});
	self.unitInfoEdit.css({display:'none'});
		
	return self;
};

/* 
	getUnit method
	
	Description: 
		This method takes a unitId, and returns a unit with all its properties.
		This is one by inspecting the property object, rather than a unit object.
		
---------------------------------*/
PropertySetup.prototype.getUnit = function(unitId) {
	var self = this;
	
	for (var i in self.property.units) {
		if (self.property.units[i].id == unitId) {
			return self.property.units[i];
		}
	}
	return false;
};

PropertySetup.prototype.getFloorplan = function(floorplanId) {
	var self = this;
	
	for (var i in self.property.floorPlans) {
		if (self.property.floorPlans[i].id == floorplanId) {
			return self.property.floorPlans[i];
		}
	}
	return false;
};


/* 
	setPageState method
	
	Description: 
		There are 2 possible states, 1 and 2.
		1 - this is called if no propertyId is called to the PropertySetup Class, which means we are creating a new unit.
		2 - this is called if we are editing a current existing property, or had just saved a property.
		The main function here is to hide UI if there is no property yet (state==1) and present the user with a form to create a property.
		It then creates a property and sets the state==2, which allows all other UI to show.
		
---------------------------------*/
PropertySetup.prototype.setPageState = function(state) {
	var self = this;
	switch (state) 
	{
		case 1:
			$('#property-preview').hide();
			$('#edit-mode-text').css({'padding-left':0});
			self.setupUploader();
			var newPropertyUpload = new AjaxUpload('#uploadPropertyPhoto', {
				action: '/property/uploadTempPhoto',
				onSubmit: function(file, extension){
					page.ajaxStart();
				},
				responseType:'json',
				onComplete: function(file, response) {
					page.ajaxStop();
					if (response.errors) {
						page.errors.prompt(response);
					} else {
						self.tempPropertyPhoto = response; 
						self.propertyPhoto.addClass('photo').children('img').attr({src:response.thumbpath});
						self.setupUploader();
					}
				}
			});
			
			$('#propertyInfo').css({display:'block'});
			self.pageState = 1;
			page.nav.hideSubmenu();
			self.savePropertyCancel.css({display:'none'});
			self.editPropertyInfo();
			self.progress.css({display: 'none'});
			
			self.savePropertyButton.bind("click",function(){
				var prop = new Property(),
					property_type = $('#propertyType > option:selected').attr('value');
				var json = prop.create({
					request: {
						name: self.propertyNameInput.attr('value'),
						type: property_type,
						street: self.propertyStreetInput.attr('value'),
						zip: self.propertyZipInput.attr('value'),
						state: $('#propertyState').val(),
						city: $('#propertyCity').val(),
						thumbid: self.tempPropertyPhoto.thumbid,
						photoid: self.tempPropertyPhoto.photoid
					},
					success: function(json) {
						page.errors.clear();
						if (json.errors) {
							page.errors.prompt({
								errors: json.errors, 
								offset: {x:0,y:-40}
							});
						} else {
							
							if (property_type === 'single') {
								self.createUnitForProperty( json.id, 'Unit' );
							} else {
								location.href = '/property/setup/' + json.id;
							}
							
						}
					}
				});
			});
			
			self.propertyForm.bind('keypress', function(e){
				var code = e.keyCode || e.which;
				if(code == 13) { 
					self.savePropertyButton.click();
				}
			});
			$('#propertyName').focus();
			
			break;
		case 2:
			$('#propertyInfo, #unitMaker, #unitList, #unitInfo').css({display:'block'});
			self.init();
			self.pageState = 2;
			page.nav.showSubmenu();
			self.showPropertyInfo();
			self.progress.css({display: 'block'});
			self.unitMakerInput.focus();
			break;
		default:
			break;
	}
	
	return self;
};

PropertySetup.prototype.createUnitForProperty = function ( property_id, unit_label ) {
	var request = {
		propertyId: property_id,
		units: unit_label,
		unitCount: 1
	};
	page.request({
		url: '/unit/create',
		request: request,
		success: function(json) {
			location.href = '/property/setup/' + json.id;
		}
	});
};

/* 
	showPropertyInfo method
	
	Description: 
		This method hides the property info editor and shows the property info.
		In addition, each time this is called, the method to update the property info based on the property object is also called.
		
---------------------------------*/
PropertySetup.prototype.showPropertyInfo = function() {
	var self = this;
	$('#propertyInfoEdit').css({display:'none'});
	$('#propertyInfoDisplay').css({display:'block'});
	self.updatePropertyInfo();
	return self;
};

/* 
	editPropertyInfo method
	
	Description: 
		This method hides the property info and shows the property info editor.
		Each time this is called, the cursor focus will be on the property Name input.
		
---------------------------------*/
PropertySetup.prototype.editPropertyInfo = function() {
	var self = this;
	self.propertyNameInput.focus();
	$('#propertyInfoDisplay').css({display:'none'});
	$('#propertyInfoEdit').css({display:'block'});
	return self;
};

/* 
	updatePropertyInfo method
	
	Description: 
		this updates the property info and photos based on current property JSON object
		
---------------------------------*/
PropertySetup.prototype.updatePropertyInfo = function() {
	var self = this;
	
	self.propertyName.text(self.property.name);
	self.propertyStreet.text(self.property.street);
	self.propertyCity.text(self.property.city);
	self.propertyState.text(self.property.state);
	self.propertyZip.text(self.property.zip);
	$("#propertyType option[value='"+ self.property.type +"']").attr('selected','selected');
	if (self.property.photo) {
		self.propertyPhoto.addClass('photo').children('img').attr({src:self.property.photo});
		self.propertyThumbnail.attr({src:self.property.photo});
	} else {
		self.propertyPhoto.removeClass('photo');
		self.propertyThumbnail.attr({src:''});
	}
	page.thumbnail.init();
	
	return self;
};

/* 
	initPropertyInfo method
	
	Description: 
		This is called from the 'init' method for organizational purposes.
		it enables buttons to be clicked and actions attached.
		Including:
		- save property button now updates property info and unbinds from "create new property"
		- cancel property button 
		- edit property button
		- delete property button
		- delete property link from MENU bar
		
---------------------------------*/
PropertySetup.prototype.initPropertyInfo = function() {
	var self = this;
	
	self.savePropertyButton.unbind().bind("click",function(){
		
		var property_type = $('#propertyType > option:selected').attr('value'),
			units_len = self.property.units.length;
		
		if (property_type === 'single' && self.property.type === 'multi' && units_len > 0) {
			page.errors.prompt({
				errors: [{'selector':'#propertyType', 
						'message':'It seems you are trying to switch to a single unit property. Please delete all your current units first.'}], 
				offset: {x:0,y:0}
			});
			return;
		}
		
		self.exitAssignFloorPlanMode();
		self.prop.save({
			request: {
				id: self.propertyId,
				type: property_type,
				name: self.propertyNameInput.attr('value'),
				street: self.propertyStreetInput.attr('value'),
				zip: self.propertyZipInput.attr('value'),
				state: $('#propertyState').val(),
				city: $('#propertyCity').val()
			},
			success: function(json) {
				page.errors.clear();
				if (json.errors) {
					page.errors.prompt({
						errors: json.errors, 
						offset: {x:0,y:-40}
					});
				} else {
					if (units_len === 0 && json.type=='single') self.createUnitForProperty(self.propertyId, 'Unit');
					if (property_type !== self.property.type) location.href = '/property/setup/'+self.propertyId;
					self.propertyId = json.id;
					self.property = json;
					self.showPropertyInfo();
					page.fox.dock();
				}
			}
		});

	}).addClass('fixedLength').children('span').text('Save');
	
	self.savePropertyCancel.bind('click',function(){
		self.exitAssignFloorPlanMode();
		self.showPropertyInfo();
	});
	
	self.editPropertyButton.bind("click",function(){
		self.exitAssignFloorPlanMode().setupUploader();
		self.savePropertyCancel.css({display:'block'});
		self.propertyNameInput.attr({value:self.property.name}).addClass('active');
		self.propertyStreetInput.attr({value:self.property.street}).addClass('active');
		self.propertyZipInput.attr({value:self.property.zip}).addClass('active');
		$('#propertyCity').val(self.property.city).addClass('active');
		$('#propertyState').val(self.property.state).addClass('active');
		self.editPropertyInfo();
	});
	
	self.deletePropertyLink.bind('click',function(){
		page.fox.center().display({
			url:"deletePropertyConfirm.html",
			callback:function(){
				$('#deletePropertyButton').bind('click',function(){
					self.prop.deleteProperty({
						propertyId: self.propertyId,
						success: function(json) {
							page.errors.clear();
							if (json.errors) {
								page.errors.prompt({
									errors: json.errors, 
									offset: {x:0,y:0}
								});
							} else {
								location.href='/dashboard';
							}
						}
					});
					
				});
			}
		});
	});
	
	self.propertyName.bind('click',function(){
		location.href = '/property/view/'+self.propertyId;
	});
		
	return self;
};

/* 
	initFloorPlanSave method
	
	Description: 
		This initializes the floor plan save and cancel buttons used from the floor plan editor (aka unit edit mode)
		
---------------------------------*/
PropertySetup.prototype.initFloorPlanSave = function(){
	var self = this;
	self.saveFloorPlanButton.bind('click',function(){
		if (self.saveFloorPlanAction == 'edit') {
			page.inputText.clear();
			self.prop.saveFloorPlan({
				input: {
					name: self.floorPlanNameInput.attr('value'),
					sqft: self.sqftInput.attr('value'),
					beds: self.bedsInput.attr('value'),
					baths: self.bathsInput.attr('value'),
					description: self.floorPlanDescriptionInput.attr('value')
				},
				floorplanId: self.currentUnit.floorPlan.id,
				success: function(json) {
					page.errors.clear();
					if (json.errors) {
						page.errors.prompt({
							errors: json.errors, 
							offset: {x:-190,y:-40}
						});
					} else {
						self.property = json;
						self.loadUnit().resetScroller();
						page.fox.dock();
					}
				}
			});
			page.inputText.reset();
		} else {
			page.inputText.clear();
			self.prop.createFloorPlan({
				input: {
					name: self.floorPlanNameInput.attr('value'),
					sqft: self.sqftInput.attr('value'),
					beds: self.bedsInput.attr('value'),
					baths: self.bathsInput.attr('value'),
					description: self.floorPlanDescriptionInput.attr('value')
				},
				unitId: self.currentUnit.id,
				propertyId: self.propertyId,
				success: function(json) {
					page.errors.clear();
					if (json.errors) {
						page.errors.prompt({
							errors: json.errors, 
							offset: {x:-190,y:-40}
						});
					} else {
						self.property = json;
						self.loadUnit().resetScroller();
						page.fox.dock();
					}
				}
			});
			page.inputText.reset();
		}
	});
	self.saveFloorPlanCancel.bind('click',function(){
		self.showUnit();
	});
	return self;
};

/* 
	initUnitMaker method
	
	Description: 
		this initializes the unit maker button as well as the Hint billboard hide/show based on input focus for how to use the unit maker.
		
---------------------------------*/
PropertySetup.prototype.initUnitMaker = function(){
	var self = this;
	
	self.unitMakerButton.bind("click",function(){
		self.exitAssignFloorPlanMode();
		self.prop.addUnits({
			input: self.unitMakerInput.attr('value'), 
			success: function(json) {
				page.errors.clear();
				if (json.errors) {
					page.errors.prompt({
						errors: json.errors, 
						offset: {x:-100,y:-40}
					});
				} else {
					page.fox.dock();
					self.property = json;
					self.resetScroller().resetUnit();
					self.unitMakerInput.attr({'value':''});
				}
			}
		});
	});
	
	self.unitMakerInput.bind('keyup',function(e){
		if(e.keyCode == 13) {
			self.unitMakerButton.click();
		}
	});
	
	self.unitMakerInput.bind('focus',function(){
		self.unitMakerShortcuts.css({display:'block'});
	}).bind('blur',function(){
		self.unitMakerShortcuts.css({display:'none'});
	}).bind('keyup', function(){
		if (self.unitMakerInput.attr('value').match('x ')) {
			self.unitMakerButtonLabel.text('Delete unit numbers');
		} else {
			self.unitMakerButtonLabel.text('Add unit numbers');
		}
	});
	
	
	return self;
};

/* 
	resetScroller method
	
	Description: 
		this refreshes the UnitScroller to update to the latest data, including show how many units have floor plans.
		
---------------------------------*/
PropertySetup.prototype.resetScroller = function() {
	var self = this;
	self.unitscroller.property = self.property;
	
	$('#unitTooltip').hide();
	if (self.currentUnit) {
		self.unitscroller.loadUnits({currentUnit: self.currentUnit.id});
	} else {
		self.unitscroller.loadUnits();
		if ($('#scrollFrame > ul > li').size() > 0) $('#unitTooltip').show();
	}
	
	self.unitscroller.initListItems({
		eachUnit: function(unit){
			var thisFloorPlanId = self.getUnit(unit.attr('id')).floorPlan.id;
			unit.addClass('noFloorPlan');
			if (thisFloorPlanId) {
				unit.addClass('hasFloorPlan');
			}
		}
	});
	
	self.updateProgressBar();
	
	return self;
};

/* 
	updateProgressBar method
	
	Description: 
		Updates the progress bar when it is called to display a bar representation of the percentage of units that have floor plans (aka setup completion %).
		
---------------------------------*/
PropertySetup.prototype.updateProgressBar = function() {
	var self = this;
	
	
	var hasFloorPlan = $('#unitScroller li.hasFloorPlan').size();
	var allFloorPlans = $('#unitScroller li').size();
	var percentage = 0;
	if (allFloorPlans) {
		percentage = Math.round(100 * hasFloorPlan / allFloorPlans);
	
		if (percentage && self.pageState == 2) {
			self.progress.css({display:'block'});
		} else {
			self.progress.css({display:'none'});
		}

		self.progressBar.css({width: '' + percentage + '%' }).parent().css({display:'block'});
		self.progressLabel.text('You have associated floorplans for ' + hasFloorPlan + ' of ' + allFloorPlans + ' units (' + percentage + '%)').css({display:'block'});
		
		if (percentage == 100) {
			self.exitSetup.css({display:'block'});
		} else {
			self.exitSetup.css({display:'none'});
		}
	
	} else {
		self.progressBar.parent().css({display:'none'});
		self.progressLabel.css({display:'none'});
		self.exitSetup.css({display:'none'});
	}
	
	return self;
};

/* 
	initAjaxUpload method
	
	Description: 
		This is called from the init method and essentially allows uploading of files.
		
---------------------------------*/
PropertySetup.prototype.initAjaxUpload = function() {
	var self = this,
		picViewer = self.picViewer,
		errorlist = {errors:[]};

	self.setupUploader();

	var propertyUploader = new AjaxUpload('#uploadPropertyPhoto', {
		action: '/property/uploadPhoto',
		data: {
			propertyId: self.propertyId
		},
		onSubmit: function(file, extension){
			page.ajaxStart();
		},
		responseType: 'json',
		onComplete: function(file, response) {
			page.ajaxStop();
			if (response.errors) {
				page.errors.prompt(response);
			} else {
				self.property.photo = response.thumbpath;
				self.updatePropertyInfo().setupUploader();
			}
		}
	});
	
	self.floorPlanUploader = new AjaxUpload('#uploadFloorPlanOnDisplay', {
		action: '/floorplan/uploadPhoto',
		onSubmit: function(file, extension){
			page.ajaxStart();
		},
		responseType: 'json',
		onComplete: function(file, response) {
			page.ajaxStop();
			if (response.errors) {
				page.errors.prompt(response);
			} else {
				self.property = self.prop.getProperty();
				self.loadUnit();
			}
		}
	});
	
	self.unitUploader = new AjaxUpload('#unitPicViewer-upload', {
		action: '/unit/uploadPhoto',
		onSubmit: function(file, extension){
			page.ajaxStart();
		},
		responseType: 'json',
		onComplete: function(file, response) {
			page.ajaxStop();
			if (response.errors) {
				page.errors.prompt(response);
			} else {
				picViewer.addPhoto( response );
			}
		}
	});
	
	$('#unitPicViewer-delete').bind('click',function(){
		var photo = picViewer.photos[ picViewer.photoIndex ],
			photoid = photo ? photo.id : false;
		
		if (photoid) {
			page.fox.confirm({
				message:'Are you sure you want to delete this photo?',
				confirmButtonText: 'Delete photo',
				success:function(){
					page.request({
						url: '/unit/removePhoto',
						request: {
							photoid: photoid
						},
						success: function(json) {
							picViewer.removePhoto()
						}
					});
				}
			});
			
		} else {
			page.fox.message({
				title:"Oops!",
				message:"The photo you are trying to delete does not exist."
			});
		}
	});
	
	
	$('#unitPicViewer').filedrop({
		url: '/unit/uploadPhoto',
		data: {
			unitid: function(){
				return self.currentUnit.id
			}
		},
		error: function(err, file) {
			switch(err) {
				case 'BrowserNotSupported':
					errorlist.errors.push({selector:'',
						message:'Your browser does not support drag and drop uploading.  Currently only Firefox 3.6+ supports this feature. Please use the upload button instead.'});
					page.errors.prompt(errorlist);
					break;
				case 'TooManyFiles':
					errorlist.errors.push({selector:'',
						message:'Too many files. You can only upload 25 files at a time.'});
					page.errors.prompt(errorlist);
					break;
				case 'FileTooLarge':
					errorlist.errors.push({selector:'',
						message:file.name + ' is too large. Please keep each photo under 20MB.'});
					page.errors.prompt(errorlist);
					break;
				default:
					break;
			}
		},
		maxfilesize: 20,
		dragOver: function() {
			picViewer.activateDropzone();
		},
		dragLeave: function() {
			picViewer.deactivateDropzone();
		},
		docOver: function() {
			picViewer.showDropzone();
		},
		docLeave: function() {
			picViewer.hideDropzone();
		},
		drop: function() {
			picViewer.hideDropzone();
			errorlist.errors = [];
		},
		uploadStarted: function(i, file, len){
			page.ajaxStart();
		},
		uploadFinished: function(i, file, response, time) {
			page.ajaxStop();
			if (response[0].errors) {
				errorlist.errors.push({selector:'', 
					message: file.name + ' failed to upload. ' + response[0].errors[0].message});
				page.errors.prompt(errorlist);
				return false;
			} else {
				picViewer.addPhoto( response[0] );
			}
		}
	});
	
	return self;
};

/* 
	setupUploader method
	
	Description: 
		Either displays upload image or uploaded image depending on if there are images or not.
		This applies to:
		- property thumbnail
		- floorplan image
		
---------------------------------*/
PropertySetup.prototype.setupUploader = function() {
	var self = this;
	
	$('.uploadPlaceHolder').unbind().each(function(){
		if ($(this).hasClass('photo')) {
			$(this).css({'background': 'url(' + $(this).children('img').attr('src') + ') center center no-repeat' }).children('span').text('Replace Image');
		} else {
			var text = '';
			if ($(this).parent().attr('id') == 'saveProperty') {
				text = 'Upload photo';
			} else {
				text = 'Upload floor plan';
			}
			$(this).css({'background': 'url("/styles/img/upload_photo_bg.png")' }).children('span').text(text);
		}
	}).bind('click',function(){
		if ($(this).hasClass('photo')) {
			var img_src = $(this).find('img').attr('src').replace('-thumb','');
			page.previewModal.show(img_src);
		}
	});
	
	return self;
};

function PropertyView(data) {
	var self = this;
	
	self.propertyId = false;
	if(data) self.propertyId = data.propertyId;
	
	self.init();
	
	return self;
}

PropertyView.prototype.init = function() {
	var self = this;
	
	self.prop = new Property({propertyId:self.propertyId});
	self.property = self.prop.getProperty();
	self.unitscroller = new UnitScroller({
		property:self.property, 
		clickUnit:function(units, unit){
			var thisUnitId = unit.attr('id');
			var thisUnitLabel = unit.text();
			var thisUnit = self.getUnit(thisUnitId);
			location.href = '/unit/view/' + thisUnitId;
		}
	});
	self.unitscroller.initListItems({
		eachUnit: function(unit){
			var thisUnit = self.getUnit(unit.attr('id'));
			if (!thisUnit.floorPlan.id) {
				unit.addClass('noFloorPlan');
			} else if (thisUnit.id == self.unitId) {
				unit.addClass('on');
			}
		}
	});
		
	if (self.property.photo) $('#propertyPhotoDisplay').attr({src:self.property.photo});
	
	// pulse 
	var optlist = $('#property-pulse-options > li'),
		propertyid = self.propertyId;
	
	self.pulse = new Pulse('#property-pulse');
	
	page.request({
		url: '/pulse/get',
		request: {
			propertyid: propertyid
		},
		success: function(json) {
			self.pulse.refresh(json);
		}
	});
	
	optlist.bind('click',function(){
		var element = $(this),
			type = element.attr('rel'),
			label = element.text();
		
		optlist.removeClass('on');
		element.addClass('on');
		
		page.request({
			url: '/pulse/get',
			request: {
				type: type,
				propertyid: propertyid
			},
			success: function(json) {
				$('#property-pulse-label').text(label);
				self.pulse.refresh(json);
			}
		});
		
	});
	
	$('#rent-progress').bind('click',function(){
		location.href='/property/record#property='+self.propertyId;
	});
	
	self.renderCharts();
	
};

PropertyView.prototype.renderCharts = function() {
	var self = this;

	page.request({
		url: '/chart/monthlyOccupancy',
		request: {
			propertyid: self.propertyId
		},
		success: function(json){
			var occupancy_chart = new Highcharts.Chart({
				chart: {
					renderTo: 'monthly-occupancy-chart', 
					defaultSeriesType: 'area'
				},
				title: {
					text: 'Monthly Occupancy Chart'
				},
				xAxis: {
					categories: json.xAxis,
					title: {
						text: 'Month'
					}
				},
				yAxis: {
					title: {
						text: 'Occupancy %'
					},
					labels: {
						formatter: function() {
							return this.value + '%';
						}
					},
					max: 100
				},
				tooltip: {
					formatter: function() {
						return Highcharts.numberFormat(this.y, 0, null, ' ') + "% " + this.series.name + " in " + this.x;
					}
				},
				series: json.series
			});
			
			
		}
	});

};

PropertyView.prototype.getUnit = function(unitId) {
	var self = this;
	
	for (var i in self.property.units) {
		if (self.property.units[i].id == unitId) {
			return self.property.units[i];
		}
	}
	return false;
}

function PropertyRecord(data) {
	var self = this;
	
	self.propertyId = false;
	if(data) self.propertyId = data.propertyId;
	
	self.paidButton = '<a class="mini button paid"><span><img src="/styles/img/ico/accept.png" />Rent Received</span></a>';
	self.clickmenu = '<div class="opts"><div class="clickmenu"><div class="wrap"><label></label><div class="options"><ul><li class="late">Charge Late Fee</li><li class="undo">Undo Payment</li></ul></div></div></div></div>'
	self.months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
	self.initVisit = 1;
	var allPropList = '';
	
	function _setDefaults() {
		var curTime = new Date();
		var m = curTime.getMonth();
		var y = curTime.getFullYear()
		
		if (m === 12) {
			m = 1;
			y = y + 1;
		} else {
			m = m + 1;
		}
		
		self.thisMonth = m;
		self.thisYear = y;
		self.curMonth = m;
		self.curYear = y;
		self.curUnit = 'all';
		self.curStatus = 'all';
		self.curPage = 1;
		self.propList = allPropList;
	}
	
	
	function refreshData() {
		page.request({
			url: '/rent/json',
			request: {
				month: self.curMonth,
				year: self.curYear,
				unit: self.curUnit,
				status: self.curStatus,
				page: self.curPage,
				propList: self.propList
			},
			success: function(json) {
				self.json = json;
			}
		});
		
		var html = '';
		$.each(self.json.rent, function(i,val) {
			
			var s = 'th';
			if(val.due=='1') s = 'st';
			if(val.due=='2') s = 'nd';
			if(val.due=='3') s = 'rd';
			val.due = val.due + s;
			
			
			
			var statusHtml = '';
			if (val.statusType === 1) {
				statusHtml += '<div class="opts"><div class="clickmenu"><div class="wrap"><label></label>';
				statusHtml += '<div class="options"><ul><li class="late">Charge Late Fee</li>';
				statusHtml += '<li class="undo">Undo Payment</li></ul></div></div></div></div>';
				statusHtml += '<span>'+val.status+'</span>';
				
				html += '<tr class="ok">';
			} else if (val.statusType === 2) {
				statusHtml += self.paidButton;
				statusHtml += '<span>'+val.status+'</span>';
				html += '<tr class="overdue">';
			} else if (val.statusType === 3) {
				statusHtml += '<div class="opts"><div class="clickmenu"><div class="wrap"><label></label>';
				statusHtml += '<div class="options"><ul><li class="latePaid">Late Pay Received</li>';
				statusHtml += '<li class="undo">Undo Payment</li></ul></div></div></div></div>';
				statusHtml += '<span>'+val.status+'</span>';
				html += '<tr class="warning">';
			} else if (val.statusType === 4) {
				statusHtml += '<div class="opts"><div class="clickmenu"><div class="wrap"><label></label>';
				statusHtml += '<div class="options"><ul><li class="undo">Undo Payment</li></ul>';
				statusHtml += '</div></div></div></div>';
				html += '<tr class="ok">';
				statusHtml += '<span>'+val.status+'</span>';
			} else if (val.statusType === 5 || val.statusType === 6) {
				statusHtml += self.paidButton;
				statusHtml += '<span>'+val.status+'</span>';
				html += '<tr>';
			}
			
			
			html += '<td class="info"><span></span></td>';
			html += '<td class="property"><span>'+val.propertyName+'</span></td>';
			html += '<td class="unit on" id="'+val.unitId+'"><span>'+val.unitLabel+'</span></td>';
			html += '<td class="rent" id="'+val.leaseId+'"><span>'+val.rent.toFixed(2)+'</span></td>';
			html += '<td class="due"><span>'+val.due+'</span></td>';
			html += '<td class="status">'+statusHtml+'</td></tr>';
		});
		
		if (!html) {
			html += '<tr class="norecords"><td colspan="6"><span>No leases found.</span></td></tr>';
		}
		$('#propertyRecord tbody').html(html);
		
		_pagination();
		
	}
	
	function _hashLoad(hash) {
		if (hash) {
			// sort logic
			var pageNum = page.getHashVal('page');	
			var date = page.getHashVal('date');
			var prop = page.getHashVal('property');
			var unitLabel = page.getHashVal('unit');
			var status = page.getHashVal('status');
			
			if (pageNum && self.curPage !== 1) {
				self.curPage = parseInt(pageNum);
			} else {
				self.curPage = 1;
			}
			
			if (date) {
				var dateHash = date.split('+');
				var month = dateHash[0];
				var year = dateHash[1];
				self.curMonth = month;
				self.curYear = year;
			}
			
			if (prop) {
				if (prop === 'all') {
					self.propList = allPropList;
				} else {
					self.propList = prop;
				}
			} else {
				self.propList = allPropList;
			}
			
			if (unitLabel && unitLabel != 'all') {
				self.curUnit = unitLabel;
			}
			
			if (status) {
				self.curStatus = status;
			}
			
		} else {
			_setDefaults()
		}
		_updateDropDowns();
		refreshData();
		
	}
	
	function _updateDropDowns() {
		var date = page.getHashVal('date');
		var status = page.getHashVal('status');
		var prop = page.getHashVal('property');
		
		if (date) {
			var dateList = date.split('+');
			if (self.thisMonth === dateList[0] && self.thisYear === dateList[1]) {
				$('#dateDropDown option:first').next().attr('selected','selected');
			} else {
				$('#dateDropDown option[value='+date+']').attr('selected','selected');
			}
		} else {
			$('#dateDropDown option:first').next().attr('selected','selected');
		} 
	
		if (!prop || prop === 'all') {
			$('#propertyDropDown option:first').attr('selected', 'selected');
		} else {
			var prop = page.getHashVal('property');
			prop = prop.split('+').join(' ');
			$('#propertyDropDown option[value='+prop+']').attr('selected', 'selected');
		}
		
		if (status) {
			$('#statusDropDown option[value='+status+']').attr('selected','selected');
		} else {
			$('#statusDropDown option:first').attr('selected', 'selected');
		}
		
	}
	
	function init() {

		var clickmenu = new ClickMenu;
		
		if (self.initVisit) {
		
			page.request({
				url: '/property/getPropAndLeaseDates',
				success: function(json) {
					self.propNameDate = json;
				}
			});
			
			var dates = [];
			propDateHtml = '';
			
			if (self.propNameDate.dates.length > 0) {
				var nextMonth = self.curMonth + 1;
				var nextYear = self.curMonth == 12 ? self.curYear + 1 : self.curYear;
				propDateHtml += '<option value="'+nextMonth+'+'+nextYear+'">'+self.months[nextMonth - 1]+' '+nextYear+'</option>';
			}	
			
			$.each(self.propNameDate.dates, function(i,val) {
				var date = val.split('+');
				var m = parseInt(date[0]) - 1;
				var y = parseInt(date[1]);
				m = self.months[m]
				
				propDateHtml += '<option value="'+val+'">'+m+' '+y+'</option>';
			});
			if (!propDateHtml) {
				propDateHtml += '<option value="'+self.curMonth+'+'+self.curYear+'">'+self.months[self.curMonth - 1]+' '+self.curYear+'</option>';
			}
			
			$('#dateDropDown').html(propDateHtml);
			
			$('#dateDropDown option:first').next().attr('selected','selected');
			
			var prop = [];
			var propIdList = [];
			$.each(self.propNameDate.properties, function(i,val) {
				prop[val.name] = val.id;
				propIdList.push(val.id);
			});
			allPropList = propIdList.join(',');
			self.propList = allPropList;
			
			propHtml = '<option id="all" value="All Properties">All Properties</option>';
			for (var i in prop) {
				if (prop.hasOwnProperty(i)) {
					propHtml += '<option id="'+prop[i]+'" value="'+i+'">'+i+'</option>';
				}
			}
			$('#propertyDropDown').html(propHtml);
			self.initVisit = 0;
		}
		
		if (location.href.indexOf('#') == -1) {
			refreshData();
		}
		$.historyInit(_hashLoad);
		
		$('.mini.button.paid').live('click', function(){
			var thisRow = $(this).parent().parent();
			_markPaid(thisRow);
		});
		
		$('tbody > tr > .unit').live('click', function(e){
			var unitId = $(this).attr('id');
			var parentTR = $(this).parent();
			var opts = {
				url:"unitContact/"+unitId,
				callback:function(){
					parentTR.addClass('selected');
				},
				close: function() {
					parentTR.removeClass('selected');
				}
			};
			page.fox.center({x:125,y:-100}).display(opts);
		});
		
		$('#unit').bind('keypress', function(e){
			var code = e.keyCode || e.which;
			if(code == 13) {
				var unit = $('#unit').val()
				
				if (!unit.match(/^[a-zA-Z0-9]+$/i) && unit != "") {
					page.fox.message({
						message:'Unit filter only accepts letters and numbers. \
							Please try again.',
						close: function(){
							parentTR.removeClass('selected');
						}
					});
					return false;
				}
				
				self.curUnit = unit;
				self.curStatus = 'all';
				if (unit) {
					if (self.curPage > 1) {
						self.curPage = 1;
						$.historyLoad(page.makeMultipleHash(['unit', unit],['page', 1]));
					} else {
						$.historyLoad(page.makeHash('unit', unit));
					}
				} else {
					$.historyLoad(page.makeHash('unit', 'all'));
				}
			}
		});
		
		$('tbody > tr > .rent').live('click', function(){
			var unitId = $(this).prev().attr('id');
			var parentTR = $(this).parent();
			var payButton = parentTR.find('.paid');
			var amount = $(this).text();
			var rent = $(this);
			
			var opts = {
				url:"updateRent/"+amount,
				callback:function(){
					parentTR.addClass('selected');
					
					$('#changeRent').bind('click', function() {
					
						var newAmount = $('#rentAmount').val();
						
						if (!newAmount.match(/^(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/i)) {
							var html = '<div class="error"><span><span>Please enter a valid amount</span></span></div>';
    						$('#rentAmount').before(html);
							return false;
						}
						
						rent.html('<span>'+newAmount+'</span>');
						if (payButton.length) {
							payButton.click();
						} else {
							var unitId = parentTR.children('.unit').attr('id');
							page.request({
								url: '/rent/updateTransaction',
								request: {
									amount: newAmount,
									unitId: unitId,
									forMonth: self.curMonth,
									forYear: self.curYear
								},
								success: function(json) {
								}
							});
						}
					})
					
				},
				close: function() {
					parentTR.removeClass('selected');
				}
			};
			page.fox.center({x:0,y:-50}).display(opts);
		});
		
		$('.pagination .first').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			self.curPage = 1;
			$.historyLoad(page.makeHash('page', self.curPage));
		});
		$('.pagination .prev').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			var curEnd = self.curPage * 20;
			var curStart = curEnd - 19;
			if (curStart != 1) {
				self.curPage = self.curPage - 1;
			}
			$.historyLoad(page.makeHash('page', self.curPage));
		});
		
		$('.pagination .next').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			var totalRecords = self.json.totalRecords;
			var curEnd = self.curPage * 20;
			
			if (curEnd < totalRecords) {
				self.curPage = self.curPage + 1;
			}
			$.historyLoad(page.makeHash('page', self.curPage));
		});
		
		$('.pagination .last').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			var totalRecords = self.json.totalRecords;
			self.curPage = Math.ceil(totalRecords/20);
			$.historyLoad(page.makeHash('page', self.curPage));
		});
		
		$('#dateDropDown').change(function() {
			var value = $('#dateDropDown option:selected').attr('value');;
			var date = value.split('+');
			var m = date[0];
			var y = date[1];
			
			self.curMonth = m;
			self.curYear = y;
			
			if (self.curPage > 1) {
				self.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['date', value],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('date', value));
			}
		});
		
		$('#propertyDropDown').change(function() {
			var propSelected = $('#propertyDropDown option:selected');
			
			var propId = propSelected.attr('id');
			
			if (self.curPage > 1) {
				self.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['property', propId],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('property', propId));
			}
		});
		
		$('#statusDropDown').change(function() {
			var status = $('#statusDropDown option:selected').attr('value');
			self.curStatus = status;
			if (self.curPage > 1) {
				self.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['status', status],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('status', status));
			}
		});
		
		_setupOptmenuZIndex();
		_setupClickMenuOptions();
	
	}
	
	function _setupOptmenuZIndex() {
		
		var bIndex = 100;
		$('.opts > .clickmenu').each( function(i){
			$(this).css({'z-index':bIndex-i});
		});
		
	}
	
	function _markPaid(tr, lateFeePaid) {
		var rentCell = tr.children('td.rent')
		var leaseId = rentCell.attr('id');
		var amount = rentCell.text();
		var unitid = tr.children('td.unit').attr('id');
		var tempJson;
		var markLatePaid = 0;
		if (lateFeePaid) {markLatePaid = 1;}
		var due = tr.children('td.due').text();
		due = due.match(/^\d+/);
		
		page.request({
			url: '/rent/markPaid',
			request: {
				unitId: unitid,
				leaseId: leaseId,
				amount: amount,
				due: due,
				forMonth: self.curMonth,
				forYear: self.curYear,
				markLatePaid: markLatePaid
			},
			success: function(json) {
				tempJson = json
			}
		});
		
		var button = tr.children('td.status').children('a.paid');
		var status = tr.children('td.status').children('span');
		tr.removeClass('overdue warning').addClass('ok');
		
		if (lateFeePaid) {
			lateChargeButton = tr.children('td.status').children('.opts').children('.clickmenu').children('.wrap').children('.options').children('ul').children('.latePaid');
			status.text('Rent Received, including '+lateFeePaid+' late fee');
			lateChargeButton.remove();
		} else {
			button.replaceWith(self.clickmenu);
			status.text('Rent Received');
		}
		
		_setupOptmenuZIndex();
		
	}
	
	function _markLate(tr, unitId, lateCharge, date) {

		page.request({
			url: '/rent/markLate',
			request: {
				unitId: unitId,
				latefee: lateCharge,
				forMonth: self.curMonth,
				forYear: self.curYear,
				date: date,
				remind: $('#remindTenant').is(':checked')
			},
			success: function() {
			}
		});
		
		var button = tr.children('td.status').children('.opts');
		var status = tr.children('td.status').children('span');
		var lateChargeButton = button.children('.clickmenu').children('.wrap').children('.options').children('ul').children('.late');
		
		lateChargeButton.replaceWith('<li class="latePaid">Late Pay Received</li>');
		tr.removeClass('ok').addClass('warning');
		
		if (!lateCharge.match(/^\$.+$/i)) {
			lateCharge = parseFloat(lateCharge);
			lateCharge = '$'+lateCharge.toFixed(2);
		}
		
		status.text('Rent Received, still owes '+lateCharge+' late fee');
		
	}
	
	function _markUnpaid(tr, unitId, statusText) {
		
		page.request({
			url: '/rent/markUnpaid',
			request: {
				unitId: unitId,
				forMonth: self.curMonth,
				forYear: self.curYear
			},
			success: function() {
			}
		});
		
		var button = tr.children('td.status').children('.opts');
		var status = tr.children('td.status').children('span');
		
		button.replaceWith(self.paidButton);
		tr.removeClass('ok warning');
		status.text(statusText);
		
	}
	
	function _setupClickMenuOptions() {
			
		$('.clickmenu').live('click', function(e){
			
			var opts = null;
			var parentTR = $(e.target).closest('tr');
			switch($(e.target).attr('class')) {
				case 'late':
					var unitId = parentTR.children('.unit').attr('id');
					var transInfo = unitId + '+' + self.curMonth + '+' + self.curYear; 
					$('.error').remove();
					opts = {
						url:"lateRent/"+transInfo,
						callback:function(){
							
							$('#chargeLateFee').bind('click',function(){
								$('.error').remove();
								var returnFalse = 0;
								if ($('#lateFee').is('input')) {
									var amount = $('#lateFee').val();
									if (!amount.match(/^(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/i)) {
										var html = '<div class="error"><span><span>Please enter a valid amount</span></span></div>';
	            						$('#lateFee').before(html);
										returnFalse = 1;
									} else {
										if(amount.match(/^[0\.]*$/i)) {
											var html = '<div class="error"><span><span>Cannot charge late fee of 0</span></span></div>';
		            						$('#lateFee').before(html);
											returnFalse = 1;
										}
									}
								} else {
									var amount = $('#lateFee').html();
									if(amount == "$0.00") {
										var html = '<div class="error"><span><span>Cannot charge late fee of 0</span></span></div>';
	            						$('#lateFee').before(html);
										returnFalse = 1;
									}
								}
								
								var date = $('#rentReceivedDate').val();
								if (!date.match(/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/i)) {
									var html = '<div class="error"><span><span>Date format: mm/dd/yyyy</span></span></div>';
            						$('#rentReceivedDate').before(html);
									returnFalse = 1;
								}
								
								if (returnFalse) {
									return false;
								}
								
								var message = 'You have successfully recorded a late payment.'
								
								
								
								if ($('#remindTenant').is(':checked')) {
									message = 'You have billed <strong>'+amount+'</strong> in late fees to unit 503. \
									This unit will be notified by email of the late fee.'
								}
								page.fox.message({
									title: 'Success!',
									message: message
								});
								_markLate(parentTR, unitId, amount, date);
							});
							$('#remindTenant').bind('click', function(){
								if ($(this).is(':checked')) {
									$('#willRemindText').css({display:'block'});
								} else {
									$('#willRemindText').css({display:'none'});
								}
							});
							parentTR.addClass('selected');
							
						},
						close: function() {
							parentTR.removeClass('selected');
						}
					};
					
					
					break;
				case 'undo':
					parentTR.addClass('selected');
					page.fox.confirm({
						message:'Are you sure you want to revert this payment? \
							It will now be considered unpaid.',
						confirmButtonText: 'Yes, please undo',
						success:function(){
							var newClass = '';
							var newStatus = 'Payment Undo';
							var unitId = parentTR.children('.unit').attr('id');
							_markUnpaid(parentTR, unitId, newStatus, newClass);
						},
						close: function(){
							parentTR.removeClass('selected');
						},
						offset: {x:200,y:0}
					});
					break;
				case 'latePaid':
					var amount = parentTR.children('.status').text().match(/\$[^\s]*/);
					_markPaid(parentTR, amount);
					break;
				case 'remind':
					
					opts = {
						url:"remindTenant",
						callback:function(){
							page.inputText.reset();
							parentTR.addClass('selected');
						},
						close: function() {
							parentTR.removeClass('selected');
						}
					}
					break;
				default: break;
			}
			if (opts) { page.fox.center({x:100,y:-100}).display(opts) };
	
		});
		
	}
	
	function _pagination() {
		
		var totalRecords = self.json.totalRecords;
		var totalPages = Math.ceil(totalRecords/20)
		var curEnd = self.curPage * 20;
		var curStart = curEnd - 19;
		if (curStart > totalRecords) curStart = 1;
		if (curEnd > totalRecords) curEnd = totalRecords;
		if (totalRecords === 0) curStart = 0;
		$('.pagination .pages').html(curStart+'-'+curEnd+' of '+totalRecords);
		
		if (curEnd < totalRecords) {
			$('.pagination .next').removeClass('disabled');
			$('.pagination .last').removeClass('disabled');
		}
		
		if (self.curPage == totalPages) {
			$('.pagination .next').addClass('disabled');
			$('.pagination .last').addClass('disabled');
		}
		if (self.curPage == 1) {
			$('.pagination .first').addClass('disabled');
			$('.pagination .prev').addClass('disabled');
		}
		
		if (self.curPage != 1 && self.curPage <= totalPages) {
			$('.pagination .first').removeClass('disabled');
			$('.pagination .prev').removeClass('disabled');
		}
			
	}
	_setDefaults();
	init();
	
	return self;
}

function PropertyUnits() {
	var self = this;
	
	// private vars
	var sortOptions = ['unit',
			   'rent', 'rent.reverse',
			   'due', 'due.reverse',
			   'late', 'late.reverse'],
		lastSortBy = null,
		initVisit = 1,
		rentSort = 0,
		dueSort = 0,
		lateSort = 0,
		propName = 0
	
	// create object
	var settings = {}
	
	// constructor
	function _init() {
		defaultSettings();
		
		if (initVisit) {
			page.request({
				url: '/property/getPropertyList',
				success: function(json) {
					self.propNameList = json;
				}
			});
			var prop = [];
			
			$.each(self.propNameList.properties, function(i,val) {
				prop[val.name] = val.id
			});
			
			propHtml = '<option id="all" value="All Properties">All Properties</option>';
			for (var i in prop) {
				if (prop.hasOwnProperty(i)) {
					propHtml += '<option id="'+prop[i]+'" value="'+i+'">'+i+'</option>';
				}
			}
			$('#propertyDropDown').html(propHtml);
			initVisit = 0;
		}
		
		if (location.href.indexOf('#') == -1) {
			refreshData();
		}
		$.historyInit(_hashLoad);
	};
	
	$('#unit').bind('keypress', function(e){
		var code = e.keyCode || e.which;
		if(code == 13) {
			var unit = $('#unit').val()
			
			if (!unit.match(/^[a-zA-Z0-9]+$/i) && unit != "") {
				page.fox.message({
					message:'Unit filter only accepts letters and numbers. \
						Please try again.',
					close: function(){
						parentTR.removeClass('selected');
					}
				});
				return false;
			}
			
			highlightUnitCol();
			settings.sort = 0;
			settings.unit = unit;
			settings.status = 'all';
			if (unit) {
				if (settings.curPage > 1) {
					settings.curPage = 1;
					$.historyLoad(page.makeMultipleHash(['unit', unit],['page', 1]));
				} else {
					$.historyLoad(page.makeHash('unit', unit));
				}
			} else {
				$.historyLoad(page.makeHash('unit', 'all'));
			}
		}
	});
	
	function displayContact() {
		$('tbody > tr > .unit').bind('click', function(e){
			var unitId = $(this).attr('id');
			var parentTR = $(this).parent();
			var opts = {
				url:"unitContact/"+unitId,
				callback:function(){
					parentTR.addClass('selected');
				},
				close: function() {
					parentTR.removeClass('selected');
				}
			};
			page.fox.center({x:0,y:-100}).display(opts);
		});
	};
	
	// set defaults
	function defaultSettings() {
		settings.propertyId = 'all';
		settings.unit = 0;
		settings.status = 'all';
		settings.curPage = 1;
		settings.sort = 0;
		settings.sortOrder = 0;
		propName = 0;
	}
	
	$('#propertyDropDown').change(function() {
		var prop = $('#propertyDropDown option:selected').attr('id');
		
		if (settings.curPage > 1) {
			settings.curPage = 1;
			$.historyLoad(page.makeMultipleHash(['property', prop],['page', 1]));
		} else {
			$.historyLoad(page.makeHash('property', prop));
		}
	});
	
	$('#statusDropDown').change(function() {
		var status = $('#statusDropDown option:selected').attr('id');
		
		if (settings.curPage > 1) {
			settings.curPage = 1;
			$.historyLoad(page.makeMultipleHash(['status', status],['page', 1]));
		} else {
			$.historyLoad(page.makeHash('status', status));
		}
	});
	
	$('#rent').bind('click', function() {
		if (rentSort === 0 || rentSort === 'desc') {
			settings.sort = $(this).attr('id');
			settings.sortOrder = 'asc';
			rentSort = 'asc';
			dueSort = 0;
			lateSort = 0;
		} else {
			settings.sort = $(this).attr('id');
			settings.sortOrder = 'desc';
			rentSort = 'desc';
		}
		if (settings.curPage != 1) settings.curPage = 1;
		sort('rent');
	});
	
	$('#due').bind('click', function() {
		if (dueSort === 0 || dueSort === 'desc') {
			settings.sort = $(this).attr('id');
			settings.sortOrder = 'asc';
			dueSort = 'asc';
			rentSort = 0;
			lateSort = 0;
		} else {
			settings.sort = $(this).attr('id');
			settings.sortOrder = 'desc';
			dueSort = 'desc';
		}
		if (settings.curPage != 1) settings.curPage = 1;
		sort('due');
	});
	
	$('#late').bind('click', function() {
		if (lateSort === 0 || lateSort === 'desc') {
			settings.sort = $(this).attr('id');
			settings.sortOrder = 'asc';
			lateSort = 'asc';
			rentSort = 0;
			dueSort = 0;
		} else {
			settings.sort = $(this).attr('id');
			settings.sortOrder = 'desc';
			lateSort = 'desc';
		}
		if (settings.curPage != 1) settings.curPage = 1;
		sort('late');
	});
	
	function refreshData() {
		page.request({
			url: '/unitDisplay/json',
			request: {
				propertyId: settings.propertyId,
				unit: settings.unit,
				sort: settings.sort,
				sortOrder: settings.sortOrder,
				status: settings.status,
				curPage: settings.curPage,
				initVisit: initVisit
			},
			success: function(json) {
				self.json = json;
			}
		});
		
		var html = '';
		
		$.each(self.json.unit, function(i,val) {
			
			if (val.rent !== '-') val.rent = '$'+val.rent;
			if (val.due !== '-') {
				var s = 'th';
				if(val.due=='1') s = 'st';
				if(val.due=='2') s = 'nd';
				if(val.due=='3') s = 'rd';
				val.due = val.due + s;
			}
			
			html += '<tr><td class="property"><span>'+val.propertyName+'</span></td>';
			html += '<td class="unit" id="'+val.unitId+'"><span>'+val.label+'</span></td>';
			html += '<td class="rent"><span>'+val.rent+'</span></td>';
			html += '<td class="due"><span>'+val.due+'</span></td>';
			html += '<td class="late"><span>'+val.latepay+'</span></td>';
			html += '<td class="status"><span>'+val.status+'</span></td></tr>';
		});
		$('#propertyUnits tbody').html(html);
		
		statusHtml = ''
		statusHtml += '<option id="all">Status</option>';
		statusHtml += '<option id="m2m">Month-to-month ('+self.json.m2m+')</option>';
		statusHtml += '<option id="underContract">Under Contract ('+self.json.underContract+')</option>';
		statusHtml += '<option id="vacant">Vacant ('+self.json.vacant+')</option>';
		statusHtml += '<option id="movingOut">Moving Out ('+self.json.movingOut+')</option>';
		statusHtml += '<option id="movingIn">Moving In ('+self.json.movingIn+')</option>';
		$('#statusDropDown').html(statusHtml);
		$('#statusDropDown option[id="'+settings.status+'"]').attr('selected','selected');
		
		if (self.json["unit"].length === 0) {
			html += '<tr><td colspan="6" class="property"><span>No records</span></td></tr>';
			$('#propertyUnits tbody').html(html);
		}
		
		if (settings.propertyId != 'all') {
			$('#propertyDropDown option[value="'+propName+'"]').attr('selected', 'selected');
		} else {
			$('#propertyDropDown option[value="All Properties"]').attr('selected', 'selected');
		}
		
		if (settings.sort == 0) {
			highlightUnitCol();
		} else {
			$('#propertyUnits th, #propertyUnits td').removeClass('on');
			$('.'+settings.sort).addClass('on');
		}
		
		pagination();
		displayContact();
	}
	
	function pagination() {
		var totalRecords = self.json.totalStatusRecords;
		var totalPages = Math.ceil(totalRecords/20)
		var curEnd = settings.curPage * 20;
		var curStart = curEnd - 19;
		if (curStart > totalRecords) curStart = 1;
		if (curEnd > totalRecords) curEnd = totalRecords;
		if (totalRecords === 0) curStart = 0;
		$('.pagination .pages').html(curStart+'-'+curEnd+' of '+totalRecords);
		
		if (curEnd < totalRecords) {
			$('.pagination .next').removeClass('disabled');
			$('.pagination .last').removeClass('disabled');
		}
		
		if (settings.curPage == totalPages) {
			$('.pagination .next').addClass('disabled');
			$('.pagination .last').addClass('disabled');
		}
		if (settings.curPage == 1) {
			$('.pagination .first').addClass('disabled');
			$('.pagination .prev').addClass('disabled');
		}
		
		if (settings.curPage != 1 && settings.curPage <= totalPages) {
			$('.pagination .first').removeClass('disabled');
			$('.pagination .prev').removeClass('disabled');
		}
	}
	
	$('.pagination .first').bind('click', function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
		settings.curPage = 1;
		$.historyLoad(page.makeHash('page', settings.curPage));
	});
	$('.pagination .prev').bind('click', function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
		var curEnd = settings.curPage * 20;
		var curStart = curEnd - 19;
		if (curStart != 1) {
			settings.curPage = settings.curPage - 1;
		}
		$.historyLoad(page.makeHash('page', settings.curPage));
	});
	
	$('.pagination .next').bind('click', function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
		var totalRecords = self.json.totalStatusRecords;
		var curEnd = settings.curPage * 20;
		
		if (curEnd < totalRecords) {
			settings.curPage = settings.curPage + 1;
		}
		$.historyLoad(page.makeHash('page', settings.curPage));
	});
	
	$('.pagination .last').bind('click', function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
		var totalRecords = self.json.totalStatusRecords;
		settings.curPage = Math.ceil(totalRecords/20);
		$.historyLoad(page.makeHash('page', settings.curPage));
	});
	
	function sort(id) {
		var sortBy = _translateSortBy(id);
		$.historyLoad(page.makeHash('sort', sortBy));
	}
	
	function highlightUnitCol() {
		$('#propertyUnits th, #propertyUnits td').removeClass('on');
		$('#propertyUnits .unit').addClass('on');
		$('.sortImg').css({display:'none'});
	}
	
	// private function highlight column
	function _highlightCol(column) {
		
		// is it a valid column?
		if (0 > $.inArray(column, sortOptions)) {return false;}
		
		// set default sort = up
		var sort = 'up';
		var sortImg = $('#sortUp');
		
		// hide all other sort imgs
		$('.sortImg').css({display:'none'});
		
		// if reverse, then sort down
		if (column.match('.reverse')) {
			column = column.replace('.reverse','');
			sort = 'down';
			sortImg = $('#sortDown');
		}
		
		// unhighlight everything and re-highlight only this thing
		$('th, td').removeClass('on up down');
		$('.' + column).addClass('on');
		
		// append the sort arrow in the column after the header text
		var control = $('th.' + column).addClass(sort).children('span');
		if(column != 'unit') {
			control.append(sortImg.css({display:'inline'}));
		}
		return true;
	};
	
	function _translateSortBy(sortBy){	
		var reverse = (sortBy == lastSortBy);		
		if(reverse){
			sortBy = sortBy + '.reverse';		
		}
		return sortBy;
	}
	
	function _hashLoad(hash) {
		if (hash) {
			// sort logic
			var sortOrder = page.getHashVal('sort');
			var pageNum = page.getHashVal('page');	
			var unitLabel = page.getHashVal('unit');
			var prop = page.getHashVal('property');
			var status = page.getHashVal('status');
			
			if (sortOrder) {
				var sortType = sortOrder.split('.');
				settings.sort = sortType[0];
				settings.sortOrder = sortType[1] ? 'desc' : 'asc';
			} else {
				settings.sort = 0;
			}
			
			if (pageNum && settings.curPage !== 1) {
				settings.curPage = parseInt(pageNum);
			} else {
				settings.curPage = 1;
			}
			
			if (prop) {
				settings.propertyId = prop;
			} else {
				settings.propertyId = 'all';
			}
			
			if (unitLabel && unitLabel != 'all') {
				settings.unit = unitLabel;
			} else {
				settings.unit = 0;
			}
			
			if (status) {
				settings.status = status;
			} else {
				settings.status = 'all';
			}
			
			lastSortBy = sortOrder;
			_highlightCol(sortOrder);

			// ajax to loadpage
			
		} else {
			defaultSettings();
			propName = 'All Properties';
		}
		
		refreshData();
	}
	
	// call constructor
	_init();
	
	return self;
}

function ReportsTransactions() {

	var settings = {};
	self.months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	self.income = 0;
	self.expense = 0;
	self.initLoad = 1;
	self.periodClick = 0;
	
	function _setDefaults() {
			
		settings.curMonth = 'all';
		settings.curYear = 'all';
		settings.curType = 'all';
		settings.curSearch = 'all';
		settings.curFilter = 'all';
		settings.curDatePeriod = 'all';
		settings.curPage = 1;
		settings.curProperty = 'all';
		settings.updateBalance = 0;
	}
	
	function _init() {
		new Datepicker('#incomeDate', 'days');
		new Datepicker('#expenseDate', 'days');
		$('#incomeDate, #expenseDate').mask('99/99/9999');
		
		// cancel out of add transactions
		$('#sidepanel .panel a.close').bind('click',function(){
			_showPanel('default');
			_clearForm();
		});
		
		// tabs for adding expenses/transactions
		$('#editTransactionPanel .tabs > li:not(.on)').live('click', function(e) {
			$('#editTransactionPanel .tabs > li').removeClass('on');
			$(this).addClass('on');
			$('#editTransactionPanel .form').removeClass('on');
			$('#'+$(this).attr('id').replace('Tab','')).addClass('on');
		});
		
		$('#editIncomeTab').bind('click',function(){
			var is_rent =  $('#incomeType > option:selected').val() === 'Rent';
			$('.income-record-view').hide();
			if (is_rent) {
				$('#record-rent').show();
			} else {
				$('#record-non-rent').show();
			}
		});
		
		// transaction row click
		$('#transactionList tbody > tr:not(.selected):not(.noRecords)').live('click',function(){
			_clearForm();
			var type = $(this).attr('class');
			_showPanel('editTransaction', 'edit', type);
			$(this).addClass('selected');
			self.transToggle = 0;
			self.rentRow = 0;
			self.transId = $(this).attr('id');
			
			$('#reportsTransactions .sidepanel .delete').show();
			
			if (type === 'Income') {
				var incomeType = $(this).children('.type').text();
				if (incomeType === 'Rent') {
					$('#incomeType').hide()
					self.rentRow = 1; 
				} else {
					$('#incomeType').show()
					$('#incomeType option:contains('+incomeType+')').attr('selected','selected');
				}
				
				$('#incomeFrom').val($(this).children('.who').text());
				$('#incomeAmount').val($(this).children('.amount').text().replace('+$',''));
				
				var incomeDate = $(this).children('.date').attr('id');
				incomeDate = incomeDate.split('-')
				var incomeY = incomeDate[0]
				var incomeM = incomeDate[1]
				var incomeD = incomeDate[2]
				if (incomeM.length == 1) incomeM = '0'+incomeM;
				if (incomeD.length == 1) incomeD = '0'+incomeD;
				$('#incomeDate').val(incomeM+'/'+incomeD+'/'+incomeY);
				
			} else {
				var expenseType = $(this).children('.type').text();
				
				$('#expenseType option:contains('+expenseType+')').attr('selected','selected');
				
				$('#expensePay').val($(this).children('.who').text());
				$('#expenseAmount').val($(this).children('.amount').text().replace('-$',''));
				
				var expenseDate = $(this).children('.date').attr('id');
				expenseDate = expenseDate.split('-')
				var expenseY = expenseDate[0]
				var expenseM = expenseDate[1]
				var expenseD = expenseDate[2]
				if (expenseM.length == 1) expenseM = '0'+expenseM;
				if (expenseD.length == 1) expenseD = '0'+expenseD;
				$('#expenseDate').val(expenseM+'/'+expenseD+'/'+expenseY);
			}
		});
		
		$('#reportsTransactions .sidepanel .delete').bind('click', function() {
			page.fox.confirm({
				message:'Are you sure you want to delete this transaction?',
				confirmButtonText: 'Yes, please delete',
				success:function(){
					page.request({
						url: '/reports/delete',
						request: {
							transId: self.transId
						},
						success: function(json) {
							_showPanel('default');
							settings.updateBalance = 1;
							_refreshData();
							_clearForm();
						}
					});
				}
			});
			
		})
		
		$('#expenseTemplate').bind('onchange', function() {
			// change code
		});
		
		page.request({
			url: '/property/getPropAndTransDates',
			success: function(json) {
				self.initInfo = json;
			}
		});
		
		propDateHtml = '';
		propDateHtml += '<option value="all">Month</option>';
		
		$.each(self.initInfo.dates, function(i,val) {
			var date = val.split('+');
			var m = parseInt(date[0]) - 1;
			var y = parseInt(date[1]);
			m = self.months[m]
			
			propDateHtml += '<option value="'+val+'">'+m+' '+y+'</option>';
		});
		
		$('#dateDropDown').html(propDateHtml);
		
		$('#dateDropDown').change(function() {
			var value = $('#dateDropDown option:selected').attr('value');
			
			if (settings.curPage > 1) {
				settings.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['date', value],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('date', value));
			}
		});
		
		var typeHtml = '';
		typeHtml += '<option value="all">Type</option>';
		typeHtml += '<option value="Rent">Rent</option>';
		typeHtml += '<option value="Deposit">Deposit</option>';
		typeHtml += '<option value="Other">Other</option>';
		
		$('#typeDropDown').html(typeHtml);
		
		$('#typeDropDown').change(function() {
			var value = $('#typeDropDown option:selected').attr('value');
			if (settings.curPage > 1) {
				settings.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['type', value],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('type', value));
			}
		})
		
		var filterHtml = '';
		filterHtml += '<option value="all">Filter</option>';
		filterHtml += '<option value="expense">Expense</option>';
		filterHtml += '<option value="income">Income</option>';
		
		$('#filterDropDown').html(filterHtml);
		
		$('#filterDropDown').change(function() {
			var value = $('#filterDropDown option:selected').attr('value');
			if (settings.curPage > 1) {
				settings.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['filter', value],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('filter', value));
			}
		})
		
		var prop = [];
		$.each(self.initInfo.properties, function(i,val) {
			prop[val.name] = val.id;
		});
		
		propHtml = '<option id="all" value="All Properties">All Properties</option>';
		propListHtml = '';
		for (var i in prop) {
			if (prop.hasOwnProperty(i)) {
				propListHtml += '<option id="'+prop[i]+'" value="'+i+'">'+i+'</option>';
			}
		}
		propHtml += propListHtml;
		$('#propertyDropDown').html(propHtml);
		$('#expenseProperty').append(propListHtml);
		$('#incomeProperty').append(propListHtml);
		
		$('#propertyDropDown').change(function() {
			var propSelected = $('#propertyDropDown option:selected');
			
			var propId = propSelected.attr('id');
			
			settings.updateBalance = 1;
			
			if (settings.curPage > 1) {
				settings.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['property', propId],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('property', propId));
			}
			
		});
		
		if (location.href.indexOf('#') == -1) {
			_refreshData();
		}
		$.historyInit(_hashLoad);
		
		$('#who').bind('keypress', function(e){
			var code = e.keyCode || e.which;
			if(code == 13) {
				var who = $('#who').val()
				
				if (!who.match(/^[a-zA-Z0-9]+$/i) && who != "") {
					page.fox.message({
						message:'Search only accepts letters and numbers. \
							Please try again.',
						close: function(){
							parentTR.removeClass('selected');
						}
					});
					return false;
				}
				
				if (who) {
					self.curSearch = who;
					if (settings.curPage > 1) {
						settings.curPage = 1;
						$.historyLoad(page.makeMultipleHash(['search', who],['page', 1]));
					} else {
						$.historyLoad(page.makeHash('search', who));
					}
				} else {
					self.curSearch = 'all';
					$.historyLoad(page.makeHash('search', 'all'));
				}
			}
		});
		
		
		
		$('.pagination .first').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			settings.curPage = 1;
			$.historyLoad(page.makeHash('page', settings.curPage));
		});
		$('.pagination .prev').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			var curEnd = settings.curPage * 20;
			var curStart = curEnd - 19;
			if (curStart != 1) {
				settings.curPage = settings.curPage - 1;
			}
			$.historyLoad(page.makeHash('page', settings.curPage));
		});
		
		$('.pagination .next').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			var totalRecords = self.json.totalRecords;
			var curEnd = settings.curPage * 20;
			
			if (curEnd < totalRecords) {
				settings.curPage = settings.curPage + 1;
			}
			$.historyLoad(page.makeHash('page', settings.curPage));
		});
		
		$('.pagination .last').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			var totalRecords = self.json.totalRecords;
			settings.curPage = Math.ceil(totalRecords/20);
			$.historyLoad(page.makeHash('page', settings.curPage));
		});
		
		self.transToggle = 0;
		
		// add transactions button
		$('#addTransaction').bind('click', function() {
			_showPanel('editTransaction', 'add');
			self.transToggle = 1;
			$('#incomeType').show();
		})
		
		// income dropdown
		$('#incomeType').bind('change', function(){
			var is_rent = $(this).find('option:selected').val() === 'Rent';
			$('.income-record-view').hide();
			if (is_rent) {
				$('#record-rent').show();
			} else {
				$('#record-non-rent').show();
			}
		});
		
		$('#saveExpense').bind('click', function() {
			
			var contact = $('#expensePay').parent();
			var contactSelected = contact.hasClass('search');
			var contactTypeClass = contact.removeClass('search field').attr('class')
			contact.addClass('search field');
			
			var url = self.transToggle ? '/reports/addExpense' : '/reports/editExpense';
			var transId = self.transToggle ? '' : self.transId;
			page.request({
				url: url,
				request: {
					type: 'expense',
					action: self.transToggle ? 'create' : 'edit',
					expenseType: $('#expenseType').val(),
					payTo: $('#expensePay').val(),
					expenseAmount: $('#expenseAmount').val(),
					expenseDate:$('#expenseDate').val(),
					transId: transId,
					contactType: contactSelected ? contactTypeClass : '',
					contactId: contactSelected ? contact.attr('id') : ''
				},
				success: function(json) {
					_showPanel('default');
					location.hash = '';
					settings.updateBalance = 1;
					_refreshData();
					_clearForm();
					self.transToggle = 0;
				}
			});
			
			
		})
		
		$('#saveIncome').bind('click', function() {
			var contact = $('#incomeFrom').parent();
			var contactSelected = contact.hasClass('search');
			var contactTypeClass = contact.removeClass('search field').attr('class')
			contact.addClass('search field');
			
			var url = self.transToggle ? '/reports/addIncome' : '/reports/editIncome';
			var transId = self.transToggle ? '' : self.transId;
			page.request({
				url: url,
				request: {
					type: 'income',
					action: self.transToggle ? 'create' : 'edit',
					incomeType: self.rentRow ? 'Rent' : $('#incomeType').val(),
					incomeFrom: $('#incomeFrom').val(),
					incomeAmount: $('#incomeAmount').val(),
					incomeDate:$('#incomeDate').val(),
					transId: transId,
					contactType: contactSelected ? contactTypeClass : '',
					contactId: contactSelected ? contact.attr('id') : ''
				},
				success: function(json) {
					_showPanel('default');
					location.hash = '';
					settings.updateBalance = 1;
					_refreshData();
					_clearForm();
					self.transToggle = 0;
				}
			});
		})
		
		$('#period > li > a').bind('click', function() {
			$('#period > li > a').removeClass('on');
			$(this).addClass('on');
			
			var selection = $(this).attr('id')
			settings.curDatePeriod = selection;
			
			self.periodClick = 1;
			settings.curPage = 1;
			if (selection == 'thisMonth') {
				var curTime = new Date();
				var curM = curTime.getMonth() + 1;
				var curY = curTime.getFullYear();
				var thisMonth = curM + '+' + curY;
				
				var el = $('#dateDropDown option[value='+thisMonth+']');
				if (el.length) {
					el.attr('selected','selected');
				} else {
					$('#dateDropDown option:first').attr('selected','selected');
				}
				
				$.historyLoad(page.makeMultipleHash(['period', selection],['date', thisMonth],['page', 1]));
			} else if (selection == 'lastMonth') {
				var curTime = new Date();
				var curM = curTime.getMonth() + 1;
				var curY = curTime.getFullYear();
				if (curM == 1) {
					curM = 12;
					curY = curY - 1;
				} else {
					curM = curM - 1;
				}
				var lastMonth = curM + '+' + curY;
				var el = $('#dateDropDown option[value='+lastMonth+']');
				
				if (el.length) {
					el.attr('selected','selected');
				} else {
					$('#dateDropDown option:first').attr('selected','selected');
				}
				$.historyLoad(page.makeMultipleHash(['period', selection],['date', lastMonth],['page', 1]));
			} else {
				$('#dateDropDown option:first').attr('selected','selected');
				$.historyLoad(page.makeMultipleHash(['period', selection],['date', 'all'],['page', 1]));
			}
		});
	}
	
	function _refreshData() {
		page.request({
			url: '/reports/json',
			request: {
				month: settings.curMonth,
				year: settings.curYear,
				type: settings.curType,
				search: settings.curSearch,
				filter: settings.curFilter,
				datePeriod: settings.curDatePeriod,
				property: settings.curProperty,
				page: settings.curPage,
				initLoad: self.initLoad,
				periodClick: self.periodClick,
				updateBalance: settings.updateBalance
			},
			success: function(json) {
				self.json = json;
			}
		});
		
		var prevTotal = self.json.prevTotal;
		self.income = 0;
		self.expense = 0;
		if (prevTotal != 0 ){
			if (prevTotal > 0) {
				self.income = prevTotal
				
			} else {
				var prevAmount = prevTotal*-1;
				self.expense = prevAmount;
				
			}
		}
		
		var html = '';
		$.each(self.json.transactions, function(i, val) {
			
			var row = '';
			var transDate = val.transDate;
			transDate = transDate.split('-');
			y = transDate[0];
			m = transDate[1];
			d = transDate[2];
			m = self.months[m-1];
			if (val.transAmount > 0) {
				self.income += val.transAmount;
				var balance = self.income - self.expense;
				if (balance < 0) {
					balance = balance * -1;
					balance = '-$'+balance.toFixed(2);
				} else {
					balance = '$'+balance.toFixed(2);
				} 
				
				row += '<tr class="Income" id="'+val.transId+'"><td class="date" id="'+val.transDate+'"><span>'+m+' '+d+' '+y+'</span></td>';
				row += '<td class="type"><span>'+val.transType+'</span></td>';
				row += '<td class="who" id="'+val.transPropertyId+'"><span>'+val.transContact+'</span></td>';
				row += '<td class="amount income"><span>+$'+val.transAmount.toFixed(2)+'</em></span></td>';
				row += '<td class="balance on"><span>'+balance+'</span></td></tr>';
			} else {
				val.transAmount = val.transAmount * -1;
				self.expense += val.transAmount;
				var balance = self.income - self.expense;
				if (balance < 0) {
					balance = balance * -1;
					balance = '-$'+balance.toFixed(2);
				} else {
					balance = '$'+balance.toFixed(2);
				}

				row += '<tr class="Expense" id="'+val.transId+'"><td class="date" id="'+val.transDate+'"><span>'+m+' '+d+' '+y+'</span></td>';
				row += '<td class="type"><span>'+val.transType+'</span></td>';
				row += '<td class="who" id="'+val.transPropertyId+'"><span>'+val.transContact+'</span></td>';
				row += '<td class="amount income"><span>-$'+val.transAmount.toFixed(2)+'</em></span></td>';
				row += '<td class="balance on"><span>'+balance+'</span></td></tr>';
				
			}
			html = row + html;
			
		})
		if (!html) {
			html += '<tr class="noRecords"><td colspan="5"><span>No transaction records</span></td></tr>';
			
		}
		$('#transactionList tbody').html(html);
		
		if (self.initLoad || settings.updateBalance) {
			var incomeTotal = parseFloat(self.json.incomeTotal);
			var expenseTotal = parseFloat(self.json.expenseTotal);
			
			$('#incomeCell').html('$'+incomeTotal.toFixed(2));
			$('#expenseCell').html('-$'+expenseTotal.toFixed(2));
			
			if (incomeTotal >= expenseTotal) {
				var totalBalance = incomeTotal - expenseTotal;
				totalBalance = totalBalance.toFixed(2);
				$('#totalCell').html('$'+totalBalance);
			} else {
				var totalBalance = expenseTotal - incomeTotal;
				totalBalance = totalBalance.toFixed(2);
				$('#totalCell').html('-$'+totalBalance);
			}
			
			self.initIncome = $('#incomeCell').text();
			self.initExpense = $('#expenseCell').text();
			self.initTotal = $('#totalCell').text();
			self.initLoad = 0;
			settings.updateBalance = 0;
		}
		if (self.periodClick) {
			if (settings.curDatePeriod == 'all') {
				$('#incomeCell').html(self.initIncome);
				$('#expenseCell').html(self.initExpense);
				$('#totalCell').html(self.initTotal);
			} else {
				var incomeTotal = parseFloat(self.json.incomeTotal);
				var expenseTotal = parseFloat(self.json.expenseTotal);
				$('#incomeCell').html('$'+incomeTotal.toFixed(2));
				$('#expenseCell').html('-$'+expenseTotal.toFixed(2));
			}
			self.periodClick = 0;
		}
		
		
		
		_pagination();
	}
	
	function _hashLoad(hash) {
		if (hash) {
			// sort logic
			var pageNum = page.getHashVal('page');	
			var date = page.getHashVal('date');
			var prop = page.getHashVal('property');
			var type = page.getHashVal('type');
			var filter = page.getHashVal('filter');
			var search = page.getHashVal('search');
			var period = page.getHashVal('period');
			
			if (pageNum && settings.curPage !== 1) {
				settings.curPage = parseInt(pageNum);
			} else {
				settings.curPage = 1;
			}
			
			if (date) {
				var dateHash = date.split('+');
				settings.curMonth = dateHash[0];
				settings.curYear = dateHash[1];
			} else {
				settings.curMonth = 'all';
				settings.curYear = 'all';
			}
			
			if (prop) {
				settings.curProperty = prop;
			} else {
				settings.curProperty = 'all';
			}
			
			type ? settings.curType = type : settings.curType = 'all';
			
			filter ? settings.curFilter = filter : settings.curFilter = 'all';
			
			search ? settings.curSearch = search : settings.curSearch = 'all'
			
			period ? self.periodClick = 1 : self.periodClick = 0;
			
		} else {
			_setDefaults()
		}
		_updateDropDowns();
		_refreshData();
	}
	
	function _updateDropDowns() {
		if (settings.curMonth === 'all') {
			$('#dateDropDown option:first').attr('selected','selected');
		} else {
			$('#dateDropDown option[value='+settings.curMonth+'+'+settings.curYear+']').attr('selected','selected');
		}
		
		$('#typeDropDown option[value='+settings.curType+']').attr('selected', 'selected');
		
		$('#filterDropDown option[value='+settings.curFilter+']').attr('selected', 'selected');
		
		var prop = page.getHashVal('property');
		
		if (!prop || prop === 'all') {
			$('#propertyDropDown option:first').attr('selected', 'selected');
		} else {
			var prop = page.getHashVal('property');
			prop = prop.split('+').join(' ');
			$('#propertyDropDown option[value='+prop+']').attr('selected', 'selected');
		}
		
	}
	
	// _showPanel(default/editTransaction, add/edit, Expense/Income)
	function _showPanel(panel, mode, type) {
		$('#sidepanel .panel, #editTransactionPanel .tabs > li, #editTransactionPanel .form').removeClass('on');
		$('#transactionList tbody > tr').removeClass('selected');
		$('#'+panel+'Panel').addClass('on');

		if (type) {
			$('#edit'+type+'Tab').addClass('on');
			$('#edit'+type).addClass('on');
		} else {
			$('#editExpenseTab').addClass('on');
			$('#editExpense').addClass('on');
		}
		
		if (!mode || mode == 'add') {
			$('#addExpenseTabs').css({display:'block'});
		} else {
			$('#addExpenseTabs').css({display:'none'});
		}
		
	}
	
	function _clearForm() {
		$('#editExpense input').removeClass('error');
		$('#editExpense input').val('');
		$('#editExpense #expenseProperty option:first').attr('selected','selected');
		$('#editExpense #expenseType option:first').attr('selected','selected');
		$('#editIncome input').removeClass('error');
		$('#editIncome input').val('');
		$('#editIncome #incomeProperty option:first').attr('selected','selected');
		$('#editIncome #incomeType option:first').attr('selected','selected');
		$('#reportsTransactions .sidepanel .delete').hide();
	}
	
	function _pagination() {
		
		var totalRecords = self.json.totalRecords;
		var totalPages = Math.ceil(totalRecords/20)
		var curEnd = settings.curPage * 20;
		var curStart = curEnd - 19;
		if (curStart > totalRecords) curStart = 1;
		if (curEnd > totalRecords) curEnd = totalRecords;
		
		if (totalRecords === 0) curStart = 0;
		$('.pagination .pages').html(curStart+'-'+curEnd+' of '+totalRecords);
		
		
		if (curEnd < totalRecords) {
			$('.pagination .next').removeClass('disabled');
			$('.pagination .last').removeClass('disabled');
		}
		
		if (settings.curPage == totalPages) {
			$('.pagination .next').addClass('disabled');
			$('.pagination .last').addClass('disabled');
		}
		if (settings.curPage == 1) {
			$('.pagination .first').addClass('disabled');
			$('.pagination .prev').addClass('disabled');
		}
		
		if (settings.curPage != 1 && settings.curPage <= totalPages) {
			$('.pagination .first').removeClass('disabled');
			$('.pagination .prev').removeClass('disabled');
		}
			
	}
	
	_setDefaults();
	_init();
}

function Property(data) 
{	
	var self = this;
	if (data) self.propertyId = data.propertyId;
}

Property.prototype.getProperty = function() {
	var self = this;
	var json = false;
	$.ajax({
		async: false,
		dataType: 'json',
		type: 'GET',
		url: '/property/json/'+self.propertyId,
		cache: false,
		success: function(data) {
			json = data;
		}
	});
	return json;
}

Property.prototype.create = function(data) {
	var self = this;
	var json = false;
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		url: '/property/create',
		data: data.request,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Property.prototype.deleteProperty = function(data) {
	var self = this;
	var json = false;
	
	
	
	var request = {
		propertyId: data.propertyId
		}
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: request,
		url: '/property/delete',
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Property.prototype.save = function(data) {
	var self = this;
	var json = false;
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: data.request,
		url: '/property/save',
		cache: false,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Property.prototype.createFloorPlan = function(data) {
	var self = this;
	var json = false;
	var request = {
		propertyid: data.propertyId,
		unitid: data.unitId,
		name: data.input.name,
		sqft: data.input.sqft,
		beds: data.input.beds,
		baths: data.input.baths,
		description: data.input.description
		}
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: request,
		url: '/floorplan/create',
		cache: false,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Property.prototype.saveFloorPlan = function(data) {
	var self = this;
	var json = false;
	var request = {
		name: data.input.name,
		sqft: data.input.sqft,
		beds: data.input.beds,
		baths: data.input.baths,
		description: data.input.description
		}
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: request,
		url: '/floorplan/save/'+data.floorplanId,
		cache: false,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}


Property.prototype.deleteFloorPlan = function(data) {
	var self = this;
	var json = false;
	
	var request = {
		propertyId: data.propertyId,
		floorPlanId: data.floorPlanId
		}
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: request,
		url: '/floorplan/delete',
		cache: false,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Property.prototype.assignFloorPlansToUnits = function(data) {
	var self = this;
	var json = false;
	var request = {
		units: data.units,
		propertyid: data.propertyId
		}
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: request,
		url: '/floorplan/assignMultiple/'+data.floorplanId,
		cache: false,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Property.prototype.addUnits = function(data) {
	var self = this;
	var json = false;
	var request = {
		propertyId: self.propertyId,
		units: data.input
		}
	$.ajax({
		async: true,
		type: 'POST',
		dataType: 'json',
		url: '/unit/create',
		cache: false,
		data: request,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}
function Unit() 
{	
	var self = this;
}
Unit.prototype.getUnit = function(input) {
	var self = this;
	var json = false;
	$.ajax({
		async: false,
		dataType: 'json',
		type: 'POST',
		url: '/unit/json/'+input.unitId,
		cache: false,
		success: function(data) {
			json = data;
		}
	});
	return json;
}


Unit.prototype.addFloorPlanToUnit = function(data) {
	var self = this;
	var json = false;
	
	var request = {
		unitid: data.unitId,
		propertyid: data.propertyId
		}
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: request,
		url: '/floorplan/assign/'+data.floorplanId,
		cache: false,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Unit.prototype.deleteUnit = function(data) {
	var self = this;
	var json = false;
	$.ajax({
		async: true,
		type: 'POST',
		dataType: 'json',
		url: '/unit/delete',
		cache: false,
		data: data.request,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Unit.prototype.rename = function(data) {
	var self = this;
	var json = false;
	$.ajax({
		async: true,
		type: 'POST',
		dataType: 'json',
		url: '/unit/rename',
		cache: false,
		data: data.request,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}
function Users(data) {
    var self = this;
    
    self.propertyId = false;
    page.nav.hideSubmenu();
    if(data && data.propertyId) {
    	self.propertyId = data.propertyId;
    	page.nav.showSubmenu();
    }
    
    self.init();
        
    return self;
}

Users.prototype.init = function() {
    var self = this;
    
    var url = self.propertyId ? '/user/json/'+self.propertyId : '/user/json';
    page.request({
		url: url,
		type: 'GET',
		async: false,
		offset: {x:0,y:0},
		success: function(json) {
			self.json = json;
			if (self.json.users.length === 1) {
				page.fox.message({
					title: "What's this page for?",
					message: 'Give access to other users \
							so that they can help \
							you manage your properties on Rentfox.\
							<br /><br />\
							<em>Note: This page is not for storing tenant information. \
							If you are looking for tenants, use the search box or add tenants to leases.</em>'
				});
			}
		}
	});
    self.initUserCreate().initUserList().initUserEdit();
    
    $('#activation-link').live('click',function(){
    	this.select();
    });
    
    return self;
};

Users.prototype.initUserCreate = function() {
    var self = this;
    
    $("#create-phone").mask("(999) 999-9999");
    
    var displayCSS = self.json.me.type == 'admin' ? 'block' : 'none';
	$('#createUserRoleSection,#updateUserRoleSection').css({display:displayCSS});
    $('#createNewUser').unbind().bind('click',function(){
		page.fox.dock();
		$('.userbox').css({display:'none'});
		$('#createBox input').val('');
		$('#create-admin').attr('checked',false);
		$('#createBox').css({display:'block'});
		$('#userList li').removeClass('on');
		$('#create-fname').focus();

    });
    
    $('#closeCreateBox, #cancelCreateBox').unbind().bind('click',function(){
        $('.userbox').css({display:'none'});
    });
    
    $('#createUserButton').unbind().bind('click',function(){
    	var isAdmin = $('#create-admin').attr('checked') ? 1 : 0;
    	page.request({
			url: '/user/create',
			request: {
				propertyId: self.propertyId,
				fname: $('#create-fname').val(),
				lname: $('#create-lname').val(),
				email: $('#create-email').val(),
				phone: $('#create-phone').val(),
				created_by: self.json.me.id,
				admin: isAdmin
			},
			offset: {x:200,y:0},
			success: function(json) {
				self.currentUserId = json.currentUserId;
				self.displayUser().init();
				if (!isAdmin) {
					$('#addProperties').click();
				}
			}
		});
        
    });
    
    $('#createBox input').unbind().bind('keypress',function(e){
    	var code = e.keyCode || e.which;
		if(code == 13) { 
			$('#createUserButton').click();
		}
    });
    
    return self;
};

Users.prototype.initUserEdit = function() {
    var self = this;
    
    $('#closeDisplayBox').unbind().bind('click',function(){
        $('.userbox').css({display:'none'});
        $('#userList li').removeClass('on');
    });
    
    $("#update-phone").mask("(999) 999-9999");
    
    $('#editBasicInfo').unbind().bind('click',function(){
		var checked = self.currentUser.type == 'admin' ? true: false;
		$('#update-fname').val(self.currentUser.first_name);
		$('#update-lname').val(self.currentUser.last_name);
		$('#update-email').val(self.currentUser.email);
		$('#update-phone').val(self.currentUser.phone);
		$('#update-admin').attr('checked', checked);
		$('#editorName').text(self.currentUser.first_name + ' ' + self.currentUser.last_name);
		$('.userbox').css({display:'none'});
		$('#editBox').css({display:'block'});
    });

    $('#cancelEditBox').unbind().bind('click',function(){
        $('.userbox').css({display:'none'});
        $('#displayBox').css({display:'block'});
    });

    $('#saveUserButton').unbind().bind('click',function(){
    	var isAdmin = $('#update-admin').attr('checked') ? 1 : 0;
    	page.request({
			url: '/user/save',
			request: {
				userId: self.currentUserId,
				fname: $('#update-fname').val(),
				lname: $('#update-lname').val(),
				email: $('#update-email').val(),
				phone: $('#update-phone').val(),
				propertyId: self.propertyId,
				admin: isAdmin
			},
			offset: {x:200,y:0},
			success: function(json) {
				self.json = json;
				self.generateUserList(json.users).displayUser();
			}
		});
        
    });
    
    $('#editBox input').unbind().bind('keypress',function(e){
    	var code = e.keyCode || e.which;
		if(code == 13) { 
			$('#saveUserButton').click();
		}
    });
    
    $('#propertyList li input').live('click',function(){
        if($(this).is(':checked')) {
            $(this).parent().addClass('on');
        } else {
            $(this).parent().removeClass('on');
        }
    });
    
    $('#resendActivationEmail').unbind().bind('click',function(){
    	page.request({
			url: '/user/resendActivationLink',
			request: {
				userId: self.currentUser.id
			},
			success: function(json) {
				page.fox.center().message({
					title: 'Success!',
					message: 'You have re-sent an activation link to '+self.currentUser.email+'.'
				});
			}
		});
    });
    
    /*
    $('#resetPassword').unbind().bind('click',function(){
    	var person = self.currentUser.first_name+' '+self.currentUser.last_name;
        page.fox.center().display({
            url:"resetPassword",
            callback:function(){
                $('#resetPasswordButton').bind('click',function(){
                    page.request({
						url: '/user/resetPassword',
						request: {
							username: self.currentUser.username,
							password: $('#newPassword').val()
						},
						success: function(json) {
							page.fox.center().message({
								title: 'Success!',
								message: 'You have reset the password for '+person+'.'
							});
						}
					});
                });
            }
        });
    });
    */
    
    $('#deleteUser').unbind().bind('click',function(){
    	var person = self.currentUser.first_name+' '+self.currentUser.last_name;
        page.fox.confirm({
			message:'Are you sure you want to delete '+person+'?',
			confirmButtonText: 'Yes, please delete',
			success:function(){
				page.request({
					url: '/user/delete',
					request: {
						userId: self.currentUserId,
						propertyId: self.propertyId
					},
					success: function(json) {
						$('.userbox').css({display:'none'});
						self.json = json;
						self.generateUserList(json.users);
						page.fox.center().message({
							title: 'Success!',
							message: 'You have deleted '+person+'.'
						});
					}
				});
			}
		});
    });
    
    $('#addProperties').unbind().bind('click',function(){
        page.fox.center({x:0,y:-100}).display({
            url:"addPropertiesToUser.html",
            callback:function(){
                var html = '';
                var total = 0;
                $.each(self.json.properties, function(i,property) {
                	if ($.inArray(property.id, self.currentUserPropertyIds) === -1) {
                		html += '<li><label><input type="checkbox" id="assign_'+property.id+'" /> '+property.name+'</label></li>';
                		total++;
                	}
                });
                $('#assignPropertyList').html(html);
                if (!total) {
                	$('#assignPropertyList').replaceWith('<p>There are currently no properties to add to this user.</p>\
                		<p>There could be a couple reasons for this.  Perhaps you have already added all properties for this user\
                		or you do not have access to the properties you are trying to add.</p>');
                	$('#addPropertiesButton,#addPropertiesCancel').remove();
                }
                
                $('#addPropertiesButton').unbind().bind('click',function(){
                	var propList = [];
                	$('#assignPropertyList input:checked').each(function(){
                		var id = this.id;
                		propList.push(id.replace('assign_',''));
                	});
                    page.request({
                    	url: '/user/assignProperties',
                    	request: {
							userId : self.currentUserId,
							otherUserId : self.currentUser.id,
							propertyId : self.propertyId,
							propList : propList.join(',')
						},
						success: function(json) {
							self.displayUser().generateUserList(json.users);
						}
                    });
                });
                
            }
        });
    });
    
    $('#removeProperties').unbind().bind('click',function(){
        page.fox.center({x:0,y:-100}).display({
            url:"removePropertiesFromUser.html",
            callback:function(){
                var html = '';
                var total = 0;
                if (!self.myPropertyIds) {
	                self.myPropertyIds = [];
	                $.each(self.json.properties, function(i, property) {
	                	self.myPropertyIds.push(property.id);
	                });
                }
                $.each(self.currentUserProperties, function(i,property) {
                	if ($.inArray(property.id, self.myPropertyIds) >= 0) {
	            		html += '<li><label><input type="checkbox" id="unassign_'+property.id+'" /> '+property.name+'</label></li>';
	            		total++;
            		}
                });
                $('#removePropertyList').html(html);
                if (!total) {
                	$('#removePropertyList').replaceWith('<p>There are no properties to remove from this user.</p>\
                		<p>Keep in mind that you may only remove properties that you have access to yourself.');
                	$('#removePropertiesButton,#removePropertiesCancel').remove();
                }
                
                $('#removePropertiesButton').unbind().bind('click',function(){
                	var propList = [];
                	$('#removePropertyList input:checked').each(function(){
                		var id = this.id;
                		propList.push(id.replace('unassign_',''));
                	});
                    page.request({
                    	url: '/user/unassignProperties',
                    	request: {
							userId : self.currentUserId,
							otherUserId : self.currentUser.id,
							propertyId : self.propertyId,
							propList : propList.join(',')
						},
						success: function(json) {
							self.displayUser().generateUserList(json.users);
						}
                    });
                });
            }
        });
    });
    
    return self;
};


Users.prototype.initUserList = function() {
    var self = this;
	
	self.generateUserList(self.json.users).generatePropertyDropDown(self.json.properties);
	
    self.resizeUserList();
    $(window).resize(function(){
        self.resizeUserList();
    });
    
    $('#userList li:not(.on)').live('click',function(){
    	self.currentUserId = this.id;
        $('#userList li').removeClass('on');
        $(this).addClass('on');
        self.displayUser();
    });
    
    $('#propertyList').unbind().bind('change',function(){
    	var pid = $('option:selected', this).attr('id');
    	var isChanged = pid == self.propertyId ? false : true;
    	if (isChanged) {
    		var url = pid ? '/users/'+pid : '/users';
    		location.href = url;
    	} 
    });
    
    return self;
};

Users.prototype.displayUser = function(){
	var self = this;
	
	
	page.request({
		url: '/user/getManager',
		request: {
			userId: self.currentUserId
		},
		offset: {x:0,y:0},
		success: function(json) {
			
			$('.display-name').text(json.first_name + ' ' + json.last_name);
			$('.display-email').text(json.email);
			$('.display-fname').text(json.first_name);
			$('.display-phone').text(json.phone);
			
			if (!json.username) {
				$('#activation').css({display:'block'});
				$('#activation-link').val(json.activation_link);
				$('#activation-last-sent').text(json.activation_sent + ' ago');
			} else {
				$('#activation').css({display:'none'});
			}
			
			self.currentUserProperties = json.properties;
			self.currentUserPropertyIds = [];
			
			if (json.type == 'admin') {
				$('#userPropertyList').text("Admins have access to all properties.");
			} else if (json.properties.length) {
				var propHtml = '<ul>';
				$.each(json.properties,function(i,property){
					propHtml += '<li>' + property.name + '</li>';
					self.currentUserPropertyIds.push(property.id);
				});
				propHtml += '</ul>';
				$('#userPropertyList').html(propHtml);
			} else {
				$('#userPropertyList').text(json.first_name + " has no access to any properties.");
			}
			
			var menuitems = [];
			var isParent = self.json.me.type == 'admin' && json.type == 'manager' || self.json.me.id == json.created_by || self.json.me.created_by == 'rentfox' || self.json.me.id == json.id;
			if (isParent) {
				menuitems.push('editBasicInfo')
				menuitems.push('deleteUser');
				if (json.type == 'manager') {
					menuitems.push('addProperties')
					menuitems.push('removeProperties');
				} 
			}
			self.generateMoremenu(menuitems);

			$('.userbox').css({display:'none'});
		    $('#displayBox').css({display:'block'});
		    self.currentUser = json;
		    
    		var display = self.json.me.id === self.currentUser.id ? 'none' : 'block';
    		$('#updateUserRoleSection').css({display:display});
    		
    		var total_properties = json.properties.length,
    			total_properties_display = total_properties === 1 ? '1 property' : total_properties + ' properties'
			$('#stats-user-total-properties').text(total_properties_display);
			$('#stats-user-created').text(json.created);
		}
	});
	
	
	
    return self;
};

Users.prototype.generateMoremenu = function(items) {
		$('#userMoremenu li').css({display:'none'});
		if (items.length) {
			$('#userMoremenu').css({display:'block'});
			$.each(items,function(i,item){
				$('#'+item).css({display:'block'});
			});
		} else {
			$('#userMoremenu').css({display:'none'});
		}
	}

Users.prototype.resizeUserList = function() {
    var self = this;
    $('#userList').height($(window).height()-150);
    return self;
};

Users.prototype.generateUserList = function(users) {
	var self = this;
	var html=[];
	$.each(users, function(i,user) {
		var name = user.type == 'admin' ? '[A] ' + user.name : user.name;
		var css = user.id == self.currentUserId ? 'on' : '';
		html[i] = '<li id="' + user.id + '" class="'+css+'">' + name + '</li>';
	});
	$('#userList > ul').html(html.join(''));
	return self;
};

Users.prototype.generatePropertyDropDown = function(properties) {
	var self = this;
	
	var html = '<option>All Properties</option>'
	
	if (properties.length) {
		$.each(properties, function(i,property) {
			var selected = property.id == self.propertyId ? 'selected="selected"' : '';
			html += '<option id="' + property.id + '" '+selected+'>' + property.name + '</option>';
		});
	}
	
	$('#propertyList').html(html);
	
	return self;
};
function Contacts()
{
	
	var self = this;
	
	function _init(){
		var clickmenu = new ClickMenu;
		$('#description').elastic();
		_resizeList();
		$(window).bind('resize',function(){
			_resizeList();
		});
		
		page.request({
			url: '/contacts/json/all',
			type: 'GET',
			async: false,
			success: function(json){
				self.json = json;
				
				
			}
		});
		self.initEditBox();
		
		if (self.json.contacts.length === 0) {
			page.fox.message({
				title: "What's this page for?",
				message: 'Add contacts that your company \
						needs access to, such as handimen, plumbers,\
						utility companies, locksmiths, etc.  \
						<br /><br />\
						I\'ll hide myself after you add a contact.\
						<br /><br />\
						<em>Note: This page is not for storing tenant information. \
						If you are looking for tenants, use the search box or add tenants to leases.</em>'
			});
		}
		
	}
	
	function _resizeList() {
		$('#typeList').height($(window).height()-150);
	}
	
	_init();
}

Contacts.prototype.initEditBox = function() {
	var self = this,
		save_mode = 'create',
		new_category = 0,
		new_category_label = '',
		type_selected = 'allTypes';
	
	refreshData();
	selectType();
	
	// bind new contact button
	$('#createNewContact').bind('click',function(){
		page.fox.dock();
		save_mode = 'create';
		showForm('create');
		clearFields();
	});
	
	$('#contactBox .close').bind('click',function(){
		hideForm();
	});
	
	$('#saveContactButton').bind('click',function(){
		
		var url = save_mode === 'create' ? '/contacts/create' : '/contacts/update';
		if (new_category) {
			new_category_label = $('#new-type-label').val();
		}
		page.request({
			url: url,
			request: {
				contactId: save_mode === 'edit' ? self.contactId : '',
				type: new_category ? $('#new-type-label').val() : $('#type option:selected').val(),
				newtype: new_category,
				label: $('#name').val(),
				address: $('#street').val(),
				city: $('#city').val(),
				state: $('#state').val(),
				zip: $('#zip').val(),
				phone: $('#phone').val(),
				email: $('#email').val(),
				description: $('#description').val()
			},
			success: function(json) {
				self.json = json;
				hideForm();	
				refreshData();
				clearFields();
				selectType();
			}
		});
		
		
	});
	
	$('#open-create-type').bind('click',function(){
		showTypeCreator();
	});
	$('#close-create-type').bind('click',function(){
		hideTypeCreator();
	});
	
	$("#phone").mask("(999) 999-9999");
	
	function refreshData() {
		var html = '';
		$.each(self.json.contacts, function(i,val) {
			
			// address
			var addr = [];
			if (val.city) addr.push(val.city);
			if (val.state) addr.push(val.state);
			if (val.zip) addr.push(val.zip);
			addr = addr.join(', ').replace(' ','');
			if (addr.length > 0) addr += '<br />';
			
			html += '<div class="item" id="'+val.id+'">';
			html += '<img class="delete" src="/styles/img/ico/delete.png" />';
			html += '<img class="edit" src="/styles/img/ico/pencil.png" /><p>';
			html += '<strong>'+val.label+'</strong>';
			if (val.phone.length > 0) html += val.phone+'<br />';
			if (val.email.length > 0) html += val.email+'<br />';
			if (val.street.length > 0) html += val.street+'<br />';
			html += addr;
			if (val.description.length > 0) html += '<div class="contactDesc">'+val.description+'</div>'
			html += '</p></div>';
		});
		$("#contactDisplay").html(html);
		showTypeList();
	}
	
	function showForm(type) {
		$('#formHeader').text(type === 'create' ? 'Create contact' : 'Edit contact');
		
		if (self.json.types.length > 0) {
			hideTypeCreator();
			$('#close-create-type').show();
		} else {
			showTypeCreator();
			$('#close-create-type').hide();
		}
		
		$('#contactDisplay').hide();
		$('#contactBox').show();
	}
	
	function hideForm() {
		$('#contactDisplay').show();
		$('#contactBox').hide();
	}
	
	function showTypeCreator() {
		$('#typeSelect').hide();
		$('#typeCreate').show();
		new_category = 1;
	}
	function hideTypeCreator() {
		$('#typeSelect').show();
		$('#typeCreate').hide();
		new_category = 0;
		showTypeSelection();
	}
	function showTypeSelection() {
		var html = '';
		$.each(self.json.types, function(i,val) {
			html += '<option value="'+val.id+'">'+val.label+'</option>';
		});
		$("#type").html(html);
	}
	function clearFields() {
		$('#contactBox input, #contactBox textarea').val('');
	}
	
	function getContactById(contactId) {
		var obj = self.json.contacts;
		for (var key in obj) {
			if (obj[key].id === contactId) {
				return obj[key];
			}
		}
		return false;
	}
	
	$("#contactDisplay .edit").live('click',function(){
		showForm('edit')
		var contactId = $(this).parent().attr('id');
		self.contactId = contactId;
		var contact = getContactById(contactId);
		save_mode = 'edit';
		
		$("#name").val(contact.label);
		$("#phone").val(contact.phone);
		$("#email").val(contact.email);
		$("#street").val(contact.street);
		$("#city").val(contact.city);
		$("#state").val(contact.state);
		$("#zip").val(contact.zip);
		$("#description").val(contact.description);
		$("#type option[value='"+contact.typeid+"']").attr("selected","selected");
	})
	
	
	
	$("#contactDisplay .delete").live('click',function(){
		var contactId = $(this).parent().attr('id');
		page.fox.confirm({
			message:'Are you sure you want to delete this contact?',
			confirmButtonText: 'Yes, please delete',
			success:function(){
				page.request({
					url: '/contacts/delete',
					request: {
						contactId: contactId
					},
					success: function(json) {
						self.json = json;
						refreshData();
					}
				});
			}
		});
		
	});
	
	function showTypeList() {
		var html = '';
		html += '<li class="typeLabel" id="allTypes">All Contacts</li>';

		$.each(self.json.types, function(i,val) {
			html += '<li class="typeLabel" id="'+val.id+'">'+val.label+'</li>';
		});
		$('#typeWrap').html(html);
	};
	
	$('.typeLabel').live('click', function() {
		page.fox.dock();
		type_selected = $(this).attr('id');
		selectType();
		hideForm();
	});
	
	function selectType() {
		$('#typeList li').removeClass('on');
		
		var htmltype = ''
		htmltype += '<div class="opts"><div class="clickmenu"><div class="wrap">';
		htmltype += '<label></label><div class="options"><ul><li class="rename" id="typeRename">Rename</li>';
		htmltype += '<li class="delete" id="typeDelete">Delete</li></ul></div></div></div></div>';
		
		if (new_category == 1) {
			$.each(self.json.types, function(i,val) {
				if (val.label == new_category_label) {
					type_selected = val.id;
				}
			});
			new_category = 0;
			new_category_label = '';
			selectType();
		} else if(type_selected == 'allTypes') {
			refreshData();
			$('#allTypes').addClass('on');
		} else {
			$('#typeList .opts').hide();
			$('#'+type_selected).addClass('on');
			$('#'+type_selected).prepend(htmltype);
			$('#'+type_selected+' .opts').show();
			
			var html = '';
			$.each(self.json.contacts, function(i,val) {
				if (val.typeid == type_selected) {
					
					// address
					var addr = [];
					if (val.city) addr.push(val.city);
					if (val.state) addr.push(val.state);
					if (val.zip) addr.push(val.zip);
					addr = addr.join(', ').replace(' ','');
					if (addr.length > 0) addr += '<br />';
					
					html += '<div class="item" id="'+val.id+'">';
					html += '<img class="delete" src="/styles/img/ico/delete.png" />';
					html += '<img class="edit" src="/styles/img/ico/pencil.png" /><p>';
					html += '<strong>'+val.label+'</strong>';
					if (val.phone.length > 0) html += val.phone+'<br />';
					if (val.email.length > 0) html += val.email+'<br />';
					if (val.street.length > 0) html += val.street+'<br />';
					html += addr;
					if (val.description.length > 0) html += '<div class="contactDesc">'+val.description+'</div>'
					html += '</p></div>';
				}
			});
			$("#contactDisplay").html(html);
			
		}
	};
	
	$('#typeRename').live('click', function() {
		var type_id = $(this).parent().closest('li').attr('id');
		page.fox.center().display({
	            url:"renameType",
	            callback:function(){
	            	selectType();
	                $('#renameTypeButton').bind('click',function(){
	                    page.request({
							url: '/contacts/renameType',
							request: {
								typeId: type_id,
								typeLabel: $('#newName').val()
							},
							success: function(json) {
								self.json = json;
								refreshData();
								selectType();
							}
						});
	                });
	                $('#newName').focus();
	                $('#newName').bind('keypress', function(e){
						var code = e.keyCode || e.which;
						if(code == 13) { 
							$('#renameTypeButton').click();
						}
					});
	            }
	        });
	});
	
	$('#typeDelete').live('click', function() {
		var type_id = $(this).parent().closest('li').attr('id');
		page.fox.confirm({
			message:'Are you sure you want to delete this category?',
			confirmButtonText: 'Yes, please delete',
			success:function(){
				page.request({
					url: '/contacts/deleteType',
					request: {
						typeId: type_id
					},
					success: function(json) {
						self.json = json;
						type_selected = 'allTypes';
						selectType();
					}
				});
			}
		});
	});


	
	
	return self;
}
function Search(q) {
	
	var self = this;
	self.q = q;
	self.filter = 'all';
	self.limit = 10;
	self.page = 1;
	self.last_page = 1;
		
	self.find(q, 1, 'all');
	_setup();
	
	function _setup() {
		// search
		$('#search-box').bind('keypress',function(e){
			var code = e.keyCode || e.which;;
			if(code == 13) { 
				self.find( $(this).val(), 1, self.filter );
			}
		});
		
		// filter
		$('.filter:not(.on)').live('click',function(e){
			$('.filter').removeClass('on');
			$(this).addClass('on');
			
			var filter = this.id.replace('filter-','');
			self.find(self.q, 1, filter);
		});
		
		// pagination
		$('#pagination .first:not(.disabled)').live('click',function(){
			self.find(self.q, 1, self.filter);
		});
		$('#pagination .next:not(.disabled)').live('click',function(){
			self.find(self.q, self.page + 1, self.filter);
		});
		$('#pagination .prev:not(.disabled)').live('click',function(){
			self.find(self.q, self.page - 1, self.filter);
		});
		$('#pagination .last:not(.disabled)').live('click',function(){
			self.find(self.q, self.last_page, self.filter);
		});
	}
}

Search.prototype.find = function(q, pg, filter) {	
	var self = this;
	
	self.q = q;
	self.filter = filter;
	self.page = pg;
	
	$('#search-results').hide();
	
	page.request({
		url: '/search/find',
		type: 'GET',
		request: {
			q: q,
			page: pg,
			limit: self.limit,
			filter: filter
		},
		success: function(json) {
			self.displayResults(json);
		}
	});
}

Search.prototype.displayResults = function(matches) {
	var self = this,
		results = matches.results,
		len = results.length,
		html = [],
		pg = matches.page,
		total = matches.total,
		start = total ? matches.start : total,
		end = matches.end > total ? total : matches.end,
		search_results = $('#search-results').show(),
		limit = self.limit;
		
	self.last_page = Math.ceil(total / limit);
	$('#pagination-info').text(start + '-' + end + ' of ' + total);
	
	if (total == 0) {
		search_results.html( '<div class="nothing">Sorry, but I was unable to find anything &gt;_&lt;</div>' );
		return;
	}
	
	for (var i=0; i < len; i++) {
		var result = results[i],
			title = result.link ? '<a href="' + result.link + '">' + result.title + '</a>' : '<h5>' + result.title + '</h5>',
			description = '<p>' + result.description + '</p>';
		html.push(title + description);
	}
	search_results.html( html.join('') );
	
	
	$('#pagination > .control').addClass('disabled');
	
	if (pg > 1) {
		$('#pagination .first').removeClass('disabled');
		$('#pagination .prev').removeClass('disabled');
	}
	
	if ( pg * limit <= total ) {
		$('#pagination .next').removeClass('disabled');
		$('#pagination .last').removeClass('disabled');
	}
	
}
(function($) {

$.fn.searchsuggest = function(type) {
	var self = this;
	var settings = {};
	settings.type = type;
	settings.total = 0;
	settings.ready = 1;
	var container = $(this).parent();
	var input = container.find('input');
	
	$(input).bind('keyup', function(e) {
		
		if (e.keyCode != 40 && e.keyCode != 38 && e.keyCode != 8 && e.keyCode != 13) {
			var q = $(input).val();
			q = $.trim(q);
			$('.suggestSearch').remove();
			if (q.length && settings.ready) {
				settings.ready = 0;
				$(container).removeClass('search');
				suggest();
			}
		} else {
			actionKey(e.keyCode);
		}
	})
	
	$(input).blur(function() {
		$('.suggestSearch').remove();
	});
	
	function actionKey(keyCode) {
		if (keyCode == 40) {
			// down key
			var el = $('.suggestSearch div:last');
			if (!el.hasClass('on')) {
				$('.suggestSearch div.on').removeClass('on').next().addClass('on');
			} 
			if (!$('.suggestSearch div.on').length) {
				$('.suggestSearch div:first').addClass('on');
			}
		} else if (keyCode == 38) {
			// up key
			var el = $('.suggestSearch div:first');
			if (!el.hasClass('on')) {
				$('.suggestSearch div.on').removeClass('on').prev().addClass('on');
			} else {
				$('.suggestSearch div.on').removeClass('on')
			}
		} else if (keyCode == 8) {
			// delete key
			$('.suggestSearch').remove();
			$(container).removeClass('search');
			var q = $(input).val();
			q = $.trim(q);
			if (settings.ready && q.length) {
				settings.ready = 0;
				suggest();
			} else {
				settings.ready = 1;
			}
		} else if (keyCode == 13) {
			// return key
			var selected = $('.suggestSearch div.on');
			var type = selected.removeClass('on').attr('class');
			var id = selected.attr('id');
			var text = selected.text();
			
			settings.curId = id;
			settings.curType = type;
			
			$(input).val(text);
			$('.suggestSearch').remove();
			container.removeClass().addClass('search field').addClass(type).attr('id', id);
		} 
	};
	
	
	
	$('.suggestSearch div').live('mouseover', function() {
		$('.suggestSearch div').removeClass('on');
		$(this).addClass('on');
	})
	
	var suggest = function() {
		var q = $(input).val();
		q = $.trim(q);
		if (q.length) {
			$.ajax({
				url: '/search/find',
				type: 'GET',
				data: 'q='+q+'&page='+1+'&limit='+6+'&filter='+settings.type,
				dataType: 'json',
				async: true,
				success: function(json) {
					self.json = json;
					settings.ready = 1;
					showDrop();
				}
			});
		}
		
		function showDrop() {
			var html = '';
			$.each(self.json.results, function(i, val) {
				html += '<div id="'+val.id+'" class="'+val.type+'">'+val.title+'</div>';
			});
			if (html) {
				$(container).append('<div class="suggestSearch"></div>');
				$('.suggestSearch').html(html)
				$('.suggestSearch div:first').addClass('on');
				settings.total = $('.suggestSearch div').length;
				
			}
		}
		$('.suggestSearch div').live('mousedown', function() {
		
			var selected = $('.suggestSearch div.on');
			var type = selected.removeClass('on').attr('class');
			var id = selected.attr('id');
			var text = selected.text();
			
			settings.curId = id;
			settings.curType = type;
			$(this).parents().siblings('input').val(text);
			container.removeClass().addClass('search field').addClass(type).attr('id', id);
			$('.suggestSearch').remove();
			return false;
		});
	}
	
	return self;
}

})(jQuery);
function AccountManage() {

	var self = this;
	
	
	var htmlDict = {
		editName: '<a class="mini button cancel" id="cancelName"><span>Cancel</span></a>\
			<a class="mini button save" id="saveName"><span>Save</span></a>\
			<input type="text" class="small" id="update-fname">\
			<input type="text" class="small" id="update-lname">',
		editEmail: '<a class="mini button cancel" id="cancelEmail"><span>Cancel</span></a>\
			<a class="mini button save" id="saveEmail"><span>Save</span></a>\
			<input type="text" id="update-email">',
		editPhone: '<a class="mini button cancel" id="cancelPhone"><span>Cancel</span></a>\
			<a class="mini button save" id="savePhone"><span>Save</span></a>\
			<input type="text" id="update-phone">'
	}
	
	function _init(){
		page.request({
			url: '/account/getLoggedInUser',
			type: 'GET',
			async: false,
			success: function(json) {
				self.me = json;
				self.refreshUser();
			}
		});
		$('#displayUsername').text(self.me.username);
		$('.item > span').live('click',function(){
			var thisId = this.id;
			$(this).parent().html(htmlDict[thisId]);
			$('#update-fname').val(self.me.first_name);
			$('#update-lname').val(self.me.last_name);
			$('#update-email').val(self.me.email);
			$('#update-phone').val(self.me.phone);
			$("#update-phone").mask("(999) 999-9999");
		});
		$('a.cancel').live('click',function(){
			var newId = this.id.replace('cancel','edit');
			var display = this.id.replace('cancel','');
			var label = self.me[display.toLowerCase()] || '[enter '+display.toLowerCase()+']';
			var html = '<span id="' + newId + '">' + label + '</span>';
			$(this).parent().html(html);
		});
		$('.mini.button.save').live('click',function(){
			self.saveUser(this.id);
		});
		$('#pwLink').bind('click',function(){
			page.fox.center().display({
	            url:"resetPassword",
	            callback:function(){
	            	
	                $('#resetPasswordButton').bind('click',function(){
	                    page.request({
							url: '/account/resetPassword',
							request: {
								username: self.me.username,
								old_password: $('#oldPassword').val(),
								new_password: $('#newPassword').val(),
								password_secret: $('#passwordSecret').val()
							},
							success: function(json) {
								page.fox.center().message({
									title: 'Success!',
									message: 'You have reset your password.'
								});
							}
						});
	                });
	                $('#oldPassword').focus();
	                $('#oldPassword, #newPassword').bind('keypress', function(e){
						var code = e.keyCode || e.which;
						if(code == 13) { 
							$('#resetPasswordButton').click();
						}
					});
	            }
	        });
		});
		
		$('#deleteAccount').bind('click',function(){
		
			if (self.me.created_by == 'rentfox') {
				page.fox.center().message({
					title: "NOOOooOOoooooo...!",
					message: 'Dear '+self.me.first_name+',<br /><br />\
						We are sorry to hear that you want to delete your account.<br /><br /> \
						Since you are the superuser and owner of this account, \
						you must either give superuser access to another person within your company\
						or delete the company account.<br /><br />\
						You may do so from the <a href="/company">company page</a>.'
				});
			} else {
				_promptDelete();
			}
			
		});
	}
	
	function _promptDelete() {
		page.fox.confirm({
			message:'We are very sorry to hear that you want to delete your account. \
				Are you absolutely sure you want to do this?',
			confirmButtonText: 'Yes, please delete',
			success:function(){
			
				page.fox.center().display({
		            url:"deleteUser",
		            callback:function(){
		            	$('#password').focus();
		            	$('#password').bind('keypress', function(e){
							var code = e.keyCode || e.which;
							if(code == 13) { 
								$('#deleteUserButton').click();
							}
						});
		                $('#deleteUserButton').bind('click',function(){
		                    page.request({
								url: '/account/delete',
								request: {
									password: $('#password').val()
								},
								success: function(json) {
									location.href = '/signout';
								}
							});
		                });
		            }
		        });
		        
			}
		});
	}
	
	_init();
}

AccountManage.prototype.saveUser = function(what) {
	var self = this,	
		fname = self.me.first_name,
		lname = self.me.last_name,
		email = self.me.email,
		phone = self.me.phone !== null ? self.me.phone : '';
	
	switch(what) {
		case 'saveName':
			fname = $('#update-fname').val(); 
			lname = $('#update-lname').val(); 
			break;
		case 'saveEmail':
			email = $('#update-email').val();
			break;
		case 'savePhone':
			phone = $('#update-phone').val();
			break;
	}

	page.request({
		url: '/account/save',
		request: {
			userId: self.me.id,
			fname: fname,
			lname: lname,
			email: email,
			phone: phone
		},
		success: function(json) {
			self.me = json;

			var newId = what.replace('save','edit');
			var display = what.replace('save','');
			var label = self.me[display.toLowerCase()] || '[enter '+display.toLowerCase()+']';
			var html = '<span id="' + newId + '">' + label + '</span>';
			$('#'+what).parent().html(html);

			self.refreshUser();
		}
	});
	
	return self;
}

AccountManage.prototype.refreshUser = function() {
	var self = this;
	
	var hasName = self.me.name.replace(' ','');
	var firstName = self.me.first_name || self.me.last_name || 'No-Name';
	
	$('#editName').text(hasName ? self.me.name : '[enter name]');
	$('#editEmail').text(self.me.email || '[enter email]');
	$('#editPhone').text(self.me.phone || '[enter phone]');
	$('#managerFirstName').text(firstName);
	
	if (self.me.type == 'admin') {
		$('#manages').text(firstName + ' has access to all properties.');
	} else {
		if (self.me.properties.length) {
			var html = '';
			$.each(self.me.properties,function(i,property){
				html += '<a href="/property/view/'+ property.id +'">'+property.name+'</a>';
			});
			$('#myProperties').html(html);
			$('#manages').text(firstName + ' manages:');
		} else {
			$('#manages').text(firstName + ' has no access to any properties.');
		}
	}
	
	
	return self;
}
function CompanyManage() {

	var self = this;
	
	var htmlDict = {
		editName: '<a class="mini button cancel" id="cancelName"><span>Cancel</span></a>\
			<a class="mini button save" id="saveName"><span>Save</span></a>\
			<input type="text" id="update-name">',
		editStreet: '<a class="mini button cancel" id="cancelStreet"><span>Cancel</span></a>\
			<a class="mini button save" id="saveStreet"><span>Save</span></a>\
			<input type="text"  id="update-street">',
		editLocation: '<a class="mini button cancel" id="cancelLocation"><span>Cancel</span></a>\
			<a class="mini button save" id="saveLocation"><span>Save</span></a>\
			<input type="text" id="update-city">,\
			<input type="text" class="mini" id="update-state">,\
			<input type="text" class="small" id="update-zip">',
		editEmail: '<a class="mini button cancel" id="cancelEmail"><span>Cancel</span></a>\
			<a class="mini button save" id="saveEmail"><span>Save</span></a>\
			<input type="text" id="update-email">',
		editPhone: '<a class="mini button cancel" id="cancelPhone"><span>Cancel</span></a>\
			<a class="mini button save" id="savePhone"><span>Save</span></a>\
			<input type="text" id="update-phone">',
	}
	

	function _init(){
		page.request({
			url: '/company/getInfo',
			type: 'GET',
			async: false,
			success: function(json) {
				self.co = json;
				self.refreshCompany();
				
			}
		});
		$('#companyManage').addClass('superuser');
		$('.item > span').live('click',function(){
			var thisId = this.id;
			$(this).parent().html(htmlDict[thisId]);
			$('#update-name').val(self.co.name);
			$('#update-email').val(self.co.email);
			$('#update-phone').val(self.co.phone);
			$("#update-phone").mask("(999) 999-9999");
			$('#update-street').val(self.co.street);
			$('#update-city').val(self.co.city);
			$('#update-state').val(self.co.state);
			$('#update-zip').val(self.co.zip);
		});
		$('a.cancel').live('click',function(){
			var newId = this.id.replace('cancel','edit');
			var display = this.id.replace('cancel','');
			var label = self.co[display.toLowerCase()] || '[enter '+display.toLowerCase()+']';
			var html = '<span id="' + newId + '">' + label + '</span>';
			$(this).parent().html(html);
		});
		$('.mini.button.save').live('click',function(){
			self.saveCompany(this.id);
		});
		$('#switchSuperuser').bind('click',function(){
			if (!self.companyUsers) {
				_getCompanyUsers();
			}
			if (self.companyUsers.length) {
				self.switchSuperuser();
			} else {
				self.declineSuperuserSwitch();
			}
		});
		$('#deleteAccount').bind('click',function(){
			
			
			page.fox.confirm({
				message:'We are very sorry to hear that you want to delete your company. \
					Are you absolutely sure you want to do this?',
				confirmButtonText: 'Yes, please delete',
				success:function(){
				
				
					page.fox.center().display({
			            url:"deleteCompany",
			            callback:function(){
			            	$('#password').focus();
			            	$('#password').bind('keypress', function(e){
								var code = e.keyCode || e.which;
								if(code == 13) { 
									$('#deleteCompanyButton').click();
								}
							});
			                $('#deleteCompanyButton').bind('click',function(){
			                    page.request({
									url: '/company/delete',
									request: {
										password: $('#password').val()
									},
									success: function(json) {
										location.href = '/signout';
									}
								});
			                });
			            }
			        }); // end password prompt
			        
			        
				}
			}); // end confirm
			
			
		});
		
	}
	
	function _getCompanyUsers(){
		page.request({
			url: '/company/getCompanyActiveUsers',
			type: 'GET',
			async: false,
			success: function(json) {
				self.companyUsers = json;
			}
		});
	}
	
	_init();
}

CompanyManage.prototype.declineSuperuserSwitch = function() {
	page.fox.center().message({
		title: 'Oops!',
		message: 'It appears that you are the only activated user in this company. \
			You cannot give access to somebody else unless there is another activated user.<br /><br /> \
			You may create new users from the <a href="/users">users page</a>.<br /><br />\
			Keep in mind they will need to be activated \
			before you can transfer superuser priviledges.'
	});
}

CompanyManage.prototype.switchSuperuser = function() {
	var self = this;
	page.fox.confirm({
		message:'Once you give away superuser priviledges to someone else, you will no longer have control over this page.<br /><br /> \
			Are you absolutely sure you want to do this?',
		confirmButtonText: 'Yes, continue',
		success:function(){
			
			page.fox.center().display({
	            url:"switchSuperuser",
	            callback:function(){
	            	
	            	var html = [];
	            	$.each(self.companyUsers, function(i,manager){
	            		html[i] = '<option id="'+manager.id+'">'+manager.name+'</option>';	
	            	});
	            	$('#userlist').html(html.join(''));
	            	
	                $('#switchSuperuserButton').bind('click',function(){
	                    page.request({
							url: '/company/switchSuperuser',
							request: {
								managerId: $('#userlist option:selected').attr('id')
							},
							success: function(json) {
								location.href = '/company'
							}
						});
	                });

	            }
	        });
			
		}
	});
}


CompanyManage.prototype.saveCompany = function(what) {
	var self = this,
		name = self.co.name,
		email = self.co.email !== null ? self.co.email : '',
		phone = self.co.phone !== null ? self.co.phone : '',
		street = self.co.street !== null ? self.co.street : '',
		city = self.co.city !== null ? self.co.city : '',
		state = self.co.state !== null ? self.co.state : '',
		zip = self.co.zip !== null ? self.co.zip : '';
	
	switch(what) {
		case 'saveName':
			name = $('#update-name').val();
			break;
		case 'saveEmail':
			email = $('#update-email').val();
			break;
		case 'savePhone':
			phone = $('#update-phone').val();
			break;
		case 'saveStreet':
			street = $('#update-street').val();
			break;
		case 'saveLocation':
			city = $('#update-city').val();
			state = $('#update-state').val();
			zip = $('#update-zip').val();
			break;
	}

	page.request({
		url: '/company/save',
		request: {
			name: name,
			street: street,
			city: city,
			state: state,
			zip: zip,
			email: email,
			phone: phone
		},
		success: function(json) {
			self.co = json;
			var newId = what.replace('save','edit');
			var display = what.replace('save','');
			var label = self.co[display.toLowerCase()] || '[enter '+display.toLowerCase()+']';
			var html = '<span id="' + newId + '">' + label + '</span>';
			$('#'+what).parent().html(html);
			$('#company-name').text(self.co.name);

			self.refreshCompany();
		}
	});
	
	return self;
}

CompanyManage.prototype.refreshCompany = function() {
	var self = this;

	$('#editName').text(self.co.name);
	$('#editEmail').text(self.co.email || '[enter email]');
	$('#editPhone').text(self.co.phone || '[enter phone]');
	$('#editStreet').text(self.co.street || '[enter street]');
	$('#editLocation').text(self.co.location || '[enter city, state, zip]');
	
	return self;
}
function Help(){
}
function UnitView(data) {
	var self = this;
	
	self.propertyId = false;
	self.currentTenant = null;
	if(data.propertyId) { self.propertyId = data.propertyId };
	if(data.unitId) { self.unitId = data.unitId };
	
	self.init();
	
	return self;
}

UnitView.prototype.init = function() {
	var self = this;

	page.request({
		url: '/unit/json/'+self.unitId,
		type: 'GET',
		async: false,
		success: function(json) {
			self.unit = json;
		}
	});

	self.prop = new Property({propertyId:self.propertyId});
	self.property = self.prop.getProperty();
	
	if (self.property.type === 'multi') {
		self.unitscroller = new UnitScroller({
			property:self.property, 
			clickUnit:function(units, unit){
				var thisUnitId = unit.attr('id');
				var thisUnitLabel = unit.text();
				var thisUnit = self.getUnit(thisUnitId);
				location.href = thisUnitId;
			}
		});
		self.unitscroller.initListItems({
			eachUnit: function(unit){
				var thisUnit = self.getUnit(unit.attr('id'));
				if (!thisUnit.floorPlan.id) {
					unit.addClass('noFloorPlan');
				} else if (thisUnit.id == self.unitId) {
					unit.addClass('on');
				}
			}
		});
		if (self.unitId) {
			self.unitscroller.scrollToUnit(self.unitId);
		}
	}
	
	
	self.picViewer = new PicViewer('#unitPicViewer');
	
	self.moduleOn("pulse").navSetup().refreshUnit().pulseSetup().unitSetup().tenantSetup().leaseSetup().transactionSetup();
	
	
	
	return self;
}

UnitView.prototype.refreshUnit = function() {
	var self = this;
	
	$('#leaseModule .view, #cancelLeaseEditor, #leaseStatus, #tenants, #noTenants').css({display:'none'});
	$('#leaseStatus').removeClass('red,orange');
	if (self.unit.lease) {
		
		$("#leaseDisplayMode,#cancelLeaseEditor").css({display:'block'});
		
		// display lease info
		$('#displayLeaseTitle').text(self.unit.lease.status);
		$('#displayContractStart').text(self.unit.lease.start);
		$('#displayContractEnd').text(self.unit.lease.up);
		$('#displayMoveout').html('<a id="setMoveOutDate" class="link">'+self.unit.lease.out+'</a>');
		$('#displayRentDue').html('$' + self.unit.lease.rent + ' due every ' + dayStemmer(self.unit.lease.due.toString()));
		
		if ( parseInt(self.unit.lease.due) > 28 ) {
			$('#displayRentDue').append('<div>Months with less than ' + self.unit.lease.due + ' days will have a due date on the last day of the month.</div>');
		}
		var lateRecurrence = parseInt(self.unit.lease.interval) === 1 ? 'each day late' : 'only once';
		$('#displayLateRule').html('$' + self.unit.lease.lateCharge + ' charged ' + lateRecurrence + ' <span>' + self.unit.lease.gracePeriod + ' days grace period</span>');
		
		var depositOnHold = self.unit.lease.depositPaid ? self.unit.lease.deposit : '0 <span>$' + self.unit.lease.deposit + ' owed.</span>';
		$('#displayDeposit').html('$'+depositOnHold);
		
		
		
		// fill editor
		if ( self.unit.lease.up === 'No date set' ) {
			$('#lease-m2m').attr('checked', true);
			$('#contractDates').hide();
		} else {
			$('#lease-m2m').attr('checked', false);
			$('#contractDates').show();
		}
		$('#lease-start').val(self.unit.lease.editStart);
		$('#lease-end').val(self.unit.lease.editUp);
		self.unit.lease.out == 'No date set' ? $('#m2mafter').attr('checked', 'checked') : $('#m2mafter').removeAttr('checked');
		$('#lease-rent').val(self.unit.lease.rent);
		$('#lease-rent-due option[value="' + self.unit.lease.due + '"]').attr('selected', 'selected');
		$('#lease-deposit').val(self.unit.lease.deposit);
		$('#lease-depositPaid').attr('checked', self.unit.lease.depositPaid);
		$('#lease-lateFee').val(self.unit.lease.lateCharge);
		$('#lease-lateFee-interval option[value="' + self.unit.lease.interval + '"]').attr('selected', 'selected');
		$('#lease-grace').val(self.unit.lease.gracePeriod);
		
		
		var html = [],
			tenants = self.unit.lease.tenants ? self.unit.lease.tenants : [],
			len = tenants.length;

		for (var i=0; i<len; i++){
			var id=tenants[i].id;
			html.push( ['<li id="',id,'"><a class="link" href="/tenant/view/', id,'">', tenants[i].name, '</a> <img src="/styles/img/ico/x.png" alt="Remove tenant from lease" />','</li>'].join('') );	
		}
		
		
		$('#leaseTenants').html( html.join('') );
		
	} else {
		$('#leaseEditMode').css({display:'block'});
	}
	
	if (!self.unit.currentLease) {		
		$('#leaseStatus').addClass('red').css({display:'block'}).html('<a class="mini button" id="createLeaseButton"><span><img src="/styles/img/ico/lease_add.png" />Create new lease</span></a>Vacant Unit');
		$('#noTenants').css({display:'block'});
	} else {
		if (self.unit.tenants) {
			self.renderTenants();
		} else {
			$('#noTenants').css({display:'block'});
			$('#leaseStatus').addClass('orange').css({display:'block'}).html('<a class="mini button" id="addTenantButton"><span><img src="/styles/img/ico/user_add.png" />Add Tenant</span></a>There are no tenants currently in the unit.');
		}
	}
	
	var html = [ '<option id="resetUnit">Select leases</option>' ],
		leases = self.unit.leases,
		len = leases.length;
	for (i=0; i<len; i++) {
		var id = leases[i].id,
			display = leases[i].display;
		if (self.unit.lease && id === self.unit.lease.id) {
			display = self.unit.lease.start + ' - ' + self.unit.lease.out;
		} 
		html.push( ['<option id="',id,'">',display,'</option>'].join('') );
	}
	$('#allLeasesDropdown').html( html.join() )
		.children('option[id="'+self.unit.lease.id+'"]').attr('selected','selected');
	
	$('#allLeasesDropdown').unbind('change').bind('change', function(){
		var leaseid = $('#allLeasesDropdown option:selected').attr('id');
		if (leaseid === 'resetUnit') {
			page.request({
				url: '/unit/json/'+self.unitId,
				type: 'GET',
				async: false,
				success: function(json) {
					self.unit = json;
					self.refreshUnit();
					self.clearForm();
				}
			});
		} else {
			page.request({
				url: '/lease/json/'+leaseid,
				type: 'GET',
				async: false,
				success: function(json) {
					self.unit.lease = json;
					self.refreshUnit();
				}
			});
		}
	});
	
	return self;
}

UnitView.prototype.renderTenants = function() {
	var self = this;
	var json = self.unit.tenants;
	var html = '';
	var tenantList = '';
	for (var i = 0; i < json.length ;i++) {
		html += '<div class="person" id="'+json[i].id+'">\
			<div class="pic">\
				<div class="thumb user"><span class="frame"><img src="" /></span></div>\
			</div>\
			<dl>\
				<dt><a href="/tenant/view/'+json[i].id+'">'+json[i].name+'</a></dt>\
				<dd>'+json[i].email+'</dd>\
				<dd>'+json[i].phone+'</dd>\
			</dl>\
		</div>';
		tenantList += '<li alt="'+json[i].id+'">'+json[i].name+'</li>';
	}
	$('#people').html(html);
	$('#tenantList').html(tenantList);
	$('#tenants').css({display:'block'});
	self.tenantOn($('#tenantList li:first').addClass('on').attr('alt'));
		
}

UnitView.prototype.getUnit = function(unitId) {
	var self = this;
	
	for (var i in self.property.units) {
		if (self.property.units[i].id == unitId) {
			return self.property.units[i];
		}
	}
	return false;
}

UnitView.prototype.navSetup = function() {
	var self = this;
	
	$("#pulseNav").bind("click",function(){
		self.moduleOn("pulse");
	});
	$("#unitNav").bind("click",function(){
		self.moduleOn("unit");
	});
	$("#leaseNav").bind("click",function(){
		self.moduleOn("lease");
	});
	$("#transactionsNav").bind("click",function(){
		self.moduleOn("transactions");
	});
	
	return self;
}

UnitView.prototype.pulseSetup = function() {
	var self = this;
		optlist = $('#unit-pulse-options > li'),
		unitid = self.unitId;
	
	self.pulse = new Pulse('#unit-pulse');
	
	page.request({
		url: '/pulse/get',
		request: {
			unitid: unitid
		},
		success: function(json) {
			self.pulse.refresh(json);
		}
	});
	
	optlist.bind('click',function(){
		var element = $(this),
			type = element.attr('rel'),
			label = element.text();
		
		optlist.removeClass('on');
		element.addClass('on');
		
		page.request({
			url: '/pulse/get',
			request: {
				type: type,
				unitid: unitid
			},
			success: function(json) {
				$('#unit-pulse-label').text(label);
				self.pulse.refresh(json);
			}
		});
		
	});
	
	return self;
}

UnitView.prototype.unitSetup = function(){
	var self = this,
		unitid = self.unitId,
		picViewer = self.picViewer,
		errorlist = {errors:[]},
		floorplanInfo = self.unit.floorplan;
	
	floorplanHtml = '';
	if (floorplanInfo) {
		floorplanHtml += '<dd>'+floorplanInfo.sqft+' sqft, '+floorplanInfo.beds+' bed / '+floorplanInfo.baths+' bath</dd>';
	}
	
	$('#unitNav dl').append(floorplanHtml);
	
	// unit photo uploader
	page.request({
		url: '/unit/photos',
		type: 'GET',
		request: {
			unitid: unitid
		},
		success: function(json) {
			picViewer.setup( json );
		}
	});
	
	$('#unitPicViewer').filedrop({
		url: '/unit/uploadPhoto',
		data: {
			unitid: unitid
		},
		error: function(err, file) {
			switch(err) {
				case 'BrowserNotSupported':
					errorlist.errors.push({selector:'',
						message:'Your browser does not support drag and drop uploading.  Currently only Firefox 3.6+ supports this feature. Please use the upload button instead.'});
					page.errors.prompt(errorlist);
					break;
				case 'TooManyFiles':
					errorlist.errors.push({selector:'',
						message:'Too many files. You can only upload 25 files at a time.'});
					page.errors.prompt(errorlist);
					break;
				case 'FileTooLarge':
					errorlist.errors.push({selector:'',
						message:file.name + ' is too large. Please keep each photo under 20MB.'});
					page.errors.prompt(errorlist);
					break;
				default:
					break;
			}
		},
		maxfilesize: 20,
		dragOver: function() {
			picViewer.activateDropzone();
		},
		dragLeave: function() {
			picViewer.deactivateDropzone();
		},
		docOver: function() {
			picViewer.showDropzone();
		},
		docLeave: function() {
			picViewer.hideDropzone();
		},
		drop: function() {
			picViewer.hideDropzone();
			errorlist.errors = [];
		},
		uploadStarted: function(i, file, len){
			page.ajaxStart();
		},
		uploadFinished: function(i, file, response, time) {
			page.ajaxStop();
			if (response[0].errors) {
				errorlist.errors.push({selector:'', 
					message: file.name + ' failed to upload. ' + response[0].errors[0].message});
				page.errors.prompt(errorlist);
				return false;
			} else {
				picViewer.addPhoto( response[0] );
			}
		}
	});
	
	new AjaxUpload('#unitPicViewer-upload', {
		action: '/unit/uploadPhoto',
		onSubmit: function(file, extension){
			page.ajaxStart();
		},
		data: {
			unitid: unitid
		},
		responseType: 'json',
		onComplete: function(file, response) {
			page.ajaxStop();
			if (response.errors) {
				page.errors.prompt(response);
			} else {
				picViewer.addPhoto( response );
			}
		}
	});
	
	$('#unitPicViewer-delete').bind('click',function(){
		var photo = picViewer.photos[ picViewer.photoIndex ],
			photoid = photo ? photo.id : false;
		
		if (photoid) {
			page.fox.confirm({
				message:'Are you sure you want to delete this photo?',
				confirmButtonText: 'Delete photo',
				success:function(){
					page.request({
						url: '/unit/removePhoto',
						request: {
							photoid: photoid
						},
						success: function(json) {
							picViewer.removePhoto()
						}
					});
				}
			});
			
		} else {
			page.fox.message({
				title:"Oops!",
				message:"The photo you are trying to delete does not exist."
			});
		}
	});
	
	$('#edit-floorplan-link').bind('click',function(){
		location.href = '/property/setup/'+self.propertyId+'/'+unitid
	});
	
	$('#floorplan-img').bind('click', function(){
		var img_src = $(this).attr('src').replace('-thumb','');
		page.previewModal.show(img_src);
	});
	
	return self;
}
UnitView.prototype.leaseSetup = function() {
	var self = this;
	
	$('#createLeaseButton').live('click',function(){
		$("#leaseNav").click();
		$('#leaseDisplayMode').hide();
		$('#leaseEditMode').show();
		self.clearForm();
	});
	
	$('#createLease').bind('click',function(){
		var viewing_lease = self.unit.lease;
		$('#leaseDisplayMode').hide();
		$('#leaseEditMode').show();
		self.unit.lease = 0;
		self.clearForm();
		$('#cancelLeaseEditor').bind('mousedown',function(){
			self.unit.lease = viewing_lease;
			self.refreshUnit();
			$('#cancelLeaseEditor').unbind('mousedown').trigger('click');
		});
	});
	
	$('#addTenant,#addTenantButton,#addTenantToLeaseButton').live('click',function(){
		location.href='/tenant/add/'+self.unit.currentLease.id;
	});
	
	$('#editLease').bind('click',function(){
		self.showLeaseEditor();	
	});
	$('#saveLease').bind('click',function(){	
		
		var url = !self.unit.lease ? '/lease/create' : '/lease/save';
		page.request({
			url: url,
			request: {
				unitId: self.unitId,
				leaseId: self.unit.lease.id,
				m2m: $('#lease-m2m').attr('checked'),
				startdate: $('#lease-start').val(),
				enddate: $('#lease-end').val(),
				m2m_after: $('#m2mafter').attr('checked'),
				prev_paid: $('#prevPaid').attr('checked'),
				rent: $('#lease-rent').val(),
				due: $('#lease-rent-due option:selected').val(),
				deposit: $('#lease-deposit').val(),
				deposit_paid: $('#lease-depositPaid').attr('checked'),
				latecharge: $('#lease-lateFee').val(),
				interval: $('#lease-lateFee-interval option:selected').val(),
				graceperiod: $('#lease-grace').val(),
			},
			offset: {x:200,y:0},
			success: function(json) {
				if (self.unit.lease.id) {
					self.unit.lease = json;
				} else {
					self.unit = json;
				}
				self.hideLeaseEditor().refreshUnit();
			}
		});
		
	});
	$('#cancelLeaseEditor').bind('click',function(){
		self.hideLeaseEditor();	
	});
	$('#lease-m2m').bind('click', function(){
		if ($(this).is(':checked')) {
			$('#contractDates').slideUp('fast');
		} else {
			$('#contractDates').slideDown('fast');
		}
	});
	
	$('#setMoveOutDate').live('click',function(){
		page.fox.center().display({
			url: 'endLease',
			callback: function(){
				new Datepicker('#moveOutDateInput', 'days');
				$('#moveOutDateInput').mask('99/99/9999');
				$('#endLeaseButton').bind('click',function(){
					page.request({
						url: '/lease/endLease',
						request: {
							leaseid: self.unit.lease.id,
							unitId: self.unitId,
							moveOutDate: $('#moveOutDateInput').val()
						},
						success: function(json){
							self.unit.lease = json;
							self.refreshUnit();
						}
					})
				});
			}
		});
	});
	
	$('#deleteLease').bind('click',function(){
		page.fox.confirm({
			message:'Are you sure you want to delete this lease?  You will lose access to this lease forever.',
			confirmButtonText: 'Yes, please delete',
			success: function(){
				page.request({
					url: '/lease/delete',
					request: {
						leaseid: self.unit.lease.id,
						unitId: self.unitId
					},
					success: function(json){
						location.reload();
					}
				});
			}
		});
	});
	
	
	$('#leaseTenants > li > img').live('click',function(e){
		
		var prev_lease = self.unit.lease,
			lease_id = $(this).parent().attr('id');
		
		page.fox.confirm({
			message:'Are you sure you want to remove this tenant from the lease?',
			confirmButtonText: 'Yes, please remove',
			success: function(){
				
				page.request({
					url: '/tenant/removeFromLease',
					request: {
						tenantId: lease_id,
						leaseId: self.unit.lease.id,
						unitId: self.unitId
					},
					success: function(json){
						var tenants = json.lease.tenants;
						self.unit = json;
						self.unit.lease = prev_lease;
						self.unit.lease.tenants = tenants;
						self.refreshUnit();
					}
				});
			}
			
		});
		
	});
	
	$('#lease-start, #lease-end').mask('99/99/9999');
	new Datepicker('#lease-start');
	new Datepicker('#lease-end');
	
	return self;
}

UnitView.prototype.transactionSetup = function() {
	var self = this;
	$('#billResidentsButton').bind('click',function(){
		self.showBillResidents();	
	});
	$('#payResidentsButton').bind('click',function(){
		self.showPayResidents();	
	});
	$('#transactionsModule .action .cancel').bind('click',function(){
		self.hideBillPayForms();	
	});
	new Datepicker('#billDueDate');
	var monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	
	if (self.unit.transactions.length) {
	
		var latestTrans = self.unit.transactions[0];
		var latestHtml = '';
		
		latestHtml += '<dd>'+latestTrans.amount;
		latestTrans.amount.indexOf('-') == -1 ? latestHtml += ' paid on ' : latestHtml += ' returned on ';
		latestHtml += monthList[latestTrans.month - 1] + ' ' + latestTrans.day + ', '+latestTrans.year+'</dd>';
		
		$('#transactionsNav dl').append(latestHtml);
	} else {
		$('#transactionsNav dl').append('<dd>No transaction records</dd>');
	}
	
	_updateTransactions(self.unit.transactions);
	
	var transOpt = $('#transaction-options > li');
	transOpt.bind('click', function() {
		var el = $(this),
			type = el.attr('type'),
			label = el.text();
		
		transOpt.removeClass('on');
		el.addClass('on');
		
		page.request({
			url: '/reports/get',
			request: {
				type: type,
				unitId: self.unitId
			},
			success: function(json) {
				$('#transaction-label').text(label);
				_updateTransactions(json);
			}
		});
		
	});
	
	function _updateTransactions(json) {
		var transHtml = '';
		$.each(json, function(i, val) {
			val.amount.indexOf('-') == -1 ? transHtml += '<div class="row plus">' : transHtml += '<div class="row minus">';
			transHtml += '<div class="date">'+monthList[val.month - 1] + ' ' + val.day + ', '+val.year+'</div>';
			transHtml += '<div class="type">'+val.type+'</div>';
			transHtml += '<div class="amount">'+val.amount+'</div></div>';
		});
		if (!transHtml) {
			transHtml += '<div class="nothing">No transaction records</div>';
		}
		$('#transactionsModule #transactionList').html(transHtml);
	}
	
	return self;
}

UnitView.prototype.showBillResidents = function() {
	var self = this;
	$('#transactionsModule .action, #transactionsDisplay').css({display:'none'});
	$('#billResidents').css({display:'block'});
	$('#billMessage').unbind().elastic();
	return self;
}

UnitView.prototype.showPayResidents = function() {
	var self = this;
	$('#transactionsModule .action, #transactionsDisplay').css({display:'none'});
	$('#payResidents').css({display:'block'});
	$('#payMessage').unbind().elastic();
	return self;
}

UnitView.prototype.hideBillPayForms = function() {
	var self = this;
	$('#transactionsModule .action').css({display:'none'});
	$('#transactionsDisplay').css({display:'block'});
	return self;
}

UnitView.prototype.showLeaseEditor = function() {
	var self = this;
	$('#prevPaidBox').remove();
	$("#leaseModule .view").css({display:"none"});
	$('#leaseEditMode').css({display:'block'});
	return self;
}
UnitView.prototype.hideLeaseEditor = function() {
	var self = this;
	$("#leaseModule .view").css({display:"none"});
	$('#leaseDisplayMode').css({display:'block'});
	return self;
}

UnitView.prototype.moduleOn = function(module) {
	var self = this;
	
	$("#unitViewNav > li").removeClass("on");
	$(".module").css({display:"none"});
	
	switch(module){
		case "unit":
			$("#unitNav").addClass("on");
			$("#unitModule").css({display:"block"});
			break;
		case "lease":
			$("#leaseNav").addClass("on");
			$("#leaseModule").css({display:"block"});
			break;
		case "transactions":
			$("#transactionsNav").addClass("on");
			$("#transactionsModule").css({display:"block"});
			break;
		default:
			$("#pulseNav").addClass("on");
			$("#pulseModule").css({display:"block"});
	}
	
	return self;
}


UnitView.prototype.tenantSetup = function() {
	var self = this;
	
	$("#tenantList > li").live("click",function(){
		$("#tenantList > li").removeClass("on");
		$(this).addClass("on");
		
		var person = $(this).attr("alt");
		self.tenantOn(person);
	});
	
	$('#editTenant').bind('click',function(){
		location.href = '/tenant/view/'+self.currentTenant;
	});
	
	$('#removeTenant').bind('click',function(){
		
		page.fox.confirm({
			message:'Are you sure you want to remove this tenant from the lease?',
			confirmButtonText: 'Yes, please remove',
			success: function(){
				
				page.request({
					url: '/tenant/removeFromLease',
					request: {
						tenantId: self.currentTenant,
						leaseId: self.unit.lease.id,
						unitId: self.unitId
					},
					success: function(json){
						self.unit = json;
						self.refreshUnit();
					}
				});
			}
			
		});
		
	});
	
	return self;
}

UnitView.prototype.tenantOn = function(tenant){
	var self = this;
	
	$("#tenants .person").css({display:"none"});
	$("#" + tenant).css({display:"block"});
	self.currentTenant = tenant;
	
	return self;
}

UnitView.prototype.clearForm = function() {
	$('#leaseEditMode input').val('');
}

function TenantAdd(data) {
	var self = this;
	self.leaseId = data ? data.leaseId : 0;
	self.init();
	return self;
}

TenantAdd.prototype.init = function() {
	var self = this;
	
	self.initCreateForm();
	
	return self;
}

TenantAdd.prototype.initCreateForm = function() {
	var self = this;
	
	$("#createForm input").bind('keypress', function(e){
		var code = e.keyCode || e.which;
		if(code == 13) { 
			$('#continueCreateTenant').click();
		}
	});
	
	$('#continueCreateTenant').bind('click',function(){
		page.request({
			url: '/tenant/exists',
			request: {
				fname: $('#fname').val(),
				lname: $('#lname').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				dob: '',
				ssn: '',
				leaseId: self.leaseId
			},
			offset: {x:-270,y:0},
			success: function(json) {
				if(json.match) {
					self.showMatches(json.tenants);
				} else {
					location.href = '/tenant/view/'+json.id;
				}
			}
		});
	});
	
	$("#phone").mask("(999) 999-9999");
	
	return self;
}

TenantAdd.prototype.showMatches = function(tenants) {
	
	var self = this;
	
	$('#noMatchButton').bind('click',function(){
		page.request({
			url: '/tenant/create',
			request: {
				fname: $('#fname').val(),
				lname: $('#lname').val(),
				email: $('#email').val(),
				phone: '',
				dob: '',
				ssn: '',
				leaseId: self.leaseId
			},
			success: function(json) {
				location.href = '/tenant/view/'+json.id;
			}
		});
	});
	
	$.each(tenants, function(i,tenant){
		var belongsToUnit = "Does not belong to any unit.";
		if (tenant.unit) belongsToUnit = tenant.unit.display;
		
		var html = [];
		html[0] = '<div class="tenant"><a class="button existingTenant" id="' + tenant.id + '"><span>This one</span></a><div class="person"><div class="pic"><div class="thumb"><span class="frame">';
		if (tenant.photo) {
			html[1] = '<img src="' + tenant.photo + '" />';
		}
		html[2] = '</span></div></div><dl><dt>' + tenant.name + '</dt><dd>' + tenant.email + '</dd><dd>' + belongsToUnit + '</dd></dl></div></div>';
		$('#tenantMatchList').append(html.join(''));
		
		page.thumbnail.init();
	});
	
	$('.existingTenant').bind('click',function(){
		var tenantId = $(this).attr('id');
		page.request({
			url: '/tenant/addLease',
			request: {
				tenantId: tenantId,
				leaseId: self.leaseId
			},
			success: function(json) {
				location.href = '/tenant/view/'+json.tenantId;
			}
		});
	});
	
	$("#createForm").css({display:'none'});
	$("#tenantMatches").css({display:'block'});
	
	return self;
}
function TenantView(data) {
	var self = this;

	page.request({
		url: '/tenant/json/'+data.tenantId,
		async: false,
		request: {
			tenantId: data.tenantId
		},
		success: function(json) {
			self.tenant = json;
			self.init();
		}
	});
	
	return self;
}

TenantView.prototype.init = function() {
	var self = this;
	
	self.refreshData().initForms();
	
	return self;
}

TenantView.prototype.initForms = function() {
	var self = this;
	
	self.bindUpdateDelete();
	
	// emergency contact editing UI binds
	$("#addContact").bind('click',function(){
		self.openEditor("contact", $("#contactButton"), "create");
		$('#contactEditor input').val('');
		page.inputText.reset();
	});
	$("#cancelContact").bind('click',function(){
		self.closeEditor("contact");
	});
	$("#saveContact").bind('click',function(){
		self.saveContact();
	});
	$("#contactEditor input").bind('keypress', function(e){
		var code = e.keyCode || e.which;
		if(code == 13) { 
			$('#saveContact').click();
		}
	});
	
	
	// previous residences editing UI binds
	$("#addResidence").bind('click',function(){
		self.openEditor("residence", $("#residenceButton"), "create");
		$('#residenceEditor input').val('');
		page.inputText.reset();
	});
	$("#cancelResidence").bind('click',function(){
		self.closeEditor("residence");
	});
	$("#saveResidence").bind('click',function(){
		self.saveResidence();
	});
	$("#residenceEditor input").bind('keypress', function(e){
		var code = e.keyCode || e.which;
		if(code == 13) { 
			$('#saveResidence').click();
		}
	});
	
	
	// tenant details editing UI binds
	$("#editTenantInfo").bind('click',function(){
		self.openEditor("tenant", $("#tenantInfoDisplay"));
	});
	$("#cancelTenantInfo").bind('click',function(){
		self.closeEditor("tenant");
	});
	$("#saveTenantInfo").bind('click',function(){
		self.saveTenantInfo();
	});
	$("#tenantInfoEditor input").bind('keypress', function(e){
		var code = e.keyCode || e.which;
		if(code == 13) { 
			$('#saveTenantInfo').click();
		}
	});
	
	new Datepicker('#residenceStart');
	new Datepicker('#residenceEnd');
	
	$("#tenantPhone, #emergencyPhone, #residenceLandlordPhone").mask("(999) 999-9999");
	$("#tenantDOB, #residenceStart, #residenceEnd").mask("99/99/9999");
	$("#tenantSSN").mask("999-99-9999");

	return self;
}

TenantView.prototype.bindUpdateDelete = function() {
	var self = this;
	
	$("#emergencyContacts p.item > img.edit").unbind('click').bind('click',function(){
		self.openEditor("contact", $(this).parent(), "save");
	});
	$("#emergencyContacts .delete").unbind().bind('click',function(){
		var contactId = $(this).parent().attr('id');
		page.fox.confirm({
			message:'Are you sure you want to delete this emergency contact?',
			confirmButtonText: 'Yes, please delete',
			success:function(){
				page.request({
					url: '/tenant/deleteContact',
					request: {
						contactId: contactId,
						tenantId: self.tenant.id
					},
					offset: {x:-270,y:0},
					success: function(json) {
						self.tenant = json;
						self.refreshData();
					}
				});
			}
		});
		
		return false;
	});
	
	$("#previousResidences p.item > img.edit").unbind('click').bind('click',function(){
		self.openEditor("residence", $(this).parent(), "save");
	});
	$("#previousResidences .delete").unbind().bind('click',function(){
		var residenceId = $(this).parent().attr('id');
		page.fox.confirm({
			message:'Are you sure you want to delete this previous residence?',
			confirmButtonText: 'Yes, please delete',
			success:function(){
				page.request({
					url: '/tenant/deleteResidence',
					request: {
						residenceId: residenceId,
						tenantId: self.tenant.id
					},
					offset: {x:-270,y:0},
					success: function(json) {
						self.tenant = json;
						self.refreshData();
					}
				});
			}
		});
		return false;
	});
	
	return self;
}

TenantView.prototype.openEditor = function(type, hideObj, operation) {
	var self = this;
	self.currentOperation = operation;
	if (type == "contact") {
		var showObj = $("#contactEditor");
		if (self.currentContactItem) self.currentContactItem.css({display:"block"});
		self.currentContactItem = hideObj;
		if (operation == 'save') self.populateContactEditor();
	} else if (type == "residence") {
		var showObj = $("#residenceEditor");
		if (self.currentResidenceItem) self.currentResidenceItem.css({display:"block"});
		self.currentResidenceItem = hideObj;
		if (operation == 'save') self.populateResidenceEditor();
	} else {
		var showObj = $("#tenantInfoEditor");
		self.populateTenantEditor();
	}
	showObj.insertAfter(hideObj).css({display:'block'});
	hideObj.css({display:'none'});
	
	
	return self;
}

TenantView.prototype.closeEditor = function(type) {
	var self = this;
	
	if (type == "contact") {
		var hideObj = $("#contactEditor");
		var showObj = self.currentContactItem;
		self.currentContactItem = 0;
	} else if (type == "residence") {
		var hideObj = $("#residenceEditor");
		var showObj = self.currentResidenceItem;
		self.currentResidenceItem = 0;
	} else {
		var hideObj = $("#tenantInfoEditor");
		var showObj = $("#tenantInfoDisplay");
	}
	hideObj.css({display:"none"});
	showObj.css({display:"block"});
	
	return self;
}

TenantView.prototype.saveTenantInfo = function() {
	var self = this;
	
	page.inputText.clear();
	
	page.request({
		url: '/tenant/updateTenant',
		request: {
			tenantId: self.tenant.id,
			fname: $('#tenantFname').val(),
			lname: $('#tenantLname').val(),
			phone: $('#tenantPhone').val(),
			email:$('#tenantEmail').val(),
			dob: $('#tenantDOB').val(),
			ssn: $('#tenantSSN').val()
		},
		offset: {x:0,y:0},
		success: function(json) {
			self.tenant = json;
			self.closeEditor("tenant").refreshData();
		}
	});
	
	page.inputText.reset();
	
	return self;
}

TenantView.prototype.saveContact = function() {
	var self = this;
	var contactId = 0;
	
	if (self.currentOperation == 'save') contactId = self.currentContactItem.attr('id'); 
	
	page.inputText.clear();
	
	page.request({
		url: '/tenant/saveContact',
		offset: {x:250,y:0},
		request: {
			contactId: contactId,
			tenantId: self.tenant.id,
			name: $('#emergencyName').val(),
			phone: $('#emergencyPhone').val(),
			relationship: $('#emergencyRelationship').val()
		},
		success: function(json) {
			self.tenant = json;
			self.closeEditor("contact").refreshData();
		}
	});
	
	page.inputText.reset();

	
	return self;
}

TenantView.prototype.saveResidence = function() {
	var self = this;
	var residenceId = 0;
	
	if (self.currentOperation == 'save') residenceId = self.currentResidenceItem.attr('id');
	
	page.inputText.clear();
	
	page.request({
		url: '/tenant/saveResidence',
		request: {
			residenceId: residenceId,
			tenantId: self.tenant.id,
			startdate: $('#residenceStart').val(),
			enddate: $('#residenceEnd').val(),
			street: $('#residenceStreet').val(),
			city: $('#residenceCity').val(),
			state: $('#residenceState').val(),
			landlordname: $('#residenceLandlord').val(),
			landlordphone: $('#residenceLandlordPhone').val(),
			landlordemail: $('#residenceLandlordEmail').val(),
			reason: $('#residenceReasonLeaving').val()				
		},
		offset: {x:-100,y:-50},
		success: function(json) {
			self.tenant = json;
			self.closeEditor("residence").refreshData();
		}
	});
	
	page.inputText.reset();
	
	return self;
}

TenantView.prototype.refreshData = function() {
	var self = this;
	
	$('#personalName').text(self.tenant.firstname + " " + self.tenant.lastname);
	$('#personalEmail').text(self.tenant.email);
	$('#personalPhone').text(self.tenant.phone);
	$('#personalDOB').text(self.tenant.dob);
	if (self.tenant.ssn) {
		$('#personalSSN').text('SSN: '+self.tenant.ssn);
	} else {
		$('#personalSSN').text('');
	}
	
	$('#contactEditor').insertAfter($('#contactButton'));
	$('#residenceEditor').insertAfter($('#residenceButton'));
	
	var html = '';
	$.each(self.tenant.contacts, function(i,val) {
		html += '<p class="item" id="'+val.id+'">';
		html += '<img class="delete" src="/styles/img/ico/delete.png" /><img class="edit" src="/styles/img/ico/pencil.png" />';
		html += val.name+'<br />'+val.phone+'<br />'+val.relationship+'</em></p>';
	});
	$("#contactList").html(html);
	
	html = '';
	$.each(self.tenant.residences, function(i,val) {
		html += '<p class="item" id="'+val.id+'">';
		html += '<img class="delete" src="/styles/img/ico/delete.png" /><img class="edit" src="/styles/img/ico/pencil.png" />';
		html += val.started+' - '+val.ended+'<br />';
		html += val.street+'<br />'+val.city+', '+val.state+'<br />';
		if (val.landlord){html += val.landlord+' (landlord)<br />'}
		if (val.landlordPhone){html += val.landlordPhone+'<br />'}
		if (val.landlordEmail){html += val.landlordEmail+'<br />'}
		if (val.reason){html += '<em>"'+val.reason+'"</em></p>';}
	});
	$("#residenceList").html(html);
	
	self.bindUpdateDelete();
	
	return self;
}

TenantView.prototype.populateTenantEditor = function() {
	var self = this;
	
	$('#tenantFname').val(self.tenant.firstname);
	$('#tenantLname').val(self.tenant.lastname);
	$('#tenantEmail').val(self.tenant.email);
	$('#tenantPhone').val(self.tenant.phone);
	$('#tenantDOB').val(self.tenant.dob);
	$('#tenantSSN').val(self.tenant.ssn);

	page.inputText.reset();
	
	return self;
}

TenantView.prototype.populateContactEditor = function() {
	var self = this;
	
	var thisContactId = self.currentContactItem.attr('id');
	var thisContact = self.getContactById(thisContactId);
	
	$('#emergencyName').val(thisContact.name);
	$('#emergencyPhone').val(thisContact.phone);
	$('#emergencyRelationship').val(thisContact.relationship);
		
	page.inputText.reset();
	
	return self;
}

TenantView.prototype.populateResidenceEditor = function() {
	var self = this;

	var thisResidenceId = self.currentResidenceItem.attr('id');
	var thisResidence = self.getResidenceById(thisResidenceId);
	
	$('#residenceStart').val(thisResidence.started);
	$('#residenceEnd').val(thisResidence.ended);
	$('#residenceStreet').val(thisResidence.street);
	$('#residenceCity').val(thisResidence.city);
	$('#residenceState').val(thisResidence.state);
	$('#residenceLandlord').val(thisResidence.landlord);
	$('#residenceLandlordPhone').val(thisResidence.landlordPhone);
	$('#residenceLandlordEmail').val(thisResidence.landlordEmail);
	$('#residenceReasonLeaving').val(thisResidence.reason);
	
	page.inputText.reset();
	
	return self;
}

TenantView.prototype.getContactById = function(contactId) {
	var self = this;
	
	for (var i in self.tenant.contacts) {
		if (self.tenant.contacts[i].id == contactId) {
			return self.tenant.contacts[i];
		}
	}
	return false;
}

TenantView.prototype.getResidenceById = function(residenceId) {
	var self = this;
	
	for (var i in self.tenant.residences) {
		if (self.tenant.residences[i].id == residenceId) {
			return self.tenant.residences[i];
		}
	}
	return false;
}


/* =Unit Scroller Object attribues
	
	Takes following parameters:
	
	*required
		(string) property 
			- the ID of the property
	
	*optional
		(function) clickUnit 
			- a function that determine what happens on a click
	
----------------------------------------------- */

function UnitScroller(data) 
{	
	var self = this;
	/* =Unit Scroller Object attribues
	----------------------------------------------- */
	self.container = $('#unitScroller > .scrollFrame');
	self.list = $('#unitScroller > .scrollFrame > ul');
	self.listH = $('#unitScroller > .scrollFrame > ul > li').length * 30;
	self.filterBox = $('#unitScroller > .manualInput > input');
	self.unitSlider = $('#unitScroller > .controls > .slider');
	self.clickable = true;
	self.property = data.property;
	self.clickUnit = data.clickUnit;
	self.stopTop = 0; // fixes bug flickit calls this
	self.init();
}

UnitScroller.prototype.init = function() {
	var self = this;
	
	
	/* =unit scroller container frame has dynamic height
	----------------------------------------------- */
	self.initListItems().loadUnits().setFrameHeight().flickIt();
	
	$(window).bind('resize',function(){
		self.setFrameHeight();
	})
	
	/* =filterBox
	----------------------------------------------- */
	self.filterBox.bind('keyup',function() {
		self.filterUnits();
	});
	
	self.list.disableTextSelect();
	
	return self;
}

UnitScroller.prototype.initSlider = function() {
	var self = this;
	
	
	self.unitSlider.slider('destroy').slider({
		orientation: 'vertical',
		min: self.frameH,
		max: self.listH,
		value: self.listH,
		animate: true,
		stop: function(event, ui) {
			self.scroll = 0 - (self.listH - $(this).slider('value'));
			self.list.animate({top: self.scroll});
		}
	})
	
	if (self.listH <= self.frameH) {
		self.unitSlider.css({'display':'none'});
	} else {
		self.unitSlider.css({'display':'block'});
	}

	return self;
}

UnitScroller.prototype.filterUnits = function() {
	var self = this;
	self.listH = 0;
	
	if (self.filterBox.attr('value') != '') {
		self.listItems.css({display:'none'});
		self.listItems.each(function(i,val){
			if ($(this).text().toUpperCase().match(self.filterBox.attr('value').toUpperCase())) {
				$(this).css({display:'block'});
				self.listH += 30;
			}
		});
	} else {
		self.listItems.css({display:'block'});
		self.listH = self.listItems.size() * 30;
	}
	self.list.animate({top: 0});
	self.initUnitDrag().initSlider();
	
	return self;
}

UnitScroller.prototype.initUnitDrag = function() {
	var self = this;
	
	self.list.unbind().draggable({
		axis: 'y',
		distance: 5,
		start: function(event,ui) {
			
			self.timestamp = new Date();
			self.startTime = self.timestamp.getTime();
			self.clickable = false;
			self.startTop = $(this).position().top;
			
		},
		stop: function(event,ui) {
		
			
			self.timestamp = new Date();
			self.stopTime = self.timestamp.getTime();
			self.timeDiff = (self.stopTime - self.startTime) / 1000;

			self.stopTop = $(this).position().top;
			self.dragDistance = self.stopTop - self.startTop;
			if (self.dragDistance < 0) {
				self.dragDistance *= -1;
				self.dragDirection = 'up';
			} else {
				self.dragDirection = 'down';
			}

			self.scrollRate = self.dragDistance / self.timeDiff;
			

			self.flickIt();
			
		}
	});
	
	return self;
}

UnitScroller.prototype.flickIt = function() {
	
	var self = this;
	
	self.fromTop = -self.listH + self.frameH;
	
	/* =if it's too far down
	----------------------------------------------- */
	if (self.stopTop > 0 || self.listH <= self.frameH) {
		self.list.animate({top: 0});
		self.unitSlider.slider('value', self.listH);
		return;
	}
	
	/* =if it's too far up
	----------------------------------------------- */
	if (self.stopTop < self.fromTop) {
		self.list.animate({top: self.fromTop});
		self.unitSlider.slider('value', self.frameH);
		return;
	}
	
	/* =know when to flick
		~ 500 units it's under the 0.2 range
		~ 1000 units it's right above the 0.3 range
		~ 1500 units it's right above the 0.4
		- 2000 units it's around the 0.5 range
	----------------------------------------------- */
	
	if (self.timeDiff < (.1 + self.listItems.size()/5000)) {
		/* =smart compensation for close range dragging
		----------------------------------------------- */
		if (self.timeDiff > .1)
		{
			if (self.dragDistance < 100) {
				self.unitSlider.slider('value', self.listH + self.stopTop);
				return;
			}
		}
		
		/* =scroll distance and direction, can be + or -
		----------------------------------------------- */
		if (self.dragDirection == 'up')
		{
			//self.scroll = self.stopTop - self.scrollRate;
			self.scroll = self.stopTop - self.listH * .2;
		}
		else
		{
			//self.scroll = self.stopTop + self.scrollRate;
			self.scroll = self.stopTop + self.listH * .2;
		}
		
		/* =bring back if too far down
		----------------------------------------------- */
		if (self.scroll > 0) {
			self.list.animate({top: self.scroll / 13});
			self.list.animate({top: 0});
			self.unitSlider.slider('value', self.listH);
			return;
		}
		
		/* =bring back if too far up
		----------------------------------------------- */
		if (self.scroll < self.fromTop) {
			self.list.animate({top: self.fromTop + (self.scroll/13)});
			self.list.animate({top: self.fromTop});
			self.unitSlider.slider('value', self.frameH);
			return;
		}
		
		/* =flicked!
		----------------------------------------------- */
		self.list.animate({top: self.scroll});
		self.unitSlider.slider('value', self.listH + self.scroll);
		
	} else {
		/* =drag with no flicks
		----------------------------------------------- */
		self.unitSlider.slider('value', self.listH + self.stopTop); 
		
	}
	return self;
}

UnitScroller.prototype.setFrameHeight = function() {
	var self = this;
	self.frameH = $(window).height() - 230;
	self.unitSlider.css('height',self.frameH - 10);
	self.container.css('height',self.frameH);
	self.initUnitDrag().initSlider();
	if (self.listH < self.frameH && self.filterBox.attr('value')=='filter') {
		self.filterBox.css({display:'none'});
	} else {
		self.filterBox.css({display:'block'});
	}
	
	return self;
}

UnitScroller.prototype.loadUnits = function(data) {
	var self = this;
	var html = new Array();
	
	self.listItems.remove();
	
	for (var i in self.property.units) {
		if(data){	
			if (data.currentUnit == self.property.units[i].id) {
				html[i] = '<li class="on" id=' + self.property.units[i].id + '>' + self.property.units[i].label + '</li>';
			} else {
				html[i] = '<li id=' + self.property.units[i].id + '>' + self.property.units[i].label + '</li>';
			}
		} else {
			html[i] = '<li id=' + self.property.units[i].id + '>' + self.property.units[i].label + '</li>';
		}
	}
	
	self.list.html(html.join(''));
	self.listH = html.length * 30;
	if (self.listH < self.frameH) {
		self.filterBox.css({display:'none'});
	} else {
		self.filterBox.css({display:'block'});
	}
	self.initUnitDrag().initSlider();
	self.listItems = $('#unitScroller > .scrollFrame > ul > li');
	
	return self;
}

UnitScroller.prototype.initListItems = function(data) {
	var self = this;
	
	self.listItems = $('#unitScroller > .scrollFrame > ul > li');
	if (self.clickUnit) {
		self.listItems.unbind().bind('click',function() {
			if (self.clickable) {
				self.clickUnit(self.listItems, $(this));
			}
			self.clickable = true;
		})
	}
	
	if(data) {
		if (data.eachUnit) {
			self.listItems.each(function(){
				data.eachUnit($(this));
			});
		}
		if (data.allUnits) {
			data.allUnits(self.listItems);
		}
	}
	
	
	return self;
}

UnitScroller.prototype.scrollToUnit = function(unit) {
	var self = this;
	
	var fromTop = $('#'+unit).position().top - self.frameH/2 + 30;
	var margin = self.listH - fromTop;
	if (self.frameH > margin) {
		self.list.css({top:(self.listH - self.frameH)*-1});
		self.unitSlider.slider('value', self.frameH);
	} else if (fromTop > self.frameH) {
		self.list.css({top:fromTop*-1})
		self.unitSlider.slider('value', self.listH - fromTop);
	}
	
	
	return self;
}
function PreviewModal() {
	
	var self = this;
	this.modal = $('#previewModal');
	this.img = $('#previewModal img');
	
	$('#previewModal .close').bind('click', function() {
		self.modal.hide();
	});
}

PreviewModal.prototype.show = function( src ) {
	var self = this;
	this.modal.show();
	this.img.show().attr('src', src);
}

PreviewModal.prototype.hide = function() {
	this.modal.hide();
	this.img.hide().attr('src', '');
}
/*
 * jQuery history plugin
 * 
 * sample page: http://www.mikage.to/jquery/jquery_history.html
 *
 * Copyright (c) 2006-2009 Taku Sano (Mikage Sawatari)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Modified by Lincoln Cooper to add Safari support and only call the callback once during initialization
 * for msie when no initial hash supplied.
 */


jQuery.extend({
	historyCurrentHash: undefined,
	historyCallback: undefined,
	historyIframeSrc: undefined,
	historyNeedIframe: jQuery.browser.msie && (jQuery.browser.version < 8 || document.documentMode < 8),
	
	historyInit: function(callback, src){
		jQuery.historyCallback = callback;
		if (src) jQuery.historyIframeSrc = src;
		var current_hash = location.hash.replace(/\?.*$/, '');
		
		jQuery.historyCurrentHash = current_hash;
		if (jQuery.historyNeedIframe) {
			// To stop the callback firing twice during initilization if no hash present
			if (jQuery.historyCurrentHash == '') {
				jQuery.historyCurrentHash = '#';
			}
		
			// add hidden iframe for IE
			jQuery("body").prepend('<iframe id="jQuery_history" style="display: none;"'+
				' src="javascript:false;"></iframe>'
			);
			var ihistory = jQuery("#jQuery_history")[0];
			var iframe = ihistory.contentWindow.document;
			iframe.open();
			iframe.close();
			iframe.location.hash = current_hash;
		}
		else if (jQuery.browser.safari) {
			// etablish back/forward stacks
			jQuery.historyBackStack = [];
			jQuery.historyBackStack.length = history.length;
			jQuery.historyForwardStack = [];
			jQuery.lastHistoryLength = history.length;
			
			jQuery.isFirst = true;
		}
		if(current_hash)
			jQuery.historyCallback(current_hash.replace(/^#/, ''));
		setInterval(jQuery.historyCheck, 100);
	},
	
	historyAddHistory: function(hash) {
		// This makes the looping function do something
		jQuery.historyBackStack.push(hash);
		
		jQuery.historyForwardStack.length = 0; // clear forwardStack (true click occured)
		this.isFirst = true;
	},
	
	historyCheck: function(){
		if (jQuery.historyNeedIframe) {
			// On IE, check for location.hash of iframe
			var ihistory = jQuery("#jQuery_history")[0];
			var iframe = ihistory.contentDocument || ihistory.contentWindow.document;
			var current_hash = iframe.location.hash.replace(/\?.*$/, '');
			if(current_hash != jQuery.historyCurrentHash) {
			
				location.hash = current_hash;
				jQuery.historyCurrentHash = current_hash;
				jQuery.historyCallback(current_hash.replace(/^#/, ''));
				
			}
		} else if (jQuery.browser.safari) {
			if(jQuery.lastHistoryLength == history.length && jQuery.historyBackStack.length > jQuery.lastHistoryLength) {
				jQuery.historyBackStack.shift();
			}
			if (!jQuery.dontCheck) {
				var historyDelta = history.length - jQuery.historyBackStack.length;
				jQuery.lastHistoryLength = history.length;
				
				if (historyDelta) { // back or forward button has been pushed
					jQuery.isFirst = false;
					if (historyDelta < 0) { // back button has been pushed
						// move items to forward stack
						for (var i = 0; i < Math.abs(historyDelta); i++) jQuery.historyForwardStack.unshift(jQuery.historyBackStack.pop());
					} else { // forward button has been pushed
						// move items to back stack
						for (var i = 0; i < historyDelta; i++) jQuery.historyBackStack.push(jQuery.historyForwardStack.shift());
					}
					var cachedHash = jQuery.historyBackStack[jQuery.historyBackStack.length - 1];
					if (cachedHash != undefined) {
						jQuery.historyCurrentHash = location.hash.replace(/\?.*$/, '');
						jQuery.historyCallback(cachedHash);
					}
				} else if (jQuery.historyBackStack[jQuery.historyBackStack.length - 1] == undefined && !jQuery.isFirst) {
					// back button has been pushed to beginning and URL already pointed to hash (e.g. a bookmark)
					// document.URL doesn't change in Safari
					if (location.hash) {
						var current_hash = location.hash;
						jQuery.historyCallback(location.hash.replace(/^#/, ''));
					} else {
						var current_hash = '';
						jQuery.historyCallback('');
					}
					jQuery.isFirst = true;
				}
			}
		} else {
			// otherwise, check for location.hash
			var current_hash = location.hash.replace(/\?.*$/, '');
			if(current_hash != jQuery.historyCurrentHash) {
				jQuery.historyCurrentHash = current_hash;
				jQuery.historyCallback(current_hash.replace(/^#/, ''));
			}
		}
	},
	historyLoad: function(hash){
		var newhash;
		hash = decodeURIComponent(hash.replace(/\?.*$/, ''));
		
		newhash = '#' + hash;
		location.hash = newhash;
		
		jQuery.historyCurrentHash = newhash;
		
		if (jQuery.historyNeedIframe) {
			var ihistory = jQuery("#jQuery_history")[0];
			var iframe = ihistory.contentWindow.document;
			iframe.open();
			iframe.close();
			iframe.location.hash = newhash;
			jQuery.lastHistoryLength = history.length;
			jQuery.historyCallback(hash);
		}
		else {
		  jQuery.historyCallback(hash);
		}
	}
});
/**
 * AJAX Upload ( http://valums.com/ajax-upload/ ) 
 * Copyright (c) Andris Valums
 * Licensed under the MIT license ( http://valums.com/mit-license/ )
 * Thanks to Gary Haran, David Mark, Corey Burns and others for contributions. 
 */
(function () {
    /* global window */
    /* jslint browser: true, devel: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true */
    
    /**
     * Wrapper for FireBug's console.log
     */
    function log(){
        if (typeof(console) != 'undefined' && typeof(console.log) == 'function'){            
            Array.prototype.unshift.call(arguments, '[Ajax Upload]');
            console.log( Array.prototype.join.call(arguments, ' '));
        }
    } 

    /**
     * Attaches event to a dom element.
     * @param {Element} el
     * @param type event name
     * @param fn callback This refers to the passed element
     */
    function addEvent(el, type, fn){
        if (el.addEventListener) {
            el.addEventListener(type, fn, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + type, function(){
                fn.call(el);
	        });
	    } else {
            throw new Error('not supported or DOM not loaded');
        }
    }   
    
    /**
     * Attaches resize event to a window, limiting
     * number of event fired. Fires only when encounteres
     * delay of 100 after series of events.
     * 
     * Some browsers fire event multiple times when resizing
     * http://www.quirksmode.org/dom/events/resize.html
     * 
     * @param fn callback This refers to the passed element
     */
    function addResizeEvent(fn){
        var timeout;
               
	    addEvent(window, 'resize', function(){
            if (timeout){
                clearTimeout(timeout);
            }
            timeout = setTimeout(fn, 100);                        
        });
    }    
    
    // Needs more testing, will be rewriten for next version        
    // getOffset function copied from jQuery lib (http://jquery.com/)
    if (document.documentElement.getBoundingClientRect){
        // Get Offset using getBoundingClientRect
        // http://ejohn.org/blog/getboundingclientrect-is-awesome/
        var getOffset = function(el){
            var box = el.getBoundingClientRect();
            var doc = el.ownerDocument;
            var body = doc.body;
            var docElem = doc.documentElement; // for ie 
            var clientTop = docElem.clientTop || body.clientTop || 0;
            var clientLeft = docElem.clientLeft || body.clientLeft || 0;
             
            // In Internet Explorer 7 getBoundingClientRect property is treated as physical,
            // while others are logical. Make all logical, like in IE8.	
            var zoom = 1;            
            if (body.getBoundingClientRect) {
                var bound = body.getBoundingClientRect();
                zoom = (bound.right - bound.left) / body.clientWidth;
            }
            
            if (zoom > 1) {
                clientTop = 0;
                clientLeft = 0;
            }
            
            var top = box.top / zoom + (window.pageYOffset || docElem && docElem.scrollTop / zoom || body.scrollTop / zoom) - clientTop, left = box.left / zoom + (window.pageXOffset || docElem && docElem.scrollLeft / zoom || body.scrollLeft / zoom) - clientLeft;
            
            return {
                top: top,
                left: left
            };
        };        
    } else {
        // Get offset adding all offsets 
        var getOffset = function(el){
            var top = 0, left = 0;
            do {
                top += el.offsetTop || 0;
                left += el.offsetLeft || 0;
                el = el.offsetParent;
            } while (el);
            
            return {
                left: left,
                top: top
            };
        };
    }
    
    /**
     * Returns left, top, right and bottom properties describing the border-box,
     * in pixels, with the top-left relative to the body
     * @param {Element} el
     * @return {Object} Contains left, top, right,bottom
     */
    function getBox(el){
        var left, right, top, bottom;
        var offset = getOffset(el);
        left = offset.left;
        top = offset.top;
        
        right = left + el.offsetWidth;
        bottom = top + el.offsetHeight;
        
        return {
            left: left,
            right: right,
            top: top,
            bottom: bottom
        };
    }
    
    /**
     * Helper that takes object literal
     * and add all properties to element.style
     * @param {Element} el
     * @param {Object} styles
     */
    function addStyles(el, styles){
        for (var name in styles) {
            if (styles.hasOwnProperty(name)) {
                el.style[name] = styles[name];
            }
        }
    }
        
    /**
     * Function places an absolutely positioned
     * element on top of the specified element
     * copying position and dimentions.
     * @param {Element} from
     * @param {Element} to
     */    
    function copyLayout(from, to){
	    var box = getBox(from);
        
        addStyles(to, {
	        position: 'absolute',                    
	        left : box.left + 'px',
	        top : box.top + 'px',
	        width : from.offsetWidth + 'px',
	        height : from.offsetHeight + 'px'
	    });        
    }

    /**
    * Creates and returns element from html chunk
    * Uses innerHTML to create an element
    */
    var toElement = (function(){
        var div = document.createElement('div');
        return function(html){
            div.innerHTML = html;
            var el = div.firstChild;
            return div.removeChild(el);
        };
    })();
            
    /**
     * Function generates unique id
     * @return unique id 
     */
    var getUID = (function(){
        var id = 0;
        return function(){
            return 'ValumsAjaxUpload' + id++;
        };
    })();        
 
    /**
     * Get file name from path
     * @param {String} file path to file
     * @return filename
     */  
    function fileFromPath(file){
        return file.replace(/.*(\/|\\)/, "");
    }
    
    /**
     * Get file extension lowercase
     * @param {String} file name
     * @return file extenstion
     */    
    function getExt(file){
        return (-1 !== file.indexOf('.')) ? file.replace(/.*[.]/, '') : '';
    }

    function hasClass(el, name){        
        var re = new RegExp('\\b' + name + '\\b');        
        return re.test(el.className);
    }    
    function addClass(el, name){
        if ( ! hasClass(el, name)){   
            el.className += ' ' + name;
        }
    }    
    function removeClass(el, name){
        var re = new RegExp('\\b' + name + '\\b');                
        el.className = el.className.replace(re, '');        
    }
    
    function removeNode(el){
        el.parentNode.removeChild(el);
    }

    /**
     * Easy styling and uploading
     * @constructor
     * @param button An element you want convert to 
     * upload button. Tested dimentions up to 500x500px
     * @param {Object} options See defaults below.
     */
    window.AjaxUpload = function(button, options){
        this._settings = {
            // Location of the server-side upload script
            action: 'upload.php',
            // File upload name
            name: 'userfile',
            // Additional data to send
            data: {},
            // Submit file as soon as it's selected
            autoSubmit: true,
            // The type of data that you're expecting back from the server.
            // html and xml are detected automatically.
            // Only useful when you are using json data as a response.
            // Set to "json" in that case. 
            responseType: false,
            // Class applied to button when mouse is hovered
            hoverClass: 'hover',
            // Class applied to button when button is focused
            focusClass: 'focus',
            // Class applied to button when AU is disabled
            disabledClass: 'disabled',            
            // When user selects a file, useful with autoSubmit disabled
            // You can return false to cancel upload			
            onChange: function(file, extension){
            },
            // Callback to fire before file is uploaded
            // You can return false to cancel upload
            onSubmit: function(file, extension){
            },
            // Fired when file upload is completed
            // WARNING! DO NOT USE "FALSE" STRING AS A RESPONSE!
            onComplete: function(file, response){
            }
        };
                        
        // Merge the users options with our defaults
        for (var i in options) {
            if (options.hasOwnProperty(i)){
                this._settings[i] = options[i];
            }
        }
                
        // button isn't necessary a dom element
        if (button.jquery){
            // jQuery object was passed
            button = button[0];
        } else if (typeof button == "string") {
            if (/^#.*/.test(button)){
                // If jQuery user passes #elementId don't break it					
                button = button.slice(1);                
            }
            
            button = document.getElementById(button);
        }
        
        if ( ! button || button.nodeType !== 1){
            throw new Error("Please make sure that you're passing a valid element"); 
        }
                
        if ( button.nodeName.toUpperCase() == 'A'){
            // disable link                       
            addEvent(button, 'click', function(e){
                if (e && e.preventDefault){
                    e.preventDefault();
                } else if (window.event){
                    window.event.returnValue = false;
                }
            });
        }
                    
        // DOM element
        this._button = button;        
        // DOM element                 
        this._input = null;
        // If disabled clicking on button won't do anything
        this._disabled = false;
        
        // if the button was disabled before refresh if will remain
        // disabled in FireFox, let's fix it
        this.enable();        
        
        this._rerouteClicks();
    };
    
    // assigning methods to our class
    AjaxUpload.prototype = {
        setData: function(data){
            this._settings.data = data;
        },
        disable: function(){            
            addClass(this._button, this._settings.disabledClass);
            this._disabled = true;
            
            var nodeName = this._button.nodeName.toUpperCase();            
            if (nodeName == 'INPUT' || nodeName == 'BUTTON'){
                this._button.setAttribute('disabled', 'disabled');
            }            
            
            // hide input
            if (this._input){
                // We use visibility instead of display to fix problem with Safari 4
                // The problem is that the value of input doesn't change if it 
                // has display none when user selects a file           
                this._input.parentNode.style.visibility = 'hidden';
            }
        },
        enable: function(){
            removeClass(this._button, this._settings.disabledClass);
            this._button.removeAttribute('disabled');
            this._disabled = false;
            
        },
        /**
         * Creates invisible file input 
         * that will hover above the button
         * <div><input type='file' /></div>
         */
        _createInput: function(){ 
            var self = this;
                        
            var input = document.createElement("input");
            input.setAttribute('type', 'file');
            input.setAttribute('name', this._settings.name);
            
            addStyles(input, {
                'position' : 'absolute',
                // in Opera only 'browse' button
                // is clickable and it is located at
                // the right side of the input
                'right' : 0,
                'margin' : 0,
                'padding' : 0,
                'fontSize' : '480px',
                // in Firefox if font-family is set to
                // 'inherit' the input doesn't work
                'fontFamily' : 'sans-serif',
                'cursor' : 'pointer'
            });            

            var div = document.createElement("div");                        
            addStyles(div, {
                'display' : 'block',
                'position' : 'absolute',
                'overflow' : 'hidden',
                'margin' : 0,
                'padding' : 0,                
                'opacity' : 0,
                // Make sure browse button is in the right side
                // in Internet Explorer
                'direction' : 'ltr',
                //Max zIndex supported by Opera 9.0-9.2
                'zIndex': 2147483583
            });
            
            // Make sure that element opacity exists.
            // Otherwise use IE filter            
            if ( div.style.opacity !== "0") {
                if (typeof(div.filters) == 'undefined'){
                    throw new Error('Opacity not supported by the browser');
                }
                div.style.filter = "alpha(opacity=0)";
            }            
            
            addEvent(input, 'change', function(){
                 
                if ( ! input || input.value === ''){                
                    return;                
                }
                            
                // Get filename from input, required                
                // as some browsers have path instead of it          
                var file = fileFromPath(input.value);
                                
                if (false === self._settings.onChange.call(self, file, getExt(file))){
                    self._clearInput();                
                    return;
                }
                
                // Submit form when value is changed
                if (self._settings.autoSubmit) {
                    self.submit();
                }
            });            

            addEvent(input, 'mouseover', function(){
                addClass(self._button, self._settings.hoverClass);
            });
            
            addEvent(input, 'mouseout', function(){
                removeClass(self._button, self._settings.hoverClass);
                removeClass(self._button, self._settings.focusClass);
                
                // We use visibility instead of display to fix problem with Safari 4
                // The problem is that the value of input doesn't change if it 
                // has display none when user selects a file           
                input.parentNode.style.visibility = 'hidden';

            });   
                        
            addEvent(input, 'focus', function(){
                addClass(self._button, self._settings.focusClass);
            });
            
            addEvent(input, 'blur', function(){
                removeClass(self._button, self._settings.focusClass);
            });
            
	        div.appendChild(input);
            document.body.appendChild(div);
              
            this._input = input;
        },
        _clearInput : function(){
            if (!this._input){
                return;
            }            
                             
            // this._input.value = ''; Doesn't work in IE6                               
            removeNode(this._input.parentNode);
            this._input = null;                                                                   
            this._createInput();
            
            removeClass(this._button, this._settings.hoverClass);
            removeClass(this._button, this._settings.focusClass);
        },
        /**
         * Function makes sure that when user clicks upload button,
         * the this._input is clicked instead
         */
        _rerouteClicks: function(){
            var self = this;
            
            // IE will later display 'access denied' error
            // if you use using self._input.click()
            // other browsers just ignore click()

            addEvent(self._button, 'mouseover', function(){
                if (self._disabled){
                    return;
                }
                                
                if ( ! self._input){
	                self._createInput();
                }
                
                var div = self._input.parentNode;                            
                copyLayout(self._button, div);
                div.style.visibility = 'visible';
                                
            });
            
            
            // commented because we now hide input on mouseleave
            /**
             * When the window is resized the elements 
             * can be misaligned if button position depends
             * on window size
             */
            //addResizeEvent(function(){
            //    if (self._input){
            //        copyLayout(self._button, self._input.parentNode);
            //    }
            //});            
                                         
        },
        /**
         * Creates iframe with unique name
         * @return {Element} iframe
         */
        _createIframe: function(){
            // We can't use getTime, because it sometimes return
            // same value in safari :(
            var id = getUID();            
             
            // We can't use following code as the name attribute
            // won't be properly registered in IE6, and new window
            // on form submit will open
            // var iframe = document.createElement('iframe');
            // iframe.setAttribute('name', id);                        
 
            var iframe = toElement('<iframe src="javascript:false;" name="' + id + '" />');
            // src="javascript:false; was added
            // because it possibly removes ie6 prompt 
            // "This page contains both secure and nonsecure items"
            // Anyway, it doesn't do any harm.            
            iframe.setAttribute('id', id);
            
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            
            return iframe;
        },
        /**
         * Creates form, that will be submitted to iframe
         * @param {Element} iframe Where to submit
         * @return {Element} form
         */
        _createForm: function(iframe){
            var settings = this._settings;
                        
            // We can't use the following code in IE6
            // var form = document.createElement('form');
            // form.setAttribute('method', 'post');
            // form.setAttribute('enctype', 'multipart/form-data');
            // Because in this case file won't be attached to request                    
            var form = toElement('<form method="post" enctype="multipart/form-data"></form>');
                        
            form.setAttribute('action', settings.action);
            form.setAttribute('target', iframe.name);                                   
            form.style.display = 'none';
            document.body.appendChild(form);
            
            // Create hidden input element for each data key
            for (var prop in settings.data) {
                if (settings.data.hasOwnProperty(prop)){
                    var el = document.createElement("input");
                    el.setAttribute('type', 'hidden');
                    el.setAttribute('name', prop);
                    el.setAttribute('value', settings.data[prop]);
                    form.appendChild(el);
                }
            }
            return form;
        },
        /**
         * Gets response from iframe and fires onComplete event when ready
         * @param iframe
         * @param file Filename to use in onComplete callback 
         */
        _getResponse : function(iframe, file){            
            // getting response
            var toDeleteFlag = false, self = this, settings = this._settings;   
               
            addEvent(iframe, 'load', function(){                
                
                if (// For Safari 
                    iframe.src == "javascript:'%3Chtml%3E%3C/html%3E';" ||
                    // For FF, IE
                    iframe.src == "javascript:'<html></html>';"){                                                                        
                        // First time around, do not delete.
                        // We reload to blank page, so that reloading main page
                        // does not re-submit the post.
                        
                        if (toDeleteFlag) {
                            // Fix busy state in FF3
                            setTimeout(function(){
                                removeNode(iframe);
                            }, 0);
                        }
                                                
                        return;
                }
                
                var doc = iframe.contentDocument ? iframe.contentDocument : window.frames[iframe.id].document;
                
                // fixing Opera 9.26,10.00
                if (doc.readyState && doc.readyState != 'complete') {
                   // Opera fires load event multiple times
                   // Even when the DOM is not ready yet
                   // this fix should not affect other browsers
                   return;
                }
                
                // fixing Opera 9.64
                if (doc.body && doc.body.innerHTML == "false") {
                    // In Opera 9.64 event was fired second time
                    // when body.innerHTML changed from false 
                    // to server response approx. after 1 sec
                    return;
                }
                
                var response;
                
                if (doc.XMLDocument) {
                    // response is a xml document Internet Explorer property
                    response = doc.XMLDocument;
                } else if (doc.body){
                    // response is html document or plain text
                    response = doc.body.innerHTML;
                    
                    if (settings.responseType && settings.responseType.toLowerCase() == 'json') {
                        // If the document was sent as 'application/javascript' or
                        // 'text/javascript', then the browser wraps the text in a <pre>
                        // tag and performs html encoding on the contents.  In this case,
                        // we need to pull the original text content from the text node's
                        // nodeValue property to retrieve the unmangled content.
                        // Note that IE6 only understands text/html
                        if (doc.body.firstChild && doc.body.firstChild.nodeName.toUpperCase() == 'PRE') {
                            doc.normalize();
                            response = doc.body.firstChild.firstChild.nodeValue;
                        }
                        
                        if (response) {
                            response = eval("(" + response + ")");
                        } else {
                            response = {};
                        }
                    }
                } else {
                    // response is a xml document
                    response = doc;
                }
                
                settings.onComplete.call(self, file, response);
                
                // Reload blank page, so that reloading main page
                // does not re-submit the post. Also, remember to
                // delete the frame
                toDeleteFlag = true;
                
                // Fix IE mixed content issue
                iframe.src = "javascript:'<html></html>';";
            });            
        },        
        /**
         * Upload file contained in this._input
         */
        submit: function(){                        
            var self = this, settings = this._settings;
            
            if ( ! this._input || this._input.value === ''){                
                return;                
            }
                                    
            var file = fileFromPath(this._input.value);
            
            // user returned false to cancel upload
            if (false === settings.onSubmit.call(this, file, getExt(file))){
                this._clearInput();                
                return;
            }
            
            // sending request    
            var iframe = this._createIframe();
            var form = this._createForm(iframe);
            
            // assuming following structure
            // div -> input type='file'
            removeNode(this._input.parentNode);            
            removeClass(self._button, self._settings.hoverClass);
            removeClass(self._button, self._settings.focusClass);
                        
            form.appendChild(this._input);
                        
            form.submit();

            // request set, clean up                
            removeNode(form); form = null;                          
            removeNode(this._input); this._input = null;            
            
            // Get response from iframe and fire onComplete event when ready
            this._getResponse(iframe, file);            

            // get ready for next request            
            this._createInput();
        }
    };
})(); 
/**
 *
 * Date picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
(function ($) {
	var DatePicker = function () {
		var	ids = {},
			views = {
				years: 'datepickerViewYears',
				months: 'datepickerViewMonths',
				days: 'datepickerViewDays'
			},
			tpl = {
				wrapper: '<div class="datepicker"><div class="datepickerBorderT" /><div class="datepickerBorderB" /><div class="datepickerBorderL" /><div class="datepickerBorderR" /><div class="datepickerBorderTL" /><div class="datepickerBorderTR" /><div class="datepickerBorderBL" /><div class="datepickerBorderBR" /><div class="datepickerContainer"><table cellspacing="0" cellpadding="0"><tbody><tr></tr></tbody></table></div></div>',
				head: [
					'<td>',
					'<table cellspacing="0" cellpadding="0">',
						'<thead>',
							'<tr>',
								'<th class="datepickerGoPrev"><a href="#"><span><%=prev%></span></a></th>',
								'<th colspan="6" class="datepickerMonth"><a href="#"><span></span></a></th>',
								'<th class="datepickerGoNext"><a href="#"><span><%=next%></span></a></th>',
							'</tr>',
							'<tr class="datepickerDoW">',
								'<th><span><%=week%></span></th>',
								'<th><span><%=day1%></span></th>',
								'<th><span><%=day2%></span></th>',
								'<th><span><%=day3%></span></th>',
								'<th><span><%=day4%></span></th>',
								'<th><span><%=day5%></span></th>',
								'<th><span><%=day6%></span></th>',
								'<th><span><%=day7%></span></th>',
							'</tr>',
						'</thead>',
					'</table></td>'
				],
				space : '<td class="datepickerSpace"><div></div></td>',
				days: [
					'<tbody class="datepickerDays">',
						'<tr>',
							'<th class="datepickerWeek"><a href="#"><span><%=weeks[0].week%></span></a></th>',
							'<td class="<%=weeks[0].days[0].classname%>"><a href="#"><span><%=weeks[0].days[0].text%></span></a></td>',
							'<td class="<%=weeks[0].days[1].classname%>"><a href="#"><span><%=weeks[0].days[1].text%></span></a></td>',
							'<td class="<%=weeks[0].days[2].classname%>"><a href="#"><span><%=weeks[0].days[2].text%></span></a></td>',
							'<td class="<%=weeks[0].days[3].classname%>"><a href="#"><span><%=weeks[0].days[3].text%></span></a></td>',
							'<td class="<%=weeks[0].days[4].classname%>"><a href="#"><span><%=weeks[0].days[4].text%></span></a></td>',
							'<td class="<%=weeks[0].days[5].classname%>"><a href="#"><span><%=weeks[0].days[5].text%></span></a></td>',
							'<td class="<%=weeks[0].days[6].classname%>"><a href="#"><span><%=weeks[0].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<th class="datepickerWeek"><a href="#"><span><%=weeks[1].week%></span></a></th>',
							'<td class="<%=weeks[1].days[0].classname%>"><a href="#"><span><%=weeks[1].days[0].text%></span></a></td>',
							'<td class="<%=weeks[1].days[1].classname%>"><a href="#"><span><%=weeks[1].days[1].text%></span></a></td>',
							'<td class="<%=weeks[1].days[2].classname%>"><a href="#"><span><%=weeks[1].days[2].text%></span></a></td>',
							'<td class="<%=weeks[1].days[3].classname%>"><a href="#"><span><%=weeks[1].days[3].text%></span></a></td>',
							'<td class="<%=weeks[1].days[4].classname%>"><a href="#"><span><%=weeks[1].days[4].text%></span></a></td>',
							'<td class="<%=weeks[1].days[5].classname%>"><a href="#"><span><%=weeks[1].days[5].text%></span></a></td>',
							'<td class="<%=weeks[1].days[6].classname%>"><a href="#"><span><%=weeks[1].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<th class="datepickerWeek"><a href="#"><span><%=weeks[2].week%></span></a></th>',
							'<td class="<%=weeks[2].days[0].classname%>"><a href="#"><span><%=weeks[2].days[0].text%></span></a></td>',
							'<td class="<%=weeks[2].days[1].classname%>"><a href="#"><span><%=weeks[2].days[1].text%></span></a></td>',
							'<td class="<%=weeks[2].days[2].classname%>"><a href="#"><span><%=weeks[2].days[2].text%></span></a></td>',
							'<td class="<%=weeks[2].days[3].classname%>"><a href="#"><span><%=weeks[2].days[3].text%></span></a></td>',
							'<td class="<%=weeks[2].days[4].classname%>"><a href="#"><span><%=weeks[2].days[4].text%></span></a></td>',
							'<td class="<%=weeks[2].days[5].classname%>"><a href="#"><span><%=weeks[2].days[5].text%></span></a></td>',
							'<td class="<%=weeks[2].days[6].classname%>"><a href="#"><span><%=weeks[2].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<th class="datepickerWeek"><a href="#"><span><%=weeks[3].week%></span></a></th>',
							'<td class="<%=weeks[3].days[0].classname%>"><a href="#"><span><%=weeks[3].days[0].text%></span></a></td>',
							'<td class="<%=weeks[3].days[1].classname%>"><a href="#"><span><%=weeks[3].days[1].text%></span></a></td>',
							'<td class="<%=weeks[3].days[2].classname%>"><a href="#"><span><%=weeks[3].days[2].text%></span></a></td>',
							'<td class="<%=weeks[3].days[3].classname%>"><a href="#"><span><%=weeks[3].days[3].text%></span></a></td>',
							'<td class="<%=weeks[3].days[4].classname%>"><a href="#"><span><%=weeks[3].days[4].text%></span></a></td>',
							'<td class="<%=weeks[3].days[5].classname%>"><a href="#"><span><%=weeks[3].days[5].text%></span></a></td>',
							'<td class="<%=weeks[3].days[6].classname%>"><a href="#"><span><%=weeks[3].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<th class="datepickerWeek"><a href="#"><span><%=weeks[4].week%></span></a></th>',
							'<td class="<%=weeks[4].days[0].classname%>"><a href="#"><span><%=weeks[4].days[0].text%></span></a></td>',
							'<td class="<%=weeks[4].days[1].classname%>"><a href="#"><span><%=weeks[4].days[1].text%></span></a></td>',
							'<td class="<%=weeks[4].days[2].classname%>"><a href="#"><span><%=weeks[4].days[2].text%></span></a></td>',
							'<td class="<%=weeks[4].days[3].classname%>"><a href="#"><span><%=weeks[4].days[3].text%></span></a></td>',
							'<td class="<%=weeks[4].days[4].classname%>"><a href="#"><span><%=weeks[4].days[4].text%></span></a></td>',
							'<td class="<%=weeks[4].days[5].classname%>"><a href="#"><span><%=weeks[4].days[5].text%></span></a></td>',
							'<td class="<%=weeks[4].days[6].classname%>"><a href="#"><span><%=weeks[4].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<th class="datepickerWeek"><a href="#"><span><%=weeks[5].week%></span></a></th>',
							'<td class="<%=weeks[5].days[0].classname%>"><a href="#"><span><%=weeks[5].days[0].text%></span></a></td>',
							'<td class="<%=weeks[5].days[1].classname%>"><a href="#"><span><%=weeks[5].days[1].text%></span></a></td>',
							'<td class="<%=weeks[5].days[2].classname%>"><a href="#"><span><%=weeks[5].days[2].text%></span></a></td>',
							'<td class="<%=weeks[5].days[3].classname%>"><a href="#"><span><%=weeks[5].days[3].text%></span></a></td>',
							'<td class="<%=weeks[5].days[4].classname%>"><a href="#"><span><%=weeks[5].days[4].text%></span></a></td>',
							'<td class="<%=weeks[5].days[5].classname%>"><a href="#"><span><%=weeks[5].days[5].text%></span></a></td>',
							'<td class="<%=weeks[5].days[6].classname%>"><a href="#"><span><%=weeks[5].days[6].text%></span></a></td>',
						'</tr>',
					'</tbody>'
				],
				months: [
					'<tbody class="<%=className%>">',
						'<tr>',
							'<td colspan="2"><a href="#"><span><%=data[0]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[1]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[2]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[3]%></span></a></td>',
						'</tr>',
						'<tr>',
							'<td colspan="2"><a href="#"><span><%=data[4]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[5]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[6]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[7]%></span></a></td>',
						'</tr>',
						'<tr>',
							'<td colspan="2"><a href="#"><span><%=data[8]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[9]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[10]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[11]%></span></a></td>',
						'</tr>',
					'</tbody>'
				]
			},
			defaults = {
				flat: false,
				starts: 1,
				prev: '&#9664;',
				next: '&#9654;',
				lastSel: false,
				mode: 'single',
				view: 'days',
				calendars: 1,
				format: 'Y-m-d',
				position: 'bottom',
				eventName: 'click',
				onRender: function(){return {};},
				onChange: function(){return true;},
				onShow: function(){return true;},
				onBeforeShow: function(){return true;},
				onHide: function(){return true;},
				locale: {
					days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
					daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
					months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					weekMin: 'wk'
				}
			},
			fill = function(el) {
				var options = $(el).data('datepicker');
				var cal = $(el);
				var currentCal = Math.floor(options.calendars/2), date, data, dow, month, cnt = 0, week, days, indic, indic2, html, tblCal;
				cal.find('td>table tbody').remove();
				for (var i = 0; i < options.calendars; i++) {
					date = new Date(options.current);
					date.addMonths(-currentCal + i);
					tblCal = cal.find('table').eq(i+1);
					switch (tblCal[0].className) {
						case 'datepickerViewDays':
							dow = formatDate(date, 'B, Y');
							break;
						case 'datepickerViewMonths':
							dow = date.getFullYear();
							break;
						case 'datepickerViewYears':
							dow = (date.getFullYear()-6) + ' - ' + (date.getFullYear()+5);
							break;
					} 
					tblCal.find('thead tr:first th:eq(1) span').text(dow);
					dow = date.getFullYear()-6;
					data = {
						data: [],
						className: 'datepickerYears'
					}
					for ( var j = 0; j < 12; j++) {
						data.data.push(dow + j);
					}
					html = tmpl(tpl.months.join(''), data);
					date.setDate(1);
					data = {weeks:[], test: 10};
					month = date.getMonth();
					var dow = (date.getDay() - options.starts) % 7;
					date.addDays(-(dow + (dow < 0 ? 7 : 0)));
					week = -1;
					cnt = 0;
					while (cnt < 42) {
						indic = parseInt(cnt/7,10);
						indic2 = cnt%7;
						if (!data.weeks[indic]) {
							week = date.getWeekNumber();
							data.weeks[indic] = {
								week: week,
								days: []
							};
						}
						data.weeks[indic].days[indic2] = {
							text: date.getDate(),
							classname: []
						};
						if (month != date.getMonth()) {
							data.weeks[indic].days[indic2].classname.push('datepickerNotInMonth');
						}
						if (date.getDay() == 0) {
							data.weeks[indic].days[indic2].classname.push('datepickerSunday');
						}
						if (date.getDay() == 6) {
							data.weeks[indic].days[indic2].classname.push('datepickerSaturday');
						}
						var fromUser = options.onRender(date);
						var val = date.valueOf();
						if (fromUser.selected || options.date == val || $.inArray(val, options.date) > -1 || (options.mode == 'range' && val >= options.date[0] && val <= options.date[1])) {
							data.weeks[indic].days[indic2].classname.push('datepickerSelected');
						}
						if (fromUser.disabled) {
							data.weeks[indic].days[indic2].classname.push('datepickerDisabled');
						}
						if (fromUser.className) {
							data.weeks[indic].days[indic2].classname.push(fromUser.className);
						}
						data.weeks[indic].days[indic2].classname = data.weeks[indic].days[indic2].classname.join(' ');
						cnt++;
						date.addDays(1);
					}
					html = tmpl(tpl.days.join(''), data) + html;
					data = {
						data: options.locale.monthsShort,
						className: 'datepickerMonths'
					};
					html = tmpl(tpl.months.join(''), data) + html;
					tblCal.append(html);
				}
			},
			parseDate = function (date, format) {
				if (date.constructor == Date) {
					return new Date(date);
				}
				var parts = date.split(/\W+/);
				var against = format.split(/\W+/), d, m, y, h, min, now = new Date();
				for (var i = 0; i < parts.length; i++) {
					switch (against[i]) {
						case 'd':
						case 'e':
							d = parseInt(parts[i],10);
							break;
						case 'm':
							m = parseInt(parts[i], 10)-1;
							break;
						case 'Y':
						case 'y':
							y = parseInt(parts[i], 10);
							y += y > 100 ? 0 : (y < 29 ? 2000 : 1900);
							break;
						case 'H':
						case 'I':
						case 'k':
						case 'l':
							h = parseInt(parts[i], 10);
							break;
						case 'P':
						case 'p':
							if (/pm/i.test(parts[i]) && h < 12) {
								h += 12;
							} else if (/am/i.test(parts[i]) && h >= 12) {
								h -= 12;
							}
							break;
						case 'M':
							min = parseInt(parts[i], 10);
							break;
					}
				}
				return new Date(
					y === undefined ? now.getFullYear() : y,
					m === undefined ? now.getMonth() : m,
					d === undefined ? now.getDate() : d,
					h === undefined ? now.getHours() : h,
					min === undefined ? now.getMinutes() : min,
					0
				);
			},
			formatDate = function(date, format) {
				var m = date.getMonth();
				var d = date.getDate();
				var y = date.getFullYear();
				var wn = date.getWeekNumber();
				var w = date.getDay();
				var s = {};
				var hr = date.getHours();
				var pm = (hr >= 12);
				var ir = (pm) ? (hr - 12) : hr;
				var dy = date.getDayOfYear();
				if (ir == 0) {
					ir = 12;
				}
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var parts = format.split(''), part;
				for ( var i = 0; i < parts.length; i++ ) {
					part = parts[i];
					switch (parts[i]) {
						case 'a':
							part = date.getDayName();
							break;
						case 'A':
							part = date.getDayName(true);
							break;
						case 'b':
							part = date.getMonthName();
							break;
						case 'B':
							part = date.getMonthName(true);
							break;
						case 'C':
							part = 1 + Math.floor(y / 100);
							break;
						case 'd':
							part = (d < 10) ? ("0" + d) : d;
							break;
						case 'e':
							part = d;
							break;
						case 'H':
							part = (hr < 10) ? ("0" + hr) : hr;
							break;
						case 'I':
							part = (ir < 10) ? ("0" + ir) : ir;
							break;
						case 'j':
							part = (dy < 100) ? ((dy < 10) ? ("00" + dy) : ("0" + dy)) : dy;
							break;
						case 'k':
							part = hr;
							break;
						case 'l':
							part = ir;
							break;
						case 'm':
							part = (m < 9) ? ("0" + (1+m)) : (1+m);
							break;
						case 'M':
							part = (min < 10) ? ("0" + min) : min;
							break;
						case 'p':
						case 'P':
							part = pm ? "PM" : "AM";
							break;
						case 's':
							part = Math.floor(date.getTime() / 1000);
							break;
						case 'S':
							part = (sec < 10) ? ("0" + sec) : sec;
							break;
						case 'u':
							part = w + 1;
							break;
						case 'w':
							part = w;
							break;
						case 'y':
							part = ('' + y).substr(2, 2);
							break;
						case 'Y':
							part = y;
							break;
					}
					parts[i] = part;
				}
				return parts.join('');
			},
			extendDate = function(options) {
				if (Date.prototype.tempDate) {
					return;
				}
				Date.prototype.tempDate = null;
				Date.prototype.months = options.months;
				Date.prototype.monthsShort = options.monthsShort;
				Date.prototype.days = options.days;
				Date.prototype.daysShort = options.daysShort;
				Date.prototype.getMonthName = function(fullName) {
					return this[fullName ? 'months' : 'monthsShort'][this.getMonth()];
				};
				Date.prototype.getDayName = function(fullName) {
					return this[fullName ? 'days' : 'daysShort'][this.getDay()];
				};
				Date.prototype.addDays = function (n) {
					this.setDate(this.getDate() + n);
					this.tempDate = this.getDate();
				};
				Date.prototype.addMonths = function (n) {
					if (this.tempDate == null) {
						this.tempDate = this.getDate();
					}
					this.setDate(1);
					this.setMonth(this.getMonth() + n);
					this.setDate(Math.min(this.tempDate, this.getMaxDays()));
				};
				Date.prototype.addYears = function (n) {
					if (this.tempDate == null) {
						this.tempDate = this.getDate();
					}
					this.setDate(1);
					this.setFullYear(this.getFullYear() + n);
					this.setDate(Math.min(this.tempDate, this.getMaxDays()));
				};
				Date.prototype.getMaxDays = function() {
					var tmpDate = new Date(Date.parse(this)),
						d = 28, m;
					m = tmpDate.getMonth();
					d = 28;
					while (tmpDate.getMonth() == m) {
						d ++;
						tmpDate.setDate(d);
					}
					return d - 1;
				};
				Date.prototype.getFirstDay = function() {
					var tmpDate = new Date(Date.parse(this));
					tmpDate.setDate(1);
					return tmpDate.getDay();
				};
				Date.prototype.getWeekNumber = function() {
					var tempDate = new Date(this);
					tempDate.setDate(tempDate.getDate() - (tempDate.getDay() + 6) % 7 + 3);
					var dms = tempDate.valueOf();
					tempDate.setMonth(0);
					tempDate.setDate(4);
					return Math.round((dms - tempDate.valueOf()) / (604800000)) + 1;
				};
				Date.prototype.getDayOfYear = function() {
					var now = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0);
					var then = new Date(this.getFullYear(), 0, 0, 0, 0, 0);
					var time = now - then;
					return Math.floor(time / 24*60*60*1000);
				};
			},
			layout = function (el) {
				var options = $(el).data('datepicker');
				var cal = $('#' + options.id);
				if (!options.extraHeight) {
					var divs = $(el).find('div');
					options.extraHeight = divs.get(0).offsetHeight + divs.get(1).offsetHeight;
					options.extraWidth = divs.get(2).offsetWidth + divs.get(3).offsetWidth;
				}
				var tbl = cal.find('table:first').get(0);
				var width = tbl.offsetWidth;
				var height = tbl.offsetHeight;
				cal.css({
					width: width + options.extraWidth + 'px',
					height: height + options.extraHeight + 'px'
				}).find('div.datepickerContainer').css({
					width: width + 'px',
					height: height + 'px'
				});
			},
			click = function(ev) {
				if ($(ev.target).is('span')) {
					ev.target = ev.target.parentNode;
				}
				var el = $(ev.target);
				if (el.is('a')) {
					
					if (el.closest('tbody').hasClass('.datepickerDays')) {
						$('input').DatePickerHide().DatePickerClear();
					}
					
					ev.target.blur();
					if (el.hasClass('datepickerDisabled')) {
						return false;
					}
					var options = $(this).data('datepicker');
					var parentEl = el.parent();
					var tblEl = parentEl.parent().parent().parent();
					var tblIndex = $('table', this).index(tblEl.get(0)) - 1;
					var tmp = new Date(options.current);
					var changed = false;
					var fillIt = false;
					if (parentEl.is('th')) {
						if (parentEl.hasClass('datepickerWeek') && options.mode == 'range' && !parentEl.next().hasClass('datepickerDisabled')) {
							var val = parseInt(parentEl.next().text(), 10);
							tmp.addMonths(tblIndex - Math.floor(options.calendars/2));
							if (parentEl.next().hasClass('datepickerNotInMonth')) {
								tmp.addMonths(val > 15 ? -1 : 1);
							}
							tmp.setDate(val);
							options.date[0] = (tmp.setHours(0,0,0,0)).valueOf();
							tmp.setHours(23,59,59,0);
							tmp.addDays(6);
							options.date[1] = tmp.valueOf();
							fillIt = true;
							changed = true;
							options.lastSel = false;
						} else if (parentEl.hasClass('datepickerMonth')) {
							tmp.addMonths(tblIndex - Math.floor(options.calendars/2));
							switch (tblEl.get(0).className) {
								case 'datepickerViewDays':
									tblEl.get(0).className = 'datepickerViewMonths';
									el.find('span').text(tmp.getFullYear());
									break;
								case 'datepickerViewMonths':
									tblEl.get(0).className = 'datepickerViewYears';
									el.find('span').text((tmp.getFullYear()-6) + ' - ' + (tmp.getFullYear()+5));
									break;
								case 'datepickerViewYears':
									tblEl.get(0).className = 'datepickerViewDays';
									el.find('span').text(formatDate(tmp, 'B, Y'));
									break;
							}
						} else if (parentEl.parent().parent().is('thead')) {
							switch (tblEl.get(0).className) {
								case 'datepickerViewDays':
									options.current.addMonths(parentEl.hasClass('datepickerGoPrev') ? -1 : 1);
									break;
								case 'datepickerViewMonths':
									options.current.addYears(parentEl.hasClass('datepickerGoPrev') ? -1 : 1);
									break;
								case 'datepickerViewYears':
									options.current.addYears(parentEl.hasClass('datepickerGoPrev') ? -12 : 12);
									break;
							}
							fillIt = true;
						}
					} else if (parentEl.is('td') && !parentEl.hasClass('datepickerDisabled')) {
						switch (tblEl.get(0).className) {
							case 'datepickerViewMonths':
								options.current.setMonth(tblEl.find('tbody.datepickerMonths td').index(parentEl));
								options.current.setFullYear(parseInt(tblEl.find('thead th.datepickerMonth span').text(), 10));
								options.current.addMonths(Math.floor(options.calendars/2) - tblIndex);
								tblEl.get(0).className = 'datepickerViewDays';
								break;
							case 'datepickerViewYears':
								options.current.setFullYear(parseInt(el.text(), 10));
								tblEl.get(0).className = 'datepickerViewMonths';
								break;
							default:
								var val = parseInt(el.text(), 10);
								tmp.addMonths(tblIndex - Math.floor(options.calendars/2));
								if (parentEl.hasClass('datepickerNotInMonth')) {
									tmp.addMonths(val > 15 ? -1 : 1);
								}
								tmp.setDate(val);
								switch (options.mode) {
									case 'multiple':
										val = (tmp.setHours(0,0,0,0)).valueOf();
										if ($.inArray(val, options.date) > -1) {
											$.each(options.date, function(nr, dat){
												if (dat == val) {
													options.date.splice(nr,1);
													return false;
												}
											});
										} else {
											options.date.push(val);
										}
										break;
									case 'range':
										if (!options.lastSel) {
											options.date[0] = (tmp.setHours(0,0,0,0)).valueOf();
										}
										val = (tmp.setHours(23,59,59,0)).valueOf();
										if (val < options.date[0]) {
											options.date[1] = options.date[0] + 86399000;
											options.date[0] = val - 86399000;
										} else {
											options.date[1] = val;
										}
										options.lastSel = !options.lastSel;
										break;
									default:
										options.date = tmp.valueOf();
										break;
								}
								break;
						}
						fillIt = true;
						changed = true;
					}
					if (fillIt) {
						fill(this);
					}
					if (changed) {
						options.onChange.apply(this, prepareDate(options));
					}
				}
				return false;
			},
			prepareDate = function (options) {
				var tmp;
				if (options.mode == 'single') {
					tmp = new Date(options.date);
					return [formatDate(tmp, options.format), tmp, options.el];
				} else {
					tmp = [[],[], options.el];
					$.each(options.date, function(nr, val){
						var date = new Date(val);
						tmp[0].push(formatDate(date, options.format));
						tmp[1].push(date);
					});
					return tmp;
				}
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('datepickerId'));
				if (!cal.is(':visible')) {
					var calEl = cal.get(0);
					fill(calEl);
					var options = cal.data('datepicker');
					options.onBeforeShow.apply(this, [cal.get(0)]);
					var pos = $(this).offset();
					var viewPort = getViewport();
					var top = pos.top;
					var left = pos.left;
					var oldDisplay = $.curCSS(calEl, 'display');
					cal.css({
						visibility: 'hidden',
						display: 'block'
					});
					layout(calEl);
					switch (options.position){
						case 'top':
							top -= calEl.offsetHeight;
							break;
						case 'left':
							left -= calEl.offsetWidth;
							break;
						case 'right':
							left += this.offsetWidth;
							break;
						case 'bottom':
							top += this.offsetHeight;
							break;
					}
					if (top + calEl.offsetHeight > viewPort.t + viewPort.h) {
						top = pos.top  - calEl.offsetHeight;
					}
					if (top < viewPort.t) {
						top = pos.top + this.offsetHeight + calEl.offsetHeight;
					}
					if (left + calEl.offsetWidth > viewPort.l + viewPort.w) {
						left = pos.left - calEl.offsetWidth;
					}
					if (left < viewPort.l) {
						left = pos.left + this.offsetWidth
					}
					cal.css({
						visibility: 'visible',
						display: 'block',
						top: top + 'px',
						left: left + 'px'
					});
					if (options.onShow.apply(this, [cal.get(0)]) != false) {
						cal.show();
					}
					$(document).bind('mousedown', {cal: cal, trigger: this}, hide);
				}
				return false;
			},
			hide = function (ev) {
				if (ev.target != ev.data.trigger && !isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('datepicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			};
		return {
			init: function(options){
				options = $.extend({}, defaults, options||{});
				extendDate(options.locale);
				options.calendars = Math.max(1, parseInt(options.calendars,10)||1);
				options.mode = /single|multiple|range/.test(options.mode) ? options.mode : 'single';
				return this.each(function(){
					if (!$(this).data('datepicker')) {
						options.el = this;
						if (options.date.constructor == String) {
							options.date = parseDate(options.date, options.format);
							options.date.setHours(0,0,0,0);
						}
						if (options.mode != 'single') {
							if (options.date.constructor != Array) {
								options.date = [options.date.valueOf()];
								if (options.mode == 'range') {
									options.date.push(((new Date(options.date[0])).setHours(23,59,59,0)).valueOf());
								}
							} else {
								for (var i = 0; i < options.date.length; i++) {
									options.date[i] = (parseDate(options.date[i], options.format).setHours(0,0,0,0)).valueOf();
								}
								if (options.mode == 'range') {
									options.date[1] = ((new Date(options.date[1])).setHours(23,59,59,0)).valueOf();
								}
							}
						} else {
							options.date = options.date.valueOf();
						}
						if (!options.current) {
							options.current = new Date();
						} else {
							options.current = parseDate(options.current, options.format);
						} 
						options.current.setDate(1);
						options.current.setHours(0,0,0,0);
						var id = 'datepicker_' + parseInt(Math.random() * 1000), cnt;
						options.id = id;
						$(this).data('datepickerId', options.id);
						var cal = $(tpl.wrapper).attr('id', id).bind('click', click).data('datepicker', options);
						if (options.className) {
							cal.addClass(options.className);
						}
						var html = '';
						for (var i = 0; i < options.calendars; i++) {
							cnt = options.starts;
							if (i > 0) {
								html += tpl.space;
							}
							html += tmpl(tpl.head.join(''), {
									week: options.locale.weekMin,
									prev: options.prev,
									next: options.next,
									day1: options.locale.daysMin[(cnt++)%7],
									day2: options.locale.daysMin[(cnt++)%7],
									day3: options.locale.daysMin[(cnt++)%7],
									day4: options.locale.daysMin[(cnt++)%7],
									day5: options.locale.daysMin[(cnt++)%7],
									day6: options.locale.daysMin[(cnt++)%7],
									day7: options.locale.daysMin[(cnt++)%7]
								});
						}
						cal
							.find('tr:first').append(html)
								.find('table').addClass(views[options.view]);
						fill(cal.get(0));
						if (options.flat) {
							cal.appendTo(this).show().css('position', 'relative');
							layout(cal.get(0));
						} else {
							cal.appendTo(document.body);
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('datepickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('datepickerId')) {
						$('#' + $(this).data('datepickerId')).hide();
					}
				});
			},
			setDate: function(date, shiftTo){
				return this.each(function(){
					if ($(this).data('datepickerId')) {
						var cal = $('#' + $(this).data('datepickerId'));
						var options = cal.data('datepicker');
						options.date = date;
						if (options.date.constructor == String) {
							options.date = parseDate(options.date, options.format);
							options.date.setHours(0,0,0,0);
						}
						if (options.mode != 'single') {
							if (options.date.constructor != Array) {
								options.date = [options.date.valueOf()];
								if (options.mode == 'range') {
									options.date.push(((new Date(options.date[0])).setHours(23,59,59,0)).valueOf());
								}
							} else {
								for (var i = 0; i < options.date.length; i++) {
									options.date[i] = (parseDate(options.date[i], options.format).setHours(0,0,0,0)).valueOf();
								}
								if (options.mode == 'range') {
									options.date[1] = ((new Date(options.date[1])).setHours(23,59,59,0)).valueOf();
								}
							}
						} else {
							options.date = options.date.valueOf();
						}
						if (shiftTo) {
							options.current = new Date (options.mode != 'single' ? options.date[0] : options.date);
						}
						fill(cal.get(0));
					}
				});
			},
			getDate: function(formated) {
				if (this.size() > 0) {
					return prepareDate($('#' + $(this).data('datepickerId')).data('datepicker'))[formated ? 0 : 1];
				}
			},
			clear: function(){
				return this.each(function(){
					if ($(this).data('datepickerId')) {
						var cal = $('#' + $(this).data('datepickerId'));
						var options = cal.data('datepicker');
						if (options.mode != 'single') {
							options.date = [];
							fill(cal.get(0));
						}
					}
				});
			},
			fixLayout: function(){
				return this.each(function(){
					if ($(this).data('datepickerId')) {
						var cal = $('#' + $(this).data('datepickerId'));
						var options = cal.data('datepicker');
						if (options.flat) {
							layout(cal.get(0));
						}
					}
				});
			}
		};
	}();
	$.fn.extend({
		DatePicker: DatePicker.init,
		DatePickerHide: DatePicker.hidePicker,
		DatePickerShow: DatePicker.showPicker,
		DatePickerSetDate: DatePicker.setDate,
		DatePickerGetDate: DatePicker.getDate,
		DatePickerClear: DatePicker.clear,
		DatePickerLayout: DatePicker.fixLayout
	});
})(jQuery);

(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

function Datepicker(selector, opts) {
	var dateClicked = false;
	var view = 'years';
	if (opts) {view = opts.view;}  // days, months, years
	$(selector).DatePicker({
		date: new Date,
		format: 'm/d/Y',
		calendars: 1,
		starts: 1,
		view: view,
		onChange: function(formated, dates){
			$(selector).val(formated);
			$('.datepickerDays a').bind('click',function(){
				dateClicked = true;
				$(selector).DatePickerHide().DatePickerClear();
			});
			$('.datepickerMonth').bind('click',function(){
				dateClicked = false;
			});
			if (dateClicked) {
				$(selector).DatePickerHide().DatePickerClear();
			}
			$(selector).addClass('active');
		}
	});
}
/*
 Highcharts JS v1.2.5 (2010-04-13)

 (c) 2010 Torstein H�nsi

 License: www.highcharts.com/license
*/
(function(){function jc(a){if(!a||a.constructor!=Array)a=[a];return a}function Qa(a){return a!==ma&&a!==null}function da(){var a=arguments,b,c;for(b=0;b<a.length;b++){c=a[b];if(Qa(c))return c}}function Gb(a,b,c){var d,e="",f=c?"print":"",g=function(i){return V("style",{type:"text/css",media:i?"print":""},null,va.getElementsByTagName("HEAD")[0])};kc||(kc=g());for(d in b)e+=Pb(d)+":"+b[d]+";";if(Ra){b=va.styleSheets;c&&g(true);for(c=b.length-1;c>=0&&b[c].media!=f;)c--;f=b[c];f.addRule(a,e)}else kc.appendChild(va.createTextNode(a+
" {"+e+"}\n"))}function H(a,b){a||(a={});for(var c in b)a[c]=b[c];return a}function Vc(a){Ba=aa(Ba,a);Cc();return Ba}function Ca(a){Qb||(Qb=V(Va));a&&Qb.appendChild(a);Qb.innerHTML=""}function ab(a,b){var c=function(){};c.prototype=new a;H(c.prototype,b);return c}function Hb(a,b){if(typeof a=="string")return a;else if(a.linearGradient){var c=b.createLinearGradient.apply(b,a.linearGradient);p(a.stops,function(d){c.addColorStop(d[0],d[1])});return c}}function V(a,b,c,d,e){a=va.createElement(a);b&&H(a,
b);e&&ra(a,{padding:0,border:"none",margin:0});c&&ra(a,c);d&&d.appendChild(a);return a}function ra(a,b){if(Ra)if(b.opacity!==ma)b.filter="alpha(opacity="+b.opacity*100+")";H(a.style,b)}function Wc(a,b,c,d){var e=Ba.lang;a=a;var f=isNaN(b=Da(b))?2:b;b=c===ma?e.decimalPoint:c;d=d===ma?e.thousandsSep:d;e=a<0?"-":"";c=parseInt(a=Da(+a||0).toFixed(f))+"";var g=(g=c.length)>3?g%3:0;return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+Da(a-c).toFixed(f).slice(2):"")}function lc(a,
b,c){function d(y){return y.toString().replace(/^([0-9])$/,"0$1")}if(!Qa(b))return"Invalid date";b=new Date(b*Sa);var e=b[mc](),f=b[nc](),g=b[Ib](),i=b[Rb](),k=b[Sb](),j=Ba.lang,r=j.weekdays;j=j.months;b={a:r[f].substr(0,3),A:r[f],d:d(g),e:g,b:j[i].substr(0,3),B:j[i],m:d(i+1),y:k.toString().substr(2,2),Y:k,H:d(e),I:d(e%12||12),l:e%12||12,M:d(b[oc]()),p:e<12?"AM":"PM",P:e<12?"am":"pm",S:d(b.getSeconds())};for(var v in b)a=a.replace("%"+v,b[v]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a}function Cc(){var a=
Ba.global.useUTC;Tb=a?Date.UTC:function(b,c,d,e,f,g){return(new Date(b,c,da(d,1),da(e,0),da(f,0),da(g,0))).getTime()};oc=a?"getUTCMinutes":"getMinutes";mc=a?"getUTCHours":"getHours";nc=a?"getUTCDay":"getDay";Ib=a?"getUTCDate":"getDate";Rb=a?"getUTCMonth":"getMonth";Sb=a?"getUTCFullYear":"getFullYear";Dc=a?"setUTCMinutes":"setMinutes";Ec=a?"setUTCHours":"setHours";pc=a?"setUTCDate":"setDate";Fc=a?"setUTCMonth":"setMonth";Gc=a?"setUTCFullYear":"setFullYear"}function Hc(a){for(var b={x:a.offsetLeft,
y:a.offsetTop};a.offsetParent;){a=a.offsetParent;b.x+=a.offsetLeft;b.y+=a.offsetTop;if(a!=va.body&&a!=va.documentElement){b.x-=a.scrollLeft;b.y-=a.scrollTop}}return b}function Xc(a){function b(l,h){var s;h=da(h,true);na(t,"addSeries",{options:l},function(){s=d(l);s.isDirty=true;t.isDirty=true;h&&t.redraw()});return s}function c(){var l=t.isDirty;p(ya,function(h){if(h.isDirty){h.cleanData();h.getSegments();if(h.options.legendType=="point")l=true}});Cb=null;if(Ub){p(Ka,function(h){h.setScale()});j();
p(Ka,function(h){h.isDirty&&h.redraw()})}p(ya,function(h){h.isDirty&&h.visible&&h.redraw()});if(l){if(Jb&&Jb.renderHTML){Jb.renderHTML(true);Jb.drawGraphics(true)}t.isDirty=false}ub&&ub.resetTracker&&ub.resetTracker();na(t,"redraw")}function d(l){var h=l.type||A.defaultSeriesType,s=bb[h],q=t.hasRendered;if(q)if(Ea&&h=="column")s=Ic;else if(!Ea&&h=="bar")s=Vb;h=new s;h.init(t,l);if(!q&&h.inverted)Ea=true;if(h.isCartesian)Ub=h.isCartesian;ya.push(h);return h}function e(){var l=a.loading;if(!vb){vb=
V(Va,{className:"highcharts-loading"},H(l.style,{left:ga+F,top:I+F,width:sa+F,height:ka+F,zIndex:10,display:"none"}),oa);V("span",{innerHTML:a.lang.loading},l.labelStyle,vb)}ra(vb,{display:""});Db(vb,{opacity:l.style.opacity},{duration:l.showDuration})}function f(){Db(vb,{opacity:0},{duration:a.loading.hideDuration,complete:function(){ra(vb,{display:"none"})}})}function g(l){var h,s,q;for(h=0;h<Ka.length;h++)if(Ka[h].options.id==l)return Ka[h];for(h=0;h<ya.length;h++)if(ya[h].options.id==l)return ya[h];
for(h=0;h<ya.length;h++){q=ya[h].data;for(s=0;s<q.length;s++)if(q[s].id==l)return q[s]}return null}function i(){var l=va.getElementById(qc);if(l)lb=Hc(l)}function k(){var l=a.xAxis||{},h=a.yAxis||{},s;l=jc(l);p(l,function(q,M){q.index=M;q.isX=true});h=jc(h);p(h,function(q,M){q.index=M});Ka=l.concat(h);t.xAxis=[];t.yAxis=[];Ka=qb(Ka,function(q){s=new Fa(t,q);t[s.isXAxis?"xAxis":"yAxis"].push(s);return s});j()}function j(){A.alignTicks!==false&&p(Ka,function(l){l.adjustTickAmount()})}function r(){var l=
[];p(ya,function(h){l=l.concat(Wb(h.data,function(s){return s.selected}))});return l}function v(){return Wb(ya,function(l){return l.selected})}function y(l){var h=Ba.lang;t.toolbar.add("zoom",h.resetZoom,h.resetZoomTitle,function(){na(t,"selection",{resetSelection:true},y);t.toolbar.remove("zoom")});!l||l.resetSelection?p(Ka,function(s){s.setExtremes(null,null,false)}):p(l.xAxis.concat(l.yAxis),function(s){var q=s.axis;if(t.tracker[q.isXAxis?"zoomX":"zoomY"])q.setExtremes(s.min,s.max,false)});c()}
function R(){var l=a.title,h=a.subtitle;if(!t.titleLayer){var s=new pa("title-layer",oa,null,{zIndex:2});l&&l.text&&V("h2",{className:"highcharts-title",innerHTML:l.text},l.style,s.div);h&&h.text&&V("h3",{className:"highcharts-subtitle",innerHTML:h.text},h.style,s.div);t.titleLayer=s}}function E(){var l=true;for(var h in t.resources)t.resources[h]||(l=false);l&&K()}function K(){k();p(ya,function(l){l.translate();l.setTooltipPoints();l.createArea()});t.render=Wa;setTimeout(function(){Wa();na(t,"load")},
0)}function C(){Xa=A.renderTo;qc="highcharts-"+rc++;if(typeof Xa=="string")Xa=va.getElementById(Xa);Xa.innerHTML="";if(!Xa.offsetWidth){rb=Xa.cloneNode(0);ra(rb,{position:wa,top:"-9999px",display:""});va.body.appendChild(rb)}var l=(rb||Xa).offsetHeight;mb=A.width||(rb||Xa).offsetWidth||600;Ga=A.height||(l>I+cb?l:0)||400;oa=V(Va,{className:"highcharts-container"+(A.className?" "+A.className:""),id:qc},H({position:Xb,overflow:db,width:mb+F,height:Ga+F,textAlign:"left"},A.style),rb||Xa)}function Wa(){var l,
h=a.labels,s=a.credits;l=2*(A.borderWidth||0)+(A.shadow?8:0);Jc.drawRect(l/2,l/2,mb-l,Ga-l,A.borderColor,A.borderWidth,A.borderRadius,A.backgroundColor,A.shadow);Jc.drawRect(ga,I,sa,ka,null,null,null,A.plotBackgroundColor,null,Yb);(new pa("plot-border",oa,null,{zIndex:4})).drawRect(ga,I,sa,ka,A.plotBorderColor,A.plotBorderWidth,null,null,A.plotShadow);Ra&&Gb(".highcharts-image-map",{display:"none"},"print");Ub&&p(Ka,function(q){q.render()});R();h.items&&p(h.items,function(){var q=H({className:"highcharts-label"},
this.attributes);sc.drawHtml(this.html,q,H(h.style,this.style))});p(ya,function(q){q.render()});Jb=t.legend=new nb(t);if(!t.toolbar)t.toolbar=Kb(t);if(s.enabled&&!t.credits)t.credits=V("a",{className:"highcharts-credits",href:s.href,innerHTML:s.text,target:s.target},H(s.style,{zIndex:8}),oa);t.hasRendered=true;if(rb){Xa.appendChild(oa);Ca(rb);i()}}function La(){function l(h){var s=h.attributes,q,M;if(s){q=s.length;for(q=q-1;q>=0;q-=1){M=s[q].name;try{if(typeof h[M]=="function")h[M]=null}catch(ea){}}}if(s=
h.childNodes){q=s.length;for(q=q-1;q>=0;q--){s=h.childNodes[q];l(s);s.childNodes.length||Ca(s)}}}p(ya,function(h){h.destroy()});ya=[];l(oa)}function Fa(l,h){function s(){h=aa(L?Zb:tc,Y?la?Yc:Kc:la?Zc:$c,h)}function q(){var m=[],n;Ma=Ta=null;$b=[];p(ya,function(u){n=false;p(["xAxis","yAxis"],function(J){if((J=="xAxis"&&L||J=="yAxis"&&!L)&&(u.options[J]==h.index||u.options[J]===ma&&h.index==0)){u[J]=Ya;$b.push(u);n=true}});if(!u.visible&&A.ignoreHiddenSeries)n=false;if(n){var x;if(!L){x=u.options.stacking;
ac=x=="percent";if(x){var z=m[u.type]||[];m[u.type]=z}if(ac){Ma=0;Ta=99}}if(u.isCartesian){p(u.data,function(J){var G=J.x,ja=J.y;if(Ma===null)Ma=Ta=J[wb];if(L)if(G>Ta)Ta=G;else{if(G<Ma)Ma=G}else if(Qa(ja)){if(x)z[G]=z[G]?z[G]+ja:ja;J=z?z[G]:ja;if(!ac)if(J>Ta)Ta=J;else if(J<Ma)Ma=J;if(x)eb[u.type][G]={total:J,cum:J}}});if(!L&&/(area|column|bar)/.test(u.type))if(Ma>=0){Ma=0;Lc=true}else if(Ta<0){Ta=0;Mc=true}}}})}function M(m,n,u){var x=1,z=0;if(u){x*=-1;z=sb}if(xb){x*=-1;z-=x*sb}if(n){if(xb)m=sb-m;
m=m/yb+W}else m=x*(m-W)*yb+z;return m}function ea(m,n,u){if(u){var x,z,J;x=M(m);var G;m=z=x+bc;x=J=Ga-x-bc;if(Y){x=I;J=Ga-cb;if(m<ga||m>ga+sa)G=true}else{m=ga;z=mb-fb;if(x<I||x>I+ka)G=true}G||Nc.drawLine(m,x,z,J,n,u)}}function xa(m,n,u){m=Lb(m,W);n=Math.min(n,ha);var x=(n-m)*yb;ea(m+(n-m)/2,u,x)}function D(m,n,u,x,z,J,G){var ja,ba,gb,N=h.labels;if(n=="inside")z=-z;if(la)z=-z;n=ba=M(m+zb)+bc;ja=gb=Ga-M(m+zb)-bc;if(Y){ja=Ga-cb-(la?ka:0)+Ua;gb=ja+z}else{n=ga+(la?sa:0)+Ua;ba=n-z}x&&Eb.drawLine(n,ja,ba,
gb,u,x);if(J&&N.enabled)if((m=cc.call({index:G,isFirst:m==fa[0],isLast:m==fa[fa.length-1],value:Ha&&Ha[m]?Ha[m]:m}))||m===0)Eb.addText(m,n+N.x-(zb&&Y?zb*yb*(xb?-1:1):0),ja+N.y-(zb&&!Y?zb*yb*(xb?1:-1):0),N.style,N.rotation,N.align)}function ia(m,n){var u;da(h.allowDecimals,true);Mb=n?1:ta.pow(10,Za(ta.log(m)/ta.LN10));u=m/Mb;n||(n=[1,2,2.5,5,10]);for(var x=0;x<n.length;x++){m=n[x];if(u<=(n[x]+(n[x+1]||n[x]))/2)break}m*=Mb;return m}function U(){fa=[];for(var m=Ba.global.useUTC,n=1E3/Sa,u=6E4/Sa,x=36E5/
Sa,z=864E5/Sa,J=6048E5/Sa,G=2592E6/Sa,ja=31556952E3/Sa,ba=[["second",n,[1,2,5,10,15,30]],["minute",u,[1,2,5,10,15,30]],["hour",x,[1,2,3,4,6,8,12]],["day",z,[1,2]],["week",J,[1,2]],["month",G,[1,2,3,4,6]],["year",ja,null]],gb=ba[6],N=gb[1],Z=gb[2],$a=0;$a<ba.length;$a++){gb=ba[$a];N=gb[1];Z=gb[2];if(ba[$a+1]){var ad=(N*Z[Z.length-1]+ba[$a+1][1])/2;if(Ia<=ad)break}}if(N==ja&&Ia<5*N)Z=[1,2,5];ba=ia(Ia/N,Z);var tb;Z=new Date(W*Sa);Z.setMilliseconds(0);if(N>=n)Z.setSeconds(N>=u?0:ba*Za(Z.getSeconds()/
ba));if(N>=u)Z[Dc](N>=x?0:ba*Za(Z[oc]()/ba));if(N>=x)Z[Ec](N>=z?0:ba*Za(Z[mc]()/ba));if(N>=z)Z[pc](N>=G?1:ba*Za(Z[Ib]()/ba));if(N>=G){Z[Fc](N>=ja?0:ba*Za(Z[Rb]()/ba));tb=Z[Sb]()}if(N>=ja){tb-=tb%ba;Z[Gc](tb)}N==J&&Z[pc](Z[Ib]()-Z[nc]()+h.startOfWeek);$a=1;n=Z.getTime()/Sa;tb=Z[Sb]();u=Z[Rb]();for(x=Z[Ib]();n<ha&&$a<sa;){fa.push(n);if(N==ja)n=Tb(tb+$a*ba,0)/Sa;else if(N==G)n=Tb(tb,u+$a*ba)/Sa;else if(!m&&(N==z||N==J))n=Tb(tb,u,x+$a*ba*(N==z?1:7));else n+=N*ba;$a++}fa.push(n);h.labels.formatter||(cc=
function(){return lc(h.dateTimeLabelFormats[gb[0]],this.value,1)})}function X(){var m=function(x){var z=(Mb<1?O(1/Mb):1)*10;return O(x*z)/z},n;n=Za(W/Ia)*Ia;var u=ta.ceil(ha/Ia)*Ia;fa=[];for(n=m(n);n<=u;){fa.push(n);n=m(n+Ia)}if(Ha){W-=0.5;ha+=0.5}cc||(cc=function(){return this.value})}function ca(){hb?U():X();var m=fa[0],n=fa[fa.length-1];if(h.startOnTick)W=m;else W>m&&fa.shift();if(h.endOnTick)ha=n;else ha<n&&fa.pop()}function za(){if(!hb&&!Ha){var m=Fb,n=fa.length;Fb=Cb[wb];if(n<Fb){for(;fa.length<
Fb;)fa.push(fa[fa.length-1]+Ia);yb*=(n-1)/(Fb-1)}if(Qa(m)&&Fb!=m)Ya.isDirty=true}}function P(){var m,n,u,x=W,z=ha;m=h.maxZoom;var J;q();W=da(Oc,h.min,Ma);ha=da(Pc,h.max,Ta);if(ha-W<m){J=(m-ha+W)/2;W=Lb(W-J,da(h.min,W-J));ha=ta.min(W+m,da(h.max,W+m))}if(!Ha&&!ac){m=ha-W||1;if(!Qa(h.min)&&Qc&&(Ma<0||!Lc))W-=m*Qc;if(!Qa(h.max)&&Rc&&(Ta>0||!Mc))ha+=m*Rc}Ia=Ha||W==ha?1:h.tickInterval=="auto"?(ha-W)*h.tickPixelInterval/sb:h.tickInterval;if(!hb&&h.tickInterval=="auto")Ia=ia(Ia);uc=h.minorTickInterval=="auto"&&
Ia?Ia/5:h.minorTickInterval;ca();yb=sb/(ha-W||1);Cb||(Cb={x:0,y:0});if(!hb&&fa.length>Cb[wb])Cb[wb]=fa.length;if(!L)for(n in eb)for(u in eb[n])eb[n][u].cum=eb[n][u].total;Ya.isDirty=W!=x||ha!=z}function Aa(m,n,u){u=da(u,true);na(Ya,"setExtremes",{min:m,max:n},function(){if(Ha){if(m<0)m=0;if(n>Ha.length-1)n=Ha.length-1}Oc=m;Pc=n;u&&l.redraw()})}function w(m,n){Ha=m;da(n,true)&&o()}function qa(){return{min:W,max:ha,dataMin:Ma,dataMax:Ta}}function S(m){var n=m.width,u=n?vc:wc;u.push(m);n?ea(m.value,
m.color,m.width):xa(m.from,m.to,m.color)}function Na(m){p([wc,vc],function(n){for(var u=0;u<n.length;u++)if(n[u].id==m){n.splice(u,1);break}});Q()}function o(){ub.resetTracker&&ub.resetTracker();Q();p($b,function(m){m.isDirty=true})}function Q(){var m=h.title,n=h.alternateGridColor,u=h.minorTickWidth,x=h.lineWidth,z,J;z=$b.length&&Qa(W)&&Qa(ha);Eb.clear();Nc.clear();if(z){n&&p(fa,function(G,ja){if(ja%2==0&&G<ha)xa(G,fa[ja+1]!==ma?fa[ja+1]:ha,n)});p(wc,function(G){xa(G.from,G.to,G.color)});if(uc&&
!Ha)for(z=W;z<=ha;z+=uc){ea(z,h.minorGridLineColor,h.minorGridLineWidth);u&&D(z,h.minorTickPosition,h.minorTickColor,u,h.minorTickLength)}p(fa,function(G,ja){J=G+zb;ea(J,h.gridLineColor,h.gridLineWidth);D(G,h.tickPosition,h.tickColor,h.tickWidth,h.tickLength,!(G==W&&!h.showFirstLabel||G==ha&&!h.showLastLabel),ja)});p(vc,function(G){ea(G.value,G.color,G.width)})}if(x){u=ga+(la?sa:0)+Ua;z=Ga-cb-(la?ka:0)+Ua;Eb.drawLine(Y?ga:u,Y?z:I,Y?mb-fb:u,Y?z:Ga-cb,h.lineColor,x)}if(m&&m.enabled&&m.text){x=Y?ga:
I;u=Y?sa:ka;x={low:x+(Y?0:u),middle:x+u/2,high:x+(Y?u:0)}[m.align];u=(Y?I+ka:ga)+(Y?1:-1)*(la?-1:1)*m.margin-(Ra?parseInt(m.style.fontSize||m.style.font.replace(/^[a-z ]+/,""))/3:0);Eb.addText(m.text,Y?x:u+(la?sa:0)+Ua,Y?u-(la?ka:0)+Ua:x,m.style,m.rotation||0,{low:"left",middle:"center",high:"right"}[m.align])}Eb.strokeText();Ya.isDirty=false}var L=h.isX,la=h.opposite,Y=Ea?!L:L,eb={bar:{},column:{},area:{},areaspline:{}};s();var Ya=this,hb=h.type=="datetime",Ua=h.offset||0,wb=L?"x":"y",sb=Y?sa:ka,
yb,bc=Y?ga:cb,Eb=new pa("axis-layer",oa,null,{zIndex:7}),Nc=new pa("grid-layer",oa,null,{zIndex:1}),Ma,Ta,$b,Oc,Pc,ha=null,W=null,Qc=h.minPadding,Rc=h.maxPadding,Lc,Mc,ac,Sc=h.events,xc,wc=h.plotBands||[],vc=h.plotLines||[],Ia,uc,Mb,fa,Fb,cc=h.labels.formatter,Ha=h.categories||L&&l.columnCount,xb=h.reversed,zb=Ha&&h.tickmarkPlacement=="between"?0.5:0;if(Ea&&L&&xb===ma)xb=true;la||(Ua*=-1);if(Y)Ua*=-1;H(Ya,{addPlotBand:S,addPlotLine:S,adjustTickAmount:za,categories:Ha,getExtremes:qa,isXAxis:L,options:h,
render:Q,setExtremes:Aa,setScale:P,setCategories:w,translate:M,redraw:o,removePlotBand:Na,removePlotLine:Na,reversed:xb,stacks:eb});for(xc in Sc)Oa(Ya,xc,Sc[xc]);P()}function Kb(){function l(M,ea,xa,D){if(!q[M]){ea=V(Va,{innerHTML:ea,title:xa,onclick:D},H(a.toolbar.itemStyle,{zIndex:1003}),s.div);q[M]=ea}}function h(M){Ca(q[M]);q[M]=null}var s,q={};s=new pa("toolbar",oa,null,{zIndex:1004,width:"auto",height:"auto"});return{add:l,remove:h}}function ob(l,h){function s(o){o=o||Pa.event;if(!o.target)o.target=
o.srcElement;if(!o.pageX)o.pageX=o.clientX+(va.documentElement.scrollLeft||va.body.scrollLeft);if(!o.pageY)o.pageY=o.clientY+(va.documentElement.scrollTop||va.body.scrollTop);return o}function q(o){var Q={xAxis:[],yAxis:[]};p(Ka,function(L){var la=L.translate,Y=L.isXAxis,eb=Ea?!Y:Y;Q[Y?"xAxis":"yAxis"].push({axis:L,value:la(eb?o.pageX-lb.x-ga:ka-o.pageY+lb.y+I,true)})});return Q}function M(){ib.onmousedown=function(o){o=s(o);o.preventDefault&&o.preventDefault();l.mouseIsDown=Nb=true;X=o.pageX;ca=
o.pageY;if(Ub&&(w||qa)){P||(P=V(Va,null,{position:wa,border:"none",background:"#4572A7",opacity:0.25,width:S?0:sa+F,height:Na?0:ka+F}));sc.div.appendChild(P)}};ib.onmousemove=function(o){o=s(o);o.returnValue=false;if(Nb){za=Math.sqrt(Math.pow(X-o.pageX,2)+Math.pow(ca-o.pageY,2))>10;if(S){var Q=o.pageX-X;ra(P,{width:Da(Q)+F,left:(Q>0?0:Q)+X-lb.x-ga+F})}if(Na){o=o.pageY-ca;ra(P,{height:Da(o)+F,top:(o>0?0:o)+ +ca-lb.y-I+F})}}else ea(o);return false};ib.onmouseup=function(){var o;if(P){var Q={xAxis:[],
yAxis:[]},L=P.offsetLeft,la=P.offsetTop,Y=P.offsetWidth,eb=P.offsetHeight;if(za){p(Ka,function(Ya){var hb=Ya.translate,Ua=Ya.isXAxis,wb=Ea?!Ua:Ua,sb=hb(wb?L:ka-la-eb,true);hb=hb(wb?L+Y:ka-la,true);Q[Ua?"xAxis":"yAxis"].push({axis:Ya,min:ta.min(sb,hb),max:Lb(sb,hb)})});na(l,"selection",Q,y);o=true}Ca(P);P=null}l.mouseIsDown=Nb=za=false};ib.onmouseout=function(o){o=o||Pa.event;if((o=o.relatedTarget||o.toElement)&&o!=dc&&o.tagName!="AREA"){D();l.mouseIsDown=Nb=za=false}};ib.onclick=function(o){o=s(o);
o.cancelBubble=true;if(!za)if(U&&o.target.tagName=="AREA"){var Q=U.plotX,L=U.plotY;H(U,{pageX:lb.x+ga+(Ea?sa-L:Q),pageY:lb.y+I+(Ea?ka-Q:L)});na(l.hoverSeries,"click",H(o,{point:U}));U.firePointEvent("click",o)}else{H(o,q(o));na(l,"click",o)}za=false}}function ea(o){var Q=l.hoverPoint,L=l.hoverSeries;if(L){Q||(Q=L.tooltipPoints[Ea?o.pageY-lb.y-I:o.pageX-lb.x-ga]);if(Q&&Q!=U){U&&U.firePointEvent("mouseOut");Q.firePointEvent("mouseOver");Ab&&Ab.refresh(Q);U=Q}}}function xa(){var o="highchartsMap"+bd++;
l.imagemap=ib=V("map",{name:o,id:o,className:"highcharts-image-map"},null,oa);dc=V("img",{useMap:"#"+o},{width:sa+F,height:ka+F,left:ga+F,top:I+F,opacity:0,border:"none",position:wa,clip:"rect(1px,"+sa+"px,"+ka+"px,1px)",zIndex:9},ib);if(!Ra)dc.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}function D(){Ab&&Ab.hide();if(l.hoverSeries){l.hoverSeries.setState();U=l.hoverSeries=null}}function ia(o){var Q=0,L,la=ib.childNodes;for(L=0;L<la.length;L++)if(la[L].isLegendArea){Q=
L+1;break}ib.insertBefore(o,la[Q])}var U,X,ca,za,P,Aa=A.zoomType,w=/x/.test(Aa),qa=/y/.test(Aa),S=w&&!Ea||qa&&Ea,Na=qa&&!Ea||w&&Ea;xa();if(h.enabled)l.tooltip=Ab=jb(h);M();setInterval(function(){yc&&yc()},32);H(this,{insertAtFront:ia,zoomX:w,zoomY:qa,resetTracker:D})}function jb(l){function h(ia,U){var X=ia.tooltipPos;U=ia.series;var ca=l.borderColor||ia.color||U.color||"#606060",za=t.inverted,P,Aa,w,qa=ea.offsetHeight;w=ia.tooltipText;M=U;P=X?X[0]:za?sa-ia.plotY:ia.plotX;X=X?X[1]:za?ka-ia.plotX:
ia.plotY;if(P>=0&&P<=sa&&X>=0&&X<=ka)Aa=true;if(w===false||!Aa)q();else{ea.innerHTML=w;ra(ea,{overflow:ec});Aa=ea.offsetWidth-xa;w=ea.offsetHeight-xa;ra(ea,{overflow:db});if(Aa>(D.w||0)+20||Aa<(D.w||0)-20||w>D.h||D.c!=ca||qa!=ea.offsetHeight){D.clear();D.drawRect(xa/2,xa/2,Aa+20,w,ca,xa,l.borderRadius,l.backgroundColor,l.shadow);H(D,{w:Aa,h:w,c:ca})}ca=P-D.w+ga-35;P=X-D.h+10+I;if(ca<5){ca=5;P-=20}if(P<5)P=5;else if(P+D.h>Ga)P=Ga-D.h-5;s(O(ca),O(P));U.drawPointState(ia,"hover");kb.style.visibility=
ec}}function s(ia,U){var X=kb.style.visibility==db,ca=X?ia:(kb.offsetLeft+ia)/2;X=X?U:(kb.offsetTop+U)/2;ra(kb,{left:ca+F,top:X+F});yc=Da(ia-ca)>1||Da(U-X)>1?function(){s(ia,U)}:null}function q(){if(kb)kb.style.visibility=db;M&&M.drawPointState()}var M,ea,xa=l.borderWidth,D;kb=V(Va,null,{position:wa,visibility:db,overflow:db,padding:"0 50px 5px 0",zIndex:8},oa);D=new pa("tooltip-box",kb,null,{width:mb+F,height:Ga+F});ea=V(Va,{className:"highcharts-tooltip"},H(l.style,{maxWidth:mb-40+F,textOverflow:"ellipsis",
position:Xb,zIndex:2}),kb);return{refresh:h,hide:q}}var nb=function(l){function h(Aa){if(Aa){p(U,function(w){Ca(w.legendItem)});U=[]}P&&za.reverse();p(za,function(w){if(w.options.showInLegend){var qa=w.options.legendType=="point"?w.data:[w];p(qa,function(S){S.simpleSymbol=/(bar|pie|area|column)/.test(w.type);S.legendItem=M=V("li",{innerHTML:q.labelFormatter.call(S),className:S.visible?"":Ob},null,D.firstChild);if(S.options&&S.options.showCheckbox)S.checkbox=V("input",{type:"checkbox",checked:S.selected,
defaultChecked:S.selected},q.itemCheckboxStyle,M);Oa(M,"mouseover",function(){S.setState("hover")});Oa(M,"mouseout",function(){S.setState()});Oa(M,"click",function(Na){Na=Na.target;var o="legendItemClick",Q=function(){S.setVisible()};if(Na.tagName=="INPUT")na(S,"checkboxClick",{checked:Na.checked},function(){S.select()});else S.firePointEvent?S.firePointEvent(o,null,Q):na(S,o,null,Q)});U.push(S)})}});P&&za.reverse()}function s(Aa){if(Aa){X.clear();Ca(ca);ca=null}if(za.length){if(q.borderWidth||q.backgroundColor)X.drawRect(D.offsetLeft,
D.offsetTop,D.offsetWidth,D.offsetHeight,q.borderColor,q.borderWidth,q.borderRadius,q.backgroundColor,q.shadow);p(U,function(w){if(w.legendItem){var qa=w.legendItem,S=D.offsetLeft+qa.offsetLeft;qa=D.offsetTop+qa.offsetTop+qa.offsetHeight/2;var Na=w.legendItem.className==Ob,o=Na?q.itemHiddenStyle.color:w.color;!w.simpleSymbol&&w.options&&w.options.lineWidth&&X.drawLine(S,qa,S+xa,qa,o,w.options.lineWidth);if(w.simpleSymbol)X.drawRect(S,qa-6,16,12,null,0,2,o);else if(w.options&&w.options.marker&&w.options.marker.enabled)w.drawMarker(X,
S+xa/2,qa,aa(w.options.marker,Na?{fillColor:o,lineColor:o}:null))}});if(ib){ca=V("area",{shape:"rect",isLegendArea:true,coords:[D.offsetLeft-ga,D.offsetTop-I,D.offsetLeft+D.offsetWidth-ga,D.offsetTop+D.offsetHeight-I].join(",")});ub.insertAtFront(ca);ca.onmouseover=function(w){w=w||Pa.event;w=w.relatedTarget||w.fromElement;if(w!=D&&!Nb){Ab&&Ab.hide();ra(D,{zIndex:10})}};D.onmouseout=ca.onmouseout=function(w){w=w||Pa.event;if((w=w.relatedTarget||w.toElement)&&(w==dc||w.tagName=="AREA"&&w!=ca))ra(D,
{zIndex:7})}}}}var q=l.options.legend;if(q.enabled){var M,ea=q.layout,xa=q.symbolWidth,D,ia="#"+oa.id+" .highcharts-legend li",U=[],X=new pa("legend",oa,null,{zIndex:7}),ca,za=l.series,P=q.reversed;this.dom=D=V(Va,{className:"highcharts-legend highcharts-legend-"+ea,innerHTML:'<ul style="margin:0;padding:0"></ul>'},H({position:wa,zIndex:7},q.style),oa);Gb(ia,H(q.itemStyle,{paddingLeft:xa+q.symbolPadding+F,"float":ea=="horizontal"?"left":"none"}));Gb(ia+":hover",q.itemHoverStyle);Gb(ia+"."+Ob,q.itemHiddenStyle);
Gb(".highcharts-legend-horizontal li",{"float":"left"});h();s();return{renderHTML:h,drawGraphics:s}}};Pa.G_vmlCanvasManager&&Pa.G_vmlCanvasManager.init_(document);Zb=aa(Zb,Ba.xAxis);tc=aa(tc,Ba.yAxis);Ba.xAxis=Ba.yAxis=null;a=aa(Ba,a);var A=a.chart,T=A.margin;T=typeof T=="number"?[T,T,T,T]:T;var I=T[0],fb=T[1],cb=T[2],ga=T[3],Xa,rb,oa,qc,mb,Ga;C();var t=this;T=A.events;var zc,ib,Ab,Nb,Jc=new pa("chart-background",oa),vb,sc,ka,sa,ub,dc,Jb,lb=Hc(oa),Ub=A.showAxes,Ka=[],Cb,ya=[],Yb,Ea,yc,kb;fc=Bb=0;
Oa(Pa,"resize",i);Oa(Pa,"unload",La);if(T)for(zc in T)Oa(t,zc,T[zc]);t.addLoading=function(l){t.resources[l]=false};t.clearLoading=function(l){t.resources[l]=true;E()};t.options=a;t.series=ya;t.container=oa;t.resources={};t.inverted=Ea=a.chart.inverted;t.chartWidth=mb;t.chartHeight=Ga;t.plotWidth=sa=mb-ga-fb;t.plotHeight=ka=Ga-I-cb;t.plotLeft=ga;t.plotTop=I;t.redraw=c;t.addSeries=b;t.getSelectedPoints=r;t.getSelectedSeries=v;t.showLoading=e;t.hideLoading=f;t.get=g;t.destroy=La;t.updatePosition=i;
t.plotLayer=sc=new pa("plot",oa,null,{position:wa,width:sa+F,height:ka+F,left:ga+F,top:I+F,overflow:db,zIndex:3});if(A.plotBackgroundImage){t.addLoading("plotBack");Yb=V("img");Yb.onload=function(){t.clearLoading("plotBack")};Yb.src=A.plotBackgroundImage}p(a.series||[],function(l){d(l)});t.tracker=ub=new ob(t,a.tooltip);E()}function Tc(a){for(var b=[],c=[],d=0;d<a.length;d++){b[d]=a[d].plotX;c[d]=a[d].plotY}this.xdata=b;this.ydata=c;a=[];this.y2=[];var e=c.length;this.n=e;this.y2[0]=0;this.y2[e-1]=
0;a[0]=0;for(d=1;d<e-1;d++){var f=b[d+1]-b[d-1];f=(b[d]-b[d-1])/f;var g=f*this.y2[d-1]+2;this.y2[d]=(f-1)/g;a[d]=(c[d+1]-c[d])/(b[d+1]-b[d])-(c[d]-c[d-1])/(b[d]-b[d-1]);a[d]=(6*a[d]/(b[d+1]-b[d-1])-f*a[d-1])/g}for(b=e-2;b>=0;b--)this.y2[b]=this.y2[b]*this.y2[b+1]+a[b]}var ma,va=document,Pa=window,ta=Math,O=ta.round,Za=ta.floor,Lb=ta.max,Da=ta.abs,gc=ta.cos,hc=ta.sin,B=navigator.userAgent,Ra=/msie/i.test(B)&&!Pa.opera,cd=/AppleWebKit/.test(B),kc,bd=0,Bb,fc,Uc={},rc=0,Sa=1,Qb,Va="div",wa="absolute",
Xb="relative",db="hidden",Ob="highcharts-"+db,ec="visible",F="px",Tb,oc,mc,nc,Ib,Rb,Sb,Dc,Ec,pc,Fc,Gc,ua=(B=Pa.HighchartsAdapter)||{},p=ua.each,Wb=ua.grep,qb=ua.map,aa=ua.merge,Pb=ua.hyphenate,Oa=ua.addEvent,na=ua.fireEvent,Db=ua.animate,Ac=ua.getAjax,bb={};if(!B&&Pa.jQuery){var pb=jQuery;p=function(a,b){for(var c=0,d=a.length;c<d;c++)if(b.call(a[c],a[c],c,a)===false)return c};Wb=pb.grep;qb=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)c[d]=b.call(a[d],a[d],d,a);return c};aa=function(){var a=
arguments;return pb.extend(true,null,a[0],a[1],a[2],a[3])};Pb=function(a){return a.replace(/([A-Z])/g,function(b,c){return"-"+c.toLowerCase()})};Oa=function(a,b,c){pb(a).bind(b,c)};na=function(a,b,c,d){var e=pb.Event(b),f="detached"+b;H(e,c);if(a[b]){a[f]=a[b];a[b]=null}pb(a).trigger(e);if(a[f]){a[b]=a[f];a[f]=null}d&&!e.isDefaultPrevented()&&d(e)};Db=function(a,b,c){pb(a).animate(b,c)};Ac=function(a,b){pb.get(a,null,b)};pb.extend(pb.easing,{easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c}})}else if(!B&&
Pa.MooTools){p=$each;qb=function(a,b){return a.map(b)};Wb=function(a,b){return a.filter(b)};aa=$merge;Pb=function(a){return a.hyphenate()};Oa=function(a,b,c){if(!a.addEvent)if(a.nodeName)a=$(a);else H(a,new Events);a.addEvent(b,c)};na=function(a,b,c,d){b=new Event({type:b,target:a});b=H(b,c);b.preventDefault=function(){d=null};a.fireEvent&&a.fireEvent(b.type,b);d&&d(b)};Db=function(a,b,c){a=new Fx.Morph($(a),H(c,{transition:Fx.Transitions.Quad.easeInOut}));a.start(b)};Ac=function(a,b){(new Request({url:a,
method:"get",onSuccess:b})).send()}}B='normal 12px "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif';ua={enabled:true,align:"center",x:0,y:15,style:{color:"#666",font:B.replace("12px","11px")}};var Ba={colors:["#4572A7","#AA4643","#89A54E","#80699B","#3D96AE","#DB843D","#92A8CD","#A47D7C","#B5CA92"],symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:["January","February","March","April","May","June","July","August","September",
"October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],decimalPoint:".",resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:true},chart:{margin:[50,50,60,80],borderColor:"#4572A7",borderRadius:5,defaultSeriesType:"line",ignoreHiddenSeries:true,plotBorderColor:"#C0C0C0"},title:{text:"Chart title",style:{textAlign:"center",color:"#3E576F",font:B.replace("12px","16px"),margin:"10px 0 0 0"}},subtitle:{text:"",
style:{textAlign:"center",color:"#6D869F",font:B,margin:0}},plotOptions:{line:{allowPointSelect:false,showCheckbox:false,animation:true,events:{},lineWidth:2,shadow:true,marker:{enabled:true,symbol:"auto",lineWidth:0,radius:4,lineColor:"#FFFFFF",fillColor:"auto",states:{hover:{},select:{fillColor:"#FFFFFF",lineColor:"auto",lineWidth:2}}},point:{events:{}},dataLabels:aa(ua,{enabled:false,y:-6,formatter:function(){return this.y}}),showInLegend:true,states:{hover:{lineWidth:3,marker:{}},select:{marker:{}}}}},
labels:{style:{position:wa,color:"#3E576F",font:B}},legend:{enabled:true,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#909090",borderRadius:5,shadow:true,style:{bottom:"10px",left:"80px",padding:"5px"},itemStyle:{listStyle:"none",margin:0,padding:"0 2em 0 0",font:B,cursor:"pointer",color:"#3E576F",position:Xb},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:wa,right:0},symbolWidth:16,symbolPadding:5},loading:{hideDuration:100,
labelStyle:{font:B.replace("normal","bold"),position:Xb,top:"1em"},showDuration:100,style:{position:wa,backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:true,formatter:function(){var a=this,b=a.series,c=b.xAxis,d=a.x;return"<b>"+(a.point.name||b.name)+"</b><br/>"+(Qa(d)?"X value: "+(c&&c.options.type=="datetime"?lc("%Y-%m-%d %H:%M:%S",d):d)+"<br/>":"")+"Y value: "+a.y},backgroundColor:"rgba(255, 255, 255, .85)",borderWidth:2,borderRadius:5,shadow:true,snap:10,style:{color:"#333333",
font:B,fontSize:"9pt",padding:"5px",whiteSpace:"nowrap"}},toolbar:{itemStyle:{color:"#4572A7",cursor:"pointer",margin:"20px",font:B}},credits:{enabled:false,text:"Highcharts.com",href:"http://www.highcharts.com",style:{position:wa,right:"10px",bottom:"5px",color:"#999",textDecoration:"none",font:B.replace("12px","10px")},target:"_self"}},Zb={dateTimeLabelFormats:{second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:false,gridLineColor:"#C0C0C0",
labels:ua,lineColor:"#C0D0E0",lineWidth:1,max:null,min:null,maxZoom:null,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",minorTickWidth:1,showFirstLabel:true,showLastLabel:false,startOfWeek:1,startOnTick:false,tickColor:"#C0D0E0",tickInterval:"auto",tickLength:5,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{enabled:false,text:"X-values",align:"middle",margin:35,style:{color:"#6D869F",
font:B.replace("normal","bold")}},type:"linear"},tc=aa(Zb,{endOnTick:true,gridLineWidth:1,tickPixelInterval:72,showLastLabel:true,labels:{align:"right",x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:true,tickWidth:0,title:{enabled:true,margin:40,rotation:270,text:"Y-values"}}),$c={labels:{align:"right",x:-8,y:3},title:{rotation:270}},Zc={labels:{align:"left",x:8,y:3},title:{rotation:90}},Kc={labels:{align:"center",x:0,y:14},title:{rotation:0}},Yc=aa(Kc,{labels:{y:-5}});B=Ba.plotOptions;
ua=B.line;B.spline=aa(ua);B.scatter=aa(ua,{lineWidth:0,states:{hover:{lineWidth:0}}});B.area=aa(ua,{fillColor:"auto"});B.areaspline=aa(B.area);B.column=aa(ua,{borderColor:"#FFFFFF",borderWidth:1,borderRadius:0,groupPadding:0.2,pointPadding:0.1,states:{hover:{brightness:0.1,shadow:false},select:{color:"#C0C0C0",borderColor:"#000000",shadow:false}}});B.bar=aa(B.column,{dataLabels:{align:"left",x:5,y:0}});B.pie=aa(ua,{borderColor:"#FFFFFF",borderWidth:1,center:["50%","50%"],legendType:"point",size:"90%",
slicedOffset:10,states:{hover:{brightness:0.1,shadow:false}}});Cc();var Bc=function(a){function b(i){if(g=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i))f=[parseInt(g[1]),parseInt(g[2]),parseInt(g[3]),parseFloat(g[4])];else if(g=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i))f=[parseInt(g[1],16),parseInt(g[2],16),parseInt(g[3],16),1]}function c(){return f&&!isNaN(f[0])?"rgba("+f.join(",")+")":a}function d(i){if(typeof i=="number"&&
i!=0)for(var k=0;k<3;k++){f[k]+=parseInt(i*255);if(f[k]<0)f[k]=0;if(f[k]>255)f[k]=255}return this}function e(i){f[3]=i;return this}var f=[],g;b(a);return{get:c,brighten:d,setOpacity:e}},pa=function(a,b,c,d){var e=this,f=b.style;c=H({className:"highcharts-"+a},c);d=H({width:f.width,height:f.height,position:wa,top:0,left:0,margin:0,padding:0,border:"none"},d);a=V(Va,c,d,b);H(e,{div:a,width:parseInt(d.width),height:parseInt(d.height)});e.svg=Ra?"":'<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+
e.width+'px" height="'+e.height+'">';e.basicSvg=e.svg};pa.prototype={getCtx:function(){if(!this.ctx){var a=V("canvas",{id:"highcharts-canvas-"+rc++,width:this.width,height:this.height},{position:wa},this.div);if(Ra){G_vmlCanvasManager.initElement(a);a=va.getElementById(a.id)}this.ctx=a.getContext("2d")}return this.ctx},getSvg:function(){if(!this.svgObject){var a=this,b=a.div,c=a.width;a=a.height;if(Ra){if(!va.namespaces.g_vml_){va.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml");va.createStyleSheet().cssText=
"g_vml_\\:*{behavior:url(#default#VML)}"}this.svgObject=V(Va,null,{width:c+F,height:a+F,position:wa},b)}else this.svgObject=V("object",{width:c,height:a,type:"image/svg+xml"},{position:wa,left:0,top:0},b)}return this.svgObject},drawLine:function(a,b,c,d,e,f){var g=this.getCtx();if(a==c)a=c=O(a)+f%2/2;if(b==d)b=d=O(b)+f%2/2;g.lineWidth=f;g.lineCap="round";g.beginPath();g.moveTo(a,b);g.strokeStyle=e;g.lineTo(c,d);g.closePath();g.stroke()},drawPolyLine:function(a,b,c,d,e){var f=this.getCtx(),g=[];if(d&&
c){p(a,function(i){g.push(i===ma?i:i+1)});for(d=1;d<=3;d++)this.drawPolyLine(g,"rgba(0, 0, 0, "+0.05*d+")",6-2*d)}f.beginPath();for(d=0;d<a.length;d+=2)f[d==0?"moveTo":"lineTo"](a[d],a[d+1]);H(f,{lineWidth:c,lineJoin:"round"});if(b&&c){f.strokeStyle=Hb(b,f);f.stroke()}if(e){f.fillStyle=Hb(e,f);f.fill()}},drawRect:function(a,b,c,d,e,f,g,i,k,j){var r=function(){var R;if(c>0&&d>0){v.beginPath();if(g){v.moveTo(a,b+g);v.lineTo(a,b+d-g);v.quadraticCurveTo(a,b+d,a+g,b+d);v.lineTo(a+c-g,b+d);v.quadraticCurveTo(a+
c,b+d,a+c,b+d-g);v.lineTo(a+c,b+g);v.quadraticCurveTo(a+c,b,a+c-g,b);v.lineTo(a+g,b);v.quadraticCurveTo(a,b,a,b+g)}else v.rect(a,b,c,d);v.closePath();R=true}return R},v=this.getCtx(),y=(f||0)%2/2;a=O(a)+y;b=O(b)+y;c=O(c-2*y);d=O(d-2*y);if(k)for(k=1;k<=3;k++)this.drawRect(a+1,b+1,c,d,"rgba(0, 0, 0, "+0.05*k+")",6-2*k,g);j&&v.drawImage(j,a,b,c,d);if(r()){if(i){v.fillStyle=Hb(i,v);v.fill();Pa.G_vmlCanvasManager&&r()}if(f){v.strokeStyle=Hb(e,v);v.lineWidth=f;v.stroke()}}},drawSymbol:function(a,b,c,d,
e,f,g){var i=this.getCtx(),k=/^url\((.*?)\)$/;i.beginPath();if(a=="square"){a=0.707*d;i.moveTo(b-a,c-a);i.lineTo(b+a,c-a);i.lineTo(b+a,c+a);i.lineTo(b-a,c+a);i.lineTo(b-a,c-a)}else if(a=="triangle"){c++;i.moveTo(b,c-1.33*d);i.lineTo(b+d,c+0.67*d);i.lineTo(b-d,c+0.67*d);i.lineTo(b,c-1.33*d)}else if(a=="triangle-down"){c--;i.moveTo(b,c+1.33*d);i.lineTo(b-d,c-0.67*d);i.lineTo(b+d,c-0.67*d);i.lineTo(b,c+1.33*d)}else if(a=="diamond"){i.moveTo(b,c-d);i.lineTo(b+d,c);i.lineTo(b,c+d);i.lineTo(b-d,c);i.lineTo(b,
c-d)}else k.test(a)?V("img",{onload:function(){var j=this,r=Uc[j.src]||[j.width,j.height];ra(j,{left:O(b-r[0]/2)+F,top:O(c-r[1]/2)+F,visibility:ec});Uc[j.src]=r},src:a.match(k)[1]},{position:wa,visibility:Ra?ec:db},this.div):i.arc(b,c,d,0,2*ta.PI,true);if(g){i.fillStyle=g;i.fill()}if(f&&e){i.strokeStyle=f||"rgb(100, 100, 255)";i.lineWidth=e||2;i.stroke()}},drawHtml:function(a,b,c){V(Va,H(b,{innerHTML:a}),H(c,{position:wa}),this.div)},drawText:function(){this.addText.apply(this,arguments);this.strokeText()},
addText:function(a,b,c,d,e,f){if(a||a===0){var g=this,i,k=g.div,j,r="";d=d||{};var v=d.color||"#000000";f=f||"left";var y=parseInt(d.fontSize||d.font.replace(/^[a-z ]+/,""));for(var R in d)r+=Pb(R)+":"+d[R]+";";p(["MozTransform","WebkitTransform","transform"],function(Wa){if(Wa in k.style)j=Wa});if(!e||j){a=V("span",{innerHTML:a},H(d,{position:wa,left:b+F,whiteSpace:"nowrap",bottom:O(g.height-c-y*0.25)+F,color:v}),k);r=a.offsetWidth;if(f=="right")ra(a,{left:b-r+F});else f=="center"&&ra(a,{left:O(b-
r/2)+F});if(e){f={left:0,center:50,right:100}[f];a.style[j]="rotate("+e+"deg)";a.style[j+"Origin"]=f+"% 100%"}}else if(Ra){i=true;d=(e||0)*ta.PI*2/360;e=gc(d);d=hc(d);R=g.width;y=y/3||3;var E=f=="left",K=f=="right",C=E?b:b-R*e;b=K?b:b+R*e;E=E?c:c-R*d;c=K?c:c+R*d;C+=y*d;b+=y*d;E-=y*e;c-=y*e;if(Da(C-b)<0.1)C+=0.1;if(Da(E-c)<0.1)E+=0.1;g.svg+='<g_vml_:line from="'+C+", "+E+'" to="'+b+", "+c+'" stroked="false"><g_vml_:fill on="true" color="'+v+'"/><g_vml_:path textpathok="true"/><g_vml_:textpath on="true" string="'+
a+'" style="v-text-align:'+f+";"+r+'"/></g_vml_:line>'}else{i=true;g.svg+='<g><text transform="translate('+b+","+c+") rotate("+(e||0)+')" style="fill:'+v+";text-anchor:"+{left:"start",center:"middle",right:"end"}[f]+";"+r.replace(/"/g,"'")+'">'+a+"</text></g>"}g.hasObject=i}},strokeText:function(){if(this.hasObject){var a=this.getSvg(),b=this.svg;if(Ra)a.innerHTML=b;else{a.data="data:image/svg+xml,"+b+"</svg>";cd&&this.div.appendChild(a)}}},clear:function(){var a=this,b=this.div;b=b.childNodes;a.ctx&&
a.ctx.clearRect(0,0,a.width,a.height);if(a.svgObject){Ca(a.svgObject);a.svgObject=null;a.svg=a.basicSvg}for(var c=b.length-1;c>=0;c--){a=b[c];/(SPAN|IMG)/.test(a.tagName)&&Ca(a)}},hide:function(){ra(this.div,{display:"none"})},show:function(){ra(this.div,{display:""})},destroy:function(){Ca(this.div);return null}};var ic=function(){};ic.prototype={init:function(a,b){var c=this;c.series=a;c.applyOptions(b);return c},applyOptions:function(a){var b=this,c=b.series;if(typeof a=="number"||a===null)b.y=
a;else if(typeof a=="object"&&typeof a.length!="number"){H(b,a);b.options=a}else if(typeof a[0]=="string"){b.name=a[0];b.y=a[1]}else if(typeof a[0]=="number"){b.x=a[0];b.y=a[1]}if(b.x===ma)b.x=c.autoIncrement()},destroy:function(){var a=this;a.stateLayer&&a.stateLayer.destroy();for(prop in a)a[prop]=null},select:function(a,b){var c=this,d=c.series,e=d.chart,f,g,i=da(c.stateLayer,d.singlePointLayer,e.singlePointLayer);c.selected=a=da(a,!c.selected);d.isDirty=true;c.firePointEvent(a?"select":"unselect");
i&&i.clear();p(e.series,function(k){f=k.stateLayers;b||p(k.data,function(j){if(j.selected&&j!=c){j.selected=false;na(j,"unselect");k.isDirty=true}});if(k.isDirty){for(g in f)f[g].clear();k.render()}})},update:function(a,b){var c=this,d=c.series;b=da(b,true);c.firePointEvent("update",{options:a},function(){c.applyOptions(a);d.isDirty=true;b&&d.chart.redraw()})},remove:function(a){var b=this,c=b.series,d=c.chart,e=c.data;a=da(a,true);b.firePointEvent("remove",null,function(){p(e,function(f,g){f==b&&
e.splice(g,1)});if(b.layer)b.layer=b.layer.destroy();if(b.legendItem){Ca(b.legendItem);b.legendItem=null;d.isDirty=true}c.isDirty=true;a&&d.redraw()})},firePointEvent:function(a,b,c){var d=this,e=this.series;e=e.options;if(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])this.importEvents();if(a=="click"&&e.allowPointSelect)c=function(f){d.select(null,f.ctrlKey||f.metaKey||f.shiftKey)};na(this,a,b,c)},importEvents:function(){if(!this.hasImportedEvents){var a=this,b=aa(a.series.options.point,
a.options);b=b.events;var c;a.events=b;for(c in b)Oa(a,c,b[c]);this.hasImportedEvents=true}},setTooltipText:function(){var a=this;a.tooltipText=a.series.chart.options.tooltip.formatter.call({series:a.series,point:a,x:a.category,y:a.y,percentage:a.percentage,total:a.stackTotal})}};var Ja=function(){this.isCartesian=true;this.type="line";this.pointClass=ic};Ja.prototype={init:function(a,b){var c=this,d,e=a.series.length;c.chart=a;b=c.setOptions(b);H(c,{index:e,options:b,name:b.name||"Series "+(e+1),
state:"",visible:b.visible!==false,selected:b.selected==true});a=b.events;for(d in a)Oa(c,d,a[d]);c.getColor();c.getSymbol();c.getData(b)},getData:function(a){var b=this,c=b.chart,d="series"+rc++;if(!a.data&&a.dataURL){c.addLoading(d);Ac(a.dataURL,function(e){b.dataLoaded(e);c.clearLoading(d)})}else b.dataLoaded(a.data)},dataLoaded:function(a){var b=this,c=b.chart,d=b.options,e=[""],f=d.dataParser,g={},i;if(d.dataURL&&!f)f=function(k){return eval(k)};if(f)a=f.call(b,a);b.layerGroup=i=new pa("series-group",
c.plotLayer.div,null,{zIndex:2});d.states.hover.enabled&&e.push("hover");p(e,function(k){g[k]=new pa("state-"+k,i.div)});b.stateLayers=g;b.setData(a,false)},autoIncrement:function(){var a=this,b=a.options,c=a.xIncrement;c=da(c,b.pointStart,0);a.pointInterval=da(a.pointInterval,b.pointInterval,1);a.xIncrement=c+a.pointInterval;return c},cleanData:function(){var a=this;a=a.data;var b;a.sort(function(c,d){return c.x-d.x});for(b=a.length-1;b>=0;b--)a[b-1]&&a[b-1].x==a[b].x&&a.splice(b-1,1)},getSegments:function(){var a=
-1,b=[],c=this.data;p(c,function(d,e){if(d.y===null){e>a+1&&b.push(c.slice(a+1,e));a=e}else e==c.length-1&&b.push(c.slice(a+1,e+1))});this.segments=b},setOptions:function(a){var b=this.chart.options.plotOptions;a=aa(b[this.type],b.series,a);b=a.marker;var c=a.states.hover.marker;if(c.lineWidth===ma)c.lineWidth=b.lineWidth+1;if(c.radius===ma)c.radius=b.radius+1;return a},getColor:function(){var a=this.chart.options.colors;this.color=this.options.color||a[Bb++]||"#0000ff";if(Bb>=a.length)Bb=0},getSymbol:function(){var a=
this.chart.options.symbols,b=this.options.marker.symbol||"auto";if(b=="auto")b=a[fc++];this.symbol=b;if(fc>=a.length)fc=0},addPoint:function(a,b,c){var d=this,e=d.data;a=(new d.pointClass).init(d,a);b=da(b,true);e.push(a);c&&e.shift();d.isDirty=true;b&&d.chart.redraw()},setData:function(a,b){var c=this;c.xIncrement=null;a=qb(jc(a),function(d){return(new c.pointClass).init(c,d)});c.data=a;c.cleanData();c.getSegments();c.isDirty=true;da(b,true)&&c.chart.redraw()},remove:function(a){var b=this,c=b.chart;
a=da(a,true);if(!b.isRemoving){b.isRemoving=true;na(b,"remove",null,function(){Ca(b.layerGroup.div);p(b.areas,function(d){Ca(d)});Ca(b.legendItem);b.legendItem=null;p(c.series,function(d,e){d==b&&c.series.splice(e,1)});c.isDirty=true;a&&c.redraw()})}b.isRemoving=false},translate:function(){var a=this.chart,b=this,c=b.options.stacking,d=b.xAxis.categories,e=b.yAxis,f=e.stacks[b.type];p(this.data,function(g){var i=g.x,k=g.y,j;g.plotX=b.xAxis.translate(g.x);if(c&&b.visible&&f[i]){j=f[i];i=j.total;j.cum=
j=j.cum-k;k=j+k;if(c=="percent"){j=i?j*100/i:0;k=i?k*100/i:0}g.percentage=i?g.y*100/i:0;g.stackTotal=i;g.yBottom=e.translate(j,0,1)}if(k!==null)g.plotY=e.translate(k,0,1);g.clientX=a.inverted?a.plotHeight-g.plotX+a.plotTop:g.plotX+a.plotLeft;g.category=d&&d[g.x]!==ma?d[g.x]:g.x})},setTooltipPoints:function(a){var b=this,c=b.chart,d=c.inverted,e=[],f=d?c.plotHeight:c.plotWidth,g,i,k=[];if(a)b.tooltipPoints=null;p(b.segments,function(j){e=e.concat(j)});if(b.xAxis.reversed)e=e.reverse();p(e,function(j,
r){b.tooltipPoints||j.setTooltipText();g=e[r-1]?e[r-1].high+1:0;for(i=j.high=e[r+1]?Za((j.plotX+(e[r+1]?e[r+1].plotX:f))/2):f;g<=i;)k[d?f-g++:g++]=j});b.tooltipPoints=k},drawLine:function(a){var b,c=this,d=c.options,e=c.chart,f=d.animation&&c.animate,g=c.stateLayers[a],i=d.lineColor||c.color,k=d.fillColor=="auto"?Bc(c.color).setOpacity(d.fillOpacity||0.75).get():d.fillColor,j=e.inverted,r=(j?0:e.plotHeight)-c.yAxis.translate(0);if(a)d=aa(d,d.states[a]);f&&c.animate(true);p(c.segments,function(v){var y=
[],R=[];p(v,function(E,K){if(K&&d.step){K=v[K-1];y.push(j?e.plotWidth-K.plotY:E.plotX,j?e.plotHeight-E.plotX:K.plotY)}y.push(j?e.plotWidth-E.plotY:E.plotX,j?e.plotHeight-E.plotX:E.plotY)});if(/area/.test(c.type)){for(b=0;b<y.length;b++)R.push(y[b]);if(d.stacking&&c.type!="areaspline")for(b=v.length-1;b>=0;b--)R.push(v[b].plotX,v[b].yBottom);else R.push(j?r:v[v.length-1].plotX,j?e.plotHeight-v[v.length-1].plotX:r,j?r:v[0].plotX,j?e.plotHeight-v[0].plotX:r);g.drawPolyLine(R,null,null,d.shadow,k)}d.lineWidth&&
g.drawPolyLine(y,i,d.lineWidth,d.shadow)});f&&c.animate()},animate:function(a){var b=this,c=b.chart,d=c.inverted,e=b.layerGroup.div;if(b.visible)if(a)ra(e,H({overflow:db},d?{height:0}:{width:0}));else{Db(e,d?{height:c.plotHeight+F}:{width:c.plotWidth+F},{duration:1E3});this.animate=null}},drawPoints:function(a){var b=this,c=b.stateLayers[a];a=b.options;var d=a.marker;a=b.data;var e=b.chart,f=e.inverted;d.enabled&&p(a,function(g){if(g.plotY!==ma)b.drawMarker(c,f?e.plotWidth-g.plotY:g.plotX,f?e.plotHeight-
g.plotX:g.plotY,aa(d,g.marker));g.selected&&b.drawPointState(g,"select",c)})},drawMarker:function(a,b,c,d){if(d.lineColor=="auto")d.lineColor=this.color;if(d.fillColor=="auto")d.fillColor=this.color;if(d.symbol=="auto")d.symbol=this.symbol;a.drawSymbol(d.symbol,b,c,d.radius,d.lineWidth,d.lineColor,d.fillColor)},drawDataLabels:function(){if(this.options.dataLabels.enabled){var a=this,b,c,d=a.data,e=a.options.dataLabels,f,g=a.dataLabelsLayer,i=a.chart,k=i.inverted,j=a.type,r=j=="pie",v;if(g)g.clear();
else a.dataLabelsLayer=g=new pa("data-labels",a.layerGroup.div,null,{zIndex:1});e.style.color=e.color=="auto"?a.color:e.color;p(d,function(y){var R=y.plotX,E=y.plotY,K=y.tooltipPos;f=e.formatter.call({x:y.x,y:y.y,series:a,point:y});b=(k?i.plotWidth-E:R)+e.x;c=(k?i.plotHeight-R:E)+e.y;if(K){b=K[0]+e.x;c=K[1]+e.y}if(r){if(!y.dataLabelsLayer)y.dataLabelsLayer=new pa("data-labels",y.layer.div,null,{zIndex:3});g=y.dataLabelsLayer}v=e.align;if(j=="column")b+={center:y.w/2,right:y.w}[v]||0;if(f)g[r?"drawText":
"addText"](f,b,c,e.style,e.rotation,v)});r||g.strokeText()}},drawPointState:function(a,b,c){var d=this.chart,e=d.inverted,f=b=="hover";c=c||d.singlePointLayer;var g=this.options;if(f){if(!c)c=d.singlePointLayer=new pa("single-point",d.plotLayer.div,null,{zIndex:3});c.clear()}if(b){var i=g.states[b].marker;b=g.marker.states[b];if(f&&b.radius===ma)b.radius=i.radius+2;if((f=aa(g.marker,a.marker,i,b))&&f.enabled)this.drawMarker(c,e?d.plotWidth-a.plotY:a.plotX,e?d.plotHeight-a.plotX:a.plotY,f)}},destroy:function(){var a=
this,b;p(a.data,function(c){c.destroy()});for(b in a)a[b]=null},render:function(){var a=this,b,c=a.stateLayers;a.drawDataLabels();if(a.visible)for(b in c){a.drawLine(b);a.drawPoints(b)}else a.setVisible(false,false);if(!a.hasRendered&&c.hover){c.hover.hide();hasRendered=true}a.isDirty=false},redraw:function(){var a=this;a.translate();a.setTooltipPoints(true);a.createArea();a.clear();a.render()},clear:function(){var a=this.stateLayers;for(var b in a){a[b].clear();a[b].cleared=true}if(this.dataLabelsLayer){this.dataLabelsLayer.clear();
this.hasDrawnDataLabels=false}},setState:function(a){a=a||"";if(this.state!=a){var b=this,c=b.stateLayers,d=c[a];c=c[b.state];var e=b.singlePointLayer||b.chart.singlePointLayer;b.state=a;if(d)if(a)d.show();else{c&&c.hide();e&&e.clear()}}},setVisible:function(a,b){var c=this,d=c.chart,e=c.layerGroup,f=c.legendItem,g=c.areas,i=c.visible;if(c.visible=a=a===ma?!i:a){c.isDirty=true;e.show()}else e.hide();if(f){f.className=a?"":Ob;d.legend.drawGraphics(true)}g&&p(g,function(k){a?d.tracker.insertAtFront(k):
Ca(k)});d.options.chart.ignoreHiddenSeries&&c.options.stacking&&p(d.series,function(k){if(k.options.stacking&&k.visible)k.isDirty=true});b!==false&&d.redraw();na(c,a?"show":"hide")},show:function(){this.setVisible(true)},hide:function(){this.setVisible(false)},select:function(a){var b=this;b.selected=a=a===ma?!b.selected:a;if(b.checkbox)b.checkbox.checked=a;na(b,a?"select":"unselect")},getAreaCoords:function(){var a=this,b=this.chart,c=b.inverted,d=b.plotWidth,e=b.plotHeight,f=a.xAxis.reversed,g,
i=b.options.tooltip.snap,k=[];p(a.splinedata||a.segments,function(j,r){if((g=j.length>1&&j[0].x>j[1].x)&&!f||f&&!g)j=j.reverse();var v=[],y=[],R=[];p([y,R],function(E){for(var K=0,C=0,Wa,La,Fa=[j[0]],Kb=E==y?1:-1,ob,jb,nb,A,T,I,fb;j[C];){if(j[C].plotX>j[K].plotX+i||C==j.length-1){Wa=j[C];La=j.slice(K,C-1);p(La,function(cb){if(Kb*cb.plotY<Kb*Wa.plotY)Wa=cb});if(O(j[K].plotX)<O(Wa.plotX)||j[C].plotX>j[K].plotX+i)Fa.push(Wa);K=C}C++}Fa[Fa.length-1]!=j[j.length-1]&&Fa.push(j[j.length-1]);for(C=0;C<Fa.length;C++)if(C>
0){jb=Fa[C].plotX;ob=Fa[C].plotY;K=Fa[C-1].plotX;La=Fa[C-1].plotY;A=jb-Fa[C-1].plotX;I=T=ob-Fa[C-1].plotY;nb=-A;fb=ta.sqrt(ta.pow(I,2)+ta.pow(nb,2));if(C==1){K-=i/fb*A;La-=i/fb*T}else if(C==Fa.length-1){jb+=i/fb*A;ob+=i/fb*T}A=Kb*i/fb;K=O(K+A*I);La=O(La+A*nb);jb=O(jb+A*I);nb=O(ob+A*nb);if(E[E.length-1]&&E[E.length-1][0]>K)for(ob=false;!ob;){T=E.pop();I=E[E.length-1];if(!I)break;A=(La-nb)/(K-jb);T=(I[1]-T[1])/(I[0]-T[0]);T=(-T*I[0]+I[1]+A*K-La)/(A-T);A=A*(T-K)+La;if(T>I[0]){E.push([O(T),O(A),1]);ob=
true}}else isNaN(K)||E.push([K,La]);E[E.length-1]&&E[E.length-1][0]<jb&&E.push([jb,nb])}});for(r=0;r<y.length;r++)v.push(c?d-y[r][1]:y[r][0],c?e-y[r][0]:y[r][1]);for(r=R.length-1;r>=0;r--)v.push(c?d-R[r][1]:R[r][0],c?e-R[r][0]:R[r][1]);v.length||v.push(O(j[0].plotX),O(j[0].plotY));v.length&&k.push([v.join(",")])});return k},createArea:function(){if(this.options.enableMouseTracking!==false){var a,b=this,c=b.options,d=b.chart,e=d.tracker,f=b.getAreaCoords(),g=[],i=b.areas,k;i&&p(i,function(j){Ca(j)});
p(f,function(j){k=/^[0-9]+,[0-9]+$/.test(j[0]);a=V("area",{shape:k?"circle":"poly",chart:d,coords:j[0]+(k?","+d.options.tooltip.snap:""),onmouseover:function(){if(!(!b.visible||d.mouseIsDown)){var r=d.hoverSeries;d.hoverPoint=j[1];c.events.mouseOver&&na(b,"mouseOver",{point:d.hoverPoint});r&&r!=b&&r.setState();/(column|bar|pie)/.test(b.type)||e.insertAtFront(a);b.setState("hover");d.hoverSeries=b}},onmouseout:function(){var r=d.hoverSeries;r&&c.events.mouseOut&&na(r,"mouseOut")}});if(c.cursor=="pointer")a.href=
"javascript:;";e.insertAtFront(a);g.push(a)});b.areas=g}}};B=ab(Ja);bb.line=B;B=ab(Ja,{type:"area"});bb.area=B;B=ab(Ja,{type:"spline",translate:function(){var a=this;Ja.prototype.translate.apply(a,arguments);a.splinedata=a.getSplineData()},drawLine:function(){var a=this,b=a.segments;a.segments=a.splinedata;Ja.prototype.drawLine.apply(a,arguments);a.segments=b},getSplineData:function(){var a=this,b=a.chart,c=[],d;p(a.segments,function(e){if(a.xAxis.reversed)e=e.reverse();var f=[],g,i;p(e,function(k,
j){g=e[j+2]||e[j+1]||k;i=e[j-2]||e[j-1]||k;g.plotX>0&&i.plotY<b.plotWidth&&f.push(k)});if(f.length>1)d=O(Lb(b.plotWidth,f[f.length-1].clientX-f[0].clientX)/3);c.push(e.length>1?d?(new Tc(f)).get(d):[]:e)});return a.splinedata=c}});bb.spline=B;Tc.prototype={get:function(a){a||(a=50);var b=this.n;b=(this.xdata[b-1]-this.xdata[0])/(a-1);var c=[],d=[];c[0]=this.xdata[0];d[0]=this.ydata[0];for(var e=[{plotX:c[0],plotY:d[0]}],f=1;f<a;f++){c[f]=c[0]+f*b;d[f]=this.interpolate(c[f]);e[f]={plotX:c[f],plotY:d[f]}}return e},
interpolate:function(a){for(var b=this.n-1,c=0;b-c>1;){var d=(b+c)/2;if(this.xdata[Za(d)]>a)b=d;else c=d}b=Za(b);c=Za(c);d=this.xdata[b]-this.xdata[c];var e=(this.xdata[b]-a)/d;a=(a-this.xdata[c])/d;return e*this.ydata[c]+a*this.ydata[b]+((e*e*e-e)*this.y2[c]+(a*a*a-a)*this.y2[b])*d*d/6}};B=ab(B,{type:"areaspline"});bb.areaspline=B;var Vb=ab(Ja,{type:"column",init:function(){Ja.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&p(b.series,function(c){if(c.type==a.type)c.isDirty=
true})},translate:function(){var a=this,b=a.chart,c=0,d;Ja.prototype.translate.apply(a);p(b.series,function(C){if(C.type==a.type)if(C.options.stacking){Qa(d)||(d=c++);C.columnIndex=d}else C.columnIndex=c++});var e=a.options,f=a.data,g=b.inverted,i=b.plotWidth,k=b.plotHeight,j=a.closestPoints;j=Da(f[1]?f[j].plotX-f[j-1].plotX:g?k:i);var r=j*e.groupPadding,v=j-2*r;v=v/c;var y=e.pointWidth;e=Qa(y)?(v-y)/2:v*e.pointPadding;var R=da(y,v-2*e);b=(b.options.xAxis.reversed?c-a.columnIndex:a.columnIndex)||
0;var E=-(j/2)+r+b*v+e,K=a.yAxis.translate(0);p(f,function(C){C.plotX+=E;C.w=R;C.y0=(g?i:k)-K;C.h=(C.yBottom||C.y0)-C.plotY})},drawLine:function(){},getSymbol:function(){},drawPoints:function(a){var b=this,c=b.options,d=b.chart,e=c.animation&&b.animate,f=d.inverted,g=b.data,i=b.stateLayers[a];e&&this.animate(true);p(g,function(k){if(k.plotY!==ma)i.drawRect(f?k.h>=0?d.plotWidth-k.plotY-k.h:d.plotWidth-k.plotY:k.plotX,f?d.plotHeight-k.plotX-k.w:k.h>=0?k.plotY:k.plotY+k.h,f?Da(k.h):k.w,f?k.w:Da(k.h),
c.borderColor,c.borderWidth,c.borderRadius,k.color||b.color,c.shadow);k.selected&&b.drawPointState(k,"select",i)});e&&b.animate()},drawPointState:function(a,b,c){var d=this,e=d.chart,f=d.options,g=a?a.options:null,i=e.inverted;c=c||d.singlePointLayer;if(b=="hover"){if(!c)c=d.singlePointLayer=new pa("single-point",d.layerGroup.div);c.clear()}if(b&&this.options.states[b]){b=aa(f,f.states[b],g);c.drawRect(i?e.plotWidth-a.plotY-a.h:a.plotX,i?e.plotHeight-a.plotX-a.w:a.plotY,i?a.h:a.w,i?a.w:a.h,b.borderColor,
b.borderWidth,b.borderRadius,Bc(b.color||this.color).brighten(b.brightness).get(),b.shadow)}},getAreaCoords:function(){var a=[],b=this.chart,c=b.inverted;p(this.data,function(d){var e=Lb(Da(d.h),3)*(d.h<0?-1:1),f=c?b.plotWidth-d.plotY-e:d.plotX,g=c?b.plotHeight-d.plotX-d.w:d.plotY,i=g+(c?d.w:e);e=f+(c?e:d.w);if(!c&&Da(e-f)<1)e=f+1;else if(c&&Da(g-i)<1)g=i+1;a.push([qb([f,i,f,g,e,g,e,i],O).join(","),d])});return a},cleanData:function(){var a=this,b=a.data,c,d,e,f;Ja.prototype.cleanData.apply(a);for(f=
b.length-1;f>=0;f--)if(b[f-1]){c=b[f].x-b[f-1].x;if(d===ma||c<d){d=c;e=f}}a.closestPoints=e},animate:function(a){var b=this,c=b.chart,d=c.inverted,e=b.layerGroup.div;if(a)e.style[d?"left":"top"]=(d?-c.plotWidth:c.plotHeight)+F;else{Db(e,c.inverted?{left:0}:{top:0});b.animate=null}},remove:function(){var a=this,b=a.chart;b.hasRendered&&p(b.series,function(c){if(c.type==a.type)c.isDirty=true});Ja.prototype.remove.apply(a,arguments)}});bb.column=Vb;var Ic=ab(Vb,{type:"bar",init:function(a){a.inverted=
this.inverted=true;Vb.prototype.init.apply(this,arguments)}});bb.bar=Ic;B=ab(Ja,{type:"scatter",getAreaCoords:function(){var a=this.data,b=[];p(a,function(c){b.push([[O(c.plotX),O(c.plotY)].join(","),c])});return b},cleanData:function(){}});bb.scatter=B;B=ab(ic,{setState:function(a){this.series.drawPointState(this,a)},init:function(){ic.prototype.init.apply(this,arguments);var a=this,b=a.series,c=b.chart.options.colors;H(a,{visible:a.visible!==false,name:da(a.name,"Slice"),color:a.color||c[Bb++]});
if(Bb>=c.length)Bb=0;if(!a.layer)a.layer=new pa("pie",b.layerGroup.div);b=function(){a.slice()};Oa(a,"select",b);Oa(a,"unselect",b);return a},setVisible:function(a){var b=this,c=b.layer,d=b.legendItem;(b.visible=a=a===ma?!b.visible:a)?c.show():c.hide();if(d){d.className=a?"":Ob;b.series.chart.legend.drawGraphics(true)}},slice:function(a,b){var c=this,d=c.series;b=da(b,true);c.sliced=Qa(a)?a:!c.sliced;d.isDirty=true;b&&d.chart.redraw()}});B=ab(Ja,{type:"pie",isCartesian:false,pointClass:B,getColor:function(){},
translate:function(){var a=0,b=this,c=-0.25,d=b.options,e=d.slicedOffset,f=d.center,g=b.chart;b=b.data;var i=2*ta.PI,k;f.push(d.size);f=qb(f,function(j,r){return/%$/.test(j)?g["plot"+(r?"Height":"Width")]*parseInt(j)/100:j});p(b,function(j){a+=j.y});p(b,function(j){k=a?j.y/a:0;j.start=c*i;c+=k;j.end=c*i;j.percentage=k*100;j.center=[f[0],f[1]];j.size=f[2];var r=(j.end+j.start)/2;j.centerSliced=qb([gc(r)*e+f[0],hc(r)*e+f[1]],O)});this.setTooltipPoints()},render:function(){this.drawPoints();this.drawDataLabels()},
drawPoints:function(){var a=this;p(this.data,function(b){a.drawPoint(b,b.layer.getCtx(),b.color);b.visible===false&&b.setVisible(false);b.selected&&a.drawPointState(b,"select",b.layer)})},getSymbol:function(){},drawPointState:function(a,b,c){var d=this,e=d.options;if(a){c=c||a.stateLayer;if(b=="hover"){if(!c)c=a.stateLayer=new pa("single-point",a.layer.div);c.clear()}if(b&&d.options.states[b]){b=aa(e,e.states[b]);this.drawPoint(a,c.getCtx(),b.color||a.color,b.brightness)}}d.hoverPoint&&d.hoverPoint.stateLayer&&
d.hoverPoint.stateLayer.clear();d.hoverPoint=a},drawPoint:function(a,b,c,d){var e=this.options,f=a.sliced?a.centerSliced:a.center,g=f[0];f=f[1];var i=a.size,k=e.borderWidth,j=Ra&&a.percentage==100?a.start:a.end;if(a.y>0){b.fillStyle=Hb(Bc(c).brighten(d).get(b),b);b.strokeStyle=e.borderColor;b.lineWidth=k;b.beginPath();b.moveTo(g,f);b.arc(g,f,i/2,a.start,j,false);b.lineTo(g,f);b.closePath();b.fill();k&&b.stroke()}},getAreaCoords:function(){var a=[];p(this.data,function(b){for(var c=b.center[0],d=b.center[1],
e=b.size/2,f=b.start,g=b.end,i=[],k=f;k;k+=0.25){if(k>=g)k=g;i=i.concat([c+gc(k)*e,d+hc(k)*e]);if(k>=g)break}i=i.concat([c,d]);b.tooltipPos=[c+2*gc((f+g)/2)*e/3,d+2*hc((f+g)/2)*e/3];a.push([qb(i,O).join(","),b])});return a},setData:function(){var a=this,b=a.data,c;if(b)for(c=b.length-1;c>=0;c--)b[c].remove();Ja.prototype.setData.apply(a,arguments)},clear:function(){p(this.data,function(a){a.layer.clear();a.dataLabelsLayer&&a.dataLabelsLayer.clear();a.stateLayer&&a.stateLayer.clear()})}});bb.pie=B;
Highcharts={numberFormat:Wc,dateFormat:lc,defaultOptions:Ba,setOptions:Vc,Chart:Xc,extendClass:ab,seriesTypes:bb,Layer:pa}})();

// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
document.createElement("canvas").getContext||(function(){var s=Math,j=s.round,F=s.sin,G=s.cos,V=s.abs,W=s.sqrt,k=10,v=k/2;function X(){return this.context_||(this.context_=new H(this))}var L=Array.prototype.slice;function Y(b,a){var c=L.call(arguments,2);return function(){return b.apply(a,c.concat(L.call(arguments)))}}var M={init:function(b){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var a=b||document;a.createElement("canvas");a.attachEvent("onreadystatechange",Y(this.init_,this,a))}},init_:function(b){b.namespaces.g_vml_||
b.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");b.namespaces.g_o_||b.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");if(!b.styleSheets.ex_canvas_){var a=b.createStyleSheet();a.owningElement.id="ex_canvas_";a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}var c=b.getElementsByTagName("canvas"),d=0;for(;d<c.length;d++)this.initElement(c[d])},
initElement:function(b){if(!b.getContext){b.getContext=X;b.innerHTML="";b.attachEvent("onpropertychange",Z);b.attachEvent("onresize",$);var a=b.attributes;if(a.width&&a.width.specified)b.style.width=a.width.nodeValue+"px";else b.width=b.clientWidth;if(a.height&&a.height.specified)b.style.height=a.height.nodeValue+"px";else b.height=b.clientHeight}return b}};function Z(b){var a=b.srcElement;switch(b.propertyName){case "width":a.style.width=a.attributes.width.nodeValue+"px";a.getContext().clearRect();
break;case "height":a.style.height=a.attributes.height.nodeValue+"px";a.getContext().clearRect();break}}function $(b){var a=b.srcElement;if(a.firstChild){a.firstChild.style.width=a.clientWidth+"px";a.firstChild.style.height=a.clientHeight+"px"}}M.init();var N=[],B=0;for(;B<16;B++){var C=0;for(;C<16;C++)N[B*16+C]=B.toString(16)+C.toString(16)}function I(){return[[1,0,0],[0,1,0],[0,0,1]]}function y(b,a){var c=I(),d=0;for(;d<3;d++){var f=0;for(;f<3;f++){var h=0,g=0;for(;g<3;g++)h+=b[d][g]*a[g][f];c[d][f]=
h}}return c}function O(b,a){a.fillStyle=b.fillStyle;a.lineCap=b.lineCap;a.lineJoin=b.lineJoin;a.lineWidth=b.lineWidth;a.miterLimit=b.miterLimit;a.shadowBlur=b.shadowBlur;a.shadowColor=b.shadowColor;a.shadowOffsetX=b.shadowOffsetX;a.shadowOffsetY=b.shadowOffsetY;a.strokeStyle=b.strokeStyle;a.globalAlpha=b.globalAlpha;a.arcScaleX_=b.arcScaleX_;a.arcScaleY_=b.arcScaleY_;a.lineScale_=b.lineScale_}function P(b){var a,c=1;b=String(b);if(b.substring(0,3)=="rgb"){var d=b.indexOf("(",3),f=b.indexOf(")",d+
1),h=b.substring(d+1,f).split(",");a="#";var g=0;for(;g<3;g++)a+=N[Number(h[g])];if(h.length==4&&b.substr(3,1)=="a")c=h[3]}else a=b;return{color:a,alpha:c}}function aa(b){switch(b){case "butt":return"flat";case "round":return"round";case "square":default:return"square"}}function H(b){this.m_=I();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=k*1;this.globalAlpha=1;this.canvas=b;
var a=b.ownerDocument.createElement("div");a.style.width=b.clientWidth+"px";a.style.height=b.clientHeight+"px";a.style.overflow="hidden";a.style.position="absolute";b.appendChild(a);this.element_=a;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}var i=H.prototype;i.clearRect=function(){this.element_.innerHTML=""};i.beginPath=function(){this.currentPath_=[]};i.moveTo=function(b,a){var c=this.getCoords_(b,a);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};
i.lineTo=function(b,a){var c=this.getCoords_(b,a);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};i.bezierCurveTo=function(b,a,c,d,f,h){var g=this.getCoords_(f,h),l=this.getCoords_(b,a),e=this.getCoords_(c,d);Q(this,l,e,g)};function Q(b,a,c,d){b.currentPath_.push({type:"bezierCurveTo",cp1x:a.x,cp1y:a.y,cp2x:c.x,cp2y:c.y,x:d.x,y:d.y});b.currentX_=d.x;b.currentY_=d.y}i.quadraticCurveTo=function(b,a,c,d){var f=this.getCoords_(b,a),h=this.getCoords_(c,d),g={x:this.currentX_+
0.6666666666666666*(f.x-this.currentX_),y:this.currentY_+0.6666666666666666*(f.y-this.currentY_)};Q(this,g,{x:g.x+(h.x-this.currentX_)/3,y:g.y+(h.y-this.currentY_)/3},h)};i.arc=function(b,a,c,d,f,h){c*=k;var g=h?"at":"wa",l=b+G(d)*c-v,e=a+F(d)*c-v,m=b+G(f)*c-v,r=a+F(f)*c-v;if(l==m&&!h)l+=0.125;var n=this.getCoords_(b,a),o=this.getCoords_(l,e),q=this.getCoords_(m,r);this.currentPath_.push({type:g,x:n.x,y:n.y,radius:c,xStart:o.x,yStart:o.y,xEnd:q.x,yEnd:q.y})};i.rect=function(b,a,c,d){this.moveTo(b,
a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath()};i.strokeRect=function(b,a,c,d){var f=this.currentPath_;this.beginPath();this.moveTo(b,a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath();this.stroke();this.currentPath_=f};i.fillRect=function(b,a,c,d){var f=this.currentPath_;this.beginPath();this.moveTo(b,a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath();this.fill();this.currentPath_=f};i.createLinearGradient=function(b,
a,c,d){var f=new D("gradient");f.x0_=b;f.y0_=a;f.x1_=c;f.y1_=d;return f};i.createRadialGradient=function(b,a,c,d,f,h){var g=new D("gradientradial");g.x0_=b;g.y0_=a;g.r0_=c;g.x1_=d;g.y1_=f;g.r1_=h;return g};i.drawImage=function(b){var a,c,d,f,h,g,l,e,m=b.runtimeStyle.width,r=b.runtimeStyle.height;b.runtimeStyle.width="auto";b.runtimeStyle.height="auto";var n=b.width,o=b.height;b.runtimeStyle.width=m;b.runtimeStyle.height=r;if(arguments.length==3){a=arguments[1];c=arguments[2];h=g=0;l=d=n;e=f=o}else if(arguments.length==
5){a=arguments[1];c=arguments[2];d=arguments[3];f=arguments[4];h=g=0;l=n;e=o}else if(arguments.length==9){h=arguments[1];g=arguments[2];l=arguments[3];e=arguments[4];a=arguments[5];c=arguments[6];d=arguments[7];f=arguments[8]}else throw Error("Invalid number of arguments");var q=this.getCoords_(a,c),t=[];t.push(" <g_vml_:group",' coordsize="',k*10,",",k*10,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]){var E=[];E.push("M11=",
this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",j(q.x/k),",","Dy=",j(q.y/k),"");var p=q,z=this.getCoords_(a+d,c),w=this.getCoords_(a,c+f),x=this.getCoords_(a+d,c+f);p.x=s.max(p.x,z.x,w.x,x.x);p.y=s.max(p.y,z.y,w.y,x.y);t.push("padding:0 ",j(p.x/k),"px ",j(p.y/k),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",E.join(""),", sizingmethod='clip');")}else t.push("top:",j(q.y/k),"px;left:",j(q.x/k),"px;");t.push(' ">','<g_vml_:image src="',b.src,
'"',' style="width:',k*d,"px;"," height:",k*f,'px;"',' cropleft="',h/n,'"',' croptop="',g/o,'"',' cropright="',(n-h-l)/n,'"',' cropbottom="',(o-g-e)/o,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",t.join(""))};i.stroke=function(b){var a=[],c=P(b?this.fillStyle:this.strokeStyle),d=c.color,f=c.alpha*this.globalAlpha;a.push("<g_vml_:shape",' filled="',!!b,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0 0" coordsize="',k*10," ",k*10,'"',' stroked="',
!b,'"',' path="');var h={x:null,y:null},g={x:null,y:null},l=0;for(;l<this.currentPath_.length;l++){var e=this.currentPath_[l];switch(e.type){case "moveTo":a.push(" m ",j(e.x),",",j(e.y));break;case "lineTo":a.push(" l ",j(e.x),",",j(e.y));break;case "close":a.push(" x ");e=null;break;case "bezierCurveTo":a.push(" c ",j(e.cp1x),",",j(e.cp1y),",",j(e.cp2x),",",j(e.cp2y),",",j(e.x),",",j(e.y));break;case "at":case "wa":a.push(" ",e.type," ",j(e.x-this.arcScaleX_*e.radius),",",j(e.y-this.arcScaleY_*e.radius),
" ",j(e.x+this.arcScaleX_*e.radius),",",j(e.y+this.arcScaleY_*e.radius)," ",j(e.xStart),",",j(e.yStart)," ",j(e.xEnd),",",j(e.yEnd));break}if(e){if(h.x==null||e.x<h.x)h.x=e.x;if(g.x==null||e.x>g.x)g.x=e.x;if(h.y==null||e.y<h.y)h.y=e.y;if(g.y==null||e.y>g.y)g.y=e.y}}a.push(' ">');if(b)if(typeof this.fillStyle=="object"){var m=this.fillStyle,r=0,n={x:0,y:0},o=0,q=1;if(m.type_=="gradient"){var t=m.x1_/this.arcScaleX_,E=m.y1_/this.arcScaleY_,p=this.getCoords_(m.x0_/this.arcScaleX_,m.y0_/this.arcScaleY_),
z=this.getCoords_(t,E);r=Math.atan2(z.x-p.x,z.y-p.y)*180/Math.PI;if(r<0)r+=360;if(r<1.0E-6)r=0}else{var p=this.getCoords_(m.x0_,m.y0_),w=g.x-h.x,x=g.y-h.y;n={x:(p.x-h.x)/w,y:(p.y-h.y)/x};w/=this.arcScaleX_*k;x/=this.arcScaleY_*k;var R=s.max(w,x);o=2*m.r0_/R;q=2*m.r1_/R-o}var u=m.colors_;u.sort(function(ba,ca){return ba.offset-ca.offset});var J=u.length,da=u[0].color,ea=u[J-1].color,fa=u[0].alpha*this.globalAlpha,ga=u[J-1].alpha*this.globalAlpha,S=[],l=0;for(;l<J;l++){var T=u[l];S.push(T.offset*q+
o+" "+T.color)}a.push('<g_vml_:fill type="',m.type_,'"',' method="none" focus="100%"',' color="',da,'"',' color2="',ea,'"',' colors="',S.join(","),'"',' opacity="',ga,'"',' g_o_:opacity2="',fa,'"',' angle="',r,'"',' focusposition="',n.x,",",n.y,'" />')}else a.push('<g_vml_:fill color="',d,'" opacity="',f,'" />');else{var K=this.lineScale_*this.lineWidth;if(K<1)f*=K;a.push("<g_vml_:stroke",' opacity="',f,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',aa(this.lineCap),
'"',' weight="',K,'px"',' color="',d,'" />')}a.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",a.join(""))};i.fill=function(){this.stroke(true)};i.closePath=function(){this.currentPath_.push({type:"close"})};i.getCoords_=function(b,a){var c=this.m_;return{x:k*(b*c[0][0]+a*c[1][0]+c[2][0])-v,y:k*(b*c[0][1]+a*c[1][1]+c[2][1])-v}};i.save=function(){var b={};O(this,b);this.aStack_.push(b);this.mStack_.push(this.m_);this.m_=y(I(),this.m_)};i.restore=function(){O(this.aStack_.pop(),
this);this.m_=this.mStack_.pop()};function ha(b){var a=0;for(;a<3;a++){var c=0;for(;c<2;c++)if(!isFinite(b[a][c])||isNaN(b[a][c]))return false}return true}function A(b,a,c){if(!!ha(a)){b.m_=a;if(c)b.lineScale_=W(V(a[0][0]*a[1][1]-a[0][1]*a[1][0]))}}i.translate=function(b,a){A(this,y([[1,0,0],[0,1,0],[b,a,1]],this.m_),false)};i.rotate=function(b){var a=G(b),c=F(b);A(this,y([[a,c,0],[-c,a,0],[0,0,1]],this.m_),false)};i.scale=function(b,a){this.arcScaleX_*=b;this.arcScaleY_*=a;A(this,y([[b,0,0],[0,a,
0],[0,0,1]],this.m_),true)};i.transform=function(b,a,c,d,f,h){A(this,y([[b,a,0],[c,d,0],[f,h,1]],this.m_),true)};i.setTransform=function(b,a,c,d,f,h){A(this,[[b,a,0],[c,d,0],[f,h,1]],true)};i.clip=function(){};i.arcTo=function(){};i.createPattern=function(){return new U};function D(b){this.type_=b;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}D.prototype.addColorStop=function(b,a){a=P(a);this.colors_.push({offset:b,color:a.color,alpha:a.alpha})};function U(){}G_vmlCanvasManager=
M;CanvasRenderingContext2D=H;CanvasGradient=D;CanvasPattern=U})();

