<template>
  <div class="register">
    <div class="register-form">
      <h2>Register User</h2>
      Name: <input type="text" v-model="name" name="name" placeholder="Name" />
      <br>
      Email: <input type="text" v-model="email" name="email" placeholder="Email" />
      <br>
      Password: <input type="password" v-model="password" name="password" placeholder="Password" />
      <br>
      <button @click="register" >Register</button>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api'
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      registerUser({
        name: this.name, email: this.email, password: this.password
      })
    }
  }
}
</script>

<style lang="scss" scoped >
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .register-form {
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
