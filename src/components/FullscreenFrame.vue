<template>
    <div class="frame">
            <slot/>
    </div>
</template>

<script>
    export default {
        name: "FullscreenFrame"
    }
</script>

<style lang="scss" scoped>
    .frame {
        position: fixed;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        color: white;
        font-size: 35px;
        font-weight: bold;
    }
</style>