{"source":"(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{860:function(t,e,a){\"use strict\";a.r(e);var o={name:\"complainAndAdvice_index\",data:function(){return{button_loading:!1,replycontent:\"\",openDetail:!1,openReply:!1,search:\"\",header:[{title:\"系统评价得分\",key:\"score\",minWidth:150},{title:\"意见或建议\",key:\"suggestion\",minWidth:300},{title:\"评价时间\",key:\"createdate\",minWidth:150},{title:\"评价人\",key:\"realname\",minWidth:150}],data:[],page:1,total:new Number,current_row:\"\"}},methods:{getData:function(){var e=this,t={params:{page:e.page,pageSize:10,sortField:\"createdate\"}};this.$Get(\"api/system/systemFeedbackList\",t,function(t){e.data=t.data.data.rows,e.total=t.data.data.total})},showdetail:function(){\"\"==this.current_row||null==this.current_row?this.$Message.warning(\"请选择一行进行查看！\"):this.openDetail=!0},close_detail:function(){this.openDetail=!1},reply:function(){\"\"==this.current_row||null==this.current_row?this.$Message.warning(\"请选择一行进行查看！\"):this.openReply=!0},submit_reply:function(){var e=this;e.button_loading=!0;var t={feedback:e.current_row.id,feedbackby:e.current_row.createby,replycontent:e.replycontent};this.$Post(\"api/system/replySystemFeedback\",t,function(t){e.button_loading=!1,e.openReply=!1},function(t){e.button_loading=!1})},close_reply:function(){this.openReply=!1},save_current_row:function(t){this.current_row=t},pageChange:function(t){this.page=t,this.getData()}},created:function(){this.getData()}},n=a(4),r=Object(n.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(\"Card\",[a(\"Row\",[a(\"ButtonGroup\",{staticStyle:{float:\"left\"}},[a(\"Button\",{attrs:{type:\"primary\",icon:\"information-circled\"},on:{click:e.showdetail}},[e._v(\"查看\")]),e._v(\" \"),a(\"Button\",{attrs:{type:\"primary\",icon:\"ios-color-wand-outline\"},on:{click:e.reply}},[e._v(\"回复\")])],1)],1),e._v(\" \"),a(\"Row\",{staticStyle:{\"margin-top\":\"10px\"}},[a(\"Table\",{ref:\"selection\",attrs:{\"highlight-row\":\"\",size:\"small\",columns:e.header,data:e.data},on:{\"on-current-change\":e.save_current_row,\"on-row-dblclick\":e.showdetail}}),e._v(\" \"),a(\"Page\",{staticStyle:{\"margin-top\":\"10px\"},attrs:{placement:\"top\",size:\"small\",total:e.total,\"show-total\":\"\",\"show-sizer\":\"\",\"show-elevator\":\"\"},on:{\"on-change\":e.pageChange}})],1),e._v(\" \"),a(\"Modal\",{attrs:{title:\"查看详情\",width:\"600\"},model:{value:e.openDetail,callback:function(t){e.openDetail=t},expression:\"openDetail\"}},[a(\"Form\",{attrs:{\"label-width\":100}},[a(\"Row\",{attrs:{gutter:16}},[a(\"Col\",{attrs:{span:\"24\"}},[a(\"FormItem\",{attrs:{prop:\"companyName\",label:\"评价人：\"}},[a(\"Input\",{attrs:{type:\"text\",readonly:\"\"},model:{value:e.current_row.realname,callback:function(t){e.$set(e.current_row,\"realname\",t)},expression:\"current_row.realname\"}})],1)],1),e._v(\" \"),a(\"Col\",{attrs:{span:\"24\"}},[a(\"FormItem\",{attrs:{prop:\"companyName\",label:\"反馈与意见：\"}},[a(\"Input\",{attrs:{type:\"textarea\",readonly:\"\"},model:{value:e.current_row.suggestion,callback:function(t){e.$set(e.current_row,\"suggestion\",t)},expression:\"current_row.suggestion\"}})],1)],1)],1)],1),e._v(\" \"),a(\"div\",{attrs:{slot:\"footer\"},slot:\"footer\"},[a(\"Button\",{attrs:{type:\"ghost\"},on:{click:e.close_detail}},[e._v(\"关闭\")])],1)],1),e._v(\" \"),a(\"Modal\",{attrs:{title:\"回复\",width:\"600\"},model:{value:e.openReply,callback:function(t){e.openReply=t},expression:\"openReply\"}},[a(\"Form\",{attrs:{\"label-width\":100}},[a(\"Row\",{attrs:{gutter:16}},[a(\"Col\",{attrs:{span:\"24\"}},[a(\"FormItem\",{attrs:{prop:\"realname\",label:\"评价人：\"}},[a(\"Input\",{attrs:{type:\"text\",readonly:\"\"},model:{value:e.current_row.realname,callback:function(t){e.$set(e.current_row,\"realname\",t)},expression:\"current_row.realname\"}})],1)],1),e._v(\" \"),a(\"Col\",{attrs:{span:\"24\"}},[a(\"FormItem\",{attrs:{prop:\"suggestion\",label:\"反馈与意见：\"}},[a(\"Input\",{attrs:{type:\"textarea\",readonly:\"\"},model:{value:e.current_row.suggestion,callback:function(t){e.$set(e.current_row,\"suggestion\",t)},expression:\"current_row.suggestion\"}})],1)],1),e._v(\" \"),a(\"Col\",{attrs:{span:\"24\"}},[a(\"FormItem\",{attrs:{prop:\"replycontent\",label:\"回复内容：\"}},[a(\"Input\",{attrs:{type:\"textarea\"},model:{value:e.replycontent,callback:function(t){e.replycontent=t},expression:\"replycontent\"}})],1)],1)],1)],1),e._v(\" \"),a(\"div\",{attrs:{slot:\"footer\"},slot:\"footer\"},[a(\"Button\",{attrs:{type:\"primary\",loading:e.button_loading},on:{click:e.submit_reply}},[e._v(\"提交\")]),e._v(\" \"),a(\"Button\",{attrs:{type:\"ghost\"},on:{click:e.close_reply}},[e._v(\"关闭\")])],1)],1)],1)},[],!1,null,null,null);r.options.__file=\"complainAndAdvice.vue\";e.default=r.exports}}]);"}