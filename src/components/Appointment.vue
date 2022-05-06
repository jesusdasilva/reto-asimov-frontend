<script setup>
import moment from "moment";
import { provide, ref, reactive, onMounted } from "vue";
import VWelcome from "@/components/Welcome.vue";
import VRegistration from "@/components/Registration.vue";
import VSchedule from "@/components/Schedule.vue";
import VToolbar from "@/components/Toolbar.vue";
import VDone from "@/components/Done.vue";
import { toolbarStore, userStore } from "@/store";


onMounted(() => {
  // console.log(moment(state.userData.date).format("YYYY-MM-DD"));

});

function onDayClick(date) {
  setDataDate(date);
  // setDisabledDay(date)
}

function onTimeClick(time) {
  userStore.setTime(time);
  toolbarStore.step.next();
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
  // state.userData.time = time;
}

provide("state", {
  // state,
  onDayClick,
  onTimeClick,
  changeShowForm,
  onSubmit
});

</script>

<template>
  <div class="container">
    <v-welcome v-if="toolbarStore.step.current === 0" />
    <v-registration v-if="toolbarStore.step.current === 1" />
    <v-schedule v-if="toolbarStore.step.current === 2" />
    <v-done v-if="toolbarStore.step.current === 3"/>
    <v-toolbar />
  </div>
</template>

<style></style>
