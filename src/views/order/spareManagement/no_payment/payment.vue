<template>
    <div>
        <Modal
            v-model="payment"
            title="补交/审批"
            :width="950"
        >
            <Form ref="formValidate" :model="formValidate" :label-width="120">
                <Row :gutter="16">
                    <Col span="8">
                        <FormItem label="归属公司:" prop="companyName">
                            <Input size="small" v-model="formValidate.companyName" disabled/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="归属客户:" prop="customerName">
                            <Input size="small" v-model="formValidate.customerName" disabled/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="余款总额:" prop="totalamount">
                            <Input size="small" v-model="formValidate.totalamount" disabled/>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="8">
                        <FormItem label="已补金额:" prop="paynumber">
                            <Input size="small" v-model="formValidate.paynumber" disabled/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="未补金额:" prop="unpaidamount">
                            <Input size="small" v-model="formValidate.unpaidamount" disabled/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="待审批金额:" prop="approvalpendingamount">
                            <Input size="small" v-model="formValidate.approvalpendingamount" disabled/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Collapse v-model="show">
                        <Panel name="1">
                            补交明细
                            <div slot="content">
                                <Row>
                                    <ButtonGroup>
                                        <Button type="primary" icon="plus" @click="confirm"  v-permission="['spareM.receipt']">确认收款</Button>
                                        <Button type="primary" icon="edit" @click="add_pay">补交费用</Button>
                                        <Button type="primary" icon="edit" @click="edit_pay">修改</Button>
                                        <Button type="primary" icon="edit" v-permission="['spareM.edit']" @click="openreback" >驳回</Button>
                                    </ButtonGroup>
                                </Row>
                                <Row style="margin-top: 10px;">
                                    <Table border :columns="header" :data="balanceItem" highlight-row @on-current-change="save_balance_row"	:loading="py_loading" size="small"></Table>
                                </Row>
                            </div>
                        </Panel>
                    </Collapse>
                </Row>
            </Form>
            <div slot="footer">
                <Button type="ghost" @click="close_payment">关闭</Button>
            </div>
        </Modal>
        <Modal
            v-model="openRebackModal"
            title="驳回"
            :width="400"
        >   
            <Row>
                驳回原因：
            </Row>
            <Row>
                <Input v-model="memo" type="textarea" placeholder="请输入驳回原因！（非必选项）"></Input>
            </Row>
            <div slot="footer">
                <Button type="primary" icon="edit" :loading="backup_loading" @click="reback">驳回</Button>
            </div>
        </Modal>
        <AddPayment></AddPayment>
        <EditPayment></EditPayment>
    </div>
</template>

<script>
import Bus from '../bus'
import AddPayment from './add_payment'
import EditPayment from './edit_payment'
export default {
    data(){
        return{
            memo:"",
            openRebackModal:false,
            backup_loading:false,
            show:'1',
            py_loading:false,
            //  浮动框弹出
            payment:false,
            //  订单Id
            balanceId:'',
            balanceRow:'',
            //  抬头表格
            select_balance_row:'',
            formValidate:{
                companyName:'',
                customerName:'',
                totalamount:'',
                paynumber:'',
                unpaidamount:'',
                approvalpendingamount:''
            },
            //  明细表格
            balanceItem:[],
            header:[
                    {
                        title:'序号',
                        type:'index',
                        align:'center',
                        width:60
                    },
                    {
                        title: '补交金额',
                        key: 'transcationamount',
                    },
                    {
                        title: '当前状态',
                        key: 'processtype',
                    },
                    {
                        title: '驳回原因',
                        key:'memo'
                    },
                    {
                        title: '缴费渠道',
                        key: 'paydir',
                    },
                    {
                        title: '缴费时间',
                        key: 'transcationtime',
                    },
                    {
                        title: '财务确认时间',
                        key: 'confirmtime',
                    },
                    {
                        title: '确认收款人',
                        key: 'userName',
                    },
                    {
                        title: '创建人',
                        key: 'createrealname'
                    }
            ]
        }
    },
    created:function(){
        this.init()
    },
    methods:{
        //  初始化
        init(){
            this.$bus.on('open_payment',(e)=>{
                this.show = "1"
                this.balanceRow = e
                this.balanceId = e.id
                this.payment = true
                this.GetBalanceIdDate()
            })
            this.$bus.on('update',(e)=>{
                this.GetBalanceIdDate()
            })
        },
        //  获取数据
        GetBalanceIdDate(){
            var _that = this
            var url = 'api/order/balance/detail?balanceId='+_that.balanceId
            this.$http.get(url).then(function(res){
            _that.$backToLogin(res)
                
                var temp_data = res.data.data
                _that.formValidate = temp_data.balance[0]
                _that.balanceItem = temp_data.balanceItem
                _that.balanceItem = _that.balanceItem.reverse()
                for(let i = 0; i<_that.balanceItem.length; i++){
                    if(_that.balanceItem[i].transcationtime != null){
                        _that.balanceItem[i].transcationtime = _that.balanceItem[i].transcationtime.slice(0,10)
                    }
                    if(_that.balanceItem[i].confirmtime != null){
                        _that.balanceItem[i].confirmtime = _that.balanceItem[i].confirmtime.slice(0,10)
                    }
                }
            })
        },
        //  保存当前选中收款项
        save_balance_row(e){
            this.select_balance_row = e
        },
        //  关闭当前弹出框
        close_payment(){
            this.payment = false
            this.$bus.emit('refresh',true)
        },
        //  跳转到变更收款界面
        edit_pay(){
            if(this.select_balance_row!=''){
                this.$bus.emit('edit_pay',this.select_balance_row)
            }else{
                this.$Message.error('请选择一行进行修改')
            }
            
        },
        //  确认收款
        confirm(){
            var _that = this
            if(this.select_balance_row == ''){
                _that.$Message.error('请选择一行进行确认')
            }else{
                if(this.select_balance_row.processtype=="待审批" || this.select_balance_row.processtype=="驳回"){
                    var url = 'api/order/balance/confirmReceipt'
                    const params = {
                        "itemId":_that.select_balance_row.id
                    }
                    this.$http.post(url,params).then(function(res){
                        if(res.data.msgCode==40000){
                            _that.$Message.success('审批成功')
                            _that.$bus.emit('refresh',true)
                            _that.GetBalanceIdDate()
                        }else{
                            _that.$Message.error('审批失败，请重新审批')
                        }         
                    }).catch(function(error){
                        _that.$Message.error('审批失败，请重新审批')
                    })
                }else{
                    _that.$Message.error('此收款已审批，请选择另外一行')
                }
            }
        },
        //  打开驳回modal
        openreback(){
            let _self = this
            if(this.select_balance_row == ''){
                _self.$Message.error('请选择一行驳回！')
            }else{
                _self.openRebackModal = true
                console.log(this.select_balance_row)
            }
        },
        reback(){
            let _self = this
            
            let url = `api/order/balance/updateProcesstypeByItemId`
            _self.backup_loading = true
            let config = {
                itemId: _self.select_balance_row.id,
                processType: "bh",
                memo: _self.memo
            }

            function success(res){
                _self.backup_loading = false
                _self.openRebackModal = false
                _self.memo = ""
                _self.GetBalanceIdDate()
            }

            function fail(err){
                _self.backup_loading = false
            }

            _self.$Post(url, config, success, fail)
        },
        //  跳转到增加收款界面
        add_pay(){
            // Bus.$emit('add_pay',this.balanceId)
            this.$bus.emit('add_pay',this.balanceId)
        }
    },
    components:{
        AddPayment,
        EditPayment
    }
}
</script>
