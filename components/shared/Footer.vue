<template>
  <footer class="footer d-flex">
    <b-container fluid>
      <div class="footer-wrapper d-flex justify-content-between">
        <b-container>
          <b-row>
            <div class="col-12 col-md-4">
              <div class="row-mobile">
                <LogoWhite />
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="row-mobile">
                <ul class="footer-column">
                  <li>
                    <span class="section-title">Location</span>
                    <div v-html="footerData.location " class="textwidget" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="row-mobile">
                <ul class="footer-column">
                  <li>
                    <span class="section-title">Work inquiries</span>
                    <div class="textwidget">
                      {{ footerData.inquiries }}
                      <b><a :href="footerData.email">{{ footerData.email }}</a></b>
                    </div>
                  </li>
                  <li>
                    <span class="section-title">Phone</span>
                    <div class="textwidget">
                      {{ footerData.phone }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </b-row>
        </b-container>
      </div>
    </b-container>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import LogoWhite from '~/components/shared/LogoWhite.vue'

export default {
  // store,
  components: {
    LogoWhite
  },

  data () {
    return {
      footerData: {}
    }
  },

  computed: {
    ...mapGetters({ getFooter: 'getFooterState' })
  },

  mounted () {
    this.footerData = this.getFooter
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/sass/base/_index.scss';

  .footer {
    z-index: 10;
    top: 0;
    max-width: inherit;
    width: 100%;
    background-color: $black;
    margin-top: 90px;
    padding: 60px 0;

    @include breakpoint(lg){
      margin-top: 120px;
    } 

    &-wrapper {
      width: 100%;

      .footer-column {
        padding: 0;
        margin-top: 40px;

        li {
          margin-bottom: 30px;

          .section-title {
            margin-bottom: 15px;
            color: $c;
            display: block;
            font-size: 1rem;
            @include google-font('Roboto', $font-roboto-700);
          }

          .textwidget {
            color: $white;

            a {
              color: $white;
            }
          }
        }
      }
    }
  }
</style>
