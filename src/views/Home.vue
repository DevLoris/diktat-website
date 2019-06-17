<template>
  <div class="home">
    <FullscreenFrame>
      <Logo></Logo>
    </FullscreenFrame>
    <QuoteText :text="$t('definition.text')" :source="$t('definition.source')"></QuoteText>
    <CenteredText :text="$t('but.text')"></CenteredText>
    <CenteredText :text="$t('yousee.text')"></CenteredText>
    <CenteredText :text="$t('look.text')"></CenteredText>
  </div>
</template>

<script>
import FullscreenFrame from "../components/FullscreenFrame";
import QuoteText from "../components/QuoteText";
import CenteredText from "../components/CenteredText";
import Logo from "../components/Logo";
export default {
  name: 'home',
  components: {Logo, CenteredText, QuoteText, FullscreenFrame},
}
</script>
