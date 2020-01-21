<template>
  <div>
    <DefaultRouterStyle>
      <WordSize />
      <WordSize type="used" />
    </DefaultRouterStyle>
  </div>
</template>

<script>
export default {
  components: {
    DefaultRouterStyle: () => import('@/components/layout/DefaultRouterStyle'),
    WordSize: () => import('@/components/overview/WordSize')
  }
}
</script>
