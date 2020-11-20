<template>
  <div class="text-center">
    <v-dialog v-model="modal" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="primary mr-2" raised dark v-bind="attrs" v-on="on"
          >Buy</v-btn
        >
      </template>
      <v-card>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <v-card-title>
                <h2 class="text--primary">Leave your contacts</h2>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-text>
                <v-text-field
                  name="name"
                  label="Name"
                  type="text"
                  v-model="name"
                ></v-text-field>
                <v-text-field
                  name="phone"
                  label="Phone"
                  type="text"
                  v-model="phone"
                ></v-text-field>
                <v-textarea
                  name="additional"
                  label="Additional information"
                  type="text"
                  v-model="additional"
                ></v-textarea>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="onClose" :disabled="localLoading"
                  >Close</v-btn
                >
                <v-btn
                  class="success"
                  text
                  @click="onSend"
                  :disabled="localLoading"
                  :loading="localLoading"
                  >Send</v-btn
                >
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["ad"],
  data() {
    return {
      modal: false,
      name: "",
      phone: "",
      additional: "",
      localLoading: false,
    };
  },
  methods: {
    onClose() {
      this.name = "";
      this.phone = "";
      this.additional = "";
      this.modal = false;
    },
    onSend() {
      !this.$store.getters.user && this.$router.push("/login?loginError=true");

      this.localLoading = true;

      this.$store
        .dispatch("createOrder", {
          name: this.name !== "" ? this.name : "",
          phone: this.phone !== "" ? this.phone : "",
          additional: this.additional !== "" ? this.additional : "",
          adId: this.ad.id,
          userId: this.$store.getters.user.id,
        })
        .finally(() => {
          this.localLoading = false;
          this.modal = false;
        });
    },
  },
};
</script>
