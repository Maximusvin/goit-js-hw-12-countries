(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5aCR":function(n,t,e){},OPH6:function(n,t,e){},QfWi:function(n,t,e){"use strict";e.r(t);e("5aCR"),e("OPH6"),e("IlJM"),e("RtS0"),e("D/wG"),e("SgDD"),e("3dw1");var l=e("QJ3N"),a=(e("bzha"),e("zrP5"),l.error),r={countryContainer:document.querySelector(".country__container"),input:document.querySelector("#input"),inputMessage:document.querySelector(".input-message"),inputList:document.querySelector(".input-list")};e("JBxO"),e("FdtR");var o=function(n){return fetch("https://restcountries.eu/rest/v2/name/"+n).then((function(n){if(n.ok)return n.json()}))},u=e("wp6r"),i=e.n(u),c=e("jffb");function s(n){var t=i()(n);r.countryContainer.insertAdjacentHTML("beforeend",t)}function p(){r.input.value="",r.inputMessage.innerHTML="",r.inputList.innerHTML="",r.countryContainer.innerHTML=""}function f(n){p();r.inputMessage.insertAdjacentHTML("beforeend","Не корректный запрос. Повторите попытку еще раз")}r.input.addEventListener("input",c((function(n){var t=n.target.value.trim();if(!t)return void f();e=t,o(e).then((function(n){return function(n){if(console.log(n),n.length<2&&(p(),s(n)),n.length>=2&&n.length<=10&&(p(),n.forEach((function(n){r.inputList.insertAdjacentHTML("beforeend","<li>"+n.name+"</li>")})),r.inputList.addEventListener("click",(function(t){p();var e=r.input.value=t.target.textContent;s({country:n.find((function(n){return n.name===e}))})}))),n.length>10){p();var t="Найдено слишком много совпадений, уточните ваш запрос";r.inputMessage.insertAdjacentHTML("beforeend",t),a({title:"Ошибка",text:t,delay:2e3})}}(n)})).catch((function(n){return f(n)}));var e}),1e3))},wp6r:function(n,t,e){var l=e("mp5j");n.exports=(l.default||l).template({1:function(n,t,e,l,a){var r,o,u=null!=t?t:n.nullContext||{},i=n.hooks.helperMissing,c="function",s=n.escapeExpression,p=n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]};return'<h2 class="country__title-name">'+s(typeof(o=null!=(o=p(e,"name")||(null!=t?p(t,"name"):t))?o:i)===c?o.call(u,{name:"name",hash:{},data:a,loc:{start:{line:2,column:32},end:{line:2,column:40}}}):o)+'</h2>\r\n<div class="country__box">\r\n    <div class="country__content">\r\n        <p class="country__text">\r\n            <span>Capital:</span> '+s(typeof(o=null!=(o=p(e,"capital")||(null!=t?p(t,"capital"):t))?o:i)===c?o.call(u,{name:"capital",hash:{},data:a,loc:{start:{line:6,column:34},end:{line:6,column:45}}}):o)+'\r\n        </p>\r\n        <p class="country__text">\r\n            <span>Population:</span> '+s(typeof(o=null!=(o=p(e,"population")||(null!=t?p(t,"population"):t))?o:i)===c?o.call(u,{name:"population",hash:{},data:a,loc:{start:{line:9,column:37},end:{line:9,column:51}}}):o)+'\r\n        </p>\r\n        <p class="country__text">\r\n            <span>Languages:</span>\r\n        <ul class="country__languages-list">\r\n'+(null!=(r=p(e,"each").call(u,null!=t?p(t,"languages"):t,{name:"each",hash:{},fn:n.program(2,a,0),inverse:n.noop,data:a,loc:{start:{line:14,column:12},end:{line:16,column:21}}}))?r:"")+'        </ul>\r\n        </p>\r\n\r\n\r\n    </div>\r\n    <img src="'+s(typeof(o=null!=(o=p(e,"flag")||(null!=t?p(t,"flag"):t))?o:i)===c?o.call(u,{name:"flag",hash:{},data:a,loc:{start:{line:22,column:14},end:{line:22,column:22}}}):o)+'" alt="'+s(typeof(o=null!=(o=p(e,"demonym")||(null!=t?p(t,"demonym"):t))?o:i)===c?o.call(u,{name:"demonym",hash:{},data:a,loc:{start:{line:22,column:29},end:{line:22,column:40}}}):o)+'" class="country__img">\r\n</div>\r\n'},2:function(n,t,e,l,a){var r=n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]};return"            <li>"+n.escapeExpression(n.lambda(null!=t?r(t,"name"):t,t))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,t,e,l,a){var r;return null!=(r=(n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]})(e,"each").call(null!=t?t:n.nullContext||{},t,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:0},end:{line:24,column:9}}}))?r:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.1bceec805e4e698c83ce.js.map