<template>
  <div class="default-layout page-content">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/shared/Header.vue'
import Footer from '~/components/shared/Footer.vue'

export default {

  components: {
    Header,
    Footer
  },

  data () {
    return {

    }
  },

  watch: {
    $route () {
      // eslint-disable-next-line no-console
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/base/_index.scss';

html {
  font-family:
    'Roboto';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

a {
  &:hover {
    text-decoration: none;
  }

  &:focus {
    text-decoration: none;
  }
}

.page-content {
  width: 100%;
  margin: 0 auto;

  @include breakpoint(lg){
    width: 95%;
  }
}
</style>
