<template>
  <b-container fluid>
    <b-row>
      <Hero :data="heroObj" />

      <div class="section__project-list w-100">
        <ul>
          <li v-for="project in projectsObj.projectPlaceholder" :key="project._uid">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="projectItem in project.imagePlaceholder" :key="projectItem._uid">
                <img :src="projectItem.url.filename">
              </swiper-slide>
            </swiper>
            <div class="project-information">
              <div class="project-information-group">
                <h4>Location</h4>
                <div>{{ project.location }}</div>
              </div>
              <div class="project-information-group">
                <h4>Project estimates</h4>
                <div>{{ project.price }}</div>
              </div>
            </div>
            <div class="background-gray" />
          </li>
        </ul>
      </div>
      <ContactUsTeaser :data="contactTeaserObject" />
    </b-row>
  </b-container>
</template>

<script>
import { createSEOMeta } from '../utils/seo'
// import * as Constants from '../constants/constants'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.scss'
import Hero from '~/components/HeroSimple.vue'
import Services from '~/services/services.js'
import ContactUsTeaser from '~/components/ContactUsTeaser.vue'

export default {
  components: {
    Hero,
    Swiper,
    SwiperSlide,
    ContactUsTeaser
  },

  async asyncData (context) {
    /**
     * Rtrieves all homepage data from Storyblok
     */
    const response = await Services.getData('projects')

    // eslint-disable-next-line no-console
    console.dir(response)
    const contentArrr = response.data.stories[0].content.body

    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      heroObj: convertArrayToObject(contentArrr.filter(e => e.component === 'hero-simple')),
      projectsObj: convertArrayToObject(contentArrr.filter(e => e.component === 'project-list')),
      contactTeaserObject: convertArrayToObject(contentArrr.filter(e => e.component === 'contact-teaser'))
    }
  },

  data () {
    return {
      pageTitle: 'Project Showcase',
      swiperOption: {
        freeMode: true,
        slidesPerView: 'auto',
        loopedSlides: 'auto',
        spaceBetween: 70,
        grabCursor: true
      }
    }
  },

  head () {
    return {
      title: this.pageTitle,
      meta: [
        ...createSEOMeta({
          title: this.pageTitle,
          description: "A list of project summit construction has completed"
        })
      ]
    }
  }
}
</script>

<style lang="scss">

.section__project-list {
  ul {
    list-style: none;

    li {
      position: relative;
      margin-bottom: 200px;

      .project-information {
        min-width: 350px;
        margin-left: 25vw;
        padding-top: 100px;
        padding-bottom: 100px;
        padding-left: 3vw;
        position: relative;
        width: 25vw;

        &-group {
          margin-bottom: 15px;
        }
      }

      .background-gray {
        position: absolute;
        left: 25vw;
        top: 40%;
        right: 0px;
        bottom: 0px;
        z-index: -1;
        display: block;
        width: auto;
        max-width: 75vw;
        border-bottom-left-radius: 6px;
        background-color: #f8f8f8;
        -webkit-transform: translate(0px, 20px);
        -ms-transform: translate(0px, 20px);
        transform: translate(0px, 20px);
      }
    }
  }
}

  .swiper {

    .swiper-slide {
      width: auto;

      img {
        width: 100%;
        top: 50%;
        width: 35vw;
        // -webkit-transform: translate(0px, -50%);
        // -ms-transform: translate(0px, -50%);
        // transform: translate(0px, -50%);
      }
    }
  }

  .swiper-wrapper {
    align-items: center;
    max-height: 500px;
  }

  .main-carousel {
    .carousel-cell {
      width: 66%;
      height: 200px;
      margin-right: 10px;
      background: #8C8;
      border-radius: 5px;
    }
  }
</style>
