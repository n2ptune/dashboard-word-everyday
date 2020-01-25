<template>
  <aside class="hidden md:block fixed h-screen left-0 top-0 w-56 bg-gray-800">
    <div class="relative mt-3">
      <ul>
        <li
          v-for="route in routes"
          :key="route.title"
          :class="
            route.hasOwnProperty('to') ? 'hover:bg-gray-700 cursor-pointer' : ''
          "
          class="bg-transparent my-1"
        >
          <router-link
            v-if="route.hasOwnProperty('to')"
            :to="route.to"
            :style="{ textDecoration: 'none' }"
            class="route block py-2 px-4 text-gray-100 text-sm font-bold"
          >
            <font-awesome-icon
              v-if="route.icon"
              :icon="route.icon"
              :style="{ marginRight: '3px' }"
            />
            {{ route.title }}
          </router-link>
          <div
            v-else
            class="text-left text-gray-500 font-bold text-sm ml-6 mt-3 mb-2"
          >
            {{ route.title }}
          </div>
        </li>
      </ul>
    </div>
    <div class="absolute bottom-0 text-white text-center m-3">
      Todo//Login Status
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          title: 'Overview',
          to: '/',
          icon: ['fab', 'elementor']
        },
        {
          title: 'Management'
        },
        {
          title: 'Word Management',
          to: '/word',
          icon: 'users-cog'
        },
        {
          title: 'Statistics'
        }
      ]
    }
  }
}
</script>

<style scoped>
.route.router-link-acitve,
.route.router-link-exact-active {
  @apply text-green-400;
  @apply bg-gray-700;
}
</style>
