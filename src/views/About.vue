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
            bio:  ('team.hugo.bio'),
            role: ('team.hugo.role'),
            image: require('../assets/images/team/hugo.jpg')
          },
          {
            name: "Loris Pinna",
            bio:  ('team.loris.bio'),
            role: ('team.loris.role'),
            image: require('../assets/images/team/loris.jpg')
          },
          {
            name: "Nitya Tchangodei",
            bio:  ('team.nitya.bio'),
            role: ('team.nitya.role'),
            image: require('../assets/images/team/nitya.jpg')
          }
        ],
        slides: [
          {
            name:  ("slide.1.name"),
            text: ('slide.1.text'),
            image: require('../assets/images/background/museum.png')
          },
          {
            name:  ("slide.2.name"),
            text: ('slide.2.text'),
            image: require('../assets/images/background/appstore.png')
          },
          {
            name:  ("slide.3.name"),
            text: ('slide.3.text'),
            image: require('../assets/images/background/exposition.png')
          },
          {
            name:  ("slide.4.name"),
            text: ('slide.4.text'),
            image: require('../assets/images/background/ar-use.png')
          },
          {
            name:  ("slide.5.name"),
            text: ('slide.5.text'),
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