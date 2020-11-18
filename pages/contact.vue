<template>
  <section class="section__contact">
    <div class="wrapper">
      <div class="content-headline">
        <h2>Contact headline</h2>
      </div>
      <div class="wrapper">
        <v-container fluid>
          <v-app> 
            <v-form
              @submit.prevent="sendContactToLambdaFunction"
              ref="form"
              v-model="valid"
              lazy-validation
            >

            <v-snackbar
                v-model="success"
                color="blue-grey"
                elevation="24"
              >
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="white"
                    text
                    v-bind="attrs"
                    @click="success = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>

              <v-text-field
                v-model="name"
                :counter="70"
                :rules="nameRules"
                label="Name"
                required
                outlined
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                outlined
              ></v-text-field>

              <v-textarea
                v-model="message"
                :rules="textareaRules"
                label="Please enter your message"
                outlined
                required
              ></v-textarea>

              <v-btn
                class="ma-2"
                type="submit"
                outlined
                elevation="0"
                color="primary"
                :disabled="!valid"
              >
                submit
              </v-btn>

              <v-btn
                class="ma-2"
                outlined
                color="warning"
                @click="reset"
              >
                Reset Form
              </v-btn>
            </v-form>
          </v-app>
        </v-container>
      </div>
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
    ],
    success: false,
    myTimer: {},
    text: ''
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

        this.text = 'Message sent successfully!'
        this.success = true
        // if(this.success == true){
        //   this.myTimer = window.setTimeout(() => {
        //     this.success = false;
        //   }, 3000);
        //   this.success = !this.success 
        // }else{
        //   clearTimeout(this.myTimer);
        //   this.resetTimer();
        //   this.success = false
        // }

        // this.$toast({
        //   title: 'Mail sent',
        //   description: response,
        //   status: 'success',
        //   duration: 10000,
        //   isClosable: true
        // })

        this.reset()

      } catch (error) {
        this.text = 'Error sending message. Try again'
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
    padding: 250px 0 0;

    .content-headline {
      text-align: center;
      margin-bottom: 100px;
    }
  }
</style>