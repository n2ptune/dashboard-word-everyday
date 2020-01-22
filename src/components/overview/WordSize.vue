<template>
  <Content
    :title="type === 'used' ? 'Used Word Size' : 'Word Size'"
    :handler="!handler"
    class="w-56 h-32"
  >
    <ContentLoading :handler="!handler" />
    <div class="flex h-full items-center pb-6" v-if="handler">
      <div class="mx-auto text-xl font-bold">{{ wordSizeWithComma }}개</div>
    </div>
  </Content>
</template>

<script>
import base from '@/helpers/base-url'
import numberComma from '@/helpers/number-comma'
import ContentComponent from '@/mixins/ContentComponent'

export default {
  data() {
    return {
      handler: false,
      wordSize: 0
    }
  },
  props: ['type'],
  computed: {
    wordSizeWithComma() {
      return numberComma(this.wordSize)
    }
  },
  mixins: [ContentComponent],
  async created() {
    try {
      const url =
        this.type === 'used' ? '/management/used-count' : 'management/count'
      const { data } = await this.axios.get(url, {
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
