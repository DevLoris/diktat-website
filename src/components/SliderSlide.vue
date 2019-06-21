<template>
    <div class="slider-slide">
        <div class="slider-slide-background" :style="'background-image: url(' +  image +')'"></div>
        <div class="slider-slide-index">{{ index }}</div>
        <div class="slider-slide-content">
            <div class="slider-slide-content-name">{{ name }}</div>
            <p class="slider-slide-content-text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SliderSlide",
        props: {
            name: null,
            text: null,
            index: null,
            image: null
        }
    }
</script>

<style lang="scss" scoped>
    .slider-slide {
        height: 100vh;
        position: relative;
        width: 100vw;
        overflow: hidden;
        &-background {
            position: absolute;
            top: 0;
            right: 0;
            width: 80%;
            height: 80%;
            background: no-repeat top right / contain;
        }
        &-index {
            font-size: 300px;
            font-weight: bold;
            position: absolute;
            opacity: 0.2;
            bottom: -50px;
            left: 20px;
        }
        &-content {
            position: absolute;
            left: 120px;
            text-align: left;
            bottom: 70px;
            max-width: 500px;
            &-text {
                font-size: 30px;
                line-height: 1.3em;
                padding-top: 0;
                margin-top: 15px;
            }
            &-name {
                font-size: 20px;
                opacity: 0.5;
            }
        }
    }
</style>