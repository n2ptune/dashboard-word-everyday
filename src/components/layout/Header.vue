<template>
  <div
    class="fixed flex items-center ml-0 md:ml-56 top-0 shadow bg-white w-full h-12 flex-wrap flex-column"
    :class="isViewSidebar ? '' : 'ml-f0'"
  >
    <div class="px-3">
      <font-awesome-icon
        :icon="isViewSidebar ? 'arrow-left' : 'arrow-right'"
        @click="handleViewSidebar"
        class="cursor-pointer text-gray-600 hover:text-gray-900"
      />
    </div>
    <div class="text-gray-600 text-lg">Dashboard Word-Everyday</div>
    <div class="ml-auto" :class="isViewSidebar ? 'mr-60' : 'mr-2'"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: mapMutations(['handleViewSidebar']),
  computed: mapState(['isViewSidebar'])
}
</script>
