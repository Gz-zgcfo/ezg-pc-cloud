<template>
    <Card>
        <Row style="margin-bottom:10px">
            <Collapse v-model="search_model">
                <Panel name="1">
                    <Icon type="search" style="margin-left:20px;margin-right:5px"></Icon>
                    筛选
                        <!-- <div slot="content">
                            111111
                        </div> -->
                    <!-- <Search slot="content"></Search> -->
                    <div  slot="content" @keydown.enter="search">
                        <Form ref="seacrhFormInline" :model="seacrhFormInline" :label-width="100">
                            <Row :gutter="16">
                                <Col span="8">
                                    <FormItem prop="companyname" label="公司名称：">
                                        <Input type="text" size="small" v-model="seacrhFormInline.companyname" placeholder="">
                                        </Input>
                                    </FormItem>
                                </Col>
                                <Col span="8">
                                    <FormItem prop="tel" label="文件名称：">
                                        <Input type="text" size="small" v-model="seacrhFormInline.file_type_name" placeholder="">
                                        </Input>
                                    </FormItem>
                                </Col>
                                <Col span="8">
                                    <FormItem prop="companyname" label="保管人：">
                                        <Input type="text" size="small" v-model="seacrhFormInline.keeperrealname" placeholder="">
                                        </Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="8">
                                    <FormItem prop="companyname" label="保管部门：">
                                        <Input type="text" size="small" v-model="seacrhFormInline.departname" placeholder="">
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
            <Button type="primary" @click="downloadExcel">导出excel</Button>
        </Row>
        <Row style="margin-top: 10px;">
            <Table
                ref="selection"
                highlight-row
                size="small"
                :loading="loading"
                :columns="header"
                :data="data"
            >
            </Table>
            <Page
                placement="top"
                size="small"
                :total="total"
                show-total
                show-elevator
                @on-change="pageChange"
                style="margin-top: 10px"></Page>
        </Row>
        <Modal
            title="注销资料"
            v-model="openLogout"
            width="500"
        >
            <Row :gutter="20" style="margin-bottom:10px"><h3><center>{{selectRow.companyname}}</center></h3></Row>
            <Row :gutter="20" style="margin-bottom:10px"><h3><center>{{selectRow.customer_file_name}}</center></h3></Row>
            <Row :gutter="20" style="margin-bottom:10px">
                <Input type="textarea" :rows="4" placeholder="请填写注销原因！" v-model="logoutReason"></Input>
            </Row>
            
            <div slot="footer">
                <Button type="warning" @click="confirm_logout" long :loading="logoutLoading" :disabled="disabled">注销</Button>
            </div>
        </Modal>
        <!-- <create-file @update="get_data"></create-file> -->
        <!-- <create-request></create-request> -->
        <file-log :customer_f_s_a="customer_f_s_a_map"></file-log>
        <update-file :customer_f_s_a="customer_f_s_a" @update="get_data"></update-file>
    </Card>
</template>

<script>
// import createFile from './create_file'
// import createRequest from './create_request'
import fileLog from './file_log'
import updateFile from './update_file';

