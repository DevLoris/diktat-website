<template>
    <FullscreenFrame>
        <p class="lax" :data-lax-scale="getScaleString()" :data-lax-opacity="getOpacityString()">{{ text }}</p>
    </FullscreenFrame>
</template>

<script>
    import FullscreenFrame from "./FullscreenFrame";
    export default {
        name: "CenteredText",
        components: {FullscreenFrame},
        props: {
            text: '',
            index: null
        },
        methods: {
            getOpacityString() {
                return '(' +(this.index-0.2) + '*1vh) 0, (' +(this.index) + '*1vh) 1, (' +(this.index+1) + '*1vh) 1, (' +(this.index+1.2) + '*1vh) 0'
            },
            getScaleString() {
                return '(' +this.index + '*1vh) 2, (' +(this.index+1) + '*1vh) 1'
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    p {
        color: white;
        font-size: 35px;
        font-weight: bold;
    }
</style>