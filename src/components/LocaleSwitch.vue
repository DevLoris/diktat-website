<template>
    <div class="locale-switch">
        <select v-model="$i18n.locale" @change="changedLang">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'locale-switch',
        data () {
            return { langs: ['fr', 'en'] }
        },
        methods: {
            changedLang(e) {
                localStorage.setItem('diktat-locale', e.target.value);
            }
        }
    }
</script>