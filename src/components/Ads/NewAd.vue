<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-card width="600">
          <v-card-text>
            <v-form class="mt-5">
              <v-text-field
                v-model="title"
                label="Ad title"
                required
                :error-messages="titleErrors"
                @input="[$v.title.$touch(), showUploadButton()]"
                @blur="$v.title.$touch()"
              ></v-text-field>
              <v-textarea
                v-model="description"
                label="Ad description"
                hint="Hint text"
                required
                :error-messages="descriptionErrors"
                @input="[$v.description.$touch(), showUploadButton()]"
                @blur="$v.description.$touch()"
              ></v-textarea>
              <v-container
                ><v-row class="justify-space-between"
                  ><v-btn
                    :loading="loading"
                    :disabled="loading"
                    color="blue-grey"
                    class="white--text"
                    large
                    @click="loader = 'loading'"
                  >
                    Upload
                    <v-icon right dark> mdi-cloud-upload </v-icon>
                  </v-btn>
                  <v-switch v-model="promo" label="Add to promo?"></v-switch>
                  <v-btn
                    color="blue darken-4"
                    large
                    :dark="isValid"
                    :disabled="!isValid"
                    @click="createAd()"
                  >
                    Create
                  </v-btn>
                </v-row>
                <v-row>
                  <v-img
                    src="http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AFPSolidWhiteProfile-0101-8031.jpg?mtime=20161212113716"
                  ></v-img>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    title: { required, minLength: minLength(2) },
    description: { required, minLength: minLength(2) },
  },

  data: () => ({
    title: "",
    description: "",
    isValid: false,
    loader: null,
    loading: false,
    promo: true,
  }),
  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.minLength &&
        errors.push("Title must be at least 2 characters long");
      !this.$v.title.required && errors.push("Title is required");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.minLength &&
        errors.push("Description must be at least 2 characters long");
      !this.$v.description.required && errors.push("Description is required");
      return errors;
    },
  },

  methods: {
    showUploadButton() {
      this.$v.$invalid ? (this.isValid = false) : (this.isValid = true);
    },
    upload() {
      this.$v.$touch();
    },
    createAd() {
      const ad = {
        title: this.title,
        description: this.description,
        promo: this.promo,
      };
      console.log(ad);
    },
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
};
</script>
