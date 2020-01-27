<template>
  <div class="font-display">
    <div class="root" v-if="!$route.meta.loginLayout">
      <SideBar />
      <Header />
      <router-view class="ml-56 bg-gray-200 h-screen overflow-y-auto pt-16" />
    </div>
    <div class="login-layout-root" v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    SideBar: () => import('@/components/layout/SideBar'),
    Header: () => import('@/components/layout/Header')
  },
  computed: mapState(['isViewSidebar'])
}
</script>
