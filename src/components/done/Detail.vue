<script setup>
import { userStore } from "@/store";

</script>

<template>
  <div class="mb-3 row">
    <label for="staticDate" class="col-sm-2 col-form-label"><strong>Fecha:</strong></label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticDate" :value="userStore.date" />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="staticTime" class="col-sm-2 col-form-label"><strong>Hora:</strong></label>
     <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticTime" :value="userStore.time" />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="staticFirstName" class="col-sm-2 col-form-label"><strong>Nombre:</strong></label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticFirstName" :value="userStore.firstName" />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="staticLastName" class="col-sm-2 col-form-label"><strong>Apellido:</strong></label>
     <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticLastName" :value="userStore.lastName" />
    </div>
  </div>
    <div class="mb-3 row">
    <label for="staticTelephone" class="col-sm-2 col-form-label"><strong>Teléfono:</strong></label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticTelephone" :value="userStore.telephone" />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label"><strong>Apellido:</strong></label>
     <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value="userStore.email" />
    </div>
  </div>
</template>

<style></style>
