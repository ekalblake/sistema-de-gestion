<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-item>
            <v-card-title class="d-flex">
              <p>Lista de Alumnos</p>
              <v-spacer></v-spacer>
              <v-btn
                @click="dialogStudent = !dialogStudent"
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
        v-if="studentList"
        v-for="(student, index) of studentList"
        cols="12"
        md="3"
      >
        <StudentItem :student="student" @set-current-view="setCurrentView" />
      </v-col>
    </v-row>
  </v-container>
  <v-dialog width="auto" v-model="dialogStudent">
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
              v-model="studentObject.nombres"
              label="Nombres"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Apellidos"
              v-model="studentObject.apellidos"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Correo"
              variant="outlined"
              v-model="studentObject.correo"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Codigo"
              variant="outlined"
              v-model="studentObject.codigo"
            ></v-text-field>
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
</template>
<script setup>
import { ref, onMounted, watch, reactive } from "vue";

import StudentItem from "../components/Items/StudentItem.vue";

import { getStudents } from "../services/studentService";

const studentList = ref(null);

const currentStudent = ref(null);

const dialogStudent = ref(false);

const isNew = ref(true);

const isActive = ref(false);

const studentObject = reactive({
  nombres: "",
  apellidos: "",
  correo: "",
  codigo: "",
  id: "",
});

const getStudentList = async () => {
  const { data } = await getStudents();
  studentList.value = data;
};

const setCurrentView = (student) => {
  Object.assign(studentObject, student);

  currentStudent.value = student;
  isNew.value = false;
  dialogStudent.value = true;
};

const newCourse = async () => {
  if (isNew.value == true) {
    //Crear
    alert("Crear nuevo Estudiante");
  } else {
    //Editar
    alert("Editar estudiante");
  }

  isActive.value = true;
  dialogStudent.value = false;

  getStudentList();

  setTimeout(() => {
    isActive.value = false;
  }, 2000);
};

const resetValues = () => {
  currentStudent.value = null;
  Object.assign(studentObject, {
    nombres: "",
    apellidos: "",
    codigo: "",
    correo: "",
  });
  isNew.value = true;
};

watch(dialogStudent, (newVal) => {
  if (!newVal) {
    resetValues();
  }
});

onMounted(() => {
  getStudentList();
});
</script>
