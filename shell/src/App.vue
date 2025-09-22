<template>
  <div>
    <!-- Menú fijo -->
    <nav>
      <button @click="currentView = 'Accounts'">Accounts</button>
      <button @click="currentView = 'Movements'">Movements</button>
      <button @click="currentView = 'Transactions'">Transactions</button>
      <button @click="openModal()">User preferences</button>
    </nav>

    <!-- Contenedor para mostrar el componente seleccionado -->
    <div class="content">
      <Accounts v-if="currentView === 'Accounts'" />
      <Movements v-else-if="currentView === 'Movements'" />
      <Transactions v-else-if="currentView === 'Transactions'" />
    </div>

    <!-- Modal -->
    <div v-if="modalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <UserPreferences />
        <button class="close-modal" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentView = ref('Accounts');
const modalVisible = ref(false);

function openModal() {
  modalVisible.value = true;
}

function closeModal() {
  modalVisible.value = false;
}

</script>

<style scoped>
nav {
  background-color: #f8f8f8;
  padding: 10px;
}

button {
  margin-right: 10px;
}

.content {
  margin-top: 20px;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  width: 50vw;
  background: white;
  padding: 20px;
  border-radius: 5px;
}

.close-modal {
  width: 100px;
  margin-top: 10px;
  margin-inline: auto;
}
</style>
