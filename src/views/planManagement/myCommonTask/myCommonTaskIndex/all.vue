<template>
    <Card>
        <Row style="margin-bottom:10px">
            <Collapse v-model="search_model">
                <Panel name="1">
                    <Icon type="search" style="margin-left:20px;margin-right:5px"></Icon>
                    筛选
                    <div  slot="content" @keydown.enter="search">
                        <Form ref="formInline" :model="formInline" :label-width="100">
                            <Row :gutter="16">
                                <Col span="8">
                                    <FormItem prop="companyName" label="公司名称：">
                                        <Input size="small"  type="text" v-model="formInline.companyname" placeholder="">
                                        </Input>
                                    </FormItem>
                                </Col>
                                <Col span="8">
                                    <FormItem prop="servicename" label="服务人员名称：">
                                        <Input size="small"  type="text" v-model="formInline.servicename" placeholder="">
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
                </Panel>
            </Collapse>
        </Row>
        <Row>
            <ButtonGroup style="float:left">
                <Button type="primary" icon="information-circled" @click="showdetail">查询详情</Button>
                <Button type="primary" icon="ios-color-wand-outline" @click="company">查看公司</Button>
                <Button type="primary" icon="ios-color-wand-outline" @click="downloadExcel">导出Excel</Button>
                <Button type="primary" icon="ios-color-wand-outline" @click="pass_workorder" >通过</Button>
                <Button type="primary" icon="ios-color-wand-outline" @click="income_detail" >收款明细</Button>
                <Button type="primary" icon="ios-color-wand-outline" @click="reCreate" v-if="isAdmin">重新生成流程</Button>
                <Button type="primary" icon="ios-color-wand-outline" @click="finsih_workerorder" >一键完结</Button>
            </ButtonGroup>
        </Row>
        <Row style="margin-top: 10px;">
            <Table
                ref="selection"
                highlight-row
                size="small"
                :columns="header"
                :data="data"
                @on-current-change="save_current_row"
                @on-row-dblclick="showdetail"
                @on-sort-change="sort"  
                ></Table>
            <Page
                placement="top"
                size="small"
                :total="pageTotal"
                show-total
                show-sizer
                show-elevator
                @on-change="pageChange"
                @on-page-size-change="pageSizeChange"
                style="margin-top: 10px"></Page>
        </Row>
        <Modal
                v-model="flowChart1"
                title="查看流程图"
                width="80%">
            <center>
                <img :src='flowChartImg'/>
            </center>
        </Modal>
    </Card>
</template>

<script>
import Bus from '../../../../components/bus'
import mixin from './mixin.js'

