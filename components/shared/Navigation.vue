<template>
  <nav class="menu-nav d-flex align-items-center" style="touch-action: pan-y;">
    <div class="menu-nav__col">
      <ul class="menu-nav__ul menu-nav__ul">
        <li class="menu-nav__li menu-nav__li--work" v-on:click="closeMenu">
          <n-link to="/" class="btn-menu">
            Home
          </n-link>
        </li>

        <li class="menu-nav__li menu-nav__li--who-we-are" v-on:click="closeMenu">
          <nuxt-link to="/about" class="btn-menu">
            Our Company
          </nuxt-link>
        </li>

        <li class="menu-nav__li menu-nav__li--who-we-are" v-on:click="closeMenu">
          <n-link to="/commercial-services/commercial" class="btn-menu">
            Commercial
          </n-link>
        </li>

        <li class="menu-nav__li menu-nav__li--what-we-do" v-on:click="closeMenu">
          <n-link to="/multifamily-services/multifamily" class="btn-menu">
            Multi Family
          </n-link>
          <!-- <ul>
            <li>
              <n-link to="/multifamily-services/external-renovations" class="btn-menu">
                External Renovations
              </n-link>
            </li>
            <li>
              <n-link to="/multifamily-services/disaster-relief" class="btn-menu">
                Disaster Reflief
              </n-link>
            </li>
            <li>
              <n-link to="/multifamily-services/interior-renovations" class="btn-menu">
                Interior Renovations
              </n-link>
            </li>
          </ul> -->
        </li>

        <li class="menu-nav__li menu-nav__li--what-we-do" v-on:click="closeMenu">
          <n-link to="/projects" class="btn-menu">
            Projects
          </n-link>
        </li>

        <li class="menu-nav__li menu-nav__li--contact" v-on:click="closeMenu">
          <n-link to="/contact" class="btn-menu">
            Contact Us
          </n-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  computed: {
    // ...mapGetters({ showModal: 'getOverlayState' })
  },

  methods: {
    closeMenu () {
      // eslint-disable-next-line no-console
      console.log('item clicked')
      this.$root.$emit('my-event')
    }
  }
}
</script>

<style scoped lang="scss">
    // @import '~/assets/sass/base/mixins/THEORY.transitions.scss';
    // @import '~/assets/sass/base/mixins/THEORY.animations.scss';
    // @import '~/assets/sass/base/THEORY.fonts.scss';
    @import '~/assets/sass/base/_index.scss';

  .is-active {

      .menu-nav__ul, .social-nav__ul {
          .menu-nav__li, .social-nav__li {
              visibility: visible  ;
              opacity: 1 ;

              // @include navigation-animation("menu");

          }
      }

      .social-nav__ul {
          .social-nav__li {
              // @include navigation-animation("social");
          }
      }

  }

  nav {
      height: 100%;
      margin: 0;

      @include breakpoint(lg){ 
        height: auto;
      }

      .menu-nav__col {
          width: 100%;

          @include breakpoint(lg){ 
            width: auto;
          }

          .menu-nav__ul {
              padding: 0;
              list-style: none;
              display: flex;
              flex-flow: column;

              @include breakpoint(lg){ 
                display: block;
              }

              .menu-nav__li {
                text-align: center;
                float: left;
                color: $black;
                position: relative;
                background-color: $white;
                padding: 10px 0;
                @include google-font('Roboto', $font-roboto-500);

                @include breakpoint(lg){ 
                  text-align: left;
                }

                a {
                  color: inherit;
                  font-size: 18px;

                  @include breakpoint(lg){ 
                    margin: 0 15px;
                    font-size: 16px;
                  }
                }

                &:last-child {
                  a {
                    margin-right: 0;
                  }
                }

                &.has-sub {

                  ul {
                    display: none;
                    list-style: none;
                    right: 0;
                    width: 200px;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    @include Transition;

                    li {
                      visibility: visible;
                    }
                  }

                  &:hover {
                    color: $white;
                    background-color: $primary-color;

                    ul {
                      background-color: $primary-color;
                      -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .0);
                      box-shadow: 0 6px 12px rgba(0, 0, 0, .0);
                      position: absolute;
                      z-index: 2;
                      padding-left: 0;
                      height: auto;
                      display: block;

                      li {
                        position: relative;
                        width: 100%;
                        float: left;
                        padding: 0;
                        cursor: pointer;
                        transition: all .2s ease-out;
                        -webkit-transition: all .2s ease-out;
                        -webkit-backface-visibility: hidden;
                        -moz-backface-visibility: hidden;
                        -ms-backface-visibility: hidden;
                        -webkit-transform-style: preserve-3d;
                        transform-style: preserve-3d;
                        -webkit-transform: translateZ(0) translate3d(0,0,0);
                        -moz-transform: translateZ(0) translate3d(0,0,0);
                        -ms-transform: translateZ(0) translate3d(0,0,0);
                        -o-transform: translateZ(0) translate3d(0,0,0);
                        transform: translateZ(0) translate3d(0,0,0);

                        a {
                          color: $white;
                          display: block;
                          margin: 5px 15px;
                          text-align: right;
                        }
                      }
                    }
                  }
                }
              }
          }
      }
  }
</style>
