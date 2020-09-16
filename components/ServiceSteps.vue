<template>
  <section class="section__service-steps">
    <div class="wrapper">
      <b-container>
        <b-row>
          <div class="section__service-steps-headline d-flex justify-content-center flex-column col-6">
            <h3>
              {{ data.headline }}
            </h3>
            <p>
              {{ data.description }}
            </p>
          </div>
          <div class="section__service-steps-wrapper d-flex">
            <ServiceStep
              v-for="service in data.service"
              :key="service._uid"
              :service="service"
            />
          </div>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script>
import ServiceStep from '~/components/atoms/ServiceStep.vue'

export default {
  components: {
    ServiceStep
  },

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

  .section__service-steps {
    position: relative;
    display: flex;
    width: 100%;
    margin-top: 90px;
    margin-bottom: 120px;

    &-wrapper {
      margin-top: 50px;
      background-color: $i;
    }
  }
</style>
