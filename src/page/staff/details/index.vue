<template>
  <div class="details">
    <div class="title">讲师审核信息</div>
    <div class="content">
      <h5>个人信息</h5>
      <div class="con clearfix">
        <div class="img"></div>
        <div class="tab">
          <el-form :model="ruleForm" status-icon
                   ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="24">
                <el-form-item label="组织单元">
                  <span>SNG社交网络事业群/增值产品部/泛娱乐增值产品中心</span>
                </el-form-item>
              </el-col>

            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="入职日期">
                  <span>2018-4-15</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="任职通道">
                  <span>项目类-PM</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="任职职位">
                  <span>客服关系</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="岗位">
                  <span>项目管理</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="直线上级">
                  <span>xiaokailiu</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="专业职级">
                  <span>T3</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="子等">
                  <span>基础等</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>

    <div class="tab-cell">
      <h5>申请人信息</h5>
      <el-form :model="ruleForm" status-icon
               ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="申请人">
              <span>lili(李莉)</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="申报课程名称">
              <span>管理进阶</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="申请时间">
              <span>2018-4-15</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="组织单元">
              <span>SNG社交网络事业群/增值产品部/泛娱乐增值产品中心</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="工作地点">
              <span>深圳</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="审核状态">
              <span>审核中</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="tab-cell">
      <h5>个人简介</h5>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
    </div>
    <div class="tab-list">
      <div class="list-title">处理记录</div>
      <table class="base-tab-table base-tab-table-border">
        <thead>
        <tr class="head-tr">
          <th>
            <div class="th-cell">提交</div>
          </th>
          <th>
            <div class="th-cell">处理人</div>
          </th>
          <th>
            <div class="th-cell">操作</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in tableData" class="body-tr" v-if="tableData.length">

          <td>
            <div class="td-cell">{{item.name}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.matters}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.state}}</div>
          </td>

        </tr>
        </tbody>
      </table>
      <div class="center base-btn">
        <el-button type="primary" @click.stop="back" class="base-btn-active">返回列表</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        textarea: "04年加入腾讯，负责QQ交友，空间等开发工作，" +
        "06年加入QQ音乐团队，先后承担开发、PM、leader角色",
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
          radio: 3,
          radio1: 3,
          value: ''
        },
        tableData: [
          {
            index: 1,
            name: '王小虎',
            matters: '上班',
            state: 'true',
            type: '前端开发',
            date: '2019-3-14',
            current: '开发中',
            people: '李四',
            address: '上海市',
//              operation: '上海市'
          }, {
            index: 2,
            name: '王小虎',
            matters: '上班',
            state: 'true',
            type: '前端开发',
            date: '2019-3-14',
            current: '开发中',
            people: '李四',
            address: '上海市',
          }]
      }
    },
    props: {
      id:[String]
    },
    mounted() {

    },
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>
<style>
  .tab-list .el-table th {
    font-weight: 600;
  }

  .tab-cell .el-form-item,
  .con .el-form-item {
    margin-bottom: 0px;
  }

  .tab-cell .el-textarea__inner:focus {
    border-color: transparent;
  }

  .tab-cell .el-textarea__inner {
    border: none;
  }

</style>
<style scoped lang="less">
  .center {
    text-align: center;
    margin-top: 20px;
  }

  .details {
    min-height: 680px;
    padding: 20px;
    border: 3px solid rgba(230, 230, 230, 1);
    border-top:none;
    background-color: #fff;
    .title {
      padding-left: 10px;
      color: #409EFF;
    }
    h5 {
      padding-left: 10px;
      line-height: 30px;
      border-bottom: 1px solid rgba(230, 230, 230, 1)
    }
    .content {
      margin-top: 20px;
      border: 1px solid rgba(230, 230, 230, 1);
      .con {
        min-height: 50px;
        padding: 0px 20px 10px 10px;
        position: relative;
        .img {
          width: 100px;
          height: 100px;
          background-color: #f00;
          position: absolute;
          left: 20px;
          top: 10px;
        }
        .tab {
          padding-left: 120px;
          /*float: left;*/
          /*width:100%;*/
        }
      }
    }
    .tab-cell {
      border: 1px solid rgba(230, 230, 230, 1);
      margin-top: 20px;
    }
    .tab-list {
      .list-title {
        line-height: 30px;
        text-align: center;
        border: 1px solid rgba(230, 230, 230, 1);
        border-bottom: none;
        margin-top: 20px;
      }
    }
  }
</style>
