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
              v-for="ad in ads"
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
      ads: [
        {
          title: "Airflame Gloss",
          description: "$375",
          promo: false,
          previewImage:
            "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AFPSolidWhiteProfile-0101-8031.jpg?mtime=20161212113716",
          fullImage:
            "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/IconAirframeProGlossWhiteHelmetMainFeature.jpg?mtime=20161212113946",
          id: "121980921",
        },
        {
          title: "Airflame Construct",
          description: "$395",
          promo: true,
          previewImage:
            "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/_r300/AFPConstructBlackProfile-0101-8010.jpg?mtime=20160330162033",
          fullImage:
            "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/IconAirframeProConstructBlackMainFeature.jpg?mtime=20160428173230",
          id: "121980922",
        },
        {
          title: "Airflame Quicksilver",
          description: "$400",
          promo: true,
          previewImage:
            "http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_r300/AirframeProQuicksilverProfile.jpg?mtime=20170801103340",
          fullImage:
            "http://s3-us-west-2.amazonaws.com/iconmotosports/videos/poster/_wFull/AirframeProQuicksilverMainImage.jpg?mtime=20170822092522",
          id: "121980923",
        },
      ],
    };
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
