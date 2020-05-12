<template>
  <v-app>
    <NavBar id="nav" />
    <v-content id="contents" class="overflow-y-auto vh-100 mt-2 pt-5">
      <v-container fluid class="vh-100">
        <!-- <v-row align="center" justify="center">
          <v-col cols="12">
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6">
                    <span>Scheme</span>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>-->
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- Toggle dark mode switch -->
    <!-- <v-switch v-model="$vuetify.theme.dark" primary label="Dark" /> -->

    <!-- <v-footer :inset="footer.inset" app>
      <span class="px-4">SEED S.I.G &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar: NavBar
  },
  data: () => ({
    footer: {
      inset: true
    }
    //   drawers: "Permanent",
    //   primaryDrawer: {
    //     model: null,
    //     type: "permanent",
    //     clipped: true,
    //     floating: false,
    //     mini: false
    //   },
  })
};
</script>

<style lang="scss">
body {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  // #contents {
  //   height: 100vh;

  // }
}
</style>
