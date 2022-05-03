<script setup>
import moment from "moment"
import { provide, ref, reactive, onMounted } from "vue"
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
    date: moment('2022-01-05 00:00:00').format()
  }
})

// onMounted(() => {
//   state.data.date = moment('2022-01-05 00:00:00').format()
// })

function onDayClick(date) {
  setDataDate(date)
  console.log('state.startDate',state.data.date)
  // setDisabledDay(date)
}

function onTimeClick(time) {
  setDataTime(time)
  changeShowForm ()
}

function changeShowForm () {
  showForm.value = !showForm.value
}

function setDisabledDay({day}) {
  state.disabledDates[1].days.push(day)
}

function onSubmit() {
  changeShowForm()
}

function setDataDate({id}){
  state.data.date = moment(id).format('YYYY-MM-DD')
}

function setDataTime(time) {
  state.data.time = time
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
