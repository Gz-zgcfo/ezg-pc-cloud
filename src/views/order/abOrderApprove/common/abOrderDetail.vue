<template>
    <div>
        <Modal
            v-model="openAbOrderDetail"
            title="查看"
            width="100%"
        >
            <Form ref="formValidateDetail" :model="formValidateDetail" :label-width="100">
                <Row :gutter="16">
                    <Col span="8">
                        <FormItem label="企业名称" prop="companyname">
                            <Input size="small" v-model="formValidateDetail.companyname" readonly/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="联系人" prop="name">
                            <Input size="small" v-model="formValidateDetail.name" readonly/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="联系电话" prop="tel">
                            <Input size="small" v-model="formValidateDetail.tel" readonly/>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="8">
                        <FormItem label="异常类别" prop="unusual_type">
                            <Input size="small" v-model="formValidateDetail.unusual_type" readonly/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <FormItem label="产品内容" prop="product_content">
                        <Input size="small" type="textarea" :rows="2" v-model="formValidateDetail.product_content" readonly/>
                    </FormItem>
                </Row>
                <Row>
                    <FormItem label="审批是由" prop="apply_memo">
                        <Input size="small" type="textarea" :rows="4" v-model="formValidateDetail.apply_memo" readonly/>
                    </FormItem>
                </Row>
            </Form>
            <div slot="footer"></div>
        </Modal>
    </div>
</template>

<script>
export default {
    data(){
        return{
            openAbOrderDetail: false,
            formValidateDetail: {}
        }
    },
    methods: {
        get_data(e){
            this.formValidateDetail = e
            console.log(this.formValidateDetail)
        },
    },
    created() {
        let _self = this
        this.$bus.on("OPEN_AB_ORDER_DETAIL",(e)=>{
            _self.get_data(e)
            _self.openAbOrderDetail = true
        })
    },
}
</script>

<style>
#show-order-item textarea.ivu-input{
    border: 0px;
    overflow-y: hidden;
    background-color: rgba(0, 0, 0, 0);
}
</style>
