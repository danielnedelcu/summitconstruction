<template>
  <div class="reveal-box enter animate">
    <section class="section__hero reveal-box__inner">
      <div :style="{backgroundImage: `url(${ data.image.filename })`}" class="section__hero-image reveal-box__image">
        <div class="background-darker" />
        <div class="section__hero-content d-flex align-items-center">
          <b-container>
            <b-row>
              <div class="va width-50 p-l-r-15-m">
                <div class="h1-main" v-html="richtext" />
                <p class="">
                  {{ data.subtitle }}
                </p>
              </div>
            </b-row>
          </b-container>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  },

  data () {
    return {
    }
  },

  computed: {
    richtext () {
      return this.$storyapi.richTextResolver.render(this.data.title)
    }
  },

  created () {
    // eslint-disable-next-line no-console
    console.dir(this.$storyapi.richTextResolver.render(this.data.title))
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';
  $easeInOutQuart: cubic-bezier(0.76, 0, 0.24, 1);
  $easeOutQuad: cubic-bezier(0.5, 1, 0.89, 1);

  .reveal-box {
    position: relative;
    height: 550px;
    max-height: 550px;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    margin-bottom: 90px;

    @include breakpoint(lg){ 
      height: 850px;
      max-height: 850px;
      margin-bottom: 120px;
    }
  }

  .reveal-box__inner{
    width: 100%;
    height: 100%;
    overflow: hidden;

    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #c1b294;
    }
  }

  .reveal-box__image{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .enter{
    .reveal-box__inner{
      animation: 0.9s $easeInOutQuart 0s both paused slide-in-right;

      &::after{
        animation: 0.9s $easeInOutQuart 0.6s both paused slide-out-right;
      }
    }

    .reveal-box__image{
      animation: 1.5s $easeInOutQuart 0.3s both paused scale-in-down;
    }
  }

  .animate{
    .reveal-box__inner{
      animation-play-state: running;

      &::after{
        animation-play-state: running;
      }
    }

    .reveal-box__image{
      animation-play-state: running;
    }
  }

  @keyframes slide-in-right {
    0% {
      transform: translate3D(-100%, 0, 0);
    }
    100% {
      transform: translate3D(0, 0, 0);
    }
  }

  @keyframes slide-out-right {
    0% {
      transform: translate3D(0, 0, 0);
    }
    100% {
      transform: translate3D(100%, 0, 0);
    }
  }

  @keyframes slide-in-left {
    0% {
      transform: translate3D(100%, 0, 0);
    }
    100% {
      transform: translate3D(0, 0, 0);
    }
  }

  @keyframes slide-out-left {
    0% {
      transform: translate3D(0, 0, 0);
    }
    100% {
      transform: translate3D(-100%, 0, 0);
    }
  }

  @keyframes scale-in-down {
    0% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  .section__hero {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    color: $white;
    max-height: 550px;
    margin-top: 70px;
    margin-bottom: 80px;

    &-image {
      background-repeat: no-repeat;
      background-position: center center;
      -ms-background-size: inherit;
      background-size: cover;
      height: 550px;
      width: 100%;
    }

    @include breakpoint(lg){ 
      max-height: 850px;
      margin-top: 90px;

      &-image {
        height: 800px;
        margin-bottom: 120px;
      }
    }

    &-content {
      height: 100%;
    }

   
    h1 {
      font-size: 74px !important;
    }


    .background-darker {
      background-color: $black;
      opacity: 0.4;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .va {
      display: block;
      height: 100%;
      width: 100%;
      margin: 0;
      border: none;
      border-spacing: 0;
      border-collapse: collapse;
      box-sizing: border-box;
      z-index: 10;

      @include breakpoint(lg){ 
        display: table;
        table-layout: fixed;
      }
    }
  }
</style>
