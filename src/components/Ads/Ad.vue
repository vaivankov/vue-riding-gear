<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img
            src="http://s3-us-west-2.amazonaws.com/iconmotosports/gear/helmets/_hero/IconAirframeProGlossWhiteHelmetMainFeature.jpg?mtime=20161212113946"
            height="300px"
          ></v-img>
          <v-card-text>
            <h1 class="text--primary">Lorem</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, ipsa?
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" text>Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
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
