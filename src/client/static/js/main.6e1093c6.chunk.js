(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{103:function(e,n,t){},225:function(e,n,t){"use strict";t.r(n);var r,i,a,s,c,o,l,d,u,j,b,f,p,x,h,m,O,g,C,w,v=t(0),y=t.n(v),z=t(89),S=t.n(z),k=t(2),L=(t(103),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,226)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),r(e),i(e),a(e),s(e)}))}),q=t(14),N=t(3),M={templates:{centerContent:Object(k.b)(r||(r=Object(N.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  "])))},fonts:{font1:Object(k.b)(i||(i=Object(N.a)(['\n    font-family: "Reggae One", cursive;\n  '])))}},R=t(7),I=t(19),F=t.n(I),_=t(33),E=t(53),P=t.n(E),J=t(1),T=y.a.createContext({user:null,isLoading:!1,error:!1,login:function(){var e=Object(_.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),register:function(){var e=Object(_.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),logout:function(){return console.log("Loged out")}}),B=function(e){var n=e.children,t=y.a.useState(null),r=Object(R.a)(t,2),i=r[0],a=r[1],s=y.a.useState(!1),c=Object(R.a)(s,2),o=c[0],l=c[1];Object(v.useEffect)((function(){var e=localStorage.getItem("user");if(e){var n=JSON.parse(e);a(n)}}),[]);var d=function(){var e=Object(_.a)(F.a.mark((function e(n){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post("/login",n).then((function(e){return e.data.user?(a(e.data.user),l(!1),localStorage.setItem("user",JSON.stringify(e.data.user))):(l(e.data.error),setTimeout((function(){l(!1)}),1e3)),e.data}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=Object(_.a)(F.a.mark((function e(n,t,r,i,s){var c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post("/register",{firstname:n,lastname:t,email:r,password:i,repeat_password:s}).then((function(e){return e.data.user?(a(e.data.user),l(!1),localStorage.setItem("user",JSON.stringify(e.data.user))):(l(e.data.error),setTimeout((function(){l(!1)}),1e3)),e.data}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(n,t,r,i,a){return e.apply(this,arguments)}}();return Object(J.jsx)(T.Provider,{value:{user:i,isLoading:!1,error:o,login:d,register:u,logout:function(){a(null),localStorage.removeItem("user")}},children:n})},H=t(4),G=function(){var e=Object(v.useState)("Hello World"),n=Object(R.a)(e,1)[0];return Object(J.jsxs)("div",{children:[Object(J.jsx)("h1",{children:"Home"}),Object(J.jsx)("h3",{children:n})]})},V=k.c.div(a||(a=Object(N.a)(["\n  ",";\n  z-index: 2;\n\n  box-sizing: border-box;\n"])),(function(e){return e.theme.templates.centerContent})),Z=k.c.div(s||(s=Object(N.a)(["\n  ",";\n  padding: 20px;\n  background: linear-gradient(90deg, #937ff0, #fc84ba);\n  margin: 10px;\n  border-radius: 5px;\n  width: 300px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 5px 6px 12px 0px #000000;\n\n  & > .input-field {\n    margin: 0;\n    padding: 0;\n  }\n"])),(function(e){return e.theme.templates.centerContent})),A=k.c.h1(c||(c=Object(N.a)(["\n  z-index: 2;\n  ",";\n"])),(function(e){return e.theme.fonts.font1})),D=k.c.div(o||(o=Object(N.a)(["\n  height: ","px;\n  width: ","px;\n  position: absolute;\n  top: ","%;\n  left: ","%;\n  background: ",";\n  border-radius: 50%;\n  z-index: 1;\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.top}),(function(e){return e.left}),(function(e){return e.color})),W=k.c.a(l||(l=Object(N.a)(["\n  color: #ffffff;\n  font-size: 18px;\n  z-index: 2;\n  font-weight: 500;\n"]))),K=k.c.button(d||(d=Object(N.a)(["\n  padding: 5px;\n  outline: none;\n  width: 100%;\n  background: #937ff0;\n  outline: none;\n  border: 1px solid black;\n  cursor: pointer;\n  font-size: 18px;\n  margin-bottom: 10px;\n  ",";\n  color: #ffffff;\n"])),(function(e){return e.theme.fonts.font1})),Q=t(12),U=t(15),X=k.c.div(u||(u=Object(N.a)(["\n  color: red;\n  display: flex;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 24px;\n  z-index: 2;\n\n  @media (max-width: 768px) {\n    font-size: 20px;\n    margin: -5px 0;\n  }\n"]))),Y=function(e){var n=e.children;return n?Object(J.jsx)(X,{children:n}):Object(J.jsx)(X,{children:"Error!!!"})},$=function(e){var n=e.context,t=Object(v.useState)({email:"",password:"",errors:!1}),r=Object(R.a)(t,2),i=r[0],a=r[1];Object(v.useEffect)((function(){return function(){a({email:"",password:"",errors:!1})}}),[]);return Object(J.jsxs)(V,{children:[Object(J.jsxs)(Z,{children:[function(){if(n&&n.user)return Object(J.jsx)(H.a,{to:"/"})}(),Object(J.jsx)(A,{children:"Login"}),Object(J.jsx)(Q.c,{initialValues:i,validationSchema:U.a({email:U.b().email("Invalid email address").required("Required"),password:U.b().min(3,"Must be at least 3 chars").max(25,"Max 25 chars").required("Required")}),onSubmit:function(e){n.login({email:e.email,password:e.password}),n.isLoading=!0},children:function(e){var n=e.errors,t=e.touched;return Object(J.jsxs)(Q.b,{style:{width:"100%",zIndex:2},children:[Object(J.jsx)(Q.a,{className:"input-field",name:"email",type:"email",placeholder:"Email"}),n.email&&t.email?Object(J.jsx)(Y,{children:n.email}):null,Object(J.jsx)(Q.a,{type:"password",placeholder:"Password",className:"input-field",name:"password"}),n.password&&t.password?Object(J.jsx)(Y,{children:n.password}):null,Object(J.jsx)(K,{disabled:!!n.email,type:"submit",children:"Submit"})]})}}),Object(J.jsx)(D,{size:150,top:55,left:65,color:"#007cb0de"}),Object(J.jsx)(D,{size:60,top:28,left:48,color:"#007cb0de"}),Object(J.jsx)(D,{size:20,top:5,left:75,color:"#007cb0de"}),n.error&&Object(J.jsx)(Y,{children:n.error}),Object(J.jsx)(W,{href:"/register",children:"Need an account? Register here."}),i.errors?Object(J.jsx)(X,{children:"Error"}):null]}),Object(J.jsxs)("svg",{className:"waves",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:[Object(J.jsx)("defs",{children:Object(J.jsxs)("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[Object(J.jsx)("stop",{offset:"0%",stopColor:"#fc84ba"}),Object(J.jsx)("stop",{offset:"100%",stopColor:"#826ce2"})]})}),Object(J.jsx)("path",{fill:"url(#gradient)",fillOpacity:"1",d:"M0,320L11.4,309.3C22.9,299,46,277,69,266.7C91.4,256,114,256,137,256C160,256,183,256,206,240C228.6,224,251,192,274,186.7C297.1,181,320,203,343,202.7C365.7,203,389,181,411,149.3C434.3,117,457,75,480,64C502.9,53,526,75,549,112C571.4,149,594,203,617,229.3C640,256,663,256,686,224C708.6,192,731,128,754,122.7C777.1,117,800,171,823,186.7C845.7,203,869,181,891,149.3C914.3,117,937,75,960,53.3C982.9,32,1006,32,1029,48C1051.4,64,1074,96,1097,106.7C1120,117,1143,107,1166,122.7C1188.6,139,1211,181,1234,181.3C1257.1,181,1280,139,1303,133.3C1325.7,128,1349,160,1371,144C1394.3,128,1417,64,1429,32L1440,0L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"})]})]})},ee=k.c.div(j||(j=Object(N.a)(["\n  display: flex;\n  position: absolute;\n  top: 0px;\n  width: 100vw;\n  background: white;\n  height: 50px;\n  align-items: center;\n  justify-content: flex-end;\n  background: linear-gradient(90deg, #937ff0, #fc84ba);\n  color: white;\n  ",";\n\n  & > a {\n    font-size: 22px;\n    font-weight: 600;\n    margin-right: 20px;\n    text-decoration: none;\n    color: white;\n  }\n"])),(function(e){return e.theme.fonts.font1})),ne=k.c.div(b||(b=Object(N.a)(["\n  &:hover > div {\n    display: block;\n  }\n"]))),te=k.c.div(f||(f=Object(N.a)(["\n  display: none;\n  position: absolute;\n  top: 40px;\n  padding-top: 20px;\n"]))),re=function(e){var n,t=e.context;return Object(J.jsx)(ee,{children:Object(J.jsx)(J.Fragment,{children:t&&t.user?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(q.b,{to:"/",children:"Home"}),Object(J.jsx)(q.b,{to:"/profile",children:Object(J.jsxs)(ne,{children:[null===(n=t.user)||void 0===n?void 0:n.firstname,Object(J.jsx)(te,{children:Object(J.jsx)(K,{onClick:function(){t.logout()},children:"Log Out"})})]})})]}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(q.b,{to:"/",children:"Home"}),Object(J.jsx)(q.b,{to:"/login",children:"Login"}),Object(J.jsx)(q.b,{to:"/register",children:"Register"})]})})})},ie=function(){return Object(J.jsx)("h1",{children:"Profile"})},ae=k.c.div(p||(p=Object(N.a)(["\n  ",";\n  z-index: 2;\n  box-sizing: border-box;\n"])),(function(e){return e.theme.templates.centerContent})),se=(k.c.div(x||(x=Object(N.a)(["\n  ",";\n  padding: 20px;\n  background: linear-gradient(90deg, #937ff0, #fc84ba);\n  margin: 10px;\n  border-radius: 5px;\n  width: 300px;\n  position: relative;\n  overflow: hidden;\n"])),(function(e){return e.theme.templates.centerContent})),k.c.h1(h||(h=Object(N.a)(["\n  z-index: 2;\n"]))),k.c.input(m||(m=Object(N.a)(["\n  width: 97%;\n  display: block;\n  font-size: 18px;\n  margin: 20px 0;\n  border: 1px solid red;\n  background: #ffffff8c;\n"]))),k.c.button(O||(O=Object(N.a)(["\n  padding: 5px;\n  outline: none;\n  width: 100%;\n  background: rgb(66, 195, 255);\n  outline: none;\n  border: 1px solid black;\n  cursor: pointer;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),k.c.div(g||(g=Object(N.a)(["\n  height: ","px;\n  width: ","px;\n  position: absolute;\n  top: ","%;\n  left: ","%;\n  background: ",";\n  border-radius: 50%;\n  z-index: 1;\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.top}),(function(e){return e.left}),(function(e){return e.color}))),ce=k.c.a(C||(C=Object(N.a)(["\n  color: black;\n  font-size: 18px;\n  z-index: 2;\n  font-weight: 500;\n"]))),oe=function(e){var n=e.label;return Object(J.jsx)("h3",{style:{color:"green"},children:n})},le=function(e){var n=e.context,t=Object(v.useState)({firstname:"",lastname:"",email:"",password:"",repeat_password:""}),r=Object(R.a)(t,1)[0],i=Object(v.useState)(),a=Object(R.a)(i,1)[0];return Object(J.jsxs)(ae,{children:[function(){if(a)return Object(J.jsx)(H.a,{to:"/"})}(),function(){if(n&&n.user)return Object(J.jsx)(H.a,{to:"/"})}(),Object(J.jsxs)(Z,{children:[Object(J.jsx)(A,{children:"Register"}),Object(J.jsx)(Q.c,{initialValues:r,validationSchema:U.a({firstname:U.b().min(6,"Must be at least 6 chars").max(25,"Max 25 chars").required("Required"),lastname:U.b().min(6,"Must be at least 6 chars").max(25,"Max 25 chars").required("Required"),email:U.b().email("Invalid email address").required("Required"),password:U.b().min(6,"Must be at least 6 chars").max(25,"Max 25 chars").required("Required"),repeat_password:U.b().required().test("passwords-match","Passwords must match ya fool",(function(e){return this.parent.password===e}))}),onSubmit:function(e,t){n.register(e.firstname,e.lastname,e.email,e.password,e.repeat_password),setTimeout((function(){t.resetForm(),t.setSubmitting(!1)}),1)},children:function(e){var n=e.errors,t=e.touched;return Object(J.jsxs)(Q.b,{style:{width:"100%",zIndex:2},children:[Object(J.jsx)(Q.a,{placeholder:"Firstname",className:"input-field",name:"firstname"}),n.firstname&&t.firstname?Object(J.jsx)(Y,{children:n.firstname}):null,Object(J.jsx)(Q.a,{placeholder:"Lastname",className:"input-field",name:"lastname"}),n.lastname&&t.lastname?Object(J.jsx)(Y,{children:n.lastname}):null,Object(J.jsx)(Q.a,{className:"input-field",name:"email",type:"email",placeholder:"Email"}),n.email&&t.email?Object(J.jsx)(Y,{children:n.email}):null,Object(J.jsx)(Q.a,{type:"password",placeholder:"Password",className:"input-field",name:"password"}),n.password&&t.password?Object(J.jsx)(Y,{children:n.password}):null,Object(J.jsx)(Q.a,{type:"password",placeholder:"Reapeat password",className:"input-field",name:"repeat_password"}),n.repeat_password&&t.repeat_password?Object(J.jsx)(Y,{children:n.repeat_password}):null,Object(J.jsx)(K,{disabled:!!(n.email||n.firstname||n.lastname||n.password||n.repeat_password),type:"submit",children:"Submit"})]})}}),a&&Object(J.jsx)(oe,{label:"Successfully"}),Object(J.jsx)(se,{size:150,top:80,left:65,color:"#007cb0de"}),Object(J.jsx)(se,{size:60,top:28,left:48,color:"#007cb0de"}),Object(J.jsx)(se,{size:20,top:5,left:75,color:"#007cb0de"}),n.error&&Object(J.jsx)(Y,{children:n.error}),Object(J.jsx)(ce,{href:"/login",children:"Already have one?Login here."})]}),Object(J.jsxs)("svg",{className:"waves",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:[Object(J.jsx)("defs",{children:Object(J.jsxs)("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[Object(J.jsx)("stop",{offset:"0%",stopColor:"#fc84ba"}),Object(J.jsx)("stop",{offset:"100%",stopColor:"#826ce2"})]})}),Object(J.jsx)("path",{fill:"url(#gradient)",fillOpacity:"1",d:"M0,320L11.4,309.3C22.9,299,46,277,69,266.7C91.4,256,114,256,137,256C160,256,183,256,206,240C228.6,224,251,192,274,186.7C297.1,181,320,203,343,202.7C365.7,203,389,181,411,149.3C434.3,117,457,75,480,64C502.9,53,526,75,549,112C571.4,149,594,203,617,229.3C640,256,663,256,686,224C708.6,192,731,128,754,122.7C777.1,117,800,171,823,186.7C845.7,203,869,181,891,149.3C914.3,117,937,75,960,53.3C982.9,32,1006,32,1029,48C1051.4,64,1074,96,1097,106.7C1120,117,1143,107,1166,122.7C1188.6,139,1211,181,1234,181.3C1257.1,181,1280,139,1303,133.3C1325.7,128,1349,160,1371,144C1394.3,128,1417,64,1429,32L1440,0L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"})]})]})},de=k.c.div(w||(w=Object(N.a)(["\n  ",";\n  background: linear-gradient(164deg, #242e48, #613061);\n  min-height: 100vh;\n  position: relative;\n  overflow: hidden;\n"])),(function(e){return e.theme.templates.centerContent})),ue=function(e){var n=e.context;return Object(J.jsxs)(de,{children:[Object(J.jsx)(re,{context:n}),Object(J.jsxs)(H.d,{children:[Object(J.jsx)(H.b,{exact:!0,path:"/",render:function(){return Object(J.jsx)(G,{})}}),Object(J.jsx)(H.b,{exact:!0,path:"/profile",render:function(){return Object(J.jsx)(ie,{})}}),Object(J.jsx)(H.b,{path:"/login",render:function(){return Object(J.jsx)($,{context:n})}}),Object(J.jsx)(H.b,{path:"/register",render:function(){return Object(J.jsx)(le,{context:n})}})]})]})},je=function(){var e=y.a.useContext(T);return Object(J.jsx)(ue,{context:e})};S.a.render(Object(J.jsx)(y.a.StrictMode,{children:Object(J.jsx)(k.a,{theme:M,children:Object(J.jsx)(q.a,{children:Object(J.jsx)(B,{children:Object(J.jsx)(je,{})})})})}),document.getElementById("root")),L()}},[[225,1,2]]]);
//# sourceMappingURL=main.6e1093c6.chunk.js.map