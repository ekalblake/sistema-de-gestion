<template>
  <v-snackbar
    :timeout="2000"
    color="success"
    variant="elevated"
    :value="isActive"
  >
    {{ alertText }}
  </v-snackbar>
</template>
<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
  },
  alertText: {
    type: String,
  },
});
</script>
