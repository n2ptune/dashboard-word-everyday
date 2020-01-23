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
/* vue */
.logo1 {
  background-image: url('~@/assets/bubble/vue.svg');
}
.logo2 {
  background-image: url('~@/assets/bubble/nuxt.svg');
}
.logo3 {
  background-image: url('~@/assets/bubble/firebase.svg');
}
.logo4 {
  background-image: url('~@/assets/bubble/react.svg');
}
.logo5 {
  background-image: url('~@/assets/bubble/svelte.png');
}
.logo6 {
  background-image: url('~@/assets/bubble/tailwindcss.svg');
}
.logo7 {
  background-image: url('~@/assets/bubble/nodejs.svg');
}
.logo8 {
  background-image: url('~@/assets/bubble/sass.svg');
}
.logo9 {
  background-image: url('~@/assets/bubble/vuetify.svg');
}
.logo10 {
  background-image: url('~@/assets/bubble/webpack.svg');
}
.logo11 {
  background-image: url('~@/assets/bubble/express.svg');
}
.logo12 {
  background-image: url('~@/assets/bubble/mysql.svg');
}
.logo13 {
  background-image: url('~@/assets/bubble/es6.svg');
}
.logo14 {
  background-image: url('~@/assets/bubble/css.svg');
}
.logo15 {
  background-image: url('~@/assets/bubble/html5.svg');
}
.logo16 {
  background-image: url('~@/assets/bubble/photoshop-cc.svg');
}
.logo17 {
  background-image: url('~@/assets/bubble/nextjs.svg');
}
.logo18 {
  background-image: url('~@/assets/bubble/javascript.svg');
}
.logo19 {
  background-image: url('~@/assets/bubble/babel.svg');
}
.logo20 {
  background-position: -770px -308px;
}
.logo21 {
  background-position: -924px -308px;
}
.logo22 {
  background-position: 0 -462px;
}
.logo23 {
  background-position: -154px -462px;
}
.logo24 {
  background-position: -308px -462px;
}
.logo25 {
  background-position: -462px -462px;
}
.logo26 {
  background-position: -616px -462px;
}
.logo27 {
  background-position: -770px -462px;
}
.logo28 {
  background-position: -924px -462px;
}
.logo29 {
  background-position: 0 -616px;
}
.logo30 {
  background-position: -154px -616px;
}
.logo31 {
  background-position: -308px -616px;
}
.logo32 {
  background-position: -462px -616px;
}
.logo33 {
  background-position: -616px -616px;
}
</style>
