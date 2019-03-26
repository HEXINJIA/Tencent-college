<template>
  <div class="details edit">
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
                <el-form-item label="讲师姓名">
                  <span>aaroncai(蔡弋戈)</span>
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

    <div class="tab-ruleForm-c">
      <h5>讲师信息</h5>
      <div class="tab-ruleForm base-from-child">
        <el-form :model="ruleForm" status-icon
                 ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-row>
            <el-col :span="12">
              <el-form-item label="初次认证时间">
                <el-date-picker style="width:100%"
                  v-model="ruleForm.uthenticationTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="初次认证人">
                <el-input type="" v-model="ruleForm.authenticator" autocomplete="off" placeholder="请输入初次认证人" class="inputW"
                          clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="讲师级别">
                <el-select v-model="ruleForm.lecturerLevel" clearable placeholder="请选择讲师级别" style="width:100%">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="授课状态">
                <el-select v-model="ruleForm.state" clearable placeholder="请选择授课状态" style="width:100%">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="当前级别认证人">
                <el-input type="" v-model="ruleForm.levelCertifier" autocomplete="off" placeholder="请输入当前级别认证人" class="inputW"
                          clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="讲师认证次数">
                <el-input type="number" v-model.number="ruleForm.authenticationTimes" min="1" autocomplete="off" placeholder="请输入讲师认证次数" class="inputW"
                          ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="参加时间	">
                <el-date-picker style="width:100%"
                  v-model="ruleForm.participationTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="是否参加过TTT">
                <el-radio-group v-model="ruleForm.radio" @change="onChange">
                  <el-radio :label="3">参加过</el-radio>
                  <el-radio :label="6">未参加</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="级别晋升时间">
                <el-date-picker style="width:100%"
                  v-model="ruleForm.promotionTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="讲师介绍">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  placeholder="请输入讲师介绍内容"
                  v-model="ruleForm.aboutInstructor" clearable>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="tab-list">
      <div class="list-title"><span class="text">已认证的课程--公司级</span></div>
      <table class="base-tab-table base-tab-table-border">
        <thead>
        <tr class="head-tr">
          <th>
            <div class="th-cell">讲授课程</div>
          </th>
          <th>
            <div class="th-cell">课时</div>
          </th>
          <th>
            <div class="th-cell">认证时间</div>
          </th>
          <th>
            <div class="th-cell">反馈平均分</div>
          </th>
          <th>
            <div class="th-cell">授课次数</div>
          </th>
          <th>
            <div class="th-cell">学员总人数</div>
          </th>
          <th>
            <div class="th-cell">操作</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in tableData" class="body-tr" v-if="tableData.length">
          <td>
            <div class="td-cell">{{item.teachingCourse}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.classHour}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.authenticationTime}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.average}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.teachingFrequency}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.totalNumber}}</div>
          </td>
          <td>
            <div class="td-cell"><span class="td-active">修改</span></div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="list-title"><span class="text">已认证的课程--BU级</span> <span class="new-add">新增</span></div>
      <table class="base-tab-table base-tab-table-border">
        <thead>
        <tr class="head-tr">
          <th>
            <div class="th-cell">讲授课程</div>
          </th>
          <th>
            <div class="th-cell">课时</div>
          </th>
          <th>
            <div class="th-cell">认证时间</div>
          </th>
          <th>
            <div class="th-cell">反馈平均分</div>
          </th>
          <th>
            <div class="th-cell">授课次数</div>
          </th>
          <th>
            <div class="th-cell">学员总人数</div>
          </th>
          <th>
            <div class="th-cell">操作</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in tableData" class="body-tr" v-if="tableData.length">
          <td>
            <div class="td-cell">{{item.teachingCourse}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.classHour}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.authenticationTime}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.average}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.teachingFrequency}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.totalNumber}}</div>
          </td>
          <td>
            <div class="td-cell"><span class="td-active">修改</span></div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="list-title"><span class="text">开发的课程--公司级</span> <span class="new-add">新增</span></div>
      <table class="base-tab-table base-tab-table-border">
        <thead>
        <tr class="head-tr">
          <th>
            <div class="th-cell">讲授课程</div>
          </th>
          <th>
            <div class="th-cell">课时</div>
          </th>
          <th>
            <div class="th-cell">认证时间</div>
          </th>
          <th>
            <div class="th-cell">反馈平均分</div>
          </th>
          <th>
            <div class="th-cell">授课次数</div>
          </th>
          <th>
            <div class="th-cell">学员总人数</div>
          </th>
          <th>
            <div class="th-cell">操作</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in tableData" class="body-tr" v-if="tableData.length">
          <td>
            <div class="td-cell">{{item.teachingCourse}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.classHour}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.authenticationTime}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.average}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.teachingFrequency}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.totalNumber}}</div>
          </td>
          <td>
            <div class="td-cell"><span class="td-active">修改</span></div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="list-title"><span class="text">开发的课程--BU级</span> <span class="new-add">新增</span></div>
      <table class="base-tab-table base-tab-table-border">
        <thead>
        <tr class="head-tr">
          <th>
            <div class="th-cell">讲授课程</div>
          </th>
          <th>
            <div class="th-cell">课时</div>
          </th>
          <th>
            <div class="th-cell">认证时间</div>
          </th>
          <th>
            <div class="th-cell">反馈平均分</div>
          </th>
          <th>
            <div class="th-cell">授课次数</div>
          </th>
          <th>
            <div class="th-cell">学员总人数</div>
          </th>
          <th>
            <div class="th-cell">操作</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in tableData" class="body-tr" v-if="tableData.length">
          <td>
            <div class="td-cell">{{item.teachingCourse}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.classHour}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.authenticationTime}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.average}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.teachingFrequency}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.totalNumber}}</div>
          </td>
          <td>
            <div class="td-cell"><span class="td-active">修改</span></div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="list-title"><span class="text">所获奖项</span></div>
      <table class="base-tab-table base-tab-table-border">
        <thead>
        <tr class="head-tr">
          <th>
            <div class="th-cell">奖项名称</div>
          </th>
          <th>
            <div class="th-cell">奖项级别</div>
          </th>
          <th>
            <div class="th-cell">颁发单位</div>
          </th>
          <th>
            <div class="th-cell">奖项类型</div>
          </th>
          <th>
            <div class="th-cell">获奖时间</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in prizeWinningData" class="body-tr" v-if="prizeWinningData.length">
          <td>
            <div class="td-cell">{{item.awardName}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.awardlevel}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.IssuingUnit}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.type}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.time}}</div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="center base-btn">
        <el-button type="primary" @click.stop="back" class="base-btn-active">保存</el-button>
        <el-button  @click.stop="back" class="">取消</el-button>
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
          uthenticationTime: '',
          authenticator: '',
          lecturerLevel: '',
          state:'',
          levelCertifier:'',
          authenticationTimes:'',
          participationTime:'',
          radio: 3,
          promotionTime:'',
          aboutInstructor:''
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        tableData: [
          {
            teachingCourse: "java",
            classHour: '8',
            authenticationTime: '2019-03-5',
            average: '80',
            teachingFrequency: '20',
            totalNumber: '1000',
          }],
        prizeWinningData: [
          {
            awardName: "特卖商城",
            awardlevel: 'BG',
            IssuingUnit: '腾讯',
            type: '运营',
            time:'2019-09-03'
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
    .tab-ruleForm-c{
      border: 1px solid rgba(230, 230, 230, 1);
      margin-top: 20px;
      .tab-ruleForm{
        padding:0px 20px 0px 20px;
        .demo-ruleForm{
          margin-top:20px;
        }
      }
    }
    .tab-list {
      .list-title {
        height:40px;
        line-height: 40px;
        /*text-align: center;*/
        padding-left:10px;
        padding-right:10px;
        border: 1px solid rgba(230, 230, 230, 1);
        border-bottom: none;
        margin-top: 20px;
        .text{
          float: left;
        }
        .new-add{
          float: right;
          cursor: pointer;
          color: #479B24;
        }
      }
    }
  }
</style>
