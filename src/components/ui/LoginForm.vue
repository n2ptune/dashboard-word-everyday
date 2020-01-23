<template>
  <div class="flex flex-col z-10">
    <slot name="header">
      <div class="mx-auto text-gray-800 text-lg">
        이메일로 {{ textWithType }}하기
      </div>
    </slot>
    <slot name="default" />
    <slot name="body">
      <div class="title">Email</div>
      <input
        v-model="user.mail"
        type="text"
        placeholder="Enter your email"
        class="input"
        @keydown.enter="test"
      />
      <div class="title">Password</div>
      <input
        v-model="user.pw"
        type="password"
        placeholder="Enter your password"
        class="input mb-4"
        @keydown.enter="test"
      />
      <button
        type="submit"
        @click="test"
        class="py-3 focus:outline-none rounded-lg"
        :class="
          this.type
            ? 'bg-yellow-300 hover:bg-yellow-400'
            : 'bg-blue-300 hover:bg-blue-400'
        "
      >
        {{ textWithType }}
      </button>
    </slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: ['type'],
  data() {
    return {
      user: {
        mail: null,
        pw: null
      }
    }
  },
  computed: {
    textWithType() {
      return this.type ? '로그인' : '회원가입'
    }
  },
  methods: {
    test(event) {
      console.log(event, this.user.mail, this.user.pw, this.textWithType)
    }
  }
}
</script>

<style lang="postcss" scoped>
.title {
  @apply text-gray-500 mt-3 mb-1 pl-2;
}
.input {
  @apply rounded-lg bg-gray-200 text-gray-700 p-2;
}
.input:focus {
  outline: none;
}
</style>
