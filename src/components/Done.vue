<script setup>
import { onMounted } from "vue";
import { toolbarStore } from "@/store";
import VDetail from "@/components/done/Detail.vue";
import VTip from "@/components/done/tip.vue";

onMounted(() => {
  toolbarStore.cancelButton.setShow(false);
  toolbarStore.nextButton.setLabel('Terminar');
  toolbarStore.nextButton.setShow(true);
  toolbarStore.nextButton.setDisable(false);
});
</script>

<template>

<v-tip />
<v-detail />

</template>

<style></style>
