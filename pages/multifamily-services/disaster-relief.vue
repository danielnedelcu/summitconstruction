<template>
  <b-container fluid>
    <b-row>
      <Hero :data="heroObj" />
      <ServicesContent :data="servicesContenObj" />
      <ServiceSteps :data="serviceStepsObj" />
      <ContactUsTeaser :data="contactTeaserObject" />
    </b-row>
  </b-container>
</template>

<script>
import Hero from '~/components/ServicesHero.vue'
import ServicesContent from '~/components/ServicesContent.vue'
import ServiceSteps from '~/components/ServiceSteps.vue'
import ContactUsTeaser from '~/components/ContactUsTeaser.vue'
import Services from '~/services/services.js'

export default {
  components: {
    Hero,
    ServicesContent,
    ServiceSteps,
    ContactUsTeaser
  },

  async asyncData (context) {
    /**
     * Rtrieves all homepage data from Storyblok
     */
    const response = await Services.getData('multifamily-services/disaster-relief')

    const contentArrr = response.data.stories

    // eslint-disable-next-line no-console
    console.dir(contentArrr)

    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      heroObj: convertArrayToObject(contentArrr[0].content.hero.filter(e => e.component === 'hero-services')),
      servicesContenObj: contentArrr[0].content,
      serviceStepsObj: convertArrayToObject(contentArrr[0].content.stepsPlaceholder.filter(e => e.component === 'service-steps')),
      contactTeaserObject: convertArrayToObject(contentArrr[0].content.contactTeaserPlaceholder.filter(e => e.component === 'contact-teaser'))
    }
  },

  created () {
    // eslint-disable-next-line no-console
    // console.dir(this)
  },

  head () {
    return {
      title: 'Disaster Relief Page',
      meta: [
        { hid: 'description', name: 'description', content: 'Disaster Relief Page for Services' }
      ]
    }
  }
}
</script>

<style>

</style>
