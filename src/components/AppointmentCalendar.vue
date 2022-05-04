<script setup>
import { inject} from "vue";

const { state, onDayClick } = inject("state");

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
    :min-date="state.startDate"
    :disabled-dates="state.disabledDates"
    @dayclick="onDayClick"
    v-model="state.data.date"
  />
</template>

<style>
@import "v-calendar/dist/style.css";
</style>
