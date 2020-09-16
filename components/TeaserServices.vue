<template>
  <section class="section__services-teaser">
    <div class="wrapper">
      <div class="section__services-teaser-content d-flex justify-content-md-center">
        <b-row>
          <b-col align-self="center">
            <h2 class="teaser-headline">
              {{ data.headline }}
            </h2>
            <p class="teaser-descrition">
              {{ data.description }}
            </p>
          </b-col>
        </b-row>
      </div>
      <div class="section__services-commercial d-flex">
        <div class="col">
          <div class="boxed-content col-9">
            <h3>
              {{ commercialData.headline }}
            </h3>
            <p class="teaser-descrition">
              {{ commercialData.description }}
            </p>
          </div>
          <CommercialCard :data="commercialObj" />
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
              v-for="service in multifamilyData.placeholder"
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

export default {
  components: {
    ServiceCard
  },

  props: {
    data: { type: Object, required: true },
    multifamilyData: { type: Object, required: true },
    commercialData: { type: Object, required: true }
  },

  data () {
    return {
      commercialObj: this.convertArrayToObject(this.commercialData.placeholder)
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
  .section__services-teaser {
    position: relative;
    display: flex;
    width: 100%;
    margin: 200px 0;

    &-content {
      display: flex;
      flex-flow: column;
      width: 33.33339%;
    }

    &-grid {
      margin: 100px 0;
    }

    .cta-wrapper {
      margin: 30px 0;
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
