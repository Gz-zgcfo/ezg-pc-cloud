<template>
    <div>
        <Modal v-model="openDeleteCustomer" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="information-circled"></Icon>
                <span>删除客户 - {{NAME}}</span>
            </p>
            <div style="text-align:center">
                <p>客户信息删除无法恢复</p>
                <p>确定删除吗？</p>
            </div>
            <div slot="footer">
                <Button type="error" name="marketingManagement_index_delete_delete" size="large" long :loading="loading" @click="deleteCustomer">删除</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
export default {
    data(){
        return{
            openDeleteCustomer: false,
            loading: false,
            NAME: "",
            ID: ""
        }
    },
    methods:{
        deleteCustomer(){
            let _self = this;   
            _self.$ButtonCollect("marketingManagement_index_delete_delete");
            _self.loading = true
            let url = `/api/customer/deleteCustomerById/` + _self.ID

            let config = {}

            function success(res){
                _self.openDeleteCustomer = false
                _self.$bus.emit("UPDATE_CUSTOMER", true)
                _self.$Message.success("删除成功!")
            }

            function fail(err){
                _self.loading = false
            }

            this.$Get(url, config, success,fail)
        }
    },
    created(){
        let _self = this
        this.$bus.off("DELETE_CUSTOMER", true)
        this.$bus.on("DELETE_CUSTOMER", (e)=>{
            _self.NAME = e.NAME
            _self.ID = e.ID
            _self.openDeleteCustomer = true
        })
    }
}
</script>

