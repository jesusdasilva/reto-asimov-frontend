<script setup>
import { inject } from "vue";
import { toolbarStore } from "@/store";

let { state } = inject("state");
// let { step } = inject("step");

function stepper(label) {
  const changePosition = {
    Regresar: - 1,
    Siguiente: + 1,
    Salir: 0
  }

  toolbarStore.step.changePosition(changePosition[label]);
}
</script>

<template>
  <div class="pt-3 row">
    <div class="col-8 d-flex justify-content-start">
      <button
        @click="stepper(state.toolbarData.backButton.label)"
        type="button"
        class="btn btn-secondary"
        v-show="state.toolbarData.backButton.show"
      >
        {{ state.toolbarData.backButton.label }}
      </button>
    </div>
    <div class="col-2 d-flex justify-content-start">
      <button
        @click="stepper(state.toolbarData.cancelButton.label)"
        type="button"
        class="btn btn-warning"
        v-show="state.toolbarData.cancelButton.show"
      >
        {{ state.toolbarData.cancelButton.label }}
      </button>
    </div>
    <div class="col-2 d-flex justify-content-end">
      <button
        @click="stepper(state.toolbarData.nextButton.label)"
        type="button"
        class="btn btn-primary"
        v-show="state.toolbarData.nextButton.show"
      >
        {{ state.toolbarData.nextButton.label }}
      </button>
    </div>
  </div>
</template>

<style>
.btn {
  min-width: 100px;
}
</style>
