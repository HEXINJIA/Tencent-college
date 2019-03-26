<template>
  <div class="index" ref="index">
    <app-view :slideBar="slideBar"></app-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import view from  "@/components/view"
  import staff from '@/router/staff'
  export default {
    data() {
      return {
       slideBar:staff
      }
    },
    created(){
    },
    mounted() {
    },
    methods: {
    },
    components:{
      "app-view":view
    }
  }
</script>

<style scoped lang="less">
.index{
  padding-top:20px;
  padding-bottom:50px;
  background-color: #f0f0f0;
}
</style>
