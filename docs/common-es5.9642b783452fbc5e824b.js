!function(){function e(){var t=u(['\n  mutation UpdateBulkCheckOutVisits($placeUUIDEquals: uuid = "") {\n    update_visit(where: { place_uuid: { _eq: $placeUUIDEquals } }, _set: { checked_out_at: "now()" }) {\n      affected_rows\n      returning {\n        visit_uuid\n        checked_out_at\n        visitor {\n          visitor_uuid\n          visitor_first_name\n        }\n      }\n    }\n  }\n']);return e=function(){return t},t}function t(){var e=u(['\n  subscription PlaceVisitors(\n    $placeUUIDEquals: uuid! = "b8a4155c-6148-4e25-a1d2-df29d67911e4"\n    $checkedInGreaterThan: timestamptz! = "2020-08-01T13:51:06.156723+00:00"\n  ) {\n    place(where: { place_uuid: { _eq: $placeUUIDEquals } }) {\n      place_name\n      place_capacity\n      place_address\n      place_description\n      visits_aggregate(where: { place_uuid: { _eq: $placeUUIDEquals }, checked_in_at: { _gte: $checkedInGreaterThan } }) {\n        aggregate {\n          count(columns: visitor_uuid)\n        }\n      }\n      visits(\n        order_by: { checked_in_at: desc_nulls_first, checked_out_at: desc_nulls_first }\n        limit: 300\n        where: { place_uuid: { _eq: $placeUUIDEquals }, checked_in_at: { _gte: $checkedInGreaterThan } }\n      ) {\n        checked_in_at\n        checked_out_at\n        visitor {\n          visitor_uuid\n          visitor_first_name\n          visitor_last_name\n          visitor_phone\n          visitor_email\n        }\n      }\n    }\n  }\n']);return t=function(){return e},e}function n(){var e=u(["\n  # Safety enforced by custom permissions for the organiser's UID own list. JWT + header.\n  query GetAdminPlaces {\n    place(limit: 20, offset: 0) {\n      place_name\n      place_address\n      place_uuid\n    }\n  }\n"]);return n=function(){return e},e}function r(){var e=u(['\n  mutation CheckOutVisitor(\n    $place_uuid: uuid! = "875b4319-5b1c-44ef-9950-bc6004c4f77a"\n    $visitor_uuid: uuid! = "e3f2445c-c497-4f3f-a43a-a8256da64fd7"\n    $checked_in_at: timestamptz! = "2020-08-10T11:40:26.119331+00:00"\n  ) {\n    update_visit_by_pk(\n      pk_columns: { place_uuid: $place_uuid, visitor_uuid: $visitor_uuid, checked_in_at: $checked_in_at }\n      _set: { checked_out_at: "now()" }\n    ) {\n      checked_out_at\n    }\n  }\n']);return r=function(){return e},e}function i(){var e=u(['\n  mutation StartVisitCheckIn($place_uuid: uuid! = "875b4319-5b1c-44ef-9950-bc6004c4f77a", $visitor_uuid: uuid! = "") {\n    insert_visit_one(object: { place_uuid: $place_uuid, visitor_uuid: $visitor_uuid }) {\n      checked_in_at\n      visitor_uuid\n      visitor {\n        visitor_first_name\n      }\n    }\n  }\n']);return i=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function c(e,t,n,r,i,u,c){try{var o=e[u](c),a=o.value}catch(s){return void n(s)}o.done?t(a):Promise.resolve(a).then(r,i)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var u=e.apply(t,n);function o(e){c(u,r,i,o,a,"next",e)}function a(e){c(u,r,i,o,a,"throw",e)}o(void 0)}))}}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var i=d(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o}));var r={getEngine:function(){var e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(e){var t=this.getEngine();if(t){var n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})}},notification:function(e){var t=this.getEngine();if(t){var n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=function(){r.selection()},u=function(){r.selectionStart()},c=function(){r.selectionChanged()},o=function(){r.selectionEnd()},a=function(e){r.impact(e)}},"6i10":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(e,t,n){var r=e*t/n-e+"ms",i=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(e,t,n){var r=t/n,i=e*r-e+"ms",u=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(u)+"px",left:9*Math.cos(u)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,t,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":e*t/n-e+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,t,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":e*t/n-e+"ms"}}}}}},Kj3r:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("7o/Q"),i=n("D0XW");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.a;return function(n){return n.lift(new c(e,t))}}var c=function(){function e(t,n){h(this,e),this.dueTime=t,this.scheduler=n}return v(e,[{key:"call",value:function(e,t){return t.subscribe(new o(e,this.dueTime,this.scheduler))}}]),e}(),o=function(e){a(n,e);var t=l(n);function n(e,r,i){var u;return h(this,n),(u=t.call(this,e)).dueTime=r,u.scheduler=i,u.debouncedSubscription=null,u.lastValue=null,u.hasValue=!1,u}return v(n,[{key:"_next",value:function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(s,this.dueTime,this))}},{key:"_complete",value:function(){this.debouncedNext(),this.destination.complete()}},{key:"debouncedNext",value:function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}},{key:"clearDebounce",value:function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}]),n}(r.a);function s(e){e.debouncedNext()}},NqGI:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=function(){var e=o(regeneratorRuntime.mark((function e(t,n,r,i,u){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(n,r,u,i));case 2:if("string"==typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(c="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,i&&i.forEach((function(e){return c.classList.add(e)})),u&&Object.assign(c,u),n.appendChild(c),e.t0=c.componentOnReady,!e.t0){e.next=12;break}return e.next=12,c.componentOnReady();case 12:return e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r,i,u){return e.apply(this,arguments)}}(),i=function(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},PYW1:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ePDZ"),i=n("ItpF"),u=n("2c9M"),c=function(e,t){var n,c,o=function(e,r,i){if("undefined"!=typeof document){var u=document.elementFromPoint(e,r);u&&t(u)?u!==n&&(s(),a(u,i)):s()}},a=function(e,t){n=e,c||(c=n);var i=n;Object(r.g)((function(){return i.classList.add("ion-activated")})),t()},s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var t=n;Object(r.g)((function(){return t.classList.remove("ion-activated")})),e&&c!==n&&n.click(),n=void 0}};return Object(i.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:function(e){return o(e.currentX,e.currentY,u.a)},onMove:function(e){return o(e.currentX,e.currentY,u.b)},onEnd:function(){s(!0),Object(u.e)(),c=void 0}})}},apZm:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var u,c=n("ALmS"),o=n("vkgz"),s=n("zx2A"),f=function(){function e(t){h(this,e),this.notifier=t}return v(e,[{key:"call",value:function(e,t){var n=new d(e),r=Object(s.c)(this.notifier,new s.a(n));return r&&!n.seenValue?(n.add(r),t.subscribe(n)):n}}]),e}(),d=function(e){a(n,e);var t=l(n);function n(e){var r;return h(this,n),(r=t.call(this,e)).seenValue=!1,r}return v(n,[{key:"notifyNext",value:function(){this.seenValue=!0,this.complete()}},{key:"notifyComplete",value:function(){}}]),n}(s.b),p=n("8Y7J"),m=n("nbgS"),_=c.gql(i()),b=c.gql(r()),y=((u=function(){function e(t){h(this,e),this.apollo=t}return v(e,[{key:"createCheckInVisitor",value:function(e,t){return console.log("CheckInOutService -> constructor -> place_uuid",e),console.log("CheckInOutService -> constructor -> visitor_uuid",t),this.apollo.mutate({mutation:_,variables:{place_uuid:e,visitor_uuid:t}})}},{key:"updateCheckOutVisitor",value:function(e,t,n){console.log("CheckInOutService -> constructor -> checked_in_at",n);var r=this.apollo.mutate({mutation:b,variables:{place_uuid:e,visitor_uuid:t,checked_in_at:n}});return r.pipe(Object(o.a)((function(e){}))),r}},{key:"saveProgressiveForm",value:function(e){this.currentDetails=e,localStorage.setItem("currentCheckIn",JSON.stringify(e))}},{key:"saveCheckIn",value:function(e,t){var n,r=this,i=e.pipe(Object(o.a)((function(e){r.currentDetails=e,localStorage.setItem("currentCheckIn",JSON.stringify(e))}))).pipe((n=t,function(e){return e.lift(new f(n))}));return i.subscribe((function(e){console.log("CheckInOutService -> saveCheckIn -> details",e,JSON.stringify(e))}),(function(e){console.log("CheckInOutService -> saveCheckIn -> error",e)}),(function(){console.log("CheckInOutService -> saveCheckIn -> currentDetails completion")})),i}},{key:"getCheckIn",value:function(){return this.currentDetails}},{key:"resetCheckIn",value:function(){this.currentDetails=void 0}},{key:"currentPlaceUUID",get:function(){var e;return null===(e=this.currentDetails)||void 0===e?void 0:e.placeUUID}},{key:"currentVisitorUUID",get:function(){var e;return null===(e=this.currentDetails)||void 0===e?void 0:e.visitorUUID}},{key:"currentCheckInDateTime",get:function(){var e;return null===(e=this.currentDetails)||void 0===e?void 0:e.checkInDateTime}}]),e}()).\u0275fac=function(e){return new(e||u)(p.Tb(m.b))},u.\u0275prov=p.Gb({token:u,factory:u.\u0275fac,providedIn:"root"}),u)},hcCc:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a}));var r=function(e,t){return null!==t.closest(e)},i=function(e){return"string"==typeof e&&e.length>0?(r=!0,(n="ion-color-"+e)in(t={"ion-color":!0})?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t):void 0;var t,n,r},u=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,a=function(){var e=o(regeneratorRuntime.mark((function e(t,n,r,i){var u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||c.test(t)){e.next=4;break}if(!(u=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=n&&n.preventDefault(),u.push(t,r,i)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}()},klIw:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Enter a valid email."}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 6 characters long."}]}},lyr6:function(r,i,u){"use strict";u.d(i,"a",(function(){return m}));var c=u("ALmS"),o=u("vkgz"),a=u("eueu"),s=u("8Y7J"),l=u("nbgS"),f=c.gql(n()),d=c.gql(t()),p=c.gql(e()),m=function(){var e=function(){function e(t){h(this,e),this.apollo=t}return v(e,[{key:"getVisitorsByPlaceUUID",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(a.d)();return this.apollo.subscribe({query:d,variables:{placeUUIDEquals:e,checkedInGreaterThan:t}})}},{key:"filterVisitsNotCheckedOut",value:function(e){return e.filter((function(e){return!e.checked_out_at}))}},{key:"updateBulkCheckOut",value:function(e){console.log("PlaceAdminService:: updateBulkCheckOut()",e);var t=this.apollo.mutate({mutation:p,variables:{placeUUIDEquals:e}});return t.pipe(Object(o.a)((function(e){console.log("updateBulkCheckOut a",e)}))),t}},{key:"getAdminPlaceListByAuthPermissions",value:function(){return this.apollo.query({query:f})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Tb(l.b))},e.\u0275prov=s.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();