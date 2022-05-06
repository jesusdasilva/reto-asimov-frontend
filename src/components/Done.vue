<script setup>
import { onMounted } from "vue";
import { toolbarStore } from "@/store";
import VDetail from "@/components/done/Detail.vue";
import VTip from "@/components/done/tip.vue";

onMounted(() => {
  toolbarStore.backButton.setShow(false);
  toolbarStore.cancelButton.setShow(false);
  toolbarStore.nextButton.setShow(true);
});
</script>

<template>

<v-tip />
<v-detail />

</template>

<style></style>
