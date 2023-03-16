<template>
    <div class="container">
        <div>单行省略号</div>
        <div class="singleLineEllipsis">
            一点资讯是北京一点网聚科技有限公司推出的一款为兴趣而生、有机融合搜索和个性化推荐技术的兴趣引擎，团队致力于基于兴趣为用户提供私人定制的精准资讯，并成长为移动互联网时期一代内容分发平台。
主要有时政新闻、财经资讯、社会热点、军事报道、家装设计、育儿常识、星座命理、出游旅行、野史探秘、太空探索、未解之谜、前沿科技资讯，探索未知新世界。
        </div>
        <div>多行省略号</div>
        <div class="multilineEllipsis">
            一点资讯是北京一点网聚科技有限公司推出的一款为兴趣而生、有机融合搜索和个性化推荐技术的兴趣引擎，团队致力于基于兴趣为用户提供私人定制的精准资讯，并成长为移动互联网时期一代内容分发平台。
主要有时政新闻、财经资讯、社会热点、军事报道、家装设计、育儿常识、星座命理、出游旅行、野史探秘、太空探索、未解之谜、前沿科技资讯，探索未知新世界。
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">

.container{
    .singleLineEllipsis{
        width: 500px;
        overflow: hidden; // 超出部分隐藏
        text-overflow:ellipsis; // 省略号 
        white-space: nowrap; // 禁止换行
    }
    .multilineEllipsis{
        width: 500px;
        display: -webkit-box; // 将对象作为弹性伸缩盒子模型显示
        -webkit-box-orient: vertical; // 设置或检索伸缩盒对象的子元素的排列方式
        -webkit-line-clamp: 3; // 用来限制在一个块元素显示的文本的行数。
        overflow: hidden;
    }
}
</style>