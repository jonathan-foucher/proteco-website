<script setup>
import MainPage from './components/MainPage.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <q-layout class="noselect">
    <q-page-container>
      <q-page class="q-pa-md">
        <main-page />
      </q-page>
    </q-page-container>

    <q-footer elevated>
      <app-footer />
    </q-footer>
  </q-layout>
</template>

<style>
.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
