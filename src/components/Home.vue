<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-sheet v-if="loading"
            ><v-skeleton-loader light type="image"> </v-skeleton-loader
          ></v-sheet>
          <v-carousel v-else>
            <v-carousel-item
              v-for="ad in promoAds"
              :to="'/ad/' + ad.id"
              :key="ad.id"
              :src="ad.fullImage"
            >
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad of ads" :key="ad.id">
          <v-card>
            <v-sheet v-if="loading">
              <v-skeleton-loader
                class="mx-auto"
                full-width
                type="image, card-heading, actions"
              >
              </v-skeleton-loader>
            </v-sheet>
            <div v-else>
              <v-img :src="ad.previewImage" height="200px"> </v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ ad.title }}</h3>
                  <div>{{ ad.description }}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
                <v-btn raised class="primary">Buy</v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    promoAds() {
      return this.$store.getters.promoAds;
    },
    ads() {
      return this.$store.getters.ads;
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>

<style scoped>
.link {
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
