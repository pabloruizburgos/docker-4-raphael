<template>
  <button
    type="button"
    :id="id"
    :disabled="!enabled"
    @click="handleClick"
    class="custom-button"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    id: {
      type: String,
      required: true,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClick(event) {
      this.onClick(event);
    },
  },
};
</script>

<style scoped>
.custom-button {
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
}
.custom-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
