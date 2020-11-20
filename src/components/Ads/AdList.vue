<template>
  <v-container>
    <v-layout row v-if="!loading && myAds.length !== 0">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card
          class="elevation-5 mb-5 py-2 px-4"
          v-for="ad in myAds"
          :key="ad.id"
        >
          <v-layout row>
            <v-flex xs4>
              <v-img :src="ad.previewImage" width="100%"></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary" v-text="ad.title"></h2>
                <p v-text="ad.price"></p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" dark :to="'/ad/' + ad.id"
                  >Open</v-btn
                >
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row v-else-if="!loading && myAds.length === 0">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">You have no ads</h1>
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
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds() {
      return this.$store.getters.myAds;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>
