<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 class="d-flex justify-center mt-10">
        <v-card elevation="10" shaped width="600">
          <v-toolbar
            class="d-flex align-center"
            color="blue darken-4"
            dark
            extended
            extension-height="30"
          >
            <v-toolbar-title class="display-1">Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text
            ><form>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Name"
                prepend-icon="mdi-face"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                prepend-icon="mdi-lock"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>

              <v-card-actions class="justify-end">
                <v-btn color="blue darken-4" dark @click="submit" large>
                  Login
                </v-btn>
              </v-card-actions>
            </form></v-card-text
          >
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, minLength: minLength(2) },
    email: { required, email },
  },

  data: () => ({
    name: "",
    email: "",
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("Name must be at least 2 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
  },
};
</script>
