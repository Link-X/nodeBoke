webpackJsonp([11],{CMvz:function(e,n){},Ea15:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),i={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=t("VU/8")({name:"App"},i,!1,function(e){t("Ea15")},null,null).exports,a=t("/ocq"),u=function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"Rf88"))};o.default.use(a.a);var s=new a.a({routes:[{path:"/",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"ftSK"))},children:[{path:"",name:"message",component:u},{path:"/message",name:"message",component:u},{path:"/friend",name:"friend",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"D2do"))}},{path:"/blog",name:"blog",component:function(){return t.e(8).then(t.bind(null,"a5Ln"))}},{path:"/myPage",name:"myPage",component:function(){return t.e(5).then(t.bind(null,"GviU"))}},{path:"/addFriend",name:"addFriend",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"OKHP"))}},{path:"/roomlist",name:"roomlist",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"V1ed"))}}]},{path:"/singUp",name:"singUp",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"K7nG"))}},{path:"*",component:function(){return t.e(6).then(t.bind(null,"ml8W"))}}]}),c=t("NYxO"),d=t("//Fk"),l=t.n(d),m=t("mtWM"),p=t.n(m),f=t("ymRw"),h=t.n(f),g=p.a.create({baseURL:"http://127.0.0.1:5005/api",timeout:1e5,headers:{"Content-Type":"application/json;charset=UTF-8"}});g.interceptors.request.use(function(e){return e},function(e){return console.error(e),l.a.reject(e)}),g.interceptors.response.use(function(e){var n=e.data;if(200===n.code)return n;200!==n.code&&f.Toast.fail({forbidClick:!0,message:n.msg,position:"top"})},function(e){return f.Toast.fail({forbidClick:!0,message:"请求错误",position:"top"}),l.a.reject(e)});var v={logIn:function(e,n){e.commit,e.state;return g.post("/user/getUser",n).then(function(e){return e})},getFriend:function(e,n){e.commit,e.state;return g.post("/user/getFriend",n)},getRoom:function(e,n){e.commit,e.state;return g.post("/room/getRoom",n)},addFriend:function(e,n){e.commit,e.state;return g.post("/user/addFriend",n)},getFriendList:function(e,n){e.commit,e.state;return g.post("/user/friendList",n)},addUser:function(e,n){e.commit,e.state;return g.post("/user/add",n)}};o.default.use(c.a);var b=new c.a.Store({state:{isLogin:!1,user:{},friend:{},group:[]},getters:{isLogin:function(e){return e.isLogin},user:function(e){return e.user},friend:function(e){return e.friend},group:function(e){return e.group}},actions:v,mutations:{SET_ISLOTIN:function(e,n){e.isLogin=n},SET_USER:function(e,n){e.user=n},SET_FRIEND:function(e,n){e.friend=n},SET_GROUP:function(e,n){e.group=n}}}),w=t("cTzj"),E=t.n(w),L=(t("UoMW"),t("easo"),t("CMvz"),t("hMcO")),U=t.n(L);o.default.config.productionTip=!1,o.default.use(h.a),o.default.use(U.a,"http://127.0.0.1:5005"),o.default.use(E.a,{preLoad:1.3,loading:"/static/sys/loading.gif",attempt:1}),new o.default({el:"#app",store:b,router:s,components:{App:r},template:"<App />"})},UoMW:function(e,n){var t=document.documentElement,o=375,i=1,r=1/i,a="orientationchange"in window?"orientationchange":"resize",u=document.createElement("meta");function s(){var e=t.clientWidth;e/i>o&&(e=o*i),t.dataset.width=e,t.dataset.persent=e/o*100,t.style.fontSize=e/o*100+"px"}u.name="viewport",u.content="width=device-width, user-scalable=no, initial-scale="+r+", maximum-scale="+r+", minimum-scale="+r,t.appendChild(u),s(),document.addEventListener&&window.addEventListener(a,s,!1)},easo:function(e,n){}},["NHnr"]);