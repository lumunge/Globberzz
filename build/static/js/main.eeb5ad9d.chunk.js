(this["webpackJsonpbloggerzz-app"]=this["webpackJsonpbloggerzz-app"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=a(14),i=a(24),u=a(69),s=a(77),m=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":case"FETCH_POST":return t.payload;case"CREATE":return[].concat(Object(s.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),p=a(30),d=a(11),f=a(39),b=a.n(f),E=a(15),g=a.n(E),v=a(26),y=a(36),h=a.n(y),x="https://loombloggerz.herokuapp.com/posts",j=function(e){return h.a.get("".concat(x,"/").concat(e))},O=function(e,t){return h.a.patch("".concat(x,"/").concat(e),t)},C=function(e){return h.a.delete("".concat(x,"/").concat(e))},w=function(e){return function(){var t=Object(v.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,h.a.post(x,c);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},k=function(e,t){return function(){var a=Object(v.a)(g.a.mark((function a(n){var r,c;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},N=a(146),A=a(148),I=a(143),T=Object(I.a)((function(){return{post:{display:"flex",flexDirection:"column",alignItems:"center"},postDetails:{textAlign:"center"}}})),z=function(){var e=Object(l.c)((function(e){return e.posts})).post,t=Object(l.b)(),a=Object(d.g)().id,c=T();return Object(n.useEffect)((function(){t(function(e){return function(){var t=Object(v.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j(e);case 3:n=t.sent,r=n.data,a({type:"FETCH_POST",payload:{post:r}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(a))}),[a]),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N.a,{className:c.post},r.a.createElement("div",null,r.a.createElement("img",{src:e.image||"default image",alt:e.title})),r.a.createElement("div",{className:c.postDetails},r.a.createElement(A.a,{variant:"h3",component:"h2"},e.title),r.a.createElement(A.a,{variant:"h6"},"Category:  ",e.category),r.a.createElement(A.a,{variant:"caption"},"Author: ",e.author,"  ",b()(e.createdAt).fromNow()),r.a.createElement(A.a,{gutterBottom:!0,variant:"body1",component:"p"},e.body),r.a.createElement(A.a,{variant:"body1"},b()(e.createdAt).fromNow())))):r.a.createElement("h4",null,"Getting post...")},D=a(46),_=a(158),F=a(153),S=a(149),L=a(150),B=a(157),P=a(151),W=a(152),H=a(75),M=a.n(H),R=a(74),G=a.n(R),J=Object(I.a)({image:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),U=function(e){var t=e.post,a=e.setCurrentId,n=Object(l.b)(),c=J(),o=Object(d.f)();return r.a.createElement(S.a,{className:c.card},r.a.createElement(L.a,{className:c.image,image:t.image||"default image",title:t.title}),r.a.createElement("div",{className:c.overlay},r.a.createElement(A.a,{variant:"h6"},t.author),r.a.createElement(A.a,{variant:"body2"},b()(t.createdAt).fromNow())),r.a.createElement("div",{className:c.overlay2},r.a.createElement(B.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)}},r.a.createElement(G.a,{fontSize:"default"}))),r.a.createElement("div",{className:c.details},r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"h2"},t.category)),r.a.createElement(A.a,{className:c.title,gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(P.a,null,r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},t.body.slice(0,100).concat("..."))),r.a.createElement(W.a,{className:c.cardActions},r.a.createElement(B.a,{size:"small",color:"primary",onClick:function(){return o.push("/posts/".concat(t._id))}},"Learn More"),r.a.createElement(B.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(v.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(M.a,{fontSize:"small"})," Delete")))},V=Object(I.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),q=function(e){var t=e.setCurrentId,a=Object(l.c)((function(e){return e.posts})),n=V();return a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(F.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(F.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(U,{post:e,setCurrentId:t}))})))):"Getting posts..."},K=a(20),Q=a(79),X=a(156),Y=a(76),Z=a.n(Y),$=Object(I.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ee=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(n.useState)({author:"",title:"",body:"",category:"",image:""}),o=Object(D.a)(c,2),i=o[0],u=o[1],s=Object(l.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),m=Object(l.b)(),p=$();Object(n.useEffect)((function(){s&&u(s)}),[s]);var d=function(){a(0),u({author:"",title:"",body:"",category:"",image:""})},f=function(){var e=Object(v.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?(m(w(i)),d()):(m(k(t,i)),d());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(Q.a,{className:p.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:f},r.a.createElement(A.a,{variant:"h6"},t?'Edit "'.concat(s.title,'"'):"Create new Post"),r.a.createElement(X.a,{name:"author",variant:"outlined",label:"Author",fullWidth:!0,value:i.author,onChange:function(e){return u(Object(K.a)(Object(K.a)({},i),{},{author:e.target.value}))}}),r.a.createElement(X.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:i.title,onChange:function(e){return u(Object(K.a)(Object(K.a)({},i),{},{title:e.target.value}))}}),r.a.createElement(X.a,{name:"body",variant:"outlined",label:"Body",fullWidth:!0,multiline:!0,rows:4,value:i.body,onChange:function(e){return u(Object(K.a)(Object(K.a)({},i),{},{body:e.target.value}))}}),r.a.createElement(X.a,{name:"category",variant:"outlined",label:"Category",fullWidth:!0,value:i.category,onChange:function(e){return u(Object(K.a)(Object(K.a)({},i),{},{category:e.target.value}))}}),r.a.createElement("div",{className:p.fileInput},r.a.createElement(Z.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(K.a)(Object(K.a)({},i),{},{image:t}))}})),r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"contained",size:"large",type:"submit",color:"primary"},"Create"),"\xa0",r.a.createElement(B.a,{variant:"contained",size:"small",color:"secondary",onClick:d},"Reset"))))},te=function(){var e=Object(n.useState)(0),t=Object(D.a)(e,2),a=t[0],c=t[1],o=Object(l.b)();return Object(n.useEffect)((function(){o(function(){var e=Object(v.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get(x);case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N.a,{maxWidth:"lg"},r.a.createElement(_.a,{in:!0},r.a.createElement(N.a,null,r.a.createElement(F.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(F.a,{item:!0,xs:12,sm:7},r.a.createElement(q,{setCurrentId:c})),r.a.createElement(F.a,{item:!0,xs:12,sm:4},r.a.createElement(ee,{currentId:a,setCurrentId:c})))))))},ae=a(154),ne=a(155),re=function(){return r.a.createElement(ae.a,{position:"static",color:"inherit"},r.a.createElement(ne.a,null,r.a.createElement(B.a,{component:p.b,to:"/"},"Posts")))},ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(re,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:te}),r.a.createElement(d.a,{path:"/posts/:id",component:z}))))},oe=(a(114),Object(i.e)(m,Object(i.d)(Object(i.a)(u.a))));o.a.render(r.a.createElement(l.a,{store:oe},r.a.createElement(ce,null)),document.getElementById("root"))},84:function(e,t,a){e.exports=a(115)}},[[84,1,2]]]);
//# sourceMappingURL=main.eeb5ad9d.chunk.js.map