<template>
  <div class="dialog">
    <el-dialog title="添加课程" :visible="dialogFormVisible" @close="closeDiv">
      <div class="from-child base-from-child">
        <el-form :model="ruleForm"  status-icon
                 ref="ruleForm" label-width="110px">
          <el-row>
            <el-col :span="24" class="base-btn">
              <el-form-item class="left" label-width="0px">
                <el-button type="primary" class="base-btn-active">查询</el-button>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="课程名">
                <el-input type="password" v-model="ruleForm.name" autocomplete="off" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="是否急聘">
                <el-radio-group v-model="ruleForm.radio">
                  <el-radio :label="3">是</el-radio>
                  <el-radio :label="6">否</el-radio>
                  <el-radio :label="9">所有</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="课程类型">
                <el-input type="password" v-model="ruleForm.name" autocomplete="off" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="申请课程级别">
                <el-radio-group v-model="ruleForm.radio1">
                  <el-radio :label="3">公司级</el-radio>
                  <el-radio :label="6">BG级</el-radio>
                  <el-radio :label="9">所有</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <div class="table">
        <div class="title">讲师课程选择</div>
        <table class="base-tab-table base-tab-table-border">
          <thead>
          <tr class="head-tr">
            <th>
              <div class="th-cell base-border-none">急聘</div>
            </th>
            <th>
              <div class="th-cell">课程名</div>
            </th>
            <th>
              <div class="th-cell">内容类型</div>
            </th>
            <th>
              <div class="th-cell">申报条件</div>
            </th>
            <th>
              <div class="th-cell">讲师</div>
            </th>
            <th>
              <div class="th-cell">申请</div>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in tableData" class="body-tr base-border-bottom" v-if="tableData.length">
            <td>
              <div class="td-cell">{{item.wanted}}</div>
            </td>
            <td>
              <div class="td-cell">{{item.curriculum}}</div>
            </td>
            <td>
              <div class="td-cell">{{item.content}}</div>
            </td>
            <td>
              <div class="td-cell">{{item.tjian}}</div>
            </td>
            <td>
              <div class="td-cell">{{item.jiangs}}</div>
            </td>
            <td>
              <div class="td-cell"><span @click="goDetails(item.index)" class="td-active">查看</span></div>
              <!--<el-button size="mini" @click="goDetails(item.index)">查看</el-button>-->
            </td>
          </tr>
          </tbody>
        </table>
        <div class="pagination base-pagination">
          <el-pagination
            :pager-count="5"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
      <div slot="footer" class="dialog-footer base-btn">
        <el-button @click.stop="closeDiv" class="base-btn-active">取 消</el-button>
        <el-button type="primary" @click.stop="closeDiv"  class="base-btn-active">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props:{
      dialogFormVisible:{
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        currentPage: 4,
        formLabelWidth: '120px',
        ruleForm: {
          radio:3,
          radio1:3,
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [
          {
            wanted: '前端',
            curriculum: '王小虎',
            content: '上班',
            tjian: 'true',
            jiangs: '前端开发',
            shenp: '2019-3-14',
//              operation: '上海市'
          }],
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      closeDiv() {
        this.$emit('dialogUpdate:dialogFormVisible', false); //触发 input 事件，并传入新值
      }
    }
  }
</script>
<style>
  .table .el-table th {
    font-weight: 600;
  }
</style>
<style scoped>
  .left{
    text-align: right;
  }
  .pagination {
    text-align: right;
    margin-top: 20px;
  }
  .title{
    margin-bottom:20px;
  }

</style>
