(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d845e6da"],{"4e6f":function(e,t,r){"use strict";r.r(t),r.d(t,"amplify_s3_album",(function(){return E}));var n,i=r("6260"),o=r("36de"),a=r("1f3a"),c=r("2482"),u=r("f036"),s=r("6c18"),l=r("807c"),f=r("9755"),p=r("c064"),d=function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function a(e){try{u(n.next(e))}catch(t){o(t)}}function c(e){try{u(n["throw"](e))}catch(t){o(t)}}function u(e){e.done?r(e.value):i(e.value).then(a,c)}u((n=n.apply(e,t||[])).next())}))},h=function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(e){return function(t){return u([e,t])}}function u(o){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(i=2&o[0]?n["return"]:o[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},y=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,c=o.length;a<c;a++,i++)n[i]=o[a];return n},b=new Uint8Array(16);function m(){if(!n&&(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(b)}var g=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function v(e){return"string"===typeof e&&g.test(e)}for(var w=[],k=0;k<256;++k)w.push((k+256).toString(16).substr(1));function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(w[e[t+0]]+w[e[t+1]]+w[e[t+2]]+w[e[t+3]]+"-"+w[e[t+4]]+w[e[t+5]]+"-"+w[e[t+6]]+w[e[t+7]]+"-"+w[e[t+8]]+w[e[t+9]]+"-"+w[e[t+10]]+w[e[t+11]]+w[e[t+12]]+w[e[t+13]]+w[e[t+14]]+w[e[t+15]]).toLowerCase();if(!v(r))throw TypeError("Stringified UUID is invalid");return r}function j(e,t,r){e=e||{};var n=e.random||(e.rng||m)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var i=0;i<16;++i)t[r+i]=n[i];return t}return x(n)}var I=":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}",T=new o["a"]("S3Album"),E=function(){function e(e){var t=this;Object(i["k"])(this,e),this.contentType="binary/octet-stream",this.level=u["a"].Public,this.picker=!0,this.pickerText=s["a"].PICKER_TEXT,this.albumItems=[],this.imgArr={},this.list=function(){return d(t,void 0,void 0,(function(){var e,t,r,n,i,o,a,c;return h(this,(function(u){switch(u.label){case 0:if(e=this,t=e.path,r=void 0===t?"":t,n=e.level,i=e.track,o=e.identityId,T.debug("Album path: "+r),!f["a"]||"function"!==typeof f["a"].list)throw new Error(l["m"]);u.label=1;case 1:return u.trys.push([1,3,,4]),[4,f["a"].list(r,{level:n,track:i,identityId:o})];case 2:return a=u.sent(),this.marshal(a),[3,4];case 3:return c=u.sent(),T.warn(c),[3,4];case 4:return[2]}}))}))},this.marshal=function(e){e.forEach((function(e){var r=e.key.toLowerCase(),n=r.split(".")[1];p["d"].has(n)&&(!e.contentType||e.contentType&&"binary/octet-stream"===e.contentType)&&(e.contentType=t.getContentType(e))}));var r=e.filter((function(e){return e.contentType&&e.contentType.startsWith("image/")})),n=t.filter?t.filter(r):r;n=t.sort?t.sort(n):n,t.albumItems=n,T.debug("album items",t.albumItems),t.constructImgArray(t.albumItems)},this.constructImgArray=function(e){e.map((function(e){t.imgArr[""+e["key"]]=e["key"]}))},this.handlePick=function(e){return d(t,void 0,void 0,(function(){var t,r,n,i,o,a,c,u,s,l;return h(this,(function(f){switch(f.label){case 0:t=e.target.files[0],r=this,n=r.path,i=void 0===n?"":n,o=r.level,a=r.track,c=r.fileToKey,u=i+Object(p["b"])(t,c),f.label=1;case 1:return f.trys.push([1,3,,4]),[4,Object(p["e"])(u,t,o,a,t["type"],T)];case 2:return f.sent(),[3,4];case 3:throw s=f.sent(),T.error(s),new Error(s);case 4:return Object.keys(this.imgArr).includes(u)?(this.albumItems=y(this.albumItems),this.imgArr[u]=u+"-"+j()):(l=y(this.albumItems,this.filter?this.filter([{key:u}]):[{key:u}]),this.albumItems=this.sort?this.sort(l):l),[2]}}))}))}}return e.prototype.getContentType=function(e){return Object(a["c"])(e.key,"image/*")},e.prototype.componentWillLoad=function(){this.list()},e.prototype.render=function(){var e=this;return Object(i["i"])("div",null,Object(i["i"])("div",{class:"album-container"},Object(i["i"])("div",{class:"grid-row"},this.albumItems.map((function(t){return Object(i["i"])("div",{class:"grid-item",key:"key-"+t.key},Object(i["i"])("amplify-s3-image",{key:e.imgArr[t.key],imgKey:t.key,level:e.level,path:e.path,identityId:e.identityId,track:e.track,handleOnError:e.handleOnError,handleOnLoad:e.handleOnLoad}),Object(i["i"])("span",{class:"img-overlay"}))})))),this.picker&&Object(i["i"])("amplify-picker",{pickerText:c["a"].get(this.pickerText),inputHandler:function(t){return e.handlePick(t)},acceptValue:"image/*"}))},e}();E.style=I},c064:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return p}));var n=r("807c"),i=r("9755"),o=function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function a(e){try{u(n.next(e))}catch(t){o(t)}}function c(e){try{u(n["throw"](e))}catch(t){o(t)}}function u(e){e.done?r(e.value):i(e.value).then(a,c)}u((n=n.apply(e,t||[])).next())}))},a=function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(e){return function(t){return u([e,t])}}function u(o){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(i=2&o[0]?n["return"]:o[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},c=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),u=function(e,t){var r=e.name,n=e.size,i=e.type,o=encodeURI(r);return t&&(o="string"===typeof t?t:"function"===typeof t?t({name:r,size:n,type:i}):encodeURI(JSON.stringify(t)),o||(o="empty_key")),o.replace(/\s/g,"_")},s=function(e,t,r,c,u){return o(void 0,void 0,void 0,(function(){var o,s;return a(this,(function(a){switch(a.label){case 0:if(!i["a"]||"function"!==typeof i["a"].get)throw new Error(n["m"]);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i["a"].get(e,{level:t,track:r,identityId:c})];case 2:return o=a.sent(),u.debug("Storage image get",o),[2,o];case 3:throw s=a.sent(),new Error(s);case 4:return[2]}}))}))},l=function(e){return new Promise((function(t,r){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(){r("Failed to read file!"),n.abort()},n.readAsText(e)}))},f=function(e,t,r,c,u){return o(void 0,void 0,void 0,(function(){var o,s,f;return a(this,(function(a){switch(a.label){case 0:if(!i["a"]||"function"!==typeof i["a"].get)throw new Error(n["m"]);a.label=1;case 1:return a.trys.push([1,4,,5]),[4,i["a"].get(e,{download:!0,level:t,track:r,identityId:c})];case 2:return o=a.sent(),u.debug(o),[4,l(o["Body"])];case 3:return s=a.sent(),[2,s];case 4:throw f=a.sent(),new Error(f);case 5:return[2]}}))}))},p=function(e,t,r,c,u,s){return o(void 0,void 0,void 0,(function(){var o,l;return a(this,(function(a){switch(a.label){case 0:if(!i["a"]||"function"!==typeof i["a"].put)throw new Error(n["m"]);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i["a"].put(e,t,{contentType:u,level:r,track:c})];case 2:return o=a.sent(),s.debug("Upload data",o),[3,4];case 3:throw l=a.sent(),new Error(l);case 4:return[2]}}))}))}}}]);
//# sourceMappingURL=chunk-d845e6da.693e63f2.js.map