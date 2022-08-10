<template>
    <div>
        <!-- 按钮 -->
        <el-button type="primary" icon="el-icon-plus" style="margin:10px 0px">添加</el-button>
        <!-- 表格组件 
        data:表格组件将来需要展示的数据 数组类型  -->
        <el-table border :data="list">
            <el-table-column type="index" label="序号" width="80px" align="center">
            </el-table-column>
            <el-table-column prop="tmName" label="品牌" width="width">
            </el-table-column>
            <el-table-column prop="logoUrl" label="品牌LOGO" width="width">
                <template slot-scope="{row,$index}">
                    <img :src="row.logoUrl" alt="" style="width:100px;height:100px">
                </template>
            </el-table-column>
            <el-table-column prop="prop" label="操作" width="width">
                <template slot-scope="{row,$index}">
                    <el-button type="warning" icon="el-icon-edit">修改</el-button>
                    <el-button type="danger" icon="el-icon-delete">删除</el-button>
                </template>
            </el-table-column>           
            
        </el-table>
        <!-- 分页器
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"  -->
        <el-pagination
        style="margintop:20px; text-align:center" 
        :current-page="page" 
        :total="total" 
        :page-size="limit"
        :page-count="7"
        :page-sizes="[3, 5, 10]" 
        layout="prev, pager, next, jumper,->, sizes, total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name:'TradeMark',
    data(){
        return{
            page:1,
            limit:5,
            total:0,
            list:[]
        }
    },
    // 组件挂载完毕发请求
    mounted(){
        // 获取列表数据的方法
        this.getPageList();
    },
    methods:{
        // 获取品牌列表的数据
        async getPageList(){
            // 解构出参数
            // 获取品牌列表的接口
            let {page,limit} = this;
            let result = await this.$API.trademark.reqTradeMarkList(page,limit);
            if(result.code == 200){
                this.total= result.data.total;
                this.list= result.data.records;
            }
        }
    }
}
</script>

<style>

</style>