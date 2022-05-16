<script setup>
import { onMounted } from "vue";
import { toolbarStore, userStore } from "@/store";
import VRequired from "@/components/registration/required.vue";
import VForm from "@/components/registration/Form.vue";

onMounted(() => {
  // Config toolbar
  toolbarStore.cancelButton.setLabel("Salir");
  toolbarStore.cancelButton.setShow(true);
  toolbarStore.nextButton.setLabel("Horarios");
  toolbarStore.nextButton.setShow(true);
  toolbarStore.nextButton.setDisable(true);

  // Reset userStore
  userStore.reset();
});
</script>

<template>
  <v-required />
  <v-form />
</template>

<style scoped></style>
