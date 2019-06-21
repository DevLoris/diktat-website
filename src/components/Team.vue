<template>
    <div class="team-list">
        <div>
        <TeamMember v-for="member in members" :name="member.name" :bio="member.bio" :image="member.image" :role="member.role"></TeamMember>
        </div>
    </div>
</template>

<script>
    import TeamMember from "./TeamMember";
    export default {
        name: "Team",
        components: {TeamMember},
        props: ['members']
    }
</script>

<style lang="scss">
    .team-list {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        > div {
            display: flex;
            margin: auto;
            max-width: 900px;
        }
        .team-member {
            flex: 1;
            padding: 20px;
            img {
                max-width: 100%;
            }
            strong {
                opacity: 0.6;
            }
        }
    }
</style>