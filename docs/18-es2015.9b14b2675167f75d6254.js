(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{wFkS:function(t,i,e){"use strict";e.r(i),e.d(i,"VisitorsListPageModule",(function(){return f}));var s=e("SVse"),o=e("s7LF"),r=e("sZkV"),n=e("iInd"),a=e("LRne"),c=e("pLZG"),l=e("lJxs"),u=e("8Y7J"),p=e("ALmS"),d=e("nbgS");const b=p.gql`
  subscription PlaceVisitors($placeUUIDEquals: uuid! = "") {
    place(where: { place_uuid: { _eq: $placeUUIDEquals } }) {
      visits_aggregate {
        aggregate {
          count(columns: visitor_uuid)
        }
      }
      visits(order_by: { checked_out_at: desc_nulls_first, checked_in_at: desc_nulls_first }, limit: 200) {
        checked_in_at
        checked_out_at
        visitor {
          visitor_uuid
          visitor_first_name
          visitor_last_name
          visitor_phone
          visitor_email
        }
      }
    }
  }
`;let v=(()=>{class t{constructor(t){this.apollo=t}getVisitorsByPlaceUUID(t){return this.apollo.subscribe({query:b,variables:{placeUUIDEquals:t}})}}return t.\u0275fac=function(i){return new(i||t)(u.Rb(d.b))},t.\u0275prov=u.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _=[{path:"",component:(()=>{class t{constructor(t,i){this.activatedRoute=t,this.placeAdminService=i,this.visitors=Object(a.a)([]),this.placeUUID=t.snapshot.paramMap.get("placeUUID");const e=i.getVisitorsByPlaceUUID(this.placeUUID).pipe(Object(c.a)(t=>{var i,e;return void 0!==(null===(e=null===(i=t.data)||void 0===i?void 0:i.place)||void 0===e?void 0:e[0])}),Object(l.a)(t=>t.data.place));this.visitors=e}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)(u.Ib(n.a),u.Ib(v))},t.\u0275cmp=u.Cb({type:t,selectors:[["app-visitors-list"]],decls:5,vars:0,template:function(t,i){1&t&&(u.Nb(0,"ion-header"),u.Nb(1,"ion-toolbar"),u.Nb(2,"ion-title"),u.lc(3,"visitors-list"),u.Mb(),u.Mb(),u.Mb(),u.Jb(4,"ion-content"))},directives:[r.l,r.w,r.v,r.k],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=u.Gb({type:t}),t.\u0275inj=u.Fb({factory:function(i){return new(i||t)},imports:[[n.i.forChild(_)],n.i]}),t})(),f=(()=>{class t{}return t.\u0275mod=u.Gb({type:t}),t.\u0275inj=u.Fb({factory:function(i){return new(i||t)},imports:[[s.c,o.f,r.x,h]]}),t})()}}]);