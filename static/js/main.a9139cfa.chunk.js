(this["webpackJsonpreact-inbox-template"]=this["webpackJsonpreact-inbox-template"]||[]).push([[0],{148:function(e){e.exports=JSON.parse('{"data":[{"name":"John","age":32,"address":"Vallur kottam","gender":"Male"},{"name":"Rani","age":40,"address":"Anna nagar","gender":"Female"},{"name":"Jasmine","age":43,"address":"RK nagar","gender":"Female"},{"name":"Vivek","age":24,"address":"Raji pattai","gender":"Male"},{"name":"Varun","age":40,"address":"Ashok nagar","gender":"Male"},{"name":"Vasanth","age":41,"address":"Raja nagar","gender":"Male"},{"name":"Arun","age":48,"address":"Ashok nagar","gender":"Male"},{"name":"Harini","age":36,"address":"Madhavaram","gender":"Female"},{"name":"Ravi","age":20,"address":"Thoraipakam","gender":"Male"},{"name":"Suresh","age":41,"address":"Kankayam","gender":"Male"},{"name":"Rohit","age":40,"address":"Varatharaj nagar","gender":"Male"}]}')},185:function(e,a,t){e.exports=t(334)},190:function(e,a,t){},191:function(e,a,t){},334:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),c=t.n(r),i=(t(190),t(191),t(192),t(60)),o=t(337),d=t(94),u=t(45),s=t(338),m=t(124),f=t.n(m),g=t(177),p=t(147),h=t(181),v=t(75),E=t(340),b=t(339),y=t(336),j=t(341),k=t(343),O=t(335),x=t(344),C=t(148),w=[],S=o.a.Title;C.data.forEach((function(e,a){w.push(Object(v.a)({key:a},e))}));var I=function(e){var a=e.editing,t=e.dataIndex,n=e.title,r=e.inputType,c=(e.record,e.index,e.children),i=Object(h.a)(e,["editing","dataIndex","title","inputType","record","index","children"]),o="number"===r?l.a.createElement(E.a,null):l.a.createElement(b.a,null);return l.a.createElement("td",i,a?l.a.createElement(y.a.Item,{name:t,style:{margin:0},rules:[{required:!0,message:"Please Input ".concat(n,"!")}]},o):c)},T=function(){var e,a=y.a.useForm(),t=Object(i.a)(a,1)[0],r=Object(n.useState)(w),c=Object(i.a)(r,2),o=c[0],d=c[1],m=Object(n.useState)(!1),h=Object(i.a)(m,2),E=h[0],C=(h[1],Object(n.useState)("")),T=Object(i.a)(C,2),M=T[0],F=T[1],V=Object(n.useState)({searchText:"",searchedColumn:""}),R=Object(i.a)(V,2),L=(R[0],R[1]),A=Object(n.useState)(!1),B=Object(i.a)(A,2),N=B[0],J=B[1],K=Object(n.useRef)(null),D=Object(n.useState)(""),P=Object(i.a)(D,2),z=P[0],W=P[1],q=function(e){return e.key===M},G=Object(n.useCallback)((function(){J(!1)}),[]),H=function(){F("")},$=function(){var e=Object(p.a)(f.a.mark((function e(a){var n,l,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.validateFields();case 3:n=e.sent,l=Object(g.a)(o),(r=l.findIndex((function(e){return a===e.key})))>-1?(c=l[r],l.splice(r,1,Object(v.a)(Object(v.a)({},c),n)),d(l),F("")):(l.push(n),d(l),F("")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Validate Failed:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}(),Q=[Object(v.a)({title:"Name",dataIndex:"name",width:"25%",editable:!0,sorter:function(e,a){return e.name.length-a.name.length}},(e="name",{filterDropdown:function(a){var t=a.setSelectedKeys,n=a.selectedKeys,r=a.confirm,c=a.clearFilters;return l.a.createElement("div",{style:{padding:8}},l.a.createElement(b.a,{ref:K,placeholder:"Search ".concat(e),value:n[0],onChange:function(e){return t(e.target.value?[e.target.value]:[])},onPressEnter:function(){return X(n,r,e)},style:{width:188,marginBottom:8,display:"block"}}),l.a.createElement(j.b,null,l.a.createElement(u.a,{type:"primary",onClick:function(){return X(n,r,e)},icon:l.a.createElement(x.a,null),size:"small",style:{width:90}},"Search"),l.a.createElement(u.a,{onClick:function(){return Y(c)},size:"small",style:{width:90}},"Reset")))},filterIcon:function(e){return l.a.createElement(x.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(a,t){return t[e]?t[e].toString().toLowerCase().includes(a.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){(null===K||void 0===K?void 0:K.current)&&K.current.select()}),100)},render:function(e){return e}})),{title:"Age",dataIndex:"age",width:"15%",editable:!0,sorter:function(e,a){return e.age-a.age}},{title:"Gender",dataIndex:"gender",width:"15%",editable:!0,filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}]},{title:"Address",dataIndex:"address",width:"40%",editable:!0},{title:"Operation",dataIndex:"operation",width:"10%",render:function(e,a){return q(a)?l.a.createElement("span",null,l.a.createElement("a",{href:"javascript:;",onClick:function(){return $(a.key)},style:{marginRight:8}},"Save"),l.a.createElement(k.a,{title:"Sure to cancel?",onConfirm:H},l.a.createElement("a",null,"Cancel"))):l.a.createElement("a",{disabled:""!==M,onClick:function(){return function(e){W(e.name),J(!0)}(a)}},"Edit")}}],U=Object(n.useCallback)((function(e,a,t){var n=Object.keys(a),l=[].concat(w);if(n.includes("gender")){var r=a.gender;(null===r||void 0===r?void 0:r.length)&&(l=l.filter((function(e){return r.includes(e.gender.toLocaleLowerCase())})))}d(l)}),[]),X=function(e,a,t){a(),L({searchText:e[0],searchedColumn:t})},Y=function(e){e(),L({searchText:""})},Z=Q.map((function(e){return e.editable?Object(v.a)(Object(v.a)({},e),{},{onCell:function(a){return{record:a,inputType:"age"===e.dataIndex?"number":"text",dataIndex:e.dataIndex,title:e.title,editing:q(a)}}}):e}));return l.a.createElement("div",null,l.a.createElement(y.a,{form:t,component:!1},l.a.createElement(O.a,{components:{body:{cell:I}},bordered:!0,dataSource:o,columns:Z,rowClassName:"editable-row",pagination:{onChange:H},scroll:{x:1e3,y:450},loading:E,onChange:U})),l.a.createElement(s.a,{title:l.a.createElement(S,{level:5},"Edit"),placement:"right",closable:!1,onClose:G,visible:N,key:"right",width:520},l.a.createElement("div",null,l.a.createElement(S,{level:5},"Name:"),l.a.createElement(b.a,{value:z})),l.a.createElement("div",{style:{paddingTop:16}},l.a.createElement(S,{level:5},"Phone Number:"),l.a.createElement(b.a,null)),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",paddingTop:24}},l.a.createElement(u.a,{type:"primary",onClick:G},"Save"),l.a.createElement(u.a,{onClick:G},"Cancel"))))},M=t(342),F=o.a.Title,V=d.a.Option,R=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useCallback)((function(){r(!1)}),[]),o=Object(n.useCallback)((function(){r(!0)}),[]);return l.a.createElement("div",null,l.a.createElement("div",{style:{backgroundColor:"#1890ff",display:"flex"}},l.a.createElement("div",{style:{color:"#f8f8f8",display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:16,cursor:"pointer"}},l.a.createElement(u.a,{type:"primary",onClick:o},l.a.createElement(M.a,null))),l.a.createElement(F,{style:{color:"#f8f8f8",paddingTop:8,paddingLeft:16},level:3},"Voter List")),l.a.createElement("div",{style:{padding:"16px"}},l.a.createElement(T,null),l.a.createElement(s.a,{title:l.a.createElement(F,{level:5},"Filter"),placement:"left",closable:!1,onClose:c,visible:t,key:"left"},l.a.createElement("div",null,l.a.createElement(F,{level:4},"State"),l.a.createElement(d.a,{defaultValue:"tamilnadu",style:{width:120}},l.a.createElement(V,{value:"tamilnadu"},"TamilNadu"),l.a.createElement(V,{value:"kerala"},"Kerala"))),l.a.createElement("div",{style:{paddingTop:16}},l.a.createElement(F,{level:4},"District"),l.a.createElement(d.a,{defaultValue:"chennai",style:{width:120}},l.a.createElement(V,{value:"chennai"},"Chennai"),l.a.createElement(V,{value:"madurai"},"Madurai"),l.a.createElement(V,{value:"salem"},"Salem"))),l.a.createElement("div",{style:{paddingTop:16}},l.a.createElement(F,{level:4},"Booth"),l.a.createElement(d.a,{defaultValue:"booth1",style:{width:120}},l.a.createElement(V,{value:"booth1"},"Booth 1"),l.a.createElement(V,{value:"booth2"},"Booth 2"))))))};var L=function(){return l.a.createElement("div",null,l.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[185,1,2]]]);
//# sourceMappingURL=main.a9139cfa.chunk.js.map