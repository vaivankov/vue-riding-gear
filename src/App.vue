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

      <v-toolbar-title>Ride gear</v-toolbar-title>

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
        <v-row>
          <v-col v-for="n in 24" :key="n" cols="4">
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
};
</script>

<style lang="scss">
.app-header__link:not(:last-of-type) {
  margin-right: 10px;
}
</style>
