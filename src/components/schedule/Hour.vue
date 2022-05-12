<script setup>
import { inject, reactive } from 'vue'

const { onTimeClick } = inject('state')
const data = reactive([
  '9:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 AM',
  '3:00 AM',
  '5:00 AM',
  '6:00 AM',
  '10:00 AM'
])

</script>

<template>
  <div class="row mt-2">
    <div class="col-12 d-flex justify-content-center">
      <i class="bi bi-brightness-alt-high"></i><h6 class="ms-2">Horario de Mañana</h6>
    </div> -->
    <div class="col-12 d-grid gap-2 text-center">
      <button v-show="data['9:00 AM]'" @click="onTimeClick('9:00 AM')" class="btn btn-outline-primary" type="button">9:00 AM</button>
      <button @click="onTimeClick('10:00 AM')" class="btn btn-outline-primary" type="button">10:00 AM</button>
      <button @click="onTimeClick('11:00 AM')" class="btn btn-outline-primary" type="button">11:00 AM</button>
      <button @click="onTimeClick('12:00 AM')" class="btn btn-outline-primary" type="button">12:00 PM</button>
    </div>
    <div class="col-12 d-flex justify-content-center">
      <i class="bi bi-brightness-alt-low"></i><h6 class="ms-2">Horario de Tarde</h6>
    </div>
    <div class="col-12 d-grid gap-2 text-center">
      <button @click="onTimeClick('1:00 PM')" class="btn btn-outline-primary" type="button">1:00 PM</button>
      <button @click="onTimeClick('2:00 PM')" class="btn btn-outline-primary" type="button">2:00 PM</button>
      <button @click="onTimeClick('3:00 PM')" class="btn btn-outline-primary" type="button">3:00 PM</button>
      <button @click="onTimeClick('4:00 PM')" class="btn btn-outline-primary" type="button">4:00 PM</button>
      <button @click="onTimeClick('5:00 PM')" class="btn btn-outline-primary" type="button">5:00 PM</button>
      <button @click="onTimeClick('6:00 PM')" class="btn btn-outline-primary" type="button">6:00 PM</button> 
    </div>
  </div>
</template>

<style></style>
