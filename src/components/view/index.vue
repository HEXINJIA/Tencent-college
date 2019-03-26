<template>
  <div class="view">
    <div class="content clearfix wrapper">
      <div class="slider-bar" :style="{minHeight:`${height-5}px`}">
        <el-menu
          router
          :default-active="$route.meta.name"
          :unique-opened="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu :index="item.name" v-for="(item,index) in slideBar" :key="index"
                      v-if="!item.hidden">
            <template slot="title">
              <i class="icon-icon_ iconfont"></i>
              <span>{{item.meta.txt}}</span>
            </template>
            <el-menu-item
              :route="{name:key.name}"
              :index="key.name"
              v-for="(key,i) in item.children" :key="i" v-if="item.children&&!key.hidden">
              {{key.meta.txt}}
              <i class="icon-icon-- iconfont icon"></i>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="right-bar" ref="right" :style="{minHeight:`${height-55}px`}">
        <div class="header">
          讲师管理接口人
        </div>
        <ul class="list">
          <li>讲师认证：v_hlei(雷虎)</li>
          <li>讲师认证：v_hlei(雷虎)</li>
          <li>讲师认证：v_hlei(雷虎)</li>
          <li>讲师认证：v_hlei(雷虎)</li>
          <li>讲师认证：v_hlei(雷虎)</li>
          <li>讲师认证：v_hlei(雷虎)</li>
          <li>讲师认证：v_hlei(雷虎)</li>
          <li>讲师认证：v_hlei(雷虎)</li>
          <li>讲师认证：v_hlei(雷虎)</li>
        </ul>
        <div class="header">
          讲师认证流程图
        </div>
        <div class="title">
          讲师认证流程
        </div>
        <div class="flow-chart">
          <div class="btn">填写讲师申请表</div>
          <img src="../../assets/imges/bm@2x.png" alt="" height="32px;" width="14px;" class="img">
          <div class="btn">填写讲师申请表</div>
          <img src="../../assets/imges/bm@2x.png" alt="" height="32px;" width="14px;" class="img">
          <div class="btn">填写讲师申请表</div>
          <img src="../../assets/imges/bm@2x.png" alt="" height="32px;" width="14px;" class="img">
          <div class="btn">填写讲师申请表山豆根山豆根似的</div>
        </div>
      </div>
      <div class="view-content" ref="viewContent">
        <div class="title"><span>{{$route.meta.belongToGroup}} </span>><span></span><span>{{$route.meta.txt}}</span></div>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: {
      slideBar: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data() {
      return {
        height: 500,
        H: 0
      }
    },
    watch:{
      "$route.path"(val,tu){
        setTimeout(() => {
          this.H = this.$refs.viewContent.offsetHeight;
          let ht = this.$refs.right.offsetHeight;
          if (this.H > 726) {
            this.height = this.H;
          } else {
            this.height = 726
          }
        }, 60)
      }
    },
    mounted() {
      setTimeout(() => {
        this.H = this.$refs.viewContent.offsetHeight;
        let ht = this.$refs.right.offsetHeight;
        if (this.H > 726) {
          this.height = this.H;
        } else {
          this.height = 726
        }
      }, 60)
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .slider-bar .el-menu{
    border-right:none;
  }
  .slider-bar .el-submenu__title{
    font-size:16px;
    font-family:MicrosoftYaHei-Bold;
    font-weight:bold;
    color:rgba(51,51,51,1);
    font-family: MicrosoftYaHei;
  }
  .slider-bar .el-submenu__title:hover{
    background-color: transparent;
  }
  .slider-bar .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: transparent;
  }
  .slider-bar .el-menu-item{
    /*font-size:16px;*/
    font-family:MicrosoftYaHeiLight;
    font-weight:300;
    color:rgba(51,51,51,1);
  }
  .slider-bar .el-submenu__icon-arrow{
    font-size:18px;
  }
  .slider-bar .el-menu-item.is-active {
    font-weight:700;
    color: #479B24;
  }
  .slider-bar .el-menu-item .icon{
    display: none;
  }
  .slider-bar .el-menu-item.is-active  .icon{
   display: inline-block;
  }
  .icon{
   position: absolute;
    right:20px;
  }
</style>
<style scoped lang="less">
  .view {
    /*text-align: center;*/
    .content {
      /*width:1200px;*/
      box-sizing: border-box;
      margin: auto;
      position: relative;
      .slider-bar {
        position: absolute;
        left: 0;
        top: 0;
        width: 228px;
        min-height: 660px;
        border: 3px solid rgba(230, 230, 230, 1);
        background-color: #fff;
      }
      .view-content {
        padding-left: 244px;
        padding-right: 200px;
        .title{
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:600;
          color:rgba(51,51,51,1);
          background-color: #fff;
          border: 3px solid rgba(230, 230, 230, 1);
          border-bottom:none;
          padding:20px 20px 0px 20px;
        }
      }
      .right-bar {
        /*float: right;*/
        min-height: 660px;
        text-align: center;
        position: absolute;
        right: 0;
        top: 0;
        width: 184px;
        border: 3px solid rgba(230, 230, 230, 1);
        padding-bottom: 50px;
        background-color: #fff;
        .header {
          padding: 8px 0px;
          padding-left:20px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 36px;
          text-align: left;
          border-bottom: 1px solid rgba(230, 230, 230, 1);
        }
        .list {
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(230, 230, 230, 1);
          li {
            text-align: left;
            padding-left:20px;
            font-size: 12px;
            font-family: MicrosoftYaHeiLight;
            font-weight: 300;
            color: rgba(51, 51, 51, 1);
            line-height: 24px;
          }
        }
        .title {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 36px;
        }
        .flow-chart {
          padding-left: 14px;
          margin-top: 30px;
          .btn {
            width: 129px;
            padding: 10px 12px;
            border: 1px solid rgba(230, 230, 230, 1);
            border-radius: 4px;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 15px;
          }
          .img {
            margin-right: 23px;
          }
        }
      }
    }
  }
</style>
<style lang="less">
  .el-submenu.is-active .el-submenu__title {
    border-bottom: 1px solid rgba(230, 230, 230, 1);
  }
</style>
