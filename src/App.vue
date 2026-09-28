<script setup>
import MainPage from '@/components/MainPage.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <q-layout class="noselect">
    <q-page-container>
      <q-page>
        <div class="row">
          <main-page />
        </div>
        <div class="row">
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

.full-width-row {
  width: 100%;
  max-width: 100%;
}
</style>
