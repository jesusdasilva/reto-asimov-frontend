<script setup>
import { onMounted } from "vue"
import { toolbarStore, userStore } from "@/store"

onMounted(() => {
  toolbarStore.backButton.setShow(false)
  toolbarStore.cancelButton.setShow(false) 
  toolbarStore.nextButton.setLabel("Agendar")
  toolbarStore.nextButton.setShow(true)

  userStore.reset()
})
</script>

<template>
  Bienvenidos al sistema de Citas
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus similique nemo maiores, earum ipsum rerum nulla magnam minus aut eos aliquam dolorum dolores sint odit eum! Explicabo, autem eligendi.
</template>


<style>

</style>