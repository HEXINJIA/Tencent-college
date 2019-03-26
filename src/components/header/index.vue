<template>
  <div class="layout">
    <div class="content">
      <div class="top">
        <div class="top-child clearfix wrapper">
          <img src="../../assets/imges/txun@2x.png" alt="" class="img">
          <div class="right clearfix">
            <div  class="input-left">
              <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable>
              </el-input>
            </div>
            <div class="input-right">
              <el-button> 搜索课程</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="l-nav">
        <div class="nav-child clearfix wrapper">
          <ul class="list">
            <li>首页</li>
            <li>行家·轻咨询</li>
            <li>行家·轻咨询</li>
            <li>行家·轻咨询</li>
            <li>行家·轻咨询</li>
            <li>行家·轻咨询</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        input:""
      }
    },
    methods: {

    },
    components: {
    }
  }
</script>
<style>
  .input-left .el-input__inner{
    border:1px solid rgba(219,219,219,1);
    border-radius:4px;
    font-size:12px;
    font-family:MicrosoftYaHeiLight;
    font-weight:300;
    color:rgba(153,153,153,1);
  }
  .input-right .el-button{
    background:rgba(248,248,248,1);
    border:1px solid rgba(219,219,219,1);
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(15,111,176,1);
    border-radius:4px;
  }
  /*.wer{*/
    /*border:1px solid rgba(219,219,219,1);*/
    /*border-radius:4px;*/
  /*}*/
</style>
<style scoped lang="less">
  .layout{
    text-align: center;
    position: relative;
    z-index: 10;
    .content{
      width:100%;
      .top{
        background-color: #fff;
        height:84px;
        .top-child{
          /*width:1200px;*/
          display: inline-block;
          .right{
            margin-top:20px;
            float: right;
            .input-left{
              width:570px;
              display: inline-block;
              margin-right:10px;
              vertical-align: middle;
              /*float: left;*/
            }
            .input-right{
              /*margin-top:1px;*/
              display: inline-block;
              vertical-align: middle;
              /*float: left;*/
            }
          }
          .img{
            float: left;
            margin-top: 14px;
            width:225px;
            height:53px;
          }
        }

      }
      .l-nav{
        height:58px;
        background-color:rgba(247,247,247,1);
        box-shadow:0px 5px 8px 0px rgba(108,108,108,0.28);
        .nav-child{
          /*width:1200px;*/
          display: inline-block;

          .list{
            li{
              height:58px;
              line-height:58px;
              padding-left:10px;
              padding-right:10px;
              font-size:16px;
              font-family:MicrosoftYaHeiLight;
              font-weight:300;
              color:rgba(51,51,51,1);
              float: left;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

</style>
