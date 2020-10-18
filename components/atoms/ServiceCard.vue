<template>
  <div class="col service">
    <div class="row">
      <div class="services-description">
        <h2 class="service-headline">
          {{ service.headline }}
        </h2>
        <p>{{ service.description }}</p>
      </div>
      <div v-inview:once.enter="inviewImageEnter" class="reveal">
        <div :style="{backgroundImage: `url(${ service.image.filename })`}" class="service-image reveal-img">
          <div class="service-wrapper d-flex">
            <!-- <h2 class="service-headline">
              {{ service.headline }}
            </h2> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="cta-wrapper">
      <n-link :to="ctaData.url.cached_url" class="btn-menu btn--primary">
        {{ ctaData.label }}
      </n-link>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    service: { type: Object, required: true }
  },

  data () {
    return {
      inviewImageEnter: this.$inviewImageEnter,
      ctaData: this.service.ctaPlaceholder[0]
    }
  },

  mounted () {
   // eslint-disable-next-line no-console
    console.dir(this.service)
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/sass/base/_index.scss';

  .service {
    flex-grow: 0;
    flex-basis: 100%;
    margin-bottom: 70px;

    @include breakpoint(lg){
      margin-bottom: 150px;
    }

    &-image {
      background-repeat: no-repeat;
      background-position: center center;
      -ms-background-size: inherit;
      background-size: cover;
      height: 500px;
      width: 100%;
      // box-shadow: 0 7px 7px rgba(0, 0, 0, 0.07), 0 10px 10px rgba(0, 0, 0, 0.07), 0 17px 18px rgba(0, 0, 0, 0.07), 0 0px 0px rgba(0, 0, 0, 0.07);
      background-color: $black;
      position: relative;
      object-fit: cover;

      &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: 0;
      }

      .service-wrapper {
        justify-content: center;
        align-items: center;
        height: 100%;
        position: relative;

        .service-headline {
          color: $white;
        }
      }
    }

    .reveal {
      visibility: hidden;
      position: relative;
      width: 100%;
    }

    .services-description {
      margin: 40px 0;
      width: 100%;

      @include breakpoint(lg){
        width: 50%;
      }
    }

    .cta-wrapper {
      display: flex;
      justify-content: center;
    }
  }
</style>
