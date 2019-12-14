<template>
  <v-app id="app">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="30"
        />

      <h3>Transfer.sh</h3>
      </div>

      <v-spacer></v-spacer>
      <v-avatar color="#A9D3FF">
        <span class="white--text headline">JZ</span>
      </v-avatar>
    </v-app-bar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import Leonard from './components/Leonard';

export default {
  name: 'App',

  // components: {
  //   Leonard,
  // },

  data: () => ({
    //
  }),
};
</script>
