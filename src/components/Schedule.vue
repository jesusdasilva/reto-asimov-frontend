<script setup>
import { inject } from "vue";
import moment from "moment";
import { onMounted } from "vue"
import { toolbarStore, calendarStore, userStore } from "@/store"
import VDescription from "@/components/schedule/Description.vue"
import VDay from "@/components/schedule/Day.vue";
import VHour from "@/components/schedule/Hour.vue";

const { setDesabledDayByMonth } = inject("state");

onMounted(() => {
  toolbarStore.cancelButton.setLabel("Salir")
  toolbarStore.cancelButton.setShow(true) 
  toolbarStore.nextButton.setShow(false)

  calendarStore.setStart(new Date());
  calendarStore.setDisabledDates([{ weekdays: [1, 7] }, { days: [25] }]);

  userStore.setDate(moment(new Date()).format("YYYY-MM-DD"))
  setDesabledDayByMonth(moment(new Date()).format("MM"))
console.log(calendarStore.disabledDates)
});
</script>

<template>
<v-description />
<v-day />
<v-hour />

</template>


<style>

</style>