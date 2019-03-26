<template>
  <div class="apply information-list" ref="right">
    <div class="btn base-btn">
      <el-button :class="{'base-btn-active':active==1}" @click="btnActive(1)"> 讲师信息表</el-button>
      <el-button :class="{'base-btn-active':active==2}" @click="btnActive(2)"> 讲师开发的课程表</el-button>
      <el-button :class="{'base-btn-active':active==3}" @click="btnActive(3)"> 讲师获奖信息表</el-button>
      <el-button :class="{'base-btn-active':active==5}" @click="btnActive(5)"> 讲师已认证课程表</el-button>
      <el-button class="df">导出</el-button>
    </div>
    <div class="btn-add" v-if="active==1">后台添加讲师记录</div>
    <div class="btn-add" v-if="active==5">后台添加审批记录</div>
    <div class="from">
      <div class="from-child base-from-child" v-if="radio==3||radio==6">
        <el-form :model="ruleForm" status-icon
                 ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-row>
            <el-col :span="12">
              <el-form-item label="姓名">
                <el-input type="" v-model="ruleForm.name" autocomplete="off" placeholder="请输入姓名" class="inputW"
                          clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="组织单元">
                <el-input type="" v-model="ruleForm.unit" autocomplete="off" placeholder="请输入组织单元" class="inputW"
                          clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
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
            <el-col :span="12">
              <el-form-item label="职级">
                <el-input v-model.number="ruleForm.rank" class="inputW"  placeholder="请输入职级" clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="12">
              <el-form-item label="工作地点">
                <el-input v-model.number="ruleForm.place" class="inputW" placeholder="请输入工作地点" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="是否参加过TTT">
                <el-select v-model="ruleForm.participate" clearable placeholder="请选择参加过TTT" style="width:100%">
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
          <el-row >
            <el-col :span="12">
              <el-form-item label="管理级别">
                <el-input v-model.number="ruleForm.level" class="inputW" placeholder="请输入管理级别" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">

            </el-col>
          </el-row>
          <el-row class="deg">
            <el-col :span="24" class="position">
              <div class="">
                <el-form-item label-width="0px">
                  <el-button icon="el-icon-search" @click="submitForm('ruleForm2')"></el-button>
                  <!--<el-button type="primary" @click="submitForm('ruleForm2')">查询</el-button>-->
                  <!--<el-button @click="">导出</el-button>-->
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="from-child base-from-child" v-else>
        <el-form :model="ruleForm" status-icon
                 ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-row class="deg">
            <el-col :span="12">
              <el-form-item label="申请人姓名">
                <el-input type="" v-model="ruleForm.name" autocomplete="off" placeholder="请输入申请人姓名" class="inputW"
                          clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" class="position">
              <el-form-item label-width="0px">
                <el-button icon="el-icon-search" @click="submitForm('ruleForm2')"></el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="tab">
      <table class="base-tab-table base-tab-table-border">
        <thead>
        <tr class="head-tr">
          <th>
            <div class="th-cell">姓名</div>
          </th>
          <th>
            <div class="th-cell">组织单元</div>
          </th>
          <th>
            <div class="th-cell">职级</div>
          </th>
          <th>
            <div class="th-cell">管理级别</div>
          </th>
          <th>
            <div class="th-cell">工作地点</div>
          </th>
          <th>
            <div class="th-cell">讲师级别</div>
          </th>
          <th>
            <div class="th-cell">当前级别认证时间</div>
          </th>
          <th>
            <div class="th-cell">授课状态</div>
          </th>
          <th>
            <div class="th-cell">参加TTT</div>
          </th>
          <th>
            <div class="th-cell">在职</div>
          </th>
          <th>
            <div class="th-cell">编辑</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in tableData" class="body-tr" v-if="tableData.length">
          <td>
            <div class="td-cell">{{item.name}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.unit}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.rank}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.level}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.place}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.lecturerLevel}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.time}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.state}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.participate}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.Incumbency}}</div>
          </td>
          <td>
            <div class="td-cell"><span @click="goDetails(index)" class="td-active">编辑</span></div>
            <!--<el-button size="mini" @click="goDetails(item.index)">查看</el-button>-->
          </td>
        </tr>
        </tbody>
      </table>
      <div class="dd" v-if="!tableData.length">暂无列表数据</div>
      <div class="pagination base-pagination">
        <el-pagination
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
  </div>
</template>

