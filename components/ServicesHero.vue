<template>
  <div class="reveal-box enter animate">
    <section class="section__hero reveal-box__inner">
      <div :style="{backgroundImage: `url(${ data.image.filename })`}" class="section__hero-image reveal-box__image">
        <div class="pattern-overlay" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBmaWxsPSJyZ2JhKDM4LDM4LDM4LDAuMjkpIgoJIHdpZHRoPSI4cHgiIGhlaWdodD0iOHB4IiB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBkPSJNMSwwSDB2MUMwLjU1MywxLDEsMC41NTIsMSwweiIvPgo8cGF0aCBkPSJNOCwxVjBIN0M3LDAuNTUyLDcuNDQ3LDEsOCwxeiIvPgo8cGF0aCBkPSJNNyw0YzAsMC41NTIsMC40NDcsMSwxLDFWM0M3LjQ0NywzLDcsMy40NDgsNyw0eiIvPgo8cGF0aCBkPSJNMCw3djFoMUMxLDcuNDQ4LDAuNTUzLDcsMCw3eiIvPgo8cGF0aCBkPSJNNyw4aDFWN0M3LjQ0Nyw3LDcsNy40NDgsNyw4eiIvPgo8Y2lyY2xlIGN4PSI0IiBjeT0iMiIgcj0iMSIvPgo8Y2lyY2xlIGN4PSI0IiBjeT0iNiIgcj0iMSIvPgo8cGF0aCBkPSJNMSw0YzAtMC41NTItMC40NDctMS0xLTF2MkMwLjU1Myw1LDEsNC41NTIsMSw0eiIvPgo8L3N2Zz4=&quot;); transition-duration: 1.49235s; transform: translate3d(0px, -12.6504%, 0px);" />
        <div class="background-darker" />
        <div class="section__hero-content d-flex align-items-center">
          <b-container>
            <b-row>
              <div class="va w-50">
                <div class="section__hero-content-wrapper">
                  <h1 class="">
                    {{ data.headline }}
                  </h1>
                  <p class="">
                    {{ data.description }}
                  </p>
                </div>
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
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';
  $easeInOutQuart: cubic-bezier(0.76, 0, 0.24, 1);
  $easeOutQuad: cubic-bezier(0.5, 1, 0.89, 1);

  .reveal-box {
    position: relative;
    height: 850px;
    max-height: 850px;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    margin-bottom: 120px;
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
    max-height: 850px;
    margin-top: 90px;
    margin-bottom: 120px;

    &-image {
      background-repeat: no-repeat;
      background-position: center center;
      -ms-background-size: inherit;
      background-size: cover;
      height: 850px;
      width: 100%;
    }

    &-content {
      height: 100%;

      &-wrapper {
        // background-color: $white;
        padding: 40px;
        // color: $black;
      }
    }

    .pattern-overlay {
      position: absolute;
      top: 0;
      width: 100%;
      height: 120%;
      left: 0;
    }

    .background-darker {
      background-color: $black;
      opacity: 0.75;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .va {
      display: table;
      table-layout: fixed;
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      border: none;
      border-spacing: 0;
      border-collapse: collapse;
      box-sizing: border-box;
      z-index: 10;
    }
  }
</style>
