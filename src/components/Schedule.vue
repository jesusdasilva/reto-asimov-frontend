<script setup>
import { inject } from "vue";
import { onMounted } from "vue"
import { toolbarStore, calendarStore, userStore } from "@/store"
import VDescription from "@/components/schedule/Description.vue"
import VDay from "@/components/schedule/Day.vue";
import VHour from "@/components/schedule/Hour.vue";

const { state, initCalendar } = inject("state");

onMounted(() => {
  toolbarStore.cancelButton.setLabel("Salir")
  toolbarStore.cancelButton.setShow(true) 
  toolbarStore.nextButton.setShow(false)

  initCalendar();
});

</script>

<template>
<v-description />
<v-day />
<v-hour v-if="state.isShowHours" />

</template>

<style>

</style>