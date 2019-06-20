<template>
    <div class="modal" v-if="show">
        <button class="modal-close" @click="close">X</button>
        <div>
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            show: false
        },
        methods: {
            close() {
                this.show = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        position: fixed;
        top: 25px;
        left: 25px;
        width: calc(100vw - 50px);
        height:  calc(100vh - 50px);
        z-index: 1000;
        background: white;
        color: #AC0E22;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            font-size: 18px;
        }
        > div {
            max-width: 800px;
        }
    }

    .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;

        background: none;
        border: none;
        width: 50px;
        height: 50px;
        color: #AC0E22;
        cursor: pointer;
        font-size: 2em;
        outline: none;
    }
</style>