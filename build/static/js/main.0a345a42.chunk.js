(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=a(13),i=a(24),s=a(69),u=a(77),m=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":case"FETCH_POST":return t.payload;case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),p=a(41),d=a(11),f=a(143),g=(Object(f.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}}})),a(45)),b=a.n(g),E=a(15),v=a.n(E),h=a(26),y=a(30),x=a.n(y),j="https://loombloggerz.herokuapp.com/posts",O=function(e){return x.a.get("".concat(j,"/").concat(e))},C=function(e,t){return x.a.patch("".concat(j,"/").concat(e),t)},w=function(e){return x.a.delete("".concat(j,"/").concat(e))},k=function(e){return function(){var t=Object(h.a)(v.a.mark((function t(a){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,x.a.post(j,c);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e,t){return function(){var a=Object(h.a)(v.a.mark((function a(n){var r,c;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,C(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},I=a(79),N=a(147),S=function(){var e=Object(l.c)((function(e){return e.posts})).post,t=Object(l.b)(),a=(Object(d.f)(),Object(d.g)().id);return Object(n.useEffect)((function(){t(function(e){return function(){var t=Object(h.a)(v.a.mark((function t(a){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(e);case 3:n=t.sent,r=n.data,a({type:"FETCH_POST",payload:{post:r}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(a))}),[a]),e?(console.log(e),r.a.createElement(I.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(N.a,{variant:"h3",component:"h2"},e.title),r.a.createElement(N.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2"},e.tags.map((function(e){return"#".concat(e," ")}))),r.a.createElement(N.a,{gutterBottom:!0,variant:"body1",component:"p"},e.message),r.a.createElement(N.a,{variant:"h6"},"Created by: ",e.author),r.a.createElement(N.a,{variant:"body1"},b()(e.createdAt).fromNow())),r.a.createElement("div",null,r.a.createElement("img",{src:e.image||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:e.title}))))):null},A=a(46),_=a(154),z=a(158),D=a(153),B=a(152),L=a(148),W=a(149),F=a(157),M=a(150),H=a(151),R=a(75),P=a.n(R),J=a(74),U=a.n(J),V=Object(f.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),q=function(e){var t=e.post,a=e.setCurrentId,n=Object(l.b)(),c=V(),o=Object(d.f)();return r.a.createElement(L.a,{className:c.card},r.a.createElement(W.a,{className:c.media,image:t.image||"default image",title:t.title}),r.a.createElement("div",{className:c.overlay},r.a.createElement(N.a,{variant:"h6"},t.author),r.a.createElement(N.a,{variant:"body2"},b()(t.createdAt).fromNow())),r.a.createElement("div",{className:c.overlay2},r.a.createElement(F.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)}},r.a.createElement(U.a,{fontSize:"default"}))),r.a.createElement("div",{className:c.details},r.a.createElement(N.a,{variant:"body2",color:"textSecondary",component:"h2"},t.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(N.a,{className:c.title,gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(M.a,null,r.a.createElement(N.a,{variant:"body2",color:"textSecondary",component:"p"},t.message)),r.a.createElement(H.a,{className:c.cardActions},r.a.createElement(F.a,{size:"small",color:"primary",onClick:function(){return o.push("/posts/".concat(t._id))}},"Learn More"),r.a.createElement(F.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(h.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(P.a,{fontSize:"small"})," Delete")))},G=Object(f.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),K=function(e){var t=e.setCurrentId,a=Object(l.c)((function(e){return e.posts})),n=G();return a.length?r.a.createElement(D.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(D.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(q,{post:e,setCurrentId:t}))}))):r.a.createElement(B.a,null)},Q=a(20),X=a(156),Y=a(76),Z=a.n(Y),$=Object(f.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ee=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(n.useState)({author:"",title:"",message:"",tags:"",image:""}),o=Object(A.a)(c,2),i=o[0],s=o[1],u=Object(l.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),m=Object(l.b)(),p=$();Object(n.useEffect)((function(){u&&s(u)}),[u]);var d=function(){a(0),s({author:"",title:"",message:"",tags:"",image:""})},f=function(){var e=Object(h.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?(m(k(i)),d()):(m(T(t,i)),d());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(I.a,{className:p.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:f},r.a.createElement(N.a,{variant:"h6"},t?'Editing "'.concat(u.title,'"'):"Creating a Memory"),r.a.createElement(X.a,{name:"author",variant:"outlined",label:"Author",fullWidth:!0,value:i.author,onChange:function(e){return s(Object(Q.a)(Object(Q.a)({},i),{},{author:e.target.value}))}}),r.a.createElement(X.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:i.title,onChange:function(e){return s(Object(Q.a)(Object(Q.a)({},i),{},{title:e.target.value}))}}),r.a.createElement(X.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:i.message,onChange:function(e){return s(Object(Q.a)(Object(Q.a)({},i),{},{message:e.target.value}))}}),r.a.createElement(X.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:i.tags,onChange:function(e){return s(Object(Q.a)(Object(Q.a)({},i),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:p.fileInput},r.a.createElement(Z.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return s(Object(Q.a)(Object(Q.a)({},i),{},{image:t}))}})),r.a.createElement(F.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(F.a,{variant:"contained",color:"secondary",size:"small",onClick:d,fullWidth:!0},"Clear")))},te=function(){var e=Object(n.useState)(0),t=Object(A.a)(e,2),a=t[0],c=t[1],o=Object(l.b)();return Object(n.useEffect)((function(){o(function(){var e=Object(h.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(j);case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,o]),r.a.createElement(_.a,{maxWidth:"lg"},r.a.createElement(z.a,{in:!0},r.a.createElement(_.a,null,r.a.createElement(D.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(D.a,{item:!0,xs:12,sm:7},r.a.createElement(K,{setCurrentId:c})),r.a.createElement(D.a,{item:!0,xs:12,sm:4},r.a.createElement(ee,{currentId:a,setCurrentId:c}))))))},ae=a(155),ne=function(){return r.a.createElement(ae.a,{position:"static",color:"inherit"},r.a.createElement(N.a,{variant:"h2",align:"center"},"Bloggerzz"))},re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null),r.a.createElement(p.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:te}),r.a.createElement(d.a,{path:"/posts/:id",component:S}))))},ce=(a(114),Object(i.e)(m,Object(i.d)(Object(i.a)(s.a))));o.a.render(r.a.createElement(l.a,{store:ce},r.a.createElement(re,null)),document.getElementById("root"))},84:function(e,t,a){e.exports=a(115)}},[[84,1,2]]]);
//# sourceMappingURL=main.0a345a42.chunk.js.map