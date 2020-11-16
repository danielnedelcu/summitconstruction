<template>
  <b-container fluid>
    <b-row>
      <Hero :data="heroObj" />

      <section class="section__commercial-services-content">
        <div class="wrapper">
          
          <CommercialServices :data="commercialObj"/>

          <div class="section__simple-image">
            <AnimatedImage :animatedimage="simpleImageObj" />
          </div>
        </div>
      </section>

      <ContactUsTeaser :data="contactTeaserObject" />
    </b-row>
  </b-container>
</template>

<script>
import { createSEOMeta } from '../../utils/seo'
import Hero from '~/components/ServicesHero.vue'
import AnimatedImage from '~/components/atoms/AnimatedImage.vue'
import ContactUsTeaser from '~/components/ContactUsTeaser.vue'
import ServiceItem from '~/components/atoms/ServiceItem.vue'
import CommercialServices from '~/components/CommercialServices.vue'
import Services from '~/services/services.js'

export default {
  components: {
    Hero,
    AnimatedImage,
    ContactUsTeaser,
    ServiceItem
  },

  data () {
    return {
      pageTitle: 'Commercial Services'
    }
  },

  async asyncData (context) {
    /**
     * Rtrieves all homepage data from Storyblok
     */
    const response = await Services.getData('commercial-services/commercial')

    const contentArrr = response.data.stories[0].content

    // eslint-disable-next-line no-console
    console.dir(contentArrr.servicesListPlaceholder)

    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      heroObj: convertArrayToObject(contentArrr.hero.filter(e => e.component === 'hero-services')),
      commercialObj: contentArrr,
      simpleImageObj: convertArrayToObject(contentArrr.simpleImagePlaceholder.filter(e => e.component === 'simple-image')),
      contactTeaserObject: convertArrayToObject(contentArrr.contactTeaserPlaceholder.filter(e => e.component === 'contact-teaser'))
    }
  },

  created () {
    // eslint-disable-next-line no-console
    // console.dir(this)
  },

  head () {
    return {
      title: this.pageTitle,
      meta: [
        ...createSEOMeta({
          title: this.pageTitle,
          description: "Summit construction offers extensive commercial services."
        })
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .section__commercial-services-content {
    margin: 50px 0;

    @include breakpoint(lg){
      margin: 100px 0;
    }

    &-wrapper {
      margin-bottom: 120px;
    }

    .section__simple-image {
      margin: 50px 0;

      @include breakpoint(lg){
        margin: 150px 0;
      }      
    }

    &-list {
      margin-bottom: 120px;

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          &.service-list {
            width: 50%;
            float: left;
            text-align: center;
            padding: 5px;

            span {
              background-color: $primary-color;
              border: 1px solid $primary-color;
              display: block;
              padding: 14px 0px;
              color: $white;
            }
          }
        }
      }
    }
  }
</style>
