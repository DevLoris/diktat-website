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
            bio: "Hugo vit désormais en Suède, avec sa belle blonde.",
            role: "Beau Développeur",
            image: require('../assets/images/team/hugo.jpg')
          },
          {
            name: "Loris Pinna",
            bio: "Loris est normalement un développeur, mais il est désormais malade.",
            role: "Magnifique couteau suisse",
            image: require('../assets/images/team/loris.jpg')
          },
          {
            name: "Nitya Tchangodei",
            bio: "Nitya est partie car le graphisme ne lui convenait pas.",
            role: "Splendide graphiste",
            image: require('../assets/images/team/nitya.jpg')
          }
        ],
        slides: [
          {
            name: "Direction le musée",
            text: "Pour commencer, tu te rends au musée et tu entres dans notre exposition.",
            image: require('../assets/images/background/museum.png')
          },
          {
            name: "Application diktat",
            text: "Tu as 2 choix : tu peux télécharger l'application diktat. sur ton téléphone, ou bien nous te prêtons une tablette.",
            image: require('../assets/images/background/appstore.png')
          },
          {
            name: "Début de l'exposition",
            text: "Tu te balades dans l'exposition, et tu t’approches d’une affiche.",
            image: require('../assets/images/background/exposition.png')
          },
          {
            name: "Scanner une affiche",
            text: "Tu scannes l’affiche avec l’application pour découvrir ses secrets. Tu peux te balader autour pour chercher des éléments cachés.",
            image: require('../assets/images/background/ar-use.png')
          },
          {
            name: "Découverte et intéraction",
            text: "Certaines affiches sont interactives. Différentes actions permettent de révéler d’autres éléments. Tu peux aussi en apprendre plus sur les diktats.",
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