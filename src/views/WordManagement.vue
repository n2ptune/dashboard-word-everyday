<template>
  <div>
    <DefaultRouterStyle>
      <Add />
    </DefaultRouterStyle>
  </div>
</template>

<script>
export default {
  components: {
    DefaultRouterStyle: () => import('@/components/layout/DefaultRouterStyle'),
    Add: () => import('@/components/management/Add')
  }
}
</script>
