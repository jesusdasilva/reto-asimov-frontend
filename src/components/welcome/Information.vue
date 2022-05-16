<script setup>
import VCallout from "@/components/Callout.vue"
</script>

<template>
  <v-callout>
      <h3 id="scrollable-containers-and-keyboard-access">
        Bienvenidos
      </h3>
      <p>
        Para Agendar una cita para bailar con la Muerte tenga en cuenta las siguientes consideraciones:
      </p>
      <ol class="list-group list-group-numbered">
        <li class="list-group-item">No puede reservar mas de una cita a menos que ya haya pasado la fecha de la cita.</li>
        <li class="list-group-item">Los días disponibles son de Lunes a Viernes entre los horarios de 9:00AM a 6:00PM.</li>
        <li class="list-group-item">Las citas tienen una duración de una Hora.</li>
        <li class="list-group-item">Una vez agendada la cita no podrá eliminarla o cambiarla.</li>
      </ol>
      <p class="mt-3">
        Para comenzar con el registro debe hacer click en el botón "<span class="fst-italic">Agendar</span>".
      </p>
  </v-callout>
</template>

<style scope></style>
