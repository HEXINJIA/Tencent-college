<template>
  <div class="lecturer-details">
    <div class="content">
      <div class="title">讲师晋级申请表</div>
      <el-form :model="ruleForm" status-icon
               ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="8">
            <el-form-item label="姓名">
              <span>xiaokailiu</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="当前级别">
              <span>T3</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="目标级别">
              <span>基础等</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <table class="base-tab-table base-tab-table-border">
      <tbody>
      <tr class="body-tr">
        <td>
          <div class="td-cell">晋级级别/评估项目</div>
        </td>
        <td>
          <div class="td-cell"><span>本人现状：</span><span>初级</span></div>
        </td>
        <td>
          <div class="td-cell"><span>晋级目标：</span><span>中级</span></div>
        </td>
      </tr>
      <tr class="body-tr">
        <td>
          <div class="td-cell">资历</div>
        </td>
        <td>
          <div class="td-cell">1，担任初级3年；2，职级 ：3级</div>
        </td>
        <td>
          <div class="td-cell">1，担任初级满1年；2，职级在2级以上（含2级）</div>
        </td>
      </tr>
      <tr class="body-tr">
        <td>
          <div class="td-cell">授课次数</div>
        </td>
        <td>
          <div class="td-cell">累计53次（上一级别）/5次（本年</div>
        </td>
        <td>
          <div class="td-cell">累计6次（上一级别）/4次（本年度）</div>
        </td>
      </tr>
      <tr class="body-tr">
        <td>
          <div class="td-cell">授课反馈平均分（本年度）</div>
        </td>
        <td>
          <div class="td-cell">4.8分</div>
        </td>
        <td>
          <div class="td-cell">4.2分</div>
        </td>
      </tr>
      <tr class="body-tr">
        <td>
          <div class="td-cell">参与新讲师认证（本年度）</div>
        </td>
        <td>
          <div class="td-cell">0人次</div>
        </td>
        <td>
          <div class="td-cell">5人次</div>
        </td>
      </tr>
      <tr class="body-tr">
        <td>
          <div class="td-cell">讲授课程门数及课程时数</div>
        </td>
        <td>
          <div class="td-cell">3门（2-7小时）/2门（7小时）</div>
        </td>
        <td>
          <div class="td-cell">2门（2-7小时）/1门（7小时）</div>
        </td>
      </tr>
      <tr class="body-tr">
        <td>
          <div class="td-cell">开发课程门数及课程时数</div>
        </td>
        <td>
          <div class="td-cell">2门（7小时）</div>
        </td>
        <td>
          <div class="td-cell">1门（2小时）</div>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="center base-btn">
      <el-button type="" @click.stop="back" class="base-btn-active">返回列表</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        ruleForm: {}
      }
    },
    props: {
      id:[String]
    },
    mounted(){
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>
<style>
  .lecturer-details .el-form-item {
    margin-bottom: 0px;
  }

</style>
<style scoped lang="less">
  .center {
    text-align: center;
    margin-top: 20px;
  }

  .lecturer-details {
    min-height: 680px;
    padding: 20px;
    border: 3px solid rgba(230, 230, 230, 1);
    border-top:none;
    background-color: #fff;
    .content {
      border: 1px solid  rgba(230, 230, 230, 1);
      border-bottom: none;
      .title {
        text-align: center;
        border-bottom: 1px solid  rgba(230, 230, 230, 1);
        line-height: 30px;
      }
    }
    .lecturer-table {
      width: 100%;
      border-top: 1px solid  rgba(230, 230, 230, 1);
      border-left: 1px solid  rgba(230, 230, 230, 1);
      tbody {
        tr {
          td {
            padding: 12px 0px;
            border-bottom: 1px solid  rgba(230, 230, 230, 1);
            border-right: 1px solid  rgba(230, 230, 230, 1);
            .lecturer-cell {
              padding: 0px 10px;
            }
          }
        }
      }
    }
  }
</style>
