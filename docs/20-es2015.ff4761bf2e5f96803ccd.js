(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{CbZG:function(i,e,t){"use strict";t.r(e),t.d(e,"VisitorPageModule",(function(){return M}));var o=t("SVse"),n=t("s7LF"),c=t("sZkV"),s=t("iInd"),r=t("pLZG"),a=t("lJxs");class l{constructor(){return new n.d({visitor_first_name:new n.b("",[n.m.required,n.m.minLength(1)]),visitor_last_name:new n.b("",[n.m.required,n.m.minLength(1)]),visitor_phone:new n.b("",[n.m.required,n.m.minLength(10)]),visitor_email:new n.b("",n.m.compose([n.m.required,n.m.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]))})}}var u=t("8Y7J"),b=t("ALmS"),d=t("nbgS");const _=b.gql`
  mutation StartVisitCheckIn($place_uuid: uuid! = "875b4319-5b1c-44ef-9950-bc6004c4f77a", $visitor_uuid: uuid! = "") {
    insert_visit_one(object: { place_uuid: $place_uuid, visitor_uuid: $visitor_uuid }) {
      checked_in_at
      visitor_uuid
      visitor {
        visitor_first_name
      }
    }
  }
`,m=b.gql`
  mutation CheckOutVisitor(
    $place_uuid: uuid! = "875b4319-5b1c-44ef-9950-bc6004c4f77a"
    $visitor_uuid: uuid! = "e3f2445c-c497-4f3f-a43a-a8256da64fd7"
    $checked_in_at: timestamptz! = "2020-08-10T11:40:26.119331+00:00"
  ) {
    update_visit_by_pk(
      pk_columns: { place_uuid: $place_uuid, visitor_uuid: $visitor_uuid, checked_in_at: $checked_in_at }
      _set: { checked_out_at: "now()" }
    ) {
      checked_out_at
    }
  }
`;let p=(()=>{class i{constructor(i){this.apollo=i}createCheckInVisitor(i,e){return console.log("CheckInOutService -> constructor -> place_uuid",i),console.log("CheckInOutService -> constructor -> visitor_uuid",e),this.apollo.mutate({mutation:_,variables:{place_uuid:i,visitor_uuid:e}})}updateCheckOutVisitor(i,e,t){return console.log("CheckInOutService -> constructor -> checked_in_at",t),this.apollo.mutate({mutation:m,variables:{place_uuid:i,visitor_uuid:e,checked_in_at:t}})}}return i.\u0275fac=function(e){return new(e||i)(u.Rb(d.b))},i.\u0275prov=u.Eb({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();b.gql`
  subscription PlaceVisitorsCurrentCount($placeUUIDEquals: uuid! = "") {
    visit_aggregate(
      where: {
        _and: { place_uuid: { _eq: $placeUUIDEquals }, checked_out_at: { _is_null: true }, checked_in_at: { _is_null: false } }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;const h=b.gql`
  query PlaceDetails($placeUUIDEquals: uuid! = "875b4319-5b1c-44ef-9950-bc6004c4f77a") {
    place(where: { place_uuid: { _eq: $placeUUIDEquals } }, distinct_on: place_uuid) {
      business_name
      place_name
      place_description
      place_capacity
      place_address
      place_stay_estimate_minutes
    }
  }
`;let v=(()=>{class i{constructor(i){this.apollo=i}getPlaceDetails(i){return this.apollo.query({query:h,variables:{placeUUIDEquals:i}})}}return i.\u0275fac=function(e){return new(e||i)(u.Rb(d.b))},i.\u0275prov=u.Eb({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const k=b.gql`
  mutation CreateVisitor(
    $visitorInsertObject: visitor_insert_input! = { visitor_first_name: "", visitor_last_name: "", visitor_phone: "", visitor_email: "" }
  ) {
    insert_visitor_one(
      object: $visitorInsertObject
      on_conflict: { constraint: visitor_visitor_first_name_visitor_last_name_visitor_phone__key, update_columns: updated_at }
    ) {
      visitor_uuid
    }
  }
`;let f=(()=>{class i{constructor(i){this.apollo=i}createVisitor({visitor_first_name:i,visitor_last_name:e,visitor_phone:t,visitor_email:o}){return this.apollo.mutate({mutation:k,variables:{visitorInsertObject:{visitor_first_name:i,visitor_last_name:e,visitor_phone:t,visitor_email:o}},errorPolicy:"all"})}}return i.\u0275fac=function(e){return new(e||i)(u.Rb(d.b))},i.\u0275prov=u.Eb({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function g(i,e){if(1&i&&(u.Lb(0),u.lc(1),u.Yb(2,"date"),u.Kb()),2&i){const i=u.Xb();u.yb(1),u.nc(" Checked in at ",u.Zb(2,1,i.checkedInDateTime)," ")}}function I(i,e){if(1&i){const i=u.Ob();u.Nb(0,"ion-button",19),u.Vb("click",(function(e){return u.gc(i),u.Xb().clickCheckIn(e)})),u.lc(1),u.Mb()}if(2&i){const i=u.Xb();u.cc("disabled",void 0===i.visitUUIDForCheckin),u.yb(1),u.nc("Check in ",i.visitUUIDForCheckin,"")}}function C(i,e){if(1&i&&(u.Lb(0),u.lc(1),u.Yb(2,"date"),u.Kb()),2&i){const i=u.Xb();u.yb(1),u.nc(" Thank you for checking out at ",u.Zb(2,1,i.checkedInDateTime)," ")}}function y(i,e){if(1&i){const i=u.Ob();u.Nb(0,"ion-button",19),u.Vb("click",(function(e){return u.gc(i),u.Xb().clickCheckOut(e)})),u.lc(1),u.Mb()}if(2&i){const i=u.Xb();u.cc("disabled",void 0===i.visitUUIDForCheckin),u.yb(1),u.nc(" Check out ",i.visitUUIDForCheckin," ")}}function U(i){console.log("VisitorPage:: getVisitorFieldsFromParamMap -> paramMap",i);const e=i.params;return console.log("VisitorPage:: extractHotlinkedVisitorParams -> unsafeExtractionObject",e),function(i){const{firstName:e,lastName:t,email:o,phone:n}=i;return{visitor_first_name:e,visitor_last_name:t,visitor_email:o,visitor_phone:n}}(e)}const D=[{path:"",component:(()=>{class i{constructor(i,e,t,o,n){this.activatedRoute=i,this.formBuilder=e,this.checkInOutService=t,this.placeService=o,this.visitorService=n,this.placeUUID=i.snapshot.paramMap.get("placeUUID"),console.log("VisitorPage -> constructor -> this.placeUUID",this.placeUUID),function({paramMap:i}){return console.log("VisitorPage:: activatedRouteParamMap",i),i.pipe(Object(a.a)(U))}(i).subscribe(i=>{console.log("VisitorPage -> constructor -> extractedVisitor",i)}),this.visitorForm=new l;const c=o.getPlaceDetails("875b4319-5b1c-44ef-9950-bc6004c4f77a");c.subscribe(({data:i,error:e,errors:t,loading:o,networkStatus:n,partial:c})=>{console.log("VisitorPage:: getPlaceDetails() -> error",e,t,o,n,c),console.log("VisitorPage:: getPlaceDetails() -> data",i)});const s=c.pipe(Object(r.a)(i=>{var e,t;return void 0!==(null===(t=null===(e=i.data)||void 0===e?void 0:e.place)||void 0===t?void 0:t[0])}),Object(a.a)(i=>i.data.place[0]));this.placeDetails=s,this.placeDeets=o.getPlaceDetails("875b4319-5b1c-44ef-9950-bc6004c4f77a")}ngOnInit(){}submitForm(i,{invalid:e,value:t}=this.visitorForm,o=this.visitorService){console.log("VisitorPage -> submitForm -> event",i),e||o.createVisitor(t).subscribe(i=>{var e,t;console.log("VisitorPage -> submitForm -> visitorResult",i),this.visitUUIDForCheckin=null===(t=null===(e=i.data)||void 0===e?void 0:e.insert_visitor_one)||void 0===t?void 0:t.visitor_uuid})}clickCheckIn(i){console.log("clickCheckIn -> event",i),void 0!==this.visitUUIDForCheckin&&(this.checkedInObs=this.checkInOutService.createCheckInVisitor(this.placeUUID,this.visitUUIDForCheckin),this.checkedInObs.subscribe(({data:i,errors:e,context:t,extensions:o})=>{var n,c;console.log("clickCheckIn -> data",i,e,t,o),this.checkedInDateTime=new Date(null===(n=null==i?void 0:i.insert_visit_one)||void 0===n?void 0:n.checked_in_at),this.checkedInTimestampStringIdentifier=null===(c=null==i?void 0:i.insert_visit_one)||void 0===c?void 0:c.checked_in_at}))}clickCheckOut(i){console.log("clickCheckOut -> event",i),void 0!==this.visitUUIDForCheckin&&void 0!==this.checkedInDateTime&&void 0!==this.checkedInTimestampStringIdentifier&&(this.checkedOutObs=this.checkInOutService.updateCheckOutVisitor(this.placeUUID,this.visitUUIDForCheckin,this.checkedInTimestampStringIdentifier),this.checkedOutObs.subscribe(({data:i,errors:e,context:t,extensions:o})=>{var n;console.log("clickCheckOut -> data",i,e,t,o),this.checkedOutDateTime=new Date(null===(n=null==i?void 0:i.update_visit_by_pk)||void 0===n?void 0:n.checked_out_at)}))}}return i.\u0275fac=function(e){return new(e||i)(u.Ib(s.a),u.Ib(n.a),u.Ib(p),u.Ib(v),u.Ib(f))},i.\u0275cmp=u.Cb({type:i,selectors:[["app-visitor"]],decls:61,vars:27,consts:[["src","/assets/images/les-logo-256px-min.png","alt","Placeholder-image",2,"width","12em"],[3,"formGroup","ngSubmit"],["f","ngForm"],["src","/assets/images/les-logo-1-min-4kB.png","alt","Placeholder-image"],[2,"padding-left","0.5em","max-width","fit-content"],[2,"padding-left","0.55em"],["name","people"],["position","floating"],["formControlName","visitor_first_name","type","text","required",""],["formControlName","visitor_last_name","type","text","required",""],["formControlName","visitor_phone","type","tel","size","12","required",""],["formControlName","visitor_email","type","text","required",""],["icon-only","","size","block",3,"disabled","click"],["name","person-add-outline","slot","icon-only"],["type","submit"],[4,"ngIf","ngIfElse"],["pendingCheckIn",""],["pendingCheckOut",""],["color","light"],[3,"disabled","click"]],template:function(i,e){if(1&i&&(u.Nb(0,"ion-header"),u.Nb(1,"ion-toolbar"),u.Nb(2,"ion-title"),u.lc(3,"Checki\u2705"),u.Mb(),u.Mb(),u.Mb(),u.Nb(4,"ion-content"),u.Nb(5,"ion-card"),u.Nb(6,"ion-card-header"),u.lc(7,"Place"),u.Mb(),u.Nb(8,"ion-card-title"),u.lc(9," Logan Endoscopy Services "),u.Mb(),u.Jb(10,"img",0),u.Nb(11,"ion-card-subtitle"),u.lc(12,"subtitle"),u.Mb(),u.Mb(),u.lc(13),u.Nb(14,"form",1,2),u.Vb("ngSubmit",(function(i){return e.submitForm(i)})),u.Nb(16,"ion-list"),u.Nb(17,"ion-list-header"),u.Nb(18,"ion-avatar"),u.Jb(19,"img",3),u.Mb(),u.Nb(20,"ion-label"),u.Jb(21,"h1",4),u.Nb(22,"h2",5),u.Jb(23,"ion-icon",6),u.Mb(),u.Jb(24,"h3"),u.Mb(),u.Mb(),u.Nb(25,"ion-item"),u.Nb(26,"ion-label",7),u.lc(27," First name "),u.Mb(),u.Jb(28,"ion-input",8),u.Mb(),u.Nb(29,"ion-item"),u.Nb(30,"ion-label",7),u.lc(31," Last name "),u.Mb(),u.Jb(32,"ion-input",9),u.Mb(),u.Nb(33,"ion-item"),u.Nb(34,"ion-label",7),u.lc(35," Phone number "),u.Mb(),u.Jb(36,"ion-input",10),u.Mb(),u.Nb(37,"ion-item"),u.Nb(38,"ion-label",7),u.lc(39," Email address "),u.Mb(),u.Jb(40,"ion-input",11),u.Mb(),u.Mb(),u.Nb(41,"ion-button",12),u.Vb("click",(function(i){return e.submitForm(i)})),u.Jb(42,"ion-icon",13),u.Mb(),u.Jb(43,"button",14),u.Mb(),u.jc(44,g,3,3,"ng-container",15),u.jc(45,I,2,2,"ng-template",null,16,u.kc),u.jc(47,C,3,3,"ng-container",15),u.jc(48,y,2,2,"ng-template",null,17,u.kc),u.lc(50),u.Yb(51,"json"),u.Yb(52,"async"),u.Yb(53,"json"),u.Yb(54,"async"),u.Nb(55,"ion-text",18),u.lc(56),u.Yb(57,"json"),u.Yb(58,"async"),u.Yb(59,"json"),u.Yb(60,"async"),u.Mb(),u.Mb()),2&i){const i=u.fc(46),t=u.fc(49);u.yb(13),u.nc(" ",e.visitUUIDForCheckin," "),u.yb(1),u.cc("formGroup",e.visitorForm),u.yb(27),u.cc("disabled",e.visitorForm.invalid),u.yb(3),u.cc("ngIf",e.checkedInDateTime)("ngIfElse",i),u.yb(3),u.cc("ngIf",e.checkedOutDateTime)("ngIfElse",t),u.yb(3),u.oc(" ",u.Zb(51,11,u.Zb(52,13,e.checkedInObs))," ",u.Zb(53,15,u.Zb(54,17,e.checkedOutObs))," "),u.yb(6),u.oc(" ",u.Zb(57,19,u.Zb(58,21,e.placeDetails))," Test 2 ",u.Zb(59,23,u.Zb(60,25,e.placeDeets))," ")}},directives:[c.l,c.w,c.v,c.k,c.g,c.h,c.j,c.i,n.n,n.j,n.e,c.q,c.r,c.b,c.p,c.m,c.o,c.n,c.B,n.i,n.c,n.l,c.e,o.l,c.u],pipes:[o.g,o.b,o.e],styles:[".submit-enter[_ngcontent-%COMP%]{position:absolute;visibility:hidden;left:-1000px}"]}),i})()}];let O=(()=>{class i{}return i.\u0275mod=u.Gb({type:i}),i.\u0275inj=u.Fb({factory:function(e){return new(e||i)},imports:[[s.i.forChild(D)],s.i]}),i})(),M=(()=>{class i{}return i.\u0275mod=u.Gb({type:i}),i.\u0275inj=u.Fb({factory:function(e){return new(e||i)},imports:[[o.c,n.f,n.k,c.x,O]]}),i})()}}]);