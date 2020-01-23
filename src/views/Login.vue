<template>
  <div
    class="login-bg h-screen w-full flex items-center justify-center"
    :class="loginType ? 'yw' : 'bl'"
  >
    <div
      class="w-11/12 h-auto sm:w-2/3 md:w-2/4 lg:w-4/12 xl:w-96 bg-white rounded-lg shadow-2xl py-8 px-4"
    >
      <LoginForm :type="loginType">
        <template #footer>
          <div class="mt-2 text-center text-sm text-gray-500">
            <div v-if="loginType">
              아이디가 없으시다면
              <a
                class="underline cursor-pointer"
                @click="loginType = !loginType"
                >회원가입</a
              >을 해주세요.
            </div>
            <div v-else>
              회원가입을 하셨다면
              <a
                class="underline cursor-pointer"
                @click="loginType = !loginType"
                >로그인</a
              >
              하러가기!
            </div>
          </div>
        </template>
      </LoginForm>
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  data() {
    return {
      loginType: true
    }
  },
  components: {
    LoginForm: () => import('@/components/ui/LoginForm')
  },
  created() {
    console.log(firebase.auth())
  }
}
</script>

<style lang="postcss" scoped>
.login-bg {
  transition: all 0.75s ease-in-out;
  background-attachment: fixed;
  background-size: cover;
}
.login-bg.yw {
  background-color: #ffff99;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1000 1000'%3E%3Cg fill='%23ffd876'%3E%3Cpolygon points='1000 -50 0 -50 500 450'/%3E%3Cpolygon points='550 500 1050 1000 1050 0'/%3E%3Cpolygon points='-50 0 -50 1000 450 500'/%3E%3Cpolygon points='0 1050 1000 1050 500 550'/%3E%3C/g%3E%3Cg fill='%23ffb053'%3E%3Cpolygon points='1000 -133.3 0 -133.3 500 366.7'/%3E%3Cpolygon points='633.3 500 1133.3 1000 1133.3 0'/%3E%3Cpolygon points='-133.3 0 -133.3 1000 366.7 500'/%3E%3Cpolygon points='0 1133.3 1000 1133.3 500 633.3'/%3E%3C/g%3E%3Cg fill='%23ff862f'%3E%3Cpolygon points='1000 -216.7 0 -216.7 500 283.3'/%3E%3Cpolygon points='716.7 500 1216.7 1000 1216.7 0'/%3E%3Cpolygon points='-216.7 0 -216.7 1000 283.3 500'/%3E%3Cpolygon points='0 1216.7 1000 1216.7 500 716.7'/%3E%3C/g%3E%3Cg fill='%23F50'%3E%3Cpolygon points='1000 -300 0 -300 500 200'/%3E%3Cpolygon points='800 500 1300 1000 1300 0'/%3E%3Cpolygon points='-300 0 -300 1000 200 500'/%3E%3Cpolygon points='0 1300 1000 1300 500 800'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='%23FE0' points='0 707.1 0 292.9 292.9 0 707.1 0 1000 292.9 1000 707.1 707.1 1000 292.9 1000'/%3E%3Cg fill='%23ffcc00'%3E%3Cpolygon points='464.6 -242.5 -242.5 464.6 464.6 464.6'/%3E%3Cpolygon points='535.4 464.6 1242.5 464.6 535.4 -242.5'/%3E%3Cpolygon points='-242.5 535.4 464.6 1242.5 464.6 535.4'/%3E%3Cpolygon points='535.4 1242.5 1242.5 535.4 535.4 535.4'/%3E%3C/g%3E%3Cg fill='%23ffa800'%3E%3Cpolygon points='405.7 -301.4 -301.4 405.7 405.7 405.7'/%3E%3Cpolygon points='594.3 405.7 1301.4 405.7 594.3 -301.4'/%3E%3Cpolygon points='-301.4 594.3 405.7 1301.4 405.7 594.3'/%3E%3Cpolygon points='594.3 1301.4 1301.4 594.3 594.3 594.3'/%3E%3C/g%3E%3Cg fill='%23ff8200'%3E%3Cpolygon points='346.8 -360.3 -360.3 346.8 346.8 346.8'/%3E%3Cpolygon points='653.2 346.8 1360.3 346.8 653.2 -360.3'/%3E%3Cpolygon points='-360.3 653.2 346.8 1360.3 346.8 653.2'/%3E%3Cpolygon points='653.2 1360.3 1360.3 653.2 653.2 653.2'/%3E%3C/g%3E%3Cg fill='%23F50'%3E%3Cpolygon points='287.9 -419.2 -419.2 287.9 287.9 287.9'/%3E%3Cpolygon points='712.1 287.9 1419.2 287.9 712.1 -419.2'/%3E%3Cpolygon points='-419.2 712.1 287.9 1419.2 287.9 712.1'/%3E%3Cpolygon points='712.1 1419.2 1419.2 712.1 712.1 712.1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.login-bg.bl {
  background-color: #72e5ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1000 1000'%3E%3Cg fill='%236ebcff'%3E%3Cpolygon points='1000 -50 0 -50 500 450'/%3E%3Cpolygon points='550 500 1050 1000 1050 0'/%3E%3Cpolygon points='-50 0 -50 1000 450 500'/%3E%3Cpolygon points='0 1050 1000 1050 500 550'/%3E%3C/g%3E%3Cg fill='%236293ff'%3E%3Cpolygon points='1000 -133.3 0 -133.3 500 366.7'/%3E%3Cpolygon points='633.3 500 1133.3 1000 1133.3 0'/%3E%3Cpolygon points='-133.3 0 -133.3 1000 366.7 500'/%3E%3Cpolygon points='0 1133.3 1000 1133.3 500 633.3'/%3E%3C/g%3E%3Cg fill='%23496bff'%3E%3Cpolygon points='1000 -216.7 0 -216.7 500 283.3'/%3E%3Cpolygon points='716.7 500 1216.7 1000 1216.7 0'/%3E%3Cpolygon points='-216.7 0 -216.7 1000 283.3 500'/%3E%3Cpolygon points='0 1216.7 1000 1216.7 500 716.7'/%3E%3C/g%3E%3Cg fill='%230040ff'%3E%3Cpolygon points='1000 -300 0 -300 500 200'/%3E%3Cpolygon points='800 500 1300 1000 1300 0'/%3E%3Cpolygon points='-300 0 -300 1000 200 500'/%3E%3Cpolygon points='0 1300 1000 1300 500 800'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='%2302b3ff' points='0 707.1 0 292.9 292.9 0 707.1 0 1000 292.9 1000 707.1 707.1 1000 292.9 1000'/%3E%3Cg fill='%232798ff'%3E%3Cpolygon points='464.6 -242.5 -242.5 464.6 464.6 464.6'/%3E%3Cpolygon points='535.4 464.6 1242.5 464.6 535.4 -242.5'/%3E%3Cpolygon points='-242.5 535.4 464.6 1242.5 464.6 535.4'/%3E%3Cpolygon points='535.4 1242.5 1242.5 535.4 535.4 535.4'/%3E%3C/g%3E%3Cg fill='%232c7cff'%3E%3Cpolygon points='405.7 -301.4 -301.4 405.7 405.7 405.7'/%3E%3Cpolygon points='594.3 405.7 1301.4 405.7 594.3 -301.4'/%3E%3Cpolygon points='-301.4 594.3 405.7 1301.4 405.7 594.3'/%3E%3Cpolygon points='594.3 1301.4 1301.4 594.3 594.3 594.3'/%3E%3C/g%3E%3Cg fill='%23245fff'%3E%3Cpolygon points='346.8 -360.3 -360.3 346.8 346.8 346.8'/%3E%3Cpolygon points='653.2 346.8 1360.3 346.8 653.2 -360.3'/%3E%3Cpolygon points='-360.3 653.2 346.8 1360.3 346.8 653.2'/%3E%3Cpolygon points='653.2 1360.3 1360.3 653.2 653.2 653.2'/%3E%3C/g%3E%3Cg fill='%230040ff'%3E%3Cpolygon points='287.9 -419.2 -419.2 287.9 287.9 287.9'/%3E%3Cpolygon points='712.1 287.9 1419.2 287.9 712.1 -419.2'/%3E%3Cpolygon points='-419.2 712.1 287.9 1419.2 287.9 712.1'/%3E%3Cpolygon points='712.1 1419.2 1419.2 712.1 712.1 712.1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
