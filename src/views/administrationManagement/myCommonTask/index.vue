<template>
    <div>
        <Tabs value="name1">
            <TabPane label="未开始" name="name1">
                <unbegin></unbegin>
            </TabPane>
            <TabPane label="服务中" name="name2">
                <servicing></servicing>
            </TabPane>
            <TabPane label="已完结" name="name3">
                <finish></finish>
            </TabPane>
            <TabPane label="全部" name="name4">
                <all></all>
            </TabPane>
        </Tabs>
        <!-- <flow></flow> -->
        <!-- <detail></detail> -->
        <!-- <company-detail></company-detail> -->
    </div>
</template>

<script>
import unbegin from './unbegin'
import servicing from './servicing'
import finish from './finish'
import all from './all'
import flow from './flow'

// import detail from './detail'
// import CompanyDetail from './myCommonTaskIndex/companydetail'
// import CompanyDetail from '../../woa-components/companyDetail/CompanyDetail'

export default {
    name:'administratiotaskmanagement',
    components:{
        unbegin,
        servicing,
        finish,
        all,
        // detail,
        // CompanyDetail,
        flow
    }
}
</script>
