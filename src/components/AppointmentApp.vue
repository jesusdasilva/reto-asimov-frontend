<script setup>
import { provide, ref, reactive } from "vue"
import AppointmentCalendar from "@/components/AppointmentCalendar.vue"
import AppointmentTime from "@/components/AppointmentTime.vue"
import AppointmentForm from "@/components/AppointmentForm.vue"

const showForm = ref(false)
const state = reactive({
  startDate: new Date("Apr 30, 2000"),
  disabledDates: [{ weekdays: [1, 7] }, { days: [] }],
  officeHours: {
    start: "9:00",
    end: "18:00"
  },
  data: {
    name: "",
    phone: "",
    email: "",
    time: "",
    date: ""
  }
})

function onDayClick(date) {
  setDisabledDay(date.day)
}

function onTimeClick(time) {
  setDisabledTime(time.time)
}

function changeShowForm() {
  showForm.value = !showForm.value
}

function setDisabledDay(day) {
  state.disabledDates[1].days.push(day)
}

function onSubmit() {
//   console.log(state.data)
  changeShowForm()
}

provide("state", {
  state,
  onDayClick,
  onTimeClick,
  changeShowForm,
  onSubmit
})
</script>

<template>
  <div class="container">
    <appointment-calendar v-if="!showForm" />
    <appointment-time v-if="!showForm" />
    <appointment-form v-if="showForm" />
  </div>
</template>

<style></style>
