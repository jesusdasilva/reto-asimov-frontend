<script setup>
import { inject, reactive, computed, ref } from "vue";
import { hourStore } from "../../store";

const { onTimeClick } = inject("state");

// const data = hourStore.getDisabledHours();

// console.log(hourStore.getDisabledHours())

function isAvailableHour(hour) {

  //  const res = !data.find((e) => e.rHour == hour);
   const res = !hourStore.getDisabledHours().find((e) => e.rHour == hour);

  //  console.log(hour, res)
   return res
}

function haveMorningShifts() {

  // return  data.filter((e) => e.rHour.includes("AM")).length < 3
  return  hourStore.getDisabledHours().filter((e) => e.rHour.includes("AM")).length < 3
}

function haveAfternoonShifts() {
  
  // return data.filter((e) => e.rHour.includes("PM")).length < 3
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
      <button v-show="isAvailableHour('9:00 AM')" @click="onTimeClick('9:00 AM')" class="btn btn-outline-primary" type="button">9:00 AM</button>
      <button v-show="isAvailableHour('10:00 AM')" @click="onTimeClick('10:00 AM')" class="btn btn-outline-primary" type="button">10:00 AM</button>
      <button v-show="isAvailableHour('11:00 AM')" @click="onTimeClick('11:00 AM')" class="btn btn-outline-primary" type="button">11:00 AM</button>
    </div>
  </div>
  <div v-show="haveAfternoonShifts()" class="row mt-2">
    <div class="col-12 d-flex justify-content-center">
      <i class="bi bi-brightness-alt-low"></i>
      <h6 class="ms-2">Horario de Tarde</h6>
    </div>
    <div class="col-12 d-grid gap-2 text-center">
      <button v-show="isAvailableHour('12:00 PM')" @click="onTimeClick('12:00 AM')" class="btn btn-outline-primary" type="button">12:00 PM</button>
      <button v-show="isAvailableHour('1:00 PM')" @click="onTimeClick('1:00 PM')" class="btn btn-outline-primary" type="button">1:00 PM</button>
      <button v-show="isAvailableHour('2:00 PM')" @click="onTimeClick('2:00 PM')" class="btn btn-outline-primary" type="button">2:00 PM</button>
      <button v-show="isAvailableHour('3:00 PM')" @click="onTimeClick('3:00 PM')" class="btn btn-outline-primary" type="button">3:00 PM</button>
      <button v-show="isAvailableHour('4:00 PM')" @click="onTimeClick('4:00 PM')" class="btn btn-outline-primary" type="button">4:00 PM</button>
      <button v-show="isAvailableHour('5:00 PM')" @click="onTimeClick('5:00 PM')" class="btn btn-outline-primary" type="button">5:00 PM</button>
      <button v-show="isAvailableHour('6:00 PM')" @click="onTimeClick('6:00 PM')" class="btn btn-outline-primary" type="button">6:00 PM</button>
    </div>
  </div>
</template>

<style></style>
