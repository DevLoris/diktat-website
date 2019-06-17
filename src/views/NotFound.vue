<template>
    <div>
        <h1>{{$t('NotFound.title')}}</h1>
        <p>{{$t('NotFound.content')}}</p>
        <button @click="showModal = !showModal">Show Modal</button>
        <Modal :show="showModal">
            <h2>Modal test</h2>
            <p>Modal test for the 404 page.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores assumenda atque eaque, eveniet ex illum minima optio praesentium quam sapiente tenetur vitae. Culpa eaque in laboriosam minima qui, totam?</p>
        </Modal>
    </div>
</template>

<script>
    import Modal from "../components/Modal";
    export default {
        name: "NotFound",
        components: {Modal},
        data() {
            return {
                showModal: false
            }
        }
    }
</script>

<style scoped>

</style>