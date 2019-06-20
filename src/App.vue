<template>
  <div id="app">
    <div id="nav">
      <button @click="showModal = true">Show Modal</button>
      <router-link to="/">{{ $t('nav.home') }}</router-link>
      <router-link to="/about">{{ $t('nav.about') }}</router-link>
    </div>


    <Modal :show="showModal">
      <h1>L'équipe</h1>
      <p>trop une bonne équipe les frr</p>
      <div class="columns">
        <div class="column">
          <img src="./assets/images/team/hugo.jpg">
          <h2>Hugo Duval</h2>
          <strong>Développeur chauve</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus dignissimos dolorem, esse excepturi fugiat harum ipsa magnam minus molestias numquam quo soluta ullam? Dolore eligendi error molestias nesciunt tenetur?</p>
        </div>
        <div class="column">
          <img src="./assets/images/team/hugo.jpg">
          <h2>Hugo Duval</h2>
          <strong>Développeur chauve</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus dignissimos dolorem, esse excepturi fugiat harum ipsa magnam minus molestias numquam quo soluta ullam? Dolore eligendi error molestias nesciunt tenetur?</p>
        </div>
        <div class="column">
          <img src="./assets/images/team/hugo.jpg">
          <h2>Hugo Duval</h2>
          <strong>Développeur chauve</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus dignissimos dolorem, esse excepturi fugiat harum ipsa magnam minus molestias numquam quo soluta ullam? Dolore eligendi error molestias nesciunt tenetur?</p>
        </div>
      </div>
    </Modal>

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
        showModal: false
      }
    },
    beforeCreate() {
      let locale = localStorage.getItem('diktat-locale');
      if (!locale) locale = locales.DEFAULT_LOCALE;

      this.$i18n.locale = locale;
    },
    mounted() {
      this.$lax.setup() // init

      const updateLax = () => {
        this.$lax.update(window.scrollY);
        window.requestAnimationFrame(updateLax)
      };

      window.requestAnimationFrame(updateLax)
    }
  }
</script>

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 2500vh;
    background: #AC0E22;
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
  .columns {
    display: flex;
    .column {
      img {
        width: 100%;
      }
    }
  }
</style>