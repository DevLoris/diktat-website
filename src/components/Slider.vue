<template>
    <div id="slider" >
        <div class="slider-content" :style="{width: (slides.length * 100) + 'vw', transform: 'translateX(-' + selectedSlide * 100 + 'vw)'}">
            <SliderSlide v-for="(slide, key) in slides" :text="slide.text" :name="slide.name" :image="slide.image"  :index="key+1"></SliderSlide>
        </div>
        <div class="slider-bullet-list">
            <SliderBulletItem v-for="(slide, key) in slides" :selected="selectedSlide === key" :index="key+1" :key="key" @click.native="setSelected(key)"></SliderBulletItem>
        </div>
    </div>
</template>

<script>
    import SliderSlide from "./SliderSlide";
    import SliderBulletItem from "./SliderBulletItem";
    export default {
        name: "Slider",
        components: {SliderBulletItem, SliderSlide},
        props: ['slides'],
        mounted() {
            window.addEventListener("keydown", (e) =>  {
                //gauche
                if(e.which === 37)
                    this.setSelected(this.selectedSlide - 1);
                //droite
                if(e.which === 39)
                    this.setSelected(this.selectedSlide + 1);
            });

            window.addEventListener('touchstart', e => {
                const firstTouch = e.changedTouches[0];
                this.xDown = firstTouch.clientX;
            });

            window.addEventListener('touchend', e => {
                if (!this.xDown)
                    return;

                const xUp = e.changedTouches[0].clientX;
                const xDiff = this.xDown - xUp;
                const xDiffAbs = Math.abs(this.xDown - xUp);

                if (xDiffAbs < this.offset )
                    return;

                this.setSelected(this.selectedSlide + ( xDiff > 0) ? 1 : -1);
            });
        },
        data: function () {
            return {
                selectedSlide : 0,
                previousSlide : 0,
                offset : 100,
                xDown: 0
            }
        },
        methods: {
            setSelected(k) {
                const maxSlide = this.slides.length - 1;
                const minSlide = 0;

                if(k >= minSlide && k <= maxSlide) {
                    this.previousSlide = this.selectedSlide;
                    this.selectedSlide = k;
                }
            }
        }
    }
</script>

<style scoped>
    #slider {
        overflow: hidden;
        position: relative;
    }

    .slider-content {
        display: flex;
        transition: 1s;
    }

    .slider-bullet-list {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
    }
</style>