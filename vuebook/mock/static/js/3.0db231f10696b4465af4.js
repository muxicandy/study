webpackJsonp([3],{Cdx3:function(e,t,o){var n=o("sB3e"),r=o("lktj");o("uqUo")("keys",function(){return function(e){return r(n(e))}})},Sbue:function(e,t){},fZjL:function(e,t,o){e.exports={default:o("jFbC"),__esModule:!0}},jFbC:function(e,t,o){o("Cdx3"),e.exports=o("FeBl").Object.keys},uqUo:function(e,t,o){var n=o("kM2E"),r=o("FeBl"),a=o("S82l");e.exports=function(e,t){var o=(r.Object||{})[e]||Object[e],u={};u[e]=t(o),n(n.S+n.F*a(function(){o(1)}),"Object",u)}},wHgX:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("Xxa5"),r=o.n(n),a=o("fZjL"),u=o.n(a),i=o("exGp"),s=o.n(i),c=o("UeVD"),b=o("gyMJ"),d={data:function(){return{book:{}}},computed:{bid:function(){return this.$route.params.bid}},created:function(){this.getData()},methods:{getData:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.c)(e.bid);case 2:e.book=t.sent,u()(e.book).length>0||e.$router.push("/list");case 4:case"end":return t.stop()}},t,e)}))()},update:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.f)(e.bid,e.book);case 2:e.$router.push("/list");case 3:case"end":return t.stop()}},t,e)}))()}},components:{MHeader:c.a}},v={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"detail-content"},[o("MHeader",{attrs:{back:!0}},[e._v("详情")]),e._v(" "),o("div",{staticClass:"detail"},[o("h2",[e._v("书的名称")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookName,expression:"book.bookName"}],attrs:{type:"text"},domProps:{value:e.book.bookName},on:{input:function(t){t.target.composing||e.$set(e.book,"bookName",t.target.value)}}}),e._v(" "),o("h2",[e._v("书的信息")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookInfo,expression:"book.bookInfo"}],attrs:{type:"text"},domProps:{value:e.book.bookInfo},on:{input:function(t){t.target.composing||e.$set(e.book,"bookInfo",t.target.value)}}}),e._v(" "),o("h2",[e._v("书的价格")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookPrice,expression:"book.bookPrice"}],attrs:{type:"text"},domProps:{value:e.book.bookPrice},on:{input:function(t){t.target.composing||e.$set(e.book,"bookPrice",t.target.value)}}}),e._v(" "),o("button",{on:{click:function(t){e.update(e.bid,e.book)}}},[e._v("确认修改")])])],1)},staticRenderFns:[]};var f=o("VU/8")(d,v,!1,function(e){o("Sbue")},"data-v-1a687d4f",null);t.default=f.exports}});
//# sourceMappingURL=3.0db231f10696b4465af4.js.map