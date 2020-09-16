<template>
  <section class="section__about-teaser">
    <div class="wrapper">
      <div class="section__about-teaser-content d-flex align-items-center">
        <div class="col-4">
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
        <div class="col">
          <b-row>
            <AnimatedImage
              v-for="animatedimage in data.imagePlaceholder"
              :key="animatedimage._uid"
              :animatedimage="animatedimage"
            />
          </b-row>
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
  .section__about-teaser {
    position: relative;
    display: flex;
    width: 100%;
    margin-top: 90px;
    margin-bottom: 120px;

    .cta-wrapper {
      margin: 30px 0;
    }
  }
</style>
