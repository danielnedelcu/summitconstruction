<template>
  <li class="service-list">
    <div class="container">
      <span>{{ service.label }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    service: { type: Object, required: true }
  },

  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/sass/base/_index.scss';

  li {
    padding: 1px;
    // margin-right: 1px;
    // margin-bottom: 1px;
    width: 50%;
    float: left;
    height: 150px;

    .container {
      background-color: $black;
      padding: 50px;
      height: 100%;
      position: relative;
    }

    @include breakpoint(lg){
      width: 200px;
      // padding: 5px 1px 5px 0;
      text-align: center;

      .container {
        background-color: $black;
        padding: 50px;
      }
    }

    span {
      @include google-font('Roboto', $font-roboto-700);
      color: $white;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: auto;
      margin-bottom: auto;
      transform: translateX(-50%) translateY(-50%); 
      // @include google-font('Playfair Display', $font-playfair-400, normal);
    }
  }
</style>
