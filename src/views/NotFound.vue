<template>
    <div id="error404">
        <div>
            <h1>{{$t('NotFound.title')}}</h1>
            <p>{{$t('NotFound.content')}}</p>
            <router-link to="/" class="btn">{{ $t('nav.back-to-home') }}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        components: {}
    }
</script>

<style lang="scss" scoped>
    #error404 {
        color: white;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        h1 {
            padding: 0;
            margin: 0;
            font-size: 35px;
        }
        p {
            opacity: 0.7;
        }
    }
</style>

