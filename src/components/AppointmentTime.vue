<script setup>
import { inject } from 'vue'

const { changeShowForm, state } = inject('state')

</script>

<template>
  <div class="row mt-2">
    <div class="col-12 d-grid gap-2 text-center">
      <h6>Horario de Mañana</h6>
      <button @click="changeShowForm" class="btn btn-outline-primary" type="button">9:00 AM</button>
      <button @click="changeShowForm" class="btn btn-outline-primary" type="button">10:00 AM</button>
      <button @click="changeShowForm" class="btn btn-outline-primary" type="button">11:00 AM</button>
      <button @click="changeShowForm" class="btn btn-outline-primary" type="button">12:00 PM</button>
      <h6>Horario de Tarde</h6>
      <button @click="changeShowForm" class="btn btn-outline-primary" type="button">1:00 PM</button>
      <button @click="changeShowForm" class="btn btn-outline-primary" type="button">2:00 PM</button>
      <button @click="changeShowForm" class="btn btn-outline-primary" type="button">3:00 PM</button>
      <button @click="changeShowForm" class="btn btn-outline-primary" type="button">4:00 PM</button>
      <button @click="changeShowForm" class="btn btn-outline-primary" type="button">5:00 PM</button>
      <button @click="changeShowForm" class="btn btn-outline-primary" type="button">6:00 PM</button> 
    </div>
  </div>
</template>

<style></style>
