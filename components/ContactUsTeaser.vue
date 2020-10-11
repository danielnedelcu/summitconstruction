<template>
  <section class="section__contact-us">
    <div class="section__contact-us-wrapper w-100">
      <div class="wrapper">
        <div class="section__contact-us-wrapper-content d-flex align-items-center">
          <div>
            <h2 class="content-headline">
              {{ data.headline }}
            </h2>
            <p class="content-description">
              {{ data.description }}
            </p>
          </div>
          <div>
            <div class="cta-wrapper">
              <n-link to="/contact" class="btn-menu btn--primary">
                {{ ctaData.label }}
              </n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },

  props: {
    data: { type: Object, required: true }
  },

  data () {
    return {
      ctaData: this.data.ctaPlaceholder[0]
    }
  }
}
</script>

<style scoped lang="scss">
  .section__contact-us {
    position: relative;
    display: flex;
    width: 100%;
    margin: 50px 0;

    &-wrapper {
      visibility: visible;

      &-content {
        flex-flow: column;
        margin: 0 auto;
        text-align: center;
        width: 50%;
      }
    }
  }
</style>
