<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-item>
            <v-card-title class="d-flex">
              <p>Lista de Cursos</p>
              <v-spacer></v-spacer>
              <v-btn
                @click="dialogCourse = !dialogCourse"
                variant="plain"
                size="small"
                icon="mdi-plus"
              ></v-btn>
            </v-card-title>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-if="courseList"
        v-for="(course, index) of courseList"
        cols="12"
        md="4"
      >
        <CourseItem :course="course" @set-current-view="setCurrentView" />
      </v-col>
    </v-row>
  </v-container>
  <v-dialog width="auto" v-model="dialogCourse">
    <v-card
      prepend-icon="mdi-home"
      :title="`${isNew ? 'Nuevo' : 'Editar'} curso`"
      width="500px"
      class="pa-3"
    >
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              variant="outlined"
              v-model="courseObject.nombre"
              label="Nombre"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Descripcion"
              v-model="courseObject.descripcion"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-select
              :items="categoryList"
              multiple
              hide-details
              label="Categoría"
              variant="outlined"
              v-model="courseObject.categoria"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Fecha Inicio"
              variant="outlined"
              v-model="courseObject.inicio"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Fecha Fin"
              variant="outlined"
              v-model="courseObject.fin"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Precio"
              variant="outlined"
              v-model="courseObject.precio"
            >
              <template v-slot:prepend-inner> S/ </template>
            </v-text-field>
          </v-col>
          <v-divider></v-divider>
        </v-row>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn @click="newCourse" variant="elevated" color="primary">{{
          isNew ? "Crear" : "Editar"
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-snackbar
    :timeout="2000"
    color="success"
    variant="elevated"
    v-model="isActive"
  >
    Petición realizada con éxito
  </v-snackbar>
  <v-snackbar> </v-snackbar>
</template>
<script setup>
import { ref, onMounted, watch, reactive } from "vue";

import CourseItem from "../components/Items/CourseItem.vue";

import {
  getCourseList,
  createCourse,
  updateCourse,
} from "../services/coursesService";

const courseList = ref(null);

const currentCourse = ref(null);

const dialogCourse = ref(false);

const categoryList = ref(["Informatica", "Diseño", "Idiomas", "Ciencias"]);

const isNew = ref(true);

const isActive = ref(false);

const courseObject = reactive({
  precio: 0,
  descripcion: "",
  nombre: "",
  inicio: Math.floor(new Date().getTime() / 1000),
  fin: Math.floor(new Date().getTime() / 1000),
  categoria: [],
  cantidadAlumnos: 0,
});

const getCourses = async () => {
  const { data } = await getCourseList();
  courseList.value = data;
};

const setCurrentView = (course) => {
  courseObject.nombre = course.nombre;
  courseObject.descripcion = course.descripcion;
  courseObject.categoria = course.categoria;
  courseObject.precio = course.precio;
  courseObject.cantidadAlumnos = course.cantidadAlumnos;
  courseObject.inicio = course.inicio;
  courseObject.fin = course.fin;

  currentCourse.value = course;
  isNew.value = false;
  dialogCourse.value = true;
};

const newCourse = async () => {
  console.log(courseObject);
  if (isNew.value == true) {
    //Crear
    const { data } = await createCourse(courseObject);
  } else {
    const { data } = await updateCourse(currentCourse.value.id, courseObject);
  }

  isActive.value = true;
  dialogCourse.value = false;

  setTimeout(() => {
    isActive.value = false;
  }, 2000);
};

const resetValues = () => {
  currentCourse.value = null;
  Object.assign(courseObject, {
    precio: 0,
    descripcion: "",
    nombre: "",
    inicio: new Date(),
    fin: new Date(),
    categoria: [],
    cantidadAlumnos: 0,
  });
  isNew.value = true;
};

watch(dialogCourse, (newVal) => {
  if (!newVal) {
    resetValues();
  }
});

onMounted(() => {
  getCourses();
});
</script>
