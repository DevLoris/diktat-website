<template>
    <div class="locale-switch" :class="expanded ? 'expanded' : ''">
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

<style lang="scss" scoped>
    .locale-switch {
        position: fixed;
        top: 20px;
        left: 20px;
        &.expanded {
            background: rgba(0, 0, 0, 0.51);
        }
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
        opacity: 0.7;
        transition: 0.3s;
        &:hover {
            opacity: 0.9;
        }
    }

    button, li {
        width: 50px;
        height: 30px;
        color: #fff;
    }


    button {
        transition: 0.3s;
        border: none;
        outline: none;
        cursor: pointer;
        -webkit-appearance: none;
        background: transparent;
        font: inherit;
        font-weight: bold;
        color: white;
        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }
    }

</style>