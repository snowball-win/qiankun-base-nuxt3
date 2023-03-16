<template>
    <div class="container">
        <h1>snow</h1>
        <el-date-picker
          v-model="value1"
          type="date"
          :disabled-date="disabledDate"
          placeholder="Pick a day"
          :size="size"
        />
    </div>
</template>

<script setup lang="ts">
import { config1, getVideoList } from "../utils/api" // import 引入只能在最上边一行
import { ref } from 'vue'

const size = ref<'default' | 'large' | 'small'>('default')
const value1 = ref('')
const disabledDate = (time: any) => {
  return time.getTime() > Date.now(); //禁止选择今天以后的时间
}

// 基于这个可以做一个封装
config1('').then((res: any) => {
  console.log('27', res)
}).catch((err: any)=>{
  console.log('29', err)
})
// 获取视频列表
getVideoList('').then((res: any) => {
  // console.log('51', res)
}).catch((err: any)=>{
  console.log('54', err)
})

</script>

<style scoped lang="scss">

.container{
    h1{
        color: red;
    }
    .test1{
        color: red;
    }
}
</style>