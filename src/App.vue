<template>
  <div class="root font-display">
    <SideBar />
    <Header />
    <router-view
      class="ml-0 md:ml-56 bg-gray-200 h-screen overflow-y-auto pt-16"
      :class="isViewSidebar ? '' : 'ml-f0'"
    />
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
