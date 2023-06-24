<template>
  <div>
    <button class="btn-1" v-tooltip.top="'hello'" >This is for tooltip</button>
    <button class="btn-1" v-tooltip.left="'hello'" >This is for tooltip</button>
    <button class="btn-1" v-tooltip.right="'hello'" >This is for tooltip</button>
    <button class="btn-1" v-tooltip.bottom="'hello'" >This is for tooltip</button>
  </div>
</template>

<script>
import { Tooltip } from '../pluto-ui/directive/tooltip'
export default {
  name: 'Tooltip',
  directives: {
    Tooltip
  }
}
</script>

<style scoped>
button {
  margin: 10px;
}
</style>