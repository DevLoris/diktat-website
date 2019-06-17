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

<style scoped>
    .frame {
        background: #AC0E22;
        width: 100vw;
        height: 100vh;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 35px;
        font-weight: bold;
    }
</style>