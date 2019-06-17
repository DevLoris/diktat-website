<template>
    <FullscreenFrame>
        <p>{{ text }}</p>
    </FullscreenFrame>
</template>

<script>
    import FullscreenFrame from "./FullscreenFrame";
    export default {
        name: "CenteredText",
        components: {FullscreenFrame},
        props: {
            text: ''
        },
        mounted() {
        }
    }
</script>

<style scoped>
    p {

    }
</style>