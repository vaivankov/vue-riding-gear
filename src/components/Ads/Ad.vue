<template>
  <v-container>
    <v-layout row v-if="!loading">
      <v-flex xs12>
        <v-card>
          <v-img :src="ad.fullImage" height="300px">
            <template v-slot:placeholder>
              <v-row class="align-center justify-center">
                <v-progress-circular
                  style="position: absolute; top: 50%; left: 50%"
                  indeterminate
                  color="blue darken-4"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-text>
            <h1 class="text--primary" v-text="ad.title"></h1>
            <p v-text="ad.price"></p>
            <p v-text="ad.description"></p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <add-edit-ad-modal v-if="isOwner" :ad="ad"></add-edit-ad-modal>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row v-else>
      <v-flex
        xs12
        class="d-flex align-center justify-center"
        style="height: calc(100vh - 100px)"
      >
        <v-progress-circular
          :size="100"
          color="blue darken-4"
          indeterminate
        ></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditAdModal from "./EditAdModal";
export default {
  props: ["id"],
  computed: {
    ad() {
      const id = this.id;
      return this.$store.getters.adById(id);
    },
    loading() {
      return this.$store.getters.loading;
    },
    isOwner() {
      return this.$store.getters.user
        ? this.ad.ownerId === this.$store.getters.user.id
        : false;
    },
  },
  components: {
    addEditAdModal: EditAdModal,
  },
};
</script>
