<script setup>
import { inject, reactive } from "vue";

const { state, onDayClick } = inject("state");

</script>

<template>
  <calendar
    is-expanded
    :min-date="state.startDate"
    :from-date="new Date(state.startDate)"
    :disabled-dates="state.disabledDates"
    @dayclick="onDayClick"
  />
</template>

<style>
@import "v-calendar/dist/style.css";
</style>
