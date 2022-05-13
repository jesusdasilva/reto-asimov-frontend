<script setup>
import { inject, reactive, computed } from 'vue'

const { onTimeClick } = inject('state')
const data = [
        {
            rHour: "9:00 AM"
        },
        {
            rHour: "11:00 AM"
        },
        {
            rHour: "12:00 PM"
        },
        {
            rHour: "1:00 PM"
        },
        {
            rHour: "2:00 PM"
        },
        {
            rHour: "3:00 PM"
        },
        {
            rHour: "4:00 PM"
        },
        {
            rHour: "5:00 PM"
        },
        {
            rHour: "6:00 PM"
        },
        {
            rHour: "10:00 PM"
        }
    ]

function findHours(hour){
   const res = !!data.find(e => e.rHour == hour)
console.log(hour, res)
   return res
}

function is


</script>

<template>
  <div class="row mt-2">
    <div class="col-12 d-flex justify-content-center">
      <i class="bi bi-brightness-alt-high"></i><h6 class="ms-2">Horario de Mañana</h6>
    </div>
    <div class="col-12 d-grid gap-2 text-center">
      <button v-show="findHours('9:00 AM')" @click="onTimeClick('9:00 AM')" class="btn btn-outline-primary" type="button">9:00 AM</button>
      <button v-show="findHours('10:00 AM')" @click="onTimeClick('10:00 AM')" class="btn btn-outline-primary" type="button">10:00 AM</button>
      <button v-show="findHours('11:00 AM')" @click="onTimeClick('11:00 AM')" class="btn btn-outline-primary" type="button">11:00 AM</button>
      <button v-show="findHours('12:00 PM')" @click="onTimeClick('12:00 AM')" class="btn btn-outline-primary" type="button">12:00 PM</button>
    </div>
    <div class="col-12 d-flex justify-content-center">
      <i class="bi bi-brightness-alt-low"></i><h6 class="ms-2">Horario de Tarde</h6>
    </div>
    <div class="col-12 d-grid gap-2 text-center">
      <button v-show="findHours('1:00 PM')" @click="onTimeClick('1:00 PM')" class="btn btn-outline-primary" type="button">1:00 PM</button>
      <button v-show="findHours('2:00 PM')" @click="onTimeClick('2:00 PM')" class="btn btn-outline-primary" type="button">2:00 PM</button>
      <button v-show="findHours('3:00 PM')" @click="onTimeClick('3:00 PM')" class="btn btn-outline-primary" type="button">3:00 PM</button>
      <button v-show="findHours('4:00 PM')" @click="onTimeClick('4:00 PM')" class="btn btn-outline-primary" type="button">4:00 PM</button>
      <button v-show="findHours('5:00 PM')" @click="onTimeClick('5:00 PM')" class="btn btn-outline-primary" type="button">5:00 PM</button>
      <button v-show="findHours('6:00 PM')" @click="onTimeClick('6:00 PM')" class="btn btn-outline-primary" type="button">6:00 PM</button> 
    </div>
  </div>
</template>

<style></style>
