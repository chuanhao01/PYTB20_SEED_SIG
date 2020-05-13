<template>
  <div class="swal-overlay swal-overlay--show-modal" tabindex="-1">
    <div class="swal-modal" role="dialog" aria-modal="true">
      <div class="swal-icon swal-icon--warning">
        <span class="swal-icon--warning__body">
          <span class="swal-icon--warning__dot"></span>
        </span>
      </div>
      <div class="swal-title" style>Are you sure?</div>
      <div class="swal-text" style>You won't be able to revert this!</div>
      <div class="swal-footer">
        <div class="swal-button-container">
          <button class="swal-button swal-button--cancel btn btn-danger">Cancel</button>

          <div class="swal-button__loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="swal-button-container">
          <button class="swal-button swal-button--confirm btn btn-primary">OK</button>

          <div class="swal-button__loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>