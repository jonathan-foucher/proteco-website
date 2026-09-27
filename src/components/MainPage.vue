<template>
  <div class="row q-pa-md justify-center items-center full-width text-no-wrap">
    <div class="col col-md-auto">
      <q-img :src="`${BASE_PATH}/images/proteco.png`" height="30vh" width="30vh" />
    </div>
    <div class="col col-md-auto">
      <div class="row q-px-md">
        <span class="title">PROTECO</span>
      </div>
      <div class="row justify-center">
        <span class="subtitle">SÉCURITÉ · FIABILITÉ · PERFORMANCE</span>
      </div>
    </div>
  </div>

  <div class="row q-pa-md justify-center items-center full-width">
    <template v-for="(field, index) in fields">
      <field :image-path="field.imagePath" :text="field.text" />
      <q-separator v-if="index < fields.length - 1" vertical spaced size="3px" color="grey-6" />
    </template>
  </div>

  <div class="row q-pa-md justify-center items-center full-width text-no-wrap blue-top-border">
    <span class="subtitle">INSTALLATION · MAINTENANCE · DÉPANAGE</span>
  </div>
</template>

<script setup>
import Field from '@/components/Field.vue'

const BASE_PATH = import.meta.env.VITE_BASE_PATH ?? ''

const fields = [
  {
    imagePath: `${BASE_PATH}/images/alarm.png`,
    text: 'ALARME',
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
.title {
  font-size: 10em;
}

.subtitle {
  font-size: 1.8em;
}

.blue-top-border {
  border-style: solid;
  border-width: 4px 0 0 0;
  border-color: royalblue;
}
</style>
