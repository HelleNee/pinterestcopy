<template>
  <v-app-bar color="white">
    <v-icon large color="red">mdi-pinterest</v-icon>
    <router-link to="/"><v-btn rounded dark>홈</v-btn></router-link>
    <router-link to="/following"><v-btn rounded>팔로잉</v-btn></router-link>
    <v-text-field
      placeholder="검색"
      prepend-inner-icon="mdi-magnify"
      filled
      rounded
      dense
      style="top: 14px"
      v-model="search"
      @keyup.enter="enter"
    ></v-text-field>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-chat-processing</v-icon>
    </v-btn>
    <v-btn icon
      ><v-avatar size="30">
        <v-img
          src="https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1"
        ></v-img></v-avatar
    ></v-btn>
    <v-btn icon>
      <v-icon>mdi-chevron-down</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'AppBar',
    data() {
      return {
        search: '',
      };
    },
    methods: {
      enter() {
        this.$store.commit('setSearchText', this.search);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
