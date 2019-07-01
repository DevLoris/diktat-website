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
  import Modal from "./components/Modal";

  export default {
    components: {Modal, FullscreenFrame, Logo, QuoteText, CenteredText, LocaleSwitch},
    /**
     *
     */
    data() {
      return {
      }
    },
    beforeCreate() {
      let locale = localStorage.getItem('diktat-locale');
      if (!locale) locale = locales.DEFAULT_LOCALE;

      this.$i18n.locale = locale;
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: 'bluu';
    src: url('./assets/webfonts/bluunext-bold-webfont.woff2') format('woff2'),
    url('./assets/webfonts/bluunext-bold-webfont.woff') format('woff'),
    url('./assets/webfonts/bluunext-bold.ttf') format('truetype'),
    url('./assets/webfonts/bluunext-bold-webfont.svg#bluu_nextbold') format('svg');
    font-weight: normal;
    font-style: normal;

  }

  @font-face {
    font-family: 'bluu';
    src: url('./assets/webfonts/bluunext-bolditalic-webfont.woff2') format('woff2'),
    url('./assets/webfonts/bluunext-bolditalic-webfont.woff') format('woff'),
    url('./assets/webfonts/bluunext-bolditalic.ttf') format('truetype'),
    url('./assets/webfonts/bluunext-bolditalic-webfont.svg#bluu_nextbold_italic') format('svg');
    font-weight: normal;
    font-style: italic;

  }


  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    background: #AC0E22;
  }
  #app {
    font-family: 'bluu', Helvetica, Arial, sans-serif;
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
    z-index: 10000;
    a {
      font-weight: bold;
      color: #ffffff;
      &.router-link-exact-active {
        color: #ffffff;
        display: none;
      }
    }
  }
  .columns {
    display: flex;
    .column {
      img {
        width: 100%;
      }
    }
  }

  .btn {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border: 2px solid white;
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px 8px;
    cursor: pointer;
    &:hover {
      background: white;
      color: #AC0E22;
    }
  }
</style>