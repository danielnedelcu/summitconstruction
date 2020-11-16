<template>
  <header class="header fullscreen-menu d-flex">
    <b-container fluid>
      <b-row>
        <div class="header-wrapper p-l-r-15-m d-flex justify-content-between">
          <Logo />

          <div id="nav-menu" v-on:click="onMenuClick" v-bind:class="{'active' : showModal}">
            <span class="btn_menu_line" />
            <span class="btn_menu_line" />
            <span class="btn_menu_line" />
          </div>


          <div id="overlay-menu" v-bind:class="{'active' : showModal}" style="">
            <Navigation />
          </div>
        </div>
      </b-row>
    </b-container>
  </header>
  <!-- <div class="wrapper">
    <div class="header-wrapper">
      <a class="logo">
        <logo />
      </a>
      <div id="nav-menu" v-on:click="onMenuClick" v-bind:class="{'active' : showModal}">
        <span class="btn_menu_line" />
        <span class="btn_menu_line" />
        <span class="btn_menu_line" />
        <span class="touch-button"><i class="navicon">▼</i></span>
      </div>

      <div id="overlay-menu" v-bind:class="{'active' : showModal}" style="">
        <navbar />
      </div>
    </div>
  </div> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import store from '~/store'
import { ASSIGN_OVERLAY_STATE } from '~/constants/actions.type'
import Navigation from '~/components/shared/Navigation.vue'
import Logo from '~/components/Logo.vue'

export default {
  store,

  components: {
    Logo,
    Navigation
  },

  data () {
    return {
      // showModal: true
    }
  },

  computed: {
    ...mapGetters({ showModal: 'getOverlayState' })
  },
  
  mounted () {
    this.$root.$on('my-event', this.onMenuClick)
  },
  
  methods: {
    ...mapActions({
      OverlayAction: ASSIGN_OVERLAY_STATE
    }),

    onMenuClick () {
      // eslint-disable-next-line no-console
      this.OverlayAction(this.showModal ^= 1)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/sass/base/_index.scss';

  .header {
    position: fixed;
    z-index: 10;
    display: flex;
    top: 0;
    max-width: inherit;
    width: inherit;
    background-color: $white;

    @include breakpoint(lg){ 
 
    }
//padding: 10px 0;
    &-wrapper {
      width: 100%;

      @include breakpoint(lg){ 
        padding: 10px 0;
      }

      #nav-menu {
          float: right;
          height: 20px;
          margin: 40px 0;
          cursor: pointer;
          position: relative;
          z-index: 100;
          display: block;
          @include Transition;

          .btn_menu_line {
              height: 3px;
              width: 23px;
              margin: 3px 0px 3px 0px;
              background-color: #000;
              display: block;
              right: 0;
              @include Transition;

              &:first-child {
                  width: 12px;
                  margin-left: 11px;
              }

              &:nth-child(3) {
                  width: 18px;
                  margin-left: 5px;
              }
          }

          &:hover {
              .btn_menu_line {
                  width: 23px!important;
                  margin-left: 0!important;
              }
          }

          &.active {
              margin-right: -3px;
              z-index: 2000;

              .btn_menu_line {
                  background-color: $black;

                  &:nth-child(1) {
                      -webkit-transform: rotate(45deg);
                      -moz-transform: rotate(45deg);
                      -ms-transform: rotate(45deg);
                      -o-transform: rotate(45deg);
                      transform: rotate(45deg);
                      width: 24px!important;
                      margin-left: 0!important;
                      margin-top: 10px;
                      background-color: $black;
                      @include Transition;
                  }

                  &:nth-child(2) {
                      opacity: 0;
                  }

                  &:nth-child(3) {
                      -webkit-transform: rotate(-45deg);
                      -moz-transform: rotate(-45deg);
                      -ms-transform: rotate(-45deg);
                      -o-transform: rotate(-45deg);
                      transform: rotate(-45deg);
                      width: 24px!important;
                      margin-left: 0!important;
                      margin-top: -12px;
                  }
              }
          }
        @include breakpoint(lg){ 
          display: none;
        }
      }
    }

    #overlay-menu {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $white;
        left: 0;
        opacity: 0;
        position: fixed;
        visibility: hidden;
        overflow-x: hidden;
        overflow-y: hidden;
        transition: 0.3s all cubic-bezier(0.3, 1, 0.1, 1);
        -webkit-transition: 0.3s all cubic-bezier(0.3, 1, 0.1, 1);
        -moz-transition: 0.3s all cubic-bezier(0.3, 1, 0.1, 1);
        -ms-transition: 0.3s all cubic-bezier(0.3, 1, 0.1, 1);
        -o-transition: 0.3s all cubic-bezier(0.3, 1, 0.1, 1);

        &.active {
            visibility: visible;
            opacity: 1;
        }

        @include breakpoint(lg){ 
          opacity: 1;
          visibility: visible;
          justify-content: flex-end;
          display: flex;
          position: relative;
        }
    }
  }
</style>
