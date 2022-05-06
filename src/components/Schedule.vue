<script setup>
import moment from "moment";
import { onMounted } from "vue"
import { toolbarStore, calendarStore, userStore } from "@/store"
import VDay from "@/components/schedule/Day.vue";
import VHour from "@/components/schedule/Hour.vue";

onMounted(() => {
  toolbarStore.backButton.setLabel("Registro")
  toolbarStore.backButton.setShow(true)
  toolbarStore.cancelButton.setLabel("Salir")
  toolbarStore.cancelButton.setShow(true) 
  toolbarStore.nextButton.setShow(false)

  calendarStore.setStart(new Date());
  calendarStore.setDisabledDates([{ weekdays: [1, 7] }, { days: [] }]);

  userStore.setDate(moment(new Date()).format("YYYY-MM-DD"))

  console.log(userStore.getData())
});
</script>

<template>

<v-day />
<v-hour />

</template>


<style>

</style>