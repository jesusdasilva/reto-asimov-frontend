<script setup>
import { inject } from 'vue'

const { onTimeClick, state } = inject('state')

</script>

<template>
  <div class="row mt-2">
    <div class="col-12 d-grid gap-2 text-center">
      <h6>Horario de Mañana</h6>
      <button @click="onTimeClick('9:00 AM')" class="btn btn-outline-primary" type="button">9:00 AM</button>
      <button @click="onTimeClick('10:00 AM')" class="btn btn-outline-primary" type="button">10:00 AM</button>
      <button @click="onTimeClick('11:00 AM')" class="btn btn-outline-primary" type="button">11:00 AM</button>
      <button @click="onTimeClick('12:00 AM')" class="btn btn-outline-primary" type="button">12:00 PM</button>
      <h6>Horario de Tarde</h6>
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