export default {
    name: 'resourelist_index',
    components:{
        fileLog,
        updateFile
        // createFile,
        // createRequest
    },
    data(){
        return{
            //  选中的列
            selectRow: [],
            logoutLoading: false,
            logoutReason: "",
            openLogout: false,
            selectRow:{},
            search_model:"",
            loading: false,
            openDetail:false,
            selectRow:{

            },
            seacrhFormInline: {
                file_type_name: "",
                keeperrealname: "",
                companyname: "",
                departname: ""
            },
            page: 1,
            pageSize: 10,
            total: 0,
            data: [],
            customer_file_s: [],
            customer_file_s_map: new Map(),
            customer_f_s_a: [],
            customer_f_s_a_map: new Map(),
            header: [
                // {
                //     key: "",
                //     type: 'selection',
                //     minWidth: 90
                // },
                // {
                //     title: "客户名称",
                //     key: "name",
                //     minWidth: 120
                // },
                // {
                //     title: "电话",
                //     key: "tel",
                //     minWidth: 120
                // },
                {
                    title: "公司名称",
                    key: "companyname",
                    minWidth: 200
                },
                {
                    title: "资料名称",
                    key: "customer_file_name",
                    minWidth: 150
                },
                {
                    title: "数量",
                    key: "file_num",
                    minWidth: 90
                },
                {
                    title: "可交接数量",
                    key: "max_allow_connect_num",
                    minWidth: 120
                },
                {
                    title: "已锁定数量",
                    key: "lock_num",
                    minWidth: 120
                },
                {
                    title: "保管部门",
                    key: "departname",
                    minWidth: 150
                },
                {
                    title: "保管人",
                    key: "keeperrealname",
                    minWidth: 120
                },
                {
                    title: "区域",
                    key: "storage_name",
                    minWidth: 120
                },
                {
                    title: "存放地点",
                    key: "storage_code",
                    minWidth: 120
                },
                {
                    title: "文件状态",
                    key: "file_status_name",
                    minWidth: 120
                },
                {
                    title: "注销备注",
                    key: "logout_memo",
                    minWidth: 120
                },
                {
                    title: "操作",
                    key: "action",
                    minWidth: 180,
                    render: (h, parmas) =>{
                        return h('div',[
                            h('Button',{
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.edit_file(parmas.row)
                                    }
                                }
                            },'[ 编辑 ]'),
                            h('Button',{
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.open_flow(parmas.row)
                                    }
                                }
                            },'[ 交接记录 ]')
                        ])
                    }
                }
            ],
            adminHeader: 
                {
                    title: "管理员操作",
                    minWidth: 150,
                    render: (h, parmas) =>{
                        return ("div",[
                            h('Button',{
                                style: {
                                    display: (localStorage.getItem("realname") == "管理员" ) ? "inline-block" : "none"
                                },
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.delete_file(parmas.row)
                                    }
                                }
                            },'[ 删除 ]'),
                            h('Button',{
                                style: {
                                    display: (localStorage.getItem("realname") == "管理员" ) ? "inline-block" : "none"
                                },
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.selectRow = parmas.row
                                        this.logout(parmas.row)
                                    }
                                }
                            },'[ 注销 ]'),
                        ])
                    }
                }
        }
    },
    computed:{
        disabled(){
            if(!this.logoutReason){
                return true
            }else{
                return false
            }
        }
    },
    methods:{
        open_img(e){
            this.selectRow = e
            this.openDetail = true
        },
        logout(e){
            this.openLogout = true
        },
        confirm_logout(){
            let _self = this
            _self.logoutLoading = true
            let url = "api/customer/file/logout"
            let config = {
                id: _self.selectRow.id,
                logoutMemo: _self.logoutReason
            }

            function success(res){
                _self.logoutLoading = false
                _self.openLogout = false
                _self.selectRow = {}
                _self.get_data()
            }

            function fail(err){
                _self.logoutLoading = false
            }

            this.$Post(url, config, success, fail)
        },
        open_flow(e){
            this.$bus.emit("OPEN_FILE_LOG", e)
        },
        downloadExcel(){
            let field = [
                {field:'companyname',title:'公司名称'},
                {field:'name',title:'客户名称'},
                {field:'customer_file_name',title:'资料名称'},
                {field:'keeperrealname',title:'保管人'},
                {field:'file_num',title:'数量'},
                {field:'file_status',title:'文件状态', format:"customer_file_s"},         
            ]
            let _self = this
            let url = `api/customer/file/list`
            let config = {
                page: '1',
                pageSize: '1000000',
                sortField: "id",
                departname: _self.seacrhFormInline.departname,
                file_type_name: _self.seacrhFormInline.file_type_name,
                keeperrealname: _self.seacrhFormInline.keeperrealname,
                companyname: _self.seacrhFormInline.companyname,
                export: 'Y',
                exportField: encodeURI(JSON.stringify(field))
            }
            let toExcel = this.$MergeURL(url, config)
            window.open(toExcel)
        },
        get_data(){
            let _self = this
            let url = "api/customer/file/list"

            _self.loading = true

            let config = {
                params:{
                    page: _self.page,
                    pageSize: _self.pageSize,
                    sortField: "id",
                    departname: _self.seacrhFormInline.departname,
                    file_type_name: _self.seacrhFormInline.file_type_name,
                    keeperrealname: _self.seacrhFormInline.keeperrealname,
                    companyname: _self.seacrhFormInline.companyname,

                }
                
            }

            function success(res){
                _self.total = res.data.data.total
                _self.data = res.data.data.rows
                for(let i = 0; i< _self.data.length; i++){
                    if(_self.data[i].file_status){
                        _self.data[i].file_status_name = _self.customer_file_s_map.get(_self.data[i].file_status)
                        _self.data[i].storage_name = _self.customer_f_s_a_map.get(_self.data[i].storage)
                    }
                }
                _self.loading = false
            }

            this.$Get(url, config, success)
        },
        get_data_center(){
            let _self = this
            return new Promise((resolve, reject) => {
                let params = "customer_file_s,customer_f_s_a"
                function success(res){
                    resolve()
                    _self.customer_file_s = res.data.data.customer_file_s
                    _self.customer_file_s_map = _self.$array2map(_self.customer_file_s)
                    // console.log(_self.customer_file_s_map)
                    _self.customer_f_s_a = res.data.data.customer_f_s_a
                    _self.customer_f_s_a_map = _self.$array2map(_self.customer_f_s_a)
                }
                _self.$GetDataCenter(params, success)

            })
        },
        pageChange(e){
            this.page = e
            this.get_data()
        },
        search(){
            this.page = 1
            this.get_data()
        },
        reset(){
            this.seacrhFormInline.departname = ""
            this.seacrhFormInline.file_type_name = ""
            this.seacrhFormInline.keeperrealname = ""
            this.seacrhFormInline.companyname = ""
            this.get_data()
        },
        create_file(){
            this.$bus.emit("OPEN_CREATE_RESOURE_FILE", true)
        },
        create_request(){
            let _self = this
            if(!this.selectRow.length){
                _self.$Message.warning("请选择要交接的资料！")
            }else{
                for(let i = 0; i< _self.selectRow.length; i++){
                    _self.selectRow[i].num = 1
                }
                _self.$bus.emit("OPEN_CREATE_REQUEST_FILE", _self.selectRow)
            }
        },
        select_change(e){
            this.selectRow = e
        },
        delete_file(e){
            let _self = this
            let url = `api/customer/file/del`

            let config = {
                id: e.id
            }

            function success(res){
                _self.get_data()
            }

            function fail(err){

            }

            this.$Post(url, config, success, fail)
        },
        edit_file(e){
            this.$bus.emit("OPEN_UPDATE_FILE",e)
        }
    },
    created(){
        let _self = this
        this.get_data_center().then(
            () => {
                if(localStorage.getItem('id')==10059){
                    this.header.push(this.adminHeader)
                }
                _self.get_data()
                
            }
            
        )
    }
}
</script>
