webpackJsonp([2],{A9eU:function(t,a){},QWRR:function(t,a){t.exports={header:{message:"消息",friend:"好友",blog:"博文",myPage:"我的",addFriend:"添加好友",roomlist:"添加群聊"}}},S9EE:function(t,a){},UUlz:function(t,a){},ftSK:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("Dd8w"),o=e.n(n),i=e("QWRR"),s=e.n(i),r=e("NYxO"),c={data:function(){return{active:0,poputName:"好友账号",userNumber:"1555555",addPoput:!1,addSocket:!1,navData:["message","friend","blog","myPage"]}},methods:o()({onClickLeft:function(){console.log(11)},onClickRight:function(){this.addSocket=!this.addSocket},layoutClick:function(t){},showWin:function(t){this.poputName="addFriend"===t?"好友账号":"群账号或群名称",this.addPoput=!0},getAccount:function(){var t=this,a={iphone:this.userNumber};this.getFriend(a).then(function(a){a.data.length?(t.addPoput=!1,t.addSocket=!1,t.SET_FRIEND(a.data[0]),s.a.header.addFriend="添加好友",t.$router.push({path:"/addFriend"})):t.$toast.fail({position:"top",message:"账号不存在"})})},getGroup:function(){var t=this,a={roomName:this.userNumber};this.getRoom(a).then(function(a){a.data.length?(t.addPoput=!1,t.addSocket=!1,t.SET_GROUP(a.data),t.$router.push({path:"/roomlist"})):t.$toast.fail({position:"top",message:"群名称不存在"})})},tabChange:function(t){this.$router.push({path:"/"+this.navData[t]})},pageClose:function(){this.$router.back()}},Object(r.d)(["SET_FRIEND","SET_GROUP"]),Object(r.b)(["getFriend","getRoom"])),computed:{headerTitle:function(){return s.a.header[this.$route.name]},navVar:function(){return["消息","好友","博文","我的"].indexOf(this.headerTitle)}},watch:{headerTitle:function(){this.active=this.navData.indexOf(this.$route.name),this.addSocket=!1}}},u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"layout",on:{click:t.layoutClick}},[e("van-nav-bar",{staticClass:"layout-title",attrs:{title:t.headerTitle},on:{"click-left":t.pageClose,"click-right":t.onClickRight}},[t.navVar<0?e("van-icon",{staticClass:"layout-return",attrs:{slot:"left",name:"arrow-left"},slot:"left"}):t._e(),t._v(" "),t.navVar>=0?e("van-icon",{staticClass:"layout-add",attrs:{slot:"right",name:"add-o"},slot:"right"}):t._e()],1),t._v(" "),e("transition",{attrs:{name:"van-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.addSocket,expression:"addSocket"}],staticClass:"add-socket",attrs:{id:"add-socket_div"}},[e("ul",[e("van-button",{attrs:{"bottom-action":""},on:{click:function(a){t.showWin("addFriend")}}},[t._v("添加好友")]),t._v(" "),e("van-button",{attrs:{"bottom-action":""},on:{click:function(a){t.showWin("addFlock")}}},[t._v("添加群聊")])],1)])]),t._v(" "),e("router-view"),t._v(" "),e("van-tabbar",{on:{change:t.tabChange},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[e("van-tabbar-item",{attrs:{icon:"chat"}},[e("span",[t._v("消息")])]),t._v(" "),e("van-tabbar-item",{attrs:{icon:"contact"}},[e("span",[t._v("好友")])]),t._v(" "),e("van-tabbar-item",{attrs:{icon:"pending-orders"}},[e("span",[t._v("博文")])]),t._v(" "),e("van-tabbar-item",{attrs:{icon:"setting"}},[e("span",[t._v("我的")])])],1),t._v(" "),e("van-popup",{staticClass:"layout-add_poput",attrs:{position:"top"},model:{value:t.addPoput,callback:function(a){t.addPoput=a},expression:"addPoput"}},[e("h2",{staticClass:"add-poput_title"},[t._v("请输入"+t._s(t.poputName))]),t._v(" "),e("van-cell-group",[e("van-field",{attrs:{label:t.poputName+":",icon:"clear",placeholder:"请输入账号",required:""},on:{"click-icon":function(a){t.userNumber=""}},model:{value:t.userNumber,callback:function(a){t.userNumber=a},expression:"userNumber"}})],1),t._v(" "),e("div",{staticClass:"poput-btn_box"},[e("div",{staticClass:"btn-box_div"},["好友账号"===t.poputName?e("van-button",{attrs:{type:"primary"},on:{click:t.getAccount}},[t._v("查找")]):e("van-button",{attrs:{type:"primary"},on:{click:t.getGroup}},[t._v("查找")]),t._v(" "),e("van-button",{on:{click:function(a){t.addPoput=!1}}},[t._v("取消")])],1)])],1)],1)},staticRenderFns:[]};var d=e("VU/8")(c,u,!1,function(t){e("UUlz"),e("A9eU")},"data-v-544910e0",null).exports,l={data:function(){return{from:{iphone:"15555537368",password:"12345"}}},methods:o()({submit:function(){var t=this,a={iphone:"登陆账号",password:"密码"};for(var e in this.from)this.from[e]||this.$toast(a[e]+" 不能为空");this.logIn(this.from).then(function(a){if(a){t.SET_ISLOTIN(!0);var e={userName:a.data[0].userName,userId:String(a.data[0].id)};t.SET_USER(e)}})},singUp:function(){this.$router.push({path:"/singUp"})}},Object(r.b)(["logIn"]),Object(r.d)(["SET_ISLOTIN","SET_USER"]))},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"login"},[e("div",{staticClass:"login-header"},[t._v("登录")]),t._v(" "),e("div",{staticClass:"login-from"},[e("ul",{staticClass:"login-from_ul"},[e("li",{staticClass:"login-from_userName"},[e("van-icon",{attrs:{name:"contact"}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.from.iphone,expression:"from.iphone"}],staticClass:"from-inp",attrs:{autocomplete:"off",placeholder:"输入手机号"},domProps:{value:t.from.iphone},on:{input:function(a){a.target.composing||t.$set(t.from,"iphone",a.target.value)}}})],1),t._v(" "),e("li",[e("van-icon",{attrs:{name:"password-not-view"}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.from.password,expression:"from.password"}],staticClass:"from-inp",attrs:{type:"password",autocomplete:"off",placeholder:"输入密码"},domProps:{value:t.from.password},on:{input:function(a){a.target.composing||t.$set(t.from,"password",a.target.value)}}})],1)])]),t._v(" "),e("van-button",{staticClass:"login-from_submit",attrs:{type:"default"},nativeOn:{click:function(a){return t.submit(a)}}},[t._v("登录")]),t._v(" "),e("div",{staticClass:"login-singIn"},[e("van-button",{staticClass:"login-from_submit",on:{click:t.singUp}},[t._v("立即注册")])],1)],1)},staticRenderFns:[]};var p={components:{layout:d,login:e("VU/8")(l,v,!1,function(t){e("sNWo")},"data-v-55ed6aa4",null).exports},computed:o()({},Object(r.c)(["isLogin"]),{manView:function(){return this.isLogin?"layout":"login"}})},m={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"main-page"},[a(this.manView,{tag:"component",staticClass:"main-page_com"})],1)},staticRenderFns:[]};var f=e("VU/8")(p,m,!1,function(t){e("S9EE")},"data-v-0c048cdf",null);a.default=f.exports},sNWo:function(t,a){}});