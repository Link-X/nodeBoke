webpackJsonp([1],{Auwq:function(s,e){},Cdx3:function(s,e,t){var i=t("sB3e"),r=t("lktj");t("uqUo")("keys",function(){return function(s){return r(i(s))}})},Rf88:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("mvHQ"),r=t.n(i),n=t("Dd8w"),o=t.n(n),m=t("fZjL"),a=t.n(m),g=t("NYxO"),u=t("0tE7"),c=t("oAV5"),l=this,h={data:function(){return{msgWin:!1,message:"",messList:{2:{userName:"许道斌",msgTitle:"今晚去哪吃",msgArr:[],sign:"private",userImg:"http://pic29.photophoto.cn/20131204/0034034499213463_b.jpg",date:"15:30",toUserId:"2"},1:{userName:"xu",msgTitle:"",msgArr:[],userImg:"http://f2.topitme.com/2/b9/71/112660598401871b92l.jpg",sign:"private",date:"15:30",toUserId:"1"},123:{userName:"系统群",msgTitle:"",msgArr:[],sign:"room",userImg:"../../../static/toxiang.png",date:"15:30",toUserId:"123"},1234:{userName:"系统群2",msgTitle:"",msgArr:[],userImg:"../../../static/toxiang.png",sign:"room",date:"15:30",toUserId:"1234"}},msgTest:{},messNumber:[]}},sockets:{connect:function(){console.log(l.$socket)},yesEnter:function(s){this.SET_USER({userName:this.user.userName,userId:this.user.userId})},sys:function(s){console.log(s)},privatChat:function(s){console.log(s,"来消息啦"),this.setMessage(s)},roomMessage:function(s){console.log(s,"群消息来啦"),this.setMessage(s)}},created:function(){var s={userName:this.user.userName,userId:this.user.userId};this.messNumber=a()(this.messList),this.$socket.emit("newUser",s),this.pageCome(),this.enterStatemRoom()},methods:o()({pageCome:function(){this.$route.query.id&&(this.$set(this.messList,this.$route.query.id,{userName:this.$route.query.name,msgTitle:"",msgArr:[],sign:this.$route.query.sign,userImg:this.$route.query.userImg,date:"15:30",toUserId:this.$route.query.id}),this.showMsgWin(this.$route.query.id))},showMsgWin:function(s){for(var e in this.messList)e===s&&(this.msgTest=JSON.parse(r()(this.messList[e])));if("room"===this.msgTest.sign){var t={userName:this.user.userName,roomId:this.msgTest.toUserId};this.enterRoom(t)}this.msgWin=!0},msgWinClose:function(){for(var s in this.messList)s===this.msgTest.toUserId&&(this.messList[s].msgArr=[],this.messList[s].msgArr=this.msgTest.msgArr.concat([]),this.msgTest.msgArr.length&&(this.messList[s].msgTitle=this.msgTest.msgArr[this.msgTest.msgArr.length-1].msg));this.msgTest={userName:"",msgTitle:"",msgArr:[],sign:"",date:"",toUserId:""},this.msgWin=!1},sendMessage:function(){var s={userName:this.msgTest.userName,sendName:this.user.userName,msg:this.message,sign:this.msgTest.sign,userId:this.user.userId,toUserId:this.msgTest.toUserId,roomId:this.msgTest.toUserId};this.msgTest.msgArr.push({msg:this.message,sign:"my",id:1e3*Math.random()+"iphone"}),this.message="","private"!==this.msgTest.sign?(s.sign="room",s.userId=this.msgTest.toUserId,this.$socket.emit("sendRoomChat",s)):this.$socket.emit("sendPrivateChat",s)},enterRoom:function(s){var e={roomId:s.roomId,userName:s.userName};this.$socket.emit("join",e)},setMessage:function(s){if(s.userId===this.msgTest.toUserId)return this.msgTest.msgArr.push({msg:s.msg,sign:"he",id:1e3*Math.random()+"iphone"}),this.msgTest.date=s.date,void(this.messList[s.userId].msgTitle=s.msg);if(this.messList[s.userId])this.messList[s.userId].msgArr.push({msg:s.msg,sign:"he",id:1e3*Math.random()+"iphone"}),this.messList[s.userId].msgTitle=s.msg;else{var e={userName:s.sendName,msgTitle:s.msg,msgArr:[{msg:s.msg,sign:"he",id:1e3*Math.random()+"iphone"}],sign:s.sign,date:"15:30",toUserId:s.userId,roomId:s.roomId};this.$set(this.messList,s.userId,e),this.messNumber.push(s.userId)}},enterStatemRoom:function(){for(var s in this.messList)if("room"===this.messList[s].sign){var e={roomId:this.messList[s].toUserId,userName:this.user.userName};this.enterRoom(e)}},sendRoomChat:function(){this.$socket.emit("sendRoomChat",{roomId:123,msg:"我是"+this.user.userName})},scroll:function(s){console.log(s)},scrollEnd:function(){console.log(1)},touchDom:function(s,e){Object(c.a)(s,e)}},Object(g.d)(["SET_USER"])),computed:o()({},Object(g.c)(["user"])),components:{Scroll:u.a}},d={render:function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",{staticClass:"message"},[i("Scroll",{staticClass:"message-scroll",attrs:{data:s.messNumber},on:{scroll:s.scroll,scrollEnd:s.scrollEnd}},[i("ul",{staticClass:"message-ul",on:{touchstart:function(e){s.touchDom(e,"add")},touchend:function(e){s.touchDom(e,"rem")}}},s._l(s.messList,function(e){return i("li",{key:e.toUserId,staticClass:"message-li",on:{click:function(t){s.showMsgWin(e.toUserId)}}},[i("van-cell-swipe",{attrs:{"right-width":65}},[i("van-cell-group",[i("div",{staticClass:"van-cell_center"},[i("div",{staticClass:"cell-center_img"},[i("img",{attrs:{src:e.userImg}})]),s._v(" "),i("div",{staticClass:"cell-center_text"},[i("div",{staticClass:"center-text_title"},[s._v(s._s(e.userName))]),s._v(" "),i("div",[s._v(s._s(e.msgTitle))])]),s._v(" "),i("div",{staticClass:"cell-center_time"},[s._v(s._s(e.date))])])]),s._v(" "),i("span",{staticClass:"van-cell_right",attrs:{slot:"right"},slot:"right"},[s._v("删除")])],1)],1)}))]),s._v(" "),i("van-popup",{attrs:{position:"right",overlay:!1},model:{value:s.msgWin,callback:function(e){s.msgWin=e},expression:"msgWin"}},[i("div",{staticClass:"message-win"},[i("van-nav-bar",{attrs:{title:s.msgTest.userName},on:{"click-left":s.msgWinClose}},[i("van-icon",{staticClass:"layout-return",attrs:{slot:"left",name:"arrow-left"},slot:"left"})],1),s._v(" "),i("Scroll",{staticClass:"message-scroll",attrs:{data:s.msgTest.msgArr}},[i("div",{staticClass:"message-win_center"},s._l(s.msgTest.msgArr,function(e){return i("div",{key:e.id,staticClass:"message-win_another",class:{"message-win_my":"my"===e.sign}},["he"===e.sign?i("div",{staticClass:"message-win_img"},[i("img",{attrs:{src:t("lI0s")}})]):s._e(),s._v(" "),i("span",{staticClass:"message-win_text",class:{"message-win_text2":"my"===e.sign}},[s._v(s._s(e.msg))]),s._v(" "),"my"===e.sign?i("div",{staticClass:"message-win_img message-win_myImg"},[i("img",{attrs:{src:t("Y+/+")}})]):s._e()])}))]),s._v(" "),i("div",{staticClass:"message-win_send"},[i("van-cell-group",[i("van-field",{attrs:{type:"textarea",placeholder:"请输入留言",rows:"1",autosize:""},model:{value:s.message,callback:function(e){s.message=e},expression:"message"}})],1),s._v(" "),i("van-button",{on:{click:s.sendMessage}},[s._v("发送")])],1)],1)])],1)},staticRenderFns:[]};var v=t("VU/8")(h,d,!1,function(s){t("Auwq"),t("cZKq")},"data-v-0e4b4077",null);e.default=v.exports},"Y+/+":function(s,e,t){s.exports=t.p+"static/img/toux2.ff368ce.jpg"},cZKq:function(s,e){},fZjL:function(s,e,t){s.exports={default:t("jFbC"),__esModule:!0}},jFbC:function(s,e,t){t("Cdx3"),s.exports=t("FeBl").Object.keys},lI0s:function(s,e,t){s.exports=t.p+"static/img/toxiang.6c667f9.png"},mvHQ:function(s,e,t){s.exports={default:t("qkKv"),__esModule:!0}},qkKv:function(s,e,t){var i=t("FeBl"),r=i.JSON||(i.JSON={stringify:JSON.stringify});s.exports=function(s){return r.stringify.apply(r,arguments)}},uqUo:function(s,e,t){var i=t("kM2E"),r=t("FeBl"),n=t("S82l");s.exports=function(s,e){var t=(r.Object||{})[s]||Object[s],o={};o[s]=e(t),i(i.S+i.F*n(function(){t(1)}),"Object",o)}}});