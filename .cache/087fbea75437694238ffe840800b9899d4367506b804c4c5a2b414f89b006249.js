{"source":"(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{458:function(e,a,t){},730:function(e,a,t){\"use strict\";var l=t(458);t.n(l).a},848:function(e,a,t){\"use strict\";t.r(a);var l,r=t(114),o=(t(115),{props:{customer:{type:[String,Object]}},data:function(){return{openPubilcCustomer:!0}},methods:{close:function(){this.$emit(\"close\",!0)},change_customer_follow:function(){var a=this,e={customerId:a.customer.customer_id};this.$Post(\"api/customer/receipt\",e,function(e){a.$emit(\"success\",!0),a.close()},function(e){a.close()})}},created:function(){}}),s=t(4),i=Object(s.a)(o,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t(\"div\",[t(\"Modal\",{attrs:{title:\"领取公海池客户\",width:\"500\"},on:{\"on-cancel\":a.close},model:{value:a.openPubilcCustomer,callback:function(e){a.openPubilcCustomer=e},expression:\"openPubilcCustomer\"}},[t(\"h3\",[a._v(\"对不起！要领取该线索需要先领取该客户！确定领取该客户？\")]),a._v(\" \"),t(\"div\",{attrs:{slot:\"footer\"},slot:\"footer\"},[t(\"Button\",{attrs:{type:\"primary\"},on:{click:a.change_customer_follow}},[a._v(\"领取\")]),a._v(\" \"),t(\"Button\",{attrs:{type:\"ghost\"},on:{click:a.close}},[a._v(\"放弃\")])],1)])],1)},[],!1,null,null,null);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}i.options.__file=\"publicCustomer.vue\";var c={name:\"cluesLibrary_index\",components:{publicCustomer:i.exports},data:function(){var e,t=this,a=function(e,a,t){\"\"==a||null==a?t(new Error(\"电话不能为空\")):/^1\\d{10}$/.test(a)?t():t(new Error(\"电话格式不正确\"))};return n(e={currnetRow:{},openPublicCustomer:!1,loadingN:!1,loadingY:!1,companyLoading:!1,flag:!1,searchCompany:\"\",page3:1,selectCompany:!1,customerType:\"old\",chooseTypeOpen:!1,customerlabelGroup22:[],search_model2:\"\",search_model:\"\",page:new Number,ishandleSubmit1:!1,SearchValidate1:{customerName:\"\",customerTel:\"\",crealname:\"\",clueStatus:\"\",clueType:\"\",date:\"\",rrealname:\"\",clueLevel:\"\"},ishandleSubmit:!1,SearchValidate:{customerName:\"\",customerTel:\"\",crealname:\"\",clueStatus:\"\",clueType:\"\",date:\"\",clueLevel:\"\"},addTag:!1,isEidt:!1,modal1:!1,modal2:!1,modal22:!1,modal3:!1,modal4:!1},\"selectCompany\",!1),n(e,\"loading\",!0),n(e,\"loading2\",!0),n(e,\"ruleValidate\",{neworold:[{required:!0,message:\"请选择客户类型\",trigger:\"change\"}],customerName:[{required:!0,message:\"请填写客户名称\",trigger:\"change\"}],customerTel:[{required:!0,trigger:\"change\",validator:a}],clueMemo:[{required:!0,message:\"请填写线索说明\",trigger:\"change\"}]}),n(e,\"ruleValidate22\",{customerName:[{required:!0,message:\"请填写客户名称\",trigger:\"change\"}],customerTel:[{required:!0,trigger:\"change\",validator:a}],clueMemo:[{required:!0,message:\"请填写线索说明\",trigger:\"change\"}]}),n(e,\"formValidate\",{neworold:\"1\",customerTel:\"\",clueMemo:\"\",customerName:\"\",companyid:\"\",companyName:\"\",customerId:\"\",affiliationArea:\"guangzhou\"}),n(e,\"formValidate22\",{customerTel:\"\",clueMemo:\"\",customerName:\"\"}),n(e,\"formValidate2\",{cluescontent:\"\",cluestype:\"\",cluesstatus:\"\",companyid:\"\",companyname:\"\",createby:\"\",customername:\"\",id:\"\",label:\"\",receiveby:\"\",tel:\"\",createdate:\"\"}),n(e,\"tableColumns\",[{title:\"客户名称\",key:\"customername\",minWidth:130},{title:\"客户电话\",key:\"tel\",minWidth:130},{title:\"公司名称\",key:\"company_name\",minWidth:200},{title:\"销售人员\",key:\"saler_name\",minWidth:130},{title:\"线索状态\",key:\"cluesstatus\",minWidth:100},{title:\"线索详情\",key:\"memo\",minWidth:300,render:function(e,a){return e(\"div\",{domProps:{innerHTML:a.row.memo}})}},{title:\"线索创建时间\",key:\"createdate\",minWidth:160},{title:\"创建人\",key:\"createby\",minWidth:100},{title:\"线索级别\",key:\"clue_level\",minWidth:120},{title:\"客户类型\",key:\"type\",minWidth:120},{title:\"线索类型\",key:\"cluestype\",minWidth:100},{title:\"操作\",align:\"center\",key:\"action\",fixed:\"right\",width:120,render:function(e,a){return e(\"div\",[e(\"Button\",{props:{type:\"warning\",size:\"small\",permission:\"['cluesLibraryM.y.cheek']\"},style:{marginRight:\"2px\"},on:{click:function(){t.lingq(a.row)}}},\"领取\")])}}]),n(e,\"tableColumns2\",[{title:\"客户名称\",key:\"customername\",minWidth:130},{title:\"客户电话\",key:\"tel\",minWidth:130},{title:\"公司名称\",key:\"company_name\",minWidth:200},{title:\"销售人员\",key:\"saler_name\",minWidth:130},{title:\"客户类型\",key:\"type\",minWidth:120},{title:\"线索状态\",key:\"cluesstatus\",minWidth:100},{title:\"线索详情\",key:\"memo\",minWidth:300,render:function(e,a){return e(\"div\",{domProps:{innerHTML:a.row.memo}})}},{title:\"线索创建时间\",key:\"createdate\",minWidth:160},{title:\"创建人\",key:\"createby\",minWidth:100},{title:\"领取人\",key:\"receiptor\",minWidth:100},{title:\"线索级别\",key:\"clue_level\",minWidth:120},{title:\"线索类型\",key:\"cluestype\",minWidth:100},{title:\"操作\",key:\"action\",fixed:\"right\",width:60,render:function(e,a){return e(\"div\",[e(\"Button\",{props:{type:\"warning\",size:\"small\"},style:{marginRight:\"2px\"},on:{click:function(){t.detailClue(a)}}},\"查看\")])}}]),n(e,\"columns4\",[{type:\"selection\",width:60,align:\"center\"},{title:\"标签\",key:\"labelName\"}]),n(e,\"columns44\",[{type:\"index\",width:60,align:\"center\"},{title:\"公司名称\",key:\"CompanyName\"},{title:\"客户名称\",key:\"NAME\"},{title:\"联系方式\",key:\"TEL\"}]),n(e,\"data\",[]),n(e,\"data1\",[]),n(e,\"tableData\",[]),n(e,\"tableData2\",[]),n(e,\"data4\",[]),n(e,\"customerlabelGroup\",[]),n(e,\"customerlabelGroup2\",[]),n(e,\"cluesTypeValue\",[]),n(e,\"cluesTypeValue2\",[]),n(e,\"companyDetail\",[]),n(e,\"cluesid\",\"\"),n(e,\"pageTotal\",new Number),n(e,\"pageTotal2\",new Number),n(e,\"pageTotal3\",new Number),n(e,\"searchCompany\",\"\"),n(e,\"currentPage\",1),n(e,\"pageSize\",10),n(e,\"customerid\",\"\"),n(e,\"isSearch\",!1),n(e,\"paget\",1),n(e,\"pageSizet\",10),n(e,\"pagey\",1),n(e,\"pageSizey\",10),n(e,\"selectData\",{}),n(e,\"pageTotal22\",new Number),n(e,\"allUser\",[]),n(e,\"cluetype\",[]),n(e,\"clue_level\",[]),n(e,\"clue_level_map\",new Map),n(e,\"affiliation_area\",[]),e},methods:(l={ok2:function(){},cancel2:function(){},handleReset:function(){var e=this;e.SearchValidate.customerName=\"\",e.SearchValidate.customerTel=\"\",e.SearchValidate.crealname=\"\",e.SearchValidate.date=\"\",e.SearchValidate.clueType=\"\",e.SearchValidate.clueLevel=\"\",e.paget=1,e.getTableData()},handleReset1:function(){var e=this;e.SearchValidate1.customerName=\"\",e.SearchValidate1.customerTel=\"\",e.SearchValidate1.crealname=\"\",e.SearchValidate1.date=\"\",e.SearchValidate1.clueType=\"\",e.SearchValidate1.rrealname=\"\",e.SearchValidate1.clueLevel=\"\",e.pagey=1,e.getTableData2()},Search:function(){this.paget=1,this.getTableData()},Search1:function(){this.pagey=1,this.getTableData2()},getDataCenter:function(){var t=this;this.$http.get(\"api/user/findAllUsers\").then(function(e){var a=e.data.data;t.allUser=a});this.$GetDataCenter(\"cluetype,clue_level,affiliation_area\",function(e){var a=e.data.data;t.cluetype=a.cluetype,t.clue_level=a.clue_level,t.clue_level_map=t.$array2map(t.clue_level),t.affiliation_area=a.affiliation_area})},findUserText:function(e){for(var a=0;a<this.allUser.length;a++)if(this.allUser[a].id==e&&\"\"!=e)return this.allUser[a].realname},findCluetypeText:function(e){for(var a=0;a<this.cluetype.length;a++)if(this.cluetype[a].typecode==e&&\"\"!=e)return this.cluetype[a].typename},getTableData:function(){var o=this;o.loadingN=!0;var e={params:{receipt:\"N\",sortField:\"clue_level\",order:\"asc\",page:o.paget,pageSize:o.pageSizet,customerName:o.SearchValidate.customerName,customerTel:o.SearchValidate.customerTel,crealname:o.SearchValidate.crealname,clueLevel:o.SearchValidate.clueLevel,bcreatedate:Object(r.a)(o.SearchValidate.date[0]),ecreatedate:Object(r.a)(o.SearchValidate.date[1]),clueType:o.SearchValidate.clueType,un_clueType:\"xtxs\"}};o.$http.get(\"api/clue/list\",e).then(function(e){!function(e){o.tableData=[],o.pageTotal=e.data.data.total;for(var a=0;a<e.data.data.rows.length;a++){var t=void 0;t=null==e.data.data.rows[a].customer_tel?\"\":e.data.data.rows[a].customer_tel;var l=\"\";e.data.data.rows[a].neworold&&(l=0==e.data.data.rows[a].neworold?\"老客户\":\"新客户\"),o.tableData.push({type:l,id:e.data.data.rows[a].id,cluestype:o.findCluetypeText(e.data.data.rows[a].clue_type),memo:e.data.data.rows[a].clue_memo,cluesstatus:\"未领取\",companyname:e.data.data.rows[a].companyname,tel:t,people:[{tel:t,customername:e.data.data.rows[a].customer_name}],customername:e.data.data.rows[a].customer_name,createby:e.data.data.rows[a].crealname,labelName:e.data.data.rows[a].labelname,createdate:e.data.data.rows[a].createdate,clue_level:o.clue_level_map.get(e.data.data.rows[a].clue_level),saler_name:e.data.data.rows[a].saler_name,customer_id:e.data.data.rows[a].customer_id,company_name:e.data.data.rows[a].company_name})}o.loadingN=!1}(e)})},getTableData2:function(){var o=this;o.loadingY=!0;var e={params:{receipt:\"Y\",sortField:\"receipt_time\",order:\"asc\",page:o.pagey,pageSize:o.pageSizey,customerName:o.SearchValidate1.customerName,customerTel:o.SearchValidate1.customerTel,crealname:o.SearchValidate1.crealname,clueLevel:o.SearchValidate1.clueLevel,bcreatedate:Object(r.a)(o.SearchValidate1.date[0]),ecreatedate:Object(r.a)(o.SearchValidate1.date[1]),clueType:o.SearchValidate1.clueType,rrealname:o.SearchValidate1.rrealname,un_clueType:\"xtxs\"}};o.tableData2=[],o.$http.get(\"api/clue/list\",e).then(function(e){!function(e){o.pageTotal22=e.data.data.total;for(var a=0;a<e.data.data.rows.length;a++){var t=\"\";e.data.data.rows[a].neworold&&(t=0==e.data.data.rows[a].neworold?\"老客户\":\"新客户\");var l=void 0;l=null==e.data.data.rows[a].customer_tel?\"\":e.data.data.rows[a].customer_tel,o.tableData2.push({type:t,id:e.data.data.rows[a].id,cluestype:o.findCluetypeText(e.data.data.rows[a].clue_type),memo:e.data.data.rows[a].clue_memo,receiptor:e.data.data.rows[a].rrealname,cluesstatus:\"已领取\",companyname:e.data.data.rows[a].companyname,tel:l,people:[{tel:l,customername:e.data.data.rows[a].customer_name}],customername:e.data.data.rows[a].customer_name,createby:e.data.data.rows[a].crealname,labelName:e.data.data.rows[a].labelname,createdate:e.data.data.rows[a].createdate,clue_level:o.clue_level_map.get(e.data.data.rows[a].clue_level),saler_name:e.data.data.rows[a].saler_name,customer_id:e.data.data.rows[a].customer_id,company_name:e.data.data.rows[a].company_name})}o.loadingY=!1}(e)})},pageChange:function(e){this.paget=e,this.getTableData()},pageChange22:function(e){this.pagey=e,this.getTableData2()},pageSizeChange:function(e){this.pageSizet=e,this.getTableData()},pageSizeChange22:function(e){this.pageSizey=e,this.getTableData2()},selectRow:function(e){this.cluesid=e.id,this.selectData=e},detail:function(e){var o=this,a=\"/order/queryListByCustomer?customerId=\"+e.row.oacustomerid+\"&page=1&pageSize=10000\";o.modal2=!0,o.formValidate.companyName=e.row.companyname,o.formValidate.name=e.row.name,o.formValidate.tel=e.row.tel,o.formValidate.updatedate=e.row.updatedate,o.formValidate.createby=e.row.createby,o.formValidate.realnumber=e.row.realnumber,this.GetData(a,function(e){for(var a=e.data.data.rows,t=0;t<a.length;t++){var l=\"/order/detail/\"+a[t].id;o.GetData(l,function(e){for(var a=e.data.data.items,t=0;t<a.length;t++)o.data1.push({product:a[t].product,propertys:a[t].propertys,productnumber:a[t].productnumber,paynumber:a[t].paynumber})})}})},EditClues:function(){var e=this;if(\"\"==e.cluesid)e.$Message.warning(\"请选择要编辑的线索!\");else{var a=[];if(e.modal3=!0,e.customerlabelGroup=[],e.formValidate2.cluescontent=e.selectData.clue_memo,e.formValidate2.cluestype=e.selectData.cluestype,e.formValidate2.id=e.selectData.id,e.formValidate2.cluesstatus=e.selectData.cluesstatus,e.formValidate2.createby=e.selectData.createby,e.formValidate2.customerName=e.selectData.customername,e.formValidate2.labels=e.selectData.labelName,e.formValidate2.customerTel=e.selectData.people[0].tel,e.formValidate2.createdate=e.selectData.createdate,null!=e.selectData.labelName){a=e.selectData.labelName.split(\",\");for(var t=0;t<a.length;t++){var l={};l.labelName=a[t],e.customerlabelGroup.push(l)}e.getLabelData()}else e.customerlabelGroup=[]}},DeleteClues:function(){var a=this;\"\"==a.cluesid?a.$Message.warning(\"请选择要删除的线索!\"):a.$Modal.confirm({title:\"删除线索\",content:\"确定要删除此线索吗\",okText:\"确定\",cancelText:\"取消\",onOk:function(){var e={id:a.cluesid};a.PostData(\"/clue/del\",e,function(e){a.$Message.success(\"删除成功!\"),a.getTableData(),a.getTableData2()})}})},getLabelData:function(){var s=this;s.data=[],this.$http.get(\"/api/system/label/list?page=1&pageSize=10\").then(function(e){var a=e.data.data;s.pageTotal2=a.total;for(var t=[],l=0;l<a.rows.length;l++){var o={};o.labelName=a.rows[l].labelName,o.id=a.rows[l].id;for(var r=0;r<s.customerlabelGroup.length;r++)o.labelName==s.customerlabelGroup[r].labelName&&(o._checked=!0,t.push(o));s.data.push(o)}})},pageChange2:function(e){var s=this;this.$http.get(\"/api/system/label/list?page=\"+e+\"&pageSize=10\").then(function(e){s.data=[];var a=e.data.data;s.pageTotal2=a.total;for(var t=[],l=0;l<a.rows.length;l++){var o={};o.labelName=a.rows[l].labelName,o.id=a.rows[l].id;for(var r=0;r<s.customerlabelGroup.length;r++)o.labelName==s.customerlabelGroup[r].labelName&&(o._checked=!0,t.push(o));s.data.push(o)}})},pageSizeChange2:function(e){var s=this;this.$http.get(\"/api/system/label/list?page=1&pageSize=\"+e).then(function(e){s.data=[];var a=e.data.data;s.pageTotal2=a.total;for(var t=[],l=0;l<a.rows.length;l++){var o={};o.labelName=a.rows[l].labelName,o.id=a.rows[l].id;for(var r=0;r<s.customerlabelGroup.length;r++)o.labelName==s.customerlabelGroup[r].labelName&&(o._checked=!0,t.push(o));s.data.push(o)}})},selectionChange:function(e){var a=this;if(0==a.customerlabelGroup.length)a.customerlabelGroup=e;else for(var t=0;t<e.length;t++){for(var l=0,o=0;o<a.customerlabelGroup.length&&e[t].id!=a.customerlabelGroup[o].id;o++)l++;l==a.customerlabelGroup.length&&a.customerlabelGroup.push({id:e[t].id,labelName:e[t].labelName})}},handleClose2:function(e,a){for(var t=0;t<this.customerlabelGroup.length;t++)if(this.customerlabelGroup[t].labelName==a.labelName){var l=this.customerlabelGroup.indexOf(a);-1<l&&this.customerlabelGroup.splice(l,1)}},ok:function(e){var o=this,r=this;setTimeout(function(){o.loading2=!1,o.$refs[e].validate(function(e){if(e){if(null!=r.customerlabelGroup){for(var a=[],t=0;t<r.customerlabelGroup.length;t++)a.push(r.customerlabelGroup[t].id);r.formValidate2.labels=a.toString()}var l={};l.customerTel=r.formValidate2.customerTel,l.customerName=r.formValidate2.customerName,l.labels=r.formValidate2.labels,l.id=r.formValidate2.id,l.clueStatus=r.formValidate2.cluesstatus,l.affiliationArea=r.formValidate2.affiliationArea,o.PostData(\"/clue/update\",l,function(e){r.$Message.success(\"更新成功!\"),r.modal3=!1,r.getTableData()},function(){r.$nextTick(function(){r.loading2=!0}),r.$Message.error(\"更新失败!\")})}else o.$nextTick(function(){o.loading2=!0})})},2e3)},AddClues:function(){this.modal2=!0,this.cluesTypeValue=[]},YYAddClues:function(){this.modal22=!0,this.cluesTypeValue2=[]},ok22:function(e){var l=this,o=this;setTimeout(function(){l.loading=!1,l.$refs[e].validate(function(e){if(e){if(null!=o.customerlabelGroup){for(var a=[],t=0;t<o.customerlabelGroup.length;t++)a.push(o.customerlabelGroup[t].id);o.formValidate.labelIds=a.toString()}l.PostData(\"/clue/create\",o.formValidate,function(e){o.modal2=!1,o.$Message.success(\"新增成功!\"),o.cancel(\"formValidate\"),o.getTableData()},function(){o.$nextTick(function(){o.loading=!0}),o.$Message.error(\"新增失败!\")})}else l.$nextTick(function(){l.loading=!0})})},2e3)},pageChange3:function(e){this.page3=e,this.getCompany()},cancel:function(e){this.customerlabelGroup=[],this.$refs[e].resetFields()},searchCompanyData:function(){var e=this;\"\"!=e.searchCompany?e.isSearch=!0:e.isSearch=!1,e.getCompany()},lingq:function(e){var a=this,t={id:(this.currnetRow=e).id};this.$Post(\"api/clue/receiptClue\",t,function(e){a.getTableData(),a.getTableData2()},function(e){\"请先从公海池领取该客户\"==e.data.msg&&(a.openPublicCustomer=!0)})},detailClue:function(e){var a=this;a.selectData=e.row;var t=[];if(a.modal4=!0,a.customerlabelGroup=[],a.formValidate2.cluescontent=a.selectData.memo,a.formValidate2.cluestype=a.selectData.cluestype,a.formValidate2.id=a.selectData.id,a.formValidate2.cluesstatus=a.selectData.cluesstatus,a.formValidate2.createby=a.selectData.createby,a.formValidate2.customerName=a.selectData.customername,a.formValidate2.labels=a.selectData.labelName,a.formValidate2.customerTel=a.selectData.people[0].tel,a.formValidate2.createdate=a.selectData.createdate,null!=a.selectData.labelName){t=a.selectData.labelName.split(\",\");for(var l=0;l<t.length;l++){var o={};o.labelName=t[l],a.customerlabelGroup.push(o)}a.getLabelData()}else a.customerlabelGroup=[]},selectCancel:function(e,a){e:for(var t=0;t<this.customerlabelGroup.length;t++)if(a.id==this.customerlabelGroup[t].id){this.customerlabelGroup.splice(t,1);break e}},submit_customer:function(){},getCompany:function(){var l=this;l.companyLoading=!0,l.selectCompany=!0;var e={params:{page:l.page3,pageSize:10,companyname:l.searchCompany}};this.$Get(\"api/customer/company/list\",e,function(e){var a=e.data.data;l.companyLoading=!1,l.data4=[],l.pageTotal3=a.total;for(var t=0;t<a.rows.length;t++)l.data4.push({CompanyName:a.rows[t].companyname,TEL:a.rows[t].customerTel,NAME:a.rows[t].customerName,cpid:a.rows[t].id,balance:a.rows[t].balance,gdsreport:\"\",followby:a.rows[t].followby,followbyid:a.rows[t].followbyid,customerId:a.rows[t].customerId})})},keydown1:function(e){\"Enter\"==e.key&&this.searchCompanyData()}},n(l,\"searchCompanyData\",function(){this.page3=1,this.getCompany()}),n(l,\"rowSelect\",function(e){var a=this;a.formValidate.companyName=e.CompanyName,a.formValidate.companyid=e.cpid,a.formValidate.customerTel=e.TEL,a.formValidate.customerName=e.NAME,a.formValidate.customerId=e.customerId,a.selectCompany=!1,this.flag=!1}),n(l,\"get_customer\",function(){0==this.formValidate.neworold&&0==this.flag&&this.getCompany()}),n(l,\"receipt_success\",function(){this.lingq(this.currnetRow)}),l),mounted:function(){this.getDataCenter(),this.getTableData(),this.getTableData2()},computed:{isOldCustomer:function(){return 0==this.formValidate.neworold}}},m=(t(730),Object(s.a)(c,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l(\"div\",{staticStyle:{\"min-width\":\"800px\"}},[l(\"Tabs\",{attrs:{value:\"name1\"}},[l(\"TabPane\",{attrs:{label:\"未领取\",name:\"name1\"}},[l(\"Card\",[l(\"Row\",{staticStyle:{\"margin-bottom\":\"10px\"}},[l(\"Collapse\",{model:{value:t.search_model,callback:function(e){t.search_model=e},expression:\"search_model\"}},[l(\"Panel\",{attrs:{name:\"1\"}},[l(\"Icon\",{staticStyle:{\"margin-left\":\"20px\",\"margin-right\":\"5px\"},attrs:{type:\"search\"}}),t._v(\"\\n                            筛选\\n                            \"),l(\"div\",{attrs:{slot:\"content\"},on:{keydown:function(e){return\"button\"in e||!t._k(e.keyCode,\"enter\",13,e.key,\"Enter\")?t.Search(e):null}},slot:\"content\"},[l(\"Form\",{ref:\"SearchValidate\",attrs:{model:t.SearchValidate,\"label-width\":80}},[l(\"Row\",{attrs:{gutter:16}},[l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"客户名称：\",prop:\"customerName\"}},[l(\"Input\",{attrs:{size:\"small\"},model:{value:t.SearchValidate.customerName,callback:function(e){t.$set(t.SearchValidate,\"customerName\",e)},expression:\"SearchValidate.customerName\"}})],1)],1),t._v(\" \"),l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"客户电话：\",prop:\"customerTel\"}},[l(\"Input\",{attrs:{size:\"small\"},model:{value:t.SearchValidate.customerTel,callback:function(e){t.$set(t.SearchValidate,\"customerTel\",e)},expression:\"SearchValidate.customerTel\"}})],1)],1),t._v(\" \"),l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"创建人：\",prop:\"crealname\"}},[l(\"Input\",{attrs:{size:\"small\"},model:{value:t.SearchValidate.crealname,callback:function(e){t.$set(t.SearchValidate,\"crealname\",e)},expression:\"SearchValidate.crealname\"}})],1)],1)],1),t._v(\" \"),l(\"Row\",{staticStyle:{height:\"56px\"},attrs:{gutter:16}},[l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"线索类型：\",prop:\"clueType\"}},[l(\"Select\",{attrs:{transfer:\"\",size:\"small\"},model:{value:t.SearchValidate.clueType,callback:function(e){t.$set(t.SearchValidate,\"clueType\",e)},expression:\"SearchValidate.clueType\"}},t._l(t.cluetype,function(e){return l(\"Option\",{key:e.id,attrs:{value:e.typecode}},[t._v(t._s(e.typename))])}),1)],1)],1),t._v(\" \"),l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"线索级别：\",prop:\"clueLevel\"}},[l(\"Select\",{attrs:{transfer:\"\",size:\"small\"},model:{value:t.SearchValidate.clueLevel,callback:function(e){t.$set(t.SearchValidate,\"clueLevel\",e)},expression:\"SearchValidate.clueLevel\"}},t._l(t.clue_level,function(e){return l(\"Option\",{key:e.id,attrs:{value:e.typecode}},[t._v(t._s(e.typename))])}),1)],1)],1),t._v(\" \"),l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"创建时间：\",prop:\"date\"}},[l(\"DatePicker\",{staticStyle:{width:\"100%\"},attrs:{transfer:\"\",type:\"daterange\",size:\"small\",placement:\"bottom-end\"},model:{value:t.SearchValidate.date,callback:function(e){t.$set(t.SearchValidate,\"date\",e)},expression:\"SearchValidate.date\"}})],1)],1)],1),t._v(\" \"),l(\"center\",[l(\"FormItem\",{staticStyle:{\"margin-top\":\"10px\"}},[l(\"Button\",{attrs:{type:\"primary\"},on:{click:t.Search}},[t._v(\"搜索\")]),t._v(\" \"),l(\"Button\",{staticStyle:{\"margin-left\":\"8px\"},attrs:{type:\"ghost\"},on:{click:function(e){t.handleReset(\"SearchValidate\")}}},[t._v(\"\\n                                                重置\\n                                            \")])],1)],1)],1)],1)],1)],1)],1),t._v(\" \"),l(\"Row\",[l(\"ButtonGroup\",[l(\"Button\",{directives:[{name:\"permission\",rawName:\"v-permission\",value:[\"cluesLibraryM.n.add\"],expression:\"['cluesLibraryM.n.add']\"}],attrs:{type:\"primary\",icon:\"ios-color-wand-outline\"},on:{click:t.AddClues}},[t._v(\"新增\")]),t._v(\" \"),l(\"Button\",{directives:[{name:\"permission\",rawName:\"v-permission\",value:[\"cluesLibraryM.n.delete\"],expression:\"['cluesLibraryM.n.delete']\"}],attrs:{type:\"primary\",icon:\"ios-color-wand-outline\"},on:{click:t.DeleteClues}},[t._v(\"删除\")])],1)],1),t._v(\" \"),l(\"Row\",{staticStyle:{\"margin-top\":\"10px\"}},[l(\"Table\",{attrs:{\"highlight-row\":\"\",size:\"small\",loading:t.loadingN,columns:t.tableColumns,data:t.tableData},on:{\"on-current-change\":t.selectRow}}),t._v(\" \"),l(\"Page\",{staticStyle:{\"margin-top\":\"10px\"},attrs:{size:\"small\",total:t.pageTotal,\"show-total\":\"\",\"show-sizer\":\"\",\"show-elevator\":\"\",current:t.paget},on:{\"update:current\":function(e){t.paget=e},\"on-change\":t.pageChange,\"on-page-size-change\":t.pageSizeChange}})],1)],1)],1),t._v(\" \"),l(\"TabPane\",{attrs:{label:\"已领取\",name:\"name2\"}},[l(\"Card\",[l(\"Row\",{staticStyle:{\"margin-bottom\":\"10px\"}},[l(\"Collapse\",{model:{value:t.search_model2,callback:function(e){t.search_model2=e},expression:\"search_model2\"}},[l(\"Panel\",{attrs:{name:\"1\"}},[l(\"Icon\",{staticStyle:{\"margin-left\":\"20px\",\"margin-right\":\"5px\"},attrs:{type:\"search\"}}),t._v(\"\\n                            筛选\\n                            \"),l(\"div\",{attrs:{slot:\"content\"},on:{keydown:function(e){return\"button\"in e||!t._k(e.keyCode,\"enter\",13,e.key,\"Enter\")?t.Search1(e):null}},slot:\"content\"},[l(\"Form\",{ref:\"SearchValidate1\",attrs:{model:t.SearchValidate1,\"label-width\":80}},[l(\"Row\",{staticStyle:{height:\"56px\"},attrs:{gutter:16}},[l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"客户名称：\",prop:\"customerName\"}},[l(\"Input\",{attrs:{size:\"small\"},model:{value:t.SearchValidate1.customerName,callback:function(e){t.$set(t.SearchValidate1,\"customerName\",e)},expression:\"SearchValidate1.customerName\"}})],1)],1),t._v(\" \"),l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"客户电话：\",prop:\"customerTel\"}},[l(\"Input\",{attrs:{size:\"small\"},model:{value:t.SearchValidate1.customerTel,callback:function(e){t.$set(t.SearchValidate1,\"customerTel\",e)},expression:\"SearchValidate1.customerTel\"}})],1)],1),t._v(\" \"),l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"创建人：\",prop:\"crealname\"}},[l(\"Input\",{attrs:{size:\"small\"},model:{value:t.SearchValidate1.crealname,callback:function(e){t.$set(t.SearchValidate1,\"crealname\",e)},expression:\"SearchValidate1.crealname\"}})],1)],1)],1),t._v(\" \"),l(\"Row\",{staticStyle:{height:\"56px\"},attrs:{gutter:16}},[l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"线索类型：\",prop:\"clueType\"}},[l(\"Select\",{attrs:{transfer:\"\",size:\"small\"},model:{value:t.SearchValidate1.clueType,callback:function(e){t.$set(t.SearchValidate1,\"clueType\",e)},expression:\"SearchValidate1.clueType\"}},t._l(t.cluetype,function(e){return l(\"Option\",{key:e.id,attrs:{value:e.typecode}},[t._v(t._s(e.typename))])}),1)],1)],1),t._v(\" \"),l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"领取人：\",prop:\"rrealname\"}},[l(\"Input\",{attrs:{size:\"small\"},model:{value:t.SearchValidate1.rrealname,callback:function(e){t.$set(t.SearchValidate1,\"rrealname\",e)},expression:\"SearchValidate1.rrealname\"}})],1)],1),t._v(\" \"),l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"线索级别：\",prop:\"clueLevel\"}},[l(\"Select\",{attrs:{transfer:\"\",size:\"small\"},model:{value:t.SearchValidate1.clueLevel,callback:function(e){t.$set(t.SearchValidate1,\"clueLevel\",e)},expression:\"SearchValidate1.clueLevel\"}},t._l(t.clue_level,function(e){return l(\"Option\",{key:e.id,attrs:{value:e.typecode}},[t._v(t._s(e.typename))])}),1)],1)],1)],1),t._v(\" \"),l(\"Row\",{staticStyle:{height:\"56px\"},attrs:{gutter:16}},[l(\"Col\",{attrs:{span:\"8\"}},[l(\"FormItem\",{attrs:{label:\"创建时间：\",prop:\"date\"}},[l(\"DatePicker\",{staticStyle:{width:\"100%\"},attrs:{placement:\"bottom-end\",transfer:\"\",type:\"daterange\",size:\"small\"},model:{value:t.SearchValidate1.date,callback:function(e){t.$set(t.SearchValidate1,\"date\",e)},expression:\"SearchValidate1.date\"}})],1)],1)],1),t._v(\" \"),l(\"center\",[l(\"FormItem\",{staticStyle:{\"margin-top\":\"10px\"}},[l(\"Button\",{attrs:{type:\"primary\"},on:{click:t.Search1}},[t._v(\"搜索\")]),t._v(\" \"),l(\"Button\",{staticStyle:{\"margin-left\":\"8px\"},attrs:{type:\"ghost\"},on:{click:function(e){t.handleReset1(\"SearchValidate1\")}}},[t._v(\"\\n                                                重置\\n                                            \")])],1)],1)],1)],1)],1)],1)],1),t._v(\" \"),l(\"Row\",[l(\"ButtonGroup\",[l(\"Button\",{directives:[{name:\"permission\",rawName:\"v-permission\",value:[\"cluesLibraryM.y.delete\"],expression:\"['cluesLibraryM.y.delete']\"}],attrs:{type:\"primary\",icon:\"ios-color-wand-outline\"},on:{click:t.DeleteClues}},[t._v(\"删除\")])],1)],1),t._v(\" \"),l(\"Row\",{staticStyle:{\"margin-top\":\"10px\"}},[l(\"Table\",{attrs:{\"highlight-row\":\"\",size:\"small\",loading:t.loadingY,columns:t.tableColumns2,data:t.tableData2},on:{\"on-current-change\":t.selectRow}}),t._v(\" \"),l(\"Page\",{staticStyle:{\"margin-top\":\"10px\"},attrs:{size:\"small\",total:t.pageTotal22,\"show-total\":\"\",\"show-sizer\":\"\",\"show-elevator\":\"\"},on:{\"on-change\":t.pageChange22,\"on-page-size-change\":t.pageSizeChange22}})],1)],1)],1)],1),t._v(\" \"),l(\"Modal\",{attrs:{title:\"新增线索\",\"class-name\":\"vertical-center-modal\",\"ok-text\":\"保存\",styles:{top:\"10%\"},loading:t.loading},on:{\"on-ok\":function(e){t.ok22(\"formValidate\")},\"on-cancel\":function(e){t.cancel(\"formValidate\")}},model:{value:t.modal2,callback:function(e){t.modal2=e},expression:\"modal2\"}},[l(\"Form\",{ref:\"formValidate\",attrs:{model:t.formValidate,rules:t.ruleValidate,\"label-width\":90}},[l(\"FormItem\",{attrs:{label:\"客户类型\",prop:\"neworold\"}},[l(\"RadioGroup\",{attrs:{size:\"large\"},model:{value:t.formValidate.neworold,callback:function(e){t.$set(t.formValidate,\"neworold\",e)},expression:\"formValidate.neworold\"}},[l(\"Radio\",{attrs:{label:\"0\"}},[t._v(\"老客户\")]),t._v(\" \"),l(\"Radio\",{attrs:{label:\"1\"}},[t._v(\"新客户\")])],1)],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"公司名称\",prop:\"companyname\"}},[l(\"Select\",{attrs:{size:\"small\"},model:{value:t.formValidate.affiliationArea,callback:function(e){t.$set(t.formValidate,\"affiliationArea\",e)},expression:\"formValidate.affiliationArea\"}},t._l(t.affiliation_area,function(e,a){return l(\"Option\",{key:a,attrs:{value:e.typecode}},[t._v(t._s(e.typename))])}),1)],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"客户名称\",prop:\"customerName\"}},[l(\"Input\",{attrs:{size:\"small\",readonly:t.isOldCustomer},on:{\"on-focus\":t.get_customer},model:{value:t.formValidate.customerName,callback:function(e){t.$set(t.formValidate,\"customerName\",e)},expression:\"formValidate.customerName\"}})],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"公司名称\",prop:\"companyName\"}},[l(\"Input\",{attrs:{readonly:t.isOldCustomer,size:\"small\"},on:{\"on-focus\":t.get_customer},model:{value:t.formValidate.companyName,callback:function(e){t.$set(t.formValidate,\"companyName\",e)},expression:\"formValidate.companyName\"}})],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"客户电话\",prop:\"customerTel\"}},[l(\"Input\",{attrs:{size:\"small\",readonly:t.isOldCustomer},on:{\"on-focus\":t.get_customer},model:{value:t.formValidate.customerTel,callback:function(e){t.$set(t.formValidate,\"customerTel\",e)},expression:\"formValidate.customerTel\"}})],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"标签\",prop:\"labels\"}},[t._l(t.customerlabelGroup,function(e){return l(\"Tag\",{key:e,attrs:{name:e,id:e.id,closable:\"\"},on:{\"on-close\":t.handleClose2}},[t._v(\"\\n                    \"+t._s(e.labelName)+\"\\n                \")])}),t._v(\" \"),l(\"Button\",{attrs:{icon:\"ios-plus-empty\",type:\"dashed\",size:\"small\"},on:{click:function(e){t.getLabelData(),t.addTag=!0}}},[t._v(\"添加\")])],2),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"线索说明\",prop:\"clueMemo\"}},[l(\"Input\",{attrs:{type:\"textarea\",autosize:{minRows:2,maxRows:5},size:\"small\"},model:{value:t.formValidate.clueMemo,callback:function(e){t.$set(t.formValidate,\"clueMemo\",e)},expression:\"formValidate.clueMemo\"}},[t._v(\">\")])],1)],1)],1),t._v(\" \"),l(\"Modal\",{attrs:{title:\"运营新增线索\",\"class-name\":\"vertical-center-modal\",\"ok-text\":\"保存\",styles:{top:\"10%\"},loading:t.loading},on:{\"on-ok\":function(e){t.ok222(\"formValidate22\")},\"on-cancel\":function(e){t.cancel(\"formValidate22\")}},model:{value:t.modal22,callback:function(e){t.modal22=e},expression:\"modal22\"}},[l(\"Form\",{ref:\"formValidate22\",attrs:{model:t.formValidate22,rules:t.ruleValidate22,\"label-width\":90}},[l(\"FormItem\",{attrs:{label:\"客户名称\",prop:\"customerName\"}},[l(\"Input\",{attrs:{size:\"small\"},model:{value:t.formValidate22.customerName,callback:function(e){t.$set(t.formValidate22,\"customerName\",e)},expression:\"formValidate22.customerName\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"客户电话\",prop:\"customerTel\"}},[l(\"Input\",{attrs:{size:\"small\"},model:{value:t.formValidate22.customerTel,callback:function(e){t.$set(t.formValidate22,\"customerTel\",e)},expression:\"formValidate22.customerTel\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"运营来源\",prop:\"labels\"}},[t._l(t.customerlabelGroup22,function(e){return l(\"Tag\",{key:e,attrs:{name:e,id:e.id,closable:\"\"},on:{\"on-close\":t.handleClose2}},[t._v(\"\\n                    \"+t._s(e.labelName)+\"\\n                \")])}),t._v(\" \"),l(\"Button\",{attrs:{icon:\"ios-plus-empty\",type:\"dashed\",size:\"small\"},on:{click:function(e){t.getLabelData(),t.addTag=!0}}},[t._v(\"添加\")])],2),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"标签\",prop:\"labels\"}},[t._l(t.customerlabelGroup,function(e){return l(\"Tag\",{key:e,attrs:{name:e,id:e.id,closable:\"\"},on:{\"on-close\":t.handleClose2}},[t._v(\"\\n                    \"+t._s(e.labelName)+\"\\n                \")])}),t._v(\" \"),l(\"Button\",{attrs:{icon:\"ios-plus-empty\",type:\"dashed\",size:\"small\"},on:{click:function(e){t.getLabelData(),t.addTag=!0}}},[t._v(\"添加\")])],2),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"线索说明\",prop:\"clueMemo\"}},[l(\"Input\",{attrs:{type:\"textarea\",autosize:{minRows:2,maxRows:5},size:\"small\"},model:{value:t.formValidate22.clueMemo,callback:function(e){t.$set(t.formValidate22,\"clueMemo\",e)},expression:\"formValidate22.clueMemo\"}},[t._v(\">\")])],1)],1)],1),t._v(\" \"),l(\"Modal\",{attrs:{title:\"编辑线索\",\"class-name\":\"vertical-center-modal\",\"ok-text\":\"保存\",styles:{top:\"10%\"},loading:t.loading2},on:{\"on-ok\":function(e){t.ok(\"formValidate2\")},\"on-cancel\":function(e){t.cancel(\"formValidate2\")}},model:{value:t.modal3,callback:function(e){t.modal3=e},expression:\"modal3\"}},[l(\"Form\",{ref:\"formValidate2\",attrs:{model:t.formValidate2,\"label-width\":90}},[l(\"FormItem\",{attrs:{label:\"客户名称\",prop:\"customerName\"}},[l(\"Input\",{attrs:{disabled:\"\",size:\"small\"},model:{value:t.formValidate2.customerName,callback:function(e){t.$set(t.formValidate2,\"customerName\",e)},expression:\"formValidate2.customerName\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"客户电话\",prop:\"customerTel\"}},[l(\"Input\",{attrs:{disabled:\"\",size:\"small\"},model:{value:t.formValidate2.customerTel,callback:function(e){t.$set(t.formValidate2,\"customerTel\",e)},expression:\"formValidate2.customerTel\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"线索状态\",prop:\"cluesstatus\"}},[l(\"Input\",{attrs:{disabled:\"\",size:\"small\"},model:{value:t.formValidate2.cluesstatus,callback:function(e){t.$set(t.formValidate2,\"cluesstatus\",e)},expression:\"formValidate2.cluesstatus\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"线索类型\",prop:\"cluestype\"}},[l(\"Input\",{attrs:{disabled:\"\",size:\"small\"},model:{value:t.formValidate2.cluestype,callback:function(e){t.$set(t.formValidate2,\"cluestype\",e)},expression:\"formValidate2.cluestype\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"创建人\",prop:\"createby\"}},[l(\"Input\",{attrs:{disabled:\"\",size:\"small\"},model:{value:t.formValidate2.createby,callback:function(e){t.$set(t.formValidate2,\"createby\",e)},expression:\"formValidate2.createby\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"创建时间\",prop:\"createdate\"}},[l(\"Input\",{attrs:{disabled:\"\",size:\"small\"},model:{value:t.formValidate2.createdate,callback:function(e){t.$set(t.formValidate2,\"createdate\",e)},expression:\"formValidate2.createdate\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"线索标签\",prop:\"labels\"}},[t._l(t.customerlabelGroup,function(e){return l(\"Tag\",{key:e,attrs:{name:e,id:e.id,closable:\"\"},on:{\"on-close\":t.handleClose2}},[t._v(\"\\n                    \"+t._s(e.labelName)+\"\\n                \")])}),t._v(\" \"),l(\"Button\",{attrs:{icon:\"ios-plus-empty\",type:\"dashed\",size:\"small\"},on:{click:function(e){t.getLabelData(),t.addTag=!0}}},[t._v(\"添加\")])],2),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"线索说明\",prop:\"cluescontent\"}},[l(\"Input\",{attrs:{type:\"textarea\",autosize:{minRows:2,maxRows:5}},model:{value:t.formValidate2.cluescontent,callback:function(e){t.$set(t.formValidate2,\"cluescontent\",e)},expression:\"formValidate2.cluescontent\"}})],1)],1)],1),t._v(\" \"),l(\"Modal\",{attrs:{title:\"查看线索\",\"class-name\":\"vertical-center-modal\",styles:{top:\"10%\"}},model:{value:t.modal4,callback:function(e){t.modal4=e},expression:\"modal4\"}},[l(\"Form\",{ref:\"formValidate2\",attrs:{model:t.formValidate2,\"label-width\":90}},[l(\"FormItem\",{attrs:{label:\"客户名称\",prop:\"customerName\"}},[l(\"Input\",{attrs:{disabled:\"\",size:\"small\"},model:{value:t.formValidate2.customerName,callback:function(e){t.$set(t.formValidate2,\"customerName\",e)},expression:\"formValidate2.customerName\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"客户电话\",prop:\"customerTel\"}},[l(\"Input\",{attrs:{disabled:\"\",size:\"small\"},model:{value:t.formValidate2.customerTel,callback:function(e){t.$set(t.formValidate2,\"customerTel\",e)},expression:\"formValidate2.customerTel\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"线索状态\",prop:\"cluesstatus\"}},[l(\"Input\",{attrs:{disabled:\"\",size:\"small\"},model:{value:t.formValidate2.cluesstatus,callback:function(e){t.$set(t.formValidate2,\"cluesstatus\",e)},expression:\"formValidate2.cluesstatus\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"线索类型\",prop:\"cluestype\"}},[l(\"Input\",{attrs:{disabled:\"\",size:\"small\"},model:{value:t.formValidate2.cluestype,callback:function(e){t.$set(t.formValidate2,\"cluestype\",e)},expression:\"formValidate2.cluestype\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"创建人\",prop:\"createby\"}},[l(\"Input\",{attrs:{disabled:\"\",size:\"small\"},model:{value:t.formValidate2.createby,callback:function(e){t.$set(t.formValidate2,\"createby\",e)},expression:\"formValidate2.createby\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"创建时间\",prop:\"createdate\"}},[l(\"Input\",{attrs:{disabled:\"\",size:\"small\"},model:{value:t.formValidate2.createdate,callback:function(e){t.$set(t.formValidate2,\"createdate\",e)},expression:\"formValidate2.createdate\"}},[t._v(\">\")])],1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"线索标签\",prop:\"labels\"}},t._l(t.customerlabelGroup,function(e){return l(\"Tag\",{key:e,attrs:{name:e,id:e.id}},[t._v(\"\\n                    \"+t._s(e.labelName)+\"\\n                \")])}),1),t._v(\" \"),l(\"FormItem\",{attrs:{label:\"线索说明\",prop:\"cluescontent\"}},[l(\"Input\",{attrs:{type:\"textarea\",autosize:{minRows:2,maxRows:5},disabled:\"\"},model:{value:t.formValidate2.cluescontent,callback:function(e){t.$set(t.formValidate2,\"cluescontent\",e)},expression:\"formValidate2.cluescontent\"}})],1)],1)],1),t._v(\" \"),l(\"Modal\",{attrs:{title:\"添加标签\"},on:{\"on-ok\":t.ok2,\"on-cancel\":t.cancel2},model:{value:t.addTag,callback:function(e){t.addTag=e},expression:\"addTag\"}},[l(\"Table\",{ref:\"selection\",attrs:{border:\"\",columns:t.columns4,data:t.data},on:{\"on-select-cancel\":t.selectCancel,\"on-selection-change\":t.selectionChange}}),t._v(\" \"),l(\"Page\",{staticStyle:{\"margin-top\":\"10px\"},attrs:{size:\"small\",total:t.pageTotal2,\"show-total\":\"\",\"show-sizer\":\"\",\"show-elevator\":\"\"},on:{\"on-change\":t.pageChange2,\"on-page-size-change\":t.pageSizeChange2}})],1),t._v(\" \"),l(\"Modal\",{attrs:{title:\"选择公司\",width:\"80%\"},model:{value:t.selectCompany,callback:function(e){t.selectCompany=e},expression:\"selectCompany\"}},[l(\"Row\",{attrs:{gutter:16}},[l(\"Col\",{attrs:{span:\"8\"}},[l(\"Input\",{attrs:{placeholder:\"输入公司名称搜索\"},on:{\"on-keydown\":t.keydown1},model:{value:t.searchCompany,callback:function(e){t.searchCompany=e},expression:\"searchCompany\"}},[l(\"Button\",{attrs:{slot:\"append\",icon:\"ios-search\"},on:{click:t.searchCompanyData},slot:\"append\"},[t._v(\"搜索\")])],1)],1)],1),t._v(\" \"),l(\"Table\",{ref:\"selection\",staticStyle:{\"margin-top\":\"10px\"},attrs:{border:\"\",\"highlight-row\":\"\",size:\"small\",columns:t.columns44,data:t.data4,loading:t.companyLoading},on:{\"on-row-dblclick\":t.rowSelect}}),t._v(\" \"),l(\"Page\",{staticStyle:{\"margin-top\":\"10px\"},attrs:{size:\"small\",total:t.pageTotal3,current:t.page3,\"show-total\":\"\",\"show-elevator\":\"\"},on:{\"update:current\":function(e){t.page3=e},\"on-change\":t.pageChange3}}),t._v(\" \"),l(\"div\",{attrs:{slot:\"footer\"},slot:\"footer\"})],1),t._v(\" \"),t.openPublicCustomer?l(\"public-customer\",{attrs:{customer:t.currnetRow},on:{close:function(e){t.openPublicCustomer=!1},success:t.receipt_success}}):t._e()],1)},[],!1,null,null,null));m.options.__file=\"cluesLibrary_table.vue\";a.default=m.exports}}]);"}