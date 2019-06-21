<template>
    <div class="slider-bullet-item" :class="selected ? 'slider-bullet-item-full' : ''">{{ index }}</div>
</template>

<script>
    export default {
        name: "SliderBulletItem",
        props: ['index', 'selected']
    }
</script>

<style lang="scss" scoped>
    .slider-bullet-item {
        margin: 0 20px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        font-size: 22px;
        cursor: pointer;
        transition: 0.5s;
        border: 2px solid white;
        &:hover, &-full {
            background: white;
            color: #AC0E22;
        }
    }
</style>