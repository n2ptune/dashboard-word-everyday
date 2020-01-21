<template>
  <div v-if="handler">
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
