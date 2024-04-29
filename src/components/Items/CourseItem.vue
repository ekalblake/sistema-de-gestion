<template>
  <v-card min-height="150px" class="ma-2 rounded-lg" elevation="20">
    <v-card-item>
      <v-card-title class="d-flex justify-space-between">
        <p>{{ course.nombre }}</p>
        <v-tooltip location="left" text="Cantidad de alumnos">
          <template v-slot:activator="{ props }">
            <p v-bind="props" class="text-caption">
              {{ course.cantidadAlumnos }}
              <v-icon>mdi-account-school</v-icon>
            </p>
          </template>
        </v-tooltip>
      </v-card-title>
      <v-card-subtitle class="d-flex justify-space-between">
        <p>{{ course.descripcion }}</p>
        <p>{{ getCategoria }}</p>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text class="d-flex justify-center ga-3">
      <v-card class="bg-secondary">
        <v-card-text class="text-h6"> Inicia: {{ getDateStart }} </v-card-text>
      </v-card>
      <v-card class="bg-secondary">
        <v-card-text class="text-h6"> Termina: {{ getDateEnd }} </v-card-text>
      </v-card>
    </v-card-text>
    <v-card-actions class="justify-space-between">
      <div>
        <v-tooltip location="top" text="Editar">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              @click="editCourse(course)"
              icon="mdi-pencil"
            ></v-btn>
          </template>
        </v-tooltip>
        <v-tooltip location="top" text="Editar curso">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              @click="dialog = !dialog"
              icon="mdi-account-school"
            >
            </v-btn>
          </template>
        </v-tooltip>
      </div>
      <div class="d-flex align-end">
        <p class="text-h5 font-weight-bold text-green">S/{{ course.precio }}</p>
      </div>
    </v-card-actions>
  </v-card>
  <v-dialog width="300px" v-model="dialog">
    <v-card class="rounded-lg">
      <template v-if="course.alumnos.length > 1">
        <v-card class="ma-3" v-for="student of course.alumnos">
          <v-card-item>
            <v-card-title class="d-flex justify-space-between">
              <p>{{ student.nombres }} {{ student.apellidos }}</p>
              <p>{{ student.codigo }}</p>
            </v-card-title>
          </v-card-item>
          <v-card-text>{{ student.correo }} </v-card-text>
        </v-card>
      </template>
      <v-card-title v-else>No tiene alumnos registrados</v-card-title>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  course: {
    required: true,
  },
});

const emit = defineEmits(["set-current-view"]);

const dialog = ref(false);

const getDateStart = computed(() => {
  const newDate = new Date(props.course.inicio * 1000);
  return (
    newDate.getDate() +
    "-" +
    (newDate.getMonth() + 1) +
    "-" +
    newDate.getFullYear()
  );
});

const getDateEnd = computed(() => {
  const newDate = new Date(props.course.fin * 1000);
  return (
    newDate.getDate() +
    "-" +
    (newDate.getMonth() + 1) +
    "-" +
    newDate.getFullYear()
  );
});

const getCategoria = computed(() => {
  if (typeof props.course.categoria === "object") {
    return props.course.categoria[0];
  }
  return props.course.categoria;
});

const editCourse = (course) => {
  emit("set-current-view", course);
};
</script>
