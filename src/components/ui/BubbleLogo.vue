<template>
  <div
    class="bubble-wrapper absolute z-100 w-full bg-transparent overflow-hidden"
  >
    <div class="bubbles relative"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    import('@/helpers/bubble-class')
  }
}
</script>

<style lang="postcss">
.bubble-wrapper {
  height: 600px;
}
.bubble {
  position: absolute;
  width: 152px;
  height: 152px;
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: white;
  @apply shadow-2xl;
}
</style>
