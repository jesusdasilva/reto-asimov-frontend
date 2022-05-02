<script setup>
import { inject, reactive } from "vue";

const { state, onDayClick } = inject("state");

console.log('state.startDate',state.startDate)
const attr = [
  {
    key: "tomorrow",
    highlight: "red",
    dates: state.startDate
  }
]
</script>

<template>
  <calendar
    is-expanded
    :min-date="state.startDate"
    :from-date="new Date(state.startDate)"
    :disabled-dates="state.disabledDates"
    @dayclick="onDayClick"
    :attributes="attr"    
  />
</template>

<style>
@import "v-calendar/dist/style.css";
</style>
