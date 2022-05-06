<script setup>
import { inject} from "vue";
import { calendarStore, userStore } from "@/store";

const { onDayClick } = inject("state");

// let attrs = reactive([
//   {
//     key: "selected",
//     highlight: true,
//     dates: state.data.date
//   }
// ])

</script>

<template>
  <calendar
    is-expanded
    :min-date="calendarStore.start"
    :disabled-dates="calendarStore.disabledDates"
    @dayclick="onDayClick"
    v-model="userStore.date"
  />
</template>

<style>
@import "v-calendar/dist/style.css";
</style>
