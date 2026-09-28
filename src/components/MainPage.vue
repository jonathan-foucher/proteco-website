<template>
  <div class="row q-pa-md justify-center full-width-row text-no-wrap">
    <div class="col col-3 col-md-1">
      <q-img :src="`${BASE_PATH}/images/proteco.png`" />
    </div>
    <div class="col col-12 col-md-3">
      <div class="row q-px-md q-pt-md justify-center">
        <span class="text-h2">PROTECO</span>
      </div>
      <div class="row q-px-md justify-center">
        <span class="text-h7">SÉCURITÉ · FIABILITÉ · PERFORMANCE</span>
      </div>
    </div>
  </div>

  <div class="row q-py-md justify-center full-width-row">
    <template v-for="(field, index) in fields">
      <field :image-path="field.imagePath" :text="field.text" />
      <q-separator v-if="index < fields.length - 1" vertical spaced size="2px" color="grey-6" />
    </template>
  </div>

  <div class="row q-pa-md justify-center full-width-row text-no-wrap blue-top-border">
    <span class="text-h7">INSTALLATION · MAINTENANCE · DÉPANAGE</span>
  </div>
</template>

<script setup>
import Field from '@/components/Field.vue'

const BASE_PATH = import.meta.env.VITE_BASE_PATH ?? ''

const fields = [
  {
    imagePath: `${BASE_PATH}/images/alarm.png`,
    text: "SYSTÈME D'ALARME",
  },
  {
    imagePath: `${BASE_PATH}/images/camera.png`,
    text: 'VIDÉOSURVEILLANCE',
  },
  {
    imagePath: `${BASE_PATH}/images/access.png`,
    text: "CONTRÔLE D'ACCÈS",
  },
  {
    imagePath: `${BASE_PATH}/images/cable.png`,
    text: 'CABLÂGE INFORMATIQUE',
  },
]
</script>

<style scoped>
.blue-top-border {
  border-style: solid;
  border-width: 4px 0 0 0;
  border-color: royalblue;
}
</style>
