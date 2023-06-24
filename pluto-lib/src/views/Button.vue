<template>
  <div class="button t-fs-1">
    <h1>Button</h1>
    <p>Button component</p>
    <div class="button-group">
      <button v-for="i in 9" :key="i" :class="`btn-${i}`" >
        {{`btn-${i}`}}
      </button>
      <button class="btn-red" > btn-red</button>
      <button class="btn-green" > btn-green</button>
      <button class="btn-blue" > btn-blue</button>
      <button class="btn-yellow" > btn-yellow</button>
    </div>
    <div class="button-group">
      <button v-for="i in 9" :key="i" :class="`btn-${i} btn-outline-${i}`" >
        {{`btn-outline-${i}`}}
      </button>
      <button class="btn-red btn-outline-red" > btn-outline-red</button>
      <button class="btn-green btn-outline-green" > btn-outline-green</button>
      <button class="btn-blue btn-outline-blue" > btn-outline-blue</button>
      <button class="btn-yellow btn-outline-yellow" > btn-outline-yellow</button>
    </div>
    <div class="button-group">
      <button disabled v-for="i in 9" :key="i" :class="`btn-${i}`" >
        {{`btn-${i}`}}
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.button-group > button {
  margin: 10px;
}
</style>