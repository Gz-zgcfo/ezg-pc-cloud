<template>
    <div style="min-width:700px">
        <Card>
          <Row style="margin-bottom:10px;">
            <Collapse v-model="search_model">
                    <Panel name="1" >
                        <Icon type="search" style="margin-left:20px;margin-right:5px"></Icon>
                        筛选
                        
                            <div slot="content" @keydown.enter="Search">
                            <Form ref="formValidate" :model="formValidate" :label-width="75" style="margin-top: 15px">
                                <Row :gutter="16" style="height:56px">
                                    <Col span="8">
                                    <FormItem label="客户名称：" prop="name">
                                        <Input v-model="formValidate.name" size="small"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="8">
                                    <FormItem label="电话：" prop="tel">
                                        <Input v-model="formValidate.tel" size="small"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="8">
                                        <FormItem label="归属公司：" prop="companyname">
                                            <Input v-model="formValidate.companyname" size="small" ></Input>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="12" style="height:56px">
                                    <Col span="8">
                                    <FormItem label="跟进人：" prop="followbyname">
                                        <Input v-model="formValidate.followbyname" size="small"></Input>
                                    </FormItem>
                                    </Col>
                                <!--  <Row  :gutter="16">
                                      <Col span="12">
                                      <FormItem label="客户状态" prop="customertype">
                                          <Cascader trigger="hover" :data="customertypeValue" v-model="formValidate.customertype"></Cascader>
                                      </FormItem>
                                      </Col>
                                      <Col span="12">
                                      <FormItem label="渠道名称" prop="name">
                                          <Input v-model="formValidate.name" size="small"></Input>
                                      </FormItem>
                                      </Col>
                                  </Row>-->
                                    <Col span="8">
                                    <FormItem label="客户状态：" prop="customerType	">
                                        <Cascader trigger="hover" :data="customerType" v-model="formValidate.customerType" size="small" style="margin-top:5px;width:100%"></Cascader>
                                    </FormItem>
                                    </Col>
                                    <Col span="8">
                                    <FormItem label="区域：" prop="area">
                                        <Select transfer v-model="formValidate.area" size="small" @on-change="Search" >
                                            <Option v-for="item in area" :value="item.typecode" :key="item.id">
                                                {{ item.typename }}
                                            </Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="12" style="height:56px">
                                    <Col span="8">
                                        <FormItem label="客户来源：" prop="customersource">
                                            <Select transfer v-model="formValidate.customersource" size="small" @on-change="Search" style="width:100%">
                                                <Option v-for="item in cluesource" :value="item.typecode" :key="item.id" >
                                                    {{ item.typename }}
                                                </Option>
                                            </Select>
                                        </FormItem>
                                    </Col>
                                    <Col span="8">
                                    <FormItem label="渠道名称：" prop="channelTypeName">
                                        <Input v-model="formValidate.channelTypeName" size="small"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="8">
                                    <FormItem label="微信绑定：" prop="isbound">
                                        <Select transfer v-model="formValidate.isbound" size="small" @on-change="Search" style="width:100%">
                                            <!-- <Option value="">     </Option> -->
                                            <!-- <Option v-for="item in isboundValue" :value="item.value" :key="item.value">
                                                {{ item.label }}
                                            </Option> -->
                                            <Option value="Y">是</Option>
                                            <Option value="N">否</Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="12" style="height:56px">
                                  <Col span="8">
                                    <FormItem label="创建时间：" prop="credate">
                                        <DatePicker type="daterange"  transfer v-model="formValidate.credate" placement="bottom-end" size="small" style="width:100%"></DatePicker>
                                    </FormItem>
                                  </Col>
                                  <Col span="8">
                                    <FormItem label="回滚时间：" prop="upddate">
                                        <DatePicker type="daterange"  transfer v-model="formValidate.upddate" placement="bottom-start" size="small" style="width:100%"></DatePicker>
                                    </FormItem>
                                  </Col>
                                  <Col span="8">
                                    <FormItem label="标签：" prop="labelName">
                                        <Input v-model="formValidate.labelName" size="small"></Input>
                                    </FormItem>
                                  </Col>
                                </Row>
                                <Row :gutter="12">
                                    <Col span="8">
                                      <FormItem label="客户等级：" prop="importlevel">
                                          <Select transfer v-model="formValidate.importlevel" size="small" @on-change="Search" style="width:100%">
                                              <Option value="">     </Option>
                                              <Option v-for="item in impLevel" :value="item.typecode" :key="item.id">
                                                  {{ item.typename }}
                                              </Option>
                                          </Select>
                                      </FormItem>
                                    </Col>
                                </Row>
                                <center>
                                    <FormItem style="margin-top:10px">
                                        <Button type="primary" @click="Search">搜索</Button>
                                        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">
                                            重置
                                        </Button>
                                    </FormItem>
                                </center>
                            </Form>
                        </div>
                    </Panel>
                </Collapse>
          </Row>
            <Row>
                <ButtonGroup>
                    <Button type="primary" icon="plus" @click="import_excel" v-permission="['pool.import']">导入</Button>
                    <Button type="primary" icon="edit" @click="isEditChange">查看</Button>
                    <Button type="primary" icon="ios-color-filter-outline" @click="downloadExcel">导出Excel</Button>

                </ButtonGroup>
            </Row>
            <Row style="margin-top: 10px;">
                <Table
                        highlight-row
                        size="small"
                        :columns="columns"
                        :data="data"
                        @on-current-change="selectRow"
                        :loading = "customer_loading"
                        @on-row-dblclick="isEditChange"
                        @on-sort-change="sort"
                ></Table>
                <Page
                        size="small"
                        :total="pageTotal"
                        :current.sync="currentPage"
                        show-total
                        show-sizer
                        show-elevator
                        @on-change="pageChange"
                        @on-page-size-change="pageSizeChange"
                        style="margin-top: 10px"></Page>
            </Row>
        </Card>
        <Modal
                v-model="modal1"
                title="查看二维码"
                @on-ok="ok"
                @on-cancel="cancel">
            <center>
                <div id="qrcode"></div>
            </center>
        </Modal>
        <Modal v-model="modal2" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="information-circled"></Icon>
                <span>删除客户</span>
            </p>
            <div style="text-align:center">
                <p>客户信息删除无法恢复</p>
                <p>确定删除吗？</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="modal_loading" @click="deleteCustomer2">删除</Button>
            </div>
        </Modal>
        <customer-edit></customer-edit>
        <Modal
            v-model="openImportCustomer"
            title="导入客户"
            width="200"
        >   
            <Row :gutter="20">
                <Col span="24">
                    <center>
                      <Upload
                        ref="upload"
                        :before-upload="handleUpload"
                        action="/api/customer/importHighSeasPoolMessage"
                      >
                        <Button type="ghost" icon="ios-cloud-upload-outline" style="margin-top:40px">选择文件</Button>
                      </Upload>
                    </center>
                </Col>
            </Row>
            <div slot="footer"></div>
        </Modal>
    </div>
