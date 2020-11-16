<template>
  <section class="section__services-teaser">
    <div class="wrapper">
      <div class="section__services-teaser-content d-flex justify-content-md-center">
        <b-row class="width-50">
          <b-col align-self="center">
            <h2 class="teaser-headline">  
              {{ data.headline }}
            </h2>
            <p class="teaser-descrition">
              {{ data.description }}
            </p>
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

      <div class="section__services-teaser-grid d-flex">
        <div class="col">
          <div class="boxed-content col-9">
            <h3>
              {{ multifamilyData.headline }}
            </h3>
            <p class="teaser-descrition">
              {{ multifamilyData.description }}
            </p>
          </div>

          <b-row>
            <ServiceCard
              v-for="service in multifamilyObj.placeholder"
              :key="service._uid"
              :service="service"
            />
          </b-row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from '~/components/atoms/ServiceCard.vue'
import ServiceItem from '~/components/atoms/ServiceItem.vue'

export default {
  components: {
    ServiceCard,
    ServiceItem
  },

  props: {
    data: { type: Object, required: true },
    multifamilyData: { type: Array, required: true }
  },

  data () {
    return {
      multifamilyObj: this.convertArrayToObject(this.multifamilyData.filter(e => e.component === 'multi-family-teaser'))
    }
  },

  mounted () {
   // eslint-disable-next-line no-console
    console.dir(this.multifamilyData)
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
      // display: grid;
      // grid-template-columns: 1fr 1fr;
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
