<template>
    <Card>
            <Row style="margin-bottom:20px">
                <Collapse v-model="search_model">
                    <Panel name="1" >
                        <Icon type="search" style="margin-left:20px;margin-right:5px"></Icon>
                        筛选
                        <p slot="content">
                            <div  slot="content" @keydown.enter="search">
                                <Form ref="YformInline" :model="YformInline" :label-width="100">
                                    <Row :gutter="16">
                                        <Col span="8">
                                            <FormItem prop="companyname" label="公司名称：">
                                                <Input type="text" v-model="YformInline.companyname" placeholder="" size="small">
                                                </Input>
                                            </FormItem>
                                        </Col>
                                        <Col span="8">
                                            <FormItem prop="name" label="客户名称：">
                                                <Input type="text" v-model="YformInline.name" placeholder="" size="small">
                                                </Input>
                                            </FormItem>
                                        </Col>
                                        <Col span="8">
                                            <FormItem prop="tel" label="客户电话：">
                                                <Input type="text" v-model="YformInline.tel" placeholder="" size="small">
                                                </Input>
                                            </FormItem>
                                        </Col>
                                    </Row>
                                    <Row :gutter="16">
                                        <Col span="8">
                                            <FormItem prop="product" label="产品名称：">
                                                <Input type="text" v-model="YformInline.product" placeholder="" size="small">
                                                </Input>
                                            </FormItem>
                                        </Col>
                                        <Col span="8">
                                            <FormItem prop="marketername" label="市场人员：">
                                                <Input type="text" v-model="YformInline.marketername" placeholder="" size="small">
                                                </Input>
                                            </FormItem>
                                        </Col>
                                        <Col span="8">
                                            <FormItem prop="servicename" label="服务人员：">
                                                <Input type="text" v-model="YformInline.servicename" placeholder="" size="small">
                                                </Input>
                                            </FormItem>
                                        </Col>
                                    </Row>
                                    <FormItem>
                                        <Button type="primary" @click="search">搜索</Button>
                                        <Button type="ghost" style="margin-left:20px" @click="reset">重置</Button>
                                    </FormItem>
                                </Form>
                            </div>
                        </p>
                    </Panel>
                </Collapse>
            </Row>
        <Row>
            <ButtonGroup>
                <!-- <Button type="primary" icon="ios-color-wand-outline" @click="add">录入</Button> -->
                <!-- <Button type="primary" icon="ios-color-wand-outline" @click="edit">编辑</Button> -->
                <Button type="primary" icon="ios-color-wand-outline" @click="check">查看</Button>
                <Button type="primary" icon="ios-color-wand-outline" @click="downExcel">导出Excel</Button>                
            </ButtonGroup>
        </Row>

        <Row style="margin-top: 10px;">
            <Table
                    ref="selection"
                    highlight-row
                    size="small"
                    @on-row-click="selectrow"
                    :columns="header"
                    :data="data"></Table>
            <Page
                    size="small"
                    :total="pageTotal"
                    show-total
                    show-sizer
                    show-elevator
                    @on-change="pageChange"
                    @on-page-size-change="pageSizeChange"
                    placement="top"                    
                    style="margin-top: 10px"></Page>
        </Row>

        <!-- <Modal
                v-model="modal"
                width="100%"
                :styles="{height: '100%', top: '0px'}"
                title="客户详情"
                @on-cancel="cancel"
                
                >
            <Row>
                <Col span="6">
                <channel-from v-if="isExamine" :customerid='customerid'></channel-from>
                </Col>
                <Col span="18">
                <Card>
                    <Collapse accordion>
                        <Panel name="Company">
                            企业信息
                            <P slot="content">
                                <channel-company
                                        v-if="isExamine"
                                        :customerid='customerid'></channel-company>
                            </P>
                        </Panel>
                        <Panel name="CustomerContent">
                            客户跟进记录
                            <P slot="content">
                                <channel-fllow-up v-if="isExamine"
                                                  :customerid='customerid'></channel-fllow-up>
                            </P>
                        </Panel>
                        <Panel name="Order">
                            订单详情
                            <P slot="content">
                                <channel-order-list v-if="isExamine"
                                                     :customerid='customerid'></channel-order-list>
                            </P>
                        </Panel>
                        <Panel name="CustomerRelation">
                            客户关系人
                            <P slot="content">
                                <channel-relation-person v-if="isExamine"
                                                         :customerid='customerid'></channel-relation-person>
                            </P>
                        </Panel>
                        <Panel name="CustomerWorkOrder">
                            服务动态
                            <P slot="content">
                                <channel-service-dynamic v-if="isExamine"
                                                         :customerid='customerid'></channel-service-dynamic>
                            </P>
                        </Panel>
                    </Collapse>
                </Card>
                </Col>
            </Row>
        </Modal> -->

    </Card>
</template>

