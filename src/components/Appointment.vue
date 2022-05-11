<script setup>
import moment from "moment";
import { provide, ref, reactive, onMounted } from "vue";
import VWelcome from "@/components/Welcome.vue";
import VRegistration from "@/components/Registration.vue";
import VSchedule from "@/components/Schedule.vue";
import VToolbar from "@/components/Toolbar.vue";
import VDone from "@/components/Done.vue";
import { toolbarStore, userStore, calendarStore } from "@/store";
import axios from "axios";

const URL_BASE = "http://localhost:5000";
const API_V1_RESERVATION = "/api/v1/reservation";
const API_V1_RESERVATION_DISABLED_DATES =
  API_V1_RESERVATION + "/disabled-dates";
const httpClient = axios.create({
  baseURL: URL_BASE,
  headers: {
    "Content-Type": "application/json"
  }
});

onMounted(() => {
  // console.log(moment(state.userData.date).format("YYYY-MM-DD"));
});

async function setDesabledDayByMonth(_month) {
  const params = { _month };
  const { data: {data} } = await httpClient(API_V1_RESERVATION_DISABLED_DATES, {
    params
  });
  data.forEach(e => {
    console.log(e.r_date)
    calendarStore.disabledDates[1].days.push(parseInt(moment(e.r_date).format('DD')));
  });

}

function onDayClick(date) {
  setDataDate(date);
  setDisabledDay(date);
}

async function onTimeClick(time) {
  userStore.setHour(time);
  (await saveReservation()) && toolbarStore.step.next();
}

async function saveReservation() {
  const params = {
    rFirstName: userStore.firstName,
    rLastName: userStore.lastName,
    rEmail: userStore.email,
    rPhone: userStore.phone,
    rDate: userStore.date,
    rHour: userStore.hour
  };
  console.log(params);
  return await httpClient.post(
    "http://localhost:3000/api/v1/reservation/",
    params
  );
}

function changeShowForm() {
  // showForm.value = !showForm.value;
}

function setDisabledDay({ day }) {
  // state.disabledDates[1].days.push(day);
}

function onSubmit() {
  changeShowForm();
}

function setDataDate({ id }) {
  // state.userData.date = id;
}

function setDataTime(time) {
  // state.userData.hour = time;
}

provide("state", {
  // state,
  onDayClick,
  onTimeClick,
  changeShowForm,
  onSubmit,
  setDesabledDayByMonth
});
</script>

<template>
  <div class="container">
    <v-welcome v-if="toolbarStore.step.current === 0" />
    <v-registration v-if="toolbarStore.step.current === 1" />
    <v-schedule v-if="toolbarStore.step.current === 2" />
    <v-done v-if="toolbarStore.step.current === 3" />
    <v-toolbar />
  </div>
</template>

<style></style>
