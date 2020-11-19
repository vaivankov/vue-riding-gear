<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img :src="ad.fullImage" height="300px"></v-img>
          <v-card-text>
            <h1 class="text--primary" v-text="ad.title"></h1>
            <p v-text="ad.price"></p>
            <p v-text="ad.description"></p>
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
  props: ["id"],
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ad() {
      const id = this.id;
      return this.$store.getters.adById(id);
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>
