<template>
  <div class="app">
    <v-header></v-header>
    <div class="route-view">
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
  import header from '@/components/header'
  export default {
    name: 'App',
    provide() {
      return {}
    },
    data() {
      return {}
    },
    created() {

    },
    components:{
      "v-header":header
    },
    methods: {}
  }
</script>
<style lang="less">
  .base-content-border{
    min-height: 680px;
    padding: 20px;
    border: 3px solid rgba(230, 230, 230, 1);
    border-top: none;
    background-color: #fff;
  }
  .base-btn .el-button{
    padding:8px 10px;
    font-family: MicrosoftYaHei;
  }
  .base-btn .base-btn-active {
    outline: 0;
    color: #fff;
    background: rgba(71, 155, 36, 1);
    border: 1px solid rgba(71, 155, 36, 1);
  }
  .base-btn .el-button:focus, .base-btn .el-button:hover {
    border-color: rgba(71, 155, 36, 1);
    color: #fff;
    background: rgba(71, 155, 36, 1);
    font-family: MicrosoftYaHei;
  }
  .base-from-child .el-form-item__label {
    font-size: 12px;
    font-family: MicrosoftYaHeiLight;
    font-weight: 300;
    color: rgba(102, 102, 102, 1);
  }
  .base-from-child .el-select .el-input__inner:focus {
    border-color: rgba(230, 230, 230, 1);
  }
  .base-from-child .el-select .el-input__inner:hover {
    border-color: rgba(230, 230, 230, 1);
  }
  .base-from-child .el-input--prefix .el-input__inner{
    padding-left:30px;
    padding-right:30px;
  }
  .base-from-child .el-input__inner{
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 4px;
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    height: auto;
    line-height: normal;
    padding:8px 9px;
    /*height: 36px;*/
    /*line-height: 36px;*/
    /*-webkit-line-height: 36px;*/
  }
  .base-from-child .el-textarea__inner{
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 4px;
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    padding:5px 9px;
    color: rgba(51, 51, 51, 1);
  }
  .base-pagination .el-input__inner{
    border: 1px solid rgba(230, 230, 230, 1);
  }
  .base-pagination .el-range-editor.is-active, .base-pagination .el-range-editor.is-active:hover,
  .base-pagination .el-select .el-input.is-focus .el-input__inner {
    border-color:rgba(230, 230, 230, 1);
  }

  .base-pagination .el-pagination__sizes .el-input .el-input__inner:hover {
    border-color: rgba(230, 230, 230, 1);
  }
  .base-pagination .el-select .el-input__inner:focus{
    border-color: rgba(230, 230, 230, 1);
  }
  .base-pagination  .el-pagination .btn-next,  .base-pagination .el-pagination .btn-prev{
    border:1px solid rgba(230,230,230,1);
  }
  .base-pagination  .el-pagination .btn-next{
    padding-left:6px;
  }
  .base-pagination .el-pagination .btn-prev{
    padding-right:6px;
  }
  .base-pagination  .el-pagination button {
    color: rgba(102,102,102,0.6);
    min-width: 28.5px;
  }
  .base-pagination  .el-pagination button:hover {
    color: rgba(102,102,102,0.6);
  }
  .base-pagination .el-pagination button:focus {
    outline: 0;
  }
  .base-pagination  .el-pager li{
    border:1px solid rgba(230,230,230,1);
    padding:0px;
    min-width: 28.5px;
    margin-right:5px;
    color: rgba(102,102,102,0.6);
  }
  .base-pagination  .el-pager li:first-child{
    margin-left:5px;
  }
  .base-pagination  .el-pager li.active+li {
    border-left:1px solid rgba(230,230,230,1);
  }
  .base-pagination  .el-pager li.active{
    border:1px solid rgba(71,155,36,1);
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(71,155,36,1);
  }
  .base-tab-table-border {
    border-top: 1px solid rgba(230, 230, 230, 1);
    border-left: 1px solid rgba(230, 230, 230, 1);
    .head-tr {
      border-bottom: none;
      th {
        border-bottom: 1px solid rgba(230, 230, 230, 1);
        border-right: 1px solid rgba(230, 230, 230, 1);
        .th-cell {
          border-left: none;
        }
      }
    }
    .body-tr {
      border-bottom: none;
      td {
        border-bottom: 1px solid rgba(230, 230, 230, 1);
        border-right: 1px solid rgba(230, 230, 230, 1);
      }
    }
  }
  .base-border-top{
    border-top: 1px solid rgba(230, 230, 230, 1);
  }
  .base-border-bottom{
    border-bottom: 1px solid rgba(230, 230, 230, 1);
  }
  .base-border-none {
    border-left: none!important;
  }
  .base-tab-table {
    width: 100%;
    .base-border-th-left-dashed{
      th {
        .th-cell {
          border-left: 1px dashed rgba(204, 204, 204, 1);
        }
      }
    }
    .head-tr {
      background:rgba(250,250,250,1);
      th {
        padding: 12px 0px;
        .th-cell {
          text-align: center;
          padding: 0px 10px;
          font-size:14px;
          font-family:MicrosoftYaHei;
          font-weight:600;
          color:rgba(51,51,51,1);
        }
      }
    }
    .th-cell-left {
      td {
        .td-cell {
          text-align: left;
        }
      }
    }
    .th-cell-right {
      td {
        .td-cell {
          text-align: right;
        }
      }
    }
    .body-tr {
      /*border-bottom: 1px solid rgba(230, 230, 230, 1);*/
      td {
        padding:12px 0px;
        .td-cell {
          text-align: center;
          padding: 0px 10px;
          font-size:12px;
          .td-active{
            cursor: pointer;
            color: #479B24;;
          }
        }
      }
    }
    .td-cell-left {
      td {
        .td-cell {
          text-align: left;
        }
      }
    }
    .td-cell-right {
      td {
        .td-cell {
          text-align: right;
        }
      }
    }
    .body-tr:hover{
      background-color:#f5f7fa;
    }
  }
</style>
<style>
  .app {
    height: 100%;
    background-color: #f0f0f0;
  }
</style>
