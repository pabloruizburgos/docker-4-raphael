<template>
  <div class="user-preferences-form">
    <h2>User preferences</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input
          id="name"
          type="text"
          v-model="form.name"
          :disabled="!isEditable"
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          id="email"
          type="email"
          v-model="form.email"
          :disabled="!isEditable"
        />
      </div>
      <div>
        <label for="language">Language:</label>
        <select
          id="language"
          v-model="form.language"
          :disabled="!isEditable"
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>
      <div style="margin-top: 1rem;">
        <CustomButton
          id="editBtn"
          :enabled="true"
          :label="labelButton"
          :onClick="toggleEdit"
        />
        <CustomButton
          id="editBtn"
          :enabled="isEditable"
          label="Save"
          :onClick="submitForm"
        />        
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, ref, computed } from 'vue';

export default {
  name: 'UserPreferencesForm',
  setup() {
    const isEditable = ref(false);

    const form = reactive({
      name: 'Álvaro Cogolludo',
      email: 'alvaro.COGOLLUDO@mad-eri.es',
      language: 'es',
    });

    const labelButton = computed(() => {
      return isEditable ? 'Disable' : 'Edit';
    })
    const toggleEdit = () => {
      isEditable.value = !isEditable.value;
    };

    const submitForm = () => {
      alert(`Saved data:\n${JSON.stringify(form, null, 2)}`);
      isEditable.value = false;
    };

    return {
      form,
      labelButton,
      isEditable,
      toggleEdit,
      submitForm,
    };
  },
};
</script>

<style scoped>
.user-preferences-form {
  max-width: 400px;
  margin: auto;
}
label {
  display: block;
  margin-top: 10px;
}
input,
select {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
}
button {
  margin-right: 10px;
}
</style>
