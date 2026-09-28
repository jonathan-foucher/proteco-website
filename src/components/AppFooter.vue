<template>
  <div class="row q-pa-md bg-dark justify-center items-center full-width-row text-white text-no-wrap">
    <div class="col q-px-md">
      <div class="row q-pa-sm items-center">
        <div class="col-2 col-md-2">
          <q-icon name="phone" size="4vw" color="primary" />
        </div>
        <div class="col-6 col-md-4 q-pl-md">
          <span class="info-text copy-pointer" @click="copyText(PHONE_NUMBER, 'Numéro copié')">{{ PHONE_NUMBER }}</span>
        </div>
      </div>

      <div class="row q-pa-sm items-center">
        <div class="col-2 col-md-2">
          <q-icon name="mail" size="4vw" color="primary" />
        </div>
        <div class="col-6 col-md-4 q-pl-md">
          <span class="info-text copy-pointer" @click="openMail(EMAIL_ADDRESS)">{{ EMAIL_ADDRESS }}</span>
        </div>
      </div>
    </div>

    <q-separator vertical spaced color="white" />

    <div class="col q-px-md">
      <div class="row q-pa-sm items-center">
        <div class="col-2 col-md-2">
          <q-icon name="location_on" size="4vw" color="primary" />
        </div>
        <div class="col-6 col-md-4 q-pl-md">
          <div class="row">
            <span class="info-text">Votre secteur d'intervention</span>
          </div>
          <div class="row">
            <span class="info-text">Déplacement rapide</span>
          </div>
        </div>
      </div>

      <div class="row q-pa-sm items-center">
        <div class="col-2 col-md-2">
          <q-icon name="gpp_good" size="4vw" color="primary" />
        </div>
        <div class="col-6 col-md-4 q-pl-md">
          <div class="row">
            <span class="info-text">Devis gratuit</span>
          </div>
          <div class="row">
            <span class="info-text">Intervention soignée</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER
const EMAIL_ADDRESS = import.meta.env.VITE_EMAIL_ADDRESS

const dismissNotif = ref(null)

const { notify } = useQuasar()

const copyText = async (text, message) => {
  await navigator.clipboard.writeText(text)

  if (dismissNotif.value !== null) {
    dismissNotif.value()
  }

  dismissNotif.value = notify({
    position: 'bottom-right',
    timeout: 2500,
    color: 'blue',
    group: false,
    textColor: 'black',
    message,
  })
}

const openMail = (mailAddress) => {
  copyText(mailAddress, 'Adresse email copiée')
  window.location.href = `mailto:${mailAddress}`
}
</script>

<style scoped>
.copy-pointer {
  cursor: copy;
}

.info-text {
  font-size: 2vw;
}
</style>
