<script setup>
import { onUnmounted, watchEffect, inject, ref } from "vue";
import { userStore, toolbarStore } from "@/store";
import { useField } from "vee-validate";
import * as yub from "yup";

// schema validate
const { value: firstName, errorMessage: firstNameError } = useField("firstName", yub.string().required("El Nombre es requerido").defined());
const { value: lastName, errorMessage: lastNameError } = useField("lastName", yub.string().required("El Apellido es requerido").defined());
const { value: telephone, errorMessage: telephoneError } = useField("email", yub.string().nullable().default(""));
const { value: email, errorMessage: emailError } = useField("email", yub.string().email("Debe ser un Email válido").required("El Email es requerido"));

const { checkUser } = inject("state");

let isShowAlert = ref(false);

watchEffect(() => {
  toolbarStore.nextButton.setDisable(true);

  //validate form
  if (!emailError.value && email.value && !firstNameError.value && firstName.value && !lastNameError.value && lastName.value) {
    toolbarStore.nextButton.setDisable(false);
  }

  //check user
  if (toolbarStore.step.current === 2) {
    continueOrMessage()
  }

});

async function continueOrMessage(){
  (await checkUser(email.value)) ? (toolbarStore.step.next()) : (isShowAlert.value = true)
}

function closeAlert(){
  toolbarStore.step.setCurrent(0);
}

onUnmounted(() => {
  // assing store values
  userStore.setFirstName(firstName.value);
  userStore.setLastName(lastName.value);
  userStore.setEmail(email.value);
  userStore.setTelephone(telephone.value);
});
</script>

<template>

<!-- Message -->
<div v-show="isShowAlert" class="alert alert-danger alert-dismissible fade show" role="alert">
    El Usuario ya poseé una cita activa.
  <button @click="closeAlert"  type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<!-- End Message -->

<!-- Form -->
  <form class="mt-2" id="form">
    <div class="mb-3">
      <label for="inputFirstName" class="form-label">Nombres</label>
      <input type="text" class="form-control" id="inputFirstName" v-model="firstName" />
      <span>{{ firstNameError }}</span>
    </div>
    <div class="mb-3">
      <label for="inputLastName" class="form-label">Apellidos</label>
      <input type="text" class="form-control" id="inputLastName" v-model="lastName" />
      <span>{{ lastNameError }}</span>
    </div>
    <div class="mb-3">
      <label for="inputTelephone" class="form-label">Teléfono</label>
      <input type="text" class="form-control" id="inputTelephone" v-model="telephone" />
      <span>{{ telephoneError }}</span>
    </div>
    <div class="mb-3">
      <label for="inputEmail" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail" v-model="email" />
      <span>{{ emailError }}</span>
    </div>
  </form>
<!-- End Form -->

</template>

<style scope>
</style>
