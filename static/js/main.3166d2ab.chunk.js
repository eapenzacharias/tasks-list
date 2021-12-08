(this["webpackJsonptasks-list"]=this["webpackJsonptasks-list"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(13),r=n.n(o),a=n(5),s=n(12),l=n(11),d=n(4),j=n(22),u=n(2),b=n(1),p=function(){return Object(b.jsx)("nav",{className:"navBar",children:Object(b.jsx)("ul",{children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about/app",text:"About App"},{id:3,path:"/about/me",text:"About Me"}].map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{to:e.path,children:e.text})},e.id)}))})})},h=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"No match for this page"})})},O=function(){var e=[{slug:"app",title:"About the App",description:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("p",{children:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."})})},{slug:"me",title:"About the Author",description:Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("p",{children:["This app was recreated by Eapen Zacharias. A Full-Stack Developer looking for new opportunities. You can connect me via",Object(b.jsx)("a",{href:"https://de.linkedin.com/in/eapenzac",target:"_blank",rel:"noreferrer",children:" LinkedIn "}),"or",Object(b.jsx)("a",{href:"https://github.com/eapenzacharias",target:"_blank",rel:"noreferrer",children:" Github "})]})})}],t=function(t){var n=e.find((function(e){return e.slug===t})),c=n.title,i=n.description;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:c}),Object(b.jsx)("div",{children:i})]})};return Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"app",element:t("app")}),Object(b.jsx)(u.a,{path:"me",element:t("me")})]})},x=n(9),m=function(e){var t=e.todo,n=e.handleChangeProps,i=e.deleteTodoProps,o=e.setUpdate,r=Object(c.useState)({editing:!1}),a=Object(d.a)(r,2),s=a[0],l=a[1];return Object(c.useEffect)((function(){console.log("Mounted",s.editing)}),[]),Object(b.jsxs)("li",{className:"item",children:[Object(b.jsxs)("div",{onDoubleClick:function(){l({editing:!0})},style:s.editing?{display:"none"}:{display:"block"},children:[Object(b.jsx)("input",{type:"checkbox",checked:t.completed,onChange:function(){return n(t.id)}}),Object(b.jsx)("span",{style:t.completed?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:t.title}),Object(b.jsx)("button",{type:"button",onClick:function(){return i(t.id)},children:Object(b.jsx)(x.b,{style:{color:"orangered",fontSize:"12px"}})})]}),Object(b.jsx)("input",{style:s.editing?{display:"block"}:{display:"none"},type:"text",className:"text-input",value:t.title,onChange:function(e){o(e.target.value,t.id)},onKeyDown:function(e){"Enter"===e.key&&l({editing:!1})}})]})};m.defaultProps={todo:{id:0,title:"",completed:!1}};var f=m,g=function(e){var t=e.todos,n=e.handleChangeProps,c=e.deleteTodoProps,i=e.setUpdate;return Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsx)(f,{todo:e,handleChangeProps:n,deleteTodoProps:c,setUpdate:i},e.id)}))})};g.defaultProps={todos:[{id:"0",title:"",completed:!1}]};var y=g,v=function(){return Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"todos"})})},k=n(8),S=function(e){var t=Object(c.useState)({title:""}),n=Object(d.a)(t,2),i=n[0],o=n[1],r=e.addTodoItem;return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o({title:""}),i.title.trim()?(r(i.title),o({title:""})):alert("Please write item")},className:"form-container",children:[Object(b.jsx)("input",{type:"text",placeholder:"Add Todo...",value:i.title,name:"title",onChange:function(e){o(Object(k.a)({},e.target.name,e.target.value))}}),Object(b.jsx)("button",{type:"submit",children:Object(b.jsx)(x.a,{})})]})},P=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],o=function(e){i((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},r=function(e){i(Object(s.a)(n.filter((function(t){return t.id!==e}))))},a=function(e){var t={id:Object(j.a)(),title:e,completed:!1};i([].concat(Object(s.a)(n),[t]))},x=function(e,t){i(n.map((function(n){var c=n;return n.id===t&&(c.title=e),c})))},m=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"inner",children:[Object(b.jsx)(v,{}),Object(b.jsx)(S,{addTodoItem:a}),Object(b.jsx)(y,{todos:n,handleChangeProps:o,deleteTodoProps:r,setUpdate:x})]})})};return Object(c.useEffect)((function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);i(t||[])}),[i]),Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/",element:Object(b.jsx)(m,{})}),Object(b.jsx)(u.a,{path:"/about/*",element:Object(b.jsx)(O,{})}),Object(b.jsx)(u.a,{path:"*",element:Object(b.jsx)(h,{})})]})})]})};n(19);r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(a.a,{basename:"/tasks-list",children:Object(b.jsx)(P,{})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3166d2ab.chunk.js.map