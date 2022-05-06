<script setup>
import { onMounted } from "vue";
import { toolbarStore, userStore } from "@/store";
import VRequired from "@/components/registration/required.vue";
import VForm from "@/components/registration/Form.vue";

onMounted(() => {
  toolbarStore.backButton.setLabel("Instrucciones");
  toolbarStore.backButton.setShow(true);
  toolbarStore.cancelButton.setLabel("Salir");
  toolbarStore.cancelButton.setShow(true);
  toolbarStore.nextButton.setLabel("Agendar");
  toolbarStore.nextButton.setShow(false);

  userStore.reset();
});
</script>

<template>
  <v-required />
  <v-form />
</template>

<style scoped></style>
