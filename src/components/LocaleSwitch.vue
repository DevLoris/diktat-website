<template>
    <div class="locale-switch">
        <button @click="toggleExpanded">{{$i18n.locale.toUpperCase()}}</button>
        <ul v-if="expanded">
            <li v-for="locale of locales" :data-locale="locale" @click="changeLocale"> {{locale.toUpperCase()}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'locale-switch',
        data() {
            return {
                locales: [],
                expanded: false,
            }
        },
        methods: {
            changeLocale(e) {
                const locale      = e.target.dataset.locale;
                this.$i18n.locale = locale;
                this.expanded     = false;
                localStorage.setItem('diktat-locale', locale);
            },
            toggleExpanded() {
                this.expanded = !this.expanded;
            }
        },
        mounted() {
            this.locales = this.$i18n.availableLocales;
        }
    }
</script>

<style scoped>
    .locale-switch {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
    }

    li {
        cursor: pointer;
        vertical-align: middle;
        line-height: 30px;
    }

    button, li {
        width: 50px;
        height: 30px;
        font-size: 0.8em;
        color: #333;
    }
</style>