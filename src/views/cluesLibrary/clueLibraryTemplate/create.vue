<template>
    <div>
        <Modal
            v-model="openCreateTemplate"
            width="80%"
            title="创建线索模板"
        >
            <Form 
                ref="clueTemplate"
                :model="clueTemplate"
                :label-width="120"
            >
                <FormItem label="模版名称" prop="name">
                    <Input v-model="clueTemplate.name" placeholder="" type="text"></Input>
                </FormItem>
                <FormItem label="模板详情" prop="detail" >
                    <Input v-model="clueTemplate.detail" placeholder="" type="textarea" :rows=3></Input>
                </FormItem>
                <FormItem label="模板编码" prop="templateCode">
                    <Input v-model="clueTemplate.templateCode" placeholder="" type="textarea" :rows=3></Input>
                </FormItem>
                <FormItem label="模板代码块" prop="templateContent">
                    <Input v-model="clueTemplate.templateContent" placeholder="" type="textarea" :rows=10></Input>
                </FormItem>
                <FormItem label="模板线索级别" prop="level">
                    <Input v-model="clueTemplate.level" placeholder=""></Input>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="primary" @click="create_templ" :loading="loading">新增</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
export default {
    data(){
        return{
            openCreateTemplate: false,
            loading: false,
            clueTemplate: {
                name: "",
                detail: "",
                templateCode: "",
                templateContent: "",
                level: ""
            }
        }
    },
    methods:{
        create_templ(){
            let _self = this
            _self.loading = true
            let url = `api/clue/template/create`

            let config = {
                name: _self.clueTemplate.name,
                detail: _self.clueTemplate.detail,
                templateCode: _self.clueTemplate.templateCode,
                templateContent: _self.clueTemplate.templateContent,
                level: _self.clueTemplate.level,
            }
            
            function success(res){
                _self.loading = false
                _self.$refs['clueTemplate'].resetFields()
                _self.openCreateTemplate = false
                _self.$emit("update",true)
            }

            function fail(err){
                _self.loading = false
            }

            this.$Post(url, config, success, fail)
        }
    },
    created() {
        let _self = this
        this.$bus.on("OPEN_CREATE_CLUE_TEMPLATE",(e)=>{
            _self.openCreateTemplate = true
        })
    },
}
</script>

