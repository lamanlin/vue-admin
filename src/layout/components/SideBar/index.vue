<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :show-timeout="200"
               :default-active="$route.path"
               mode="vertical"
               background-color="#304156"
               text-color="#bfcbd9"
               active-text-color="#409EFF">
        <sidebar-item v-for="route in routes"
                      :key="route.name"
                      :item="route"
                      :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import SidebarItem from './SidebarItem.vue'
  import { PermissionModule } from '@/store/modules/permission'
  @Component({
    name: 'sidebar',
    components: {
      SidebarItem
    }
  })
  export default class SideBar extends Vue {
    get routes() {
      return PermissionModule
    }
  }
</script>

<style lang="less" scope></style>
