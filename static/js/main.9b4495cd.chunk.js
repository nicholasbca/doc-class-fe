(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{49:function(e,t,a){},54:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},58:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var n=a(59),l=a(0),i=a.n(l),c=(a(49),i.a.memo((function(t){var a=t.data,l=t.dataIndex,c=t.isCenterSlide,o=t.swipeTo,r=t.slideIndex,s="https://tricky-regions-melt-34-82-197-233.loca.lt/view_image?id="+a[l].image_id,d=a[l].document_type,u=isNaN(a[l].confidence_level)?a[l].confidence_level:Math.round(100*a[l].confidence_level)/100+"%";return fetch(s,{method:"GET",headers:{"Bypass-Tunnel-Reminder":"abc"}}).then((function(t){"data:".concat(t.headers["content-type"],";base64,").concat(new e(t.data).toString("base64"));Object(n.a)("imgSrc")})),i.a.createElement("div",{className:"card-card",draggable:!1,style:{width:"100%",height:"100%"}},i.a.createElement("div",{className:"cover fill ".concat(c?"off":"on")},i.a.createElement("div",{className:"card-overlay fill",onClick:function(){c||o(r)}})),i.a.createElement("div",{className:"detail fill"},i.a.createElement("div",{className:"discription"},i.a.createElement("img",{style:{width:"100%",height:"100%"},alt:"j",className:"cover-image",src:""}),i.a.createElement("div",{style:{backgroundColor:"#1B1E23"}},i.a.createElement("p",{style:{color:"white",fontSize:"12px",fontWeight:"bolder"}},d),i.a.createElement("p",{style:{color:"white",fontSize:"12px",fontWeight:"bold"}},u)))))})))}).call(this,a(48).Buffer)},66:function(e,t,a){e.exports=a(84)},71:function(e,t,a){},72:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(17),c=a.n(i),o=(a(71),a(62)),r=a(5),s=a(54),d=a.n(s),u=(a(72),a(73),a(64)),m=a(21),f=a(63),p=a(35),h=a.n(p),v=function(e,t,a){var n=new h.a;n.append("file",e);var l={method:"post",url:"https://tricky-regions-melt-34-82-197-233.loca.lt/api/predict",headers:{"Content-Type":"multipart/form-data","Bypass-Tunnel-Reminder":"abc"},data:n,onUploadProgress:t,onDownloadProgress:a};return Object(f.a)(l)},g=a(41),b=a(100),E=a(60),y=a.n(E),w=a(61),S=a.n(w),x=(a(49),a(58)),j=function(){var e=Object(n.useState)(void 0),t=Object(m.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(void 0),o=Object(m.a)(c,2),r=o[0],s=o[1],d=Object(n.useState)(0),f=Object(m.a)(d,2),p=f[0],h=f[1],E=Object(n.useState)(""),w=Object(m.a)(E,2),j=w[0],N=w[1],O=Object(n.useState)(""),k=Object(m.a)(O,2),C=k[0],T=k[1],B=Object(n.useState)([]),_=Object(m.a)(B,2),I=_[0],z=_[1];function P(e){var t=e.centerSlideDataIndex,a=e.updatePosition;return console.log("\ud83d\ude80 ~ centerSlideDataIndex--000",t),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",gap:"20px",marginTop:20,marginBottom:20}},I.map((function(t,n){var i=e.centerSlideDataIndex===n;return l.a.createElement("div",{onClick:function(){a(n)},style:{height:15,width:15,borderRadius:"100%",background:i?"white":"none",border:"1px solid white",cursor:"pointer"}})})))}Object(n.useEffect)((function(){T("-")}),[]);var D=l.a.useRef(g.b),R=l.a.useState(0),W=Object(m.a)(R,2),A=W[0],M=W[1],J=function(e){M(e)};return Object(n.useEffect)((function(){N("No file selected.")}),[]),l.a.createElement("div",null,0!==I.length&&l.a.createElement("div",null,l.a.createElement("div",{style:{width:"100%",position:"relative"}},l.a.createElement(g.a,{carouselRef:D,render:function(e,t){return l.a.createElement(g.b,{ref:t,slideComponent:x.a,slideWidth:300,carouselWidth:e,height:500,data:I,maxVisibleSlide:5,disableSwipe:!0,customScales:[1,.85,.7,.55],transitionTime:450,onActiveSlideChange:J})}})),l.a.createElement("div",{style:{display:"inline-flex"}},l.a.createElement(b.a,{className:"card-button left",size:"small",onClick:function(){var e;return null===(e=D.current)||void 0===e?void 0:e.goBack()},style:{margin:"10px"}},l.a.createElement(y.a,{style:{fontSize:30}})),l.a.createElement(P,{updatePosition:function(e){var t;console.log("\ud83d\ude80 ~ ition ~ index",e),console.log("\ud83d\ude80 ~centerSlideDataIndex--111",A),console.log("\ud83d\ude80 subtract",e-A),null===D||void 0===D||null===(t=D.current)||void 0===t||t.swipeTo(e-A)},centerSlideDataIndex:A}),l.a.createElement(b.a,{className:"card-button right",size:"small",onClick:function(){var e;return null===(e=D.current)||void 0===e?void 0:e.goNext()},style:{margin:"10px"}},l.a.createElement(S.a,{style:{fontSize:30}})))),r&&l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar progress-bar-info progress-bar-striped",role:"progressbar","aria-valuenow":p,"aria-valuemin":"0","aria-valuemax":"100",style:{width:p+"%"}},p,"%")),l.a.createElement("label",{className:"btn btn-default"},l.a.createElement("label",{class:"custom-file-upload"},l.a.createElement("input",{type:"file",onChange:function(e){1===e.target.files.length?i(e.target.files):N("Please choose only 1 file")}}),"Browse")),l.a.createElement("label",{style:{fontSize:"20px",marginRight:"10px"}},a?a[0].name:j),l.a.createElement("button",{className:"btn btn-success",disabled:!a,onClick:function(){var e=a[0];h(0),s(e),T("Predicting..."),z([]),v(e,(function(e){h(Math.round(50*e.loaded/e.total))}),(function(e){h(Math.round(100*e.loaded/e.total))})).then((function(e){for(var t=Object(u.a)(e.data);t.length<3;)t.push({image_id:"blank.jpg",document_type:"This file only have",confidence_level:e.data.length+" page"});z(t),T("Success!")})).catch((function(){h(0),T("Could not upload the file!"),s(void 0)})),i(void 0)}},"Upload"),l.a.createElement("div",null,l.a.createElement("div",null,"Status: ",C)))};var N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(o.a,{base:"/doc-class-fe"},l.a.createElement(r.c,null,l.a.createElement(r.a,{exact:!0,path:"/"},l.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),l.a.createElement("div",{className:"container",style:{width:"100%"}},l.a.createElement("div",{className:"my-3"},l.a.createElement("h3",null,"Predict")),l.a.createElement(j,null))),l.a.createElement(r.a,{path:"/page2"},l.a.createElement("p",null,"This is page 3!"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.9b4495cd.chunk.js.map