<script>
    import Bus from '../../../../components/bus'

    export default {
        components: {

            // channelFrom,
            // channelCompany,
            // channelOrderList,
            // channelFllowUp,
            // channelRelationPerson,
            // channelServiceDynamic,
        },
        data() {
            return {
                YformInline:{
                    companyname:"",
                    name:"",
                    tel:"",
                    product:"",
                    marketername:"",
                    servicename:""
                },
                search_model:"",
                isExamine: false,
                modal: false,
                pageTotal: new Number(),
                page: 1,
                pageSize: 10,
                row: {},
                customerid: [],
                data: [],
                header: [
                    {
                        title: '公司名称',
                        key: 'CompanyName',
                        width: 300
                    },
                    {
                        title: '客户名称',
                        key: 'name',
                        width: 120
                    },
                    {
                        title: '客户手机',
                        key: 'TEL',
                        width: 120
                    },
                    {
                        title: '产品名称',
                        key: 'product',
                        width: 120
                    },
                    {
                        title: '回访时间',
                        key: 'callbackdate',
                        width: 160
                    },
                    {
                        title: '服务人员',
                        key: 'servicer',
                        width: 120
                    },
                    {
                        title: '市场人员',
                        key: 'marketer',
                        width: 120
                    },
                    {
                        title: '结束时间',
                        key: 'enddate',
                        width: 160
                    },
                    {
                        title: '服务开始时间',
                        key: 'servicebegindate',
                        width: 160
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 200,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            // this.customerDetail(params)
                                            this.$store.commit('open_gobal_customer_detail_modal', {ID: params.row.customerid});
                                            // Bus.$emit('Open_customer_detail',params.row.customerid)
                                        }
                                    }
                                }, '[查看客户]'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            // Bus.$emit('detail', params)
                                            this.$store.commit("open_gobal_company_detail_modal", params.row.companyid)
                                            // Bus.$emit('openCompanyDetail',params.row.companyid)
                                        }
                                    }
                                }, '[查看企业]'),
                            ]);
                        }
                    }
                ]
            }
        },
        methods: {
            downExcel(){
                let field = [
                    {field:'name',title:'客户名称'},
                    {field:'CompanyName',title:'公司名称'},
                    // {field:'baseorderid',title:'提示'},
                    {field:'product',title:'产品名称'},
                    {field:'enddate',title:'下线时间'},
                    {field:'callbackdate',title:'回访时间'},
                    {field:'servicebegindate',title:'服务开始时间'},
                    {field:'servicer',title:'服务人员'},                                                                   
                    {field:'marketer',title:'市场人员'},                                                                     
                    {field:'reasonforcallback',title:'客户实际下线原因'},
                    {field:'reasonformarketer',title:'市场通知下线原因'} 
                ]
                let _self = this
                let url = `api/customer/customerEndList`
                let config = {
                        page: '1',
                        pageSize: '1000000',
                        status:"Y",
                        export: 'Y',
                        exportField: encodeURI(JSON.stringify(field)),
                        companyname: _self.YformInline.companyname,
                        customername:_self.YformInline.name,
                        customertel:_self.YformInline.tel,
                        productname:_self.YformInline.product,
                        marketer:_self.YformInline.marketername,
                        servicer:_self.YformInline.servicename,
                }
                let toExcel = this.$MergeURL(url, config)
                // console.log(toExcel)
                window.open(toExcel)
            },
            cancel() {
                var _self = this
                _self.customerid = []
                _self.isExamine = false
            },
            search(){
                this.page = 1
                this.getData()
            },
            reset(){
                this.page = 1
                this.YformInline.companyname = ""
                this.YformInline.name = ""
                this.YformInline.tel = ""
                this.YformInline.product = ""
                this.YformInline.marketername = ""
                this.YformInline.servicename = ""
                this.getData()
            },
            customerDetail(a) {
                let _self = this
                // console.log('111111')
                console.log(a)
                _self.customerid[0] = a.row.customerid
                _self.isExamine = true
                _self.modal = true
            },

            check() {
                let _self = this
                if (_self.row.id == null) {
                    _self.$Message.warning('请选择要查看的项目')
                } else {
                    _self.$bus.emit('OPEN_OFFLINE_SHOW', _self.row)
                }
            },

            getData() {
                let _self = this
                let url = '/customer/customerEndList?sortField=id&page=' + _self.page + '&pageSize=' + _self.pageSize + '&status=Y&companyname=' + _self.YformInline.companyname + '&customername=' + _self.YformInline.name + '&customertel=' + _self.YformInline.tel + '&productname=' + _self.YformInline.product + '&marketer=' + _self.YformInline.marketername + '&servicer=' + _self.YformInline.servicename 
                _self.row = {}
                function doSuccess(res) {
                    let _data = res.data.data

                    _self.pageTotal = _data.total
                    _self.data = _data.rows
                    
                    for(let i = 0;i<_self.data.length;i++){
                        _self.data[i].company_id = _self.data[i].companyid                                                
                        if(_self.data[i].enddate == null ||_self.data[i].enddate == ""){

                        }else{
                            _self.data[i].enddate = _self.data[i].enddate.slice(0,10)
                        }

                        if(_self.data[i].callbackdate == null ||_self.data[i].callbackdate == ""){

                        }else{
                            _self.data[i].callbackdate = _self.data[i].callbackdate.slice(0,10)
                        }

                        if(_self.data[i].servicebegindate == null ||_self.data[i].servicebegindate == ""){

                        }else{
                            _self.data[i].servicebegindate = _self.data[i].servicebegindate.slice(0,10)
                        }
                    }
                }

                this.GetData(url, doSuccess)
            },

            pageChange(a) {
                let _self = this

                _self.page = a
                _self.getData()
            },

            pageSizeChange(a) {
                let _self = this

                _self.pageSize = a
                _self.getData()
            },

            selectrow(a) {
                this.row = a
            }
        },
        mounted() {
            this.getData()
        },
        created () {
            let _self = this
            Bus.$on('updateofflinecustomer',(e)=>{
                _self.getData()
            })
        }
    }
</script>