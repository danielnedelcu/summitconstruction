<template>
  <section class="section__contact">
    <div class="wrapper">
      <div class="content-headline">
        <h2>Contact headline</h2>
      </div>
      <v-app> 
        <v-form
          @submit.prevent="sendContactToLambdaFunction"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="70"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea
            v-model="message"
            clearable
            :rules="textareaRules"
            clear-icon="mdi-close-circle"
            label="Please enter your message"
            required
          ></v-textarea>

          <v-btn
            class="mr-4"
            type="submit"
            :disabled="!valid"
          >
            submit
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>
        </v-form>
      </v-app>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 70) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    message: '',
    textareaRules: [
      v => !!v || 'Message is required'
    ]
  }),

  methods: {
    // submit () {
    //   this.$refs.form.validate()
    // },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },

    async sendContactToLambdaFunction () {
      console.log('submit')
      try {
        const response = await this.$axios.$post('/.netlify/functions/contact-mail', {
          name: this.name,
          email: this.email,
          message: this.message
        })

        console.log('response', response.satus)

        // this.$toast({
        //   title: 'Mail sent',
        //   description: response,
        //   status: 'success',
        //   duration: 10000,
        //   isClosable: true
        // })

        this.reset()

      } catch (error) {
        // this.$toast({
        //   title: 'An error occured',
        //   description: error,
        //   status: 'error',
        //   duration: 10000,
        //   isClosable: true
        // })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .section__contact {
    position: relative;
    display: flex;
    padding: 250px 0;

    .content-headline {
      text-align: center;
    }
  }
</style>