<template>
  <v-container class="d-flex align-center justify-items-center h-100">
    <v-row>
      <v-col cols="12" md="6">
        <v-card
          @click="$router.push('/courses')"
          class="mx-auto"
          hover
          elevation="16"
          max-width="500"
        >
          <div class="py-12 text-center">
            <v-icon color="blue-lighten-3" icon="mdi-book" size="128"> </v-icon>
            <div class="text-h4 font-weight-bold">Cursos</div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          @click="$router.push('/students')"
          class="mx-auto"
          hover
          elevation="16"
          max-width="500"
        >
          <div class="py-12 text-center">
            <v-icon color="red-darken-4" icon="mdi-face-agent" size="128">
            </v-icon>
            <div class="text-h4 font-weight-bold">Alumnos</div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>
