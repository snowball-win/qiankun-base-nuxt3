<template>
    <div class="container">
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">snow</div>
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 7</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div>
                <div class="swiper-slide">Slide 10</div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

onMounted(() => {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 5, // 轮播区域展示的数量
        spaceBetween: 30,
        mousewheel: true,
        keyboard: true,
        loop: true, // 循环播放
        speed: 2500,
        autoplay: { // 自动播放
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // }
    });
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
    .swiper {
        width: 500px;
        height: 100px;
        border: 2px solid #ff0000;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        background: #ccc;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-button-prev{
        background: #eee;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .swiper-button-next{
        background: #eee;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    // 去掉左右箭头默认样式
    .swiper-button-prev:after{
        display: none;
    }
    .swiper-button-next:after{
        display: none;
    }
    // 定义新的样式
    .swiper-button-prev{
        width: 35px;
        height: 35px;
        background: url('~/assets/imgs/nginx.jpg') no-repeat;
        bottom: 15px;
    }
    .swiper-button-next{
        width: 35px;
        height: 35px;
        background:url('~/assets/imgs/nginx.jpg') no-repeat;
        bottom: 15px;
    }
}
</style>