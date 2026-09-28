<template>
  <div class="col col-2 col-sm-6 col-md-2 q-pa-sm flex justify-center text-no-wrap">
    <div class="column justify-center items-center">
      <q-img class="field-image" :src="imagePath" />
      <span class="field-text text-center q-mt-sm">{{ text }}</span>
    </div>
  </div>
</template>

<script setup>
const { imagePath, text } = defineProps({ imagePath: String, text: String })
</script>

<style scoped>
.field-text {
  font-size: 1.3vw;
}

.field-image {
  width: 12vw;
}
</style>
