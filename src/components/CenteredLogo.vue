<template>
    <FullscreenFrame>
        <img src="../assets/logo.svg" class="lax" :data-lax-scale="getScaleString()" :data-lax-opacity="getOpacityString()">
    </FullscreenFrame>
</template>

<script>
    import FullscreenFrame from "./FullscreenFrame";
    export default {
        name: "CenteredLogo",
        components: {FullscreenFrame},
        props: {
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
    img {
        width: 100%;
        max-width: 300px;
    }
</style>