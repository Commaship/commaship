!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e,n){t.exports=n(7)},function(t,e,n){},function(t,e,n){var r;r=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";t.exports=function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=n(5),i=n(7),a=n(4),s=function(){function t(e,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,u=void 0===c?.6:c,l=n.maxPatternLength,h=void 0===l?32:l,f=n.isCaseSensitive,p=void 0!==f&&f,d=n.tokenSeparator,v=void 0===d?/ +/g:d,y=n.findAllMatches,m=void 0!==y&&y,g=n.minMatchCharLength,w=void 0===g?1:g;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={location:o,distance:s,threshold:u,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:v,findAllMatches:m,minMatchCharLength:w},this.pattern=this.options.isCaseSensitive?e:e.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=a(this.pattern))}return r(t,[{key:"search",value:function(t){if(this.options.isCaseSensitive||(t=t.toLowerCase()),this.pattern===t)return{isMatch:!0,score:0,matchedIndices:[[0,t.length-1]]};var e=this.options,n=e.maxPatternLength,r=e.tokenSeparator;if(this.pattern.length>n)return o(t,this.pattern,r);var a=this.options,s=a.location,c=a.distance,u=a.threshold,l=a.findAllMatches,h=a.minMatchCharLength;return i(t,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:u,findAllMatches:l,minMatchCharLength:h})}}]),t}();t.exports=s},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){return function t(e,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=e[a];if(null!==c&&void 0!==c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var u=0,l=c.length;u<l;u+=1)t(c[u],s,o);else s&&t(c,s,o);else o.push(c.toString())}else o.push(e);return o}(t,e,[])}},function(t,e,n){"use strict";t.exports=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=t.length;i<a;i+=1){var s=t[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=e&&n.push([r,o]),r=-1)}return t[i-1]&&i-r>=e&&n.push([r,i-1]),n}},function(t,e,n){"use strict";t.exports=function(t){for(var e={},n=t.length,r=0;r<n;r+=1)e[t.charAt(r)]=0;for(var o=0;o<n;o+=1)e[t.charAt(o)]|=1<<n-o-1;return e}},function(t,e,n){"use strict";var r=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(e.replace(r,"\\$&").replace(n,"|")),i=t.match(o),a=!!i,s=[];if(a)for(var c=0,u=i.length;c<u;c+=1){var l=i[c];s.push([t.indexOf(l),l.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(t,e,n){"use strict";t.exports=function(t,e){var n=e.errors,r=void 0===n?0:n,o=e.currentLocation,i=void 0===o?0:o,a=e.expectedLocation,s=void 0===a?0:a,c=e.distance,u=void 0===c?100:c,l=r/t.length,h=Math.abs(s-i);return u?l+h/u:h?1:l}},function(t,e,n){"use strict";var r=n(6),o=n(3);t.exports=function(t,e,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,u=void 0===c?100:c,l=i.threshold,h=void 0===l?.6:l,f=i.findAllMatches,p=void 0!==f&&f,d=i.minMatchCharLength,v=void 0===d?1:d,y=s,m=t.length,g=h,w=t.indexOf(e,y),x=e.length,k=[],b=0;b<m;b+=1)k[b]=0;if(-1!==w){var _=r(e,{errors:0,currentLocation:w,expectedLocation:y,distance:u});if(g=Math.min(_,g),-1!==(w=t.lastIndexOf(e,y+x))){var S=r(e,{errors:0,currentLocation:w,expectedLocation:y,distance:u});g=Math.min(S,g)}}w=-1;for(var L=[],C=1,O=x+m,P=1<<x-1,M=0;M<x;M+=1){for(var E=0,A=O;E<A;){r(e,{errors:M,currentLocation:y+A,expectedLocation:y,distance:u})<=g?E=A:O=A,A=Math.floor((O-E)/2+E)}O=A;var j=Math.max(1,y-A+1),I=p?m:Math.min(y+A,m)+x,T=Array(I+2);T[I+1]=(1<<M)-1;for(var $=I;$>=j;$-=1){var q=$-1,R=n[t.charAt(q)];if(R&&(k[q]=1),T[$]=(T[$+1]<<1|1)&R,0!==M&&(T[$]|=(L[$+1]|L[$])<<1|1|L[$+1]),T[$]&P&&(C=r(e,{errors:M,currentLocation:q,expectedLocation:y,distance:u}))<=g){if(g=C,(w=q)<=y)break;j=Math.max(1,2*y-w)}}if(r(e,{errors:M+1,currentLocation:y,expectedLocation:y,distance:u})>g)break;L=T}return{isMatch:w>=0,score:0===C?.001:C,matchedIndices:o(k,v)}}},function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=n(1),i=n(2),a=n(0),s=function(){function t(e,n){var r=n.location,o=void 0===r?0:r,a=n.distance,s=void 0===a?100:a,c=n.threshold,u=void 0===c?.6:c,l=n.maxPatternLength,h=void 0===l?32:l,f=n.caseSensitive,p=void 0!==f&&f,d=n.tokenSeparator,v=void 0===d?/ +/g:d,y=n.findAllMatches,m=void 0!==y&&y,g=n.minMatchCharLength,w=void 0===g?1:g,x=n.id,k=void 0===x?null:x,b=n.keys,_=void 0===b?[]:b,S=n.shouldSort,L=void 0===S||S,C=n.getFn,O=void 0===C?i:C,P=n.sortFn,M=void 0===P?function(t,e){return t.score-e.score}:P,E=n.tokenize,A=void 0!==E&&E,j=n.matchAllTokens,I=void 0!==j&&j,T=n.includeMatches,$=void 0!==T&&T,q=n.includeScore,R=void 0!==q&&q,N=n.verbose,D=void 0!==N&&N;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={location:o,distance:s,threshold:u,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:v,findAllMatches:m,minMatchCharLength:w,id:k,keys:_,includeMatches:$,includeScore:R,shouldSort:L,getFn:O,sortFn:M,verbose:D,tokenize:A,matchAllTokens:I},this.setCollection(e)}return r(t,[{key:"setCollection",value:function(t){return this.list=t,t}},{key:"search",value:function(t){this._log('---------\nSearch pattern: "'+t+'"');var e=this._prepareSearchers(t),n=e.tokenSearchers,r=e.fullSearcher,o=this._search(n,r),i=o.weights,a=o.results;return this._computeScore(i,a),this.options.shouldSort&&this._sort(a),this._format(a)}},{key:"_prepareSearchers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=[];if(this.options.tokenize)for(var n=t.split(this.options.tokenSeparator),r=0,i=n.length;r<i;r+=1)e.push(new o(n[r],this.options));return{tokenSearchers:e,fullSearcher:new o(t,this.options)}}},{key:"_search",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1],n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:t,fullSearcher:e});return{weights:null,results:o}}for(var s={},c=0,u=n.length;c<u;c+=1)for(var l=n[c],h=0,f=this.options.keys.length;h<f;h+=1){var p=this.options.keys[h];if("string"!=typeof p){if(s[p.name]={weight:1-p.weight||1},p.weight<=0||p.weight>1)throw new Error("Key weight has to be > 0 and <= 1");p=p.name}else s[p]={weight:1};this._analyze({key:p,value:this.options.getFn(l,p),record:l,index:c},{resultMap:r,results:o,tokenSearchers:t,fullSearcher:e})}return{weights:s,results:o}}},{key:"_analyze",value:function(t,e){var n=t.key,r=t.arrayIndex,o=void 0===r?-1:r,i=t.value,s=t.record,c=t.index,u=e.tokenSearchers,l=void 0===u?[]:u,h=e.fullSearcher,f=void 0===h?[]:h,p=e.resultMap,d=void 0===p?{}:p,v=e.results,y=void 0===v?[]:v;if(void 0!==i&&null!==i){var m=!1,g=-1,w=0;if("string"==typeof i){this._log("\nKey: "+(""===n?"-":n));var x=f.search(i);if(this._log('Full text: "'+i+'", score: '+x.score),this.options.tokenize){for(var k=i.split(this.options.tokenSeparator),b=[],_=0;_<l.length;_+=1){var S=l[_];this._log('\nPattern: "'+S.pattern+'"');for(var L=!1,C=0;C<k.length;C+=1){var O=k[C],P=S.search(O),M={};P.isMatch?(M[O]=P.score,m=!0,L=!0,b.push(P.score)):(M[O]=1,this.options.matchAllTokens||b.push(1)),this._log('Token: "'+O+'", score: '+M[O])}L&&(w+=1)}g=b[0];for(var E=b.length,A=1;A<E;A+=1)g+=b[A];g/=E,this._log("Token score average:",g)}var j=x.score;g>-1&&(j=(j+g)/2),this._log("Score average:",j);var I=!this.options.tokenize||!this.options.matchAllTokens||w>=l.length;if(this._log("\nCheck Matches: "+I),(m||x.isMatch)&&I){var T=d[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:j,matchedIndices:x.matchedIndices}):(d[c]={item:s,output:[{key:n,arrayIndex:o,value:i,score:j,matchedIndices:x.matchedIndices}]},y.push(d[c]))}}else if(a(i))for(var $=0,q=i.length;$<q;$+=1)this._analyze({key:n,arrayIndex:$,value:i[$],record:s,index:c},{resultMap:d,results:y,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(t,e){this._log("\n\nComputing score:\n");for(var n=0,r=e.length;n<r;n+=1){for(var o=e[n].output,i=o.length,a=0,s=1,c=0;c<i;c+=1){var u=t?t[o[c].key].weight:1,l=(1===u?o[c].score:o[c].score||.001)*u;1!==u?s=Math.min(s,l):(o[c].nScore=l,a+=l)}e[n].score=1===s?a/i:s,this._log(e[n])}}},{key:"_sort",value:function(t){this._log("\n\nSorting...."),t.sort(this.options.sortFn)}},{key:"_format",value:function(t){var e=[];this._log("\n\nOutput:\n\n",JSON.stringify(t));var n=[];this.options.includeMatches&&n.push(function(t,e){var n=t.output;e.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),e.matches.push(a)}}}),this.options.includeScore&&n.push(function(t,e){e.score=t.score});for(var r=0,o=t.length;r<o;r+=1){var i=t[r];if(this.options.id&&(i.item=this.options.getFn(i.item,this.options.id)[0]),n.length){for(var a={item:i.item},s=0,c=n.length;s<c;s+=1)n[s](i,a);e.push(a)}else e.push(i.item)}return e}},{key:"_log",value:function(){var t;this.options.verbose&&(t=console).log.apply(t,arguments)}}]),t}();t.exports=s}])},t.exports=r()},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(2),a=n.n(i);function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u={Question:function t(e){c(this,t),this.text=e},Dialogue:function(){function t(e){c(this,t),this._generator=e}var e,n,r;return e=t,(n=[{key:"run",value:function(){return this._generator()}}])&&s(e.prototype,n),r&&s(e,r),t}()};function l(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t,e){try{var n=i[t](e),a=n.value}catch(t){return void o(t)}n.done?r(a):Promise.resolve(a).then(s,c)}function s(t){a("next",t)}function c(t){a("throw",t)}s()})}}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=[],d={shouldSort:!0,tokenize:!0,matchAllTokens:!0,findAllMatches:!0,includeMatches:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["label"]};function v(t,e){return e=Array.from(e),Promise.all(e.map(function(e){return void 0===e.filter||e.filter(t)})).then(function(t){return e.filter(function(e,n){return t[n]})})}window.commaship=h({register:function(t,e){if("string"!=typeof t||!t.length)throw"invalid commaship package name";if(!Array.isArray(e)||!e.length)throw"invalid commaship commands definition";p=p.concat(e.map(function(e){return h({},e,{id:t+"_"+e.id,description:"".concat(e.description||""," [").concat(t,"]")})}))}},u);var y,m,g,w,x={created:function(){window.addEventListener("keydown",this.handler)},destroyed:function(){},watch:{selected:function(){var t=this.$refs.resultboxes[this.selected];t&&t.scrollIntoViewIfNeeded()}},methods:{handler:function(t){(t.ctrlKey||t.metaKey)&&t.shiftKey&&80===t.keyCode&&(t.preventDefault(),this.open())},open:(w=l(o.a.mark(function t(){var e,n=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.query="",this.visible=!0,this.selected=0,this.question=null,this.display=null,this.results=[],setTimeout(function(){return n.$refs.input.focus()},0),t.next=9,this.showItems(p);case 9:e=t.sent;case 10:if(!e){t.next=16;break}return t.next=13,this.handleCommandResponse(e);case 13:e=t.sent,t.next=10;break;case 16:this.close();case 17:case"end":return t.stop()}},t,this)})),function(){return w.apply(this,arguments)}),close:function(){this.visible=!1},handleCommandResponse:(g=l(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!Array.isArray(e)){t.next=6;break}return t.next=3,this.showItems(e);case 3:return t.abrupt("return",t.sent);case 6:if("string"!=typeof e){t.next=12;break}return t.next=9,this.showDisplay(e);case 9:return t.abrupt("return",t.sent);case 12:if(!(e instanceof u.Dialogue)){t.next=18;break}return t.next=15,this.runDialogue(e);case 15:return t.abrupt("return",t.sent);case 18:if(!(e instanceof u.Question)){t.next=22;break}return t.next=21,this.askQuestion(e);case 21:return t.abrupt("return",t.sent);case 22:case"end":return t.stop()}},t,this)})),function(t){return g.apply(this,arguments)}),runDialogue:function(t){var e=this;return new Promise(function(){var n=l(o.a.mark(function n(r,i){var a,s,c,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a=t.run(),s=void 0;case 2:return n.next=5,a.next(s);case 5:if(c=n.sent,u=c.value,!c.done){n.next=17;break}return n.t0=r,n.next=12,e.handleCommandResponse(u);case 12:return n.t1=n.sent,(0,n.t0)(n.t1),n.abrupt("break",22);case 17:return n.next=19,e.handleCommandResponse(u);case 19:s=n.sent;case 20:n.next=2;break;case 22:case"end":return n.stop()}},n,this)}));return function(t,e){return n.apply(this,arguments)}}())},showItems:(m=l(o.a.mark(function t(e){var n=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(this.$root,e);case 2:return e=t.sent,this.fuse=new a.a(e,d),this.results=e,this.selected=0,this.query="",t.abrupt("return",new Promise(function(t,e){n.onAction=function(e){delete n.onAction,"function"==typeof e.action?t(e.action(n.$root)):t(e.id)}}));case 8:case"end":return t.stop()}},t,this)})),function(t){return m.apply(this,arguments)}),exec:(y=l(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.results[e]&&this.onAction(this.results[e]);case 1:case"end":return t.stop()}},t,this)})),function(t){return y.apply(this,arguments)}),askQuestion:function(t){var e=this;return this.results=[],this.question=t,setTimeout(function(){return e.$refs.questionInput.focus()},0),new Promise(function(t,n){e.question.onAnswer=function(e){t(e)}})},answerQuestion:function(){this.question.onAnswer(this.answer),this.question=null,this.answer=null},showDisplay:function(t){var e=this;return this.display=t,setTimeout(function(){return e.$refs.displayArea.focus()},0),new Promise(function(t,n){e.onDisplayOk=t})},displayOk:function(){this.onDisplayOk&&(this.display=null,this.onDisplayOk(),delete this.onDisplayOk)},selectNext:function(){this.selected=Math.min(this.results.length-1,this.selected+1)},selectPrevious:function(){this.selected=Math.max(0,this.selected-1)},search:function(){var t=this.query.trim();if(t.length){var e=this.fuse.search(t);this.results=e.map(function(t){return h({},t.item,{matches:t.matches})})}else this.results=this.fuse.list;this.selected=0},highlight:function(t){var e=[];if(t.matches.length){for(var n=[].concat(t.matches[0].indices),r=n.shift(),o=0;o<t.label.length;o++)r&&o==r[0]&&e.push("<b>"),e.push(t.label.charAt(o)),r&&o==r[1]&&(e.push("</b>"),r=n.shift());return e.join("")}return t.label}},data:function(){return{visible:!1,query:"",results:p,selected:0,fuse:null,question:null,answer:null,display:null}}};n(5);var k=function(t,e,n,r,o,i,a,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.visible?n("div",{staticClass:"commaship-overlay",on:{click:t.close,keydown:function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.close(e):null}}},[t.display?n("div",{staticClass:"commaship-display",on:{click:function(t){t.stopPropagation()}}},[n("pre",{ref:"displayArea",attrs:{tabindex:"0"},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.displayOk()}}},[t._v(t._s(t.display))]),t._v(" "),n("kirby-button",{ref:"displayOkButton",on:{click:function(e){t.displayOk()}}},[t._v("Ok")])],1):n("div",{staticClass:"commaship-box",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"commaship-input"},[t.question?n("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],ref:"questionInput",attrs:{type:"text"},domProps:{value:t.answer},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.answerQuestion()},input:function(e){e.target.composing||(t.answer=e.target.value)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"input",attrs:{type:"text",default:"Commaship - enter commands here"},domProps:{value:t.query},on:{input:[function(e){e.target.composing||(t.query=e.target.value)},t.search],keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.exec(t.selected)},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.selectNext(e):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.selectPrevious(e):null},function(e){return"button"in e||!t._k(e.keyCode,"tab",9,e.key,"Tab")?(e.preventDefault(),t.selectNext(e)):null},function(e){return("button"in e||!t._k(e.keyCode,"tab",9,e.key,"Tab"))&&e.shiftKey?(e.preventDefault(),t.selectPrevious(e)):null}]}})]),t._v(" "),t.question?n("div",{staticClass:"commaship-question-text"},[t._v("\n      "+t._s(t.question.text)+"\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"commaship-results-box"},[n("ul",t._l(t.results,function(e,r){return n("li",{key:e.id,ref:"resultboxes",refInFor:!0,staticClass:"commaship-result",attrs:{"data-selected":t.selected===r},on:{click:function(e){t.exec(r)}}},[e.matches?n("div",{staticClass:"commaship-result-label",domProps:{innerHTML:t._s(t.highlight(e))}}):n("div",{staticClass:"commaship-result-label"},[t._v(t._s(e.label))]),t._v(" "),e.description?n("div",{staticClass:"commaship-description"},[t._v(t._s(e.description))]):t._e()])}))])])]):t._e()},[],!1,null,"7f40a9bb",null).exports,b={install:function(t,e){var n=t.extend(k);t.mixin({mounted:function(){if(this===this.$root){var t=new n({propsData:{},parent:this});t.$mount(),this.$el.appendChild(t.$el)}}})}};function _(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t,e){try{var n=i[t](e),a=n.value}catch(t){return void o(t)}n.done?r(a):Promise.resolve(a).then(s,c)}function s(t){a("next",t)}function c(t){a("throw",t)}s()})}}function S(t,e){return L.apply(this,arguments)}function L(){return(L=_(o.a.mark(function t(e,n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.post("commaship/install",{"pkg-id":n.id});case 2:window.location.reload();case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function C(t,e){return O.apply(this,arguments)}function O(){return(O=_(o.a.mark(function t(e,n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.post("commaship/uninstall",{"pkg-id":n.id});case 2:window.location.reload();case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function P(){return(P=_(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=_(o.a.mark(function t(n,r){var i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.get("commaship/install-list");case 2:i=t.sent,n(i.map(function(t){return t.action=function(e){return S(e,t)},t}));case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function M(){return(M=_(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=_(o.a.mark(function t(n,r){var i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.get("commaship/uninstall-list");case 2:i=t.sent,n(i.map(function(t){return t.action=function(e){return C(e,t)},t}));case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}if(window.commaship){var E=function(t){return void 0===A&&(A=t.$api.get("commaship/is-manager").then(function(t){return t.manager}),setTimeout(function(){A=void 0},0)),A},A=void 0;commaship.register("Package Manager",[{id:"install",action:function(t){return P.apply(this,arguments)},label:"Install Package",filter:E},{id:"uninstall",action:function(t){return M.apply(this,arguments)},label:"Remove Package",filter:E}])}else console.warn("Commaship not loaded");panel.plugin("rasteiner/kn-commaship",{use:[b]})},,function(t,e,n){"use strict";var r=n(1);n.n(r).a},function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=x;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={},y={};y[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(A([])));g&&g!==r&&o.call(g,a)&&(y=g);var w=S.prototype=b.prototype=Object.create(y);_.prototype=w.constructor=S,S.constructor=_,S[c]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},L(C.prototype),C.prototype[s]=function(){return this},l.AsyncIterator=C,l.async=function(t,e,n,r){var o=new C(x(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},L(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=A,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function x(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r=h;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=k(t,e,n);if("normal"===c.type){if(r=n.done?d:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function k(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function b(){}function _(){}function S(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function C(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,a){var s=k(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=k(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(6),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e,n){t.exports=n(3)}])});