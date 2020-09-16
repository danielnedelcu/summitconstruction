<template>
  <div class="col service-step">
    <h4 class="content-headline">
      {{ service.headline }}
    </h4>
    <p class="content-description">
      {{ service.description }}
    </p>
  </div>
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

  .service-step {
    padding: 50px;
    border-right: 1px solid $white;

    &:last-child {
      border-right: none;
    }

    .content-headline {
      margin-bottom: 25px;
      position: relative;
      line-height: 2;

      &:after {
        content: '';
        position: absolute;
        background-color: $black;
        width: 50px;
        height: 2px;
        left: 0;
        bottom: 0px;
      }
    }
  }
</style>
