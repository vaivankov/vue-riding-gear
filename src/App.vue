<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-subheader>PAGES</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(link, i) in links" :key="i" :to="link.url">
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="isUserLoggedIn">
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title @click="logout">Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
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
          class="mr-2"
        >
          <v-icon dark left v-text="link.icon"></v-icon>
          {{ link.title }}
        </v-btn>
        <v-btn elevation="2" large text @click="logout" v-if="isUserLoggedIn">
          <v-icon dark left>mdi-exit-to-app</v-icon>
          Logout
        </v-btn>
        <v-btn elevation="2" class="ml-8" large text @click="changeTheme">
          <v-icon dark v-if="this.$vuetify.theme.dark">mdi-brightness-5</v-icon>
          <v-icon dark v-if="!this.$vuetify.theme.dark"
            >mdi-brightness-3</v-icon
          >
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
      >
        {{ error }}
        <template v-slot:action="{ attrs }">
          <v-btn dark text @click="closeError" v-bind="attrs"> Close </v-btn>
        </template>
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
    };
  },
  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    },
    logout() {
      this.$store.dispatch("userLogout");
      this.$router.currentRoute.name !== "home" && this.$router.push("/");
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          {
            title: "Orders",
            icon: "mdi-bookmark-check-outline",
            url: "/orders",
          },
          { title: "New ad", icon: "mdi-plus-box-multiple", url: "/new" },
          { title: "My ads", icon: "mdi-format-list-bulleted", url: "/list" },
        ];
      } else {
        return [
          { title: "Login", icon: "mdi-lock", url: "/login" },
          { title: "Registration", icon: "mdi-face", url: "/registration" },
        ];
      }
    },
  },
};
</script>

<style lang="scss">
.pointer {
  cursor: pointer;
  text-transform: uppercase;
}
</style>
