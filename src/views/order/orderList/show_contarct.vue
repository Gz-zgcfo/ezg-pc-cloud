<template>
    <div>
        <Modal
            v-model="openContract"
            title="合同"
        >   
            <Row v-if="isNull">
                <span>
                    该订单未上传合同文件！
                </span>
            </Row>
            <Row :gutter="20">
                <Col span="6" v-for="(item, index) in imgArray" :key="index">
                    <a target="_blank" :href="'/api/assets/' + item.realpath" >
                        <img :src="'/api/assets/upload/commonImg/excel.png'" alt="不可预览" v-if="item.extend == 'xls' || item.extend == 'xlsx'" width="100" height="100" onerror="this.src='/api/assets/upload/commonImg/error.jpg';this.onerror=null">
                        <img :src="'/api/assets/upload/commonImg/word.png'" alt="不可预览" v-else-if="item.extend == 'doc' || item.extend == 'docx'" width="100" height="100" onerror="this.src='/api/assets/upload/commonImg/error.jpg';this.onerror=null">
                        <img :src="'/api/assets/upload/commonImg/ppt.png'" alt="不可预览" v-else-if="item.extend == 'ppt' || item.extend == 'pptx'" width="100" height="100" onerror="this.src='/api/assets/upload/commonImg/error.jpg';this.onerror=null">
                        <img :src="'/api/assets/upload/commonImg/txt.png'" alt="不可预览" v-else-if="item.extend == 'txt' " width="100" height="100" onerror="this.src='/api/assets/upload/commonImg/error.jpg';this.onerror=null">
                        <img :src="'/api/assets/upload/commonImg/pdf.jpg'" alt="不可预览" v-else-if="item.extend == 'pdf' " width="100" height="100" onerror="this.src='/api/assets/upload/commonImg/error.jpg';this.onerror=null">
                        <img :src="'/api/assets/' +item.realpath" alt="不可预览" v-else width="100" height="100" onerror="this.src='/api/assets/upload/commonImg/error.jpg';this.onerror=null">                    
                    </a>
                    <Button type="text" @click="img_remove(item.id)" v-if="isOperation">删除</Button>
                </Col>
                <Col span="6" style="height:100px" v-if="isOperation">
                    <Upload
                        ref="upload"
                        :before-upload="handleUpload"
                        action=""
                    >
                        <Button type="ghost" icon="ios-cloud-upload-outline" style="margin-top:40px">选择文件</Button>
                    </Upload>
                </Col>
            </Row>
            <Row v-permission="['orderL.contract']">
                <Col span="12">
                    <Select v-model="contractFlag" style="width:180px">
                        <Option value="wsc">未上传</option>
                        <Option value="ysc">已上传(部分|全部)</option>
                        <Option value="ybq">已补全</option>
                    </Select>
                </Col>
                <Col span="12">
                    <Button type="primary" @click="confirm" :loading="loading">修改</Button>
                </Col>
            </Row>
            <div slot="footer"><Button type="primary" @click="openContract=false">关闭</Button></div>
        </Modal>
    </div>
</template>

<script>
export default {
    data(){
        return{
            orderId: "",
            openContract: false,
            imgArray: [],
            type: "onlyShow",
            contractFlag: "",
            loading: false
        }
    },
    methods: {
        get_contarct_data(){
            let _self = this
            let url = `/api/customer/findCustomerFilesById`

            let config = {
                params: {
                    customerId: _self.orderId,
                    bType: "OrderConctract"
                }
            }

            function success(res){
                _self.imgArray = res.data.data
                _self.openContract = true
                // for(let i = 0; i<_self.imgArray.length; i++){
                //     _self.imgArray[i].realpath = "/api/assets/"+_self.imgArray[i].realpath
                // }
            }

            this.$Get(url, config, success)
        },
        submit_contract(){

        },
        img_remove(e){
            let _self = this
            let url = `/api/customer/customerFileRemove/`+ e

            let config = {

            }

            function success(res){
                _self.$Message.success("删除成功！")
                _self.get_contarct_data()
            }

            this.$Get(url, config, success)
        },
        handleUpload(file) {
            let _self = this
            let formdata = new FormData()
                
            let url = `api/order/contract/upload`
            formdata.append("orderId", _self.orderId)
            formdata.append("files", file)

                
            function success(res){
                _self.get_contarct_data()
            }

            function fail(err){

            }
            this.$Post(url, formdata, success, fail)
        },
        confirm(){
            let _self = this
            let url = `api/order/contract/flag/update`
            _self.$ButtonCollect("order_contract")
            _self.loading = true
            let config = {
                id: _self.orderId,
                contractFlag: _self.contractFlag
            }

            function success(res){
                _self.loading = false
                _self.openContract = false
            }

            function fail(err){
                _self.loading = false
            }

            this.$Post(url, config, success, fail)
        }
    },
    computed:{
        isNull(){
            if(!this.imgArray.length){
                return true
            }else{
                return false
            }
        },
        isOperation(){
            // console.log(this.type)
            if(this.type == "onlyShow"){
                return false
            }else{
                return true
            }
        }
    },
    created() {
        let _self = this
        // console.log("11111111")
        // _self.$bus.off("ORDER_LIST_CONTARCT_PIC_OPEN",(e) => {
        //     _self.orderId = ""
        //     console.log("off")
        // })
        _self.$bus.on("ORDER_LIST_CONTARCT_PIC_OPEN", (e) => {
            _self.orderId = e.id
            _self.type = e.type
            _self.get_contarct_data()
        })
    },
}
</script>
