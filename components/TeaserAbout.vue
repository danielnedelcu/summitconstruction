<template>
  <section class="section__about-teaser">
    <div class="wrapper">
      <div class="section__about-teaser-content d-flex align-items-center">
        <div class="col-12 col-md-4">
          <div class="row-mobile">
            <h5 class="teaser-label">
              {{ data.label }}
            </h5>
            <h2 class="teaser-headline">
              {{ data.headline }}
            </h2>
            <p class="teaser-descrition">
              {{ data.description }}
            </p>

            <div class="cta-wrapper">
              <n-link :to="ctaData.url.cached_url" class="btn-menu btn--primary">
                {{ ctaData.label }}
              </n-link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row-mobile d-flex">
            <AnimatedImage
              v-for="animatedimage in data.imagePlaceholder"
              :key="animatedimage._uid"
              :animatedimage="animatedimage"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AnimatedImage from '~/components/atoms/AnimatedImage.vue'

export default {
  components: {
    AnimatedImage
  },

  props: {
    data: { type: Object, required: true }
  },

  data () {
    return {
      ctaData: this.data.placeholder[0]
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .section__about-teaser {
    position: relative;
    display: flex;
    width: 100%;
    margin-top: 80px;
    margin-bottom: 80px;

    @include breakpoint(lg){
      margin-top: 90px;
      margin-bottom: 120px;
    }

    &-content {
      flex-flow: column;

      @include breakpoint(lg){
        flex-flow: row;
      }
    }

    .cta-wrapper {
      margin: 30px 0;
    }
  }
</style>
