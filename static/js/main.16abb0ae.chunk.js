(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(2),r=c(1),i=(c(12),c(13),c(3)),l=c.n(i);function o(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var d=function(){return o("/todos")},j=(c(14),c(0)),u=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},b=function(e){var t=e.todo,c=e.openModal,s=e.user,a=t.id,i=t.title,l=t.completed,o=Object(r.useState)(!0),d=Object(n.a)(o,2),b=d[0],h=d[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){h(!1)}),500);return function(){clearTimeout(e)}}),[]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),b&&Object(j.jsx)(u,{}),!b&&Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(!1)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:i}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[l?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(s.email),children:s.name})]})]})]})]})},h=function(e){var t=e.todo,c=Object(r.useState)(!1),s=Object(n.a)(c,2),a=s[0],i=s[1],d=t.title,u=t.id,h=t.completed,m=t.userId,O=Object(r.useState)(),x=Object(n.a)(O,2),f=x[0],p=x[1];return Object(r.useEffect)((function(){(function(e){return o("/users/".concat(e))})(m).then((function(e){p(e)}))}),[m]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("tr",{"data-cy":"todo",className:l()({"has-background-info-light":a}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:u}),h?Object(j.jsx)("td",{className:"is-vcentered",children:Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}):Object(j.jsx)("td",{className:"is-vcentered"}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:l()({"has-text-danger":!h,"has-text-success":h}),children:d})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return i(!a)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:l()("far",{"fa-eye-slash":a,"fa-eye":!a})})})})})]},u),a&&f&&Object(j.jsx)(b,{todo:t,openModal:i,user:f},m)]})},m=function(e){var t=e.todos;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(h,{todo:e})}))})]})},O=c(7),x=c(5),f=c.n(x),p=function(e){var t=e.setTodos,c=Object(r.useState)(""),s=Object(n.a)(c,2),a=s[0],i=s[1];Object(r.useEffect)((function(){d().then((function(e){if(a){var c=e.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));t(c)}else t(e)}))}),[a,t]);var l=function(){var e=Object(O.a)(f.a.mark((function e(c){var s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[],e.t0=c,e.next="all"===e.t0?4:"active"===e.t0?8:"completed"===e.t0?12:16;break;case 4:return e.next=6,d();case 6:return s=e.sent,e.abrupt("break",17);case 8:return e.next=10,d();case 10:return s=e.sent.filter((function(e){return!e.completed})),e.abrupt("break",17);case 12:return e.next=14,d();case 14:return s=e.sent.filter((function(e){return e.completed})),e.abrupt("break",17);case 16:return e.abrupt("break",17);case 17:t(s);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return l(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){return i(e.target.value)},value:a}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a&&Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return i("")}})})]})]})},v=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(!0),i=Object(n.a)(a,2),l=i[0],o=i[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){o(!1)}),500);return function(){clearTimeout(e)}}),[c]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(p,{setTodos:s})}),Object(j.jsx)("div",{className:"block",children:l?Object(j.jsx)(u,{}):Object(j.jsx)(m,{todos:c})})]})})})})};a.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.16abb0ae.chunk.js.map