export default {
    mixins: [mixin],
    props:{
        managestatus: Array
    },
    data() {
            return {
                isAdmin:false,
                sortField:'updatedate',
                order:'desc',
                search_model:"",
                //  触发搜索
                isSearh:false,
                //  筛选数据
                formInline:{
                    companyname:'',
                    servicename:''
                },
                //  加载中
                Sloading:false,
                //  当前选中行
                current_row:'',
                //  流程图相关,1.弹出框2.流程图地址
                flowChart1:false,
                flowChartImg:'',
                //  暂停/重启
                pause:false,
                //  终止订单
                endlife:false,
                //  表格相关data
                pageTotal:new Number(),
                page:'1',
                pageSize:'10',
                data:[
                ],
                workOrderStatus:[],
                workOrderStatus_map:new Map(),
                header: [
                    {
                        title: '工单状态',
                        key: 'workOrderStatus',
                        width:140,
                        sortable: true,                                                
                        render:(h, params) => {
                            if(params.row.workOrderStatus == '10'){
                                return h('div','未分配')
                            }else if(params.row.workOrderStatus == '20'){
                                return h('div','未开始')
                            }else if(params.row.workOrderStatus == '30'){
                                return h('div','服务中')
                            }else if(params.row.workOrderStatus == '40'){
                                return h('div','暂停')
                            }else if(params.row.workOrderStatus == '50'){
                                return h('div','退款终止')                            
                            }else if(params.row.workOrderStatus == '60'){
                                return h('div','已完结')                                
                            }else{
                                return h('div','无状态')
                            }
                        }                       
                    },
                    {
                        title: '归属公司',
                        key: 'companyname',
                        width: 220,
                        sortable: true,                                                
                        render:(h, params) => {
                            // console.log(params)
                            if(params.row.companyname == ''||params.row.companyname == null){
                                return ''
                            }else if(params.row.companyname.length>12){
                                return h('Poptip',{
                                    props:{
                                        trigger:'hover',
                                        placement:'bottom'
                                    }
                                },[

                                    h('span',params.row.companyname.slice(0,12)+'...'),
                                    h('Icon', {
                                        props: {
                                            type: 'arrow-down-b',
                                        }
                                    }),
                                    h('div',{
                                        slot:'content',
                                        
                                    },[
                                        h('span',params.row.companyname)
                                    ])
                                ])
                            }else{
                                return h('span',params.row.companyname)
                            }
                        }
                    },
                    {
                        title: '提示',
                        key: 'baseorderid',
                        width: 120
                    },
                    // {
                    //     title: '订单',
                    //     key: 'ordercode',
                    //     width: 150
                    // },
                    // {
                    //     title: '经营状态',
                    //     key:'managestatusName',
                    //     width:120
                    // },
                    {
                        title: '服务部门',
                        key: 'departname',
                        width: 120,
                        sortable: true,                                                
                    },
                    {
                        title: '产品全称',
                        key: 'product',
                        width: 200,
                        sortable: true,                                                
                        render:(h, params) => {
                            // console.log(params)
                            if(params.row.product == ''||params.row.product == null){
                                return ''
                            }else if(params.row.product.length>10){
                                return h('Poptip',{
                                    props:{
                                        trigger:'hover',
                                        placement:'bottom'
                                    }
                                },[

                                    h('span',params.row.product.slice(0,10)+'...'),
                                    h('Icon', {
                                        props: {
                                            type: 'arrow-down-b',
                                        }
                                    }),
                                    h('div',{
                                        slot:'content',
                                        
                                    },[
                                        h('span',params.row.product)
                                    ])
                                ])
                            }else{
                                return h('span',params.row.product)
                            }
                        }
                    },
                    {
                        title: '产品数量',
                        key: 'productnumber',
                        width: 120,
                    },
                    {
                        title: '目前进度',
                        key: 'CurrentProcess',
                        width: 120,
                        sortable: true,                        
                        
                    },
                    {
                        title: '下个进度',
                        key: 'nextprocess',
                        width: 120,
                        sortable: true,                        
                        
                    },
                    {
                        title: '服务开始时间',
                        key: 'ServiceStart',
                        width: 140,
                        sortable: true,                        
                        
                    },
                    {
                        title: '创建时间',
                        key: 'CreateDate',
                        width: 120,
                        sortable: true,                        
                        
                    },
                    // {
                    //     title: '预计完成时间',
                    //     key: 'baseorderid',
                    //     width: 120
                    // },
                    {
                        title: '实际完成时间',
                        key: 'UpdateDate',
                        width: 140,
                        sortable: true,                        
                        
                    },
                    {
                        title: '服务人员',
                        key: 'servername',
                        width: 120,
                        sortable: true,                        
                        
                    },
                    {
                        title: '跟进人',
                        key: 'followname',
                        width: 120,
                        sortable: true,                        
                        
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 180,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                // h('Button', {
                                //     props: {
                                //         type: 'text',
                                //         size: 'small'
                                //     },
                                //     on: {
                                //         click: () => {
                                //             // console.log(params)
                                //             Bus.$emit('showcompanydetail',params)
                                //         }
                                //     }
                                // }, '[查看公司]'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click:() => {
                                            this.flowChart(params)
                                        }
                                    }
                                }, '[流程图]'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            var _self = this
                                            console.log(params)
                                            //  暂停
                                            if(params.row.resumeFlag == null || params.row.resumeFlag == 3){
                                                let url = `api/order/serviceResume?workOrderId=${params.row.id}&resumeFlag=3`
                                                this.$http.get(url).then(function(res){
                                                    _self.$backToLogin(res)
                                                    
                                                    if(res.data.msgCode == 40000){
                                                        _self.$Message.success(res.data.msg)
                                                    }else{
                                                        _self.$Message.error(res.data.msg)
                                                    }
                                                    _self.getData()
                                                })
                                            }else if(params.row.resumeFlag == 2){
                                                let url = `api/order/serviceResume?workOrderId=${params.row.id}&resumeFlag=2`
                                                this.$http.get(url).then(function(res){
                                                    _self.$backToLogin(res)
                                                    
                                                    if(res.data.msgCode == 40000){
                                                        _self.$Message.success(res.data.msg)
                                                    }else{
                                                        _self.$Message.error(res.data.msg)
                                                    }
                                                    _self.getData()
                                                })
                                            }else{}
                                        }
                                    }
                                }, '[暂停/解锁]'),
                                // h('Button', {
                                //     props: {
                                //         type: 'text',
                                //         size: 'small'
                                //     },
                                //     on: {
                                //         click: () => {
                                //             this.endlife = true
                                //         }
                                //     }
                                // }, '[退款终止]'),
                            ]);
                        }
                    }
                ]
            }
        },
    methods:{
        sort(e){
            this.sortField = e.key
            if(e.order == 'normal'){
                this.order = 'desc'
                this.sortField = 'updatedate'
            }else{
                this.order = e.order
            }
            this.getData()
        },
        downloadExcel(){
                let field = [
                    {field:'workOrderStatus',title:'工单状态',format:'workOrderStatus'},
                    {field:'companyname',title:'公司名称'},
                    {field:'baseorderid',title:'提示'},
                    {field:'departname',title:'服务部门'},
                    {field:'product',title:'产品全称'},
                    {field:'CurrentProcess',title:'目前进度'},
                    {field:'nextprocess',title:'下个进度'},
                    {field:'ServiceStart',title:'服务开始时间'},
                    {field:'CreateDate',title:'创建时间'},                                                                   
                    {field:'ServiceEnd',title:'实际完成时间'},                                                                     
                    {field:'servername',title:'服务人员'},
                    {field:'followname',title:'跟进人'} 
                ]
                let _self = this
                let url = `api/order/workOrderList`
                let config = {
                        page: '1',
                        pageSize: '1000000',              
                        companyName:_self.formInline.companyname,
                        serviceName:_self.formInline.servicename,
                        serviceDept:"'PLAN'",
                        export: 'Y',
                        exportField: encodeURI(JSON.stringify(field))
                }
                let toExcel = this.$MergeURL(url, config)
                window.open(toExcel)
            },
        getData(){
            var _self = this
            _self.Sloading = true            
            var url = 'api/order/workOrderList'
            var config = {
                params:{
                    sortField:_self.sortField,
                    order:_self.order,
                    page:_self.page,
                    pageSize:_self.pageSize,
                    companyName:_self.formInline.companyname,
                    serviceName:_self.formInline.servicename,
                    serviceDept:"'PLAN'"
                }
            }
                
            _self.$http.get(url,config).then(function(res){
                // console.log(res.data.data.rows)
                _self.$backToLogin(res)
                
                _self.data = res.data.data.rows
                _self.pageTotal = res.data.data.total
                for(let i = 0;i<res.data.data.rows.length;i++){
                    // console.log(_self.data[i])
                    if(_self.data[i].CreateDate!='' && _self.data[i].CreateDate!=null){
                        _self.data[i].CreateDate = _self.data[i].CreateDate.slice(0,10)
                    }
                    if(_self.data[i].ServiceStart!='' && _self.data[i].ServiceStart!=null){
                        _self.data[i].ServiceStart = _self.data[i].ServiceStart.slice(0,10)
                    }
                    if(_self.data[i].UpdateDate!='' && _self.data[i].UpdateDate!=null){
                        _self.data[i].UpdateDate = _self.data[i].UpdateDate.slice(0,10)
                    }
                }
                _self.Sloading = false
                //  测试块，测试map()

            })
            
        },
        search(){
            this.page = 1
            this.isSearh = true
            this.getData()
        },
        reset(){
            this.isSearh = false
            this.page = 1
            this.formInline.companyname = ""
            this.formInline.servicename = ""
            this.getData()
        },
        pageChange(e){
            this.page = e
            this.getData()
        },
        pageSizeChange(e){
            this.pageSize = e
            this.getData()
        }, 
        //  保存当前选中行
        save_current_row(e){
            // console.log(e)
            this.current_row = e
        },
        // showdetail(){
        //     if(this.current_row != ''){
        //         // Bus.$emit('myCommonTask',this.current_row)
        //         this.$store.commit("open_gobal_work_order_detail_modal", this.current_row.id)
        //     }else{
        //         this.$Message.warning('请选择一行查看详情！')
        //     }
        // },
        showflow(){
            // console.log('111111111')
            if(this.current_row != ''){
                Bus.$emit('myflow',this.current_row)
            }else{
                this.$Message.warning('请选择一行进行流转！')
            }
        },
        //  流程图
        flowChart(a) {
                let _self = this
                _self.flowChart1 = true
                _self.flowChartImg = '/api/dataCenter/activiti/getResourceInputStreamObj?bussinessKey=' + a.row.id +'&bussinessType=20&time='+new Date()
        },
        // foundClues(){
        //     Bus.$emit('workOrderClues',true)
        // }
        company(){
            if(this.current_row != ''){
                // Bus.$emit('openCompanyDetail',this.current_row.company_id)
                this.$store.commit("open_gobal_company_detail_modal", this.current_row.company_id)
            }else{
                this.$Message.warning('请选择一行查看！')
            }
        },
        getDataCenter(){
                let _self = this

                let params = "workOrderStatus"

                function finish(res){
                    _self.workOrderStatus = res.data.workOrderStatus
                    _self.workOrderStatus_map = _self.$array2map(_self.workOrderStatus)
                }

                this.$GetDataCenter(params, finish)
            },
        reCreate(){
            let _self = this
            if(this.current_row != ''){
                let url = `api/order/resetWorkOrderProcess`
                let config = {
                    params:{
                        workOrderId: _self.current_row.id
                    }
                }
                function success(res){
                    _self.$Message.success(res.data.msg)
                }
                _self.$Get(url,config,success)
            }else{
                this.$Message.warning('请选择一行！')
            }
        },
        finsih_workerorder(){
            let _self = this
            if(this.current_row != ''){
                let url = `api/order/goFinshWorkOrderProcess`
                let config = {
                    params:{
                        workOrderId: _self.current_row.id
                    }
                }
                function success(res){
                    _self.$Message.success(res.data.msg)
                }
                _self.$Get(url,config,success)
            }else{
                this.$Message.warning('请选择一行！')
            }
        },
    },
    created(){
        var _self = this
        this.getDataCenter()
        this.getData()
        Bus.$on('flowsuccess',(e)=>{
            _self.getData()
        })
        if(localStorage.getItem('id')==10059){
            _self.isAdmin = true
        }else{
            _self.isAdmin = false
        }
    }

}
</script>



