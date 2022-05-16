<script setup>
import moment from "moment";
import { provide, reactive } from "vue";
import VWelcome from "@/components/Welcome.vue";
import VRegistration from "@/components/Registration.vue";
import VSchedule from "@/components/Schedule.vue";
import VToolbar from "@/components/Toolbar.vue";
import VDone from "@/components/Done.vue";
import { toolbarStore, userStore, calendarStore, hourStore } from "@/store";
import axios from "axios";

// API
const URL_BASE = "http://localhost:5000";
const API_V1_RESERVATION = "/api/v1/reservation";
const API_V1_RESERVATION_DISABLED_DAYS = API_V1_RESERVATION + "/disabled-days";
const API_V1_RESERVATION_DISABLED_HOURS = API_V1_RESERVATION + "/disabled-hours";
const API_V1_RESERVATION_ACTIVE = API_V1_RESERVATION + "/active";
const httpClient = axios.create({
  baseURL: URL_BASE,
  headers: { "Content-Type": "application/json" }
});

// Buttons Hours
const state = reactive({ isShowHours: false });

// Check if the user has reservation
async function checkUser(rEmail){
  const params = (() =>  { const { rYear, rMonth, rDay } = splitDate(new Date()); return { rEmail, rYear, rMonth, rDay };})()
  const { data: { data } } = await httpClient(API_V1_RESERVATION_ACTIVE, {params});

return data.length === 0;
}

// Helper
function splitDate(date) {
  return {
    rYear: moment(date).format("YYYY"),
    rMonth: (+moment(date).format("MM")).toString(),
    rDay: (+moment(date).format("DD")).toString()
  };
}

// Config calendar
async function initCalendar(fromDate = '') {
  state.isShowHours = false; hourStore.reset();

  const startDate = new Date();

  calendarStore.reset();
  calendarStore.setStart(startDate);
  calendarStore.setDisabledDays([{ weekdays: [1, 7] }, { days: [] }]);

  const startMonth = fromDate ? new Date(fromDate) : new Date();
  const params = (() => { const { rYear, rMonth } = splitDate(startMonth); return { rYear, rMonth }; })();
  const { data: { data } } = await httpClient(API_V1_RESERVATION_DISABLED_DAYS, { params });

  data.forEach((e) => calendarStore.disabledDays[1].days.push(parseInt(e.r_day)));
}

// Config hours
async function onDayClick({ date }) {
  state.isShowHours = false; hourStore.reset();

  userStore.setDate(moment(date).format("YYYY-MM-DD"));

  const params = (() => { const { rYear, rMonth, rDay } = splitDate(date); return { rYear, rMonth, rDay }; })();
  const {  data: { data } } = await httpClient(API_V1_RESERVATION_DISABLED_HOURS, { params });

  data.forEach((e) => hourStore.setDisabledHours(e.rHour));

  state.isShowHours = true;
}

// Save reservation
async function onTimeClick(time) {
  userStore.setHour(time);

  (await saveReservation()) && toolbarStore.step.next();
}

// Save reservation API
async function saveReservation() {
  const [rYear, _rMonth, _rDay] = userStore.getDate().split("-");
  const params = {
    rFirstName: userStore.firstName,
    rLastName: userStore.lastName,
    rEmail: userStore.email,
    rPhone: userStore.phone,
    rYear,
    rMonth: (+_rMonth).toString(),
    rDay: (+_rDay).toString(),
    rHour: userStore.hour
  };

  return await httpClient.post(API_V1_RESERVATION+'/', params );
}

// provider/inject
provide("state", {
  state,
  checkUser,
  onDayClick,
  onTimeClick,
  initCalendar,
});
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8 col-sm-10">
        <v-welcome v-if="toolbarStore.step.current === 0" />
        <v-registration v-if="toolbarStore.step.current === 1 || toolbarStore.step.current === 2" />
        <v-schedule v-if="toolbarStore.step.current === 3" />
        <v-done v-if="toolbarStore.step.current === 4" />
        <v-toolbar />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
