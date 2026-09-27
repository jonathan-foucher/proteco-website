<script setup>
import MainPage from './components/MainPage.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <q-layout class="noselect">
    <q-page-container>
      <q-page>
        <div class="row main-page">
          <main-page />
        </div>
        <div class="row footer">
          <app-footer />
        </div>
      </q-page>
    </q-page-container>
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

<style scoped>
.main-page {
  height: 75vh;
}

.footer {
  height: 25vh;
}
</style>
