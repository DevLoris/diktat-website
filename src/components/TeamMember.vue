<template>
    <div class="team-member">
        <img :src="image">
        <h2>{{name}}</h2>
        <strong>{{$t(role)}}</strong>
        <p>{{$t(bio)}}</p>
    </div>
</template>

<script>
    export default {
        name: "TeamMember",
        props: ['image', 'bio', 'name', 'role']
    }
</script>

<style scoped>

</style>