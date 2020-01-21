<template>
  <div class="p-3 bg-white rounded-lg shadow-lg m-2">
    <slot name="header" v-if="!handler">
      <p class="text-sm text-gray-600 font-bold">
        {{ title }}
      </p>
    </slot>
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    handler: {
      required: true
    }
  }
}
</script>
