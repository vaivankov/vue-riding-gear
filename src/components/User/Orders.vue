<template>
  <v-container>
    <v-layout row>
      <v-flex
        xs12
        sm6
        offset-sm3
        v-if="loading"
        class="d-flex align-center justify-center"
        style="height: calc(100vh - 100px)"
      >
        <v-progress-circular
          :size="100"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0">
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
            <v-btn :to="'/ad/' + order.adId" dark class="primary"
              >Open</v-btn
            >
          </v-list-item-action>
        </v-list-item>
      </v-flex>
      <v-flex xs12 class="text-xs-center" v-else>
        <h1 class="text--secondary">You have no orders</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    orders() {
      return this.$store.getters.orders;
    },
  },
  methods: {
    markDone(order) {
      this.$store.dispatch("markOrderDone", order.orderId).then(() => {
        order.done = true;
      });
    },
  },
  created() {
    this.$store.dispatch("fetchOrders");
  },
};
</script>
