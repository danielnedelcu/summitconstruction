<template>
  <header class="header fullscreen-menu d-flex">
    <b-container fluid>
      <b-row>
        <div class="header-wrapper d-flex justify-content-between">
          <Logo />
          <Navigation />
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
// import { mapGetters, mapActions } from 'vuex'
// import store from '~/store'
// import { ASSIGN_OVERLAY_STATE } from '~/constants/actions.type'
import Navigation from '~/components/shared/Navigation.vue'
import Logo from '~/components/Logo.vue'

export default {
  // store,
  // d-flex flex-row
  components: {
    Logo,
    Navigation
  },

  data () {
    return {
      // counter: this.showModal
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

    &-wrapper {
      width: 100%;
    }
  }
</style>
