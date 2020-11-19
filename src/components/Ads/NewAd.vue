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
                label="Title"
                required
                :error-messages="titleErrors"
                @input="[$v.title.$touch(), showUploadButton()]"
                @blur="$v.title.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="previewImage"
                label="Preview image URL"
              ></v-text-field>
              <v-text-field
                v-model="fullImage"
                label="Full image URL"
              ></v-text-field>
              <v-text-field v-model="price" label="Price"></v-text-field>
              <v-textarea
                v-model="description"
                label="Description"
                hint="Hint text"
                required
                :error-messages="descriptionErrors"
                @input="[$v.description.$touch(), showUploadButton()]"
                @blur="$v.description.$touch()"
              ></v-textarea>
              <v-container
                ><v-row class="justify-space-between">
                  <v-btn
                    color="blue darken-4"
                    large
                    :dark="isValid"
                    :loading="loading"
                    :disabled="!isValid"
                    @click="createAd()"
                  >
                    Create
                  </v-btn>
                  <v-switch v-model="promo" label="Add to promo?"></v-switch>
                </v-row>
                <v-row>
                  <v-img :src="previewImage"></v-img>
                  <v-img :src="fullImage"></v-img>
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
    price: "",
    description: "",
    isValid: false,
    loader: null,
    promo: false,
    previewImage: "",
    fullImage: "",
  }),
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
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
        price: "$" + this.price,
        description: this.description,
        promo: this.promo,
        previewImage: this.previewImage,
        fullImage: this.fullImage,
      };
      this.$store
        .dispatch("createAd", ad)
        .then(() => this.$router.push("/list"))
        .catch((err) => console.error(err.message));
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
