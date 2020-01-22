<template>
  <Content title="Add Word" class="w-84 h-32">
    <div class="h-full my-5">
      <input
        type="text"
        placeholder="등록시킬 단어를 입력하세요."
        @input="wordChange"
        @keydown.enter="executeToWord"
        v-model="word"
        class="text-sm text-center bg-gray-300 border-2 border-gray-300 rounded-lg w-full focus:outline-none py-1 px-2"
      />
      <div class="text-gray-500 text-sm mt-2 text-center">
        {{ textWordState }}
      </div>
    </div>
  </Content>
</template>

<script>
import base from '@/helpers/base-url'
import ContentComponent from '@/mixins/ContentComponent'

export default {
  data() {
    return {
      word: '',
      wordState: null
    }
  },
  computed: {
    textWordState() {
      return this.wordState
        ? '단어가 풀에 등록되었습니다.'
        : this.wordState === null
        ? '등록 대기중'
        : `${this.word}는 이미 있는 단어입니다.`
    }
  },
  mixins: [ContentComponent],
  methods: {
    async executeToWord(event) {
      // vaildate word
      const { data: vaildateResult } = await this.axios.get(
        `/management/vaildate/${this.word}`,
        {
          baseURL: base.url
        }
      )
      if (vaildateResult['status'] === 'fail') {
        event.target.classList.add('fail-vaildate')
        this.wordState = false
      } else {
        /**
         * @future Must send user status
         */
        const { data: addToFoolResult } = await this.axios(
          '/management/add/waiting',
          {
            method: 'POST',
            baseURL: base.url,
            data: {
              optionCode: 1,
              word: this.word,
              /** @test createdBy **/
              createdBy: 'n2ptune@outlook.com'
            }
          }
        )
        if (addToFoolResult['status'] === 'pass') {
          this.wordState = true
          this.word = ''
        }
      }
    },
    wordChange(event) {
      this.wordState = null
      event.target.classList.remove('fail-vaildate')
    }
  }
}
</script>

<style lang="postcss" scoped>
.fail-vaildate {
  @apply border-red-500;
}
</style>
