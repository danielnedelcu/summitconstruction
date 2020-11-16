<template>
  <section class="section__services-teaser">
    <div class="wrapper">
      <div class="section__services-teaser-content d-flex justify-content-md-center row-mobile">
        <b-row class="width-50">
          <b-col align-self="center">
            <h2 class="teaser-headline">  
              {{ data.headline }}
            </h2>
            <p v-html="richtext" class="teaser-descrition" />
          </b-col>
        </b-row>
        <div class="bv-example-row row-mobile">
          <ul>
            <ServiceItem
                v-for="service in data.servicesListPlaceholder"
                :key="service._uid"
                :service="service"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceItem from '~/components/atoms/ServiceItem.vue'

export default {
  components: {
    ServiceItem
  },

  props: {
    data: { type: Array, required: true }
  },

  computed: {
    richtext () {
      return this.$storyapi.richTextResolver.render(this.data.description)
    }
  },

  mounted () {
    console.log(this.data)
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .section__services-teaser {
    position: relative;
    display: flex;
    width: 100%;
    margin: 50px 0 0;

    &-content {
      display: flex;
      flex-flow: column;

      .teaser-headline {
        margin-bottom: 50px;
      }
    }

    &-grid {
      margin: 100px 0;
    }

    .cta-wrapper {
      margin: 30px 0;
    }

    ul {
      padding: 10px;
      list-style: none;
      display: block;
      margin: 20px 0;
      @include clearfix;

      @include breakpoint(lg){
        padding: 0;
        margin: 50px 0;
        // grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }

  .section__services-commercial {
    margin: 100px 0;
  }

  .boxed-content {
    border-left: 3px solid #2b2b2b;
    padding: 0 50px;
    margin-left: 100px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>