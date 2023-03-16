<template>
    <div class="container">
        <div id="map-content"></div>
    </div>
</template>

<script setup lang="ts">
import "@amap/amap-jsapi-types";
// 加载地图文件
declare let AMap: any;
onMounted(() => {
  let map = new AMap.Map('map-content',{
    zoom: 10,
    center: [116.397428, 39.90923]
  });
  let marker = new AMap.Marker({
    title: '公司',
    position: [116.39, 39.9], // 位置
    icon: '//vdata.amap.com/icons/b18/1/2.png'
  })
  map.add(marker)
})
</script>

<style scoped lang="scss">
.container{
  #map-content {
    width: 500px;
    height: 300px;
  }
}
</style>