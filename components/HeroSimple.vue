<template>
  <section class="section__hero-simple reveal-box__inner">
    <div class="section__hero-simple-content d-flex align-items-center">
      <b-container>
        <b-row>
          <div class="va w-50">
            <h1 class="">
              {{ data.headline }}
            </h1>
            <p class="">
              {{ data.description }}
            </p>
          </div>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  },

  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';
  $easeInOutQuart: cubic-bezier(0.76, 0, 0.24, 1);
  $easeOutQuad: cubic-bezier(0.5, 1, 0.89, 1);

  .section__hero-simple  {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    color: $white;
    max-height: 850px;
    margin-top: 90px;
    margin-bottom: 120px;
    padding-top: calc(120px + 9vw)!important;
    padding-bottom: 120px;

    &-content {
      height: 100%;
      color: $primary-color;
    }

    .va {
      display: table;
      table-layout: fixed;
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      border: none;
      border-spacing: 0;
      border-collapse: collapse;
      box-sizing: border-box;
      z-index: 10;
    }
  }
</style>
