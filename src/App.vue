<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{ $t('nav.home') }}</router-link>
      <router-link to="/about">{{ $t('nav.about') }}</router-link>
    </div>
    <LocaleSwitch/>
    <router-view/>
  </div>
</template>

<script>
  import LocaleSwitch from "./components/LocaleSwitch";
  import * as locales from "./constants/locales";
  import CenteredText from "./components/CenteredText";
  import QuoteText from "./components/QuoteText";
  import Logo from "./components/Logo";
  import FullscreenFrame from "./components/FullscreenFrame";

  export default {
    components: {FullscreenFrame, Logo, QuoteText, CenteredText, LocaleSwitch},
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
  body {
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    position: fixed;
    right: 20px;
    top: 20px;
    a {
      font-weight: bold;
      color: #ffffff;
      &.router-link-exact-active {
        color: #ffffff;
        display: none;
      }
    }
  }
</style>