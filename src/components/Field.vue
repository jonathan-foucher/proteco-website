<template>
  <div class="col q-px-md">
    <div class="row justify-center">
      <q-img :src="imagePath" height="40%" width="40%" />
    </div>
    <div class="row justify-center">
      <span class="field-text">{{ text }}</span>
    </div>
  </div>
</template>

<script setup>
const { imagePath, text } = defineProps({ imagePath: String, text: String })
</script>

<style scoped>
.field-text {
  font-size: 1.2em;
}
</style>
