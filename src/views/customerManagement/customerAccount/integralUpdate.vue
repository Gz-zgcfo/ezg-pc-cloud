<template>
    <div>
        <Modal
            title="消费积分调整"
            v-model="openIntegralUpdate"
            width="1100"
            @on-cancel="close"
        >
            <Form :model="accountData" :label-width="100" >
                <Row :gutter="16">
                    <Col span="10">
                        <FormItem label="客户名称" prop="name">
                            <Input size="small" v-model="selectRow.name" readonly/>
                        </FormItem>
                    </Col>
                    <Col span="10">
                        <FormItem label="联系方式" prop="tel">
                            <Input size="small" v-model="selectRow.tel" readonly/>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="10">
                        <FormItem label="原消费积分" prop="integral_amount">
                            <Input size="small" v-model="selectRow.integral_amount" readonly/>
                        </FormItem>
                    </Col>
                    <Col span="10">
                        <FormItem label="现增加" prop="now_integral">
                            <Input size="small" v-model="now_integral" />
                        </FormItem>
                    </Col>
                </Row>
            </Form>
            <div slot="footer">
                <Button type="primary" @click="submit">确定修改</Button>
                <Button type="ghost">关闭</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        props: {
            selectRow: {
                type:[String, Number]
            }
        },
        data() {

            return {
                openIntegralUpdate: true,
                now_account: ""
                
            }
        },
        methods:{
            //确定修改
            submit(){
                let _self = this
                let url = `api/customer/integral/update`
                let config = {
                    id: this.selectRow.id,
                    integral_num: this.now_integral
                }
                function success(res){
                    console.log(res)
                    _self.close()
                    _self.$emit('update_integral')
                }
                function fail(){

                }
                this.$Post(url,config,success,fail)
            },
            close(){
                this.$emit("close")
            }
           
        }
    }
</script>