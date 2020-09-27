<template>
  <b-container fluid>
    <b-row>
      <Hero :data="heroObj" />

      <section class="section__commercial-services-content">
        <div class="wrapper">
          <div class="section__commercial-services-content-wrapper d-flex">
            <div class="col">
              <div class="wrapper--content">
                <h3 class="content-headline">
                  Lorem first ipsum dolor sit amet
                </h3>
                <p class="content-description">
                  Lorem first ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet est placerat in egestas erat imperdiet sed. Massa sed elementum tempus egestas sed sed risus pretium. Mauris vitae ultricies leo integer malesuada nunc vel. Tortor pretium viverra suspendisse potenti nullam. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id consectetur purus ut faucibus. Platea dictumst quisque sagittis purus sit amet volutpat. Consequat mauris nunc congue nisi vitae suscipit. Sagittis vitae et leo duis.
                </p>
                <p class="content-description">
                  Lorem first ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet est placerat in egestas erat imperdiet sed. Massa sed elementum tempus egestas sed sed risus pretium. Mauris vitae ultricies leo integer malesuada nunc vel. Tortor pretium viverra suspendisse potenti nullam. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id consectetur purus ut faucibus. Platea dictumst quisque sagittis purus sit amet volutpat. Consequat mauris nunc congue nisi vitae suscipit. Sagittis vitae et leo duis.
                </p>
              </div>
            </div>
          </div>

          <div class="section__commercial-services-content-list">
            <div class="wrapper--content">
              <div class="bv-example-row">
                <ul>
                  <li class="service-list">
                    <span>Electrical</span>
                  </li>
                  <li class="service-list">
                    <span>Plumbing</span>
                  </li>
                  <li class="service-list">
                    <span>Roofing</span>
                  </li>
                  <li class="service-list">
                    <span>HVAC</span>
                  </li>
                  <li class="service-list">
                    <span>Counting Money</span>
                  </li>
                  <li class="service-list">
                    <span>Flipping Burgers</span>
                  </li>
                  <li class="service-list">
                    <span>Paving</span>
                  </li>
                  <li class="service-list">
                    <span>Stucco</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

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
import Services from '~/services/services.js'

export default {
  components: {
    Hero,
    AnimatedImage,
    ContactUsTeaser
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

    const contentArrr = response.data.stories

    // eslint-disable-next-line no-console
    console.dir(contentArrr)

    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      heroObj: convertArrayToObject(contentArrr[0].content.hero.filter(e => e.component === 'hero-services')),
      simpleImageObj: convertArrayToObject(contentArrr[0].content.simpleImagePlaceholder.filter(e => e.component === 'simple-image')),
      contactTeaserObject: convertArrayToObject(contentArrr[0].content.contactTeaserPlaceholder.filter(e => e.component === 'contact-teaser'))
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
    margin: 100px 0;

    &-wrapper {
      margin-bottom: 120px;
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
