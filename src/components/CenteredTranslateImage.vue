<template>
    <FullscreenFrame>
        <img src="../assets/images/maquillage-2.png" class="lax" :data-lax-translate-y="getTranslateString()">
    </FullscreenFrame>
</template>

<script>
    import FullscreenFrame from "./FullscreenFrame";
    export default {
        name: "CenteredTranslateImage",
        components: {FullscreenFrame},
        props: {
            index: null,
        },
        methods: {
            getTranslateString() {
                return '(' +(this.index-0.2) + '*1vh) vh, (' +(this.index+0.3) + '*1vh) 0, (' +(this.index+0.7) + '*1vh) 0, (' +(this.index+1.2) + '*1vh) -vh';
            },
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