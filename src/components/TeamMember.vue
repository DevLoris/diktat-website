<template>
    <div class="team-member">
        <img :src="image">
        <h2>{{name}}</h2>
        <strong>{{role}}</strong>
        <p>{{bio}}</p>
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