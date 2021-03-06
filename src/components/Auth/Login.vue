<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 class="d-flex justify-center mt-10">
        <v-card elevation="10" shaped width="600">
          <v-toolbar
            class="d-flex align-center"
            color="primary"
            dark
            extended
            extension-height="30"
          >
            <v-toolbar-title class="display-1">Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form class="mt-5">
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                prepend-icon="mdi-face"
                label="E-mail"
                required
                @input="[$v.email.$touch(), showSubmitButton()]"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field
                required
                hint="At least 6 characters"
                prepend-icon="mdi-lock"
                label="Password"
                :error-messages="passwordErrors"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                @input="[$v.password.$touch(), showSubmitButton()]"
                @blur="$v.password.$touch()"
                v-model="password"
              ></v-text-field>

              <v-card-actions class="justify-end mt-3">
                <v-btn
                  color="primary"
                  large
                  :dark="!loading && isValid"
                  :loading="loading"
                  :disabled="!isValid || loading"
                  @click="submit"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
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
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },
  data: () => ({
    email: "",
    password: "",
    showPassword: false,
    isValid: false,
  }),
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters long");
      !this.$v.password.required && errors.push("Password is required.");
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
    showSubmitButton() {
      this.$v.$invalid ? (this.isValid = false) : (this.isValid = true);
    },
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password,
        };

        this.$store
          .dispatch("userLogin", user)
          .then(() => this.$router.push("/"))
          .catch((err) => console.error(err.message));
      }
    },
  },
  created() {
    if (this.$route.query["loginError"]) {
      this.$store.dispatch("setError", "Please log in to access this page.");
    }
  },
};
</script>
