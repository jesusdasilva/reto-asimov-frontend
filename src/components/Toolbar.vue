<script setup>
import { toolbarStore }  from "@/store";

</script>

<template>
  <div class="pt-3 row">
    <div class="col-8 d-flex justify-content-start">
      <button
        @click="toolbarStore.step.previous()"
        type="button"
        class="btn btn-secondary"
        v-show="toolbarStore.backButton.show"
      >
        {{ toolbarStore.backButton.label }}
      </button>
    </div>
    <div class="col-2 d-flex justify-content-start">
      <button
        @click="toolbarStore.step.cancel()"
        type="button"
        class="btn btn-warning"
        v-show="toolbarStore.cancelButton.show"
      >
        {{ toolbarStore.cancelButton.label }}
      </button>
    </div>
    <div class="col-2 d-flex justify-content-end">
      <button
        @click="toolbarStore.step.next()"
        type="button"
        class="btn btn-primary"
        v-show="toolbarStore.nextButton.show"
      >
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
