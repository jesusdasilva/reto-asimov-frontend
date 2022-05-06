<script setup></script>

<template>
  <div class="callout callout-info">
    <slot></slot>
  </div>
</template>

<style scope>
.callout-info {
  border-left-color: #5bc0de !important;
}
.callout {
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border: 1px solid #e9ecef;
  border-left-width: 0.25rem;
  border-radius: 0.25rem;
}
</style>