<script type="text/ecmascript-6">
  import { getApplicationList } from "@/api"
  export default {
    data() {
      return {
        height: "",
        active: 1,
        radio: 6,
        currentPage: 4,
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
            name: '蔡弋戈',
            unit:'SNG社交网络事业群/会员产品部/产品开发中心',
            rank:'T1',
            level:'L2-2',
            place: '深圳总部',
            lecturerLevel:'特聘',
            time:'2009-07-01',
            state: '活跃',
            participate:'是',
            Incumbency:'是'
          },
          {
            name: '蔡弋戈',
            unit:'SNG社交网络事业群/会员产品部/产品开发中心',
            rank:'T1',
            level:'L2-2',
            place: '深圳总部',
            lecturerLevel:'特聘',
            time:'2009-07-01',
            state: '活跃',
            participate:'是',
            Incumbency:'是'
          }
        ],
        ruleForm: {
          name: '',
          unit:'',
          state: '',
          rank:'',
          place: '',
          participate:'',
          level:''
        }
      };
    },
    mounted() {
      this.getApplicationList();
      console.log(this.baseUtils.dateTimeConvert("2019-03-04 09:09:28"))
    },
    beforeRouteEnter(to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      next()

    },
    beforeRouteUpdate(to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      next()

    },
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      next()

    },
    methods: {
      async getApplicationList() {
        let res=await getApplicationList({
          type:1,
          pass_status:1
        })
      },
      goAuthentication() {
        this.$router.push({name: 'authentication'})
      },
      goDetails(id) {
        this.$router.push({ name: 'edit', params: { id:id }})
      },
      btnActive(state) {
//        if (this.active == state) {
//          this.active = "";
//        } else {
          this.active = state;
//        }
      },
      onChange(val) {
        this.radio = val;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style lang="less">

  .radio .btn-active {
    outline: 0;
    color: #fff;
    background: rgba(71, 155, 36, 1);
    border: 1px solid rgba(71, 155, 36, 1);
  }
  .radio .el-button:focus, .radio .el-button:hover {
    border-color: rgba(71, 155, 36, 1);
    color: #fff;
    background: rgba(71, 155, 36, 1);
  }
  .position .el-form-item .el-form-item__content {
    position: inherit;
  }

  .position .el-button {
    padding: 12px 12px;
    position: absolute;
    top: 0;
    right: 0px;
    bottom:0;
    /*margin-top: -20px;*/
    border: none;
    background-color: #479B24;
    color: #fff;
    font-size: 16px;
    font-family: MicrosoftYaHei;
  }

  .position .el-button:focus, .position .el-button:hover {
    background-color: transparent;
    border: none;
    color: #fff;
    font-family: MicrosoftYaHei;
  }
  /*.btn  .df{*/
  /*border:1px solid rgba(204,204,204,1);*/
  /*border-radius:4px;*/
  /*font-size:14px;*/
  /*font-family:MicrosoftYaHeiLight;*/
  /*font-weight:300;*/
  /*color:rgba(51,51,51,1);*/
  /*}*/

  /*.btn  .df:focus,.btn  .df:hover{*/
  /*border:1px solid rgba(204,204,204,1);*/
  /*background-color:transparent ;*/
  /*border-radius:4px;*/
  /*font-size:14px;*/
  /*font-family:MicrosoftYaHeiLight;*/
  /*font-weight:300;*/
  /*color:rgba(51,51,51,1);*/
  /*}*/

</style>
<style scoped lang="less">
  .inputW {
    /*width: 200px;*/
  }
  .deg {
    position: inherit;
  }
  .apply {
    min-height: 680px;
    padding: 20px;
    border: 3px solid rgba(230, 230, 230, 1);
    border-top: none;
    background-color: #fff;
    .btn {
      text-align: right;
      /*margin-top:20px;*/
    }
    .radio {
      margin-top: 20px;
      text-align: right;
      /*text-align: left;*/
      .radio-btn {
        margin-left: 30px;
      }
    }
    .btn-add{
      margin-top:10px;
      text-align:right;
      cursor: pointer;
      color: #479B24;

    }
    .from {
      margin-top: 10px;
      text-align: left;
      .from-child {
        margin-top: 20px;
        margin-bottom: 30px;
        border: 1px solid rgba(71, 155, 36, 1);
        padding-right: 60px;
        padding-top: 20px;
        position: relative;
        .position {
          width: 40px;
          position: absolute;
          top: -1px;
          right: 0px;
          bottom: 0;
          background-color: #479B24;
        }
      }
      .title {
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: left;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
    }
    .tab {
      .dd{
        font-size:12px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
        border-bottom:1px solid rgba(230,230,230,1);
        text-align: center;
        padding:15px 0px;
      }
      .pagination {
        text-align: right;
        margin-top: 20px;
      }

    }
  }
</style>
