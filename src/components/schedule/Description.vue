<script setup>
import VCallout from "@/components/Callout.vue"
</script>

<template>
  <v-callout>
      <h3 id="scrollable-containers-and-keyboard-access">
        Scrollable containers and keyboard access
      </h3>
      <p>
        If youre making a scrollable container (other than the
        <code>&lt;body&gt;</code>), be sure to have a <code>height</code> set
        and <code>overflow-y: scroll;</code> applied to it—alongside a
        <code>tabindex="0"</code> to ensure keyboard access.
      </p>
  </v-callout>
</template>

<style scope></style>
