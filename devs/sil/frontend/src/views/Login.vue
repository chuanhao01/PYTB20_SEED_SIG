<template>
  <div class="login">
    <div class="card">
      <form action="#" method="post">
        <!-- <div class="form-group">
          <label for="l-name">Name</label>
          <input type="text" name="l-name" id="l-name" placeholder="Name" />
        </div>-->
        <div class="form-group">
          <label for="l-email">Email</label>
          <input type="email" Email="l-email" id="l-email" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="l-password">Password</label>
          <input type="password" name="l-password" id="l-password" placeholder="Password" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style lang="scss" scoped>
.login {
  width: 50%;
  .form-group {
    padding: 1rem;
    // display: flex;
    // flex-direction: column;
    label {
      display: block;
    }
    input {
      outline: none;
      width: 0%;
      height: 2rem;
      padding-left: 15px;
      padding-right: -15px;
      border-radius: 20px;
      margin-top: 20px;
      background: rgba(255, 255, 255, 0.5);
      width: 100%;
      border: 1px solid #a1c5f1;
    }
  }
}
</style>