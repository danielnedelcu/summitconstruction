<template>
  <b-container fluid>
    <b-row>
        <Hero :data="heroObj" />

        <section class="section__about-us">
          <div class="wrapper">
            <div class="section__about-us-wrapper d-flex">
              <div class="col-md-8">
                <h2 class="content-headline">
                  Lorem first ipsum dolor sit ametS
                </h2>
              </div>
              <div class="col-md-6">
                <p class="content-description">
                  Lorem first ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet est placerat in egestas erat imperdiet sed. Massa sed elementum tempus egestas sed sed risus pretium. Mauris vitae ultricies leo integer malesuada nunc vel. Tortor pretium viverra suspendisse potenti nullam. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id consectetur purus ut faucibus. Platea dictumst quisque sagittis purus sit amet volutpat. Consequat mauris nunc congue nisi vitae suscipit. Sagittis vitae et leo duis.
                </p>
  
              </div>
            </div>

            <div class="setion__about-us-partner">
              <div class="col-md-4">
                <img src="https://picsum.photos/350/300" class="w-100" />
              </div>
              <div class="col-md-6">
                <div class="d-grid d-flex partner">
                  <h3>Adi Negru</h3>
                  <p class="content-description">
                    At 8 years old Adi and his family emigrated from Romania in the early 80’s and settled in California, where his father started his first tire shop business. After several years the family briefly lived in Indiana and then moved to Georgia in 1989 where his father started a hotel remodeling and stucco business. While in high school, Adi began working in his father’s construction business where he’s learned the value of hard work from a young age. After gaining experience, Adi started his own construction business. He’s worked on stucco projects that includes hospitals, hotels, homes and shopping centers, he has also remodeled hotels, apartments, and 120+ homes for investors and real-estate agents. Adi strongly believes that honesty and loyalty are key ingredients in a strong successful workforce network.
                  </p>
                </div>
              </div>
            </div>

            <div class="setion__about-us-partner">
              <div class="col">
                <div class="d-grid d-flex partner">
                  <h3>Thomas Smith</h3>
                  <p class="content-description">
                    Thomas brings over 20 years of diverse experience to the industry. With his established workmanship in the multi-family and commercial industry, Thomas has conducted new builds and rehabilitation with the most prestigious companies: Greystar, Camden, AMICO, Equity Strada, JRK, Marriot, Crowne Plaza, Kia, Duke/Weeks, Holder, Choate, Jade Construction &amp; New South with projects averaging from 500k – 3M.
                  </p>
                  <p class="content-description">
                    Thomas holds licenses for HVAC, IIRCR &amp; GSWCC, and is a master in the following fields; Residential Construction, Commercial Construction, Multi-Family Construction, Overseas Construction, Reviewing Blueprints, Operating Heavy Machinery, DOT Roads Parking Lot Grading Concrete/Stucco Finishing, Underground Storm Water Detention and more.
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src="https://picsum.photos/350/300" class="w-100" />
              </div>
            </div>

          </div>
        </section>

        <ContactUsTeaser :data="contactTeaserObject" />
    </b-row>
  </b-container>
</template>

<script>
import { createSEOMeta } from '../utils/seo'
import Hero from '~/components/HomepageHero.vue'
import ContactUsTeaser from '~/components/ContactUsTeaser.vue'
import Services from '~/services/services.js'

export default {
  components: {
    Hero,
    ContactUsTeaser
  },

  data () {
    return {
      pageTitle: 'About Summit Construction Company'
    }
  },

async asyncData (context) {
    /**
     * Rtrieves all homepage data from Storyblok
     */
    const response = await Services.getData('about')

    const contentArr = response.data.stories[0].content

    // eslint-disable-next-line no-console
    console.dir(contentArr)

    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      heroObj: convertArrayToObject(contentArr.body.filter(e => e.component === 'hero')),
      //servicesObj: convertArrayToObject(contentArrr.servicesTeaser.filter(e => e.component === 'services-teaser')),
      //multifamilyObj: convertArrayToObject(contentArrr.servicesTeaser.filter(e => e.component === 'services-teaser')).multifamily.filter(e => e.component === 'multi-family-teaser'),
      // simpleImageObj: convertArrayToObject(contentArrr[0].content.simpleImagePlaceholder.filter(e => e.component === 'simple-image')),
      contactTeaserObject: convertArrayToObject(contentArr.body.filter(e => e.component === 'contact-teaser'))
    }
  },

  head () {
    return {
      title: this.pageTitle,
      meta: [
        ...createSEOMeta({
          title: this.pageTitle,
          description: "An innovative construction company"
        })
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .section__about-us {
    margin: 150px 0;

    &-wrapper {
      flex-flow: column;
      margin-bottom: 120px;
      
      .content-headline {
        margin-bottom: 50px;
      }
    }

    .setion__about-us-partner {
      display: flex;
      align-items: center;
      padding: 100px 0;

      .partner {
        align-items: center;
        grid-gap: 20px;
        gap: 20px;
        flex-flow: column;
        align-items: flex-start;
      }
    }
  }
</style>