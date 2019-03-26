<template>
  <div class="authentication" ref="right">
    <h3 class="title">内部讲师课程认证申请表</h3>
    <div class="btn base-btn">
      <el-button type="primary" @click="open" class="base-btn-active">查看更多</el-button>
    </div>
    <v-dialog :dialogFormVisible.sync="dialogFormVisible" @dialogUpdate:dialogFormVisible="dialogUpdate"></v-dialog>
    <div class="from from-child base-from-child">
      <el-form :model="ruleForm" status-icon
               ref="ruleForm2" label-width="110px" class="demo-ruleForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名">
              <el-input type="password" v-model="ruleForm.name" autocomplete="off" clearable placeholder="请输入姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="申报课程名称">
              <el-input type="password" v-model="ruleForm.sname" autocomplete="off" clearable placeholder="请输入申报课程名称"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="组织单元">
              <el-input v-model.number="ruleForm.dyun" clearable   placeholder="请输入组织单元"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="工作年限">
              <el-input v-model.number="ruleForm.nx" clearable   placeholder="请输入工作年限"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="司龄">
              <el-input v-model.number="ruleForm.sl" clearable  placeholder="请输入司龄"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="参加T培训情况">
              <el-radio-group v-model="ruleForm.radio">
                <el-radio :label="3">参加过</el-radio>
                <el-radio :label="6">未参加</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="职务及职级">
              <el-input v-model.number="ruleForm.jb"clearable placeholder="请输入职务及职级"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="个人工作与课程">
              <el-radio-group v-model="ruleForm.radio1">
                <el-radio :label="3">相关</el-radio>
                <el-radio :label="6">一般</el-radio>
                <el-radio :label="9">不相关</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="能投入讲课时间">
              <el-select v-model="ruleForm.time" placeholder="请选择能投入讲课时间" class="width100">
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
          <el-col :span="24">
            <el-form label-position="top">
              <el-form-item label="个人介绍" class="tab-table-f">
                <table class="base-tab-table base-tab-table-border">
                  <thead>
                    <tr class="head-tr">
                      <th width="200px"><div class="th-cell">讲师名称</div></th>
                      <th><div class="th-cell">讲师介绍</div></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="body-tr">
                      <td align="center" valign="middle"><div class="td-cell inline">小A</div></td>
                      <td><div class="td-cell text-left">在人力资源管理及培训管理领域有超过10年的工作经历，
                        曾担任过招聘/培训/考核经理、事业部人力资源经理、招聘调配总监、 课程与讲师管理总监等职务，
                        主导完成了校园招聘、招聘系统重构、业务部门绩效考核体系、内部课程及讲师体系、
                        通用素质课程体系等项目， 是公司S4专家，在招聘管理、培训管理、员工绩效管理、
                        课程与讲师发展等模块有着较为深入的研究以及专业经验； 擅长讲故事、做游戏以及提问等互动方式，
                        语言幽默风趣，逻辑性强，关注学员，授课质量稳定，获得学员广泛的好评</div></td>
                    </tr>
                  </tbody>
                </table>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="center btn base-btn" label-width="0px">
              <el-button type="primary" @click="submitForm('ruleForm2')" class="base-btn-active">提交申请</el-button>
              <el-button>保持草稿</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import dialog from  "@/components/dialog"
  export default {
    data() {
      return {
        dialogFormVisible:false,
        height: "",
        ruleForm: {
          name:'',
          sname: '',
          dyun: '',
          nx: '',
          sl:'',
          radio: 3,
          jd:'',
          radio1: 3,
          time: ''
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',

        }]
      }
    },
    mounted() {
    },
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      next()

    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      next()

    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      next()

    },
    methods: {
      dialogUpdate(val){
        this.dialogFormVisible=val;
      },
      open(){
        this.dialogFormVisible=true;
      }
    },
    components:{
      "v-dialog":dialog
    }
  }
</script>
<style>
  .tab-table-f .el-form-item__content{
    line-height:17px;
  }
</style>
<style scoped lang="less">
  .width100 {
    width: 100%;
  }

  .center {
    text-align: center;
  }

  .inputW {
    width: 200px;
  }

  .authentication {
    min-height:680px;
    padding: 20px;
    border: 3px solid rgba(230, 230, 230, 1);
    border-top:none;
    background-color: #fff;
    .btn {
      text-align: right;
      margin-top: 20px;
    }
    .title {
      font-size: 18px;
      color: #333;
      text-align: center;
    }
    .from {
      margin-top: 20px;
      .text-left{
        text-align: left;
      }
      .inline{
      }
    }
  }

</style>
