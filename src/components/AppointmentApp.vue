<script setup>
import moment from "moment"
import { provide, ref, reactive } from "vue"
import AppointmentCalendar from "@/components/AppointmentCalendar.vue"
import AppointmentTime from "@/components/AppointmentTime.vue"
import AppointmentForm from "@/components/AppointmentForm.vue"

const showForm = ref(false)
const state = reactive({
  startDate: moment('2022-01-05 00:00:00').format(),
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
  console.log('date.date',date.date)
  console.log('date',date)
  setDisabledDay(date.day)
}

function onTimeClick(time) {
  setDisabledTime(time.time)
}

function changeShowForm() {
  // showForm.value = !showForm.value
  state.startDate = moment('2022-05-10 00:00:00').format()
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
