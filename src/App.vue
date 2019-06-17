<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{ $t('nav.home') }}</router-link> |
      <router-link to="/about">{{ $t('nav.about') }}</router-link>
    </div>
    <LocaleSwitch/>
    <CenteredText :text="$t('layer.catch')"></CenteredText>
    <router-view/>
  </div>
</template>

<script>
  import LocaleSwitch from "./components/LocaleSwitch";
  import * as locales from "./constants/locales";
  import CenteredText from "./components/CenteredText";

  export default {
    components: {CenteredText, LocaleSwitch},
    /**
     *
     */
    beforeCreate() {
      let locale = localStorage.getItem('diktat-locale');
      if (!locale) locale = locales.DEFAULT_LOCALE;

      this.$i18n.locale = locale;
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>