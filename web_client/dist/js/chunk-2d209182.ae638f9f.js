(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209182"],{a81f:function(e,t,a){"use strict";a.r(t),a.d(t,"amplify_federated_sign_in",(function(){return r}));var i=a("6260"),n=a("36de"),d=a("7a37"),o=a("bf82"),s=a("807c"),f=new n["a"]("amplify-federated-sign-in"),r=function(){function e(e){Object(i["k"])(this,e),this.authState=d["a"].SignIn,this.federated={}}return e.prototype.componentWillLoad=function(){if(!o["a"]||"function"!==typeof o["a"].configure)throw new Error(s["d"]);var e=o["a"].configure().oauth,t=void 0===e?{}:e;t["domain"]?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t):t["awsCognito"]&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t["awsCognito"])),t["auth0"]&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),t["auth0"]))},e.prototype.render=function(){return this.federated?Object.values(d["a"]).includes(this.authState)?(f.debug("federated Config is",this.federated),Object(i["i"])("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(i["i"])("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(i["i"])("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(f.debug("federated prop is empty. show nothing"),f.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)},e}()}}]);
//# sourceMappingURL=chunk-2d209182.ae638f9f.js.map