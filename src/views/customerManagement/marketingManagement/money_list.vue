<template>
    <div>
        <Modal
            v-model="payment"
            title="补交/审批"
            :width="900"
        >
            <Form ref="formValidate" :model="formValidate" :label-width="90">
                <Row :gutter="16" style="height:60px">
                    <Col span="8" >
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
                <Row :gutter="16" style="height:60px">
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
                <Row style="margin-top:20px">
                    <Collapse>
                        <Panel name="1">
                            补交明细
                            <div slot="content">
                                <Row style="margin-top: 10px;">
                                    <Table border :columns="header" :data="balanceItem" highlight-row @on-current-change="save_balance_row"	:loading="py_loading"></Table>
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
    </div>
</template>

<script>
import Bus from '../../../components/bus'
export default {
    data(){
        return{
            current_orderId:'',
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
            Bus.$on('money_detail',(e)=>{
                this.current_orderId = e
                this.payment = true
                this.GetBalanceIdDate()
            })
        },
        //  获取数据
        GetBalanceIdDate(){
            var _that = this
            var url = 'api/order/queryBalanceItem?orderId='+_that.current_orderId
            // 
            this.$http.get(url).then(function(res){
                _self.$backToLogin(res)                
                _that.formValidate = res.data.data.balance[0]
                _that.balanceItem = res.data.data.balanceItem
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
        },


    }
}
</script>
