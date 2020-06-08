<template>
  <div v-if="!item.hidden&&item.children"
       class="menu-wrapper">
    <el-submenu :index="resolvePath(item.path)"
                popper-append-to-body>
      <template slot="title">
        <svg-icon v-if="item.meta && item.meta.icon"
                  :name="item.meta.icon" />
        <span v-if="item.meta && item.meta.title"
              slot="title">{{ $t('route.' + item.meta.title) }}</span>
      </template>
      <template v-if="item.children">
        <sidebar-item v-for="child in item.children"
                      :key="child.path"
                      :item="child"
                      :is-first-level="false"
                      :base-path="resolvePath(child.path)"
                      class="nest-menu" />
      </template>
    </el-submenu>
  </div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import path from 'path'
  import {  RouteConfig } from 'vue-router'
  import { isExternal } from '@/utils/validate'
  @Component({
    name: 'SidebarItem'
  })
  export default class Sidebartem extends Vue {
    @Prop({ required: true }) private item!: RouteConfig
    private resolvePath(routePath: string) {
      if (isExternal(routePath)) {
        return routePath
      }
      return path.resolve(routePath)
    }
  }
</script>


<style lang="less" scope>
</style>