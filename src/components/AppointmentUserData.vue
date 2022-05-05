<script setup>
import { inject } from "vue"

const { onSubmit, state } = inject("state")
</script>

<template>
  <div class="card text-dark bg-light p-2">
    <!-- <div class="card-header">Header</div> -->
    <div class="card-body">
      <span class="fw-bold">Día:</span> {{state.userData.date}}
      <br />
      <span class="fw-bold">Hora:</span> {{state.userData.time}}
    </div>
  </div>
  <form @submit.prevent="onSubmit" class="mt-2">
    <div class="mb-3">
      <label for="inputName" class="form-label">Nombre</label>
      <input
        type="text"
        class="form-control"
        id="inputName"
        aria-describedby="namelHelp"
        required
        v-model="state.userData.name"
      />
    </div>
    <div class="mb-3">
      <label for="inputTelefono" class="form-label">Teléfono</label>
      <input
        type="text"
        class="form-control"
        id="inputTelefono"
        aria-describedby="telefonoHelp"
        v-model="state.userData.phone"
      />
    </div>
    <div class="mb-3">
      <label for="inputEmail" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="inputEmail"
        required
        v-model="state.userData.email"
      />
    </div>
  </form>
</template>

<style>
.btn {
    min-width: 100px;
}
</style>
