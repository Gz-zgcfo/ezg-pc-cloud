{"source":"(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{841:function(e,t,a){\"use strict\";a.r(t);var r={props:{departAlias:{type:Array}},data:function(){return{openResoureType:!1,formValidate:{fileTypeName:\"\",plural:\"Y\",useDeparts:[],showCustomer:\"Y\"},loading:!1}},methods:{create_type:function(){var t=this;t.loading=!0;var e={fileTypeName:t.formValidate.fileTypeName,plural:t.formValidate.plural,useDeparts:t.formValidate.useDeparts.join(\",\"),showCustomer:t.formValidate.showCustomer};this.$Post(\"api/customer/file/type/create\",e,function(e){t.openResoureType=!1,t.loading=!1,t.$emit(\"update\",!0),t.reset_type()},function(e){t.loading=!1})},reset_type:function(){this.formValidate.fileTypeName=\"\",this.formValidate.plural=\"Y\",this.formValidate.useDeparts=[],this.formValidate.showCustomer=\"Y\"}},created:function(){var t=this;this.$bus.off(\"OPEN_CREATE_RESOURE_TYPE\"),this.$bus.on(\"OPEN_CREATE_RESOURE_TYPE\",function(e){t.openResoureType=!0})}},o=a(4),l=Object(o.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(\"div\",[a(\"Modal\",{attrs:{title:\"新增资料类型\",width:\"500\"},model:{value:t.openResoureType,callback:function(e){t.openResoureType=e},expression:\"openResoureType\"}},[a(\"Form\",{ref:\"formValidate\",attrs:{model:t.formValidate,\"label-width\":120}},[a(\"FormItem\",{attrs:{label:\"资料类型：\",prop:\"fileTypeName\"}},[a(\"Input\",{attrs:{placeholder:\"请输入资料类型\"},model:{value:t.formValidate.fileTypeName,callback:function(e){t.$set(t.formValidate,\"fileTypeName\",e)},expression:\"formValidate.fileTypeName\"}})],1),t._v(\" \"),a(\"FormItem\",{attrs:{label:\"数量：\",prop:\"plural\"}},[a(\"RadioGroup\",{model:{value:t.formValidate.plural,callback:function(e){t.$set(t.formValidate,\"plural\",e)},expression:\"formValidate.plural\"}},[a(\"Radio\",{attrs:{label:\"Y\"}},[t._v(\"复数\")]),t._v(\" \"),a(\"Radio\",{attrs:{label:\"N\"}},[t._v(\"唯一\")])],1)],1),t._v(\" \"),a(\"FormItem\",{attrs:{label:\"部门：\",prop:\"useDeparts\"}},[a(\"Select\",{attrs:{placeholder:\"选择使用部门\",multiple:\"\"},model:{value:t.formValidate.useDeparts,callback:function(e){t.$set(t.formValidate,\"useDeparts\",e)},expression:\"formValidate.useDeparts\"}},t._l(t.departAlias,function(e){return a(\"Option\",{key:e.id,attrs:{value:e.typecode}},[t._v(t._s(e.typename))])}),1)],1),t._v(\" \"),a(\"FormItem\",{attrs:{label:\"客户显示：\",prop:\"showCustomer\"}},[a(\"RadioGroup\",{model:{value:t.formValidate.showCustomer,callback:function(e){t.$set(t.formValidate,\"showCustomer\",e)},expression:\"formValidate.showCustomer\"}},[a(\"Radio\",{attrs:{label:\"Y\"}},[t._v(\"可见\")]),t._v(\" \"),a(\"Radio\",{attrs:{label:\"N\"}},[t._v(\"不可见\")])],1)],1),t._v(\" \"),a(\"FormItem\",[a(\"Button\",{attrs:{type:\"primary\",loading:t.loading},on:{click:t.create_type}},[t._v(\"新增\")]),t._v(\" \"),a(\"Button\",{staticStyle:{\"margin-left\":\"8px\"},attrs:{type:\"ghost\"},on:{click:t.reset_type}},[t._v(\"重置\")])],1)],1),t._v(\" \"),a(\"div\",{attrs:{slot:\"footer\"},slot:\"footer\"})],1)],1)},[],!1,null,null,null);l.options.__file=\"create_name.vue\";var s=l.exports,i={props:{departAlias:{type:Array}},data:function(){return{updateResoureType:!1,formValidate:{id:\"\",file_type_name:\"\",plural:\"Y\",use_departs:[],show_customer:\"Y\"},loading:!1}},methods:{update_type:function(){var t=this;t.loading=!0;var e={id:t.formValidate.id,fileTypeName:t.formValidate.file_type_name,plural:t.formValidate.plural,useDeparts:t.formValidate.use_departs.join(\",\"),showCustomer:t.formValidate.show_customer};this.$Post(\"api/customer/file/type/update\",e,function(e){t.updateResoureType=!1,t.loading=!1,t.$emit(\"update\",!0),t.reset_type()},function(e){t.loading=!1})},reset_type:function(){this.formValidate.id=\"\",this.formValidate.fileTypeName=\"\",this.formValidate.plural=\"Y\",this.formValidate.useDeparts=[],this.formValidate.showCustomer=\"Y\"}},created:function(){var t=this;this.$bus.off(\"OPEN_UPDATE_RESOURE_TYPE\"),this.$bus.on(\"OPEN_UPDATE_RESOURE_TYPE\",function(e){t.updateResoureType=!0,t.formValidate=e})}},n=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(\"div\",[a(\"Modal\",{attrs:{title:\"修改资料类型\",width:\"500\"},model:{value:t.updateResoureType,callback:function(e){t.updateResoureType=e},expression:\"updateResoureType\"}},[a(\"Form\",{ref:\"formValidate\",attrs:{model:t.formValidate,\"label-width\":120}},[a(\"FormItem\",{attrs:{label:\"资料类型：\",prop:\"file_type_name\"}},[a(\"Input\",{attrs:{placeholder:\"请输入资料类型\"},model:{value:t.formValidate.file_type_name,callback:function(e){t.$set(t.formValidate,\"file_type_name\",e)},expression:\"formValidate.file_type_name\"}})],1),t._v(\" \"),a(\"FormItem\",{attrs:{label:\"数量：\",prop:\"plural\"}},[a(\"RadioGroup\",{model:{value:t.formValidate.plural,callback:function(e){t.$set(t.formValidate,\"plural\",e)},expression:\"formValidate.plural\"}},[a(\"Radio\",{attrs:{label:\"Y\"}},[t._v(\"复数\")]),t._v(\" \"),a(\"Radio\",{attrs:{label:\"N\"}},[t._v(\"唯一\")])],1)],1),t._v(\" \"),a(\"FormItem\",{attrs:{label:\"部门：\",prop:\"use_departs\"}},[a(\"Select\",{attrs:{placeholder:\"选择使用部门\",multiple:\"\"},model:{value:t.formValidate.use_departs,callback:function(e){t.$set(t.formValidate,\"use_departs\",e)},expression:\"formValidate.use_departs\"}},t._l(t.departAlias,function(e){return a(\"Option\",{key:e.id,attrs:{value:e.typecode}},[t._v(t._s(e.typename))])}),1)],1),t._v(\" \"),a(\"FormItem\",{attrs:{label:\"客户显示：\",prop:\"show_customer\"}},[a(\"RadioGroup\",{model:{value:t.formValidate.show_customer,callback:function(e){t.$set(t.formValidate,\"show_customer\",e)},expression:\"formValidate.show_customer\"}},[a(\"Radio\",{attrs:{label:\"Y\"}},[t._v(\"可见\")]),t._v(\" \"),a(\"Radio\",{attrs:{label:\"N\"}},[t._v(\"不可见\")])],1)],1),t._v(\" \"),a(\"FormItem\",[a(\"Button\",{attrs:{type:\"primary\",loading:t.loading},on:{click:t.update_type}},[t._v(\"修改\")])],1)],1),t._v(\" \"),a(\"div\",{attrs:{slot:\"footer\"},slot:\"footer\"})],1)],1)},[],!1,null,null,null);n.options.__file=\"update_name.vue\";var p={name:\"resourelist_index\",components:{createResoureType:s,updateResoureType:n.exports},data:function(){var a=this;return{search_model:\"\",loading:!1,openDetail:!1,selectRow:{},seacrhFormInline:{companyname:\"\",name:\"\",tel:\"\"},page:1,pageSize:10,total:0,data:[],departAlias:[],departAlias_map:new Map,header:[{title:\"资料名称\",key:\"file_type_name\",minWidth:120},{title:\"数量\",key:\"plural_name\",minWidth:120},{title:\"部门\",key:\"use_departs_name\",minWidth:200},{title:\"客户展示\",key:\"show_customer_name\",minWidth:150},{title:\"操作\",key:\"action\",minWidth:250,render:function(e,t){return e(\"div\",[e(\"Button\",{props:{type:\"text\",size:\"small\"},on:{click:function(){a.update_type(t.row)}}},\"[ 编辑 ]\"),e(\"Button\",{props:{type:\"text\",size:\"small\"},on:{click:function(){a.delete_type(t.row.id)}}},\"[ 删除 ]\")])}}]}},methods:{update_type:function(e){this.$bus.emit(\"OPEN_UPDATE_RESOURE_TYPE\",e)},delete_type:function(e){var t=this,a={id:e};this.$Post(\"api/customer/file/type/del\",a,function(e){t.get_data()},function(e){})},open_flow:function(e){},create_resoure:function(){this.$bus.emit(\"OPEN_CREATE_RESOURE_TYPE\",!0)},get_data:function(){var l=this;l.loading=!0;var e={params:{page:l.page,pageSize:l.pageSize,sortField:\"id\"}};this.$Get(\"api/customer/file/type/list\",e,function(e){l.total=e.data.data.total,l.data=e.data.data.rows;for(var t=0;t<l.data.length;t++)if(\"Y\"==l.data[t].plural?l.data[t].plural_name=\"多项\":l.data[t].plural_name=\"唯一\",\"Y\"==l.data[t].show_customer?l.data[t].show_customer_name=\"可见\":l.data[t].show_customer_name=\"不可见\",l.data[t].use_departs){var a=l.data[t].use_departs.split(\",\");l.data[t].use_departs=a;for(var r=[],o=0;o<a.length;o++)r.push(l.departAlias_map.get(a[o]));l.data[t].use_departs_name=r.join(\",\")}l.loading=!1})},get_data_center:function(){var a=this;return new Promise(function(t,e){a.$GetDataCenter(\"departAlias\",function(e){a.departAlias=e.data.data.departAlias,a.departAlias_map=a.$array2map(a.departAlias),t()})})},pageChange:function(e){this.page=e,this.get_data()},search:function(){},reset:function(){}},created:function(){var e=this;this.get_data_center().then(function(){e.get_data()})}},d=Object(o.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(\"Card\",[a(\"Row\",{staticStyle:{\"margin-bottom\":\"10px\"}},[a(\"Collapse\",{model:{value:t.search_model,callback:function(e){t.search_model=e},expression:\"search_model\"}},[a(\"Panel\",{attrs:{name:\"1\"}},[a(\"Icon\",{staticStyle:{\"margin-left\":\"20px\",\"margin-right\":\"5px\"},attrs:{type:\"search\"}}),t._v(\"\\n                筛选\\n                    \"),t._v(\" \"),a(\"div\",{attrs:{slot:\"content\"},on:{keydown:function(e){return\"button\"in e||!t._k(e.keyCode,\"enter\",13,e.key,\"Enter\")?t.search(e):null}},slot:\"content\"},[a(\"Form\",{ref:\"seacrhFormInline\",attrs:{model:t.seacrhFormInline,\"label-width\":100}},[a(\"Row\",{attrs:{gutter:16}},[a(\"Col\",{attrs:{span:\"8\"}},[a(\"FormItem\",{attrs:{prop:\"companyname\",label:\"公司名称：\"}},[a(\"Input\",{attrs:{type:\"text\",size:\"small\",placeholder:\"\"},model:{value:t.seacrhFormInline.companyname,callback:function(e){t.$set(t.seacrhFormInline,\"companyname\",e)},expression:\"seacrhFormInline.companyname\"}})],1)],1),t._v(\" \"),a(\"Col\",{attrs:{span:\"8\"}},[a(\"FormItem\",{attrs:{prop:\"name\",label:\"客户名称：\"}},[a(\"Input\",{attrs:{type:\"text\",size:\"small\",placeholder:\"\"},model:{value:t.seacrhFormInline.name,callback:function(e){t.$set(t.seacrhFormInline,\"name\",e)},expression:\"seacrhFormInline.name\"}})],1)],1),t._v(\" \"),a(\"Col\",{attrs:{span:\"8\"}},[a(\"FormItem\",{attrs:{prop:\"tel\",label:\"联系方式：\"}},[a(\"Input\",{attrs:{type:\"text\",size:\"small\",placeholder:\"\"},model:{value:t.seacrhFormInline.tel,callback:function(e){t.$set(t.seacrhFormInline,\"tel\",e)},expression:\"seacrhFormInline.tel\"}})],1)],1)],1),t._v(\" \"),a(\"FormItem\",[a(\"Button\",{attrs:{type:\"primary\"},on:{click:t.search}},[t._v(\"搜索\")]),t._v(\" \"),a(\"Button\",{staticStyle:{\"margin-left\":\"20px\"},attrs:{type:\"ghost\"},on:{click:t.reset}},[t._v(\"重置\")])],1)],1)],1)],1)],1)],1),t._v(\" \"),a(\"Row\",[a(\"ButtonGroup\",[a(\"Button\",{attrs:{type:\"primary\",icon:\"plus\"},on:{click:t.create_resoure}},[t._v(\"新增\")])],1)],1),t._v(\" \"),a(\"Row\",{staticStyle:{\"margin-top\":\"10px\"}},[a(\"Table\",{ref:\"selection\",attrs:{\"highlight-row\":\"\",size:\"small\",loading:t.loading,columns:t.header,data:t.data}}),t._v(\" \"),a(\"Page\",{staticStyle:{\"margin-top\":\"10px\"},attrs:{placement:\"top\",size:\"small\",total:t.total,\"show-total\":\"\",\"show-elevator\":\"\"},on:{\"on-change\":t.pageChange}})],1),t._v(\" \"),a(\"create-resoure-type\",{attrs:{departAlias:t.departAlias},on:{update:t.get_data}}),t._v(\" \"),a(\"update-resoure-type\",{attrs:{departAlias:t.departAlias},on:{update:t.get_data}})],1)},[],!1,null,null,null);d.options.__file=\"index.vue\";t.default=d.exports}}]);"}