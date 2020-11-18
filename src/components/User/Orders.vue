<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list-item v-for="order of orders" :key="order.id">
          <v-list-item-action>
            <v-checkbox
              @change="markDone(order)"
              :input-value="order.done"
              :disabled="order.done"
              color="primary"
            ></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="order.name"></v-list-item-title>
            <v-list-item-subtitle v-text="order.phone"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn :to="'/ad/' + order.adId" class="primary">Open</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: "95629185437",
          name: "Joe Mao",
          phone: "9(921)121-12-12",
          adId: "121980922",
          done: false,
        },
      ],
    };
  },
  methods: {
    markDone(order) {
      order.done = true;
    },
  },
};
</script>
