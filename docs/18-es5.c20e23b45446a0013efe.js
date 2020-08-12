!function(){function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function n(){var e=function(e,i){i||(i=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(i)}}))}(['\n  subscription PlaceVisitors(\n    $placeUUIDEquals: uuid! = "875b4319-5b1c-44ef-9950-bc6004c4f77a"\n    $checkedInGreaterThan: timestamptz! = "now()"\n  ) {\n    place(where: { place_uuid: { _eq: $placeUUIDEquals } }) {\n      visits_aggregate(where: { place_uuid: { _eq: $placeUUIDEquals }, checked_in_at: { _gte: $checkedInGreaterThan } }) {\n        aggregate {\n          count(columns: visitor_uuid)\n        }\n      }\n      visits(\n        order_by: { checked_in_at: desc_nulls_first, checked_out_at: desc_nulls_first }\n        limit: 300\n        where: { place_uuid: { _eq: $placeUUIDEquals }, checked_in_at: { _gte: $checkedInGreaterThan } }\n      ) {\n        checked_in_at\n        checked_out_at\n        visitor {\n          visitor_uuid\n          visitor_first_name\n          visitor_last_name\n          visitor_phone\n          visitor_email\n        }\n      }\n    }\n  }\n']);return n=function(){return e},e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{wFkS:function(i,c,o){"use strict";o.r(c),o.d(c,"VisitorsListPageModule",(function(){return V}));var a,s=o("SVse"),r=o("s7LF"),l=o("sZkV"),u=o("iInd"),b=o("pLZG"),p=o("lJxs"),v=o("8Y7J"),d=o("9Ku7"),f=o("apZm"),h=o("ALmS"),_=o("eueu"),g=o("nbgS"),k=h.gql(n()),m=((a=function(){function i(t){e(this,i),this.apollo=t}return t(i,[{key:"getVisitorsByPlaceUUID",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(_.d)();return this.apollo.subscribe({query:k,variables:{placeUUIDEquals:e,checkedInGreaterThan:i}})}}]),i}()).\u0275fac=function(e){return new(e||a)(v.Rb(g.b))},a.\u0275prov=v.Eb({token:a,factory:a.\u0275fac,providedIn:"root"}),a);function y(e,i){if(1&e&&(v.Lb(0),v.Jb(1,"ion-icon",3),v.nc(2),v.Kb()),2&e){var t=i.$implicit;v.yb(2),v.pc(" ",t.visits_aggregate.aggregate.count," visitors ")}}function I(e,i){if(1&e&&(v.Lb(0),v.lc(1,y,3,1,"ng-container",1),v.Yb(2,"async"),v.Kb()),2&e){var t=v.Xb(2);v.yb(1),v.dc("ngForOf",v.Zb(2,1,t.place))}}function O(e,i){if(1&e&&(v.Nb(0,"ion-list-header"),v.lc(1,I,3,3,"ng-container",0),v.Yb(2,"async"),v.Mb()),2&e){var t=v.Xb();v.yb(1),v.dc("ngIf",null!==v.Zb(2,1,t.place))}}function U(e,i){if(1&e){var t=v.Ob();v.Nb(0,"ion-item-option",8),v.Vb("click",(function(e){v.ic(t);var i=v.Xb().$implicit;return v.Xb().clickCheckOut(e,i.visitor.visitor_uuid,i.checked_in_at)})),v.nc(1," Check out "),v.Mb()}}function w(e,i){if(1&e&&(v.Nb(0,"ion-item-sliding"),v.Nb(1,"ion-item-options"),v.lc(2,U,2,0,"ion-item-option",4),v.Mb(),v.Nb(3,"ion-item",5),v.Nb(4,"ion-label",6),v.Nb(5,"span",7),v.nc(6),v.Yb(7,"date"),v.Yb(8,"date"),v.Mb(),v.Nb(9,"h2"),v.nc(10),v.Mb(),v.Nb(11,"h3"),v.nc(12),v.Mb(),v.Mb(),v.Mb(),v.Mb()),2&e){var t=i.$implicit;v.yb(2),v.dc("ngIf",!t.checked_out_at),v.yb(2),v.ec("color",t.checked_out_at?"success":""),v.yb(2),v.qc(" ",v.ac(7,8,t.checked_in_at,"EEEE HH:mm"),"\u2013",v.ac(8,11,t.checked_out_at,"HH:mm")," "),v.yb(4),v.qc(" ",t.visitor.visitor_first_name," ",t.visitor.visitor_last_name," "),v.yb(2),v.qc(" ",t.visitor.visitor_phone," ",t.visitor.visitor_email," ")}}var M,D,N,j=[{path:"",component:(M=function(){function i(t,n,c,o){e(this,i),this.activatedRoute=t,this.authenticationService=n,this.checkInOutService=c,this.placeAdminService=o,this.placeUUID=t.snapshot.paramMap.get("placeUUID"),console.log("VisitorsListPage -> constructor -> this.placeUUID",this.placeUUID);var a=o.getVisitorsByPlaceUUID(this.placeUUID);this.placeVisitorsResult=a;var s=a.pipe(Object(b.a)((function(e){var i,t;return void 0!==(null===(t=null===(i=e.data)||void 0===i?void 0:i.place)||void 0===t?void 0:t[0])})),Object(p.a)((function(e){return e.data.place})));this.place=s;var r=s.pipe(Object(p.a)((function(e){return e[0].visits})));this.visits=r}return t(i,[{key:"ngOnInit",value:function(){}},{key:"clickCheckOut",value:function(e,i,t){if(console.log("clickCheckOut -> event",e),void 0!==i&&void 0!==t){var n=this.checkInOutService.updateCheckOutVisitor(this.placeUUID,i,t);console.log("VisitorsListPage -> clickCheckOut -> checkedOutObs",n),n.subscribe((function(e){var i,t=e.data,n=e.errors,c=e.context,o=e.extensions;console.log("clickCheckOut -> data",t,n,c,o);var a=new Date(null===(i=null==t?void 0:t.update_visit_by_pk)||void 0===i?void 0:i.checked_out_at);console.log("VisitorsListPage -> clickCheckOut -> checkedOutDateTime",a)}))}}}]),i}(),M.\u0275fac=function(e){return new(e||M)(v.Ib(u.a),v.Ib(d.a),v.Ib(f.a),v.Ib(m))},M.\u0275cmp=v.Cb({type:M,selectors:[["app-visitors-list"]],decls:17,vars:19,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["color","light"],["name","people"],["color","success","button","",3,"click",4,"ngIf"],["button",""],[3,"color"],[2,"float","right"],["color","success","button","",3,"click"]],template:function(e,i){1&e&&(v.Nb(0,"ion-header"),v.Nb(1,"ion-toolbar"),v.Nb(2,"ion-title"),v.nc(3,"List COVIDSafe check ins \u2705 | place visitors"),v.Mb(),v.Mb(),v.Mb(),v.Nb(4,"ion-content"),v.Nb(5,"ion-list"),v.lc(6,O,3,3,"ion-list-header",0),v.lc(7,w,13,14,"ion-item-sliding",1),v.Yb(8,"async"),v.Mb(),v.Nb(9,"ion-text",2),v.nc(10),v.Yb(11,"json"),v.Yb(12,"async"),v.Yb(13,"json"),v.Yb(14,"async"),v.Yb(15,"json"),v.Yb(16,"async"),v.Mb(),v.Mb()),2&e&&(v.yb(6),v.dc("ngIf",i.place),v.yb(1),v.dc("ngForOf",v.Zb(8,5,i.visits)),v.yb(3),v.rc(" Test 1 ",v.Zb(11,7,v.Zb(12,9,i.placeVisitorsResult))," 2 ",v.Zb(13,11,v.Zb(14,13,i.place))," 3 ",v.Zb(15,15,v.Zb(16,17,i.visits))," "))},directives:[l.j,l.x,l.w,l.g,l.r,s.m,s.l,l.v,l.s,l.k,l.p,l.o,l.m,l.q,l.n],pipes:[s.b,s.g,s.e],styles:[""]}),M)}],q=((N=function i(){e(this,i)}).\u0275mod=v.Gb({type:N}),N.\u0275inj=v.Fb({factory:function(e){return new(e||N)},imports:[[u.i.forChild(j)],u.i]}),N),V=((D=function i(){e(this,i)}).\u0275mod=v.Gb({type:D}),D.\u0275inj=v.Fb({factory:function(e){return new(e||D)},imports:[[s.c,r.f,l.y,q]]}),D)}}])}();