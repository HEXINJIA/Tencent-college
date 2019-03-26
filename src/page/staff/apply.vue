<template>
  <div class="apply" ref="right">
    <div class="btn base-btn">
      <el-button :class="{'base-btn-active':active==1}" @click="btnActive(1)"> 全部申请记录</el-button>
      <el-button :class="{'base-btn-active':active==2}" @click="btnActive(2)"> 讲师申请记录</el-button>
      <el-button :class="{'base-btn-active':active==3}" @click="btnActive(3)"> 讲师晋级申请记录</el-button>
      <el-button class="df">导出</el-button>
    </div>
    <div class="radio">
    <el-radio-group v-model="radio" @change="onChange">
    <!--<el-radio :label="3">我的申请记录</el-radio>-->
    <el-radio :label="6">待审批记录</el-radio>
    <el-radio :label="9">已审批记录</el-radio>
    <el-radio :label="11">草稿记录</el-radio>
    </el-radio-group>
    <el-button size="mini" class="radio-btn" @click="goAuthentication"> 讲师/课程认证</el-button>
    </div>
    <div class="from">
      <div class="from-child base-from-child" v-if="radio==3||radio==6">
        <el-form :model="ruleForm" status-icon
                 ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-row>
            <el-col :span="12">
              <el-form-item label="申请人姓名">
                <el-input type="" v-model="ruleForm.name" autocomplete="off" placeholder="请输入申请人姓名" class="inputW"
                          clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="当前状态">
                <el-select v-model="ruleForm.state" clearable placeholder="请选择当前状态" style="width:100%">
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
              <el-form-item label="工作地点">
                <el-input v-model.number="ruleForm.place" class="inputW"  placeholder="请输入工作地点" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="申请事项">
                <el-select v-model="ruleForm.matter" clearable placeholder="请选择申请事项" style="width:100%">
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
              <el-form-item label="课程类型">
                <el-select v-model="ruleForm.type" clearable placeholder="请选择课程类型" style="width:100%">
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
              <el-form-item label="课程名称">
                <el-input v-model.number="ruleForm.courseType" class="inputW" placeholder="请输入课程名称" clearable></el-input>
              </el-form-item>
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
      <table class="base-tab-table base-border-top">
        <thead>
        <tr class="head-tr base-border-bottom base-border-th-left-dashed">
          <th>
            <div class="th-cell base-border-none">序号</div>
          </th>
          <th>
            <div class="th-cell">申请人</div>
          </th>
          <th>
            <div class="th-cell">申请事项</div>
          </th>
          <th>
            <div class="th-cell">课程状态</div>
          </th>
          <th>
            <div class="th-cell">申请类型</div>
          </th>
          <th>
            <div class="th-cell">申请日期</div>
          </th>
          <th>
            <div class="th-cell">当前状态</div>
          </th>
          <th>
            <div class="th-cell">当前处理人</div>
          </th>
          <th>
            <div class="th-cell">申请人工作地点</div>
          </th>
          <th>
            <div class="th-cell">操作</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in tableData" class="body-tr base-border-bottom" v-if="tableData.length">
          <td>
            <div class="td-cell">{{item.index}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.name}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.matters}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.state}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.type}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.date}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.current}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.people}}</div>
          </td>
          <td>
            <div class="td-cell">{{item.address}}</div>
          </td>
          <td>
            <div class="td-cell"><span @click="goDetails(item.index)" class="td-active">查看</span></div>
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
            index: 3,
            name: '王小虎',
            matters: '上班',
            state: 'true',
            type: '前端开发',
            date: '2019-3-14',
            current: '开发中',
            people: '李四',
            address: '上海市',
          },
          {
            index: 2,
            name: '王小虎',
            matters: '上班',
            state: 'true',
            type: '前端开发',
            date: '2019-3-14',
            current: '开发中',
            people: '李四',
            address: '上海市',
          }
          ],
        ruleForm: {
          name: '',
          state: '',
          place: '',
          matter:'',
          type:'',
          courseType:''
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
        if(id==2){
          this.$router.push({name: 'lecturer-details', params: {id: id}})
        }else{
          this.$router.push({ name: 'details', params: { id:id }})
        }

//
      },
      btnActive(state) {
        if (this.active == state) {
          this.active = "";
        } else {
          this.active = state;
        }
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
