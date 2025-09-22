<script>
import CustomButton from './components/CustomButton.vue';

export default {
  components: {
    CustomButton,
  },
  methods: {
    guardarDatos() {
      alert('Guardado correctamente.');
    },
  },
};
</script>

<template>
  <CustomButton
      id="saveBtn"
      :enabled="true"
      label="Guardar"
      :onClick="guardarDatos"
    />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
