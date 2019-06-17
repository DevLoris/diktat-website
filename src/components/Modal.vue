<template>
    <div class="modal" v-if="show">
        <button class="modal-close" @click="close">X</button>
        <slot/>
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
                this.show = !this.show;
            }
        }
    }
</script>

<style scoped>
    .modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
    }

    .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;

        background: none;
        border: none;
        width: 50px;
        height: 50px;
        color: #fff;
        cursor: pointer;
        font-size: 2em;
        outline: none;
    }
</style>