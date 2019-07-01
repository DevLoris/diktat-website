<template>
  <div class="about">
    <Slider :slides="slides"></Slider>
    <Team :members="members"></Team>
  </div>
</template>

<script>
  import Slider from "../components/Slider";
  import Team from "../components/Team";
  export default {
    name: 'about',
    components: {Team, Slider},
    mounted() {
    },
    data: function () {
      return {
        members: [
          {
            name: "Hugo Duval",
            bio:  this.$t('team.hugo.bio'),
            role: this.$t('team.hugo.role'),
            image: require('../assets/images/team/hugo.jpg')
          },
          {
            name: "Loris Pinna",
            bio:  this.$t('team.loris.bio'),
            role: this.$t('team.loris.role'),
            image: require('../assets/images/team/loris.jpg')
          },
          {
            name: "Nitya Tchangodei",
            bio:  this.$t('team.nitya.bio'),
            role: this.$t('team.nitya.role'),
            image: require('../assets/images/team/nitya.jpg')
          }
        ],
        slides: [
          {
            name:  this.$t("slide.1.name"),
            text: this.$t('slide.1.text'),
            image: require('../assets/images/background/museum.png')
          },
          {
            name:  this.$t("slide.2.name"),
            text: this.$t('slide.2.text'),
            image: require('../assets/images/background/appstore.png')
          },
          {
            name:  this.$t("slide.3.name"),
            text: this.$t('slide.3.text'),
            image: require('../assets/images/background/exposition.png')
          },
          {
            name:  this.$t("slide.4.name"),
            text: this.$t('slide.4.text'),
            image: require('../assets/images/background/ar-use.png')
          },
          {
            name:  this.$t("slide.5.name"),
            text: this.$t('slide.5.text'),
            image: require('../assets/images/background/collection.png')
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .about {
    color: white;
    position: relative;
    overflow: hidden;
  }
</style>