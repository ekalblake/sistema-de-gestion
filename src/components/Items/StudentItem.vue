<template>
  <v-card min-height="150px" class="ma-2 rounded-lg" elevation="20">
    <v-card-item>
      <v-card-title class="d-flex justify-space-between">
        <p>{{ student.nombres }} {{ student.apellidos }}</p>
        <p>{{ student.codigo }}</p>
      </v-card-title>
      <v-card-subtitle class="d-flex justify-space-between">
        <p>{{ student.correo }}</p>
      </v-card-subtitle>
    </v-card-item>
    <v-card-actions class="justify-end">
      <v-tooltip location="top" text="Borrar Alumno">
        <template v-slot:activator="{ props }">
          <v-btn
            color="secondary"
            variant="outlined"
            size="small"
            v-bind="props"
            icon="mdi-delete"
          ></v-btn>
        </template>
      </v-tooltip>
      <v-tooltip location="top" text="Editar Alumno">
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
            size="small"
            variant="elevated"
            @click="editStudent(student)"
            icon="mdi-pencil"
          >
          </v-btn>
        </template>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  student: {
    required: true,
  },
});

const emit = defineEmits(["set-current-view"]);

const editStudent = (student) => {
  emit("set-current-view", student);
};
</script>
