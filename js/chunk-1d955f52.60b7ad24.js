(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d955f52"],{"76ad":function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_image",(function(){return f}));var r=n("6260"),o=n("36de"),i=n("f036"),c=(n("807c"),n("9755"),n("c064")),a=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function c(e){try{u(r.next(e))}catch(t){i(t)}}function a(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(c,a)}u((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(c)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(o=c.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},s=":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}",l=new o["a"]("S3Image"),f=function(){function e(e){Object(r["k"])(this,e),this.contentType="binary/octet-stream",this.level=i["a"].Public}return e.prototype.watchHandler=function(){return a(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),[2]}}))}))},e.prototype.componentWillLoad=function(){return a(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),[2]}}))}))},e.prototype.load=function(){return a(this,void 0,void 0,(function(){var e,t,n,r,o,i,a,s,f,h,d;return u(this,(function(u){switch(u.label){case 0:if(e=this,t=e.imgKey,n=e.path,r=e.body,o=e.contentType,i=e.level,a=e.track,s=e.identityId,!t&&!n)return l.debug("empty imgKey and path"),[2];f=t||n,l.debug("loading "+f+"..."),u.label=1;case 1:return u.trys.push([1,5,,6]),r?[4,Object(c["e"])(t,r,i,a,o,l)]:[3,3];case 2:u.sent(),u.label=3;case 3:return h=this,[4,Object(c["c"])(f,i,a,s,l)];case 4:return h.src=u.sent(),[3,6];case 5:throw d=u.sent(),l.debug(d),new Error(d);case 6:return[2]}}))}))},e.prototype.render=function(){return Object(r["i"])(r["b"],null,this.src&&Object(r["i"])("img",{src:this.src,onLoad:this.handleOnLoad,onError:this.handleOnError}))},Object.defineProperty(e,"watchers",{get:function(){return{body:["watchHandler"]}},enumerable:!1,configurable:!0}),e}();f.style=s},c064:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return h}));var r=n("807c"),o=n("9755"),i=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function c(e){try{u(r.next(e))}catch(t){i(t)}}function a(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(c,a)}u((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(c)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(o=c.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},a=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),u=function(e,t){var n=e.name,r=e.size,o=e.type,i=encodeURI(n);return t&&(i="string"===typeof t?t:"function"===typeof t?t({name:n,size:r,type:o}):encodeURI(JSON.stringify(t)),i||(i="empty_key")),i.replace(/\s/g,"_")},s=function(e,t,n,a,u){return i(void 0,void 0,void 0,(function(){var i,s;return c(this,(function(c){switch(c.label){case 0:if(!o["a"]||"function"!==typeof o["a"].get)throw new Error(r["m"]);c.label=1;case 1:return c.trys.push([1,3,,4]),[4,o["a"].get(e,{level:t,track:n,identityId:a})];case 2:return i=c.sent(),u.debug("Storage image get",i),[2,i];case 3:throw s=c.sent(),new Error(s);case 4:return[2]}}))}))},l=function(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=function(){n("Failed to read file!"),r.abort()},r.readAsText(e)}))},f=function(e,t,n,a,u){return i(void 0,void 0,void 0,(function(){var i,s,f;return c(this,(function(c){switch(c.label){case 0:if(!o["a"]||"function"!==typeof o["a"].get)throw new Error(r["m"]);c.label=1;case 1:return c.trys.push([1,4,,5]),[4,o["a"].get(e,{download:!0,level:t,track:n,identityId:a})];case 2:return i=c.sent(),u.debug(i),[4,l(i["Body"])];case 3:return s=c.sent(),[2,s];case 4:throw f=c.sent(),new Error(f);case 5:return[2]}}))}))},h=function(e,t,n,a,u,s){return i(void 0,void 0,void 0,(function(){var i,l;return c(this,(function(c){switch(c.label){case 0:if(!o["a"]||"function"!==typeof o["a"].put)throw new Error(r["m"]);c.label=1;case 1:return c.trys.push([1,3,,4]),[4,o["a"].put(e,t,{contentType:u,level:n,track:a})];case 2:return i=c.sent(),s.debug("Upload data",i),[3,4];case 3:throw l=c.sent(),new Error(l);case 4:return[2]}}))}))}}}]);
//# sourceMappingURL=chunk-1d955f52.60b7ad24.js.map