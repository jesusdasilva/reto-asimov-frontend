<script setup>
import {ref, onMounted} from "vue";
import {userStore} from "@/store";

const form = ref(null)

onMounted(() => {
  // if(!form.checkValidity()) {
    console.log(form.value)

    console.log($e.form.checkValidity())
  // }
  // form.reportValidity()
})
</script>

<template>
  <form class="mt-2" id="form" name="form2" ref="form">
    <div class="mb-3">
      <label for="inputFirstName" class="form-label">Nombres</label>
      <input
        type="text"
        class="form-control"
        id="inputFirstName"
        aria-describedby="FirstNameHelp"
        required
        v-model="userStore.firstName"
      />
    </div>
    <div class="mb-3">
      <label for="inputLastName" class="form-label">Apellidos</label>
      <input
        type="text"
        class="form-control"
        id="inputLastName"
        aria-describedby="LastNamelHelp"
        required
        v-model="userStore.lastName"
      />
    </div>
    <div class="mb-3">
      <label for="inputTelephone" class="form-label">Teléfono</label>
      <input
        type="text"
        class="form-control"
        id="inputTelephone"
        aria-describedby="telephoneHelp"
        v-model="userStore.telephone"
      />
    </div>
    <div class="mb-3">
      <label for="inputEmail" class="form-label">Email</label>
      <input 
        type="email" 
        class="form-control" 
        id="inputEmail" 
        required 
        v-model="userStore.email"
      />
    </div>
  </form>
</template>

<style></style>
