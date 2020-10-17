<template>
  <div class="col reference">
    <div class="reference-wrapper">
      <img :src="reference.image.filename" class="reference-img">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reference: { type: Object, required: true }
  },

  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .reference {
    flex-grow: 0;
    flex-basis: 33.33339%;
    //margin-bottom: 13px;
    border-bottom: 1px solid $b;
    border-right: 1px solid $b;
    display: flex;
    align-items: center;

    &:nth-child(3n) {
      border-right: none;
    }

    &:nth-child(4n) {
      border-bottom: none;
    }

    &:nth-child(5n) {
      border-bottom: none;
    }

    &:nth-child(6n) {
      border-bottom: none;
    }

    &-wrapper {
      padding: 30px 10px;

      @include breakpoint(lg){
        padding: 50px 120px;
      }

      img {
        width: 100%;
        filter: grayscale(100%);
      }
    }
  }
</style>
