<template>
  <b-container fluid>
    <b-row>
      <Hero :data="heroObj" />
      <TeaserAbout :data="teaserObj" />
      <ReferencesGrid :data="referencesObj" />
      <TeaserServices :data="servicesObj" :multifamily-data="multifamilyObj" :commercial-data="commercialObj" />
    </b-row>
  </b-container>
</template>

<script>
// import * as Constants from '../constants/constants'
import Hero from '~/components/HomepageHero.vue'
import TeaserAbout from '~/components/TeaserAbout.vue'
import ReferencesGrid from '~/components/ReferencesGrid.vue'
import TeaserServices from '~/components/TeaserServices.vue'
import Services from '~/services/services.js'

export default {
  components: {
    Hero,
    TeaserAbout,
    ReferencesGrid,
    TeaserServices
  },

  async asyncData (context) {
    /**
     * Rtrieves all homepage data from Storyblok
     */
    const response = await Services.getData('home')

    // eslint-disable-next-line no-console
    console.dir(response)
    const contentArrr = response.data.stories[0].content.body

    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      heroObj: convertArrayToObject(contentArrr.filter(e => e.component === 'hero')),
      teaserObj: convertArrayToObject(contentArrr.filter(e => e.component === 'about-teaser')),
      referencesObj: convertArrayToObject(contentArrr.filter(e => e.component === 'references-grid')),
      servicesObj: convertArrayToObject(contentArrr.filter(e => e.component === 'services-teaser')),
      multifamilyObj: convertArrayToObject(convertArrayToObject(contentArrr.filter(e => e.component === 'services-teaser')).multifamily.filter(e => e.component === 'multi-family-teaser')),
      commercialObj: convertArrayToObject(convertArrayToObject(contentArrr.filter(e => e.component === 'services-teaser')).commercialPlaceholder.filter(e => e.component === 'commercial-teaser'))
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Summit Construction Home Page' }
      ]
    }
  }
}
</script>

<style>

</style>
