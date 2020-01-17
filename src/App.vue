<template>
  <div class="root font-display">
    <SideBar />
    <router-view class="ml-56 bg-gray-200 h-full" />
  </div>
</template>

<script>
export default {
  components: {
    SideBar: () => import('@/components/layout/SideBar')
  }
}
</script>
