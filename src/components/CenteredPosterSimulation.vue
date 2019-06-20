<template>
    <FullscreenFrame>
        <div :data-lax-opacity="getOpacityString()" class="lax">
            <img :src="imagePath" class="lax" :data-lax-translate-y="getTranslateString()" :data-lax-scale="getScaleString()">
            <div class="layers" v-for="(layer, key) in layers">
                <img :style="'z-index:' + key" :src="layer" :data-lax-scale="getScaleString()" :data-lax-opacity="getLayersOpacityString(key)" :data-lax-translate="getLayersTranslateString(key)" class="lax">
            </div>
        </div>
    </FullscreenFrame>
</template>

<script>
    import FullscreenFrame from "./FullscreenFrame";
    export default {
        name: "CenteredPosterSimulation",
        components: {FullscreenFrame},
        props: {
            index: null,
            imagePath: null,
            layers: null
        },
        methods: {
            getTranslateString() {
                return '(' +(this.index-0.2) + '*1vh) vh, (' +(this.index+0.3) + '*1vh) 0';
            },
            getScaleString() {
                return '(' +(this.index + 0.3) + '*1vh) 1, (' +(this.index+0.7) + '*1vh) 1.25'
            },
            getLayersTranslateString(key) {
                return '(' +(this.index+0.9+(1 + key)/10) + '*1vh) 0 0, ' +
                    '(' +(this.index+1.2+(1 + key)/10) + '*1vh) ' + (6  + 6*key) + ' px ' + (3  + 3*key) + 'px';
            },
            getLayersOpacityString(key) {
                return '(' +(this.index+0.7) + '*1vh) 0, (' +(this.index+1.1) + '*1vh) 1'
            },
            getOpacityString() {
                return '(' +(this.index+2.7) + '*1vh) 1, (' +(this.index+3.2) + '*1vh) 0'
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    img {
        max-width: 100%;
        width: 300px;
    }
    .layers {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>