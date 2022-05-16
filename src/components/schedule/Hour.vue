<script setup>
import { inject } from "vue";
import { hourStore } from "../../store";

const { onTimeClick } = inject("state");

// Check if the hour is available
function isAvailableHour(hour) {

  return !hourStore.getDisabledHours().find((e) => e.rHour == hour);
}

// Check Morning Hours availability
function haveMorningShifts() {

  return  hourStore.getDisabledHours().filter((e) => e.rHour.includes("AM")).length < 3
}

// Check Afternoon Hours availability
function haveAfternoonShifts() {
  
  return hourStore.getDisabledHours().filter((e) => e.rHour.includes("PM")).length < 3
}
</script>

<template>
  <div v-show="haveMorningShifts()" class="row mt-2">
    <div class="col-12 d-flex justify-content-center">
      <i class="bi bi-brightness-alt-high"></i>
      <h6 class="ms-2">Horario de Mañana</h6>
    </div>
    <div class="col-12 d-grid gap-2 text-center">
      <button v-show="isAvailableHour('9:00AM')" @click="onTimeClick('9:00AM')" class="btn btn-outline-primary" type="button">9:00 AM</button>
      <button v-show="isAvailableHour('10:00AM')" @click="onTimeClick('10:00AM')" class="btn btn-outline-primary" type="button">10:00 AM</button>
      <button v-show="isAvailableHour('11:00AM')" @click="onTimeClick('11:00AM')" class="btn btn-outline-primary" type="button">11:00 AM</button>
    </div>
  </div>
  <div v-show="haveAfternoonShifts()" class="row mt-2">
    <div class="col-12 d-flex justify-content-center">
      <i class="bi bi-brightness-alt-low"></i>
      <h6 class="ms-2">Horario de Tarde</h6>
    </div>
    <div class="col-12 d-grid gap-2 text-center">
      <button v-show="isAvailableHour('12:00PM')" @click="onTimeClick('12:00AM')" class="btn btn-outline-primary" type="button">12:00 PM</button>
      <button v-show="isAvailableHour('1:00PM')" @click="onTimeClick('1:00PM')" class="btn btn-outline-primary" type="button">1:00 PM</button>
      <button v-show="isAvailableHour('2:00PM')" @click="onTimeClick('2:00PM')" class="btn btn-outline-primary" type="button">2:00 PM</button>
      <button v-show="isAvailableHour('3:00PM')" @click="onTimeClick('3:00PM')" class="btn btn-outline-primary" type="button">3:00 PM</button>
      <button v-show="isAvailableHour('4:00PM')" @click="onTimeClick('4:00PM')" class="btn btn-outline-primary" type="button">4:00 PM</button>
      <button v-show="isAvailableHour('5:00PM')" @click="onTimeClick('5:00PM')" class="btn btn-outline-primary" type="button">5:00 PM</button>
      <button v-show="isAvailableHour('6:00PM')" @click="onTimeClick('6:00PM')" class="btn btn-outline-primary" type="button">6:00 PM</button>
    </div>
  </div>
</template>

<style scoped></style>
