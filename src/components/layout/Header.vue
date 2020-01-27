<template>
  <div
    class="fixed flex items-center ml-56 top-0 shadow bg-white w-full h-12 flex-wrap flex-column px-3"
  >
    <div class="ml-auto mr-56">{{ userID }} 님</div>
  </div>
</template>

<script>
/**
 * @Todo Connect profile route when click userID
 */
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userID: 'auth/getUserID'
    })
  }
}
</script>
