<script setup>
import { inject, ref } from "vue";
import { calendarStore, userStore } from "@/store";

const { onDayClick, initCalendar } = inject("state");
const cCalendar = ref(null);

// Change month event
function onChangeMonth(){
  const { month, year } = cCalendar.value.pages[0]
  const fromDate = new Date(`${year}-${month}-01`);

  // Reset calendar
  initCalendar(fromDate);
}

</script>

<template>
  <calendar
    ref="cCalendar"
    is-expanded
    :min-date="calendarStore.start"
    :disabled-dates="calendarStore.disabledDays"
    @dayclick="onDayClick"
    v-model="userStore.date"
    @transition-start="onChangeMonth"
  />
</template>

<style>
@import "v-calendar/dist/style.css";
</style>
