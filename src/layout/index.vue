<template>
  <div>
    <AppMain />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppMain } from './components'

@Component({
  name: 'Layout',
  components: {
    AppMain,
  },
})
export default class Layout extends Vue {}
</script>

<style lang="less" scope></style>
