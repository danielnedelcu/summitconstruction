<template>
  <section class="section__references">
    <div class="wrapper">
      <div class="section__references-content d-flex align-items-center">
        <b-container>
          <b-row>
            <p class="teaser-descrition h3">
              {{ data.description }}
            </p>
          </b-row>
        </b-container>
        <b-container>
          <b-row class="section__references-grid">
            <Reference
              v-for="reference in data.placeholder"
              :key="reference._uid"
              :reference="reference"
            />
          </b-row>
        </b-container>
      </div>
    </div>
  </section>
</template>

<script>
import Reference from '~/components/atoms/Reference.vue'

export default {
  components: {
    Reference
  },

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
  .section__references {
    position: relative;
    display: flex;
    width: 100%;
    margin: 200px 0;

    &-content {
      flex-flow: column;

      .section__references-grid {
        justify-content: space-between;
        margin-top: 100px;
      }
    }
  }
</style>
