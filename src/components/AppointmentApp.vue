<script setup>
import moment from "moment";
import { provide, ref, reactive, onMounted } from "vue";
import AppointmentCalendar from "@/components/AppointmentCalendar.vue";
import AppointmentTime from "@/components/AppointmentTime.vue";
import AppointmentForm from "@/components/AppointmentForm.vue";
import AppointmentUserData from "@/components/AppointmentUserData.vue";
import AppointmentWelcome from "@/components/AppointmentWelcome.vue";
import Toolbar from "@/components/Toolbar.vue";
import { toolbarStore } from "@/store";

// const showForm = ref(false);
// let step = ref(0)

let state = reactive({
  startDate: new Date(),
  disabledDates: [{ weekdays: [1, 7] }, { days: [] }],
  userData: {
    name: "",
    phone: "",
    email: "",
    time: "",
    date: moment(new Date()).format("YYYY-MM-DD")
  },
  // toolbarData: {
  //   backButton: {
  //     label: "Regresar",
  //     show: false
  //   },
  //   cancelButton: {
  //     label: "Salir",
  //     show: false
  //   },
  //   nextButton: {
  //     label: "Siguiente",
  //     show: true
  //   }
  //   // step: 0
  // }
});

onMounted(() => {
  console.log(moment(state.userData.date).format("YYYY-MM-DD"));
});

function onDayClick(date) {
  setDataDate(date);
  // setDisabledDay(date)
}

function onTimeClick(time) {
  setDataTime(time);
  changeShowForm();
}

function changeShowForm() {
  showForm.value = !showForm.value;
}

function setDisabledDay({ day }) {
  state.disabledDates[1].days.push(day);
}

function onSubmit() {
  changeShowForm();
}

function setDataDate({ id }) {
  state.userData.date = id;
}

function setDataTime(time) {
  state.userData.time = time;
}

provide("state", {
  state,
  onDayClick,
  onTimeClick,
  changeShowForm,
  onSubmit
});

// provide("step", step);
</script>

<template>
  <div class="container">
    <appointment-welcome v-if="toolbarStore.step.current === 0" />
    <appointment-user-data v-if="toolbarStore.step.current === 1" />
    <appointment-calendar v-if="toolbarStore.step.current === 2" />

    <!-- <appointment-form v-if="showForm" /> -->
    <!-- <appointment-time v-if="!showForm" /> -->
    <toolbar />
  </div>
</template>

<style></style>
