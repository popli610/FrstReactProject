(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),o=a.n(c),r=(a(9),a(1));a(11);function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-check-inline text-".concat("light"===e.mode?"black":"primary"," ")},l.a.createElement("input",{className:"form-check-input",type:"radio",onClick:function(){return e.colortheme("primary")},name:"inlineRadioOptions",id:"inlineRadio1",value:"option1",defaultChecked:!0}),l.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio1"},"Blue")),l.a.createElement("div",{className:"form-check form-check-inline  text-".concat("light"===e.mode?"black":"success"," ")},l.a.createElement("input",{className:"form-check-input",type:"radio",onClick:function(){return e.colortheme("success")},name:"inlineRadioOptions",id:"inlineRadio2",value:"option2"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio2"},"Green")),l.a.createElement("div",{className:"form-check form-check-inline  text-".concat("light"===e.mode?"black":"warning"," ")},l.a.createElement("input",{className:"form-check-input",type:"radio",onClick:function(){return e.colortheme("warning")},name:"inlineRadioOptions",id:"inlineRadio2",value:"option2"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio2"},"Yellow")),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"black":"white"," ")},l.a.createElement("input",{type:"checkbox",className:"form-check-input",onClick:e.togglemode,id:"customSwitch1"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function m(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"text-".concat("light"===e.mode?"dark":"light")},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:c,onChange:function(e){o(""),o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#7c7f8d":"white",color:"dark"===e.mode?"white":"black"},id:"textarea",rows:"3"})),l.a.createElement("button",{className:"btn btn-".concat(e.color," mx-1"),onClick:function(){var t=c.toUpperCase();o(t),e.showAlert("Converted To UpperCase!","success")}},"Convert To Uppercase"),l.a.createElement("button",{className:"btn btn-".concat(e.color," mx-1"),onClick:function(){var t=c.toLocaleLowerCase();o(t),e.showAlert("Converted To LowerCase!","success")}},"Convert To Lowercase"),l.a.createElement("button",{className:"btn btn-".concat(e.color," mx-1"),onClick:function(){o(""),e.showAlert("Text Cleared!","success")}},"Clear"),l.a.createElement("button",{className:"btn btn-".concat(e.color," mx-1"),onClick:function(){navigator.clipboard.writeText(c),e.showAlert("Copied To Clipboard!","success")}},"Copy to ClipBoard")),l.a.createElement("div",{className:"container my-5 text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("h2",null,"Text Summary"),l.a.createElement("p",null,c.split(" ").length," words ",c.length," characters"),l.a.createElement("p",null,.006*c.split(" ").length," Minutes Read")),l.a.createElement("div",{className:"container my-5 text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("h2",null,"Preview Text "),l.a.createElement("p",null,c.length>0?c:"Type Something Above To Preview it Here")))}i.defaultProps={title:"Set Title Here",about:"About Us Txt here"};var s=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null," ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)};var d=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),d=Object(r.a)(o,2),u=d[0],b=d[1],h=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)},g=Object(n.useState)("primary"),p=Object(r.a)(g,2),k=p[0],f=p[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{title:"TextUtils",mode:a,togglemode:function(){"light"===a?(c("dark"),h("Dark mode enabled","success"),"primary"===k&&(document.body.style.backgroundColor="rgb(0 52 72)"),"success"===k&&(document.body.style.backgroundColor="rgb(24 54 43)"),"warning"===k&&(document.body.style.backgroundColor="rgb(78 60 10)")):(c("light"),document.body.style.backgroundColor="white",h("Light mode enabled","success"))},colortheme:function(e){f(e),"dark"===a&&"primary"===e&&(document.body.style.backgroundColor="rgb(0 52 72)"),"dark"===a&&"success"===e&&(document.body.style.backgroundColor="rgb(24 54 43)"),"dark"===a&&"warning"===e&&(document.body.style.backgroundColor="rgb(78 60 10)")},about:"About TextUtils"}),l.a.createElement(s,{alert:u}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{heading:"Enter the text to analyse",showAlert:h,mode:a,color:k})))},u=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,14)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),c(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),u()},4:function(e,t,a){e.exports=a(13)},9:function(e,t,a){}},[[4,3,2]]]);
//# sourceMappingURL=main.68240b3c.chunk.js.map