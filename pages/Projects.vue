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
              <div class="swiper-button-prev" slot="button-prev">
                <div class="arrow" />
              </div>
              <div class="swiper-button-next arrow" slot="button-next">
                <div class="arrow" />
              </div>
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
        freeMode: false,
        slidesPerView: 1,
        loopedSlides: 'auto',
        spaceBetween: 10,
        grabCursor: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto',
            spaceBetween: 70
          }
        }
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
  @import '~/assets/sass/base/_index.scss';

  .section__project-list {
    ul {
      list-style: none;
      padding: 0;

      li {
        position: relative;
        margin-bottom: 200px;

        .project-information {
          padding-top: 100px;
          padding-bottom: 100px;
          position: relative;
          width: 80%;
          margin-left: 60px;
          padding-left: 0;

          @include breakpoint(lg){ 
            width: 25vw;
            padding-left: 3vw;
            margin-left: 25vw;
            min-width: 350px;
          }   

          &-group {
            margin-bottom: 15px;
          }
        }

        .background-gray {
          position: absolute;
          left: 40px;
          top: 40%;
          right: 0px;
          bottom: 0px;
          z-index: -1;
          display: block;
          width: auto;
          border-bottom-left-radius: 6px;
          background-color: #f8f8f8;
          -webkit-transform: translate(0px, 20px);
          -ms-transform: translate(0px, 20px);
          transform: translate(0px, 20px);

          @include breakpoint(lg){ 
            left: 25vw;
            max-width: 75vw;
            width: auto;
          }
        }
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next
  {
    position: absolute;
    height: 50px;
    width: 50px;
    margin: 0 20px 20px 0;
    background-color: red;
    border-radius: 50%;
    top: 50%;
    z-index: 999;

    .arrow {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }

  .swiper-button-next {
    right: 0;
    margin: 0 10px 20px 0;

    @include breakpoint(lg){ 
      margin: 0 20px 20px 0;
    }      

    .arrow {
      height: 15px;
      width: 15px;
      border: 1px solid $white;
      border-width: 2px 2px 0 0;
      transform: rotate(45deg);
      right: 0;
    }
  }

  .swiper-button-prev {
    left: 0;
    margin: 0 10px 0 10px;

    @include breakpoint(lg){ 
      margin: 0 20px 0 20px;
    }   
    
    .arrow {
      height: 15px;
      width: 15px;
      border: 1px solid $white;
      border-width: 2px 2px 0 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(-135deg);
      left: 0;
  }
  }

  .swiper {

    .swiper-slide {
      width: auto;

      img {
        width: 100%;
        top: 50%;
        width: 100vw;

        @include breakpoint(lg){ 
          width: 35vw;
        }
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
