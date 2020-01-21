<template>
  <Content :title="'Word Size'" :handler="!handler" class="w-56 h-32">
    <ContentLoading class="m-auto" :handler="!handler" />
    <div class="flex h-full items-center pb-6" v-if="handler">
      <div class="mx-auto text-xl font-bold">{{ wordSizeWithComma }}개</div>
    </div>
  </Content>
</template>

<script>
import base from '@/helpers/base-url'
import numberComma from '@/helpers/number-comma'

export default {
  data() {
    return {
      handler: false,
      wordSize: 0
    }
  },
  computed: {
    wordSizeWithComma() {
      return numberComma(this.wordSize)
    }
  },
  components: {
    Content: () => import('@/components/ui/Content'),
    ContentLoading: () => import('@/components/ui/ContentLoading')
  },
  async created() {
    try {
      const { data } = await this.axios.get('/management/count', {
        baseURL: base.url
      })
      this.handler = true
      this.wordSize = data.count
    } catch (e) {
      // console.error(e)
      // @TODO Error handle
    }
  }
}
</script>
