<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          {{ $route.meta.title }}
        </q-toolbar-title>
        <q-btn :icon="$q.dark.isActive?'brightness_5':'brightness_3'" round flat @click="$q.dark.toggle()"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TitleLayout extends Vue {
}
</script>
