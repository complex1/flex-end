<template>
  <div class="popover">
    <h1>Popover</h1>
    <p>Popover is a component that can be used to display a popover on top of other elements.</p>
    <p>It is a wrapper around the</p>
    <div class="flex flex-wrap">
    <popover placement="left" >
      <template v-slot:trigger>
        <button class="btn-1 m-3" >Popover Left</button>
      </template>
      <template v-slot:content>
        <div>Popover content</div>
      </template>
    </popover>
    
    <popover placement="top" >
      <template v-slot:trigger>
        <button class="btn-1 m-3" >Popover Top</button>
      </template>
      <template v-slot:content>
        <div>Popover content</div>
      </template>
    </popover>
    <popover placement="bottom" >
      <template v-slot:trigger>
        <button class="btn-1 m-3" >Popover Bottom</button>
      </template>
      <template v-slot:content>
        <div>Popover content</div>
      </template>
    </popover>
    <popover placement="right" >
      <template v-slot:trigger>
        <button class="btn-1 m-3" >Popover Right</button>
      </template>
      <template v-slot:content>
        <div>Popover content</div>
      </template>
    </popover>
    </div>
    <h2 class="mt-10">Props</h2>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>trigger</td>
            <td>String</td>
            <td>click</td>
            <td>Trigger to show popover. Can be click or hover</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>String</td>
            <td>top</td>
            <td>Placement of popover. Can be top, bottom, left, right, top-left, top-right, bottom-left, bottom-right, left-top, left-bottom, right-top, right-bottom</td>
          </tr>
          <tr>
            <td>defaultBackground</td>
            <td>Boolean</td>
            <td>true</td>
            <td>Whether to use default background color or not</td>
          </tr>
          <tr>
            <td>closeOnClickOutside</td>
            <td>Boolean</td>
            <td>true</td>
            <td>Whether to close popover on clicking outside of it</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import popover from '@/pluto-ui/component/popover.vue'
export default {
  components: { popover },
}
</script>

<style scoped lang="scss" >
table {
  width: 100%;
  font-size: 12px;
  border-collapse: collapse;
  tr {
    border-bottom: 1px solid #e0e0e0;
    td,th {
      padding: 10px;
      text-align: left;
    }
  }
}
</style>