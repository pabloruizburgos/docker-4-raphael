
<script setup>
  /* */
</script>

<template>

  <div class="container">
    <div class="row mrgt">
      <div class="col-md-12">

        <h2>Account creation</h2>

        <form>

          <div class="mb-3">
            <label for="email" class="form-label fw-bold">Number:</label>
            <input type="email" class="form-control" id="email" aria-describedby="email" required>
            <div id="email" class="form-text">1500 1234 1500 9875</div>
          </div>

          <div class="mb-3">
            <label for="nya" class="form-label fw-bold">Type:</label>
            <input type="text" class="form-control" id="nya" required>
          </div>

          <div class="mb-3">
            <label for="direccion" class="form-label fw-bold">Currency</label>
            <input type="text" class="form-control" id="direccion" required>
          </div>

          <button type="submit" class="btn btn-primary">Save</button>

        </form>
        
      </div>
    </div>
  </div>
  
</template>

<style scoped>
  /* */
</style>