</template>

<script>
import QRCode from "qrcodejs2";
import Bus from "../../../components/bus";
import { DateFormat } from '../../../libs/utils'
import customerEdit from '../../woa-components/customerDetail/channelCustomer'

export default {
    name:'publicPool_index',

    components: {
        customerEdit
    },
  data() {
    return {
      openImportCustomer: false,
      search_model:"",
      customerName: '',
      customer_loading: false,
      ishandleSubmit: false,
      issearch: false,
      modal1: false,
      modal2: false,
      modal_loading: false,
      AutoCompletedata: [],
      customertypeValue: [],
      customersourceValue: [],
      areaValue: [],
      isboundValue: [],
      issendValue: [],
      formValidate: {
        name: "",
        tel: "",
        channelTypeName: "",
        followbyname: "",
        isbound: "",
        customersource: "",
        area: "",
        companyname:"",
        credate:[],
        upddate:[],
        customerStatus:'',
        labelName:"",
        importlevel:""
      },
      columns: [
        {
          title: "姓名",
          key: "name",
          sortable: "custom",
          width: 120
        },
          {
              title: '归属公司',
              key: 'showcompanyNames',
              width:210,                     
              render: (h, params) => {
                // console.log(params)
                if(params.row.companyNames == ''|| params.row.companyNames == null){
                  return ''
                }else{
                  // console.log(this.data[params.index].companyNames[0].name.length)
                  if(this.data[params.index].companyNames[0].name.length>13){
                    return h('Poptip', {
                      props: {
                          trigger: 'hover',
                          title: '归属公司',
                          placement: 'bottom'
                      }
                  }, [
                      h('span', this.data[params.index].companyNames[0].name.slice(0,13) + '...'),
                      h('Icon', {
                          props: {
                              type: 'arrow-down-b',
                          }
                      }),
                      h('div', {
                          slot: 'content'
                      }, [
                          h('ul', this.data[params.index].companyNames.map(item => [
                              h('li', {
                                  style: {
                                      padding: '4px'
                                  }
                              }, '公司名：' + item.name),
                          ]))
                      ])
                  ]);
                  }else{
                    return h('Poptip', {
                      props: {
                          trigger: 'hover',
                          title: '归属公司',
                          placement: 'bottom'
                      }
                  }, [
                      h('span', this.data[params.index].companyNames[0].name),
                      h('Icon', {
                          props: {
                              type: 'arrow-down-b',
                          }
                      }),
                      h('div', {
                          slot: 'content'
                      }, [
                          h('ul', this.data[params.index].companyNames.map(item => [
                              h('li', {
                                  style: {
                                      padding: '4px'
                                  }
                              }, '公司名：' + item.name),
                          ]))
                      ])
                  ]);
                  }
                }
              }
          },
        {
          title: "电话",
          key: "tel",
          width: 120,                      
        },
        {
          title: "客户状态",
          key: "customertypeText",
          width: 140,
          sortable: "custom",
        },
        {
          title: "客户来源",
          key: "customersourceText",
          width: 120,
          sortable: "custom",
        },
        {
          title: "客户等级",
          key: "importLevelText",
          width: 120,
          sortable: "custom",
        },
        {
          title: "区域",
          key: "areaText",
          width: 80,
          sortable: "custom",
        },
        {
          title: "渠道名称",
          key: "channelTypeNameText",
          width: 140,
          sortable: "custom",
        },
        {
          title: "跟进人",
          key: "followby",
          width: 120,
          sortable: "custom",
        },
        {
          title: "创建时间",
          key: "createdate",
          width: 120,
          sortable: "custom",
        },
        {
          title: "回滚时间",
          key: "updatedate",
          width: 120,
          sortable: "custom",
        },
        {
          title: "成交总额",
          key: "total_money",
          width: 120,
          sortable: "custom"
        },
        {
          title: "线索权重",
          key: "clue_ranks",
          width: 120,
          sortable: "custom"
        },
        {
          title: "最后成交时间",
          key: "lately_order_time",
          width: 150,
          sortable: "custom"
        },
        // {
        //   title: "微信绑定",
        //   key: "isbound",
        //   width: 130,
        // //   sortable: true,
        // },
        {
          title: "操作",
          key: 'action',
          fixed: 'right',
          width: 90,
          align: 'center',
          render: (h,params) => {
            return h('Button',{
              props: {
                type: 'primary',
                size: 'small'
              },
              on:{
                click: () => {
                  this.receipt(params.row.ID)
                }
              }
            },'[ 领取 ]')
          }
        }
      ],
      data: [],
      pageTotal: new Number(),
      //  当前页码
      currentPage: 1,
      //  当前每页显示数
      pageSize: 10,
      customerid: "",
      customertypeText: "",
      followbyname:"",
      tel: "",
      customersource: "",
      //  数据字典类型
      area: [],
      cluesource: [],
      customerType: [],
      impLevel: [],
      sf_yn: [],
      customerTypeArr:[],
      //  数据字典map
      area_map: new Map(),
      cluesource_map: new Map(),
      impLevel_map: new Array(),
      sf_yn_map: new Map(),
      // 排序方式
      sortName:'clue_ranks',
      order:'desc'
    };
  },
  methods: {
      sort(e){
        //   console.log(e)
        if(e.key == 'showcompanyNames'){
            this.sortName = 'companyNames'
        }else if(e.key == 'customertypeText'){
            this.sortName = 'customertype'            
        }else if(e.key == 'customersourceText'){
            this.sortName = 'customersource'
        }else if(e.key == 'importLevelText'){
            this.sortName = 'importlevel'
        }else if(e.key == 'areaText'){
            this.sortName = 'AREA'
        }else if(e.key == 'channelTypeNameText'){
            this.sortName = 'channelTypeName'
        }else{
            this.sortName = e.key
        }
        if(e.order == 'normal'){
            this.order = ""
            this.sortName = "clue_ranks"
        }else{
            this.order = e.order
        }
        this.getTableData()
      },
        downloadExcel(){
                let field = [
                    {field:'NAME',title:'姓名'},
                    {field:'companynames',title:'公司'},
                    // {field:'TEL',title:'电话'},
                    {field:'customerType',title:'客户状态',format:'customerTypes'},
                    {field:'customersource',title:'客户来源',format:'cluesources'},
                    {field:'importlevel',title:'客户等级',format:'importlevel'},  
                    {field:'AREA',title:'地区',format:'area'},
                    {field:'channelTypeName',title:'渠道名称'},
                    {field:'followbyname',title:'跟进人'},
                    {field:'CREATEDATE',title:'创建时间'},
                    {field:'updatedate',title:'回滚时间'},
                    {field:'isbound',title:'微信绑定',format:'sf_yn'}
                    ]
                let _self = this
                let url = `api/customer/list`
                let config = {
                        page: '1',
                        pageSize: '1000000',
                        name: _self.formValidate.name,
                        tel: _self.formValidate.tel,
                        deleteflag:"3",
                        // customerType	:temp_status,
                        channelTypeName: _self.formValidate.channelTypeName,
                        followbyname: _self.formValidate.followbyname,
                        isbound: _self.formValidate.isbound,
                        customersource: _self.formValidate.customersource,
                        area: _self.formValidate.area,
                        companyname: _self.formValidate.companyname,
                        labelName:_self.formValidate.labelName,
                        importlevel:_self.formValidate.importlevel,
                        bcreatedate:DateFormat(_self.formValidate.credate[0]),
                        ecreatedate:DateFormat(_self.formValidate.credate[1]),
                        bupdatedate:DateFormat(_self.formValidate.upddate[0]),
                        eupdatedate:DateFormat(_self.formValidate.upddate[1]),
                        // companyName: _self.formInline.companyName,
                        // server_realname: _self.formInline.server_realname,
                        // accmanager_realname: _self.formInline.accmanager_realname,
                        // followby_realname: _self.formInline.followby_realname,
                        export: 'Y',
                        exportField: encodeURI(JSON.stringify(field))
                }
                let toExcel = this.$MergeURL(url, config)
                window.open(toExcel)

            },
    ok() {},

    cancel() {},

    // 表格数据请求
    getTableData() {
      var _self = this;
      _self.customer_loading = true;
      var url = `api/customer/list`;
      // 搜索功能
      var temp_status = ''
                if(_self.formValidate.customerType	==''||_self.formValidate.customerType	==null){
                    temp_status = ''
                }else{
                    temp_status = _self.formValidate.customerType.join('-')
                }
      var keys = []; //定义一个数组用来接受key
      var config = {
        params: {
          deleteflag:"3",
          order:_self.order,
          page: _self.currentPage,
          pageSize: _self.pageSize,
          sortField: _self.sortName,
          name: _self.formValidate.name,
          tel: _self.formValidate.tel,
          customerType	:temp_status,
          channelTypeName: _self.formValidate.channelTypeName,
          followbyname: _self.formValidate.followbyname,
          isbound: _self.formValidate.isbound,
          customersource: _self.formValidate.customersource,
          area: _self.formValidate.area,
          labelName:_self.formValidate.labelName,
          importlevel:_self.formValidate.importlevel,
          companyName: _self.formValidate.companyname,
          bcreatedate:DateFormat(_self.formValidate.credate[0]),
          ecreatedate:DateFormat(_self.formValidate.credate[1]),
          bupdatedate:DateFormat(_self.formValidate.upddate[0]),
          eupdatedate:DateFormat(_self.formValidate.upddate[1]),
        }
      };

      this.$http.get(url, config).then(function(res) {

        _self.pageTotal = res.data.data.total;
        var response = res.data.data.rows;
        _self.data = [];
        for (var i = 0; i < response.length; i++) {
          var a = {};
          a.name = response[i].NAME;
          a.tel = response[i].TEL;
          // 第一个是数据字典，第二个是数据字符串
          a.customertype = response[i].customerType;
          a.customertypeText = _self.findCustomerType(a.customertype);

          a.customersource = response[i].customersource;
          a.customersourceText = _self.findCluesoure(a.customersource);

          a.importLevel = response[i].importlevel;

          a.importLevelText = _self.impLevel_map[a.importLevel]

          a.total_money = response[i].total_money
          a.clue_ranks = response[i].clue_ranks
          a.total_money = response[i].total_money
          if (response[i].lately_order_time == null) {
            a.lately_order_time = null;
          } else {
            a.lately_order_time = response[i].lately_order_time.slice(0,10)
          }
          // a.lately_order_time = response[i].lately_order_time
          a.area = response[i].AREA;
          a.areaText = _self.area_map.get(a.area);
          

          a.createby = response[i].createbyname;
          a.followby = response[i].followbyname;

          if (response[i].CREATEDATE == null) {
            a.updatedate = null;
          } else {
            a.createdate = response[i].CREATEDATE.slice(0, 10);
          }
          a.channelTypeNameText = response[i].channelTypeName;
          a.updatedate = response[i].updatedate.slice(0, 10);

          a.isbound = _self.sf_yn_map.get(response[i].isbound)        
          
          //    剩余跟进期限
          //a.followdate = response[i].followdate;
          a.customerId = response[i].ID;
          a.fixedphone = response[i].fixedPhone;
          a.qq = response[i].qq;
          a.weixin = response[i].weixin;
          a.email = response[i].email;
          a.address = response[i].ADDRESS;
          a.backup = response[i].backup;
          a.ID = response[i].ID
          if (response[i].companynames != null) {
              if ((response[i].companynames).indexOf(',') != (-1)) {
                  var _data = response[i].companynames.split(',')
                  a.companyNames = []
                  for (let i = 0; i < _data.length; i++) {
                      a.companyNames.push({
                          name: _data[i]
                      })
                  }
              } else {
                  a.companyNames = [
                      {
                          name: response[i].companynames
                      }
                  ]
              }
          }
          a.residue_time = response[i].residue_time
          _self.data.push(a);
        }
        window.scrollTo(0, 0);
        _self.customer_loading = false;
        _self.customerid = "";
      });
    },

    // 表格行选中事件
    selectRow(a) {
      var _self = this;
      _self.customerid = a.customerId;
      _self.followbyname = a.followby
      _self.customerName = a.name;
      _self.customertypeText = a.customertypeText;
      _self.tel = a.tel;
      _self.customersource = a.customersource;
      // console.log(_self.customerid);
    },

    //  改变页码
    pageChange(e) {
      var _self = this;
      _self.currentPage = e;
      _self.customerid = "";
      _self.getTableData();
    },

    pageSizeChange(e) {
      var _self = this;
      _self.pageSize = e;
      _self.currentPage = 1;
      _self.customerid = "";
      _self.getTableData();
    },

    //  搜索
    Search() {
      var _self = this;
      if (_self.ishandleSubmit == false) {
        _self.currentPage = 1;
      }
      _self.ishandleSubmit = true;
      _self.getTableData();
    },

    isEditChange() {
      var _self = this;
      if (_self.customerid != "") {
        // console.log("iseditchange+" + _self.customerid);
        // this.$emit("isEdit", {
        //   customername: _self.customerName,
        //   customerid: _self.customerid,
        //   customertypeText: _self.customertypeText,
        //   tel: _self.tel,
        //   customersource: _self.customersource
        // });
        Bus.$emit('Open_customer_detail',_self.customerid)
      } else {
        this.$Message.warning("抱歉，您还没有选择客户");
      }
    },
    change_market(){
        let _self = this
        if(_self.customerid != ""){
            this.$bus.emit('customerM_change_market',[_self.customerid,_self.customerName,_self.followbyname])
        }else{
            this.$Message.warning("抱歉，您还没有选择客户")
        }
    },

    isAddChange() {
      var _self = this;
      this.$emit("isAdd", "");
    },

    //生成二维码
    getQRcode() {
      var _self = this;

      if (_self.tel != "") {
        _self.modal1 = true;

        document.getElementById("qrcode").innerHTML = "";

        var url =
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1daf95d4275b0be1&redirect_uri=";
        url +=
          "http%3a%2f%2fm.zgcfo.com%2fservice100gonghost%2foAuthLogin%2foAuthBindAndLogin%2f" +
          _self.tel;
        url +=
          "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";

        var qr = new QRCode("qrcode", {
          text: url,
          width: 200,
          height: 200,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
      } else {
        this.$Message.warning("抱歉，您还没有选择客户");
      }
    },

    deleteCustomer() {
      var _self = this;

      if (_self.customerid != "") {
        _self.modal2 = true;
      } else {
        this.$Message.warning("抱歉，您还没有选择客户");
      }
    },

    deleteCustomer2() {
      var _self = this;

      this.$http
        .get("/api/customer/deleteCustomerById/" + _self.customerid)
        .then(function(response) {
          if (response.data.msgCode == "40000") {
            _self.modal2 = false;
            _self.$Message.success("删除成功！");
            _self.currentPage = 1;
            _self.getTableData();
          } else {
            _self.$Message.error("删除失败！");
          }
        });
    },

    isSearch(e) {
      var _self = this;
      _self.issearch = e;
    },

    isEmptyObject(obj) {
      for (var key in obj) {
        return true;
      }
      return false;
    },
    
    handleReset(name) {
      var _self = this;

      _self.ishandleSubmit = false;
      _self.currentPage = 1;
      this.$refs[name].resetFields();
      _self.formValidate.customerType = ''
      _self.getTableData();
    },
    ok() {},
    cancel() {},
    
    /**********************数据字典相关start*********************/
    //  获取数据字典
    getDataCenter() {
      var _self = this;
      // var url = `api/dataCenter/system/tsType/queryTsTypeByGroupCodes?groupCodes=customerTypes,cluesources,customerrating,area,sf_yn`;

      let params = "customerTypes,cluesources,customerrating,area,sf_yn"

      function finish(res){
        var temp = res.data.data;
        _self.area = temp.area;
        _self.cluesource = temp.cluesources;
        _self.customerType = temp.customerTypes;
        _self.impLevel = temp.customerrating;
        _self.sf_yn = temp.sf_yn;
        _self.area.reverse()
        for(let i = 0; i<_self.area.length; i++){
          _self.area_map.set(_self.area[i].typecode,_self.area[i].typename)
        }

        for(let i = 0;i<_self.impLevel.length;i++){
          _self.impLevel_map[_self.impLevel[i].typecode] = _self.impLevel[i].typename          
        }
        // console.log(_self.impLevel_map)
        for(let i = 0;i<_self.sf_yn.length;i++){
          _self.sf_yn_map.set(_self.sf_yn[i].typecode,_self.sf_yn[i].typename)          
        }
        //  渠道名称暂时给的是text，不需要做更正


        // 二级联动改一级
        // console.log(_self.$changeCars(_self.customerType))
        _self.customerTypeArr = []
        for(let i = 0;i<_self.customerType.length;i++){
          var temp = {}
          if(_self.customerType[i].children != null){
            for(let j = 0;j<_self.customerType[i].children.length; j++ ){
              temp = {}
              temp.id = _self.customerType[i].children[j].id
              temp.typecode = _self.customerType[i].children[j].typecode
              temp.typename = _self.customerType[i].children[j].typename
              temp.pid = _self.customerType[i].children[j].pid
              temp.ptypename = _self.customerType[i].typename
              temp.ptypecode = _self.customerType[i].typecode
              _self.customerTypeArr.push(temp)
            }
          }else{    
              temp = {}
              temp.id = _self.customerType[i].id
              temp.typecode = _self.customerType[i].typecode
              temp.ptypename = _self.customerType[i].typename
              temp.typename = ''
              temp.pid = 0
              _self.customerTypeArr.push(temp)
          }
          
            //  修改成规定的模型
                _self.customerType[i].value = _self.customerType[i].id
                _self.customerType[i].label = _self.customerType[i].typename
                    if(_self.customerType[i].children != null){

                        for(let j = 0;j<_self.customerType[i].children.length; j++ ){

                        _self.customerType[i].children[j].value= _self.customerType[i].children[j].id
                        _self.customerType[i].children[j].label = _self.customerType[i].children[j].typename

                        }
                    }
        } 
      }

      this.$GetDataCenter(params, finish)
      // this.$http.get(url).then(function(res) {
      //   // console.log(res.data.data)
      //   var temp = res.data.data;
      //   _self.area = temp.area;
      //   _self.cluesource = temp.cluesources;
      //   _self.customerType = temp.customerTypes;
      //   _self.impLevel = temp.customerrating;
      //   _self.sf_yn = temp.sf_yn;
      //   _self.area.reverse()
      //   for(let i = 0; i<_self.area.length; i++){
      //     _self.area_map.set(_self.area[i].typecode,_self.area[i].typename)
      //   }

      //   for(let i = 0;i<_self.impLevel.length;i++){
      //     _self.impLevel_map[_self.impLevel[i].typecode] = _self.impLevel[i].typename          
      //   }
      //   // console.log(_self.impLevel_map)
      //   for(let i = 0;i<_self.sf_yn.length;i++){
      //     _self.sf_yn_map.set(_self.sf_yn[i].typecode,_self.sf_yn[i].typename)          
      //   }
      //   //  渠道名称暂时给的是text，不需要做更正


      //   // 二级联动改一级
      //   // console.log(_self.$changeCars(_self.customerType))
      //   _self.customerTypeArr = []
      //   for(let i = 0;i<_self.customerType.length;i++){
      //     var temp = {}
      //     if(_self.customerType[i].children != null){
      //       for(let j = 0;j<_self.customerType[i].children.length; j++ ){
      //         temp = {}
      //         temp.id = _self.customerType[i].children[j].id
      //         temp.typecode = _self.customerType[i].children[j].typecode
      //         temp.typename = _self.customerType[i].children[j].typename
      //         temp.pid = _self.customerType[i].children[j].pid
      //         temp.ptypename = _self.customerType[i].typename
      //         temp.ptypecode = _self.customerType[i].typecode
      //         _self.customerTypeArr.push(temp)
      //       }
      //     }else{    
      //         temp = {}
      //         temp.id = _self.customerType[i].id
      //         temp.typecode = _self.customerType[i].typecode
      //         temp.ptypename = _self.customerType[i].typename
      //         temp.typename = ''
      //         temp.pid = 0
      //         _self.customerTypeArr.push(temp)
      //     }
          
      //       //  修改成规定的模型
      //           _self.customerType[i].value = _self.customerType[i].id
      //           _self.customerType[i].label = _self.customerType[i].typename
      //               if(_self.customerType[i].children != null){

      //                   for(let j = 0;j<_self.customerType[i].children.length; j++ ){

      //                   _self.customerType[i].children[j].value= _self.customerType[i].children[j].id
      //                   _self.customerType[i].children[j].label = _self.customerType[i].children[j].typename

      //                   }
      //               }
      //   }    
      // })
    },
    // 把树状菜单变成一级菜单
    // GetCustomerType(){
    //   var _self = this
    //   // console.log(_self.customerType)
    // },
    findImpLevel(temp) {
      var _self = this;
      for (let i = 0; i < _self.impLevel.length; i++) {
        if (_self.impLevel[i].typecode == temp && temp != "") {
          return _self.impLevel[i].typename;
        }
      }
    },
    findCustomerType(temp) {
      // console.log(temp)
      if(temp==''||temp==null){
        return ''
      }else{
        var temp2 = temp.split('-')
        // console.log(temp2)

        /**
         * 
         * 
         * 
         * 
         * 
         * 
         */

        //  兼容性代码，老数据为10555，新数据为10055-10088，后期全部替换为10088之后，此项判断可以做删除处理
        if(temp2[1]==null||temp2[1]==''){
            var _self = this;
            for (let i = 0; i < _self.customerTypeArr.length; i++) {
              if (_self.customerTypeArr[i].id == temp2[0] && temp2[0] != "") {
                return _self.customerTypeArr[i].ptypename + ' - ' +_self.customerTypeArr[i].typename
              }
            }
          }else{
            var _self = this;
            for (let i = 0; i < _self.customerTypeArr.length; i++) {
              if (_self.customerTypeArr[i].id == temp2[1] && temp2[1] != "") {
                return _self.customerTypeArr[i].ptypename + ' - ' +_self.customerTypeArr[i].typename
              }
            }
          }
      }
      
    },
    findCluesoure(temp) {
      var _self = this;
      for (let i = 0; i < _self.cluesource.length; i++) {
        if (_self.cluesource[i].typecode == temp && temp != "") {
          return _self.cluesource[i].typename;
        }
      }
    },

    findAreaText(temp) {
      var _self = this;
      for (let i = 0; i < _self.area.length; i++) {
        if (_self.area[i].typecode == temp && temp != "") {
          return _self.area[i].typename;
        }
      }
    },

    findYN(temp) {
      var _self = this;
      for (let i = 0; i < _self.sf_yn.length; i++) {
        if (_self.sf_yn[i].typecode == temp && temp != "") {
          return _self.sf_yn[i].typename;
        }
      }
    },
    //  公海池领取
    receipt(id){
      let _self = this
      let url = `api/customer/receipt`

      let config = {
        customerId: id
      }

      function success(res){
        _self.getTableData()
      }

      function fail(err){

      }

      this.$Post(url,config,success,fail)
    },
    import_excel(){
      this.openImportCustomer = true
    },
    handleUpload(file){
      let _self = this
      let formdata = new FormData()
      let url = 'api/customer/importHighSeasPoolMessage'

      formdata.append("file", file)

      function success(res){
        _self.getTableData()
        _self.openImportCustomer = false
        return false
      }

      function fail(err){
        return false
      }

      this.$Post(url, formdata, success, fail)
      return false
    }
    // findchannelTypeName(temp) {}
    /**********************数据字典相关end*********************/
  },
  created() {
    var _self = this
    // this._customerTypeArr = JSON.parse(localStorage.getItem('customerType'))
    // this.getSelectOptions()
    this.getDataCenter();
    // this.GetCustomerType();
    _self.customer_loading = true
    setTimeout(_self.getTableData(), 1000)
    
    
    Bus.$on("msg", e => {
      this.getTableData();
      this.currentPage = 1;
    });
    Bus.$on("addsuccess", e => {
      this.getTableData();
      this.currentPage = 1;
    });
  }
};
</script>