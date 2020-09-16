<template>
  <div class="col">
    <div v-inview:once.enter="inviewImageEnter" class="reveal">
      <img :src="animatedimage.image.filename" class="reveal-img">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    animatedimage: { type: Object, required: true }
  },

  data () {
    return {
      inviewImageEnter: this.$inviewImageEnter
    }
  }
}
</script>

<style scoped lang="scss">
    .reveal {
      visibility: hidden;
      position: relative;
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      object-fit: cover;
    }
</style>
