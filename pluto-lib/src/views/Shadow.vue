<template>
  <div class="shadow" >
    <div class="shadow-box t-fs-2" v-for="i in 4" :key="i" :class="`shadow-${i}`">
      {{`shadow-${i}`}}
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.shadow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.shadow-box {
  width: 100px;
  height: 100px;
  background-color: var(--c-10);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px
}
</style>