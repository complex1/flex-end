<template>
  <div class="login">
    <div class="login-form">
      Email: <input type="text" v-model="email" name="email" placeholder="Email" />
      <br>
      Password: <input type="password" v-model="password" name="password" placeholder="Password" />
      <br>
      <button @click="login" >login</button>
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/api'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      loginUser({
        email: this.email, password: this.password
      })
    }
  }
}
</script>

<style lang="scss" scoped >
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login-form {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px #ccc;
    & br {
      margin: 10px 0;
    }
  }
}
</style>
