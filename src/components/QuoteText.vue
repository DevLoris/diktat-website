<template>
    <FullscreenFrame>
        <blockquote :data-lax-rotate="getRotateString()" :data-lax-scale="getScaleString()" :data-lax-opacity="getOpacityString()" class="lax">
            <p>{{ text }}</p>
            <footer>— <cite>{{ source }}</cite></footer>
        </blockquote>
    </FullscreenFrame>
</template>

<script>
    import FullscreenFrame from "./FullscreenFrame";
    export default {
        name: "QuoteText",
        components: {FullscreenFrame},
        props: {
            text: '',
            source: '',
            index: null
        },
        mounted() {
        },
        methods: {
            getOpacityString() {
                return '(' +(this.index-0.2) + '*1vh) 0, (' +(this.index) + '*1vh) 1, (' +(this.index+1) + '*1vh) 1, (' +(this.index+1.2) + '*1vh) 0'
            },
            getScaleString() {
                return '(' +(this.index-0.2) + '*1vh) 10, (' +(this.index) + '*1vh) 1'
            },
            getRotateString() {
                return '(' +(this.index - 0.2) + '*1vh) 10, (' +(this.index) + '*1vh) 0'
            }
        }
    }
</script>

<style lang="scss" scoped>
    blockquote {
        max-width: 600px;
        padding: 0 10px;
        p {
            position: relative;

            &:before {
                content: '“';
                opacity: 0.6;
            }
            &:after {
                content: '”';
                transform: scale(4, 4);
                opacity: 0.6;
            }
        }
    }

    footer {
        font-size: 20px;
    }

    cite  {
        opacity: 0.6;
        font-weight: normal;
    }
</style>