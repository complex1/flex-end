<template>
  <div class="updatePassword">
    <div class="updatePassword-form">
      Old Password: <input type="password" v-model="oldPassword" name="password" placeholder="Password" />
      <br>
      Password: <input type="password" v-model="newPassword" name="password" placeholder="Password" />
      <br>
      <button @click="updatePassword" >updatePassword</button>
    </div>
  </div>
</template>

<script>
import { updatePassword } from '@/api'
export default {
  name: 'updatePassword',
  data () {
    return {
      oldPassword: '',
      newPassword: ''
    }
  },
  methods: {
    updatePassword () {
      updatePassword({
        oldPassword: this.oldPassword, newPassword: this.newPassword
      })
    }
  }
}
</script>

<style lang="scss" scoped >
.updatePassword {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .updatePassword-form {
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
