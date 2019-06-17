<template>
    <FullscreenFrame>
        <blockquote>
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
        },
        mounted() {
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