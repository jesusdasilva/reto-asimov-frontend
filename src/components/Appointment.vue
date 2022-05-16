<script setup>
import moment from "moment";
import { provide, ref, reactive, onMounted, isShallow } from "vue";
import VWelcome from "@/components/Welcome.vue";
import VRegistration from "@/components/Registration.vue";
import VSchedule from "@/components/Schedule.vue";
import VToolbar from "@/components/Toolbar.vue";
import VDone from "@/components/Done.vue";
import { toolbarStore, userStore, calendarStore, hourStore } from "@/store";
import axios from "axios";

const URL_BASE = "http://localhost:5000";
const API_V1_RESERVATION = "/api/v1/reservation";
const API_V1_RESERVATION_DISABLED_DAYS = API_V1_RESERVATION + "/disabled-days";
const API_V1_RESERVATION_DISABLED_HOURS = API_V1_RESERVATION + "/disabled-hours";
const API_V1_RESERVATION_ACTIVE = API_V1_RESERVATION + "/active";
const httpClient = axios.create({
  baseURL: URL_BASE,
  headers: { "Content-Type": "application/json" }
});

const state = reactive({ isShowHours: false });

onMounted(() => {
  // console.log(moment(state.userData.date).format("YYYY-MM-DD"));
});

async function checkUser(rEmail){
  const params = (() =>  { const { rYear, rMonth, rDay } = splitDate(new Date()); return { rEmail, rYear, rMonth, rDay };})()
  const { data: { data } } = await httpClient(API_V1_RESERVATION_ACTIVE, {params});

return data.length === 0;
}

function splitDate(date) {
  return {
    rYear: moment(date).format("YYYY"),
    rMonth: moment(date).format("MM"),
    rDay: moment(date).format("DD")
  };
}

// function calculateStartDate(fromDate = '') {
//   const DEFAULT_DATE = fromDate ? new Date(fromDate) : new Date(null);

//   const START_DATE = {
//     Saturday: moment(DEFAULT_DATE).add(2, "days"),
//     Sunday: moment(DEFAULT_DATE).add(1, "days"),
//   };

//   return START_DATE[moment(DEFAULT_DATE).format("dddd")]?._d || DEFAULT_DATE;
// }

async function initCalendar(fromDate = '') {
  state.isShowHours = false; hourStore.reset();

  const startDate = new Date();//calculateStartDate(fromDate);

  calendarStore.reset();
  calendarStore.setStart(startDate);
  calendarStore.setDisabledDays([{ weekdays: [1, 7] }, { days: [] }]);

  // userStore.setDate(moment(startDate).format("YYYY-MM-DD"));
  
  const startMonth = fromDate ? new Date(fromDate) : new Date();
  const params = (() => { const { rYear, rMonth } = splitDate(startMonth); return { rYear, rMonth }; })();
  const { data: { data } } = await httpClient(API_V1_RESERVATION_DISABLED_DAYS, { params });

  data.forEach((e) => calendarStore.disabledDays[1].days.push(parseInt(e.r_day)));
}

async function onDayClick({ date }) {
  state.isShowHours = false; hourStore.reset();

  userStore.setDate(moment(date).format("YYYY-MM-DD"));

  const params = (() => { const { rYear, rMonth, rDay } = splitDate(date); return { rYear, rMonth, rDay }; })();
  const {  data: { data } } = await httpClient(API_V1_RESERVATION_DISABLED_HOURS, { params });

  data.forEach((e) => hourStore.setDisabledHours(e.rHour));

  state.isShowHours = true;
}

// function onChangeMonth(event) {
  // const { rYear, rMonth } = splitDate(date);
  // const params = { rYear, rMonth };
  // const {
  //   data: { data }
  // } = await httpClient(API_V1_RESERVATION_DISABLED_DAYS, { params });

  // calendarStore.disabledDays[1].days = [];
  // data.forEach((e) =>
  //   calendarStore.disabledDays[1].days.push(parseInt(e.r_day))
  // );
  // console.log('onChangeMonth',this.$refs.calendar)
// }

async function onTimeClick(time) {
  console.log(time);
  console.log(userStore.getDate())
  userStore.setHour(time);
  (await saveReservation()) && toolbarStore.step.next();
}

async function saveReservation() {
  const [rYear, rMonth, rDay] = userStore.getDate().split("-");
  const params = {
    rFirstName: userStore.firstName,
    rLastName: userStore.lastName,
    rEmail: userStore.email,
    rPhone: userStore.phone,
    rYear,
    rMonth,
    rDay,
    rHour: userStore.hour
  };
  console.log(params);
  return await httpClient.post(API_V1_RESERVATION+'/', params );
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
  state,
  checkUser,
  onDayClick,
  onTimeClick,
  changeShowForm,
  onSubmit,
  initCalendar,
});
</script>

<template>
  <div class="container">
    <v-welcome v-if="toolbarStore.step.current === 0" />
    <v-registration
      v-if="toolbarStore.step.current === 1 || toolbarStore.step.current === 2"
    />
    <v-schedule v-if="toolbarStore.step.current === 3" />
    <v-done v-if="toolbarStore.step.current === 4" />
    <v-toolbar />
  </div>
</template>

<style></style>
