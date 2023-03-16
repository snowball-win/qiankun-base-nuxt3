<template>
    <div class="container">
        <h1 @click="getVideo">snow</h1>
        <div>{{ data }}</div>
    </div>
</template>

<script setup lang="ts">
// import { config1, getVideoList } from "../utils/api" // import 引入只能在最上边一行
import { config1, getVideoList } from "~/apis/m-staff-center" // import 引入只能在最上边一行
// const token = useCookie("token");
// const { data } = await useFetch('https://md.heng-tai.com.cn/m-staff-center/api/v1/role/pageList',{
//   method: "get",
//       headers: {
//         'Authorization' : `Bearer ${token.value}`
//     }
// })
// const data = await useFetch('/m-staff-center/api/v1/role/pageList',{
//   method: "get",
//       headers: {
//         'Authorization' : `Bearer ${token.value}`
//     }
// })
// console.log('26', data)

// const res = $fetch('/m-staff-center/api/v1/role/pageList')
// console.log('32fetch', res)

// const token = useCookie("token");
// console.log('36token', token.value);
// const res = $fetch('/m-staff-center/api/v1/role/pageList',{
//     headers: {
//         'Authorization' : `Bearer ${token.value}`
//     }
// })
// console.log('36$fetch', res)

// const data = await useAsyncData('count222', () => $fetch('/m-staff-center/api/v1/role/pageList',{
//     headers: {
//         'Authorization' : `Bearer ${token.value}`
//     }
// }))
// console.log('29data', data)

// 基于这个可以做一个封装
// config1('').then((res: any) => {
//   console.log('27', res)
// }).catch((err: any)=>{
//   console.log('29', err)
// })
// 获取视频列表

let data = ref('')
// getVideoList('').then((res: any) => {
//   console.log('51', res)
//   data.value = res
// }).catch((err: any)=>{
//   console.log('54', err)
// })



const getVideo = function () {
    console.log('64ddd')
    getVideoList('').then((res: any) => {
        // console.log('51', res)
        data.value = res
    }).catch((err: any)=>{
        console.log('54', err)
    })
}

getVideo()

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