(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["all events"],{"059a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-panel"},[a("div",{staticClass:"content-wrapper"},[a("h1",[t._v(t._s(t.fullname))]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 grid-margin stretch-card"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("h3",{staticClass:"card-title"},[t._v("Personal Info")]),a("div",{staticClass:"row mt-2"},[t._m(0),a("div",{staticClass:"col-6"},[t._v(t._s(t.fullname))])]),a("div",{staticClass:"row mt-1"},[t._m(1),a("div",{staticClass:"col-6"},[t._v(t._s(t.nric))])]),a("div",{staticClass:"row mt-1"},[t._m(2),a("div",{staticClass:"col-6"},[t._v(t._s(t.dob))])]),a("div",{staticClass:"row mt-1"},[t._m(3),a("div",{staticClass:"col-6"},[t._v(t._s(t.contact_num))])]),a("div",{staticClass:"row mt-1"},[t._m(4),a("div",{staticClass:"col-6"},[t._v(t._s(t.email))])]),a("div",{staticClass:"row mt-1"},[t._m(5),a("div",{staticClass:"col-6"},[t._v(t._s(t.PDPA?"Yes":"No"))])])]),t._m(6)])])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6"},[a("strong",[t._v("Fullname")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6"},[a("strong",[t._v("NRIC")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6"},[a("strong",[t._v("Date of Birth")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6"},[a("strong",[t._v("Contact Number")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6"},[a("strong",[t._v("Email")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6"},[a("strong",[t._v("Agree to be contacted")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-8"},[a("h3",{staticClass:"card-title"},[t._v("History")]),a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Event Date")]),a("th",[t._v("Event Title")]),a("th",[t._v("Event Status")]),a("th",[t._v("Role")]),a("th",[t._v("Insurance")])])]),a("tbody",[a("tr",[a("td",[t._v("1")]),a("td",[t._v("1 Jan 2020")]),a("td",[t._v("Meow Event")]),a("td",{staticClass:"text-danger"},[t._v("Ended")]),a("td",[t._v("Watcher")]),a("td",{staticClass:"text-success"},[t._v("Claimed")])])])])])}],i={data:function(){return{nric:"A1234567I",dob:"01-01-2000",fullname:"Name",contact_num:"+65 8123 4567",email:"meow@abc.com",PDPA:1}}},c=i,r=a("2877"),l=Object(r["a"])(c,s,n,!1,null,null,null);e["default"]=l.exports},"0b98":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-panel"},[a("div",{staticClass:"content-wrapper"},[a("h1",[t._v("Past Events")]),a("event-box")],1)])},n=[],i=a("79fc"),c={name:"PastEvents",components:{"event-box":i["a"]},data:function(){return{}},methods:{}},r=c,l=a("2877"),o=Object(l["a"])(r,s,n,!1,null,null,null);e["default"]=o.exports},"6eec":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-panel"},[a("div",{staticClass:"content-wrapper"},[t._m(0),t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 grid-margin stretch-card"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.event.title))]),a("p",{staticClass:"card-description"},[a("i",{staticClass:"mdi mdi-calendar"}),t._v(" "+t._s(t.moment(t.event.event_date).format("YYYY-MM-DD"))+" ")]),a("p",[t._v(t._s(t.event.description))]),a("button",{staticClass:"btn btn-lg btn-gradient-info mt-4 mr-4",on:{click:function(e){return t.getSignUpByEventId(t.event.event_id)}}},[t._v("Export Participants Data")]),a("router-link",{staticClass:"btn btn-lg btn-gradient-info mt-4 mr-4",attrs:{to:"/event/"+t.event.event_id+"/edit"}},[t._v("Edit Event")]),a("button",{staticClass:"btn btn-lg btn-gradient-danger mt-4 mr-4",on:{click:function(e){return t.showModal(t.event,"close")}}},[t._v("Close Registration")])],1)])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("form",[a("input",{staticClass:"btn btn-inverse-info p-3",attrs:{type:"button",value:"← Go Back",onclick:"history.go(-1)"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("h3",{staticClass:"page-title d-block"},[t._v("View Event")])])}],i=(a("99af"),a("ade3")),c=a("5530"),r=a("2f62"),l=a("c1df"),o=a.n(l),v={name:"Event",data:function(){return{}},created:function(){this.event.length||this.getEventById(this.$route.params.eventId)},computed:Object(c["a"])({},Object(r["c"])({event:function(t){return t.events.event}})),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(r["b"])("events",{closeEvent:"closeEvent",getEventById:"getEventById"})),Object(r["b"])("signups",{getSignUpByEventId:"getSignUpByEventId"})),{},Object(i["a"])({moment:function(){return o()()},showModal:function(t,e){var a=this;this.$swal({title:"Are you sure you want to ".concat(e," ").concat(t.title,"?"),icon:"warning",buttons:{cancel:{text:"Cancel",value:!1,visible:!0,className:"btn btn-danger",closeModal:!0},confirm:{text:"OK",value:!0,visible:!0,className:"btn btn-primary",closeModal:!0}}}).then((function(t){t&&("close"===e&&a.closeEvent(a.event.event_id),a.$swal({title:"Event Closed",text:"You successfully ".concat(e,"d ").concat(a.event.title),icon:"success"}))}))}},"moment",(function(){return o()()})))},d=v,u=a("2877"),m=Object(u["a"])(d,s,n,!1,null,null,null);e["default"]=m.exports},8614:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-panel"},[a("div",{staticClass:"content-wrapper"},[a("h1",[t._v("Volunteers")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 grid-margin stretch-card"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("table",{staticClass:"table table-hover"},[t._m(0),a("tbody",[a("tr",[a("router-link",{attrs:{to:"/volunteer/12"}},[a("td",[t._v("A1234567I")])]),a("td",[t._v("1 Jan 2000")]),a("td",[t._v("Name")]),a("td",[t._v("+65 8123 4567")]),a("td",[t._v("meow@abc.com")]),a("td",{staticClass:"text-success"},[t._v("Yes")])],1),t._m(1),t._m(2),t._m(3)])])])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("NRIC")]),a("th",[t._v("Date of Birth")]),a("th",[t._v("Fullname")]),a("th",[t._v("Contact Number")]),a("th",[t._v("Email")]),a("th",[t._v("Agree to be contacted")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("A1234521I")]),a("td",[t._v("14 Feb 2000")]),a("td",[t._v("Meow")]),a("td",[t._v("+65 8123 4325")]),a("td",[t._v("email@abc.com")]),a("td",{staticClass:"text-danger"},[t._v("No")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("A6434567I")]),a("td",[t._v("30 Dec 1999")]),a("td",[t._v("VVVV")]),a("td",[t._v("+65 8456 8987")]),a("td",[t._v("hello@abc.com")]),a("td",{staticClass:"text-success"},[t._v("Yes")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("A1234098I")]),a("td",[t._v("6 Mar 2001")]),a("td",[t._v("Fullname")]),a("td",[t._v("+65 8123 1298")]),a("td",[t._v("marmar@abc.com")]),a("td",{staticClass:"text-success"},[t._v("No")])])}],i={},c=i,r=a("2877"),l=Object(r["a"])(c,s,n,!1,null,null,null);e["default"]=l.exports},"89bb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-panel"},[a("div",{staticClass:"content-wrapper"},[t._m(0),t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 grid-margin stretch-card"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("form",{staticClass:"editEventForm",on:{submit:function(e){return e.preventDefault(),t.onSubmit(t.event)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventTitle"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.title,expression:"event.title"}],staticClass:"form-control",attrs:{type:"text",id:"eventTitle",placeholder:"Title"},domProps:{value:t.event.title},on:{input:function(e){e.target.composing||t.$set(t.event,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventDescription"}},[t._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.event.description,expression:"event.description"}],staticClass:"form-control",attrs:{id:"eventDescription",rows:"4"},domProps:{value:t.event.description},on:{input:function(e){e.target.composing||t.$set(t.event,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventDate"}},[t._v("Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date",id:"eventDate",placeholder:"Date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-3 col-form-label"},[t._v("Status")]),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.status,expression:"event.status"}],staticClass:"form-check-input",attrs:{type:"radio",name:"membershipRadios",id:"membershipRadios1",value:"0"},domProps:{checked:t._q(t.event.status,"0")},on:{change:function(e){return t.$set(t.event,"status","0")}}}),t._v(" Accepting Registration "),a("i",{staticClass:"input-helper"})])])]),a("div",{staticClass:"col-sm-5"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event.status,expression:"event.status"}],staticClass:"form-check-input",attrs:{type:"radio",name:"membershipRadios",id:"membershipRadios2",value:"1"},domProps:{checked:t._q(t.event.status,"1")},on:{change:function(e){return t.$set(t.event,"status","1")}}}),t._v(" Closed Registration "),a("i",{staticClass:"input-helper"})])])])])]),a("button",{staticClass:"btn btn-gradient-info mr-2",attrs:{type:"submit"}},[t._v("Save Changes")]),a("input",{staticClass:"btn btn-light",attrs:{type:"button",value:"Cancel",onclick:"history.go(-1)"}})])])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("form",[a("input",{staticClass:"btn btn-inverse-info p-3",attrs:{type:"button",value:"← Go Back",onclick:"history.go(-1)"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("h3",{staticClass:"page-title"},[t._v("Edit Event")])])}],i=a("5530"),c=a("2f62"),r=a("c1df"),l=a.n(r),o=(a("a18c"),{name:"Event",data:function(){return{}},created:function(){this.event.length||this.getEventById(this.$route.params.eventId)},computed:Object(i["a"])(Object(i["a"])({},Object(c["c"])({event:function(t){return t.events.event}})),{},{date:{get:function(){return this.event.event_date=l()(this.event.event_date).format("YYYY-MM-DD")},set:function(t){this.event.event_date=t}}}),methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])("events",{getEventById:"getEventById",updateEvent:"updateEvent"})),{},{moment:function(){return l()()},convertDate:function(t){l()(t).format("YYYY-MM-DD")},showModal:function(t){var e=this;this.$swal({title:"Are you sure you want to update ".concat(t.title,"?"),icon:"warning",buttons:{cancel:{text:"Cancel",value:!1,visible:!0,className:"btn btn-danger",closeModal:!0},confirm:{text:"OK",value:!0,visible:!0,className:"btn btn-primary",closeModal:!0}}}).then((function(a){a&&(e.updateEvent(t),e.$swal({title:"Event Updated",text:"You successfully updated ".concat(t.title),icon:"success"}))}))},onSubmit:function(t){this.showModal(t)}})}),v=o,d=a("2877"),u=Object(d["a"])(v,s,n,!1,null,null,null);e["default"]=u.exports},c9f6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-panel"},[a("div",{staticClass:"content-wrapper"},[a("h1",[t._v("All Events")]),a("event-box")],1)])},n=[],i=a("79fc"),c={name:"AllEvents",components:{"event-box":i["a"]},data:function(){return{events:{event:{event_id:"",title:"",description:"",event_date:"",status:0}}}},methods:{}},r=c,l=a("2877"),o=Object(l["a"])(r,s,n,!1,null,null,null);e["default"]=o.exports},de79:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-panel"},[a("div",{staticClass:"content-wrapper"},[a("h1",[t._v("Current Events")]),a("event-box")],1)])},n=[],i=a("79fc"),c={name:"CurrentEvents",components:{"event-box":i["a"]},data:function(){return{}},methods:{}},r=c,l=a("2877"),o=Object(l["a"])(r,s,n,!1,null,null,null);e["default"]=o.exports},df29:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-panel"},[a("div",{staticClass:"content-wrapper"},[t._m(0),t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 grid-margin stretch-card"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("table",{staticClass:"table table-hover"},[t._m(2),a("tbody",[t._l(t.signUps,(function(e){return a("tr",{key:e.signup_id},[a("td",[t._v(t._s(e.nric))]),a("td",[t._v(t._s(e.dob))]),a("td",[t._v(t._s(e.fullname))]),a("td",{staticClass:"text-success"},[t._v("Yes")])])})),t._m(3),t._m(4),t._m(5)],2)]),a("button",{staticClass:"btn btn-gradient-info mt-4",attrs:{onclick:"#"}},[t._v("Export as CSV")])])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("form",[a("input",{staticClass:"btn btn-inverse-info p-3",attrs:{type:"button",value:"← Go Back",onclick:"history.go(-1)"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("h3",{staticClass:"page-title"},[t._v("Participants")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("NRIC")]),a("th",[t._v("Date of Birth")]),a("th",[t._v("Fullname")]),a("th",[t._v("Contact Number")]),a("th",[t._v("Email")]),a("th",[t._v("Agree to be contacted")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("A1234521I")]),a("td",[t._v("14 Feb 2000")]),a("td",[t._v("Meow")]),a("td",[t._v("+65 8123 4325")]),a("td",[t._v("email@abc.com")]),a("td",{staticClass:"text-danger"},[t._v("No")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("A6434567I")]),a("td",[t._v("30 Dec 1999")]),a("td",[t._v("VVVV")]),a("td",[t._v("+65 8456 8987")]),a("td",[t._v("hello@abc.com")]),a("td",{staticClass:"text-success"},[t._v("Yes")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("A1234098I")]),a("td",[t._v("6 Mar 2001")]),a("td",[t._v("Fullname")]),a("td",[t._v("+65 8123 1298")]),a("td",[t._v("marmar@abc.com")]),a("td",{staticClass:"text-success"},[t._v("No")])])}],i=a("5530"),c=a("2f62"),r={name:"Participants",data:function(){return{}},created:function(){this.getSignUpByEventId(this.$route.params.eventId)},computed:Object(i["a"])({},Object(c["c"])({signUps:function(t){return t.events.signUps},signUp:function(t){return t.events.signUp}})),methods:Object(i["a"])({},Object(c["b"])("signups",{getSignUpByEventId:"getSignUpByEventId"}))},l=r,o=a("2877"),v=Object(o["a"])(l,s,n,!1,null,null,null);e["default"]=v.exports},f37f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-panel"},[a("div",{staticClass:"content-wrapper"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 grid-margin stretch-card"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("form",{staticClass:"createEventForm",on:{submit:function(e){return e.preventDefault(),t.onSubmit(t.data)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventTitle"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.title,expression:"data.title"}],staticClass:"form-control",attrs:{type:"text",id:"eventTitle",placeholder:"Title",required:""},domProps:{value:t.data.title},on:{input:function(e){e.target.composing||t.$set(t.data,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventDescription"}},[t._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.description,expression:"data.description"}],staticClass:"form-control",attrs:{id:"eventDescription",rows:"4",required:""},domProps:{value:t.data.description},on:{input:function(e){e.target.composing||t.$set(t.data,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventDate"}},[t._v("Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.event_date,expression:"data.event_date"}],staticClass:"form-control",attrs:{type:"date",id:"eventDate",placeholder:"Date",required:""},domProps:{value:t.data.event_date},on:{input:function(e){e.target.composing||t.$set(t.data,"event_date",e.target.value)}}})]),a("button",{staticClass:"btn btn-gradient-info mr-2",attrs:{type:"submit"}},[t._v("Submit")]),a("button",{staticClass:"btn btn-light"},[t._v("Cancel")])])])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("h3",{staticClass:"page-title"},[t._v("Create Event")])])}],i=a("5530"),c=a("2f62"),r=a("a18c"),l={data:function(){return{data:{title:"",description:"",event_date:""}}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])("events",{getAllEvents:"getAllEvents",createEvent:"createEvent"})),{},{onSubmit:function(t){this.createEvent(t),r["a"].push("/events/all")}})},o=l,v=a("2877"),d=Object(v["a"])(o,s,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=all events.b46f24cf.js.map