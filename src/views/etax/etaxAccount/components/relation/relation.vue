<template>
    <div>
        <Row style="margin-bottom:10px">
                <Collapse v-model="search_model">
                    <Panel name="1" >
                        <Icon type="search" style="margin-left:20px;margin-right:5px"></Icon>
                            筛选
                        <div slot="content" @keydown.enter="Search">
                            <Form ref="formValidateSearch" :model="formValidateSearch" :label-width="120">
                                <Row :gutter="16">
                                    <Col span="8">
                                        <FormItem label="系统企业名称：" prop="companyName">
                                            <Input v-model="formValidateSearch.companyName" size="small"></Input>
                                        </FormItem>
                                    </Col>
                                    <Col span="8">
                                        <FormItem label="税务局企业名称：" prop="qyname">
                                            <Input v-model="formValidateSearch.qyname" size="small"></Input>
                                        </FormItem>
                                    </Col>
                                    <Col span="8">
                                        <FormItem label="服务人员：" prop="kj">
                                            <Input v-model="formValidateSearch.kj" size="small"></Input>
                                        </FormItem>
                                    </Col>
                                </Row>
                            <center>
                                <FormItem>
                                    <Button type="primary" @click="Search">搜索</Button>
                                    <Button type="ghost" @click="handleReset" style="margin-left: 8px">重置</Button>
                                </FormItem>
                            </center>
                        </Form>
                    </div>
                </Panel>
            </Collapse>
        </Row>
        <Row style="margin-top: 10px;">
            <Table
                :loading="loading"
                highlight-row
                size="small"
                border
                :columns="header"
                :data="data"></Table>
            <Page
                size="small"
                :total="total"
                show-total
                show-elevator
                :current.sync="page"
                @on-change="pageChange"
                style="margin-top: 10px;padding-bottom:10px"></Page>
        </Row>
        <update-relation v-if="openUpdateRelation" :relationData="currentRow" @close="close_update_relation"></update-relation>
    </div>
</template>

<script>
import updateRelation from './updateRelation';

export default {
    components: {
        updateRelation
    },
    data(){
        return {
            data: [],
            header: [
                {
                    title: "序号",
                    type: 'index',
                    width: 90
                },
                {
                    title: "系统公司名称",
                    key: "companyname",
                    minWidth: 250
                },
                {
                    title: "税务局公司名称",
                    key: "qyname",
                    minWidth: 300
                },
                {
                    title: "服务人员",
                    key: 'kj',
                    minWidth: 120
                },
                {
                    title: "操作",
                    minWidth: 150,
                    render: (h, params) => {
                        return h('div', [
                            h('Button',{
                                props: {
                                    size: "small",
                                    type: "primary"
                                },
                                on: {
                                    click: ()=>{
                                        this.currentRow = params.row
                                        this.openUpdateRelation = true
                                    }
                                }
                            }, '修改'),
                            h('Button', {
                                props: {
                                    type: 'warning',
                                    size: 'small'
                                },
                                style: {
                                    'marginLeft': '5px'
                                }
                            },[
                                h('Poptip', {
                                    props: {
                                        transfer: true,
                                        confirm: true,
                                        title: '您确定要删除此关系吗！',
                                    },
                                    on: {
                                        'on-ok': ()=>{
                                            this.del_realation(params.row.id)
                                        },
                                    }
                                }, '删除')
                            ])
                        ])
                    }
                }
            ],
            total: 0,
            page: 1,
            pageSize: 10,
            loading: false,
            search_model: "",
            formValidateSearch: {
                companyName: "",
                kj: "",
                qyname: ""
            },
            currentRow: "",
            openUpdateRelation: false
        }
    },
    methods: {
        Search() {
            this.page = 1
            this.get_data()
        },
        pageChange(e) {
            this.page = e
            this.get_data()
        },
        handleReset() {
            this.page = 1
            this.$refs["formValidateSearch"].resetFields()
            this.get_data()
        },
        get_data(){
            let _self = this
            let url = 'api/customer/company/gdetax/etaxQyAndCompanyList'
            
            _self.loading = true
            let config = {
                params: {
                    page: _self.page,
                    pageSize: _self.pageSize,
                    companyName: _self.formValidateSearch.companyName,
                    kj: _self.formValidateSearch.kj,
                    qyname: _self.formValidateSearch.qyname
                }
            }

            function success(res){
                _self.loading = false
                _self.total = res.data.data.total
                _self.data = res.data.data.rows
            }

            this.$Get(url, config, success)
        },
        del_realation(e){
            let _self = this
            let url = `api/customer/company/gdetax/delEtaxQyAndCompany`

            let config = {
                params: {
                    id: e
                }
            }

            function success(res){
                _self.get_data()
            }

            this.$Get(url, config, success)
        },
        close_update_relation(){
            this.openUpdateRelation = false
            this.get_data()
        }
    },
    created(){
        this.get_data()
    }
}
</script>
