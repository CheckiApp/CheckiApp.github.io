!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{XXSy:function(t,e,o){"use strict";o.r(e),o.d(e,"SignInPageModule",(function(){return I}));var r=o("SVse"),c=o("s7LF"),a=o("sZkV"),s=o("iInd"),g=o("klIw"),b=o("8Y7J"),u=o("VRCc"),p=o("9Ku7");function l(n,i){if(1&n&&(b.Nb(0,"div",16),b.Jb(1,"ion-icon",17),b.Nb(2,"span"),b.lc(3),b.Mb(),b.Mb()),2&n){var t=b.Xb().$implicit;b.yb(3),b.mc(t.message)}}function d(n,i){if(1&n&&(b.Lb(0),b.jc(1,l,4,1,"div",15),b.Kb()),2&n){var t=i.$implicit,e=b.Xb();b.yb(1),b.cc("ngIf",e.signInForm.get("email").hasError(t.type)&&(e.signInForm.get("email").dirty||e.signInForm.get("email").touched))}}function m(n,i){if(1&n&&(b.Nb(0,"div",16),b.Jb(1,"ion-icon",17),b.Nb(2,"span"),b.lc(3),b.Mb(),b.Mb()),2&n){var t=b.Xb().$implicit;b.yb(3),b.mc(t.message)}}function f(n,i){if(1&n&&(b.Lb(0),b.jc(1,m,4,1,"div",15),b.Kb()),2&n){var t=i.$implicit,e=b.Xb();b.yb(1),b.cc("ngIf",e.signInForm.get("password").hasError(t.type)&&(e.signInForm.get("password").dirty||e.signInForm.get("password").touched))}}function h(n,i){if(1&n&&(b.Nb(0,"div",8),b.Nb(1,"div",16),b.Jb(2,"ion-icon",17),b.Nb(3,"span"),b.lc(4),b.Mb(),b.Mb(),b.Mb()),2&n){var t=b.Xb();b.yb(4),b.mc(t.submitError)}}var M,v,y,w=function(){return["/sign-up"]},P=[{path:"",component:(M=function(){function t(i,e,o,r){var a=this;n(this,t),this.angularFire=i,this.router=e,this.ngZone=o,this.authenticationService=r,this.validationMessages=g.a,this.signInForm=new c.d({email:new c.b("",c.m.compose([c.m.required,c.m.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new c.b("",c.m.compose([c.m.minLength(6),c.m.required]))}),this.authRedirectResult=this.authenticationService.redirectResult.subscribe((function(n){var i;void 0===(null===(i=n)||void 0===i?void 0:i.error)?void 0!==n.user&&a.redirectLoggedUserToProfilePage():a.submitError=n.error}))}var e,o,r;return e=t,(o=[{key:"redirectLoggedUserToProfilePage",value:function(){var n=this;this.ngZone.run((function(){n.router.navigate(["profile"])}))}},{key:"signInWithEmail",value:function(){var n=this;this.authenticationService.signInWithEmail(this.signInForm.value.email,this.signInForm.value.password).then((function(i){n.redirectLoggedUserToProfilePage()})).catch((function(i){n.submitError=i.message}))}}])&&i(e.prototype,o),r&&i(e,r),t}(),M.\u0275fac=function(n){return new(n||M)(b.Ib(u.a),b.Ib(s.g),b.Ib(b.z),b.Ib(p.a))},M.\u0275cmp=b.Cb({type:M,selectors:[["app-sign-in"]],decls:23,vars:7,consts:[[1,"ion-no-border"],["slot","start"],[1,"sign-in-content"],[1,"auth-title"],[3,"formGroup","ngSubmit"],["lines","full",1,"inputs-list"],[1,"input-item"],["type","email","placeholder","Email","formControlName","email","clearInput","","autocapitalize","off","inputmode","email"],[1,"error-container"],[4,"ngFor","ngForOf"],["type","password","placeholder","Password","formControlName","password"],["type","submit","expand","block",1,"sign-in-btn",3,"disabled"],["class","error-container",4,"ngIf"],[1,"sign-up-btn-wrapper"],["fill","clear",1,"sign-up-btn",3,"routerLink"],["class","error-message",4,"ngIf"],[1,"error-message"],["name","information-circle-outline"]],template:function(n,i){1&n&&(b.Nb(0,"ion-header",0),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-buttons",1),b.Jb(3,"ion-back-button"),b.Mb(),b.Mb(),b.Mb(),b.Nb(4,"ion-content",2),b.Nb(5,"h2",3),b.lc(6," Sign in to your COVIDSafe business Checki\u2705 "),b.Mb(),b.Nb(7,"form",4),b.Vb("ngSubmit",(function(){return i.signInWithEmail()})),b.Nb(8,"ion-list",5),b.Nb(9,"ion-item",6),b.Jb(10,"ion-input",7),b.Mb(),b.Nb(11,"div",8),b.jc(12,d,2,1,"ng-container",9),b.Mb(),b.Nb(13,"ion-item",6),b.Jb(14,"ion-input",10),b.Mb(),b.Nb(15,"div",8),b.jc(16,f,2,1,"ng-container",9),b.Mb(),b.Mb(),b.Nb(17,"ion-button",11),b.lc(18,"Sign In"),b.Mb(),b.jc(19,h,5,1,"div",12),b.Nb(20,"ion-row",13),b.Nb(21,"ion-button",14),b.lc(22," Don't have an account? "),b.Mb(),b.Mb(),b.Mb(),b.Mb()),2&n&&(b.yb(7),b.cc("formGroup",i.signInForm),b.yb(5),b.cc("ngForOf",i.validationMessages.email),b.yb(4),b.cc("ngForOf",i.validationMessages.password),b.yb(1),b.cc("disabled",!i.signInForm.valid),b.yb(2),b.cc("ngIf",i.submitError),b.yb(2),b.cc("routerLink",b.dc(6,w)))},directives:[a.l,a.v,a.f,a.c,a.d,a.k,c.n,c.j,c.e,a.q,a.o,a.n,a.A,c.i,c.c,r.k,a.e,r.l,a.t,a.z,s.h,a.m],styles:[".sign-in-content[_ngcontent-%COMP%]{text-align:center;--padding-bottom:16px;--padding-end:16px;--padding-start:16px;--padding-top:16px}.sign-in-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:64px;letter-spacing:.6px}.sign-in-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .options-divider[_ngcontent-%COMP%]{text-align:center}.sign-in-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}.sign-in-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin:16px 0;display:flex;align-items:center;color:var(--ion-color-danger);font-size:14px}.sign-in-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:16px;-webkit-padding-end:8px;padding-inline-end:8px}.sign-in-content[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%]{margin:16px 0}.sign-in-content[_ngcontent-%COMP%]   .sign-up-btn-wrapper[_ngcontent-%COMP%]{justify-content:flex-end;align-items:center}.sign-in-content[_ngcontent-%COMP%]   .sign-up-btn-wrapper[_ngcontent-%COMP%]   .sign-up-btn[_ngcontent-%COMP%]{--padding-end:0px}"]}),M)}],C=((y=function i(){n(this,i)}).\u0275mod=b.Gb({type:y}),y.\u0275inj=b.Fb({factory:function(n){return new(n||y)},imports:[[s.i.forChild(P)],s.i]}),y),I=((v=function i(){n(this,i)}).\u0275mod=b.Gb({type:v}),v.\u0275inj=b.Fb({factory:function(n){return new(n||v)},imports:[[r.c,c.f,c.k,a.w,C]]}),v)}}])}();