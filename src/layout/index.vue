<template>
  <div>
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppMain, Sidebar } from './components'

@Component({
  name: 'Layout',
  components: {
    AppMain,
    Sidebar
  }
})
export default class Layout extends Vue {}
</script>

<style lang="less" scope>
.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 200px;
  position: relative;
}

.sidebar-container {
  transition: width 0.28s;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
</style>
