<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  created() {
    if(new Date().getHours()>17)
      this.$q.dark.set(true);
    else
      this.$q.dark.set(false);
  }
}
</script>
