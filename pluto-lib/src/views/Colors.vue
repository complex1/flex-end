<template>
  <div>
    <h1>Colors</h1>
    <div class="colors">
      <div class="color" v-for="i in 10" :key="i" :class="`bg-c-${i} t-c-${i < 5 ? 10 : 1}`">
        <div class="color__name">{{ '--c-' + i }}</div>
        <div class="color__class">{{'bg-c-' + i}}</div>
      </div>
    </div>
    <div class="colors">
      <div class="color bg-c-red">
        <div class="color__name">{{ '--c-red'}}</div>
        <div class="color__class">{{'bg-c-red'}}</div>
      </div>
      <div class="color bg-c-green">
        <div class="color__name">{{ '--c-green'}}</div>
        <div class="color__class">{{'bg-c-green'}}</div>
      </div>
      <div class="color bg-c-yellow">
        <div class="color__name">{{ '--c-yellow'}}</div>
        <div class="color__class">{{'bg-c-yellow'}}</div>
      </div>
      <div class="color bg-c-blue">
        <div class="color__name">{{ '--c-blue'}}</div>
        <div class="color__class">{{'bg-c-blue'}}</div>
      </div>
    </div>
    <h1>Text</h1>
    <div class="colors">
      <div class="color" v-for="i in 10" :key="i" :class="`t-c-${i} bg-c-${i < 5 ? 10 : 1}`">
        <div class="color__name">{{ '--c-' + i }}</div>
        <div class="color__class">{{'t-c-' + i}}</div>
      </div>
    </div>
    <div class="colors">
      <div class="color t-c-red">
        <div class="color__name">{{ '--c-red'}}</div>
        <div class="color__class">{{'t-c-red'}}</div>
      </div>
      <div class="color t-c-green">
        <div class="color__name">{{ '--c-green'}}</div>
        <div class="color__class">{{'t-c-green'}}</div>
      </div>
      <div class="color t-c-yellow">
        <div class="color__name">{{ '--c-yellow'}}</div>
        <div class="color__class">{{'t-c-yellow'}}</div>
      </div>
      <div class="color t-c-blue">
        <div class="color__name">{{ '--c-blue'}}</div>
        <div class="color__class">{{'t-c-blue'}}</div>
      </div>
    </div>
    <h1>Text Size</h1>
    <div class="">
      <div v-for="i in 8" :key="i" :class="`t-fs-${i}`" >
        look at me, I'm a text with size t-fs-{{i}}
      </div>
    </div>
    <h1>Font Weight</h1>
    <div class="">
      <div v-for="i in 7" :key="i" :class="`t-fw-${i}`" >
        look at me, I'm a text with weight t-fw-{{i}}
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.colors {
  display: flex;
  flex-wrap: wrap;
  .color {
    width: 100px;
    height: 100px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: var(--border-radius-4);
    .color__name, .color__class {
      font-size: 12px;
    }
  }
}
</style>