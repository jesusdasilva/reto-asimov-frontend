<script setup>
import { inject } from "vue";

const { state, onDayClick } = inject("state");

</script>

<template>
  <calendar
    is-expanded
    :dates="state.startDate"
    :disabled-dates="state.disabledDates"
    @dayclick="onDayClick"
  />
</template>

<style>
@import "v-calendar/dist/style.css";
</style>
