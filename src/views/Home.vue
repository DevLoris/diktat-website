<template>
  <div class="home">
    <CenteredLogo :index="0"></CenteredLogo>
    <QuoteText :text="$t('definition.text')" :index="1.5" :source="$t('definition.source')"></QuoteText>
    <CenteredTranslateImage  :index="3"></CenteredTranslateImage>
    <CenteredText :text="$t('but.text')"  :index="4"></CenteredText>
    <CenteredText :text="$t('yousee.text')" :index="5"></CenteredText>
    <CenteredText :text="$t('look.text')" :index="6"></CenteredText>
    <CenteredPosterSimulation :image-path="require('../assets/images/maquillage-2.png')" :layers="[require('../assets/images/rouge_a_levres.png'),require('../assets/images/lapin.png'), require('../assets/images/femmesansrien.png'), require('../assets/images/effect_maquillage.png')]" :index="7"></CenteredPosterSimulation>
    <CenteredText :text="$t('rip.text')" :index="10"></CenteredText>
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
    CenteredPosterSimulation,
    CenteredTranslateImage, CenteredLogo, Logo, CenteredText, QuoteText, FullscreenFrame},
}
</script>

<style lang="scss">
  .home {
    height: 2500vh;
  }
</style>