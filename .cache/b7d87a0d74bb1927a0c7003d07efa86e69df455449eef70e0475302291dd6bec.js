{"source":"(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{403:function(t,a,e){t.exports=e(160)(218)},832:function(t,a,e){\"use strict\";e.r(a);var n=e(114),r={data:function(){return{type:\"day\",dateRange:[],tableLoading:!1,open_person_history:!1,historyHeader:[{title:\"销售人员\",key:\"realname\",align:\"center\"},{title:\"创建时间\",key:\"begin_period\",align:\"center\"},{title:\"是否完成\",key:\"statusName\",align:\"center\"},{title:\"计划销售额\",key:\"saleroom\",align:\"center\"},{title:\"实际销售额\",key:\"finish_saleroom\",align:\"center\"},{title:\"计划新增客户数\",key:\"new_customer_num\",align:\"center\"},{title:\"实际新增客户数\",key:\"finish_new_customer_num\",align:\"center\"}],historyData:[],pageTotal:new Number,page:1,pageSize:10,CommonresultType:\"\",CommonresultType_Map:new Map,saler:\"\",allSaler:[]}},methods:{date_change:function(t){this.dateRange[0]=t[0],this.dateRange[1]=t[1],this.getHistoryData()},pageChange:function(t){this.page=t,this.getHistoryData()},getHistoryData:function(){var e=this;e.tableLoading=!0;var t={params:{begin_period:Object(n.b)(e.dateRange[0]),end_period:Object(n.b)(e.dateRange[1]),page:e.page,pageSize:e.pageSize,type:e.type,saler:e.saler,sortField:\"begin_period\"}};this.$Get(\"api/crm/sale/index/person/plan/list\",t,function(t){e.pageTotal=t.data.data.total,e.historyData=t.data.data.rows;for(var a=0;a<e.historyData.length;a++)e.historyData[a].status&&(e.historyData[a].statusName=e.CommonresultType_Map.get(e.historyData[a].status));e.tableLoading=!1})},getDataCenter:function(){var a=this;this.$GetDataCenter(\"CommonresultType\",function(t){a.CommonresultType=t.data.data.CommonresultType,a.CommonresultType_Map=a.$array2map(a.CommonresultType)})},get_all_saler:function(){var a=this;this.$Get(\"api/user/getAllUserListByDepartId\",{params:{departId:11532}},function(t){a.allSaler=t.data.data,a.allSaler.push({id:\"\",realname:\"\"})})}},created:function(){this.getDataCenter(),this.get_all_saler(),this.getHistoryData()}},o=e(4),i=Object(o.a)(r,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e(\"div\",[e(\"Card\",{attrs:{title:\"个人计划\"}},[e(\"Row\",{attrs:{gutter:16,type:\"flex\",justify:\"space-around\"}},[e(\"Col\",{attrs:{span:\"6\"}},[e(\"Select\",{attrs:{size:\"small\",placeholder:\"请选择人员\"},on:{\"on-change\":function(t){a.getHistoryData()}},model:{value:a.saler,callback:function(t){a.saler=t},expression:\"saler\"}},a._l(a.allSaler,function(t){return e(\"Option\",{key:t.id,attrs:{value:t.id}},[a._v(a._s(t.realname))])}),1)],1),a._v(\" \"),e(\"Col\",{attrs:{span:\"8\"}},[e(\"DatePicker\",{staticStyle:{width:\"100%\"},attrs:{type:\"daterange\",placement:\"bottom\",placeholder:\"选择日期\",size:\"small\",transfer:\"\"},on:{\"on-change\":a.date_change},model:{value:a.dateRange,callback:function(t){a.dateRange=t},expression:\"dateRange\"}})],1),a._v(\" \"),e(\"Col\",{attrs:{span:\"6\"}},[e(\"Select\",{attrs:{size:\"small\"},on:{\"on-change\":function(t){a.getHistoryData()}},model:{value:a.type,callback:function(t){a.type=t},expression:\"type\"}},[e(\"Option\",{attrs:{value:\"week\"}},[a._v(\"周计划\")]),a._v(\" \"),e(\"Option\",{attrs:{value:\"day\"}},[a._v(\"日计划\")])],1)],1)],1),a._v(\" \"),e(\"Row\",{staticStyle:{\"margin-top\":\"10px\"},attrs:{gutter:16}},[e(\"Table\",{attrs:{columns:a.historyHeader,data:a.historyData,loading:a.tableLoading}}),a._v(\" \"),e(\"Page\",{staticStyle:{\"margin-top\":\"10px\"},attrs:{size:\"small\",total:a.pageTotal,\"show-total\":\"\",\"show-elevator\":\"\",current:a.page},on:{\"update:current\":function(t){a.page=t},\"on-change\":a.pageChange}})],1),a._v(\" \"),e(\"div\",{attrs:{slot:\"footer\"},slot:\"footer\"})],1)],1)},[],!1,null,null,null);i.options.__file=\"historyData.vue\";var l=i.exports,s={data:function(){return{dateRange:[],tableLoading:!1,open_team_rank:!1,teamRankHeader:[{title:\"销售排名\",key:\"row_no\",align:\"center\"},{title:\"销售人员\",key:\"realname\",align:\"center\"},{title:\"销售金额\",key:\"sumrealnumber\",align:\"center\"},{title:\"新增客户数\",key:\"new_customer\",align:\"center\"},{title:\"团队名\",key:\"departname\",align:\"center\"}],teamRankData:[],pageTotal:new Number,page:1,pageSize:10}},methods:{pageChange:function(t){this.page=t,this.getRankData()},getRankData:function(){var a=this;a.tableLoading=!0;var t={params:{begin_createdate:Object(n.a)(a.dateRange[0]),end_createdate:Object(n.a)(a.dateRange[1]),page:a.page,pageSize:a.pageSize}};this.$Get(\"api/crm/sale/index/team/performance/ranking\",t,function(t){a.pageTotal=t.data.data.total,a.teamRankData=t.data.data.rows,a.tableLoading=!1})}},created:function(){this.getRankData()}},c=Object(o.a)(s,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e(\"div\",[e(\"Card\",{attrs:{title:\"销售排行榜\",width:\"588\"},model:{value:a.open_team_rank,callback:function(t){a.open_team_rank=t},expression:\"open_team_rank\"}},[e(\"Row\",{attrs:{gutter:16}},[e(\"center\",[e(\"DatePicker\",{staticStyle:{width:\"200px\"},attrs:{type:\"daterange\",placement:\"bottom\",placeholder:\"选择日期\",size:\"small\"},on:{\"on-change\":function(t){a.getRankData()}},model:{value:a.dateRange,callback:function(t){a.dateRange=t},expression:\"dateRange\"}})],1)],1),a._v(\" \"),e(\"Row\",{staticStyle:{\"margin-top\":\"10px\"},attrs:{gutter:16}},[e(\"Table\",{attrs:{columns:a.teamRankHeader,data:a.teamRankData,loading:a.tableLoading}}),a._v(\" \"),e(\"Page\",{staticStyle:{\"margin-top\":\"10px\"},attrs:{size:\"small\",total:a.pageTotal,\"show-total\":\"\",\"show-elevator\":\"\",current:a.page},on:{\"update:current\":function(t){a.page=t},\"on-change\":a.pageChange}})],1)],1)],1)},[],!1,null,null,null);c.options.__file=\"finish.vue\";var p=c.exports,d=e(403),u=e.n(d),g={components:{VePie:u.a},data:function(){return{departId:\"11\",chartData:{columns:[\"name\",\"value\"],rows:[]},optionData:[]}},methods:{getTableData:function(){var a=this,t=void 0;t=\"11\"==a.departId?{params:{departId:\"\"}}:{params:{departId:a.departId}},this.$Get(\"api/crm/sale/index/customer/source/report\",t,function(t){a.chartData.rows=t.data.data})},getOption:function(){var a=this;this.$Get(\"api/system/depart/list\",{params:{terminal_flag:\"1\",alias_code:\"MARKET\"}},function(t){a.optionData=t.data.data,a.optionData.push({ID:\"11\",departname:\"全部\"})})}},created:function(){this.getOption(),this.getTableData()}},m=Object(o.a)(g,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e(\"div\",[e(\"Row\",{staticStyle:{\"margin-bottom\":\"40px\"}},[e(\"center\",[e(\"Select\",{staticStyle:{width:\"150px\"},attrs:{size:\"small\"},on:{\"on-change\":a.getTableData},model:{value:a.departId,callback:function(t){a.departId=t},expression:\"departId\"}},a._l(a.optionData,function(t){return e(\"Option\",{key:t.ID,attrs:{value:t.ID}},[a._v(a._s(t.departname))])}),1)],1)],1),a._v(\" \"),e(\"Row\",[e(\"ve-pie\",{attrs:{data:a.chartData}})],1)],1)},[],!1,null,null,null);m.options.__file=\"classic.vue\";var h=m.exports,_={components:{VePie:u.a},data:function(){return{type:\"volume\",chartData:{columns:[\"name\",\"value\"],rows:[]}}},methods:{getTableData:function(){var a=this,t={params:{type:a.type}};this.$Get(\"api/crm/sale/index/channel/type/report\",t,function(t){a.chartData.rows=t.data.data})}},created:function(){this.getTableData()}},v=Object(o.a)(_,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e(\"div\",[e(\"Row\",{staticStyle:{\"margin-bottom\":\"40px\"}},[e(\"center\",[e(\"Select\",{staticStyle:{width:\"150px\"},attrs:{size:\"small\"},on:{\"on-change\":a.getTableData},model:{value:a.type,callback:function(t){a.type=t},expression:\"type\"}},[e(\"Option\",{attrs:{value:\"volume\"}},[a._v(\"累计销售额\")]),a._v(\" \"),e(\"Option\",{attrs:{value:\"customer_num\"}},[a._v(\"累计新增客户\")])],1)],1)],1),a._v(\" \"),e(\"Row\",[e(\"ve-pie\",{attrs:{data:a.chartData}})],1)],1)},[],!1,null,null,null);v.options.__file=\"attitude.vue\";var y={name:\"statistics_index\",components:{historyData:l,finish:p,classic:h,attitude:v.exports},data:function(){return{}}},f=Object(o.a)(y,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e(\"div\",{staticStyle:{\"min-width\":\"700px\"}},[e(\"Row\",{attrs:{gutter:16}},[e(\"Col\",{attrs:{span:\"24\"}},[e(\"history-data\")],1)],1),t._v(\" \"),e(\"Row\",{attrs:{gutter:16}},[e(\"Col\",{attrs:{span:\"24\"}},[e(\"finish\")],1)],1),t._v(\" \"),e(\"Row\",[e(\"Col\",{attrs:{span:\"12\"}},[e(\"Card\",[e(\"p\",{attrs:{slot:\"title\"},slot:\"title\"},[e(\"Icon\",{attrs:{type:\"android-map\"}}),t._v(\"\\n                    客户来源分析\\n                \")],1),t._v(\" \"),e(\"classic\")],1)],1),t._v(\" \"),e(\"Col\",{attrs:{span:\"12\"}},[e(\"Card\",[e(\"p\",{attrs:{slot:\"title\"},slot:\"title\"},[e(\"Icon\",{attrs:{type:\"android-map\"}}),t._v(\"\\n                    渠道价值分析\\n                \")],1),t._v(\" \"),e(\"attitude\")],1)],1)],1)],1)},[],!1,null,null,null);f.options.__file=\"index.vue\";a.default=f.exports}}]);"}