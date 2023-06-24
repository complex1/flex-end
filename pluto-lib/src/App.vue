<template>
  <div id="app" >
    <div class="sidebar">
      <div class="mode-switch flex justify-between">
        <span>Dark Mode</span>
        <input type="checkbox" v-model="dark"  @change="toggleMode" />
      </div>
      <router-link to="/">Home</router-link>
      <router-link to="/colors">Colors</router-link>
      <router-link to="/shadow">Shadow</router-link>
      <router-link to="/button">Button</router-link>
      <router-link to="/input">Input</router-link>
      <router-link to="/tooltip">Tooltip</router-link>
      <router-link to="/popover">Popover</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import { toggleMode } from '@/pluto-ui/utils/setMode.js'
export default {
  name: 'App',
  data () {
    return {
      dark: false
    }
  },
  methods: {
    toggleMode() {
      toggleMode()
    }
  },
  mounted() {
    toggleMode()
    this.dark = localStorage.getItem('mode') === 'dark'
  }
}
</script>
<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  .sidebar {
    width: 200px;
    height: 100%;
    padding: 20px;
    border-right: var(--border-1);
    background-color: var(--white);
    a {
      display: block;
      margin-bottom: 10px;
      color: var(--c-5);
      text-decoration: none;
      &:hover {
        color: var(--c-3);
      }
    }
  }
  .container {
    flex: 1;
    height: 100%;
    padding: 20px;
    overflow: auto;
  }
}
</style>
