<script setup>
import { computed } from "vue";
import { toolbarStore } from "@/store";

// Assign icons to toolbar buttons
const nextIcon = computed(() => {
  const type = {
    Agendar: "bi-clipboard-check",
    Horarios: "bi-calendar3",
    Terminar: "bi-check2-square"
  };

  return type[toolbarStore.nextButton.label];
});
</script>

<template>
  <div class="pt-3 row">
    <div class="col-6 d-flex justify-content-start">
      <button
        @click="toolbarStore.step.cancel()"
        type="button"
        class="btn btn-warning"
        v-show="toolbarStore.cancelButton.show"
      >
        <i class="bi bi-door-closed"></i>
        {{ toolbarStore.cancelButton.label }}
      </button>
    </div>
    <div class="col-6 d-flex justify-content-end">
      <button
        @click="toolbarStore.step.next()"
        type="button"
        class="btn btn-primary"
        v-show="toolbarStore.nextButton.show"
        :disabled="toolbarStore.nextButton.disable"
      >
        <i class="bi" :class="nextIcon"></i>
        {{ toolbarStore.nextButton.label }}
      </button>
    </div>
  </div>
</template>

<style>
.btn {
  min-width: 100px;
}
</style>
