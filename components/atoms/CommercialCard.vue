<template>
  <div class="col service">
    <div v-inview:once.enter="inviewImageEnter" class="reveal">
      <div :style="{backgroundImage: `url(${ data.image.filename })`}" class="service-image reveal-img">
        <div class="service-wrapper d-flex">
          <h2 class="service-headline">
            {{ data.headline }}
          </h2>
        </div>
      </div>
    </div>

    <div class="services-description">
      <p>{{ data.description }}</p>
    </div>
    <div class="cta-wrapper">
      <n-link :to="cta.url.cached_url" class="btn-menu btn--primary">
        {{ cta.label }}
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  },

  data () {
    return {
      inviewImageEnter: this.$inviewImageEnter,
      cta: this.convertArrayToObject(this.data.placeholder)
    }
  },

  methods: {
    convertArrayToObject: (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/sass/base/_index.scss';

  .service {
    flex-grow: 0;
    flex-basis: 33.33339%;
    margin-bottom: 13px;

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
        opacity: 0.7;
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
      margin: 40px;
    }

    .cta-wrapper {
      display: flex;
      justify-content: center;
    }
  }
</style>
