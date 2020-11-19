<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(link, i) in links" :key="i" :to="link.url">
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="blue darken-4">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ride gear</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-btn
          text
          large
          elevation="2"
          v-for="link in links"
          :key="link.id"
          :to="link.url"
          class="app-header__link"
        >
          <v-icon dark left v-text="link.icon"></v-icon>
          {{ link.title }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <template v-if="error"
      ><v-snackbar
        multi-line
        timeout="5000"
        color="error"
        @input="closeError"
        :value="true"
        class="d-flex"
      >
        {{ error }}
        <v-btn dark text @click="closeError"> Close </v-btn>
      </v-snackbar></template
    >
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      selectedItem: 1,
      links: [
        { title: "Login", icon: "mdi-lock", url: "/login" },
        { title: "Registration", icon: "mdi-face", url: "/registration" },
        { title: "Orders", icon: "mdi-bookmark-check-outline", url: "/orders" },
        { title: "New ad", icon: "mdi-plus-box-multiple", url: "/new" },
        { title: "My ads", icon: "mdi-format-list-bulleted", url: "/list" },
      ],
    };
  },
  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    },
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
};
</script>

<style lang="scss">
.app-header__link:not(:last-of-type) {
  margin-right: 10px;
}
.pointer {
  cursor: pointer;
  text-transform: uppercase;
}
</style>
