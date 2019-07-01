<template>
  <div class="home">
    <CenteredLogo :index="0"></CenteredLogo>
    <QuoteText :text="$t('definition.text')" :index="1.5" :source="$t('definition.source')"></QuoteText>
    <CenteredText :text="$t('lookthisposter.text')"  :index="3"></CenteredText>
    <CenteredTranslateImage  :index="4"></CenteredTranslateImage>
    <CenteredText :text="$t('yousee.text')" :index="5"></CenteredText>
    <CenteredText :text="$t('look.text')" :index="6"></CenteredText>
    <CenteredPosterSimulation :image-path="require('../assets/images/maquillage-2.png')" :layers="[require('../assets/images/rouge_a_levres.png'),require('../assets/images/lapin.png'), require('../assets/images/femmesansrien.png'), require('../assets/images/effect_maquillage.png')]" :index="7"></CenteredPosterSimulation>
    <CenteredText :text="$t('rip.text')" :index="10"></CenteredText>
    <CenteredButton :url="'/about'" :text="$t('discover.text')" :index="11"></CenteredButton>
    <img src="../assets/d_diktat.svg" class="d_diktat">
  </div>
</template>

<script>
import FullscreenFrame from "../components/FullscreenFrame";
import QuoteText from "../components/QuoteText";
import CenteredText from "../components/CenteredText";
import Logo from "../components/Logo";
import CenteredLogo from "../components/CenteredLogo";
import CenteredTranslateImage from "../components/CenteredTranslateImage";
import CenteredPosterSimulation from "../components/CenteredPosterSimulation";
import CenteredButton from "../components/CenteredButton";
export default {
  name: 'home',
  mounted() {
    this.$lax.setup()
    const updateLax = () => {
      this.$lax.update(window.scrollY);
      window.requestAnimationFrame(updateLax)
    };

    window.requestAnimationFrame(updateLax)
  },
  components: {
    CenteredButton,
    CenteredPosterSimulation,
    CenteredTranslateImage, CenteredLogo, Logo, CenteredText, QuoteText, FullscreenFrame},
}
</script>

<style lang="scss">
  .home {
    height: 2500vh;
  }
  img.d_diktat {
    opacity: 0.2;
    position: fixed;
    width: 30vmax;
    height: 30vmax;
    bottom: -5vmax;
    left: -5vmax;

  }
</style>