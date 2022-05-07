<script setup>
import { onMounted } from "vue"
import { toolbarStore, userStore } from "@/store"
import VInformation from "@/components/welcome/Information.vue"

onMounted(() => {
  toolbarStore.cancelButton.setShow(false) 
  toolbarStore.nextButton.setLabel("Agendar")
  toolbarStore.nextButton.setShow(true)
  toolbarStore.nextButton.setDisable(false)

  userStore.reset()
})
</script>

<template>
<v-information />
</template>


<style>

</style>