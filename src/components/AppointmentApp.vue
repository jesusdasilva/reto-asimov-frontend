<script setup>
import moment from "moment"
import { provide, ref, reactive, onMounted } from "vue"
import AppointmentCalendar from "@/components/AppointmentCalendar.vue"
import AppointmentTime from "@/components/AppointmentTime.vue"
import AppointmentForm from "@/components/AppointmentForm.vue"

const showForm = ref(false)
const state = reactive({
  startDate: new Date(),
  disabledDates: [{ weekdays: [1, 7] }, { days: [] }],
  data: {
    name: '',
    phone: '',
    email: '',
    time: '',
    date:moment(new Date()).format('YYYY-MM-DD'),
  }
})

onMounted(() => {
  console.log(moment(state.data.date).format('YYYY-MM-DD'))
})

function onDayClick(date) {
  setDataDate(date)
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
  state.data.date = id
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
