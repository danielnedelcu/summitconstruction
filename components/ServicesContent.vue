<template>
  <section class="section__services-content">
    <div class="wrapper">
      <div class="section__services-content-wrapper d-flex">
        <div class="col">
          <div class="p-r-100">
            <h3 class="content-headline">
              {{ data.headline }}
            </h3>
            <p v-html="richtext" class="content-description" />
          </div>
        </div>
        <div class="col">
          <b-row>
            <div class="p-l-100">
              <AnimatedServiceContentImage :animatedimage="data.imagePlaceholder" />
            </div>
          </b-row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */ 
// import AnimatedServiceContentImage from '~/components/atoms/AnimatedServiceContentImage.vue'

export default {
  components: {
    // AnimatedServiceContentImage
  },

  props: {
    data: { type: Object, required: true }
  },

  data () {
    return {
    }
  },

  computed: {
    richtext () {
      return this.$storyapi.richTextResolver.render(this.data.description)
    }
  },

  created () {
    // eslint-disable-next-line no-console
    console.dir(this.data)
  }
}
</script>

<style scoped lang="scss">
  .section__services-content {
    position: relative;
    display: flex;
    width: 100%;
    margin-top: 90px;
    margin-bottom: 120px;

    &-wrapper {
      .content-headline {
        margin-top: 6rem;
        margin-bottom: 40px;
      }
    }

    .cta-wrapper {
      margin: 30px 0;
    }
  }
</style>
