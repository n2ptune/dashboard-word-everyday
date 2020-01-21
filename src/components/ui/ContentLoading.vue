<template>
  <div class="flex h-full items-center justify-center" v-if="handler">
    <loading-circle />
  </div>
</template>

<script>
import { Circle } from 'vue-loading-spinner'

export default {
  props: {
    handler: {
      required: true
    }
  },
  components: {
    'loading-circle': Circle
  }
}
</script>
