<template>
  <div>
    <ButtonGroups style="margin:10px">
      <Button style="margin-right:10px">添加</Button>
      <Button>删除</Button>
    </ButtonGroups>
    <Table :columns="header" stripe style="margin:10px"></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float:left;">
            <Page :total="100" :current="1"></Page>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      header:[
        {
          title:'变更内容',
          key:'name'
        },
        {
          title:'备注',
          key:'add'
        },
        {
          title:'创建人',
          key:'create'
        },
        {
          title:'创建时间',
          key:'create_date'
        }
      ]
    }
  }
}
</script>

