<template>
  <aside class="fixed h-screen left-0 top-0 w-56 bg-gray-800">
    <div class="text-white text-center my-2">
      Todo//Login Status
    </div>
    <div class="relative mt-3">
      <ul>
        <li
          v-for="route in routes"
          :key="route.title"
          class="route-li hover:bg-gray-700 text-gray-100 cursor-pointer my-2"
        >
          <router-link
            :to="route.to"
            active-class="active"
            exact-active-class="exact-active"
            class="route block py-2 px-4"
          >
            <font-awesome-icon
              v-if="route.icon"
              :icon="route.icon"
              :style="{ marginRight: '3px' }"
            />
            {{ route.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          title: '홈',
          to: '/',
          icon: 'home'
        },
        {
          title: '단어 추가',
          to: '/word',
          icon: 'edit'
        }
      ]
    }
  }
}
</script>

<style scoped>
.route.acitve,
.route.exact-active {
  @apply text-green-400;
}
</style>
