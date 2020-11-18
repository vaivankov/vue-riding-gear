<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card
          class="elevation-5 mb-5 py-2 px-4"
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-layout row>
            <v-flex xs4>
              <v-img :src="ad.previewImage" width="100%"></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary" v-text="ad.title"></h2>
                <p v-text="ad.description"></p>
              </v-card-text>
              <v-card-actions>
                <v-btn class="info" :to="'/ad/' + ad.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
