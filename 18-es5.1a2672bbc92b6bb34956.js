!function(){function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function n(){var e=function(e,i){i||(i=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(i)}}))}(['\n  subscription PlaceVisitors(\n    $placeUUIDEquals: uuid! = "875b4319-5b1c-44ef-9950-bc6004c4f77a"\n    $checkedInGreaterThan: timestamptz! = "now()"\n  ) {\n    place(where: { place_uuid: { _eq: $placeUUIDEquals } }) {\n      visits_aggregate(where: { place_uuid: { _eq: $placeUUIDEquals }, checked_in_at: { _gte: $checkedInGreaterThan } }) {\n        aggregate {\n          count(columns: visitor_uuid)\n        }\n      }\n      visits(\n        order_by: { checked_in_at: desc_nulls_first, checked_out_at: desc_nulls_first }\n        limit: 300\n        where: { place_uuid: { _eq: $placeUUIDEquals }, checked_in_at: { _gte: $checkedInGreaterThan } }\n      ) {\n        checked_in_at\n        checked_out_at\n        visitor {\n          visitor_uuid\n          visitor_first_name\n          visitor_last_name\n          visitor_phone\n          visitor_email\n        }\n      }\n    }\n  }\n']);return n=function(){return e},e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{wFkS:function(i,c,o){"use strict";o.r(c),o.d(c,"VisitorsListPageModule",(function(){return V}));var a,s=o("SVse"),r=o("s7LF"),l=o("sZkV"),u=o("iInd"),b=o("pLZG"),p=o("lJxs"),d=o("8Y7J"),v=o("9Ku7"),h=o("apZm"),f=o("ALmS"),_=o("eueu"),k=o("nbgS"),g=f.gql(n()),m=((a=function(){function i(t){e(this,i),this.apollo=t}return t(i,[{key:"getVisitorsByPlaceUUID",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(_.d)();return this.apollo.subscribe({query:g,variables:{placeUUIDEquals:e,checkedInGreaterThan:i}})}}]),i}()).\u0275fac=function(e){return new(e||a)(d.Rb(k.b))},a.\u0275prov=d.Eb({token:a,factory:a.\u0275fac,providedIn:"root"}),a);function y(e,i){if(1&e&&(d.Lb(0),d.Jb(1,"ion-icon",3),d.nc(2),d.Kb()),2&e){var t=i.$implicit;d.yb(2),d.pc(" ",t.visits_aggregate.aggregate.count," visitors ")}}function I(e,i){if(1&e&&(d.Lb(0),d.lc(1,y,3,1,"ng-container",1),d.Yb(2,"async"),d.Kb()),2&e){var t=d.Xb(2);d.yb(1),d.dc("ngForOf",d.Zb(2,1,t.place))}}function U(e,i){if(1&e&&(d.Nb(0,"ion-list-header"),d.lc(1,I,3,3,"ng-container",0),d.Yb(2,"async"),d.Mb()),2&e){var t=d.Xb();d.yb(1),d.dc("ngIf",null!==d.Zb(2,1,t.place))}}function O(e,i){if(1&e){var t=d.Ob();d.Nb(0,"ion-item-option",8),d.Vb("click",(function(e){d.ic(t);var i=d.Xb().$implicit;return d.Xb().clickCheckOut(e,i.visitor.visitor_uuid,i.checked_in_at)})),d.nc(1," Check out "),d.Mb()}}function w(e,i){if(1&e&&(d.Nb(0,"ion-item-sliding"),d.Nb(1,"ion-item-options"),d.lc(2,O,2,0,"ion-item-option",4),d.Mb(),d.Nb(3,"ion-item",5),d.Nb(4,"ion-label",6),d.Nb(5,"span",7),d.nc(6),d.Yb(7,"date"),d.Yb(8,"date"),d.Mb(),d.Nb(9,"h2"),d.nc(10),d.Mb(),d.Nb(11,"h3"),d.nc(12),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&e){var t=i.$implicit;d.yb(2),d.dc("ngIf",!t.checked_out_at),d.yb(2),d.ec("color",t.checked_out_at?"success":""),d.yb(2),d.qc(" ",d.ac(7,8,t.checked_in_at,"EEEE HH:mm"),"\u2013",d.ac(8,11,t.checked_out_at,"HH:mm")," "),d.yb(4),d.qc(" ",t.visitor.visitor_first_name," ",t.visitor.visitor_last_name," "),d.yb(2),d.qc(" ",t.visitor.visitor_phone," ",t.visitor.visitor_email," ")}}var M,D,N,q=[{path:"",component:(M=function(){function i(t,n,c,o){e(this,i),this.activatedRoute=t,this.authenticationService=n,this.checkInOutService=c,this.placeAdminService=o,this.placeUUID=t.snapshot.paramMap.get("placeUUID"),console.log("VisitorsListPage -> constructor -> this.placeUUID",this.placeUUID);var a=o.getVisitorsByPlaceUUID(this.placeUUID);this.placeVisitorsResult=a;var s=a.pipe(Object(b.a)((function(e){var i,t;return void 0!==(null===(t=null===(i=e.data)||void 0===i?void 0:i.place)||void 0===t?void 0:t[0])})),Object(p.a)((function(e){return e.data.place})));this.place=s;var r=s.pipe(Object(p.a)((function(e){return e[0].visits})));this.visits=r}return t(i,[{key:"ngOnInit",value:function(){}},{key:"clickCheckOut",value:function(e,i,t){if(console.log("clickCheckOut -> event",e),void 0!==i&&void 0!==t){var n=this.checkInOutService.updateCheckOutVisitor(this.placeUUID,i,t);console.log("VisitorsListPage -> clickCheckOut -> checkedOutObs",n),n.subscribe((function(e){var i,t=e.data,n=e.errors,c=e.context,o=e.extensions;console.log("clickCheckOut -> data",t,n,c,o);var a=new Date(null===(i=null==t?void 0:t.update_visit_by_pk)||void 0===i?void 0:i.checked_out_at);console.log("VisitorsListPage -> clickCheckOut -> checkedOutDateTime",a)}))}}}]),i}(),M.\u0275fac=function(e){return new(e||M)(d.Ib(u.a),d.Ib(v.a),d.Ib(h.a),d.Ib(m))},M.\u0275cmp=d.Cb({type:M,selectors:[["app-visitors-list"]],decls:17,vars:19,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["color","light"],["name","people"],["color","success","button","",3,"click",4,"ngIf"],["button",""],[3,"color"],[2,"float","right"],["color","success","button","",3,"click"]],template:function(e,i){1&e&&(d.Nb(0,"ion-header"),d.Nb(1,"ion-toolbar"),d.Nb(2,"ion-title"),d.nc(3,"Checki\u2705 place visitors"),d.Mb(),d.Mb(),d.Mb(),d.Nb(4,"ion-content"),d.Nb(5,"ion-list"),d.lc(6,U,3,3,"ion-list-header",0),d.lc(7,w,13,14,"ion-item-sliding",1),d.Yb(8,"async"),d.Mb(),d.Nb(9,"ion-text",2),d.nc(10),d.Yb(11,"json"),d.Yb(12,"async"),d.Yb(13,"json"),d.Yb(14,"async"),d.Yb(15,"json"),d.Yb(16,"async"),d.Mb(),d.Mb()),2&e&&(d.yb(6),d.dc("ngIf",i.place),d.yb(1),d.dc("ngForOf",d.Zb(8,5,i.visits)),d.yb(3),d.rc(" Test 1 ",d.Zb(11,7,d.Zb(12,9,i.placeVisitorsResult))," 2 ",d.Zb(13,11,d.Zb(14,13,i.place))," 3 ",d.Zb(15,15,d.Zb(16,17,i.visits))," "))},directives:[l.l,l.z,l.y,l.k,l.t,s.l,s.k,l.x,l.u,l.m,l.r,l.q,l.o,l.s,l.p],pipes:[s.b,s.g,s.e],styles:[""]}),M)}],j=((N=function i(){e(this,i)}).\u0275mod=d.Gb({type:N}),N.\u0275inj=d.Fb({factory:function(e){return new(e||N)},imports:[[u.i.forChild(q)],u.i]}),N),V=((D=function i(){e(this,i)}).\u0275mod=d.Gb({type:D}),D.\u0275inj=d.Fb({factory:function(e){return new(e||D)},imports:[[s.c,r.f,l.A,j]]}),D)}}])}();