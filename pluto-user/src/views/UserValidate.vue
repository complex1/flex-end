<template>
  <div>loading</div>
</template>

<script>
import { validateUser } from '@/api'
export default {
  mounted () {
    const token = this.$route.query.token
    validateUser(token)
  }
}
</script>

<style>

</style>
